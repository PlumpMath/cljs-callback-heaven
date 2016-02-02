goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31294__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31295__i = 0, G__31295__a = new Array(arguments.length -  0);
while (G__31295__i < G__31295__a.length) {G__31295__a[G__31295__i] = arguments[G__31295__i + 0]; ++G__31295__i;}
  args = new cljs.core.IndexedSeq(G__31295__a,0);
} 
return G__31294__delegate.call(this,args);};
G__31294.cljs$lang$maxFixedArity = 0;
G__31294.cljs$lang$applyTo = (function (arglist__31296){
var args = cljs.core.seq(arglist__31296);
return G__31294__delegate(args);
});
G__31294.cljs$core$IFn$_invoke$arity$variadic = G__31294__delegate;
return G__31294;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31297__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31298__i = 0, G__31298__a = new Array(arguments.length -  0);
while (G__31298__i < G__31298__a.length) {G__31298__a[G__31298__i] = arguments[G__31298__i + 0]; ++G__31298__i;}
  args = new cljs.core.IndexedSeq(G__31298__a,0);
} 
return G__31297__delegate.call(this,args);};
G__31297.cljs$lang$maxFixedArity = 0;
G__31297.cljs$lang$applyTo = (function (arglist__31299){
var args = cljs.core.seq(arglist__31299);
return G__31297__delegate(args);
});
G__31297.cljs$core$IFn$_invoke$arity$variadic = G__31297__delegate;
return G__31297;
})()
;

return null;
});
