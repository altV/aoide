(ns aoide.browsers
  (:require #_[clojure.string :as str]
            [taoensso.sente :as sente]
      #+clj [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
      #+clj [clj-webdriver.taxi       :as      webdriver]))


(defonce browsers (atom []))

(defn browser []
  {:type "PhantomJS"
   :current-page {:url "http://lenta.ru"
                  :image "//upyachka.ru/img/kot/30.gif"}})
