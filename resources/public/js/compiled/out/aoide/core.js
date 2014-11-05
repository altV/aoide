// Compiled by ClojureScript 0.0-2202
goog.provide('aoide.core');
goog.require('cljs.core');
goog.require('quiescent');
goog.require('quiescent');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
if(typeof aoide.core.world !== 'undefined')
{} else
{aoide.core.world = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dirs","dirs",1016987896),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),"hi",new cljs.core.Keyword(null,"msg","msg",1014012659),"Hello"], null));
}
/**
* 
*/
aoide.core.Root = quiescent.component.call(null,(function (data){var attrs13668 = new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(data);return cljs.core.apply.call(null,React.DOM.h1,((cljs.core.map_QMARK_.call(null,attrs13668))?sablono.interpreter.attributes.call(null,attrs13668):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13668))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13668)], null))));
}));
aoide.core.render = (function render(data){return quiescent.render.call(null,aoide.core.Root.call(null,data),document.getElementById("main-area"));
});
cljs.core.add_watch.call(null,aoide.core.world,new cljs.core.Keyword("aoide.core","render","aoide.core/render",3148245595),(function (_,___$1,___$2,data){return aoide.core.render.call(null,data);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return cljs.core.swap_BANG_.call(null,aoide.core.world,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tmp-dev","tmp-dev",4110567889)], null),cljs.core.not);
}));
if(typeof aoide.core._STAR_whatever_STAR_ !== 'undefined')
{} else
{aoide.core._STAR_whatever_STAR_ = aoide.core.render.call(null,cljs.core.deref.call(null,aoide.core.world));
}

//# sourceMappingURL=core.js.map