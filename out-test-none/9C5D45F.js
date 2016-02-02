goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10449__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10450__i = 0, G__10450__a = new Array(arguments.length -  0);
while (G__10450__i < G__10450__a.length) {G__10450__a[G__10450__i] = arguments[G__10450__i + 0]; ++G__10450__i;}
  args = new cljs.core.IndexedSeq(G__10450__a,0);
} 
return G__10449__delegate.call(this,args);};
G__10449.cljs$lang$maxFixedArity = 0;
G__10449.cljs$lang$applyTo = (function (arglist__10451){
var args = cljs.core.seq(arglist__10451);
return G__10449__delegate(args);
});
G__10449.cljs$core$IFn$_invoke$arity$variadic = G__10449__delegate;
return G__10449;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10452__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10453__i = 0, G__10453__a = new Array(arguments.length -  0);
while (G__10453__i < G__10453__a.length) {G__10453__a[G__10453__i] = arguments[G__10453__i + 0]; ++G__10453__i;}
  args = new cljs.core.IndexedSeq(G__10453__a,0);
} 
return G__10452__delegate.call(this,args);};
G__10452.cljs$lang$maxFixedArity = 0;
G__10452.cljs$lang$applyTo = (function (arglist__10454){
var args = cljs.core.seq(arglist__10454);
return G__10452__delegate(args);
});
G__10452.cljs$core$IFn$_invoke$arity$variadic = G__10452__delegate;
return G__10452;
})()
;

return null;
});
