// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14703__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__14702 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__14702,0,null);var body = cljs.core.nthnext.call(null,vec__14702,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__14703 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14703__delegate.call(this,args);};
G__14703.cljs$lang$maxFixedArity = 0;
G__14703.cljs$lang$applyTo = (function (arglist__14704){
var args = cljs.core.seq(arglist__14704);
return G__14703__delegate(args);
});
G__14703.cljs$core$IFn$_invoke$arity$variadic = G__14703__delegate;
return G__14703;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8600__auto__ = (function iter__14709(s__14710){return (new cljs.core.LazySeq(null,(function (){var s__14710__$1 = s__14710;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14710__$1);if(temp__4126__auto__)
{var s__14710__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14710__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__14710__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__14712 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__14711 = 0;while(true){
if((i__14711 < size__8599__auto__))
{var args = cljs.core._nth.call(null,c__8598__auto__,i__14711);cljs.core.chunk_append.call(null,b__14712,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14713 = (i__14711 + 1);
i__14711 = G__14713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14712),iter__14709.call(null,cljs.core.chunk_rest.call(null,s__14710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14712),null);
}
} else
{var args = cljs.core.first.call(null,s__14710__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14709.call(null,cljs.core.rest.call(null,s__14710__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8600__auto__ = (function iter__14718(s__14719){return (new cljs.core.LazySeq(null,(function (){var s__14719__$1 = s__14719;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14719__$1);if(temp__4126__auto__)
{var s__14719__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14719__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__14719__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__14721 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__14720 = 0;while(true){
if((i__14720 < size__8599__auto__))
{var style = cljs.core._nth.call(null,c__8598__auto__,i__14720);cljs.core.chunk_append.call(null,b__14721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__14722 = (i__14720 + 1);
i__14720 = G__14722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14721),iter__14718.call(null,cljs.core.chunk_rest.call(null,s__14719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14721),null);
}
} else
{var style = cljs.core.first.call(null,s__14719__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__14718.call(null,cljs.core.rest.call(null,s__14719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14723){
var styles = cljs.core.seq(arglist__14723);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14724 = (function() { 
var link_to14724__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to14724 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14724__delegate.call(this,url,content);};
link_to14724.cljs$lang$maxFixedArity = 1;
link_to14724.cljs$lang$applyTo = (function (arglist__14725){
var url = cljs.core.first(arglist__14725);
var content = cljs.core.rest(arglist__14725);
return link_to14724__delegate(url,content);
});
link_to14724.cljs$core$IFn$_invoke$arity$variadic = link_to14724__delegate;
return link_to14724;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14724);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14726 = (function() { 
var mail_to14726__delegate = function (e_mail,p__14727){var vec__14729 = p__14727;var content = cljs.core.nth.call(null,vec__14729,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7883__auto__ = content;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14726 = function (e_mail,var_args){
var p__14727 = null;if (arguments.length > 1) {
  p__14727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14726__delegate.call(this,e_mail,p__14727);};
mail_to14726.cljs$lang$maxFixedArity = 1;
mail_to14726.cljs$lang$applyTo = (function (arglist__14730){
var e_mail = cljs.core.first(arglist__14730);
var p__14727 = cljs.core.rest(arglist__14730);
return mail_to14726__delegate(e_mail,p__14727);
});
mail_to14726.cljs$core$IFn$_invoke$arity$variadic = mail_to14726__delegate;
return mail_to14726;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14726);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14731 = (function unordered_list14731(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8600__auto__ = (function iter__14736(s__14737){return (new cljs.core.LazySeq(null,(function (){var s__14737__$1 = s__14737;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14737__$1);if(temp__4126__auto__)
{var s__14737__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14737__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__14737__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__14739 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__14738 = 0;while(true){
if((i__14738 < size__8599__auto__))
{var x = cljs.core._nth.call(null,c__8598__auto__,i__14738);cljs.core.chunk_append.call(null,b__14739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14740 = (i__14738 + 1);
i__14738 = G__14740;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14739),iter__14736.call(null,cljs.core.chunk_rest.call(null,s__14737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14739),null);
}
} else
{var x = cljs.core.first.call(null,s__14737__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14736.call(null,cljs.core.rest.call(null,s__14737__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14731);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14741 = (function ordered_list14741(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8600__auto__ = (function iter__14746(s__14747){return (new cljs.core.LazySeq(null,(function (){var s__14747__$1 = s__14747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14747__$1);if(temp__4126__auto__)
{var s__14747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14747__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__14747__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__14749 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__14748 = 0;while(true){
if((i__14748 < size__8599__auto__))
{var x = cljs.core._nth.call(null,c__8598__auto__,i__14748);cljs.core.chunk_append.call(null,b__14749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14750 = (i__14748 + 1);
i__14748 = G__14750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14749),iter__14746.call(null,cljs.core.chunk_rest.call(null,s__14747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14749),null);
}
} else
{var x = cljs.core.first.call(null,s__14747__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14746.call(null,cljs.core.rest.call(null,s__14747__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14741);
/**
* Create an image element.
*/
sablono.core.image14751 = (function() {
var image14751 = null;
var image14751__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image14751__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image14751 = function(src,alt){
switch(arguments.length){
case 1:
return image14751__1.call(this,src);
case 2:
return image14751__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14751.cljs$core$IFn$_invoke$arity$1 = image14751__1;
image14751.cljs$core$IFn$_invoke$arity$2 = image14751__2;
return image14751;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14751);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__14752_SHARP_,p2__14753_SHARP_){return [cljs.core.str(p1__14752_SHARP_),cljs.core.str("["),cljs.core.str(p2__14753_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__14754_SHARP_,p2__14755_SHARP_){return [cljs.core.str(p1__14754_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14755_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field14756 = (function() {
var color_field14756 = null;
var color_field14756__1 = (function (name__9365__auto__){return color_field14756.call(null,name__9365__auto__,null);
});
var color_field14756__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9365__auto__,value__9366__auto__);
});
color_field14756 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return color_field14756__1.call(this,name__9365__auto__);
case 2:
return color_field14756__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field14756.cljs$core$IFn$_invoke$arity$1 = color_field14756__1;
color_field14756.cljs$core$IFn$_invoke$arity$2 = color_field14756__2;
return color_field14756;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14756);
/**
* Creates a date input field.
*/
sablono.core.date_field14757 = (function() {
var date_field14757 = null;
var date_field14757__1 = (function (name__9365__auto__){return date_field14757.call(null,name__9365__auto__,null);
});
var date_field14757__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9365__auto__,value__9366__auto__);
});
date_field14757 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return date_field14757__1.call(this,name__9365__auto__);
case 2:
return date_field14757__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field14757.cljs$core$IFn$_invoke$arity$1 = date_field14757__1;
date_field14757.cljs$core$IFn$_invoke$arity$2 = date_field14757__2;
return date_field14757;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14757);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field14758 = (function() {
var datetime_field14758 = null;
var datetime_field14758__1 = (function (name__9365__auto__){return datetime_field14758.call(null,name__9365__auto__,null);
});
var datetime_field14758__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9365__auto__,value__9366__auto__);
});
datetime_field14758 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return datetime_field14758__1.call(this,name__9365__auto__);
case 2:
return datetime_field14758__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field14758.cljs$core$IFn$_invoke$arity$1 = datetime_field14758__1;
datetime_field14758.cljs$core$IFn$_invoke$arity$2 = datetime_field14758__2;
return datetime_field14758;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14758);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field14759 = (function() {
var datetime_local_field14759 = null;
var datetime_local_field14759__1 = (function (name__9365__auto__){return datetime_local_field14759.call(null,name__9365__auto__,null);
});
var datetime_local_field14759__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9365__auto__,value__9366__auto__);
});
datetime_local_field14759 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return datetime_local_field14759__1.call(this,name__9365__auto__);
case 2:
return datetime_local_field14759__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field14759.cljs$core$IFn$_invoke$arity$1 = datetime_local_field14759__1;
datetime_local_field14759.cljs$core$IFn$_invoke$arity$2 = datetime_local_field14759__2;
return datetime_local_field14759;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14759);
/**
* Creates a email input field.
*/
sablono.core.email_field14760 = (function() {
var email_field14760 = null;
var email_field14760__1 = (function (name__9365__auto__){return email_field14760.call(null,name__9365__auto__,null);
});
var email_field14760__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9365__auto__,value__9366__auto__);
});
email_field14760 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return email_field14760__1.call(this,name__9365__auto__);
case 2:
return email_field14760__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14760.cljs$core$IFn$_invoke$arity$1 = email_field14760__1;
email_field14760.cljs$core$IFn$_invoke$arity$2 = email_field14760__2;
return email_field14760;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14760);
/**
* Creates a file input field.
*/
sablono.core.file_field14761 = (function() {
var file_field14761 = null;
var file_field14761__1 = (function (name__9365__auto__){return file_field14761.call(null,name__9365__auto__,null);
});
var file_field14761__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9365__auto__,value__9366__auto__);
});
file_field14761 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return file_field14761__1.call(this,name__9365__auto__);
case 2:
return file_field14761__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field14761.cljs$core$IFn$_invoke$arity$1 = file_field14761__1;
file_field14761.cljs$core$IFn$_invoke$arity$2 = file_field14761__2;
return file_field14761;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14761);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14762 = (function() {
var hidden_field14762 = null;
var hidden_field14762__1 = (function (name__9365__auto__){return hidden_field14762.call(null,name__9365__auto__,null);
});
var hidden_field14762__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9365__auto__,value__9366__auto__);
});
hidden_field14762 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return hidden_field14762__1.call(this,name__9365__auto__);
case 2:
return hidden_field14762__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14762.cljs$core$IFn$_invoke$arity$1 = hidden_field14762__1;
hidden_field14762.cljs$core$IFn$_invoke$arity$2 = hidden_field14762__2;
return hidden_field14762;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14762);
/**
* Creates a month input field.
*/
sablono.core.month_field14763 = (function() {
var month_field14763 = null;
var month_field14763__1 = (function (name__9365__auto__){return month_field14763.call(null,name__9365__auto__,null);
});
var month_field14763__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9365__auto__,value__9366__auto__);
});
month_field14763 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return month_field14763__1.call(this,name__9365__auto__);
case 2:
return month_field14763__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field14763.cljs$core$IFn$_invoke$arity$1 = month_field14763__1;
month_field14763.cljs$core$IFn$_invoke$arity$2 = month_field14763__2;
return month_field14763;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14763);
/**
* Creates a number input field.
*/
sablono.core.number_field14764 = (function() {
var number_field14764 = null;
var number_field14764__1 = (function (name__9365__auto__){return number_field14764.call(null,name__9365__auto__,null);
});
var number_field14764__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9365__auto__,value__9366__auto__);
});
number_field14764 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return number_field14764__1.call(this,name__9365__auto__);
case 2:
return number_field14764__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field14764.cljs$core$IFn$_invoke$arity$1 = number_field14764__1;
number_field14764.cljs$core$IFn$_invoke$arity$2 = number_field14764__2;
return number_field14764;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14764);
/**
* Creates a password input field.
*/
sablono.core.password_field14765 = (function() {
var password_field14765 = null;
var password_field14765__1 = (function (name__9365__auto__){return password_field14765.call(null,name__9365__auto__,null);
});
var password_field14765__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9365__auto__,value__9366__auto__);
});
password_field14765 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return password_field14765__1.call(this,name__9365__auto__);
case 2:
return password_field14765__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14765.cljs$core$IFn$_invoke$arity$1 = password_field14765__1;
password_field14765.cljs$core$IFn$_invoke$arity$2 = password_field14765__2;
return password_field14765;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14765);
/**
* Creates a range input field.
*/
sablono.core.range_field14766 = (function() {
var range_field14766 = null;
var range_field14766__1 = (function (name__9365__auto__){return range_field14766.call(null,name__9365__auto__,null);
});
var range_field14766__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9365__auto__,value__9366__auto__);
});
range_field14766 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return range_field14766__1.call(this,name__9365__auto__);
case 2:
return range_field14766__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field14766.cljs$core$IFn$_invoke$arity$1 = range_field14766__1;
range_field14766.cljs$core$IFn$_invoke$arity$2 = range_field14766__2;
return range_field14766;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14766);
/**
* Creates a search input field.
*/
sablono.core.search_field14767 = (function() {
var search_field14767 = null;
var search_field14767__1 = (function (name__9365__auto__){return search_field14767.call(null,name__9365__auto__,null);
});
var search_field14767__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9365__auto__,value__9366__auto__);
});
search_field14767 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return search_field14767__1.call(this,name__9365__auto__);
case 2:
return search_field14767__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field14767.cljs$core$IFn$_invoke$arity$1 = search_field14767__1;
search_field14767.cljs$core$IFn$_invoke$arity$2 = search_field14767__2;
return search_field14767;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14767);
/**
* Creates a tel input field.
*/
sablono.core.tel_field14768 = (function() {
var tel_field14768 = null;
var tel_field14768__1 = (function (name__9365__auto__){return tel_field14768.call(null,name__9365__auto__,null);
});
var tel_field14768__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9365__auto__,value__9366__auto__);
});
tel_field14768 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return tel_field14768__1.call(this,name__9365__auto__);
case 2:
return tel_field14768__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field14768.cljs$core$IFn$_invoke$arity$1 = tel_field14768__1;
tel_field14768.cljs$core$IFn$_invoke$arity$2 = tel_field14768__2;
return tel_field14768;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14768);
/**
* Creates a text input field.
*/
sablono.core.text_field14769 = (function() {
var text_field14769 = null;
var text_field14769__1 = (function (name__9365__auto__){return text_field14769.call(null,name__9365__auto__,null);
});
var text_field14769__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9365__auto__,value__9366__auto__);
});
text_field14769 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return text_field14769__1.call(this,name__9365__auto__);
case 2:
return text_field14769__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14769.cljs$core$IFn$_invoke$arity$1 = text_field14769__1;
text_field14769.cljs$core$IFn$_invoke$arity$2 = text_field14769__2;
return text_field14769;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14769);
/**
* Creates a time input field.
*/
sablono.core.time_field14770 = (function() {
var time_field14770 = null;
var time_field14770__1 = (function (name__9365__auto__){return time_field14770.call(null,name__9365__auto__,null);
});
var time_field14770__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9365__auto__,value__9366__auto__);
});
time_field14770 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return time_field14770__1.call(this,name__9365__auto__);
case 2:
return time_field14770__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field14770.cljs$core$IFn$_invoke$arity$1 = time_field14770__1;
time_field14770.cljs$core$IFn$_invoke$arity$2 = time_field14770__2;
return time_field14770;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14770);
/**
* Creates a url input field.
*/
sablono.core.url_field14771 = (function() {
var url_field14771 = null;
var url_field14771__1 = (function (name__9365__auto__){return url_field14771.call(null,name__9365__auto__,null);
});
var url_field14771__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9365__auto__,value__9366__auto__);
});
url_field14771 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return url_field14771__1.call(this,name__9365__auto__);
case 2:
return url_field14771__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field14771.cljs$core$IFn$_invoke$arity$1 = url_field14771__1;
url_field14771.cljs$core$IFn$_invoke$arity$2 = url_field14771__2;
return url_field14771;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14771);
/**
* Creates a week input field.
*/
sablono.core.week_field14772 = (function() {
var week_field14772 = null;
var week_field14772__1 = (function (name__9365__auto__){return week_field14772.call(null,name__9365__auto__,null);
});
var week_field14772__2 = (function (name__9365__auto__,value__9366__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9365__auto__,value__9366__auto__);
});
week_field14772 = function(name__9365__auto__,value__9366__auto__){
switch(arguments.length){
case 1:
return week_field14772__1.call(this,name__9365__auto__);
case 2:
return week_field14772__2.call(this,name__9365__auto__,value__9366__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field14772.cljs$core$IFn$_invoke$arity$1 = week_field14772__1;
week_field14772.cljs$core$IFn$_invoke$arity$2 = week_field14772__2;
return week_field14772;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14772);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box14773 = (function() {
var check_box14773 = null;
var check_box14773__1 = (function (name){return check_box14773.call(null,name,null);
});
var check_box14773__2 = (function (name,checked_QMARK_){return check_box14773.call(null,name,checked_QMARK_,"true");
});
var check_box14773__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box14773 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14773__1.call(this,name);
case 2:
return check_box14773__2.call(this,name,checked_QMARK_);
case 3:
return check_box14773__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14773.cljs$core$IFn$_invoke$arity$1 = check_box14773__1;
check_box14773.cljs$core$IFn$_invoke$arity$2 = check_box14773__2;
check_box14773.cljs$core$IFn$_invoke$arity$3 = check_box14773__3;
return check_box14773;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14773);
/**
* Creates a radio button.
*/
sablono.core.radio_button14774 = (function() {
var radio_button14774 = null;
var radio_button14774__1 = (function (group){return radio_button14774.call(null,group,null);
});
var radio_button14774__2 = (function (group,checked_QMARK_){return radio_button14774.call(null,group,checked_QMARK_,"true");
});
var radio_button14774__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button14774 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14774__1.call(this,group);
case 2:
return radio_button14774__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14774__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14774.cljs$core$IFn$_invoke$arity$1 = radio_button14774__1;
radio_button14774.cljs$core$IFn$_invoke$arity$2 = radio_button14774__2;
radio_button14774.cljs$core$IFn$_invoke$arity$3 = radio_button14774__3;
return radio_button14774;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14774);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14775 = (function() {
var select_options14775 = null;
var select_options14775__1 = (function (coll){return select_options14775.call(null,coll,null);
});
var select_options14775__2 = (function (coll,selected){var iter__8600__auto__ = (function iter__14784(s__14785){return (new cljs.core.LazySeq(null,(function (){var s__14785__$1 = s__14785;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14785__$1);if(temp__4126__auto__)
{var s__14785__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14785__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__14785__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__14787 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__14786 = 0;while(true){
if((i__14786 < size__8599__auto__))
{var x = cljs.core._nth.call(null,c__8598__auto__,i__14786);cljs.core.chunk_append.call(null,b__14787,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14790 = x;var text = cljs.core.nth.call(null,vec__14790,0,null);var val = cljs.core.nth.call(null,vec__14790,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14790,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14775.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__14792 = (i__14786 + 1);
i__14786 = G__14792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14787),iter__14784.call(null,cljs.core.chunk_rest.call(null,s__14785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14787),null);
}
} else
{var x = cljs.core.first.call(null,s__14785__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14791 = x;var text = cljs.core.nth.call(null,vec__14791,0,null);var val = cljs.core.nth.call(null,vec__14791,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14791,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14775.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__14784.call(null,cljs.core.rest.call(null,s__14785__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,coll);
});
select_options14775 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14775__1.call(this,coll);
case 2:
return select_options14775__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14775.cljs$core$IFn$_invoke$arity$1 = select_options14775__1;
select_options14775.cljs$core$IFn$_invoke$arity$2 = select_options14775__2;
return select_options14775;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14775);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14793 = (function() {
var drop_down14793 = null;
var drop_down14793__2 = (function (name,options){return drop_down14793.call(null,name,options,null);
});
var drop_down14793__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down14793 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14793__2.call(this,name,options);
case 3:
return drop_down14793__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14793.cljs$core$IFn$_invoke$arity$2 = drop_down14793__2;
drop_down14793.cljs$core$IFn$_invoke$arity$3 = drop_down14793__3;
return drop_down14793;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14793);
/**
* Creates a text area element.
*/
sablono.core.text_area14794 = (function() {
var text_area14794 = null;
var text_area14794__1 = (function (name){return text_area14794.call(null,name,null);
});
var text_area14794__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area14794 = function(name,value){
switch(arguments.length){
case 1:
return text_area14794__1.call(this,name);
case 2:
return text_area14794__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14794.cljs$core$IFn$_invoke$arity$1 = text_area14794__1;
text_area14794.cljs$core$IFn$_invoke$arity$2 = text_area14794__2;
return text_area14794;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14794);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14795 = (function label14795(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14795);
/**
* Creates a submit button.
*/
sablono.core.submit_button14796 = (function submit_button14796(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14796);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14797 = (function reset_button14797(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14797);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14798 = (function() { 
var form_to14798__delegate = function (p__14799,body){var vec__14801 = p__14799;var method = cljs.core.nth.call(null,vec__14801,0,null);var action = cljs.core.nth.call(null,vec__14801,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to14798 = function (p__14799,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14798__delegate.call(this,p__14799,body);};
form_to14798.cljs$lang$maxFixedArity = 1;
form_to14798.cljs$lang$applyTo = (function (arglist__14802){
var p__14799 = cljs.core.first(arglist__14802);
var body = cljs.core.rest(arglist__14802);
return form_to14798__delegate(p__14799,body);
});
form_to14798.cljs$core$IFn$_invoke$arity$variadic = form_to14798__delegate;
return form_to14798;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14798);

//# sourceMappingURL=core.js.map