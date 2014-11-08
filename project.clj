(defproject aoide "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 ; client
                 [org.clojure/clojurescript "0.0-2371"]
                 [com.facebook/react "0.11.2"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [sablono "0.2.22"]
                 [quiescent "0.1.4"]

                 ; server
                 [ring/ring-core "1.3.1"]
                 [ring/ring-devel "1.3.1"]
                 [http-kit "2.1.19"]

                 [com.taoensso/sente "1.2.0"]
                 [me.raynes/conch "0.7.0"]
                 [clj-http "1.0.1"]
                 [cheshire "5.3.1"]
                 [clj-time "0.8.0"]
                 [hiccup "1.0.5"]
                 [clj-webdriver/clj-webdriver "0.6.1"]
                 [compojure "1.2.1"]]
  
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]
            [lein-pprint         "1.1.2"]
            [lein-ancient        "0.5.5"]
            [com.cemerick/austin "0.1.4"]
            #_[com.keminglabs/cljx "0.4.0"]]

  :jvm-opts ["-Xmx1G"]

  :source-paths ["src"]
  
  :main ^:skip-aot aoide.core

  :ring {:handler aoide.core/app}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/aoide.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :source-map true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "www/aoide.min.js"
                         :optimizations :advanced
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]}
  :figwheel {
             :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["public/resources/css"] ;; watch and update CSS
             ;; :ring-handler aoide.server/handler
             })
