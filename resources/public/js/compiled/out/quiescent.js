// Compiled by ClojureScript 0.0-2202
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){if(cljs.core.map_QMARK_.call(null,obj))
{var o = (function (){var obj17988 = {};return obj17988;
})();var seq__17989_17995 = cljs.core.seq.call(null,obj);var chunk__17990_17996 = null;var count__17991_17997 = 0;var i__17992_17998 = 0;while(true){
if((i__17992_17998 < count__17991_17997))
{var vec__17993_17999 = cljs.core._nth.call(null,chunk__17990_17996,i__17992_17998);var k_18000 = cljs.core.nth.call(null,vec__17993_17999,0,null);var v_18001 = cljs.core.nth.call(null,vec__17993_17999,1,null);(o[cljs.core.name.call(null,k_18000)] = js_props.call(null,v_18001));
{
var G__18002 = seq__17989_17995;
var G__18003 = chunk__17990_17996;
var G__18004 = count__17991_17997;
var G__18005 = (i__17992_17998 + 1);
seq__17989_17995 = G__18002;
chunk__17990_17996 = G__18003;
count__17991_17997 = G__18004;
i__17992_17998 = G__18005;
continue;
}
} else
{var temp__4126__auto___18006 = cljs.core.seq.call(null,seq__17989_17995);if(temp__4126__auto___18006)
{var seq__17989_18007__$1 = temp__4126__auto___18006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17989_18007__$1))
{var c__8631__auto___18008 = cljs.core.chunk_first.call(null,seq__17989_18007__$1);{
var G__18009 = cljs.core.chunk_rest.call(null,seq__17989_18007__$1);
var G__18010 = c__8631__auto___18008;
var G__18011 = cljs.core.count.call(null,c__8631__auto___18008);
var G__18012 = 0;
seq__17989_17995 = G__18009;
chunk__17990_17996 = G__18010;
count__17991_17997 = G__18011;
i__17992_17998 = G__18012;
continue;
}
} else
{var vec__17994_18013 = cljs.core.first.call(null,seq__17989_18007__$1);var k_18014 = cljs.core.nth.call(null,vec__17994_18013,0,null);var v_18015 = cljs.core.nth.call(null,vec__17994_18013,1,null);(o[cljs.core.name.call(null,k_18014)] = js_props.call(null,v_18015));
{
var G__18016 = cljs.core.next.call(null,seq__17989_18007__$1);
var G__18017 = null;
var G__18018 = 0;
var G__18019 = 0;
seq__17989_17995 = G__18016;
chunk__17990_17996 = G__18017;
count__17991_17997 = G__18018;
i__17992_17998 = G__18019;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_18021 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18021;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__18022__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__18022 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__18022__delegate.call(this,value,static_args);};
G__18022.cljs$lang$maxFixedArity = 1;
G__18022.cljs$lang$applyTo = (function (arglist__18023){
var value = cljs.core.first(arglist__18023);
var static_args = cljs.core.rest(arglist__18023);
return G__18022__delegate(value,static_args);
});
G__18022.cljs$core$IFn$_invoke$arity$variadic = G__18022__delegate;
return G__18022;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_18028 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18028;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4126__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_18027 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18027;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_18026 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18026;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4126__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_18025 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18025;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4126__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_18024 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_18024;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4126__auto___18029 = (child.props["key"]);if(cljs.core.truth_(temp__4126__auto___18029))
{var key_18030 = temp__4126__auto___18029;(props["key"] = key_18030);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__18031){
var child = cljs.core.first(arglist__18031);
var kvs = cljs.core.rest(arglist__18031);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",1940175105),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){return React.renderComponent(component,node);
});

//# sourceMappingURL=quiescent.js.map