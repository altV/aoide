(ns aoide.core
  (:gen-class)
  (:require [clj-http.client :as client]
            [clojure.core.match :as match :refer (match)]
            [compojure.core           :refer :all]
            [compojure.route          :as      route]
            [compojure.handler        :refer   [site]]
            [ring.util.response       :as      response]
            [ring.middleware.reload   :as      reload]
            [ring.middleware.defaults]
            [ring.middleware.anti-forgery :as ring-anti-forgery]
            [org.httpkit.server       :refer   [run-server]]
            [hiccup.core              :as      html]
            [clj-time.core            :as      t]
            [cheshire.core            :as      json]
            [me.raynes.conch          :refer   [programs       with-programs   let-programs]]
            [taoensso.sente           :as      sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [clj-webdriver.taxi       :as      webdriver]

            [aoide.stats :as my.s]
            [aoide.browsers :as my.b]))

(programs echo ls sleep grep git heroku)

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {:packer (sente-transit/get-flexi-packer :edn)})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes app
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (GET "/time" [] (html/html
                    [:div (str "tocnoe vremia: " (t/now))]))
  (route/resources "/"))
  

(defn in-dev? [& args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev? args)
                  (reload/wrap-reload (site #'app) {:dirs ["src" "target/classes"]}) ;; only reload when dev
                  (site app))]
    (println "zerver shtarted.")
    (run-server handler {:port 3000})))


(add-watch connected-uids :her (fn [_ _ _ data]
                                 ;; (println "We have a connection!" data)
                                 ;; (chsk-send! nil [:blah {:from "fuckof"} ])
                                 ))



(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid (:uid session)
        [id data :as ev] event]
    #_(println (str event))))
    ;; (match [id data]
    ;;        [:om-mouse/position data](do
    ;;                                   (logf "event(:om-mouse/position): %s" data)
    ;;                                   (broadcast-mouse data "move"))
    ;;        [:om-mouse/clear data](do
    ;;                                (logf "event(:om-mouse/clear): %s" data)
    ;;                                (broadcast-mouse data "out"))
    ;;        [:om-mouse/show data](do
    ;;                               (logf "event(:om-mouse/show): %s" data)
    ;;                               (broadcast-mouse data "over"))
    ;;        :else
    ;;        (do (logf "Unmatched event: %s" ev)
    ;;            (when-not (:dummy-reply-fn? (meta ?reply-fn))
    ;;              (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-msg-handler ch-chsk))

;; todo: https://groups.google.com/forum/#!topic/clojure/glMREmCB91U
(defn start-broadcaster! []
  (go-loop [i 0]
    (<! (async/timeout 1000))
    (doseq [uid (:any @connected-uids)]
      (chsk-send! uid
        [::msg (str (t/now))]))
    (recur (inc i))))


(defn broadcast-mouse [{:keys [uid x y]} type]
  (doseq [z (:any @connected-uids)]
    (if-not (= z uid) (do
                        (match [type]
                               ["move"]
                               (chsk-send! z [:om-mouse/broadcast {:from uid :x x :y y}])
                               ["over"]
                               (chsk-send! z [:om-mouse/show {:from uid}])
                               ["out"]
                               (chsk-send! z [:om-mouse/clear {:from uid}]))))))
