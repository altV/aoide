// Compiled by ClojureScript 0.0-2202
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15247 = (function (f,fn_handler,meta15248){
this.f = f;
this.fn_handler = fn_handler;
this.meta15248 = meta15248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15247.cljs$lang$type = true;
cljs.core.async.t15247.cljs$lang$ctorStr = "cljs.core.async/t15247";
cljs.core.async.t15247.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15247");
});
cljs.core.async.t15247.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15249){var self__ = this;
var _15249__$1 = this;return self__.meta15248;
});
cljs.core.async.t15247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15249,meta15248__$1){var self__ = this;
var _15249__$1 = this;return (new cljs.core.async.t15247(self__.f,self__.fn_handler,meta15248__$1));
});
cljs.core.async.__GT_t15247 = (function __GT_t15247(f__$1,fn_handler__$1,meta15248){return (new cljs.core.async.t15247(f__$1,fn_handler__$1,meta15248));
});
}
return (new cljs.core.async.t15247(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15251 = buff;if(G__15251)
{var bit__8533__auto__ = null;if(cljs.core.truth_((function (){var or__7883__auto__ = bit__8533__auto__;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return G__15251.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15251.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15251);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15251);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
{var val_15252 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15252);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15252,ret){
return (function (){return fn1.call(null,val_15252);
});})(val_15252,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8731__auto___15253 = n;var x_15254 = 0;while(true){
if((x_15254 < n__8731__auto___15253))
{(a[x_15254] = 0);
{
var G__15255 = (x_15254 + 1);
x_15254 = G__15255;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15256 = (i + 1);
i = G__15256;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15260 = (function (flag,alt_flag,meta15261){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15261 = meta15261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15260.cljs$lang$type = true;
cljs.core.async.t15260.cljs$lang$ctorStr = "cljs.core.async/t15260";
cljs.core.async.t15260.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15260");
});})(flag))
;
cljs.core.async.t15260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15262){var self__ = this;
var _15262__$1 = this;return self__.meta15261;
});})(flag))
;
cljs.core.async.t15260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15262,meta15261__$1){var self__ = this;
var _15262__$1 = this;return (new cljs.core.async.t15260(self__.flag,self__.alt_flag,meta15261__$1));
});})(flag))
;
cljs.core.async.__GT_t15260 = ((function (flag){
return (function __GT_t15260(flag__$1,alt_flag__$1,meta15261){return (new cljs.core.async.t15260(flag__$1,alt_flag__$1,meta15261));
});})(flag))
;
}
return (new cljs.core.async.t15260(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15266 = (function (cb,flag,alt_handler,meta15267){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15267 = meta15267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15266.cljs$lang$type = true;
cljs.core.async.t15266.cljs$lang$ctorStr = "cljs.core.async/t15266";
cljs.core.async.t15266.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15266");
});
cljs.core.async.t15266.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15268){var self__ = this;
var _15268__$1 = this;return self__.meta15267;
});
cljs.core.async.t15266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15268,meta15267__$1){var self__ = this;
var _15268__$1 = this;return (new cljs.core.async.t15266(self__.cb,self__.flag,self__.alt_handler,meta15267__$1));
});
cljs.core.async.__GT_t15266 = (function __GT_t15266(cb__$1,flag__$1,alt_handler__$1,meta15267){return (new cljs.core.async.t15266(cb__$1,flag__$1,alt_handler__$1,meta15267));
});
}
return (new cljs.core.async.t15266(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15269_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15269_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15270_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15270_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7883__auto__ = wport;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15271 = (i + 1);
i = G__15271;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7883__auto__ = ret;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7871__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7871__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7871__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__15272){var map__15274 = p__15272;var map__15274__$1 = ((cljs.core.seq_QMARK_.call(null,map__15274))?cljs.core.apply.call(null,cljs.core.hash_map,map__15274):map__15274);var opts = map__15274__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15272 = null;if (arguments.length > 1) {
  p__15272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15272);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15275){
var ports = cljs.core.first(arglist__15275);
var p__15272 = cljs.core.rest(arglist__15275);
return alts_BANG___delegate(ports,p__15272);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15283 = (function (ch,f,map_LT_,meta15284){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15284 = meta15284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15283.cljs$lang$type = true;
cljs.core.async.t15283.cljs$lang$ctorStr = "cljs.core.async/t15283";
cljs.core.async.t15283.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15283");
});
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15286 = (function (fn1,_,meta15284,ch,f,map_LT_,meta15287){
this.fn1 = fn1;
this._ = _;
this.meta15284 = meta15284;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15287 = meta15287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15286.cljs$lang$type = true;
cljs.core.async.t15286.cljs$lang$ctorStr = "cljs.core.async/t15286";
cljs.core.async.t15286.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15286");
});})(___$1))
;
cljs.core.async.t15286.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15286.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15276_SHARP_){return f1.call(null,(((p1__15276_SHARP_ == null))?null:self__.f.call(null,p1__15276_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15288){var self__ = this;
var _15288__$1 = this;return self__.meta15287;
});})(___$1))
;
cljs.core.async.t15286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15288,meta15287__$1){var self__ = this;
var _15288__$1 = this;return (new cljs.core.async.t15286(self__.fn1,self__._,self__.meta15284,self__.ch,self__.f,self__.map_LT_,meta15287__$1));
});})(___$1))
;
cljs.core.async.__GT_t15286 = ((function (___$1){
return (function __GT_t15286(fn1__$1,___$2,meta15284__$1,ch__$2,f__$2,map_LT___$2,meta15287){return (new cljs.core.async.t15286(fn1__$1,___$2,meta15284__$1,ch__$2,f__$2,map_LT___$2,meta15287));
});})(___$1))
;
}
return (new cljs.core.async.t15286(fn1,___$1,self__.meta15284,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7871__auto__ = ret;if(cljs.core.truth_(and__7871__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7871__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15285){var self__ = this;
var _15285__$1 = this;return self__.meta15284;
});
cljs.core.async.t15283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15285,meta15284__$1){var self__ = this;
var _15285__$1 = this;return (new cljs.core.async.t15283(self__.ch,self__.f,self__.map_LT_,meta15284__$1));
});
cljs.core.async.__GT_t15283 = (function __GT_t15283(ch__$1,f__$1,map_LT___$1,meta15284){return (new cljs.core.async.t15283(ch__$1,f__$1,map_LT___$1,meta15284));
});
}
return (new cljs.core.async.t15283(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15292 = (function (ch,f,map_GT_,meta15293){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15293 = meta15293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15292.cljs$lang$type = true;
cljs.core.async.t15292.cljs$lang$ctorStr = "cljs.core.async/t15292";
cljs.core.async.t15292.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15292");
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15294){var self__ = this;
var _15294__$1 = this;return self__.meta15293;
});
cljs.core.async.t15292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15294,meta15293__$1){var self__ = this;
var _15294__$1 = this;return (new cljs.core.async.t15292(self__.ch,self__.f,self__.map_GT_,meta15293__$1));
});
cljs.core.async.__GT_t15292 = (function __GT_t15292(ch__$1,f__$1,map_GT___$1,meta15293){return (new cljs.core.async.t15292(ch__$1,f__$1,map_GT___$1,meta15293));
});
}
return (new cljs.core.async.t15292(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15298 = (function (ch,p,filter_GT_,meta15299){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15299 = meta15299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15298.cljs$lang$type = true;
cljs.core.async.t15298.cljs$lang$ctorStr = "cljs.core.async/t15298";
cljs.core.async.t15298.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15298");
});
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15300){var self__ = this;
var _15300__$1 = this;return self__.meta15299;
});
cljs.core.async.t15298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15300,meta15299__$1){var self__ = this;
var _15300__$1 = this;return (new cljs.core.async.t15298(self__.ch,self__.p,self__.filter_GT_,meta15299__$1));
});
cljs.core.async.__GT_t15298 = (function __GT_t15298(ch__$1,p__$1,filter_GT___$1,meta15299){return (new cljs.core.async.t15298(ch__$1,p__$1,filter_GT___$1,meta15299));
});
}
return (new cljs.core.async.t15298(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___15383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___15383,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___15383,out){
return (function (state_15362){var state_val_15363 = (state_15362[1]);if((state_val_15363 === 7))
{var inst_15358 = (state_15362[2]);var state_15362__$1 = state_15362;var statearr_15364_15384 = state_15362__$1;(statearr_15364_15384[2] = inst_15358);
(statearr_15364_15384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 1))
{var state_15362__$1 = state_15362;var statearr_15365_15385 = state_15362__$1;(statearr_15365_15385[2] = null);
(statearr_15365_15385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 4))
{var inst_15344 = (state_15362[7]);var inst_15344__$1 = (state_15362[2]);var inst_15345 = (inst_15344__$1 == null);var state_15362__$1 = (function (){var statearr_15366 = state_15362;(statearr_15366[7] = inst_15344__$1);
return statearr_15366;
})();if(cljs.core.truth_(inst_15345))
{var statearr_15367_15386 = state_15362__$1;(statearr_15367_15386[1] = 5);
} else
{var statearr_15368_15387 = state_15362__$1;(statearr_15368_15387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 6))
{var inst_15344 = (state_15362[7]);var inst_15349 = p.call(null,inst_15344);var state_15362__$1 = state_15362;if(cljs.core.truth_(inst_15349))
{var statearr_15369_15388 = state_15362__$1;(statearr_15369_15388[1] = 8);
} else
{var statearr_15370_15389 = state_15362__$1;(statearr_15370_15389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 3))
{var inst_15360 = (state_15362[2]);var state_15362__$1 = state_15362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15362__$1,inst_15360);
} else
{if((state_val_15363 === 2))
{var state_15362__$1 = state_15362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15362__$1,4,ch);
} else
{if((state_val_15363 === 11))
{var inst_15352 = (state_15362[2]);var state_15362__$1 = state_15362;var statearr_15371_15390 = state_15362__$1;(statearr_15371_15390[2] = inst_15352);
(statearr_15371_15390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 9))
{var state_15362__$1 = state_15362;var statearr_15372_15391 = state_15362__$1;(statearr_15372_15391[2] = null);
(statearr_15372_15391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 5))
{var inst_15347 = cljs.core.async.close_BANG_.call(null,out);var state_15362__$1 = state_15362;var statearr_15373_15392 = state_15362__$1;(statearr_15373_15392[2] = inst_15347);
(statearr_15373_15392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 10))
{var inst_15355 = (state_15362[2]);var state_15362__$1 = (function (){var statearr_15374 = state_15362;(statearr_15374[8] = inst_15355);
return statearr_15374;
})();var statearr_15375_15393 = state_15362__$1;(statearr_15375_15393[2] = null);
(statearr_15375_15393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 8))
{var inst_15344 = (state_15362[7]);var state_15362__$1 = state_15362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15362__$1,11,out,inst_15344);
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
});})(c__11009__auto___15383,out))
;return ((function (switch__10945__auto__,c__11009__auto___15383,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15379 = [null,null,null,null,null,null,null,null,null];(statearr_15379[0] = state_machine__10946__auto__);
(statearr_15379[1] = 1);
return statearr_15379;
});
var state_machine__10946__auto____1 = (function (state_15362){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15362);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15380){if((e15380 instanceof Object))
{var ex__10949__auto__ = e15380;var statearr_15381_15394 = state_15362;(statearr_15381_15394[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15395 = state_15362;
state_15362 = G__15395;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15362){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___15383,out))
})();var state__11011__auto__ = (function (){var statearr_15382 = f__11010__auto__.call(null);(statearr_15382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___15383);
return statearr_15382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___15383,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__){
return (function (state_15561){var state_val_15562 = (state_15561[1]);if((state_val_15562 === 7))
{var inst_15557 = (state_15561[2]);var state_15561__$1 = state_15561;var statearr_15563_15604 = state_15561__$1;(statearr_15563_15604[2] = inst_15557);
(statearr_15563_15604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 20))
{var inst_15527 = (state_15561[7]);var inst_15538 = (state_15561[2]);var inst_15539 = cljs.core.next.call(null,inst_15527);var inst_15513 = inst_15539;var inst_15514 = null;var inst_15515 = 0;var inst_15516 = 0;var state_15561__$1 = (function (){var statearr_15564 = state_15561;(statearr_15564[8] = inst_15514);
(statearr_15564[9] = inst_15515);
(statearr_15564[10] = inst_15538);
(statearr_15564[11] = inst_15513);
(statearr_15564[12] = inst_15516);
return statearr_15564;
})();var statearr_15565_15605 = state_15561__$1;(statearr_15565_15605[2] = null);
(statearr_15565_15605[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 1))
{var state_15561__$1 = state_15561;var statearr_15566_15606 = state_15561__$1;(statearr_15566_15606[2] = null);
(statearr_15566_15606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 4))
{var inst_15502 = (state_15561[13]);var inst_15502__$1 = (state_15561[2]);var inst_15503 = (inst_15502__$1 == null);var state_15561__$1 = (function (){var statearr_15567 = state_15561;(statearr_15567[13] = inst_15502__$1);
return statearr_15567;
})();if(cljs.core.truth_(inst_15503))
{var statearr_15568_15607 = state_15561__$1;(statearr_15568_15607[1] = 5);
} else
{var statearr_15569_15608 = state_15561__$1;(statearr_15569_15608[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 15))
{var state_15561__$1 = state_15561;var statearr_15573_15609 = state_15561__$1;(statearr_15573_15609[2] = null);
(statearr_15573_15609[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 21))
{var state_15561__$1 = state_15561;var statearr_15574_15610 = state_15561__$1;(statearr_15574_15610[2] = null);
(statearr_15574_15610[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 13))
{var inst_15514 = (state_15561[8]);var inst_15515 = (state_15561[9]);var inst_15513 = (state_15561[11]);var inst_15516 = (state_15561[12]);var inst_15523 = (state_15561[2]);var inst_15524 = (inst_15516 + 1);var tmp15570 = inst_15514;var tmp15571 = inst_15515;var tmp15572 = inst_15513;var inst_15513__$1 = tmp15572;var inst_15514__$1 = tmp15570;var inst_15515__$1 = tmp15571;var inst_15516__$1 = inst_15524;var state_15561__$1 = (function (){var statearr_15575 = state_15561;(statearr_15575[8] = inst_15514__$1);
(statearr_15575[9] = inst_15515__$1);
(statearr_15575[11] = inst_15513__$1);
(statearr_15575[12] = inst_15516__$1);
(statearr_15575[14] = inst_15523);
return statearr_15575;
})();var statearr_15576_15611 = state_15561__$1;(statearr_15576_15611[2] = null);
(statearr_15576_15611[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 22))
{var state_15561__$1 = state_15561;var statearr_15577_15612 = state_15561__$1;(statearr_15577_15612[2] = null);
(statearr_15577_15612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 6))
{var inst_15502 = (state_15561[13]);var inst_15511 = f.call(null,inst_15502);var inst_15512 = cljs.core.seq.call(null,inst_15511);var inst_15513 = inst_15512;var inst_15514 = null;var inst_15515 = 0;var inst_15516 = 0;var state_15561__$1 = (function (){var statearr_15578 = state_15561;(statearr_15578[8] = inst_15514);
(statearr_15578[9] = inst_15515);
(statearr_15578[11] = inst_15513);
(statearr_15578[12] = inst_15516);
return statearr_15578;
})();var statearr_15579_15613 = state_15561__$1;(statearr_15579_15613[2] = null);
(statearr_15579_15613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 17))
{var inst_15527 = (state_15561[7]);var inst_15531 = cljs.core.chunk_first.call(null,inst_15527);var inst_15532 = cljs.core.chunk_rest.call(null,inst_15527);var inst_15533 = cljs.core.count.call(null,inst_15531);var inst_15513 = inst_15532;var inst_15514 = inst_15531;var inst_15515 = inst_15533;var inst_15516 = 0;var state_15561__$1 = (function (){var statearr_15580 = state_15561;(statearr_15580[8] = inst_15514);
(statearr_15580[9] = inst_15515);
(statearr_15580[11] = inst_15513);
(statearr_15580[12] = inst_15516);
return statearr_15580;
})();var statearr_15581_15614 = state_15561__$1;(statearr_15581_15614[2] = null);
(statearr_15581_15614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 3))
{var inst_15559 = (state_15561[2]);var state_15561__$1 = state_15561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15561__$1,inst_15559);
} else
{if((state_val_15562 === 12))
{var inst_15547 = (state_15561[2]);var state_15561__$1 = state_15561;var statearr_15582_15615 = state_15561__$1;(statearr_15582_15615[2] = inst_15547);
(statearr_15582_15615[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 2))
{var state_15561__$1 = state_15561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15561__$1,4,in$);
} else
{if((state_val_15562 === 23))
{var inst_15555 = (state_15561[2]);var state_15561__$1 = state_15561;var statearr_15583_15616 = state_15561__$1;(statearr_15583_15616[2] = inst_15555);
(statearr_15583_15616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 19))
{var inst_15542 = (state_15561[2]);var state_15561__$1 = state_15561;var statearr_15584_15617 = state_15561__$1;(statearr_15584_15617[2] = inst_15542);
(statearr_15584_15617[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 11))
{var inst_15527 = (state_15561[7]);var inst_15513 = (state_15561[11]);var inst_15527__$1 = cljs.core.seq.call(null,inst_15513);var state_15561__$1 = (function (){var statearr_15585 = state_15561;(statearr_15585[7] = inst_15527__$1);
return statearr_15585;
})();if(inst_15527__$1)
{var statearr_15586_15618 = state_15561__$1;(statearr_15586_15618[1] = 14);
} else
{var statearr_15587_15619 = state_15561__$1;(statearr_15587_15619[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 9))
{var inst_15549 = (state_15561[2]);var inst_15550 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15561__$1 = (function (){var statearr_15588 = state_15561;(statearr_15588[15] = inst_15549);
return statearr_15588;
})();if(cljs.core.truth_(inst_15550))
{var statearr_15589_15620 = state_15561__$1;(statearr_15589_15620[1] = 21);
} else
{var statearr_15590_15621 = state_15561__$1;(statearr_15590_15621[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 5))
{var inst_15505 = cljs.core.async.close_BANG_.call(null,out);var state_15561__$1 = state_15561;var statearr_15591_15622 = state_15561__$1;(statearr_15591_15622[2] = inst_15505);
(statearr_15591_15622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 14))
{var inst_15527 = (state_15561[7]);var inst_15529 = cljs.core.chunked_seq_QMARK_.call(null,inst_15527);var state_15561__$1 = state_15561;if(inst_15529)
{var statearr_15592_15623 = state_15561__$1;(statearr_15592_15623[1] = 17);
} else
{var statearr_15593_15624 = state_15561__$1;(statearr_15593_15624[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 16))
{var inst_15545 = (state_15561[2]);var state_15561__$1 = state_15561;var statearr_15594_15625 = state_15561__$1;(statearr_15594_15625[2] = inst_15545);
(statearr_15594_15625[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15562 === 10))
{var inst_15514 = (state_15561[8]);var inst_15516 = (state_15561[12]);var inst_15521 = cljs.core._nth.call(null,inst_15514,inst_15516);var state_15561__$1 = state_15561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15561__$1,13,out,inst_15521);
} else
{if((state_val_15562 === 18))
{var inst_15527 = (state_15561[7]);var inst_15536 = cljs.core.first.call(null,inst_15527);var state_15561__$1 = state_15561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15561__$1,20,out,inst_15536);
} else
{if((state_val_15562 === 8))
{var inst_15515 = (state_15561[9]);var inst_15516 = (state_15561[12]);var inst_15518 = (inst_15516 < inst_15515);var inst_15519 = inst_15518;var state_15561__$1 = state_15561;if(cljs.core.truth_(inst_15519))
{var statearr_15595_15626 = state_15561__$1;(statearr_15595_15626[1] = 10);
} else
{var statearr_15596_15627 = state_15561__$1;(statearr_15596_15627[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto__))
;return ((function (switch__10945__auto__,c__11009__auto__){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15600[0] = state_machine__10946__auto__);
(statearr_15600[1] = 1);
return statearr_15600;
});
var state_machine__10946__auto____1 = (function (state_15561){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15561);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object))
{var ex__10949__auto__ = e15601;var statearr_15602_15628 = state_15561;(statearr_15602_15628[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15629 = state_15561;
state_15561 = G__15629;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15561){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__))
})();var state__11011__auto__ = (function (){var statearr_15603 = f__11010__auto__.call(null);(statearr_15603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_15603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__))
);
return c__11009__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11009__auto___15724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___15724){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___15724){
return (function (state_15700){var state_val_15701 = (state_15700[1]);if((state_val_15701 === 7))
{var inst_15696 = (state_15700[2]);var state_15700__$1 = state_15700;var statearr_15702_15725 = state_15700__$1;(statearr_15702_15725[2] = inst_15696);
(statearr_15702_15725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 1))
{var state_15700__$1 = state_15700;var statearr_15703_15726 = state_15700__$1;(statearr_15703_15726[2] = null);
(statearr_15703_15726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 4))
{var inst_15679 = (state_15700[7]);var inst_15679__$1 = (state_15700[2]);var inst_15680 = (inst_15679__$1 == null);var state_15700__$1 = (function (){var statearr_15704 = state_15700;(statearr_15704[7] = inst_15679__$1);
return statearr_15704;
})();if(cljs.core.truth_(inst_15680))
{var statearr_15705_15727 = state_15700__$1;(statearr_15705_15727[1] = 5);
} else
{var statearr_15706_15728 = state_15700__$1;(statearr_15706_15728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 13))
{var state_15700__$1 = state_15700;var statearr_15707_15729 = state_15700__$1;(statearr_15707_15729[2] = null);
(statearr_15707_15729[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 6))
{var inst_15679 = (state_15700[7]);var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15700__$1,11,to,inst_15679);
} else
{if((state_val_15701 === 3))
{var inst_15698 = (state_15700[2]);var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15700__$1,inst_15698);
} else
{if((state_val_15701 === 12))
{var state_15700__$1 = state_15700;var statearr_15708_15730 = state_15700__$1;(statearr_15708_15730[2] = null);
(statearr_15708_15730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 2))
{var state_15700__$1 = state_15700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15700__$1,4,from);
} else
{if((state_val_15701 === 11))
{var inst_15689 = (state_15700[2]);var state_15700__$1 = state_15700;if(cljs.core.truth_(inst_15689))
{var statearr_15709_15731 = state_15700__$1;(statearr_15709_15731[1] = 12);
} else
{var statearr_15710_15732 = state_15700__$1;(statearr_15710_15732[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 9))
{var state_15700__$1 = state_15700;var statearr_15711_15733 = state_15700__$1;(statearr_15711_15733[2] = null);
(statearr_15711_15733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 5))
{var state_15700__$1 = state_15700;if(cljs.core.truth_(close_QMARK_))
{var statearr_15712_15734 = state_15700__$1;(statearr_15712_15734[1] = 8);
} else
{var statearr_15713_15735 = state_15700__$1;(statearr_15713_15735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 14))
{var inst_15694 = (state_15700[2]);var state_15700__$1 = state_15700;var statearr_15714_15736 = state_15700__$1;(statearr_15714_15736[2] = inst_15694);
(statearr_15714_15736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 10))
{var inst_15686 = (state_15700[2]);var state_15700__$1 = state_15700;var statearr_15715_15737 = state_15700__$1;(statearr_15715_15737[2] = inst_15686);
(statearr_15715_15737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15701 === 8))
{var inst_15683 = cljs.core.async.close_BANG_.call(null,to);var state_15700__$1 = state_15700;var statearr_15716_15738 = state_15700__$1;(statearr_15716_15738[2] = inst_15683);
(statearr_15716_15738[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___15724))
;return ((function (switch__10945__auto__,c__11009__auto___15724){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15720 = [null,null,null,null,null,null,null,null];(statearr_15720[0] = state_machine__10946__auto__);
(statearr_15720[1] = 1);
return statearr_15720;
});
var state_machine__10946__auto____1 = (function (state_15700){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15700);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15721){if((e15721 instanceof Object))
{var ex__10949__auto__ = e15721;var statearr_15722_15739 = state_15700;(statearr_15722_15739[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15740 = state_15700;
state_15700 = G__15740;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15700){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___15724))
})();var state__11011__auto__ = (function (){var statearr_15723 = f__11010__auto__.call(null);(statearr_15723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___15724);
return statearr_15723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___15724))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11009__auto___15841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___15841,tc,fc){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___15841,tc,fc){
return (function (state_15816){var state_val_15817 = (state_15816[1]);if((state_val_15817 === 7))
{var inst_15812 = (state_15816[2]);var state_15816__$1 = state_15816;var statearr_15818_15842 = state_15816__$1;(statearr_15818_15842[2] = inst_15812);
(statearr_15818_15842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 1))
{var state_15816__$1 = state_15816;var statearr_15819_15843 = state_15816__$1;(statearr_15819_15843[2] = null);
(statearr_15819_15843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 4))
{var inst_15793 = (state_15816[7]);var inst_15793__$1 = (state_15816[2]);var inst_15794 = (inst_15793__$1 == null);var state_15816__$1 = (function (){var statearr_15820 = state_15816;(statearr_15820[7] = inst_15793__$1);
return statearr_15820;
})();if(cljs.core.truth_(inst_15794))
{var statearr_15821_15844 = state_15816__$1;(statearr_15821_15844[1] = 5);
} else
{var statearr_15822_15845 = state_15816__$1;(statearr_15822_15845[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 13))
{var state_15816__$1 = state_15816;var statearr_15823_15846 = state_15816__$1;(statearr_15823_15846[2] = null);
(statearr_15823_15846[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 6))
{var inst_15793 = (state_15816[7]);var inst_15799 = p.call(null,inst_15793);var state_15816__$1 = state_15816;if(cljs.core.truth_(inst_15799))
{var statearr_15824_15847 = state_15816__$1;(statearr_15824_15847[1] = 9);
} else
{var statearr_15825_15848 = state_15816__$1;(statearr_15825_15848[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 3))
{var inst_15814 = (state_15816[2]);var state_15816__$1 = state_15816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15816__$1,inst_15814);
} else
{if((state_val_15817 === 12))
{var state_15816__$1 = state_15816;var statearr_15826_15849 = state_15816__$1;(statearr_15826_15849[2] = null);
(statearr_15826_15849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 2))
{var state_15816__$1 = state_15816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15816__$1,4,ch);
} else
{if((state_val_15817 === 11))
{var inst_15793 = (state_15816[7]);var inst_15803 = (state_15816[2]);var state_15816__$1 = state_15816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15816__$1,8,inst_15803,inst_15793);
} else
{if((state_val_15817 === 9))
{var state_15816__$1 = state_15816;var statearr_15827_15850 = state_15816__$1;(statearr_15827_15850[2] = tc);
(statearr_15827_15850[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 5))
{var inst_15796 = cljs.core.async.close_BANG_.call(null,tc);var inst_15797 = cljs.core.async.close_BANG_.call(null,fc);var state_15816__$1 = (function (){var statearr_15828 = state_15816;(statearr_15828[8] = inst_15796);
return statearr_15828;
})();var statearr_15829_15851 = state_15816__$1;(statearr_15829_15851[2] = inst_15797);
(statearr_15829_15851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 14))
{var inst_15810 = (state_15816[2]);var state_15816__$1 = state_15816;var statearr_15830_15852 = state_15816__$1;(statearr_15830_15852[2] = inst_15810);
(statearr_15830_15852[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 10))
{var state_15816__$1 = state_15816;var statearr_15831_15853 = state_15816__$1;(statearr_15831_15853[2] = fc);
(statearr_15831_15853[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15817 === 8))
{var inst_15805 = (state_15816[2]);var state_15816__$1 = state_15816;if(cljs.core.truth_(inst_15805))
{var statearr_15832_15854 = state_15816__$1;(statearr_15832_15854[1] = 12);
} else
{var statearr_15833_15855 = state_15816__$1;(statearr_15833_15855[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___15841,tc,fc))
;return ((function (switch__10945__auto__,c__11009__auto___15841,tc,fc){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15837 = [null,null,null,null,null,null,null,null,null];(statearr_15837[0] = state_machine__10946__auto__);
(statearr_15837[1] = 1);
return statearr_15837;
});
var state_machine__10946__auto____1 = (function (state_15816){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15816);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15838){if((e15838 instanceof Object))
{var ex__10949__auto__ = e15838;var statearr_15839_15856 = state_15816;(statearr_15839_15856[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15857 = state_15816;
state_15816 = G__15857;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15816){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___15841,tc,fc))
})();var state__11011__auto__ = (function (){var statearr_15840 = f__11010__auto__.call(null);(statearr_15840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___15841);
return statearr_15840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___15841,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__){
return (function (state_15904){var state_val_15905 = (state_15904[1]);if((state_val_15905 === 7))
{var inst_15900 = (state_15904[2]);var state_15904__$1 = state_15904;var statearr_15906_15922 = state_15904__$1;(statearr_15906_15922[2] = inst_15900);
(statearr_15906_15922[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15905 === 6))
{var inst_15893 = (state_15904[7]);var inst_15890 = (state_15904[8]);var inst_15897 = f.call(null,inst_15890,inst_15893);var inst_15890__$1 = inst_15897;var state_15904__$1 = (function (){var statearr_15907 = state_15904;(statearr_15907[8] = inst_15890__$1);
return statearr_15907;
})();var statearr_15908_15923 = state_15904__$1;(statearr_15908_15923[2] = null);
(statearr_15908_15923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15905 === 5))
{var inst_15890 = (state_15904[8]);var state_15904__$1 = state_15904;var statearr_15909_15924 = state_15904__$1;(statearr_15909_15924[2] = inst_15890);
(statearr_15909_15924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15905 === 4))
{var inst_15893 = (state_15904[7]);var inst_15893__$1 = (state_15904[2]);var inst_15894 = (inst_15893__$1 == null);var state_15904__$1 = (function (){var statearr_15910 = state_15904;(statearr_15910[7] = inst_15893__$1);
return statearr_15910;
})();if(cljs.core.truth_(inst_15894))
{var statearr_15911_15925 = state_15904__$1;(statearr_15911_15925[1] = 5);
} else
{var statearr_15912_15926 = state_15904__$1;(statearr_15912_15926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15905 === 3))
{var inst_15902 = (state_15904[2]);var state_15904__$1 = state_15904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15904__$1,inst_15902);
} else
{if((state_val_15905 === 2))
{var state_15904__$1 = state_15904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15904__$1,4,ch);
} else
{if((state_val_15905 === 1))
{var inst_15890 = init;var state_15904__$1 = (function (){var statearr_15913 = state_15904;(statearr_15913[8] = inst_15890);
return statearr_15913;
})();var statearr_15914_15927 = state_15904__$1;(statearr_15914_15927[2] = null);
(statearr_15914_15927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11009__auto__))
;return ((function (switch__10945__auto__,c__11009__auto__){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_15918 = [null,null,null,null,null,null,null,null,null];(statearr_15918[0] = state_machine__10946__auto__);
(statearr_15918[1] = 1);
return statearr_15918;
});
var state_machine__10946__auto____1 = (function (state_15904){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_15904);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e15919){if((e15919 instanceof Object))
{var ex__10949__auto__ = e15919;var statearr_15920_15928 = state_15904;(statearr_15920_15928[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15929 = state_15904;
state_15904 = G__15929;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_15904){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_15904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__))
})();var state__11011__auto__ = (function (){var statearr_15921 = f__11010__auto__.call(null);(statearr_15921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_15921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__))
);
return c__11009__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11009__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto__){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto__){
return (function (state_16003){var state_val_16004 = (state_16003[1]);if((state_val_16004 === 7))
{var inst_15985 = (state_16003[2]);var state_16003__$1 = state_16003;var statearr_16005_16028 = state_16003__$1;(statearr_16005_16028[2] = inst_15985);
(statearr_16005_16028[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 1))
{var inst_15979 = cljs.core.seq.call(null,coll);var inst_15980 = inst_15979;var state_16003__$1 = (function (){var statearr_16006 = state_16003;(statearr_16006[7] = inst_15980);
return statearr_16006;
})();var statearr_16007_16029 = state_16003__$1;(statearr_16007_16029[2] = null);
(statearr_16007_16029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 4))
{var inst_15980 = (state_16003[7]);var inst_15983 = cljs.core.first.call(null,inst_15980);var state_16003__$1 = state_16003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16003__$1,7,ch,inst_15983);
} else
{if((state_val_16004 === 13))
{var inst_15997 = (state_16003[2]);var state_16003__$1 = state_16003;var statearr_16008_16030 = state_16003__$1;(statearr_16008_16030[2] = inst_15997);
(statearr_16008_16030[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 6))
{var inst_15988 = (state_16003[2]);var state_16003__$1 = state_16003;if(cljs.core.truth_(inst_15988))
{var statearr_16009_16031 = state_16003__$1;(statearr_16009_16031[1] = 8);
} else
{var statearr_16010_16032 = state_16003__$1;(statearr_16010_16032[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 3))
{var inst_16001 = (state_16003[2]);var state_16003__$1 = state_16003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16003__$1,inst_16001);
} else
{if((state_val_16004 === 12))
{var state_16003__$1 = state_16003;var statearr_16011_16033 = state_16003__$1;(statearr_16011_16033[2] = null);
(statearr_16011_16033[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 2))
{var inst_15980 = (state_16003[7]);var state_16003__$1 = state_16003;if(cljs.core.truth_(inst_15980))
{var statearr_16012_16034 = state_16003__$1;(statearr_16012_16034[1] = 4);
} else
{var statearr_16013_16035 = state_16003__$1;(statearr_16013_16035[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 11))
{var inst_15994 = cljs.core.async.close_BANG_.call(null,ch);var state_16003__$1 = state_16003;var statearr_16014_16036 = state_16003__$1;(statearr_16014_16036[2] = inst_15994);
(statearr_16014_16036[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 9))
{var state_16003__$1 = state_16003;if(cljs.core.truth_(close_QMARK_))
{var statearr_16015_16037 = state_16003__$1;(statearr_16015_16037[1] = 11);
} else
{var statearr_16016_16038 = state_16003__$1;(statearr_16016_16038[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 5))
{var inst_15980 = (state_16003[7]);var state_16003__$1 = state_16003;var statearr_16017_16039 = state_16003__$1;(statearr_16017_16039[2] = inst_15980);
(statearr_16017_16039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 10))
{var inst_15999 = (state_16003[2]);var state_16003__$1 = state_16003;var statearr_16018_16040 = state_16003__$1;(statearr_16018_16040[2] = inst_15999);
(statearr_16018_16040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16004 === 8))
{var inst_15980 = (state_16003[7]);var inst_15990 = cljs.core.next.call(null,inst_15980);var inst_15980__$1 = inst_15990;var state_16003__$1 = (function (){var statearr_16019 = state_16003;(statearr_16019[7] = inst_15980__$1);
return statearr_16019;
})();var statearr_16020_16041 = state_16003__$1;(statearr_16020_16041[2] = null);
(statearr_16020_16041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto__))
;return ((function (switch__10945__auto__,c__11009__auto__){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_16024 = [null,null,null,null,null,null,null,null];(statearr_16024[0] = state_machine__10946__auto__);
(statearr_16024[1] = 1);
return statearr_16024;
});
var state_machine__10946__auto____1 = (function (state_16003){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_16003);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e16025){if((e16025 instanceof Object))
{var ex__10949__auto__ = e16025;var statearr_16026_16042 = state_16003;(statearr_16026_16042[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16043 = state_16003;
state_16003 = G__16043;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_16003){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_16003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto__))
})();var state__11011__auto__ = (function (){var statearr_16027 = f__11010__auto__.call(null);(statearr_16027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto__);
return statearr_16027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto__))
);
return c__11009__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16045 = {};return obj16045;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7871__auto__ = _;if(and__7871__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8510__auto__ = (((_ == null))?null:_);return (function (){var or__7883__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16047 = {};return obj16047;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16269 = (function (cs,ch,mult,meta16270){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16270 = meta16270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16269.cljs$lang$type = true;
cljs.core.async.t16269.cljs$lang$ctorStr = "cljs.core.async/t16269";
cljs.core.async.t16269.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t16269");
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16269.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16271){var self__ = this;
var _16271__$1 = this;return self__.meta16270;
});})(cs))
;
cljs.core.async.t16269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16271,meta16270__$1){var self__ = this;
var _16271__$1 = this;return (new cljs.core.async.t16269(self__.cs,self__.ch,self__.mult,meta16270__$1));
});})(cs))
;
cljs.core.async.__GT_t16269 = ((function (cs){
return (function __GT_t16269(cs__$1,ch__$1,mult__$1,meta16270){return (new cljs.core.async.t16269(cs__$1,ch__$1,mult__$1,meta16270));
});})(cs))
;
}
return (new cljs.core.async.t16269(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11009__auto___16490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___16490,cs,m,dchan,dctr,done){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___16490,cs,m,dchan,dctr,done){
return (function (state_16402){var state_val_16403 = (state_16402[1]);if((state_val_16403 === 7))
{var inst_16398 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16404_16491 = state_16402__$1;(statearr_16404_16491[2] = inst_16398);
(statearr_16404_16491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 20))
{var inst_16303 = (state_16402[7]);var inst_16313 = cljs.core.first.call(null,inst_16303);var inst_16314 = cljs.core.nth.call(null,inst_16313,0,null);var inst_16315 = cljs.core.nth.call(null,inst_16313,1,null);var state_16402__$1 = (function (){var statearr_16405 = state_16402;(statearr_16405[8] = inst_16314);
return statearr_16405;
})();if(cljs.core.truth_(inst_16315))
{var statearr_16406_16492 = state_16402__$1;(statearr_16406_16492[1] = 22);
} else
{var statearr_16407_16493 = state_16402__$1;(statearr_16407_16493[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 27))
{var inst_16343 = (state_16402[9]);var inst_16345 = (state_16402[10]);var inst_16274 = (state_16402[11]);var inst_16350 = (state_16402[12]);var inst_16350__$1 = cljs.core._nth.call(null,inst_16343,inst_16345);var inst_16351 = cljs.core.async.put_BANG_.call(null,inst_16350__$1,inst_16274,done);var state_16402__$1 = (function (){var statearr_16408 = state_16402;(statearr_16408[12] = inst_16350__$1);
return statearr_16408;
})();if(cljs.core.truth_(inst_16351))
{var statearr_16409_16494 = state_16402__$1;(statearr_16409_16494[1] = 30);
} else
{var statearr_16410_16495 = state_16402__$1;(statearr_16410_16495[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 1))
{var state_16402__$1 = state_16402;var statearr_16411_16496 = state_16402__$1;(statearr_16411_16496[2] = null);
(statearr_16411_16496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 24))
{var inst_16303 = (state_16402[7]);var inst_16320 = (state_16402[2]);var inst_16321 = cljs.core.next.call(null,inst_16303);var inst_16283 = inst_16321;var inst_16284 = null;var inst_16285 = 0;var inst_16286 = 0;var state_16402__$1 = (function (){var statearr_16412 = state_16402;(statearr_16412[13] = inst_16283);
(statearr_16412[14] = inst_16284);
(statearr_16412[15] = inst_16286);
(statearr_16412[16] = inst_16285);
(statearr_16412[17] = inst_16320);
return statearr_16412;
})();var statearr_16413_16497 = state_16402__$1;(statearr_16413_16497[2] = null);
(statearr_16413_16497[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 39))
{var state_16402__$1 = state_16402;var statearr_16417_16498 = state_16402__$1;(statearr_16417_16498[2] = null);
(statearr_16417_16498[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 4))
{var inst_16274 = (state_16402[11]);var inst_16274__$1 = (state_16402[2]);var inst_16275 = (inst_16274__$1 == null);var state_16402__$1 = (function (){var statearr_16418 = state_16402;(statearr_16418[11] = inst_16274__$1);
return statearr_16418;
})();if(cljs.core.truth_(inst_16275))
{var statearr_16419_16499 = state_16402__$1;(statearr_16419_16499[1] = 5);
} else
{var statearr_16420_16500 = state_16402__$1;(statearr_16420_16500[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 15))
{var inst_16283 = (state_16402[13]);var inst_16284 = (state_16402[14]);var inst_16286 = (state_16402[15]);var inst_16285 = (state_16402[16]);var inst_16299 = (state_16402[2]);var inst_16300 = (inst_16286 + 1);var tmp16414 = inst_16283;var tmp16415 = inst_16284;var tmp16416 = inst_16285;var inst_16283__$1 = tmp16414;var inst_16284__$1 = tmp16415;var inst_16285__$1 = tmp16416;var inst_16286__$1 = inst_16300;var state_16402__$1 = (function (){var statearr_16421 = state_16402;(statearr_16421[13] = inst_16283__$1);
(statearr_16421[14] = inst_16284__$1);
(statearr_16421[15] = inst_16286__$1);
(statearr_16421[16] = inst_16285__$1);
(statearr_16421[18] = inst_16299);
return statearr_16421;
})();var statearr_16422_16501 = state_16402__$1;(statearr_16422_16501[2] = null);
(statearr_16422_16501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 21))
{var inst_16324 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16426_16502 = state_16402__$1;(statearr_16426_16502[2] = inst_16324);
(statearr_16426_16502[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 31))
{var inst_16350 = (state_16402[12]);var inst_16354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16355 = cljs.core.async.untap_STAR_.call(null,m,inst_16350);var state_16402__$1 = (function (){var statearr_16427 = state_16402;(statearr_16427[19] = inst_16354);
return statearr_16427;
})();var statearr_16428_16503 = state_16402__$1;(statearr_16428_16503[2] = inst_16355);
(statearr_16428_16503[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 32))
{var inst_16343 = (state_16402[9]);var inst_16342 = (state_16402[20]);var inst_16345 = (state_16402[10]);var inst_16344 = (state_16402[21]);var inst_16357 = (state_16402[2]);var inst_16358 = (inst_16345 + 1);var tmp16423 = inst_16343;var tmp16424 = inst_16342;var tmp16425 = inst_16344;var inst_16342__$1 = tmp16424;var inst_16343__$1 = tmp16423;var inst_16344__$1 = tmp16425;var inst_16345__$1 = inst_16358;var state_16402__$1 = (function (){var statearr_16429 = state_16402;(statearr_16429[9] = inst_16343__$1);
(statearr_16429[20] = inst_16342__$1);
(statearr_16429[10] = inst_16345__$1);
(statearr_16429[22] = inst_16357);
(statearr_16429[21] = inst_16344__$1);
return statearr_16429;
})();var statearr_16430_16504 = state_16402__$1;(statearr_16430_16504[2] = null);
(statearr_16430_16504[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 40))
{var inst_16370 = (state_16402[23]);var inst_16374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16375 = cljs.core.async.untap_STAR_.call(null,m,inst_16370);var state_16402__$1 = (function (){var statearr_16431 = state_16402;(statearr_16431[24] = inst_16374);
return statearr_16431;
})();var statearr_16432_16505 = state_16402__$1;(statearr_16432_16505[2] = inst_16375);
(statearr_16432_16505[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 33))
{var inst_16361 = (state_16402[25]);var inst_16363 = cljs.core.chunked_seq_QMARK_.call(null,inst_16361);var state_16402__$1 = state_16402;if(inst_16363)
{var statearr_16433_16506 = state_16402__$1;(statearr_16433_16506[1] = 36);
} else
{var statearr_16434_16507 = state_16402__$1;(statearr_16434_16507[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 13))
{var inst_16293 = (state_16402[26]);var inst_16296 = cljs.core.async.close_BANG_.call(null,inst_16293);var state_16402__$1 = state_16402;var statearr_16435_16508 = state_16402__$1;(statearr_16435_16508[2] = inst_16296);
(statearr_16435_16508[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 22))
{var inst_16314 = (state_16402[8]);var inst_16317 = cljs.core.async.close_BANG_.call(null,inst_16314);var state_16402__$1 = state_16402;var statearr_16436_16509 = state_16402__$1;(statearr_16436_16509[2] = inst_16317);
(statearr_16436_16509[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 36))
{var inst_16361 = (state_16402[25]);var inst_16365 = cljs.core.chunk_first.call(null,inst_16361);var inst_16366 = cljs.core.chunk_rest.call(null,inst_16361);var inst_16367 = cljs.core.count.call(null,inst_16365);var inst_16342 = inst_16366;var inst_16343 = inst_16365;var inst_16344 = inst_16367;var inst_16345 = 0;var state_16402__$1 = (function (){var statearr_16437 = state_16402;(statearr_16437[9] = inst_16343);
(statearr_16437[20] = inst_16342);
(statearr_16437[10] = inst_16345);
(statearr_16437[21] = inst_16344);
return statearr_16437;
})();var statearr_16438_16510 = state_16402__$1;(statearr_16438_16510[2] = null);
(statearr_16438_16510[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 41))
{var inst_16361 = (state_16402[25]);var inst_16377 = (state_16402[2]);var inst_16378 = cljs.core.next.call(null,inst_16361);var inst_16342 = inst_16378;var inst_16343 = null;var inst_16344 = 0;var inst_16345 = 0;var state_16402__$1 = (function (){var statearr_16439 = state_16402;(statearr_16439[9] = inst_16343);
(statearr_16439[27] = inst_16377);
(statearr_16439[20] = inst_16342);
(statearr_16439[10] = inst_16345);
(statearr_16439[21] = inst_16344);
return statearr_16439;
})();var statearr_16440_16511 = state_16402__$1;(statearr_16440_16511[2] = null);
(statearr_16440_16511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 43))
{var state_16402__$1 = state_16402;var statearr_16441_16512 = state_16402__$1;(statearr_16441_16512[2] = null);
(statearr_16441_16512[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 29))
{var inst_16386 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16442_16513 = state_16402__$1;(statearr_16442_16513[2] = inst_16386);
(statearr_16442_16513[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 44))
{var inst_16395 = (state_16402[2]);var state_16402__$1 = (function (){var statearr_16443 = state_16402;(statearr_16443[28] = inst_16395);
return statearr_16443;
})();var statearr_16444_16514 = state_16402__$1;(statearr_16444_16514[2] = null);
(statearr_16444_16514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 6))
{var inst_16334 = (state_16402[29]);var inst_16333 = cljs.core.deref.call(null,cs);var inst_16334__$1 = cljs.core.keys.call(null,inst_16333);var inst_16335 = cljs.core.count.call(null,inst_16334__$1);var inst_16336 = cljs.core.reset_BANG_.call(null,dctr,inst_16335);var inst_16341 = cljs.core.seq.call(null,inst_16334__$1);var inst_16342 = inst_16341;var inst_16343 = null;var inst_16344 = 0;var inst_16345 = 0;var state_16402__$1 = (function (){var statearr_16445 = state_16402;(statearr_16445[9] = inst_16343);
(statearr_16445[30] = inst_16336);
(statearr_16445[20] = inst_16342);
(statearr_16445[10] = inst_16345);
(statearr_16445[21] = inst_16344);
(statearr_16445[29] = inst_16334__$1);
return statearr_16445;
})();var statearr_16446_16515 = state_16402__$1;(statearr_16446_16515[2] = null);
(statearr_16446_16515[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 28))
{var inst_16342 = (state_16402[20]);var inst_16361 = (state_16402[25]);var inst_16361__$1 = cljs.core.seq.call(null,inst_16342);var state_16402__$1 = (function (){var statearr_16447 = state_16402;(statearr_16447[25] = inst_16361__$1);
return statearr_16447;
})();if(inst_16361__$1)
{var statearr_16448_16516 = state_16402__$1;(statearr_16448_16516[1] = 33);
} else
{var statearr_16449_16517 = state_16402__$1;(statearr_16449_16517[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 25))
{var inst_16345 = (state_16402[10]);var inst_16344 = (state_16402[21]);var inst_16347 = (inst_16345 < inst_16344);var inst_16348 = inst_16347;var state_16402__$1 = state_16402;if(cljs.core.truth_(inst_16348))
{var statearr_16450_16518 = state_16402__$1;(statearr_16450_16518[1] = 27);
} else
{var statearr_16451_16519 = state_16402__$1;(statearr_16451_16519[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 34))
{var state_16402__$1 = state_16402;var statearr_16452_16520 = state_16402__$1;(statearr_16452_16520[2] = null);
(statearr_16452_16520[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 17))
{var state_16402__$1 = state_16402;var statearr_16453_16521 = state_16402__$1;(statearr_16453_16521[2] = null);
(statearr_16453_16521[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 3))
{var inst_16400 = (state_16402[2]);var state_16402__$1 = state_16402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16402__$1,inst_16400);
} else
{if((state_val_16403 === 12))
{var inst_16329 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16454_16522 = state_16402__$1;(statearr_16454_16522[2] = inst_16329);
(statearr_16454_16522[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 2))
{var state_16402__$1 = state_16402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16402__$1,4,ch);
} else
{if((state_val_16403 === 23))
{var state_16402__$1 = state_16402;var statearr_16455_16523 = state_16402__$1;(statearr_16455_16523[2] = null);
(statearr_16455_16523[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 35))
{var inst_16384 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16456_16524 = state_16402__$1;(statearr_16456_16524[2] = inst_16384);
(statearr_16456_16524[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 19))
{var inst_16303 = (state_16402[7]);var inst_16307 = cljs.core.chunk_first.call(null,inst_16303);var inst_16308 = cljs.core.chunk_rest.call(null,inst_16303);var inst_16309 = cljs.core.count.call(null,inst_16307);var inst_16283 = inst_16308;var inst_16284 = inst_16307;var inst_16285 = inst_16309;var inst_16286 = 0;var state_16402__$1 = (function (){var statearr_16457 = state_16402;(statearr_16457[13] = inst_16283);
(statearr_16457[14] = inst_16284);
(statearr_16457[15] = inst_16286);
(statearr_16457[16] = inst_16285);
return statearr_16457;
})();var statearr_16458_16525 = state_16402__$1;(statearr_16458_16525[2] = null);
(statearr_16458_16525[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 11))
{var inst_16283 = (state_16402[13]);var inst_16303 = (state_16402[7]);var inst_16303__$1 = cljs.core.seq.call(null,inst_16283);var state_16402__$1 = (function (){var statearr_16459 = state_16402;(statearr_16459[7] = inst_16303__$1);
return statearr_16459;
})();if(inst_16303__$1)
{var statearr_16460_16526 = state_16402__$1;(statearr_16460_16526[1] = 16);
} else
{var statearr_16461_16527 = state_16402__$1;(statearr_16461_16527[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 9))
{var inst_16331 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16462_16528 = state_16402__$1;(statearr_16462_16528[2] = inst_16331);
(statearr_16462_16528[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 5))
{var inst_16281 = cljs.core.deref.call(null,cs);var inst_16282 = cljs.core.seq.call(null,inst_16281);var inst_16283 = inst_16282;var inst_16284 = null;var inst_16285 = 0;var inst_16286 = 0;var state_16402__$1 = (function (){var statearr_16463 = state_16402;(statearr_16463[13] = inst_16283);
(statearr_16463[14] = inst_16284);
(statearr_16463[15] = inst_16286);
(statearr_16463[16] = inst_16285);
return statearr_16463;
})();var statearr_16464_16529 = state_16402__$1;(statearr_16464_16529[2] = null);
(statearr_16464_16529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 14))
{var state_16402__$1 = state_16402;var statearr_16465_16530 = state_16402__$1;(statearr_16465_16530[2] = null);
(statearr_16465_16530[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 45))
{var inst_16392 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16466_16531 = state_16402__$1;(statearr_16466_16531[2] = inst_16392);
(statearr_16466_16531[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 26))
{var inst_16334 = (state_16402[29]);var inst_16388 = (state_16402[2]);var inst_16389 = cljs.core.seq.call(null,inst_16334);var state_16402__$1 = (function (){var statearr_16467 = state_16402;(statearr_16467[31] = inst_16388);
return statearr_16467;
})();if(inst_16389)
{var statearr_16468_16532 = state_16402__$1;(statearr_16468_16532[1] = 42);
} else
{var statearr_16469_16533 = state_16402__$1;(statearr_16469_16533[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 16))
{var inst_16303 = (state_16402[7]);var inst_16305 = cljs.core.chunked_seq_QMARK_.call(null,inst_16303);var state_16402__$1 = state_16402;if(inst_16305)
{var statearr_16470_16534 = state_16402__$1;(statearr_16470_16534[1] = 19);
} else
{var statearr_16471_16535 = state_16402__$1;(statearr_16471_16535[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 38))
{var inst_16381 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16472_16536 = state_16402__$1;(statearr_16472_16536[2] = inst_16381);
(statearr_16472_16536[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 30))
{var state_16402__$1 = state_16402;var statearr_16473_16537 = state_16402__$1;(statearr_16473_16537[2] = null);
(statearr_16473_16537[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 10))
{var inst_16284 = (state_16402[14]);var inst_16286 = (state_16402[15]);var inst_16292 = cljs.core._nth.call(null,inst_16284,inst_16286);var inst_16293 = cljs.core.nth.call(null,inst_16292,0,null);var inst_16294 = cljs.core.nth.call(null,inst_16292,1,null);var state_16402__$1 = (function (){var statearr_16474 = state_16402;(statearr_16474[26] = inst_16293);
return statearr_16474;
})();if(cljs.core.truth_(inst_16294))
{var statearr_16475_16538 = state_16402__$1;(statearr_16475_16538[1] = 13);
} else
{var statearr_16476_16539 = state_16402__$1;(statearr_16476_16539[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 18))
{var inst_16327 = (state_16402[2]);var state_16402__$1 = state_16402;var statearr_16477_16540 = state_16402__$1;(statearr_16477_16540[2] = inst_16327);
(statearr_16477_16540[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 42))
{var state_16402__$1 = state_16402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16402__$1,45,dchan);
} else
{if((state_val_16403 === 37))
{var inst_16361 = (state_16402[25]);var inst_16274 = (state_16402[11]);var inst_16370 = (state_16402[23]);var inst_16370__$1 = cljs.core.first.call(null,inst_16361);var inst_16371 = cljs.core.async.put_BANG_.call(null,inst_16370__$1,inst_16274,done);var state_16402__$1 = (function (){var statearr_16478 = state_16402;(statearr_16478[23] = inst_16370__$1);
return statearr_16478;
})();if(cljs.core.truth_(inst_16371))
{var statearr_16479_16541 = state_16402__$1;(statearr_16479_16541[1] = 39);
} else
{var statearr_16480_16542 = state_16402__$1;(statearr_16480_16542[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16403 === 8))
{var inst_16286 = (state_16402[15]);var inst_16285 = (state_16402[16]);var inst_16288 = (inst_16286 < inst_16285);var inst_16289 = inst_16288;var state_16402__$1 = state_16402;if(cljs.core.truth_(inst_16289))
{var statearr_16481_16543 = state_16402__$1;(statearr_16481_16543[1] = 10);
} else
{var statearr_16482_16544 = state_16402__$1;(statearr_16482_16544[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___16490,cs,m,dchan,dctr,done))
;return ((function (switch__10945__auto__,c__11009__auto___16490,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_16486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16486[0] = state_machine__10946__auto__);
(statearr_16486[1] = 1);
return statearr_16486;
});
var state_machine__10946__auto____1 = (function (state_16402){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_16402);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e16487){if((e16487 instanceof Object))
{var ex__10949__auto__ = e16487;var statearr_16488_16545 = state_16402;(statearr_16488_16545[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16546 = state_16402;
state_16402 = G__16546;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_16402){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_16402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___16490,cs,m,dchan,dctr,done))
})();var state__11011__auto__ = (function (){var statearr_16489 = f__11010__auto__.call(null);(statearr_16489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___16490);
return statearr_16489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___16490,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16548 = {};return obj16548;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16668 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16669){
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
this.meta16669 = meta16669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16668.cljs$lang$type = true;
cljs.core.async.t16668.cljs$lang$ctorStr = "cljs.core.async/t16668";
cljs.core.async.t16668.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t16668");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16670){var self__ = this;
var _16670__$1 = this;return self__.meta16669;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16670,meta16669__$1){var self__ = this;
var _16670__$1 = this;return (new cljs.core.async.t16668(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16669__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16668 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16668(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16669){return (new cljs.core.async.t16668(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16669));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16668(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11009__auto___16787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16740){var state_val_16741 = (state_16740[1]);if((state_val_16741 === 7))
{var inst_16684 = (state_16740[7]);var inst_16689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16684);var state_16740__$1 = state_16740;var statearr_16742_16788 = state_16740__$1;(statearr_16742_16788[2] = inst_16689);
(statearr_16742_16788[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 20))
{var inst_16699 = (state_16740[8]);var state_16740__$1 = state_16740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16740__$1,23,out,inst_16699);
} else
{if((state_val_16741 === 1))
{var inst_16674 = (state_16740[9]);var inst_16674__$1 = calc_state.call(null);var inst_16675 = cljs.core.seq_QMARK_.call(null,inst_16674__$1);var state_16740__$1 = (function (){var statearr_16743 = state_16740;(statearr_16743[9] = inst_16674__$1);
return statearr_16743;
})();if(inst_16675)
{var statearr_16744_16789 = state_16740__$1;(statearr_16744_16789[1] = 2);
} else
{var statearr_16745_16790 = state_16740__$1;(statearr_16745_16790[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 24))
{var inst_16692 = (state_16740[10]);var inst_16684 = inst_16692;var state_16740__$1 = (function (){var statearr_16746 = state_16740;(statearr_16746[7] = inst_16684);
return statearr_16746;
})();var statearr_16747_16791 = state_16740__$1;(statearr_16747_16791[2] = null);
(statearr_16747_16791[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 4))
{var inst_16674 = (state_16740[9]);var inst_16680 = (state_16740[2]);var inst_16681 = cljs.core.get.call(null,inst_16680,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16682 = cljs.core.get.call(null,inst_16680,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16683 = cljs.core.get.call(null,inst_16680,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16684 = inst_16674;var state_16740__$1 = (function (){var statearr_16748 = state_16740;(statearr_16748[11] = inst_16682);
(statearr_16748[7] = inst_16684);
(statearr_16748[12] = inst_16681);
(statearr_16748[13] = inst_16683);
return statearr_16748;
})();var statearr_16749_16792 = state_16740__$1;(statearr_16749_16792[2] = null);
(statearr_16749_16792[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 15))
{var state_16740__$1 = state_16740;var statearr_16750_16793 = state_16740__$1;(statearr_16750_16793[2] = null);
(statearr_16750_16793[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 21))
{var inst_16692 = (state_16740[10]);var inst_16684 = inst_16692;var state_16740__$1 = (function (){var statearr_16751 = state_16740;(statearr_16751[7] = inst_16684);
return statearr_16751;
})();var statearr_16752_16794 = state_16740__$1;(statearr_16752_16794[2] = null);
(statearr_16752_16794[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 13))
{var inst_16736 = (state_16740[2]);var state_16740__$1 = state_16740;var statearr_16753_16795 = state_16740__$1;(statearr_16753_16795[2] = inst_16736);
(statearr_16753_16795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 22))
{var inst_16734 = (state_16740[2]);var state_16740__$1 = state_16740;var statearr_16754_16796 = state_16740__$1;(statearr_16754_16796[2] = inst_16734);
(statearr_16754_16796[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 6))
{var inst_16738 = (state_16740[2]);var state_16740__$1 = state_16740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16740__$1,inst_16738);
} else
{if((state_val_16741 === 25))
{var state_16740__$1 = state_16740;var statearr_16755_16797 = state_16740__$1;(statearr_16755_16797[2] = null);
(statearr_16755_16797[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 17))
{var inst_16714 = (state_16740[14]);var state_16740__$1 = state_16740;var statearr_16756_16798 = state_16740__$1;(statearr_16756_16798[2] = inst_16714);
(statearr_16756_16798[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 3))
{var inst_16674 = (state_16740[9]);var state_16740__$1 = state_16740;var statearr_16757_16799 = state_16740__$1;(statearr_16757_16799[2] = inst_16674);
(statearr_16757_16799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 12))
{var inst_16700 = (state_16740[15]);var inst_16714 = (state_16740[14]);var inst_16695 = (state_16740[16]);var inst_16714__$1 = inst_16695.call(null,inst_16700);var state_16740__$1 = (function (){var statearr_16758 = state_16740;(statearr_16758[14] = inst_16714__$1);
return statearr_16758;
})();if(cljs.core.truth_(inst_16714__$1))
{var statearr_16759_16800 = state_16740__$1;(statearr_16759_16800[1] = 17);
} else
{var statearr_16760_16801 = state_16740__$1;(statearr_16760_16801[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 2))
{var inst_16674 = (state_16740[9]);var inst_16677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16674);var state_16740__$1 = state_16740;var statearr_16761_16802 = state_16740__$1;(statearr_16761_16802[2] = inst_16677);
(statearr_16761_16802[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 23))
{var inst_16725 = (state_16740[2]);var state_16740__$1 = state_16740;if(cljs.core.truth_(inst_16725))
{var statearr_16762_16803 = state_16740__$1;(statearr_16762_16803[1] = 24);
} else
{var statearr_16763_16804 = state_16740__$1;(statearr_16763_16804[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 19))
{var inst_16722 = (state_16740[2]);var state_16740__$1 = state_16740;if(cljs.core.truth_(inst_16722))
{var statearr_16764_16805 = state_16740__$1;(statearr_16764_16805[1] = 20);
} else
{var statearr_16765_16806 = state_16740__$1;(statearr_16765_16806[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 11))
{var inst_16699 = (state_16740[8]);var inst_16705 = (inst_16699 == null);var state_16740__$1 = state_16740;if(cljs.core.truth_(inst_16705))
{var statearr_16766_16807 = state_16740__$1;(statearr_16766_16807[1] = 14);
} else
{var statearr_16767_16808 = state_16740__$1;(statearr_16767_16808[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 9))
{var inst_16692 = (state_16740[10]);var inst_16692__$1 = (state_16740[2]);var inst_16693 = cljs.core.get.call(null,inst_16692__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16694 = cljs.core.get.call(null,inst_16692__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16695 = cljs.core.get.call(null,inst_16692__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16740__$1 = (function (){var statearr_16768 = state_16740;(statearr_16768[17] = inst_16694);
(statearr_16768[10] = inst_16692__$1);
(statearr_16768[16] = inst_16695);
return statearr_16768;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16740__$1,10,inst_16693);
} else
{if((state_val_16741 === 5))
{var inst_16684 = (state_16740[7]);var inst_16687 = cljs.core.seq_QMARK_.call(null,inst_16684);var state_16740__$1 = state_16740;if(inst_16687)
{var statearr_16769_16809 = state_16740__$1;(statearr_16769_16809[1] = 7);
} else
{var statearr_16770_16810 = state_16740__$1;(statearr_16770_16810[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 14))
{var inst_16700 = (state_16740[15]);var inst_16707 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16700);var state_16740__$1 = state_16740;var statearr_16771_16811 = state_16740__$1;(statearr_16771_16811[2] = inst_16707);
(statearr_16771_16811[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 26))
{var inst_16730 = (state_16740[2]);var state_16740__$1 = state_16740;var statearr_16772_16812 = state_16740__$1;(statearr_16772_16812[2] = inst_16730);
(statearr_16772_16812[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 16))
{var inst_16710 = (state_16740[2]);var inst_16711 = calc_state.call(null);var inst_16684 = inst_16711;var state_16740__$1 = (function (){var statearr_16773 = state_16740;(statearr_16773[7] = inst_16684);
(statearr_16773[18] = inst_16710);
return statearr_16773;
})();var statearr_16774_16813 = state_16740__$1;(statearr_16774_16813[2] = null);
(statearr_16774_16813[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 10))
{var inst_16700 = (state_16740[15]);var inst_16699 = (state_16740[8]);var inst_16698 = (state_16740[2]);var inst_16699__$1 = cljs.core.nth.call(null,inst_16698,0,null);var inst_16700__$1 = cljs.core.nth.call(null,inst_16698,1,null);var inst_16701 = (inst_16699__$1 == null);var inst_16702 = cljs.core._EQ_.call(null,inst_16700__$1,change);var inst_16703 = (inst_16701) || (inst_16702);var state_16740__$1 = (function (){var statearr_16775 = state_16740;(statearr_16775[15] = inst_16700__$1);
(statearr_16775[8] = inst_16699__$1);
return statearr_16775;
})();if(cljs.core.truth_(inst_16703))
{var statearr_16776_16814 = state_16740__$1;(statearr_16776_16814[1] = 11);
} else
{var statearr_16777_16815 = state_16740__$1;(statearr_16777_16815[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 18))
{var inst_16694 = (state_16740[17]);var inst_16700 = (state_16740[15]);var inst_16695 = (state_16740[16]);var inst_16717 = cljs.core.empty_QMARK_.call(null,inst_16695);var inst_16718 = inst_16694.call(null,inst_16700);var inst_16719 = cljs.core.not.call(null,inst_16718);var inst_16720 = (inst_16717) && (inst_16719);var state_16740__$1 = state_16740;var statearr_16778_16816 = state_16740__$1;(statearr_16778_16816[2] = inst_16720);
(statearr_16778_16816[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16741 === 8))
{var inst_16684 = (state_16740[7]);var state_16740__$1 = state_16740;var statearr_16779_16817 = state_16740__$1;(statearr_16779_16817[2] = inst_16684);
(statearr_16779_16817[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10945__auto__,c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_16783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16783[0] = state_machine__10946__auto__);
(statearr_16783[1] = 1);
return statearr_16783;
});
var state_machine__10946__auto____1 = (function (state_16740){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_16740);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e16784){if((e16784 instanceof Object))
{var ex__10949__auto__ = e16784;var statearr_16785_16818 = state_16740;(statearr_16785_16818[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16819 = state_16740;
state_16740 = G__16819;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11011__auto__ = (function (){var statearr_16786 = f__11010__auto__.call(null);(statearr_16786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___16787);
return statearr_16786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___16787,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16821 = {};return obj16821;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
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
return (function (topic){var or__7883__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7883__auto__,mults){
return (function (p1__16822_SHARP_){if(cljs.core.truth_(p1__16822_SHARP_.call(null,topic)))
{return p1__16822_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16822_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7883__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16937 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16938){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16938 = meta16938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16937.cljs$lang$type = true;
cljs.core.async.t16937.cljs$lang$ctorStr = "cljs.core.async/t16937";
cljs.core.async.t16937.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t16937");
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16937.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16939){var self__ = this;
var _16939__$1 = this;return self__.meta16938;
});})(mults,ensure_mult))
;
cljs.core.async.t16937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16939,meta16938__$1){var self__ = this;
var _16939__$1 = this;return (new cljs.core.async.t16937(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16938__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16937 = ((function (mults,ensure_mult){
return (function __GT_t16937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16938){return (new cljs.core.async.t16937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16938));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16937(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11009__auto___17051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17051,mults,ensure_mult,p){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17051,mults,ensure_mult,p){
return (function (state_17007){var state_val_17008 = (state_17007[1]);if((state_val_17008 === 7))
{var inst_17003 = (state_17007[2]);var state_17007__$1 = state_17007;var statearr_17009_17052 = state_17007__$1;(statearr_17009_17052[2] = inst_17003);
(statearr_17009_17052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 20))
{var state_17007__$1 = state_17007;var statearr_17010_17053 = state_17007__$1;(statearr_17010_17053[2] = null);
(statearr_17010_17053[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 1))
{var state_17007__$1 = state_17007;var statearr_17011_17054 = state_17007__$1;(statearr_17011_17054[2] = null);
(statearr_17011_17054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 4))
{var inst_16942 = (state_17007[7]);var inst_16942__$1 = (state_17007[2]);var inst_16943 = (inst_16942__$1 == null);var state_17007__$1 = (function (){var statearr_17012 = state_17007;(statearr_17012[7] = inst_16942__$1);
return statearr_17012;
})();if(cljs.core.truth_(inst_16943))
{var statearr_17013_17055 = state_17007__$1;(statearr_17013_17055[1] = 5);
} else
{var statearr_17014_17056 = state_17007__$1;(statearr_17014_17056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 15))
{var inst_16984 = (state_17007[2]);var state_17007__$1 = state_17007;var statearr_17015_17057 = state_17007__$1;(statearr_17015_17057[2] = inst_16984);
(statearr_17015_17057[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 21))
{var inst_16990 = (state_17007[8]);var inst_16998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16990);var state_17007__$1 = state_17007;var statearr_17016_17058 = state_17007__$1;(statearr_17016_17058[2] = inst_16998);
(statearr_17016_17058[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 13))
{var inst_16966 = (state_17007[9]);var inst_16968 = cljs.core.chunked_seq_QMARK_.call(null,inst_16966);var state_17007__$1 = state_17007;if(inst_16968)
{var statearr_17017_17059 = state_17007__$1;(statearr_17017_17059[1] = 16);
} else
{var statearr_17018_17060 = state_17007__$1;(statearr_17018_17060[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 22))
{var inst_17000 = (state_17007[2]);var state_17007__$1 = (function (){var statearr_17019 = state_17007;(statearr_17019[10] = inst_17000);
return statearr_17019;
})();var statearr_17020_17061 = state_17007__$1;(statearr_17020_17061[2] = null);
(statearr_17020_17061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 6))
{var inst_16942 = (state_17007[7]);var inst_16990 = (state_17007[8]);var inst_16990__$1 = topic_fn.call(null,inst_16942);var inst_16991 = cljs.core.deref.call(null,mults);var inst_16992 = cljs.core.get.call(null,inst_16991,inst_16990__$1);var inst_16993 = cljs.core.async.muxch_STAR_.call(null,inst_16992);var state_17007__$1 = (function (){var statearr_17021 = state_17007;(statearr_17021[8] = inst_16990__$1);
return statearr_17021;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17007__$1,19,inst_16993,inst_16942);
} else
{if((state_val_17008 === 17))
{var inst_16966 = (state_17007[9]);var inst_16975 = cljs.core.first.call(null,inst_16966);var inst_16976 = cljs.core.async.muxch_STAR_.call(null,inst_16975);var inst_16977 = cljs.core.async.close_BANG_.call(null,inst_16976);var inst_16978 = cljs.core.next.call(null,inst_16966);var inst_16952 = inst_16978;var inst_16953 = null;var inst_16954 = 0;var inst_16955 = 0;var state_17007__$1 = (function (){var statearr_17022 = state_17007;(statearr_17022[11] = inst_16955);
(statearr_17022[12] = inst_16977);
(statearr_17022[13] = inst_16953);
(statearr_17022[14] = inst_16952);
(statearr_17022[15] = inst_16954);
return statearr_17022;
})();var statearr_17023_17062 = state_17007__$1;(statearr_17023_17062[2] = null);
(statearr_17023_17062[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 3))
{var inst_17005 = (state_17007[2]);var state_17007__$1 = state_17007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17007__$1,inst_17005);
} else
{if((state_val_17008 === 12))
{var inst_16986 = (state_17007[2]);var state_17007__$1 = state_17007;var statearr_17024_17063 = state_17007__$1;(statearr_17024_17063[2] = inst_16986);
(statearr_17024_17063[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 2))
{var state_17007__$1 = state_17007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17007__$1,4,ch);
} else
{if((state_val_17008 === 19))
{var inst_16995 = (state_17007[2]);var state_17007__$1 = state_17007;if(cljs.core.truth_(inst_16995))
{var statearr_17025_17064 = state_17007__$1;(statearr_17025_17064[1] = 20);
} else
{var statearr_17026_17065 = state_17007__$1;(statearr_17026_17065[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 11))
{var inst_16966 = (state_17007[9]);var inst_16952 = (state_17007[14]);var inst_16966__$1 = cljs.core.seq.call(null,inst_16952);var state_17007__$1 = (function (){var statearr_17027 = state_17007;(statearr_17027[9] = inst_16966__$1);
return statearr_17027;
})();if(inst_16966__$1)
{var statearr_17028_17066 = state_17007__$1;(statearr_17028_17066[1] = 13);
} else
{var statearr_17029_17067 = state_17007__$1;(statearr_17029_17067[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 9))
{var inst_16988 = (state_17007[2]);var state_17007__$1 = state_17007;var statearr_17030_17068 = state_17007__$1;(statearr_17030_17068[2] = inst_16988);
(statearr_17030_17068[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 5))
{var inst_16949 = cljs.core.deref.call(null,mults);var inst_16950 = cljs.core.vals.call(null,inst_16949);var inst_16951 = cljs.core.seq.call(null,inst_16950);var inst_16952 = inst_16951;var inst_16953 = null;var inst_16954 = 0;var inst_16955 = 0;var state_17007__$1 = (function (){var statearr_17031 = state_17007;(statearr_17031[11] = inst_16955);
(statearr_17031[13] = inst_16953);
(statearr_17031[14] = inst_16952);
(statearr_17031[15] = inst_16954);
return statearr_17031;
})();var statearr_17032_17069 = state_17007__$1;(statearr_17032_17069[2] = null);
(statearr_17032_17069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 14))
{var state_17007__$1 = state_17007;var statearr_17036_17070 = state_17007__$1;(statearr_17036_17070[2] = null);
(statearr_17036_17070[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 16))
{var inst_16966 = (state_17007[9]);var inst_16970 = cljs.core.chunk_first.call(null,inst_16966);var inst_16971 = cljs.core.chunk_rest.call(null,inst_16966);var inst_16972 = cljs.core.count.call(null,inst_16970);var inst_16952 = inst_16971;var inst_16953 = inst_16970;var inst_16954 = inst_16972;var inst_16955 = 0;var state_17007__$1 = (function (){var statearr_17037 = state_17007;(statearr_17037[11] = inst_16955);
(statearr_17037[13] = inst_16953);
(statearr_17037[14] = inst_16952);
(statearr_17037[15] = inst_16954);
return statearr_17037;
})();var statearr_17038_17071 = state_17007__$1;(statearr_17038_17071[2] = null);
(statearr_17038_17071[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 10))
{var inst_16955 = (state_17007[11]);var inst_16953 = (state_17007[13]);var inst_16952 = (state_17007[14]);var inst_16954 = (state_17007[15]);var inst_16960 = cljs.core._nth.call(null,inst_16953,inst_16955);var inst_16961 = cljs.core.async.muxch_STAR_.call(null,inst_16960);var inst_16962 = cljs.core.async.close_BANG_.call(null,inst_16961);var inst_16963 = (inst_16955 + 1);var tmp17033 = inst_16953;var tmp17034 = inst_16952;var tmp17035 = inst_16954;var inst_16952__$1 = tmp17034;var inst_16953__$1 = tmp17033;var inst_16954__$1 = tmp17035;var inst_16955__$1 = inst_16963;var state_17007__$1 = (function (){var statearr_17039 = state_17007;(statearr_17039[11] = inst_16955__$1);
(statearr_17039[16] = inst_16962);
(statearr_17039[13] = inst_16953__$1);
(statearr_17039[14] = inst_16952__$1);
(statearr_17039[15] = inst_16954__$1);
return statearr_17039;
})();var statearr_17040_17072 = state_17007__$1;(statearr_17040_17072[2] = null);
(statearr_17040_17072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 18))
{var inst_16981 = (state_17007[2]);var state_17007__$1 = state_17007;var statearr_17041_17073 = state_17007__$1;(statearr_17041_17073[2] = inst_16981);
(statearr_17041_17073[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17008 === 8))
{var inst_16955 = (state_17007[11]);var inst_16954 = (state_17007[15]);var inst_16957 = (inst_16955 < inst_16954);var inst_16958 = inst_16957;var state_17007__$1 = state_17007;if(cljs.core.truth_(inst_16958))
{var statearr_17042_17074 = state_17007__$1;(statearr_17042_17074[1] = 10);
} else
{var statearr_17043_17075 = state_17007__$1;(statearr_17043_17075[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17051,mults,ensure_mult,p))
;return ((function (switch__10945__auto__,c__11009__auto___17051,mults,ensure_mult,p){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17047[0] = state_machine__10946__auto__);
(statearr_17047[1] = 1);
return statearr_17047;
});
var state_machine__10946__auto____1 = (function (state_17007){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17007);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17048){if((e17048 instanceof Object))
{var ex__10949__auto__ = e17048;var statearr_17049_17076 = state_17007;(statearr_17049_17076[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17077 = state_17007;
state_17007 = G__17077;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17007){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17051,mults,ensure_mult,p))
})();var state__11011__auto__ = (function (){var statearr_17050 = f__11010__auto__.call(null);(statearr_17050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17051);
return statearr_17050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17051,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11009__auto___17214 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17184){var state_val_17185 = (state_17184[1]);if((state_val_17185 === 7))
{var state_17184__$1 = state_17184;var statearr_17186_17215 = state_17184__$1;(statearr_17186_17215[2] = null);
(statearr_17186_17215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 1))
{var state_17184__$1 = state_17184;var statearr_17187_17216 = state_17184__$1;(statearr_17187_17216[2] = null);
(statearr_17187_17216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 4))
{var inst_17148 = (state_17184[7]);var inst_17150 = (inst_17148 < cnt);var state_17184__$1 = state_17184;if(cljs.core.truth_(inst_17150))
{var statearr_17188_17217 = state_17184__$1;(statearr_17188_17217[1] = 6);
} else
{var statearr_17189_17218 = state_17184__$1;(statearr_17189_17218[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 15))
{var inst_17180 = (state_17184[2]);var state_17184__$1 = state_17184;var statearr_17190_17219 = state_17184__$1;(statearr_17190_17219[2] = inst_17180);
(statearr_17190_17219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 13))
{var inst_17173 = cljs.core.async.close_BANG_.call(null,out);var state_17184__$1 = state_17184;var statearr_17191_17220 = state_17184__$1;(statearr_17191_17220[2] = inst_17173);
(statearr_17191_17220[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 6))
{var state_17184__$1 = state_17184;var statearr_17192_17221 = state_17184__$1;(statearr_17192_17221[2] = null);
(statearr_17192_17221[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 3))
{var inst_17182 = (state_17184[2]);var state_17184__$1 = state_17184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17184__$1,inst_17182);
} else
{if((state_val_17185 === 12))
{var inst_17170 = (state_17184[8]);var inst_17170__$1 = (state_17184[2]);var inst_17171 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17170__$1);var state_17184__$1 = (function (){var statearr_17193 = state_17184;(statearr_17193[8] = inst_17170__$1);
return statearr_17193;
})();if(cljs.core.truth_(inst_17171))
{var statearr_17194_17222 = state_17184__$1;(statearr_17194_17222[1] = 13);
} else
{var statearr_17195_17223 = state_17184__$1;(statearr_17195_17223[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 2))
{var inst_17147 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17148 = 0;var state_17184__$1 = (function (){var statearr_17196 = state_17184;(statearr_17196[9] = inst_17147);
(statearr_17196[7] = inst_17148);
return statearr_17196;
})();var statearr_17197_17224 = state_17184__$1;(statearr_17197_17224[2] = null);
(statearr_17197_17224[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 11))
{var inst_17148 = (state_17184[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17184,10,Object,null,9);var inst_17157 = chs__$1.call(null,inst_17148);var inst_17158 = done.call(null,inst_17148);var inst_17159 = cljs.core.async.take_BANG_.call(null,inst_17157,inst_17158);var state_17184__$1 = state_17184;var statearr_17198_17225 = state_17184__$1;(statearr_17198_17225[2] = inst_17159);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17184__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 9))
{var inst_17148 = (state_17184[7]);var inst_17161 = (state_17184[2]);var inst_17162 = (inst_17148 + 1);var inst_17148__$1 = inst_17162;var state_17184__$1 = (function (){var statearr_17199 = state_17184;(statearr_17199[7] = inst_17148__$1);
(statearr_17199[10] = inst_17161);
return statearr_17199;
})();var statearr_17200_17226 = state_17184__$1;(statearr_17200_17226[2] = null);
(statearr_17200_17226[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 5))
{var inst_17168 = (state_17184[2]);var state_17184__$1 = (function (){var statearr_17201 = state_17184;(statearr_17201[11] = inst_17168);
return statearr_17201;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17184__$1,12,dchan);
} else
{if((state_val_17185 === 14))
{var inst_17170 = (state_17184[8]);var inst_17175 = cljs.core.apply.call(null,f,inst_17170);var state_17184__$1 = state_17184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17184__$1,16,out,inst_17175);
} else
{if((state_val_17185 === 16))
{var inst_17177 = (state_17184[2]);var state_17184__$1 = (function (){var statearr_17202 = state_17184;(statearr_17202[12] = inst_17177);
return statearr_17202;
})();var statearr_17203_17227 = state_17184__$1;(statearr_17203_17227[2] = null);
(statearr_17203_17227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 10))
{var inst_17152 = (state_17184[2]);var inst_17153 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17184__$1 = (function (){var statearr_17204 = state_17184;(statearr_17204[13] = inst_17152);
return statearr_17204;
})();var statearr_17205_17228 = state_17184__$1;(statearr_17205_17228[2] = inst_17153);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17184__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17185 === 8))
{var inst_17166 = (state_17184[2]);var state_17184__$1 = state_17184;var statearr_17206_17229 = state_17184__$1;(statearr_17206_17229[2] = inst_17166);
(statearr_17206_17229[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10945__auto__,c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17210[0] = state_machine__10946__auto__);
(statearr_17210[1] = 1);
return statearr_17210;
});
var state_machine__10946__auto____1 = (function (state_17184){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17184);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17211){if((e17211 instanceof Object))
{var ex__10949__auto__ = e17211;var statearr_17212_17230 = state_17184;(statearr_17212_17230[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17231 = state_17184;
state_17184 = G__17231;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17184){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11011__auto__ = (function (){var statearr_17213 = f__11010__auto__.call(null);(statearr_17213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17214);
return statearr_17213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17214,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___17339 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17339,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17339,out){
return (function (state_17315){var state_val_17316 = (state_17315[1]);if((state_val_17316 === 7))
{var inst_17295 = (state_17315[7]);var inst_17294 = (state_17315[8]);var inst_17294__$1 = (state_17315[2]);var inst_17295__$1 = cljs.core.nth.call(null,inst_17294__$1,0,null);var inst_17296 = cljs.core.nth.call(null,inst_17294__$1,1,null);var inst_17297 = (inst_17295__$1 == null);var state_17315__$1 = (function (){var statearr_17317 = state_17315;(statearr_17317[7] = inst_17295__$1);
(statearr_17317[9] = inst_17296);
(statearr_17317[8] = inst_17294__$1);
return statearr_17317;
})();if(cljs.core.truth_(inst_17297))
{var statearr_17318_17340 = state_17315__$1;(statearr_17318_17340[1] = 8);
} else
{var statearr_17319_17341 = state_17315__$1;(statearr_17319_17341[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 1))
{var inst_17286 = cljs.core.vec.call(null,chs);var inst_17287 = inst_17286;var state_17315__$1 = (function (){var statearr_17320 = state_17315;(statearr_17320[10] = inst_17287);
return statearr_17320;
})();var statearr_17321_17342 = state_17315__$1;(statearr_17321_17342[2] = null);
(statearr_17321_17342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 4))
{var inst_17287 = (state_17315[10]);var state_17315__$1 = state_17315;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17315__$1,7,inst_17287);
} else
{if((state_val_17316 === 6))
{var inst_17311 = (state_17315[2]);var state_17315__$1 = state_17315;var statearr_17322_17343 = state_17315__$1;(statearr_17322_17343[2] = inst_17311);
(statearr_17322_17343[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 3))
{var inst_17313 = (state_17315[2]);var state_17315__$1 = state_17315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17315__$1,inst_17313);
} else
{if((state_val_17316 === 2))
{var inst_17287 = (state_17315[10]);var inst_17289 = cljs.core.count.call(null,inst_17287);var inst_17290 = (inst_17289 > 0);var state_17315__$1 = state_17315;if(cljs.core.truth_(inst_17290))
{var statearr_17324_17344 = state_17315__$1;(statearr_17324_17344[1] = 4);
} else
{var statearr_17325_17345 = state_17315__$1;(statearr_17325_17345[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 11))
{var inst_17287 = (state_17315[10]);var inst_17304 = (state_17315[2]);var tmp17323 = inst_17287;var inst_17287__$1 = tmp17323;var state_17315__$1 = (function (){var statearr_17326 = state_17315;(statearr_17326[11] = inst_17304);
(statearr_17326[10] = inst_17287__$1);
return statearr_17326;
})();var statearr_17327_17346 = state_17315__$1;(statearr_17327_17346[2] = null);
(statearr_17327_17346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 9))
{var inst_17295 = (state_17315[7]);var state_17315__$1 = state_17315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17315__$1,11,out,inst_17295);
} else
{if((state_val_17316 === 5))
{var inst_17309 = cljs.core.async.close_BANG_.call(null,out);var state_17315__$1 = state_17315;var statearr_17328_17347 = state_17315__$1;(statearr_17328_17347[2] = inst_17309);
(statearr_17328_17347[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 10))
{var inst_17307 = (state_17315[2]);var state_17315__$1 = state_17315;var statearr_17329_17348 = state_17315__$1;(statearr_17329_17348[2] = inst_17307);
(statearr_17329_17348[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17316 === 8))
{var inst_17295 = (state_17315[7]);var inst_17296 = (state_17315[9]);var inst_17294 = (state_17315[8]);var inst_17287 = (state_17315[10]);var inst_17299 = (function (){var c = inst_17296;var v = inst_17295;var vec__17292 = inst_17294;var cs = inst_17287;return ((function (c,v,vec__17292,cs,inst_17295,inst_17296,inst_17294,inst_17287,state_val_17316,c__11009__auto___17339,out){
return (function (p1__17232_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17232_SHARP_);
});
;})(c,v,vec__17292,cs,inst_17295,inst_17296,inst_17294,inst_17287,state_val_17316,c__11009__auto___17339,out))
})();var inst_17300 = cljs.core.filterv.call(null,inst_17299,inst_17287);var inst_17287__$1 = inst_17300;var state_17315__$1 = (function (){var statearr_17330 = state_17315;(statearr_17330[10] = inst_17287__$1);
return statearr_17330;
})();var statearr_17331_17349 = state_17315__$1;(statearr_17331_17349[2] = null);
(statearr_17331_17349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17339,out))
;return ((function (switch__10945__auto__,c__11009__auto___17339,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17335 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17335[0] = state_machine__10946__auto__);
(statearr_17335[1] = 1);
return statearr_17335;
});
var state_machine__10946__auto____1 = (function (state_17315){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17315);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17336){if((e17336 instanceof Object))
{var ex__10949__auto__ = e17336;var statearr_17337_17350 = state_17315;(statearr_17337_17350[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17351 = state_17315;
state_17315 = G__17351;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17315){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17339,out))
})();var state__11011__auto__ = (function (){var statearr_17338 = f__11010__auto__.call(null);(statearr_17338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17339);
return statearr_17338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17339,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___17444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17444,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17444,out){
return (function (state_17421){var state_val_17422 = (state_17421[1]);if((state_val_17422 === 7))
{var inst_17403 = (state_17421[7]);var inst_17403__$1 = (state_17421[2]);var inst_17404 = (inst_17403__$1 == null);var inst_17405 = cljs.core.not.call(null,inst_17404);var state_17421__$1 = (function (){var statearr_17423 = state_17421;(statearr_17423[7] = inst_17403__$1);
return statearr_17423;
})();if(inst_17405)
{var statearr_17424_17445 = state_17421__$1;(statearr_17424_17445[1] = 8);
} else
{var statearr_17425_17446 = state_17421__$1;(statearr_17425_17446[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 1))
{var inst_17398 = 0;var state_17421__$1 = (function (){var statearr_17426 = state_17421;(statearr_17426[8] = inst_17398);
return statearr_17426;
})();var statearr_17427_17447 = state_17421__$1;(statearr_17427_17447[2] = null);
(statearr_17427_17447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 4))
{var state_17421__$1 = state_17421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17421__$1,7,ch);
} else
{if((state_val_17422 === 6))
{var inst_17416 = (state_17421[2]);var state_17421__$1 = state_17421;var statearr_17428_17448 = state_17421__$1;(statearr_17428_17448[2] = inst_17416);
(statearr_17428_17448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 3))
{var inst_17418 = (state_17421[2]);var inst_17419 = cljs.core.async.close_BANG_.call(null,out);var state_17421__$1 = (function (){var statearr_17429 = state_17421;(statearr_17429[9] = inst_17418);
return statearr_17429;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17421__$1,inst_17419);
} else
{if((state_val_17422 === 2))
{var inst_17398 = (state_17421[8]);var inst_17400 = (inst_17398 < n);var state_17421__$1 = state_17421;if(cljs.core.truth_(inst_17400))
{var statearr_17430_17449 = state_17421__$1;(statearr_17430_17449[1] = 4);
} else
{var statearr_17431_17450 = state_17421__$1;(statearr_17431_17450[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 11))
{var inst_17398 = (state_17421[8]);var inst_17408 = (state_17421[2]);var inst_17409 = (inst_17398 + 1);var inst_17398__$1 = inst_17409;var state_17421__$1 = (function (){var statearr_17432 = state_17421;(statearr_17432[8] = inst_17398__$1);
(statearr_17432[10] = inst_17408);
return statearr_17432;
})();var statearr_17433_17451 = state_17421__$1;(statearr_17433_17451[2] = null);
(statearr_17433_17451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 9))
{var state_17421__$1 = state_17421;var statearr_17434_17452 = state_17421__$1;(statearr_17434_17452[2] = null);
(statearr_17434_17452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 5))
{var state_17421__$1 = state_17421;var statearr_17435_17453 = state_17421__$1;(statearr_17435_17453[2] = null);
(statearr_17435_17453[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 10))
{var inst_17413 = (state_17421[2]);var state_17421__$1 = state_17421;var statearr_17436_17454 = state_17421__$1;(statearr_17436_17454[2] = inst_17413);
(statearr_17436_17454[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17422 === 8))
{var inst_17403 = (state_17421[7]);var state_17421__$1 = state_17421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17421__$1,11,out,inst_17403);
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
});})(c__11009__auto___17444,out))
;return ((function (switch__10945__auto__,c__11009__auto___17444,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17440 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17440[0] = state_machine__10946__auto__);
(statearr_17440[1] = 1);
return statearr_17440;
});
var state_machine__10946__auto____1 = (function (state_17421){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17421);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17441){if((e17441 instanceof Object))
{var ex__10949__auto__ = e17441;var statearr_17442_17455 = state_17421;(statearr_17442_17455[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17456 = state_17421;
state_17421 = G__17456;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17421){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17444,out))
})();var state__11011__auto__ = (function (){var statearr_17443 = f__11010__auto__.call(null);(statearr_17443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17444);
return statearr_17443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17444,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___17553 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17553,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17553,out){
return (function (state_17528){var state_val_17529 = (state_17528[1]);if((state_val_17529 === 7))
{var inst_17523 = (state_17528[2]);var state_17528__$1 = state_17528;var statearr_17530_17554 = state_17528__$1;(statearr_17530_17554[2] = inst_17523);
(statearr_17530_17554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 1))
{var inst_17505 = null;var state_17528__$1 = (function (){var statearr_17531 = state_17528;(statearr_17531[7] = inst_17505);
return statearr_17531;
})();var statearr_17532_17555 = state_17528__$1;(statearr_17532_17555[2] = null);
(statearr_17532_17555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 4))
{var inst_17508 = (state_17528[8]);var inst_17508__$1 = (state_17528[2]);var inst_17509 = (inst_17508__$1 == null);var inst_17510 = cljs.core.not.call(null,inst_17509);var state_17528__$1 = (function (){var statearr_17533 = state_17528;(statearr_17533[8] = inst_17508__$1);
return statearr_17533;
})();if(inst_17510)
{var statearr_17534_17556 = state_17528__$1;(statearr_17534_17556[1] = 5);
} else
{var statearr_17535_17557 = state_17528__$1;(statearr_17535_17557[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 6))
{var state_17528__$1 = state_17528;var statearr_17536_17558 = state_17528__$1;(statearr_17536_17558[2] = null);
(statearr_17536_17558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 3))
{var inst_17525 = (state_17528[2]);var inst_17526 = cljs.core.async.close_BANG_.call(null,out);var state_17528__$1 = (function (){var statearr_17537 = state_17528;(statearr_17537[9] = inst_17525);
return statearr_17537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17528__$1,inst_17526);
} else
{if((state_val_17529 === 2))
{var state_17528__$1 = state_17528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17528__$1,4,ch);
} else
{if((state_val_17529 === 11))
{var inst_17508 = (state_17528[8]);var inst_17517 = (state_17528[2]);var inst_17505 = inst_17508;var state_17528__$1 = (function (){var statearr_17538 = state_17528;(statearr_17538[7] = inst_17505);
(statearr_17538[10] = inst_17517);
return statearr_17538;
})();var statearr_17539_17559 = state_17528__$1;(statearr_17539_17559[2] = null);
(statearr_17539_17559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 9))
{var inst_17508 = (state_17528[8]);var state_17528__$1 = state_17528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17528__$1,11,out,inst_17508);
} else
{if((state_val_17529 === 5))
{var inst_17505 = (state_17528[7]);var inst_17508 = (state_17528[8]);var inst_17512 = cljs.core._EQ_.call(null,inst_17508,inst_17505);var state_17528__$1 = state_17528;if(inst_17512)
{var statearr_17541_17560 = state_17528__$1;(statearr_17541_17560[1] = 8);
} else
{var statearr_17542_17561 = state_17528__$1;(statearr_17542_17561[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 10))
{var inst_17520 = (state_17528[2]);var state_17528__$1 = state_17528;var statearr_17543_17562 = state_17528__$1;(statearr_17543_17562[2] = inst_17520);
(statearr_17543_17562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17529 === 8))
{var inst_17505 = (state_17528[7]);var tmp17540 = inst_17505;var inst_17505__$1 = tmp17540;var state_17528__$1 = (function (){var statearr_17544 = state_17528;(statearr_17544[7] = inst_17505__$1);
return statearr_17544;
})();var statearr_17545_17563 = state_17528__$1;(statearr_17545_17563[2] = null);
(statearr_17545_17563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17553,out))
;return ((function (switch__10945__auto__,c__11009__auto___17553,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17549 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17549[0] = state_machine__10946__auto__);
(statearr_17549[1] = 1);
return statearr_17549;
});
var state_machine__10946__auto____1 = (function (state_17528){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17528);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17550){if((e17550 instanceof Object))
{var ex__10949__auto__ = e17550;var statearr_17551_17564 = state_17528;(statearr_17551_17564[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17565 = state_17528;
state_17528 = G__17565;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17528){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17553,out))
})();var state__11011__auto__ = (function (){var statearr_17552 = f__11010__auto__.call(null);(statearr_17552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17553);
return statearr_17552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17553,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___17700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17700,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17700,out){
return (function (state_17670){var state_val_17671 = (state_17670[1]);if((state_val_17671 === 7))
{var inst_17666 = (state_17670[2]);var state_17670__$1 = state_17670;var statearr_17672_17701 = state_17670__$1;(statearr_17672_17701[2] = inst_17666);
(statearr_17672_17701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 1))
{var inst_17633 = (new Array(n));var inst_17634 = inst_17633;var inst_17635 = 0;var state_17670__$1 = (function (){var statearr_17673 = state_17670;(statearr_17673[7] = inst_17634);
(statearr_17673[8] = inst_17635);
return statearr_17673;
})();var statearr_17674_17702 = state_17670__$1;(statearr_17674_17702[2] = null);
(statearr_17674_17702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 4))
{var inst_17638 = (state_17670[9]);var inst_17638__$1 = (state_17670[2]);var inst_17639 = (inst_17638__$1 == null);var inst_17640 = cljs.core.not.call(null,inst_17639);var state_17670__$1 = (function (){var statearr_17675 = state_17670;(statearr_17675[9] = inst_17638__$1);
return statearr_17675;
})();if(inst_17640)
{var statearr_17676_17703 = state_17670__$1;(statearr_17676_17703[1] = 5);
} else
{var statearr_17677_17704 = state_17670__$1;(statearr_17677_17704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 15))
{var inst_17660 = (state_17670[2]);var state_17670__$1 = state_17670;var statearr_17678_17705 = state_17670__$1;(statearr_17678_17705[2] = inst_17660);
(statearr_17678_17705[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 13))
{var state_17670__$1 = state_17670;var statearr_17679_17706 = state_17670__$1;(statearr_17679_17706[2] = null);
(statearr_17679_17706[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 6))
{var inst_17635 = (state_17670[8]);var inst_17656 = (inst_17635 > 0);var state_17670__$1 = state_17670;if(cljs.core.truth_(inst_17656))
{var statearr_17680_17707 = state_17670__$1;(statearr_17680_17707[1] = 12);
} else
{var statearr_17681_17708 = state_17670__$1;(statearr_17681_17708[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 3))
{var inst_17668 = (state_17670[2]);var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17670__$1,inst_17668);
} else
{if((state_val_17671 === 12))
{var inst_17634 = (state_17670[7]);var inst_17658 = cljs.core.vec.call(null,inst_17634);var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17670__$1,15,out,inst_17658);
} else
{if((state_val_17671 === 2))
{var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17670__$1,4,ch);
} else
{if((state_val_17671 === 11))
{var inst_17650 = (state_17670[2]);var inst_17651 = (new Array(n));var inst_17634 = inst_17651;var inst_17635 = 0;var state_17670__$1 = (function (){var statearr_17682 = state_17670;(statearr_17682[10] = inst_17650);
(statearr_17682[7] = inst_17634);
(statearr_17682[8] = inst_17635);
return statearr_17682;
})();var statearr_17683_17709 = state_17670__$1;(statearr_17683_17709[2] = null);
(statearr_17683_17709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 9))
{var inst_17634 = (state_17670[7]);var inst_17648 = cljs.core.vec.call(null,inst_17634);var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17670__$1,11,out,inst_17648);
} else
{if((state_val_17671 === 5))
{var inst_17643 = (state_17670[11]);var inst_17638 = (state_17670[9]);var inst_17634 = (state_17670[7]);var inst_17635 = (state_17670[8]);var inst_17642 = (inst_17634[inst_17635] = inst_17638);var inst_17643__$1 = (inst_17635 + 1);var inst_17644 = (inst_17643__$1 < n);var state_17670__$1 = (function (){var statearr_17684 = state_17670;(statearr_17684[11] = inst_17643__$1);
(statearr_17684[12] = inst_17642);
return statearr_17684;
})();if(cljs.core.truth_(inst_17644))
{var statearr_17685_17710 = state_17670__$1;(statearr_17685_17710[1] = 8);
} else
{var statearr_17686_17711 = state_17670__$1;(statearr_17686_17711[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 14))
{var inst_17663 = (state_17670[2]);var inst_17664 = cljs.core.async.close_BANG_.call(null,out);var state_17670__$1 = (function (){var statearr_17688 = state_17670;(statearr_17688[13] = inst_17663);
return statearr_17688;
})();var statearr_17689_17712 = state_17670__$1;(statearr_17689_17712[2] = inst_17664);
(statearr_17689_17712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 10))
{var inst_17654 = (state_17670[2]);var state_17670__$1 = state_17670;var statearr_17690_17713 = state_17670__$1;(statearr_17690_17713[2] = inst_17654);
(statearr_17690_17713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17671 === 8))
{var inst_17643 = (state_17670[11]);var inst_17634 = (state_17670[7]);var tmp17687 = inst_17634;var inst_17634__$1 = tmp17687;var inst_17635 = inst_17643;var state_17670__$1 = (function (){var statearr_17691 = state_17670;(statearr_17691[7] = inst_17634__$1);
(statearr_17691[8] = inst_17635);
return statearr_17691;
})();var statearr_17692_17714 = state_17670__$1;(statearr_17692_17714[2] = null);
(statearr_17692_17714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17700,out))
;return ((function (switch__10945__auto__,c__11009__auto___17700,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17696[0] = state_machine__10946__auto__);
(statearr_17696[1] = 1);
return statearr_17696;
});
var state_machine__10946__auto____1 = (function (state_17670){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17670);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17697){if((e17697 instanceof Object))
{var ex__10949__auto__ = e17697;var statearr_17698_17715 = state_17670;(statearr_17698_17715[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17716 = state_17670;
state_17670 = G__17716;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17670){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17700,out))
})();var state__11011__auto__ = (function (){var statearr_17699 = f__11010__auto__.call(null);(statearr_17699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17700);
return statearr_17699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17700,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11009__auto___17859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11009__auto___17859,out){
return (function (){var f__11010__auto__ = (function (){var switch__10945__auto__ = ((function (c__11009__auto___17859,out){
return (function (state_17829){var state_val_17830 = (state_17829[1]);if((state_val_17830 === 7))
{var inst_17825 = (state_17829[2]);var state_17829__$1 = state_17829;var statearr_17831_17860 = state_17829__$1;(statearr_17831_17860[2] = inst_17825);
(statearr_17831_17860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 1))
{var inst_17788 = [];var inst_17789 = inst_17788;var inst_17790 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17829__$1 = (function (){var statearr_17832 = state_17829;(statearr_17832[7] = inst_17790);
(statearr_17832[8] = inst_17789);
return statearr_17832;
})();var statearr_17833_17861 = state_17829__$1;(statearr_17833_17861[2] = null);
(statearr_17833_17861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 4))
{var inst_17793 = (state_17829[9]);var inst_17793__$1 = (state_17829[2]);var inst_17794 = (inst_17793__$1 == null);var inst_17795 = cljs.core.not.call(null,inst_17794);var state_17829__$1 = (function (){var statearr_17834 = state_17829;(statearr_17834[9] = inst_17793__$1);
return statearr_17834;
})();if(inst_17795)
{var statearr_17835_17862 = state_17829__$1;(statearr_17835_17862[1] = 5);
} else
{var statearr_17836_17863 = state_17829__$1;(statearr_17836_17863[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 15))
{var inst_17819 = (state_17829[2]);var state_17829__$1 = state_17829;var statearr_17837_17864 = state_17829__$1;(statearr_17837_17864[2] = inst_17819);
(statearr_17837_17864[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 13))
{var state_17829__$1 = state_17829;var statearr_17838_17865 = state_17829__$1;(statearr_17838_17865[2] = null);
(statearr_17838_17865[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 6))
{var inst_17789 = (state_17829[8]);var inst_17814 = inst_17789.length;var inst_17815 = (inst_17814 > 0);var state_17829__$1 = state_17829;if(cljs.core.truth_(inst_17815))
{var statearr_17839_17866 = state_17829__$1;(statearr_17839_17866[1] = 12);
} else
{var statearr_17840_17867 = state_17829__$1;(statearr_17840_17867[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 3))
{var inst_17827 = (state_17829[2]);var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17829__$1,inst_17827);
} else
{if((state_val_17830 === 12))
{var inst_17789 = (state_17829[8]);var inst_17817 = cljs.core.vec.call(null,inst_17789);var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17829__$1,15,out,inst_17817);
} else
{if((state_val_17830 === 2))
{var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17829__$1,4,ch);
} else
{if((state_val_17830 === 11))
{var inst_17793 = (state_17829[9]);var inst_17797 = (state_17829[10]);var inst_17807 = (state_17829[2]);var inst_17808 = [];var inst_17809 = inst_17808.push(inst_17793);var inst_17789 = inst_17808;var inst_17790 = inst_17797;var state_17829__$1 = (function (){var statearr_17841 = state_17829;(statearr_17841[7] = inst_17790);
(statearr_17841[8] = inst_17789);
(statearr_17841[11] = inst_17807);
(statearr_17841[12] = inst_17809);
return statearr_17841;
})();var statearr_17842_17868 = state_17829__$1;(statearr_17842_17868[2] = null);
(statearr_17842_17868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 9))
{var inst_17789 = (state_17829[8]);var inst_17805 = cljs.core.vec.call(null,inst_17789);var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17829__$1,11,out,inst_17805);
} else
{if((state_val_17830 === 5))
{var inst_17790 = (state_17829[7]);var inst_17793 = (state_17829[9]);var inst_17797 = (state_17829[10]);var inst_17797__$1 = f.call(null,inst_17793);var inst_17798 = cljs.core._EQ_.call(null,inst_17797__$1,inst_17790);var inst_17799 = cljs.core.keyword_identical_QMARK_.call(null,inst_17790,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17800 = (inst_17798) || (inst_17799);var state_17829__$1 = (function (){var statearr_17843 = state_17829;(statearr_17843[10] = inst_17797__$1);
return statearr_17843;
})();if(cljs.core.truth_(inst_17800))
{var statearr_17844_17869 = state_17829__$1;(statearr_17844_17869[1] = 8);
} else
{var statearr_17845_17870 = state_17829__$1;(statearr_17845_17870[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 14))
{var inst_17822 = (state_17829[2]);var inst_17823 = cljs.core.async.close_BANG_.call(null,out);var state_17829__$1 = (function (){var statearr_17847 = state_17829;(statearr_17847[13] = inst_17822);
return statearr_17847;
})();var statearr_17848_17871 = state_17829__$1;(statearr_17848_17871[2] = inst_17823);
(statearr_17848_17871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 10))
{var inst_17812 = (state_17829[2]);var state_17829__$1 = state_17829;var statearr_17849_17872 = state_17829__$1;(statearr_17849_17872[2] = inst_17812);
(statearr_17849_17872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 8))
{var inst_17789 = (state_17829[8]);var inst_17793 = (state_17829[9]);var inst_17797 = (state_17829[10]);var inst_17802 = inst_17789.push(inst_17793);var tmp17846 = inst_17789;var inst_17789__$1 = tmp17846;var inst_17790 = inst_17797;var state_17829__$1 = (function (){var statearr_17850 = state_17829;(statearr_17850[7] = inst_17790);
(statearr_17850[14] = inst_17802);
(statearr_17850[8] = inst_17789__$1);
return statearr_17850;
})();var statearr_17851_17873 = state_17829__$1;(statearr_17851_17873[2] = null);
(statearr_17851_17873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__11009__auto___17859,out))
;return ((function (switch__10945__auto__,c__11009__auto___17859,out){
return (function() {
var state_machine__10946__auto__ = null;
var state_machine__10946__auto____0 = (function (){var statearr_17855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17855[0] = state_machine__10946__auto__);
(statearr_17855[1] = 1);
return statearr_17855;
});
var state_machine__10946__auto____1 = (function (state_17829){while(true){
var ret_value__10947__auto__ = (function (){try{while(true){
var result__10948__auto__ = switch__10945__auto__.call(null,state_17829);if(cljs.core.keyword_identical_QMARK_.call(null,result__10948__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10948__auto__;
}
break;
}
}catch (e17856){if((e17856 instanceof Object))
{var ex__10949__auto__ = e17856;var statearr_17857_17874 = state_17829;(statearr_17857_17874[5] = ex__10949__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17875 = state_17829;
state_17829 = G__17875;
continue;
}
} else
{return ret_value__10947__auto__;
}
break;
}
});
state_machine__10946__auto__ = function(state_17829){
switch(arguments.length){
case 0:
return state_machine__10946__auto____0.call(this);
case 1:
return state_machine__10946__auto____1.call(this,state_17829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10946__auto____0;
state_machine__10946__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10946__auto____1;
return state_machine__10946__auto__;
})()
;})(switch__10945__auto__,c__11009__auto___17859,out))
})();var state__11011__auto__ = (function (){var statearr_17858 = f__11010__auto__.call(null);(statearr_17858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11009__auto___17859);
return statearr_17858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11011__auto__);
});})(c__11009__auto___17859,out))
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