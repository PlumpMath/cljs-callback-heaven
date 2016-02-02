(ns cljs-async-patterns.macros)

#_(defmacro <? [func E-msg]
   `(cljs.core.async.macros/go 
      (let [~'c     (cljs.core.async/chan 1) 
            ;~'cb    (cljs-async-patterns.core/>? ~'c ~E-msg)
           ~'rep    (replace (quote {~'_ (cljs-async-patterns.core/>? ~'c ~E-msg) }) (quote ~(pop func)))
           ;~'rep    (replace (quote {~'_ (cljs-async-patterns.core/>? ~'c ~E-msg) }) (quote ~func))
          ]
       ;~'rep
      ; ~(apply (first func) ~'rep)
       (~'<! ~'c))))

(defmacro <? 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>? ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>? ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <1 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>1 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>1 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <2 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>2 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>2 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <3 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>3 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-async-patterns.core/>3 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))
