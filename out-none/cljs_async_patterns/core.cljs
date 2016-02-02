;   ____          _       
;  / ___|___   __| | ___  
; | |   / _ \ / _` |/ _ \ 
; | |__| (_) | (_| |  __/ 
;  \____\___/ \__,_|\___| 
;                        

(ns cljs-async-patterns.core (:require        [cljs.nodejs              :as            node]
                                   [cljs.core.async          :refer        [buffer offer! poll! close! take! put! chan <! >! alts!]])
                  (:require-macros [cljs.core.async.macros   :refer        [go go-loop]]
                                   [cljs-async-patterns.macros :refer [<? <1 <2 <3]]
                                   [cljs-asynchronize.macros :as dm :refer [asynchronize]]))

(node/enable-util-print!)
(defn <print [c]
  (go (println (<! c))))

(defn chan-sanitized 
  "Since channels cannot contain nil, this function converts nil values to false."
  [val]
  (if (= val nil) false val))

;; >n functions inverse the priority of which argument to jam into
;; its channel. Instead of jamming a success (i.e., nth) value ONLY IF there are
;; no error values, these >n functions start by jamming the nth value
;; if at all possible. This can sometimes be useful with async functions
;; that generate both a success value and an error value at the same time.

;; this fn equivalent to (>? ..) when parent fn executes cb with only one argument
(defn >1 
  "If at all possible, jams the 1st callback argument into the input channel."
  ([c] (fn [arg1] (go (>! c (chan-sanitized arg1)))))
  ([c E-msg] (fn [arg1] (go (if arg1 (>! c (chan-sanitized arg1)) (>! c E-msg))))))

(defn >2
  "If at all possible, jams the 2nd callback argument into the input channel."
  ([c]
   (fn [err, res] (go (cond
                       res     (>! c (chan-sanitized res))
                       :else   (>! c (chan-sanitized err))))))
  ([c E-msg]
   (fn [err, res] (go (cond
                       res     (>! c (chan-sanitized res))
                       :else   (>! c (chan-sanitized E-msg)))))))

(defn >3
  "If at all possible, jams the 3rd callback argument into the input channel."
  ([c]
   (fn [err1, err2, res] (go (cond
                              res     (>! c (chan-sanitized res))
                              err1    (>! c (chan-sanitized err1))
                              :else   (>! c (chan-sanitized err2))))))
  ([c E-msg]
   (fn [err1, err2, res] (go (cond
                              res   (>! c (chan-sanitized res))
                              err1   (>! c (chan-sanitized E-msg))
                              :else  (>! c (chan-sanitized E-msg)))))))

;; This function generates an [error-first callback](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
(defn >? 
  "Jams the first truthy argument of a callback function into its input channel."
  ([c]
  (fn [& args] 
    (go-loop [a args]
      (if (= 0 (count a)) (>! c false)
                          (if (first a) 
                              (>! c (first (chan-sanitized a))) 
                              (recur (rest a)))))))    
  ([c E-msg]
  (fn [& args] 
    (go-loop [a args]
      (if (= 0 (count a)) 
          (>! c E-msg)
          (if (first a)
              (if (> (count a) 1)
                  (>! c E-msg)
                  (>! c (first (chan-sanitized a))))
              (recur (rest a))))))))

(defn -main [& args]
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))              ; minimist's main command object
          e        (or (.-e argv) "e option")                   ; a useful pattern for grabbing -options
          arg      (or (aget (aget argv "_") 0) "default_arg")] ; the primary, optionless argument
(<print (<2 (.readFile (node/require "fs") "/home/george/12" "utf8" _)))
(<print (<2 (.readFile (node/require "fs") "/home/george/12" "utf8" _) "ERROR: SE, mathize, visions."))
;(println (macroexpand-1 '(<? (.readFile (node/require "fs") "/home/george/1idf" "utf8" _) "ERROR: This is why you use SE.")))
  (println argv))) 

  ;(<print (<? (.readFile (node/require "fs") "/home/george/1dfdf" "utf8" _)))
  
(set! *main-cli-fn* -main)
