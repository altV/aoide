// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__14881,args){var map__14883 = p__14881;var map__14883__$1 = ((cljs.core.seq_QMARK_.call(null,map__14883))?cljs.core.apply.call(null,cljs.core.hash_map,map__14883):map__14883);var debug = cljs.core.get.call(null,map__14883__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__14881,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__14881,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14884){
var p__14881 = cljs.core.first(arglist__14884);
var args = cljs.core.rest(arglist__14884);
return log__delegate(p__14881,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__14885){var map__14887 = p__14885;var map__14887__$1 = ((cljs.core.seq_QMARK_.call(null,map__14887))?cljs.core.apply.call(null,cljs.core.hash_map,map__14887):map__14887);var websocket_url = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__14888,callback){var map__14890 = p__14888;var map__14890__$1 = ((cljs.core.seq_QMARK_.call(null,map__14890))?cljs.core.apply.call(null,cljs.core.hash_map,map__14890):map__14890);var msg = map__14890__$1;var dependency_file = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7883__auto__ = dependency_file;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__14890,map__14890__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__14890,map__14890__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__14891,p__14892){var map__14895 = p__14891;var map__14895__$1 = ((cljs.core.seq_QMARK_.call(null,map__14895))?cljs.core.apply.call(null,cljs.core.hash_map,map__14895):map__14895);var opts = map__14895__$1;var url_rewriter = cljs.core.get.call(null,map__14895__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__14896 = p__14892;var map__14896__$1 = ((cljs.core.seq_QMARK_.call(null,map__14896))?cljs.core.apply.call(null,cljs.core.hash_map,map__14896):map__14896);var d = map__14896__$1;var file = cljs.core.get.call(null,map__14896__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__14897,p__14898){var map__14939 = p__14897;var map__14939__$1 = ((cljs.core.seq_QMARK_.call(null,map__14939))?cljs.core.apply.call(null,cljs.core.hash_map,map__14939):map__14939);var opts = map__14939__$1;var on_jsload = cljs.core.get.call(null,map__14939__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__14939__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__14940 = p__14898;var map__14940__$1 = ((cljs.core.seq_QMARK_.call(null,map__14940))?cljs.core.apply.call(null,cljs.core.hash_map,map__14940):map__14940);var files = cljs.core.get.call(null,map__14940__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files){
return (function (state_14962){var state_val_14963 = (state_14962[1]);if((state_val_14963 === 6))
{var inst_14945 = (state_14962[7]);var inst_14954 = (state_14962[2]);var inst_14955 = [inst_14945];var inst_14956 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14955,null));var inst_14957 = cljs.core.apply.call(null,on_jsload,inst_14956);var state_14962__$1 = (function (){var statearr_14964 = state_14962;(statearr_14964[8] = inst_14954);
return statearr_14964;
})();var statearr_14965_14979 = state_14962__$1;(statearr_14965_14979[2] = inst_14957);
(statearr_14965_14979[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14963 === 5))
{var inst_14960 = (state_14962[2]);var state_14962__$1 = state_14962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14962__$1,inst_14960);
} else
{if((state_val_14963 === 4))
{var state_14962__$1 = state_14962;var statearr_14966_14980 = state_14962__$1;(statearr_14966_14980[2] = null);
(statearr_14966_14980[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14963 === 3))
{var inst_14945 = (state_14962[7]);var inst_14948 = console.debug("Figwheel: loaded these files");var inst_14949 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_14945);var inst_14950 = cljs.core.prn_str.call(null,inst_14949);var inst_14951 = console.log(inst_14950);var inst_14952 = cljs.core.async.timeout.call(null,10);var state_14962__$1 = (function (){var statearr_14967 = state_14962;(statearr_14967[9] = inst_14951);
(statearr_14967[10] = inst_14948);
return statearr_14967;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14962__$1,6,inst_14952);
} else
{if((state_val_14963 === 2))
{var inst_14945 = (state_14962[7]);var inst_14945__$1 = (state_14962[2]);var inst_14946 = cljs.core.not_empty.call(null,inst_14945__$1);var state_14962__$1 = (function (){var statearr_14968 = state_14962;(statearr_14968[7] = inst_14945__$1);
return statearr_14968;
})();if(cljs.core.truth_(inst_14946))
{var statearr_14969_14981 = state_14962__$1;(statearr_14969_14981[1] = 3);
} else
{var statearr_14970_14982 = state_14962__$1;(statearr_14970_14982[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14963 === 1))
{var inst_14941 = before_jsload.call(null,files);var inst_14942 = figwheel.client.add_request_urls.call(null,opts,files);var inst_14943 = figwheel.client.load_all_js_files.call(null,inst_14942);var state_14962__$1 = (function (){var statearr_14971 = state_14962;(statearr_14971[11] = inst_14941);
return statearr_14971;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14962__$1,2,inst_14943);
} else
{return null;
}
}
}
}
}
}
});})(c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files))
;return ((function (switch__10945__auto__,c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_14975 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14975[0] = state_machine__10946__auto__);
(statearr_14975[1] = 1);
return statearr_14975;
});
var state_machine__10946__auto____1 = (function (state_14962){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_14962);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object))
{var ex__10949__auto__ = e14976;var statearr_14977_14983 = state_14962;(statearr_14977_14983[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14984 = state_14962;
state_14962 = G__14984;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_14962){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_14962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files))
})();var state__11011__auto__ = (function (){var statearr_14978 = f__11010__auto__.call(null);(statearr_14978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_14978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__,map__14939,map__14939__$1,opts,on_jsload,before_jsload,map__14940,map__14940__$1,files))
);
return c__11009__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__14985,link_href){var map__14987 = p__14985;var map__14987__$1 = ((cljs.core.seq_QMARK_.call(null,map__14987))?cljs.core.apply.call(null,cljs.core.hash_map,map__14987):map__14987);var request_url = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__,parent){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__,parent){
return (function (state_15008){var state_val_15009 = (state_15008[1]);if((state_val_15009 === 2))
{var inst_15005 = (state_15008[2]);var inst_15006 = parent.removeChild(orig_link);var state_15008__$1 = (function (){var statearr_15010 = state_15008;(statearr_15010[7] = inst_15005);
return statearr_15010;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15008__$1,inst_15006);
} else
{if((state_val_15009 === 1))
{var inst_15003 = cljs.core.async.timeout.call(null,200);var state_15008__$1 = state_15008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,2,inst_15003);
} else
{return null;
}
}
});})(c__11009__auto__,parent))
;return ((function (switch__10945__auto__,c__11009__auto__,parent){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15014 = [null,null,null,null,null,null,null,null];(statearr_15014[0] = state_machine__10946__auto__);
(statearr_15014[1] = 1);
return statearr_15014;
});
var state_machine__10946__auto____1 = (function (state_15008){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15008);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15015){if((e15015 instanceof Object))
{var ex__10949__auto__ = e15015;var statearr_15016_15018 = state_15008;(statearr_15016_15018[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15019 = state_15008;
state_15008 = G__15019;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15008){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__,parent))
})();var state__11011__auto__ = (function (){var statearr_15017 = f__11010__auto__.call(null);(statearr_15017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_15017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__,parent))
);
return c__11009__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__15020){var map__15022 = p__15020;var map__15022__$1 = ((cljs.core.seq_QMARK_.call(null,map__15022))?cljs.core.apply.call(null,cljs.core.hash_map,map__15022):map__15022);var f_data = map__15022__$1;var request_url = cljs.core.get.call(null,map__15022__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__15022__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15023,files_msg){var map__15045 = p__15023;var map__15045__$1 = ((cljs.core.seq_QMARK_.call(null,map__15045))?cljs.core.apply.call(null,cljs.core.hash_map,map__15045):map__15045);var opts = map__15045__$1;var on_cssload = cljs.core.get.call(null,map__15045__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__15046_15066 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15047_15067 = null;var count__15048_15068 = 0;var i__15049_15069 = 0;while(true){
if((i__15049_15069 < count__15048_15068))
{var f_15070 = cljs.core._nth.call(null,chunk__15047_15067,i__15049_15069);figwheel.client.reload_css_file.call(null,f_15070);
{
var G__15071 = seq__15046_15066;
var G__15072 = chunk__15047_15067;
var G__15073 = count__15048_15068;
var G__15074 = (i__15049_15069 + 1);
seq__15046_15066 = G__15071;
chunk__15047_15067 = G__15072;
count__15048_15068 = G__15073;
i__15049_15069 = G__15074;
continue;
}
} else
{var temp__4126__auto___15075 = cljs.core.seq.call(null,seq__15046_15066);if(temp__4126__auto___15075)
{var seq__15046_15076__$1 = temp__4126__auto___15075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15046_15076__$1))
{var c__8631__auto___15077 = cljs.core.chunk_first.call(null,seq__15046_15076__$1);{
var G__15078 = cljs.core.chunk_rest.call(null,seq__15046_15076__$1);
var G__15079 = c__8631__auto___15077;
var G__15080 = cljs.core.count.call(null,c__8631__auto___15077);
var G__15081 = 0;
seq__15046_15066 = G__15078;
chunk__15047_15067 = G__15079;
count__15048_15068 = G__15080;
i__15049_15069 = G__15081;
continue;
}
} else
{var f_15082 = cljs.core.first.call(null,seq__15046_15076__$1);figwheel.client.reload_css_file.call(null,f_15082);
{
var G__15083 = cljs.core.next.call(null,seq__15046_15076__$1);
var G__15084 = null;
var G__15085 = 0;
var G__15086 = 0;
seq__15046_15066 = G__15083;
chunk__15047_15067 = G__15084;
count__15048_15068 = G__15085;
i__15049_15069 = G__15086;
continue;
}
}
} else
{}
}
break;
}
var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload){
return (function (state_15056){var state_val_15057 = (state_15056[1]);if((state_val_15057 === 2))
{var inst_15052 = (state_15056[2]);var inst_15053 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15054 = on_cssload.call(null,inst_15053);var state_15056__$1 = (function (){var statearr_15058 = state_15056;(statearr_15058[7] = inst_15052);
return statearr_15058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15056__$1,inst_15054);
} else
{if((state_val_15057 === 1))
{var inst_15050 = cljs.core.async.timeout.call(null,100);var state_15056__$1 = state_15056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15056__$1,2,inst_15050);
} else
{return null;
}
}
});})(c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload))
;return ((function (switch__10945__auto__,c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15062 = [null,null,null,null,null,null,null,null];(statearr_15062[0] = state_machine__10946__auto__);
(statearr_15062[1] = 1);
return statearr_15062;
});
var state_machine__10946__auto____1 = (function (state_15056){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15056);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15063){if((e15063 instanceof Object))
{var ex__10949__auto__ = e15063;var statearr_15064_15087 = state_15056;(statearr_15064_15087[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15088 = state_15056;
state_15056 = G__15088;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload))
})();var state__11011__auto__ = (function (){var statearr_15065 = f__11010__auto__.call(null);(statearr_15065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_15065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__,map__15045,map__15045__$1,opts,on_cssload))
);
return c__11009__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15089){var map__15094 = p__15089;var map__15094__$1 = ((cljs.core.seq_QMARK_.call(null,map__15094))?cljs.core.apply.call(null,cljs.core.hash_map,map__15094):map__15094);var opts = map__15094__$1;var on_compile_fail = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15095 = cljs.core._EQ_;var expr__15096 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15095.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__15096)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15095.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__15096)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15095.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__15096)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15094,map__15094__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15101 = {"detail":url};return obj15101;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15102){var map__15104 = p__15102;var map__15104__$1 = ((cljs.core.seq_QMARK_.call(null,map__15104))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104):map__15104);var class$ = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15105){var map__15111 = p__15105;var map__15111__$1 = ((cljs.core.seq_QMARK_.call(null,map__15111))?cljs.core.apply.call(null,cljs.core.hash_map,map__15111):map__15111);var ed = map__15111__$1;var exception_data = cljs.core.get.call(null,map__15111__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__15111__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__15112_15116 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15113_15117 = null;var count__15114_15118 = 0;var i__15115_15119 = 0;while(true){
if((i__15115_15119 < count__15114_15118))
{var msg_15120 = cljs.core._nth.call(null,chunk__15113_15117,i__15115_15119);console.log(msg_15120);
{
var G__15121 = seq__15112_15116;
var G__15122 = chunk__15113_15117;
var G__15123 = count__15114_15118;
var G__15124 = (i__15115_15119 + 1);
seq__15112_15116 = G__15121;
chunk__15113_15117 = G__15122;
count__15114_15118 = G__15123;
i__15115_15119 = G__15124;
continue;
}
} else
{var temp__4126__auto___15125 = cljs.core.seq.call(null,seq__15112_15116);if(temp__4126__auto___15125)
{var seq__15112_15126__$1 = temp__4126__auto___15125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15112_15126__$1))
{var c__8631__auto___15127 = cljs.core.chunk_first.call(null,seq__15112_15126__$1);{
var G__15128 = cljs.core.chunk_rest.call(null,seq__15112_15126__$1);
var G__15129 = c__8631__auto___15127;
var G__15130 = cljs.core.count.call(null,c__8631__auto___15127);
var G__15131 = 0;
seq__15112_15116 = G__15128;
chunk__15113_15117 = G__15129;
count__15114_15118 = G__15130;
i__15115_15119 = G__15131;
continue;
}
} else
{var msg_15132 = cljs.core.first.call(null,seq__15112_15126__$1);console.log(msg_15132);
{
var G__15133 = cljs.core.next.call(null,seq__15112_15126__$1);
var G__15134 = null;
var G__15135 = 0;
var G__15136 = 0;
seq__15112_15116 = G__15133;
chunk__15113_15117 = G__15134;
count__15114_15118 = G__15135;
i__15115_15119 = G__15136;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7883__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__15137){var map__15139 = p__15137;var map__15139__$1 = ((cljs.core.seq_QMARK_.call(null,map__15139))?cljs.core.apply.call(null,cljs.core.hash_map,map__15139):map__15139);var opts = map__15139__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15137 = null;if (arguments.length > 0) {
  p__15137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15137);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15140){
var p__15137 = cljs.core.seq(arglist__15140);
return watch_and_reload__delegate(p__15137);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map