(ns aoide.core
  (:gen-class)
  (:require [clj-http.client :as client]
            [clojure.core.match :as match :refer (match)]
            [compojure.core           :refer :all]
            [compojure.route          :as      route]
            [compojure.handler        :refer   [site]]
            [ring.util.response       :as      response]
            [ring.middleware.reload   :as      reload]
            [ring.middleware.defaults :as      defaults]
            [ring.middleware.session  :as      session]
            [ring.middleware.session.cookie  :as cookie]
            [ring.middleware.anti-forgery :as ring-anti-forgery]
            [org.httpkit.server       :refer   [run-server]]
            [hiccup.core              :as      html]
            [clj-time.core            :as      t]
            [cheshire.core            :as      json]
            [me.raynes.conch          :refer   [programs       with-programs   let-programs]]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [clj-webdriver.taxi       :as      webdriver]

            [aoide.stats :as my.s]
            [aoide.sente :as my.sente]
            [aoide.browsers :as my.b]))

(programs echo ls sleep grep git heroku)

(defroutes app
  (GET "/" [] (response/resource-response "index.html" {:root "public"}))
  (GET  "/chsk" req (my.sente/ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (my.sente/ring-ajax-post                req))
  (GET "/time" [] (html/html
                    [:div (str "tocnoe vremia: " (t/now))]))
  (route/resources "/"))
  

(defn in-dev? [& args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev? args)
                  (reload/wrap-reload (site #'app) {:dirs ["src" "target/classes"]}) ;; only reload when dev
                  (site app))]
    (println "zerver shtarted.")
    (run-server (-> handler
                    (defaults/wrap-defaults defaults/site-defaults)
                    (session/wrap-session {:store (cookie/cookie-store)}))
                {:port 3000})))


(add-watch my.sente/connected-uids :her (fn [_ _ _ data]
                                 ;; (println "We have a connection!" data)
                                 ;; (my.sente/chsk-send! nil [:blah {:from "fuckof"} ])
                                 ))



;; todo: https://groups.google.com/forum/#!topic/clojure/glMREmCB91U
(defn start-broadcaster! []
  (go-loop [i 0]
    (<! (async/timeout 1000))
    (doseq [uid (:any @my.sente/connected-uids)]
      (my.sente/chsk-send! uid
        [::msg (str (t/now))]))
    (recur (inc i))))


(defn broadcast-mouse [{:keys [uid x y]} type]
  (doseq [z (:any @my.sente/connected-uids)]
    (if-not (= z uid) (do
                        (match [type]
                               ["move"]
                               (my.sente/chsk-send! z [:om-mouse/broadcast {:from uid :x x :y y}])
                               ["over"]
                               (my.sente/chsk-send! z [:om-mouse/show {:from uid}])
                               ["out"]
                               (my.sente/chsk-send! z [:om-mouse/clear {:from uid}]))))))
