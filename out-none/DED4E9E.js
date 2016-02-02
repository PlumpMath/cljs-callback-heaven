goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16190__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16191__i = 0, G__16191__a = new Array(arguments.length -  0);
while (G__16191__i < G__16191__a.length) {G__16191__a[G__16191__i] = arguments[G__16191__i + 0]; ++G__16191__i;}
  args = new cljs.core.IndexedSeq(G__16191__a,0);
} 
return G__16190__delegate.call(this,args);};
G__16190.cljs$lang$maxFixedArity = 0;
G__16190.cljs$lang$applyTo = (function (arglist__16192){
var args = cljs.core.seq(arglist__16192);
return G__16190__delegate(args);
});
G__16190.cljs$core$IFn$_invoke$arity$variadic = G__16190__delegate;
return G__16190;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16193__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16194__i = 0, G__16194__a = new Array(arguments.length -  0);
while (G__16194__i < G__16194__a.length) {G__16194__a[G__16194__i] = arguments[G__16194__i + 0]; ++G__16194__i;}
  args = new cljs.core.IndexedSeq(G__16194__a,0);
} 
return G__16193__delegate.call(this,args);};
G__16193.cljs$lang$maxFixedArity = 0;
G__16193.cljs$lang$applyTo = (function (arglist__16195){
var args = cljs.core.seq(arglist__16195);
return G__16193__delegate(args);
});
G__16193.cljs$core$IFn$_invoke$arity$variadic = G__16193__delegate;
return G__16193;
})()
;

return null;
});
