// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21260 = (function (f,fn_handler,meta21261){
this.f = f;
this.fn_handler = fn_handler;
this.meta21261 = meta21261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21260.cljs$lang$type = true;
cljs.core.async.t21260.cljs$lang$ctorStr = "cljs.core.async/t21260";
cljs.core.async.t21260.cljs$lang$ctorPrWriter = (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21260");
});
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21262){var self__ = this;
var _21262__$1 = this;return self__.meta21261;
});
cljs.core.async.t21260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21262,meta21261__$1){var self__ = this;
var _21262__$1 = this;return (new cljs.core.async.t21260(self__.f,self__.fn_handler,meta21261__$1));
});
cljs.core.async.__GT_t21260 = (function __GT_t21260(f__$1,fn_handler__$1,meta21261){return (new cljs.core.async.t21260(f__$1,fn_handler__$1,meta21261));
});
}
return (new cljs.core.async.t21260(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21264 = buff;if(G__21264)
{var bit__9741__auto__ = null;if(cljs.core.truth_((function (){var or__9077__auto__ = bit__9741__auto__;if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{return G__21264.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21264);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_21265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21265);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21265,ret){
return (function (){return fn1.call(null,val_21265);
});})(val_21265,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9947__auto___21266 = n;var x_21267 = (0);while(true){
if((x_21267 < n__9947__auto___21266))
{(a[x_21267] = (0));
{
var G__21268 = (x_21267 + (1));
x_21267 = G__21268;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21269 = (i + (1));
i = G__21269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21273 = (function (flag,alt_flag,meta21274){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21274 = meta21274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21273.cljs$lang$type = true;
cljs.core.async.t21273.cljs$lang$ctorStr = "cljs.core.async/t21273";
cljs.core.async.t21273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21273");
});})(flag))
;
cljs.core.async.t21273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21275){var self__ = this;
var _21275__$1 = this;return self__.meta21274;
});})(flag))
;
cljs.core.async.t21273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21275,meta21274__$1){var self__ = this;
var _21275__$1 = this;return (new cljs.core.async.t21273(self__.flag,self__.alt_flag,meta21274__$1));
});})(flag))
;
cljs.core.async.__GT_t21273 = ((function (flag){
return (function __GT_t21273(flag__$1,alt_flag__$1,meta21274){return (new cljs.core.async.t21273(flag__$1,alt_flag__$1,meta21274));
});})(flag))
;
}
return (new cljs.core.async.t21273(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21279 = (function (cb,flag,alt_handler,meta21280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21280 = meta21280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21279.cljs$lang$type = true;
cljs.core.async.t21279.cljs$lang$ctorStr = "cljs.core.async/t21279";
cljs.core.async.t21279.cljs$lang$ctorPrWriter = (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21279");
});
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21281){var self__ = this;
var _21281__$1 = this;return self__.meta21280;
});
cljs.core.async.t21279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21281,meta21280__$1){var self__ = this;
var _21281__$1 = this;return (new cljs.core.async.t21279(self__.cb,self__.flag,self__.alt_handler,meta21280__$1));
});
cljs.core.async.__GT_t21279 = (function __GT_t21279(cb__$1,flag__$1,alt_handler__$1,meta21280){return (new cljs.core.async.t21279(cb__$1,flag__$1,alt_handler__$1,meta21280));
});
}
return (new cljs.core.async.t21279(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21282_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21282_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21283_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9077__auto__ = wport;if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21284 = (i + (1));
i = G__21284;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9077__auto__ = ret;if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__9065__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9065__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9065__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21285){var map__21287 = p__21285;var map__21287__$1 = ((cljs.core.seq_QMARK_.call(null,map__21287))?cljs.core.apply.call(null,cljs.core.hash_map,map__21287):map__21287);var opts = map__21287__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__21285 = null;if (arguments.length > 1) {
  p__21285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21288){
var ports = cljs.core.first(arglist__21288);
var p__21285 = cljs.core.rest(arglist__21288);
return alts_BANG___delegate(ports,p__21285);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21296 = (function (ch,f,map_LT_,meta21297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21297 = meta21297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21296.cljs$lang$type = true;
cljs.core.async.t21296.cljs$lang$ctorStr = "cljs.core.async/t21296";
cljs.core.async.t21296.cljs$lang$ctorPrWriter = (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21296");
});
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21299 = (function (fn1,_,meta21297,ch,f,map_LT_,meta21300){
this.fn1 = fn1;
this._ = _;
this.meta21297 = meta21297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21300 = meta21300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21299.cljs$lang$type = true;
cljs.core.async.t21299.cljs$lang$ctorStr = "cljs.core.async/t21299";
cljs.core.async.t21299.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21299");
});})(___$1))
;
cljs.core.async.t21299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21289_SHARP_){return f1.call(null,(((p1__21289_SHARP_ == null))?null:self__.f.call(null,p1__21289_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21301){var self__ = this;
var _21301__$1 = this;return self__.meta21300;
});})(___$1))
;
cljs.core.async.t21299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21301,meta21300__$1){var self__ = this;
var _21301__$1 = this;return (new cljs.core.async.t21299(self__.fn1,self__._,self__.meta21297,self__.ch,self__.f,self__.map_LT_,meta21300__$1));
});})(___$1))
;
cljs.core.async.__GT_t21299 = ((function (___$1){
return (function __GT_t21299(fn1__$1,___$2,meta21297__$1,ch__$2,f__$2,map_LT___$2,meta21300){return (new cljs.core.async.t21299(fn1__$1,___$2,meta21297__$1,ch__$2,f__$2,map_LT___$2,meta21300));
});})(___$1))
;
}
return (new cljs.core.async.t21299(fn1,___$1,self__.meta21297,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9065__auto__ = ret;if(cljs.core.truth_(and__9065__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9065__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21298){var self__ = this;
var _21298__$1 = this;return self__.meta21297;
});
cljs.core.async.t21296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21298,meta21297__$1){var self__ = this;
var _21298__$1 = this;return (new cljs.core.async.t21296(self__.ch,self__.f,self__.map_LT_,meta21297__$1));
});
cljs.core.async.__GT_t21296 = (function __GT_t21296(ch__$1,f__$1,map_LT___$1,meta21297){return (new cljs.core.async.t21296(ch__$1,f__$1,map_LT___$1,meta21297));
});
}
return (new cljs.core.async.t21296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21305 = (function (ch,f,map_GT_,meta21306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21306 = meta21306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21305.cljs$lang$type = true;
cljs.core.async.t21305.cljs$lang$ctorStr = "cljs.core.async/t21305";
cljs.core.async.t21305.cljs$lang$ctorPrWriter = (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21305");
});
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21307){var self__ = this;
var _21307__$1 = this;return self__.meta21306;
});
cljs.core.async.t21305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21307,meta21306__$1){var self__ = this;
var _21307__$1 = this;return (new cljs.core.async.t21305(self__.ch,self__.f,self__.map_GT_,meta21306__$1));
});
cljs.core.async.__GT_t21305 = (function __GT_t21305(ch__$1,f__$1,map_GT___$1,meta21306){return (new cljs.core.async.t21305(ch__$1,f__$1,map_GT___$1,meta21306));
});
}
return (new cljs.core.async.t21305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21311 = (function (ch,p,filter_GT_,meta21312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21312 = meta21312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21311.cljs$lang$type = true;
cljs.core.async.t21311.cljs$lang$ctorStr = "cljs.core.async/t21311";
cljs.core.async.t21311.cljs$lang$ctorPrWriter = (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t21311");
});
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21313){var self__ = this;
var _21313__$1 = this;return self__.meta21312;
});
cljs.core.async.t21311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21313,meta21312__$1){var self__ = this;
var _21313__$1 = this;return (new cljs.core.async.t21311(self__.ch,self__.p,self__.filter_GT_,meta21312__$1));
});
cljs.core.async.__GT_t21311 = (function __GT_t21311(ch__$1,p__$1,filter_GT___$1,meta21312){return (new cljs.core.async.t21311(ch__$1,p__$1,filter_GT___$1,meta21312));
});
}
return (new cljs.core.async.t21311(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___21396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___21396,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___21396,out){
return (function (state_21375){var state_val_21376 = (state_21375[(1)]);if((state_val_21376 === (7)))
{var inst_21371 = (state_21375[(2)]);var state_21375__$1 = state_21375;var statearr_21377_21397 = state_21375__$1;(statearr_21377_21397[(2)] = inst_21371);
(statearr_21377_21397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (1)))
{var state_21375__$1 = state_21375;var statearr_21378_21398 = state_21375__$1;(statearr_21378_21398[(2)] = null);
(statearr_21378_21398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (4)))
{var inst_21357 = (state_21375[(7)]);var inst_21357__$1 = (state_21375[(2)]);var inst_21358 = (inst_21357__$1 == null);var state_21375__$1 = (function (){var statearr_21379 = state_21375;(statearr_21379[(7)] = inst_21357__$1);
return statearr_21379;
})();if(cljs.core.truth_(inst_21358))
{var statearr_21380_21399 = state_21375__$1;(statearr_21380_21399[(1)] = (5));
} else
{var statearr_21381_21400 = state_21375__$1;(statearr_21381_21400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (6)))
{var inst_21357 = (state_21375[(7)]);var inst_21362 = p.call(null,inst_21357);var state_21375__$1 = state_21375;if(cljs.core.truth_(inst_21362))
{var statearr_21382_21401 = state_21375__$1;(statearr_21382_21401[(1)] = (8));
} else
{var statearr_21383_21402 = state_21375__$1;(statearr_21383_21402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (3)))
{var inst_21373 = (state_21375[(2)]);var state_21375__$1 = state_21375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21375__$1,inst_21373);
} else
{if((state_val_21376 === (2)))
{var state_21375__$1 = state_21375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21375__$1,(4),ch);
} else
{if((state_val_21376 === (11)))
{var inst_21365 = (state_21375[(2)]);var state_21375__$1 = state_21375;var statearr_21384_21403 = state_21375__$1;(statearr_21384_21403[(2)] = inst_21365);
(statearr_21384_21403[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (9)))
{var state_21375__$1 = state_21375;var statearr_21385_21404 = state_21375__$1;(statearr_21385_21404[(2)] = null);
(statearr_21385_21404[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (5)))
{var inst_21360 = cljs.core.async.close_BANG_.call(null,out);var state_21375__$1 = state_21375;var statearr_21386_21405 = state_21375__$1;(statearr_21386_21405[(2)] = inst_21360);
(statearr_21386_21405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (10)))
{var inst_21368 = (state_21375[(2)]);var state_21375__$1 = (function (){var statearr_21387 = state_21375;(statearr_21387[(8)] = inst_21368);
return statearr_21387;
})();var statearr_21388_21406 = state_21375__$1;(statearr_21388_21406[(2)] = null);
(statearr_21388_21406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21376 === (8)))
{var inst_21357 = (state_21375[(7)]);var state_21375__$1 = state_21375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21375__$1,(11),out,inst_21357);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___21396,out))
;return ((function (switch__12204__auto__,c__12269__auto___21396,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21392 = [null,null,null,null,null,null,null,null,null];(statearr_21392[(0)] = state_machine__12205__auto__);
(statearr_21392[(1)] = (1));
return statearr_21392;
});
var state_machine__12205__auto____1 = (function (state_21375){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21375);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21393){if((e21393 instanceof Object))
{var ex__12208__auto__ = e21393;var statearr_21394_21407 = state_21375;(statearr_21394_21407[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21408 = state_21375;
state_21375 = G__21408;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21375){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___21396,out))
})();var state__12271__auto__ = (function (){var statearr_21395 = f__12270__auto__.call(null);(statearr_21395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___21396);
return statearr_21395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___21396,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__){
return (function (state_21574){var state_val_21575 = (state_21574[(1)]);if((state_val_21575 === (7)))
{var inst_21570 = (state_21574[(2)]);var state_21574__$1 = state_21574;var statearr_21576_21617 = state_21574__$1;(statearr_21576_21617[(2)] = inst_21570);
(statearr_21576_21617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (20)))
{var inst_21540 = (state_21574[(7)]);var inst_21551 = (state_21574[(2)]);var inst_21552 = cljs.core.next.call(null,inst_21540);var inst_21526 = inst_21552;var inst_21527 = null;var inst_21528 = (0);var inst_21529 = (0);var state_21574__$1 = (function (){var statearr_21577 = state_21574;(statearr_21577[(8)] = inst_21527);
(statearr_21577[(9)] = inst_21529);
(statearr_21577[(10)] = inst_21528);
(statearr_21577[(11)] = inst_21551);
(statearr_21577[(12)] = inst_21526);
return statearr_21577;
})();var statearr_21578_21618 = state_21574__$1;(statearr_21578_21618[(2)] = null);
(statearr_21578_21618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (1)))
{var state_21574__$1 = state_21574;var statearr_21579_21619 = state_21574__$1;(statearr_21579_21619[(2)] = null);
(statearr_21579_21619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (4)))
{var inst_21515 = (state_21574[(13)]);var inst_21515__$1 = (state_21574[(2)]);var inst_21516 = (inst_21515__$1 == null);var state_21574__$1 = (function (){var statearr_21580 = state_21574;(statearr_21580[(13)] = inst_21515__$1);
return statearr_21580;
})();if(cljs.core.truth_(inst_21516))
{var statearr_21581_21620 = state_21574__$1;(statearr_21581_21620[(1)] = (5));
} else
{var statearr_21582_21621 = state_21574__$1;(statearr_21582_21621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (15)))
{var state_21574__$1 = state_21574;var statearr_21586_21622 = state_21574__$1;(statearr_21586_21622[(2)] = null);
(statearr_21586_21622[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (21)))
{var state_21574__$1 = state_21574;var statearr_21587_21623 = state_21574__$1;(statearr_21587_21623[(2)] = null);
(statearr_21587_21623[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (13)))
{var inst_21527 = (state_21574[(8)]);var inst_21529 = (state_21574[(9)]);var inst_21528 = (state_21574[(10)]);var inst_21526 = (state_21574[(12)]);var inst_21536 = (state_21574[(2)]);var inst_21537 = (inst_21529 + (1));var tmp21583 = inst_21527;var tmp21584 = inst_21528;var tmp21585 = inst_21526;var inst_21526__$1 = tmp21585;var inst_21527__$1 = tmp21583;var inst_21528__$1 = tmp21584;var inst_21529__$1 = inst_21537;var state_21574__$1 = (function (){var statearr_21588 = state_21574;(statearr_21588[(8)] = inst_21527__$1);
(statearr_21588[(9)] = inst_21529__$1);
(statearr_21588[(14)] = inst_21536);
(statearr_21588[(10)] = inst_21528__$1);
(statearr_21588[(12)] = inst_21526__$1);
return statearr_21588;
})();var statearr_21589_21624 = state_21574__$1;(statearr_21589_21624[(2)] = null);
(statearr_21589_21624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (22)))
{var state_21574__$1 = state_21574;var statearr_21590_21625 = state_21574__$1;(statearr_21590_21625[(2)] = null);
(statearr_21590_21625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (6)))
{var inst_21515 = (state_21574[(13)]);var inst_21524 = f.call(null,inst_21515);var inst_21525 = cljs.core.seq.call(null,inst_21524);var inst_21526 = inst_21525;var inst_21527 = null;var inst_21528 = (0);var inst_21529 = (0);var state_21574__$1 = (function (){var statearr_21591 = state_21574;(statearr_21591[(8)] = inst_21527);
(statearr_21591[(9)] = inst_21529);
(statearr_21591[(10)] = inst_21528);
(statearr_21591[(12)] = inst_21526);
return statearr_21591;
})();var statearr_21592_21626 = state_21574__$1;(statearr_21592_21626[(2)] = null);
(statearr_21592_21626[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (17)))
{var inst_21540 = (state_21574[(7)]);var inst_21544 = cljs.core.chunk_first.call(null,inst_21540);var inst_21545 = cljs.core.chunk_rest.call(null,inst_21540);var inst_21546 = cljs.core.count.call(null,inst_21544);var inst_21526 = inst_21545;var inst_21527 = inst_21544;var inst_21528 = inst_21546;var inst_21529 = (0);var state_21574__$1 = (function (){var statearr_21593 = state_21574;(statearr_21593[(8)] = inst_21527);
(statearr_21593[(9)] = inst_21529);
(statearr_21593[(10)] = inst_21528);
(statearr_21593[(12)] = inst_21526);
return statearr_21593;
})();var statearr_21594_21627 = state_21574__$1;(statearr_21594_21627[(2)] = null);
(statearr_21594_21627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (3)))
{var inst_21572 = (state_21574[(2)]);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21574__$1,inst_21572);
} else
{if((state_val_21575 === (12)))
{var inst_21560 = (state_21574[(2)]);var state_21574__$1 = state_21574;var statearr_21595_21628 = state_21574__$1;(statearr_21595_21628[(2)] = inst_21560);
(statearr_21595_21628[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (2)))
{var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21574__$1,(4),in$);
} else
{if((state_val_21575 === (23)))
{var inst_21568 = (state_21574[(2)]);var state_21574__$1 = state_21574;var statearr_21596_21629 = state_21574__$1;(statearr_21596_21629[(2)] = inst_21568);
(statearr_21596_21629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (19)))
{var inst_21555 = (state_21574[(2)]);var state_21574__$1 = state_21574;var statearr_21597_21630 = state_21574__$1;(statearr_21597_21630[(2)] = inst_21555);
(statearr_21597_21630[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (11)))
{var inst_21540 = (state_21574[(7)]);var inst_21526 = (state_21574[(12)]);var inst_21540__$1 = cljs.core.seq.call(null,inst_21526);var state_21574__$1 = (function (){var statearr_21598 = state_21574;(statearr_21598[(7)] = inst_21540__$1);
return statearr_21598;
})();if(inst_21540__$1)
{var statearr_21599_21631 = state_21574__$1;(statearr_21599_21631[(1)] = (14));
} else
{var statearr_21600_21632 = state_21574__$1;(statearr_21600_21632[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (9)))
{var inst_21562 = (state_21574[(2)]);var inst_21563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21574__$1 = (function (){var statearr_21601 = state_21574;(statearr_21601[(15)] = inst_21562);
return statearr_21601;
})();if(cljs.core.truth_(inst_21563))
{var statearr_21602_21633 = state_21574__$1;(statearr_21602_21633[(1)] = (21));
} else
{var statearr_21603_21634 = state_21574__$1;(statearr_21603_21634[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (5)))
{var inst_21518 = cljs.core.async.close_BANG_.call(null,out);var state_21574__$1 = state_21574;var statearr_21604_21635 = state_21574__$1;(statearr_21604_21635[(2)] = inst_21518);
(statearr_21604_21635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (14)))
{var inst_21540 = (state_21574[(7)]);var inst_21542 = cljs.core.chunked_seq_QMARK_.call(null,inst_21540);var state_21574__$1 = state_21574;if(inst_21542)
{var statearr_21605_21636 = state_21574__$1;(statearr_21605_21636[(1)] = (17));
} else
{var statearr_21606_21637 = state_21574__$1;(statearr_21606_21637[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (16)))
{var inst_21558 = (state_21574[(2)]);var state_21574__$1 = state_21574;var statearr_21607_21638 = state_21574__$1;(statearr_21607_21638[(2)] = inst_21558);
(statearr_21607_21638[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21575 === (10)))
{var inst_21527 = (state_21574[(8)]);var inst_21529 = (state_21574[(9)]);var inst_21534 = cljs.core._nth.call(null,inst_21527,inst_21529);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21574__$1,(13),out,inst_21534);
} else
{if((state_val_21575 === (18)))
{var inst_21540 = (state_21574[(7)]);var inst_21549 = cljs.core.first.call(null,inst_21540);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21574__$1,(20),out,inst_21549);
} else
{if((state_val_21575 === (8)))
{var inst_21529 = (state_21574[(9)]);var inst_21528 = (state_21574[(10)]);var inst_21531 = (inst_21529 < inst_21528);var inst_21532 = inst_21531;var state_21574__$1 = state_21574;if(cljs.core.truth_(inst_21532))
{var statearr_21608_21639 = state_21574__$1;(statearr_21608_21639[(1)] = (10));
} else
{var statearr_21609_21640 = state_21574__$1;(statearr_21609_21640[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto__))
;return ((function (switch__12204__auto__,c__12269__auto__){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21613[(0)] = state_machine__12205__auto__);
(statearr_21613[(1)] = (1));
return statearr_21613;
});
var state_machine__12205__auto____1 = (function (state_21574){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21574);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object))
{var ex__12208__auto__ = e21614;var statearr_21615_21641 = state_21574;(statearr_21615_21641[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21642 = state_21574;
state_21574 = G__21642;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21574){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__))
})();var state__12271__auto__ = (function (){var statearr_21616 = f__12270__auto__.call(null);(statearr_21616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_21616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__))
);
return c__12269__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12269__auto___21737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___21737){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___21737){
return (function (state_21713){var state_val_21714 = (state_21713[(1)]);if((state_val_21714 === (7)))
{var inst_21709 = (state_21713[(2)]);var state_21713__$1 = state_21713;var statearr_21715_21738 = state_21713__$1;(statearr_21715_21738[(2)] = inst_21709);
(statearr_21715_21738[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (1)))
{var state_21713__$1 = state_21713;var statearr_21716_21739 = state_21713__$1;(statearr_21716_21739[(2)] = null);
(statearr_21716_21739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (4)))
{var inst_21692 = (state_21713[(7)]);var inst_21692__$1 = (state_21713[(2)]);var inst_21693 = (inst_21692__$1 == null);var state_21713__$1 = (function (){var statearr_21717 = state_21713;(statearr_21717[(7)] = inst_21692__$1);
return statearr_21717;
})();if(cljs.core.truth_(inst_21693))
{var statearr_21718_21740 = state_21713__$1;(statearr_21718_21740[(1)] = (5));
} else
{var statearr_21719_21741 = state_21713__$1;(statearr_21719_21741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (13)))
{var state_21713__$1 = state_21713;var statearr_21720_21742 = state_21713__$1;(statearr_21720_21742[(2)] = null);
(statearr_21720_21742[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (6)))
{var inst_21692 = (state_21713[(7)]);var state_21713__$1 = state_21713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21713__$1,(11),to,inst_21692);
} else
{if((state_val_21714 === (3)))
{var inst_21711 = (state_21713[(2)]);var state_21713__$1 = state_21713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21713__$1,inst_21711);
} else
{if((state_val_21714 === (12)))
{var state_21713__$1 = state_21713;var statearr_21721_21743 = state_21713__$1;(statearr_21721_21743[(2)] = null);
(statearr_21721_21743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (2)))
{var state_21713__$1 = state_21713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21713__$1,(4),from);
} else
{if((state_val_21714 === (11)))
{var inst_21702 = (state_21713[(2)]);var state_21713__$1 = state_21713;if(cljs.core.truth_(inst_21702))
{var statearr_21722_21744 = state_21713__$1;(statearr_21722_21744[(1)] = (12));
} else
{var statearr_21723_21745 = state_21713__$1;(statearr_21723_21745[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (9)))
{var state_21713__$1 = state_21713;var statearr_21724_21746 = state_21713__$1;(statearr_21724_21746[(2)] = null);
(statearr_21724_21746[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (5)))
{var state_21713__$1 = state_21713;if(cljs.core.truth_(close_QMARK_))
{var statearr_21725_21747 = state_21713__$1;(statearr_21725_21747[(1)] = (8));
} else
{var statearr_21726_21748 = state_21713__$1;(statearr_21726_21748[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (14)))
{var inst_21707 = (state_21713[(2)]);var state_21713__$1 = state_21713;var statearr_21727_21749 = state_21713__$1;(statearr_21727_21749[(2)] = inst_21707);
(statearr_21727_21749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (10)))
{var inst_21699 = (state_21713[(2)]);var state_21713__$1 = state_21713;var statearr_21728_21750 = state_21713__$1;(statearr_21728_21750[(2)] = inst_21699);
(statearr_21728_21750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21714 === (8)))
{var inst_21696 = cljs.core.async.close_BANG_.call(null,to);var state_21713__$1 = state_21713;var statearr_21729_21751 = state_21713__$1;(statearr_21729_21751[(2)] = inst_21696);
(statearr_21729_21751[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___21737))
;return ((function (switch__12204__auto__,c__12269__auto___21737){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21733 = [null,null,null,null,null,null,null,null];(statearr_21733[(0)] = state_machine__12205__auto__);
(statearr_21733[(1)] = (1));
return statearr_21733;
});
var state_machine__12205__auto____1 = (function (state_21713){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21713);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21734){if((e21734 instanceof Object))
{var ex__12208__auto__ = e21734;var statearr_21735_21752 = state_21713;(statearr_21735_21752[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21753 = state_21713;
state_21713 = G__21753;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21713){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___21737))
})();var state__12271__auto__ = (function (){var statearr_21736 = f__12270__auto__.call(null);(statearr_21736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___21737);
return statearr_21736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___21737))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12269__auto___21854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___21854,tc,fc){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___21854,tc,fc){
return (function (state_21829){var state_val_21830 = (state_21829[(1)]);if((state_val_21830 === (7)))
{var inst_21825 = (state_21829[(2)]);var state_21829__$1 = state_21829;var statearr_21831_21855 = state_21829__$1;(statearr_21831_21855[(2)] = inst_21825);
(statearr_21831_21855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (1)))
{var state_21829__$1 = state_21829;var statearr_21832_21856 = state_21829__$1;(statearr_21832_21856[(2)] = null);
(statearr_21832_21856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (4)))
{var inst_21806 = (state_21829[(7)]);var inst_21806__$1 = (state_21829[(2)]);var inst_21807 = (inst_21806__$1 == null);var state_21829__$1 = (function (){var statearr_21833 = state_21829;(statearr_21833[(7)] = inst_21806__$1);
return statearr_21833;
})();if(cljs.core.truth_(inst_21807))
{var statearr_21834_21857 = state_21829__$1;(statearr_21834_21857[(1)] = (5));
} else
{var statearr_21835_21858 = state_21829__$1;(statearr_21835_21858[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (13)))
{var state_21829__$1 = state_21829;var statearr_21836_21859 = state_21829__$1;(statearr_21836_21859[(2)] = null);
(statearr_21836_21859[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (6)))
{var inst_21806 = (state_21829[(7)]);var inst_21812 = p.call(null,inst_21806);var state_21829__$1 = state_21829;if(cljs.core.truth_(inst_21812))
{var statearr_21837_21860 = state_21829__$1;(statearr_21837_21860[(1)] = (9));
} else
{var statearr_21838_21861 = state_21829__$1;(statearr_21838_21861[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (3)))
{var inst_21827 = (state_21829[(2)]);var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21829__$1,inst_21827);
} else
{if((state_val_21830 === (12)))
{var state_21829__$1 = state_21829;var statearr_21839_21862 = state_21829__$1;(statearr_21839_21862[(2)] = null);
(statearr_21839_21862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (2)))
{var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21829__$1,(4),ch);
} else
{if((state_val_21830 === (11)))
{var inst_21806 = (state_21829[(7)]);var inst_21816 = (state_21829[(2)]);var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21829__$1,(8),inst_21816,inst_21806);
} else
{if((state_val_21830 === (9)))
{var state_21829__$1 = state_21829;var statearr_21840_21863 = state_21829__$1;(statearr_21840_21863[(2)] = tc);
(statearr_21840_21863[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (5)))
{var inst_21809 = cljs.core.async.close_BANG_.call(null,tc);var inst_21810 = cljs.core.async.close_BANG_.call(null,fc);var state_21829__$1 = (function (){var statearr_21841 = state_21829;(statearr_21841[(8)] = inst_21809);
return statearr_21841;
})();var statearr_21842_21864 = state_21829__$1;(statearr_21842_21864[(2)] = inst_21810);
(statearr_21842_21864[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (14)))
{var inst_21823 = (state_21829[(2)]);var state_21829__$1 = state_21829;var statearr_21843_21865 = state_21829__$1;(statearr_21843_21865[(2)] = inst_21823);
(statearr_21843_21865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (10)))
{var state_21829__$1 = state_21829;var statearr_21844_21866 = state_21829__$1;(statearr_21844_21866[(2)] = fc);
(statearr_21844_21866[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (8)))
{var inst_21818 = (state_21829[(2)]);var state_21829__$1 = state_21829;if(cljs.core.truth_(inst_21818))
{var statearr_21845_21867 = state_21829__$1;(statearr_21845_21867[(1)] = (12));
} else
{var statearr_21846_21868 = state_21829__$1;(statearr_21846_21868[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___21854,tc,fc))
;return ((function (switch__12204__auto__,c__12269__auto___21854,tc,fc){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21850 = [null,null,null,null,null,null,null,null,null];(statearr_21850[(0)] = state_machine__12205__auto__);
(statearr_21850[(1)] = (1));
return statearr_21850;
});
var state_machine__12205__auto____1 = (function (state_21829){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21829);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21851){if((e21851 instanceof Object))
{var ex__12208__auto__ = e21851;var statearr_21852_21869 = state_21829;(statearr_21852_21869[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21851;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21870 = state_21829;
state_21829 = G__21870;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21829){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___21854,tc,fc))
})();var state__12271__auto__ = (function (){var statearr_21853 = f__12270__auto__.call(null);(statearr_21853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___21854);
return statearr_21853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___21854,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__){
return (function (state_21917){var state_val_21918 = (state_21917[(1)]);if((state_val_21918 === (7)))
{var inst_21913 = (state_21917[(2)]);var state_21917__$1 = state_21917;var statearr_21919_21935 = state_21917__$1;(statearr_21919_21935[(2)] = inst_21913);
(statearr_21919_21935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21918 === (6)))
{var inst_21903 = (state_21917[(7)]);var inst_21906 = (state_21917[(8)]);var inst_21910 = f.call(null,inst_21903,inst_21906);var inst_21903__$1 = inst_21910;var state_21917__$1 = (function (){var statearr_21920 = state_21917;(statearr_21920[(7)] = inst_21903__$1);
return statearr_21920;
})();var statearr_21921_21936 = state_21917__$1;(statearr_21921_21936[(2)] = null);
(statearr_21921_21936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21918 === (5)))
{var inst_21903 = (state_21917[(7)]);var state_21917__$1 = state_21917;var statearr_21922_21937 = state_21917__$1;(statearr_21922_21937[(2)] = inst_21903);
(statearr_21922_21937[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21918 === (4)))
{var inst_21906 = (state_21917[(8)]);var inst_21906__$1 = (state_21917[(2)]);var inst_21907 = (inst_21906__$1 == null);var state_21917__$1 = (function (){var statearr_21923 = state_21917;(statearr_21923[(8)] = inst_21906__$1);
return statearr_21923;
})();if(cljs.core.truth_(inst_21907))
{var statearr_21924_21938 = state_21917__$1;(statearr_21924_21938[(1)] = (5));
} else
{var statearr_21925_21939 = state_21917__$1;(statearr_21925_21939[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21918 === (3)))
{var inst_21915 = (state_21917[(2)]);var state_21917__$1 = state_21917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21917__$1,inst_21915);
} else
{if((state_val_21918 === (2)))
{var state_21917__$1 = state_21917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21917__$1,(4),ch);
} else
{if((state_val_21918 === (1)))
{var inst_21903 = init;var state_21917__$1 = (function (){var statearr_21926 = state_21917;(statearr_21926[(7)] = inst_21903);
return statearr_21926;
})();var statearr_21927_21940 = state_21917__$1;(statearr_21927_21940[(2)] = null);
(statearr_21927_21940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__12269__auto__))
;return ((function (switch__12204__auto__,c__12269__auto__){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_21931 = [null,null,null,null,null,null,null,null,null];(statearr_21931[(0)] = state_machine__12205__auto__);
(statearr_21931[(1)] = (1));
return statearr_21931;
});
var state_machine__12205__auto____1 = (function (state_21917){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_21917);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e21932){if((e21932 instanceof Object))
{var ex__12208__auto__ = e21932;var statearr_21933_21941 = state_21917;(statearr_21933_21941[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21932;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21942 = state_21917;
state_21917 = G__21942;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_21917){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_21917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__))
})();var state__12271__auto__ = (function (){var statearr_21934 = f__12270__auto__.call(null);(statearr_21934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_21934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__))
);
return c__12269__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12269__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto__){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto__){
return (function (state_22016){var state_val_22017 = (state_22016[(1)]);if((state_val_22017 === (7)))
{var inst_21998 = (state_22016[(2)]);var state_22016__$1 = state_22016;var statearr_22018_22041 = state_22016__$1;(statearr_22018_22041[(2)] = inst_21998);
(statearr_22018_22041[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (1)))
{var inst_21992 = cljs.core.seq.call(null,coll);var inst_21993 = inst_21992;var state_22016__$1 = (function (){var statearr_22019 = state_22016;(statearr_22019[(7)] = inst_21993);
return statearr_22019;
})();var statearr_22020_22042 = state_22016__$1;(statearr_22020_22042[(2)] = null);
(statearr_22020_22042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (4)))
{var inst_21993 = (state_22016[(7)]);var inst_21996 = cljs.core.first.call(null,inst_21993);var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22016__$1,(7),ch,inst_21996);
} else
{if((state_val_22017 === (13)))
{var inst_22010 = (state_22016[(2)]);var state_22016__$1 = state_22016;var statearr_22021_22043 = state_22016__$1;(statearr_22021_22043[(2)] = inst_22010);
(statearr_22021_22043[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (6)))
{var inst_22001 = (state_22016[(2)]);var state_22016__$1 = state_22016;if(cljs.core.truth_(inst_22001))
{var statearr_22022_22044 = state_22016__$1;(statearr_22022_22044[(1)] = (8));
} else
{var statearr_22023_22045 = state_22016__$1;(statearr_22023_22045[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (3)))
{var inst_22014 = (state_22016[(2)]);var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22016__$1,inst_22014);
} else
{if((state_val_22017 === (12)))
{var state_22016__$1 = state_22016;var statearr_22024_22046 = state_22016__$1;(statearr_22024_22046[(2)] = null);
(statearr_22024_22046[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (2)))
{var inst_21993 = (state_22016[(7)]);var state_22016__$1 = state_22016;if(cljs.core.truth_(inst_21993))
{var statearr_22025_22047 = state_22016__$1;(statearr_22025_22047[(1)] = (4));
} else
{var statearr_22026_22048 = state_22016__$1;(statearr_22026_22048[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (11)))
{var inst_22007 = cljs.core.async.close_BANG_.call(null,ch);var state_22016__$1 = state_22016;var statearr_22027_22049 = state_22016__$1;(statearr_22027_22049[(2)] = inst_22007);
(statearr_22027_22049[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (9)))
{var state_22016__$1 = state_22016;if(cljs.core.truth_(close_QMARK_))
{var statearr_22028_22050 = state_22016__$1;(statearr_22028_22050[(1)] = (11));
} else
{var statearr_22029_22051 = state_22016__$1;(statearr_22029_22051[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (5)))
{var inst_21993 = (state_22016[(7)]);var state_22016__$1 = state_22016;var statearr_22030_22052 = state_22016__$1;(statearr_22030_22052[(2)] = inst_21993);
(statearr_22030_22052[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (10)))
{var inst_22012 = (state_22016[(2)]);var state_22016__$1 = state_22016;var statearr_22031_22053 = state_22016__$1;(statearr_22031_22053[(2)] = inst_22012);
(statearr_22031_22053[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22017 === (8)))
{var inst_21993 = (state_22016[(7)]);var inst_22003 = cljs.core.next.call(null,inst_21993);var inst_21993__$1 = inst_22003;var state_22016__$1 = (function (){var statearr_22032 = state_22016;(statearr_22032[(7)] = inst_21993__$1);
return statearr_22032;
})();var statearr_22033_22054 = state_22016__$1;(statearr_22033_22054[(2)] = null);
(statearr_22033_22054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto__))
;return ((function (switch__12204__auto__,c__12269__auto__){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_22037 = [null,null,null,null,null,null,null,null];(statearr_22037[(0)] = state_machine__12205__auto__);
(statearr_22037[(1)] = (1));
return statearr_22037;
});
var state_machine__12205__auto____1 = (function (state_22016){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_22016);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e22038){if((e22038 instanceof Object))
{var ex__12208__auto__ = e22038;var statearr_22039_22055 = state_22016;(statearr_22039_22055[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22038;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22056 = state_22016;
state_22016 = G__22056;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto__))
})();var state__12271__auto__ = (function (){var statearr_22040 = f__12270__auto__.call(null);(statearr_22040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto__);
return statearr_22040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto__))
);
return c__12269__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj22058 = {};return obj22058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9065__auto__ = _;if(and__9065__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9065__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9714__auto__ = (((_ == null))?null:_);return (function (){var or__9077__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22060 = {};return obj22060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22282 = (function (cs,ch,mult,meta22283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22283 = meta22283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22282.cljs$lang$type = true;
cljs.core.async.t22282.cljs$lang$ctorStr = "cljs.core.async/t22282";
cljs.core.async.t22282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t22282");
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22284){var self__ = this;
var _22284__$1 = this;return self__.meta22283;
});})(cs))
;
cljs.core.async.t22282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22284,meta22283__$1){var self__ = this;
var _22284__$1 = this;return (new cljs.core.async.t22282(self__.cs,self__.ch,self__.mult,meta22283__$1));
});})(cs))
;
cljs.core.async.__GT_t22282 = ((function (cs){
return (function __GT_t22282(cs__$1,ch__$1,mult__$1,meta22283){return (new cljs.core.async.t22282(cs__$1,ch__$1,mult__$1,meta22283));
});})(cs))
;
}
return (new cljs.core.async.t22282(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12269__auto___22503 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___22503,cs,m,dchan,dctr,done){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___22503,cs,m,dchan,dctr,done){
return (function (state_22415){var state_val_22416 = (state_22415[(1)]);if((state_val_22416 === (7)))
{var inst_22411 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22417_22504 = state_22415__$1;(statearr_22417_22504[(2)] = inst_22411);
(statearr_22417_22504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (20)))
{var inst_22316 = (state_22415[(7)]);var inst_22326 = cljs.core.first.call(null,inst_22316);var inst_22327 = cljs.core.nth.call(null,inst_22326,(0),null);var inst_22328 = cljs.core.nth.call(null,inst_22326,(1),null);var state_22415__$1 = (function (){var statearr_22418 = state_22415;(statearr_22418[(8)] = inst_22327);
return statearr_22418;
})();if(cljs.core.truth_(inst_22328))
{var statearr_22419_22505 = state_22415__$1;(statearr_22419_22505[(1)] = (22));
} else
{var statearr_22420_22506 = state_22415__$1;(statearr_22420_22506[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (27)))
{var inst_22363 = (state_22415[(9)]);var inst_22287 = (state_22415[(10)]);var inst_22356 = (state_22415[(11)]);var inst_22358 = (state_22415[(12)]);var inst_22363__$1 = cljs.core._nth.call(null,inst_22356,inst_22358);var inst_22364 = cljs.core.async.put_BANG_.call(null,inst_22363__$1,inst_22287,done);var state_22415__$1 = (function (){var statearr_22421 = state_22415;(statearr_22421[(9)] = inst_22363__$1);
return statearr_22421;
})();if(cljs.core.truth_(inst_22364))
{var statearr_22422_22507 = state_22415__$1;(statearr_22422_22507[(1)] = (30));
} else
{var statearr_22423_22508 = state_22415__$1;(statearr_22423_22508[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (1)))
{var state_22415__$1 = state_22415;var statearr_22424_22509 = state_22415__$1;(statearr_22424_22509[(2)] = null);
(statearr_22424_22509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (24)))
{var inst_22316 = (state_22415[(7)]);var inst_22333 = (state_22415[(2)]);var inst_22334 = cljs.core.next.call(null,inst_22316);var inst_22296 = inst_22334;var inst_22297 = null;var inst_22298 = (0);var inst_22299 = (0);var state_22415__$1 = (function (){var statearr_22425 = state_22415;(statearr_22425[(13)] = inst_22297);
(statearr_22425[(14)] = inst_22296);
(statearr_22425[(15)] = inst_22299);
(statearr_22425[(16)] = inst_22333);
(statearr_22425[(17)] = inst_22298);
return statearr_22425;
})();var statearr_22426_22510 = state_22415__$1;(statearr_22426_22510[(2)] = null);
(statearr_22426_22510[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (39)))
{var state_22415__$1 = state_22415;var statearr_22430_22511 = state_22415__$1;(statearr_22430_22511[(2)] = null);
(statearr_22430_22511[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (4)))
{var inst_22287 = (state_22415[(10)]);var inst_22287__$1 = (state_22415[(2)]);var inst_22288 = (inst_22287__$1 == null);var state_22415__$1 = (function (){var statearr_22431 = state_22415;(statearr_22431[(10)] = inst_22287__$1);
return statearr_22431;
})();if(cljs.core.truth_(inst_22288))
{var statearr_22432_22512 = state_22415__$1;(statearr_22432_22512[(1)] = (5));
} else
{var statearr_22433_22513 = state_22415__$1;(statearr_22433_22513[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (15)))
{var inst_22297 = (state_22415[(13)]);var inst_22296 = (state_22415[(14)]);var inst_22299 = (state_22415[(15)]);var inst_22298 = (state_22415[(17)]);var inst_22312 = (state_22415[(2)]);var inst_22313 = (inst_22299 + (1));var tmp22427 = inst_22297;var tmp22428 = inst_22296;var tmp22429 = inst_22298;var inst_22296__$1 = tmp22428;var inst_22297__$1 = tmp22427;var inst_22298__$1 = tmp22429;var inst_22299__$1 = inst_22313;var state_22415__$1 = (function (){var statearr_22434 = state_22415;(statearr_22434[(13)] = inst_22297__$1);
(statearr_22434[(14)] = inst_22296__$1);
(statearr_22434[(15)] = inst_22299__$1);
(statearr_22434[(18)] = inst_22312);
(statearr_22434[(17)] = inst_22298__$1);
return statearr_22434;
})();var statearr_22435_22514 = state_22415__$1;(statearr_22435_22514[(2)] = null);
(statearr_22435_22514[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (21)))
{var inst_22337 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22439_22515 = state_22415__$1;(statearr_22439_22515[(2)] = inst_22337);
(statearr_22439_22515[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (31)))
{var inst_22363 = (state_22415[(9)]);var inst_22367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22368 = cljs.core.async.untap_STAR_.call(null,m,inst_22363);var state_22415__$1 = (function (){var statearr_22440 = state_22415;(statearr_22440[(19)] = inst_22367);
return statearr_22440;
})();var statearr_22441_22516 = state_22415__$1;(statearr_22441_22516[(2)] = inst_22368);
(statearr_22441_22516[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (32)))
{var inst_22357 = (state_22415[(20)]);var inst_22355 = (state_22415[(21)]);var inst_22356 = (state_22415[(11)]);var inst_22358 = (state_22415[(12)]);var inst_22370 = (state_22415[(2)]);var inst_22371 = (inst_22358 + (1));var tmp22436 = inst_22357;var tmp22437 = inst_22355;var tmp22438 = inst_22356;var inst_22355__$1 = tmp22437;var inst_22356__$1 = tmp22438;var inst_22357__$1 = tmp22436;var inst_22358__$1 = inst_22371;var state_22415__$1 = (function (){var statearr_22442 = state_22415;(statearr_22442[(20)] = inst_22357__$1);
(statearr_22442[(21)] = inst_22355__$1);
(statearr_22442[(11)] = inst_22356__$1);
(statearr_22442[(12)] = inst_22358__$1);
(statearr_22442[(22)] = inst_22370);
return statearr_22442;
})();var statearr_22443_22517 = state_22415__$1;(statearr_22443_22517[(2)] = null);
(statearr_22443_22517[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (40)))
{var inst_22383 = (state_22415[(23)]);var inst_22387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22388 = cljs.core.async.untap_STAR_.call(null,m,inst_22383);var state_22415__$1 = (function (){var statearr_22444 = state_22415;(statearr_22444[(24)] = inst_22387);
return statearr_22444;
})();var statearr_22445_22518 = state_22415__$1;(statearr_22445_22518[(2)] = inst_22388);
(statearr_22445_22518[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (33)))
{var inst_22374 = (state_22415[(25)]);var inst_22376 = cljs.core.chunked_seq_QMARK_.call(null,inst_22374);var state_22415__$1 = state_22415;if(inst_22376)
{var statearr_22446_22519 = state_22415__$1;(statearr_22446_22519[(1)] = (36));
} else
{var statearr_22447_22520 = state_22415__$1;(statearr_22447_22520[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (13)))
{var inst_22306 = (state_22415[(26)]);var inst_22309 = cljs.core.async.close_BANG_.call(null,inst_22306);var state_22415__$1 = state_22415;var statearr_22448_22521 = state_22415__$1;(statearr_22448_22521[(2)] = inst_22309);
(statearr_22448_22521[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (22)))
{var inst_22327 = (state_22415[(8)]);var inst_22330 = cljs.core.async.close_BANG_.call(null,inst_22327);var state_22415__$1 = state_22415;var statearr_22449_22522 = state_22415__$1;(statearr_22449_22522[(2)] = inst_22330);
(statearr_22449_22522[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (36)))
{var inst_22374 = (state_22415[(25)]);var inst_22378 = cljs.core.chunk_first.call(null,inst_22374);var inst_22379 = cljs.core.chunk_rest.call(null,inst_22374);var inst_22380 = cljs.core.count.call(null,inst_22378);var inst_22355 = inst_22379;var inst_22356 = inst_22378;var inst_22357 = inst_22380;var inst_22358 = (0);var state_22415__$1 = (function (){var statearr_22450 = state_22415;(statearr_22450[(20)] = inst_22357);
(statearr_22450[(21)] = inst_22355);
(statearr_22450[(11)] = inst_22356);
(statearr_22450[(12)] = inst_22358);
return statearr_22450;
})();var statearr_22451_22523 = state_22415__$1;(statearr_22451_22523[(2)] = null);
(statearr_22451_22523[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (41)))
{var inst_22374 = (state_22415[(25)]);var inst_22390 = (state_22415[(2)]);var inst_22391 = cljs.core.next.call(null,inst_22374);var inst_22355 = inst_22391;var inst_22356 = null;var inst_22357 = (0);var inst_22358 = (0);var state_22415__$1 = (function (){var statearr_22452 = state_22415;(statearr_22452[(20)] = inst_22357);
(statearr_22452[(21)] = inst_22355);
(statearr_22452[(11)] = inst_22356);
(statearr_22452[(12)] = inst_22358);
(statearr_22452[(27)] = inst_22390);
return statearr_22452;
})();var statearr_22453_22524 = state_22415__$1;(statearr_22453_22524[(2)] = null);
(statearr_22453_22524[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (43)))
{var state_22415__$1 = state_22415;var statearr_22454_22525 = state_22415__$1;(statearr_22454_22525[(2)] = null);
(statearr_22454_22525[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (29)))
{var inst_22399 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22455_22526 = state_22415__$1;(statearr_22455_22526[(2)] = inst_22399);
(statearr_22455_22526[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (44)))
{var inst_22408 = (state_22415[(2)]);var state_22415__$1 = (function (){var statearr_22456 = state_22415;(statearr_22456[(28)] = inst_22408);
return statearr_22456;
})();var statearr_22457_22527 = state_22415__$1;(statearr_22457_22527[(2)] = null);
(statearr_22457_22527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (6)))
{var inst_22347 = (state_22415[(29)]);var inst_22346 = cljs.core.deref.call(null,cs);var inst_22347__$1 = cljs.core.keys.call(null,inst_22346);var inst_22348 = cljs.core.count.call(null,inst_22347__$1);var inst_22349 = cljs.core.reset_BANG_.call(null,dctr,inst_22348);var inst_22354 = cljs.core.seq.call(null,inst_22347__$1);var inst_22355 = inst_22354;var inst_22356 = null;var inst_22357 = (0);var inst_22358 = (0);var state_22415__$1 = (function (){var statearr_22458 = state_22415;(statearr_22458[(29)] = inst_22347__$1);
(statearr_22458[(20)] = inst_22357);
(statearr_22458[(21)] = inst_22355);
(statearr_22458[(11)] = inst_22356);
(statearr_22458[(30)] = inst_22349);
(statearr_22458[(12)] = inst_22358);
return statearr_22458;
})();var statearr_22459_22528 = state_22415__$1;(statearr_22459_22528[(2)] = null);
(statearr_22459_22528[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (28)))
{var inst_22374 = (state_22415[(25)]);var inst_22355 = (state_22415[(21)]);var inst_22374__$1 = cljs.core.seq.call(null,inst_22355);var state_22415__$1 = (function (){var statearr_22460 = state_22415;(statearr_22460[(25)] = inst_22374__$1);
return statearr_22460;
})();if(inst_22374__$1)
{var statearr_22461_22529 = state_22415__$1;(statearr_22461_22529[(1)] = (33));
} else
{var statearr_22462_22530 = state_22415__$1;(statearr_22462_22530[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (25)))
{var inst_22357 = (state_22415[(20)]);var inst_22358 = (state_22415[(12)]);var inst_22360 = (inst_22358 < inst_22357);var inst_22361 = inst_22360;var state_22415__$1 = state_22415;if(cljs.core.truth_(inst_22361))
{var statearr_22463_22531 = state_22415__$1;(statearr_22463_22531[(1)] = (27));
} else
{var statearr_22464_22532 = state_22415__$1;(statearr_22464_22532[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (34)))
{var state_22415__$1 = state_22415;var statearr_22465_22533 = state_22415__$1;(statearr_22465_22533[(2)] = null);
(statearr_22465_22533[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (17)))
{var state_22415__$1 = state_22415;var statearr_22466_22534 = state_22415__$1;(statearr_22466_22534[(2)] = null);
(statearr_22466_22534[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (3)))
{var inst_22413 = (state_22415[(2)]);var state_22415__$1 = state_22415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22415__$1,inst_22413);
} else
{if((state_val_22416 === (12)))
{var inst_22342 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22467_22535 = state_22415__$1;(statearr_22467_22535[(2)] = inst_22342);
(statearr_22467_22535[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (2)))
{var state_22415__$1 = state_22415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22415__$1,(4),ch);
} else
{if((state_val_22416 === (23)))
{var state_22415__$1 = state_22415;var statearr_22468_22536 = state_22415__$1;(statearr_22468_22536[(2)] = null);
(statearr_22468_22536[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (35)))
{var inst_22397 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22469_22537 = state_22415__$1;(statearr_22469_22537[(2)] = inst_22397);
(statearr_22469_22537[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (19)))
{var inst_22316 = (state_22415[(7)]);var inst_22320 = cljs.core.chunk_first.call(null,inst_22316);var inst_22321 = cljs.core.chunk_rest.call(null,inst_22316);var inst_22322 = cljs.core.count.call(null,inst_22320);var inst_22296 = inst_22321;var inst_22297 = inst_22320;var inst_22298 = inst_22322;var inst_22299 = (0);var state_22415__$1 = (function (){var statearr_22470 = state_22415;(statearr_22470[(13)] = inst_22297);
(statearr_22470[(14)] = inst_22296);
(statearr_22470[(15)] = inst_22299);
(statearr_22470[(17)] = inst_22298);
return statearr_22470;
})();var statearr_22471_22538 = state_22415__$1;(statearr_22471_22538[(2)] = null);
(statearr_22471_22538[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (11)))
{var inst_22316 = (state_22415[(7)]);var inst_22296 = (state_22415[(14)]);var inst_22316__$1 = cljs.core.seq.call(null,inst_22296);var state_22415__$1 = (function (){var statearr_22472 = state_22415;(statearr_22472[(7)] = inst_22316__$1);
return statearr_22472;
})();if(inst_22316__$1)
{var statearr_22473_22539 = state_22415__$1;(statearr_22473_22539[(1)] = (16));
} else
{var statearr_22474_22540 = state_22415__$1;(statearr_22474_22540[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (9)))
{var inst_22344 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22475_22541 = state_22415__$1;(statearr_22475_22541[(2)] = inst_22344);
(statearr_22475_22541[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (5)))
{var inst_22294 = cljs.core.deref.call(null,cs);var inst_22295 = cljs.core.seq.call(null,inst_22294);var inst_22296 = inst_22295;var inst_22297 = null;var inst_22298 = (0);var inst_22299 = (0);var state_22415__$1 = (function (){var statearr_22476 = state_22415;(statearr_22476[(13)] = inst_22297);
(statearr_22476[(14)] = inst_22296);
(statearr_22476[(15)] = inst_22299);
(statearr_22476[(17)] = inst_22298);
return statearr_22476;
})();var statearr_22477_22542 = state_22415__$1;(statearr_22477_22542[(2)] = null);
(statearr_22477_22542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (14)))
{var state_22415__$1 = state_22415;var statearr_22478_22543 = state_22415__$1;(statearr_22478_22543[(2)] = null);
(statearr_22478_22543[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (45)))
{var inst_22405 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22479_22544 = state_22415__$1;(statearr_22479_22544[(2)] = inst_22405);
(statearr_22479_22544[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (26)))
{var inst_22347 = (state_22415[(29)]);var inst_22401 = (state_22415[(2)]);var inst_22402 = cljs.core.seq.call(null,inst_22347);var state_22415__$1 = (function (){var statearr_22480 = state_22415;(statearr_22480[(31)] = inst_22401);
return statearr_22480;
})();if(inst_22402)
{var statearr_22481_22545 = state_22415__$1;(statearr_22481_22545[(1)] = (42));
} else
{var statearr_22482_22546 = state_22415__$1;(statearr_22482_22546[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (16)))
{var inst_22316 = (state_22415[(7)]);var inst_22318 = cljs.core.chunked_seq_QMARK_.call(null,inst_22316);var state_22415__$1 = state_22415;if(inst_22318)
{var statearr_22483_22547 = state_22415__$1;(statearr_22483_22547[(1)] = (19));
} else
{var statearr_22484_22548 = state_22415__$1;(statearr_22484_22548[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (38)))
{var inst_22394 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22485_22549 = state_22415__$1;(statearr_22485_22549[(2)] = inst_22394);
(statearr_22485_22549[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (30)))
{var state_22415__$1 = state_22415;var statearr_22486_22550 = state_22415__$1;(statearr_22486_22550[(2)] = null);
(statearr_22486_22550[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (10)))
{var inst_22297 = (state_22415[(13)]);var inst_22299 = (state_22415[(15)]);var inst_22305 = cljs.core._nth.call(null,inst_22297,inst_22299);var inst_22306 = cljs.core.nth.call(null,inst_22305,(0),null);var inst_22307 = cljs.core.nth.call(null,inst_22305,(1),null);var state_22415__$1 = (function (){var statearr_22487 = state_22415;(statearr_22487[(26)] = inst_22306);
return statearr_22487;
})();if(cljs.core.truth_(inst_22307))
{var statearr_22488_22551 = state_22415__$1;(statearr_22488_22551[(1)] = (13));
} else
{var statearr_22489_22552 = state_22415__$1;(statearr_22489_22552[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (18)))
{var inst_22340 = (state_22415[(2)]);var state_22415__$1 = state_22415;var statearr_22490_22553 = state_22415__$1;(statearr_22490_22553[(2)] = inst_22340);
(statearr_22490_22553[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (42)))
{var state_22415__$1 = state_22415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22415__$1,(45),dchan);
} else
{if((state_val_22416 === (37)))
{var inst_22287 = (state_22415[(10)]);var inst_22374 = (state_22415[(25)]);var inst_22383 = (state_22415[(23)]);var inst_22383__$1 = cljs.core.first.call(null,inst_22374);var inst_22384 = cljs.core.async.put_BANG_.call(null,inst_22383__$1,inst_22287,done);var state_22415__$1 = (function (){var statearr_22491 = state_22415;(statearr_22491[(23)] = inst_22383__$1);
return statearr_22491;
})();if(cljs.core.truth_(inst_22384))
{var statearr_22492_22554 = state_22415__$1;(statearr_22492_22554[(1)] = (39));
} else
{var statearr_22493_22555 = state_22415__$1;(statearr_22493_22555[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22416 === (8)))
{var inst_22299 = (state_22415[(15)]);var inst_22298 = (state_22415[(17)]);var inst_22301 = (inst_22299 < inst_22298);var inst_22302 = inst_22301;var state_22415__$1 = state_22415;if(cljs.core.truth_(inst_22302))
{var statearr_22494_22556 = state_22415__$1;(statearr_22494_22556[(1)] = (10));
} else
{var statearr_22495_22557 = state_22415__$1;(statearr_22495_22557[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___22503,cs,m,dchan,dctr,done))
;return ((function (switch__12204__auto__,c__12269__auto___22503,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_22499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22499[(0)] = state_machine__12205__auto__);
(statearr_22499[(1)] = (1));
return statearr_22499;
});
var state_machine__12205__auto____1 = (function (state_22415){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_22415);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e22500){if((e22500 instanceof Object))
{var ex__12208__auto__ = e22500;var statearr_22501_22558 = state_22415;(statearr_22501_22558[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22500;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22559 = state_22415;
state_22415 = G__22559;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_22415){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_22415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___22503,cs,m,dchan,dctr,done))
})();var state__12271__auto__ = (function (){var statearr_22502 = f__12270__auto__.call(null);(statearr_22502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___22503);
return statearr_22502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___22503,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj22561 = {};return obj22561;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9065__auto__ = m;if(and__9065__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9714__auto__ = (((m == null))?null:m);return (function (){var or__9077__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22681 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22682){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22682 = meta22682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22681.cljs$lang$type = true;
cljs.core.async.t22681.cljs$lang$ctorStr = "cljs.core.async/t22681";
cljs.core.async.t22681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t22681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22683){var self__ = this;
var _22683__$1 = this;return self__.meta22682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22683,meta22682__$1){var self__ = this;
var _22683__$1 = this;return (new cljs.core.async.t22681(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22682){return (new cljs.core.async.t22681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22681(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12269__auto___22800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22753){var state_val_22754 = (state_22753[(1)]);if((state_val_22754 === (7)))
{var inst_22697 = (state_22753[(7)]);var inst_22702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22697);var state_22753__$1 = state_22753;var statearr_22755_22801 = state_22753__$1;(statearr_22755_22801[(2)] = inst_22702);
(statearr_22755_22801[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (20)))
{var inst_22712 = (state_22753[(8)]);var state_22753__$1 = state_22753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22753__$1,(23),out,inst_22712);
} else
{if((state_val_22754 === (1)))
{var inst_22687 = (state_22753[(9)]);var inst_22687__$1 = calc_state.call(null);var inst_22688 = cljs.core.seq_QMARK_.call(null,inst_22687__$1);var state_22753__$1 = (function (){var statearr_22756 = state_22753;(statearr_22756[(9)] = inst_22687__$1);
return statearr_22756;
})();if(inst_22688)
{var statearr_22757_22802 = state_22753__$1;(statearr_22757_22802[(1)] = (2));
} else
{var statearr_22758_22803 = state_22753__$1;(statearr_22758_22803[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (24)))
{var inst_22705 = (state_22753[(10)]);var inst_22697 = inst_22705;var state_22753__$1 = (function (){var statearr_22759 = state_22753;(statearr_22759[(7)] = inst_22697);
return statearr_22759;
})();var statearr_22760_22804 = state_22753__$1;(statearr_22760_22804[(2)] = null);
(statearr_22760_22804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (4)))
{var inst_22687 = (state_22753[(9)]);var inst_22693 = (state_22753[(2)]);var inst_22694 = cljs.core.get.call(null,inst_22693,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22695 = cljs.core.get.call(null,inst_22693,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22696 = cljs.core.get.call(null,inst_22693,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22697 = inst_22687;var state_22753__$1 = (function (){var statearr_22761 = state_22753;(statearr_22761[(11)] = inst_22695);
(statearr_22761[(12)] = inst_22694);
(statearr_22761[(7)] = inst_22697);
(statearr_22761[(13)] = inst_22696);
return statearr_22761;
})();var statearr_22762_22805 = state_22753__$1;(statearr_22762_22805[(2)] = null);
(statearr_22762_22805[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (15)))
{var state_22753__$1 = state_22753;var statearr_22763_22806 = state_22753__$1;(statearr_22763_22806[(2)] = null);
(statearr_22763_22806[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (21)))
{var inst_22705 = (state_22753[(10)]);var inst_22697 = inst_22705;var state_22753__$1 = (function (){var statearr_22764 = state_22753;(statearr_22764[(7)] = inst_22697);
return statearr_22764;
})();var statearr_22765_22807 = state_22753__$1;(statearr_22765_22807[(2)] = null);
(statearr_22765_22807[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (13)))
{var inst_22749 = (state_22753[(2)]);var state_22753__$1 = state_22753;var statearr_22766_22808 = state_22753__$1;(statearr_22766_22808[(2)] = inst_22749);
(statearr_22766_22808[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (22)))
{var inst_22747 = (state_22753[(2)]);var state_22753__$1 = state_22753;var statearr_22767_22809 = state_22753__$1;(statearr_22767_22809[(2)] = inst_22747);
(statearr_22767_22809[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (6)))
{var inst_22751 = (state_22753[(2)]);var state_22753__$1 = state_22753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22753__$1,inst_22751);
} else
{if((state_val_22754 === (25)))
{var state_22753__$1 = state_22753;var statearr_22768_22810 = state_22753__$1;(statearr_22768_22810[(2)] = null);
(statearr_22768_22810[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (17)))
{var inst_22727 = (state_22753[(14)]);var state_22753__$1 = state_22753;var statearr_22769_22811 = state_22753__$1;(statearr_22769_22811[(2)] = inst_22727);
(statearr_22769_22811[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (3)))
{var inst_22687 = (state_22753[(9)]);var state_22753__$1 = state_22753;var statearr_22770_22812 = state_22753__$1;(statearr_22770_22812[(2)] = inst_22687);
(statearr_22770_22812[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (12)))
{var inst_22713 = (state_22753[(15)]);var inst_22708 = (state_22753[(16)]);var inst_22727 = (state_22753[(14)]);var inst_22727__$1 = inst_22708.call(null,inst_22713);var state_22753__$1 = (function (){var statearr_22771 = state_22753;(statearr_22771[(14)] = inst_22727__$1);
return statearr_22771;
})();if(cljs.core.truth_(inst_22727__$1))
{var statearr_22772_22813 = state_22753__$1;(statearr_22772_22813[(1)] = (17));
} else
{var statearr_22773_22814 = state_22753__$1;(statearr_22773_22814[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (2)))
{var inst_22687 = (state_22753[(9)]);var inst_22690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22687);var state_22753__$1 = state_22753;var statearr_22774_22815 = state_22753__$1;(statearr_22774_22815[(2)] = inst_22690);
(statearr_22774_22815[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (23)))
{var inst_22738 = (state_22753[(2)]);var state_22753__$1 = state_22753;if(cljs.core.truth_(inst_22738))
{var statearr_22775_22816 = state_22753__$1;(statearr_22775_22816[(1)] = (24));
} else
{var statearr_22776_22817 = state_22753__$1;(statearr_22776_22817[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (19)))
{var inst_22735 = (state_22753[(2)]);var state_22753__$1 = state_22753;if(cljs.core.truth_(inst_22735))
{var statearr_22777_22818 = state_22753__$1;(statearr_22777_22818[(1)] = (20));
} else
{var statearr_22778_22819 = state_22753__$1;(statearr_22778_22819[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (11)))
{var inst_22712 = (state_22753[(8)]);var inst_22718 = (inst_22712 == null);var state_22753__$1 = state_22753;if(cljs.core.truth_(inst_22718))
{var statearr_22779_22820 = state_22753__$1;(statearr_22779_22820[(1)] = (14));
} else
{var statearr_22780_22821 = state_22753__$1;(statearr_22780_22821[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (9)))
{var inst_22705 = (state_22753[(10)]);var inst_22705__$1 = (state_22753[(2)]);var inst_22706 = cljs.core.get.call(null,inst_22705__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22707 = cljs.core.get.call(null,inst_22705__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22708 = cljs.core.get.call(null,inst_22705__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22753__$1 = (function (){var statearr_22781 = state_22753;(statearr_22781[(17)] = inst_22707);
(statearr_22781[(10)] = inst_22705__$1);
(statearr_22781[(16)] = inst_22708);
return statearr_22781;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22753__$1,(10),inst_22706);
} else
{if((state_val_22754 === (5)))
{var inst_22697 = (state_22753[(7)]);var inst_22700 = cljs.core.seq_QMARK_.call(null,inst_22697);var state_22753__$1 = state_22753;if(inst_22700)
{var statearr_22782_22822 = state_22753__$1;(statearr_22782_22822[(1)] = (7));
} else
{var statearr_22783_22823 = state_22753__$1;(statearr_22783_22823[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (14)))
{var inst_22713 = (state_22753[(15)]);var inst_22720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22713);var state_22753__$1 = state_22753;var statearr_22784_22824 = state_22753__$1;(statearr_22784_22824[(2)] = inst_22720);
(statearr_22784_22824[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (26)))
{var inst_22743 = (state_22753[(2)]);var state_22753__$1 = state_22753;var statearr_22785_22825 = state_22753__$1;(statearr_22785_22825[(2)] = inst_22743);
(statearr_22785_22825[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (16)))
{var inst_22723 = (state_22753[(2)]);var inst_22724 = calc_state.call(null);var inst_22697 = inst_22724;var state_22753__$1 = (function (){var statearr_22786 = state_22753;(statearr_22786[(18)] = inst_22723);
(statearr_22786[(7)] = inst_22697);
return statearr_22786;
})();var statearr_22787_22826 = state_22753__$1;(statearr_22787_22826[(2)] = null);
(statearr_22787_22826[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (10)))
{var inst_22713 = (state_22753[(15)]);var inst_22712 = (state_22753[(8)]);var inst_22711 = (state_22753[(2)]);var inst_22712__$1 = cljs.core.nth.call(null,inst_22711,(0),null);var inst_22713__$1 = cljs.core.nth.call(null,inst_22711,(1),null);var inst_22714 = (inst_22712__$1 == null);var inst_22715 = cljs.core._EQ_.call(null,inst_22713__$1,change);var inst_22716 = (inst_22714) || (inst_22715);var state_22753__$1 = (function (){var statearr_22788 = state_22753;(statearr_22788[(15)] = inst_22713__$1);
(statearr_22788[(8)] = inst_22712__$1);
return statearr_22788;
})();if(cljs.core.truth_(inst_22716))
{var statearr_22789_22827 = state_22753__$1;(statearr_22789_22827[(1)] = (11));
} else
{var statearr_22790_22828 = state_22753__$1;(statearr_22790_22828[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (18)))
{var inst_22707 = (state_22753[(17)]);var inst_22713 = (state_22753[(15)]);var inst_22708 = (state_22753[(16)]);var inst_22730 = cljs.core.empty_QMARK_.call(null,inst_22708);var inst_22731 = inst_22707.call(null,inst_22713);var inst_22732 = cljs.core.not.call(null,inst_22731);var inst_22733 = (inst_22730) && (inst_22732);var state_22753__$1 = state_22753;var statearr_22791_22829 = state_22753__$1;(statearr_22791_22829[(2)] = inst_22733);
(statearr_22791_22829[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22754 === (8)))
{var inst_22697 = (state_22753[(7)]);var state_22753__$1 = state_22753;var statearr_22792_22830 = state_22753__$1;(statearr_22792_22830[(2)] = inst_22697);
(statearr_22792_22830[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12204__auto__,c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_22796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22796[(0)] = state_machine__12205__auto__);
(statearr_22796[(1)] = (1));
return statearr_22796;
});
var state_machine__12205__auto____1 = (function (state_22753){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_22753);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e22797){if((e22797 instanceof Object))
{var ex__12208__auto__ = e22797;var statearr_22798_22831 = state_22753;(statearr_22798_22831[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22797;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22832 = state_22753;
state_22753 = G__22832;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_22753){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_22753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12271__auto__ = (function (){var statearr_22799 = f__12270__auto__.call(null);(statearr_22799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___22800);
return statearr_22799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___22800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj22834 = {};return obj22834;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9065__auto__ = p;if(and__9065__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9065__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9714__auto__ = (((p == null))?null:p);return (function (){var or__9077__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9065__auto__ = p;if(and__9065__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9065__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9714__auto__ = (((p == null))?null:p);return (function (){var or__9077__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9065__auto__ = p;if(and__9065__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9065__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9714__auto__ = (((p == null))?null:p);return (function (){var or__9077__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9065__auto__ = p;if(and__9065__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9065__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9714__auto__ = (((p == null))?null:p);return (function (){var or__9077__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9714__auto__)]);if(or__9077__auto__)
{return or__9077__auto__;
} else
{var or__9077__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9077__auto____$1)
{return or__9077__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9077__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9077__auto__))
{return or__9077__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9077__auto__,mults){
return (function (p1__22835_SHARP_){if(cljs.core.truth_(p1__22835_SHARP_.call(null,topic)))
{return p1__22835_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22835_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9077__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22951 = meta22951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22950.cljs$lang$type = true;
cljs.core.async.t22950.cljs$lang$ctorStr = "cljs.core.async/t22950";
cljs.core.async.t22950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9654__auto__,writer__9655__auto__,opt__9656__auto__){return cljs.core._write.call(null,writer__9655__auto__,"cljs.core.async/t22950");
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22952){var self__ = this;
var _22952__$1 = this;return self__.meta22951;
});})(mults,ensure_mult))
;
cljs.core.async.t22950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22952,meta22951__$1){var self__ = this;
var _22952__$1 = this;return (new cljs.core.async.t22950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22951__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22950 = ((function (mults,ensure_mult){
return (function __GT_t22950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22951){return (new cljs.core.async.t22950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22951));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12269__auto___23064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23064,mults,ensure_mult,p){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23064,mults,ensure_mult,p){
return (function (state_23020){var state_val_23021 = (state_23020[(1)]);if((state_val_23021 === (7)))
{var inst_23016 = (state_23020[(2)]);var state_23020__$1 = state_23020;var statearr_23022_23065 = state_23020__$1;(statearr_23022_23065[(2)] = inst_23016);
(statearr_23022_23065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (20)))
{var state_23020__$1 = state_23020;var statearr_23023_23066 = state_23020__$1;(statearr_23023_23066[(2)] = null);
(statearr_23023_23066[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (1)))
{var state_23020__$1 = state_23020;var statearr_23024_23067 = state_23020__$1;(statearr_23024_23067[(2)] = null);
(statearr_23024_23067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (4)))
{var inst_22955 = (state_23020[(7)]);var inst_22955__$1 = (state_23020[(2)]);var inst_22956 = (inst_22955__$1 == null);var state_23020__$1 = (function (){var statearr_23025 = state_23020;(statearr_23025[(7)] = inst_22955__$1);
return statearr_23025;
})();if(cljs.core.truth_(inst_22956))
{var statearr_23026_23068 = state_23020__$1;(statearr_23026_23068[(1)] = (5));
} else
{var statearr_23027_23069 = state_23020__$1;(statearr_23027_23069[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (15)))
{var inst_22997 = (state_23020[(2)]);var state_23020__$1 = state_23020;var statearr_23028_23070 = state_23020__$1;(statearr_23028_23070[(2)] = inst_22997);
(statearr_23028_23070[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (21)))
{var inst_23003 = (state_23020[(8)]);var inst_23011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23003);var state_23020__$1 = state_23020;var statearr_23029_23071 = state_23020__$1;(statearr_23029_23071[(2)] = inst_23011);
(statearr_23029_23071[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (13)))
{var inst_22979 = (state_23020[(9)]);var inst_22981 = cljs.core.chunked_seq_QMARK_.call(null,inst_22979);var state_23020__$1 = state_23020;if(inst_22981)
{var statearr_23030_23072 = state_23020__$1;(statearr_23030_23072[(1)] = (16));
} else
{var statearr_23031_23073 = state_23020__$1;(statearr_23031_23073[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (22)))
{var inst_23013 = (state_23020[(2)]);var state_23020__$1 = (function (){var statearr_23032 = state_23020;(statearr_23032[(10)] = inst_23013);
return statearr_23032;
})();var statearr_23033_23074 = state_23020__$1;(statearr_23033_23074[(2)] = null);
(statearr_23033_23074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (6)))
{var inst_22955 = (state_23020[(7)]);var inst_23003 = (state_23020[(8)]);var inst_23003__$1 = topic_fn.call(null,inst_22955);var inst_23004 = cljs.core.deref.call(null,mults);var inst_23005 = cljs.core.get.call(null,inst_23004,inst_23003__$1);var inst_23006 = cljs.core.async.muxch_STAR_.call(null,inst_23005);var state_23020__$1 = (function (){var statearr_23034 = state_23020;(statearr_23034[(8)] = inst_23003__$1);
return statearr_23034;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23020__$1,(19),inst_23006,inst_22955);
} else
{if((state_val_23021 === (17)))
{var inst_22979 = (state_23020[(9)]);var inst_22988 = cljs.core.first.call(null,inst_22979);var inst_22989 = cljs.core.async.muxch_STAR_.call(null,inst_22988);var inst_22990 = cljs.core.async.close_BANG_.call(null,inst_22989);var inst_22991 = cljs.core.next.call(null,inst_22979);var inst_22965 = inst_22991;var inst_22966 = null;var inst_22967 = (0);var inst_22968 = (0);var state_23020__$1 = (function (){var statearr_23035 = state_23020;(statearr_23035[(11)] = inst_22965);
(statearr_23035[(12)] = inst_22968);
(statearr_23035[(13)] = inst_22990);
(statearr_23035[(14)] = inst_22967);
(statearr_23035[(15)] = inst_22966);
return statearr_23035;
})();var statearr_23036_23075 = state_23020__$1;(statearr_23036_23075[(2)] = null);
(statearr_23036_23075[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (3)))
{var inst_23018 = (state_23020[(2)]);var state_23020__$1 = state_23020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23020__$1,inst_23018);
} else
{if((state_val_23021 === (12)))
{var inst_22999 = (state_23020[(2)]);var state_23020__$1 = state_23020;var statearr_23037_23076 = state_23020__$1;(statearr_23037_23076[(2)] = inst_22999);
(statearr_23037_23076[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (2)))
{var state_23020__$1 = state_23020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23020__$1,(4),ch);
} else
{if((state_val_23021 === (19)))
{var inst_23008 = (state_23020[(2)]);var state_23020__$1 = state_23020;if(cljs.core.truth_(inst_23008))
{var statearr_23038_23077 = state_23020__$1;(statearr_23038_23077[(1)] = (20));
} else
{var statearr_23039_23078 = state_23020__$1;(statearr_23039_23078[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (11)))
{var inst_22965 = (state_23020[(11)]);var inst_22979 = (state_23020[(9)]);var inst_22979__$1 = cljs.core.seq.call(null,inst_22965);var state_23020__$1 = (function (){var statearr_23040 = state_23020;(statearr_23040[(9)] = inst_22979__$1);
return statearr_23040;
})();if(inst_22979__$1)
{var statearr_23041_23079 = state_23020__$1;(statearr_23041_23079[(1)] = (13));
} else
{var statearr_23042_23080 = state_23020__$1;(statearr_23042_23080[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (9)))
{var inst_23001 = (state_23020[(2)]);var state_23020__$1 = state_23020;var statearr_23043_23081 = state_23020__$1;(statearr_23043_23081[(2)] = inst_23001);
(statearr_23043_23081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (5)))
{var inst_22962 = cljs.core.deref.call(null,mults);var inst_22963 = cljs.core.vals.call(null,inst_22962);var inst_22964 = cljs.core.seq.call(null,inst_22963);var inst_22965 = inst_22964;var inst_22966 = null;var inst_22967 = (0);var inst_22968 = (0);var state_23020__$1 = (function (){var statearr_23044 = state_23020;(statearr_23044[(11)] = inst_22965);
(statearr_23044[(12)] = inst_22968);
(statearr_23044[(14)] = inst_22967);
(statearr_23044[(15)] = inst_22966);
return statearr_23044;
})();var statearr_23045_23082 = state_23020__$1;(statearr_23045_23082[(2)] = null);
(statearr_23045_23082[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (14)))
{var state_23020__$1 = state_23020;var statearr_23049_23083 = state_23020__$1;(statearr_23049_23083[(2)] = null);
(statearr_23049_23083[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (16)))
{var inst_22979 = (state_23020[(9)]);var inst_22983 = cljs.core.chunk_first.call(null,inst_22979);var inst_22984 = cljs.core.chunk_rest.call(null,inst_22979);var inst_22985 = cljs.core.count.call(null,inst_22983);var inst_22965 = inst_22984;var inst_22966 = inst_22983;var inst_22967 = inst_22985;var inst_22968 = (0);var state_23020__$1 = (function (){var statearr_23050 = state_23020;(statearr_23050[(11)] = inst_22965);
(statearr_23050[(12)] = inst_22968);
(statearr_23050[(14)] = inst_22967);
(statearr_23050[(15)] = inst_22966);
return statearr_23050;
})();var statearr_23051_23084 = state_23020__$1;(statearr_23051_23084[(2)] = null);
(statearr_23051_23084[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (10)))
{var inst_22965 = (state_23020[(11)]);var inst_22968 = (state_23020[(12)]);var inst_22967 = (state_23020[(14)]);var inst_22966 = (state_23020[(15)]);var inst_22973 = cljs.core._nth.call(null,inst_22966,inst_22968);var inst_22974 = cljs.core.async.muxch_STAR_.call(null,inst_22973);var inst_22975 = cljs.core.async.close_BANG_.call(null,inst_22974);var inst_22976 = (inst_22968 + (1));var tmp23046 = inst_22965;var tmp23047 = inst_22967;var tmp23048 = inst_22966;var inst_22965__$1 = tmp23046;var inst_22966__$1 = tmp23048;var inst_22967__$1 = tmp23047;var inst_22968__$1 = inst_22976;var state_23020__$1 = (function (){var statearr_23052 = state_23020;(statearr_23052[(11)] = inst_22965__$1);
(statearr_23052[(12)] = inst_22968__$1);
(statearr_23052[(16)] = inst_22975);
(statearr_23052[(14)] = inst_22967__$1);
(statearr_23052[(15)] = inst_22966__$1);
return statearr_23052;
})();var statearr_23053_23085 = state_23020__$1;(statearr_23053_23085[(2)] = null);
(statearr_23053_23085[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (18)))
{var inst_22994 = (state_23020[(2)]);var state_23020__$1 = state_23020;var statearr_23054_23086 = state_23020__$1;(statearr_23054_23086[(2)] = inst_22994);
(statearr_23054_23086[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23021 === (8)))
{var inst_22968 = (state_23020[(12)]);var inst_22967 = (state_23020[(14)]);var inst_22970 = (inst_22968 < inst_22967);var inst_22971 = inst_22970;var state_23020__$1 = state_23020;if(cljs.core.truth_(inst_22971))
{var statearr_23055_23087 = state_23020__$1;(statearr_23055_23087[(1)] = (10));
} else
{var statearr_23056_23088 = state_23020__$1;(statearr_23056_23088[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23064,mults,ensure_mult,p))
;return ((function (switch__12204__auto__,c__12269__auto___23064,mults,ensure_mult,p){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23060[(0)] = state_machine__12205__auto__);
(statearr_23060[(1)] = (1));
return statearr_23060;
});
var state_machine__12205__auto____1 = (function (state_23020){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23020);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23061){if((e23061 instanceof Object))
{var ex__12208__auto__ = e23061;var statearr_23062_23089 = state_23020;(statearr_23062_23089[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23061;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23090 = state_23020;
state_23020 = G__23090;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23020){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23064,mults,ensure_mult,p))
})();var state__12271__auto__ = (function (){var statearr_23063 = f__12270__auto__.call(null);(statearr_23063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23064);
return statearr_23063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23064,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__12269__auto___23227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23197){var state_val_23198 = (state_23197[(1)]);if((state_val_23198 === (7)))
{var state_23197__$1 = state_23197;var statearr_23199_23228 = state_23197__$1;(statearr_23199_23228[(2)] = null);
(statearr_23199_23228[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (1)))
{var state_23197__$1 = state_23197;var statearr_23200_23229 = state_23197__$1;(statearr_23200_23229[(2)] = null);
(statearr_23200_23229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (4)))
{var inst_23161 = (state_23197[(7)]);var inst_23163 = (inst_23161 < cnt);var state_23197__$1 = state_23197;if(cljs.core.truth_(inst_23163))
{var statearr_23201_23230 = state_23197__$1;(statearr_23201_23230[(1)] = (6));
} else
{var statearr_23202_23231 = state_23197__$1;(statearr_23202_23231[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (15)))
{var inst_23193 = (state_23197[(2)]);var state_23197__$1 = state_23197;var statearr_23203_23232 = state_23197__$1;(statearr_23203_23232[(2)] = inst_23193);
(statearr_23203_23232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (13)))
{var inst_23186 = cljs.core.async.close_BANG_.call(null,out);var state_23197__$1 = state_23197;var statearr_23204_23233 = state_23197__$1;(statearr_23204_23233[(2)] = inst_23186);
(statearr_23204_23233[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (6)))
{var state_23197__$1 = state_23197;var statearr_23205_23234 = state_23197__$1;(statearr_23205_23234[(2)] = null);
(statearr_23205_23234[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (3)))
{var inst_23195 = (state_23197[(2)]);var state_23197__$1 = state_23197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23197__$1,inst_23195);
} else
{if((state_val_23198 === (12)))
{var inst_23183 = (state_23197[(8)]);var inst_23183__$1 = (state_23197[(2)]);var inst_23184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23183__$1);var state_23197__$1 = (function (){var statearr_23206 = state_23197;(statearr_23206[(8)] = inst_23183__$1);
return statearr_23206;
})();if(cljs.core.truth_(inst_23184))
{var statearr_23207_23235 = state_23197__$1;(statearr_23207_23235[(1)] = (13));
} else
{var statearr_23208_23236 = state_23197__$1;(statearr_23208_23236[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (2)))
{var inst_23160 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23161 = (0);var state_23197__$1 = (function (){var statearr_23209 = state_23197;(statearr_23209[(7)] = inst_23161);
(statearr_23209[(9)] = inst_23160);
return statearr_23209;
})();var statearr_23210_23237 = state_23197__$1;(statearr_23210_23237[(2)] = null);
(statearr_23210_23237[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (11)))
{var inst_23161 = (state_23197[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23197,(10),Object,null,(9));var inst_23170 = chs__$1.call(null,inst_23161);var inst_23171 = done.call(null,inst_23161);var inst_23172 = cljs.core.async.take_BANG_.call(null,inst_23170,inst_23171);var state_23197__$1 = state_23197;var statearr_23211_23238 = state_23197__$1;(statearr_23211_23238[(2)] = inst_23172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (9)))
{var inst_23161 = (state_23197[(7)]);var inst_23174 = (state_23197[(2)]);var inst_23175 = (inst_23161 + (1));var inst_23161__$1 = inst_23175;var state_23197__$1 = (function (){var statearr_23212 = state_23197;(statearr_23212[(7)] = inst_23161__$1);
(statearr_23212[(10)] = inst_23174);
return statearr_23212;
})();var statearr_23213_23239 = state_23197__$1;(statearr_23213_23239[(2)] = null);
(statearr_23213_23239[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (5)))
{var inst_23181 = (state_23197[(2)]);var state_23197__$1 = (function (){var statearr_23214 = state_23197;(statearr_23214[(11)] = inst_23181);
return statearr_23214;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23197__$1,(12),dchan);
} else
{if((state_val_23198 === (14)))
{var inst_23183 = (state_23197[(8)]);var inst_23188 = cljs.core.apply.call(null,f,inst_23183);var state_23197__$1 = state_23197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23197__$1,(16),out,inst_23188);
} else
{if((state_val_23198 === (16)))
{var inst_23190 = (state_23197[(2)]);var state_23197__$1 = (function (){var statearr_23215 = state_23197;(statearr_23215[(12)] = inst_23190);
return statearr_23215;
})();var statearr_23216_23240 = state_23197__$1;(statearr_23216_23240[(2)] = null);
(statearr_23216_23240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (10)))
{var inst_23165 = (state_23197[(2)]);var inst_23166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23197__$1 = (function (){var statearr_23217 = state_23197;(statearr_23217[(13)] = inst_23165);
return statearr_23217;
})();var statearr_23218_23241 = state_23197__$1;(statearr_23218_23241[(2)] = inst_23166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23198 === (8)))
{var inst_23179 = (state_23197[(2)]);var state_23197__$1 = state_23197;var statearr_23219_23242 = state_23197__$1;(statearr_23219_23242[(2)] = inst_23179);
(statearr_23219_23242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12204__auto__,c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23223[(0)] = state_machine__12205__auto__);
(statearr_23223[(1)] = (1));
return statearr_23223;
});
var state_machine__12205__auto____1 = (function (state_23197){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23197);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23224){if((e23224 instanceof Object))
{var ex__12208__auto__ = e23224;var statearr_23225_23243 = state_23197;(statearr_23225_23243[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23244 = state_23197;
state_23197 = G__23244;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23197){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12271__auto__ = (function (){var statearr_23226 = f__12270__auto__.call(null);(statearr_23226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23227);
return statearr_23226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23227,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___23352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23352,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23352,out){
return (function (state_23328){var state_val_23329 = (state_23328[(1)]);if((state_val_23329 === (7)))
{var inst_23307 = (state_23328[(7)]);var inst_23308 = (state_23328[(8)]);var inst_23307__$1 = (state_23328[(2)]);var inst_23308__$1 = cljs.core.nth.call(null,inst_23307__$1,(0),null);var inst_23309 = cljs.core.nth.call(null,inst_23307__$1,(1),null);var inst_23310 = (inst_23308__$1 == null);var state_23328__$1 = (function (){var statearr_23330 = state_23328;(statearr_23330[(7)] = inst_23307__$1);
(statearr_23330[(8)] = inst_23308__$1);
(statearr_23330[(9)] = inst_23309);
return statearr_23330;
})();if(cljs.core.truth_(inst_23310))
{var statearr_23331_23353 = state_23328__$1;(statearr_23331_23353[(1)] = (8));
} else
{var statearr_23332_23354 = state_23328__$1;(statearr_23332_23354[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (1)))
{var inst_23299 = cljs.core.vec.call(null,chs);var inst_23300 = inst_23299;var state_23328__$1 = (function (){var statearr_23333 = state_23328;(statearr_23333[(10)] = inst_23300);
return statearr_23333;
})();var statearr_23334_23355 = state_23328__$1;(statearr_23334_23355[(2)] = null);
(statearr_23334_23355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (4)))
{var inst_23300 = (state_23328[(10)]);var state_23328__$1 = state_23328;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23328__$1,(7),inst_23300);
} else
{if((state_val_23329 === (6)))
{var inst_23324 = (state_23328[(2)]);var state_23328__$1 = state_23328;var statearr_23335_23356 = state_23328__$1;(statearr_23335_23356[(2)] = inst_23324);
(statearr_23335_23356[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (3)))
{var inst_23326 = (state_23328[(2)]);var state_23328__$1 = state_23328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23328__$1,inst_23326);
} else
{if((state_val_23329 === (2)))
{var inst_23300 = (state_23328[(10)]);var inst_23302 = cljs.core.count.call(null,inst_23300);var inst_23303 = (inst_23302 > (0));var state_23328__$1 = state_23328;if(cljs.core.truth_(inst_23303))
{var statearr_23337_23357 = state_23328__$1;(statearr_23337_23357[(1)] = (4));
} else
{var statearr_23338_23358 = state_23328__$1;(statearr_23338_23358[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (11)))
{var inst_23300 = (state_23328[(10)]);var inst_23317 = (state_23328[(2)]);var tmp23336 = inst_23300;var inst_23300__$1 = tmp23336;var state_23328__$1 = (function (){var statearr_23339 = state_23328;(statearr_23339[(10)] = inst_23300__$1);
(statearr_23339[(11)] = inst_23317);
return statearr_23339;
})();var statearr_23340_23359 = state_23328__$1;(statearr_23340_23359[(2)] = null);
(statearr_23340_23359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (9)))
{var inst_23308 = (state_23328[(8)]);var state_23328__$1 = state_23328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23328__$1,(11),out,inst_23308);
} else
{if((state_val_23329 === (5)))
{var inst_23322 = cljs.core.async.close_BANG_.call(null,out);var state_23328__$1 = state_23328;var statearr_23341_23360 = state_23328__$1;(statearr_23341_23360[(2)] = inst_23322);
(statearr_23341_23360[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (10)))
{var inst_23320 = (state_23328[(2)]);var state_23328__$1 = state_23328;var statearr_23342_23361 = state_23328__$1;(statearr_23342_23361[(2)] = inst_23320);
(statearr_23342_23361[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23329 === (8)))
{var inst_23307 = (state_23328[(7)]);var inst_23308 = (state_23328[(8)]);var inst_23300 = (state_23328[(10)]);var inst_23309 = (state_23328[(9)]);var inst_23312 = (function (){var c = inst_23309;var v = inst_23308;var vec__23305 = inst_23307;var cs = inst_23300;return ((function (c,v,vec__23305,cs,inst_23307,inst_23308,inst_23300,inst_23309,state_val_23329,c__12269__auto___23352,out){
return (function (p1__23245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23245_SHARP_);
});
;})(c,v,vec__23305,cs,inst_23307,inst_23308,inst_23300,inst_23309,state_val_23329,c__12269__auto___23352,out))
})();var inst_23313 = cljs.core.filterv.call(null,inst_23312,inst_23300);var inst_23300__$1 = inst_23313;var state_23328__$1 = (function (){var statearr_23343 = state_23328;(statearr_23343[(10)] = inst_23300__$1);
return statearr_23343;
})();var statearr_23344_23362 = state_23328__$1;(statearr_23344_23362[(2)] = null);
(statearr_23344_23362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23352,out))
;return ((function (switch__12204__auto__,c__12269__auto___23352,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23348 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23348[(0)] = state_machine__12205__auto__);
(statearr_23348[(1)] = (1));
return statearr_23348;
});
var state_machine__12205__auto____1 = (function (state_23328){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23328);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23349){if((e23349 instanceof Object))
{var ex__12208__auto__ = e23349;var statearr_23350_23363 = state_23328;(statearr_23350_23363[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23364 = state_23328;
state_23328 = G__23364;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23328){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23352,out))
})();var state__12271__auto__ = (function (){var statearr_23351 = f__12270__auto__.call(null);(statearr_23351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23352);
return statearr_23351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23352,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___23457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23457,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23457,out){
return (function (state_23434){var state_val_23435 = (state_23434[(1)]);if((state_val_23435 === (7)))
{var inst_23416 = (state_23434[(7)]);var inst_23416__$1 = (state_23434[(2)]);var inst_23417 = (inst_23416__$1 == null);var inst_23418 = cljs.core.not.call(null,inst_23417);var state_23434__$1 = (function (){var statearr_23436 = state_23434;(statearr_23436[(7)] = inst_23416__$1);
return statearr_23436;
})();if(inst_23418)
{var statearr_23437_23458 = state_23434__$1;(statearr_23437_23458[(1)] = (8));
} else
{var statearr_23438_23459 = state_23434__$1;(statearr_23438_23459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (1)))
{var inst_23411 = (0);var state_23434__$1 = (function (){var statearr_23439 = state_23434;(statearr_23439[(8)] = inst_23411);
return statearr_23439;
})();var statearr_23440_23460 = state_23434__$1;(statearr_23440_23460[(2)] = null);
(statearr_23440_23460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (4)))
{var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23434__$1,(7),ch);
} else
{if((state_val_23435 === (6)))
{var inst_23429 = (state_23434[(2)]);var state_23434__$1 = state_23434;var statearr_23441_23461 = state_23434__$1;(statearr_23441_23461[(2)] = inst_23429);
(statearr_23441_23461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (3)))
{var inst_23431 = (state_23434[(2)]);var inst_23432 = cljs.core.async.close_BANG_.call(null,out);var state_23434__$1 = (function (){var statearr_23442 = state_23434;(statearr_23442[(9)] = inst_23431);
return statearr_23442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23434__$1,inst_23432);
} else
{if((state_val_23435 === (2)))
{var inst_23411 = (state_23434[(8)]);var inst_23413 = (inst_23411 < n);var state_23434__$1 = state_23434;if(cljs.core.truth_(inst_23413))
{var statearr_23443_23462 = state_23434__$1;(statearr_23443_23462[(1)] = (4));
} else
{var statearr_23444_23463 = state_23434__$1;(statearr_23444_23463[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (11)))
{var inst_23411 = (state_23434[(8)]);var inst_23421 = (state_23434[(2)]);var inst_23422 = (inst_23411 + (1));var inst_23411__$1 = inst_23422;var state_23434__$1 = (function (){var statearr_23445 = state_23434;(statearr_23445[(8)] = inst_23411__$1);
(statearr_23445[(10)] = inst_23421);
return statearr_23445;
})();var statearr_23446_23464 = state_23434__$1;(statearr_23446_23464[(2)] = null);
(statearr_23446_23464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (9)))
{var state_23434__$1 = state_23434;var statearr_23447_23465 = state_23434__$1;(statearr_23447_23465[(2)] = null);
(statearr_23447_23465[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (5)))
{var state_23434__$1 = state_23434;var statearr_23448_23466 = state_23434__$1;(statearr_23448_23466[(2)] = null);
(statearr_23448_23466[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (10)))
{var inst_23426 = (state_23434[(2)]);var state_23434__$1 = state_23434;var statearr_23449_23467 = state_23434__$1;(statearr_23449_23467[(2)] = inst_23426);
(statearr_23449_23467[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23435 === (8)))
{var inst_23416 = (state_23434[(7)]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,(11),out,inst_23416);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23457,out))
;return ((function (switch__12204__auto__,c__12269__auto___23457,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23453 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23453[(0)] = state_machine__12205__auto__);
(statearr_23453[(1)] = (1));
return statearr_23453;
});
var state_machine__12205__auto____1 = (function (state_23434){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23434);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23454){if((e23454 instanceof Object))
{var ex__12208__auto__ = e23454;var statearr_23455_23468 = state_23434;(statearr_23455_23468[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23469 = state_23434;
state_23434 = G__23469;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23434){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23457,out))
})();var state__12271__auto__ = (function (){var statearr_23456 = f__12270__auto__.call(null);(statearr_23456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23457);
return statearr_23456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23457,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___23566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23566,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23566,out){
return (function (state_23541){var state_val_23542 = (state_23541[(1)]);if((state_val_23542 === (7)))
{var inst_23536 = (state_23541[(2)]);var state_23541__$1 = state_23541;var statearr_23543_23567 = state_23541__$1;(statearr_23543_23567[(2)] = inst_23536);
(statearr_23543_23567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (1)))
{var inst_23518 = null;var state_23541__$1 = (function (){var statearr_23544 = state_23541;(statearr_23544[(7)] = inst_23518);
return statearr_23544;
})();var statearr_23545_23568 = state_23541__$1;(statearr_23545_23568[(2)] = null);
(statearr_23545_23568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (4)))
{var inst_23521 = (state_23541[(8)]);var inst_23521__$1 = (state_23541[(2)]);var inst_23522 = (inst_23521__$1 == null);var inst_23523 = cljs.core.not.call(null,inst_23522);var state_23541__$1 = (function (){var statearr_23546 = state_23541;(statearr_23546[(8)] = inst_23521__$1);
return statearr_23546;
})();if(inst_23523)
{var statearr_23547_23569 = state_23541__$1;(statearr_23547_23569[(1)] = (5));
} else
{var statearr_23548_23570 = state_23541__$1;(statearr_23548_23570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (6)))
{var state_23541__$1 = state_23541;var statearr_23549_23571 = state_23541__$1;(statearr_23549_23571[(2)] = null);
(statearr_23549_23571[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (3)))
{var inst_23538 = (state_23541[(2)]);var inst_23539 = cljs.core.async.close_BANG_.call(null,out);var state_23541__$1 = (function (){var statearr_23550 = state_23541;(statearr_23550[(9)] = inst_23538);
return statearr_23550;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23541__$1,inst_23539);
} else
{if((state_val_23542 === (2)))
{var state_23541__$1 = state_23541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23541__$1,(4),ch);
} else
{if((state_val_23542 === (11)))
{var inst_23521 = (state_23541[(8)]);var inst_23530 = (state_23541[(2)]);var inst_23518 = inst_23521;var state_23541__$1 = (function (){var statearr_23551 = state_23541;(statearr_23551[(10)] = inst_23530);
(statearr_23551[(7)] = inst_23518);
return statearr_23551;
})();var statearr_23552_23572 = state_23541__$1;(statearr_23552_23572[(2)] = null);
(statearr_23552_23572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (9)))
{var inst_23521 = (state_23541[(8)]);var state_23541__$1 = state_23541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23541__$1,(11),out,inst_23521);
} else
{if((state_val_23542 === (5)))
{var inst_23518 = (state_23541[(7)]);var inst_23521 = (state_23541[(8)]);var inst_23525 = cljs.core._EQ_.call(null,inst_23521,inst_23518);var state_23541__$1 = state_23541;if(inst_23525)
{var statearr_23554_23573 = state_23541__$1;(statearr_23554_23573[(1)] = (8));
} else
{var statearr_23555_23574 = state_23541__$1;(statearr_23555_23574[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (10)))
{var inst_23533 = (state_23541[(2)]);var state_23541__$1 = state_23541;var statearr_23556_23575 = state_23541__$1;(statearr_23556_23575[(2)] = inst_23533);
(statearr_23556_23575[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23542 === (8)))
{var inst_23518 = (state_23541[(7)]);var tmp23553 = inst_23518;var inst_23518__$1 = tmp23553;var state_23541__$1 = (function (){var statearr_23557 = state_23541;(statearr_23557[(7)] = inst_23518__$1);
return statearr_23557;
})();var statearr_23558_23576 = state_23541__$1;(statearr_23558_23576[(2)] = null);
(statearr_23558_23576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23566,out))
;return ((function (switch__12204__auto__,c__12269__auto___23566,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23562 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23562[(0)] = state_machine__12205__auto__);
(statearr_23562[(1)] = (1));
return statearr_23562;
});
var state_machine__12205__auto____1 = (function (state_23541){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23541);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23563){if((e23563 instanceof Object))
{var ex__12208__auto__ = e23563;var statearr_23564_23577 = state_23541;(statearr_23564_23577[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23578 = state_23541;
state_23541 = G__23578;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23541){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23566,out))
})();var state__12271__auto__ = (function (){var statearr_23565 = f__12270__auto__.call(null);(statearr_23565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23566);
return statearr_23565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23566,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___23713 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23713,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23713,out){
return (function (state_23683){var state_val_23684 = (state_23683[(1)]);if((state_val_23684 === (7)))
{var inst_23679 = (state_23683[(2)]);var state_23683__$1 = state_23683;var statearr_23685_23714 = state_23683__$1;(statearr_23685_23714[(2)] = inst_23679);
(statearr_23685_23714[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (1)))
{var inst_23646 = (new Array(n));var inst_23647 = inst_23646;var inst_23648 = (0);var state_23683__$1 = (function (){var statearr_23686 = state_23683;(statearr_23686[(7)] = inst_23647);
(statearr_23686[(8)] = inst_23648);
return statearr_23686;
})();var statearr_23687_23715 = state_23683__$1;(statearr_23687_23715[(2)] = null);
(statearr_23687_23715[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (4)))
{var inst_23651 = (state_23683[(9)]);var inst_23651__$1 = (state_23683[(2)]);var inst_23652 = (inst_23651__$1 == null);var inst_23653 = cljs.core.not.call(null,inst_23652);var state_23683__$1 = (function (){var statearr_23688 = state_23683;(statearr_23688[(9)] = inst_23651__$1);
return statearr_23688;
})();if(inst_23653)
{var statearr_23689_23716 = state_23683__$1;(statearr_23689_23716[(1)] = (5));
} else
{var statearr_23690_23717 = state_23683__$1;(statearr_23690_23717[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (15)))
{var inst_23673 = (state_23683[(2)]);var state_23683__$1 = state_23683;var statearr_23691_23718 = state_23683__$1;(statearr_23691_23718[(2)] = inst_23673);
(statearr_23691_23718[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (13)))
{var state_23683__$1 = state_23683;var statearr_23692_23719 = state_23683__$1;(statearr_23692_23719[(2)] = null);
(statearr_23692_23719[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (6)))
{var inst_23648 = (state_23683[(8)]);var inst_23669 = (inst_23648 > (0));var state_23683__$1 = state_23683;if(cljs.core.truth_(inst_23669))
{var statearr_23693_23720 = state_23683__$1;(statearr_23693_23720[(1)] = (12));
} else
{var statearr_23694_23721 = state_23683__$1;(statearr_23694_23721[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (3)))
{var inst_23681 = (state_23683[(2)]);var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23683__$1,inst_23681);
} else
{if((state_val_23684 === (12)))
{var inst_23647 = (state_23683[(7)]);var inst_23671 = cljs.core.vec.call(null,inst_23647);var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23683__$1,(15),out,inst_23671);
} else
{if((state_val_23684 === (2)))
{var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23683__$1,(4),ch);
} else
{if((state_val_23684 === (11)))
{var inst_23663 = (state_23683[(2)]);var inst_23664 = (new Array(n));var inst_23647 = inst_23664;var inst_23648 = (0);var state_23683__$1 = (function (){var statearr_23695 = state_23683;(statearr_23695[(7)] = inst_23647);
(statearr_23695[(10)] = inst_23663);
(statearr_23695[(8)] = inst_23648);
return statearr_23695;
})();var statearr_23696_23722 = state_23683__$1;(statearr_23696_23722[(2)] = null);
(statearr_23696_23722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (9)))
{var inst_23647 = (state_23683[(7)]);var inst_23661 = cljs.core.vec.call(null,inst_23647);var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23683__$1,(11),out,inst_23661);
} else
{if((state_val_23684 === (5)))
{var inst_23647 = (state_23683[(7)]);var inst_23656 = (state_23683[(11)]);var inst_23651 = (state_23683[(9)]);var inst_23648 = (state_23683[(8)]);var inst_23655 = (inst_23647[inst_23648] = inst_23651);var inst_23656__$1 = (inst_23648 + (1));var inst_23657 = (inst_23656__$1 < n);var state_23683__$1 = (function (){var statearr_23697 = state_23683;(statearr_23697[(12)] = inst_23655);
(statearr_23697[(11)] = inst_23656__$1);
return statearr_23697;
})();if(cljs.core.truth_(inst_23657))
{var statearr_23698_23723 = state_23683__$1;(statearr_23698_23723[(1)] = (8));
} else
{var statearr_23699_23724 = state_23683__$1;(statearr_23699_23724[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (14)))
{var inst_23676 = (state_23683[(2)]);var inst_23677 = cljs.core.async.close_BANG_.call(null,out);var state_23683__$1 = (function (){var statearr_23701 = state_23683;(statearr_23701[(13)] = inst_23676);
return statearr_23701;
})();var statearr_23702_23725 = state_23683__$1;(statearr_23702_23725[(2)] = inst_23677);
(statearr_23702_23725[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (10)))
{var inst_23667 = (state_23683[(2)]);var state_23683__$1 = state_23683;var statearr_23703_23726 = state_23683__$1;(statearr_23703_23726[(2)] = inst_23667);
(statearr_23703_23726[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23684 === (8)))
{var inst_23647 = (state_23683[(7)]);var inst_23656 = (state_23683[(11)]);var tmp23700 = inst_23647;var inst_23647__$1 = tmp23700;var inst_23648 = inst_23656;var state_23683__$1 = (function (){var statearr_23704 = state_23683;(statearr_23704[(7)] = inst_23647__$1);
(statearr_23704[(8)] = inst_23648);
return statearr_23704;
})();var statearr_23705_23727 = state_23683__$1;(statearr_23705_23727[(2)] = null);
(statearr_23705_23727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23713,out))
;return ((function (switch__12204__auto__,c__12269__auto___23713,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23709[(0)] = state_machine__12205__auto__);
(statearr_23709[(1)] = (1));
return statearr_23709;
});
var state_machine__12205__auto____1 = (function (state_23683){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23683);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23710){if((e23710 instanceof Object))
{var ex__12208__auto__ = e23710;var statearr_23711_23728 = state_23683;(statearr_23711_23728[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23710;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23729 = state_23683;
state_23683 = G__23729;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23683){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23713,out))
})();var state__12271__auto__ = (function (){var statearr_23712 = f__12270__auto__.call(null);(statearr_23712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23713);
return statearr_23712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23713,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12269__auto___23872 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12269__auto___23872,out){
return (function (){var f__12270__auto__ = (function (){var switch__12204__auto__ = ((function (c__12269__auto___23872,out){
return (function (state_23842){var state_val_23843 = (state_23842[(1)]);if((state_val_23843 === (7)))
{var inst_23838 = (state_23842[(2)]);var state_23842__$1 = state_23842;var statearr_23844_23873 = state_23842__$1;(statearr_23844_23873[(2)] = inst_23838);
(statearr_23844_23873[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (1)))
{var inst_23801 = [];var inst_23802 = inst_23801;var inst_23803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23842__$1 = (function (){var statearr_23845 = state_23842;(statearr_23845[(7)] = inst_23802);
(statearr_23845[(8)] = inst_23803);
return statearr_23845;
})();var statearr_23846_23874 = state_23842__$1;(statearr_23846_23874[(2)] = null);
(statearr_23846_23874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (4)))
{var inst_23806 = (state_23842[(9)]);var inst_23806__$1 = (state_23842[(2)]);var inst_23807 = (inst_23806__$1 == null);var inst_23808 = cljs.core.not.call(null,inst_23807);var state_23842__$1 = (function (){var statearr_23847 = state_23842;(statearr_23847[(9)] = inst_23806__$1);
return statearr_23847;
})();if(inst_23808)
{var statearr_23848_23875 = state_23842__$1;(statearr_23848_23875[(1)] = (5));
} else
{var statearr_23849_23876 = state_23842__$1;(statearr_23849_23876[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (15)))
{var inst_23832 = (state_23842[(2)]);var state_23842__$1 = state_23842;var statearr_23850_23877 = state_23842__$1;(statearr_23850_23877[(2)] = inst_23832);
(statearr_23850_23877[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (13)))
{var state_23842__$1 = state_23842;var statearr_23851_23878 = state_23842__$1;(statearr_23851_23878[(2)] = null);
(statearr_23851_23878[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (6)))
{var inst_23802 = (state_23842[(7)]);var inst_23827 = inst_23802.length;var inst_23828 = (inst_23827 > (0));var state_23842__$1 = state_23842;if(cljs.core.truth_(inst_23828))
{var statearr_23852_23879 = state_23842__$1;(statearr_23852_23879[(1)] = (12));
} else
{var statearr_23853_23880 = state_23842__$1;(statearr_23853_23880[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (3)))
{var inst_23840 = (state_23842[(2)]);var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23842__$1,inst_23840);
} else
{if((state_val_23843 === (12)))
{var inst_23802 = (state_23842[(7)]);var inst_23830 = cljs.core.vec.call(null,inst_23802);var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23842__$1,(15),out,inst_23830);
} else
{if((state_val_23843 === (2)))
{var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23842__$1,(4),ch);
} else
{if((state_val_23843 === (11)))
{var inst_23806 = (state_23842[(9)]);var inst_23810 = (state_23842[(10)]);var inst_23820 = (state_23842[(2)]);var inst_23821 = [];var inst_23822 = inst_23821.push(inst_23806);var inst_23802 = inst_23821;var inst_23803 = inst_23810;var state_23842__$1 = (function (){var statearr_23854 = state_23842;(statearr_23854[(11)] = inst_23820);
(statearr_23854[(12)] = inst_23822);
(statearr_23854[(7)] = inst_23802);
(statearr_23854[(8)] = inst_23803);
return statearr_23854;
})();var statearr_23855_23881 = state_23842__$1;(statearr_23855_23881[(2)] = null);
(statearr_23855_23881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (9)))
{var inst_23802 = (state_23842[(7)]);var inst_23818 = cljs.core.vec.call(null,inst_23802);var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23842__$1,(11),out,inst_23818);
} else
{if((state_val_23843 === (5)))
{var inst_23806 = (state_23842[(9)]);var inst_23803 = (state_23842[(8)]);var inst_23810 = (state_23842[(10)]);var inst_23810__$1 = f.call(null,inst_23806);var inst_23811 = cljs.core._EQ_.call(null,inst_23810__$1,inst_23803);var inst_23812 = cljs.core.keyword_identical_QMARK_.call(null,inst_23803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23813 = (inst_23811) || (inst_23812);var state_23842__$1 = (function (){var statearr_23856 = state_23842;(statearr_23856[(10)] = inst_23810__$1);
return statearr_23856;
})();if(cljs.core.truth_(inst_23813))
{var statearr_23857_23882 = state_23842__$1;(statearr_23857_23882[(1)] = (8));
} else
{var statearr_23858_23883 = state_23842__$1;(statearr_23858_23883[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (14)))
{var inst_23835 = (state_23842[(2)]);var inst_23836 = cljs.core.async.close_BANG_.call(null,out);var state_23842__$1 = (function (){var statearr_23860 = state_23842;(statearr_23860[(13)] = inst_23835);
return statearr_23860;
})();var statearr_23861_23884 = state_23842__$1;(statearr_23861_23884[(2)] = inst_23836);
(statearr_23861_23884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (10)))
{var inst_23825 = (state_23842[(2)]);var state_23842__$1 = state_23842;var statearr_23862_23885 = state_23842__$1;(statearr_23862_23885[(2)] = inst_23825);
(statearr_23862_23885[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (8)))
{var inst_23802 = (state_23842[(7)]);var inst_23806 = (state_23842[(9)]);var inst_23810 = (state_23842[(10)]);var inst_23815 = inst_23802.push(inst_23806);var tmp23859 = inst_23802;var inst_23802__$1 = tmp23859;var inst_23803 = inst_23810;var state_23842__$1 = (function (){var statearr_23863 = state_23842;(statearr_23863[(14)] = inst_23815);
(statearr_23863[(7)] = inst_23802__$1);
(statearr_23863[(8)] = inst_23803);
return statearr_23863;
})();var statearr_23864_23886 = state_23842__$1;(statearr_23864_23886[(2)] = null);
(statearr_23864_23886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12269__auto___23872,out))
;return ((function (switch__12204__auto__,c__12269__auto___23872,out){
return (function() {
var state_machine__12205__auto__ = null;
var state_machine__12205__auto____0 = (function (){var statearr_23868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23868[(0)] = state_machine__12205__auto__);
(statearr_23868[(1)] = (1));
return statearr_23868;
});
var state_machine__12205__auto____1 = (function (state_23842){while(true){
var ret_value__12206__auto__ = (function (){try{while(true){
var result__12207__auto__ = switch__12204__auto__.call(null,state_23842);if(cljs.core.keyword_identical_QMARK_.call(null,result__12207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12207__auto__;
}
break;
}
}catch (e23869){if((e23869 instanceof Object))
{var ex__12208__auto__ = e23869;var statearr_23870_23887 = state_23842;(statearr_23870_23887[(5)] = ex__12208__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23869;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23888 = state_23842;
state_23842 = G__23888;
continue;
}
} else
{return ret_value__12206__auto__;
}
break;
}
});
state_machine__12205__auto__ = function(state_23842){
switch(arguments.length){
case 0:
return state_machine__12205__auto____0.call(this);
case 1:
return state_machine__12205__auto____1.call(this,state_23842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12205__auto____0;
state_machine__12205__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12205__auto____1;
return state_machine__12205__auto__;
})()
;})(switch__12204__auto__,c__12269__auto___23872,out))
})();var state__12271__auto__ = (function (){var statearr_23871 = f__12270__auto__.call(null);(statearr_23871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12269__auto___23872);
return statearr_23871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12271__auto__);
});})(c__12269__auto___23872,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map