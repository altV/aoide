(ns aoide.core
  (:require
    [figwheel.client :as fw]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true]))


;; (enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
;; (defonce app-data (atom {}))

;; (println "Edits to this text should show up in your developer console.")

;; (fw/watch-and-reload
;;  :jsload-callback (fn []
;;                     ;; (stop-and-start-my app)
;;                     ))

(defonce world (atom {:dirs []
                      :text "hi"
                      :msg "Hello"}))

(q/defcomponent Root [data]
  (html
    [:h1 (:msg data)]))

(defn render [data]
  (q/render (Root data)
    (.getElementById js/document "main-area")))

(add-watch world ::render
    (fn [_ _ _ data] (render data)))

(fw/watch-and-reload :jsload-callback
  (fn [] (swap! world update-in [:tmp-dev] not)))

(defonce *whatever* (render @world))
