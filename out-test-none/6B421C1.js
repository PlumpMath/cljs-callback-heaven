goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26915__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26916__i = 0, G__26916__a = new Array(arguments.length -  0);
while (G__26916__i < G__26916__a.length) {G__26916__a[G__26916__i] = arguments[G__26916__i + 0]; ++G__26916__i;}
  args = new cljs.core.IndexedSeq(G__26916__a,0);
} 
return G__26915__delegate.call(this,args);};
G__26915.cljs$lang$maxFixedArity = 0;
G__26915.cljs$lang$applyTo = (function (arglist__26917){
var args = cljs.core.seq(arglist__26917);
return G__26915__delegate(args);
});
G__26915.cljs$core$IFn$_invoke$arity$variadic = G__26915__delegate;
return G__26915;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26918__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26919__i = 0, G__26919__a = new Array(arguments.length -  0);
while (G__26919__i < G__26919__a.length) {G__26919__a[G__26919__i] = arguments[G__26919__i + 0]; ++G__26919__i;}
  args = new cljs.core.IndexedSeq(G__26919__a,0);
} 
return G__26918__delegate.call(this,args);};
G__26918.cljs$lang$maxFixedArity = 0;
G__26918.cljs$lang$applyTo = (function (arglist__26920){
var args = cljs.core.seq(arglist__26920);
return G__26918__delegate(args);
});
G__26918.cljs$core$IFn$_invoke$arity$variadic = G__26918__delegate;
return G__26918;
})()
;

return null;
});
