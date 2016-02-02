goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10201__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10202__i = 0, G__10202__a = new Array(arguments.length -  0);
while (G__10202__i < G__10202__a.length) {G__10202__a[G__10202__i] = arguments[G__10202__i + 0]; ++G__10202__i;}
  args = new cljs.core.IndexedSeq(G__10202__a,0);
} 
return G__10201__delegate.call(this,args);};
G__10201.cljs$lang$maxFixedArity = 0;
G__10201.cljs$lang$applyTo = (function (arglist__10203){
var args = cljs.core.seq(arglist__10203);
return G__10201__delegate(args);
});
G__10201.cljs$core$IFn$_invoke$arity$variadic = G__10201__delegate;
return G__10201;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10204__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10205__i = 0, G__10205__a = new Array(arguments.length -  0);
while (G__10205__i < G__10205__a.length) {G__10205__a[G__10205__i] = arguments[G__10205__i + 0]; ++G__10205__i;}
  args = new cljs.core.IndexedSeq(G__10205__a,0);
} 
return G__10204__delegate.call(this,args);};
G__10204.cljs$lang$maxFixedArity = 0;
G__10204.cljs$lang$applyTo = (function (arglist__10206){
var args = cljs.core.seq(arglist__10206);
return G__10204__delegate(args);
});
G__10204.cljs$core$IFn$_invoke$arity$variadic = G__10204__delegate;
return G__10204;
})()
;

return null;
});
