(ns aoide.core
  (:gen-class)
  (:require [clj-http.client :as client]
            [compojure.core           :refer :all]
            [compojure.route          :as      route]
            [compojure.handler        :refer   [site]]
            [ring.middleware.reload   :as      reload]
            [org.httpkit.server       :refer   [run-server]]
            [hiccup.core              :as      html]
            [clj-time.core            :as      t]
            [cheshire.core            :as      json]
            [me.raynes.conch          :refer   [programs       with-programs   let-programs]]
            [clj-webdriver.taxi       :as      webdriver]))



(programs echo ls sleep grep git heroku)

;; (defn -main
;;   "I don't do a whole lot ... yet."
;;   [& args]
;;   (println "Hello, World!")
;;   (println (client/get "http://yandex.ru"))
;;   ;; (clj-webdriver.taxi)
;;   (println (ls))
;;   (shutdown-agents))

(defroutes app
  (GET "/" [] (html/html
                [:div (str "tocnoe vremia: " (t/now))])))

(defn in-dev? [& args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev? args)
                  (reload/wrap-reload (site #'app)) ;; only reload when dev
                  (site app))]
    (run-server handler {:port 3000})))
