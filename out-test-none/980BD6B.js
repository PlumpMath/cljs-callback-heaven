goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40829__i = 0, G__40829__a = new Array(arguments.length -  0);
while (G__40829__i < G__40829__a.length) {G__40829__a[G__40829__i] = arguments[G__40829__i + 0]; ++G__40829__i;}
  args = new cljs.core.IndexedSeq(G__40829__a,0);
} 
return G__40828__delegate.call(this,args);};
G__40828.cljs$lang$maxFixedArity = 0;
G__40828.cljs$lang$applyTo = (function (arglist__40830){
var args = cljs.core.seq(arglist__40830);
return G__40828__delegate(args);
});
G__40828.cljs$core$IFn$_invoke$arity$variadic = G__40828__delegate;
return G__40828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40832__i = 0, G__40832__a = new Array(arguments.length -  0);
while (G__40832__i < G__40832__a.length) {G__40832__a[G__40832__i] = arguments[G__40832__i + 0]; ++G__40832__i;}
  args = new cljs.core.IndexedSeq(G__40832__a,0);
} 
return G__40831__delegate.call(this,args);};
G__40831.cljs$lang$maxFixedArity = 0;
G__40831.cljs$lang$applyTo = (function (arglist__40833){
var args = cljs.core.seq(arglist__40833);
return G__40831__delegate(args);
});
G__40831.cljs$core$IFn$_invoke$arity$variadic = G__40831__delegate;
return G__40831;
})()
;

return null;
});
