goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__294463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__294463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294464__i = 0, G__294464__a = new Array(arguments.length -  0);
while (G__294464__i < G__294464__a.length) {G__294464__a[G__294464__i] = arguments[G__294464__i + 0]; ++G__294464__i;}
  args = new cljs.core.IndexedSeq(G__294464__a,0);
} 
return G__294463__delegate.call(this,args);};
G__294463.cljs$lang$maxFixedArity = 0;
G__294463.cljs$lang$applyTo = (function (arglist__294465){
var args = cljs.core.seq(arglist__294465);
return G__294463__delegate(args);
});
G__294463.cljs$core$IFn$_invoke$arity$variadic = G__294463__delegate;
return G__294463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__294466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__294466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294467__i = 0, G__294467__a = new Array(arguments.length -  0);
while (G__294467__i < G__294467__a.length) {G__294467__a[G__294467__i] = arguments[G__294467__i + 0]; ++G__294467__i;}
  args = new cljs.core.IndexedSeq(G__294467__a,0);
} 
return G__294466__delegate.call(this,args);};
G__294466.cljs$lang$maxFixedArity = 0;
G__294466.cljs$lang$applyTo = (function (arglist__294468){
var args = cljs.core.seq(arglist__294468);
return G__294466__delegate(args);
});
G__294466.cljs$core$IFn$_invoke$arity$variadic = G__294466__delegate;
return G__294466;
})()
;

return null;
});
