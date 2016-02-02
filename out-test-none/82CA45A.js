goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43565__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43566__i = 0, G__43566__a = new Array(arguments.length -  0);
while (G__43566__i < G__43566__a.length) {G__43566__a[G__43566__i] = arguments[G__43566__i + 0]; ++G__43566__i;}
  args = new cljs.core.IndexedSeq(G__43566__a,0);
} 
return G__43565__delegate.call(this,args);};
G__43565.cljs$lang$maxFixedArity = 0;
G__43565.cljs$lang$applyTo = (function (arglist__43567){
var args = cljs.core.seq(arglist__43567);
return G__43565__delegate(args);
});
G__43565.cljs$core$IFn$_invoke$arity$variadic = G__43565__delegate;
return G__43565;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43568__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43569__i = 0, G__43569__a = new Array(arguments.length -  0);
while (G__43569__i < G__43569__a.length) {G__43569__a[G__43569__i] = arguments[G__43569__i + 0]; ++G__43569__i;}
  args = new cljs.core.IndexedSeq(G__43569__a,0);
} 
return G__43568__delegate.call(this,args);};
G__43568.cljs$lang$maxFixedArity = 0;
G__43568.cljs$lang$applyTo = (function (arglist__43570){
var args = cljs.core.seq(arglist__43570);
return G__43568__delegate(args);
});
G__43568.cljs$core$IFn$_invoke$arity$variadic = G__43568__delegate;
return G__43568;
})()
;

return null;
});
