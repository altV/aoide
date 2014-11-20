(ns aoide.core
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]])
  (:require 
    [cljs.core.match :as match :refer (match)]
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente  :as sente :refer (cb-success?)]
    [goog.events :as events]
    [goog.dom.classes :as classes]
    [sablono.core :as html :refer-macros [html]]
    [quiescent :as q :include-macros true]
    [figwheel.client :as fw]
    [clojure.browser.repl :as brepl]
    [weasel.repl :as ws-repl]
    #_[quiescent.dom :as d]

    [aoide.browsers :as brw]))


(enable-console-print!) ; todo: only in dev

(defonce world (atom {:dirs []
                      :text "hi"
                      :current-image "//upyachka.ru/img/kot/31.gif"
                      :browsers [{:type "PhantomJS"
                                  :current-page {:url "http://lenta.ru"
                                                 :image "//upyachka.ru/img/kot/30.gif"}}]
                      :msg "Hello"}))

(q/defcomponent Root [data]
  (html
    [:.ui.stackable.very.relaxed.page.grid #_{:style {:background "#121213" :color "#ffffff"}}
     [:.row #_.inverted
      [:.column
       [:h1 "Яндекс"]
       [:.ui.divider]]]
     [:.two.column.row
      [:.column
       [:.ui.segment
        [:.ui.ribbon.label "World"]
        [:table (map (fn [[k v]]
                       [:tr [:td (str k)] [:td (str v)]]) data)]]]
      [:.column (Browser (-> data :browsers first))]]]))

(q/defcomponent Browser [browser]
  (html
    [:.ui.segment
     [:.ui.ribbon.label "Browser"]
     [:span.ui.header (:type browser)]
     #_[:.ui.hidden.small.divider]
     [:.ui.labeled.input
      [:.ui.label "http://"]
      [:input {:value (-> browser :current-page :url)}]]
     [:img {src (:image (:current-page browser))}]]))

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

(brepl/connect "http://localhost:9000/repl")
;; (ws-repl/connect "ws://localhost:9000")

(defonce *whatever* (render @world))

(add-watch chsk-state :sente-updater (fn [_ _ _ data] (println data)))



(defn- event-handler [[id data :as ev] _]
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
         [:chsk/recv  [::msg msg]]  (swap! world assoc :msg msg)
         :else (println "Unmatched event: " ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))







;; =============================================================================
;; Utilities

(defn by-id
  "Short-hand for document.getElementById(id)"
  [id]
  (.getElementById js/document id))

(defn events->chan
  "Given a target DOM element and event type return a channel of
  observed events. Can supply the channel to receive events as third
  optional argument."
  ([el event-type] (events->chan el event-type (chan)))
  ([el event-type c]
   (events/listen el event-type
                  (fn [e] (put! c e)))
   c))

(defn mouse-loc->vec
  "Given a Google Closure normalized DOM mouse event return the
  mouse x and y position as a two element vector."
  [e]
  [(.-clientX e) (.-clientY e)])
