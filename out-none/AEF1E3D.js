goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18014__i = 0, G__18014__a = new Array(arguments.length -  0);
while (G__18014__i < G__18014__a.length) {G__18014__a[G__18014__i] = arguments[G__18014__i + 0]; ++G__18014__i;}
  args = new cljs.core.IndexedSeq(G__18014__a,0);
} 
return G__18013__delegate.call(this,args);};
G__18013.cljs$lang$maxFixedArity = 0;
G__18013.cljs$lang$applyTo = (function (arglist__18015){
var args = cljs.core.seq(arglist__18015);
return G__18013__delegate(args);
});
G__18013.cljs$core$IFn$_invoke$arity$variadic = G__18013__delegate;
return G__18013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18017__i = 0, G__18017__a = new Array(arguments.length -  0);
while (G__18017__i < G__18017__a.length) {G__18017__a[G__18017__i] = arguments[G__18017__i + 0]; ++G__18017__i;}
  args = new cljs.core.IndexedSeq(G__18017__a,0);
} 
return G__18016__delegate.call(this,args);};
G__18016.cljs$lang$maxFixedArity = 0;
G__18016.cljs$lang$applyTo = (function (arglist__18018){
var args = cljs.core.seq(arglist__18018);
return G__18016__delegate(args);
});
G__18016.cljs$core$IFn$_invoke$arity$variadic = G__18016__delegate;
return G__18016;
})()
;

return null;
});
