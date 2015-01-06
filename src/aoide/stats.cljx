(ns aoide.stats
  (:require [clojure.string :as str]
            [taoensso.sente :as sente]
     #+cljs [cljs.core.match :as match :refer (match)]
      #+clj [clojure.core.match :as match :refer (match)]
     #+cljs [cljs.core.async :as async :refer (<! >! put! chan)]
     #+cljs [sablono.core :as html :refer-macros [html]]
     #+cljs [quiescent :as q :include-macros true]
      #+clj [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop thread)]
      #+clj [clj-time.core :as t]
            [com.palletops.leaven :as leaven]
            [com.palletops.leaven.protocols :refer [Startable Stoppable]]
      
     #+cljs [aoide.utils :as my.u]
            [aoide.sente :as my.sente]
            [aoide.world :as my.w])

  #+cljs
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [cljs.core.match.macros :refer [match]]))


#+cljs
(q/defcomponent Stats [data]
  (html
    [:.ui.segment
     [:.ui.ribbon.label "Server info"]
     [:table
      [:tr
       [:td "Server RAM"] [:td (:ram data)]
       [:td "Thread Count"] [:td (:threads data)]]]]))


#+clj
(defn get-os-data []
  (let [ram (async/thread
              (-> (Runtime/getRuntime) .freeMemory (/ 1024.0 1024 1024) (->> (format "%.2f GB"))))]
    (swap! my.w/world assoc :stats {:ram (<!! ram)
                                    :threads (Thread/activeCount)
                                    :browsers-connected (:any @my.sente/connected-uids)
                                    :server-time (str (t/now))})))

#+clj
(defonce stats-loop (go-loop []
                         (<! (async/timeout 1000))
                         (get-os-data)
                         (recur)))

#+clj
(defonce _add-stats-to-the-world (swap! my.w/world assoc :stats {}))









































;; #+clj
;; (defrecord StatsWorker [channel loop-chan stats-agent]
;;    Startable
;;    (start [component]
;;      (assoc component :loop-chan
;;             (async/go-loop []
;;                            (<! (async/timeout 500))
;;                            (async/>! channel n)
;;                            (recur (inc n)))))
;;    Stoppable
;;    (stop [component]
;;      (async/close! channel)
;;      (assoc component :loop-chan nil)))
;;

;; ________________________________________________________________________________________________
(comment
 (defrecord Counter [init-val channel loop-chan]
   Startable
   (start [component]
     (assoc component :loop-chan
            (async/go-loop [n init-val]
                           (async/>! channel n)
                           (recur (inc n)))))
   Stoppable
   (stop [component]
     (async/close! channel)
     (assoc component :loop-chan nil)))

 ;; Note that the record contains fields for both the configuration and the runtime state of the component.

 ;; We instantiate the component with one of the record's constructor functions. In this example we use a var to hold the component, but this is in no way required.

 (def c (async/chan))
 (def counter (map->Counter {:init-val 1 :channel c}))
 ;; We can start the component:

 (alter-var-root #'counter leaven/start)
 ;; Now we can get values from the channel:

 (async/<!! c) ; => 1
 (async/<!! c) ; => 2
 (async/<!! c) ; => 3
 ;; If we had tried to read the channel before starting the component, the call to async/<!! would have blocked.

 ;; Stopping the channel:

 (alter-var-root #'counter leaven/stop)
 ;; And now the channel is closed, so will return nil.

 (async/<!! c) ; => 4
 (async/<!! c) ; => nil
 ;; We're going to define another component now that, take a channel and will double what is put into it.

 (defrecord Doubler [in-chan out-chan ctrl-chan loop-chan]
   Startable
   (start [component]
     (let [ctrl-chan (async/chan)]
       (assoc component
              :loop-chan (async/go
                           (loop []
                             (let [[v _] (async/alts! [in-chan ctrl-chan])]
                               (if (not= ::stop v)
                                 (let [[v _] (async/alts!
                                               [[out-chan (* 2 v)] ctrl-chan])]
                                   (if (not= ::stop v)
                                     (recur))))))
                           (async/close! out-chan))
              :ctrl-chan ctrl-chan)))
   Stoppable
   (stop [component]
     (async/>!! ctrl-chan ::stop)
     (assoc component :loop-chan nil :ctrl-chan nil)))
 ;; We'll use these components to define a system

 (leaven/defsystem Evens [:counter :doubler])
 (defn evens [out-chan]
   (let [c1 (async/chan)]
     (Evens.
       (map->Counter {:init-val 1 :channel c1})
       (map->Doubler {:in-chan c :out-chan out-chan}))))

 (def c (async/chan))
 (def sys (evens c))
 (alter-var-root #'sys leaven/start)
 (async/<!! c) ; => 2
 (async/<!! c) ; => 4
 (alter-var-root #'sys leaven/stop)
 (async/<!! c) ; => nil
 )
