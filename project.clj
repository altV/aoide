(defproject aoide "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 ; client
                 [org.clojure/clojurescript "0.0-2371"]
                 [com.facebook/react "0.11.2"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [sablono "0.2.22"]
                 [quiescent "0.1.4"]
                 [com.cognitect/transit-cljs "0.8.188"]
                 [com.palletops/leaven "0.2.0"]
                 [org.clojure/tools.namespace "0.2.8"]

                 ; server

                 ; web
                 [ring/ring-core "1.3.1"]
                 [ring/ring-devel "1.3.1"]
                 [weasel "0.4.2"]
                 [ring/ring-defaults        "0.1.2"]  ; Incl. `ring-anti-forgery`, etc.
                 [http-kit "2.1.19"]
                 [com.gibbonspace/clj-webdriver "0.7.0-SNAPSHOT"]
                 [compojure "1.2.1"]
                 [com.taoensso/sente "1.2.0"]
                 ;Transit deps optional; may be used to aid perf. of larger data payloads
                 [com.cognitect/transit-clj  "0.8.259"]
                 [hiccup "1.0.5"]

                 ; core
                 [org.clojure/core.match "0.2.1"]
                 [me.raynes/conch "0.7.0"]
                 [clj-http "1.0.1"]
                 [cheshire "5.3.1"]
                 [clj-time "0.8.0"]
                 [com.cemerick/pomegranate "0.3.0"]
                 [com.taoensso/timbre "3.3.1-1cd4b70"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]
            [lein-pprint         "1.1.2"]
            [lein-git-deps "0.0.2-SNAPSHOT"]
            [lein-ancient        "0.5.5"]
            [com.cemerick/austin "0.1.4"]]


  :profiles {:dev {:plugins [[org.clojars.cemerick/cljx "0.5.0-SNAPSHOT" :exclusions [org.clojure/clojure]]]}}

  :cljx {:builds [{:source-paths ["src"]
                   :output-path "target/classes"
                   :rules :clj}

                  {:source-paths ["src"]
                   :output-path "target/classes"
                   :rules :cljs}]}

  :prep-tasks [["cljx" "once"] "javac" "compile"]

  :jvm-opts ["-Xmx1G"]

  :source-paths ["src" "target/classes"]

  :main ^:skip-aot aoide.core

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src" "target/classes"]
                        :compiler {:output-to "resources/public/js/compiled/aoide.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "min"
                        :source-paths ["src" "target/classes"]
                        :compiler {:output-to "www/aoide.min.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]}
  :figwheel {
             :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["public/resources/css"] ;; watch and update CSS
             })
