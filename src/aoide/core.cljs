(ns aoide.core
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require 
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente  :as sente :refer (cb-success?)]
    [figwheel.client :as fw]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true]))


;; (enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
;; (defonce app-data (atom {}))

;; (println "Edits to this text should show up in your developer console.")

(defonce world (atom {:dirs []
                      :text "hi"
                      :msg "Hello"}))

(q/defcomponent Root [data]
  (html
    [:div
     [:h1 (:msg data)]
     [:div "asdf"]
     [:div "asdf"]
     [:div "qwer"]]
    ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as on server
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )


(defn render [data]
  (q/render (Root data)
            (.getElementById js/document "main-area")))

(add-watch world ::render
           (fn [_ _ _ data] (render data)))

(fw/watch-and-reload :jsload-callback
                       (fn [] (swap! world update-in [:tmp-dev] not))
                     :websocket-url   "ws://localhost:3449/figwheel-ws")

(defonce *whatever* (render @world))
