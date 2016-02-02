goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290703__i = 0, G__290703__a = new Array(arguments.length -  0);
while (G__290703__i < G__290703__a.length) {G__290703__a[G__290703__i] = arguments[G__290703__i + 0]; ++G__290703__i;}
  args = new cljs.core.IndexedSeq(G__290703__a,0);
} 
return G__290702__delegate.call(this,args);};
G__290702.cljs$lang$maxFixedArity = 0;
G__290702.cljs$lang$applyTo = (function (arglist__290704){
var args = cljs.core.seq(arglist__290704);
return G__290702__delegate(args);
});
G__290702.cljs$core$IFn$_invoke$arity$variadic = G__290702__delegate;
return G__290702;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290705__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290706__i = 0, G__290706__a = new Array(arguments.length -  0);
while (G__290706__i < G__290706__a.length) {G__290706__a[G__290706__i] = arguments[G__290706__i + 0]; ++G__290706__i;}
  args = new cljs.core.IndexedSeq(G__290706__a,0);
} 
return G__290705__delegate.call(this,args);};
G__290705.cljs$lang$maxFixedArity = 0;
G__290705.cljs$lang$applyTo = (function (arglist__290707){
var args = cljs.core.seq(arglist__290707);
return G__290705__delegate(args);
});
G__290705.cljs$core$IFn$_invoke$arity$variadic = G__290705__delegate;
return G__290705;
})()
;

return null;
});
