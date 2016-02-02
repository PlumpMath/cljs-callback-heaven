goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9574__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9575__i = 0, G__9575__a = new Array(arguments.length -  0);
while (G__9575__i < G__9575__a.length) {G__9575__a[G__9575__i] = arguments[G__9575__i + 0]; ++G__9575__i;}
  args = new cljs.core.IndexedSeq(G__9575__a,0);
} 
return G__9574__delegate.call(this,args);};
G__9574.cljs$lang$maxFixedArity = 0;
G__9574.cljs$lang$applyTo = (function (arglist__9576){
var args = cljs.core.seq(arglist__9576);
return G__9574__delegate(args);
});
G__9574.cljs$core$IFn$_invoke$arity$variadic = G__9574__delegate;
return G__9574;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9577__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9578__i = 0, G__9578__a = new Array(arguments.length -  0);
while (G__9578__i < G__9578__a.length) {G__9578__a[G__9578__i] = arguments[G__9578__i + 0]; ++G__9578__i;}
  args = new cljs.core.IndexedSeq(G__9578__a,0);
} 
return G__9577__delegate.call(this,args);};
G__9577.cljs$lang$maxFixedArity = 0;
G__9577.cljs$lang$applyTo = (function (arglist__9579){
var args = cljs.core.seq(arglist__9579);
return G__9577__delegate(args);
});
G__9577.cljs$core$IFn$_invoke$arity$variadic = G__9577__delegate;
return G__9577;
})()
;

return null;
});
