(ns aoide.core
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require 
    [cljs.core.match :as match :refer (match)]
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente  :as sente :refer (cb-success?)]
    [figwheel.client :as fw]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true]))


(enable-console-print!)

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

(add-watch chsk-state :sente-updater (fn [_ _ _ data] (println data)))



(defn- event-handler [data] #_[[id data :as ev] _]
  (println "the" data))

  ;; (match [id data]
    ;; [:chsk/state {:first-open? true}] (do
    ;;                                     (reset! uid (:uid data))
    ;;                                     (logf "registered-uid: %s" @uid)
    ;;                                     (let [msg (gdom/getElement "uid")]
    ;;                                       (set! (.-innerHTML msg) [:uid @uid])))
    ;; ;;
    ;; [:chsk/recv  [:om-mouse/broadcast _]] (pointer-move data)
    ;; ;;
    ;; [:chsk/recv  [:om-mouse/clear _]]  (set! (.-style.visibility @pointer) "hidden")
    ;; [:chsk/recv  [:om-mouse/show _]]  (set! (.-style.visibility @pointer) "visible")
    ;; [:chsk/recv  [:some/broadcast _]]  (println "broadcast signal was received.")
    ;; :else (println "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))

