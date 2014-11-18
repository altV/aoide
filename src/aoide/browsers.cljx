(ns aoide.browsers
  (:require #_[core.string :as str]
            [taoensso.sente :as sente]
      #+clj [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
      #+clj [clj-webdriver.taxi       :as      webdriver]))


(defonce browsers (atom
                    [{:type "PhantomJS"
                      :current-page {:url "http://lenta.ru"
                                     :image "//upyachka.ru/img/kot/30.gif"}}]))
(defn hi [] "hi")

(def wow "Wow!")
