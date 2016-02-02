goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21574__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21575__i = 0, G__21575__a = new Array(arguments.length -  0);
while (G__21575__i < G__21575__a.length) {G__21575__a[G__21575__i] = arguments[G__21575__i + 0]; ++G__21575__i;}
  args = new cljs.core.IndexedSeq(G__21575__a,0);
} 
return G__21574__delegate.call(this,args);};
G__21574.cljs$lang$maxFixedArity = 0;
G__21574.cljs$lang$applyTo = (function (arglist__21576){
var args = cljs.core.seq(arglist__21576);
return G__21574__delegate(args);
});
G__21574.cljs$core$IFn$_invoke$arity$variadic = G__21574__delegate;
return G__21574;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21577__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21578__i = 0, G__21578__a = new Array(arguments.length -  0);
while (G__21578__i < G__21578__a.length) {G__21578__a[G__21578__i] = arguments[G__21578__i + 0]; ++G__21578__i;}
  args = new cljs.core.IndexedSeq(G__21578__a,0);
} 
return G__21577__delegate.call(this,args);};
G__21577.cljs$lang$maxFixedArity = 0;
G__21577.cljs$lang$applyTo = (function (arglist__21579){
var args = cljs.core.seq(arglist__21579);
return G__21577__delegate(args);
});
G__21577.cljs$core$IFn$_invoke$arity$variadic = G__21577__delegate;
return G__21577;
})()
;

return null;
});
