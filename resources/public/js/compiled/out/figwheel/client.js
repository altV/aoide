// Compiled by ClojureScript 0.0-2371
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
var log__delegate = function (p__20884,args){var map__20886 = p__20884;var map__20886__$1 = ((cljs.core.seq_QMARK_.call(null,map__20886))?cljs.core.apply.call(null,cljs.core.hash_map,map__20886):map__20886);var debug = cljs.core.get.call(null,map__20886__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__20884,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__20884,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20887){
var p__20884 = cljs.core.first(arglist__20887);
var args = cljs.core.rest(arglist__20887);
return log__delegate(p__20884,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__20888){var map__20890 = p__20888;var map__20890__$1 = ((cljs.core.seq_QMARK_.call(null,map__20890))?cljs.core.apply.call(null,cljs.core.hash_map,map__20890):map__20890);var websocket_url = cljs.core.get.call(null,map__20890__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__20891,callback){var map__20893 = p__20891;var map__20893__$1 = ((cljs.core.seq_QMARK_.call(null,map__20893))?cljs.core.apply.call(null,cljs.core.hash_map,map__20893):map__20893);var msg = map__20893__$1;var dependency_file = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__9077__auto__ = dependency_file;if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__20893,map__20893__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__20893,map__20893__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__20894,p__20895){var map__20898 = p__20894;var map__20898__$1 = ((cljs.core.seq_QMARK_.call(null,map__20898))?cljs.core.apply.call(null,cljs.core.hash_map,map__20898):map__20898);var opts = map__20898__$1;var url_rewriter = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__20899 = p__20895;var map__20899__$1 = ((cljs.core.seq_QMARK_.call(null,map__20899))?cljs.core.apply.call(null,cljs.core.hash_map,map__20899):map__20899);var d = map__20899__$1;var file = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__20900,p__20901){var map__20943 = p__20900;var map__20943__$1 = ((cljs.core.seq_QMARK_.call(null,map__20943))?cljs.core.apply.call(null,cljs.core.hash_map,map__20943):map__20943);var opts = map__20943__$1;var on_jsload = cljs.core.get.call(null,map__20943__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__20943__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__20944 = p__20901;var map__20944__$1 = ((cljs.core.seq_QMARK_.call(null,map__20944))?cljs.core.apply.call(null,cljs.core.hash_map,map__20944):map__20944);var files = cljs.core.get.call(null,map__20944__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files){
return (function (state_20967){var state_val_20968 = (state_20967[(1)]);if((state_val_20968 === (6)))
{var inst_20949 = (state_20967[(7)]);var inst_20958 = (state_20967[(2)]);var inst_20959 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20960 = [inst_20949];var inst_20961 = (new cljs.core.PersistentVector(null,1,(5),inst_20959,inst_20960,null));var inst_20962 = cljs.core.apply.call(null,on_jsload,inst_20961);var state_20967__$1 = (function (){var statearr_20969 = state_20967;(statearr_20969[(8)] = inst_20958);
return statearr_20969;
})();var statearr_20970_20984 = state_20967__$1;(statearr_20970_20984[(2)] = inst_20962);
(statearr_20970_20984[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20968 === (5)))
{var inst_20965 = (state_20967[(2)]);var state_20967__$1 = state_20967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20967__$1,inst_20965);
} else
{if((state_val_20968 === (4)))
{var state_20967__$1 = state_20967;var statearr_20971_20985 = state_20967__$1;(statearr_20971_20985[(2)] = null);
(statearr_20971_20985[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20968 === (3)))
{var inst_20949 = (state_20967[(7)]);var inst_20952 = console.debug("Figwheel: loaded these files");var inst_20953 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20949);var inst_20954 = cljs.core.prn_str.call(null,inst_20953);var inst_20955 = console.log(inst_20954);var inst_20956 = cljs.core.async.timeout.call(null,(10));var state_20967__$1 = (function (){var statearr_20972 = state_20967;(statearr_20972[(9)] = inst_20952);
(statearr_20972[(10)] = inst_20955);
return statearr_20972;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20967__$1,(6),inst_20956);
} else
{if((state_val_20968 === (2)))
{var inst_20949 = (state_20967[(7)]);var inst_20949__$1 = (state_20967[(2)]);var inst_20950 = cljs.core.not_empty.call(null,inst_20949__$1);var state_20967__$1 = (function (){var statearr_20973 = state_20967;(statearr_20973[(7)] = inst_20949__$1);
return statearr_20973;
})();if(cljs.core.truth_(inst_20950))
{var statearr_20974_20986 = state_20967__$1;(statearr_20974_20986[(1)] = (3));
} else
{var statearr_20975_20987 = state_20967__$1;(statearr_20975_20987[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20968 === (1)))
{var inst_20945 = before_jsload.call(null,files);var inst_20946 = figwheel.client.add_request_urls.call(null,opts,files);var inst_20947 = figwheel.client.load_all_js_files.call(null,inst_20946);var state_20967__$1 = (function (){var statearr_20976 = state_20967;(statearr_20976[(11)] = inst_20945);
return statearr_20976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20967__$1,(2),inst_20947);
} else
{return null;
}
}
}
}
}
}
});})(c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files))
;return ((function (switch__12204__auto__,c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_20980 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20980[(0)] = state_machine__12205__auto__);
(statearr_20980[(1)] = (1));
return statearr_20980;
});
var state_machine__12205__auto____1 = (function (state_20967){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_20967);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e20981){if((e20981 instanceof Object))
{var ex__12208__auto__ = e20981;var statearr_20982_20988 = state_20967;(statearr_20982_20988[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20989 = state_20967;
state_20967 = G__20989;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_20967){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_20967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files))
})();var state__12271__auto__ = (function (){var statearr_20983 = f__12270__auto__.call(null);(statearr_20983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_20983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__,map__20943,map__20943__$1,opts,on_jsload,before_jsload,map__20944,map__20944__$1,files))
);
return c__12269__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__20990,link_href){var map__20992 = p__20990;var map__20992__$1 = ((cljs.core.seq_QMARK_.call(null,map__20992))?cljs.core.apply.call(null,cljs.core.hash_map,map__20992):map__20992);var request_url = cljs.core.get.call(null,map__20992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__20992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__,parent){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__,parent){
return (function (state_21013){var state_val_21014 = (state_21013[(1)]);if((state_val_21014 === (2)))
{var inst_21010 = (state_21013[(2)]);var inst_21011 = parent.removeChild(orig_link);var state_21013__$1 = (function (){var statearr_21015 = state_21013;(statearr_21015[(7)] = inst_21010);
return statearr_21015;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21013__$1,inst_21011);
} else
{if((state_val_21014 === (1)))
{var inst_21008 = cljs.core.async.timeout.call(null,(200));var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21013__$1,(2),inst_21008);
} else
{return null;
}
}
});})(c__12269__auto__,parent))
;return ((function (switch__12204__auto__,c__12269__auto__,parent){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21019 = [null,null,null,null,null,null,null,null];(statearr_21019[(0)] = state_machine__12205__auto__);
(statearr_21019[(1)] = (1));
return statearr_21019;
});
var state_machine__12205__auto____1 = (function (state_21013){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21013);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21020){if((e21020 instanceof Object))
{var ex__12208__auto__ = e21020;var statearr_21021_21023 = state_21013;(statearr_21021_21023[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21020;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21024 = state_21013;
state_21013 = G__21024;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21013){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__,parent))
})();var state__12271__auto__ = (function (){var statearr_21022 = f__12270__auto__.call(null);(statearr_21022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_21022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__,parent))
);
return c__12269__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__21025){var map__21027 = p__21025;var map__21027__$1 = ((cljs.core.seq_QMARK_.call(null,map__21027))?cljs.core.apply.call(null,cljs.core.hash_map,map__21027):map__21027);var f_data = map__21027__$1;var request_url = cljs.core.get.call(null,map__21027__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__21027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21028,files_msg){var map__21050 = p__21028;var map__21050__$1 = ((cljs.core.seq_QMARK_.call(null,map__21050))?cljs.core.apply.call(null,cljs.core.hash_map,map__21050):map__21050);var opts = map__21050__$1;var on_cssload = cljs.core.get.call(null,map__21050__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__21051_21071 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__21052_21072 = null;var count__21053_21073 = (0);var i__21054_21074 = (0);while(true){
if((i__21054_21074 < count__21053_21073))
{var f_21075 = cljs.core._nth.call(null,chunk__21052_21072,i__21054_21074);figwheel.client.reload_css_file.call(null,f_21075);
{
var G__21076 = seq__21051_21071;
var G__21077 = chunk__21052_21072;
var G__21078 = count__21053_21073;
var G__21079 = (i__21054_21074 + (1));
seq__21051_21071 = G__21076;
chunk__21052_21072 = G__21077;
count__21053_21073 = G__21078;
i__21054_21074 = G__21079;
continue;
}
} else
{var temp__4126__auto___21080 = cljs.core.seq.call(null,seq__21051_21071);if(temp__4126__auto___21080)
{var seq__21051_21081__$1 = temp__4126__auto___21080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21051_21081__$1))
{var c__9847__auto___21082 = cljs.core.chunk_first.call(null,seq__21051_21081__$1);{
var G__21083 = cljs.core.chunk_rest.call(null,seq__21051_21081__$1);
var G__21084 = c__9847__auto___21082;
var G__21085 = cljs.core.count.call(null,c__9847__auto___21082);
var G__21086 = (0);
seq__21051_21071 = G__21083;
chunk__21052_21072 = G__21084;
count__21053_21073 = G__21085;
i__21054_21074 = G__21086;
continue;
}
} else
{var f_21087 = cljs.core.first.call(null,seq__21051_21081__$1);figwheel.client.reload_css_file.call(null,f_21087);
{
var G__21088 = cljs.core.next.call(null,seq__21051_21081__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__21051_21071 = G__21088;
chunk__21052_21072 = G__21089;
count__21053_21073 = G__21090;
i__21054_21074 = G__21091;
continue;
}
}
} else
{}
}
break;
}
var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload){
return (function (state_21061){var state_val_21062 = (state_21061[(1)]);if((state_val_21062 === (2)))
{var inst_21057 = (state_21061[(2)]);var inst_21058 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_21059 = on_cssload.call(null,inst_21058);var state_21061__$1 = (function (){var statearr_21063 = state_21061;(statearr_21063[(7)] = inst_21057);
return statearr_21063;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21061__$1,inst_21059);
} else
{if((state_val_21062 === (1)))
{var inst_21055 = cljs.core.async.timeout.call(null,(100));var state_21061__$1 = state_21061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21061__$1,(2),inst_21055);
} else
{return null;
}
}
});})(c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload))
;return ((function (switch__12204__auto__,c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21067 = [null,null,null,null,null,null,null,null];(statearr_21067[(0)] = state_machine__12205__auto__);
(statearr_21067[(1)] = (1));
return statearr_21067;
});
var state_machine__12205__auto____1 = (function (state_21061){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21061);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21068){if((e21068 instanceof Object))
{var ex__12208__auto__ = e21068;var statearr_21069_21092 = state_21061;(statearr_21069_21092[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21068;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21093 = state_21061;
state_21061 = G__21093;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21061){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload))
})();var state__12271__auto__ = (function (){var statearr_21070 = f__12270__auto__.call(null);(statearr_21070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_21070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__,map__21050,map__21050__$1,opts,on_cssload))
);
return c__12269__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21094){var map__21099 = p__21094;var map__21099__$1 = ((cljs.core.seq_QMARK_.call(null,map__21099))?cljs.core.apply.call(null,cljs.core.hash_map,map__21099):map__21099);var opts = map__21099__$1;var on_compile_fail = cljs.core.get.call(null,map__21099__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__21099__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__21099__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__21099__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__21100 = cljs.core._EQ_;var expr__21101 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__21100.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__21101)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__21100.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__21101)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__21100.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21101)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21099,map__21099__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21106 = {"detail":url};return obj21106;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21107){var map__21109 = p__21107;var map__21109__$1 = ((cljs.core.seq_QMARK_.call(null,map__21109))?cljs.core.apply.call(null,cljs.core.hash_map,map__21109):map__21109);var class$ = cljs.core.get.call(null,map__21109__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__21109__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21110){var map__21116 = p__21110;var map__21116__$1 = ((cljs.core.seq_QMARK_.call(null,map__21116))?cljs.core.apply.call(null,cljs.core.hash_map,map__21116):map__21116);var ed = map__21116__$1;var exception_data = cljs.core.get.call(null,map__21116__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__21116__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__21117_21121 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__21118_21122 = null;var count__21119_21123 = (0);var i__21120_21124 = (0);while(true){
if((i__21120_21124 < count__21119_21123))
{var msg_21125 = cljs.core._nth.call(null,chunk__21118_21122,i__21120_21124);console.log(msg_21125);
{
var G__21126 = seq__21117_21121;
var G__21127 = chunk__21118_21122;
var G__21128 = count__21119_21123;
var G__21129 = (i__21120_21124 + (1));
seq__21117_21121 = G__21126;
chunk__21118_21122 = G__21127;
count__21119_21123 = G__21128;
i__21120_21124 = G__21129;
continue;
}
} else
{var temp__4126__auto___21130 = cljs.core.seq.call(null,seq__21117_21121);if(temp__4126__auto___21130)
{var seq__21117_21131__$1 = temp__4126__auto___21130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21117_21131__$1))
{var c__9847__auto___21132 = cljs.core.chunk_first.call(null,seq__21117_21131__$1);{
var G__21133 = cljs.core.chunk_rest.call(null,seq__21117_21131__$1);
var G__21134 = c__9847__auto___21132;
var G__21135 = cljs.core.count.call(null,c__9847__auto___21132);
var G__21136 = (0);
seq__21117_21121 = G__21133;
chunk__21118_21122 = G__21134;
count__21119_21123 = G__21135;
i__21120_21124 = G__21136;
continue;
}
} else
{var msg_21137 = cljs.core.first.call(null,seq__21117_21131__$1);console.log(msg_21137);
{
var G__21138 = cljs.core.next.call(null,seq__21117_21131__$1);
var G__21139 = null;
var G__21140 = (0);
var G__21141 = (0);
seq__21117_21121 = G__21138;
chunk__21118_21122 = G__21139;
count__21119_21123 = G__21140;
i__21120_21124 = G__21141;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__9077__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__21142){var map__21144 = p__21142;var map__21144__$1 = ((cljs.core.seq_QMARK_.call(null,map__21144))?cljs.core.apply.call(null,cljs.core.hash_map,map__21144):map__21144);var opts = map__21144__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21142 = null;if (arguments.length > 0) {
  p__21142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__21142);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21145){
var p__21142 = cljs.core.seq(arglist__21145);
return watch_and_reload__delegate(p__21142);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map