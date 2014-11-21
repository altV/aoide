(ns aoide.world
  #+cljs
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]])
  #+cljs
  (:require 
    [cljs.core.match :as match :refer (match)]
    [cljs.core.async :as async :refer (<! >! put! chan)]
    ))


#+cljs
(defonce world (atom {:dirs []
                      :text "hi"
                      :current-image "//upyachka.ru/img/kot/31.gif"
                      :browsers [{:type "PhantomJS"
                                  :current-page {:url "http://lenta.ru"
                                                 :image "//upyachka.ru/img/kot/30.gif"}}]
                      :msg "Hello"}))
