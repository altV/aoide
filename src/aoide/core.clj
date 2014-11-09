(ns aoide.core
  (:gen-class)
  (:require [clj-http.client :as client]
            [clojure.core.match :as match :refer (match)]
            [compojure.core           :refer :all]
            [compojure.route          :as      route]
            [compojure.handler        :refer   [site]]
            [ring.middleware.reload   :as      reload]
            [org.httpkit.server       :refer   [run-server]]
            [hiccup.core              :as      html]
            [clj-time.core            :as      t]
            [cheshire.core            :as      json]
            [me.raynes.conch          :refer   [programs       with-programs   let-programs]]
            [taoensso.sente           :as      sente]
            [clj-webdriver.taxi       :as      webdriver]))

(programs echo ls sleep grep git heroku)

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes app
  ;; (GET "/" (ring.util.response/redirect "index.html"))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (GET "/time" [] (html/html
                    [:div (str "tocnoe vremia: " (t/now))]))
  (route/resources "/"))
  

(defn in-dev? [& args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev? args)
                  (reload/wrap-reload (site #'app)) ;; only reload when dev
                  (site app))]
    (println "zerver shtarted.")
    (run-server handler {:port 3000})))


(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid (:uid session)
        [id data :as ev] event]
    (println (str event))))
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

; getting from example
(defonce chsk-router
  (sente/start-chsk-router-loop! event-msg-handler ch-chsk))

(add-watch connected-uids :her (fn [_ _ _ data] (println data)))
