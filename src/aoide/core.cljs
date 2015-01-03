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

    [aoide.world :as my.w]
    [aoide.browsers :as my.b]
    [aoide.stats :as my.stats]
    [aoide.sente :as my.s]))


(enable-console-print!) ; todo: only in dev

(q/defcomponent Root [data]
  (html
    [:.ui.stackable.very.relaxed.page.grid #_{:style {:background "#121213" :color "#ffffff"}}
     [:.row
      [:.column
       [:div
        [:h1.ui.left.header.left.floated "Яндекс"]
        [:.ui.button {:onclick my.b/add-browser} "Add browser"]
        [:.ui.divider]]]]
     [:.two.column.row
      [:.column
       [:.ui.segment
        [:.ui.ribbon.label "World"]
        [:table (map (fn [[k v]]
                       [:tr [:td (str k)] [:td (str v)]]) data)]]]
      [:.column (my.b/Browser (-> data :browsers first))]]
     [:.two.column.row
      [:.column]]]))



(defn render [data]
  (q/render (Root data)
            (.getElementById js/document "main-area")))

(add-watch my.w/world ::render
           (fn [_ _ _ data] (render data)))

(fw/watch-and-reload :jsload-callback
                     (fn [] (swap! my.w/world update-in [:tmp-dev] not))
                     :websocket-url   "ws://localhost:3449/figwheel-ws")

(brepl/connect "http://localhost:9000/repl")
;; (ws-repl/connect "ws://localhost:9001")

(defonce *whatever* (render @my.w/world))

(add-watch my.s/chsk-state :sente-updater (fn [_ _ _ data] (println data)))

(defonce chsk-router
  (sente/start-chsk-router-loop! my.s/event-handler my.s/ch-chsk))
