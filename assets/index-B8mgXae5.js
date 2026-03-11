var ZE=Object.defineProperty;var QE=(t,e,n)=>e in t?ZE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var De=(t,e,n)=>QE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function JE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var s_={exports:{}},gu={},o_={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),e1=Symbol.for("react.portal"),t1=Symbol.for("react.fragment"),n1=Symbol.for("react.strict_mode"),i1=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),s1=Symbol.for("react.context"),o1=Symbol.for("react.forward_ref"),a1=Symbol.for("react.suspense"),l1=Symbol.for("react.memo"),c1=Symbol.for("react.lazy"),Tg=Symbol.iterator;function u1(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l_=Object.assign,c_={};function No(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||a_}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function u_(){}u_.prototype=No.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||a_}var Rp=Cp.prototype=new u_;Rp.constructor=Cp;l_(Rp,No.prototype);Rp.isPureReactComponent=!0;var wg=Array.isArray,f_=Object.prototype.hasOwnProperty,Pp={current:null},d_={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f_.call(e,i)&&!d_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ka,type:t,key:s,ref:o,props:r,_owner:Pp.current}}function f1(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function d1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bg=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d1(""+t.key):e.toString(36)}function sc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case e1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ju(o,0):i,wg(r)?(n="",t!=null&&(n=t.replace(bg,"$&/")+"/"),sc(r,e,n,"",function(c){return c})):r!=null&&(Dp(r)&&(r=f1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ju(s,a);o+=sc(s,e,n,l,r)}else if(l=u1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ju(s,a++),o+=sc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return sc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},oc={transition:null},p1={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Pp};function p_(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=No;Ke.Fragment=t1;Ke.Profiler=i1;Ke.PureComponent=Cp;Ke.StrictMode=n1;Ke.Suspense=a1;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;Ke.act=p_;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=l_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)f_.call(e,l)&&!d_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:s1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r1,_context:t},t.Consumer=t};Ke.createElement=h_;Ke.createFactory=function(t){var e=h_.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:o1,render:t}};Ke.isValidElement=Dp;Ke.lazy=function(t){return{$$typeof:c1,_payload:{_status:-1,_result:t},_init:h1}};Ke.memo=function(t,e){return{$$typeof:l1,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};Ke.unstable_act=p_;Ke.useCallback=function(t,e){return gn.current.useCallback(t,e)};Ke.useContext=function(t){return gn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return gn.current.useEffect(t,e)};Ke.useId=function(){return gn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return gn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Ke.useRef=function(t){return gn.current.useRef(t)};Ke.useState=function(t){return gn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return gn.current.useTransition()};Ke.version="18.3.1";o_.exports=Ke;var B=o_.exports;const Lp=JE(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=B,g1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,_1=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function m_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)x1.call(e,i)&&!y1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g1,type:t,key:s,ref:o,props:r,_owner:_1.current}}gu.Fragment=v1;gu.jsx=m_;gu.jsxs=m_;s_.exports=gu;var T=s_.exports,gd={},g_={exports:{}},kn={},v_={exports:{}},x_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var $=D.length;D.push(F);e:for(;0<$;){var J=$-1>>>1,te=D[J];if(0<r(te,F))D[J]=F,D[$]=te,$=J;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],$=D.pop();if($!==F){D[0]=$;e:for(var J=0,te=D.length,be=te>>>1;J<be;){var Ue=2*(J+1)-1,Ye=D[Ue],K=Ue+1,oe=D[K];if(0>r(Ye,$))K<te&&0>r(oe,Ye)?(D[J]=oe,D[K]=$,J=K):(D[J]=Ye,D[Ue]=$,J=Ue);else if(K<te&&0>r(oe,$))D[J]=oe,D[K]=$,J=K;else break e}}return F}function r(D,F){var $=D.sortIndex-F.sortIndex;return $!==0?$:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=D)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(D){if(_=!1,x(D),!m)if(n(l)!==null)m=!0,W(M);else{var F=n(c);F!==null&&O(y,F.startTime-D)}}function M(D,F){m=!1,_&&(_=!1,h(S),S=-1),p=!0;var $=f;try{for(x(F),d=n(l);d!==null&&(!(d.expirationTime>F)||D&&!P());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var te=J(d.expirationTime<=F);F=t.unstable_now(),typeof te=="function"?d.callback=te:d===n(l)&&i(l),x(F)}else i(l);d=n(l)}if(d!==null)var be=!0;else{var Ue=n(c);Ue!==null&&O(y,Ue.startTime-F),be=!1}return be}finally{d=null,f=$,p=!1}}var A=!1,C=null,S=-1,w=5,I=-1;function P(){return!(t.unstable_now()-I<w)}function z(){if(C!==null){var D=t.unstable_now();I=D;var F=!0;try{F=C(!0,D)}finally{F?G():(A=!1,C=null)}}else A=!1}var G;if(typeof v=="function")G=function(){v(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,V=j.port2;j.port1.onmessage=z,G=function(){V.postMessage(null)}}else G=function(){g(z,0)};function W(D){C=D,A||(A=!0,G())}function O(D,F){S=g(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,W(M))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var $=f;f=F;try{return D()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=f;f=D;try{return F()}finally{f=$}},t.unstable_scheduleCallback=function(D,F,$){var J=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?J+$:J):$=J,D){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=$+te,D={id:u++,callback:F,priorityLevel:D,startTime:$,expirationTime:te,sortIndex:-1},$>J?(D.sortIndex=$,e(c,D),n(l)===null&&D===n(c)&&(_?(h(S),S=-1):_=!0,O(y,$-J))):(D.sortIndex=te,e(l,D),m||p||(m=!0,W(M))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var F=f;return function(){var $=f;f=F;try{return D.apply(this,arguments)}finally{f=$}}}})(x_);v_.exports=x_;var S1=v_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=B,On=S1;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var __=new Set,wa={};function Ts(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(wa[t]=e,t=0;t<e.length;t++)__.add(e[t])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ag={},Cg={};function T1(t){return vd.call(Cg,t)?!0:vd.call(Ag,t)?!1:E1.test(t)?Cg[t]=!0:(Ag[t]=!0,!1)}function w1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b1(t,e,n,i){if(e===null||typeof e>"u"||w1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Fp);Jt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Fp);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Fp);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Np(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(b1(e,n,r,i)&&(n=null),i||r===null?T1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),M_=Symbol.for("react.offscreen"),Rg=Symbol.iterator;function Ho(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Xu;function ra(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var Yu=!1;function $u(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function A1(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=$u(t.type,!1),t;case 11:return t=$u(t.type.render,!1),t;case 1:return t=$u(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Ys:return"Portal";case xd:return"Profiler";case Up:return"StrictMode";case _d:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S_:return(t.displayName||"Context")+".Consumer";case y_:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kp:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function C1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R1(t){var e=E_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=R1(t))}function T_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=E_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w_(t,e){e=e.checked,e!=null&&Np(t,"checked",e,!1)}function Ed(t,e){w_(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(sa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function b_(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,C_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P1=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){P1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function P_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=R_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var D1=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(D1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,po=null,mo=null;function Fg(t){if(t=Ja(t)){if(typeof Pd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Su(e),Pd(t.stateNode,t.type,e))}}function D_(t){po?mo?mo.push(t):mo=[t]:po=t}function L_(){if(po){var t=po,e=mo;if(mo=po=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function I_(t,e){return t(e)}function F_(){}var qu=!1;function N_(t,e,n){if(qu)return t(e,n);qu=!0;try{return I_(t,e,n)}finally{qu=!1,(po!==null||mo!==null)&&(F_(),L_())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Dd=!1;if(Qi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Dd=!1}function L1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var da=!1,Ic=null,Fc=!1,Ld=null,I1={onError:function(t){da=!0,Ic=t}};function F1(t,e,n,i,r,s,o,a,l){da=!1,Ic=null,L1.apply(I1,arguments)}function N1(t,e,n,i,r,s,o,a,l){if(F1.apply(this,arguments),da){if(da){var c=Ic;da=!1,Ic=null}else throw Error(se(198));Fc||(Fc=!0,Ld=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ng(t){if(ws(t)!==t)throw Error(se(188))}function U1(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ng(r),t;if(s===i)return Ng(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function O_(t){return t=U1(t),t!==null?k_(t):null}function k_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k_(t);if(e!==null)return e;t=t.sibling}return null}var B_=On.unstable_scheduleCallback,Ug=On.unstable_cancelCallback,O1=On.unstable_shouldYield,k1=On.unstable_requestPaint,Pt=On.unstable_now,B1=On.unstable_getCurrentPriorityLevel,zp=On.unstable_ImmediatePriority,z_=On.unstable_UserBlockingPriority,Nc=On.unstable_NormalPriority,z1=On.unstable_LowPriority,V_=On.unstable_IdlePriority,vu=null,Ri=null;function V1(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:W1,H1=Math.log,G1=Math.LN2;function W1(t){return t>>>=0,t===0?32:31-(H1(t)/G1|0)|0}var gl=64,vl=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oa(a):(s&=o,s!==0&&(i=oa(s)))}else o=n&~r,o!==0?i=oa(o):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function j1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H_(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function Y1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function G_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var W_,Hp,j_,X_,Y_,Fd=!1,xl=[],Rr=null,Pr=null,Dr=null,Ca=new Map,Ra=new Map,Mr=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Og(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q1(t,e,n,i,r){switch(e){case"focusin":return Rr=Wo(Rr,t,e,n,i,r),!0;case"dragenter":return Pr=Wo(Pr,t,e,n,i,r),!0;case"mouseover":return Dr=Wo(Dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Wo(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,Wo(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function $_(t){var e=ss(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=U_(n),e!==null){t.blockedOn=e,Y_(t.priority,function(){j_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rd=i,n.target.dispatchEvent(i),Rd=null}else return e=Ja(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function kg(t,e,n){ac(t)&&n.delete(e)}function K1(){Fd=!1,Rr!==null&&ac(Rr)&&(Rr=null),Pr!==null&&ac(Pr)&&(Pr=null),Dr!==null&&ac(Dr)&&(Dr=null),Ca.forEach(kg),Ra.forEach(kg)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,K1)))}function Pa(t){function e(r){return jo(r,t)}if(0<xl.length){jo(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&jo(Rr,t),Pr!==null&&jo(Pr,t),Dr!==null&&jo(Dr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<Mr.length;n++)i=Mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)$_(n),n.blockedOn===null&&Mr.shift()}var go=or.ReactCurrentBatchConfig,Oc=!0;function Z1(t,e,n,i){var r=at,s=go.transition;go.transition=null;try{at=1,Gp(t,e,n,i)}finally{at=r,go.transition=s}}function Q1(t,e,n,i){var r=at,s=go.transition;go.transition=null;try{at=4,Gp(t,e,n,i)}finally{at=r,go.transition=s}}function Gp(t,e,n,i){if(Oc){var r=Nd(t,e,n,i);if(r===null)af(t,e,i,kc,n),Og(t,i);else if(q1(r,t,e,n,i))i.stopPropagation();else if(Og(t,i),e&4&&-1<$1.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&W_(s),s=Nd(t,e,n,i),s===null&&af(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else af(t,e,i,null,n)}}var kc=null;function Nd(t,e,n,i){if(kc=null,t=Bp(i),t=ss(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case zp:return 1;case z_:return 4;case Nc:case z1:return 16;case V_:return 536870912;default:return 16}default:return 16}}var wr=null,Wp=null,lc=null;function K_(){if(lc)return lc;var t,e=Wp,n=e.length,i,r="value"in wr?wr.value:wr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return lc=r.slice(t,1<i?1-i:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Bg(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Bg,this.isPropagationStopped=Bg,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=Bn(Uo),Qa=Tt({},Uo,{view:0,detail:0}),J1=Bn(Qa),Zu,Qu,Xo,xu=Tt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Zu=t.screenX-Xo.screenX,Qu=t.screenY-Xo.screenY):Qu=Zu=0,Xo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),zg=Bn(xu),eT=Tt({},xu,{dataTransfer:0}),tT=Bn(eT),nT=Tt({},Qa,{relatedTarget:0}),Ju=Bn(nT),iT=Tt({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=Bn(iT),sT=Tt({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oT=Bn(sT),aT=Tt({},Uo,{data:0}),Vg=Bn(aT),lT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uT[t])?!!e[t]:!1}function Xp(){return fT}var dT=Tt({},Qa,{key:function(t){if(t.key){var e=lT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hT=Bn(dT),pT=Tt({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=Bn(pT),mT=Tt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),gT=Bn(mT),vT=Tt({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=Bn(vT),_T=Tt({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yT=Bn(_T),ST=[9,13,27,32],Yp=Qi&&"CompositionEvent"in window,ha=null;Qi&&"documentMode"in document&&(ha=document.documentMode);var MT=Qi&&"TextEvent"in window&&!ha,Z_=Qi&&(!Yp||ha&&8<ha&&11>=ha),Gg=" ",Wg=!1;function Q_(t,e){switch(t){case"keyup":return ST.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function ET(t,e){switch(t){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:(Wg=!0,Gg);case"textInput":return t=e.data,t===Gg&&Wg?null:t;default:return null}}function TT(t,e){if(qs)return t==="compositionend"||!Yp&&Q_(t,e)?(t=K_(),lc=Wp=wr=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z_&&e.locale!=="ko"?null:e.data;default:return null}}var wT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wT[t.type]:e==="textarea"}function ey(t,e,n,i){D_(i),e=Bc(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Da=null;function bT(t){fy(t,0)}function _u(t){var e=Qs(t);if(T_(e))return t}function AT(t,e){if(t==="change")return e}var ty=!1;if(Qi){var ef;if(Qi){var tf="oninput"in document;if(!tf){var Xg=document.createElement("div");Xg.setAttribute("oninput","return;"),tf=typeof Xg.oninput=="function"}ef=tf}else ef=!1;ty=ef&&(!document.documentMode||9<document.documentMode)}function Yg(){pa&&(pa.detachEvent("onpropertychange",ny),Da=pa=null)}function ny(t){if(t.propertyName==="value"&&_u(Da)){var e=[];ey(e,Da,t,Bp(t)),N_(bT,e)}}function CT(t,e,n){t==="focusin"?(Yg(),pa=e,Da=n,pa.attachEvent("onpropertychange",ny)):t==="focusout"&&Yg()}function RT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(Da)}function PT(t,e){if(t==="click")return _u(e)}function DT(t,e){if(t==="input"||t==="change")return _u(e)}function LT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:LT;function La(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function $g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qg(t,e){var n=$g(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$g(n)}}function iy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ry(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IT(t){var e=ry(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iy(n.ownerDocument.documentElement,n)){if(i!==null&&$p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qg(n,s);var o=qg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FT=Qi&&"documentMode"in document&&11>=document.documentMode,Ks=null,Ud=null,ma=null,Od=!1;function Kg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||Ks==null||Ks!==Lc(i)||(i=Ks,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&La(ma,i)||(ma=i,i=Bc(Ud,"onSelect"),0<i.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ks)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},nf={},sy={};Qi&&(sy=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function yu(t){if(nf[t])return nf[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sy)return nf[t]=e[n];return t}var oy=yu("animationend"),ay=yu("animationiteration"),ly=yu("animationstart"),cy=yu("transitionend"),uy=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){uy.set(t,e),Ts(e,[t])}for(var rf=0;rf<Zg.length;rf++){var sf=Zg[rf],NT=sf.toLowerCase(),UT=sf[0].toUpperCase()+sf.slice(1);Vr(NT,"on"+UT)}Vr(oy,"onAnimationEnd");Vr(ay,"onAnimationIteration");Vr(ly,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(cy,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OT=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Qg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N1(i,e,void 0,t),t.currentTarget=null}function fy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}}}if(Fc)throw t=Ld,Fc=!1,Ld=null,t}function vt(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var i=t+"__bubble";n.has(i)||(dy(e,t,2,!1),n.add(i))}function of(t,e,n){var i=0;e&&(i|=4),dy(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Sl]){t[Sl]=!0,__.forEach(function(n){n!=="selectionchange"&&(OT.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,of("selectionchange",!1,e))}}function dy(t,e,n,i){switch(q_(e)){case 1:var r=Z1;break;case 4:r=Q1;break;default:r=Gp}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function af(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}N_(function(){var c=s,u=Bp(n),d=[];e:{var f=uy.get(t);if(f!==void 0){var p=jp,m=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":p=hT;break;case"focusin":m="focus",p=Ju;break;case"focusout":m="blur",p=Ju;break;case"beforeblur":case"afterblur":p=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gT;break;case oy:case ay:case ly:p=rT;break;case cy:p=xT;break;case"scroll":p=J1;break;case"wheel":p=yT;break;case"copy":case"cut":case"paste":p=oT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hg}var _=(e&4)!==0,g=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=Aa(v,h),y!=null&&_.push(Fa(v,y,x)))),g)break;v=v.return}0<_.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Rd&&(m=n.relatedTarget||n.fromElement)&&(ss(m)||m[Ji]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?ss(m):null,m!==null&&(g=ws(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(_=zg,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Hg,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:Qs(p),x=m==null?f:Qs(m),f=new _(y,v+"leave",p,n,u),f.target=g,f.relatedTarget=x,y=null,ss(u)===c&&(_=new _(h,v+"enter",m,n,u),_.target=x,_.relatedTarget=g,y=_),g=y,p&&m)t:{for(_=p,h=m,v=0,x=_;x;x=Rs(x))v++;for(x=0,y=h;y;y=Rs(y))x++;for(;0<v-x;)_=Rs(_),v--;for(;0<x-v;)h=Rs(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Rs(_),h=Rs(h)}_=null}else _=null;p!==null&&Jg(d,f,p,_,!1),m!==null&&g!==null&&Jg(d,g,m,_,!0)}}e:{if(f=c?Qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=AT;else if(jg(f))if(ty)M=DT;else{M=RT;var A=CT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=PT);if(M&&(M=M(t,c))){ey(d,M,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Td(f,"number",f.value)}switch(A=c?Qs(c):window,t){case"focusin":(jg(A)||A.contentEditable==="true")&&(Ks=A,Ud=c,ma=null);break;case"focusout":ma=Ud=Ks=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,Kg(d,n,u);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":Kg(d,n,u)}var C;if(Yp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else qs?Q_(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Z_&&n.locale!=="ko"&&(qs||S!=="onCompositionStart"?S==="onCompositionEnd"&&qs&&(C=K_()):(wr=u,Wp="value"in wr?wr.value:wr.textContent,qs=!0)),A=Bc(c,S),0<A.length&&(S=new Vg(S,t,null,n,u),d.push({event:S,listeners:A}),C?S.data=C:(C=J_(n),C!==null&&(S.data=C)))),(C=MT?ET(t,n):TT(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new Vg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}fy(d,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Aa(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Fa(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kT=/\r\n?/g,BT=/\u0000|\uFFFD/g;function e0(t){return(typeof t=="string"?t:""+t).replace(kT,`
`).replace(BT,"")}function Ml(t,e,n){if(e=e0(e),e0(t)!==e&&n)throw Error(se(425))}function zc(){}var kd=null,Bd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,VT=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(t){return t0.resolve(null).then(t).catch(HT)}:Vd;function HT(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function n0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),wi="__reactFiber$"+Oo,Na="__reactProps$"+Oo,Ji="__reactContainer$"+Oo,Hd="__reactEvents$"+Oo,GT="__reactListeners$"+Oo,WT="__reactHandles$"+Oo;function ss(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ji]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=n0(t);t!==null;){if(n=t[wi])return n;t=n0(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[wi]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Su(t){return t[Na]||null}var Gd=[],Js=-1;function Hr(t){return{current:t}}function xt(t){0>Js||(t.current=Gd[Js],Gd[Js]=null,Js--)}function gt(t,e){Js++,Gd[Js]=t.current,t.current=e}var kr={},cn=Hr(kr),Mn=Hr(!1),vs=kr;function Eo(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Vc(){xt(Mn),xt(cn)}function i0(t,e,n){if(cn.current!==kr)throw Error(se(168));gt(cn,e),gt(Mn,n)}function hy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,C1(t)||"Unknown",r));return Tt({},n,i)}function Hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,vs=cn.current,gt(cn,t),gt(Mn,Mn.current),!0}function r0(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=hy(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,xt(Mn),xt(cn),gt(cn,t)):xt(Mn),gt(Mn,n)}var ji=null,Mu=!1,cf=!1;function py(t){ji===null?ji=[t]:ji.push(t)}function jT(t){Mu=!0,py(t)}function Gr(){if(!cf&&ji!==null){cf=!0;var t=0,e=at;try{var n=ji;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,Mu=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),B_(zp,Gr),r}finally{at=e,cf=!1}}return null}var eo=[],to=0,Gc=null,Wc=0,Hn=[],Gn=0,xs=null,Yi=1,$i="";function es(t,e){eo[to++]=Wc,eo[to++]=Gc,Gc=t,Wc=e}function my(t,e,n){Hn[Gn++]=Yi,Hn[Gn++]=$i,Hn[Gn++]=xs,xs=t;var i=Yi;t=$i;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-ui(e)+r|n<<r|i,$i=s+t}else Yi=1<<s|n<<r|i,$i=t}function qp(t){t.return!==null&&(es(t,1),my(t,1,0))}function Kp(t){for(;t===Gc;)Gc=eo[--to],eo[to]=null,Wc=eo[--to],eo[to]=null;for(;t===xs;)xs=Hn[--Gn],Hn[Gn]=null,$i=Hn[--Gn],Hn[Gn]=null,Yi=Hn[--Gn],Hn[Gn]=null}var Nn=null,Fn=null,yt=!1,ai=null;function gy(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function s0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Fn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:Yi,overflow:$i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Fn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(yt){var e=Fn;if(e){var n=e;if(!s0(t,e)){if(Wd(t))throw Error(se(418));e=Lr(n.nextSibling);var i=Nn;e&&s0(t,e)?gy(i,n):(t.flags=t.flags&-4097|2,yt=!1,Nn=t)}}else{if(Wd(t))throw Error(se(418));t.flags=t.flags&-4097|2,yt=!1,Nn=t}}}function o0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function El(t){if(t!==Nn)return!1;if(!yt)return o0(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=Fn)){if(Wd(t))throw vy(),Error(se(418));for(;e;)gy(t,e),e=Lr(e.nextSibling)}if(o0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=Nn?Lr(t.stateNode.nextSibling):null;return!0}function vy(){for(var t=Fn;t;)t=Lr(t.nextSibling)}function To(){Fn=Nn=null,yt=!1}function Zp(t){ai===null?ai=[t]:ai.push(t)}var XT=or.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function a0(t){var e=t._init;return e(t._payload)}function xy(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ur(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=gf(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var M=x.type;return M===$s?u(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&a0(M)===v.type)?(y=r(v,x.props),y.ref=Yo(h,v,x),y.return=h,y):(y=gc(x.type,x.key,x.props,null,h.mode,y),y.ref=Yo(h,v,x),y.return=h,y)}function c(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=vf(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function u(h,v,x,y,M){return v===null||v.tag!==7?(v=ps(x,h.mode,y,M),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gf(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return x=gc(v.type,v.key,v.props,null,h.mode,x),x.ref=Yo(h,null,v),x.return=h,x;case Ys:return v=vf(v,h.mode,x),v.return=h,v;case _r:var y=v._init;return d(h,y(v._payload),x)}if(sa(v)||Ho(v))return v=ps(v,h.mode,x,null),v.return=h,v;Tl(h,v)}return null}function f(h,v,x,y){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:return x.key===M?l(h,v,x,y):null;case Ys:return x.key===M?c(h,v,x,y):null;case _r:return M=x._init,f(h,v,M(x._payload),y)}if(sa(x)||Ho(x))return M!==null?null:u(h,v,x,y,null);Tl(h,x)}return null}function p(h,v,x,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,M);case Ys:return h=h.get(y.key===null?x:y.key)||null,c(v,h,y,M);case _r:var A=y._init;return p(h,v,x,A(y._payload),M)}if(sa(y)||Ho(y))return h=h.get(x)||null,u(v,h,y,M,null);Tl(v,y)}return null}function m(h,v,x,y){for(var M=null,A=null,C=v,S=v=0,w=null;C!==null&&S<x.length;S++){C.index>S?(w=C,C=null):w=C.sibling;var I=f(h,C,x[S],y);if(I===null){C===null&&(C=w);break}t&&C&&I.alternate===null&&e(h,C),v=s(I,v,S),A===null?M=I:A.sibling=I,A=I,C=w}if(S===x.length)return n(h,C),yt&&es(h,S),M;if(C===null){for(;S<x.length;S++)C=d(h,x[S],y),C!==null&&(v=s(C,v,S),A===null?M=C:A.sibling=C,A=C);return yt&&es(h,S),M}for(C=i(h,C);S<x.length;S++)w=p(C,h,S,x[S],y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?S:w.key),v=s(w,v,S),A===null?M=w:A.sibling=w,A=w);return t&&C.forEach(function(P){return e(h,P)}),yt&&es(h,S),M}function _(h,v,x,y){var M=Ho(x);if(typeof M!="function")throw Error(se(150));if(x=M.call(x),x==null)throw Error(se(151));for(var A=M=null,C=v,S=v=0,w=null,I=x.next();C!==null&&!I.done;S++,I=x.next()){C.index>S?(w=C,C=null):w=C.sibling;var P=f(h,C,I.value,y);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(h,C),v=s(P,v,S),A===null?M=P:A.sibling=P,A=P,C=w}if(I.done)return n(h,C),yt&&es(h,S),M;if(C===null){for(;!I.done;S++,I=x.next())I=d(h,I.value,y),I!==null&&(v=s(I,v,S),A===null?M=I:A.sibling=I,A=I);return yt&&es(h,S),M}for(C=i(h,C);!I.done;S++,I=x.next())I=p(C,h,S,I.value,y),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?S:I.key),v=s(I,v,S),A===null?M=I:A.sibling=I,A=I);return t&&C.forEach(function(z){return e(h,z)}),yt&&es(h,S),M}function g(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===$s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:e:{for(var M=x.key,A=v;A!==null;){if(A.key===M){if(M=x.type,M===$s){if(A.tag===7){n(h,A.sibling),v=r(A,x.props.children),v.return=h,h=v;break e}}else if(A.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&a0(M)===A.type){n(h,A.sibling),v=r(A,x.props),v.ref=Yo(h,A,x),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}x.type===$s?(v=ps(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=gc(x.type,x.key,x.props,null,h.mode,y),y.ref=Yo(h,v,x),y.return=h,h=y)}return o(h);case Ys:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=vf(x,h.mode,y),v.return=h,h=v}return o(h);case _r:return A=x._init,g(h,v,A(x._payload),y)}if(sa(x))return m(h,v,x,y);if(Ho(x))return _(h,v,x,y);Tl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=gf(x,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return g}var wo=xy(!0),_y=xy(!1),jc=Hr(null),Xc=null,no=null,Qp=null;function Jp(){Qp=no=Xc=null}function em(t){var e=jc.current;xt(jc),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){Xc=t,Qp=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(Qp!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(Xc===null)throw Error(se(308));no=t,Xc.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var os=null;function tm(t){os===null?os=[t]:os.push(t)}function yy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tm(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,tm(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vp(t,n)}}function l0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,i){var r=t.updateQueue;yr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(f=e,p=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Tt({},d,f);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=d}}function c0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var el={},Pi=Hr(el),Ua=Hr(el),Oa=Hr(el);function as(t){if(t===el)throw Error(se(174));return t}function im(t,e){switch(gt(Oa,e),gt(Ua,t),gt(Pi,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}xt(Pi),gt(Pi,e)}function bo(){xt(Pi),xt(Ua),xt(Oa)}function My(t){as(Oa.current);var e=as(Pi.current),n=bd(e,t.type);e!==n&&(gt(Ua,t),gt(Pi,n))}function rm(t){Ua.current===t&&(xt(Pi),xt(Ua))}var St=Hr(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uf=[];function sm(){for(var t=0;t<uf.length;t++)uf[t]._workInProgressVersionPrimary=null;uf.length=0}var fc=or.ReactCurrentDispatcher,ff=or.ReactCurrentBatchConfig,_s=0,Et=null,Ot=null,Wt=null,qc=!1,ga=!1,ka=0,YT=0;function tn(){throw Error(se(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function am(t,e,n,i,r,s){if(_s=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?ZT:QT,t=n(i,r),ga){s=0;do{if(ga=!1,ka=0,25<=s)throw Error(se(301));s+=1,Wt=Ot=null,e.updateQueue=null,fc.current=JT,t=n(i,r)}while(ga)}if(fc.current=Kc,e=Ot!==null&&Ot.next!==null,_s=0,Wt=Ot=Et=null,qc=!1,e)throw Error(se(300));return t}function lm(){var t=ka!==0;return ka=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Zn(){if(Ot===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(se(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ba(t,e){return typeof e=="function"?e(t):e}function df(t){var e=Zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((_s&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=u,ys|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hf(t){var e=Zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ey(){}function Ty(t,e){var n=Et,i=Zn(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,cm(Ay.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,za(9,by.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(se(349));_s&30||wy(n,e,r)}return r}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function by(t,e,n,i){e.value=n,e.getSnapshot=i,Cy(e)&&Ry(t)}function Ay(t,e,n){return n(function(){Cy(e)&&Ry(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function Ry(t){var e=er(t,1);e!==null&&fi(e,t,1,-1)}function u0(t){var e=Si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=KT.bind(null,Et,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Py(){return Zn().memoizedState}function dc(t,e,n,i){var r=Si();Et.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&om(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}Et.flags|=t,r.memoizedState=za(1|e,n,s,i)}function f0(t,e){return dc(8390656,8,t,e)}function cm(t,e){return Eu(2048,8,t,e)}function Dy(t,e){return Eu(4,2,t,e)}function Ly(t,e){return Eu(4,4,t,e)}function Iy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fy(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,Iy.bind(null,e,t),n)}function um(){}function Ny(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Uy(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Oy(t,e,n){return _s&21?(mi(n,e)||(n=H_(),Et.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function $T(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=ff.transition;ff.transition={};try{t(!1),e()}finally{at=n,ff.transition=i}}function ky(){return Zn().memoizedState}function qT(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},By(t))zy(e,n);else if(n=yy(t,e,n,i),n!==null){var r=pn();fi(n,t,i,r),Vy(n,e,i)}}function KT(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(By(t))zy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,tm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=yy(t,e,r,i),n!==null&&(r=pn(),fi(n,t,i,r),Vy(n,e,i))}}function By(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function zy(t,e){ga=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vp(t,n)}}var Kc={readContext:Kn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},ZT={readContext:Kn,useCallback:function(t,e){return Si().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:f0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,Iy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=Si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qT.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=Si();return t={current:t},e.memoizedState=t},useState:u0,useDebugValue:um,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=u0(!1),e=t[0];return t=$T.bind(null,t[1]),Si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=Si();if(yt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Xt===null)throw Error(se(349));_s&30||wy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,f0(Ay.bind(null,i,s,t),[t]),i.flags|=2048,za(9,by.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Si(),e=Xt.identifierPrefix;if(yt){var n=$i,i=Yi;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QT={readContext:Kn,useCallback:Ny,useContext:Kn,useEffect:cm,useImperativeHandle:Fy,useInsertionEffect:Dy,useLayoutEffect:Ly,useMemo:Uy,useReducer:df,useRef:Py,useState:function(){return df(Ba)},useDebugValue:um,useDeferredValue:function(t){var e=Zn();return Oy(e,Ot.memoizedState,t)},useTransition:function(){var t=df(Ba)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Ey,useSyncExternalStore:Ty,useId:ky,unstable_isNewReconciler:!1},JT={readContext:Kn,useCallback:Ny,useContext:Kn,useEffect:cm,useImperativeHandle:Fy,useInsertionEffect:Dy,useLayoutEffect:Ly,useMemo:Uy,useReducer:hf,useRef:Py,useState:function(){return hf(Ba)},useDebugValue:um,useDeferredValue:function(t){var e=Zn();return Ot===null?e.memoizedState=t:Oy(e,Ot.memoizedState,t)},useTransition:function(){var t=hf(Ba)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Ey,useSyncExternalStore:Ty,useId:ky,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Nr(t),s=Ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(fi(e,t,r,i),uc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Nr(t),s=Ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(fi(e,t,r,i),uc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Nr(t),r=Ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(t,r,i),e!==null&&(fi(e,t,i,n),uc(e,t,i))}};function d0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function Hy(t,e,n){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=En(e)?vs:cn.current,i=e.contextTypes,s=(i=i!=null)?Eo(t,r):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function h0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function $d(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=En(e)?vs:cn.current,r.context=Eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Yc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=A1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function Gy(t,e,n){n=Ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,sh=i),qd(t,e)},n}function Wy(t,e,n){n=Ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function p0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ew;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pw.bind(null,t,e,n),e.then(t,t))}function m0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function g0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ki(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var tw=or.ReactCurrentOwner,Sn=!1;function fn(t,e,n,i){e.child=t===null?_y(e,null,n,i):wo(e,t.child,n,i)}function v0(t,e,n,i,r){n=n.render;var s=e.ref;return vo(e,r),i=am(t,e,n,i,s,r),n=lm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(yt&&n&&qp(e),e.flags|=1,fn(t,e,i,r),e.child)}function x0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jy(t,e,s,i,r)):(t=gc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function jy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return Kd(t,e,n,i,r)}function Xy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ro,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ro,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(ro,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(ro,Ln),Ln|=i;return fn(t,e,r,n),e.child}function Yy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,i,r){var s=En(n)?vs:cn.current;return s=Eo(e,s),vo(e,r),n=am(t,e,n,i,s,r),i=lm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(yt&&i&&qp(e),e.flags|=1,fn(t,e,n,r),e.child)}function _0(t,e,n,i,r){if(En(n)){var s=!0;Hc(e)}else s=!1;if(vo(e,r),e.stateNode===null)hc(t,e),Hy(e,n,i),$d(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=En(n)?vs:cn.current,c=Eo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&h0(e,o,i,c),yr=!1;var f=e.memoizedState;o.state=f,Yc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Mn.current||yr?(typeof u=="function"&&(Yd(e,n,u,i),l=e.memoizedState),(a=yr||d0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Sy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=En(n)?vs:cn.current,l=Eo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&h0(e,o,i,l),yr=!1,f=e.memoizedState,o.state=f,Yc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Mn.current||yr?(typeof p=="function"&&(Yd(e,n,p,i),m=e.memoizedState),(c=yr||d0(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zd(t,e,n,i,s,r)}function Zd(t,e,n,i,r,s){Yy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&r0(e,n,!1),tr(t,e,s);i=e.stateNode,tw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&r0(e,n,!0),e.child}function $y(t){var e=t.stateNode;e.pendingContext?i0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&i0(t,e.context,!1),im(t,e.containerInfo)}function y0(t,e,n,i,r){return To(),Zp(r),e.flags|=256,fn(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qy(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(St,r&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,i,0,null),t=ps(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Qd,t):fm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=ps(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return s=t.child,t=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fm(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,i){return i!==null&&Zp(i),wo(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pf(Error(se(422))),wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Au({mode:"visible",children:i.children},r,0,null),s=ps(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Qd,s);if(!(e.mode&1))return wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=pf(s,i,void 0),wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),fi(i,t,r,-1))}return vm(),i=pf(Error(se(421))),wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=Lr(r.nextSibling),Nn=e,yt=!0,ai=null,t!==null&&(Hn[Gn++]=Yi,Hn[Gn++]=$i,Hn[Gn++]=xs,Yi=t.id,$i=t.overflow,xs=e),e=fm(e,i.children),e.flags|=4096,e)}function S0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xd(t.return,e,n)}function mf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ky(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,n,e);else if(t.tag===19)S0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$c(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iw(t,e,n){switch(e.tag){case 3:$y(e),To();break;case 5:My(e);break;case 1:En(e.type)&&Hc(e);break;case 4:im(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?qy(t,e,n):(gt(St,St.current&1),t=tr(t,e,n),t!==null?t.sibling:null);gt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ky(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return tr(t,e,n)}var Zy,eh,Qy,Jy;Zy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};Qy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,as(Pi.current);var s=null;switch(n){case"input":r=Md(t,r),i=Md(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=wd(t,r),i=wd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}Ad(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jy=function(t,e,n,i){n!==i&&(e.flags|=4)};function $o(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rw(t,e,n){var i=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return En(e.type)&&Vc(),nn(e),null;case 3:return i=e.stateNode,bo(),xt(Mn),xt(cn),sm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(lh(ai),ai=null))),eh(t,e),nn(e),null;case 5:rm(e);var r=as(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return nn(e),null}if(t=as(Pi.current),El(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)vt(aa[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Pg(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Lg(i,s),vt("invalid",i)}Ad(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":pl(i),Dg(i,s,!0);break;case"textarea":pl(i),Ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[wi]=e,t[Na]=i,Zy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)vt(aa[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Pg(t,i),r=Md(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Lg(t,i),r=wd(t,i),vt("invalid",t);break;default:r=i}Ad(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?P_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&Np(t,s,l,o))}switch(n){case"input":pl(t),Dg(t,i,!1);break;case"textarea":pl(t),Ig(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ho(t,!!i.multiple,s,!1):i.defaultValue!=null&&ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)Jy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=as(Oa.current),as(Pi.current),El(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return nn(e),null;case 13:if(xt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Fn!==null&&e.mode&1&&!(e.flags&128))vy(),To(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[wi]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ai!==null&&(lh(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?kt===0&&(kt=3):vm())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return bo(),eh(t,e),t===null&&Ia(e.stateNode.containerInfo),nn(e),null;case 10:return em(e.type._context),nn(e),null;case 17:return En(e.type)&&Vc(),nn(e),null;case 19:if(xt(St),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$o(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$c(t),o!==null){for(e.flags|=128,$o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Co&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304)}else{if(!i)if(t=$c(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return nn(e),null}else 2*Pt()-s.renderingStartTime>Co&&n!==1073741824&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=St.current,gt(St,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return gm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function sw(t,e){switch(Kp(e),e.tag){case 1:return En(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bo(),xt(Mn),xt(cn),sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(xt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(St),null;case 4:return bo(),null;case 10:return em(e.type._context),null;case 22:case 23:return gm(),null;case 24:return null;default:return null}}var bl=!1,on=!1,ow=typeof WeakSet=="function"?WeakSet:Set,ye=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){At(t,e,i)}}var M0=!1;function aw(t,e){if(kd=Oc,t=ry(),$p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Oc=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:si(e.type,_),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return m=M0,M0=!1,m}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&th(e,n,s)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eS(t){var e=t.alternate;e!==null&&(t.alternate=null,eS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[Na],delete e[Hd],delete e[GT],delete e[WT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tS(t){return t.tag===5||t.tag===3||t.tag===4}function E0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var $t=null,oi=!1;function cr(t,e,n){for(n=n.child;n!==null;)nS(t,e,n),n=n.sibling}function nS(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:on||io(n,e);case 6:var i=$t,r=oi;$t=null,cr(t,e,n),$t=i,oi=r,$t!==null&&(oi?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(oi?(t=$t,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),Pa(t)):lf($t,n.stateNode));break;case 4:i=$t,r=oi,$t=n.stateNode.containerInfo,oi=!0,cr(t,e,n),$t=i,oi=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),r=r.next}while(r!==i)}cr(t,e,n);break;case 1:if(!on&&(io(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,cr(t,e,n),on=i):cr(t,e,n);break;default:cr(t,e,n)}}function T0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ow),e.forEach(function(i){var r=gw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,oi=!1;break e;case 3:$t=a.stateNode.containerInfo,oi=!0;break e;case 4:$t=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if($t===null)throw Error(se(160));nS(s,o,r),$t=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iS(e,t),e=e.sibling}function iS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),xi(t),i&4){try{va(3,t,t.return),wu(3,t)}catch(_){At(t,t.return,_)}try{va(5,t,t.return)}catch(_){At(t,t.return,_)}}break;case 1:Jn(e,t),xi(t),i&512&&n!==null&&io(n,n.return);break;case 5:if(Jn(e,t),xi(t),i&512&&n!==null&&io(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(_){At(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&w_(r,s),Cd(a,o);var c=Cd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?P_(r,d):u==="dangerouslySetInnerHTML"?C_(r,d):u==="children"?ba(r,d):Np(r,u,d,c)}switch(a){case"input":Ed(r,s);break;case"textarea":b_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ho(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(_){At(t,t.return,_)}}break;case 6:if(Jn(e,t),xi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){At(t,t.return,_)}}break;case 3:if(Jn(e,t),xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(_){At(t,t.return,_)}break;case 4:Jn(e,t),xi(t);break;case 13:Jn(e,t),xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pm=Pt())),i&4&&T0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Jn(e,t),on=c):Jn(e,t),xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(d=ye=u;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:va(4,f,f.return);break;case 1:io(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){At(i,n,_)}}break;case 5:io(f,f.return);break;case 22:if(f.memoizedState!==null){b0(d);continue}}p!==null?(p.return=f,ye=p):b0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=R_("display",o))}catch(_){At(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){At(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),xi(t),i&4&&T0(t);break;case 21:break;default:Jn(e,t),xi(t)}}function xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tS(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=E0(t);rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=E0(t);ih(t,a,o);break;default:throw Error(se(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lw(t,e,n){ye=t,rS(t)}function rS(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=bl;var c=on;if(bl=o,(on=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?A0(r):l!==null?(l.return=o,ye=l):A0(r);for(;s!==null;)ye=s,rS(s),s=s.sibling;ye=r,bl=a,on=c}w0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):w0(t)}}function w0(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&c0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&nh(e)}catch(f){At(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function b0(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function A0(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{nh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var cw=Math.ceil,Zc=or.ReactCurrentDispatcher,dm=or.ReactCurrentOwner,$n=or.ReactCurrentBatchConfig,Je=0,Xt=null,Ft=null,Qt=0,Ln=0,ro=Hr(0),kt=0,Va=null,ys=0,bu=0,hm=0,xa=null,yn=null,pm=0,Co=1/0,Gi=null,Qc=!1,sh=null,Fr=null,Al=!1,br=null,Jc=0,_a=0,oh=null,pc=-1,mc=0;function pn(){return Je&6?Pt():pc!==-1?pc:pc=Pt()}function Nr(t){return t.mode&1?Je&2&&Qt!==0?Qt&-Qt:XT.transition!==null?(mc===0&&(mc=H_()),mc):(t=at,t!==0||(t=window.event,t=t===void 0?16:q_(t.type)),t):1}function fi(t,e,n,i){if(50<_a)throw _a=0,oh=null,Error(se(185));Za(t,n,i),(!(Je&2)||t!==Xt)&&(t===Xt&&(!(Je&2)&&(bu|=n),kt===4&&Er(t,Qt)),Tn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Co=Pt()+500,Mu&&Gr()))}function Tn(t,e){var n=t.callbackNode;X1(t,e);var i=Uc(t,t===Xt?Qt:0);if(i===0)n!==null&&Ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ug(n),e===1)t.tag===0?jT(C0.bind(null,t)):py(C0.bind(null,t)),VT(function(){!(Je&6)&&Gr()}),n=null;else{switch(G_(i)){case 1:n=zp;break;case 4:n=z_;break;case 16:n=Nc;break;case 536870912:n=V_;break;default:n=Nc}n=dS(n,sS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sS(t,e){if(pc=-1,mc=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var i=Uc(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=Je;Je|=2;var s=aS();(Xt!==t||Qt!==e)&&(Gi=null,Co=Pt()+500,hs(t,e));do try{dw();break}catch(a){oS(t,a)}while(!0);Jp(),Zc.current=s,Je=r,Ft!==null?e=0:(Xt=null,Qt=0,e=kt)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Va,hs(t,0),Er(t,i),Tn(t,Pt()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!uw(r)&&(e=eu(t,i),e===2&&(s=Id(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=Va,hs(t,0),Er(t,i),Tn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ts(t,yn,Gi);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=pm+500-Pt(),10<e)){if(Uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vd(ts.bind(null,t,yn,Gi),e);break}ts(t,yn,Gi);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cw(i/1960))-i,10<i){t.timeoutHandle=Vd(ts.bind(null,t,yn,Gi),i);break}ts(t,yn,Gi);break;case 5:ts(t,yn,Gi);break;default:throw Error(se(329))}}}return Tn(t,Pt()),t.callbackNode===n?sS.bind(null,t):null}function ah(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=eu(t,e),t!==2&&(e=yn,yn=n,e!==null&&lh(e)),t}function lh(t){yn===null?yn=t:yn.push.apply(yn,t)}function uw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~hm,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function C0(t){if(Je&6)throw Error(se(327));xo();var e=Uc(t,0);if(!(e&1))return Tn(t,Pt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Va,hs(t,0),Er(t,e),Tn(t,Pt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ts(t,yn,Gi),Tn(t,Pt()),null}function mm(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Co=Pt()+500,Mu&&Gr())}}function Ss(t){br!==null&&br.tag===0&&!(Je&6)&&xo();var e=Je;Je|=1;var n=$n.transition,i=at;try{if($n.transition=null,at=1,t)return t()}finally{at=i,$n.transition=n,Je=e,!(Je&6)&&Gr()}}function gm(){Ln=ro.current,xt(ro)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zT(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:bo(),xt(Mn),xt(cn),sm();break;case 5:rm(i);break;case 4:bo();break;case 13:xt(St);break;case 19:xt(St);break;case 10:em(i.type._context);break;case 22:case 23:gm()}n=n.return}if(Xt=t,Ft=t=Ur(t.current,null),Qt=Ln=e,kt=0,Va=null,hm=bu=ys=0,yn=xa=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}os=null}return t}function oS(t,e){do{var n=Ft;try{if(Jp(),fc.current=Kc,qc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(_s=0,Wt=Ot=Et=null,ga=!1,ka=0,dm.current=null,n===null||n.return===null){kt=1,Va=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=m0(o);if(p!==null){p.flags&=-257,g0(p,o,a,s,e),p.mode&1&&p0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){p0(s,c,e),vm();break e}l=Error(se(426))}}else if(yt&&a.mode&1){var g=m0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),g0(g,o,a,s,e),Zp(Ao(l,a));break e}}s=l=Ao(l,a),kt!==4&&(kt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Gy(s,l,e);l0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fr===null||!Fr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Wy(s,a,e);l0(s,y);break e}}s=s.return}while(s!==null)}cS(n)}catch(M){e=M,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function aS(){var t=Zc.current;return Zc.current=Kc,t===null?Kc:t}function vm(){(kt===0||kt===3||kt===2)&&(kt=4),Xt===null||!(ys&268435455)&&!(bu&268435455)||Er(Xt,Qt)}function eu(t,e){var n=Je;Je|=2;var i=aS();(Xt!==t||Qt!==e)&&(Gi=null,hs(t,e));do try{fw();break}catch(r){oS(t,r)}while(!0);if(Jp(),Je=n,Zc.current=i,Ft!==null)throw Error(se(261));return Xt=null,Qt=0,kt}function fw(){for(;Ft!==null;)lS(Ft)}function dw(){for(;Ft!==null&&!O1();)lS(Ft)}function lS(t){var e=fS(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?cS(t):Ft=e,dm.current=null}function cS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sw(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ft=null;return}}else if(n=rw(n,e,Ln),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);kt===0&&(kt=5)}function ts(t,e,n){var i=at,r=$n.transition;try{$n.transition=null,at=1,hw(t,e,n,i)}finally{$n.transition=r,at=i}return null}function hw(t,e,n,i){do xo();while(br!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y1(t,s),t===Xt&&(Ft=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,dS(Nc,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=at;at=1;var a=Je;Je|=4,dm.current=null,aw(t,n),iS(n,t),IT(Bd),Oc=!!kd,Bd=kd=null,t.current=n,lw(n),k1(),Je=a,at=o,$n.transition=s}else t.current=n;if(Al&&(Al=!1,br=t,Jc=r),s=t.pendingLanes,s===0&&(Fr=null),V1(n.stateNode),Tn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=sh,sh=null,t;return Jc&1&&t.tag!==0&&xo(),s=t.pendingLanes,s&1?t===oh?_a++:(_a=0,oh=t):_a=0,Gr(),null}function xo(){if(br!==null){var t=G_(Jc),e=$n.transition,n=at;try{if($n.transition=null,at=16>t?16:t,br===null)var i=!1;else{if(t=br,br=null,Jc=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:va(8,u,s)}var d=u.child;if(d!==null)d.return=u,ye=d;else for(;ye!==null;){u=ye;var f=u.sibling,p=u.return;if(eS(u),u===c){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ye=h;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){o=ye;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ye=x;else e:for(o=v;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(M){At(a,a.return,M)}if(a===o){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Je=r,Gr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{at=n,$n.transition=e}}return!1}function R0(t,e,n){e=Ao(n,e),e=Gy(t,e,1),t=Ir(t,e,1),e=pn(),t!==null&&(Za(t,1,e),Tn(t,e))}function At(t,e,n){if(t.tag===3)R0(t,t,n);else for(;e!==null;){if(e.tag===3){R0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){t=Ao(n,t),t=Wy(e,t,1),e=Ir(e,t,1),t=pn(),e!==null&&(Za(e,1,t),Tn(e,t));break}}e=e.return}}function pw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(kt===4||kt===3&&(Qt&130023424)===Qt&&500>Pt()-pm?hs(t,0):hm|=n),Tn(t,e)}function uS(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=pn();t=er(t,e),t!==null&&(Za(t,e,n),Tn(t,n))}function mw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uS(t,n)}function gw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),uS(t,n)}var fS;fS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,iw(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,yt&&e.flags&1048576&&my(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hc(t,e),t=e.pendingProps;var r=Eo(e,cn.current);vo(e,n),r=am(null,e,i,t,r,n);var s=lm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nm(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,$d(e,i,t,n),e=Zd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&qp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xw(i),t=si(i,t),r){case 0:e=Kd(null,e,i,t,n);break e;case 1:e=_0(null,e,i,t,n);break e;case 11:e=v0(null,e,i,t,n);break e;case 14:e=x0(null,e,i,si(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),_0(t,e,i,r,n);case 3:e:{if($y(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sy(t,e),Yc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(se(423)),e),e=y0(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(se(424)),e),e=y0(t,e,i,n,r);break e}else for(Fn=Lr(e.stateNode.containerInfo.firstChild),Nn=e,yt=!0,ai=null,n=_y(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),i===r){e=tr(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return My(e),t===null&&jd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zd(i,r)?o=null:s!==null&&zd(i,s)&&(e.flags|=32),Yy(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return qy(t,e,n);case 4:return im(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=wo(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),v0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(jc,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!Mn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vo(e,n),r=Kn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),x0(t,e,i,r,n);case 15:return jy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),hc(t,e),e.tag=1,En(i)?(t=!0,Hc(e)):t=!1,vo(e,n),Hy(e,i,r),$d(e,i,r,n),Zd(null,e,i,!0,t,n);case 19:return Ky(t,e,n);case 22:return Xy(t,e,n)}throw Error(se(156,e.tag))};function dS(t,e){return B_(t,e)}function vw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new vw(t,e,n,i)}function xm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xw(t){if(typeof t=="function")return xm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===kp)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return ps(n.children,r,s,e);case Up:o=8,r|=8;break;case xd:return t=Xn(12,n,e,r|2),t.elementType=xd,t.lanes=s,t;case _d:return t=Xn(13,n,e,r),t.elementType=_d,t.lanes=s,t;case yd:return t=Xn(19,n,e,r),t.elementType=yd,t.lanes=s,t;case M_:return Au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y_:o=10;break e;case S_:o=9;break e;case Op:o=11;break e;case kp:o=14;break e;case _r:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ps(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Au(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=M_,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _w(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _m(t,e,n,i,r,s,o,a,l){return t=new _w(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nm(s),t}function yw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function hS(t){if(!t)return kr;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(En(n))return hy(t,n,e)}return e}function pS(t,e,n,i,r,s,o,a,l){return t=_m(n,i,!0,t,r,s,o,a,l),t.context=hS(null),n=t.current,i=pn(),r=Nr(n),s=Ki(i,r),s.callback=e??null,Ir(n,s,r),t.current.lanes=r,Za(t,r,i),Tn(t,i),t}function Cu(t,e,n,i){var r=e.current,s=pn(),o=Nr(r);return n=hS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ir(r,e,o),t!==null&&(fi(t,r,o,s),uc(t,r,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function P0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ym(t,e){P0(t,e),(t=t.alternate)&&P0(t,e)}function Sw(){return null}var mS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}Ru.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Cu(t,e,null,null)};Ru.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){Cu(null,t,null,null)}),e[Ji]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=X_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&$_(t)}};function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function Mw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tu(o);s.call(c)}}var o=pS(e,i,t,0,null,!1,!1,"",D0);return t._reactRootContainer=o,t[Ji]=o.current,Ia(t.nodeType===8?t.parentNode:t),Ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tu(l);a.call(c)}}var l=_m(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=l,t[Ji]=l.current,Ia(t.nodeType===8?t.parentNode:t),Ss(function(){Cu(e,l,n,i)}),l}function Du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tu(o);a.call(l)}}Cu(e,o,t,r)}else o=Mw(n,e,t,r,i);return tu(o)}W_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Vp(e,n|1),Tn(e,Pt()),!(Je&6)&&(Co=Pt()+500,Gr()))}break;case 13:Ss(function(){var i=er(t,1);if(i!==null){var r=pn();fi(i,t,1,r)}}),ym(t,1)}};Hp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=pn();fi(e,t,134217728,n)}ym(t,134217728)}};j_=function(t){if(t.tag===13){var e=Nr(t),n=er(t,e);if(n!==null){var i=pn();fi(n,t,e,i)}ym(t,e)}};X_=function(){return at};Y_=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Pd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(se(90));T_(i),Ed(i,r)}}}break;case"textarea":b_(t,n);break;case"select":e=n.value,e!=null&&ho(t,!!n.multiple,e,!1)}};I_=mm;F_=Ss;var Ew={usingClientEntryPoint:!1,Events:[Ja,Qs,Su,D_,L_,mm]},qo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tw={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O_(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{vu=Cl.inject(Tw),Ri=Cl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(e))throw Error(se(200));return yw(t,e,null,n)};kn.createRoot=function(t,e){if(!Mm(t))throw Error(se(299));var n=!1,i="",r=mS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_m(t,1,!1,null,null,n,!1,i,r),t[Ji]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Sm(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=O_(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Ss(t)};kn.hydrate=function(t,e,n){if(!Pu(e))throw Error(se(200));return Du(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Mm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=mS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pS(e,null,t,1,n??null,r,!1,s,o),t[Ji]=e.current,Ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};kn.render=function(t,e,n){if(!Pu(e))throw Error(se(200));return Du(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(se(40));return t._reactRootContainer?(Ss(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1};kn.unstable_batchedUpdates=mm;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Du(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function gS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS)}catch(t){console.error(t)}}gS(),g_.exports=kn;var ww=g_.exports,L0=ww;gd.createRoot=L0.createRoot,gd.hydrateRoot=L0.hydrateRoot;const vS=B.createContext(),zn=()=>B.useContext(vS),bw=({children:t})=>{const[e,n]=B.useState("dark");B.useEffect(()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&n("light")},[]);const i=()=>n(o=>o==="dark"?"light":"dark"),r=e==="dark",s={bg:r?"#070707":"#F0EBE0",fg:r?"#F0EBE0":"#070707",accent:"#FF3D00",accentB:r?"#FFD600":"#E6A800",border:r?"rgba(240,235,224,0.10)":"rgba(7,7,7,0.12)",muted:r?"rgba(240,235,224,0.38)":"rgba(7,7,7,0.42)",card:r?"rgba(240,235,224,0.03)":"rgba(7,7,7,0.05)"};return T.jsx(vS.Provider,{value:{theme:e,toggleTheme:i,isDark:r,colors:s},children:t})},Aw=()=>{const{colors:t,isDark:e}=zn(),n=`
html.lenis, html.lenis-scrolling { scroll-behavior: auto !important; }
.lenis.lenis-smooth { height: auto; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }

html { scroll-behavior: smooth; cursor: none !important; overflow-x: hidden; }
body { 
  margin: 0; 
  padding: 0; 
  font-family: 'Outfit', sans-serif; 
  overflow-x: hidden; 
  background-color: ${t.bg}; 
  background-image: 
    radial-gradient(ellipse at 20% 50%, rgba(255, 61, 0, 0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(255, 214, 0, 0.02) 0%, transparent 50%);
  color: ${t.fg}; 
  transition: background-color 0.35s, color 0.35s; 
  cursor: none !important; 
  width: 100%;
}
* { box-sizing: border-box; cursor: none !important; }
.container { max-width: 1400px; margin: 0 auto; width: 100%; position: relative; padding: 0 16px; }
#about .grid { display: grid; grid-template-columns: 45% 55%; gap: 4rem; width: 100%; overflow: hidden; }
#about .grid > * { min-width: 0; overflow: hidden; }

::-webkit-scrollbar { width: 2px; }
::-webkit-scrollbar-thumb { background: ${t.accent}; }
::-webkit-scrollbar-track { background: ${t.bg}; }

@keyframes slideUp { from { transform: translateY(105%); } to { transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes revealUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scrollDrop { 0% { transform: scaleY(0); transform-origin: top; opacity: 1; } 45% { transform: scaleY(1); transform-origin: top; opacity: 1; } 55% { transform: scaleY(1); transform-origin: bottom; opacity: 1; } 100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; } }
@keyframes roleIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes roleOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-6px); } }
@keyframes accentPulse { 0%,100% { opacity: 0.06; } 50% { opacity: 0.14; } }
@keyframes navSlide { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes barExpand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.7; } }
@keyframes dotPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,61,0,0.4); } 50% { box-shadow: 0 0 0 6px rgba(255,61,0,0); } }
@keyframes avatarFloat { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1deg); } }

/* ===== TABLET (≤1024px) ===== */
@media (max-width: 1024px) {
  #work .featured-grid { gap: 1rem !important; }
  #contact .contact-grid { gap: 2.5rem !important; }
  #contact .laser-flow-layer { display: none !important; }

  /* Timeline */
  #timeline { padding-left: 1rem !important; padding-right: 1rem !important; overflow-x: hidden !important; }
  #timeline .center-line { left: 1rem !important; }
  #timeline .timeline-entry { 
    width: auto !important; 
    max-width: 100% !important; 
    margin-left: 1.5rem !important; 
    margin-right: 0 !important; 
    text-align: left !important; 
    transform: translateX(0) !important;
  }
  #timeline .timeline-dot { 
    left: calc(-0.5rem - 5px) !important; 
    right: auto !important; 
  }
}

/* ===== MOBILE (≤767px) ===== */
@media (max-width: 767px) {
  .desktop-only { display: none !important; }
  
  /* Hero */
  #hero { padding-top: 100px !important; }
  #hero .vertical-side-text { display: none; }
  
  /* 1. Make the hero section a single stacking context */
  #hero .hero-center-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative !important;
  }
  
  /* 2. The name text on mobile must be: relative, z-index 1, margin-bottom -120px */
  #hero .name-line { 
    font-size: clamp(3.2rem, 15vw, 8rem) !important; 
    text-align: center; 
    position: relative !important; 
    z-index: 1 !important; 
    margin-bottom: -120px !important;
  }
  
  /* 3. Hero image wrapper */
  #hero .hero-avatar { 
    position: relative !important;
    z-index: 2 !important;
    text-align: center !important;
    width: clamp(220px, 60vw, 300px) !important;
    margin: 0 auto !important;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    opacity: 1 !important;
  }
  
  /* 4. Hero image */
  #hero .hero-avatar img {
    width: 100% !important;
    display: block !important;
    margin: 0 auto !important;
    object-fit: cover !important;
    object-position: top !important;
  }
  
  #hero .cta-buttons { flex-direction: column; width: 100%; align-items: stretch; margin-top: 1.5rem; }
  #hero .cta-buttons > * { width: 100%; }
  #hero .cta-buttons a { min-height: 48px; display: flex; align-items: center; justify-content: center; text-align: center; }
  #hero .stats-row { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem; width: 100%; }
  #hero .stats-row > div:last-child { justify-content: center; width: 100%; margin-top: 2rem; }
  #hero .bg-text { 
    font-size: clamp(5rem, 25vw, 15rem) !important; 
    transform: translate(-50%, -50%) !important; 
    left: 50% !important; 
    top: 40% !important; 
    opacity: 0.04 !important; 
  }
  
  /* About */
  #about .grid { display: grid; grid-template-columns: 1fr !important; gap: 2.5rem !important; width: 100% !important; overflow: hidden; }
  #about .grid > * { min-width: 0 !important; overflow: hidden; }
  #about .sticky-col { position: static !important; width: 100% !important; max-width: 100% !important; padding-right: 0 !important; overflow-wrap: break-word; }
  #about .stats-container { justify-content: space-between !important; gap: 1.5rem !important; }
  #about .stats-item { width: calc(50% - 1rem); }
  #about .skill-card { padding-bottom: 3.5rem !important; }
  
  /* Tech Stack */
  #stack .logo-loop-container { height: 36px !important; margin-bottom: 2rem !important; }
  #stack h2 { font-size: clamp(3rem, 12vw, 5rem) !important; margin-bottom: 2.5rem !important; }
  
  /* Projects */
  #work .featured-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  #work .featured-grid > *:first-child { grid-column: 1 !important; }
  #work .terminal-row { grid-template-columns: 1fr !important; font-size: 0.65rem !important; gap: 0.5rem; padding: 1rem 0 !important; }
  #work .terminal-desc { display: block !important; color: ${t.fg} !important; opacity: 0.8; }
  #work h2 { font-size: clamp(3rem, 12vw, 5rem) !important; }
  
  /* Timeline */
  #timeline h2 { font-size: clamp(3rem, 8vw, 5rem) !important; }
  
  /* Contact */
  #contact h2 { font-size: clamp(3rem, 12vw, 5rem) !important; }
  #contact .contact-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
  #contact input, #contact textarea { font-size: 16px !important; /* prevents iOS zoom */ }

  /* Footer */
  #footer .footer-content { justify-content: center !important; }
  #footer .footer-content > div:last-child { align-items: flex-start; }

  /* Touch targets */
  a, button { min-height: 44px; }
}

/* ===== SMALL MOBILE (≤480px) ===== */
@media (max-width: 480px) {
  #hero .name-line { font-size: clamp(2.5rem, 12vw, 4.5rem) !important; }
  #hero .hero-avatar { width: 85vw !important; margin: 0 auto -1.5rem auto !important; }
  
  #about .stats-item { width: 100%; text-align: center; margin-bottom: 1.5rem; }
  #about .stats-container { flex-direction: column; align-items: center; gap: 1rem !important; }
  #about .stats-item div:first-child { font-size: 3.5rem !important; }
  #about .marquee-container { height: 70px !important; margin: 2rem 0 !important; }
  #about .marquee-container div { font-size: clamp(2rem, 10vw, 3.5rem) !important; }
  
  #contact h3 { font-size: clamp(1.5rem, 5vw, 2.5rem) !important; }
  
  section { padding-left: clamp(1rem, 4vw, 1.5rem) !important; padding-right: clamp(1rem, 4vw, 1.5rem) !important; }
}

.revealed { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
.domain-tag { font-family: 'DM Mono', monospace; font-size: 0.58rem; color: ${t.accent}; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.75rem; }

.icon-wrapper { display: inline-flex; align-items: center; justify-content: center; transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.icon-wrapper:hover { transform: scale(1.1); }
`;return T.jsxs(T.Fragment,{children:[T.jsx("style",{children:n}),T.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap",rel:"stylesheet"})]})},Cw=()=>{const{colors:t}=zn(),e=B.useRef(null),n=B.useRef({x:-100,y:-100,lastX:-100,lastY:-100,velocity:0,isIdle:!0,idleTimer:null,globalOpacity:0,ripples:[]});return B.useEffect(()=>{const i=e.current;if(!i)return;const r=i.getContext("2d",{alpha:!0}),s=n.current,o=()=>{i.width=window.innerWidth,i.height=window.innerHeight};o(),window.addEventListener("resize",o,{passive:!0});const a=(f,p)=>{s.lastX===-100&&(s.lastX=f,s.lastY=p);const m=f-s.lastX,_=p-s.lastY;s.velocity=Math.sqrt(m*m+_*_),s.x=f,s.y=p,s.lastX=f,s.lastY=p,s.isIdle=!1,clearTimeout(s.idleTimer),s.idleTimer=setTimeout(()=>{s.isIdle=!0},600),s.velocity>2&&(s.ripples.push({x:s.x,y:s.y,radius:3,maxRadius:15+s.velocity*1.5,alpha:Math.min(s.velocity*.05,.6),decay:.02+Math.random()*.015}),s.ripples.length>25&&s.ripples.shift())},l=f=>a(f.clientX,f.clientY),c=f=>a(f.touches[0].clientX,f.touches[0].clientY);window.addEventListener("mousemove",l,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0});let u;const d=()=>{const f=s.isIdle?0:1;if(s.globalOpacity+=(f-s.globalOpacity)*.1,r.clearRect(0,0,i.width,i.height),s.globalOpacity>.01||s.ripples.length>0){r.save(),r.globalAlpha=s.globalOpacity;for(let p=s.ripples.length-1;p>=0;p--){const m=s.ripples[p];if(m.radius+=(m.maxRadius-m.radius)*.1,m.alpha-=m.decay,m.alpha<=0){s.ripples.splice(p,1);continue}r.beginPath(),r.arc(m.x,m.y,m.radius,0,Math.PI*2),r.strokeStyle=`rgba(255, 61, 0, ${m.alpha})`,r.lineWidth=1,r.stroke()}s.x!==-100&&(r.beginPath(),r.arc(s.x,s.y,1.5,0,Math.PI*2),r.fillStyle="#FF3D00",r.fill()),r.restore()}u=requestAnimationFrame(d)};return u=requestAnimationFrame(d),()=>{window.removeEventListener("resize",o),window.removeEventListener("mousemove",l),window.removeEventListener("touchmove",c),clearTimeout(s.idleTimer),cancelAnimationFrame(u)}},[]),T.jsx("canvas",{ref:e,style:{position:"fixed",inset:0,zIndex:99999,pointerEvents:"none"}})},Rw=({phase:t,setPhase:e})=>{const{colors:n}=zn(),[i,r]=B.useState(0);return B.useEffect(()=>{if(t!=="counting")return;let s=null,o;const a=2600,l=c=>{s||(s=c);const u=Math.min((c-s)/a,1),d=u,f=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2,p=Math.floor(f*100);r(p),u<1?o=requestAnimationFrame(l):(r(100),e("hold"),setTimeout(()=>e("exit"),700),setTimeout(()=>e("done"),1300))};return o=requestAnimationFrame(l),()=>cancelAnimationFrame(o)},[t,e]),t==="done"?null:T.jsxs("div",{style:{position:"fixed",inset:0,backgroundColor:"#070707",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 1s cubic-bezier(0.76, 0, 0.24, 1)",transform:t==="exit"?"translateY(-100%)":"translateY(0)"},children:[T.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, rgba(255,61,0,0.06) 0%, transparent 65%)",animation:"accentPulse 2s ease-in-out infinite"}}),T.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(0deg, transparent 3px, rgba(240,235,224,0.012) 3px, rgba(240,235,224,0.012) 4px)"}}),T.jsxs("div",{style:{zIndex:2,position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[T.jsxs("div",{style:{width:"100%",padding:"2rem 3rem",position:"absolute",top:"-40vh",left:0,display:"flex",justifyContent:"space-between"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[T.jsx("div",{style:{height:"1.5px",width:24,backgroundColor:n.accent,animation:"barExpand 1s ease-out forwards"}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:"rgba(240,235,224,0.30)",textTransform:"uppercase"},children:"Portfolio | 2025"})]}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:"rgba(240,235,224,0.25)",textTransform:"uppercase"},children:"Aditya Srivastava"})]}),T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(130px, 34vw, 520px)",lineHeight:.82,color:"#F0EBE0",letterSpacing:"-0.025em"},children:i.toString().padStart(3,"0")}),T.jsx("div",{style:{width:"34vw",height:"1px",background:`linear-gradient(to right, transparent, ${n.accent}, transparent)`,opacity:i>10?1:0,transition:"opacity 0.3s",marginTop:"1rem"}}),T.jsxs("div",{style:{width:"100%",padding:"2rem 3rem",position:"absolute",bottom:"-40vh",left:0,display:"flex",justifyContent:"space-between"},children:[T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.58rem",color:"rgba(240,235,224,0.28)",textTransform:"uppercase"},children:"Initializing Experience"}),T.jsxs("span",{style:{fontFamily:"DM Mono",fontSize:"0.58rem",color:"rgba(240,235,224,0.28)"},children:[i,"%"]})]})]}),T.jsx("div",{style:{position:"absolute",top:"50%",left:"55%",transform:"translate(-50%, -50%)",fontFamily:"Bebas Neue",fontSize:"clamp(6rem, 20vw, 28rem)",color:"#F0EBE0",opacity:.03,pointerEvents:"none",userSelect:"none"},children:"PSYODRZ"}),T.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:2,backgroundColor:n.accent,width:`${i}%`,transition:"width 0.05s linear",boxShadow:`0 0 12px ${n.accent}, 0 0 24px rgba(255,61,0,0.4)`}})]})},Pw=({size:t=20,color:e="currentColor"})=>T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M6 12h.01M9 12h.01M15 12h.01M18 12h.01M4 16h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"}),T.jsx("path",{d:"M6 20v2M18 20v2"})]}),Dw=({size:t=20,color:e="currentColor"})=>T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"}),T.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Lw=({size:t=20,color:e="currentColor"})=>T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("circle",{cx:"12",cy:"12",r:"10"}),T.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),T.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Iw=({size:t=14,color:e="currentColor"})=>T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),vc=({size:t=14,color:e="currentColor"})=>T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),T.jsx("polyline",{points:"15 3 21 3 21 9"}),T.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),Fw=({size:t=16,color:e="currentColor"})=>T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("circle",{cx:"12",cy:"12",r:"5"}),T.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),T.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),T.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),T.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),T.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),T.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),T.jsx("line",{x1:"4.22",y1:"19.07",x2:"5.64",y2:"17.66"}),T.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Nw=({size:t=16,color:e="currentColor"})=>T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Uw=({size:t=16,color:e="currentColor"})=>T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("polyline",{points:"20 6 9 17 4 12"})}),Ow=()=>{const{colors:t,theme:e,toggleTheme:n,isDark:i}=zn(),[r,s]=B.useState(!1),o={background:t.card,backdropFilter:"blur(14px) saturate(1.4)",borderBottom:`1px solid ${t.border}`};return T.jsxs(T.Fragment,{children:[T.jsxs("nav",{style:{...o,position:"fixed",top:0,width:"100%",zIndex:100,height:80,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(1.5rem, 4vw, 3.5rem)",animation:"navSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both"},children:[T.jsxs("div",{style:{fontFamily:"Bebas Neue",fontSize:"1.8rem",display:"flex",alignItems:"center",letterSpacing:"0.05em"},children:[T.jsx("span",{style:{color:t.accent},children:"A"}),T.jsx("span",{style:{color:t.fg},children:"DITYA"}),T.jsx("span",{style:{color:t.fg,opacity:.3,margin:"0 0.4rem"},children:"|"}),T.jsx("span",{style:{color:t.fg,opacity:.4,fontSize:"1.4rem"},children:"DEV"})]}),T.jsx("div",{className:"desktop-only",style:{display:"flex",gap:"2rem"},children:["About","Work","Stack","Contact"].map(a=>T.jsx("a",{href:`#${a.toLowerCase()}`,onClick:l=>{var c;l.preventDefault(),(c=window.lenis)==null||c.scrollTo(`#${a.toLowerCase()}`)},style:{fontFamily:"DM Mono",fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:t.fg,opacity:.45,textDecoration:"none",transition:"all 0.2s"},onMouseEnter:l=>{l.currentTarget.style.opacity=1,l.currentTarget.style.color=t.accent},onMouseLeave:l=>{l.currentTarget.style.opacity=.45,l.currentTarget.style.color=t.fg},children:a},a))}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:[T.jsx("a",{className:"desktop-only",href:"https://github.com/Psyodrz",target:"_blank",rel:"noreferrer",style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:t.muted,textDecoration:"none",transition:"color 0.2s",letterSpacing:"0.1em"},onMouseEnter:a=>a.currentTarget.style.color=t.fg,onMouseLeave:a=>a.currentTarget.style.color=t.muted,children:"GITHUB"}),T.jsx("button",{onClick:n,style:{background:"none",border:`1px solid ${t.border}`,color:t.fg,padding:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.2s",borderRadius:"50%"},onMouseEnter:a=>{a.currentTarget.style.borderColor=t.accent,a.currentTarget.style.backgroundColor="rgba(255,61,0,0.05)"},onMouseLeave:a=>{a.currentTarget.style.borderColor=t.border,a.currentTarget.style.backgroundColor="transparent"},children:i?T.jsx(Fw,{color:t.accent}):T.jsx(Nw,{color:t.accent})}),T.jsx("button",{className:"mobile-nav-menu",onClick:()=>s(!0),style:{display:"none",background:"none",border:"none",padding:0,cursor:"pointer"},children:T.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[T.jsx("div",{style:{height:"1.5px",width:24,backgroundColor:t.fg}}),T.jsx("div",{style:{height:"1.5px",width:24,backgroundColor:t.fg}}),T.jsx("div",{style:{height:"1.5px",width:24,backgroundColor:t.fg}})]})})]})]}),T.jsxs("div",{style:{position:"fixed",inset:0,backgroundColor:t.bg,zIndex:1e3,transform:r?"translateX(0)":"translateX(100%)",transition:"transform 0.5s cubic-bezier(0.16,1,0.3,1)",display:"flex",flexDirection:"column",padding:"2rem"},children:[T.jsx("button",{onClick:()=>s(!1),style:{alignSelf:"flex-end",background:"none",border:"none",color:t.fg,fontSize:"2rem",cursor:"pointer",fontFamily:"Outfit"},children:"✕"}),T.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:"2rem",alignItems:"flex-start"},children:[["About","Work","Stack","Contact"].map(a=>T.jsx("a",{href:`#${a.toLowerCase()}`,onClick:l=>{var c;l.preventDefault(),s(!1),(c=window.lenis)==null||c.scrollTo(`#${a.toLowerCase()}`)},style:{fontFamily:"Bebas Neue",fontSize:"clamp(3rem, 15vw, 5rem)",color:t.fg,textDecoration:"none"},children:a},a)),T.jsx("a",{href:"https://github.com/Psyodrz",target:"_blank",rel:"noreferrer",onClick:()=>s(!1),style:{fontFamily:"DM Mono",fontSize:"1.2rem",color:t.accent,textDecoration:"none",marginTop:"2rem",letterSpacing:"0.2em"},children:"GITHUB"})]})]})]})},xS=B.createContext({});function Em(t){const e=B.useRef(null);return e.current===null&&(e.current=t()),e.current}const kw=typeof window<"u",_S=kw?B.useLayoutEffect:B.useEffect,Tm=B.createContext(null);function wm(t,e){t.indexOf(e)===-1&&t.push(e)}function nu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Fi=(t,e,n)=>n>e?e:n<t?t:n;let bm=()=>{};const nr={},yS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function SS(t){return typeof t=="object"&&t!==null}const MS=t=>/^0[^.\s]+$/u.test(t);function ES(t){let e;return()=>(e===void 0&&(e=t()),e)}const qn=t=>t,Bw=(t,e)=>n=>e(t(n)),tl=(...t)=>t.reduce(Bw),Ha=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Am{constructor(){this.subscriptions=[]}add(e){return wm(this.subscriptions,e),()=>nu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const di=t=>t*1e3,Yn=t=>t/1e3;function TS(t,e){return e?t*(1e3/e):0}const wS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,zw=1e-7,Vw=12;function Hw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=wS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>zw&&++a<Vw);return o}function nl(t,e,n,i){if(t===e&&n===i)return qn;const r=s=>Hw(s,0,1,t,n);return s=>s===0||s===1?s:wS(r(s),e,i)}const bS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,AS=t=>e=>1-t(1-e),CS=nl(.33,1.53,.69,.99),Cm=AS(CS),RS=bS(Cm),PS=t=>(t*=2)<1?.5*Cm(t):.5*(2-Math.pow(2,-10*(t-1))),Rm=t=>1-Math.sin(Math.acos(t)),DS=AS(Rm),LS=bS(Rm),Gw=nl(.42,0,1,1),Ww=nl(0,0,.58,1),IS=nl(.42,0,.58,1),jw=t=>Array.isArray(t)&&typeof t[0]!="number",FS=t=>Array.isArray(t)&&typeof t[0]=="number",Xw={linear:qn,easeIn:Gw,easeInOut:IS,easeOut:Ww,circIn:Rm,circInOut:LS,circOut:DS,backIn:Cm,backInOut:RS,backOut:CS,anticipate:PS},Yw=t=>typeof t=="string",I0=t=>{if(FS(t)){bm(t.length===4);const[e,n,i,r]=t;return nl(e,n,i,r)}else if(Yw(t))return Xw[t];return t},Rl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $w(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const m=f&&r?n:i;return d&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const qw=40;function NS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Rl.reduce((x,y)=>(x[y]=$w(s),x),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,_=()=>{const x=nr.useManualTiming?r.timestamp:performance.now();n=!1,nr.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,qw),1)),r.timestamp=x,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),p.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(_))},g=()=>{n=!0,i=!0,r.isProcessing||t(_)};return{schedule:Rl.reduce((x,y)=>{const M=o[y];return x[y]=(A,C=!1,S=!1)=>(n||g(),M.schedule(A,C,S)),x},{}),cancel:x=>{for(let y=0;y<Rl.length;y++)o[Rl[y]].cancel(x)},state:r,steps:o}}const{schedule:ft,cancel:ir,state:qt,steps:xf}=NS(typeof requestAnimationFrame<"u"?requestAnimationFrame:qn,!0);let xc;function Kw(){xc=void 0}const dn={now:()=>(xc===void 0&&dn.set(qt.isProcessing||nr.useManualTiming?qt.timestamp:performance.now()),xc),set:t=>{xc=t,queueMicrotask(Kw)}},US=t=>e=>typeof e=="string"&&e.startsWith(t),OS=US("--"),Zw=US("var(--"),Pm=t=>Zw(t)?Qw.test(t.split("/*")[0].trim()):!1,Qw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function F0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const ko={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ga={...ko,transform:t=>Fi(0,1,t)},Pl={...ko,default:1},ya=t=>Math.round(t*1e5)/1e5,Dm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jw(t){return t==null}const eb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lm=(t,e)=>n=>!!(typeof n=="string"&&eb.test(n)&&n.startsWith(t)||e&&!Jw(n)&&Object.prototype.hasOwnProperty.call(n,e)),kS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Dm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},tb=t=>Fi(0,255,t),_f={...ko,transform:t=>Math.round(tb(t))},ls={test:Lm("rgb","red"),parse:kS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+_f.transform(t)+", "+_f.transform(e)+", "+_f.transform(n)+", "+ya(Ga.transform(i))+")"};function nb(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ch={test:Lm("#"),parse:nb,transform:ls.transform},il=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),vr=il("deg"),Di=il("%"),Me=il("px"),ib=il("vh"),rb=il("vw"),N0={...Di,parse:t=>Di.parse(t)/100,transform:t=>Di.transform(t*100)},so={test:Lm("hsl","hue"),parse:kS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Di.transform(ya(e))+", "+Di.transform(ya(n))+", "+ya(Ga.transform(i))+")"},It={test:t=>ls.test(t)||ch.test(t)||so.test(t),parse:t=>ls.test(t)?ls.parse(t):so.test(t)?so.parse(t):ch.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ls.transform(t):so.transform(t),getAnimatableNone:t=>{const e=It.parse(t);return e.alpha=0,It.transform(e)}},sb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ob(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Dm))==null?void 0:e.length)||0)+(((n=t.match(sb))==null?void 0:n.length)||0)>0}const BS="number",zS="color",ab="var",lb="var(",U0="${}",cb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(cb,l=>(It.test(l)?(i.color.push(s),r.push(zS),n.push(It.parse(l))):l.startsWith(lb)?(i.var.push(s),r.push(ab),n.push(l)):(i.number.push(s),r.push(BS),n.push(parseFloat(l))),++s,U0)).split(U0);return{values:n,split:a,indexes:i,types:r}}function VS(t){return Wa(t).values}function HS(t){const{split:e,types:n}=Wa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===BS?s+=ya(r[o]):a===zS?s+=It.transform(r[o]):s+=r[o]}return s}}const ub=t=>typeof t=="number"?0:It.test(t)?It.getAnimatableNone(t):t;function fb(t){const e=VS(t);return HS(t)(e.map(ub))}const hi={test:ob,parse:VS,createTransformer:HS,getAnimatableNone:fb};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function db({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=yf(l,a,t+1/3),s=yf(l,a,t),o=yf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function iu(t,e){return n=>n>0?e:t}const Mt=(t,e,n)=>t+(e-t)*n,Sf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},hb=[ch,ls,so],pb=t=>hb.find(e=>e.test(t));function O0(t){const e=pb(t);if(!e)return!1;let n=e.parse(t);return e===so&&(n=db(n)),n}const k0=(t,e)=>{const n=O0(t),i=O0(e);if(!n||!i)return iu(t,e);const r={...n};return s=>(r.red=Sf(n.red,i.red,s),r.green=Sf(n.green,i.green,s),r.blue=Sf(n.blue,i.blue,s),r.alpha=Mt(n.alpha,i.alpha,s),ls.transform(r))},uh=new Set(["none","hidden"]);function mb(t,e){return uh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function gb(t,e){return n=>Mt(t,e,n)}function Im(t){return typeof t=="number"?gb:typeof t=="string"?Pm(t)?iu:It.test(t)?k0:_b:Array.isArray(t)?GS:typeof t=="object"?It.test(t)?k0:vb:iu}function GS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Im(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function vb(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Im(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function xb(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const _b=(t,e)=>{const n=hi.createTransformer(e),i=Wa(t),r=Wa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?uh.has(t)&&!r.values.length||uh.has(e)&&!i.values.length?mb(t,e):tl(GS(xb(i,r),r.values),n):iu(t,e)};function WS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Mt(t,e,n):Im(t)(t,e)}const yb=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ft.update(e,n),stop:()=>ir(e),now:()=>qt.isProcessing?qt.timestamp:dn.now()}},jS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},ru=2e4;function Fm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<ru;)e+=n,i=t.next(e);return e>=ru?1/0:e}function Sb(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Fm(i),ru);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Yn(r)}}const Mb=5;function XS(t,e,n){const i=Math.max(e-Mb,0);return TS(n-t(i),e-i)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mf=.001;function Eb({duration:t=bt.duration,bounce:e=bt.bounce,velocity:n=bt.velocity,mass:i=bt.mass}){let r,s,o=1-e;o=Fi(bt.minDamping,bt.maxDamping,o),t=Fi(bt.minDuration,bt.maxDuration,Yn(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=fh(c,o),m=Math.exp(-d);return Mf-f/p*m},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),_=fh(Math.pow(c,2),o);return(-r(c)+Mf>0?-1:1)*((f-p)*m)/_}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Mf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=wb(r,s,a);if(t=di(t),isNaN(l))return{stiffness:bt.stiffness,damping:bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Tb=12;function wb(t,e,n){let i=n;for(let r=1;r<Tb;r++)i=i-t(i)/e(i);return i}function fh(t,e){return t*Math.sqrt(1-e*e)}const bb=["duration","bounce"],Ab=["stiffness","damping","mass"];function B0(t,e){return e.some(n=>t[n]!==void 0)}function Cb(t){let e={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...t};if(!B0(t,Ab)&&B0(t,bb))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Fi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:bt.mass,stiffness:r,damping:s}}else{const n=Eb({...t,velocity:0});e={...e,...n,mass:bt.mass},e.isResolvedFromDuration=!0}return e}function su(t=bt.visualDuration,e=bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Cb({...n,velocity:-Yn(n.velocity||0)}),m=f||0,_=c/(2*Math.sqrt(l*u)),g=o-s,h=Yn(Math.sqrt(l/u)),v=Math.abs(g)<5;i||(i=v?bt.restSpeed.granular:bt.restSpeed.default),r||(r=v?bt.restDelta.granular:bt.restDelta.default);let x;if(_<1){const M=fh(h,_);x=A=>{const C=Math.exp(-_*h*A);return o-C*((m+_*h*g)/M*Math.sin(M*A)+g*Math.cos(M*A))}}else if(_===1)x=M=>o-Math.exp(-h*M)*(g+(m+h*g)*M);else{const M=h*Math.sqrt(_*_-1);x=A=>{const C=Math.exp(-_*h*A),S=Math.min(M*A,300);return o-C*((m+_*h*g)*Math.sinh(S)+M*g*Math.cosh(S))/M}}const y={calculatedDuration:p&&d||null,next:M=>{const A=x(M);if(p)a.done=M>=d;else{let C=M===0?m:0;_<1&&(C=M===0?di(m):XS(x,M,A));const S=Math.abs(C)<=i,w=Math.abs(o-A)<=r;a.done=S&&w}return a.value=a.done?o:A,a},toString:()=>{const M=Math.min(Fm(y),ru),A=jS(C=>y.next(M*C).value,M,30);return M+"ms "+A},toTransition:()=>{}};return y}su.applyToOptions=t=>{const e=Sb(t,100,su);return t.ease=e.ease,t.duration=di(e.duration),t.type="keyframes",t};function dh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=S=>a!==void 0&&S<a||l!==void 0&&S>l,m=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let _=n*e;const g=d+_,h=o===void 0?g:o(g);h!==g&&(_=h-d);const v=S=>-_*Math.exp(-S/i),x=S=>h+v(S),y=S=>{const w=v(S),I=x(S);f.done=Math.abs(w)<=c,f.value=f.done?h:I};let M,A;const C=S=>{p(f.value)&&(M=S,A=su({keyframes:[f.value,m(f.value)],velocity:XS(x,S,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:S=>{let w=!1;return!A&&M===void 0&&(w=!0,y(S),C(S)),M!==void 0&&S>=M?A.next(S-M):(!w&&y(S),f)}}}function Rb(t,e,n){const i=[],r=n||nr.mix||WS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||qn:e;a=tl(l,a)}i.push(a)}return i}function YS(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(bm(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Rb(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Ha(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Fi(t[0],t[s-1],u)):c}function Pb(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ha(0,e,i);t.push(Mt(n,1,r))}}function Db(t){const e=[0];return Pb(e,t.length-1),e}function Lb(t,e){return t.map(n=>n*e)}function Ib(t,e){return t.map(()=>e||IS).splice(0,t.length-1)}function Sa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=jw(i)?i.map(I0):I0(i),s={done:!1,value:e[0]},o=Lb(n&&n.length===e.length?n:Db(e),t),a=YS(o,e,{ease:Array.isArray(r)?r:Ib(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Fb=t=>t!==null;function Nm(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Fb),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const Nb={decay:dh,inertia:dh,tween:Sa,keyframes:Sa,spring:su};function $S(t){typeof t.type=="string"&&(t.type=Nb[t.type])}class Um{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Ub=t=>t/100;class Lu extends Um{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==dn.now()&&this.tick(dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;$S(e);const{type:n=Sa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Sa;l!==Sa&&typeof a[0]!="number"&&(this.mixKeyframes=tl(Ub,WS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Fm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:m,onUpdate:_,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,y=i;if(d){const S=Math.min(this.currentTime,r)/a;let w=Math.floor(S),I=S%1;!I&&S>=1&&(I=1),I===1&&w--,w=Math.min(w,d+1),!!(w%2)&&(f==="reverse"?(I=1-I,p&&(I-=p/a)):f==="mirror"&&(y=o)),x=Fi(0,1,I)*a}const M=v?{done:!1,value:u[0]}:y.next(x);s&&(M.value=s(M.value));let{done:A}=M;!v&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&m!==dh&&(M.value=Nm(u,this.options,g,this.speed)),_&&_(M.value),C&&this.finish(),M}then(e,n){return this.finished.then(e,n)}get duration(){return Yn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Yn(e)}get time(){return Yn(this.currentTime)}set time(e){var n;e=di(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(dn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Yn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=yb,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Ob(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const cs=t=>t*180/Math.PI,hh=t=>{const e=cs(Math.atan2(t[1],t[0]));return ph(e)},kb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:hh,rotateZ:hh,skewX:t=>cs(Math.atan(t[1])),skewY:t=>cs(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},ph=t=>(t=t%360,t<0&&(t+=360),t),z0=hh,V0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),H0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Bb={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:V0,scaleY:H0,scale:t=>(V0(t)+H0(t))/2,rotateX:t=>ph(cs(Math.atan2(t[6],t[5]))),rotateY:t=>ph(cs(Math.atan2(-t[2],t[0]))),rotateZ:z0,rotate:z0,skewX:t=>cs(Math.atan(t[4])),skewY:t=>cs(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function mh(t){return t.includes("scale")?1:0}function gh(t,e){if(!t||t==="none")return mh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Bb,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=kb,r=a}if(!r)return mh(e);const s=i[e],o=r[1].split(",").map(Vb);return typeof s=="function"?s(o):o[s]}const zb=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return gh(n,e)};function Vb(t){return parseFloat(t.trim())}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zo=new Set(Bo),G0=t=>t===ko||t===Me,Hb=new Set(["x","y","z"]),Gb=Bo.filter(t=>!Hb.has(t));function Wb(t){const e=[];return Gb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Ar={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>gh(e,"x"),y:(t,{transform:e})=>gh(e,"y")};Ar.translateX=Ar.x;Ar.translateY=Ar.y;const ms=new Set;let vh=!1,xh=!1,_h=!1;function qS(){if(xh){const t=Array.from(ms).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Wb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}xh=!1,vh=!1,ms.forEach(t=>t.complete(_h)),ms.clear()}function KS(){ms.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(xh=!0)})}function jb(){_h=!0,KS(),qS(),_h=!1}class Om{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ms.add(this),vh||(vh=!0,ft.read(KS),ft.resolveKeyframes(qS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}Ob(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ms.delete(this)}cancel(){this.state==="scheduled"&&(ms.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Xb=t=>t.startsWith("--");function Yb(t,e,n){Xb(e)?t.style.setProperty(e,n):t.style[e]=n}const $b={};function ZS(t,e){const n=ES(t);return()=>$b[e]??n()}const qb=ZS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),QS=ZS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),la=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,W0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:la([0,.65,.55,1]),circOut:la([.55,0,1,.45]),backIn:la([.31,.01,.66,-.59]),backOut:la([.33,1.53,.69,.99])};function JS(t,e){if(t)return typeof t=="function"?QS()?jS(t,e):"ease-out":FS(t)?la(t):Array.isArray(t)?t.map(n=>JS(n,e)||W0.easeOut):W0[t]}function Kb(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=JS(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function eM(t){return typeof t=="function"&&"applyToOptions"in t}function Zb({type:t,...e}){return eM(t)&&QS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class tM extends Um{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,bm(typeof e.type!="string");const c=Zb(e);this.animation=Kb(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Nm(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),Yb(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Yn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Yn(e)}get time(){return Yn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=di(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&qb()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),qn):r(this)}}const nM={anticipate:PS,backInOut:RS,circInOut:LS};function Qb(t){return t in nM}function Jb(t){typeof t.ease=="string"&&Qb(t.ease)&&(t.ease=nM[t.ease])}const Ef=10;class eA extends tM{constructor(e){Jb(e),$S(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Lu({...o,autoplay:!1}),l=Math.max(Ef,dn.now()-this.startTime),c=Fi(0,Ef,l-Ef);n.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const j0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(hi.test(t)||t==="0")&&!t.startsWith("url("));function tA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function nA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=j0(r,e),a=j0(s,e);return!o||!a?!1:tA(t)||(n==="spring"||eM(n))&&i}function yh(t){t.duration=0,t.type="keyframes"}const iA=new Set(["opacity","clipPath","filter","transform"]),rA=ES(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sA(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((u=e==null?void 0:e.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return rA()&&n&&iA.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const oA=40;class aA extends Um{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var m;super(),this.stop=()=>{var _,g;this._animation&&(this._animation.stop(),(_=this.stopTimeline)==null||_.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=dn.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||Om;this.keyframeResolver=new p(a,(_,g,h)=>this.onKeyframesResolved(_,g,f,!h),l,c,u),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){var g,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=dn.now(),nA(e,s,o,a)||((nr.instantAnimations||!l)&&(u==null||u(Nm(e,i,n))),e[0]=e[e.length-1],yh(i),i.repeat=0);const f={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>oA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&sA(f),m=(h=(g=f.motionValue)==null?void 0:g.owner)==null?void 0:h.current,_=p?new eA({...f,element:m}):new Lu(f);_.finished.then(()=>{this.notifyFinished()}).catch(qn),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),jb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function iM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const lA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function cA(t){const e=lA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function rM(t,e,n=1){const[i,r]=cA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return yS(o)?parseFloat(o):o}return Pm(r)?rM(r,e,n+1):r}const uA={type:"spring",stiffness:500,damping:25,restSpeed:10},fA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),dA={type:"keyframes",duration:.8},hA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pA=(t,{keyframes:e})=>e.length>2?dA:zo.has(t)?t.startsWith("scale")?fA(e[1]):uA:hA,mA=t=>t!==null;function gA(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(mA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}function sM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function km(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?sM(n,t):n}function vA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Bm=(t,e,n,i={},r,s)=>o=>{const a=km(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-di(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};vA(a)||Object.assign(u,pA(t,u)),u.duration&&(u.duration=di(u.duration)),u.repeatDelay&&(u.repeatDelay=di(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(yh(u),u.delay===0&&(d=!0)),(nr.instantAnimations||nr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(d=!0,yh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=gA(u.keyframes,a);if(f!==void 0){ft.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new Lu(u):new aA(u)};function X0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function zm(t,e,n,i){if(typeof e=="function"){const[r,s]=X0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=X0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function _o(t,e,n){const i=t.getProps();return zm(i,e,n!==void 0?n:i.custom,t)}const oM=new Set(["width","height","top","left","right","bottom",...Bo]),Y0=30,xA=t=>!isNaN(parseFloat(t)),Ma={current:void 0};class _A{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=dn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Am);const i=this.events[e].add(n);return e==="change"?()=>{i(),ft.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ma.current&&Ma.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Y0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Y0);return TS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ms(t,e){return new _A(t,e)}const Sh=t=>Array.isArray(t);function yA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ms(n))}function SA(t){return Sh(t)?t[t.length-1]||0:t}function MA(t,e){const n=_o(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=SA(s[o]);yA(t,o,a)}}const jt=t=>!!(t&&t.getVelocity);function EA(t){return!!(jt(t)&&t.add)}function Mh(t,e){const n=t.getValue("willChange");if(EA(n))return n.add(e);if(!n&&nr.WillChange){const i=new nr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Vm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const TA="framerAppearId",aM="data-"+Vm(TA);function lM(t){return t.props[aM]}function wA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function cM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?sM(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f,t.latestValues[f]??null),m=a[f];if(m===void 0||d&&wA(d,f))continue;const _={delay:n,...km(s||{},f)},g=p.get();if(g!==void 0&&!p.isAnimating&&!Array.isArray(m)&&m===g&&!_.velocity)continue;let h=!1;if(window.MotionHandoffAnimation){const y=lM(t);if(y){const M=window.MotionHandoffAnimation(y,f,ft);M!==null&&(_.startTime=M,h=!0)}}Mh(t,f);const v=c??t.shouldReduceMotion;p.start(Bm(f,p,m,v&&oM.has(f)?{type:!1}:_,t,h));const x=p.animation;x&&u.push(x)}if(o){const f=()=>ft.update(()=>{o&&MA(t,o)});u.length?Promise.all(u).then(f):f()}return u}function Eh(t,e,n={}){var l;const i=_o(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(cM(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return bA(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function bA(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Eh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+iM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function AA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Eh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Eh(t,e,n);else{const r=typeof e=="function"?_o(t,e,n.custom):e;i=Promise.all(cM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const CA={test:t=>t==="auto",parse:t=>t},uM=t=>e=>e.test(t),fM=[ko,Me,Di,vr,rb,ib,CA],$0=t=>fM.find(uM(t));function RA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||MS(t):!0}const PA=new Set(["brightness","contrast","saturate","opacity"]);function DA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Dm)||[];if(!i)return t;const r=n.replace(i,"");let s=PA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const LA=/\b([a-z-]*)\(.*?\)/gu,Th={...hi,getAnimatableNone:t=>{const e=t.match(LA);return e?e.map(DA).join(" "):t}},wh={...hi,getAnimatableNone:t=>{const e=hi.parse(t);return hi.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},q0={...ko,transform:Math.round},IA={rotate:vr,rotateX:vr,rotateY:vr,rotateZ:vr,scale:Pl,scaleX:Pl,scaleY:Pl,scaleZ:Pl,skew:vr,skewX:vr,skewY:vr,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Ga,originX:N0,originY:N0,originZ:Me},Hm={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,inset:Me,insetBlock:Me,insetBlockStart:Me,insetBlockEnd:Me,insetInline:Me,insetInlineStart:Me,insetInlineEnd:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,paddingBlock:Me,paddingBlockStart:Me,paddingBlockEnd:Me,paddingInline:Me,paddingInlineStart:Me,paddingInlineEnd:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,marginBlock:Me,marginBlockStart:Me,marginBlockEnd:Me,marginInline:Me,marginInlineStart:Me,marginInlineEnd:Me,fontSize:Me,backgroundPositionX:Me,backgroundPositionY:Me,...IA,zIndex:q0,fillOpacity:Ga,strokeOpacity:Ga,numOctaves:q0},FA={...Hm,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:Th,WebkitFilter:Th,mask:wh,WebkitMask:wh},dM=t=>FA[t],NA=new Set([Th,wh]);function hM(t,e){let n=dM(t);return NA.has(n)||(n=hi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const UA=new Set(["auto","none","0"]);function OA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!UA.has(s)&&Wa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=hM(n,r)}class kA extends Om{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),Pm(d))){const f=rM(d,n.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!oM.has(i)||e.length!==2)return;const[r,s]=e,o=$0(r),a=$0(s),l=F0(r),c=F0(s);if(l!==c&&Ar[i]){this.needsMeasurement=!0;return}if(o!==a)if(G0(o)&&G0(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else Ar[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||RA(e[r]))&&i.push(r);i.length&&OA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ar[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Ar[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const BA=new Set(["opacity","clipPath","filter","transform"]);function Gm(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const pM=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function zA(t){return SS(t)&&"offsetHeight"in t}const{schedule:Wm}=NS(queueMicrotask,!1),ri={x:!1,y:!1};function mM(){return ri.x||ri.y}function VA(t){return t==="x"||t==="y"?ri[t]?null:(ri[t]=!0,()=>{ri[t]=!1}):ri.x||ri.y?null:(ri.x=ri.y=!0,()=>{ri.x=ri.y=!1})}function gM(t,e){const n=Gm(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function HA(t){return!(t.pointerType==="touch"||mM())}function GA(t,e,n={}){const[i,r,s]=gM(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),u()},f=g=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},_=g=>{if(!HA(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",_,r),o.addEventListener("pointerdown",p,r)}),s}const vM=(t,e)=>e?t===e?!0:vM(t,e.parentElement):!1,jm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,WA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jA(t){return WA.has(t.tagName)||t.isContentEditable===!0}const XA=new Set(["INPUT","SELECT","TEXTAREA"]);function YA(t){return XA.has(t.tagName)||t.isContentEditable===!0}const _c=new WeakSet;function K0(t){return e=>{e.key==="Enter"&&t(e)}}function Tf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const $A=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=K0(()=>{if(_c.has(n))return;Tf(n,"down");const r=K0(()=>{Tf(n,"up")}),s=()=>Tf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Z0(t){return jm(t)&&!mM()}const Q0=new WeakSet;function qA(t,e,n={}){const[i,r,s]=gM(t,n),o=a=>{const l=a.currentTarget;if(!Z0(a)||Q0.has(a))return;_c.add(l),n.stopPropagation&&Q0.add(a);const c=e(l,a),u=(p,m)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),_c.has(l)&&_c.delete(l),Z0(p)&&typeof c=="function"&&c(p,{success:m})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||vM(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),zA(a)&&(a.addEventListener("focus",c=>$A(c,r)),!jA(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Xm(t){return SS(t)&&"ownerSVGElement"in t}const yc=new WeakMap;let xr;const xM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Xm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],KA=xM("inline","width","offsetWidth"),ZA=xM("block","height","offsetHeight");function QA({target:t,borderBoxSize:e}){var n;(n=yc.get(t))==null||n.forEach(i=>{i(t,{get width(){return KA(t,e)},get height(){return ZA(t,e)}})})}function JA(t){t.forEach(QA)}function eC(){typeof ResizeObserver>"u"||(xr=new ResizeObserver(JA))}function tC(t,e){xr||eC();const n=Gm(t);return n.forEach(i=>{let r=yc.get(i);r||(r=new Set,yc.set(i,r)),r.add(e),xr==null||xr.observe(i)}),()=>{n.forEach(i=>{const r=yc.get(i);r==null||r.delete(e),r!=null&&r.size||xr==null||xr.unobserve(i)})}}const Sc=new Set;let oo;function nC(){oo=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Sc.forEach(e=>e(t))},window.addEventListener("resize",oo)}function iC(t){return Sc.add(t),oo||nC(),()=>{Sc.delete(t),!Sc.size&&typeof oo=="function"&&(window.removeEventListener("resize",oo),oo=void 0)}}function J0(t,e){return typeof t=="function"?iC(t):tC(t,e)}function rC(t){return Xm(t)&&t.tagName==="svg"}function sC(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=YS(r,s,o);return e?a(i):a}function oC(t,e,n={}){const i=t.get();let r=null,s=i,o;const a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,l=()=>{r&&(r.stop(),r=null)},c=()=>{l();const u=tv(t.get()),d=tv(s);u!==d&&(r=new Lu({keyframes:[u,d],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o}))};if(t.attach((u,d)=>{s=u,o=f=>d(ev(f,a)),ft.postRender(()=>{var f;c(),(f=t.events.animationStart)==null||f.notify(),r==null||r.then(()=>{var p;(p=t.events.animationComplete)==null||p.notify()})})},l),jt(e)){const u=e.on("change",f=>t.set(ev(f,a))),d=t.on("destroy",u);return()=>{u(),d()}}return l}function ev(t,e){return e?t+e:t}function tv(t){return typeof t=="number"?t:parseFloat(t)}const aC=[...fM,It,hi],lC=t=>aC.find(uM(t)),nv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ao=()=>({x:nv(),y:nv()}),iv=()=>({min:0,max:0}),Ut=()=>({x:iv(),y:iv()}),cC=new WeakMap;function Iu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ja(t){return typeof t=="string"||Array.isArray(t)}const Ym=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$m=["initial",...Ym];function Fu(t){return Iu(t.animate)||$m.some(e=>ja(t[e]))}function _M(t){return!!(Fu(t)||t.variants)}function uC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(jt(r))t.addValue(i,r);else if(jt(s))t.addValue(i,Ms(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ms(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const bh={current:null},yM={current:!1},fC=typeof window<"u";function dC(){if(yM.current=!0,!!fC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>bh.current=t.matches;t.addEventListener("change",e),e()}else bh.current=!1}const rv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ou={};function SM(t){ou=t}function hC(){return ou}class pC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Om,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=dn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ft.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Fu(n),this.isVariantNode=_M(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const m=f[p];c[p]!==void 0&&jt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,cC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(yM.current||dC(),this.shouldReduceMotion=bh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ir(this.notifyUpdate),ir(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&BA.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new tM({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:di(u)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=zo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ft.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ou){const n=ou[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<rv.length;i++){const r=rv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=uC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ms(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(yS(i)||MS(i))?i=parseFloat(i):!lC(i)&&hi.test(n)&&(i=hM(e,n)),this.setBaseTarget(e,jt(i)?i.get():i)),jt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=zm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!jt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Am),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Wm.render(this.render)}}class MM extends pC{constructor(){super(...arguments),this.KeyframeResolver=kA}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;jt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Wr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function EM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function mC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function gC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function wf(t){return t===void 0||t===1}function Ah({scale:t,scaleX:e,scaleY:n}){return!wf(t)||!wf(e)||!wf(n)}function ns(t){return Ah(t)||TM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function TM(t){return sv(t.x)||sv(t.y)}function sv(t){return t&&t!=="0%"}function au(t,e,n){const i=t-n,r=e*i;return n+r}function ov(t,e,n,i,r){return r!==void 0&&(t=au(t,r,i)),au(t,n,i)+e}function Ch(t,e=0,n=1,i,r){t.min=ov(t.min,e,n,i,r),t.max=ov(t.max,e,n,i,r)}function wM(t,{x:e,y:n}){Ch(t.x,e.translate,e.scale,e.originPoint),Ch(t.y,n.translate,n.scale,n.originPoint)}const av=.999999999999,lv=1.0000000000001;function vC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&co(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,wM(t,o)),i&&ns(s.latestValues)&&co(t,s.latestValues))}e.x<lv&&e.x>av&&(e.x=1),e.y<lv&&e.y>av&&(e.y=1)}function lo(t,e){t.min=t.min+e,t.max=t.max+e}function cv(t,e,n,i,r=.5){const s=Mt(t.min,t.max,r);Ch(t,e,n,s,i)}function uv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function co(t,e){cv(t.x,uv(e.x,t.x),e.scaleX,e.scale,e.originX),cv(t.y,uv(e.y,t.y),e.scaleY,e.scale,e.originY)}function bM(t,e){return EM(gC(t.getBoundingClientRect(),e))}function xC(t,e,n){const i=bM(t,n),{scroll:r}=e;return r&&(lo(i.x,r.offset.x),lo(i.y,r.offset.y)),i}const _C={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yC=Bo.length;function SC(t,e,n){let i="",r=!0;for(let s=0;s<yC;s++){const o=Bo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=pM(a,Hm[o]);if(!l){r=!1;const u=_C[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function qm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(zo.has(l)){o=!0;continue}else if(OS(l)){r[l]=c;continue}else{const u=pM(c,Hm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=SC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function AM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function fv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=fv(t,e.target.x),i=fv(t,e.target.y);return`${n}% ${i}%`}},MC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=hi.parse(t);if(r.length>5)return i;const s=hi.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Rh={borderRadius:{...Ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ko,borderTopRightRadius:Ko,borderBottomLeftRadius:Ko,borderBottomRightRadius:Ko,boxShadow:MC};function CM(t,{layout:e,layoutId:n}){return zo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Rh[t]||t==="opacity")}function Km(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(jt(i[a])||r&&jt(r[a])||CM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function EC(t){return window.getComputedStyle(t)}class TC extends MM{constructor(){super(...arguments),this.type="html",this.renderInstance=AM}readValueFromInstance(e,n){var i;if(zo.has(n))return(i=this.projection)!=null&&i.isProjecting?mh(n):zb(e,n);{const r=EC(e),s=(OS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return bM(e,n)}build(e,n,i){qm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Km(e,n,i)}}const wC={offset:"stroke-dashoffset",array:"stroke-dasharray"},bC={offset:"strokeDashoffset",array:"strokeDasharray"};function AC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?wC:bC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const CC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function RM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(qm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox);for(const p of CC)d[p]!==void 0&&(f[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&AC(d,r,s,o,!1)}const PM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),DM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function RC(t,e,n,i){AM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(PM.has(r)?r:Vm(r),e.attrs[r])}function LM(t,e,n){const i=Km(t,e,n);for(const r in t)if(jt(t[r])||jt(e[r])){const s=Bo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class PC extends MM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ut}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(zo.has(n)){const i=dM(n);return i&&i.default||0}return n=PM.has(n)?n:Vm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return LM(e,n,i)}build(e,n,i){RM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){RC(e,n,i,r)}mount(e){this.isSVGTag=DM(e.tagName),super.mount(e)}}const DC=$m.length;function IM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?IM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<DC;n++){const i=$m[n],r=t.props[i];(ja(r)||r===!1)&&(e[i]=r)}return e}function FM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const LC=[...Ym].reverse(),IC=Ym.length;function FC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>AA(t,n,i)))}function NC(t){let e=FC(t),n=dv(),i=!0,r=!1;const s=c=>(u,d)=>{var p;const f=_o(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:m,transitionEnd:_,...g}=f;u={...u,...g,..._}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,d=IM(t.parent)||{},f=[],p=new Set;let m={},_=1/0;for(let h=0;h<IC;h++){const v=LC[h],x=n[v],y=u[v]!==void 0?u[v]:d[v],M=ja(y),A=v===c?x.isActive:null;A===!1&&(_=h);let C=y===d[v]&&y!==u[v]&&M;if(C&&(i||r)&&t.manuallyAnimateOnMount&&(C=!1),x.protectedKeys={...m},!x.isActive&&A===null||!y&&!x.prevProp||Iu(y)||typeof y=="boolean")continue;if(v==="exit"&&x.isActive&&A!==!0){x.prevResolvedValues&&(m={...m,...x.prevResolvedValues});continue}const S=UC(x.prevProp,y);let w=S||v===c&&x.isActive&&!C&&M||h>_&&M,I=!1;const P=Array.isArray(y)?y:[y];let z=P.reduce(s(v),{});A===!1&&(z={});const{prevResolvedValues:G={}}=x,j={...G,...z},V=D=>{w=!0,p.has(D)&&(I=!0,p.delete(D)),x.needsAnimating[D]=!0;const F=t.getValue(D);F&&(F.liveStyle=!1)};for(const D in j){const F=z[D],$=G[D];if(m.hasOwnProperty(D))continue;let J=!1;Sh(F)&&Sh($)?J=!FM(F,$):J=F!==$,J?F!=null?V(D):p.add(D):F!==void 0&&p.has(D)?V(D):x.protectedKeys[D]=!0}x.prevProp=y,x.prevResolvedValues=z,x.isActive&&(m={...m,...z}),(i||r)&&t.blockInitialAnimation&&(w=!1);const W=C&&S;w&&(!W||I)&&f.push(...P.map(D=>{const F={type:v};if(typeof D=="string"&&(i||r)&&!W&&t.manuallyAnimateOnMount&&t.parent){const{parent:$}=t,J=_o($,D);if($.enteringChildren&&J){const{delayChildren:te}=J.transition||{};F.delay=iM($.enteringChildren,t,te)}}return{animation:D,options:F}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const v=_o(t,Array.isArray(u.initial)?u.initial[0]:u.initial);v&&v.transition&&(h.transition=v.transition)}p.forEach(v=>{const x=t.getBaseTarget(v),y=t.getValue(v);y&&(y.liveStyle=!0),h[v]=x??null}),f.push({animation:h})}let g=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(f):Promise.resolve()}function l(c,u){var f;if(n[c].isActive===u)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,u)}),n[c].isActive=u;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=dv(),r=!0}}}function UC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!FM(e,t):!1}function Yr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dv(){return{animate:Yr(!0),whileInView:Yr(),whileHover:Yr(),whileTap:Yr(),whileDrag:Yr(),whileFocus:Yr(),exit:Yr()}}function hv(t,e){t.min=e.min,t.max=e.max}function ei(t,e){hv(t.x,e.x),hv(t.y,e.y)}function pv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const NM=1e-4,OC=1-NM,kC=1+NM,UM=.01,BC=0-UM,zC=0+UM;function hn(t){return t.max-t.min}function VC(t,e,n){return Math.abs(t-e)<=n}function mv(t,e,n,i=.5){t.origin=i,t.originPoint=Mt(e.min,e.max,t.origin),t.scale=hn(n)/hn(e),t.translate=Mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=OC&&t.scale<=kC||isNaN(t.scale))&&(t.scale=1),(t.translate>=BC&&t.translate<=zC||isNaN(t.translate))&&(t.translate=0)}function Ea(t,e,n,i){mv(t.x,e.x,n.x,i?i.originX:void 0),mv(t.y,e.y,n.y,i?i.originY:void 0)}function gv(t,e,n){t.min=n.min+e.min,t.max=t.min+hn(e)}function HC(t,e,n){gv(t.x,e.x,n.x),gv(t.y,e.y,n.y)}function vv(t,e,n){t.min=e.min-n.min,t.max=t.min+hn(e)}function lu(t,e,n){vv(t.x,e.x,n.x),vv(t.y,e.y,n.y)}function xv(t,e,n,i,r){return t-=e,t=au(t,1/n,i),r!==void 0&&(t=au(t,1/r,i)),t}function GC(t,e=0,n=1,i=.5,r,s=t,o=t){if(Di.test(e)&&(e=parseFloat(e),e=Mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Mt(s.min,s.max,i);t===s&&(a-=e),t.min=xv(t.min,e,n,a,r),t.max=xv(t.max,e,n,a,r)}function _v(t,e,[n,i,r],s,o){GC(t,e[n],e[i],e[r],e.scale,s,o)}const WC=["x","scaleX","originX"],jC=["y","scaleY","originY"];function yv(t,e,n,i){_v(t.x,e,WC,n?n.x:void 0,i?i.x:void 0),_v(t.y,e,jC,n?n.y:void 0,i?i.y:void 0)}function Sv(t){return t.translate===0&&t.scale===1}function OM(t){return Sv(t.x)&&Sv(t.y)}function Mv(t,e){return t.min===e.min&&t.max===e.max}function XC(t,e){return Mv(t.x,e.x)&&Mv(t.y,e.y)}function Ev(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function kM(t,e){return Ev(t.x,e.x)&&Ev(t.y,e.y)}function Tv(t){return hn(t.x)/hn(t.y)}function wv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Mi(t){return[t("x"),t("y")]}function YC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:m}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const BM=["TopLeft","TopRight","BottomLeft","BottomRight"],$C=BM.length,bv=t=>typeof t=="string"?parseFloat(t):t,Av=t=>typeof t=="number"||Me.test(t);function qC(t,e,n,i,r,s){r?(t.opacity=Mt(0,n.opacity??1,KC(i)),t.opacityExit=Mt(e.opacity??1,0,ZC(i))):s&&(t.opacity=Mt(e.opacity??1,n.opacity??1,i));for(let o=0;o<$C;o++){const a=`border${BM[o]}Radius`;let l=Cv(e,a),c=Cv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Av(l)===Av(c)?(t[a]=Math.max(Mt(bv(l),bv(c),i),0),(Di.test(c)||Di.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Mt(e.rotate||0,n.rotate||0,i))}function Cv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const KC=zM(0,.5,DS),ZC=zM(.5,.95,qn);function zM(t,e,n){return i=>i<t?0:i>e?1:n(Ha(t,e,i))}function QC(t,e,n){const i=jt(t)?t:Ms(t);return i.start(Bm("",i,e,n)),i.animation}function Xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const JC=(t,e)=>t.depth-e.depth;class eR{constructor(){this.children=[],this.isDirty=!1}add(e){wm(this.children,e),this.isDirty=!0}remove(e){nu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JC),this.isDirty=!1,this.children.forEach(e)}}function tR(t,e){const n=dn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ir(i),t(s-e))};return ft.setup(i,!0),()=>ir(i)}function Mc(t){return jt(t)?t.get():t}class nR{constructor(){this.members=[]}add(e){wm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(nu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(nu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ec={hasAnimatedSinceResize:!0,hasEverUpdated:!1},bf=["","X","Y","Z"],iR=1e3;let rR=0;function Af(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function VM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=lM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ft,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&VM(i)}function HM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=rR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aR),this.nodes.forEach(fR),this.nodes.forEach(dR),this.nodes.forEach(lR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new eR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Am),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Xm(o)&&!rC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;ft.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=tR(f,250),Ec.hasAnimatedSinceResize&&(Ec.hasAnimatedSinceResize=!1,this.nodes.forEach(Dv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||vR,{onLayoutAnimationStart:_,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!kM(this.targetLayout,p),v=!d&&f;if(this.options.layoutRoot||this.resumeFrom||v||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...km(m,"layout"),onPlay:_,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(u,v)}else d||Dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&VM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Pv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(uR),this.nodes.forEach(sR),this.nodes.forEach(oR)):this.nodes.forEach(Pv),this.clearAllSnapshots();const a=dn.now();qt.delta=Fi(0,1e3/60,a-qt.timestamp),qt.timestamp=a,qt.isProcessing=!0,xf.update.process(qt),xf.preRender.process(qt),xf.render.process(qt),qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cR),this.sharedNodes.forEach(pR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!hn(this.snapshot.measuredBox.x)&&!hn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ut(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!OM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||ns(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),xR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ut();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(_R))){const{scroll:u}=this.root;u&&(lo(a.x,u.offset.x),lo(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Ut();if(ei(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&ei(a,o),lo(a.x,d.offset.x),lo(a.y,d.offset.y))}return a}applyTransform(o,a=!1){const l=Ut();ei(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&co(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ns(u.latestValues)&&co(l,u.latestValues)}return ns(this.latestValues)&&co(l,this.latestValues),l}removeTransform(o){const a=Ut();ei(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ns(c.latestValues))continue;Ah(c.latestValues)&&c.updateSnapshot();const u=Ut(),d=c.measurePageBox();ei(u,d),yv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ns(this.latestValues)&&yv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=qt.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ei(this.target,this.layout.layoutBox),wM(this.target,this.targetDelta)):ei(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ah(this.parent.latestValues)||TM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),lu(this.relativeTargetOrigin,a,l),ei(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===qt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;ei(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;vC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ut());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pv(this.prevProjectionDelta.x,this.projectionDelta.x),pv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ea(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!wv(this.projectionDelta.x,this.prevProjectionDelta.x)||!wv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ao(),this.projectionDelta=ao(),this.projectionDeltaWithTransform=ao()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=ao();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Ut(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,_=p!==m,g=this.getStack(),h=!g||g.members.length<=1,v=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(gR));this.animationProgress=0;let x;this.mixTargetDelta=y=>{const M=y/1e3;Lv(d.x,o.x,M),Lv(d.y,o.y,M),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lu(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mR(this.relativeTarget,this.relativeTargetOrigin,f,M),x&&XC(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ut()),ei(x,this.relativeTarget)),_&&(this.animationValues=u,qC(u,c,this.latestValues,M,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update(()=>{Ec.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ms(0)),this.motionValue.jump(0,!1),this.currentAnimation=QC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(iR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&GM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ut();const d=hn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=hn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}ei(a,l),co(a,u),Ea(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new nR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Af("z",o,c,this.animationValues);for(let u=0;u<bf.length;u++)Af(`rotate${bf[u]}`,o,c,this.animationValues),Af(`skew${bf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Mc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ns(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=YC(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in Rh){if(u[m]===void 0)continue;const{correct:_,applyTo:g,isCSSVariable:h}=Rh[m],v=d==="none"?u[m]:_(u[m],c);if(g){const x=g.length;for(let y=0;y<x;y++)o[g[y]]=v}else h?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=c===this?Mc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Rv),this.root.sharedNodes.clear()}}}function sR(t){t.updateLayout()}function oR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Mi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=hn(f);f.min=i[d].min,f.max=f.min+p}):GM(s,e.layoutBox,i)&&Mi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=hn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=ao();Ea(a,i,e.layoutBox);const l=ao();o?Ea(l,t.applyTransform(r,!0),e.measuredBox):Ea(l,i,e.layoutBox);const c=!OM(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const m=Ut();lu(m,e.layoutBox,f.layoutBox);const _=Ut();lu(_,i,p.layoutBox),kM(m,_)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function aR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cR(t){t.clearSnapshot()}function Rv(t){t.clearMeasurements()}function Pv(t){t.isLayoutDirty=!1}function uR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Dv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function fR(t){t.resolveTargetDelta()}function dR(t){t.calcProjection()}function hR(t){t.resetSkewAndRotation()}function pR(t){t.removeLeadSnapshot()}function Lv(t,e,n){t.translate=Mt(e.translate,0,n),t.scale=Mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Iv(t,e,n,i){t.min=Mt(e.min,n.min,i),t.max=Mt(e.max,n.max,i)}function mR(t,e,n,i){Iv(t.x,e.x,n.x,i),Iv(t.y,e.y,n.y,i)}function gR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const vR={duration:.45,ease:[.4,0,.1,1]},Fv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Nv=Fv("applewebkit/")&&!Fv("chrome/")?Math.round:qn;function Uv(t){t.min=Nv(t.min),t.max=Nv(t.max)}function xR(t){Uv(t.x),Uv(t.y)}function GM(t,e,n){return t==="position"||t==="preserve-aspect"&&!VC(Tv(e),Tv(n),.2)}function _R(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const yR=HM({attachResizeListener:(t,e)=>Xa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Cf={current:void 0},WM=HM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Cf.current){const t=new yR({});t.mount(window),t.setOptions({layoutScroll:!0}),Cf.current=t}return Cf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Nu=B.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function SR(t=!0){const e=B.useContext(Tm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=B.useId();B.useEffect(()=>{if(t)return r(s)},[t]);const o=B.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const jM=B.createContext({strict:!1}),Ov={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kv=!1;function MR(){if(kv)return;const t={};for(const e in Ov)t[e]={isEnabled:n=>Ov[e].some(i=>!!n[i])};SM(t),kv=!0}function XM(){return MR(),hC()}function ER(t){const e=XM();for(const n in t)e[n]={...e[n],...t[n]};SM(e)}const TR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function cu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||TR.has(t)}let YM=t=>!cu(t);function wR(t){typeof t=="function"&&(YM=e=>e.startsWith("on")?!cu(e):t(e))}try{wR(require("@emotion/is-prop-valid").default)}catch{}function bR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(YM(r)||n===!0&&cu(r)||!e&&!cu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Uu=B.createContext({});function AR(t,e){if(Fu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(i)?i:void 0}}return t.inherit!==!1?e:{}}function CR(t){const{initial:e,animate:n}=AR(t,B.useContext(Uu));return B.useMemo(()=>({initial:e,animate:n}),[Bv(e),Bv(n)])}function Bv(t){return Array.isArray(t)?t.join(" "):t}const Zm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $M(t,e,n){for(const i in e)!jt(e[i])&&!CM(i,n)&&(t[i]=e[i])}function RR({transformTemplate:t},e){return B.useMemo(()=>{const n=Zm();return qm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function PR(t,e){const n=t.style||{},i={};return $M(i,n,t),Object.assign(i,RR(t,e)),i}function DR(t,e){const n={},i=PR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const qM=()=>({...Zm(),attrs:{}});function LR(t,e,n,i){const r=B.useMemo(()=>{const s=qM();return RM(s,e,DM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};$M(s,t.style,t),r.style={...s,...r.style}}return r}const IR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qm(t){return typeof t!="string"||t.includes("-")?!1:!!(IR.indexOf(t)>-1||/[A-Z]/u.test(t))}function FR(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Qm(t)?LR:DR)(e,i,r,t),c=bR(e,typeof t=="string",s),u=t!==B.Fragment?{...c,...l,ref:n}:{},{children:d}=e,f=B.useMemo(()=>jt(d)?d.get():d,[d]);return B.createElement(t,{...u,children:f})}function NR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:UR(n,i,r,t),renderState:e()}}function UR(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Mc(s[f]);let{initial:o,animate:a}=t;const l=Fu(t),c=_M(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Iu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const m=zm(t,f[p]);if(m){const{transitionEnd:_,transition:g,...h}=m;for(const v in h){let x=h[v];if(Array.isArray(x)){const y=u?x.length-1:0;x=x[y]}x!==null&&(r[v]=x)}for(const v in _)r[v]=_[v]}}}return r}const KM=t=>(e,n)=>{const i=B.useContext(Uu),r=B.useContext(Tm),s=()=>NR(t,e,i,r);return n?s():Em(s)},OR=KM({scrapeMotionValuesFromProps:Km,createRenderState:Zm}),kR=KM({scrapeMotionValuesFromProps:LM,createRenderState:qM}),BR=Symbol.for("motionComponentSymbol");function zR(t,e,n){const i=B.useRef(n);B.useInsertionEffect(()=>{i.current=n});const r=B.useRef(null);return B.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const ZM=B.createContext({});function Ws(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function VR(t,e,n,i,r,s){var x,y;const{visualElement:o}=B.useContext(Uu),a=B.useContext(jM),l=B.useContext(Tm),c=B.useContext(Nu),u=c.reducedMotion,d=c.skipAnimations,f=B.useRef(null),p=B.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const m=f.current,_=B.useContext(ZM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&HR(f.current,n,r,_);const g=B.useRef(!1);B.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[aM],v=B.useRef(!!h&&typeof window<"u"&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,h))&&((y=window.MotionHasOptimisedAnimation)==null?void 0:y.call(window,h)));return _S(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),B.useEffect(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,h)}),v.current=!1),m.enteringChildren=void 0)}),m}function HR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:QM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ws(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function QM(t){if(t)return t.options.allowProjection!==!1?t.projection:QM(t.parent)}function Rf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&ER(i);const s=n?n==="svg":Qm(t),o=s?kR:OR;function a(c,u){let d;const f={...B.useContext(Nu),...c,layoutId:GR(c)},{isStatic:p}=f,m=CR(c),_=o(c,p);if(!p&&typeof window<"u"){WR();const g=jR(f);d=g.MeasureLayout,m.visualElement=VR(t,_,f,r,g.ProjectionNode,s)}return T.jsxs(Uu.Provider,{value:m,children:[d&&m.visualElement?T.jsx(d,{visualElement:m.visualElement,...f}):null,FR(t,c,zR(_,m.visualElement,u),_,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=B.forwardRef(a);return l[BR]=t,l}function GR({layoutId:t}){const e=B.useContext(xS).id;return e&&t!==void 0?e+"-"+t:t}function WR(t,e){B.useContext(jM).strict}function jR(t){const e=XM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function XR(t,e){if(typeof Proxy>"u")return Rf;const n=new Map,i=(s,o)=>Rf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Rf(o,void 0,t,e)),n.get(o))})}const YR=(t,e)=>e.isSVG??Qm(t)?new PC(e):new TC(e,{allowProjection:t!==B.Fragment});class $R extends Wr{constructor(e){super(e),e.animationState||(e.animationState=NC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Iu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let qR=0;class KR extends Wr{constructor(){super(...arguments),this.id=qR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ZR={animation:{Feature:$R},exit:{Feature:KR}};function rl(t){return{point:{x:t.pageX,y:t.pageY}}}const QR=t=>e=>jm(e)&&t(e,rl(e));function Ta(t,e,n,i){return Xa(t,e,QR(n),i)}const JM=({current:t})=>t?t.ownerDocument.defaultView:null,zv=(t,e)=>Math.abs(t-e);function JR(t,e){const n=zv(t.x,e.x),i=zv(t.y,e.y);return Math.sqrt(n**2+i**2)}const Vv=new Set(["auto","scroll"]);class eE{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Df(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,_=JR(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!_)return;const{point:g}=p,{timestamp:h}=qt;this.history.push({...g,timestamp:h});const{onStart:v,onMove:x}=this.handlers;m||(v&&v(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,p)},this.handlePointerMove=(p,m)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Pf(m,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(p,m)=>{this.end();const{onEnd:_,onSessionEnd:g,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Df(p.type==="pointercancel"?this.lastMoveEventInfo:Pf(m,this.transformPagePoint),this.history);this.startEvent&&_&&_(p,v),g&&g(p,v)},!jm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=rl(e),c=Pf(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=qt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,Df(c,this.history)),this.removeListeners=tl(Ta(this.contextWindow,"pointermove",this.handlePointerMove),Ta(this.contextWindow,"pointerup",this.handlePointerUp),Ta(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Vv.has(i.overflowX)||Vv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),ft.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ir(this.updatePoint)}}function Pf(t,e){return e?{point:e(t.point)}:t}function Hv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Df({point:t},e){return{point:t,delta:Hv(t,tE(e)),offset:Hv(t,e2(e)),velocity:t2(e,.1)}}function e2(t){return t[0]}function tE(t){return t[t.length-1]}function t2(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=tE(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>di(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>di(e)*2&&(i=t[1]);const s=Yn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function n2(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Mt(n,t,i.max):Math.min(t,n)),t}function Gv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function i2(t,{top:e,left:n,bottom:i,right:r}){return{x:Gv(t.x,n,r),y:Gv(t.y,e,i)}}function Wv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function r2(t,e){return{x:Wv(t.x,e.x),y:Wv(t.y,e.y)}}function s2(t,e){let n=.5;const i=hn(t),r=hn(e);return r>i?n=Ha(e.min,e.max-i,t.min):i>r&&(n=Ha(t.min,t.max-r,e.min)),Fi(0,1,n)}function o2(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ph=.35;function a2(t=Ph){return t===!1?t=0:t===!0&&(t=Ph),{x:jv(t,"left","right"),y:jv(t,"top","bottom")}}function jv(t,e,n){return{min:Xv(t,e),max:Xv(t,n)}}function Xv(t,e){return typeof t=="number"?t:t[e]||0}const l2=new WeakMap;class c2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(rl(d).point),this.stopAnimation()},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:_}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VA(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mi(h=>{let v=this.getAxisMotionValue(h).get()||0;if(Di.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const y=x.layout.layoutBox[h];y&&(v=hn(y)*(parseFloat(v)/100))}}this.originPoint[h]=v}),_&&ft.update(()=>_(d,f),!1,!0),Mh(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:_,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(m&&this.currentDirection===null){this.currentDirection=f2(h),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),g&&ft.update(()=>g(d,f),!1,!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new eE(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:JM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ft.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Dl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=n2(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Ws(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=i2(i.layoutBox,e):this.constraints=!1,this.elastic=a2(n),r!==this.constraints&&!Ws(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Mi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=o2(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ws(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=xC(i,r.root,this.visualElement.getTransformPagePoint());let o=r2(r.layout.layoutBox,s);if(n){const a=n(mC(o));this.hasMutatedConstraints=!!a,a&&(o=EM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Mi(u=>{if(!Dl(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Mh(this.visualElement,e),i.start(Bm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Mi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Mi(n=>{const{drag:i}=this.getProps();if(!Dl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-Mt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ws(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Mi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=s2({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Mi(o=>{if(!Dl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Mt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;l2.set(this.visualElement,this);const e=this.visualElement.current,n=Ta(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=c.target,p=f!==e&&YA(f);u&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Ws(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=u2(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ft.read(r);const a=Xa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Mi(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Ph,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Yv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function u2(t,e,n){const i=J0(t,Yv(n)),r=J0(e,Yv(n));return()=>{i(),r()}}function Dl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function f2(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class d2 extends Wr{constructor(e){super(e),this.removeGroupControls=qn,this.removeListeners=qn,this.controls=new c2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Lf=t=>(e,n)=>{t&&ft.update(()=>t(e,n),!1,!0)};class h2 extends Wr{constructor(){super(...arguments),this.removePointerDownListener=qn}onPointerDown(e){this.session=new eE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:JM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Lf(e),onStart:Lf(n),onMove:Lf(i),onEnd:(s,o)=>{delete this.session,r&&ft.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ta(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let If=!1;class p2 extends B.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),If&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ec.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),If=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ft.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Wm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;If=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nE(t){const[e,n]=SR(),i=B.useContext(xS);return T.jsx(p2,{...t,layoutGroup:i,switchLayoutGroup:B.useContext(ZM),isPresent:e,safeToRemove:n})}const m2={pan:{Feature:h2},drag:{Feature:d2,ProjectionNode:WM,MeasureLayout:nE}};function $v(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ft.postRender(()=>s(e,rl(e)))}class g2 extends Wr{mount(){const{current:e}=this.node;e&&(this.unmount=GA(e,(n,i)=>($v(this.node,i,"Start"),r=>$v(this.node,r,"End"))))}unmount(){}}class v2 extends Wr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tl(Xa(this.node.current,"focus",()=>this.onFocus()),Xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ft.postRender(()=>s(e,rl(e)))}class x2 extends Wr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=qA(e,(r,s)=>(qv(this.node,s,"Start"),(o,{success:a})=>qv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Dh=new WeakMap,Ff=new WeakMap,_2=t=>{const e=Dh.get(t.target);e&&e(t)},y2=t=>{t.forEach(_2)};function S2({root:t,...e}){const n=t||document;Ff.has(n)||Ff.set(n,{});const i=Ff.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(y2,{root:t,...e})),i[r]}function M2(t,e,n){const i=S2(e);return Dh.set(t,n),i.observe(t),()=>{Dh.delete(t),i.unobserve(t)}}const E2={some:0,all:1};class T2 extends Wr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:E2[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return M2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(w2(e,n))&&this.startObserver()}unmount(){}}function w2({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const b2={inView:{Feature:T2},tap:{Feature:x2},focus:{Feature:v2},hover:{Feature:g2}},A2={layout:{ProjectionNode:WM,MeasureLayout:nE}},C2={...ZR,...b2,...m2,...A2},uo=XR(C2,YR);function us(t){const e=Em(()=>Ms(t)),{isStatic:n}=B.useContext(Nu);if(n){const[,i]=B.useState(t);B.useEffect(()=>e.on("change",i),[])}return e}function iE(t,e){const n=us(e()),i=()=>n.set(e());return i(),_S(()=>{const r=()=>ft.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),ir(i)}}),n}function R2(t){Ma.current=[],t();const e=iE(Ma.current,t);return Ma.current=void 0,e}function P2(t,e,n,i){if(typeof t=="function")return R2(t);const s=sC(e,n,i),o=Array.isArray(t)?Kv(t,s):Kv([t],([l])=>s(l)),a=Array.isArray(t)?void 0:t.accelerate;return a&&!a.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(o.accelerate={...a,times:e,keyframes:n,isTransformed:!0}),o}function Kv(t,e){const n=Em(()=>[]);return iE(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function D2(t,e={}){const{isStatic:n}=B.useContext(Nu),i=()=>jt(t)?t.get():t;if(n)return P2(i);const r=us(i());return B.useInsertionEffect(()=>oC(r,t,e),[r,JSON.stringify(e)]),r}function js(t,e={}){return D2(t,{type:"spring",...e})}const L2={some:0,all:1};function I2(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Gm(t),o=new WeakMap,a=c=>{c.forEach(u=>{const d=o.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const f=e(u.target,u);typeof f=="function"?o.set(u.target,f):l.unobserve(u.target)}else typeof d=="function"&&(d(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:L2[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function F2(t,{root:e,margin:n,amount:i,once:r=!1,initial:s=!1}={}){const[o,a]=B.useState(s);return B.useEffect(()=>{if(!t.current||r&&o)return;const l=()=>(a(!0),r?void 0:()=>a(!1)),c={root:e&&e.current||void 0,margin:n,amount:i};return I2(t.current,l,c)},[e,t,n,r,i]),o}const Zv={wrapper:{display:"inline-block",whiteSpace:"pre-wrap"},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",border:0}};function Qv({text:t,speed:e=50,maxIterations:n=10,sequential:i=!1,revealDirection:r="start",useOriginalCharsOnly:s=!1,characters:o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",className:a="",parentClassName:l="",encryptedClassName:c="",animateOn:u="hover",style:d={},...f}){const[p,m]=B.useState(t),[_,g]=B.useState(!1),[h,v]=B.useState(!1),[x,y]=B.useState(new Set),[M,A]=B.useState(!1),C=B.useRef(null);B.useEffect(()=>{let w,I=0;const P=j=>{const V=t.length;switch(r){case"start":return j.size;case"end":return V-1-j.size;case"center":{const W=Math.floor(V/2),O=Math.floor(j.size/2),D=j.size%2===0?W+O:W-O-1;if(D>=0&&D<V&&!j.has(D))return D;for(let F=0;F<V;F++)if(!j.has(F))return F;return 0}default:return j.size}},z=s?Array.from(new Set(t.split(""))).filter(j=>j!==" "):o.split(""),G=(j,V)=>{if(s){const W=j.split("").map((F,$)=>({char:F,isSpace:F===" ",index:$,isRevealed:V.has($)})),O=W.filter(F=>!F.isSpace&&!F.isRevealed).map(F=>F.char);for(let F=O.length-1;F>0;F--){const $=Math.floor(Math.random()*(F+1));[O[F],O[$]]=[O[$],O[F]]}let D=0;return W.map(F=>F.isSpace?" ":F.isRevealed?j[F.index]:O[D++]).join("")}else return j.split("").map((W,O)=>W===" "?" ":V.has(O)?j[O]:z[Math.floor(Math.random()*z.length)]).join("")};return _?(v(!0),w=setInterval(()=>{y(j=>{if(i)if(j.size<t.length){const V=P(j),W=new Set(j);return W.add(V),m(G(t,W)),W}else return clearInterval(w),v(!1),j;else return m(G(t,j)),I++,I>=n&&(clearInterval(w),v(!1),m(t)),j})},e)):(m(t),y(new Set),v(!1)),()=>{w&&clearInterval(w)}},[_,t,e,n,i,r,o,s]),B.useEffect(()=>{if(u!=="view"&&u!=="both")return;const w=z=>{z.forEach(G=>{G.isIntersecting&&!M&&(g(!0),A(!0))})},I=new IntersectionObserver(w,{root:null,rootMargin:"0px",threshold:.1}),P=C.current;return P&&I.observe(P),()=>{P&&I.unobserve(P)}},[u,M]);const S=u==="hover"||u==="both"?{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)}:{};return T.jsxs(uo.span,{ref:C,style:{...Zv.wrapper,...d},className:l,...S,...f,children:[T.jsx("span",{style:Zv.srOnly,children:p}),T.jsx("span",{"aria-hidden":"true",children:p.split("").map((w,I)=>{const P=x.has(I)||!h||!_;return T.jsx("span",{className:P?a:c,children:w},I)})})]})}const Lh=({children:t,padding:e=100,disabled:n=!1,magnetStrength:i=2,activeTransition:r="transform 0.3s ease-out",inactiveTransition:s="transform 0.5s ease-in-out",wrapperClassName:o="",innerClassName:a="",...l})=>{const[c,u]=B.useState(!1),[d,f]=B.useState({x:0,y:0}),p=B.useRef(null);B.useEffect(()=>{if(n){f({x:0,y:0});return}const _=g=>{if(!p.current)return;const{left:h,top:v,width:x,height:y}=p.current.getBoundingClientRect(),M=h+x/2,A=v+y/2,C=Math.abs(M-g.clientX),S=Math.abs(A-g.clientY);if(C<x/2+e&&S<y/2+e){u(!0);const w=(g.clientX-M)/i,I=(g.clientY-A)/i;f({x:w,y:I})}else u(!1),f({x:0,y:0})};return window.addEventListener("mousemove",_),()=>window.removeEventListener("mousemove",_)},[e,n,i]);const m=c?r:s;return T.jsx("div",{ref:p,className:o,style:{position:"relative",display:"inline-block"},...l,children:T.jsx("div",{className:a,style:{transform:`translate3d(${d.x}px, ${d.y}px, 0)`,transition:m,willChange:"transform"},children:t})})},Ei={firstName:"ADITYA",lastName:"SRIVASTAVA",fullName:"Aditya Srivastava",backgroundText:"PSYODRZ",github:"Psyodrz",githubUrl:"https://github.com/Psyodrz",location:"Based in India",availability:"Open to US Remote",education:"B.Tech CSE | MUIT | 2023–2027"},Jv=["GAME DEVELOPER","AI ENGINEER","FULL-STACK DEV","CREATIVE CODER","HORROR LOVER","VISUAL BUILDER"],bi={projects:25,domains:4,yearsExp:3,liveProjects:10,techMastered:10,heroRepos:19,heroDomains:4,heroYears:2},Ih={hero:"Building immersive games, intelligent AI tools, and full-stack web apps. Horror obsessed. Always shipping something wild.",about:"I'm Aditya Srivastava — a CS engineer who builds immersive games, trains neural nets, and ships full-stack products. I'm obsessed with horror aesthetics, interactive experiences, and pushing what browsers can do.",quote:"A GAME DEVELOPER JUGGLING AI PASSION, HORROR OBSESSION, AND JUST A HINT OF ACADEMIC SANITY"},N2=[{val:`${bi.heroRepos}+`,lbl:"Repos"},{val:`${bi.heroDomains}+`,lbl:"Domains"},{val:`${bi.heroYears}+`,lbl:"Years"}],U2=[{lbl:"Projects",val:bi.projects},{lbl:"Domains",val:bi.domains},{lbl:"Years",val:bi.yearsExp},{lbl:"Live",val:bi.liveProjects}],ex=[{value:bi.projects,suffix:"+",label:"Projects Shipped"},{value:bi.yearsExp,suffix:"+",label:"Years Building"},{value:bi.techMastered,suffix:"+",label:"Tech Mastered"},{value:null,display:"∞",label:"Lines of Code"}],Ll={githubUrl:`${Ei.githubUrl}?tab=repositories`,terminalPath:`~/${Ei.github}`,tags:["WEB | PORTFOLIO","AI | BROWSER EXT","GAME DEV | 3D","WEB APP | TYPESCRIPT","WEB APP | AI","GAME DEV | HORROR","AI | MOBILE"],inProgressIdx:5},O2=({phase:t})=>{const{colors:e,isDark:n}=zn(),i=B.useRef(null),r=B.useRef(null),s=B.useRef(null),[o,a]=B.useState(0),[l,c]=B.useState(!0);return B.useEffect(()=>{if(t!=="done")return;const u=setInterval(()=>{c(!1);const d=setTimeout(()=>{a(f=>(f+1)%Jv.length),c(!0)},300);return()=>clearTimeout(d)},2800);return()=>clearInterval(u)},[t]),B.useEffect(()=>{if(t!=="done")return;const u=i.current;if(!u)return;const d=u.getContext("2d");let f,p;const m=()=>{f=u.offsetWidth,p=u.offsetHeight,u.width=f,u.height=p};window.addEventListener("resize",m),m();const _=window.innerWidth>768?70:35,g=window.innerWidth>768?170:130,h=Array.from({length:_},()=>({x:Math.random()*(f||800),y:Math.random()*(p||600),vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.8+.4,pulse:Math.random()*Math.PI*2})),v=[];s.current=setInterval(()=>{const y=Math.random()>.5;v.push({x:y?0:f,y:Math.random()*p,angle:y?Math.random()*.4-.2:Math.PI+Math.random()*.4-.2,length:100+Math.random()*120,life:1,decay:.008+Math.random()*.006,speed:2.5+Math.random()*3,color:Math.random()>.3?"255,61,0":n?"255,214,0":"230,168,0"})},1800);const x=()=>{d.clearRect(0,0,f,p);for(let y=0;y<_;y++)for(let M=y+1;M<_;M++){const A=h[y].x-h[M].x,C=h[y].y-h[M].y,S=Math.sqrt(A*A+C*C);S<g&&(d.strokeStyle=`rgba(${n?"240,235,224":"7,7,7"}, ${(1-S/g)*.14})`,d.lineWidth=.5,d.beginPath(),d.moveTo(h[y].x,h[y].y),d.lineTo(h[M].x,h[M].y),d.stroke())}for(let y=v.length-1;y>=0;y--){const M=v[y];if(M.x+=Math.cos(M.angle)*M.speed,M.y+=Math.sin(M.angle)*M.speed,M.life-=M.decay,M.life<=0){v.splice(y,1);continue}const A=d.createLinearGradient(M.x,M.y,M.x-Math.cos(M.angle)*M.length,M.y-Math.sin(M.angle)*M.length);A.addColorStop(0,`rgba(${M.color},0)`),A.addColorStop(.4,`rgba(${M.color},${M.life*.6})`),A.addColorStop(1,`rgba(${M.color},0)`),d.strokeStyle=A,d.lineWidth=M.life*1.5,d.shadowColor=`rgba(${M.color},0.8)`,d.shadowBlur=8,d.beginPath(),d.moveTo(M.x,M.y),d.lineTo(M.x-Math.cos(M.angle)*M.length,M.y-Math.sin(M.angle)*M.length),d.stroke(),d.shadowBlur=0}for(let y=0;y<_;y++){const M=h[y];M.x+=M.vx,M.y+=M.vy,(M.x<0||M.x>f)&&(M.vx*=-1),(M.y<0||M.y>p)&&(M.vy*=-1),M.pulse+=.04,d.fillStyle=`rgba(255,61,0,${.35+Math.sin(M.pulse)*.15})`,d.beginPath(),d.arc(M.x,M.y,M.r,0,Math.PI*2),d.fill()}r.current=requestAnimationFrame(x)};return x(),()=>{window.removeEventListener("resize",m),cancelAnimationFrame(r.current),clearInterval(s.current)}},[t,n]),t!=="done"?null:T.jsxs("section",{id:"hero",style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingTop:"90px",paddingBottom:"clamp(3rem,6vw,7rem)",paddingLeft:"clamp(1.5rem,5vw,5rem)",paddingRight:"clamp(1.5rem,5vw,5rem)",overflow:"hidden"},children:[T.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0}}),T.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top, ${e.bg} 10%, transparent 96%)`,zIndex:1,pointerEvents:"none"}}),T.jsx("div",{className:"bg-text",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-45%,-50%)",fontFamily:"Bebas Neue",fontSize:"clamp(8rem,28vw,34rem)",color:n?"rgba(240,235,224,0.025)":"rgba(7,7,7,0.03)",pointerEvents:"none",userSelect:"none",zIndex:1},children:Ei.backgroundText}),T.jsxs("div",{className:"vertical-side-text",style:{position:"absolute",right:"2rem",top:"50%",transform:"translateY(-50%) rotate(90deg)",fontFamily:"DM Mono",fontSize:"0.55rem",letterSpacing:"0.4em",color:e.muted,whiteSpace:"nowrap",zIndex:3},children:[Ei.location.toUpperCase()," | ",Ei.availability.toUpperCase()]}),T.jsxs("div",{className:"container",style:{zIndex:4},children:[T.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1.8rem",animation:"fadeIn 0.8s 0.6s both"},children:[T.jsx("div",{style:{width:44,height:2,backgroundColor:e.accent,boxShadow:`0 0 8px ${e.accent}`,alignSelf:"center"}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.62rem",color:e.muted,letterSpacing:"0.1em"},children:Ei.education})]}),T.jsxs("div",{className:"hero-center-group",style:{position:"relative"},children:[T.jsx("div",{className:"hero-avatar",style:{position:"absolute",top:"-clamp(10rem,28vw,40rem)",right:"clamp(0em,5vw,10%)",width:"clamp(10rem,35vw,42rem)",zIndex:5,pointerEvents:"none",animation:"fadeIn 1s 1.2s both, avatarFloat 6s ease-in-out infinite"},children:T.jsx("img",{src:"/PortfolioV2/avatar.png",alt:`${Ei.fullName} Avatar`,style:{width:"100%",height:"auto",filter:"drop-shadow(0 30px 45px rgba(0,0,0,0.6))"}})}),T.jsx("div",{style:{overflow:"hidden"},children:T.jsx("div",{className:"name-line",style:{fontFamily:"Bebas Neue",fontSize:"clamp(4.5rem,14vw,16rem)",lineHeight:.85,letterSpacing:"-0.015em",color:e.fg,animation:"slideUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both"},children:T.jsx(Qv,{text:Ei.firstName,speed:40,maxIterations:14,animateOn:"mount"})})}),T.jsx("div",{style:{overflow:"hidden",marginBottom:"2.5rem"},children:T.jsx("div",{className:"name-line",style:{fontFamily:"Bebas Neue",fontSize:"clamp(4.5rem,14vw,16rem)",lineHeight:.85,letterSpacing:"-0.015em",color:"transparent",WebkitTextStroke:`2px ${e.fg}`,animation:"slideUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s both"},children:T.jsx(Qv,{text:Ei.lastName,speed:40,maxIterations:16,animateOn:"mount"})})})]}),T.jsxs("div",{className:"stats-row",style:{display:"flex",alignItems:"flex-end",flexWrap:"wrap",gap:"2rem",animation:"fadeIn 0.8s 0.85s both",justifyContent:"center"},children:[T.jsxs("div",{style:{maxWidth:420},children:[T.jsxs("div",{style:{height:"1.2rem",overflow:"hidden",display:"flex",gap:"0.75rem",marginBottom:"0.8rem",alignItems:"center"},children:[T.jsx("div",{style:{width:6,height:6,backgroundColor:e.accent,borderRadius:"50%",boxShadow:`0 0 6px ${e.accent}`}}),l&&T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.72rem",letterSpacing:"0.28em",textTransform:"uppercase",color:e.accent,animation:"roleIn 0.3s ease-out"},children:Jv[o]})]}),T.jsx("p",{style:{fontFamily:"Outfit",fontSize:"0.82rem",lineHeight:1.7,color:e.muted,fontWeight:300,margin:0},children:Ih.hero}),T.jsxs("div",{className:"cta-buttons",style:{display:"flex",gap:"1rem",marginTop:"1.5rem"},children:[T.jsx(Lh,{padding:80,magnetStrength:3,wrapperClassName:"cta-magnet-wrap",innerClassName:"cta-magnet-inner",children:T.jsx("a",{href:"#work",style:{backgroundColor:e.accent,color:"#FFF",padding:"0.65rem 1.4rem",fontFamily:"DM Mono",fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"transform 0.2s, box-shadow 0.2s",border:`1px solid ${e.accent}`},onMouseEnter:u=>{u.currentTarget.style.boxShadow="0 8px 24px rgba(255,61,0,0.4)"},onMouseLeave:u=>{u.currentTarget.style.boxShadow="none"},children:"VIEW WORK"})}),T.jsx(Lh,{padding:80,magnetStrength:3,wrapperClassName:"cta-magnet-wrap",innerClassName:"cta-magnet-inner",children:T.jsx("a",{href:Ei.githubUrl,target:"_blank",rel:"noreferrer",style:{background:"none",border:`1px solid ${e.border}`,color:e.fg,padding:"0.65rem 1.4rem",fontFamily:"DM Mono",fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all 0.2s"},onMouseEnter:u=>{u.currentTarget.style.borderColor=e.fg,u.currentTarget.style.backgroundColor=e.card},onMouseLeave:u=>{u.currentTarget.style.borderColor=e.border,u.currentTarget.style.backgroundColor="transparent"},children:"GITHUB"})})]})]}),T.jsxs("div",{style:{display:"flex",gap:"2.5rem",textAlign:"right"},children:[N2.map(u=>T.jsxs("div",{children:[T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"2.2rem",lineHeight:1},children:u.val}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.55rem",letterSpacing:"0.25em",textTransform:"uppercase",color:e.muted,marginTop:4},children:u.lbl})]},u.lbl)),T.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",marginLeft:"1rem"},children:[T.jsx("div",{style:{width:1,height:55,background:`linear-gradient(to bottom, ${e.fg}, transparent)`,animation:"scrollDrop 2.2s ease-in-out infinite"}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.5rem",letterSpacing:"0.3em",color:e.muted,writingMode:"vertical-lr"},children:"SCROLL"})]})]})]}),T.jsx("div",{style:{position:"absolute",bottom:"-clamp(3rem,6vw,7rem)",left:"-clamp(1.5rem,5vw,5rem)",right:"-clamp(1.5rem,5vw,5rem)",height:1,background:`linear-gradient(to right, transparent 0%, ${e.accent} 30%, ${e.accentB} 70%, transparent 100%)`,opacity:.6}})]})]})},k2=({children:t,amplitude:e=6,period:n=3,delay:i=0,className:r="",style:s={}})=>{const o=B.useMemo(()=>`float-${Math.random().toString(36).substr(2,9)}`,[]),a=`
    @keyframes ${o} {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-${e}px); }
    }
  `;return T.jsxs(T.Fragment,{children:[T.jsx("style",{children:a}),T.jsx("div",{className:r,style:{animation:`${o} ${n}s ease-in-out infinite`,animationDelay:`${i}s`,...s},children:t})]})};function B2({to:t,from:e=0,direction:n="up",delay:i=0,duration:r=2,className:s="",startWhen:o=!0,separator:a="",onStart:l,onEnd:c,style:u={},end:d,start:f}){const p=d!==void 0?d:t,m=f!==void 0?f:e,_=B.useRef(null),g=us(n==="down"?p:m),h=20+40*(1/r),v=100*(1/r),x=js(g,{damping:h,stiffness:v}),y=F2(_,{once:!0,margin:"0px"}),M=S=>{const w=S.toString();if(w.includes(".")){const I=w.split(".")[1];if(parseInt(I)!==0)return I.length}return 0},A=Math.max(M(m),M(p)),C=B.useCallback(S=>{const w=A>0,I={useGrouping:!!a,minimumFractionDigits:w?A:0,maximumFractionDigits:w?A:0},P=Intl.NumberFormat("en-US",I).format(S);return a?P.replace(/,/g,a):P},[A,a]);return B.useEffect(()=>{_.current&&(_.current.textContent=C(n==="down"?p:m))},[m,p,n,C]),B.useEffect(()=>{if(y&&o){typeof l=="function"&&l();const S=setTimeout(()=>{g.set(n==="down"?m:p)},i*1e3),w=setTimeout(()=>{typeof c=="function"&&c()},i*1e3+r*1e3);return()=>{clearTimeout(S),clearTimeout(w)}}},[y,o,g,n,m,p,i,l,c,r]),B.useEffect(()=>{const S=x.on("change",w=>{_.current&&(_.current.textContent=C(w))});return()=>S()},[x,C]),T.jsx("span",{className:s,style:u,ref:_})}const z2=(t,e)=>{const n=new Set([...Object.keys(t),...e.flatMap(r=>Object.keys(r))]),i={};return n.forEach(r=>{i[r]=[t[r],...e.map(s=>s[r])]}),i},Jm=({text:t="",delay:e=200,className:n="",animateBy:i="words",direction:r="top",threshold:s=.1,rootMargin:o="0px",animationFrom:a,animationTo:l,easing:c=p=>p,onAnimationComplete:u,stepDuration:d=.35,style:f={}})=>{const p=i==="words"?t.split(" "):t.split(""),[m,_]=B.useState(!1),g=B.useRef(null);B.useEffect(()=>{if(!g.current)return;const S=new IntersectionObserver(([w])=>{w.isIntersecting&&(_(!0),S.unobserve(g.current))},{threshold:s,rootMargin:o});return S.observe(g.current),()=>S.disconnect()},[s,o]);const h=B.useMemo(()=>r==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50},[r]),v=B.useMemo(()=>[{filter:"blur(5px)",opacity:.5,y:r==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}],[r]),x=a??h,y=l??v,M=y.length+1,A=d*(M-1),C=Array.from({length:M},(S,w)=>M===1?0:w/(M-1));return T.jsx("p",{ref:g,className:n,style:{...f},children:p.map((S,w)=>{const I=z2(x,y),P={duration:A,times:C,delay:w*e/1e3,ease:c};return T.jsxs(Lp.Fragment,{children:[T.jsx(uo.span,{initial:x,animate:m?I:x,transition:P,onAnimationComplete:w===p.length-1?u:void 0,style:{display:"inline-block",willChange:"transform, filter, opacity",whiteSpace:"pre"},children:S===" "?" ":S}),i==="words"&&w<p.length-1&&" "]},w)})})},V2=({revealedSections:t})=>{const{colors:e}=zn(),[n,i]=B.useState(null),r=[{icon:T.jsx(Pw,{size:24}),title:"Game Development",stack:"Unity | Three.js | WebGL | C# | C++",count:"3 Projects",description:"Building immersive 3D experiences with Unity, Three.js & WebGL. From physics engines to shader programming."},{icon:T.jsx(Dw,{size:24}),title:"AI & Machine Learning",stack:"TensorFlow | Computer Vision | Python | JavaScript",count:"2 Projects",description:"Developing computer vision pipelines, ML models, and AI-powered tools using TensorFlow and Python."},{icon:T.jsx(Lw,{size:24}),title:"Full-Stack + Mobile",stack:"React | Next.js | Node.js | Ionic | Capacitor | TypeScript",count:"8+ Projects",description:"End-to-end web and mobile apps with React, Next.js, Node.js, Ionic and Capacitor."}];return T.jsx("section",{id:"about","data-section":"about",style:{minHeight:"100vh",padding:"clamp(6rem,10vw,12rem) clamp(1.5rem,5vw,5rem)"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",marginBottom:"5rem"},children:[T.jsx("span",{style:{fontFamily:"Bebas Neue",fontSize:"0.9rem",letterSpacing:"0.3em",color:e.muted},children:"01"}),T.jsx("div",{style:{width:60,height:1,backgroundColor:e.border}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:e.muted,textTransform:"uppercase"},children:"ABOUT"})]}),T.jsxs("div",{className:"grid",children:[T.jsxs("div",{className:"sticky-col",style:{position:"sticky",top:120,height:"fit-content"},children:[T.jsxs("h2",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(3rem,6vw,7rem)",lineHeight:.9,color:e.fg,margin:0},children:["WHO AM I",T.jsx("div",{style:{height:2,backgroundColor:e.accent,marginTop:"0.5rem",transformOrigin:"left",transform:t.has("about")?"scaleX(1)":"scaleX(0)",transition:"transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",width:60}})]}),T.jsx(Jm,{text:Ih.about,delay:30,animateBy:"words",direction:"top",style:{fontFamily:"Outfit",fontSize:"0.92rem",lineHeight:1.8,fontWeight:300,color:e.muted,marginTop:"2.5rem",width:"100%",maxWidth:"100%",display:"block",overflowWrap:"break-word"}}),T.jsx("div",{style:{borderLeft:`3px solid ${e.accent}`,paddingLeft:"1.5rem",marginTop:"2rem"},children:T.jsx("p",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(1.4rem,4vw,3rem)",lineHeight:1.2,color:e.fg,margin:0,wordBreak:"break-word",whiteSpace:"normal",display:"block",width:"100%"},children:Ih.quote})}),T.jsx("div",{className:"stats-container",style:{display:"flex",gap:"2rem",marginTop:"3rem",flexWrap:"wrap"},children:U2.map((s,o)=>T.jsxs("div",{className:"stats-item",style:{opacity:t.has("about")?1:0,transform:t.has("about")?"translateY(0)":"translateY(20px)",transition:`all 0.8s cubic-bezier(0.16,1,0.3,1) ${o*200+300}ms`},children:[T.jsxs("div",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(2.5rem,4vw,4.5rem)",color:e.accent,lineHeight:1},children:[T.jsx(B2,{end:s.val,duration:1800,style:{color:e.accent}}),T.jsx("span",{style:{color:e.fg,opacity:.6},children:"+"})]}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.55rem",letterSpacing:"0.2em",color:e.muted,textTransform:"uppercase",marginTop:4},children:s.lbl})]},s.lbl))})]}),T.jsxs("div",{children:[T.jsx("div",{className:"marquee-container",style:{overflow:"hidden",borderTop:`1px solid ${e.border}`,borderBottom:`1px solid ${e.border}`,padding:"0.5rem 0",display:"flex",whiteSpace:"nowrap"},children:T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(3rem,6vw,8rem)",color:e.accent,opacity:.15,animation:"marquee 20s linear infinite"},children:"BUILDING | SHIPPING | CREATING | SOLVING | DESIGNING | GAMING | TRAINING | BUILDING | SHIPPING | CREATING | SOLVING | DESIGNING | GAMING | TRAINING | "})}),T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",marginTop:"3rem"},children:r.map((s,o)=>{const a=n===o;return T.jsx(k2,{amplitude:6,period:3,delay:o*.4,children:T.jsxs("div",{className:"skill-card",tabIndex:0,onMouseEnter:()=>i(o),onMouseLeave:()=>i(null),onFocus:()=>i(o),onBlur:()=>i(null),style:{border:`1px solid ${a?"rgba(231,76,60,0.4)":e.border}`,padding:"clamp(1.5rem,4vw,2.5rem)",paddingBottom:"5rem",background:e.card,position:"relative",opacity:t.has("about")?1:0,transform:t.has("about")?"translateY(0)":"translateY(40px)",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",height:"auto",minHeight:"fit-content",boxShadow:a?"0 0 20px rgba(231,76,60,0.3)":"none",outline:"none"},children:[T.jsxs("h3",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(1.4rem,3vw,2rem)",color:e.fg,margin:"0 0 1rem 0",display:"flex",alignItems:"center",gap:"0.8rem",lineHeight:1.1},children:[s.icon," ",s.title]}),T.jsx("p",{style:{fontFamily:"DM Mono",fontSize:"clamp(0.7rem,1.8vw,0.85rem)",color:e.muted,margin:0,lineHeight:1.6},children:s.stack}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.75rem",lineHeight:1.6,color:"#aaa",marginTop:"1rem",opacity:a?1:0,transform:a?"translateY(0)":"translateY(8px)",transition:"opacity 0.25s ease, transform 0.25s ease",pointerEvents:a?"auto":"none"},children:s.description}),T.jsx("div",{style:{position:"absolute",bottom:"1.2rem",right:"1.2rem",fontFamily:"DM Mono",fontSize:"0.6rem",color:e.accent,fontWeight:500,opacity:.8},children:s.count})]})},s.title)})})]})]})]})})},Xs={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},Nf=t=>typeof t=="number"?`${t}px`:t??void 0,H2=(t,e,n)=>{B.useEffect(()=>{if(!window.ResizeObserver){const r=()=>t();return window.addEventListener("resize",r),t(),()=>window.removeEventListener("resize",r)}const i=e.map(r=>{if(!r.current)return null;const s=new ResizeObserver(t);return s.observe(r.current),s});return t(),()=>{i.forEach(r=>r==null?void 0:r.disconnect())}},[t,e,n])},G2=(t,e,n)=>{B.useEffect(()=>{var o;const i=((o=t.current)==null?void 0:o.querySelectorAll("img"))??[];if(i.length===0){e();return}let r=i.length;const s=()=>{r-=1,r===0&&e()};return i.forEach(a=>{const l=a;l.complete?s():(l.addEventListener("load",s,{once:!0}),l.addEventListener("error",s,{once:!0}))}),()=>{i.forEach(a=>{a.removeEventListener("load",s),a.removeEventListener("error",s)})}},[e,t,n])},W2=(t,e,n,i,r,s,o)=>{const a=B.useRef(null),l=B.useRef(null),c=B.useRef(0),u=B.useRef(0);B.useEffect(()=>{const d=t.current;if(!d)return;const f=o?i:n;if(f>0){c.current=(c.current%f+f)%f;const m=o?`translate3d(0, ${-c.current}px, 0)`:`translate3d(${-c.current}px, 0, 0)`;d.style.transform=m}const p=m=>{l.current===null&&(l.current=m);const _=Math.max(0,m-l.current)/1e3;l.current=m;const g=r&&s!==void 0?s:e,h=1-Math.exp(-_/Xs.SMOOTH_TAU);if(u.current+=(g-u.current)*h,f>0){let v=c.current+u.current*_;v=(v%f+f)%f,c.current=v;const x=o?`translate3d(0, ${-c.current}px, 0)`:`translate3d(${-c.current}px, 0, 0)`;d.style.transform=x}a.current=requestAnimationFrame(p)};return a.current=requestAnimationFrame(p),()=>{a.current!==null&&(cancelAnimationFrame(a.current),a.current=null),l.current=null}},[e,n,i,r,s,o,t])},Fh=B.memo(({logos:t,speed:e=120,direction:n="left",width:i="100%",logoHeight:r=28,gap:s=32,pauseOnHover:o,hoverSpeed:a,fadeOut:l=!1,fadeOutColor:c,scaleOnHover:u=!1,renderItem:d,ariaLabel:f="Partner logos",className:p,style:m})=>{const _=B.useRef(null),g=B.useRef(null),h=B.useRef(null),[v,x]=B.useState(0),[y,M]=B.useState(0),[A,C]=B.useState(Xs.MIN_COPIES),[S,w]=B.useState(!1),I=B.useMemo(()=>{if(a!==void 0)return a;if(o===!0)return 0;if(o!==!1)return 0},[a,o]),P=n==="up"||n==="down",z=B.useMemo(()=>{const J=Math.abs(e);let te;P?te=n==="up"?1:-1:te=n==="left"?1:-1;const be=e<0?-1:1;return J*te*be},[e,n,P]),G=B.useCallback(()=>{var Ye,K,oe,le,Oe,Le;const J=((Ye=_.current)==null?void 0:Ye.clientWidth)??0,te=(oe=(K=h.current)==null?void 0:K.getBoundingClientRect)==null?void 0:oe.call(K),be=(te==null?void 0:te.width)??0,Ue=(te==null?void 0:te.height)??0;if(P){const Fe=((Oe=(le=_.current)==null?void 0:le.parentElement)==null?void 0:Oe.clientHeight)??0;if(_.current&&Fe>0){const dt=Math.ceil(Fe);_.current.style.height!==`${dt}px`&&(_.current.style.height=`${dt}px`)}if(Ue>0){M(Math.ceil(Ue));const dt=((Le=_.current)==null?void 0:Le.clientHeight)??Fe??Ue,je=Math.ceil(dt/Ue)+Xs.COPY_HEADROOM;C(Math.max(Xs.MIN_COPIES,je))}}else if(be>0){x(Math.ceil(be));const Fe=Math.ceil(J/be)+Xs.COPY_HEADROOM;C(Math.max(Xs.MIN_COPIES,Fe))}},[P]);H2(G,[_,h],[t,s,r,P]),G2(h,G,[t,s,r,P]),W2(g,z,v,y,S,I,P);const j=B.useMemo(()=>({"--logoloop-gap":`${s}px`,"--logoloop-logoHeight":`${r}px`,...c&&{"--logoloop-fadeColor":c}}),[s,r,c]),V=B.useMemo(()=>["logoloop",P?"logoloop--vertical":"logoloop--horizontal",l&&"logoloop--fade",u&&"logoloop--scale-hover",p].filter(Boolean).join(" "),[P,l,u,p]),W=B.useCallback(()=>{I!==void 0&&w(!0)},[I]),O=B.useCallback(()=>{I!==void 0&&w(!1)},[I]),D=B.useCallback((J,te)=>{if(d)return T.jsx("li",{className:"logoloop__item",role:"listitem",children:d(J,te)},te);const be="node"in J,Ue=be?T.jsx("span",{className:"logoloop__node","aria-hidden":!!J.href&&!J.ariaLabel,children:J.node}):T.jsx("img",{src:J.src,srcSet:J.srcSet,sizes:J.sizes,width:J.width,height:J.height,alt:J.alt??"",title:J.title,loading:"lazy",decoding:"async",draggable:!1}),Ye=be?J.ariaLabel??J.title:J.alt??J.title,K=J.href?T.jsx("a",{className:"logoloop__link",href:J.href,"aria-label":Ye||"logo link",target:"_blank",rel:"noreferrer noopener",children:Ue}):Ue;return T.jsx("li",{className:"logoloop__item",role:"listitem",children:K},te)},[d]),F=B.useMemo(()=>Array.from({length:A},(J,te)=>T.jsx("ul",{className:"logoloop__list",role:"list","aria-hidden":te>0,ref:te===0?h:void 0,children:t.map((be,Ue)=>D(be,`${te}-${Ue}`))},`copy-${te}`)),[A,t,D]),$=B.useMemo(()=>({width:P?Nf(i)==="100%"?void 0:Nf(i):Nf(i)??"100%",...j,...m}),[i,j,m,P]);return T.jsx("div",{ref:_,className:V,style:$,role:"region","aria-label":f,children:T.jsx("div",{className:"logoloop__track",ref:g,onMouseEnter:W,onMouseLeave:O,children:F})})});Fh.displayName="LogoLoop";const j2=({revealedSections:t})=>{const{colors:e,isDark:n}=zn();return T.jsx("section",{id:"stack","data-section":"stack",style:{padding:"clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)",background:n?"#070707":"#F0EBE0",position:"relative",zIndex:1},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",marginBottom:"3rem"},children:[T.jsx("span",{style:{fontFamily:"Bebas Neue",fontSize:"0.9rem",letterSpacing:"0.3em",color:e.muted},children:"02"}),T.jsx("div",{style:{width:60,height:1,backgroundColor:e.border}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:e.muted,textTransform:"uppercase"},children:"TECH STACK"})]}),T.jsxs("h2",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(3.5rem,7vw,9rem)",color:e.fg,margin:"0 0 4rem 0",lineHeight:.9},children:[T.jsx("span",{style:{color:"transparent",WebkitTextStroke:`1px ${e.fg}`},children:"MY"})," ",T.jsx("span",{style:{color:e.accent},children:"ARSENAL"})]}),T.jsx(Fh,{logos:["JavaScript","TypeScript","React","Next.js","Node.js","Python","Unity","C#","C++"],direction:"left",speed:50,gap:20,style:{marginBottom:"1.5rem",height:"44px"},renderItem:i=>T.jsx("span",{style:{display:"inline-flex",alignItems:"center",border:`1px solid ${e.border}`,padding:"0.4rem 1.1rem",fontFamily:"DM Mono",fontSize:"0.68rem",letterSpacing:"0.15em",whiteSpace:"nowrap",borderRadius:50,color:e.fg},children:i})}),T.jsx(Fh,{logos:["TensorFlow","Three.js","Ionic","Capacitor","Tailwind","Git","WebGL"],direction:"right",speed:50,gap:20,style:{marginBottom:"5rem",height:"44px"},renderItem:i=>T.jsx("span",{style:{display:"inline-flex",alignItems:"center",border:`1px solid ${e.border}`,padding:"0.4rem 1.1rem",fontFamily:"DM Mono",fontSize:"0.68rem",letterSpacing:"0.15em",whiteSpace:"nowrap",borderRadius:50,color:e.fg},children:i})}),T.jsx("div",{style:{width:"100%",maxWidth:800},children:[{lbl:"JavaScript / TypeScript",pct:90},{lbl:"React / Next.js",pct:85},{lbl:"Game Development",pct:80},{lbl:"AI & Machine Learning",pct:70},{lbl:"Mobile Development",pct:65}].map((i,r)=>T.jsxs("div",{style:{marginBottom:"1.5rem"},children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"DM Mono",fontSize:"0.65rem",color:e.fg,marginBottom:"0.4rem"},children:[T.jsx("span",{children:i.lbl}),T.jsxs("span",{children:[t.has("stack")?i.pct:0,"%"]})]}),T.jsx("div",{style:{width:"100%",height:1,backgroundColor:e.border,position:"relative"},children:T.jsx("div",{style:{position:"absolute",top:0,left:0,height:1,background:`linear-gradient(to right, ${e.accent}, ${e.accentB})`,boxShadow:"0 0 8px rgba(255,61,0,0.5)",width:`${i.pct}%`,transformOrigin:"left",transform:t.has("stack")?"scaleX(1)":"scaleX(0)",transition:`transform 1.2s cubic-bezier(0.16,1,0.3,1) ${r*120+200}ms`}})})]},i.lbl))})]})})},X2=({children:t,className:e="",spotlightColor:n="rgba(255, 255, 255, 0.25)",style:i={},...r})=>{const s=B.useRef(null),o=a=>{const l=s.current.getBoundingClientRect(),c=a.clientX-l.left,u=a.clientY-l.top;s.current.style.setProperty("--mouse-x",`${c}px`),s.current.style.setProperty("--mouse-y",`${u}px`),s.current.style.setProperty("--spotlight-color",n)};return T.jsx("div",{ref:s,onMouseMove:o,className:`card-spotlight ${e}`,style:i,...r,children:t})},Y2=({children:t,speed:e=1,enableShadows:n=!0,enableOnHover:i=!0,className:r=""})=>{const s={"--after-duration":`${e*3}s`,"--before-duration":`${e*2}s`,"--after-shadow":n?"-5px 0 red":"none","--before-shadow":n?"5px 0 cyan":"none"},o=i?"enable-on-hover":"";return T.jsx("div",{className:`glitch ${o} ${r}`,style:s,"data-text":t,children:t})},$2=({repos:t,reposLoading:e,revealedSections:n})=>{const{colors:i,isDark:r}=zn(),[s,o]=B.useState(!1),[a,l]=B.useState(null);return T.jsx("section",{id:"work","data-section":"work",style:{padding:"clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)",background:r?"#070707":"#F0EBE0",position:"relative",zIndex:1},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",marginBottom:"3rem"},children:[T.jsx("span",{style:{fontFamily:"Bebas Neue",fontSize:"0.9rem",letterSpacing:"0.3em",color:i.muted},children:"03"}),T.jsx("div",{style:{width:60,height:1,backgroundColor:i.border}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:i.muted,textTransform:"uppercase"},children:"SELECTED WORK"})]}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"4rem",flexWrap:"wrap",gap:"1rem"},children:[T.jsx("h2",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(3.5rem,7vw,9rem)",color:i.fg,margin:0,lineHeight:.9},children:"PROJECTS"}),T.jsxs("div",{style:{fontFamily:"DM Mono",color:i.muted},children:["(",t.featured.length+t.rest.length,")"]})]}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"0.5rem"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.3em",color:i.accent,textTransform:"uppercase"},children:"Featured"}),T.jsx("div",{style:{width:40,height:1,backgroundColor:i.accent}})]}),T.jsxs("div",{style:{display:"flex",border:`1px solid ${i.border}`,borderRadius:4,overflow:"hidden"},children:[T.jsx("button",{onClick:()=>o(!1),style:{background:s?"transparent":i.fg,color:s?i.fg:i.bg,border:"none",padding:"0.5rem 1rem",fontFamily:"DM Mono",fontSize:"0.6rem",cursor:"pointer",transition:"all 0.2s",minHeight:44},children:"Featured"}),T.jsx("button",{onClick:()=>o(!0),style:{background:s?i.fg:"transparent",color:s?i.bg:i.fg,border:"none",padding:"0.5rem 1rem",fontFamily:"DM Mono",fontSize:"0.6rem",cursor:"pointer",transition:"all 0.2s",minHeight:44},children:"All"})]})]}),T.jsx("div",{className:"featured-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem",marginBottom:"5rem"},children:t.featured.map((c,u)=>{const d=u===0,f=a===u,p=Ll.tags[u]??"OPEN SOURCE",m=u===Ll.inProgressIdx?"IN PROGRESS":"LIVE";return T.jsxs(X2,{spotlightColor:r?"rgba(255,61,0,0.12)":"rgba(255,61,0,0.07)",onMouseEnter:()=>l(u),onMouseLeave:()=>l(null),style:{gridColumn:d?"1 / -1":"auto",borderTop:`1px solid ${f?"rgba(231,76,60,0.4)":i.border}`,borderRight:`1px solid ${f?"rgba(231,76,60,0.4)":i.border}`,borderBottom:`1px solid ${f?"rgba(231,76,60,0.4)":i.border}`,borderLeft:d?`4px solid ${i.accent}`:`1px solid ${f?"rgba(231,76,60,0.4)":i.border}`,padding:d?"2.5rem":"clamp(1.2rem,2vw,2rem)",background:i.card,position:"relative",opacity:n.has("work")?1:0,transform:n.has("work")?"translateY(0)":"translateY(40px)",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",boxShadow:f?"0 0 20px rgba(231,76,60,0.15)":"none"},children:[T.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:T.jsxs("div",{className:"domain-tag",style:{color:i.accent},children:[p," | ",m]})}),T.jsxs("div",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(4rem,15vw,8rem)",position:"absolute",right:"1.5rem",top:"0.5rem",color:i.fg,opacity:.05,pointerEvents:"none",zIndex:0},children:["00",u+1]}),T.jsx("h3",{style:{fontFamily:"Bebas Neue",fontSize:d?"clamp(2.5rem,6vw,7rem)":"clamp(1.8rem,5vw,2.4rem)",color:i.fg,margin:"0 0 1rem 0",position:"relative",zIndex:1},children:c.name.toLowerCase().includes("horror")||c.name.toLowerCase().includes("scifi")?T.jsx(Y2,{text:c.name.replace(/-/g," "),colors:{primary:"#FF3D00",secondary:"#FFD600"}}):c.name.replace(/-/g," ")}),T.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:(c.language?[c.language,"JavaScript","React"]:["Code"]).map((_,g)=>T.jsx("span",{style:{border:`1px solid ${i.border}`,padding:"0.2rem 0.6rem",fontFamily:"DM Mono",fontSize:"0.6rem",color:i.muted,borderRadius:50},children:_},`${_}-${g}`))}),T.jsx("div",{style:{overflow:"hidden",maxHeight:f?"80px":"0px",opacity:f?1:0,transform:f?"translateY(0)":"translateY(8px)",transition:"max-height 0.3s ease, opacity 0.25s ease, transform 0.25s ease",marginBottom:f?"2rem":"0"},children:T.jsx("p",{style:{fontFamily:"DM Mono",fontSize:"0.75rem",color:"#aaa",margin:0,lineHeight:1.6,maxWidth:"80%"},children:c.description||"Awesome project building the future."})}),T.jsxs("div",{style:{display:"flex",gap:"1.5rem"},children:[d&&T.jsxs("a",{href:c.html_url,style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:i.accent,textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",minHeight:44},children:["VIEW LIVE ",T.jsx(vc,{size:12,color:i.accent})]}),T.jsxs("a",{href:c.html_url,style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:d?i.muted:i.accent,textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",minHeight:44},children:["GITHUB ",T.jsx(vc,{size:12,color:d?i.muted:i.accent})]})]})]},c.name)})}),T.jsxs("div",{style:{display:s?"block":"none"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"2rem"},children:[T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.3em",color:i.muted,textTransform:"uppercase"},children:"More Work"}),T.jsx("div",{style:{width:40,height:1,backgroundColor:i.border}}),T.jsxs("span",{style:{fontFamily:"DM Mono",color:i.muted},children:["(",t.rest.length," more repositories)"]})]}),T.jsxs("div",{style:{background:r?"rgba(0,0,0,0.6)":"rgba(0,0,0,0.04)",border:`1px solid ${i.border}`,padding:"2rem",borderRadius:6,opacity:n.has("work")?1:0,transition:"opacity 1s 0.8s"},children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:`1px solid ${i.border}`,paddingBottom:"0.75rem",marginBottom:"1rem"},children:[T.jsxs("div",{style:{display:"flex",gap:"8px"},children:[T.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"#FF5F57"}}),T.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"#FEBC2E"}}),T.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"#28C840"}})]}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:i.muted},children:Ll.terminalPath}),T.jsx("div",{style:{width:52}})]}),e&&[...Array(6)].map((c,u)=>T.jsx("div",{style:{width:"100%",height:"1.2rem",backgroundColor:i.border,marginBottom:"0.5rem",animation:"pulse 1.5s ease-in-out infinite",animationDelay:`${u*100}ms`}},u)),!e&&t.rest.map((c,u)=>{const d={JavaScript:"#F1E05A",TypeScript:"#3178C6",Python:"#3572A5","C#":"#178600","C++":"#F34B7D"};return T.jsxs("div",{className:"terminal-row",style:{display:"grid",gridTemplateColumns:"35% 20% 15% 30%",padding:"0.5rem 0",borderBottom:"1px solid rgba(240,235,224,0.05)",transition:"background 0.15s",animation:`fadeIn 0.4s ${u*40}ms both`},onMouseEnter:f=>f.currentTarget.style.backgroundColor="rgba(255,61,0,0.05)",onMouseLeave:f=>f.currentTarget.style.backgroundColor="transparent",children:[T.jsxs("a",{href:c.html_url,target:"_blank",rel:"noreferrer",style:{fontFamily:"DM Mono",fontSize:"0.72rem",color:i.fg,textDecoration:"none",display:"flex",alignItems:"center",gap:"0.5rem",minHeight:44},onMouseEnter:f=>f.currentTarget.style.color=i.accent,onMouseLeave:f=>f.currentTarget.style.color=i.fg,children:[T.jsx("span",{style:{color:i.accent},children:"$"})," ",c.name]}),T.jsxs("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:i.muted,display:"flex",alignItems:"center",gap:"6px"},children:[T.jsx("div",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d[c.language]||i.muted}})," ",c.language||"Unknown"]}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:i.muted,display:"flex",alignItems:"center",gap:"4px"},children:c.stargazers_count>0?T.jsxs(T.Fragment,{children:[T.jsx(Iw,{size:10,color:i.accent})," ",c.stargazers_count]}):""}),T.jsx("div",{className:"terminal-desc",style:{fontFamily:"DM Mono",fontSize:"0.58rem",color:i.muted,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:c.description||"—"})]},c.name)}),T.jsx("div",{style:{marginTop:"2rem"},children:T.jsxs("a",{href:Ll.githubUrl,target:"_blank",rel:"noreferrer",style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:i.accent,textDecoration:"none",display:"flex",alignItems:"center",gap:"6px",minHeight:44},onMouseEnter:c=>c.currentTarget.style.textDecoration="underline",onMouseLeave:c=>c.currentTarget.style.textDecoration="none",children:["VIEW ALL ON GITHUB ",T.jsx(vc,{size:12,color:i.accent})]})})]})]})]})})},Uf={damping:30,stiffness:100,mass:2};function q2({imageSrc:t,altText:e="Tilted card image",captionText:n="",containerHeight:i="300px",containerWidth:r="100%",imageHeight:s="300px",imageWidth:o="300px",scaleOnHover:a=1.1,rotateAmplitude:l=14,showMobileWarning:c=!0,showTooltip:u=!0,overlayContent:d=null,displayOverlayContent:f=!1,children:p}){const m=B.useRef(null),_=us(),g=us(),h=js(us(0),Uf),v=js(us(0),Uf),x=js(1,Uf),y=js(0),M=js(0,{stiffness:350,damping:30,mass:1}),[A,C]=B.useState(0);function S(P){if(!m.current)return;const z=m.current.getBoundingClientRect(),G=P.clientX-z.left-z.width/2,j=P.clientY-z.top-z.height/2,V=j/(z.height/2)*-l,W=G/(z.width/2)*l;h.set(V),v.set(W),_.set(P.clientX-z.left),g.set(P.clientY-z.top);const O=j-A;M.set(-O*.6),C(j)}function w(){x.set(a),y.set(1)}function I(){y.set(0),x.set(1),h.set(0),v.set(0),M.set(0)}return T.jsxs("figure",{ref:m,className:"tilted-card-figure",style:{height:i,width:r},onMouseMove:S,onMouseEnter:w,onMouseLeave:I,children:[c&&T.jsx("div",{className:"tilted-card-mobile-alert",children:"This effect is not optimized for mobile. Check on desktop."}),T.jsxs(uo.div,{className:"tilted-card-inner",style:{width:o,height:s,rotateX:h,rotateY:v,scale:x},children:[t&&T.jsx(uo.img,{src:t,alt:e,className:"tilted-card-img",style:{width:o,height:s}}),p,f&&d&&T.jsx(uo.div,{className:"tilted-card-overlay",children:d})]}),u&&T.jsx(uo.figcaption,{className:"tilted-card-caption",style:{x:_,y:g,opacity:y,rotate:M},children:n})]})}const K2=({phase:t,revealedSections:e})=>{const{colors:n}=zn(),[i,r]=B.useState(0);return B.useEffect(()=>{if(t!=="done")return;const s=()=>{const o=document.getElementById("timeline");if(!o)return;const a=o.getBoundingClientRect(),l=a.top,c=a.height,u=window.innerHeight;let d=(u-l)/(c+u);r(Math.max(0,Math.min(1,d*1.5)))};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[t]),T.jsx("section",{id:"timeline","data-section":"timeline",style:{padding:"clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)",position:"relative"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",marginBottom:"5rem"},children:[T.jsx("span",{style:{fontFamily:"Bebas Neue",fontSize:"0.9rem",letterSpacing:"0.3em",color:n.muted},children:"04"}),T.jsx("div",{style:{width:60,height:1,backgroundColor:n.border}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:n.muted,textTransform:"uppercase"},children:"TIMELINE"})]}),T.jsx("h2",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(3rem,6vw,8rem)",color:n.fg,margin:"0 0 6rem 0"},children:"THE JOURNEY"}),T.jsxs("div",{style:{position:"relative"},children:[T.jsx("div",{className:"center-line",style:{position:"absolute",left:"50%",top:0,bottom:0,width:1,background:`linear-gradient(to bottom, ${n.accent}, ${n.accentB}, transparent)`,transform:`scaleY(${i})`,transformOrigin:"top",transition:"transform 0.1s linear"}}),[{yr:"2023",title:"STARTED B.TECH CSE",sub:"Maharishi University of Information Technology · Lucknow",body:"Began CS journey. First GitHub repos. Fell in love with game dev and building things from scratch.",dot:!0},{yr:"2024",title:"FIRST AI PROJECT",sub:"Face Detection Mobile App",body:"Built real-time face detection on mobile using Ionic + Capacitor + Computer Vision.",dot:!1},{yr:"2024",title:"AI CODE GENERATOR",sub:"Chrome Browser Extension",body:"Created AI-powered HackerRank solver extension using ML and browser APIs.",dot:!1},{yr:"2025",title:"SCI-FI PORTFOLIO",sub:"psyodrz.github.io/psyodrz",body:"Launched personal portfolio using Next.js, Three.js, TypeScript, and immersive WebGL effects.",dot:!1},{yr:"NOW",title:"BUILDING ACROSS DOMAINS",sub:"21+ GitHub Repos · 4 Domains",body:"Simultaneously shipping games, AI tools, web apps, and mobile experiences. Always building.",dot:!0}].map((s,o)=>{const a=o%2!==0,l=a?"right":"left",c=a?"translateX(-40px)":"translateX(40px)",u=a?{marginRight:"56%"}:{marginLeft:"56%"};return T.jsxs("div",{"data-section":`time-${o}`,className:"timeline-entry",style:{width:"44%",position:"relative",marginBottom:"4rem",opacity:e.has(`time-${o}`)?1:0,transform:e.has(`time-${o}`)?"translateX(0)":c,transition:"all 0.8s cubic-bezier(0.16,1,0.3,1)",...u,textAlign:l},children:[s.dot&&T.jsx("div",{className:"timeline-dot",style:{position:"absolute",top:"50%",[a?"right":"left"]:"-13.5%",transform:"translateY(-50%)",width:10,height:10,borderRadius:"50%",backgroundColor:n.accent,boxShadow:`0 0 12px ${n.accent}`,animation:s.yr==="NOW"?"dotPulse 2s infinite":"",zIndex:10}}),T.jsx(q2,{containerHeight:"auto",containerWidth:"100%",imageHeight:"auto",imageWidth:"100%",rotateAmplitude:5,scaleOnHover:1.02,showTooltip:!1,showMobileWarning:!1,children:T.jsxs("div",{style:{border:`1px solid ${n.border}`,padding:"1.5rem",background:n.card,overflowWrap:"break-word",wordBreak:"break-word"},children:[T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"2.5rem",color:n.accent,lineHeight:1},children:s.yr}),T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"1.4rem",color:n.fg,marginTop:"1rem"},children:s.title}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:n.muted,marginBottom:"0.8rem",marginTop:"0.2rem"},children:s.sub}),T.jsx(Jm,{text:s.body,delay:30,animateBy:"words",direction:"top",style:{fontFamily:"Outfit",fontSize:"0.82rem",lineHeight:1.7,color:n.muted,fontWeight:300,margin:0}})]})})]},s.title)})]})]})})},Z2=()=>{const{colors:t}=zn(),[e,n]=B.useState(!1),[i,r]=B.useState(!1);return T.jsxs("section",{id:"contact","data-section":"contact",style:{position:"relative",overflow:"hidden",padding:"clamp(5rem,8vw,10rem) clamp(1.5rem,5vw,5rem)",minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center"},children:[T.jsx("div",{style:{position:"absolute",inset:0,background:`radial-gradient(ellipse at center, transparent 10%, ${t.bg} 90%), linear-gradient(to top, transparent 60%, ${t.bg} 100%)`,zIndex:1,pointerEvents:"none"}}),T.jsxs("div",{className:"container",style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},children:[T.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",marginBottom:"3rem"},children:[T.jsx("span",{style:{fontFamily:"Bebas Neue",fontSize:"0.9rem",letterSpacing:"0.3em",color:t.muted},children:"05"}),T.jsx("div",{style:{width:60,height:1,backgroundColor:t.border}}),T.jsx("span",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",letterSpacing:"0.35em",color:t.muted,textTransform:"uppercase"},children:"CONTACT"})]}),T.jsx("div",{style:{paddingTop:"15px"},children:T.jsxs("h2",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(4rem,11vw,14rem)",lineHeight:1.1,margin:0,animation:"slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both"},children:[T.jsx("span",{style:{color:t.fg},children:"LET'S "}),T.jsx("span",{style:{color:"transparent",WebkitTextStroke:`2px ${t.fg}`},children:"BUILD"})]})}),T.jsx("h3",{style:{fontFamily:"Bebas Neue",fontSize:"clamp(2rem,5vw,6rem)",color:t.accent,marginBottom:"3rem",margin:"0.5rem 0 0 0"},children:"SOMETHING AMAZING TOGETHER"}),T.jsxs("div",{className:"contact-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem"},children:[T.jsxs("div",{children:[T.jsx(Jm,{text:"I'm always excited to collaborate on innovative projects, contribute to open-source, or discuss the latest in tech and game development. Whether you need a full-stack developer, a game dev, or an AI engineer — I'd love to connect.",delay:30,animateBy:"words",direction:"top",style:{fontFamily:"Outfit",fontSize:"0.9rem",lineHeight:1.8,color:t.muted,margin:"0 0 2rem 0"}}),T.jsxs("div",{style:{position:"relative",marginTop:"2rem"},children:[T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.55rem",letterSpacing:"0.3em",color:t.muted,marginBottom:"0.5rem"},children:"REACH ME AT"}),T.jsx("div",{style:{fontFamily:"Bebas Neue",fontSize:"1.4rem",color:t.fg,cursor:"pointer",transition:"color 0.2s"},onClick:()=>{navigator.clipboard.writeText("Adisrivastav23@gmail.com"),n(!0),setTimeout(()=>n(!1),2e3)},onMouseEnter:s=>s.currentTarget.style.color=t.accent,onMouseLeave:s=>s.currentTarget.style.color=t.fg,children:"Adisrivastav23@gmail.com"}),e&&T.jsxs("div",{style:{position:"absolute",top:-20,left:0,color:t.accent,fontFamily:"DM Mono",fontSize:"0.6rem",animation:"fadeIn 0.2s both",display:"flex",alignItems:"center",gap:"4px"},children:[T.jsx(Uw,{size:10,color:t.accent})," COPIED"]})]}),T.jsx("div",{style:{display:"flex",gap:"1.5rem",marginTop:"2rem"},children:[{name:"GitHub",url:"https://github.com/Psyodrz"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aditya-srivastava/"},{name:"Portfolio",url:"https://psyodrz.github.io/psyodrz/"}].map(s=>T.jsxs("a",{href:s.url,target:"_blank",rel:"noreferrer",style:{fontFamily:"DM Mono",fontSize:"0.65rem",color:t.muted,textDecoration:"none",position:"relative",display:"flex",alignItems:"center",gap:"4px",minHeight:44,minWidth:44},onMouseEnter:o=>{o.currentTarget.style.color=t.fg,o.currentTarget.style.textDecoration="underline"},onMouseLeave:o=>{o.currentTarget.style.color=t.muted,o.currentTarget.style.textDecoration="none"},children:[s.name," ",T.jsx(vc,{size:10,color:t.muted})]},s.name))})]}),T.jsx("div",{children:i?T.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Bebas Neue",fontSize:"2rem",color:t.accent},children:"MESSAGE SENT"}):T.jsxs("form",{onSubmit:s=>{s.preventDefault(),r(!0)},style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[["Name","Email","Subject"].map(s=>T.jsx("div",{style:{position:"relative",borderBottom:`1px solid ${t.border}`,padding:"0.75rem 0"},className:"form-group",children:T.jsx("input",{type:s==="Email"?"email":"text",required:!0,placeholder:s,style:{background:"none",border:"none",outline:"none",color:t.fg,width:"100%",fontFamily:"Outfit",fontSize:"0.9rem",minHeight:44}})},s)),T.jsx("div",{style:{position:"relative",borderBottom:`1px solid ${t.border}`,padding:"0.75rem 0"},children:T.jsx("textarea",{required:!0,placeholder:"Message",rows:4,style:{background:"none",border:"none",outline:"none",color:t.fg,width:"100%",fontFamily:"Outfit",fontSize:"0.9rem",resize:"vertical"}})}),T.jsx(Lh,{padding:80,magnetStrength:3,wrapperClassName:"submit-magnet-wrap",innerClassName:"submit-magnet-inner",style:{width:"100%",display:"block"},children:T.jsx("button",{type:"submit",style:{width:"100%",marginTop:"1rem",background:t.accent,color:"#FFF",padding:"1rem",fontFamily:"Bebas Neue",fontSize:"1.1rem",letterSpacing:"0.15em",border:"none",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.4,0,0.2,1)",minHeight:48},onMouseEnter:s=>{s.currentTarget.style.backgroundColor=t.accentB,s.currentTarget.style.color="#070707"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor=t.accent,s.currentTarget.style.color="#FFF"},onMouseDown:s=>s.currentTarget.style.transform="scale(0.98)",onMouseUp:s=>s.currentTarget.style.transform="scale(1)",children:"SEND MESSAGE"})})]})})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eg="183",yo={ROTATE:0,DOLLY:1,PAN:2},fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q2=0,tx=1,J2=2,Tc=1,eP=2,ca=3,Br=0,wn=1,Xi=2,Li=0,gs=1,uu=2,nx=3,ix=4,tP=5,is=100,nP=101,iP=102,rP=103,sP=104,oP=200,aP=201,lP=202,cP=203,Nh=204,Uh=205,uP=206,fP=207,dP=208,hP=209,pP=210,mP=211,gP=212,vP=213,xP=214,Oh=0,kh=1,Bh=2,Ro=3,zh=4,Vh=5,Hh=6,Gh=7,rE=0,_P=1,yP=2,Ii=0,sE=1,tg=2,oE=3,aE=4,lE=5,cE=6,uE=7,fE=300,Es=301,Po=302,Of=303,kf=304,Ou=306,Wh=1e3,qi=1001,jh=1002,Kt=1003,SP=1004,Il=1005,ln=1006,Bf=1007,fs=1008,jn=1009,dE=1010,hE=1011,Ya=1012,ng=1013,Ni=1014,Ai=1015,Un=1016,ig=1017,rg=1018,$a=1020,pE=35902,mE=35899,gE=1021,vE=1022,ci=1023,rr=1026,ds=1027,xE=1028,sg=1029,Do=1030,og=1031,ag=1033,wc=33776,bc=33777,Ac=33778,Cc=33779,Xh=35840,Yh=35841,$h=35842,qh=35843,Kh=36196,Zh=37492,Qh=37496,Jh=37488,ep=37489,tp=37490,np=37491,ip=37808,rp=37809,sp=37810,op=37811,ap=37812,lp=37813,cp=37814,up=37815,fp=37816,dp=37817,hp=37818,pp=37819,mp=37820,gp=37821,vp=36492,xp=36494,_p=36495,yp=36283,Sp=36284,Mp=36285,Ep=36286,MP=3200,EP=0,TP=1,Tr="",In="srgb",Lo="srgb-linear",fu="linear",ot="srgb",Ps=7680,rx=519,wP=512,bP=513,AP=514,lg=515,CP=516,RP=517,cg=518,PP=519,sx=35044,ox="300 es",Ci=2e3,du=2001;function DP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LP(){const t=hu("canvas");return t.style.display="block",t}const ax={};function lx(...t){const e="THREE."+t.shift();console.log(e,...t)}function _E(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function pu(...t){const e=t.join(" ");e in ax||(ax[e]=!0,Be(...t))}function IP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const FP={[Oh]:kh,[Bh]:Hh,[zh]:Gh,[Ro]:Vh,[kh]:Oh,[Hh]:Bh,[Gh]:zh,[Vh]:Ro};class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Tp=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function NP(t,e){return(t%e+e)%e}function zf(t,e,n){return(1-n)*t+n*e}function Zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const UP={DEG2RAD:Rc};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==p||u!==m){let g=l*f+c*p+u*m+d*_;g<0&&(f=-f,p=-p,m=-m,_=-_,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),x=Math.sin(v);h=Math.sin(h*v)/x,a=Math.sin(a*v)/x,l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+_*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*f,e[n+1]=l*m+u*f+c*d-a*p,e[n+2]=c*m+u*p+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new H,cx=new zr;class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],_=r[0],g=r[3],h=r[6],v=r[1],x=r[4],y=r[7],M=r[2],A=r[5],C=r[8];return s[0]=o*_+a*v+l*M,s[3]=o*g+a*x+l*A,s[6]=o*h+a*y+l*C,s[1]=c*_+u*v+d*M,s[4]=c*g+u*x+d*A,s[7]=c*h+u*y+d*C,s[2]=f*_+p*v+m*M,s[5]=f*g+p*x+m*A,s[8]=f*h+p*y+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hf.makeScale(e,n)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new Ge,ux=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fx=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OP(){const t={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?fu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Lo]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:ux,fromXYZ:fx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:ux,fromXYZ:fx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Qe=OP();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function So(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class kP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=hu("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BP=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BP++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gf(r[o].image)):s.push(Gf(r[o]))}else s=Gf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let zP=0;const Wf=new H;class mn extends bs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=qi,r=qi,s=ln,o=fs,a=ci,l=jn,c=mn.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zP++}),this.uuid=sl(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=fE;mn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,M=(h+1)/2,A=(u+f)/4,C=(d+_)/4,S=(m+g)/4;return x>y&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=C/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VP extends bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ug(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends VP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yE extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HP extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,m,_,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,_,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,_,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,_=c*d;n[0]=f+_*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,_=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GP,e,WP)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ur.crossVectors(i,Pn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ur.crossVectors(i,Pn)),ur.normalize(),Fl.crossVectors(Pn,ur),r[0]=ur.x,r[4]=Fl.x,r[8]=Pn.x,r[1]=ur.y,r[5]=Fl.y,r[9]=Pn.y,r[2]=ur.z,r[6]=Fl.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],_=i[6],g=i[10],h=i[14],v=i[3],x=i[7],y=i[11],M=i[15],A=r[0],C=r[4],S=r[8],w=r[12],I=r[1],P=r[5],z=r[9],G=r[13],j=r[2],V=r[6],W=r[10],O=r[14],D=r[3],F=r[7],$=r[11],J=r[15];return s[0]=o*A+a*I+l*j+c*D,s[4]=o*C+a*P+l*V+c*F,s[8]=o*S+a*z+l*W+c*$,s[12]=o*w+a*G+l*O+c*J,s[1]=u*A+d*I+f*j+p*D,s[5]=u*C+d*P+f*V+p*F,s[9]=u*S+d*z+f*W+p*$,s[13]=u*w+d*G+f*O+p*J,s[2]=m*A+_*I+g*j+h*D,s[6]=m*C+_*P+g*V+h*F,s[10]=m*S+_*z+g*W+h*$,s[14]=m*w+_*G+g*O+h*J,s[3]=v*A+x*I+y*j+M*D,s[7]=v*C+x*P+y*V+M*F,s[11]=v*S+x*z+y*W+M*$,s[15]=v*w+x*G+y*O+M*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],_=e[7],g=e[11],h=e[15],v=l*p-c*f,x=a*p-c*d,y=a*f-l*d,M=o*p-c*u,A=o*f-l*u,C=o*d-a*u;return n*(_*v-g*x+h*y)-i*(m*v-g*M+h*A)+r*(m*x-_*M+h*C)-s*(m*y-_*A+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],_=e[13],g=e[14],h=e[15],v=n*a-i*o,x=n*l-r*o,y=n*c-s*o,M=i*l-r*a,A=i*c-s*a,C=r*c-s*l,S=u*_-d*m,w=u*g-f*m,I=u*h-p*m,P=d*g-f*_,z=d*h-p*_,G=f*h-p*g,j=v*G-x*z+y*P+M*I-A*w+C*S;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/j;return e[0]=(a*G-l*z+c*P)*V,e[1]=(r*z-i*G-s*P)*V,e[2]=(_*C-g*A+h*M)*V,e[3]=(f*A-d*C-p*M)*V,e[4]=(l*I-o*G-c*w)*V,e[5]=(n*G-r*I+s*w)*V,e[6]=(g*y-m*C-h*x)*V,e[7]=(u*C-f*y+p*x)*V,e[8]=(o*z-a*I+c*S)*V,e[9]=(i*I-n*z-s*S)*V,e[10]=(m*A-_*y+h*v)*V,e[11]=(d*y-u*A-p*v)*V,e[12]=(a*w-o*P-l*S)*V,e[13]=(n*P-i*w+r*S)*V,e[14]=(_*x-m*M-g*v)*V,e[15]=(u*M-d*x+f*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,_=o*u,g=o*d,h=a*d,v=l*c,x=l*u,y=l*d,M=i.x,A=i.y,C=i.z;return r[0]=(1-(_+h))*M,r[1]=(p+y)*M,r[2]=(m-x)*M,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+x)*C,r[9]=(g-v)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ls.set(r[0],r[1],r[2]).length();const a=Ls.set(r[4],r[5],r[6]).length(),l=Ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ti.copy(this);const c=1/o,u=1/a,d=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Ci)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===du)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Ci)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===du)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ls=new H,ti=new Dt,GP=new H(0,0,0),WP=new H(1,1,1),ur=new H,Fl=new H,Pn=new H,dx=new Dt,hx=new zr;class sr{constructor(e=0,n=0,i=0,r=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hx.setFromEuler(this),this.setFromQuaternion(hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class SE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jP=0;const px=new H,Is=new zr,ki=new Dt,Nl=new H,Qo=new H,XP=new H,YP=new zr,mx=new H(1,0,0),gx=new H(0,1,0),vx=new H(0,0,1),xx={type:"added"},$P={type:"removed"},Fs={type:"childadded",child:null},jf={type:"childremoved",child:null};class An extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jP++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new H,n=new sr,i=new zr,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ge}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(mx,e)}rotateY(e){return this.rotateOnAxis(gx,e)}rotateZ(e){return this.rotateOnAxis(vx,e)}translateOnAxis(e,n){return px.copy(e).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mx,e)}translateY(e){return this.translateOnAxis(gx,e)}translateZ(e){return this.translateOnAxis(vx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Qo,Nl,this.up):ki.lookAt(Nl,Qo,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(ki),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xx),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($P),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xx),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,XP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,YP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new H(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ul extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qP={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ME={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=NP(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yf(o,s,e+1/3),this.g=Yf(o,s,e),this.b=Yf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=ME[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Qe.workingToColorSpace(sn.copy(this),e),Math.round($e(sn.r*255,0,255))*65536+Math.round($e(sn.g*255,0,255))*256+Math.round($e(sn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=In){Qe.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(Ol);const i=zf(fr.h,Ol.h,n),r=zf(fr.s,Ol.s,n),s=zf(fr.l,Ol.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new qe;qe.NAMES=ME;class fg{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new fg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class EE extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ni=new H,Bi=new H,$f=new H,zi=new H,Ns=new H,Us=new H,_x=new H,qf=new H,Kf=new H,Zf=new H,Qf=new Ct,Jf=new Ct,ed=new Ct;class li{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Bi.subVectors(i,n),$f.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Bi),l=ni.dot($f),c=Bi.dot(Bi),u=Bi.dot($f),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qf.setScalar(0),Jf.setScalar(0),ed.setScalar(0),Qf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qf,s.x),o.addScaledVector(Jf,s.y),o.addScaledVector(ed,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Bi.subVectors(e,n),ni.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ni.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ns.subVectors(r,i),Us.subVectors(s,i),qf.subVectors(e,i);const l=Ns.dot(qf),c=Us.dot(qf);if(l<=0&&c<=0)return n.copy(i);Kf.subVectors(e,r);const u=Ns.dot(Kf),d=Us.dot(Kf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ns,o);Zf.subVectors(e,s);const p=Ns.dot(Zf),m=Us.dot(Zf);if(m>=0&&p<=m)return n.copy(s);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Us,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return _x.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(_x,a);const h=1/(g+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Bl.subVectors(this.max,Jo),Os.subVectors(e.a,Jo),ks.subVectors(e.b,Jo),Bs.subVectors(e.c,Jo),dr.subVectors(ks,Os),hr.subVectors(Bs,ks),$r.subVectors(Os,Bs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-$r.z,$r.y,dr.z,0,-dr.x,hr.z,0,-hr.x,$r.z,0,-$r.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-$r.y,$r.x,0];return!td(n,Os,ks,Bs,Bl)||(n=[1,0,0,0,1,0,0,0,1],!td(n,Os,ks,Bs,Bl))?!1:(zl.crossVectors(dr,hr),n=[zl.x,zl.y,zl.z],td(n,Os,ks,Bs,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,kl=new ol,Os=new H,ks=new H,Bs=new H,dr=new H,hr=new H,$r=new H,Jo=new H,Bl=new H,zl=new H,qr=new H;function td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qr.fromArray(t,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lt=new H,Vl=new Ne;let KP=0;class an{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sx,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vl.fromBufferAttribute(this,n),Vl.applyMatrix3(e),this.setXY(n,Vl.x,Vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sx&&(e.usage=this.usage),e}}class TE extends an{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wE extends an{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pi extends an{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ZP=new ol,ea=new H,nd=new H;class ku{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(nd)),this.expandByPoint(ea.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QP=0;const Vn=new Dt,id=new An,zs=new H,Dn=new ol,ta=new ol,Ht=new H;class Cn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QP++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DP(e)?wE:TE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Dn.min,ta.min),Dn.expandByPoint(Ht),Ht.addVectors(Dn.max,ta.max),Dn.expandByPoint(Ht)):(Dn.expandByPoint(ta.min),Dn.expandByPoint(ta.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),Ht.add(zs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new H,l[S]=new H;const c=new H,u=new H,d=new H,f=new Ne,p=new Ne,m=new Ne,_=new H,g=new H;function h(S,w,I){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,I),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),a[S].add(_),a[w].add(_),a[I].add(_),l[S].add(g),l[w].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,w=v.length;S<w;++S){const I=v[S],P=I.start,z=I.count;for(let G=P,j=P+z;G<j;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new H,y=new H,M=new H,A=new H;function C(S){M.fromBufferAttribute(r,S),A.copy(M);const w=a[S];x.copy(w),x.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(A,w);const P=y.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,P)}for(let S=0,w=v.length;S<w;++S){const I=v[S],P=I.start,z=I.count;for(let G=P,j=P+z;G<j;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new an(f,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let JP=0;class al extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JP++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=gs,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nh&&(i.blendSrc=this.blendSrc),this.blendDst!==Uh&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new H,rd=new H,Hl=new H,pr=new H,sd=new H,Gl=new H,od=new H;class dg{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rd.copy(e).add(n).multiplyScalar(.5),Hl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(rd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Hl),a=pr.dot(this.direction),l=-pr.dot(Hl),c=pr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(rd).addScaledVector(Hl,f),p}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,i,r,s){sd.subVectors(n,e),Gl.subVectors(i,e),od.crossVectors(sd,Gl);let o=this.direction.dot(od),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(Gl.crossVectors(pr,Gl));if(l<0)return null;const c=a*this.direction.dot(sd.cross(pr));if(c<0||l+c>o)return null;const u=-a*pr.dot(od);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hg extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yx=new Dt,Kr=new dg,Wl=new ku,Sx=new H,jl=new H,Xl=new H,Yl=new H,ad=new H,$l=new H,Mx=new H,ql=new H;class gi extends An{constructor(e=new Cn,n=new hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ad.fromBufferAttribute(d,e),o?$l.addScaledVector(ad,u):$l.addScaledVector(ad.sub(n),u))}n.add($l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Wl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Wl,Sx)===null||Kr.origin.distanceToSquared(Sx)>(e.far-e.near)**2))&&(yx.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(yx),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const A=a.getX(y),C=a.getX(y+1),S=a.getX(y+2);r=Kl(this,h,e,i,c,u,d,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,h=_;g<h;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=Kl(this,o,e,i,c,u,d,v,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const A=y,C=y+1,S=y+2;r=Kl(this,h,e,i,c,u,d,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,h=_;g<h;g+=3){const v=g,x=g+1,y=g+2;r=Kl(this,o,e,i,c,u,d,v,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function eD(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;ql.copy(a),ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ql);return c<n.near||c>n.far?null:{distance:c,point:ql.clone(),object:t}}function Kl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,jl),t.getVertexPosition(l,Xl),t.getVertexPosition(c,Yl);const u=eD(t,e,n,i,jl,Xl,Yl,Mx);if(u){const d=new H;li.getBarycoord(Mx,jl,Xl,Yl,d),r&&(u.uv=li.getInterpolatedAttribute(r,a,l,c,d,new Ne)),s&&(u.uv1=li.getInterpolatedAttribute(s,a,l,c,d,new Ne)),o&&(u.normal=li.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};li.getNormal(jl,Xl,Yl,f.normal),u.face=f,u.barycoord=d}return u}class tD extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,u=Kt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ld=new H,nD=new H,iD=new Ge;class Sr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ld.subVectors(i,n).cross(nD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iD.getNormalMatrix(e),r=this.coplanarPoint(ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new ku,rD=new Ne(.5,.5),Zl=new H;class bE{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,o=new Sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],m=s[8],_=s[9],g=s[10],h=s[11],v=s[12],x=s[13],y=s[14],M=s[15];if(r[0].setComponents(c-o,p-u,h-m,M-v).normalize(),r[1].setComponents(c+o,p+u,h+m,M+v).normalize(),r[2].setComponents(c+a,p+d,h+_,M+x).normalize(),r[3].setComponents(c-a,p-d,h-_,M-x).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(c-l,p-f,h-g,M-y).normalize();else if(r[4].setComponents(c-l,p-f,h-g,M-y).normalize(),n===Ci)r[5].setComponents(c+l,p+f,h+g,M+y).normalize();else if(n===du)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=rD.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Zl.x=r.normal.x>0?e.max.x:e.min.x,Zl.y=r.normal.y>0?e.max.y:e.min.y,Zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AE extends al{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ex=new Dt,wp=new dg,Ql=new ku,Jl=new H;class Tx extends An{constructor(e=new Cn,n=new AE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Ex.copy(r).invert(),wp.copy(e.ray).applyMatrix4(Ex);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,_=p;m<_;m++){const g=c.getX(m);Jl.fromBufferAttribute(d,g),wx(Jl,g,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,_=p;m<_;m++)Jl.fromBufferAttribute(d,m),wx(Jl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wx(t,e,n,i,r,s,o){const a=wp.distanceSqToPoint(t);if(a<n){const l=new H;wp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class CE extends mn{constructor(e=[],n=Es,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qa extends mn{constructor(e,n,i=Ni,r,s,o,a=Kt,l=Kt,c,u=rr,d=1){if(u!==rr&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ug(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sD extends qa{constructor(e,n=Ni,i=Es,r,s,o=Kt,a=Kt,l,c=rr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class RE extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(d,2));function m(_,g,h,v,x,y,M,A,C,S,w){const I=y/C,P=M/S,z=y/2,G=M/2,j=A/2,V=C+1,W=S+1;let O=0,D=0;const F=new H;for(let $=0;$<W;$++){const J=$*P-G;for(let te=0;te<V;te++){const be=te*I-z;F[_]=be*v,F[g]=J*x,F[h]=j,c.push(F.x,F.y,F.z),F[_]=0,F[g]=0,F[h]=A>0?1:-1,u.push(F.x,F.y,F.z),d.push(te/C),d.push(1-$/S),O+=1}}for(let $=0;$<S;$++)for(let J=0;J<C;J++){const te=f+J+V*$,be=f+J+V*($+1),Ue=f+(J+1)+V*($+1),Ye=f+(J+1)+V*$;l.push(te,be,Ye),l.push(be,Ue,Ye),D+=6}a.addGroup(p,D,w),p+=D,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bu extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],m=[],_=[],g=[];for(let h=0;h<u;h++){const v=h*f-o;for(let x=0;x<c;x++){const y=x*d-s;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+c*h,y=v+c*(h+1),M=v+1+c*(h+1),A=v+1+c*h;p.push(x,y,A),p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Io(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Io(t[n]);for(const r in i)e[r]=i[r]}return e}function oD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function PE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const mu={clone:Io,merge:un};var aD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aD,this.fragmentShader=lD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=oD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class DE extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cD extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uD extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ec=new H,tc=new zr,_i=new H;class LE extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,_i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ec,tc,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new H,bx=new Ne,Ax=new Ne;class Wn extends LE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,bx,Ax),n.subVectors(Ax,bx)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class zu extends LE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,Hs=1;class fD extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Vs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new Wn(Vs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new Wn(Vs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new Wn(Vs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new Wn(Vs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Vs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class dD extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hD{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=pD.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function pD(){this._document.hidden===!1&&this.reset()}class Cx{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mD extends bs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rx(t,e,n,i){const r=gD(i);switch(n){case gE:return t*e;case xE:return t*e/r.components*r.byteLength;case sg:return t*e/r.components*r.byteLength;case Do:return t*e*2/r.components*r.byteLength;case og:return t*e*2/r.components*r.byteLength;case vE:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case ag:return t*e*4/r.components*r.byteLength;case wc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:case qh:return Math.max(t,16)*Math.max(e,8)/4;case Xh:case $h:return Math.max(t,8)*Math.max(e,8)/2;case Kh:case Zh:case Jh:case ep:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qh:case tp:case np:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vp:case xp:case _p:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yp:case Sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gD(t){switch(t){case jn:case dE:return{byteLength:1,components:1};case Ya:case hE:case Un:return{byteLength:2,components:1};case ig:case rg:return{byteLength:2,components:4};case Ni:case ng:case Ai:return{byteLength:4,components:1};case pE:case mE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eg}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function IE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vD(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],_=d[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var xD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_D=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ED=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ND=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$D="gl_FragColor = linearToOutputTexel( gl_FragColor );",qD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_L=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$L=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:xD,alphahash_pars_fragment:_D,alphamap_fragment:yD,alphamap_pars_fragment:SD,alphatest_fragment:MD,alphatest_pars_fragment:ED,aomap_fragment:TD,aomap_pars_fragment:wD,batching_pars_vertex:bD,batching_vertex:AD,begin_vertex:CD,beginnormal_vertex:RD,bsdfs:PD,iridescence_fragment:DD,bumpmap_pars_fragment:LD,clipping_planes_fragment:ID,clipping_planes_pars_fragment:FD,clipping_planes_pars_vertex:ND,clipping_planes_vertex:UD,color_fragment:OD,color_pars_fragment:kD,color_pars_vertex:BD,color_vertex:zD,common:VD,cube_uv_reflection_fragment:HD,defaultnormal_vertex:GD,displacementmap_pars_vertex:WD,displacementmap_vertex:jD,emissivemap_fragment:XD,emissivemap_pars_fragment:YD,colorspace_fragment:$D,colorspace_pars_fragment:qD,envmap_fragment:KD,envmap_common_pars_fragment:ZD,envmap_pars_fragment:QD,envmap_pars_vertex:JD,envmap_physical_pars_fragment:u3,envmap_vertex:e3,fog_vertex:t3,fog_pars_vertex:n3,fog_fragment:i3,fog_pars_fragment:r3,gradientmap_pars_fragment:s3,lightmap_pars_fragment:o3,lights_lambert_fragment:a3,lights_lambert_pars_fragment:l3,lights_pars_begin:c3,lights_toon_fragment:f3,lights_toon_pars_fragment:d3,lights_phong_fragment:h3,lights_phong_pars_fragment:p3,lights_physical_fragment:m3,lights_physical_pars_fragment:g3,lights_fragment_begin:v3,lights_fragment_maps:x3,lights_fragment_end:_3,logdepthbuf_fragment:y3,logdepthbuf_pars_fragment:S3,logdepthbuf_pars_vertex:M3,logdepthbuf_vertex:E3,map_fragment:T3,map_pars_fragment:w3,map_particle_fragment:b3,map_particle_pars_fragment:A3,metalnessmap_fragment:C3,metalnessmap_pars_fragment:R3,morphinstance_vertex:P3,morphcolor_vertex:D3,morphnormal_vertex:L3,morphtarget_pars_vertex:I3,morphtarget_vertex:F3,normal_fragment_begin:N3,normal_fragment_maps:U3,normal_pars_fragment:O3,normal_pars_vertex:k3,normal_vertex:B3,normalmap_pars_fragment:z3,clearcoat_normal_fragment_begin:V3,clearcoat_normal_fragment_maps:H3,clearcoat_pars_fragment:G3,iridescence_pars_fragment:W3,opaque_fragment:j3,packing:X3,premultiplied_alpha_fragment:Y3,project_vertex:$3,dithering_fragment:q3,dithering_pars_fragment:K3,roughnessmap_fragment:Z3,roughnessmap_pars_fragment:Q3,shadowmap_pars_fragment:J3,shadowmap_pars_vertex:eL,shadowmap_vertex:tL,shadowmask_pars_fragment:nL,skinbase_vertex:iL,skinning_pars_vertex:rL,skinning_vertex:sL,skinnormal_vertex:oL,specularmap_fragment:aL,specularmap_pars_fragment:lL,tonemapping_fragment:cL,tonemapping_pars_fragment:uL,transmission_fragment:fL,transmission_pars_fragment:dL,uv_pars_fragment:hL,uv_pars_vertex:pL,uv_vertex:mL,worldpos_vertex:gL,background_vert:vL,background_frag:xL,backgroundCube_vert:_L,backgroundCube_frag:yL,cube_vert:SL,cube_frag:ML,depth_vert:EL,depth_frag:TL,distance_vert:wL,distance_frag:bL,equirect_vert:AL,equirect_frag:CL,linedashed_vert:RL,linedashed_frag:PL,meshbasic_vert:DL,meshbasic_frag:LL,meshlambert_vert:IL,meshlambert_frag:FL,meshmatcap_vert:NL,meshmatcap_frag:UL,meshnormal_vert:OL,meshnormal_frag:kL,meshphong_vert:BL,meshphong_frag:zL,meshphysical_vert:VL,meshphysical_frag:HL,meshtoon_vert:GL,meshtoon_frag:WL,points_vert:jL,points_frag:XL,shadow_vert:YL,shadow_frag:$L,sprite_vert:qL,sprite_frag:KL},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ti={basic:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([he.common,he.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ti.physical={uniforms:un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const nc={r:0,b:0,g:0},Qr=new sr,ZL=new Dt;function QL(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const y=v.backgroundBlurriness>0;x=e.get(x,y)}return x}function m(v){let x=!1;const y=p(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),x=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,x){const y=p(x);y&&(y.isCubeTexture||y.mapping===Ou)?(c===void 0&&(c=new gi(new ll(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Io(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Qr.copy(x.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZL.makeRotationFromEuler(Qr)),c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gi(new Bu(2,2),new Zt({name:"BackgroundMaterial",uniforms:Io(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){v.getRGB(nc,PE(t)),n.buffers.color.setClear(nc.r,nc.g,nc.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:_,dispose:h}}function JL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,z,G,j,V){let W=!1;const O=d(P,j,G,z);s!==O&&(s=O,c(s.object)),W=p(P,j,G,V),W&&m(P,j,G,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(P,z,G,j),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,z,G,j){const V=j.wireframe===!0;let W=i[z.id];W===void 0&&(W={},i[z.id]=W);const O=P.isInstancedMesh===!0?P.id:0;let D=W[O];D===void 0&&(D={},W[O]=D);let F=D[G.id];F===void 0&&(F={},D[G.id]=F);let $=F[V];return $===void 0&&($=f(l()),F[V]=$),$}function f(P){const z=[],G=[],j=[];for(let V=0;V<n;V++)z[V]=0,G[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,z,G,j){const V=s.attributes,W=z.attributes;let O=0;const D=G.getAttributes();for(const F in D)if(D[F].location>=0){const J=V[F];let te=W[F];if(te===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function m(P,z,G,j){const V={},W=z.attributes;let O=0;const D=G.getAttributes();for(const F in D)if(D[F].location>=0){let J=W[F];J===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const te={};te.attribute=J,J&&J.data&&(te.data=J.data),V[F]=te,O++}s.attributes=V,s.attributesNum=O,s.index=j}function _(){const P=s.newAttributes;for(let z=0,G=P.length;z<G;z++)P[z]=0}function g(P){h(P,0)}function h(P,z){const G=s.newAttributes,j=s.enabledAttributes,V=s.attributeDivisors;G[P]=1,j[P]===0&&(t.enableVertexAttribArray(P),j[P]=1),V[P]!==z&&(t.vertexAttribDivisor(P,z),V[P]=z)}function v(){const P=s.newAttributes,z=s.enabledAttributes;for(let G=0,j=z.length;G<j;G++)z[G]!==P[G]&&(t.disableVertexAttribArray(G),z[G]=0)}function x(P,z,G,j,V,W,O){O===!0?t.vertexAttribIPointer(P,z,G,V,W):t.vertexAttribPointer(P,z,G,j,V,W)}function y(P,z,G,j){_();const V=j.attributes,W=G.getAttributes(),O=z.defaultAttributeValues;for(const D in W){const F=W[D];if(F.location>=0){let $=V[D];if($===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const J=$.normalized,te=$.itemSize,be=e.get($);if(be===void 0)continue;const Ue=be.buffer,Ye=be.type,K=be.bytesPerElement,oe=Ye===t.INT||Ye===t.UNSIGNED_INT||$.gpuType===ng;if($.isInterleavedBufferAttribute){const le=$.data,Oe=le.stride,Le=$.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<F.locationSize;Fe++)h(F.location+Fe,le.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<F.locationSize;Fe++)g(F.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Fe=0;Fe<F.locationSize;Fe++)x(F.location+Fe,te/F.locationSize,Ye,J,Oe*K,(Le+te/F.locationSize*Fe)*K,oe)}else{if($.isInstancedBufferAttribute){for(let le=0;le<F.locationSize;le++)h(F.location+le,$.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<F.locationSize;le++)g(F.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let le=0;le<F.locationSize;le++)x(F.location+le,te/F.locationSize,Ye,J,te*K,te/F.locationSize*le*K,oe)}}else if(O!==void 0){const J=O[D];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(F.location,J);break;case 3:t.vertexAttrib3fv(F.location,J);break;case 4:t.vertexAttrib4fv(F.location,J);break;default:t.vertexAttrib1fv(F.location,J)}}}}v()}function M(){w();for(const P in i){const z=i[P];for(const G in z){const j=z[G];for(const V in j){const W=j[V];for(const O in W)u(W[O].object),delete W[O];delete j[V]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const z=i[P.id];for(const G in z){const j=z[G];for(const V in j){const W=j[V];for(const O in W)u(W[O].object),delete W[O];delete j[V]}}delete i[P.id]}function C(P){for(const z in i){const G=i[z];for(const j in G){const V=G[j];if(V[P.id]===void 0)continue;const W=V[P.id];for(const O in W)u(W[O].object),delete W[O];delete V[P.id]}}}function S(P){for(const z in i){const G=i[z],j=P.isInstancedMesh===!0?P.id:0,V=G[j];if(V!==void 0){for(const W in V){const O=V[W];for(const D in O)u(O[D].object),delete O[D];delete V[W]}delete G[j],Object.keys(G).length===0&&delete i[z]}}}function w(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function eI(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*f[_];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ci&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ai&&!S)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:M,samples:A}}function nI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Sr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=u(m,f,x,p);for(let M=0;M!==x;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Cr=4,Px=[.125,.215,.35,.446,.526,.582],rs=20,iI=256,na=new zu,Dx=new qe;let cd=null,ud=0,fd=0,dd=!1;const rI=new H;class Lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=rI}=s;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Un,format:ci,colorSpace:Lo,depthBuffer:!1},r=Ix(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ix(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sI(s)),this._blurMaterial=aI(s,e,n),this._ggxMaterial=oI(s,e,n)}return r}_compileMaterial(e){const n=new gi(new Cn,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,i,r,s){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Dx),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new ll,new hg({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(Dx),h=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const M=this._cubeSize;Gs(r,y*M,x>2?M:0,M,M),d.setRenderTarget(r),h&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Cr?i-m+Cr:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Gs(s,g,h,3*_,2*_),r.setRenderTarget(s),r.render(a,na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Gs(e,g,h,3*_,2*_),r.setRenderTarget(e),r.render(a,na)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):rs;g>rs&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rs}`);const h=[];let v=0;for(let C=0;C<rs;++C){const S=C/_,w=Math.exp(-S*S/2);h.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const y=this._sizeLods[r],M=3*y*(r>x-Cr?r-x+Cr:0),A=4*(this._cubeSize-y);Gs(n,M,A,3*y,2*y),l.setRenderTarget(n),l.render(d,na)}}function sI(t){const e=[],n=[],i=[];let r=t;const s=t-Cr+1+Px.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Cr?l=Px[o-t+Cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,_=3,g=2,h=1,v=new Float32Array(_*m*p),x=new Float32Array(g*m*p),y=new Float32Array(h*m*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,S=A>2?0:-1,w=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];v.set(w,_*m*A),x.set(f,g*m*A);const I=[A,A,A,A,A,A];y.set(I,h*m*A)}const M=new Cn;M.setAttribute("position",new an(v,_)),M.setAttribute("uv",new an(x,g)),M.setAttribute("faceIndex",new an(y,h)),i.push(new gi(M,null)),r>Cr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ix(t,e,n){const i=new bn(t,e,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oI(t,e,n){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function aI(t,e,n){const i=new Float32Array(rs),r=new H(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Fx(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Nx(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class FE extends bn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ll(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Li});s.uniforms.tEquirect.value=n;const o=new gi(r,s),a=n.minFilter;return n.minFilter===fs&&(n.minFilter=ln),new fD(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function lI(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Of||p===kf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new FE(m.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===Of||p===kf,_=p===Es||p===Po;if(m||_){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Lx(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Lx(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,p){return p===Of?f.mapping=Es:p===kf&&(f.mapping=Po),f}function l(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function cI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pu("WebGLRenderer: "+i+" extension not supported."),r}}}function uI(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],A=v[x+1],C=v[x+2];f.push(M,A,A,C,C,M)}}else{const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,A=x+1,C=x+2;f.push(M,A,A,C,C,M)}}const g=new(m.count>=65535?wE:TE)(f,1);g.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function fI(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*o,m),n.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,m);let h=0;for(let v=0;v<m;v++)h+=p[v]*_[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hI(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let I=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var p=I;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let M=a.attributes.position.count*y,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*A*4*d),S=new yE(C,M,A,d);S.type=Ai,S.needsUpdate=!0;const w=y*4;for(let P=0;P<d;P++){const z=h[P],G=v[P],j=x[P],V=M*A*4*P;for(let W=0;W<z.count;W++){const O=W*w;m===!0&&(r.fromBufferAttribute(z,W),C[V+O+0]=r.x,C[V+O+1]=r.y,C[V+O+2]=r.z,C[V+O+3]=0),_===!0&&(r.fromBufferAttribute(G,W),C[V+O+4]=r.x,C[V+O+5]=r.y,C[V+O+6]=r.z,C[V+O+7]=0),g===!0&&(r.fromBufferAttribute(j,W),C[V+O+8]=r.x,C[V+O+9]=r.y,C[V+O+10]=r.z,C[V+O+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new Ne(M,A)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function pI(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const mI={[sE]:"LINEAR_TONE_MAPPING",[tg]:"REINHARD_TONE_MAPPING",[oE]:"CINEON_TONE_MAPPING",[aE]:"ACES_FILMIC_TONE_MAPPING",[cE]:"AGX_TONE_MAPPING",[uE]:"NEUTRAL_TONE_MAPPING",[lE]:"CUSTOM_TONE_MAPPING"};function gI(t,e,n,i,r){const s=new bn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new bn(e,n,{type:Un,depthBuffer:!1,stencilBuffer:!1}),a=new Cn;a.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new pi([0,2,0,0,2,0],2));const l=new DE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new gi(a,l),u=new zu(-1,1,1,-1,0,1);let d=null,f=null,p=!1,m,_=null,g=[],h=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<g.length;y++){const M=g[y];M.setSize&&M.setSize(v,x)}},this.setEffects=function(v){g=v,h=g.length>0&&g[0].isRenderPass===!0;const x=s.width,y=s.height;for(let M=0;M<g.length;M++){const A=g[M];A.setSize&&A.setSize(x,y)}},this.begin=function(v,x){if(p||v.toneMapping===Ii&&g.length===0)return!1;if(_=x,x!==null){const y=x.width,M=x.height;(s.width!==y||s.height!==M)&&this.setSize(y,M)}return h===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Ii,!0},this.hasRenderPass=function(){return h},this.end=function(v,x){v.toneMapping=m,p=!0;let y=s,M=o;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(v,M,y,x),C.needsSwap!==!1)){const S=y;y=M,M=S}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},Qe.getTransfer(d)===ot&&(l.defines.SRGB_TRANSFER="");const A=mI[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const NE=new mn,bp=new qa(1,1),UE=new yE,OE=new HP,kE=new CE,Ux=[],Ox=[],kx=new Float32Array(16),Bx=new Float32Array(9),zx=new Float32Array(4);function Vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ux[r];if(s===void 0&&(s=new Float32Array(r),Ux[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=Ox[e];n===void 0&&(n=new Int32Array(e),Ox[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function _I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function yI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function SI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;zx.set(i),t.uniformMatrix2fv(this.addr,!1,zx),zt(n,i)}}function MI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Bx.set(i),t.uniformMatrix3fv(this.addr,!1,Bx),zt(n,i)}}function EI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;kx.set(i),t.uniformMatrix4fv(this.addr,!1,kx),zt(n,i)}}function TI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function bI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function AI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function CI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function PI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function DI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function LI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bp.compareFunction=n.isReversedDepthBuffer()?cg:lg,s=bp):s=NE,n.setTexture2D(e||s,r)}function II(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OE,r)}function FI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kE,r)}function NI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||UE,r)}function UI(t){switch(t){case 5126:return vI;case 35664:return xI;case 35665:return _I;case 35666:return yI;case 35674:return SI;case 35675:return MI;case 35676:return EI;case 5124:case 35670:return TI;case 35667:case 35671:return wI;case 35668:case 35672:return bI;case 35669:case 35673:return AI;case 5125:return CI;case 36294:return RI;case 36295:return PI;case 36296:return DI;case 35678:case 36198:case 36298:case 36306:case 35682:return LI;case 35679:case 36299:case 36307:return II;case 35680:case 36300:case 36308:case 36293:return FI;case 36289:case 36303:case 36311:case 36292:return NI}}function OI(t,e){t.uniform1fv(this.addr,e)}function kI(t,e){const n=Vo(e,this.size,2);t.uniform2fv(this.addr,n)}function BI(t,e){const n=Vo(e,this.size,3);t.uniform3fv(this.addr,n)}function zI(t,e){const n=Vo(e,this.size,4);t.uniform4fv(this.addr,n)}function VI(t,e){const n=Vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HI(t,e){const n=Vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GI(t,e){const n=Vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WI(t,e){t.uniform1iv(this.addr,e)}function jI(t,e){t.uniform2iv(this.addr,e)}function XI(t,e){t.uniform3iv(this.addr,e)}function YI(t,e){t.uniform4iv(this.addr,e)}function $I(t,e){t.uniform1uiv(this.addr,e)}function qI(t,e){t.uniform2uiv(this.addr,e)}function KI(t,e){t.uniform3uiv(this.addr,e)}function ZI(t,e){t.uniform4uiv(this.addr,e)}function QI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=bp:o=NE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function JI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||OE,s[o])}function eF(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||kE,s[o])}function tF(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||UE,s[o])}function nF(t){switch(t){case 5126:return OI;case 35664:return kI;case 35665:return BI;case 35666:return zI;case 35674:return VI;case 35675:return HI;case 35676:return GI;case 5124:case 35670:return WI;case 35667:case 35671:return jI;case 35668:case 35672:return XI;case 35669:case 35673:return YI;case 5125:return $I;case 36294:return qI;case 36295:return KI;case 36296:return ZI;case 35678:case 36198:case 36298:case 36306:case 35682:return QI;case 35679:case 36299:case 36307:return JI;case 35680:case 36300:case 36308:case 36293:return eF;case 36289:case 36303:case 36311:case 36292:return tF}}class iF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UI(n.type)}}class rF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nF(n.type)}}class sF{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function Vx(t,e){t.seq.push(e),t.map[e.id]=e}function oF(t,e,n){const i=t.name,r=i.length;for(hd.lastIndex=0;;){const s=hd.exec(i),o=hd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vx(n,c===void 0?new iF(a,t,e):new rF(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new sF(a),Vx(n,d)),n=d}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);oF(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aF=37297;let lF=0;function cF(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Gx=new Ge;function uF(t){Qe._getMatrix(Gx,Qe.workingColorSpace,t);const e=`mat3( ${Gx.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case fu:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+cF(t.getShaderSource(e),a)}else return s}function fF(t,e){const n=uF(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const dF={[sE]:"Linear",[tg]:"Reinhard",[oE]:"Cineon",[aE]:"ACESFilmic",[cE]:"AgX",[uE]:"Neutral",[lE]:"Custom"};function hF(t,e){const n=dF[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ic=new H;function pF(){Qe.getLuminanceCoefficients(ic);const t=ic.x.toFixed(4),e=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mF(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function gF(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vF(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function jx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(t){return t.replace(xF,yF)}const _F=new Map;function yF(t,e){let n=We[e];if(n===void 0){const i=_F.get(e);if(i!==void 0)n=We[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ap(n)}const SF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(t){return t.replace(SF,MF)}function MF(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $x(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EF={[Tc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function TF(t){return EF[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wF={[Es]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function bF(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wF[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const AF={[Po]:"ENVMAP_MODE_REFRACTION"};function CF(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AF[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RF={[rE]:"ENVMAP_BLENDING_MULTIPLY",[_P]:"ENVMAP_BLENDING_MIX",[yP]:"ENVMAP_BLENDING_ADD"};function PF(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RF[t.combine]||"ENVMAP_BLENDING_NONE"}function DF(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LF(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TF(n),c=bF(n),u=CF(n),d=PF(n),f=DF(n),p=mF(n),m=gF(s),_=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(g=[$x(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[$x(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?We.tonemapping_pars_fragment:"",n.toneMapping!==Ii?hF("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,fF("linearToOutputTexel",n.outputColorSpace),pF(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=Ap(o),o=jx(o,n),o=Xx(o,n),a=Ap(a),a=jx(a,n),a=Xx(a,n),o=Yx(o),a=Yx(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+o,y=v+h+a,M=Hx(r,r.VERTEX_SHADER,x),A=Hx(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(M)||"",j=r.getShaderInfoLog(A)||"",V=z.trim(),W=G.trim(),O=j.trim();let D=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,M,A);else{const $=Wx(r,M,"vertex"),J=Wx(r,A,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+$+`
`+J)}else V!==""?Be("WebGLProgram: Program Info Log:",V):(W===""||O==="")&&(F=!1);F&&(P.diagnostics={runnable:D,programLog:V,vertexShader:{log:W,prefix:g},fragmentShader:{log:O,prefix:h}})}r.deleteShader(M),r.deleteShader(A),S=new Pc(r,_),w=vF(r,_)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,aF)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lF++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let IF=0;class FF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NF(e),n.set(e,i)),i}}class NF{constructor(e){this.id=IF++,this.code=e,this.usedTimes=0}}function UF(t,e,n,i,r,s){const o=new SE,a=new FF,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,w,I,P,z){const G=P.fog,j=z.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||V,W),D=O&&O.mapping===Ou?O.image.height:null,F=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Be("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const $=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=$!==void 0?$.length:0;let te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let be,Ue,Ye,K;if(F){const st=Ti[F];be=st.vertexShader,Ue=st.fragmentShader}else be=S.vertexShader,Ue=S.fragmentShader,a.update(S),Ye=a.getVertexShaderID(S),K=a.getFragmentShaderID(S);const oe=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Fe=!!S.map,dt=!!S.matcap,je=!!O,et=!!S.aoMap,it=!!S.lightMap,Ve=!!S.bumpMap,_t=!!S.normalMap,L=!!S.displacementMap,ht=!!S.emissiveMap,Ze=!!S.metalnessMap,rt=!!S.roughnessMap,Te=S.anisotropy>0,R=S.clearcoat>0,E=S.dispersion>0,U=S.iridescence>0,ee=S.sheen>0,ie=S.transmission>0,Z=Te&&!!S.anisotropyMap,Ee=R&&!!S.clearcoatMap,ue=R&&!!S.clearcoatNormalMap,Re=R&&!!S.clearcoatRoughnessMap,pe=U&&!!S.iridescenceMap,ne=U&&!!S.iridescenceThicknessMap,re=ee&&!!S.sheenColorMap,xe=ee&&!!S.sheenRoughnessMap,me=!!S.specularMap,de=!!S.specularColorMap,ke=!!S.specularIntensityMap,N=ie&&!!S.transmissionMap,fe=ie&&!!S.thicknessMap,ce=!!S.gradientMap,Se=!!S.alphaMap,ae=S.alphaTest>0,Q=!!S.alphaHash,we=!!S.extensions;let ze=Ii;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ze=t.toneMapping);const mt={shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:be,fragmentShader:Ue,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Lo,alphaToCoverage:!!S.alphaToCoverage,map:Fe,matcap:dt,envMap:je,envMapMode:je&&O.mapping,envMapCubeUVHeight:D,aoMap:et,lightMap:it,bumpMap:Ve,normalMap:_t,displacementMap:L,emissiveMap:ht,normalMapObjectSpace:_t&&S.normalMapType===TP,normalMapTangentSpace:_t&&S.normalMapType===EP,metalnessMap:Ze,roughnessMap:rt,anisotropy:Te,anisotropyMap:Z,clearcoat:R,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:E,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:ne,sheen:ee,sheenColorMap:re,sheenRoughnessMap:xe,specularMap:me,specularColorMap:de,specularIntensityMap:ke,transmission:ie,transmissionMap:N,thicknessMap:fe,gradientMap:ce,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:Se,alphaTest:ae,alphaHash:Q,combine:S.combine,mapUv:Fe&&m(S.map.channel),aoMapUv:et&&m(S.aoMap.channel),lightMapUv:it&&m(S.lightMap.channel),bumpMapUv:Ve&&m(S.bumpMap.channel),normalMapUv:_t&&m(S.normalMap.channel),displacementMapUv:L&&m(S.displacementMap.channel),emissiveMapUv:ht&&m(S.emissiveMap.channel),metalnessMapUv:Ze&&m(S.metalnessMap.channel),roughnessMapUv:rt&&m(S.roughnessMap.channel),anisotropyMapUv:Z&&m(S.anisotropyMap.channel),clearcoatMapUv:Ee&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(S.sheenRoughnessMap.channel),specularMapUv:me&&m(S.specularMap.channel),specularColorMapUv:de&&m(S.specularColorMap.channel),specularIntensityMapUv:ke&&m(S.specularIntensityMap.channel),transmissionMapUv:N&&m(S.transmissionMap.channel),thicknessMapUv:fe&&m(S.thicknessMap.channel),alphaMapUv:Se&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(_t||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Fe||Se),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&_t===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function g(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(h(w,S),v(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function h(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const w=p[S.type];let I;if(w){const P=Ti[w];I=mu.clone(P.uniforms)}else I=S.uniforms;return I}function y(S,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new LF(t,w,S,r),c.push(I),u.set(w,I)),I}function M(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){a.remove(S)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:C}}function OF(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function qx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,_,g,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=h),e++,v}function l(f,p,m,_,g,h){const v=a(f,p,m,_,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function c(f,p,m,_,g,h){const v=a(f,p,m,_,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function u(f,p){n.length>1&&n.sort(f||kF),i.length>1&&i.sort(p||qx),r.length>1&&r.sort(p||qx)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function BF(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Kx,t.set(i,[o])):r>=s.length?(o=new Kx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new qe};break;case"SpotLight":n={position:new H,direction:new H,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function VF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HF=0;function GF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WF(t){const e=new zF,n=VF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Dt,o=new Dt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,_=0,g=0,h=0,v=0,x=0,y=0,M=0,A=0,C=0;c.sort(GF);for(let w=0,I=c.length;w<I;w++){const P=c[w],z=P.color,G=P.intensity,j=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Do?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*G,d+=z.g*G,f+=z.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],G);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=j,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const O=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,O.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=O.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=V,y++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const O=P.shadow,D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=W,m++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[h]=W,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==g||S.hemiLength!==h||S.numDirectionalShadows!==v||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==M||S.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,S.directionalLength=p,S.pointLength=m,S.spotLength=_,S.rectAreaLength=g,S.hemiLength=h,S.numDirectionalShadows=v,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=M,S.numLightProbes=C,i.version=HF++)}function l(c,u){let d=0,f=0,p=0,m=0,_=0;const g=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Zx(t){const e=new WF(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jF(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Zx(t),e.set(r,[a])):s>=o.length?(a=new Zx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const XF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$F=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],qF=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Qx=new Dt,ia=new H,pd=new H;function KF(t,e,n){let i=new bE;const r=new Ne,s=new Ne,o=new Ct,a=new cD,l=new uD,c={},u=n.maxTextureSize,d={[Br]:wn,[wn]:Br,[Xi]:Xi},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:XF,fragmentShader:YF}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let h=this.type;this.render=function(A,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===eP&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tc);const w=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Li),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==this.type;G&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(V=>V.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,V=A.length;j<V;j++){const W=A[j],O=W.shadow;if(O===void 0){Be("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const D=O.getFrameExtents();r.multiply(D),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,O.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ca){if(W.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bn(r.x,r.y,{format:Do,type:Un,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new qa(r.x,r.y,Ai),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=rr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt}else W.isPointLight?(O.map=new FE(r.x),O.map.depthTexture=new sD(r.x,Ni)):(O.map=new bn(r.x,r.y),O.map.depthTexture=new qa(r.x,r.y,Ni)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=rr,this.type===Tc?(O.map.depthTexture.compareFunction=F?cg:lg,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt);O.camera.updateProjectionMatrix()}const $=O.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<$;J++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,J),t.clear();else{J===0&&(t.setRenderTarget(O.map),t.clear());const te=O.getViewport(J);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),z.viewport(o)}if(W.isPointLight){const te=O.camera,be=O.matrix,Ue=W.distance||te.far;Ue!==te.far&&(te.far=Ue,te.updateProjectionMatrix()),ia.setFromMatrixPosition(W.matrixWorld),te.position.copy(ia),pd.copy(te.position),pd.add($F[J]),te.up.copy(qF[J]),te.lookAt(pd),te.updateMatrixWorld(),be.makeTranslation(-ia.x,-ia.y,-ia.z),Qx.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Qx,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(W);i=O.getFrustum(),y(C,S,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===ca&&v(O,S),O.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(w,I,P)};function v(A,C){const S=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bn(r.x,r.y,{format:Do,type:Un})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,S,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,S,p,_,null)}function x(A,C,S,w){let I=null;const P=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)I=P;else if(I=S.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=I.uuid,G=C.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let V=j[G];V===void 0&&(V=I.clone(),j[G]=V,C.addEventListener("dispose",M)),I=V}if(I.visible=C.visible,I.wireframe=C.wireframe,w===ca?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const z=t.properties.get(I);z.light=S}return I}function y(A,C,S,w,I){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===ca)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const G=e.update(A),j=A.material;if(Array.isArray(j)){const V=G.groups;for(let W=0,O=V.length;W<O;W++){const D=V[W],F=j[D.materialIndex];if(F&&F.visible){const $=x(A,F,w,I);A.onBeforeShadow(t,A,C,S,G,$,D),t.renderBufferDirect(S,null,G,$,A,D),A.onAfterShadow(t,A,C,S,G,$,D)}}}else if(j.visible){const V=x(A,j,w,I);A.onBeforeShadow(t,A,C,S,G,V,null),t.renderBufferDirect(S,null,G,V,A,null),A.onAfterShadow(t,A,C,S,G,V,null)}}const z=A.children;for(let G=0,j=z.length;G<j;G++)y(z[G],C,S,w,I)}function M(A){A.target.removeEventListener("dispose",M);for(const S in c){const w=c[S],I=A.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function ZF(t,e){function n(){let N=!1;const fe=new Ct;let ce=null;const Se=new Ct(0,0,0,0);return{setMask:function(ae){ce!==ae&&!N&&(t.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){N=ae},setClear:function(ae,Q,we,ze,mt){mt===!0&&(ae*=ze,Q*=ze,we*=ze),fe.set(ae,Q,we,ze),Se.equals(fe)===!1&&(t.clearColor(ae,Q,we,ze),Se.copy(fe))},reset:function(){N=!1,ce=null,Se.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ce=null,Se=null,ae=null;return{setReversed:function(Q){if(fe!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),fe=Q;const ze=ae;ae=null,this.setClear(ze)}},getReversed:function(){return fe},setTest:function(Q){Q?oe(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Q){ce!==Q&&!N&&(t.depthMask(Q),ce=Q)},setFunc:function(Q){if(fe&&(Q=FP[Q]),Se!==Q){switch(Q){case Oh:t.depthFunc(t.NEVER);break;case kh:t.depthFunc(t.ALWAYS);break;case Bh:t.depthFunc(t.LESS);break;case Ro:t.depthFunc(t.LEQUAL);break;case zh:t.depthFunc(t.EQUAL);break;case Vh:t.depthFunc(t.GEQUAL);break;case Hh:t.depthFunc(t.GREATER);break;case Gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ae!==Q&&(ae=Q,fe&&(Q=1-Q),t.clearDepth(Q))},reset:function(){N=!1,ce=null,Se=null,ae=null,fe=!1}}}function r(){let N=!1,fe=null,ce=null,Se=null,ae=null,Q=null,we=null,ze=null,mt=null;return{setTest:function(st){N||(st?oe(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(st){fe!==st&&!N&&(t.stencilMask(st),fe=st)},setFunc:function(st,Ui,Oi){(ce!==st||Se!==Ui||ae!==Oi)&&(t.stencilFunc(st,Ui,Oi),ce=st,Se=Ui,ae=Oi)},setOp:function(st,Ui,Oi){(Q!==st||we!==Ui||ze!==Oi)&&(t.stencilOp(st,Ui,Oi),Q=st,we=Ui,ze=Oi)},setLocked:function(st){N=st},setClear:function(st){mt!==st&&(t.clearStencil(st),mt=st)},reset:function(){N=!1,fe=null,ce=null,Se=null,ae=null,Q=null,we=null,ze=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,h=null,v=null,x=null,y=null,M=null,A=null,C=new qe(0,0,0),S=0,w=!1,I=null,P=null,z=null,G=null,j=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),W=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),W=O>=2);let F=null,$={};const J=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),be=new Ct().fromArray(J),Ue=new Ct().fromArray(te);function Ye(N,fe,ce,Se){const ae=new Uint8Array(4),Q=t.createTexture();t.bindTexture(N,Q),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ce;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(fe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Q}const K={};K[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Ro),Ve(!1),_t(tx),oe(t.CULL_FACE),et(Li);function oe(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Oe(N,fe){return d[N]!==fe?(t.bindFramebuffer(N,fe),d[N]=fe,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Le(N,fe){let ce=p,Se=!1;if(N){ce=f.get(fe),ce===void 0&&(ce=[],f.set(fe,ce));const ae=N.textures;if(ce.length!==ae.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,we=ae.length;Q<we;Q++)ce[Q]=t.COLOR_ATTACHMENT0+Q;ce.length=ae.length,Se=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,Se=!0);Se&&t.drawBuffers(ce)}function Fe(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const dt={[is]:t.FUNC_ADD,[nP]:t.FUNC_SUBTRACT,[iP]:t.FUNC_REVERSE_SUBTRACT};dt[rP]=t.MIN,dt[sP]=t.MAX;const je={[oP]:t.ZERO,[aP]:t.ONE,[lP]:t.SRC_COLOR,[Nh]:t.SRC_ALPHA,[pP]:t.SRC_ALPHA_SATURATE,[dP]:t.DST_COLOR,[uP]:t.DST_ALPHA,[cP]:t.ONE_MINUS_SRC_COLOR,[Uh]:t.ONE_MINUS_SRC_ALPHA,[hP]:t.ONE_MINUS_DST_COLOR,[fP]:t.ONE_MINUS_DST_ALPHA,[mP]:t.CONSTANT_COLOR,[gP]:t.ONE_MINUS_CONSTANT_COLOR,[vP]:t.CONSTANT_ALPHA,[xP]:t.ONE_MINUS_CONSTANT_ALPHA};function et(N,fe,ce,Se,ae,Q,we,ze,mt,st){if(N===Li){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(oe(t.BLEND),_=!0),N!==tP){if(N!==g||st!==w){if((h!==is||y!==is)&&(t.blendEquation(t.FUNC_ADD),h=is,y=is),st)switch(N){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uu:t.blendFunc(t.ONE,t.ONE);break;case nx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ix:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case nx:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}v=null,x=null,M=null,A=null,C.set(0,0,0),S=0,g=N,w=st}return}ae=ae||fe,Q=Q||ce,we=we||Se,(fe!==h||ae!==y)&&(t.blendEquationSeparate(dt[fe],dt[ae]),h=fe,y=ae),(ce!==v||Se!==x||Q!==M||we!==A)&&(t.blendFuncSeparate(je[ce],je[Se],je[Q],je[we]),v=ce,x=Se,M=Q,A=we),(ze.equals(C)===!1||mt!==S)&&(t.blendColor(ze.r,ze.g,ze.b,mt),C.copy(ze),S=mt),g=N,w=!1}function it(N,fe){N.side===Xi?le(t.CULL_FACE):oe(t.CULL_FACE);let ce=N.side===wn;fe&&(ce=!ce),Ve(ce),N.blending===gs&&N.transparent===!1?et(Li):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){I!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),I=N)}function _t(N){N!==Q2?(oe(t.CULL_FACE),N!==P&&(N===tx?t.cullFace(t.BACK):N===J2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),P=N}function L(N){N!==z&&(W&&t.lineWidth(N),z=N)}function ht(N,fe,ce){N?(oe(t.POLYGON_OFFSET_FILL),(G!==fe||j!==ce)&&(G=fe,j=ce,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,ce))):le(t.POLYGON_OFFSET_FILL)}function Ze(N){N?oe(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function rt(N){N===void 0&&(N=t.TEXTURE0+V-1),F!==N&&(t.activeTexture(N),F=N)}function Te(N,fe,ce){ce===void 0&&(F===null?ce=t.TEXTURE0+V-1:ce=F);let Se=$[ce];Se===void 0&&(Se={type:void 0,texture:void 0},$[ce]=Se),(Se.type!==N||Se.texture!==fe)&&(F!==ce&&(t.activeTexture(ce),F=ce),t.bindTexture(N,fe||K[N]),Se.type=N,Se.texture=fe)}function R(){const N=$[F];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ee(){try{t.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ie(){try{t.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ue(){try{t.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Re(){try{t.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function pe(){try{t.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ne(){try{t.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function re(N){be.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),be.copy(N))}function xe(N){Ue.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ue.copy(N))}function me(N,fe){let ce=c.get(fe);ce===void 0&&(ce=new WeakMap,c.set(fe,ce));let Se=ce.get(N);Se===void 0&&(Se=t.getUniformBlockIndex(fe,N.name),ce.set(N,Se))}function de(N,fe){const Se=c.get(fe).get(N);l.get(fe)!==Se&&(t.uniformBlockBinding(fe,Se,N.__bindingPointIndex),l.set(fe,Se))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},F=null,$={},d={},f=new WeakMap,p=[],m=null,_=!1,g=null,h=null,v=null,x=null,y=null,M=null,A=null,C=new qe(0,0,0),S=0,w=!1,I=null,P=null,z=null,G=null,j=null,be.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:le,bindFramebuffer:Oe,drawBuffers:Le,useProgram:Fe,setBlending:et,setMaterial:it,setFlipSided:Ve,setCullFace:_t,setLineWidth:L,setPolygonOffset:ht,setScissorTest:Ze,activeTexture:rt,bindTexture:Te,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:U,texImage2D:pe,texImage3D:ne,updateUBOMapping:me,uniformBlockBinding:de,texStorage2D:ue,texStorage3D:Re,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ee,scissor:re,viewport:xe,reset:ke}}function QF(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):hu("canvas")}function _(R,E,U){let ee=1;const ie=Te(R);if((ie.width>U||ie.height>U)&&(ee=U/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(ee*ie.width),Ee=Math.floor(ee*ie.height);d===void 0&&(d=m(Z,Ee));const ue=E?m(Z,Ee):d;return ue.width=Z,ue.height=Ee,ue.getContext("2d").drawImage(R,0,0,Z,Ee),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Ee+")."),ue}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,U,ee,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),E===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),E===t.RGBA){const Ee=ie?fu:Qe.getTransfer(ee);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=Ee===ot?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,E){let U;return R?E===null||E===Ni||E===$a?U=t.DEPTH24_STENCIL8:E===Ai?U=t.DEPTH32F_STENCIL8:E===Ya&&(U=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===$a?U=t.DEPTH_COMPONENT24:E===Ai?U=t.DEPTH_COMPONENT32F:E===Ya&&(U=t.DEPTH_COMPONENT16),U}function M(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&u.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),I(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const U=R.source,ee=f.get(U);if(ee){const ie=ee[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(R),Object.keys(ee).length===0&&f.delete(U)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const U=R.source,ee=f.get(U);delete ee[E.__cacheKey],o.memory.textures--}function I(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ie=0;ie<E.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const U=R.textures;for(let ee=0,ie=U.length;ee<ie;ee++){const Z=i.get(U[ee]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[ee])}i.remove(R)}let P=0;function z(){P=0}function G(){const R=P;return R>=r.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function V(R,E){const U=i.get(R);if(R.isVideoTexture&&Ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const ee=R.image;if(ee===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,R,E);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+E)}function W(R,E){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,E);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+E)}function O(R,E){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,E);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+E)}function D(R,E){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){oe(U,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+E)}const F={[Wh]:t.REPEAT,[qi]:t.CLAMP_TO_EDGE,[jh]:t.MIRRORED_REPEAT},$={[Kt]:t.NEAREST,[SP]:t.NEAREST_MIPMAP_NEAREST,[Il]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[Bf]:t.LINEAR_MIPMAP_NEAREST,[fs]:t.LINEAR_MIPMAP_LINEAR},J={[wP]:t.NEVER,[PP]:t.ALWAYS,[bP]:t.LESS,[lg]:t.LEQUAL,[AP]:t.EQUAL,[cg]:t.GEQUAL,[CP]:t.GREATER,[RP]:t.NOTEQUAL};function te(R,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ln||E.magFilter===Bf||E.magFilter===Il||E.magFilter===fs||E.minFilter===ln||E.minFilter===Bf||E.minFilter===Il||E.minFilter===fs)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,F[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,F[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,F[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==Il&&E.minFilter!==fs||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function be(R,E){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const ee=E.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const Z=j(E);if(Z!==R.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ie[Z].usedTimes++;const Ee=ie[R.__cacheKey];Ee!==void 0&&(ie[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(E)),R.__cacheKey=Z,R.__webglTexture=ie[Z].texture}return U}function Ue(R,E,U){return Math.floor(Math.floor(R/U)/E)}function Ye(R,E,U,ee){const Z=R.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,U,ee,E.data);else{Z.sort((ne,re)=>ne.start-re.start);let Ee=0;for(let ne=1;ne<Z.length;ne++){const re=Z[Ee],xe=Z[ne],me=re.start+re.count,de=Ue(xe.start,E.width,4),ke=Ue(re.start,E.width,4);xe.start<=me+1&&de===ke&&Ue(xe.start+xe.count-1,E.width,4)===de?re.count=Math.max(re.count,xe.start+xe.count-re.start):(++Ee,Z[Ee]=xe)}Z.length=Ee+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ne=0,re=Z.length;ne<re;ne++){const xe=Z[ne],me=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),ke=me%E.width,N=Math.floor(me/E.width),fe=de,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ke,N,fe,ce,U,ee,E.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function K(R,E,U){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=be(R,E),Z=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+U);const Ee=i.get(Z);if(Z.version!==Ee.__version||ie===!0){n.activeTexture(t.TEXTURE0+U);const ue=Qe.getPrimaries(Qe.workingColorSpace),Re=E.colorSpace===Tr?null:Qe.getPrimaries(E.colorSpace),pe=E.colorSpace===Tr||ue===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ne=_(E.image,!1,r.maxTextureSize);ne=rt(E,ne);const re=s.convert(E.format,E.colorSpace),xe=s.convert(E.type);let me=x(E.internalFormat,re,xe,E.colorSpace,E.isVideoTexture);te(ee,E);let de;const ke=E.mipmaps,N=E.isVideoTexture!==!0,fe=Ee.__version===void 0||ie===!0,ce=Z.dataReady,Se=M(E,ne);if(E.isDepthTexture)me=y(E.format===ds,E.type),fe&&(N?n.texStorage2D(t.TEXTURE_2D,1,me,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,me,ne.width,ne.height,0,re,xe,null));else if(E.isDataTexture)if(ke.length>0){N&&fe&&n.texStorage2D(t.TEXTURE_2D,Se,me,ke[0].width,ke[0].height);for(let ae=0,Q=ke.length;ae<Q;ae++)de=ke[ae],N?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,de.width,de.height,re,xe,de.data):n.texImage2D(t.TEXTURE_2D,ae,me,de.width,de.height,0,re,xe,de.data);E.generateMipmaps=!1}else N?(fe&&n.texStorage2D(t.TEXTURE_2D,Se,me,ne.width,ne.height),ce&&Ye(E,ne,re,xe)):n.texImage2D(t.TEXTURE_2D,0,me,ne.width,ne.height,0,re,xe,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,me,ke[0].width,ke[0].height,ne.depth);for(let ae=0,Q=ke.length;ae<Q;ae++)if(de=ke[ae],E.format!==ci)if(re!==null)if(N){if(ce)if(E.layerUpdates.size>0){const we=Rx(de.width,de.height,E.format,E.type);for(const ze of E.layerUpdates){const mt=de.data.subarray(ze*we/de.data.BYTES_PER_ELEMENT,(ze+1)*we/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,ze,de.width,de.height,1,re,mt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,ne.depth,re,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,me,de.width,de.height,ne.depth,0,de.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,ne.depth,re,xe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,me,de.width,de.height,ne.depth,0,re,xe,de.data)}else{N&&fe&&n.texStorage2D(t.TEXTURE_2D,Se,me,ke[0].width,ke[0].height);for(let ae=0,Q=ke.length;ae<Q;ae++)de=ke[ae],E.format!==ci?re!==null?N?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,de.width,de.height,re,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,me,de.width,de.height,0,de.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,de.width,de.height,re,xe,de.data):n.texImage2D(t.TEXTURE_2D,ae,me,de.width,de.height,0,re,xe,de.data)}else if(E.isDataArrayTexture)if(N){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,me,ne.width,ne.height,ne.depth),ce)if(E.layerUpdates.size>0){const ae=Rx(ne.width,ne.height,E.format,E.type);for(const Q of E.layerUpdates){const we=ne.data.subarray(Q*ae/ne.data.BYTES_PER_ELEMENT,(Q+1)*ae/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,re,xe,we)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,re,xe,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,re,xe,ne.data);else if(E.isData3DTexture)N?(fe&&n.texStorage3D(t.TEXTURE_3D,Se,me,ne.width,ne.height,ne.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,re,xe,ne.data)):n.texImage3D(t.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,re,xe,ne.data);else if(E.isFramebufferTexture){if(fe)if(N)n.texStorage2D(t.TEXTURE_2D,Se,me,ne.width,ne.height);else{let ae=ne.width,Q=ne.height;for(let we=0;we<Se;we++)n.texImage2D(t.TEXTURE_2D,we,me,ae,Q,0,re,xe,null),ae>>=1,Q>>=1}}else if(ke.length>0){if(N&&fe){const ae=Te(ke[0]);n.texStorage2D(t.TEXTURE_2D,Se,me,ae.width,ae.height)}for(let ae=0,Q=ke.length;ae<Q;ae++)de=ke[ae],N?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,re,xe,de):n.texImage2D(t.TEXTURE_2D,ae,me,re,xe,de);E.generateMipmaps=!1}else if(N){if(fe){const ae=Te(ne);n.texStorage2D(t.TEXTURE_2D,Se,me,ae.width,ae.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,xe,ne)}else n.texImage2D(t.TEXTURE_2D,0,me,re,xe,ne);g(E)&&h(ee),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function oe(R,E,U){if(E.image.length!==6)return;const ee=be(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const Z=i.get(ie);if(ie.version!==Z.__version||ee===!0){n.activeTexture(t.TEXTURE0+U);const Ee=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Tr?null:Qe.getPrimaries(E.colorSpace),Re=E.colorSpace===Tr||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!pe&&!ne?re[Q]=_(E.image[Q],!0,r.maxCubemapSize):re[Q]=ne?E.image[Q].image:E.image[Q],re[Q]=rt(E,re[Q]);const xe=re[0],me=s.convert(E.format,E.colorSpace),de=s.convert(E.type),ke=x(E.internalFormat,me,de,E.colorSpace),N=E.isVideoTexture!==!0,fe=Z.__version===void 0||ee===!0,ce=ie.dataReady;let Se=M(E,xe);te(t.TEXTURE_CUBE_MAP,E);let ae;if(pe){N&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,ke,xe.width,xe.height);for(let Q=0;Q<6;Q++){ae=re[Q].mipmaps;for(let we=0;we<ae.length;we++){const ze=ae[we];E.format!==ci?me!==null?N?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ze.width,ze.height,me,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,ke,ze.width,ze.height,0,ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ze.width,ze.height,me,de,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,ke,ze.width,ze.height,0,me,de,ze.data)}}}else{if(ae=E.mipmaps,N&&fe){ae.length>0&&Se++;const Q=Te(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){N?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,me,de,re[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,re[Q].width,re[Q].height,0,me,de,re[Q].data);for(let we=0;we<ae.length;we++){const mt=ae[we].image[Q].image;N?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,mt.width,mt.height,me,de,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,ke,mt.width,mt.height,0,me,de,mt.data)}}else{N?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me,de,re[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ke,me,de,re[Q]);for(let we=0;we<ae.length;we++){const ze=ae[we];N?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,me,de,ze.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,ke,me,de,ze.image[Q])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),Z.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,U,ee,ie,Z){const Ee=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),Re=x(U.internalFormat,Ee,ue,U.colorSpace),pe=i.get(E),ne=i.get(U);if(ne.__renderTarget=E,!pe.__hasExternalTextures){const re=Math.max(1,E.width>>Z),xe=Math.max(1,E.height>>Z);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Z,Re,re,xe,E.depth,0,Ee,ue,null):n.texImage2D(ie,Z,Re,re,xe,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ht(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,ne.__webglTexture,0,L(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,ne.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,E,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ee=E.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Z=y(E.stencilBuffer,ie),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ht(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(E),Z,E.width,E.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(E),Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let ie=0;ie<ee.length;ie++){const Z=ee[ie],Ee=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),Re=x(Z.internalFormat,Ee,ue,Z.colorSpace);ht(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(E),Re,E.width,E.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(E),Re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Re,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(R,E,U){const ee=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(E.depthTexture);if(ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),te(t.TEXTURE_CUBE_MAP,E.depthTexture);const pe=s.convert(E.depthTexture.format),ne=s.convert(E.depthTexture.type);let re;E.depthTexture.format===rr?re=t.DEPTH_COMPONENT24:E.depthTexture.format===ds&&(re=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,re,E.width,E.height,0,pe,ne,null)}}else V(E.depthTexture,0);const Z=ie.__webglTexture,Ee=L(E),ue=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Re=E.depthTexture.format===ds?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===rr)ht(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ue,Z,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ue,Z,0);else if(E.depthTexture.format===ds)ht(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ue,Z,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ue,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const E=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ee}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(U)for(let ee=0;ee<6;ee++)Le(E.__webglFramebuffer[ee],R,ee);else{const ee=R.texture.mipmaps;ee&&ee.length>0?Le(E.__webglFramebuffer[0],R,0):Le(E.__webglFramebuffer,R,0)}else if(U){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),Oe(E.__webglDepthbuffer[ee],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Z)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Oe(E.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(R,E,U){const ee=i.get(R);E!==void 0&&le(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Fe(R)}function je(R){const E=R.texture,U=i.get(R),ee=i.get(E);R.addEventListener("dispose",C);const ie=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let Re=0;Re<E.mipmaps.length;Re++)U.__webglFramebuffer[ue][Re]=t.createFramebuffer()}else U.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)U.__webglFramebuffer[ue]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,Re=ie.length;ue<Re;ue++){const pe=i.get(ie[ue]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ht(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const Re=ie[ue];U.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const pe=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),re=x(Re.internalFormat,pe,ne,Re.colorSpace,R.isXRRenderTarget===!0),xe=L(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),te(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)le(U.__webglFramebuffer[ue][Re],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else le(U.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,Re=ie.length;ue<Re;ue++){const pe=ie[ue],ne=i.get(pe);let re=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,ne.__webglTexture),te(re,pe),le(U.__webglFramebuffer,R,pe,t.COLOR_ATTACHMENT0+ue,re,0),g(pe)&&h(re)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),te(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)le(U.__webglFramebuffer[Re],R,E,t.COLOR_ATTACHMENT0,ue,Re);else le(U.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ue,0);g(E)&&h(ue),n.unbindTexture()}R.depthBuffer&&Fe(R)}function et(R){const E=R.textures;for(let U=0,ee=E.length;U<ee;U++){const ie=E[U];if(g(ie)){const Z=v(R),Ee=i.get(ie).__webglTexture;n.bindTexture(Z,Ee),h(Z),n.unbindTexture()}}}const it=[],Ve=[];function _t(R){if(R.samples>0){if(ht(R)===!1){const E=R.textures,U=R.width,ee=R.height;let ie=t.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ue=E.length>1;if(ue)for(let pe=0;pe<E.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const ne=i.get(E[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,U,ee,0,0,U,ee,ie,t.NEAREST),l===!0&&(it.length=0,Ve.length=0,it.push(t.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(Z),Ve.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let pe=0;pe<E.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const ne=i.get(E[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function ht(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function rt(R,E){const U=R.colorSpace,ee=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Lo&&U!==Tr&&(Qe.getTransfer(U)===ot?(ee!==ci||ie!==jn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",U)),E}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=O,this.setTextureCube=D,this.rebindTextures=dt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JF(t,e){function n(i,r=Tr){let s;const o=Qe.getTransfer(r);if(i===jn)return t.UNSIGNED_BYTE;if(i===ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===dE)return t.BYTE;if(i===hE)return t.SHORT;if(i===Ya)return t.UNSIGNED_SHORT;if(i===ng)return t.INT;if(i===Ni)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Un)return t.HALF_FLOAT;if(i===gE)return t.ALPHA;if(i===vE)return t.RGB;if(i===ci)return t.RGBA;if(i===rr)return t.DEPTH_COMPONENT;if(i===ds)return t.DEPTH_STENCIL;if(i===xE)return t.RED;if(i===sg)return t.RED_INTEGER;if(i===Do)return t.RG;if(i===og)return t.RG_INTEGER;if(i===ag)return t.RGBA_INTEGER;if(i===wc||i===bc||i===Ac||i===Cc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xh||i===Yh||i===$h||i===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kh||i===Zh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jh)return s.COMPRESSED_R11_EAC;if(i===ep)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tp)return s.COMPRESSED_RG11_EAC;if(i===np)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ip)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===op)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ap)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===up)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vp||i===xp||i===_p)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vp)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_p)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yp||i===Sp||i===Mp||i===Ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const eN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new RE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zt({vertexShader:eN,fragmentShader:tN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iN extends bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",g=new nN,h={},v=n.getContextAttributes();let x=null,y=null;const M=[],A=[],C=new Ne;let S=null;const w=new Wn;w.viewport=new Ct;const I=new Wn;I.viewport=new Ct;const P=[w,I],z=new dD;let G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=M[K];return oe===void 0&&(oe=new Xf,M[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=M[K];return oe===void 0&&(oe=new Xf,M[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=M[K];return oe===void 0&&(oe=new Xf,M[K]=oe),oe.getHandSpace()};function V(K){const oe=A.indexOf(K.inputSource);if(oe===-1)return;const le=M[oe];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",O);for(let K=0;K<M.length;K++){const oe=A[K];oe!==null&&(A[K]=null,M[K].disconnect(oe))}G=null,j=null,g.reset();for(const K in h)delete h[K];e.setRenderTarget(x),p=null,f=null,d=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",W),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,Le=null;v.depth&&(Le=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=v.stencil?ds:rr,Oe=v.stencil?$a:Ni);const Fe={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new bn(f.textureWidth,f.textureHeight,{format:ci,type:jn,depthTexture:new qa(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(K){for(let oe=0;oe<K.removed.length;oe++){const le=K.removed[oe],Oe=A.indexOf(le);Oe>=0&&(A[Oe]=null,M[Oe].disconnect(le))}for(let oe=0;oe<K.added.length;oe++){const le=K.added[oe];let Oe=A.indexOf(le);if(Oe===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=A.length){A.push(le),Oe=Fe;break}else if(A[Fe]===null){A[Fe]=le,Oe=Fe;break}if(Oe===-1)break}const Le=M[Oe];Le&&Le.connect(le)}}const D=new H,F=new H;function $(K,oe,le){D.setFromMatrixPosition(oe.matrixWorld),F.setFromMatrixPosition(le.matrixWorld);const Oe=D.distanceTo(F),Le=oe.projectionMatrix.elements,Fe=le.projectionMatrix.elements,dt=Le[14]/(Le[10]-1),je=Le[14]/(Le[10]+1),et=(Le[9]+1)/Le[5],it=(Le[9]-1)/Le[5],Ve=(Le[8]-1)/Le[0],_t=(Fe[8]+1)/Fe[0],L=dt*Ve,ht=dt*_t,Ze=Oe/(-Ve+_t),rt=Ze*-Ve;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Te=dt+Ze,R=je+Ze,E=L-rt,U=ht+(Oe-rt),ee=et*je/R*Te,ie=it*je/R*Te;K.projectionMatrix.makePerspective(E,U,ee,ie,Te,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,le=K.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),z.near=I.near=w.near=oe,z.far=I.far=w.far=le,(G!==z.near||j!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,j=z.far),z.layers.mask=K.layers.mask|6,w.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const Oe=K.parent,Le=z.cameras;J(z,Oe);for(let Fe=0;Fe<Le.length;Fe++)J(Le[Fe],Oe);Le.length===2?$(z,w,I):z.projectionMatrix.copy(w.projectionMatrix),te(K,z,Oe)};function te(K,oe,le){le===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Tp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(K){return h[K]};let be=null;function Ue(K,oe){if(u=oe.getViewerPose(c||o),m=oe,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;le.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let je=0;je<le.length;je++){const et=le[je];let it=null;if(p!==null)it=p.getViewport(et);else{const _t=d.getViewSubImage(f,et);it=_t.viewport,je===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let Ve=P[je];Ve===void 0&&(Ve=new Wn,Ve.layers.enable(je),Ve.viewport=new Ct,P[je]=Ve),Ve.matrix.fromArray(et.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(et.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),je===0&&(z.matrix.copy(Ve.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const je=d.getDepthInformation(le[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<le.length;je++){const et=le[je].camera;if(et){let it=h[et];it||(it=new RE,h[et]=it);const Ve=d.getCameraImage(et);it.sourceTexture=Ve}}}}for(let le=0;le<M.length;le++){const Oe=A[le],Le=M[le];Oe!==null&&Le!==void 0&&Le.update(Oe,oe,c||o)}be&&be(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null}const Ye=new IE;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Jr=new sr,rN=new Dt;function sN(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,PE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,y){h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),_(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===wn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===wn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,Jr.copy(y),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),g.envMapRotation.value.setFromMatrix4(rN.makeRotationFromEuler(Jr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(m(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const M=x.program;i.updateUBOMapping(v,M);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const x=d();v.__bindingPointIndex=x;const y=t.createBuffer(),M=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,M=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,C=y.length;A<C;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,I=S.length;w<I;w++){const P=S[w];if(p(P,A,w,M)===!0){const z=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let V=0;V<G.length;V++){const W=G[V],O=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+j,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,y,M){const A=v.value,C=x+"_"+y;if(M[C]===void 0)return typeof A=="number"||typeof A=="boolean"?M[C]=A:M[C]=A.clone(),!0;{const S=M[C];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return M[C]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function m(v){const x=v.uniforms;let y=0;const M=16;for(let C=0,S=x.length;C<S;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let I=0,P=w.length;I<P;I++){const z=w[I],G=Array.isArray(z.value)?z.value:[z.value];for(let j=0,V=G.length;j<V;j++){const W=G[j],O=_(W),D=y%M,F=D%O.boundary,$=D+F;y+=F,$!==0&&M-$<O.storage&&(y+=M-$),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=O.storage}}}const A=y%M;return A>0&&(y+=M-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const aN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function lN(){return yi===null&&(yi=new tD(aN,16,16,Do,Un),yi.name="DFG_LUT",yi.minFilter=ln,yi.magFilter=ln,yi.wrapS=qi,yi.wrapT=qi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class BE{constructor(e={}){const{canvas:n=LP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=jn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=p,g=new Set([ag,og,sg]),h=new Set([jn,Ni,Ya,$a,ig,rg]),v=new Uint32Array(4),x=new Int32Array(4);let y=null,M=null;const A=[],C=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=In;let P=0,z=0,G=null,j=-1,V=null;const W=new Ct,O=new Ct;let D=null;const F=new qe(0);let $=0,J=n.width,te=n.height,be=1,Ue=null,Ye=null;const K=new Ct(0,0,J,te),oe=new Ct(0,0,J,te);let le=!1;const Oe=new bE;let Le=!1,Fe=!1;const dt=new Dt,je=new H,et=new Ct,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function _t(){return G===null?be:1}let L=i;function ht(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eg}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",mt,!1),L===null){const k="webgl2";if(L=ht(k,b),L===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw nt("WebGLRenderer: "+b.message),b}let Ze,rt,Te,R,E,U,ee,ie,Z,Ee,ue,Re,pe,ne,re,xe,me,de,ke,N,fe,ce,Se;function ae(){Ze=new cI(L),Ze.init(),fe=new JF(L,Ze),rt=new tI(L,Ze,e,fe),Te=new ZF(L,Ze),rt.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),R=new dI(L),E=new OF,U=new QF(L,Ze,Te,E,rt,fe,R),ee=new lI(w),ie=new vD(L),ce=new JL(L,ie),Z=new uI(L,ie,R,ce),Ee=new pI(L,Z,ie,ce,R),de=new hI(L,rt,U),re=new nI(E),ue=new UF(w,ee,Ze,rt,ce,re),Re=new sN(w,E),pe=new BF,ne=new jF(Ze),me=new QL(w,ee,Te,Ee,m,l),xe=new KF(w,Ee,rt),Se=new oN(L,R,rt,Te),ke=new eI(L,Ze,R),N=new fI(L,Ze,R),R.programs=ue.programs,w.capabilities=rt,w.extensions=Ze,w.properties=E,w.renderLists=pe,w.shadowMap=xe,w.state=Te,w.info=R}ae(),_!==jn&&(S=new gI(_,n.width,n.height,r,s));const Q=new iN(w,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(J,te,!1))},this.getSize=function(b){return b.set(J,te)},this.setSize=function(b,k,q=!0){if(Q.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,te=k,n.width=Math.floor(b*be),n.height=Math.floor(k*be),q===!0&&(n.style.width=b+"px",n.style.height=k+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(J*be,te*be).floor()},this.setDrawingBufferSize=function(b,k,q){J=b,te=k,be=q,n.width=Math.floor(b*q),n.height=Math.floor(k*q),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(_===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,k,q,Y){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,k,q,Y),Te.viewport(W.copy(K).multiplyScalar(be).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,k,q,Y){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,k,q,Y),Te.scissor(O.copy(oe).multiplyScalar(be).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Te.setScissorTest(le=b)},this.setOpaqueSort=function(b){Ue=b},this.setTransparentSort=function(b){Ye=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,q=!0){let Y=0;if(b){let X=!1;if(G!==null){const ge=G.texture.format;X=g.has(ge)}if(X){const ge=G.texture.type,_e=h.has(ge),ve=me.getClearColor(),Ae=me.getClearAlpha(),Pe=ve.r,He=ve.g,Xe=ve.b;_e?(v[0]=Pe,v[1]=He,v[2]=Xe,v[3]=Ae,L.clearBufferuiv(L.COLOR,0,v)):(x[0]=Pe,x[1]=He,x[2]=Xe,x[3]=Ae,L.clearBufferiv(L.COLOR,0,x))}else Y|=L.COLOR_BUFFER_BIT}k&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),me.dispose(),pe.dispose(),ne.dispose(),E.dispose(),ee.dispose(),Ee.dispose(),ce.dispose(),Se.dispose(),ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",gg),Q.removeEventListener("sessionend",vg),jr.stop()};function we(b){b.preventDefault(),lx("WebGLRenderer: Context Lost."),I=!0}function ze(){lx("WebGLRenderer: Context Restored."),I=!1;const b=R.autoReset,k=xe.enabled,q=xe.autoUpdate,Y=xe.needsUpdate,X=xe.type;ae(),R.autoReset=b,xe.enabled=k,xe.autoUpdate=q,xe.needsUpdate=Y,xe.type=X}function mt(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const k=b.target;k.removeEventListener("dispose",st),Ui(k)}function Ui(b){Oi(b),E.remove(b)}function Oi(b){const k=E.get(b).programs;k!==void 0&&(k.forEach(function(q){ue.releaseProgram(q)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,q,Y,X,ge){k===null&&(k=it);const _e=X.isMesh&&X.matrixWorld.determinant()<0,ve=jE(b,k,q,Y,X);Te.setMaterial(Y,_e);let Ae=q.index,Pe=1;if(Y.wireframe===!0){if(Ae=Z.getWireframeAttribute(q),Ae===void 0)return;Pe=2}const He=q.drawRange,Xe=q.attributes.position;let Ie=He.start*Pe,lt=(He.start+He.count)*Pe;ge!==null&&(Ie=Math.max(Ie,ge.start*Pe),lt=Math.min(lt,(ge.start+ge.count)*Pe)),Ae!==null?(Ie=Math.max(Ie,0),lt=Math.min(lt,Ae.count)):Xe!=null&&(Ie=Math.max(Ie,0),lt=Math.min(lt,Xe.count));const Rt=lt-Ie;if(Rt<0||Rt===1/0)return;ce.setup(X,Y,ve,q,Ae);let wt,ct=ke;if(Ae!==null&&(wt=ie.get(Ae),ct=N,ct.setIndex(wt)),X.isMesh)Y.wireframe===!0?(Te.setLineWidth(Y.wireframeLinewidth*_t()),ct.setMode(L.LINES)):ct.setMode(L.TRIANGLES);else if(X.isLine){let en=Y.linewidth;en===void 0&&(en=1),Te.setLineWidth(en*_t()),X.isLineSegments?ct.setMode(L.LINES):X.isLineLoop?ct.setMode(L.LINE_LOOP):ct.setMode(L.LINE_STRIP)}else X.isPoints?ct.setMode(L.POINTS):X.isSprite&&ct.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const en=X._multiDrawStarts,Ce=X._multiDrawCounts,Rn=X._multiDrawCount,tt=Ae?ie.get(Ae).bytesPerElement:1,Qn=E.get(Y).currentProgram.getUniforms();for(let vi=0;vi<Rn;vi++)Qn.setValue(L,"_gl_DrawID",vi),ct.render(en[vi]/tt,Ce[vi])}else if(X.isInstancedMesh)ct.renderInstances(Ie,Rt,X.count);else if(q.isInstancedBufferGeometry){const en=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,en);ct.renderInstances(Ie,Rt,Ce)}else ct.render(Ie,Rt)};function mg(b,k,q){b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,fl(b,k,q),b.side=Br,b.needsUpdate=!0,fl(b,k,q),b.side=Xi):fl(b,k,q)}this.compile=function(b,k,q=null){q===null&&(q=b),M=ne.get(q),M.init(k),C.push(M),q.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights();const Y=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let _e=0;_e<ge.length;_e++){const ve=ge[_e];mg(ve,q,X),Y.add(ve)}else mg(ge,q,X),Y.add(ge)}),M=C.pop(),Y},this.compileAsync=function(b,k,q=null){const Y=this.compile(b,k,q);return new Promise(X=>{function ge(){if(Y.forEach(function(_e){E.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){X(b);return}setTimeout(ge,10)}Ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Gu=null;function WE(b){Gu&&Gu(b)}function gg(){jr.stop()}function vg(){jr.start()}const jr=new IE;jr.setAnimationLoop(WE),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(b){Gu=b,Q.setAnimationLoop(b),b===null?jr.stop():jr.start()},Q.addEventListener("sessionstart",gg),Q.addEventListener("sessionend",vg),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const q=Q.enabled===!0&&Q.isPresenting===!0,Y=S!==null&&(G===null||q)&&S.begin(w,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,k,G),M=ne.get(b,C.length),M.init(k),C.push(M),dt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Oe.setFromProjectionMatrix(dt,Ci,k.reversedDepth),Fe=this.localClippingEnabled,Le=re.init(this.clippingPlanes,Fe),y=pe.get(b,A.length),y.init(),A.push(y),Q.enabled===!0&&Q.isPresenting===!0){const _e=w.xr.getDepthSensingMesh();_e!==null&&Wu(_e,k,-1/0,w.sortObjects)}Wu(b,k,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Ue,Ye),Ve=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ve&&me.addToRenderList(y,b),this.info.render.frame++,Le===!0&&re.beginShadows();const X=M.state.shadowsArray;if(xe.render(X,b,k),Le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&S.hasRenderPass())===!1){const _e=y.opaque,ve=y.transmissive;if(M.setupLights(),k.isArrayCamera){const Ae=k.cameras;if(ve.length>0)for(let Pe=0,He=Ae.length;Pe<He;Pe++){const Xe=Ae[Pe];_g(_e,ve,b,Xe)}Ve&&me.render(b);for(let Pe=0,He=Ae.length;Pe<He;Pe++){const Xe=Ae[Pe];xg(y,b,Xe,Xe.viewport)}}else ve.length>0&&_g(_e,ve,b,k),Ve&&me.render(b),xg(y,b,k)}G!==null&&z===0&&(U.updateMultisampleRenderTarget(G),U.updateRenderTargetMipmap(G)),Y&&S.end(w),b.isScene===!0&&b.onAfterRender(w,b,k),ce.resetDefaultState(),j=-1,V=null,C.pop(),C.length>0?(M=C[C.length-1],Le===!0&&re.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Wu(b,k,q,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){Y&&et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const _e=Ee.update(b),ve=b.material;ve.visible&&y.push(b,_e,ve,q,et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const _e=Ee.update(b),ve=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),et.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),et.copy(_e.boundingSphere.center)),et.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(ve)){const Ae=_e.groups;for(let Pe=0,He=Ae.length;Pe<He;Pe++){const Xe=Ae[Pe],Ie=ve[Xe.materialIndex];Ie&&Ie.visible&&y.push(b,_e,Ie,q,et.z,Xe)}}else ve.visible&&y.push(b,_e,ve,q,et.z,null)}}const ge=b.children;for(let _e=0,ve=ge.length;_e<ve;_e++)Wu(ge[_e],k,q,Y)}function xg(b,k,q,Y){const{opaque:X,transmissive:ge,transparent:_e}=b;M.setupLightsView(q),Le===!0&&re.setGlobalState(w.clippingPlanes,q),Y&&Te.viewport(W.copy(Y)),X.length>0&&ul(X,k,q),ge.length>0&&ul(ge,k,q),_e.length>0&&ul(_e,k,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function _g(b,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const Ie=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new bn(1,1,{generateMipmaps:!0,type:Ie?Un:jn,minFilter:fs,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const ge=M.state.transmissionRenderTarget[Y.id],_e=Y.viewport||W;ge.setSize(_e.z*w.transmissionResolutionScale,_e.w*w.transmissionResolutionScale);const ve=w.getRenderTarget(),Ae=w.getActiveCubeFace(),Pe=w.getActiveMipmapLevel();w.setRenderTarget(ge),w.getClearColor(F),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&me.render(q);const He=w.toneMapping;w.toneMapping=Ii;const Xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Le===!0&&re.setGlobalState(w.clippingPlanes,Y),ul(b,q,Y),U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let lt=0,Rt=k.length;lt<Rt;lt++){const wt=k[lt],{object:ct,geometry:en,material:Ce,group:Rn}=wt;if(Ce.side===Xi&&ct.layers.test(Y.layers)){const tt=Ce.side;Ce.side=wn,Ce.needsUpdate=!0,yg(ct,q,Y,en,Ce,Rn),Ce.side=tt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge))}w.setRenderTarget(ve,Ae,Pe),w.setClearColor(F,$),Xe!==void 0&&(Y.viewport=Xe),w.toneMapping=He}function ul(b,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let X=0,ge=b.length;X<ge;X++){const _e=b[X],{object:ve,geometry:Ae,group:Pe}=_e;let He=_e.material;He.allowOverride===!0&&Y!==null&&(He=Y),ve.layers.test(q.layers)&&yg(ve,k,q,Ae,He,Pe)}}function yg(b,k,q,Y,X,ge){b.onBeforeRender(w,k,q,Y,X,ge),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(w,k,q,Y,b,ge),X.transparent===!0&&X.side===Xi&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,w.renderBufferDirect(q,k,Y,X,b,ge),X.side=Br,X.needsUpdate=!0,w.renderBufferDirect(q,k,Y,X,b,ge),X.side=Xi):w.renderBufferDirect(q,k,Y,X,b,ge),b.onAfterRender(w,k,q,Y,X,ge)}function fl(b,k,q){k.isScene!==!0&&(k=it);const Y=E.get(b),X=M.state.lights,ge=M.state.shadowsArray,_e=X.state.version,ve=ue.getParameters(b,X.state,ge,k,q),Ae=ue.getProgramCacheKey(ve);let Pe=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=ee.get(b.envMap||Y.environment,He),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",st),Pe=new Map,Y.programs=Pe);let Xe=Pe.get(Ae);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===_e)return Mg(b,ve),Xe}else ve.uniforms=ue.getUniforms(b),b.onBeforeCompile(ve,w),Xe=ue.acquireProgram(ve,Ae),Pe.set(Ae,Xe),Y.uniforms=ve.uniforms;const Ie=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=re.uniform),Mg(b,ve),Y.needsLights=YE(b),Y.lightsStateVersion=_e,Y.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Sg(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Pc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Mg(b,k){const q=E.get(b);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function jE(b,k,q,Y,X){k.isScene!==!0&&(k=it),U.resetTextureUnits();const ge=k.fog,_e=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,ve=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Lo,Ae=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pe=ee.get(Y.envMap||_e,Ae),He=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color;let wt=Ii;Y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(wt=w.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,en=ct!==void 0?ct.length:0,Ce=E.get(Y),Rn=M.state.lights;if(Le===!0&&(Fe===!0||b!==V)){const Vt=b===V&&Y.id===j;re.setState(Y,b,Vt)}let tt=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Rn.state.version||Ce.outputColorSpace!==ve||X.isBatchedMesh&&Ce.batching===!1||!X.isBatchedMesh&&Ce.batching===!0||X.isBatchedMesh&&Ce.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ce.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||X.isInstancedMesh&&Ce.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ce.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ce.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ce.instancingMorph===!1&&X.morphTexture!==null||Ce.envMap!==Pe||Y.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==He||Ce.vertexTangents!==Xe||Ce.morphTargets!==Ie||Ce.morphNormals!==lt||Ce.morphColors!==Rt||Ce.toneMapping!==wt||Ce.morphTargetsCount!==en)&&(tt=!0):(tt=!0,Ce.__version=Y.version);let Qn=Ce.currentProgram;tt===!0&&(Qn=fl(Y,k,X));let vi=!1,Xr=!1,As=!1;const pt=Qn.getUniforms(),Yt=Ce.uniforms;if(Te.useProgram(Qn.program)&&(vi=!0,Xr=!0,As=!0),Y.id!==j&&(j=Y.id,Xr=!0),vi||V!==b){Te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",b.projectionMatrix),pt.setValue(L,"viewMatrix",b.matrixWorldInverse);const lr=pt.map.cameraPosition;lr!==void 0&&lr.setValue(L,je.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Xr=!0,As=!0)}if(Ce.needsLights&&(Rn.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Rn.state.directionalShadowMap,U),Rn.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Rn.state.spotShadowMap,U),Rn.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Rn.state.pointShadowMap,U)),X.isSkinnedMesh){pt.setOptional(L,X,"bindMatrix"),pt.setOptional(L,X,"bindMatrixInverse");const Vt=X.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),pt.setValue(L,"boneTexture",Vt.boneTexture,U))}X.isBatchedMesh&&(pt.setOptional(L,X,"batchingTexture"),pt.setValue(L,"batchingTexture",X._matricesTexture,U),pt.setOptional(L,X,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",X._indirectTexture,U),pt.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",X._colorsTexture,U));const ar=q.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&de.update(X,q,Qn),(Xr||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,pt.setValue(L,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Yt.envMapIntensity.value=k.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=lN()),Xr&&(pt.setValue(L,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&XE(Yt,As),ge&&Y.fog===!0&&Re.refreshFogUniforms(Yt,ge),Re.refreshMaterialUniforms(Yt,Y,be,te,M.state.transmissionRenderTarget[b.id]),Pc.upload(L,Sg(Ce),Yt,U)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pc.upload(L,Sg(Ce),Yt,U),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(L,"center",X.center),pt.setValue(L,"modelViewMatrix",X.modelViewMatrix),pt.setValue(L,"normalMatrix",X.normalMatrix),pt.setValue(L,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Vt=Y.uniformsGroups;for(let lr=0,Cs=Vt.length;lr<Cs;lr++){const Eg=Vt[lr];Se.update(Eg,Qn),Se.bind(Eg,Qn)}}return Qn}function XE(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function YE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,k,q){const Y=E.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=k,E.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const q=E.get(b);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const $E=L.createFramebuffer();this.setRenderTarget=function(b,k=0,q=0){G=b,P=k,z=q;let Y=null,X=!1,ge=!1;if(b){const ve=E.get(b);if(ve.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),W.copy(b.viewport),O.copy(b.scissor),D=b.scissorTest,Te.viewport(W),Te.scissor(O),Te.setScissorTest(D),j=-1;return}else if(ve.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(ve.__hasExternalTextures)U.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ve.__boundDepthTexture!==He){if(He!==null&&E.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const Pe=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?Y=Pe[k][q]:Y=Pe[k],X=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?Y=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[q]:Y=Pe,W.copy(b.viewport),O.copy(b.scissor),D=b.scissorTest}else W.copy(K).multiplyScalar(be).floor(),O.copy(oe).multiplyScalar(be).floor(),D=le;if(q!==0&&(Y=$E),Te.bindFramebuffer(L.FRAMEBUFFER,Y)&&Te.drawBuffers(b,Y),Te.viewport(W),Te.scissor(O),Te.setScissorTest(D),X){const ve=E.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,q)}else if(ge){const ve=k;for(let Ae=0;Ae<b.textures.length;Ae++){const Pe=E.get(b.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,q,ve)}}else if(b!==null&&q!==0){const ve=E.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,q)}j=-1},this.readRenderTargetPixels=function(b,k,q,Y,X,ge,_e,ve=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){Te.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Pe=b.textures[ve],He=Pe.format,Xe=Pe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!rt.textureFormatReadable(He)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Xe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&q>=0&&q<=b.height-X&&L.readPixels(k,q,Y,X,fe.convert(He),fe.convert(Xe),ge)}finally{const Pe=G!==null?E.get(G).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,k,q,Y,X,ge,_e,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae)if(k>=0&&k<=b.width-Y&&q>=0&&q<=b.height-X){Te.bindFramebuffer(L.FRAMEBUFFER,Ae);const Pe=b.textures[ve],He=Pe.format,Xe=Pe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!rt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(k,q,Y,X,fe.convert(He),fe.convert(Xe),0);const lt=G!==null?E.get(G).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,lt);const Rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await IP(L,Rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.deleteBuffer(Ie),L.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,q=0){const Y=Math.pow(2,-q),X=Math.floor(b.image.width*Y),ge=Math.floor(b.image.height*Y),_e=k!==null?k.x:0,ve=k!==null?k.y:0;U.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,_e,ve,X,ge),Te.unbindTexture()};const qE=L.createFramebuffer(),KE=L.createFramebuffer();this.copyTextureToTexture=function(b,k,q=null,Y=null,X=0,ge=0){let _e,ve,Ae,Pe,He,Xe,Ie,lt,Rt;const wt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(q!==null)_e=q.max.x-q.min.x,ve=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,He=q.min.y,Xe=q.isBox3?q.min.z:0;else{const Yt=Math.pow(2,-X);_e=Math.floor(wt.width*Yt),ve=Math.floor(wt.height*Yt),b.isDataArrayTexture?Ae=wt.depth:b.isData3DTexture?Ae=Math.floor(wt.depth*Yt):Ae=1,Pe=0,He=0,Xe=0}Y!==null?(Ie=Y.x,lt=Y.y,Rt=Y.z):(Ie=0,lt=0,Rt=0);const ct=fe.convert(k.format),en=fe.convert(k.type);let Ce;k.isData3DTexture?(U.setTexture3D(k,0),Ce=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),Ce=L.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),Ce=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Rn=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),vi=L.getParameter(L.UNPACK_SKIP_ROWS),Xr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);const As=b.isDataArrayTexture||b.isData3DTexture,pt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Yt=E.get(b),ar=E.get(k),Vt=E.get(Yt.__renderTarget),lr=E.get(ar.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let Cs=0;Cs<Ae;Cs++)As&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(b).__webglTexture,X,Xe+Cs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(k).__webglTexture,ge,Rt+Cs)),L.blitFramebuffer(Pe,He,_e,ve,Ie,lt,_e,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||E.has(b)){const Yt=E.get(b),ar=E.get(k);Te.bindFramebuffer(L.READ_FRAMEBUFFER,qE),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,KE);for(let Vt=0;Vt<Ae;Vt++)As?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,X,Xe+Vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,X),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ar.__webglTexture,ge,Rt+Vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ar.__webglTexture,ge),X!==0?L.blitFramebuffer(Pe,He,_e,ve,Ie,lt,_e,ve,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(Ce,ge,Ie,lt,Rt+Vt,Pe,He,_e,ve):L.copyTexSubImage2D(Ce,ge,Ie,lt,Pe,He,_e,ve);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ce,ge,Ie,lt,Rt,_e,ve,Ae,ct,en,wt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,ge,Ie,lt,Rt,_e,ve,Ae,ct,wt.data):L.texSubImage3D(Ce,ge,Ie,lt,Rt,_e,ve,Ae,ct,en,wt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,Ie,lt,_e,ve,ct,en,wt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,Ie,lt,wt.width,wt.height,ct,wt.data):L.texSubImage2D(L.TEXTURE_2D,ge,Ie,lt,_e,ve,ct,en,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xr),ge===0&&k.generateMipmaps&&L.generateMipmap(Ce),Te.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){P=0,z=0,G=null,Te.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const cN=`
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`,uN=`
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uWSpeed;
uniform float uWIntensity;
uniform float uFlowStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform float uFogFallSpeed;
uniform vec3 uColor;
uniform float uFade;

// Core beam/flare shaping and dynamics
#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define EPS 1e-6
#define EDGE_SOFT (DT_LOCAL*4.0)
#define DT_LOCAL 0.0038
#define TAP_RADIUS 6
#define R_H 150.0
#define R_V 150.0
#define FLARE_HEIGHT 16.0
#define FLARE_AMOUNT 8.0
#define FLARE_EXP 2.0
#define TOP_FADE_START 0.1
#define TOP_FADE_EXP 1.0
#define FLOW_PERIOD 0.5
#define FLOW_SHARPNESS 1.5

// Wisps (animated micro-streaks) that travel along the beam
#define W_BASE_X 1.5
#define W_LAYER_GAP 0.25
#define W_LANES 10
#define W_SIDE_DECAY 0.5
#define W_HALF 0.01
#define W_AA 0.15
#define W_CELL 20.0
#define W_SEG_MIN 0.01
#define W_SEG_MAX 0.55
#define W_CURVE_AMOUNT 15.0
#define W_CURVE_RANGE (FLARE_HEIGHT - 3.0)
#define W_BOTTOM_EXP 10.0

// Volumetric fog controls
#define FOG_ON 1
#define FOG_CONTRAST 1.2
#define FOG_SPEED_U 0.1
#define FOG_SPEED_V -0.1
#define FOG_OCTAVES 5
#define FOG_BOTTOM_BIAS 0.8
#define FOG_TILT_TO_MOUSE 0.05
#define FOG_TILT_DEADZONE 0.01
#define FOG_TILT_MAX_X 0.35
#define FOG_TILT_SHAPE 1.5
#define FOG_BEAM_MIN 0.0
#define FOG_BEAM_MAX 0.75
#define FOG_MASK_GAMMA 0.5
#define FOG_EXPAND_SHAPE 12.2
#define FOG_EDGE_MIX 0.5

// Horizontal vignette for the fog volume
#define HFOG_EDGE_START 0.20
#define HFOG_EDGE_END 0.98
#define HFOG_EDGE_GAMMA 1.4
#define HFOG_Y_RADIUS 25.0
#define HFOG_Y_SOFT 60.0

// Beam extents and edge masking
#define EDGE_X0 0.22
#define EDGE_X1 0.995
#define EDGE_X_GAMMA 1.25
#define EDGE_LUMA_T0 0.0
#define EDGE_LUMA_T1 2.0
#define DITHER_STRENGTH 1.0

    float g(float x){return x<=0.00031308?12.92*x:1.055*pow(x,1.0/2.4)-0.055;}
    float bs(vec2 p,vec2 q,float powr){
        float d=distance(p,q),f=powr*uFalloffStart,r=(f*f)/(d*d+EPS);
        return powr*min(1.0,r);
    }
    float bsa(vec2 p,vec2 q,float powr,vec2 s){
        vec2 d=p-q; float dd=(d.x*d.x)/(s.x*s.x)+(d.y*d.y)/(s.y*s.y),f=powr*uFalloffStart,r=(f*f)/(dd+EPS);
        return powr*min(1.0,r);
    }
    float tri01(float x){float f=fract(x);return 1.0-abs(f*2.0-1.0);}
    float tauWf(float t,float tmin,float tmax){float a=smoothstep(tmin,tmin+EDGE_SOFT,t),b=1.0-smoothstep(tmax-EDGE_SOFT,tmax,t);return max(0.0,a*b);} 
    float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+34.123);return fract(p.x*p.y);}
    float vnoise(vec2 p){
        vec2 i=floor(p),f=fract(p);
        float a=h21(i),b=h21(i+vec2(1,0)),c=h21(i+vec2(0,1)),d=h21(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
    }
    float fbm2(vec2 p){
        float v=0.0,amp=0.6; mat2 m=mat2(0.86,0.5,-0.5,0.86);
        for(int i=0;i<FOG_OCTAVES;++i){v+=amp*vnoise(p); p=m*p*2.03+17.1; amp*=0.52;}
        return v;
    }
    float rGate(float x,float l){float a=smoothstep(0.0,W_AA,x),b=1.0-smoothstep(l,l+W_AA,x);return max(0.0,a*b);}
    float flareY(float y){float t=clamp(1.0-(clamp(y,0.0,FLARE_HEIGHT)/max(FLARE_HEIGHT,EPS)),0.0,1.0);return pow(t,FLARE_EXP);}

    float vWisps(vec2 uv,float topF){
    float y=uv.y,yf=(y+uFlowTime*uWSpeed)/W_CELL;
    float dRaw=clamp(uWispDensity,0.0,2.0),d=dRaw<=0.0?1.0:dRaw;
    float lanesF=floor(float(W_LANES)*min(d,1.0)+0.5); // WebGL1-safe
    int lanes=int(max(1.0,lanesF));
    float sp=min(d,1.0),ep=max(d-1.0,0.0);
    float fm=flareY(max(y,0.0)),rm=clamp(1.0-(y/max(W_CURVE_RANGE,EPS)),0.0,1.0),cm=fm*rm;
    const float G=0.05; float xS=1.0+(FLARE_AMOUNT*W_CURVE_AMOUNT*G)*cm;
    float sPix=clamp(y/R_V,0.0,1.0),bGain=pow(1.0-sPix,W_BOTTOM_EXP),sum=0.0;
    for(int s=0;s<2;++s){
        float sgn=s==0?-1.0:1.0;
        for(int i=0;i<W_LANES;++i){
            if(i>=lanes) break;
            float off=W_BASE_X+float(i)*W_LAYER_GAP,xc=sgn*(off*xS);
            float dx=abs(uv.x-xc),lat=1.0-smoothstep(W_HALF,W_HALF+W_AA,dx),amp=exp(-off*W_SIDE_DECAY);
            float seed=h21(vec2(off,sgn*17.0)),yf2=yf+seed*7.0,ci=floor(yf2),fy=fract(yf2);
            float seg=mix(W_SEG_MIN,W_SEG_MAX,h21(vec2(ci,off*2.3)));
            float spR=h21(vec2(ci,off+sgn*31.0)),seg1=rGate(fy,seg)*step(spR,sp);
            if(ep>0.0){float spR2=h21(vec2(ci*3.1+7.0,off*5.3+sgn*13.0)); float f2=fract(fy+0.5); seg1+=rGate(f2,seg*0.9)*step(spR2,ep);}
            sum+=amp*lat*seg1;
        }
    }
    float span=smoothstep(-3.0,0.0,y)*(1.0-smoothstep(R_V-6.0,R_V,y));
    return uWIntensity*sum*topF*bGain*span;
}

void mainImage(out vec4 fc,in vec2 frag){
    vec2 C=iResolution.xy*.5; float invW=1.0/max(C.x,1.0);
    vec2 sc=(512.0/iResolution.xy)*.4;
    vec2 uv=(frag-C)*sc,off=vec2(uBeamXFrac*iResolution.x*sc.x,uBeamYFrac*iResolution.y*sc.y);
    vec2 uvc = uv - off;
    float a=0.0,b=0.0;
    float basePhase=1.5*PI+uDecay*.5; float tauMin=basePhase-uDecay; float tauMax=basePhase;
    float cx=clamp(uvc.x/(R_H*uHLenFactor),-1.0,1.0),tH=clamp(TWO_PI-acos(cx),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tH+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float spd=max(abs(sin(tu)),0.02),u=clamp((basePhase-tu)/max(uDecay,EPS),0.0,1.0),env=pow(1.0-abs(u*2.0-1.0),0.8);
        vec2 p=vec2((R_H*uHLenFactor)*cos(tu),0.0);
        a+=wt*bs(uvc,p,env*spd);
    }
    float yPix=uvc.y,cy=clamp(-yPix/(R_V*uVLenFactor),-1.0,1.0),tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tV+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float yb=(-R_V)*cos(tu),s=clamp(yb/R_V,0.0,1.0),spd=max(abs(sin(tu)),0.02);
        float env=pow(1.0-s,0.6)*spd;
        float cap=1.0-smoothstep(TOP_FADE_START,1.0,s); cap=pow(cap,TOP_FADE_EXP); env*=cap;
        float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
        float fl=pow(tri01(ph),FLOW_SHARPNESS);
        env*=mix(1.0-uFlowStrength,1.0,fl);
        float yp=(-R_V*uVLenFactor)*cos(tu),m=pow(smoothstep(FLARE_HEIGHT,0.0,yp),FLARE_EXP),wx=1.0+FLARE_AMOUNT*m;
        vec2 sig=vec2(wx,1.0),p=vec2(0.0,yp);
        float mask=step(0.0,yp);
        b+=wt*bsa(uvc,p,mask*env,sig);
    }
    float sPix=clamp(yPix/R_V,0.0,1.0),topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
    float L=a+b*topA;
    float w=vWisps(vec2(uvc.x,yPix),topA);
    float fog=0.0;
#if FOG_ON
    vec2 fuv=uvc*uFogScale;
    float mAct=step(1.0,length(iMouse.xy)),nx=((iMouse.x-C.x)*invW)*mAct;
    float ax = abs(nx);
    float stMag = mix(ax, pow(ax, FOG_TILT_SHAPE), 0.35);
    float st = sign(nx) * stMag * uTiltScale;
    st = clamp(st, -FOG_TILT_MAX_X, FOG_TILT_MAX_X);
    vec2 dir=normalize(vec2(st,1.0));
    fuv+=uFogTime*uFogFallSpeed*dir;
    vec2 prp=vec2(-dir.y,dir.x);
    fuv+=prp*(0.08*sin(dot(uvc,prp)*0.08+uFogTime*0.9));
    float n=fbm2(fuv+vec2(fbm2(fuv+vec2(7.3,2.1)),fbm2(fuv+vec2(-3.7,5.9)))*0.6);
    n=pow(clamp(n,0.0,1.0),FOG_CONTRAST);
    float pixW = 1.0 / max(iResolution.y, 1.0);
#ifdef GL_OES_standard_derivatives
    float wL = max(fwidth(L), pixW);
#else
    float wL = pixW;
#endif
    float m0=pow(smoothstep(FOG_BEAM_MIN - wL, FOG_BEAM_MAX + wL, L),FOG_MASK_GAMMA);
    float bm=1.0-pow(1.0-m0,FOG_EXPAND_SHAPE); bm=mix(bm*m0,bm,FOG_EDGE_MIX);
    float yP=1.0-smoothstep(HFOG_Y_RADIUS,HFOG_Y_RADIUS+HFOG_Y_SOFT,abs(yPix));
    float nxF=abs((frag.x-C.x)*invW),hE=1.0-smoothstep(HFOG_EDGE_START,HFOG_EDGE_END,nxF); hE=pow(clamp(hE,0.0,1.0),HFOG_EDGE_GAMMA);
    float hW=mix(1.0,hE,clamp(yP,0.0,1.0));
    float bBias=mix(1.0,1.0-sPix,FOG_BOTTOM_BIAS);
    float browserFogIntensity = uFogIntensity;
    browserFogIntensity *= 1.8;
    float radialFade = 1.0 - smoothstep(0.0, 0.7, length(uvc) / 120.0);
    float safariFog = n * browserFogIntensity * bBias * bm * hW * radialFade;
    fog = safariFog;
#endif
    float LF=L+fog;
    float dith=(h21(frag)-0.5)*(DITHER_STRENGTH/255.0);
    float tone=g(LF+w);
    vec3 col=tone*uColor+dith;
    float alpha=clamp(g(L+w*0.6)+dith*0.6,0.0,1.0);
    float nxE=abs((frag.x-C.x)*invW),xF=pow(clamp(1.0-smoothstep(EDGE_X0,EDGE_X1,nxE),0.0,1.0),EDGE_X_GAMMA);
    float scene=LF+max(0.0,w)*0.5,hi=smoothstep(EDGE_LUMA_T0,EDGE_LUMA_T1,scene);
    float eM=mix(xF,1.0,hi);
    col*=eM; alpha*=eM;
    col*=uFade; alpha*=uFade;
    fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`,fN=({className:t,style:e,wispDensity:n=1,dpr:i,mouseSmoothTime:r=0,mouseTiltStrength:s=.01,horizontalBeamOffset:o=.1,verticalBeamOffset:a=0,flowSpeed:l=.35,verticalSizing:c=2,horizontalSizing:u=.5,fogIntensity:d=.45,fogScale:f=.3,wispSpeed:p=15,wispIntensity:m=5,flowStrength:_=.25,decay:g=1.1,falloffStart:h=1.2,fogFallSpeed:v=.6,color:x="#FF79C6"})=>{const y=B.useRef(null),M=B.useRef(null),A=B.useRef(null),C=B.useRef(!1),S=B.useRef(null),w=B.useRef(1),I=B.useRef(1),P=B.useRef({width:0,height:0,dpr:0}),z=B.useRef([]),G=B.useRef(performance.now()),j=B.useRef(16.7),V=B.useRef(!1),W=B.useRef(!0),O=D=>{let F=D.trim();F[0]==="#"&&(F=F.slice(1)),F.length===3&&(F=F.split("").map(J=>J+J).join(""));const $=parseInt(F,16)||16777215;return{r:($>>16&255)/255,g:($>>8&255)/255,b:($&255)/255}};return B.useEffect(()=>{const D=y.current,F=new BE({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,logarithmicDepthBuffer:!1});M.current=F,w.current=Math.min(i??(window.devicePixelRatio||1),2),I.current=w.current,F.setPixelRatio(I.current),F.shadowMap.enabled=!1,F.outputColorSpace=In,F.setClearColor(0,1);const $=F.domElement;$.style.width="100%",$.style.height="100%",$.style.display="block",D.appendChild($);const J=new EE,te=new zu(-1,1,1,-1,0,1),be=new Cn;be.setAttribute("position",new an(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const Ue={iTime:{value:0},iResolution:{value:new H(1,1,1)},iMouse:{value:new Ct(0,0,0,0)},uWispDensity:{value:n},uTiltScale:{value:s},uFlowTime:{value:0},uFogTime:{value:0},uBeamXFrac:{value:o},uBeamYFrac:{value:a},uFlowSpeed:{value:l},uVLenFactor:{value:c},uHLenFactor:{value:u},uFogIntensity:{value:d},uFogScale:{value:f},uWSpeed:{value:p},uWIntensity:{value:m},uFlowStrength:{value:_},uDecay:{value:g},uFalloffStart:{value:h},uFogFallSpeed:{value:v},uColor:{value:new H(1,1,1)},uFade:{value:C.current?1:0}};A.current=Ue;const Ye=new DE({vertexShader:cN,fragmentShader:uN,uniforms:Ue,transparent:!1,depthTest:!1,depthWrite:!1,blending:gs}),K=new gi(be,Ye);K.frustumCulled=!1,J.add(K);const oe=performance.now();let le=0,Oe=C.current?1:0;const Le=new Ne(0,0),Fe=new Ne(0,0),dt=()=>{const pe=D.clientWidth||1,ne=D.clientHeight||1,re=I.current,xe=P.current,me=Math.abs(pe-xe.width)>.5||Math.abs(ne-xe.height)>.5,de=Math.abs(re-xe.dpr)>.01;!me&&!de||(P.current={width:pe,height:ne,dpr:re},F.setPixelRatio(re),F.setSize(pe,ne,!1),Ue.iResolution.value.set(pe*re,ne*re,re),S.current=$.getBoundingClientRect(),V.current||F.render(J,te))};let je=0;const et=()=>{je&&cancelAnimationFrame(je),je=requestAnimationFrame(dt)};dt();const it=new ResizeObserver(et);it.observe(D);const Ve=new IntersectionObserver(pe=>{var ne;W.current=((ne=pe[0])==null?void 0:ne.isIntersecting)??!0},{root:null,threshold:0});Ve.observe(D);const _t=()=>{V.current=document.hidden};document.addEventListener("visibilitychange",_t,{passive:!0});const L=(pe,ne)=>{const re=S.current;if(!re)return;const xe=pe-re.left,me=ne-re.top,de=I.current,ke=re.height*de;Le.set(xe*de,ke-me*de)},ht=pe=>L(pe.clientX,pe.clientY),Ze=()=>Le.set(0,0);$.addEventListener("pointermove",ht,{passive:!0}),$.addEventListener("pointerdown",ht,{passive:!0}),$.addEventListener("pointerenter",ht,{passive:!0}),$.addEventListener("pointerleave",Ze,{passive:!0});const rt=pe=>{pe.preventDefault(),V.current=!0},Te=()=>{V.current=!1,et()};$.addEventListener("webglcontextlost",rt,!1),$.addEventListener("webglcontextrestored",Te,!1);let R=0;const E=(pe,ne,re)=>Math.max(ne,Math.min(re,pe)),U=.6,ee=50,ie=58;let Z=0;const Ee=2e3,ue=pe=>{if(pe-G.current<750)return;const re=z.current;if(re.length===0){G.current=pe;return}const xe=re.reduce((ke,N)=>ke+N,0)/re.length;let me=I.current;const de=w.current;xe<ee?me=E(I.current*.85,U,de):xe>ie&&I.current<de&&(me=E(I.current*1.1,U,de)),Math.abs(me-I.current)>.01&&pe-Z>Ee&&(I.current=me,Z=pe,dt()),z.current=[],G.current=pe},Re=()=>{if(R=requestAnimationFrame(Re),V.current||!W.current)return;const pe=(performance.now()-oe)/1e3,ne=Math.max(0,pe-le);le=pe;const re=ne*1e3;j.current=j.current*.9+re*.1;const xe=1e3/Math.max(1,j.current);z.current.push(xe),Ue.iTime.value=pe;const me=Math.min(.033,Math.max(.001,ne));Ue.uFlowTime.value+=me,Ue.uFogTime.value+=me,C.current||(Oe=Math.min(1,Oe+me/1),Ue.uFade.value=Oe,Oe>=1&&(C.current=!0));const de=Math.max(.001,r),ke=1-Math.exp(-me/de);Fe.lerp(Le,ke),Ue.iMouse.value.set(Fe.x,Fe.y,0,0),F.render(J,te),ue(performance.now())};return Re(),()=>{cancelAnimationFrame(R),it.disconnect(),Ve.disconnect(),document.removeEventListener("visibilitychange",_t),$.removeEventListener("pointermove",ht),$.removeEventListener("pointerdown",ht),$.removeEventListener("pointerenter",ht),$.removeEventListener("pointerleave",Ze),$.removeEventListener("webglcontextlost",rt),$.removeEventListener("webglcontextrestored",Te),be.dispose(),Ye.dispose(),F.dispose(),D.contains($)&&D.removeChild($)}},[i]),B.useEffect(()=>{const D=A.current;if(!D)return;D.uWispDensity.value=n,D.uTiltScale.value=s,D.uBeamXFrac.value=o,D.uBeamYFrac.value=a,D.uFlowSpeed.value=l,D.uVLenFactor.value=c,D.uHLenFactor.value=u,D.uFogIntensity.value=d,D.uFogScale.value=f,D.uWSpeed.value=p,D.uWIntensity.value=m,D.uFlowStrength.value=_,D.uDecay.value=g,D.uFalloffStart.value=h,D.uFogFallSpeed.value=v;const{r:F,g:$,b:J}=O(x||"#FFFFFF");D.uColor.value.set(F,$,J)},[n,s,o,a,l,c,u,d,f,p,m,_,g,h,v,x]),T.jsx("div",{ref:y,className:`laser-flow-container ${t||""}`,style:e})},dN=(t,e,n,i)=>{const[r,s]=B.useState(0),o=B.useRef(null);return B.useEffect(()=>{if(!i||t===null)return;const a=setTimeout(()=>{const l=performance.now(),c=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2,u=d=>{const f=Math.min((d-l)/e,1);s(Math.round(c(f)*t)),f<1&&(o.current=requestAnimationFrame(u))};o.current=requestAnimationFrame(u)},n);return()=>{clearTimeout(a),o.current&&cancelAnimationFrame(o.current)}},[i,t,e,n]),r},hN=({value:t,suffix:e,display:n,label:i,delay:r,trigger:s,theme:o})=>{const a=dN(t,1800,r,s);return T.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",flex:"1 1 auto",minWidth:0},children:[T.jsx("div",{style:{fontFamily:"'Bebas Neue', cursive",fontSize:"clamp(64px, 9vw, 120px)",lineHeight:1,color:o.numberColor,textShadow:o.numberGlow,transition:"text-shadow 0.4s ease, color 0.4s ease",whiteSpace:"nowrap"},children:n||`${a}${e}`}),T.jsx("div",{style:{fontFamily:"'DM Mono', 'Space Mono', monospace",fontSize:"clamp(9px, 1.1vw, 12px)",letterSpacing:"0.22em",textTransform:"uppercase",color:o.labelColor,transition:"color 0.4s ease",textAlign:"center",maxWidth:140,lineHeight:1.6,paddingTop:8,borderTop:`1px solid ${o.dividerColor}`},children:i})]})},pN=()=>{const{isDark:t}=zn(),[e,n]=B.useState(!1),i=B.useRef(null),[r,s]=B.useState(typeof window<"u"?window.innerWidth:1200);B.useEffect(()=>{const u=()=>s(window.innerWidth);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const o=t?"#070707":"#F0EBE0",a=r<768,l={sectionBg:o,laserColor:t?"#e74c3c":"#c0392b",numberColor:t?"#ffffff":"#1a1a1a",numberGlow:t?"0 0 20px rgba(231,76,60,0.95), 0 0 50px rgba(231,76,60,0.5), 0 0 90px rgba(231,76,60,0.2)":"0 0 16px rgba(192,57,43,0.5), 0 0 40px rgba(192,57,43,0.25)",labelColor:t?"#888888":"#666666",dividerColor:t?"rgba(231,76,60,0.35)":"rgba(192,57,43,0.30)"},c=t?"#070707 0%, rgba(7,7,7,0.85) 30%, rgba(7,7,7,0.4) 60%, rgba(7,7,7,0) 100%":"#F0EBE0 0%, rgba(240,235,224,0.85) 30%, rgba(240,235,224,0.4) 60%, rgba(240,235,224,0) 100%";return B.useEffect(()=>{const u=i.current;if(!u)return;const d=new IntersectionObserver(([f])=>{f.isIntersecting&&(n(!0),d.disconnect())},{threshold:.2});return d.observe(u),()=>d.disconnect()},[]),T.jsxs("div",{style:{position:"relative"},children:[T.jsxs("section",{ref:i,style:{position:"relative",overflow:"hidden",minHeight:"100vh",width:"100%",background:l.sectionBg,display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.4s ease"},children:[T.jsx(fN,{color:l.laserColor,horizontalBeamOffset:0,verticalBeamOffset:.85,horizontalSizing:a?2.5:.8,verticalSizing:a?28:26,wispDensity:3,wispSpeed:10,wispIntensity:8,flowSpeed:.35,flowStrength:.2,fogIntensity:.9,fogScale:.9,fogFallSpeed:.4,decay:.25,falloffStart:.1,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:160,background:`linear-gradient(to bottom, ${c})`,pointerEvents:"none",zIndex:4,transition:"background 0.4s ease"}}),T.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:120,background:`linear-gradient(to top, ${c})`,pointerEvents:"none",zIndex:4,transition:"background 0.4s ease"}}),T.jsxs("div",{style:{position:"relative",zIndex:5,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4rem",opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s ease, transform 0.7s ease",padding:a?"80px 20px":"0 24px",width:"100%"},children:[T.jsxs("div",{style:{textAlign:"center"},children:[T.jsx("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:"0.6rem",letterSpacing:"0.4em",textTransform:"uppercase",color:t?"rgba(231,76,60,0.7)":"rgba(192,57,43,0.7)",marginBottom:"1rem",transition:"color 0.4s ease"},children:"— THE NUMBERS —"}),T.jsxs("h2",{style:{fontFamily:"'Bebas Neue', cursive",fontSize:"clamp(3rem, 7vw, 6rem)",color:l.numberColor,margin:0,lineHeight:.95,letterSpacing:"0.02em",transition:"color 0.4s ease"},children:["IMPACT IN",T.jsx("br",{}),T.jsx("span",{style:{color:t?"#e74c3c":"#c0392b",transition:"color 0.4s ease"},children:"MOTION"})]})]}),T.jsx("div",{className:"laser-stats-content",style:{display:"flex",alignItems:"flex-start",justifyContent:"center",width:"100%",maxWidth:1100,padding:a?"0 16px":"0 48px",gap:a?"40px 20px":"0 48px",flexWrap:a?"wrap":"nowrap"},children:ex.map((u,d)=>T.jsxs(Lp.Fragment,{children:[T.jsx(hN,{value:u.value,suffix:u.suffix,display:u.display,label:u.label,delay:d*130,trigger:e,theme:l}),d<ex.length-1&&!a&&T.jsx("div",{style:{width:1,height:80,alignSelf:"center",background:`linear-gradient(to bottom, transparent, ${l.dividerColor}, transparent)`,flexShrink:0}})]},u.label))})]})]}),T.jsx("style",{children:`
        @media (max-width: 639px) {
          .laser-stats-content > div {
            width: calc(50% - 10px) !important;
            flex: 0 0 calc(50% - 10px) !important;
          }
        }
      `})]})},Jx={type:"change"},pg={type:"start"},zE={type:"end"},rc=new dg,e_=new Sr,mN=Math.cos(70*UP.DEG2RAD),Nt=new H,_n=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class gN extends mD{constructor(e,n=null){super(e,n),this.state=ut.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yo.ROTATE,MIDDLE:yo.DOLLY,RIGHT:yo.PAN},this.touches={ONE:fo.ROTATE,TWO:fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new zr,this._lastTargetPosition=new H,this._quat=new zr().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cx,this._sphericalDelta=new Cx,this._scale=1,this._panOffset=new H,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new H,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xN.bind(this),this._onPointerDown=vN.bind(this),this._onPointerUp=_N.bind(this),this._onContextMenu=bN.bind(this),this._onMouseWheel=MN.bind(this),this._onKeyDown=EN.bind(this),this._onTouchStart=TN.bind(this),this._onTouchMove=wN.bind(this),this._onMouseDown=yN.bind(this),this._onMouseMove=SN.bind(this),this._interceptControlDown=AN.bind(this),this._interceptControlUp=CN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jx),this.update(),this.state=ut.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Nt.copy(n).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<mN?this.object.lookAt(this.target):(e_.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(e_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(Jx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Nt.setFromMatrixColumn(n,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,n){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(n,1):(Nt.setFromMatrixColumn(n,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Nt.copy(r).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function vN(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xN(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function _N(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zE),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yN(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ut.DOLLY;break;case yo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}break;case yo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(pg)}function SN(t){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function MN(t){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(t.preventDefault(),this.dispatchEvent(pg),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(zE))}function EN(t){this.enabled!==!1&&this._handleKeyDown(t)}function TN(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ut.TOUCH_ROTATE;break;case fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ut.TOUCH_DOLLY_PAN;break;case fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(pg)}function wN(t){switch(this._trackPointer(t),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ut.NONE}}function bN(t){this.enabled!==!1&&t.preventDefault()}function AN(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CN(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RN=new zu(-1,1,1,-1,0,1);class PN extends Cn{constructor(){super(),this.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pi([0,2,0,0,2,0],2))}}const DN=new PN;class VE{constructor(e){this._mesh=new gi(DN,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RN)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class LN extends cl{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mu.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new VE(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class t_ extends cl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class IN extends cl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class FN{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,n=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new LN(Dc),this.copyPass.material.blending=Li,this.timer=new hD}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}t_!==void 0&&(o instanceof t_?i=!0:o instanceof IN&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class NN extends cl{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const UN={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fo extends cl{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(s,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new bn(s,o,{type:Un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new bn(s,o,{type:Un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=UN;this.highPassUniforms=mu.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mu.clone(Dc.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,premultipliedAlpha:!0,blending:uu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new qe,this._oldClearAlpha=1,this._basic=new hg,this._fsQuad=new VE(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Fo.BlurDirectionX=new Ne(1,0);Fo.BlurDirectionY=new Ne(0,1);const Gt={maxParticles:4e4,particleSize:1.6,morphSpeed:1.5,explosionForce:.5,primaryColor:"#00f3ff",secondaryColor:"#ff0055",bgColor:"#030305",bloomStrength:1.2,bloomRadius:.5,bloomThreshold:.1},Wi=[{slug:"javascript",name:"JavaScript",category:"Languages",color:"#F7DF1E",color2:"#a89400",details:"Advanced ES6+, React, Node.js"},{slug:"python",name:"Python",category:"Languages",color:"#3776AB",color2:"#ffd343",details:"AI/ML, Data Science"},{slug:"c",name:"C",category:"Languages",color:"#A8B9CC",color2:"#5a7a99",details:"System Programming"},{slug:"dotnet",name:"C#",category:"Languages",color:"#239120",color2:"#6fcf6b",details:"Game Dev, .NET"},{slug:"cplusplus",name:"C++",category:"Languages",color:"#00599C",color2:"#4da6ff",details:"Game Dev, Systems"},{slug:"openjdk",name:"Java",category:"Languages",color:"#5382a1",color2:"#f89820",details:"Enterprise, Android"},{slug:"go",name:"Go",category:"Languages",color:"#00ADD8",color2:"#00d4ff",details:"Concurrent Programming"},{slug:"react",name:"React",category:"Web",color:"#61DAFB",color2:"#0a7fa5",details:"SPAs, State Management"},{slug:"nextdotjs",name:"Next.js",category:"Web",color:"#ffffff",color2:"#aaaaaa",details:"SSR, Static Generation"},{slug:"nodedotjs",name:"Node.js",category:"Web",color:"#339933",color2:"#6fcf6b",details:"APIs, Microservices"},{slug:"tailwindcss",name:"Tailwind",category:"Web",color:"#06B6D4",color2:"#0e7490",details:"Responsive Design"},{slug:"graphql",name:"GraphQL",category:"Web",color:"#E10098",color2:"#ff66cc",details:"API Design"},{slug:"tensorflow",name:"TensorFlow",category:"AI/ML",color:"#FF6F00",color2:"#ffd54f",details:"Deep Learning"},{slug:"pytorch",name:"PyTorch",category:"AI/ML",color:"#EE4C2C",color2:"#ff9980",details:"Computer Vision, NLP"},{slug:"scikitlearn",name:"Scikit-learn",category:"AI/ML",color:"#F7931E",color2:"#ffd29a",details:"ML Algorithms"},{slug:"ollama",name:"Ollama",category:"AI/ML",color:"#ffffff",color2:"#aaaaaa",details:"Local LLMs"},{slug:"anthropic",name:"Prompt Eng.",category:"AI/ML",color:"#412991",color2:"#a78bfa",details:"LLM Optimization"},{slug:"huggingface",name:"AI Tools",category:"AI/ML",color:"#FFD21E",color2:"#a37d00",details:"Models & Integration"},{slug:"unrealengine",name:"Unreal",category:"Creative",color:"#ffffff",color2:"#aaaaaa",details:"Game Development"},{slug:"blender",name:"Blender",category:"Creative",color:"#F5792A",color2:"#ffc099",details:"3D Modeling"},{slug:"git",name:"Git",category:"DevOps",color:"#F05032",color2:"#ffaa99",details:"Version Control"},{slug:"docker",name:"Docker",category:"DevOps",color:"#2496ED",color2:"#8ed0ff",details:"Containerization"},{slug:"amazonaws",name:"AWS",category:"DevOps",color:"#FF9900",color2:"#ffd280",details:"Cloud Infrastructure"},{slug:"vscodium",name:"VS Code",category:"DevOps",color:"#007ACC",color2:"#66cfff",details:"Advanced IDE"},{slug:"figma",name:"Figma",category:"DevOps",color:"#F24E1E",color2:"#ff9980",details:"UI/UX Design"}],ON=[...new Set(Wi.map(t=>t.category))];class kN{constructor(e,n){this.container=e,this.onSkillLoaded=n,this.data=Wi,this.cache={},this.currentSkill=-1,this.isMorphing=!1,this.morphTime=0,this.lastTime=performance.now(),this.setupFontCanvas(),this.init()}setupFontCanvas(){const e=document.createElement("canvas");e.width=512,e.height=512,this.canvasCtx=e.getContext("2d",{willReadFrequently:!0})}init(){this.scene=new EE,this.scene.fog=new fg(Gt.bgColor,.02),this.scene.background=new qe(Gt.bgColor);const e=Math.max(this.container.clientWidth,window.innerWidth),n=Math.max(this.container.clientHeight,window.innerHeight);this.camera=new Wn(45,e/n,.1,1e3),this.camera.position.set(0,0,30),this.renderer=new BE({antialias:!1,alpha:!1}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=tg,this.container.appendChild(this.renderer.domElement);const i=new NN(this.scene,this.camera),r=new Fo(new Ne(e,n),Gt.bloomStrength,Gt.bloomRadius,Gt.bloomThreshold);this.composer=new FN(this.renderer),this.composer.addPass(i),this.composer.addPass(r),this.controls=new gN(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.createParticleSystem(),this.createStarfield(),this.resizeHandler=this.onResize.bind(this),window.addEventListener("resize",this.resizeHandler),this.renderer.setAnimationLoop(this.animate.bind(this))}createStarfield(){const n=new Float32Array(9e3);for(let r=0;r<3e3*3;r++)n[r]=(Math.random()-.5)*100;const i=new Cn;i.setAttribute("position",new an(n,3)),this.stars=new Tx(i,new AE({size:.2,color:16777215,transparent:!0,opacity:.3})),this.scene.add(this.stars)}createParticleSystem(){this.geometry=new Cn;const e=new Float32Array(Gt.maxParticles*3),n=new Float32Array(Gt.maxParticles*3),i=new Float32Array(Gt.maxParticles),r=new Float32Array(Gt.maxParticles);for(let s=0;s<Gt.maxParticles;s++)e[s*3]=(Math.random()-.5)*50,e[s*3+1]=(Math.random()-.5)*50,e[s*3+2]=(Math.random()-.5)*50,i[s]=Math.random(),r[s]=0;this.geometry.setAttribute("position",new an(e,3)),this.geometry.setAttribute("aTarget",new an(n,3)),this.geometry.setAttribute("aRandom",new an(i,1)),this.geometry.setAttribute("aActive",new an(r,1)),this.material=new Zt({vertexShader:`
        uniform float uTime; uniform float uMix; uniform float uSize; uniform float uExplosion;
        attribute vec3 aTarget; attribute float aRandom; attribute float aActive;
        varying float vAlpha; varying float vDepth;
        vec3 noise(vec3 p){return vec3(sin(p.y*3.0+uTime),cos(p.z*3.0+uTime),sin(p.x*3.0+uTime))*0.1;}
        void main(){
          vec3 posA=position;vec3 posB=aTarget;
          float scatter=sin(uMix*3.14159)*uExplosion;
          vec3 dir=normalize(posA+vec3(0.001));
          vec3 noiseVec=noise(posA*2.0)*scatter*5.0;
          vec3 mixedPos=mix(posA,posB,uMix);
          mixedPos+=(dir*scatter*3.0)+noiseVec;
          vec4 mvPosition=modelViewMatrix*vec4(mixedPos,1.0);
          gl_Position=projectionMatrix*mvPosition;
          gl_PointSize=uSize*(20.0/-mvPosition.z);
          vDepth=-mvPosition.z;
          float blink=sin(uTime*5.0+aRandom*10.0)*0.5+0.5;
          vAlpha=aActive*(0.3+0.7*blink);
        }
      `,fragmentShader:`
        uniform vec3 uColor; uniform vec3 uColor2;
        varying float vAlpha; varying float vDepth;
        void main(){
          vec2 uv=gl_PointCoord.xy-0.5; float r=length(uv);
          if(r>0.5)discard;
          float glow=pow(1.0-r*2.0,2.0);
          float fog=clamp((40.0-vDepth)/30.0,0.0,1.0);
          vec3 col=mix(uColor,uColor2,r)*4.0;
          gl_FragColor=vec4(col,vAlpha*glow*fog);
        }
      `,uniforms:{uTime:{value:0},uMix:{value:0},uSize:{value:Gt.particleSize},uExplosion:{value:Gt.explosionForce},uColor:{value:new qe(Gt.primaryColor)},uColor2:{value:new qe(Gt.secondaryColor)}},transparent:!0,depthWrite:!1,blending:uu}),this.particleSystem=new Tx(this.geometry,this.material),this.scene.add(this.particleSystem)}loadImage(e){return new Promise((n,i)=>{const r=new Image;r.crossOrigin="Anonymous",r.onload=()=>n(r),r.onerror=i,r.src=e})}generateTextPoints(e){return this.canvasCtx.clearRect(0,0,512,512),this.canvasCtx.font="900 80px sans-serif",this.canvasCtx.textAlign="center",this.canvasCtx.textBaseline="middle",this.canvasCtx.fillStyle="white",this.canvasCtx.fillText(e.slice(0,8),512/2,512/2),this.scanCanvas(512,512)}scanCanvas(e,n){const i=this.canvasCtx.getImageData(0,0,e,n).data,r=[],s=2;for(let o=0;o<n;o+=s)for(let a=0;a<e;a+=s){const l=(o*e+a)*4;i[l+3]>20&&r.push((a/e-.5)*10,((n-o)/n-.5)*10,(Math.random()-.5)*2)}return r}async getPointsFromImage(e){const n=e.slug;if(this.cache[n])return this.cache[n];const i=512,r=512;this.canvasCtx.clearRect(0,0,i,r);try{const s=await this.loadImage(`https://cdn.simpleicons.org/${e.slug}/white`),o=s.width/s.height;let a=i,l=r;o>1?l=i/o:a=r*o,this.canvasCtx.drawImage(s,(i-a)/2,(r-l)/2,a,l);const c=this.scanCanvas(i,r);if(c.length<300)throw new Error("Too few points");return this.cache[n]=c,c}catch{const s=this.generateTextPoints(e.name);return this.cache[n]=s,s}}async loadSkill(e){if(this.isMorphing||e===this.currentSkill)return;const n=this.data[e];if(!n)return;this.onSkillLoaded&&this.onSkillLoaded(e,n,!1);const i=await this.getPointsFromImage(n);this.onSkillLoaded&&this.onSkillLoaded(e,n,!0);for(let a=Math.floor(i.length/3)-1;a>0;a--){const l=Math.floor(Math.random()*(a+1));[i[a*3],i[l*3]]=[i[l*3],i[a*3]],[i[a*3+1],i[l*3+1]]=[i[l*3+1],i[a*3+1]],[i[a*3+2],i[l*3+2]]=[i[l*3+2],i[a*3+2]]}const r=this.geometry.attributes.aTarget,s=this.geometry.attributes.aActive,o=Math.floor(i.length/3);for(let a=0;a<Gt.maxParticles;a++)if(a<o)r.setXYZ(a,i[a*3],i[a*3+1],i[a*3+2]),s.setX(a,1);else{const l=20+Math.random()*10,c=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);r.setXYZ(a,l*Math.sin(u)*Math.cos(c),l*Math.sin(u)*Math.sin(c),l*Math.cos(u)),s.setX(a,0)}r.needsUpdate=!0,s.needsUpdate=!0,this.isMorphing=!0,this.morphTime=0,this.currentSkill=e,this.material.uniforms.uColor.value.set(n.color),this.material.uniforms.uColor2.value.set(n.color2)}animate(){const e=performance.now(),n=Math.min((e-this.lastTime)/1e3,.05);if(this.lastTime=e,this.isMorphing)if(this.morphTime+=n*Gt.morphSpeed,this.morphTime>=1)this.morphTime=1,this.isMorphing=!1,this.geometry.attributes.position.array.set(this.geometry.attributes.aTarget.array),this.geometry.attributes.position.needsUpdate=!0,this.material.uniforms.uMix.value=0;else{const i=this.morphTime*this.morphTime*(3-2*this.morphTime);this.material.uniforms.uMix.value=i}this.material.uniforms.uTime.value+=n,this.stars&&(this.stars.rotation.y+=5e-4),this.controls.update(),this.composer.render()}onResize(){if(!this.container||!this.camera||!this.renderer)return;const e=Math.max(this.container.clientWidth,1),n=Math.max(this.container.clientHeight,1);this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n);const i=e<768;this.material.uniforms.uSize.value=i?Gt.particleSize*1.8:Gt.particleSize,this.camera.position.z=i?35:30}dispose(){var e,n,i,r,s,o;window.removeEventListener("resize",this.resizeHandler),(e=this.renderer)==null||e.setAnimationLoop(null);try{const a=this.renderer.domElement.getContext("webgl2")||this.renderer.domElement.getContext("webgl");if(a){const l=a.getExtension("WEBGL_lose_context");l&&l.loseContext()}}catch{}this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),(n=this.geometry)==null||n.dispose(),(i=this.material)==null||i.dispose(),(r=this.composer)==null||r.dispose(),(s=this.controls)==null||s.dispose(),(o=this.scene)==null||o.clear()}}const BN=()=>({background:"linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",border:"1px solid rgba(255,255,255,0.10)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",boxShadow:"0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)"});function zN(){const t=B.useRef(null),e=B.useRef(null),n=B.useRef(null),i=B.useRef(null),{isDark:r}=zn(),[s,o]=B.useState(0),[a,l]=B.useState(Wi[0]),[c,u]=B.useState(!1),[d,f]=B.useState(!1),[p,m]=B.useState("All"),_=p==="All"?Wi:Wi.filter(y=>y.category===p),g=B.useCallback(()=>{i.current&&clearInterval(i.current),i.current=setInterval(()=>{if(e.current){const y=(e.current.currentSkill+1)%Wi.length;e.current.loadSkill(y)}},4500)},[]),h=B.useCallback(()=>{i.current&&clearInterval(i.current),g()},[g]);B.useEffect(()=>{if(!t.current)return;const y=requestAnimationFrame(()=>{e.current=new kN(t.current,(M,A,C)=>{o(M),l(A),u(C),C&&f(!0)}),e.current.loadSkill(0),g()});return()=>{cancelAnimationFrame(y),i.current&&clearInterval(i.current),e.current&&(e.current.dispose(),e.current=null)}},[g]),B.useEffect(()=>{const y=n.current;if(!y)return;const M=y.querySelector('[data-active="true"]');if(M){const A=M.offsetLeft-y.offsetLeft-y.getBoundingClientRect().width/2+M.offsetWidth/2;y.scrollTo({left:A,behavior:"smooth"})}},[s,p]);const v=y=>{e.current&&(e.current.loadSkill(y),h())},x=a.color||"#00f3ff";return T.jsxs("section",{id:"skills",style:{position:"relative",width:"100%",height:"100vh",minHeight:600,overflow:"hidden",backgroundColor:"#030305"},children:[!d&&T.jsxs("div",{style:{position:"absolute",inset:0,zIndex:50,background:"#030305",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16},children:[T.jsx("p",{style:{fontFamily:"monospace",fontSize:11,letterSpacing:"0.25em",color:"#00f3ff",textTransform:"uppercase",margin:0},children:"Initializing Quantum System"}),T.jsx("div",{style:{width:180,height:2,background:"rgba(255,255,255,0.08)",borderRadius:2,overflow:"hidden"},children:T.jsx("div",{style:{height:"100%",width:"50%",background:"#00f3ff",borderRadius:2}})})]}),T.jsx("div",{ref:t,style:{position:"absolute",inset:0,zIndex:10,width:"100%",height:"100%"}}),T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:80,background:"linear-gradient(to bottom, #030305, transparent)",zIndex:5,pointerEvents:"none"}}),T.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:200,background:"linear-gradient(to top, #030305f0, transparent)",zIndex:5,pointerEvents:"none"}}),T.jsxs("div",{style:{position:"absolute",inset:0,zIndex:20,pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"24px 28px"},children:[T.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"},children:[T.jsxs("div",{children:[T.jsx("p",{style:{fontFamily:"monospace",fontSize:10,letterSpacing:"0.3em",color:"rgba(255,255,255,0.30)",textTransform:"uppercase",margin:0},children:"Tech Universe"}),T.jsx("h1",{style:{fontFamily:"monospace",fontSize:13,letterSpacing:"0.15em",color:"rgba(255,255,255,0.65)",textTransform:"uppercase",margin:"4px 0 0"},children:"04 — Skills"})]}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:999,...BN(),pointerEvents:"auto"},children:[T.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 8px #4ade80"}}),T.jsx("span",{style:{fontFamily:"monospace",fontSize:10,letterSpacing:"0.2em",color:"rgba(255,255,255,0.75)"},children:"ONLINE"})]})]}),T.jsxs("div",{style:{width:"100%",pointerEvents:"auto",display:"flex",flexDirection:"column",gap:10},children:[T.jsxs("div",{style:{paddingLeft:4,marginBottom:2},children:[T.jsxs("div",{style:{fontFamily:"monospace",fontSize:10,letterSpacing:"0.25em",color:x,textTransform:"uppercase",marginBottom:4,opacity:.8},children:["[ ",a.category," ]"]}),T.jsx("div",{style:{fontFamily:"'Bebas Neue', 'Orbitron', monospace",fontSize:"clamp(32px, 5vw, 56px)",fontWeight:900,lineHeight:1,color:x,textShadow:`0 0 30px ${x}50`,opacity:c?1:.4,transition:"opacity 0.4s ease, color 0.4s ease",letterSpacing:"-0.01em"},children:a.name}),T.jsx("div",{style:{fontFamily:"monospace",fontSize:11,color:"rgba(255,255,255,0.45)",marginTop:4,letterSpacing:"0.05em"},children:a.details})]}),T.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:2,scrollbarWidth:"none"},children:["All",...ON].map(y=>{const M=p===y;return T.jsx("button",{onClick:()=>m(y),style:{fontFamily:"monospace",fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",padding:"4px 12px",borderRadius:999,border:M?`1px solid ${x}`:"1px solid rgba(255,255,255,0.12)",background:M?`${x}18`:"rgba(255,255,255,0.03)",color:M?x:"rgba(255,255,255,0.40)",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.25s ease",flexShrink:0},children:y},y)})}),T.jsx("div",{ref:n,style:{display:"flex",gap:6,overflowX:"auto",padding:"4px 0",scrollbarWidth:"none"},children:_.map(y=>{const M=Wi.findIndex(C=>C.slug===y.slug),A=M===s;return T.jsxs("button",{"data-active":A,onClick:()=>v(M),style:{display:"flex",alignItems:"center",gap:7,padding:"7px 14px",borderRadius:10,border:A?`1px solid ${y.color}60`:"1px solid rgba(255,255,255,0.10)",background:A?`${y.color}18`:"rgba(255,255,255,0.03)",boxShadow:A?`0 0 20px ${y.color}28`:"none",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,transform:A?"scale(1.06)":"scale(1)",transition:"all 0.25s ease",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},children:[T.jsx("span",{style:{width:6,height:6,borderRadius:"50%",flexShrink:0,background:y.color,boxShadow:A?`0 0 8px ${y.color}`:"none",opacity:A?1:.45}}),T.jsx("span",{style:{fontFamily:"monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:A?y.color:"rgba(255,255,255,0.45)",fontWeight:A?700:400,transition:"color 0.25s ease"},children:y.name})]},y.slug)})}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,paddingLeft:2},children:[T.jsx("span",{style:{fontFamily:"monospace",fontSize:10,color:"rgba(255,255,255,0.30)",letterSpacing:"0.1em"},children:String(s+1).padStart(2,"0")}),T.jsx("div",{style:{flex:1,height:1,background:"rgba(255,255,255,0.10)",borderRadius:1,maxWidth:120},children:T.jsx("div",{style:{height:"100%",background:x,borderRadius:1,width:`${(s+1)/Wi.length*100}%`,transition:"width 0.6s ease",boxShadow:`0 0 6px ${x}`}})}),T.jsx("span",{style:{fontFamily:"monospace",fontSize:10,color:"rgba(255,255,255,0.20)",letterSpacing:"0.1em"},children:String(Wi.length).padStart(2,"0")}),T.jsx("span",{style:{fontFamily:"monospace",fontSize:9,color:"rgba(255,255,255,0.18)",letterSpacing:"0.15em",textTransform:"uppercase",marginLeft:"auto"},children:"Drag · Click"})]})]})]})]})}const VN=()=>{const{colors:t}=zn();return T.jsxs("footer",{id:"footer",style:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"2rem",overflow:"hidden",clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"},children:[T.jsxs("div",{className:"footer-content",style:{position:"fixed",bottom:0,left:0,width:"100%",height:"100vh",zIndex:-1,pointerEvents:"none",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:"2rem"},children:[T.jsx("div",{className:"footer-title",style:{width:"100%",textAlign:"center",fontFamily:"Bebas Neue",fontSize:"clamp(6rem, 25vw, 32rem)",color:t.fg,lineHeight:.8,display:"flex",flexDirection:"column",alignItems:"center"},children:T.jsxs("div",{style:{display:"flex",alignItems:"center",transition:"transform 0.3s"},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.02)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1)",children:[T.jsx("span",{children:"PSY"}),T.jsx("div",{style:{width:"clamp(3rem, 12vw, 15rem)",height:"clamp(3rem, 12vw, 15rem)",borderRadius:"50%",border:`clamp(6px, 2vw, 24px) solid ${t.fg}`,margin:"0 clamp(0.5rem, 2vw, 2rem)"}}),T.jsx("span",{children:"DRZ"})]})}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0 clamp(1rem, 4vw, 3rem)",marginTop:"2rem"},children:[T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:t.muted,textTransform:"uppercase"},children:"© 2025 ADITYA SRIVASTAVA"}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:t.muted,textTransform:"uppercase"},children:"BASED IN INDIA"}),T.jsx("div",{style:{fontFamily:"DM Mono",fontSize:"0.6rem",color:t.muted,textTransform:"uppercase"},children:"DESIGNED & ENGINEERED FROM SCRATCH"})]})]}),T.jsx("div",{style:{flex:1}})]})};var n_="1.3.18";function HE(t,e,n){return Math.max(t,Math.min(e,n))}function HN(t,e,n){return(1-n)*t+n*e}function GN(t,e,n,i){return HN(t,e,1-Math.exp(-n*i))}function WN(t,e){return(t%e+e)%e}var jN=class{constructor(){De(this,"isRunning",!1);De(this,"value",0);De(this,"from",0);De(this,"to",0);De(this,"currentTime",0);De(this,"lerp");De(this,"duration");De(this,"easing");De(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=HE(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=GN(this.value,this.to,this.lerp*60,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function XN(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var YN=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){De(this,"width",0);De(this,"height",0);De(this,"scrollHeight",0);De(this,"scrollWidth",0);De(this,"debouncedResize");De(this,"wrapperResizeObserver");De(this,"contentResizeObserver");De(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});De(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});De(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=XN(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},GE=class{constructor(){De(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}},$N=100/6,gr={passive:!1};function i_(t,e){return t===1?$N:t===2?e:1}var qN=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){De(this,"touchStart",{x:0,y:0});De(this,"lastDelta",{x:0,y:0});De(this,"window",{width:0,height:0});De(this,"emitter",new GE);De(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});De(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});De(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});De(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=i_(i,this.window.width),s=i_(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});De(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gr),this.element.addEventListener("touchstart",this.onTouchStart,gr),this.element.addEventListener("touchmove",this.onTouchMove,gr),this.element.addEventListener("touchend",this.onTouchEnd,gr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,gr),this.element.removeEventListener("touchstart",this.onTouchStart,gr),this.element.removeEventListener("touchmove",this.onTouchMove,gr),this.element.removeEventListener("touchend",this.onTouchEnd,gr)}},r_=t=>Math.min(1,1.001-2**(-10*t)),KN=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:h,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:M=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:S=C,stopInertiaOnNavigate:w=!1}={}){De(this,"_isScrolling",!1);De(this,"_isStopped",!1);De(this,"_isLocked",!1);De(this,"_preventNextNativeScrollEvent",!1);De(this,"_resetVelocityTimeout",null);De(this,"_rafId",null);De(this,"isTouching");De(this,"time",0);De(this,"userData",{});De(this,"lastVelocity",0);De(this,"velocity",0);De(this,"direction",0);De(this,"options");De(this,"targetScroll");De(this,"animatedScroll");De(this,"animate",new jN);De(this,"emitter",new GE);De(this,"dimensions");De(this,"virtualScroll");De(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});De(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});De(this,"onTransitionEnd",t=>{t.propertyName.includes("overflow")&&this.checkOverflow()});De(this,"onClick",t=>{const n=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.getAttribute("href"));if(this.options.anchors){const i=n.find(r=>{var s;return(s=r.getAttribute("href"))==null?void 0:s.includes("#")});if(i){const r=i.getAttribute("href");if(r){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${r.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&n.find(r=>r.host===window.location.host)&&this.reset()});De(this,"onPointerDown",t=>{t.button===1&&this.reset()});De(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(c.find(h=>{var v,x,y,M,A;return h instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(h))||((v=h.hasAttribute)==null?void 0:v.call(h,"data-lenis-prevent"))||d==="vertical"&&((x=h.hasAttribute)==null?void 0:x.call(h,"data-lenis-prevent-vertical"))||d==="horizontal"&&((y=h.hasAttribute)==null?void 0:y.call(h,"data-lenis-prevent-horizontal"))||r&&((M=h.hasAttribute)==null?void 0:M.call(h,"data-lenis-prevent-touch"))||s&&((A=h.hasAttribute)==null?void 0:A.call(h,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(h,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const m=r&&this.options.syncTouch,g=r&&i.type==="touchend";g&&(p=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...m?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});De(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});De(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=n_,window.lenis||(window.lenis={}),window.lenis.version=n_,d==="horizontal"&&(window.lenis.horizontal=!0),(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof l!="function"?l=r_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:h,overscroll:v,autoRaf:x,anchors:y,autoToggle:M,allowNestedScroll:A,naiveDimensions:S,stopInertiaOnNavigate:w},this.dimensions=new YN(t,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new qN(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=t,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?g.left:g.top}const _=m.getBoundingClientRect();f=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof f=="number"){if(f+=p,f=Math.round(f),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=HE(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=r_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,o,a,l,c,u,d,f,p,m;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(t);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=t.scrollWidth,f=t.scrollHeight,p=t.clientWidth,m=t.clientHeight,a=d>p,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=p,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let g,h,v,x,y,M;if(_==="horizontal")g=Math.round(t.scrollLeft),h=d-p,v=e,x=s,y=a,M=c;else if(_==="vertical")g=Math.round(t.scrollTop),h=f-m,v=n,x=o,y=l,M=u;else return!1;return!M&&(g>=h||g<=0)?!0:(v>0?g<h:g>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?WN(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function ZN(){const[t,e]=B.useState("counting"),[n,i]=B.useState(new Set),[r,s]=B.useState({featured:[],rest:[]}),[o,a]=B.useState(!0);return B.useEffect(()=>{(async()=>{try{const c=await fetch("https://api.github.com/users/Psyodrz/repos?sort=updated&per_page=100");if(!c.ok)throw new Error("API Rate limit or network error");const u=await c.json(),d=["AutoCode-AI","FaceDetectionApp","PortfolioV2","SciFi-Horror-Game","AI-HackerRank"];let f=[],p=[];u.forEach(m=>{m.fork||(d.includes(m.name)||m.stargazers_count>5?f.push(m):p.push(m))}),f.sort((m,_)=>_.stargazers_count-m.stargazers_count),p.sort((m,_)=>new Date(_.updated_at)-new Date(m.updated_at)),s({featured:f.length>0?f.slice(0,6):[{name:"PortfolioV2",description:"Immersive terminal portfolio",language:"JavaScript",html_url:"#"},{name:"AutoCode-AI",description:"Browser extension for solving competitive programming",language:"TypeScript",html_url:"#"},{name:"FaceDetectionApp",description:"Real-time mobile app",language:"TypeScript",html_url:"#"},{name:"Horror-Survival-3D",description:"Unity game engine project",language:"C#",html_url:"#"},{name:"Neural-Style-Trans",description:"Deep learning art generation",language:"Python",html_url:"#"},{name:"Next-Gen-Engine",description:"Custom rendering engine",language:"C++",html_url:"#"}],rest:p.length>0?p:Array(15).fill().map((m,_)=>({name:`Project-X-${_}`,description:"Miscellaneous scripts and utilities",language:["Python","JavaScript","C#","TypeScript"][_%4],stargazers_count:_%3,html_url:"#"}))}),a(!1)}catch{console.error("Failed to fetch GitHub repos, using fallback data."),s({featured:[{name:"PortfolioV2",description:"Immersive terminal portfolio built from scratch",language:"JavaScript",html_url:"#"},{name:"AutoCode-AI",description:"Browser extension for solving competitive programming",language:"TypeScript",html_url:"#"},{name:"FaceDetectionApp",description:"Real-time mobile app",language:"TypeScript",html_url:"#"},{name:"Horror-Survival-3D",description:"Unity game engine project",language:"C#",html_url:"#"},{name:"Neural-Style-Trans",description:"Deep learning art generation",language:"Python",html_url:"#"},{name:"Next-Gen-Engine",description:"Custom rendering engine",language:"C++",html_url:"#"}],rest:Array(15).fill().map((u,d)=>({name:`Utility-Script-${d}`,description:"Miscellaneous tools and experiments",language:["Python","JavaScript","C#","TypeScript"][d%4],stargazers_count:Math.floor(Math.random()*5),html_url:"#"}))}),a(!1)}})()},[]),B.useEffect(()=>{const l=new KN({duration:1.2,easing:u=>Math.min(1,1.001-Math.pow(2,-10*u)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});window.lenis=l;function c(u){l.raf(u),requestAnimationFrame(c)}return requestAnimationFrame(c),()=>{delete window.lenis,l.destroy()}},[]),B.useEffect(()=>{if(t!=="done")return;const l=new IntersectionObserver(c=>{c.forEach(u=>{if(u.isIntersecting){const d=u.target.getAttribute("data-section");d&&i(f=>{const p=new Set(f);return p.add(d),p}),u.target.classList.add("revealed")}})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll("[data-section]").forEach(c=>l.observe(c)),()=>l.disconnect()},[t]),T.jsxs(T.Fragment,{children:[T.jsx(Aw,{}),T.jsx(Cw,{}),T.jsx(Rw,{phase:t,setPhase:e}),T.jsxs("div",{style:{opacity:t==="done"?1:0,transition:"opacity 0.8s"},children:[T.jsx(Ow,{}),T.jsxs("main",{children:[T.jsx(O2,{phase:t}),T.jsx(V2,{revealedSections:n}),T.jsx(j2,{revealedSections:n}),T.jsx(zN,{}),T.jsx(pN,{}),T.jsx($2,{repos:r,reposLoading:o,revealedSections:n}),T.jsx(K2,{phase:t,revealedSections:n}),T.jsx(Z2,{})]}),T.jsx(VN,{})]})]})}const QN=()=>T.jsx(bw,{children:T.jsx(ZN,{})});gd.createRoot(document.getElementById("root")).render(T.jsx(Lp.StrictMode,{children:T.jsx(QN,{})}));
