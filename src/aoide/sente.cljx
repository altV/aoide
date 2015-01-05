(ns aoide.sente
  #+clj
  (:require
    [taoensso.sente           :as      sente]
    [taoensso.sente.packers.transit :as sente-transit]
    [aoide.world :as my.w])

  #+cljs
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]])
  #+cljs
  (:require 
    [cljs.core.match :as match :refer (match)]
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente  :as sente :refer (cb-success?)]
    [taoensso.sente.packers.transit :as sente-transit]
    [goog.events :as events]
    [goog.dom.classes :as classes]
    [figwheel.client :as fw]
    [clojure.browser.repl :as brepl]
    
    [aoide.world :as my.w]))

#+clj
(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket!
        {:packer (sente-transit/get-flexi-packer :edn)
         :user-id-fn (fn [ring-req]
                       "generates unique ID for request"
                       (let [uid (get-in ring-req [:cookies "ring-session" :value])]
                         ;; (println ring-req)
                         (println "Connected: " (:remote-addr ring-req) uid)
                         ;; uid
                         (java.util.UUID/randomUUID)))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
)

#+clj
(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid (:uid session)
        [id data :as ev] event]
    #_(println (str event))))

#+clj
(defonce chsk-router
  (sente/start-chsk-router-loop! event-msg-handler ch-chsk))

#+clj
(defn do-work [_ _ _ _]
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid [::world @my.w/world]))
  )

#+clj
(defn send-updates-to-clients [a b c d]
  (do-work a b c d))

#+clj
(defonce server-world-watch (add-watch my.w/world ::it send-updates-to-clients))



#+cljs
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as on server
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   :packer (sente-transit/get-flexi-packer :edn)
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
         [:chsk/recv  [:aoide.sente/world msg]]  (reset! my.w/world msg)
         [:chsk/recv  [:aoide.core/msg msg]]  (swap! my.w/world assoc :msg msg)
         :else (println "Unmatched event: " ev)))
