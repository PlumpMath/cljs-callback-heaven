goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21343__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21344__i = 0, G__21344__a = new Array(arguments.length -  0);
while (G__21344__i < G__21344__a.length) {G__21344__a[G__21344__i] = arguments[G__21344__i + 0]; ++G__21344__i;}
  args = new cljs.core.IndexedSeq(G__21344__a,0);
} 
return G__21343__delegate.call(this,args);};
G__21343.cljs$lang$maxFixedArity = 0;
G__21343.cljs$lang$applyTo = (function (arglist__21345){
var args = cljs.core.seq(arglist__21345);
return G__21343__delegate(args);
});
G__21343.cljs$core$IFn$_invoke$arity$variadic = G__21343__delegate;
return G__21343;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21346__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21347__i = 0, G__21347__a = new Array(arguments.length -  0);
while (G__21347__i < G__21347__a.length) {G__21347__a[G__21347__i] = arguments[G__21347__i + 0]; ++G__21347__i;}
  args = new cljs.core.IndexedSeq(G__21347__a,0);
} 
return G__21346__delegate.call(this,args);};
G__21346.cljs$lang$maxFixedArity = 0;
G__21346.cljs$lang$applyTo = (function (arglist__21348){
var args = cljs.core.seq(arglist__21348);
return G__21346__delegate(args);
});
G__21346.cljs$core$IFn$_invoke$arity$variadic = G__21346__delegate;
return G__21346;
})()
;

return null;
});
