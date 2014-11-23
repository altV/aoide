(ns aoide.browsers
  (:require [clojure.string :as str]
            [taoensso.sente :as sente]
     #+cljs [cljs.core.match :as match :refer (match)]
      #+clj [clojure.core.match :as match :refer (match)]
     #+cljs [cljs.core.async :as async :refer (<! >! put! chan)]
     #+cljs [sablono.core :as html :refer-macros [html]]
     #+cljs [quiescent :as q :include-macros true]
      #+clj [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
      #+clj [clj-webdriver.taxi       :as      taxi]
      
     #+cljs [aoide.utils :as my.u]
            [aoide.world :as my.w])

  #+cljs
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]]))


;; (defonce browsers (atom []))
(defonce _add-browsers-to-the-world (swap! my.w/world assoc :browsers []))

(def known-browsers
  {:firefox #(taxi/new-driver {:browser :firefox})})

(defn make-browser [type]
  {:pre (contains? (keys known-browsers) type)}
  (let [handler (type known-browsers)]
    {:type type
     :current-page {:url "http://lenta.ru"
                 :image "//upyachka.ru/img/kot/30.gif"}
     :handler (handler)})
  [] (make-browser :firefox))

(defn add-browser ([type]
                (swap! my.w/world update-in [:browsers] conj (make-browser type)))
               ([]     (add-browser :firefox)))

#+cljs
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
