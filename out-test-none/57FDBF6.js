goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12899__i = 0, G__12899__a = new Array(arguments.length -  0);
while (G__12899__i < G__12899__a.length) {G__12899__a[G__12899__i] = arguments[G__12899__i + 0]; ++G__12899__i;}
  args = new cljs.core.IndexedSeq(G__12899__a,0);
} 
return G__12898__delegate.call(this,args);};
G__12898.cljs$lang$maxFixedArity = 0;
G__12898.cljs$lang$applyTo = (function (arglist__12900){
var args = cljs.core.seq(arglist__12900);
return G__12898__delegate(args);
});
G__12898.cljs$core$IFn$_invoke$arity$variadic = G__12898__delegate;
return G__12898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12902__i = 0, G__12902__a = new Array(arguments.length -  0);
while (G__12902__i < G__12902__a.length) {G__12902__a[G__12902__i] = arguments[G__12902__i + 0]; ++G__12902__i;}
  args = new cljs.core.IndexedSeq(G__12902__a,0);
} 
return G__12901__delegate.call(this,args);};
G__12901.cljs$lang$maxFixedArity = 0;
G__12901.cljs$lang$applyTo = (function (arglist__12903){
var args = cljs.core.seq(arglist__12903);
return G__12901__delegate(args);
});
G__12901.cljs$core$IFn$_invoke$arity$variadic = G__12901__delegate;
return G__12901;
})()
;

return null;
});
