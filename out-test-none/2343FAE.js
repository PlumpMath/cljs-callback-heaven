goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13067__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13068__i = 0, G__13068__a = new Array(arguments.length -  0);
while (G__13068__i < G__13068__a.length) {G__13068__a[G__13068__i] = arguments[G__13068__i + 0]; ++G__13068__i;}
  args = new cljs.core.IndexedSeq(G__13068__a,0);
} 
return G__13067__delegate.call(this,args);};
G__13067.cljs$lang$maxFixedArity = 0;
G__13067.cljs$lang$applyTo = (function (arglist__13069){
var args = cljs.core.seq(arglist__13069);
return G__13067__delegate(args);
});
G__13067.cljs$core$IFn$_invoke$arity$variadic = G__13067__delegate;
return G__13067;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13070__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13071__i = 0, G__13071__a = new Array(arguments.length -  0);
while (G__13071__i < G__13071__a.length) {G__13071__a[G__13071__i] = arguments[G__13071__i + 0]; ++G__13071__i;}
  args = new cljs.core.IndexedSeq(G__13071__a,0);
} 
return G__13070__delegate.call(this,args);};
G__13070.cljs$lang$maxFixedArity = 0;
G__13070.cljs$lang$applyTo = (function (arglist__13072){
var args = cljs.core.seq(arglist__13072);
return G__13070__delegate(args);
});
G__13070.cljs$core$IFn$_invoke$arity$variadic = G__13070__delegate;
return G__13070;
})()
;

return null;
});
