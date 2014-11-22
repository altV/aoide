(ns aoide.sente
  #+cljs
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]])
  #+cljs
  (:require 
    [cljs.core.match :as match :refer (match)]
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente  :as sente :refer (cb-success?)]
    [goog.events :as events]
    [goog.dom.classes :as classes]
    [figwheel.client :as fw]
    [clojure.browser.repl :as brepl]
    
    [aoide.world :as my.w]))

 #+cljs
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as on server
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

 #+cljs
(defn event-handler [[id data :as ev] _]
  (println "Got message.")
  (match [id data]
         ;; [:chsk/state {:first-open? true}] (do
         ;;                                     (reset! uid (:uid data))
         ;;                                     (logf "registered-uid: %s" @uid)
         ;;                                     (let [msg (gdom/getElement "uid")]
         ;;                                       (set! (.-innerHTML msg) [:uid @uid])))
         ;; ;;
         ;; [:chsk/recv  [:om-mouse/broadcast _]] (pointer-move data)
         ;; [:chsk/recv  [:om-mouse/clear _]]  (set! (.-style.visibility @pointer) "hidden")
         ;; [:chsk/recv  [:some/broadcast _]]  (println "broadcast signal was received.")
         [:chsk/recv  [:aoide.core/msg msg]]  (swap! my.w/world assoc :msg msg)
         :else (println "Unmatched event: " ev)))
