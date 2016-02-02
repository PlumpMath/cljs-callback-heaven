// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('cljs_async_patterns.core_test');
doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__9511__auto__){
jx.reporter.karma.start.call(null,tc__9511__auto__,1);

return cljs.test.run_block.call(null,(function (){var env27816 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary27817 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27816,summary27817){
return (function (){
cljs.test.set_env_BANG_.call(null,env27816);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9030__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9030__auto__,env27816,summary27817){
return (function (){
if((env__9030__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9030__auto__,env27816,summary27817))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"/home/george/Dropbox/cljs-async-patterns/test/cljs_async_patterns/core_test.cljs",17,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9030__auto__,env27816,summary27817){
return (function (){
if((env__9030__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9030__auto__,env27816,summary27817))
], null));
})());
});})(env27816,summary27817))
,((function (env27816,summary27817){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env27816,summary27817))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27816,summary27817){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary27817,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary27817),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env27816,summary27817))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27816,summary27817){
return (function (){
cljs.test.set_env_BANG_.call(null,env27816);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary27817));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary27817),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env27816,summary27817))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env27818 = cljs.test.empty_env.call(null);
var summary27819 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27818,summary27819){
return (function (){
cljs.test.set_env_BANG_.call(null,env27818);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9030__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9030__auto__,env27818,summary27819){
return (function (){
if((env__9030__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9030__auto__,env27818,summary27819))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"/home/george/Dropbox/cljs-async-patterns/test/cljs_async_patterns/core_test.cljs",17,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9030__auto__,env27818,summary27819){
return (function (){
if((env__9030__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9030__auto__,env27818,summary27819))
], null));
})());
});})(env27818,summary27819))
,((function (env27818,summary27819){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env27818,summary27819))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27818,summary27819){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary27819,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary27819),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env27818,summary27819))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env27818,summary27819){
return (function (){
cljs.test.set_env_BANG_.call(null,env27818);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary27819));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary27819),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env27818,summary27819))
], null));
})());
})));

//# sourceMappingURL=runner.js.map