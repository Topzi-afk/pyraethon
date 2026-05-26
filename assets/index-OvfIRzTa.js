(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var zh={exports:{}},qo={};var Cv;function vM(){if(Cv)return qo;Cv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return qo.Fragment=e,qo.jsx=n,qo.jsxs=n,qo}var wv;function _M(){return wv||(wv=1,zh.exports=vM()),zh.exports}var oe=_M(),Ih={exports:{}},st={};var Dv;function xM(){if(Dv)return st;Dv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function M(F,J,Se){this.props=F,this.context=J,this.refs=x,this.updater=Se||E}M.prototype.isReactComponent={},M.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},M.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function w(){}w.prototype=M.prototype;function D(F,J,Se){this.props=F,this.context=J,this.refs=x,this.updater=Se||E}var U=D.prototype=new w;U.constructor=D,C(U,M.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(F,J,Se){var Re=Se.ref;return{$$typeof:a,type:F,key:J,ref:Re!==void 0?Re:null,props:Se}}function Y(F,J){return L(F.type,J,F.props)}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function j(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Se){return J[Se]})}var ue=/\/+/g;function de(F,J){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):J.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,J,Se,Re,Ne){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var ye=!1;if(F===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(F.$$typeof){case a:case e:ye=!0;break;case g:return ye=F._init,O(ye(F._payload),J,Se,Re,Ne)}}if(ye)return Ne=Ne(F),ye=Re===""?"."+de(F,0):Re,G(Ne)?(Se="",ye!=null&&(Se=ye.replace(ue,"$&/")+"/"),O(Ne,J,Se,"",function(nt){return nt})):Ne!=null&&(z(Ne)&&(Ne=Y(Ne,Se+(Ne.key==null||F&&F.key===Ne.key?"":(""+Ne.key).replace(ue,"$&/")+"/")+ye)),J.push(Ne)),1;ye=0;var Te=Re===""?".":Re+":";if(G(F))for(var Ge=0;Ge<F.length;Ge++)Re=F[Ge],se=Te+de(Re,Ge),ye+=O(Re,J,Se,se,Ne);else if(Ge=y(F),typeof Ge=="function")for(F=Ge.call(F),Ge=0;!(Re=F.next()).done;)Re=Re.value,se=Te+de(Re,Ge++),ye+=O(Re,J,Se,se,Ne);else if(se==="object"){if(typeof F.then=="function")return O(X(F),J,Se,Re,Ne);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ye}function I(F,J,Se){if(F==null)return F;var Re=[],Ne=0;return O(F,Re,"","",function(se){return J.call(Se,se,Ne++)}),Re}function le(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(Se){(F._status===0||F._status===-1)&&(F._status=1,F._result=Se)},function(Se){(F._status===0||F._status===-1)&&(F._status=2,F._result=Se)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var ve=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Ee={map:I,forEach:function(F,J,Se){I(F,function(){J.apply(this,arguments)},Se)},count:function(F){var J=0;return I(F,function(){J++}),J},toArray:function(F){return I(F,function(J){return J})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return st.Activity=v,st.Children=Ee,st.Component=M,st.Fragment=n,st.Profiler=o,st.PureComponent=D,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,st.__COMPILER_RUNTIME={__proto__:null,c:function(F){return B.H.useMemoCache(F)}},st.cache=function(F){return function(){return F.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(F,J,Se){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Re=C({},F.props),Ne=F.key;if(J!=null)for(se in J.key!==void 0&&(Ne=""+J.key),J)!T.call(J,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&J.ref===void 0||(Re[se]=J[se]);var se=arguments.length-2;if(se===1)Re.children=Se;else if(1<se){for(var ye=Array(se),Te=0;Te<se;Te++)ye[Te]=arguments[Te+2];Re.children=ye}return L(F.type,Ne,Re)},st.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},st.createElement=function(F,J,Se){var Re,Ne={},se=null;if(J!=null)for(Re in J.key!==void 0&&(se=""+J.key),J)T.call(J,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ne[Re]=J[Re]);var ye=arguments.length-2;if(ye===1)Ne.children=Se;else if(1<ye){for(var Te=Array(ye),Ge=0;Ge<ye;Ge++)Te[Ge]=arguments[Ge+2];Ne.children=Te}if(F&&F.defaultProps)for(Re in ye=F.defaultProps,ye)Ne[Re]===void 0&&(Ne[Re]=ye[Re]);return L(F,se,Ne)},st.createRef=function(){return{current:null}},st.forwardRef=function(F){return{$$typeof:d,render:F}},st.isValidElement=z,st.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:le}},st.memo=function(F,J){return{$$typeof:p,type:F,compare:J===void 0?null:J}},st.startTransition=function(F){var J=B.T,Se={};B.T=Se;try{var Re=F(),Ne=B.S;Ne!==null&&Ne(Se,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(P,ve)}catch(se){ve(se)}finally{J!==null&&Se.types!==null&&(J.types=Se.types),B.T=J}},st.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},st.use=function(F){return B.H.use(F)},st.useActionState=function(F,J,Se){return B.H.useActionState(F,J,Se)},st.useCallback=function(F,J){return B.H.useCallback(F,J)},st.useContext=function(F){return B.H.useContext(F)},st.useDebugValue=function(){},st.useDeferredValue=function(F,J){return B.H.useDeferredValue(F,J)},st.useEffect=function(F,J){return B.H.useEffect(F,J)},st.useEffectEvent=function(F){return B.H.useEffectEvent(F)},st.useId=function(){return B.H.useId()},st.useImperativeHandle=function(F,J,Se){return B.H.useImperativeHandle(F,J,Se)},st.useInsertionEffect=function(F,J){return B.H.useInsertionEffect(F,J)},st.useLayoutEffect=function(F,J){return B.H.useLayoutEffect(F,J)},st.useMemo=function(F,J){return B.H.useMemo(F,J)},st.useOptimistic=function(F,J){return B.H.useOptimistic(F,J)},st.useReducer=function(F,J,Se){return B.H.useReducer(F,J,Se)},st.useRef=function(F){return B.H.useRef(F)},st.useState=function(F){return B.H.useState(F)},st.useSyncExternalStore=function(F,J,Se){return B.H.useSyncExternalStore(F,J,Se)},st.useTransition=function(){return B.H.useTransition()},st.version="19.2.3",st}var Nv;function yp(){return Nv||(Nv=1,Ih.exports=xM()),Ih.exports}var re=yp(),Hh={exports:{}},Yo={},Gh={exports:{}},Vh={};var Uv;function SM(){return Uv||(Uv=1,(function(a){function e(O,I){var le=O.length;O.push(I);e:for(;0<le;){var ve=le-1>>>1,Ee=O[ve];if(0<o(Ee,I))O[ve]=I,O[le]=Ee,le=ve;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],le=O.pop();if(le!==I){O[0]=le;e:for(var ve=0,Ee=O.length,F=Ee>>>1;ve<F;){var J=2*(ve+1)-1,Se=O[J],Re=J+1,Ne=O[Re];if(0>o(Se,le))Re<Ee&&0>o(Ne,Se)?(O[ve]=Ne,O[Re]=le,ve=Re):(O[ve]=Se,O[J]=le,ve=J);else if(Re<Ee&&0>o(Ne,le))O[ve]=Ne,O[Re]=le,ve=Re;else break e}}return I}function o(O,I){var le=O.sortIndex-I.sortIndex;return le!==0?le:O.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,v=null,_=3,y=!1,E=!1,C=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var I=n(p);I!==null;){if(I.callback===null)r(p);else if(I.startTime<=O)r(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=n(p)}}function G(O){if(C=!1,U(O),!E)if(n(m)!==null)E=!0,P||(P=!0,j());else{var I=n(p);I!==null&&X(G,I.startTime-O)}}var P=!1,B=-1,T=5,L=-1;function Y(){return x?!0:!(a.unstable_now()-L<T)}function z(){if(x=!1,P){var O=a.unstable_now();L=O;var I=!0;try{e:{E=!1,C&&(C=!1,w(B),B=-1),y=!0;var le=_;try{t:{for(U(O),v=n(m);v!==null&&!(v.expirationTime>O&&Y());){var ve=v.callback;if(typeof ve=="function"){v.callback=null,_=v.priorityLevel;var Ee=ve(v.expirationTime<=O);if(O=a.unstable_now(),typeof Ee=="function"){v.callback=Ee,U(O),I=!0;break t}v===n(m)&&r(m),U(O)}else r(m);v=n(m)}if(v!==null)I=!0;else{var F=n(p);F!==null&&X(G,F.startTime-O),I=!1}}break e}finally{v=null,_=le,y=!1}I=void 0}}finally{I?j():P=!1}}}var j;if(typeof D=="function")j=function(){D(z)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=z,j=function(){de.postMessage(null)}}else j=function(){M(z,0)};function X(O,I){B=M(function(){O(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(O){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var le=_;_=I;try{return O()}finally{_=le}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var le=_;_=O;try{return I()}finally{_=le}},a.unstable_scheduleCallback=function(O,I,le){var ve=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ve+le:ve):le=ve,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=le+Ee,O={id:g++,callback:I,priorityLevel:O,startTime:le,expirationTime:Ee,sortIndex:-1},le>ve?(O.sortIndex=le,e(p,O),n(m)===null&&O===n(p)&&(C?(w(B),B=-1):C=!0,X(G,le-ve))):(O.sortIndex=Ee,e(m,O),E||y||(E=!0,P||(P=!0,j()))),O},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(O){var I=_;return function(){var le=_;_=I;try{return O.apply(this,arguments)}finally{_=le}}}})(Vh)),Vh}var Lv;function yM(){return Lv||(Lv=1,Gh.exports=SM()),Gh.exports}var kh={exports:{}},On={};var Ov;function MM(){if(Ov)return On;Ov=1;var a=yp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},On.flushSync=function(m){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=g,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.3",On}var Pv;function EM(){if(Pv)return kh.exports;Pv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),kh.exports=MM(),kh.exports}var Fv;function bM(){if(Fv)return Yo;Fv=1;var a=yM(),e=yp(),n=EM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=h;break}if(R===l){S=!0,l=f,s=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===s){S=!0,s=h,l=f;break}if(R===l){S=!0,l=h,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case M:return"Profiler";case x:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}var X=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ve=[],Ee=-1;function F(t){return{current:t}}function J(t){0>Ee||(t.current=ve[Ee],ve[Ee]=null,Ee--)}function Se(t,i){Ee++,ve[Ee]=t.current,t.current=i}var Re=F(null),Ne=F(null),se=F(null),ye=F(null);function Te(t,i){switch(Se(se,i),Se(Ne,t),Se(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Qg(i),t=Jg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Re),Se(Re,t)}function Ge(){J(Re),J(Ne),J(se)}function nt(t){t.memoizedState!==null&&Se(ye,t);var i=Re.current,s=Jg(i,t.type);i!==s&&(Se(Ne,t),Se(Re,s))}function $e(t){Ne.current===t&&(J(Re),J(Ne)),ye.current===t&&(J(ye),Vo._currentValue=le)}var Xt,dt;function St(t){if(Xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Xt=i&&i[1]||"",dt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var Lt=!1;function ut(t,i){if(!t||Lt)return"";Lt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var ae=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){ae=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var H=S.split(`
`),ee=R.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ee.length&&!ee[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===ee.length)for(l=H.length-1,f=ee.length-1;1<=l&&0<=f&&H[l]!==ee[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==ee[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==ee[f]){var pe=`
`+H[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=f);break}}}finally{Lt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?St(s):""}function on(t,i){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==i&&i!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return St("Activity");default:return""}}function Yt(t){try{var i="",s=null;do i+=on(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Tn=Object.prototype.hasOwnProperty,W=a.unstable_scheduleCallback,en=a.unstable_cancelCallback,pt=a.unstable_shouldYield,Ht=a.unstable_requestPaint,Ce=a.unstable_now,Kt=a.unstable_getCurrentPriorityLevel,N=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,_e=a.unstable_LowPriority,be=a.unstable_IdlePriority,we=a.log,Oe=a.unstable_setDisableYieldValue,fe=null,he=null;function Pe(t){if(typeof we=="function"&&Oe(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Fe=Math.clz32?Math.clz32:at,Ue=Math.log,De=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Ue(t)/De|0)|0}var rt=256,gt=262144,V=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?f=Ae(l):(S&=R,S!==0?f=Ae(S):s||(s=R&~t,s!==0&&(f=Ae(s))))):(R=l&~h,R!==0?f=Ae(R):S!==0?f=Ae(S):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Le(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function Ye(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function it(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,i,s,l,f,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(s=S&~s;0<s;){var pe=31-Fe(s),xe=1<<pe;R[pe]=0,H[pe]=-1;var ae=ee[pe];if(ae!==null)for(ee[pe]=null,pe=0;pe<ae.length;pe++){var ce=ae[pe];ce!==null&&(ce.lane&=-536870913)}s&=~xe}l!==0&&wt(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function wt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Fe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ui(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Fe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Qn(t,i){var s=i&-i;return s=(s&42)!==0?1:gr(s),(s&(t.suspendedLanes|i))!==0?0:s}function gr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $s(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function eo(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:yv(t.type))}function to(t,i){var s=I.p;try{return I.p=t,i()}finally{I.p=s}}var Un=Math.random().toString(36).slice(2),ln="__reactFiber$"+Un,An="__reactProps$"+Un,ta="__reactContainer$"+Un,Ua="__reactEvents$"+Un,Ml="__reactListeners$"+Un,Kr="__reactHandles$"+Un,no="__reactResources$"+Un,La="__reactMarker$"+Un;function io(t){delete t[ln],delete t[An],delete t[Ua],delete t[Ml],delete t[Kr]}function Oa(t){var i=t[ln];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ta]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=rv(t);t!==null;){if(s=t[ln])return s;t=rv(t)}return i}t=s,s=t.parentNode}return null}function Pa(t){if(t=t[ln]||t[ta]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function vr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Fa(t){var i=t[no];return i||(i=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function hn(t){t[La]=!0}var El=new Set,A={};function q(t,i){ie(t,i),ie(t+"Capture",i)}function ie(t,i){for(A[t]=i,t=0;t<i.length;t++)El.add(i[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ze={};function ke(t){return Tn.call(ze,t)?!0:Tn.call(ne,t)?!1:te.test(t)?ze[t]=!0:(ne[t]=!0,!1)}function Be(t,i,s){if(ke(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function We(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Xe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){if(!t._valueTracker){var i=lt(t)?"checked":"value";t._valueTracker=Ze(t,i,""+t[i])}}function Qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(t,i,s,l,f,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Qe(i)):t.value!==""+Qe(i)&&(t.value=""+Qe(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?vt(t,S,Qe(i)):s!=null?vt(t,S,Qe(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Qe(R):t.removeAttribute("name")}function Ln(t,i,s,l,f,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){At(t);return}s=s!=null?""+Qe(s):"",i=i!=null?""+Qe(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),At(t)}function vt(t,i,s){i==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function _n(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Qe(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Jn(t,i,s){if(i!=null&&(i=""+Qe(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Qe(s):""}function Ai(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(X(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Qe(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),At(t)}function $n(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Ft.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ri(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Jt(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Jt(t,h,i[h])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(t){return Ba.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function na(){}var Ou=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function Kp(t){var i=Pa(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ve(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Pt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[An]||null;if(!f)throw Error(r(90));Ve(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Qt(l)}break e;case"textarea":Jn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&_n(t,!!s.multiple,i,!1)}}}var Fu=!1;function Qp(t,i,s){if(Fu)return t(i,s);Fu=!0;try{var l=t(i);return l}finally{if(Fu=!1,(Qr!==null||Jr!==null)&&(uc(),Qr&&(i=Qr,t=Jr,Jr=Qr=null,Kp(i),t)))for(i=0;i<t.length;i++)Kp(t[i])}}function ao(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(ia)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Bu=!1}var za=null,zu=null,bl=null;function Jp(){if(bl)return bl;var t,i=zu,s=i.length,l,f="value"in za?za.value:za.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return bl=f.slice(t,1<l?1-l:void 0)}function Tl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function $p(){return!1}function Vn(t){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Al:$p,this.isPropagationStopped=$p,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),i}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Vn(xr),so=v({},xr,{view:0,detail:0}),mS=Vn(so),Iu,Hu,oo,Cl=v({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Iu=t.screenX-oo.screenX,Hu=t.screenY-oo.screenY):Hu=Iu=0,oo=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),em=Vn(Cl),gS=v({},Cl,{dataTransfer:0}),vS=Vn(gS),_S=v({},so,{relatedTarget:0}),Gu=Vn(_S),xS=v({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=Vn(xS),yS=v({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=Vn(yS),ES=v({},xr,{data:0}),tm=Vn(ES),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=AS[t])?!!i[t]:!1}function Vu(){return RS}var CS=v({},so,{key:function(t){if(t.key){var i=bS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wS=Vn(CS),DS=v({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Vn(DS),NS=v({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),US=Vn(NS),LS=v({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Vn(LS),PS=v({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Vn(PS),BS=v({},xr,{newState:0,oldState:0}),zS=Vn(BS),IS=[9,13,27,32],ku=ia&&"CompositionEvent"in window,lo=null;ia&&"documentMode"in document&&(lo=document.documentMode);var HS=ia&&"TextEvent"in window&&!lo,im=ia&&(!ku||lo&&8<lo&&11>=lo),am=" ",rm=!1;function sm(t,i){switch(t){case"keyup":return IS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function GS(t,i){switch(t){case"compositionend":return om(i);case"keypress":return i.which!==32?null:(rm=!0,am);case"textInput":return t=i.data,t===am&&rm?null:t;default:return null}}function VS(t,i){if($r)return t==="compositionend"||!ku&&sm(t,i)?(t=Jp(),bl=zu=za=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return im&&i.locale!=="ko"?null:i.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kS[t.type]:i==="textarea"}function cm(t,i,s,l){Qr?Jr?Jr.push(l):Jr=[l]:Qr=l,i=vc(i,"onChange"),0<i.length&&(s=new Rl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var co=null,uo=null;function XS(t){Wg(t,0)}function wl(t){var i=vr(t);if(Qt(i))return t}function um(t,i){if(t==="change")return i}var fm=!1;if(ia){var Xu;if(ia){var Wu="oninput"in document;if(!Wu){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Wu=typeof hm.oninput=="function"}Xu=Wu}else Xu=!1;fm=Xu&&(!document.documentMode||9<document.documentMode)}function dm(){co&&(co.detachEvent("onpropertychange",pm),uo=co=null)}function pm(t){if(t.propertyName==="value"&&wl(uo)){var i=[];cm(i,uo,t,Pu(t)),Qp(XS,i)}}function WS(t,i,s){t==="focusin"?(dm(),co=i,uo=s,co.attachEvent("onpropertychange",pm)):t==="focusout"&&dm()}function qS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(uo)}function YS(t,i){if(t==="click")return wl(i)}function jS(t,i){if(t==="input"||t==="change")return wl(i)}function ZS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:ZS;function fo(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Tn.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,i){var s=mm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mm(s)}}function vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function _m(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Wt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Wt(t.document)}return i}function qu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var KS=ia&&"documentMode"in document&&11>=document.documentMode,es=null,Yu=null,ho=null,ju=!1;function xm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ju||es==null||es!==Wt(l)||(l=es,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=vc(Yu,"onSelect"),0<l.length&&(i=new Rl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=es)))}function Sr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ts={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},Zu={},Sm={};ia&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function yr(t){if(Zu[t])return Zu[t];if(!ts[t])return t;var i=ts[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Sm)return Zu[t]=i[s];return t}var ym=yr("animationend"),Mm=yr("animationiteration"),Em=yr("animationstart"),QS=yr("transitionrun"),JS=yr("transitionstart"),$S=yr("transitioncancel"),bm=yr("transitionend"),Tm=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Ci(t,i){Tm.set(t,i),q(i,[t])}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],ns=0,Qu=0;function Nl(){for(var t=ns,i=Qu=ns=0;i<t;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var h=fi[i];if(fi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&Am(s,f,h)}}function Ul(t,i,s,l){fi[ns++]=t,fi[ns++]=i,fi[ns++]=s,fi[ns++]=l,Qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ju(t,i,s,l){return Ul(t,i,s,l),Ll(t)}function Mr(t,i){return Ul(t,null,null,i),Ll(t)}function Am(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Fe(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function Ll(t){if(50<Po)throw Po=0,lh=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var is={};function ey(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,s,l){return new ey(t,i,s,l)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,i){var s=t.alternate;return s===null?(s=ti(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Rm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ol(t,i,s,l,f,h){var S=0;if(l=t,typeof t=="function")$u(t)&&(S=1);else if(typeof t=="string")S=rM(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ti(31,s,i,f),t.elementType=L,t.lanes=h,t;case C:return Er(s.children,f,h,i);case x:S=8,f|=24;break;case M:return t=ti(12,s,i,f|2),t.elementType=M,t.lanes=h,t;case G:return t=ti(13,s,i,f),t.elementType=G,t.lanes=h,t;case P:return t=ti(19,s,i,f),t.elementType=P,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:S=10;break e;case w:S=9;break e;case U:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ti(S,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Er(t,i,s,l){return t=ti(7,t,l,i),t.lanes=s,t}function ef(t,i,s){return t=ti(6,t,null,i),t.lanes=s,t}function Cm(t){var i=ti(18,null,null,0);return i.stateNode=t,i}function tf(t,i,s){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var wm=new WeakMap;function hi(t,i){if(typeof t=="object"&&t!==null){var s=wm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Yt(i)},wm.set(t,i),i)}return{value:t,source:i,stack:Yt(i)}}var as=[],rs=0,Pl=null,po=0,di=[],pi=0,Ia=null,Ii=1,Hi="";function ra(t,i){as[rs++]=po,as[rs++]=Pl,Pl=t,po=i}function Dm(t,i,s){di[pi++]=Ii,di[pi++]=Hi,di[pi++]=Ia,Ia=t;var l=Ii;t=Hi;var f=32-Fe(l)-1;l&=~(1<<f),s+=1;var h=32-Fe(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ii=1<<32-Fe(i)+f|s<<f|l,Hi=h+t}else Ii=1<<h|s<<f|l,Hi=t}function nf(t){t.return!==null&&(ra(t,1),Dm(t,1,0))}function af(t){for(;t===Pl;)Pl=as[--rs],as[rs]=null,po=as[--rs],as[rs]=null;for(;t===Ia;)Ia=di[--pi],di[pi]=null,Hi=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null}function Nm(t,i){di[pi++]=Ii,di[pi++]=Hi,di[pi++]=Ia,Ii=i.id,Hi=i.overflow,Ia=t}var Rn=null,jt=null,Et=!1,Ha=null,mi=!1,rf=Error(r(519));function Ga(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(hi(i,t)),rf}function Um(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ln]=t,i[An]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<Bo.length;s++)xt(Bo[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),Ln(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Ai(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Zg(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=na),i=!0):i=!1,i||Ga(t,!0)}function Lm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function ss(t){if(t!==Rn)return!1;if(!Et)return Lm(t),Et=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Eh(t.type,t.memoizedProps)),s=!s),s&&jt&&Ga(t),Lm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=av(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=av(t)}else i===27?(i=jt,tr(t.type)?(t=Ch,Ch=null,jt=t):jt=i):jt=Rn?vi(t.stateNode.nextSibling):null;return!0}function br(){jt=Rn=null,Et=!1}function sf(){var t=Ha;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ha=null),t}function mo(t){Ha===null?Ha=[t]:Ha.push(t)}var of=F(null),Tr=null,sa=null;function Va(t,i,s){Se(of,i._currentValue),i._currentValue=s}function oa(t){t._currentValue=of.current,J(of)}function lf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function cf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var H=0;H<i.length;H++)if(R.context===i[H]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),lf(h.return,s,t),l||(S=null);break e}h=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),lf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function os(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;ei(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}f=f.return}t!==null&&cf(i,t,s,l),i.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Om(Tr,t)}function Bl(t,i){return Tr===null&&Ar(t),Om(t,i)}function Om(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},sa===null){if(t===null)throw Error(r(308));sa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else sa=sa.next=i;return s}var ty=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ny=a.unstable_scheduleCallback,iy=a.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new ty,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&ny(iy,function(){t.controller.abort()})}var vo=null,ff=0,ls=0,cs=null;function ay(t,i){if(vo===null){var s=vo=[];ff=0,ls=ph(),cs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ff++,i.then(Pm,Pm),i}function Pm(){if(--ff===0&&vo!==null){cs!==null&&(cs.status="fulfilled");var t=vo;vo=null,ls=0,cs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ry(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Fm=O.S;O.S=function(t,i){xg=Ce(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ay(t,i),Fm!==null&&Fm(t,i)};var Rr=F(null);function hf(){var t=Rr.current;return t!==null?t:qt.pooledCache}function zl(t,i){i===null?Se(Rr,Rr.current):Se(Rr,i.pool)}function Bm(){var t=hf();return t===null?null:{parent:dn._currentValue,pool:t}}var us=Error(r(460)),df=Error(r(474)),Il=Error(r(542)),Hl={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(na,na),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t;default:if(typeof i.status=="string")i.then(na,na);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t}throw wr=i,us}}function Cr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(wr=s,us):s}}var wr=null;function Hm(){if(wr===null)throw Error(r(459));var t=wr;return wr=null,t}function Gm(t){if(t===us||t===Il)throw Error(r(483))}var fs=null,_o=0;function Gl(t){var i=_o;return _o+=1,fs===null&&(fs=[]),Im(fs,t,i)}function xo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Vl(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Vm(t){function i(Z,k){if(t){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function s(Z,k){if(!t)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function f(Z,k){return Z=aa(Z,k),Z.index=0,Z.sibling=null,Z}function h(Z,k,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,k,$,ge){return k===null||k.tag!==6?(k=ef($,Z.mode,ge),k.return=Z,k):(k=f(k,$),k.return=Z,k)}function H(Z,k,$,ge){var Je=$.type;return Je===C?pe(Z,k,$.props.children,ge,$.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Cr(Je)===k.type)?(k=f(k,$.props),xo(k,$),k.return=Z,k):(k=Ol($.type,$.key,$.props,null,Z.mode,ge),xo(k,$),k.return=Z,k)}function ee(Z,k,$,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=tf($,Z.mode,ge),k.return=Z,k):(k=f(k,$.children||[]),k.return=Z,k)}function pe(Z,k,$,ge,Je){return k===null||k.tag!==7?(k=Er($,Z.mode,ge,Je),k.return=Z,k):(k=f(k,$),k.return=Z,k)}function xe(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ef(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=Ol(k.type,k.key,k.props,null,Z.mode,$),xo($,k),$.return=Z,$;case E:return k=tf(k,Z.mode,$),k.return=Z,k;case T:return k=Cr(k),xe(Z,k,$)}if(X(k)||j(k))return k=Er(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return xe(Z,Gl(k),$);if(k.$$typeof===D)return xe(Z,Bl(Z,k),$);Vl(Z,k)}return null}function ae(Z,k,$,ge){var Je=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:R(Z,k,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Je?H(Z,k,$,ge):null;case E:return $.key===Je?ee(Z,k,$,ge):null;case T:return $=Cr($),ae(Z,k,$,ge)}if(X($)||j($))return Je!==null?null:pe(Z,k,$,ge,null);if(typeof $.then=="function")return ae(Z,k,Gl($),ge);if($.$$typeof===D)return ae(Z,k,Bl(Z,$),ge);Vl(Z,$)}return null}function ce(Z,k,$,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get($)||null,R(k,Z,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Z=Z.get(ge.key===null?$:ge.key)||null,H(k,Z,ge,Je);case E:return Z=Z.get(ge.key===null?$:ge.key)||null,ee(k,Z,ge,Je);case T:return ge=Cr(ge),ce(Z,k,$,ge,Je)}if(X(ge)||j(ge))return Z=Z.get($)||null,pe(k,Z,ge,Je,null);if(typeof ge.then=="function")return ce(Z,k,$,Gl(ge),Je);if(ge.$$typeof===D)return ce(Z,k,$,Bl(k,ge),Je);Vl(k,ge)}return null}function qe(Z,k,$,ge){for(var Je=null,Rt=null,je=k,ft=k=0,Mt=null;je!==null&&ft<$.length;ft++){je.index>ft?(Mt=je,je=null):Mt=je.sibling;var Ct=ae(Z,je,$[ft],ge);if(Ct===null){je===null&&(je=Mt);break}t&&je&&Ct.alternate===null&&i(Z,je),k=h(Ct,k,ft),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct,je=Mt}if(ft===$.length)return s(Z,je),Et&&ra(Z,ft),Je;if(je===null){for(;ft<$.length;ft++)je=xe(Z,$[ft],ge),je!==null&&(k=h(je,k,ft),Rt===null?Je=je:Rt.sibling=je,Rt=je);return Et&&ra(Z,ft),Je}for(je=l(je);ft<$.length;ft++)Mt=ce(je,Z,ft,$[ft],ge),Mt!==null&&(t&&Mt.alternate!==null&&je.delete(Mt.key===null?ft:Mt.key),k=h(Mt,k,ft),Rt===null?Je=Mt:Rt.sibling=Mt,Rt=Mt);return t&&je.forEach(function(sr){return i(Z,sr)}),Et&&ra(Z,ft),Je}function et(Z,k,$,ge){if($==null)throw Error(r(151));for(var Je=null,Rt=null,je=k,ft=k=0,Mt=null,Ct=$.next();je!==null&&!Ct.done;ft++,Ct=$.next()){je.index>ft?(Mt=je,je=null):Mt=je.sibling;var sr=ae(Z,je,Ct.value,ge);if(sr===null){je===null&&(je=Mt);break}t&&je&&sr.alternate===null&&i(Z,je),k=h(sr,k,ft),Rt===null?Je=sr:Rt.sibling=sr,Rt=sr,je=Mt}if(Ct.done)return s(Z,je),Et&&ra(Z,ft),Je;if(je===null){for(;!Ct.done;ft++,Ct=$.next())Ct=xe(Z,Ct.value,ge),Ct!==null&&(k=h(Ct,k,ft),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return Et&&ra(Z,ft),Je}for(je=l(je);!Ct.done;ft++,Ct=$.next())Ct=ce(je,Z,ft,Ct.value,ge),Ct!==null&&(t&&Ct.alternate!==null&&je.delete(Ct.key===null?ft:Ct.key),k=h(Ct,k,ft),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return t&&je.forEach(function(gM){return i(Z,gM)}),Et&&ra(Z,ft),Je}function kt(Z,k,$,ge){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var Je=$.key;k!==null;){if(k.key===Je){if(Je=$.type,Je===C){if(k.tag===7){s(Z,k.sibling),ge=f(k,$.props.children),ge.return=Z,Z=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&Cr(Je)===k.type){s(Z,k.sibling),ge=f(k,$.props),xo(ge,$),ge.return=Z,Z=ge;break e}s(Z,k);break}else i(Z,k);k=k.sibling}$.type===C?(ge=Er($.props.children,Z.mode,ge,$.key),ge.return=Z,Z=ge):(ge=Ol($.type,$.key,$.props,null,Z.mode,ge),xo(ge,$),ge.return=Z,Z=ge)}return S(Z);case E:e:{for(Je=$.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(Z,k.sibling),ge=f(k,$.children||[]),ge.return=Z,Z=ge;break e}else{s(Z,k);break}else i(Z,k);k=k.sibling}ge=tf($,Z.mode,ge),ge.return=Z,Z=ge}return S(Z);case T:return $=Cr($),kt(Z,k,$,ge)}if(X($))return qe(Z,k,$,ge);if(j($)){if(Je=j($),typeof Je!="function")throw Error(r(150));return $=Je.call($),et(Z,k,$,ge)}if(typeof $.then=="function")return kt(Z,k,Gl($),ge);if($.$$typeof===D)return kt(Z,k,Bl(Z,$),ge);Vl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(Z,k.sibling),ge=f(k,$),ge.return=Z,Z=ge):(s(Z,k),ge=ef($,Z.mode,ge),ge.return=Z,Z=ge),S(Z)):s(Z,k)}return function(Z,k,$,ge){try{_o=0;var Je=kt(Z,k,$,ge);return fs=null,Je}catch(je){if(je===us||je===Il)throw je;var Rt=ti(29,je,null,Z.mode);return Rt.lanes=ge,Rt.return=Z,Rt}}}var Dr=Vm(!0),km=Vm(!1),ka=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Dt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ll(t),Am(t,null,s),i}return Ul(t,l,i,s),Ll(t)}function So(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ui(t,s)}}function gf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var vf=!1;function yo(){if(vf){var t=cs;if(t!==null)throw t}}function Mo(t,i,s,l){vf=!1;var f=t.updateQueue;ka=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var H=R,ee=H.next;H.next=null,S===null?h=ee:S.next=ee,S=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==S&&(R===null?pe.firstBaseUpdate=ee:R.next=ee,pe.lastBaseUpdate=H))}if(h!==null){var xe=f.baseState;S=0,pe=ee=H=null,R=h;do{var ae=R.lane&-536870913,ce=ae!==R.lane;if(ce?(yt&ae)===ae:(l&ae)===ae){ae!==0&&ae===ls&&(vf=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,et=R;ae=i;var kt=s;switch(et.tag){case 1:if(qe=et.payload,typeof qe=="function"){xe=qe.call(kt,xe,ae);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=et.payload,ae=typeof qe=="function"?qe.call(kt,xe,ae):qe,ae==null)break e;xe=v({},xe,ae);break e;case 2:ka=!0}}ae=R.callback,ae!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(ee=pe=ce,H=xe):pe=pe.next=ce,S|=ae;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);pe===null&&(H=xe),f.baseState=H,f.firstBaseUpdate=ee,f.lastBaseUpdate=pe,h===null&&(f.shared.lanes=0),Ka|=S,t.lanes=S,t.memoizedState=xe}}function Xm(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Wm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Xm(s[t],i)}var hs=F(null),kl=F(0);function qm(t,i){t=ga,Se(kl,t),Se(hs,i),ga=t|i.baseLanes}function _f(){Se(kl,ga),Se(hs,hs.current)}function xf(){ga=kl.current,J(hs),J(kl)}var ni=F(null),gi=null;function qa(t){var i=t.alternate;Se(cn,cn.current&1),Se(ni,t),gi===null&&(i===null||hs.current!==null||i.memoizedState!==null)&&(gi=t)}function Sf(t){Se(cn,cn.current),Se(ni,t),gi===null&&(gi=t)}function Ym(t){t.tag===22?(Se(cn,cn.current),Se(ni,t),gi===null&&(gi=t)):Ya()}function Ya(){Se(cn,cn.current),Se(ni,ni.current)}function ii(t){J(ni),gi===t&&(gi=null),J(cn)}var cn=F(0);function Xl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ah(s)||Rh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var la=0,ct=null,Gt=null,pn=null,Wl=!1,ds=!1,Nr=!1,ql=0,Eo=0,ps=null,sy=0;function an(){throw Error(r(321))}function yf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function Mf(t,i,s,l,f,h){return la=h,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?D0:Bf,Nr=!1,h=s(l,f),Nr=!1,ds&&(h=Zm(i,s,l,f)),jm(t),h}function jm(t){O.H=Ao;var i=Gt!==null&&Gt.next!==null;if(la=0,pn=Gt=ct=null,Wl=!1,Eo=0,ps=null,i)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Fl(t)&&(mn=!0))}function Zm(t,i,s,l){ct=t;var f=0;do{if(ds&&(ps=null),Eo=0,ds=!1,25<=f)throw Error(r(301));if(f+=1,pn=Gt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=N0,h=i(s,l)}while(ds);return h}function oy(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?bo(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),i}function Ef(){var t=ql!==0;return ql=0,t}function bf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Tf(t){if(Wl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Wl=!1}la=0,pn=Gt=ct=null,ds=!1,Eo=ql=0,ps=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ct.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=pn===null?ct.memoizedState:pn.next;if(i!==null)pn=i,Gt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},pn===null?ct.memoizedState=pn=t:pn=pn.next=t}return pn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var i=Eo;return Eo+=1,ps===null&&(ps=[]),t=Im(ps,t,i),i=ct,(pn===null?i.memoizedState:pn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?D0:Bf),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===D)return Cn(t)}throw Error(r(438,String(t)))}function Af(t){var i=null,s=ct.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Yl(),ct.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Y;return i.index++,s}function ca(t,i){return typeof i=="function"?i(t):i}function Zl(t){var i=un();return Rf(i,Gt,t)}function Rf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var R=S=null,H=null,ee=i,pe=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(yt&xe)===xe:(la&xe)===xe){var ae=ee.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===ls&&(pe=!0);else if((la&ae)===ae){ee=ee.next,ae===ls&&(pe=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=xe,S=h):H=H.next=xe,ct.lanes|=ae,Ka|=ae;xe=ee.action,Nr&&s(h,xe),h=ee.hasEagerState?ee.eagerState:s(h,xe)}else ae={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=ae,S=h):H=H.next=ae,ct.lanes|=xe,Ka|=xe;ee=ee.next}while(ee!==null&&ee!==i);if(H===null?S=h:H.next=R,!ei(h,t.memoizedState)&&(mn=!0,pe&&(s=cs,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=H,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var i=un(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);ei(h,i.memoizedState)||(mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Km(t,i,s){var l=ct,f=un(),h=Et;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!ei((Gt||f).memoizedState,s);if(S&&(f.memoizedState=s,mn=!0),f=f.queue,Nf($m.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,ms(9,{destroy:void 0},Jm.bind(null,l,f,s,i),null),qt===null)throw Error(r(349));h||(la&127)!==0||Qm(l,i,s)}return s}function Qm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ct.updateQueue,i===null?(i=Yl(),ct.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Jm(t,i,s,l){i.value=s,i.getSnapshot=l,e0(i)&&t0(t)}function $m(t,i,s){return s(function(){e0(i)&&t0(t)})}function e0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function t0(t){var i=Mr(t,2);i!==null&&Yn(i,t,2)}function wf(t){var i=zn();if(typeof t=="function"){var s=t;if(t=s(),Nr){Pe(!0);try{s()}finally{Pe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},i}function n0(t,i,s,l){return t.baseState=s,Rf(t,Gt,typeof l=="function"?l:ca)}function ly(t,i,s,l,f){if(Jl(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};O.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,i0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function i0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=O.T,S={};O.T=S;try{var R=s(f,l),H=O.S;H!==null&&H(S,R),a0(t,i,R)}catch(ee){Df(t,i,ee)}finally{h!==null&&S.types!==null&&(h.types=S.types),O.T=h}}else try{h=s(f,l),a0(t,i,h)}catch(ee){Df(t,i,ee)}}function a0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){r0(t,i,l)},function(l){return Df(t,i,l)}):r0(t,i,s)}function r0(t,i,s){i.status="fulfilled",i.value=s,s0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,i0(t,s)))}function Df(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,s0(i),i=i.next;while(i!==l)}t.action=null}function s0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function o0(t,i){return i}function l0(t,i){if(Et){var s=qt.formState;if(s!==null){e:{var l=ct;if(Et){if(jt){t:{for(var f=jt,h=mi;f.nodeType!==8;){if(!h){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){jt=vi(f.nextSibling),l=f.data==="F!";break e}}Ga(l)}l=!1}l&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o0,lastRenderedState:i},s.queue=l,s=R0.bind(null,ct,l),l.dispatch=s,l=wf(!1),h=Ff.bind(null,ct,!1,l.queue),l=zn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=ly.bind(null,ct,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function c0(t){var i=un();return u0(i,Gt,t)}function u0(t,i,s){if(i=Rf(t,i,o0)[0],t=Zl(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=bo(i)}catch(S){throw S===us?Il:S}else l=i;i=un();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(ct.flags|=2048,ms(9,{destroy:void 0},cy.bind(null,f,s),null)),[l,h,t]}function cy(t,i){t.action=i}function f0(t){var i=un(),s=Gt;if(s!==null)return u0(i,s,t);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ms(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ct.updateQueue,i===null&&(i=Yl(),ct.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function h0(){return un().memoizedState}function Kl(t,i,s,l){var f=zn();ct.flags|=t,f.memoizedState=ms(1|i,{destroy:void 0},s,l===void 0?null:l)}function Ql(t,i,s,l){var f=un();l=l===void 0?null:l;var h=f.memoizedState.inst;Gt!==null&&l!==null&&yf(l,Gt.memoizedState.deps)?f.memoizedState=ms(i,h,s,l):(ct.flags|=t,f.memoizedState=ms(1|i,h,s,l))}function d0(t,i){Kl(8390656,8,t,i)}function Nf(t,i){Ql(2048,8,t,i)}function uy(t){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=Yl(),ct.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function p0(t){var i=un().memoizedState;return uy({ref:i,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function m0(t,i){return Ql(4,2,t,i)}function g0(t,i){return Ql(4,4,t,i)}function v0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _0(t,i,s){s=s!=null?s.concat([t]):null,Ql(4,4,v0.bind(null,i,t),s)}function Uf(){}function x0(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&yf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function S0(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&yf(i,l[1]))return l[0];if(l=t(),Nr){Pe(!0);try{t()}finally{Pe(!1)}}return s.memoizedState=[l,i],l}function Lf(t,i,s){return s===void 0||(la&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=yg(),ct.lanes|=t,Ka|=t,s)}function y0(t,i,s,l){return ei(s,i)?s:hs.current!==null?(t=Lf(t,s,l),ei(t,i)||(mn=!0),t):(la&42)===0||(la&1073741824)!==0&&(yt&261930)===0?(mn=!0,t.memoizedState=s):(t=yg(),ct.lanes|=t,Ka|=t,i)}function M0(t,i,s,l,f){var h=I.p;I.p=h!==0&&8>h?h:8;var S=O.T,R={};O.T=R,Ff(t,!1,i,s);try{var H=f(),ee=O.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=ry(H,l);To(t,i,pe,si(t))}else To(t,i,l,si(t))}catch(xe){To(t,i,{then:function(){},status:"rejected",reason:xe},si())}finally{I.p=h,S!==null&&R.types!==null&&(S.types=R.types),O.T=S}}function fy(){}function Of(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=E0(t).queue;M0(t,f,i,le,s===null?fy:function(){return b0(t),s(l)})}function E0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:le},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function b0(t){var i=E0(t);i.next===null&&(i=t.alternate.memoizedState),To(t,i.next.queue,{},si())}function Pf(){return Cn(Vo)}function T0(){return un().memoizedState}function A0(){return un().memoizedState}function hy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=si();t=Xa(s);var l=Wa(i,t,s);l!==null&&(Yn(l,i,s),So(l,i,s)),i={cache:uf()},t.payload=i;return}i=i.return}}function dy(t,i,s){var l=si();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Jl(t)?C0(i,s):(s=Ju(t,i,s,l),s!==null&&(Yn(s,t,l),w0(s,i,l)))}function R0(t,i,s){var l=si();To(t,i,s,l)}function To(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Jl(t))C0(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,R=h(S,s);if(f.hasEagerState=!0,f.eagerState=R,ei(R,S))return Ul(t,i,f,0),qt===null&&Nl(),!1}catch{}if(s=Ju(t,i,f,l),s!==null)return Yn(s,t,l),w0(s,i,l),!0}return!1}function Ff(t,i,s,l){if(l={lane:2,revertLane:ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jl(t)){if(i)throw Error(r(479))}else i=Ju(t,s,l,2),i!==null&&Yn(i,t,2)}function Jl(t){var i=t.alternate;return t===ct||i!==null&&i===ct}function C0(t,i){ds=Wl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function w0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ui(t,s)}}var Ao={readContext:Cn,use:jl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var D0={readContext:Cn,use:jl,useCallback:function(t,i){return zn().memoizedState=[t,i===void 0?null:i],t},useContext:Cn,useEffect:d0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Kl(4194308,4,v0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Kl(4194308,4,t,i)},useInsertionEffect:function(t,i){Kl(4,2,t,i)},useMemo:function(t,i){var s=zn();i=i===void 0?null:i;var l=t();if(Nr){Pe(!0);try{t()}finally{Pe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=zn();if(s!==void 0){var f=s(i);if(Nr){Pe(!0);try{s(i)}finally{Pe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=dy.bind(null,ct,t),[l.memoizedState,t]},useRef:function(t){var i=zn();return t={current:t},i.memoizedState=t},useState:function(t){t=wf(t);var i=t.queue,s=R0.bind(null,ct,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(t,i){var s=zn();return Lf(s,t,i)},useTransition:function(){var t=wf(!1);return t=M0.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ct,f=zn();if(Et){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),qt===null)throw Error(r(349));(yt&127)!==0||Qm(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,d0($m.bind(null,l,h,t),[t]),l.flags|=2048,ms(9,{destroy:void 0},Jm.bind(null,l,h,s,i),null),s},useId:function(){var t=zn(),i=qt.identifierPrefix;if(Et){var s=Hi,l=Ii;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ql++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=sy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pf,useFormState:l0,useActionState:l0,useOptimistic:function(t){var i=zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ff.bind(null,ct,!0,s),s.dispatch=i,[t,i]},useMemoCache:Af,useCacheRefresh:function(){return zn().memoizedState=hy.bind(null,ct)},useEffectEvent:function(t){var i=zn(),s={impl:t};return i.memoizedState=s,function(){if((Dt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Bf={readContext:Cn,use:jl,useCallback:x0,useContext:Cn,useEffect:Nf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:Zl,useRef:h0,useState:function(){return Zl(ca)},useDebugValue:Uf,useDeferredValue:function(t,i){var s=un();return y0(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Zl(ca)[0],i=un().memoizedState;return[typeof t=="boolean"?t:bo(t),i]},useSyncExternalStore:Km,useId:T0,useHostTransitionStatus:Pf,useFormState:c0,useActionState:c0,useOptimistic:function(t,i){var s=un();return n0(s,Gt,t,i)},useMemoCache:Af,useCacheRefresh:A0};Bf.useEffectEvent=p0;var N0={readContext:Cn,use:jl,useCallback:x0,useContext:Cn,useEffect:Nf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:Cf,useRef:h0,useState:function(){return Cf(ca)},useDebugValue:Uf,useDeferredValue:function(t,i){var s=un();return Gt===null?Lf(s,t,i):y0(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Cf(ca)[0],i=un().memoizedState;return[typeof t=="boolean"?t:bo(t),i]},useSyncExternalStore:Km,useId:T0,useHostTransitionStatus:Pf,useFormState:f0,useActionState:f0,useOptimistic:function(t,i){var s=un();return Gt!==null?n0(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Af,useCacheRefresh:A0};N0.useEffectEvent=p0;function zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var If={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=si(),f=Xa(l);f.payload=i,s!=null&&(f.callback=s),i=Wa(t,f,l),i!==null&&(Yn(i,t,l),So(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=si(),f=Xa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Wa(t,f,l),i!==null&&(Yn(i,t,l),So(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=si(),l=Xa(s);l.tag=2,i!=null&&(l.callback=i),i=Wa(t,l,s),i!==null&&(Yn(i,t,s),So(i,t,s))}};function U0(t,i,s,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!fo(s,l)||!fo(f,h):!0}function L0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&If.enqueueReplaceState(i,i.state,null)}function Ur(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function O0(t){Dl(t)}function P0(t){console.error(t)}function F0(t){Dl(t)}function $l(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function B0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hf(t,i,s){return s=Xa(s),s.tag=3,s.payload={element:null},s.callback=function(){$l(t,i)},s}function z0(t){return t=Xa(t),t.tag=3,t}function I0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){B0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){B0(i,s,l),typeof f!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function py(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&os(i,s,f,!0),s=ni.current,s!==null){switch(s.tag){case 31:case 13:return gi===null?fc():s.alternate===null&&rn===0&&(rn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Hl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),fh(t,l,f)),!1;case 22:return s.flags|=65536,l===Hl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),fh(t,l,f)),!1}throw Error(r(435,s.tag))}return fh(t,l,f),fc(),!1}if(Et)return i=ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==rf&&(t=Error(r(422),{cause:l}),mo(hi(t,s)))):(l!==rf&&(i=Error(r(423),{cause:l}),mo(hi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=hi(l,s),f=Hf(t.stateNode,l,f),gf(t,f),rn!==4&&(rn=2)),!1;var h=Error(r(520),{cause:l});if(h=hi(h,s),Oo===null?Oo=[h]:Oo.push(h),rn!==4&&(rn=2),i===null)return!0;l=hi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Hf(s.stateNode,l,t),gf(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=z0(f),I0(f,t,s,l),gf(s,f),!1}s=s.return}while(s!==null);return!1}var Gf=Error(r(461)),mn=!1;function wn(t,i,s,l){i.child=t===null?km(i,null,s,l):Dr(i,t.child,s,l)}function H0(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Ar(i),l=Mf(t,i,s,S,h,f),R=Ef(),t!==null&&!mn?(bf(t,i,f),ua(t,i,f)):(Et&&R&&nf(i),i.flags|=1,wn(t,i,l,f),i.child)}function G0(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!$u(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,V0(t,i,h,l,f)):(t=Ol(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Zf(t,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:fo,s(S,l)&&t.ref===i.ref)return ua(t,i,f)}return i.flags|=1,t=aa(h,l),t.ref=i.ref,t.return=i,i.child=t}function V0(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(fo(h,l)&&t.ref===i.ref)if(mn=!1,i.pendingProps=l=h,Zf(t,f))(t.flags&131072)!==0&&(mn=!0);else return i.lanes=t.lanes,ua(t,i,f)}return Vf(t,i,s,l,f)}function k0(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return X0(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(i,h!==null?h.cachePool:null),h!==null?qm(i,h):_f(),Ym(i);else return l=i.lanes=536870912,X0(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(zl(i,h.cachePool),qm(i,h),Ya(),i.memoizedState=null):(t!==null&&zl(i,null),_f(),Ya());return wn(t,i,f,s),i.child}function Ro(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function X0(t,i,s,l,f){var h=hf();return h=h===null?null:{parent:dn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&zl(i,null),_f(),Ym(i),t!==null&&os(t,i,l,!0),i.childLanes=f,null}function ec(t,i){return i=nc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function W0(t,i,s){return Dr(i,t.child,null,s),t=ec(i,i.pendingProps),t.flags|=2,ii(i),i.memoizedState=null,t}function my(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Et){if(l.mode==="hidden")return t=ec(i,l),i.lanes=536870912,Ro(null,t);if(Sf(i),(t=jt)?(t=iv(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=i,i.child=s,Rn=i,jt=null)):t=null,t===null)throw Ga(i);return i.lanes=536870912,null}return ec(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(Sf(i),f)if(i.flags&256)i.flags&=-257,i=W0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(mn||os(t,i,s,!1),f=(s&t.childLanes)!==0,mn||f){if(l=qt,l!==null&&(S=Qn(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Mr(t,S),Yn(l,t,S),Gf;fc(),i=W0(t,i,s)}else t=h.treeContext,jt=vi(S.nextSibling),Rn=i,Et=!0,Ha=null,mi=!1,t!==null&&Nm(i,t),i=ec(i,l),i.flags|=4096;return i}return t=aa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function tc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Vf(t,i,s,l,f){return Ar(i),s=Mf(t,i,s,l,void 0,f),l=Ef(),t!==null&&!mn?(bf(t,i,f),ua(t,i,f)):(Et&&l&&nf(i),i.flags|=1,wn(t,i,s,f),i.child)}function q0(t,i,s,l,f,h){return Ar(i),i.updateQueue=null,s=Zm(i,l,s,f),jm(t),l=Ef(),t!==null&&!mn?(bf(t,i,h),ua(t,i,h)):(Et&&l&&nf(i),i.flags|=1,wn(t,i,s,h),i.child)}function Y0(t,i,s,l,f){if(Ar(i),i.stateNode===null){var h=is,S=s.contextType;typeof S=="object"&&S!==null&&(h=Cn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=If,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},pf(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Cn(S):is,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(zf(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&If.enqueueReplaceState(h,h.state,null),Mo(i,l,h,f),yo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var R=i.memoizedProps,H=Ur(s,R);h.props=H;var ee=h.context,pe=s.contextType;S=is,typeof pe=="object"&&pe!==null&&(S=Cn(pe));var xe=s.getDerivedStateFromProps;pe=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,pe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ee!==S)&&L0(i,h,l,S),ka=!1;var ae=i.memoizedState;h.state=ae,Mo(i,l,h,f),yo(),ee=i.memoizedState,R||ae!==ee||ka?(typeof xe=="function"&&(zf(i,s,xe,l),ee=i.memoizedState),(H=ka||U0(i,s,H,l,ae,ee,S))?(pe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ee),h.props=l,h.state=ee,h.context=S,l=H):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,mf(t,i),S=i.memoizedProps,pe=Ur(s,S),h.props=pe,xe=i.pendingProps,ae=h.context,ee=s.contextType,H=is,typeof ee=="object"&&ee!==null&&(H=Cn(ee)),R=s.getDerivedStateFromProps,(ee=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==xe||ae!==H)&&L0(i,h,l,H),ka=!1,ae=i.memoizedState,h.state=ae,Mo(i,l,h,f),yo();var ce=i.memoizedState;S!==xe||ae!==ce||ka||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof R=="function"&&(zf(i,s,R,l),ce=i.memoizedState),(pe=ka||U0(i,s,pe,l,ae,ce,H)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ce,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ce,H)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),h.props=l,h.state=ce,h.context=H,l=pe):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,tc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Dr(i,t.child,null,f),i.child=Dr(i,null,s,f)):wn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ua(t,i,f),t}function j0(t,i,s,l){return br(),i.flags|=256,wn(t,i,s,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Bm()}}function Wf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ri),t}function Z0(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Et){if(f?qa(i):Ya(),(t=jt)?(t=iv(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=i,i.child=s,Rn=i,jt=null)):t=null,t===null)throw Ga(i);return Rh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ya(),f=i.mode,R=nc({mode:"hidden",children:R},f),l=Er(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,S,s),i.memoizedState=kf,Ro(null,l)):(qa(i),qf(i,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(h)i.flags&256?(qa(i),i.flags&=-257,i=Yf(t,i,s)):i.memoizedState!==null?(Ya(),i.child=t.child,i.flags|=128,i=null):(Ya(),R=l.fallback,f=i.mode,l=nc({mode:"visible",children:l.children},f),R=Er(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Dr(i,t.child,null,s),l=i.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,S,s),i.memoizedState=kf,i=Ro(null,l));else if(qa(i),Rh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ee=S.dgst;S=ee,l=Error(r(419)),l.stack="",l.digest=S,mo({value:l,source:null,stack:null}),i=Yf(t,i,s)}else if(mn||os(t,i,s,!1),S=(s&t.childLanes)!==0,mn||S){if(S=qt,S!==null&&(l=Qn(S,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Mr(t,l),Yn(S,t,l),Gf;Ah(R)||fc(),i=Yf(t,i,s)}else Ah(R)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,jt=vi(R.nextSibling),Rn=i,Et=!0,Ha=null,mi=!1,t!==null&&Nm(i,t),i=qf(i,l.children),i.flags|=4096);return i}return f?(Ya(),R=l.fallback,f=i.mode,H=t.child,ee=H.sibling,l=aa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=aa(ee,R):(R=Er(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Ro(null,l),l=i.child,R=t.child.memoizedState,R===null?R=Xf(s):(f=R.cachePool,f!==null?(H=dn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=Bm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Wf(t,S,s),i.memoizedState=kf,Ro(t.child,l)):(qa(i),s=t.child,t=s.sibling,s=aa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function qf(t,i){return i=nc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nc(t,i){return t=ti(22,t,null,i),t.lanes=0,t}function Yf(t,i,s){return Dr(i,t.child,null,s),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function K0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lf(t.return,i,s)}function jf(t,i,s,l,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function Q0(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=cn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,Se(cn,S),wn(t,i,l,s),l=Et?po:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K0(t,s,i);else if(t.tag===19)K0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Xl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),jf(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Xl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}jf(i,!0,s,null,h,l);break;case"together":jf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ua(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ka|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(os(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=aa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=aa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Zf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function gy(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),Va(i,dn,t.memoizedState.cache),br();break;case 27:case 5:nt(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:Va(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Sf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Z0(t,i,s):(qa(i),t=ua(t,i,s),t!==null?t.sibling:null);qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(os(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Q0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(cn,cn.current),l)break;return null;case 22:return i.lanes=0,k0(t,i,s,i.pendingProps);case 24:Va(i,dn,t.memoizedState.cache)}return ua(t,i,s)}function J0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)mn=!0;else{if(!Zf(t,s)&&(i.flags&128)===0)return mn=!1,gy(t,i,s);mn=(t.flags&131072)!==0}else mn=!1,Et&&(i.flags&1048576)!==0&&Dm(i,po,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Cr(i.elementType),i.type=t,typeof t=="function")$u(t)?(l=Ur(t,l),i.tag=1,i=Y0(null,i,t,l,s)):(i.tag=0,i=Vf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===U){i.tag=11,i=H0(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=G0(null,i,t,l,s);break e}}throw i=de(t)||t,Error(r(306,i,""))}}return i;case 0:return Vf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ur(l,i.pendingProps),Y0(t,i,l,f,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,mf(t,i),Mo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Va(i,dn,l),l!==h.cache&&cf(i,[dn],s,!0),yo(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=j0(t,i,l,s);break e}else if(l!==f){f=hi(Error(r(424)),i),mo(f),i=j0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=vi(t.firstChild),Rn=i,Et=!0,Ha=null,mi=!0,s=km(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(br(),l===f){i=ua(t,i,s);break e}wn(t,i,l,s)}i=i.child}return i;case 26:return tc(t,i),t===null?(s=cv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Et||(s=i.type,t=i.pendingProps,l=_c(se.current).createElement(s),l[ln]=i,l[An]=t,Dn(l,s,t),hn(l),i.stateNode=l):i.memoizedState=cv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&Et&&(l=i.stateNode=sv(i.type,i.pendingProps,se.current),Rn=i,mi=!0,f=jt,tr(i.type)?(Ch=f,jt=vi(l.firstChild)):jt=f),wn(t,i,i.pendingProps.children,s),tc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Et&&((f=l=jt)&&(l=qy(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,Rn=i,jt=vi(l.firstChild),mi=!1,f=!0):f=!1),f||Ga(i)),nt(i),f=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,Eh(f,h)?l=null:S!==null&&Eh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Mf(t,i,oy,null,null,s),Vo._currentValue=f),tc(t,i),wn(t,i,l,s),i.child;case 6:return t===null&&Et&&((t=s=jt)&&(s=Yy(s,i.pendingProps,mi),s!==null?(i.stateNode=s,Rn=i,jt=null,t=!0):t=!1),t||Ga(i)),null;case 13:return Z0(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Dr(i,null,l,s):wn(t,i,l,s),i.child;case 11:return H0(t,i,i.type,i.pendingProps,s);case 7:return wn(t,i,i.pendingProps,s),i.child;case 8:return wn(t,i,i.pendingProps.children,s),i.child;case 12:return wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Va(i,i.type,l.value),wn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ar(i),f=Cn(f),l=l(f),i.flags|=1,wn(t,i,l,s),i.child;case 14:return G0(t,i,i.type,i.pendingProps,s);case 15:return V0(t,i,i.type,i.pendingProps,s);case 19:return Q0(t,i,s);case 31:return my(t,i,s);case 22:return k0(t,i,s,i.pendingProps);case 24:return Ar(i),l=Cn(dn),t===null?(f=hf(),f===null&&(f=qt,h=uf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},pf(i),Va(i,dn,f)):((t.lanes&s)!==0&&(mf(t,i),Mo(i,null,null,s),yo()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Va(i,dn,l)):(l=h.cache,Va(i,dn,l),l!==f.cache&&cf(i,[dn],s,!0))),wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function fa(t){t.flags|=4}function Kf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Tg())t.flags|=8192;else throw wr=Hl,df}else t.flags&=-16777217}function $0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pv(i))if(Tg())t.flags|=8192;else throw wr=Hl,df}function ic(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,xs|=i)}function Co(t,i){if(!Et)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function vy(t,i,s){var l=i.pendingProps;switch(af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(i),null;case 1:return Zt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),oa(dn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ss(i)?fa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sf())),Zt(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(fa(i),h!==null?(Zt(i),$0(i,h)):(Zt(i),Kf(i,f,null,l,s))):h?h!==t.memoizedState?(fa(i),Zt(i),$0(i,h)):(Zt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&fa(i),Zt(i),Kf(i,f,t,l,s)),null;case 27:if($e(i),s=se.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zt(i),null}t=Re.current,ss(i)?Um(i):(t=sv(f,l,s),i.stateNode=t,fa(i))}return Zt(i),null;case 5:if($e(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zt(i),null}if(h=Re.current,ss(i))Um(i);else{var S=_c(se.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[ln]=i,h[An]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(Dn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&fa(i)}}return Zt(i),Kf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&fa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=se.current,ss(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Zg(t.nodeValue,s)),t||Ga(i,!0)}else t=_c(t).createTextNode(l),t[ln]=i,i.stateNode=t}return Zt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=ss(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=i}else br(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),t=!1}else s=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ii(i),i):(ii(i),null);if((i.flags&128)!==0)throw Error(r(558))}return Zt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ss(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=i}else br(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),f=!1}else f=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ii(i),i):(ii(i),null)}return ii(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),ic(i,i.updateQueue),Zt(i),null);case 4:return Ge(),t===null&&_h(i.stateNode.containerInfo),Zt(i),null;case 10:return oa(i.type),Zt(i),null;case 19:if(J(cn),l=i.memoizedState,l===null)return Zt(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Co(l,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Xl(t),h!==null){for(i.flags|=128,Co(l,!1),t=h.updateQueue,i.updateQueue=t,ic(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Rm(s,t),s=s.sibling;return Se(cn,cn.current&1|2),Et&&ra(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Ce()>lc&&(i.flags|=128,f=!0,Co(l,!1),i.lanes=4194304)}else{if(!f)if(t=Xl(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,ic(i,t),Co(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Et)return Zt(i),null}else 2*Ce()-l.renderingStartTime>lc&&s!==536870912&&(i.flags|=128,f=!0,Co(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ce(),t.sibling=null,s=cn.current,Se(cn,f?s&1|2:s&1),Et&&ra(i,l.treeForkCount),t):(Zt(i),null);case 22:case 23:return ii(i),xf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Zt(i),i.subtreeFlags&6&&(i.flags|=8192)):Zt(i),s=i.updateQueue,s!==null&&ic(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&J(Rr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),oa(dn),Zt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function _y(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return oa(dn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return $e(i),null;case 31:if(i.memoizedState!==null){if(ii(i),i.alternate===null)throw Error(r(340));br()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ii(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));br()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return J(cn),null;case 4:return Ge(),null;case 10:return oa(i.type),null;case 22:case 23:return ii(i),xf(),t!==null&&J(Rr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return oa(dn),null;case 25:return null;default:return null}}function eg(t,i){switch(af(i),i.tag){case 3:oa(dn),Ge();break;case 26:case 27:case 5:$e(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&ii(i);break;case 13:ii(i);break;case 19:J(cn);break;case 10:oa(i.type);break;case 22:case 23:ii(i),xf(),t!==null&&J(Rr);break;case 24:oa(dn)}}function wo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){zt(i,i.return,R)}}function ja(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var H=s,ee=R;try{ee()}catch(pe){zt(f,H,pe)}}}l=l.next}while(l!==h)}}catch(pe){zt(i,i.return,pe)}}function tg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Wm(i,s)}catch(l){zt(t,t.return,l)}}}function ng(t,i,s){s.props=Ur(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function Do(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){zt(t,i,f)}}function Gi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){zt(t,i,f)}else s.current=null}function ig(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){zt(t,t.return,f)}}function Qf(t,i,s){try{var l=t.stateNode;Hy(l,t.type,s,i),l[An]=i}catch(f){zt(t,t.return,f)}}function ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=na));else if(l!==4&&(l===27&&tr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for($f(t,i,s),t=t.sibling;t!==null;)$f(t,i,s),t=t.sibling}function ac(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&tr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ac(t,i,s),t=t.sibling;t!==null;)ac(t,i,s),t=t.sibling}function rg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Dn(i,l,s),i[ln]=t,i[An]=s}catch(h){zt(t,t.return,h)}}var ha=!1,gn=!1,eh=!1,sg=typeof WeakSet=="function"?WeakSet:Set,En=null;function xy(t,i){if(t=t.containerInfo,yh=Tc,t=_m(t),qu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,R=-1,H=-1,ee=0,pe=0,xe=t,ae=null;t:for(;;){for(var ce;xe!==s||f!==0&&xe.nodeType!==3||(R=S+f),xe!==h||l!==0&&xe.nodeType!==3||(H=S+l),xe.nodeType===3&&(S+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)ae=xe,xe=ce;for(;;){if(xe===t)break t;if(ae===s&&++ee===f&&(R=S),ae===h&&++pe===l&&(H=S),(ce=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=ce}s=R===-1||H===-1?null:{start:R,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mh={focusedElem:t,selectionRange:s},Tc=!1,En=i;En!==null;)if(i=En,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,En=t;else for(;En!==null;){switch(i=En,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var qe=Ur(s.type,f);t=l.getSnapshotBeforeUpdate(qe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Th(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,En=t;break}En=i.return}}function og(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:pa(t,s),l&4&&wo(5,s);break;case 1:if(pa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){zt(s,s.return,S)}else{var f=Ur(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){zt(s,s.return,S)}}l&64&&tg(s),l&512&&Do(s,s.return);break;case 3:if(pa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Wm(t,i)}catch(S){zt(s,s.return,S)}}break;case 27:i===null&&l&4&&rg(s);case 26:case 5:pa(t,s),i===null&&l&4&&ig(s),l&512&&Do(s,s.return);break;case 12:pa(t,s);break;case 31:pa(t,s),l&4&&ug(t,s);break;case 13:pa(t,s),l&4&&fg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Cy.bind(null,s),jy(t,s))));break;case 22:if(l=s.memoizedState!==null||ha,!l){i=i!==null&&i.memoizedState!==null||gn,f=ha;var h=gn;ha=l,(gn=i)&&!h?ma(t,s,(s.subtreeFlags&8772)!==0):pa(t,s),ha=f,gn=h}break;case 30:break;default:pa(t,s)}}function lg(t){var i=t.alternate;i!==null&&(t.alternate=null,lg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&io(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function da(t,i,s){for(s=s.child;s!==null;)cg(t,i,s),s=s.sibling}function cg(t,i,s){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:gn||Gi(s,i),da(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gn||Gi(s,i);var l=$t,f=kn;tr(s.type)&&($t=s.stateNode,kn=!1),da(t,i,s),Io(s.stateNode),$t=l,kn=f;break;case 5:gn||Gi(s,i);case 6:if(l=$t,f=kn,$t=null,da(t,i,s),$t=l,kn=f,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(h){zt(s,i,h)}else try{$t.removeChild(s.stateNode)}catch(h){zt(s,i,h)}break;case 18:$t!==null&&(kn?(t=$t,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Rs(t)):tv($t,s.stateNode));break;case 4:l=$t,f=kn,$t=s.stateNode.containerInfo,kn=!0,da(t,i,s),$t=l,kn=f;break;case 0:case 11:case 14:case 15:ja(2,s,i),gn||ja(4,s,i),da(t,i,s);break;case 1:gn||(Gi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ng(s,i,l)),da(t,i,s);break;case 21:da(t,i,s);break;case 22:gn=(l=gn)||s.memoizedState!==null,da(t,i,s),gn=l;break;default:da(t,i,s)}}function ug(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rs(t)}catch(s){zt(i,i.return,s)}}}function fg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(s){zt(i,i.return,s)}}function Sy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new sg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new sg),i;default:throw Error(r(435,t.tag))}}function rc(t,i){var s=Sy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=wy.bind(null,t,l);l.then(f,f)}})}function Xn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,S=i,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(tr(R.type)){$t=R.stateNode,kn=!1;break e}break;case 5:$t=R.stateNode,kn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if($t===null)throw Error(r(160));cg(h,S,f),$t=null,kn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)hg(i,t),i=i.sibling}var wi=null;function hg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(i,t),Wn(t),l&4&&(ja(3,t,t.return),wo(3,t),ja(5,t,t.return));break;case 1:Xn(i,t),Wn(t),l&512&&(gn||s===null||Gi(s,s.return)),l&64&&ha&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=wi;if(Xn(i,t),Wn(t),l&512&&(gn||s===null||Gi(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[La]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Dn(h,l,s),h[ln]=t,hn(h),l=h;break e;case"link":var S=hv("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}h=f.createElement(l),Dn(h,l,s),f.head.appendChild(h);break;case"meta":if(S=hv("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}h=f.createElement(l),Dn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[ln]=t,hn(h),l=h}t.stateNode=l}else dv(f,t.type,t.stateNode);else t.stateNode=fv(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?dv(f,t.type,t.stateNode):fv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Xn(i,t),Wn(t),l&512&&(gn||s===null||Gi(s,s.return)),s!==null&&l&4&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Xn(i,t),Wn(t),l&512&&(gn||s===null||Gi(s,s.return)),t.flags&32){f=t.stateNode;try{$n(f,"")}catch(qe){zt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Qf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(eh=!0);break;case 6:if(Xn(i,t),Wn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){zt(t,t.return,qe)}}break;case 3:if(yc=null,f=wi,wi=xc(i.containerInfo),Xn(i,t),wi=f,Wn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Rs(i.containerInfo)}catch(qe){zt(t,t.return,qe)}eh&&(eh=!1,dg(t));break;case 4:l=wi,wi=xc(t.stateNode.containerInfo),Xn(i,t),Wn(t),wi=l;break;case 12:Xn(i,t),Wn(t);break;case 31:Xn(i,t),Wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 13:Xn(i,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(oc=Ce()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ee=ha,pe=gn;if(ha=ee||f,gn=pe||H,Xn(i,t),gn=pe,ha=ee,Wn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||ha||gn||Lr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(h=H.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(qe){zt(H,H.return,qe)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(qe){zt(H,H.return,qe)}}}else if(i.tag===18){if(s===null){H=i;try{var ce=H.stateNode;f?nv(ce,!0):nv(H.stateNode,!1)}catch(qe){zt(H,H.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,rc(t,s))));break;case 19:Xn(i,t),Wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 30:break;case 21:break;default:Xn(i,t),Wn(t)}}function Wn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(ag(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=Jf(t);ac(t,h,f);break;case 5:var S=s.stateNode;s.flags&32&&($n(S,""),s.flags&=-33);var R=Jf(t);ac(t,R,S);break;case 3:case 4:var H=s.stateNode.containerInfo,ee=Jf(t);$f(t,ee,H);break;default:throw Error(r(161))}}catch(pe){zt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;dg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function pa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)og(t,i.alternate,i),i=i.sibling}function Lr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Lr(i);break;case 1:Gi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&ng(i,i.return,s),Lr(i);break;case 27:Io(i.stateNode);case 26:case 5:Gi(i,i.return),Lr(i);break;case 22:i.memoizedState===null&&Lr(i);break;case 30:Lr(i);break;default:Lr(i)}t=t.sibling}}function ma(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:ma(f,h,s),wo(4,h);break;case 1:if(ma(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ee){zt(l,l.return,ee)}if(l=h,f=l.updateQueue,f!==null){var R=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Xm(H[f],R)}catch(ee){zt(l,l.return,ee)}}s&&S&64&&tg(h),Do(h,h.return);break;case 27:rg(h);case 26:case 5:ma(f,h,s),s&&l===null&&S&4&&ig(h),Do(h,h.return);break;case 12:ma(f,h,s);break;case 31:ma(f,h,s),s&&S&4&&ug(f,h);break;case 13:ma(f,h,s),s&&S&4&&fg(f,h);break;case 22:h.memoizedState===null&&ma(f,h,s),Do(h,h.return);break;case 30:break;default:ma(f,h,s)}i=i.sibling}}function th(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&go(s))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&go(t))}function Di(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)pg(t,i,s,l),i=i.sibling}function pg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Di(t,i,s,l),f&2048&&wo(9,i);break;case 1:Di(t,i,s,l);break;case 3:Di(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&go(t)));break;case 12:if(f&2048){Di(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(i,i.return,H)}}else Di(t,i,s,l);break;case 31:Di(t,i,s,l);break;case 13:Di(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Di(t,i,s,l):No(t,i):h._visibility&2?Di(t,i,s,l):(h._visibility|=2,gs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&th(S,i);break;case 24:Di(t,i,s,l),f&2048&&nh(i.alternate,i);break;default:Di(t,i,s,l)}}function gs(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,R=s,H=l,ee=S.flags;switch(S.tag){case 0:case 11:case 15:gs(h,S,R,H,f),wo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?gs(h,S,R,H,f):No(h,S):(pe._visibility|=2,gs(h,S,R,H,f)),f&&ee&2048&&th(S.alternate,S);break;case 24:gs(h,S,R,H,f),f&&ee&2048&&nh(S.alternate,S);break;default:gs(h,S,R,H,f)}i=i.sibling}}function No(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:No(s,l),f&2048&&th(l.alternate,l);break;case 24:No(s,l),f&2048&&nh(l.alternate,l);break;default:No(s,l)}i=i.sibling}}var Uo=8192;function vs(t,i,s){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)mg(t,i,s),t=t.sibling}function mg(t,i,s){switch(t.tag){case 26:vs(t,i,s),t.flags&Uo&&t.memoizedState!==null&&sM(s,wi,t.memoizedState,t.memoizedProps);break;case 5:vs(t,i,s);break;case 3:case 4:var l=wi;wi=xc(t.stateNode.containerInfo),vs(t,i,s),wi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Uo,Uo=16777216,vs(t,i,s),Uo=l):vs(t,i,s));break;default:vs(t,i,s)}}function gg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Lo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,_g(l,t)}gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vg(t),t=t.sibling}function vg(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,sc(t)):Lo(t);break;default:Lo(t)}}function sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,_g(l,t)}gg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ja(8,i,i.return),sc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,sc(i));break;default:sc(i)}t=t.sibling}}function _g(t,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:go(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else e:for(s=t;En!==null;){l=En;var f=l.sibling,h=l.return;if(lg(l),l===s){En=null;break e}if(f!==null){f.return=h,En=f;break e}En=h}}}var yy={getCacheForType:function(t){var i=Cn(dn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Cn(dn).controller.signal}},My=typeof WeakMap=="function"?WeakMap:Map,Dt=0,qt=null,_t=null,yt=0,Bt=0,ai=null,Za=!1,_s=!1,ih=!1,ga=0,rn=0,Ka=0,Or=0,ah=0,ri=0,xs=0,Oo=null,qn=null,rh=!1,oc=0,xg=0,lc=1/0,cc=null,Qa=null,xn=0,Ja=null,Ss=null,va=0,sh=0,oh=null,Sg=null,Po=0,lh=null;function si(){return(Dt&2)!==0&&yt!==0?yt&-yt:O.T!==null?ph():eo()}function yg(){if(ri===0)if((yt&536870912)===0||Et){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Yn(t,i,s){(t===qt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ys(t,0),$a(t,yt,ri,!1)),it(t,s),((Dt&2)===0||t!==qt)&&(t===qt&&((Dt&2)===0&&(Or|=s),rn===4&&$a(t,yt,ri,!1)),Vi(t))}function Mg(t,i,s){if((Dt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),f=l?Ty(t,i):uh(t,i,!0),h=l;do{if(f===0){_s&&!l&&$a(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!Ey(s)){f=uh(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var R=t;f=Oo;var H=R.current.memoizedState.isDehydrated;if(H&&(ys(R,S).flags|=256),S=uh(R,S,!1),S!==2){if(ih&&!H){R.errorRecoveryDisabledLanes|=h,Or|=h,f=4;break e}h=qn,qn=f,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){ys(t,0),$a(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:$a(l,i,ri,!Za);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=oc+300-Ce(),10<f)){if($a(l,i,ri,!Za),me(l,0,!0)!==0)break e;va=i,l.timeoutHandle=$g(Eg.bind(null,l,s,qn,cc,rh,i,ri,Or,xs,Za,h,"Throttled",-0,0),f);break e}Eg(l,s,qn,cc,rh,i,ri,Or,xs,Za,h,null,-0,0)}}break}while(!0);Vi(t)}function Eg(t,i,s,l,f,h,S,R,H,ee,pe,xe,ae,ce){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},mg(i,h,xe);var qe=(h&62914560)===h?oc-Ce():(h&4194048)===h?xg-Ce():0;if(qe=oM(xe,qe),qe!==null){va=h,t.cancelPendingCommit=qe(Ng.bind(null,t,i,h,s,l,f,S,R,H,pe,xe,null,ae,ce)),$a(t,h,S,!ee);return}}Ng(t,i,h,s,l,f,S,R,H)}function Ey(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!ei(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $a(t,i,s,l){i&=~ah,i&=~Or,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-Fe(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&wt(t,s,i)}function uc(){return(Dt&6)===0?(Fo(0),!1):!0}function ch(){if(_t!==null){if(Bt===0)var t=_t.return;else t=_t,sa=Tr=null,Tf(t),fs=null,_o=0,t=_t;for(;t!==null;)eg(t.alternate,t),t=t.return;_t=null}}function ys(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ky(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),va=0,ch(),qt=t,_t=s=aa(t.current,null),yt=i,Bt=0,ai=null,Za=!1,_s=Ie(t,i),ih=!1,xs=ri=ah=Or=Ka=rn=0,qn=Oo=null,rh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Fe(l),h=1<<f;i|=t[f],l&=~h}return ga=i,Nl(),s}function bg(t,i){ct=null,O.H=Ao,i===us||i===Il?(i=Hm(),Bt=3):i===df?(i=Hm(),Bt=4):Bt=i===Gf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,_t===null&&(rn=1,$l(t,hi(i,t.current)))}function Tg(){var t=ni.current;return t===null?!0:(yt&4194048)===yt?gi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===gi:!1}function Ag(){var t=O.H;return O.H=Ao,t===null?Ao:t}function Rg(){var t=O.A;return O.A=yy,t}function fc(){rn=4,Za||(yt&4194048)!==yt&&ni.current!==null||(_s=!0),(Ka&134217727)===0&&(Or&134217727)===0||qt===null||$a(qt,yt,ri,!1)}function uh(t,i,s){var l=Dt;Dt|=2;var f=Ag(),h=Rg();(qt!==t||yt!==i)&&(cc=null,ys(t,i)),i=!1;var S=rn;e:do try{if(Bt!==0&&_t!==null){var R=_t,H=ai;switch(Bt){case 8:ch(),S=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(i=!0);var ee=Bt;if(Bt=0,ai=null,Ms(t,R,H,ee),s&&_s){S=0;break e}break;default:ee=Bt,Bt=0,ai=null,Ms(t,R,H,ee)}}by(),S=rn;break}catch(pe){bg(t,pe)}while(!0);return i&&t.shellSuspendCounter++,sa=Tr=null,Dt=l,O.H=f,O.A=h,_t===null&&(qt=null,yt=0,Nl()),S}function by(){for(;_t!==null;)Cg(_t)}function Ty(t,i){var s=Dt;Dt|=2;var l=Ag(),f=Rg();qt!==t||yt!==i?(cc=null,lc=Ce()+500,ys(t,i)):_s=Ie(t,i);e:do try{if(Bt!==0&&_t!==null){i=_t;var h=ai;t:switch(Bt){case 1:Bt=0,ai=null,Ms(t,i,h,1);break;case 2:case 9:if(zm(h)){Bt=0,ai=null,wg(i);break}i=function(){Bt!==2&&Bt!==9||qt!==t||(Bt=7),Vi(t)},h.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:zm(h)?(Bt=0,ai=null,wg(i)):(Bt=0,ai=null,Ms(t,i,h,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var R=_t;if(S?pv(S):R.stateNode.complete){Bt=0,ai=null;var H=R.sibling;if(H!==null)_t=H;else{var ee=R.return;ee!==null?(_t=ee,hc(ee)):_t=null}break t}}Bt=0,ai=null,Ms(t,i,h,5);break;case 6:Bt=0,ai=null,Ms(t,i,h,6);break;case 8:ch(),rn=6;break e;default:throw Error(r(462))}}Ay();break}catch(pe){bg(t,pe)}while(!0);return sa=Tr=null,O.H=l,O.A=f,Dt=s,_t!==null?0:(qt=null,yt=0,Nl(),rn)}function Ay(){for(;_t!==null&&!pt();)Cg(_t)}function Cg(t){var i=J0(t.alternate,t,ga);t.memoizedProps=t.pendingProps,i===null?hc(t):_t=i}function wg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=q0(s,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=q0(s,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:Tf(i);default:eg(s,i),i=_t=Rm(i,ga),i=J0(s,i,ga)}t.memoizedProps=t.pendingProps,i===null?hc(t):_t=i}function Ms(t,i,s,l){sa=Tr=null,Tf(i),fs=null,_o=0;var f=i.return;try{if(py(t,f,i,s,yt)){rn=1,$l(t,hi(s,t.current)),_t=null;return}}catch(h){if(f!==null)throw _t=f,h;rn=1,$l(t,hi(s,t.current)),_t=null;return}i.flags&32768?(Et||l===1?t=!0:_s||(yt&536870912)!==0?t=!1:(Za=t=!0,(l===2||l===9||l===3||l===6)&&(l=ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dg(i,t)):hc(i)}function hc(t){var i=t;do{if((i.flags&32768)!==0){Dg(i,Za);return}t=i.return;var s=vy(i.alternate,i,ga);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);rn===0&&(rn=5)}function Dg(t,i){do{var s=_y(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);rn=6,_t=null}function Ng(t,i,s,l,f,h,S,R,H){t.cancelPendingCommit=null;do dc();while(xn!==0);if((Dt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=Qu,tn(t,s,h,S,R,H),t===qt&&(_t=qt=null,yt=0),Ss=i,Ja=t,va=s,sh=h,oh=f,Sg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dy(Q,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=I.p,I.p=2,S=Dt,Dt|=4;try{xy(t,i,s)}finally{Dt=S,I.p=f,O.T=l}}xn=1,Ug(),Lg(),Og()}}function Ug(){if(xn===1){xn=0;var t=Ja,i=Ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=I.p;I.p=2;var f=Dt;Dt|=4;try{hg(i,t);var h=Mh,S=_m(t.containerInfo),R=h.focusedElem,H=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&vm(R.ownerDocument.documentElement,R)){if(H!==null&&qu(R)){var ee=H.start,pe=H.end;if(pe===void 0&&(pe=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(pe,R.value.length);else{var xe=R.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),qe=R.textContent.length,et=Math.min(H.start,qe),kt=H.end===void 0?et:Math.min(H.end,qe);!ce.extend&&et>kt&&(S=kt,kt=et,et=S);var Z=gm(R,et),k=gm(R,kt);if(Z&&k&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var $=xe.createRange();$.setStart(Z.node,Z.offset),ce.removeAllRanges(),et>kt?(ce.addRange($),ce.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ce.addRange($))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ge=xe[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Tc=!!yh,Mh=yh=null}finally{Dt=f,I.p=l,O.T=s}}t.current=i,xn=2}}function Lg(){if(xn===2){xn=0;var t=Ja,i=Ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=I.p;I.p=2;var f=Dt;Dt|=4;try{og(t,i.alternate,i)}finally{Dt=f,I.p=l,O.T=s}}xn=3}}function Og(){if(xn===4||xn===3){xn=0,Ht();var t=Ja,i=Ss,s=va,l=Sg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xn=5:(xn=0,Ss=Ja=null,Pg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Qa=null),$s(s),i=i.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,f=I.p,I.p=2,O.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];h(R.value,{componentStack:R.stack})}}finally{O.T=i,I.p=f}}(va&3)!==0&&dc(),Vi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===lh?Po++:(Po=0,lh=t):Po=0,Fo(0)}}function Pg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,go(i)))}function dc(){return Ug(),Lg(),Og(),Fg()}function Fg(){if(xn!==5)return!1;var t=Ja,i=sh;sh=0;var s=$s(va),l=O.T,f=I.p;try{I.p=32>s?32:s,O.T=null,s=oh,oh=null;var h=Ja,S=va;if(xn=0,Ss=Ja=null,va=0,(Dt&6)!==0)throw Error(r(331));var R=Dt;if(Dt|=4,vg(h.current),pg(h,h.current,S,s),Dt=R,Fo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,h)}catch{}return!0}finally{I.p=f,O.T=l,Pg(t,i)}}function Bg(t,i,s){i=hi(s,i),i=Hf(t.stateNode,i,2),t=Wa(t,i,2),t!==null&&(it(t,2),Vi(t))}function zt(t,i,s){if(t.tag===3)Bg(t,t,s);else for(;i!==null;){if(i.tag===3){Bg(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qa===null||!Qa.has(l))){t=hi(s,t),s=z0(2),l=Wa(i,s,2),l!==null&&(I0(s,l,i,t),it(l,2),Vi(l));break}}i=i.return}}function fh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new My;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(ih=!0,f.add(s),t=Ry.bind(null,t,i,s),i.then(t,t))}function Ry(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,qt===t&&(yt&s)===s&&(rn===4||rn===3&&(yt&62914560)===yt&&300>Ce()-oc?(Dt&2)===0&&ys(t,0):ah|=s,xs===yt&&(xs=0)),Vi(t)}function zg(t,i){i===0&&(i=Me()),t=Mr(t,i),t!==null&&(it(t,i),Vi(t))}function Cy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),zg(t,s)}function wy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),zg(t,s)}function Dy(t,i){return W(t,i)}var pc=null,Es=null,hh=!1,mc=!1,dh=!1,er=0;function Vi(t){t!==Es&&t.next===null&&(Es===null?pc=Es=t:Es=Es.next=t),mc=!0,hh||(hh=!0,Uy())}function Fo(t,i){if(!dh&&mc){dh=!0;do for(var s=!1,l=pc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-Fe(42|t)+1)-1,h&=f&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Vg(l,h))}else h=yt,h=me(l,l===qt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ie(l,h)||(s=!0,Vg(l,h));l=l.next}while(s);dh=!1}}function Ny(){Ig()}function Ig(){mc=hh=!1;var t=0;er!==0&&Vy()&&(t=er);for(var i=Ce(),s=null,l=pc;l!==null;){var f=l.next,h=Hg(l,i);h===0?(l.next=null,s===null?pc=f:s.next=f,f===null&&(Es=s)):(s=l,(t!==0||(h&3)!==0)&&(mc=!0)),l=f}xn!==0&&xn!==5||Fo(t),er!==0&&(er=0)}function Hg(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Fe(h),R=1<<S,H=f[S];H===-1?((R&s)===0||(R&l)!==0)&&(f[S]=Le(R,i)):H<=i&&(t.expiredLanes|=R),h&=~R}if(i=qt,s=yt,s=me(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&en(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&en(l),$s(s)){case 2:case 8:s=b;break;case 32:s=Q;break;case 268435456:s=be;break;default:s=Q}return l=Gg.bind(null,t),s=W(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&en(l),t.callbackPriority=2,t.callbackNode=null,2}function Gg(t,i){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(dc()&&t.callbackNode!==s)return null;var l=yt;return l=me(t,t===qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Mg(t,l,i),Hg(t,Ce()),t.callbackNode!=null&&t.callbackNode===s?Gg.bind(null,t):null)}function Vg(t,i){if(dc())return null;Mg(t,i,!0)}function Uy(){Xy(function(){(Dt&6)!==0?W(N,Ny):Ig()})}function ph(){if(er===0){var t=ls;t===0&&(t=rt,rt<<=1,(rt&261888)===0&&(rt=256)),er=t}return er}function kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_r(""+t)}function Xg(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Ly(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=kg((f[An]||null).action),S=l.submitter;S&&(i=(i=S[An]||null)?kg(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var R=new Rl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(er!==0){var H=S?Xg(f,S):new FormData(f);Of(s,{pending:!0,data:H,method:f.method,action:h},null,H)}}else typeof h=="function"&&(R.preventDefault(),H=S?Xg(f,S):new FormData(f),Of(s,{pending:!0,data:H,method:f.method,action:h},h,H))},currentTarget:f}]})}}for(var mh=0;mh<Ku.length;mh++){var gh=Ku[mh],Oy=gh.toLowerCase(),Py=gh[0].toUpperCase()+gh.slice(1);Ci(Oy,"on"+Py)}Ci(ym,"onAnimationEnd"),Ci(Mm,"onAnimationIteration"),Ci(Em,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(QS,"onTransitionRun"),Ci(JS,"onTransitionStart"),Ci($S,"onTransitionCancel"),Ci(bm,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Wg(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=ee;try{h(f)}catch(pe){Dl(pe)}f.currentTarget=null,h=H}else for(S=0;S<l.length;S++){if(R=l[S],H=R.instance,ee=R.currentTarget,R=R.listener,H!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=ee;try{h(f)}catch(pe){Dl(pe)}f.currentTarget=null,h=H}}}}function xt(t,i){var s=i[Ua];s===void 0&&(s=i[Ua]=new Set);var l=t+"__bubble";s.has(l)||(qg(i,t,2,!1),s.add(l))}function vh(t,i,s){var l=0;i&&(l|=4),qg(s,t,l,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[gc]){t[gc]=!0,El.forEach(function(s){s!=="selectionchange"&&(Fy.has(s)||vh(s,!1,t),vh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[gc]||(i[gc]=!0,vh("selectionchange",!1,i))}}function qg(t,i,s,l){switch(yv(i)){case 2:var f=uM;break;case 8:f=fM;break;default:f=Lh}s=f.bind(null,i,s,t),f=void 0,!Bu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function xh(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=Oa(R),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){l=h=S;continue e}R=R.parentNode}}l=l.return}Qp(function(){var ee=h,pe=Pu(s),xe=[];e:{var ae=Tm.get(t);if(ae!==void 0){var ce=Rl,qe=t;switch(t){case"keypress":if(Tl(s)===0)break e;case"keydown":case"keyup":ce=wS;break;case"focusin":qe="focus",ce=Gu;break;case"focusout":qe="blur",ce=Gu;break;case"beforeblur":case"afterblur":ce=Gu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=vS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=US;break;case ym:case Mm:case Em:ce=SS;break;case bm:ce=OS;break;case"scroll":case"scrollend":ce=mS;break;case"wheel":ce=FS;break;case"copy":case"cut":case"paste":ce=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=nm;break;case"toggle":case"beforetoggle":ce=zS}var et=(i&4)!==0,kt=!et&&(t==="scroll"||t==="scrollend"),Z=et?ae!==null?ae+"Capture":null:ae;et=[];for(var k=ee,$;k!==null;){var ge=k;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||Z===null||(ge=ao(k,Z),ge!=null&&et.push(zo(k,ge,$))),kt)break;k=k.return}0<et.length&&(ae=new ce(ae,qe,null,s,pe),xe.push({event:ae,listeners:et}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ae&&s!==Ou&&(qe=s.relatedTarget||s.fromElement)&&(Oa(qe)||qe[ta]))break e;if((ce||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(qe=s.relatedTarget||s.toElement,ce=ee,qe=qe?Oa(qe):null,qe!==null&&(kt=c(qe),et=qe.tag,qe!==kt||et!==5&&et!==27&&et!==6)&&(qe=null)):(ce=null,qe=ee),ce!==qe)){if(et=em,ge="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=nm,ge="onPointerLeave",Z="onPointerEnter",k="pointer"),kt=ce==null?ae:vr(ce),$=qe==null?ae:vr(qe),ae=new et(ge,k+"leave",ce,s,pe),ae.target=kt,ae.relatedTarget=$,ge=null,Oa(pe)===ee&&(et=new et(Z,k+"enter",qe,s,pe),et.target=$,et.relatedTarget=kt,ge=et),kt=ge,ce&&qe)t:{for(et=By,Z=ce,k=qe,$=0,ge=Z;ge;ge=et(ge))$++;ge=0;for(var Je=k;Je;Je=et(Je))ge++;for(;0<$-ge;)Z=et(Z),$--;for(;0<ge-$;)k=et(k),ge--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){et=Z;break t}Z=et(Z),k=et(k)}et=null}else et=null;ce!==null&&Yg(xe,ae,ce,et,!1),qe!==null&&kt!==null&&Yg(xe,kt,qe,et,!0)}}e:{if(ae=ee?vr(ee):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var Rt=um;else if(lm(ae))if(fm)Rt=jS;else{Rt=qS;var je=WS}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&Ut(ee.elementType)&&(Rt=um):Rt=YS;if(Rt&&(Rt=Rt(t,ee))){cm(xe,Rt,s,pe);break e}je&&je(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&vt(ae,"number",ae.value)}switch(je=ee?vr(ee):window,t){case"focusin":(lm(je)||je.contentEditable==="true")&&(es=je,Yu=ee,ho=null);break;case"focusout":ho=Yu=es=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,xm(xe,s,pe);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":xm(xe,s,pe)}var ft;if(ku)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else $r?sm(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(im&&s.locale!=="ko"&&($r||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&$r&&(ft=Jp()):(za=pe,zu="value"in za?za.value:za.textContent,$r=!0)),je=vc(ee,Mt),0<je.length&&(Mt=new tm(Mt,t,null,s,pe),xe.push({event:Mt,listeners:je}),ft?Mt.data=ft:(ft=om(s),ft!==null&&(Mt.data=ft)))),(ft=HS?GS(t,s):VS(t,s))&&(Mt=vc(ee,"onBeforeInput"),0<Mt.length&&(je=new tm("onBeforeInput","beforeinput",null,s,pe),xe.push({event:je,listeners:Mt}),je.data=ft)),Ly(xe,t,ee,s,pe)}Wg(xe,i)})}function zo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function vc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=ao(t,s),f!=null&&l.unshift(zo(t,f,h)),f=ao(t,i),f!=null&&l.push(zo(t,f,h))),t.tag===3)return l;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var R=s,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===l)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,f?(ee=ao(s,h),ee!=null&&S.unshift(zo(s,ee,H))):f||(ee=ao(s,h),ee!=null&&S.push(zo(s,ee,H)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var zy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(Iy,"")}function Zg(t,i){return i=jg(i),jg(t)===i}function Vt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||$n(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&$n(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,l);break;case"style":Ri(t,l,h);break;case"data":if(i!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_r(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Vt(t,i,"name",f.name,f,null),Vt(t,i,"formEncType",f.formEncType,f,null),Vt(t,i,"formMethod",f.formMethod,f,null),Vt(t,i,"formTarget",f.formTarget,f,null)):(Vt(t,i,"encType",f.encType,f,null),Vt(t,i,"method",f.method,f,null),Vt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_r(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=na);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=_r(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Be(t,"popover",l);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Be(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=zi.get(s)||s,Be(t,s,l))}}function Sh(t,i,s,l,f,h){switch(s){case"style":Ri(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?$n(t,l):(typeof l=="number"||typeof l=="bigint")&&$n(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[An]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Be(t,s,l)}}}function Dn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,h,S,s,null)}}f&&Vt(t,i,"srcSet",s.srcSet,s,null),l&&Vt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=h=S=f=null,H=null,ee=null;for(l in s)if(s.hasOwnProperty(l)){var pe=s[l];if(pe!=null)switch(l){case"name":f=pe;break;case"type":S=pe;break;case"checked":H=pe;break;case"defaultChecked":ee=pe;break;case"value":h=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:Vt(t,i,l,pe,s,null)}}Ln(t,h,R,H,ee,S,f,!1);return;case"select":xt("invalid",t),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Vt(t,i,f,R,s,null)}i=h,s=S,t.multiple=!!l,i!=null?_n(t,!!l,i,!1):s!=null&&_n(t,!!l,s,!0);return;case"textarea":xt("invalid",t),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,i,S,R,s,null)}Ai(t,l,f,h);return;case"option":for(H in s)s.hasOwnProperty(H)&&(l=s[H],l!=null)&&(H==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Vt(t,i,H,l,s,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<Bo.length;l++)xt(Bo[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(l=s[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,ee,l,s,null)}return;default:if(Ut(i)){for(pe in s)s.hasOwnProperty(pe)&&(l=s[pe],l!==void 0&&Sh(t,i,pe,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Vt(t,i,R,l,s,null))}function Hy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,R=null,H=null,ee=null,pe=null;for(ce in s){var xe=s[ce];if(s.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:l.hasOwnProperty(ce)||Vt(t,i,ce,null,l,xe)}}for(var ae in l){var ce=l[ae];if(xe=s[ae],l.hasOwnProperty(ae)&&(ce!=null||xe!=null))switch(ae){case"type":h=ce;break;case"name":f=ce;break;case"checked":ee=ce;break;case"defaultChecked":pe=ce;break;case"value":S=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:ce!==xe&&Vt(t,i,ae,ce,l,xe)}}Ve(t,S,R,H,ee,pe,h,f);return;case"select":ce=S=R=ae=null;for(h in s)if(H=s[h],s.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ce=H;default:l.hasOwnProperty(h)||Vt(t,i,h,null,l,H)}for(f in l)if(h=l[f],H=s[f],l.hasOwnProperty(f)&&(h!=null||H!=null))switch(f){case"value":ae=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==H&&Vt(t,i,f,h,l,H)}i=R,s=S,l=ce,ae!=null?_n(t,!!s,ae,!1):!!l!=!!s&&(i!=null?_n(t,!!s,i,!0):_n(t,!!s,s?[]:"",!1));return;case"textarea":ce=ae=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,i,R,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":ae=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Vt(t,i,S,f,l,h)}Jn(t,ae,ce);return;case"option":for(var qe in s)ae=s[qe],s.hasOwnProperty(qe)&&ae!=null&&!l.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Vt(t,i,qe,null,l,ae));for(H in l)ae=l[H],ce=s[H],l.hasOwnProperty(H)&&ae!==ce&&(ae!=null||ce!=null)&&(H==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Vt(t,i,H,ae,l,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)ae=s[et],s.hasOwnProperty(et)&&ae!=null&&!l.hasOwnProperty(et)&&Vt(t,i,et,null,l,ae);for(ee in l)if(ae=l[ee],ce=s[ee],l.hasOwnProperty(ee)&&ae!==ce&&(ae!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,i));break;default:Vt(t,i,ee,ae,l,ce)}return;default:if(Ut(i)){for(var kt in s)ae=s[kt],s.hasOwnProperty(kt)&&ae!==void 0&&!l.hasOwnProperty(kt)&&Sh(t,i,kt,void 0,l,ae);for(pe in l)ae=l[pe],ce=s[pe],!l.hasOwnProperty(pe)||ae===ce||ae===void 0&&ce===void 0||Sh(t,i,pe,ae,l,ce);return}}for(var Z in s)ae=s[Z],s.hasOwnProperty(Z)&&ae!=null&&!l.hasOwnProperty(Z)&&Vt(t,i,Z,null,l,ae);for(xe in l)ae=l[xe],ce=s[xe],!l.hasOwnProperty(xe)||ae===ce||ae==null&&ce==null||Vt(t,i,xe,ae,l,ce)}function Kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,R=f.duration;if(h&&R&&Kg(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],ee=H.startTime;if(ee>R)break;var pe=H.transferSize,xe=H.initiatorType;pe&&Kg(xe)&&(H=H.responseEnd,S+=pe*(H<R?1:(R-ee)/(H-ee)))}if(--l,i+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yh=null,Mh=null;function _c(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Eh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bh=null;function Vy(){var t=window.event;return t&&t.type==="popstate"?t===bh?!1:(bh=t,!0):(bh=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(Wy)}:$g;function Wy(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function tv(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Rs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Io(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Io(s);for(var h=s.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[La]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&Io(t.ownerDocument.body);s=f}while(s);Rs(i)}function nv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Th(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Th(s),io(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function qy(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[La])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Yy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=vi(t.nextSibling),t===null))return null;return t}function iv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=vi(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function Rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jy(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Ch=null;function av(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return vi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function rv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function sv(t,i,s){switch(i=_c(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Io(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);io(t)}var _i=new Map,ov=new Set;function xc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=I.d;I.d={f:Zy,r:Ky,D:Qy,C:Jy,L:$y,m:eM,X:nM,S:tM,M:iM};function Zy(){var t=_a.f(),i=uc();return t||i}function Ky(t){var i=Pa(t);i!==null&&i.tag===5&&i.type==="form"?b0(i):_a.r(t)}var bs=typeof document>"u"?null:document;function lv(t,i,s){var l=bs;if(l&&typeof i=="string"&&i){var f=Pt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),ov.has(f)||(ov.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Dn(i,"link",t),hn(i),l.head.appendChild(i)))}}function Qy(t){_a.D(t),lv("dns-prefetch",t,null)}function Jy(t,i){_a.C(t,i),lv("preconnect",t,i)}function $y(t,i,s){_a.L(t,i,s);var l=bs;if(l&&t&&i){var f='link[rel="preload"][as="'+Pt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Pt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Pt(s.imageSizes)+'"]')):f+='[href="'+Pt(t)+'"]';var h=f;switch(i){case"style":h=Ts(t);break;case"script":h=As(t)}_i.has(h)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),_i.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ho(h))||i==="script"&&l.querySelector(Go(h))||(i=l.createElement("link"),Dn(i,"link",t),hn(i),l.head.appendChild(i)))}}function eM(t,i){_a.m(t,i);var s=bs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=As(t)}if(!_i.has(h)&&(t=v({rel:"modulepreload",href:t},i),_i.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Go(h)))return}l=s.createElement("link"),Dn(l,"link",t),hn(l),s.head.appendChild(l)}}}function tM(t,i,s){_a.S(t,i,s);var l=bs;if(l&&t){var f=Fa(l).hoistableStyles,h=Ts(t);i=i||"default";var S=f.get(h);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Ho(h)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=_i.get(h))&&wh(t,s);var H=S=l.createElement("link");hn(H),Dn(H,"link",t),H._p=new Promise(function(ee,pe){H.onload=ee,H.onerror=pe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Sc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(h,S)}}}function nM(t,i){_a.X(t,i);var s=bs;if(s&&t){var l=Fa(s).hoistableScripts,f=As(t),h=l.get(f);h||(h=s.querySelector(Go(f)),h||(t=v({src:t,async:!0},i),(i=_i.get(f))&&Dh(t,i),h=s.createElement("script"),hn(h),Dn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function iM(t,i){_a.M(t,i);var s=bs;if(s&&t){var l=Fa(s).hoistableScripts,f=As(t),h=l.get(f);h||(h=s.querySelector(Go(f)),h||(t=v({src:t,async:!0,type:"module"},i),(i=_i.get(f))&&Dh(t,i),h=s.createElement("script"),hn(h),Dn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function cv(t,i,s,l){var f=(f=se.current)?xc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ts(s.href),s=Fa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ts(s.href);var h=Fa(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(Ho(t)))&&!h._p&&(S.instance=h,S.state.loading=5),_i.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},_i.set(t,s),h||aM(f,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=As(s),s=Fa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ts(t){return'href="'+Pt(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function uv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function aM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),hn(i),t.head.appendChild(i))}function As(t){return'[src="'+Pt(t)+'"]'}function Go(t){return"script[async]"+t}function fv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Pt(s.href)+'"]');if(l)return i.instance=l,hn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),hn(l),Dn(l,"style",f),Sc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ts(s.href);var h=t.querySelector(Ho(f));if(h)return i.state.loading|=4,i.instance=h,hn(h),h;l=uv(s),(f=_i.get(f))&&wh(l,f),h=(t.ownerDocument||t).createElement("link"),hn(h);var S=h;return S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Dn(h,"link",l),i.state.loading|=4,Sc(h,s.precedence,t),i.instance=h;case"script":return h=As(s.src),(f=t.querySelector(Go(h)))?(i.instance=f,hn(f),f):(l=s,(f=_i.get(h))&&(l=v({},s),Dh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),hn(f),Dn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Sc(l,s.precedence,t));return i.instance}function Sc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function wh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var yc=null;function hv(t,i,s){if(yc===null){var l=new Map,f=yc=new Map;f.set(s,l)}else f=yc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[La]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var R=l.get(S);R?R.push(h):l.set(S,[h])}}return l}function dv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function rM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function pv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ts(l.href),h=i.querySelector(Ho(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Mc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,hn(h);return}h=i.ownerDocument||i,l=uv(l),(f=_i.get(f))&&wh(l,f),h=h.createElement("link"),hn(h);var S=h;S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Dn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Mc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Nh=0;function oM(t,i){return t.stylesheets&&t.count===0&&bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&bc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Nh===0&&(Nh=62500*Gy());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&bc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Nh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ec=null;function bc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ec=new Map,i.forEach(lM,t),Ec=null,Mc.call(t))}function lM(t,i){if(!(i.state.loading&4)){var s=Ec.get(t);if(s)var l=s.get(null);else{s=new Map,Ec.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=Mc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Vo={$$typeof:D,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function cM(t,i,s,l,f,h,S,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function mv(t,i,s,l,f,h,S,R,H,ee,pe,xe){return t=new cM(t,i,s,S,H,ee,pe,xe,R),i=1,h===!0&&(i|=24),h=ti(3,null,null,i),t.current=h,h.stateNode=t,i=uf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},pf(h),t}function gv(t){return t?(t=is,t):is}function vv(t,i,s,l,f,h){f=gv(f),l.context===null?l.context=f:l.pendingContext=f,l=Xa(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Wa(t,l,i),s!==null&&(Yn(s,t,i),So(s,t,i))}function _v(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Uh(t,i){_v(t,i),(t=t.alternate)&&_v(t,i)}function xv(t){if(t.tag===13||t.tag===31){var i=Mr(t,67108864);i!==null&&Yn(i,t,67108864),Uh(t,67108864)}}function Sv(t){if(t.tag===13||t.tag===31){var i=si();i=gr(i);var s=Mr(t,i);s!==null&&Yn(s,t,i),Uh(t,i)}}var Tc=!0;function uM(t,i,s,l){var f=O.T;O.T=null;var h=I.p;try{I.p=2,Lh(t,i,s,l)}finally{I.p=h,O.T=f}}function fM(t,i,s,l){var f=O.T;O.T=null;var h=I.p;try{I.p=8,Lh(t,i,s,l)}finally{I.p=h,O.T=f}}function Lh(t,i,s,l){if(Tc){var f=Oh(l);if(f===null)xh(t,i,l,Ac,s),Mv(t,l);else if(dM(f,t,i,s,l))l.stopPropagation();else if(Mv(t,l),i&4&&-1<hM.indexOf(t)){for(;f!==null;){var h=Pa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ae(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var H=1<<31-Fe(S);R.entanglements[1]|=H,S&=~H}Vi(h),(Dt&6)===0&&(lc=Ce()+500,Fo(0))}}break;case 31:case 13:R=Mr(h,2),R!==null&&Yn(R,h,2),uc(),Uh(h,2)}if(h=Oh(l),h===null&&xh(t,i,l,Ac,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else xh(t,i,l,null,s)}}function Oh(t){return t=Pu(t),Ph(t)}var Ac=null;function Ph(t){if(Ac=null,t=Oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ac=t,null}function yv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case N:return 2;case b:return 8;case Q:case _e:return 32;case be:return 268435456;default:return 32}default:return 32}}var Fh=!1,nr=null,ir=null,ar=null,ko=new Map,Xo=new Map,rr=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Pa(i),i!==null&&xv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dM(t,i,s,l,f){switch(i){case"focusin":return nr=Wo(nr,t,i,s,l,f),!0;case"dragenter":return ir=Wo(ir,t,i,s,l,f),!0;case"mouseover":return ar=Wo(ar,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return ko.set(h,Wo(ko.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Xo.set(h,Wo(Xo.get(h)||null,t,i,s,l,f)),!0}return!1}function Ev(t){var i=Oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,to(t.priority,function(){Sv(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,to(t.priority,function(){Sv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Oh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ou=l,s.target.dispatchEvent(l),Ou=null}else return i=Pa(s),i!==null&&xv(i),t.blockedOn=s,!1;i.shift()}return!0}function bv(t,i,s){Rc(t)&&s.delete(i)}function pM(){Fh=!1,nr!==null&&Rc(nr)&&(nr=null),ir!==null&&Rc(ir)&&(ir=null),ar!==null&&Rc(ar)&&(ar=null),ko.forEach(bv),Xo.forEach(bv)}function Cc(t,i){t.blockedOn===i&&(t.blockedOn=null,Fh||(Fh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,pM)))}var wc=null;function Tv(t){wc!==t&&(wc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ph(l||s)===null)continue;break}var h=Pa(s);h!==null&&(t.splice(i,3),i-=3,Of(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Rs(t){function i(H){return Cc(H,t)}nr!==null&&Cc(nr,t),ir!==null&&Cc(ir,t),ar!==null&&Cc(ar,t),ko.forEach(i),Xo.forEach(i);for(var s=0;s<rr.length;s++){var l=rr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<rr.length&&(s=rr[0],s.blockedOn===null);)Ev(s),s.blockedOn===null&&rr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[An]||null;if(typeof h=="function")S||Tv(s);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[An]||null)R=S.formAction;else if(Ph(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),Tv(s)}}}function Av(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Bh(t){this._internalRoot=t}Dc.prototype.render=Bh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=si();vv(s,l,t,i,null,null)},Dc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vv(t.current,2,null,t,null,null),uc(),i[ta]=null}};function Dc(t){this._internalRoot=t}Dc.prototype.unstable_scheduleHydration=function(t){if(t){var i=eo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<rr.length&&i!==0&&i<rr[s].priority;s++);rr.splice(s,0,t),s===0&&Ev(t)}};var Rv=e.version;if(Rv!=="19.2.3")throw Error(r(527,Rv,"19.2.3"));I.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var mM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{fe=Nc.inject(mM),he=Nc}catch{}}return Yo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=O0,h=P0,S=F0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=mv(t,1,!1,null,null,s,l,null,f,h,S,Av),t[ta]=i.current,_h(t),new Bh(i)},Yo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=O0,S=P0,R=F0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=mv(t,1,!0,i,s??null,l,f,H,h,S,R,Av),i.context=gv(null),s=i.current,l=si(),l=gr(l),f=Xa(l),f.callback=null,Wa(s,f,l),s=l,i.current.lanes=s,it(i,s),Vi(i),t[ta]=i.current,_h(t),new Dc(i)},Yo.version="19.2.3",Yo}var Bv;function TM(){if(Bv)return Hh.exports;Bv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Hh.exports=bM(),Hh.exports}var AM=TM();var zv="popstate";function Iv(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function RM(a={}){function e(r,o){let c=o.state?.masked,{pathname:u,search:d,hash:m}=c||r.location;return Rd("",{pathname:u,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:cl(o)}return wM(e,n,null,a)}function Sn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Qi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CM(){return Math.random().toString(36).substring(2,10)}function Hv(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Rd(a,e,n=null,r,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?gl(e):e,state:n,key:e&&e.key||r||CM(),mask:o}}function cl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function gl(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function wM(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,d="POP",m=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function v(){d="POP";let x=g(),M=x==null?null:x-p;p=x,m&&m({action:d,location:C.location,delta:M})}function _(x,M){d="PUSH";let w=Iv(x)?x:Rd(C.location,x,M);p=g()+1;let D=Hv(w,p),U=C.createHref(w.mask||w);try{u.pushState(D,"",U)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;o.location.assign(U)}c&&m&&m({action:d,location:C.location,delta:1})}function y(x,M){d="REPLACE";let w=Iv(x)?x:Rd(C.location,x,M);p=g();let D=Hv(w,p),U=C.createHref(w.mask||w);u.replaceState(D,"",U),c&&m&&m({action:d,location:C.location,delta:0})}function E(x){return DM(x)}let C={get action(){return d},get location(){return a(o,u)},listen(x){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(zv,v),m=x,()=>{o.removeEventListener(zv,v),m=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let M=E(x);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:y,go(x){return u.go(x)}};return C}function DM(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Sn(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:cl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function nx(a,e,n="/"){return NM(a,e,n,!1)}function NM(a,e,n,r,o){let c=typeof e=="string"?gl(e):e,u=Ra(c.pathname||"/",n);if(u==null)return null;let d=UM(a),m=null,p=XM(u);for(let g=0;m==null&&g<d.length;++g)m=VM(d[g],p,r);return m}function UM(a){let e=ix(a);return LM(e),e}function ix(a,e=[],n=[],r="",o=!1){let c=(u,d,m=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Sn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Bi([r,g.relativePath]),_=n.concat(g);u.children&&u.children.length>0&&(Sn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),ix(u.children,e,_,v,m)),!(u.path==null&&!u.index)&&e.push({path:v,score:HM(v,u.index),routesMeta:_})};return a.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))c(u,d);else for(let m of ax(u.path))c(u,d,!0,m)}),e}function ax(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=ax(r.join("/")),d=[];return d.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&d.push(...u),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function LM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:GM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var OM=/^:[\w-]+$/,PM=3,FM=2,BM=1,zM=10,IM=-2,Gv=a=>a==="*";function HM(a,e){let n=a.split("/"),r=n.length;return n.some(Gv)&&(r+=IM),e&&(r+=FM),n.filter(o=>!Gv(o)).reduce((o,c)=>o+(OM.test(c)?PM:c===""?BM:zM),r)}function GM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function VM(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),_=m.route;if(!v&&p&&n&&!r[r.length-1].route.index&&(v=gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Bi([c,v.pathname]),pathnameBase:jM(Bi([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=Bi([c,v.pathnameBase]))}return u}function gu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=kM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},_)=>{if(g==="*"){let E=d[_]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[_];return v&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:a}}function kM(a,e=!1,n=!0){Qi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m,p,g)=>{if(r.push({paramName:d,isOptional:m!=null}),m){let v=g.charAt(p+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function XM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ra(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var WM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function qM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?gl(a):a,c;return n?(n=sx(n),n.startsWith("/")?c=Vv(n.substring(1),"/"):c=Vv(n,e)):c=e,{pathname:c,search:ZM(r),hash:KM(o)}}function Vv(a,e){let n=vu(e).split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function YM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rx(a){let e=YM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Mp(a,e,n,r=!1){let o;typeof a=="string"?o=gl(a):(o={...a},Sn(!o.pathname||!o.pathname.includes("?"),Xh("?","pathname","search",o)),Sn(!o.pathname||!o.pathname.includes("#"),Xh("#","pathname","hash",o)),Sn(!o.search||!o.search.includes("#"),Xh("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let v=e.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}d=v>=0?e[v]:"/"}let m=qM(o,d),p=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var sx=a=>a.replace(/\/\/+/g,"/"),Bi=a=>sx(a.join("/")),vu=a=>a.replace(/\/+$/,""),jM=a=>vu(a).replace(/^\/*/,"/"),ZM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,KM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,QM=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function JM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function $M(a){let e=a.map(n=>n.route.path).filter(Boolean);return Bi(e)||"/"}var ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function lx(a,e){let n=a;if(typeof n!="string"||!WM.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(ox)try{let c=new URL(window.location.href),u=n.startsWith("//")?new URL(c.protocol+n):new URL(n),d=Ra(u.pathname,e);u.origin===c.origin&&d!=null?n=d+u.search+u.hash:o=!0}catch{Qi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cx=["POST","PUT","PATCH","DELETE"];new Set(cx);var e1=["GET",...cx];new Set(e1);var Ks=re.createContext(null);Ks.displayName="DataRouter";var Tu=re.createContext(null);Tu.displayName="DataRouterState";var ux=re.createContext(!1);function t1(){return re.useContext(ux)}var fx=re.createContext({isTransitioning:!1});fx.displayName="ViewTransition";var n1=re.createContext(new Map);n1.displayName="Fetchers";var i1=re.createContext(null);i1.displayName="Await";var bi=re.createContext(null);bi.displayName="Navigation";var Au=re.createContext(null);Au.displayName="Location";var Da=re.createContext({outlet:null,matches:[],isDataRoute:!1});Da.displayName="Route";var Ep=re.createContext(null);Ep.displayName="RouteError";var hx="REACT_ROUTER_ERROR",a1="REDIRECT",r1="ROUTE_ERROR_RESPONSE";function s1(a){if(a.startsWith(`${hx}:${a1}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function o1(a){if(a.startsWith(`${hx}:${r1}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new QM(e.status,e.statusText,e.data)}catch{}}function l1(a,{relative:e}={}){Sn(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=re.useContext(bi),{hash:o,pathname:c,search:u}=_l(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:Bi([n,c])),r.createHref({pathname:d,search:u,hash:o})}function vl(){return re.useContext(Au)!=null}function Na(){return Sn(vl(),"useLocation() may be used only in the context of a <Router> component."),re.useContext(Au).location}var dx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function px(a){re.useContext(bi).static||re.useLayoutEffect(a)}function c1(){let{isDataRoute:a}=re.useContext(Da);return a?M1():u1()}function u1(){Sn(vl(),"useNavigate() may be used only in the context of a <Router> component.");let a=re.useContext(Ks),{basename:e,navigator:n}=re.useContext(bi),{matches:r}=re.useContext(Da),{pathname:o}=Na(),c=JSON.stringify(rx(r)),u=re.useRef(!1);return px(()=>{u.current=!0}),re.useCallback((m,p={})=>{if(Qi(u.current,dx),!u.current)return;if(typeof m=="number"){n.go(m);return}let g=Mp(m,JSON.parse(c),o,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Bi([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,c,o,a])}re.createContext(null);function _l(a,{relative:e}={}){let{matches:n}=re.useContext(Da),{pathname:r}=Na(),o=JSON.stringify(rx(n));return re.useMemo(()=>Mp(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function f1(a,e,n){Sn(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=re.useContext(bi),{matches:o}=re.useContext(Da),c=o[o.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let x=p&&p.path||"";gx(d,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let g=Na(),v;v=g;let _=v.pathname||"/",y=_;if(m!=="/"){let x=m.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=n&&n.state.matches.length?n.state.matches.map(x=>Object.assign(x,{route:n.manifest[x.route.id]||x.route})):nx(a,{pathname:y});return Qi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Qi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),g1(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:Bi([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:Bi([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,n)}function h1(){let a=y1(),e=JM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:c},"ErrorBoundary")," or"," ",re.createElement("code",{style:c},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),n?re.createElement("pre",{style:o},n):null,u)}var d1=re.createElement(h1,null),mx=class extends re.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=o1(a.digest);n&&(a=n)}let e=a!==void 0?re.createElement(Da.Provider,{value:this.props.routeContext},re.createElement(Ep.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?re.createElement(p1,{error:a},e):e}};mx.contextType=ux;var Wh=new WeakMap;function p1({children:a,error:e}){let{basename:n}=re.useContext(bi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=s1(e.digest);if(r){let o=Wh.get(e);if(o)throw o;let c=lx(r.location,n);if(ox&&!Wh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Wh.set(e,u),u}return re.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function m1({routeContext:a,match:e,children:n}){let r=re.useContext(Ks);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(Da.Provider,{value:a},n)}function g1(a,e=[],n){let r=n?.state;if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let o=a,c=r?.errors;if(c!=null){let g=o.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);Sn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,d=-1;if(n&&r){u=r.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=g),v.route.id){let{loaderData:_,errors:y}=r,E=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!y||y[v.route.id]===void 0);if(v.route.lazy||E){n.isStatic&&(u=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let m=n?.onError,p=r&&m?(g,v)=>{m(g,{location:r.location,params:r.matches?.[0]?.params??{},pattern:$M(r.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,_)=>{let y,E=!1,C=null,x=null;r&&(y=c&&v.route.id?c[v.route.id]:void 0,C=v.route.errorElement||d1,u&&(d<0&&_===0?(gx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):d===_&&(E=!0,x=v.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,_+1)),w=()=>{let D;return y?D=C:E?D=x:v.route.Component?D=re.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=g,re.createElement(m1,{match:v,routeContext:{outlet:g,matches:M,isDataRoute:r!=null},children:D})};return r&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?re.createElement(mx,{location:r.location,revalidation:r.revalidation,component:C,error:y,children:w(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):w()},null)}function bp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v1(a){let e=re.useContext(Ks);return Sn(e,bp(a)),e}function _1(a){let e=re.useContext(Tu);return Sn(e,bp(a)),e}function x1(a){let e=re.useContext(Da);return Sn(e,bp(a)),e}function Tp(a){let e=x1(a),n=e.matches[e.matches.length-1];return Sn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function S1(){return Tp("useRouteId")}function y1(){let a=re.useContext(Ep),e=_1("useRouteError"),n=Tp("useRouteError");return a!==void 0?a:e.errors?.[n]}function M1(){let{router:a}=v1("useNavigate"),e=Tp("useNavigate"),n=re.useRef(!1);return px(()=>{n.current=!0}),re.useCallback(async(o,c={})=>{Qi(n.current,dx),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var kv={};function gx(a,e,n){!e&&!kv[a]&&(kv[a]=!0,Qi(!1,n))}re.memo(E1);function E1({routes:a,manifest:e,future:n,state:r,isStatic:o,onError:c}){return f1(a,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function b1({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:u}){Sn(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=re.useMemo(()=>({basename:d,navigator:o,static:c,useTransitions:u,future:{}}),[d,o,c,u]);typeof n=="string"&&(n=gl(n));let{pathname:p="/",search:g="",hash:v="",state:_=null,key:y="default",mask:E}=n,C=re.useMemo(()=>{let x=Ra(p,d);return x==null?null:{location:{pathname:x,search:g,hash:v,state:_,key:y,mask:E},navigationType:r}},[d,p,g,v,_,y,r,E]);return Qi(C!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:re.createElement(bi.Provider,{value:m},re.createElement(Au.Provider,{children:e,value:C}))}var ou="get",lu="application/x-www-form-urlencoded";function Ru(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function T1(a){return Ru(a)&&a.tagName.toLowerCase()==="button"}function A1(a){return Ru(a)&&a.tagName.toLowerCase()==="form"}function R1(a){return Ru(a)&&a.tagName.toLowerCase()==="input"}function C1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function w1(a,e){return a.button===0&&(!e||e==="_self")&&!C1(a)}var Uc=null;function D1(){if(Uc===null)try{new FormData(document.createElement("form"),0),Uc=!1}catch{Uc=!0}return Uc}var N1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qh(a){return a!=null&&!N1.has(a)?(Qi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):a}function U1(a,e){let n,r,o,c,u;if(A1(a)){let d=a.getAttribute("action");r=d?Ra(d,e):null,n=a.getAttribute("method")||ou,o=qh(a.getAttribute("enctype"))||lu,c=new FormData(a)}else if(T1(a)||R1(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?Ra(m,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||ou,o=qh(a.getAttribute("formenctype"))||qh(d.getAttribute("enctype"))||lu,c=new FormData(d,a),!D1()){let{name:p,type:g,value:v}=a;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,v)}}else{if(Ru(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ou,r=null,o=lu,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ap(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function vx(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Ra(o.pathname,e)==="/"?o.pathname=`${vu(e)}/_root.${r}`:o.pathname=`${vu(o.pathname)}.${r}`,o}async function L1(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function O1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function P1(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await L1(c,n);return u.links?u.links():[]}return[]}));return I1(r.flat(1).filter(O1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Xv(a,e,n,r,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,d=(m,p)=>n[p].pathname!==m.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>u(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(u(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function F1(a,e,{includeHydrateFallback:n}={}){return B1(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function B1(a){return[...new Set(a)]}function z1(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function I1(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(z1(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function Rp(){let a=re.useContext(Ks);return Ap(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function H1(){let a=re.useContext(Tu);return Ap(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Cp=re.createContext(void 0);Cp.displayName="FrameworkContext";function wp(){let a=re.useContext(Cp);return Ap(a,"You must render this element inside a <HydratedRouter> element"),a}function G1(a,e){let n=re.useContext(Cp),[r,o]=re.useState(!1),[c,u]=re.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,_=re.useRef(null);re.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let C=M=>{M.forEach(w=>{u(w.isIntersecting)})},x=new IntersectionObserver(C,{threshold:.5});return _.current&&x.observe(_.current),()=>{x.disconnect()}}},[a]),re.useEffect(()=>{if(r){let C=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(C)}}},[r]);let y=()=>{o(!0)},E=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,_,{}]:[c,_,{onFocus:jo(d,y),onBlur:jo(m,E),onMouseEnter:jo(p,y),onMouseLeave:jo(g,E),onTouchStart:jo(v,y)}]:[!1,_,{}]}function jo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function V1({page:a,...e}){let n=t1(),{router:r}=Rp(),o=re.useMemo(()=>nx(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?n?re.createElement(X1,{page:a,matches:o,...e}):re.createElement(W1,{page:a,matches:o,...e}):null}function k1(a){let{manifest:e,routeModules:n}=wp(),[r,o]=re.useState([]);return re.useEffect(()=>{let c=!1;return P1(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function X1({page:a,matches:e,...n}){let r=Na(),{future:o}=wp(),{basename:c}=Rp(),u=re.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let d=vx(a,c,o.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:p.push(g.route.id);return m&&p.length>0&&d.searchParams.set("_routes",p.join(",")),[d.pathname+d.search]},[c,o.unstable_trailingSlashAwareDataRequests,a,r,e]);return re.createElement(re.Fragment,null,u.map(d=>re.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...n})))}function W1({page:a,matches:e,...n}){let r=Na(),{future:o,manifest:c,routeModules:u}=wp(),{basename:d}=Rp(),{loaderData:m,matches:p}=H1(),g=re.useMemo(()=>Xv(a,e,p,c,r,"data"),[a,e,p,c,r]),v=re.useMemo(()=>Xv(a,e,p,c,r,"assets"),[a,e,p,c,r]),_=re.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let C=new Set,x=!1;if(e.forEach(w=>{let D=c.routes[w.route.id];!D||!D.hasLoader||(!g.some(U=>U.route.id===w.route.id)&&w.route.id in m&&u[w.route.id]?.shouldRevalidate||D.hasClientLoader?x=!0:C.add(w.route.id))}),C.size===0)return[];let M=vx(a,d,o.unstable_trailingSlashAwareDataRequests,"data");return x&&C.size>0&&M.searchParams.set("_routes",e.filter(w=>C.has(w.route.id)).map(w=>w.route.id).join(",")),[M.pathname+M.search]},[d,o.unstable_trailingSlashAwareDataRequests,m,r,c,g,e,a,u]),y=re.useMemo(()=>F1(v,c),[v,c]),E=k1(v);return re.createElement(re.Fragment,null,_.map(C=>re.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),y.map(C=>re.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),E.map(({key:C,link:x})=>re.createElement("link",{key:C,nonce:n.nonce,...x,crossOrigin:x.crossOrigin??n.crossOrigin})))}function q1(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Y1&&(window.__reactRouterVersion="7.15.1")}catch{}function j1({basename:a,children:e,useTransitions:n,window:r}){let o=re.useRef();o.current==null&&(o.current=RM({window:r,v5Compat:!0}));let c=o.current,[u,d]=re.useState({action:c.action,location:c.location}),m=re.useCallback(p=>{n===!1?d(p):re.startTransition(()=>d(p))},[n]);return re.useLayoutEffect(()=>c.listen(m),[c,m]),re.createElement(b1,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:c,useTransitions:n})}var _x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xx=re.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,mask:d,state:m,target:p,to:g,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:y,...E},C){let{basename:x,navigator:M,useTransitions:w}=re.useContext(bi),D=typeof g=="string"&&_x.test(g),U=lx(g,x);g=U.to;let G=l1(g,{relative:o}),P=Na(),B=null;if(d){let X=Mp(d,[],P.mask?P.mask.pathname:"/",!0);x!=="/"&&(X.pathname=X.pathname==="/"?x:Bi([x,X.pathname])),B=M.createHref(X)}let[T,L,Y]=G1(r,E),z=J1(g,{replace:u,mask:d,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:_,defaultShouldRevalidate:y,useTransitions:w});function j(X){e&&e(X),X.defaultPrevented||z(X)}let ue=!(U.isExternal||c),de=re.createElement("a",{...E,...Y,href:(ue?B:void 0)||U.absoluteURL||G,onClick:ue?j:e,ref:q1(C,L),target:p,"data-discover":!D&&n==="render"?"true":void 0});return T&&!D?re.createElement(re.Fragment,null,de,re.createElement(V1,{page:G})):de});xx.displayName="Link";var Z1=re.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:d,children:m,...p},g){let v=_l(u,{relative:p.relative}),_=Na(),y=re.useContext(Tu),{navigator:E,basename:C}=re.useContext(bi),x=y!=null&&iE(v)&&d===!0,M=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,w=_.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(w=w.toLowerCase(),D=D?D.toLowerCase():null,M=M.toLowerCase()),D&&C&&(D=Ra(D,C)||D);const U=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let G=w===M||!o&&w.startsWith(M)&&w.charAt(U)==="/",P=D!=null&&(D===M||!o&&D.startsWith(M)&&D.charAt(M.length)==="/"),B={isActive:G,isPending:P,isTransitioning:x},T=G?e:void 0,L;typeof r=="function"?L=r(B):L=[r,G?"active":null,P?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(B):c;return re.createElement(xx,{...p,"aria-current":T,className:L,ref:g,style:Y,to:u,viewTransition:d},typeof m=="function"?m(B):m)});Z1.displayName="NavLink";var K1=re.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=ou,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_,...y},E)=>{let{useTransitions:C}=re.useContext(bi),x=tE(),M=nE(d,{relative:p}),w=u.toLowerCase()==="get"?"get":"post",D=typeof d=="string"&&_x.test(d),U=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let P=G.nativeEvent.submitter,B=P?.getAttribute("formmethod")||u,T=()=>x(P||G.currentTarget,{fetcherKey:e,method:B,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_});C&&n!==!1?re.startTransition(()=>T()):T()};return re.createElement("form",{ref:E,method:w,action:M,onSubmit:r?m:U,...y,"data-discover":!D&&a==="render"?"true":void 0})});K1.displayName="Form";function Q1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sx(a){let e=re.useContext(Ks);return Sn(e,Q1(a)),e}function J1(a,{target:e,replace:n,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:d,defaultShouldRevalidate:m,useTransitions:p}={}){let g=c1(),v=Na(),_=_l(a,{relative:u});return re.useCallback(y=>{if(w1(y,e)){y.preventDefault();let E=n!==void 0?n:cl(v)===cl(_),C=()=>g(a,{replace:E,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:d,defaultShouldRevalidate:m});p?re.startTransition(()=>C()):C()}},[v,g,_,n,r,o,e,a,c,u,d,m,p])}var $1=0,eE=()=>`__${String(++$1)}__`;function tE(){let{router:a}=Sx("useSubmit"),{basename:e}=re.useContext(bi),n=S1(),r=a.fetch,o=a.navigate;return re.useCallback(async(c,u={})=>{let{action:d,method:m,encType:p,formData:g,body:v}=U1(c,e);if(u.navigate===!1){let _=u.fetcherKey||eE();await r(_,n,u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||m,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||m,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,n])}function nE(a,{relative:e}={}){let{basename:n}=re.useContext(bi),r=re.useContext(Da);Sn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={..._l(a||".",{relative:e})},u=Na();if(a==null){c.search=u.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Bi([n,c.pathname])),cl(c)}function iE(a,{relative:e}={}){let n=re.useContext(fx);Sn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Sx("useViewTransitionState"),o=_l(a,{relative:e});if(!n.isTransitioning)return!1;let c=Ra(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Ra(n.nextLocation.pathname,r)||n.nextLocation.pathname;return gu(o.pathname,u)!=null||gu(o.pathname,c)!=null}const Dp="184",aE=0,Wv=1,rE=2,cu=1,sE=2,tl=3,mr=0,jn=1,qi=2,Ta=0,ks=1,qv=2,Yv=3,jv=4,oE=5,Hr=100,lE=101,cE=102,uE=103,fE=104,hE=200,dE=201,pE=202,mE=203,Cd=204,wd=205,gE=206,vE=207,_E=208,xE=209,SE=210,yE=211,ME=212,EE=213,bE=214,Dd=0,Nd=1,Ud=2,Ws=3,Ld=4,Od=5,Pd=6,Fd=7,yx=0,TE=1,AE=2,Zi=0,Mx=1,Ex=2,bx=3,Tx=4,Ax=5,Rx=6,Cx=7,wx=300,Xr=301,qs=302,Yh=303,jh=304,Cu=306,Bd=1e3,ba=1001,zd=1002,Nn=1003,RE=1004,Lc=1005,Bn=1006,Zh=1007,Vr=1008,Si=1009,Dx=1010,Nx=1011,ul=1012,Np=1013,Ji=1014,Yi=1015,Ca=1016,Up=1017,Lp=1018,fl=1020,Ux=35902,Lx=35899,Ox=1021,Px=1022,Fi=1023,wa=1026,kr=1027,Fx=1028,Op=1029,Wr=1030,Pp=1031,Fp=1033,uu=33776,fu=33777,hu=33778,du=33779,Id=35840,Hd=35841,Gd=35842,Vd=35843,kd=36196,Xd=37492,Wd=37496,qd=37488,Yd=37489,_u=37490,jd=37491,Zd=37808,Kd=37809,Qd=37810,Jd=37811,$d=37812,ep=37813,tp=37814,np=37815,ip=37816,ap=37817,rp=37818,sp=37819,op=37820,lp=37821,cp=36492,up=36494,fp=36495,hp=36283,dp=36284,xu=36285,pp=36286,CE=3200,Zv=0,wE=1,dr="",ci="srgb",Su="srgb-linear",yu="linear",It="srgb",Cs=7680,Kv=519,DE=512,NE=513,UE=514,Bp=515,LE=516,OE=517,zp=518,PE=519,Qv=35044,Jv="300 es",ji=2e3,Mu=2001;function FE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Eu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function BE(){const a=Eu("canvas");return a.style.display="block",a}const $v={};function e_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Bx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function tt(...a){a=Bx(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Tt(...a){a=Bx(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function mp(...a){const e=a.join(" ");e in $v||($v[e]=!0,tt(...a))}function zE(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const IE={[Dd]:Nd,[Ud]:Pd,[Ld]:Fd,[Ws]:Od,[Nd]:Dd,[Pd]:Ud,[Fd]:Ld,[Od]:Ws};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let t_=1234567;const al=Math.PI/180,hl=180/Math.PI;function Zr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function mt(a,e,n){return Math.max(e,Math.min(n,a))}function Ip(a,e){return(a%e+e)%e}function HE(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function GE(a,e,n){return a!==e?(n-a)/(e-a):0}function rl(a,e,n){return(1-n)*a+n*e}function VE(a,e,n,r){return rl(a,e,1-Math.exp(-n*r))}function kE(a,e=1){return e-Math.abs(Ip(a,e*2)-e)}function XE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function WE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function qE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function YE(a,e){return a+Math.random()*(e-a)}function jE(a){return a*(.5-Math.random())}function ZE(a){a!==void 0&&(t_=a);let e=t_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(a){return a*al}function QE(a){return a*hl}function JE(a){return(a&a-1)===0&&a!==0}function $E(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function eb(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function tb(a,e,n,r,o){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),y=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*v,m*_,d*p);break;case"YZY":a.set(m*_,d*g,m*v,d*p);break;case"ZXZ":a.set(m*v,m*_,d*g,d*p);break;case"XZX":a.set(d*g,m*E,m*y,d*p);break;case"YXY":a.set(m*y,d*g,m*E,d*p);break;case"ZYZ":a.set(m*E,m*y,d*g,d*p);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vs(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function In(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const nb={DEG2RAD:al,RAD2DEG:hl,generateUUID:Zr,clamp:mt,euclideanModulo:Ip,mapLinear:HE,inverseLerp:GE,lerp:rl,damp:VE,pingpong:kE,smoothstep:XE,smootherstep:WE,randInt:qE,randFloat:YE,randFloatSpread:jE,seededRandom:ZE,degToRad:KE,radToDeg:QE,isPowerOfTwo:JE,ceilPowerOfTwo:$E,floorPowerOfTwo:eb,setQuaternionFromProperEuler:tb,normalize:In,denormalize:Vs},Wp=class Wp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wp.prototype.isVector2=!0;let Ke=Wp;class Qs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let m=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],y=c[u+1],E=c[u+2],C=c[u+3];if(v!==C||m!==_||p!==y||g!==E){let x=m*_+p*y+g*E+v*C;x<0&&(_=-_,y=-y,E=-E,C=-C,x=-x);let M=1-d;if(x<.9995){const w=Math.acos(x),D=Math.sin(w);M=Math.sin(M*w)/D,d=Math.sin(d*w)/D,m=m*M+_*d,p=p*M+y*d,g=g*M+E*d,v=v*M+C*d}else{m=m*M+_*d,p=p*M+y*d,g=g*M+E*d,v=v*M+C*d;const w=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=w,p*=w,g*=w,v*=w}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],m=r[o+1],p=r[o+2],g=r[o+3],v=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return e[n]=d*E+g*v+m*y-p*_,e[n+1]=m*E+g*_+p*v-d*y,e[n+2]=p*E+g*y+d*_-m*v,e[n+3]=g*E-d*v-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(o/2),v=d(c/2),_=m(r/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v+_*y*E;break;case"YZX":this._x=_*g*v+p*y*E,this._y=p*y*v+_*g*E,this._z=p*g*E-_*y*v,this._w=p*g*v-_*y*E;break;case"XZY":this._x=_*g*v-p*y*E,this._y=p*y*v-_*g*E,this._z=p*g*E+_*y*v,this._w=p*g*v+_*y*E;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],v=n[10],_=r+d+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=r*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-r*p,this._z=c*g+u*p+r*m-o*d,this._w=u*g-r*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qp=class qp{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(n_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*r),g=2*(d*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-d*g,this.y=r+m*g+d*p-c*v,this.z=o+m*v+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qp.prototype.isVector3=!0;let K=qp;const Kh=new K,n_=new Qs,Yp=class Yp{constructor(e,n,r,o,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,p)}set(e,n,r,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],_=r[2],y=r[5],E=r[8],C=o[0],x=o[3],M=o[6],w=o[1],D=o[4],U=o[7],G=o[2],P=o[5],B=o[8];return c[0]=u*C+d*w+m*G,c[3]=u*x+d*D+m*P,c[6]=u*M+d*U+m*B,c[1]=p*C+g*w+v*G,c[4]=p*x+g*D+v*P,c[7]=p*M+g*U+v*B,c[2]=_*C+y*w+E*G,c[5]=_*x+y*D+E*P,c[8]=_*M+y*U+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-r*c*g+r*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*u-d*p,_=d*m-g*c,y=p*c-u*m,E=n*v+r*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(o*p-g*r)*C,e[2]=(d*r-o*u)*C,e[3]=_*C,e[4]=(g*n-o*m)*C,e[5]=(o*c-d*n)*C,e[6]=y*C,e[7]=(r*m-p*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Qh.makeScale(e,n)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yp.prototype.isMatrix3=!0;let ot=Yp;const Qh=new ot,i_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){const a={enabled:!0,workingColorSpace:Su,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===It&&(o.r=Aa(o.r),o.g=Aa(o.g),o.b=Aa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===dr?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return mp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return mp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Su]:{primaries:e,whitePoint:r,transfer:yu,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:It,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),a}const bt=ib();function Aa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Xs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ws;class ab{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=Eu("canvas")),ws.width=e.width,ws.height=e.height;const o=ws.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Eu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Aa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Aa(n[r]/255)*255):n[r]=Aa(n[r]);return{data:n,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rb=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Jh(o[u].image)):c.push(Jh(o[u]))}else c=Jh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Jh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ab.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let sb=0;const $h=new K;class Gn extends jr{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=ba,o=ba,c=Bn,u=Vr,d=Fi,m=Si,p=Gn.DEFAULT_ANISOTROPY,g=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Zr(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){tt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){tt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=wx;Gn.DEFAULT_ANISOTROPY=1;const jp=class jp{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],g=m[4],v=m[8],_=m[1],y=m[5],E=m[9],C=m[2],x=m[6],M=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(E+x)<.1&&Math.abs(p+y+M-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,U=(y+1)/2,G=(M+1)/2,P=(g+_)/4,B=(v+C)/4,T=(E+x)/4;return D>U&&D>G?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=P/r,c=B/r):U>G?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=P/o,c=T/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=B/c,o=T/c),this.set(r,o,c,n),this}let w=Math.sqrt((x-E)*(x-E)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(w)<.001&&(w=1),this.x=(x-E)/w,this.y=(v-C)/w,this.z=(_-g)/w,this.w=Math.acos((p+y+M-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jp.prototype.isVector4=!0;let sn=jp;class ob extends jr{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Gn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Hp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends ob{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class zx extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends Gn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=class bu{constructor(e,n,r,o,c,u,d,m,p,g,v,_,y,E,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,p,g,v,_,y,E,C,x)}set(e,n,r,o,c,u,d,m,p,g,v,_,y,E,C,x){const M=this.elements;return M[0]=e,M[4]=n,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=d,M[13]=m,M[2]=p,M[6]=g,M[10]=v,M[14]=_,M[3]=y,M[7]=E,M[11]=C,M[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,y=u*v,E=d*g,C=d*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=y+E*p,n[5]=_-C*p,n[9]=-d*m,n[2]=C-_*p,n[6]=E+y*p,n[10]=u*m}else if(e.order==="YXZ"){const _=m*g,y=m*v,E=p*g,C=p*v;n[0]=_+C*d,n[4]=E*d-y,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-d,n[2]=y*d-E,n[6]=C+_*d,n[10]=u*m}else if(e.order==="ZXY"){const _=m*g,y=m*v,E=p*g,C=p*v;n[0]=_-C*d,n[4]=-u*v,n[8]=E+y*d,n[1]=y+E*d,n[5]=u*g,n[9]=C-_*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const _=u*g,y=u*v,E=d*g,C=d*v;n[0]=m*g,n[4]=E*p-y,n[8]=_*p+C,n[1]=m*v,n[5]=C*p+_,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const _=u*m,y=u*p,E=d*m,C=d*p;n[0]=m*g,n[4]=C-_*v,n[8]=E*v+y,n[1]=v,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*v+E,n[10]=_-C*v}else if(e.order==="XZY"){const _=u*m,y=u*p,E=d*m,C=d*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=_*v+C,n[5]=u*g,n[9]=y*v-E,n[2]=E*v-y,n[6]=d*g,n[10]=C*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cb,e,ub)}lookAt(e,n,r){const o=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),or.crossVectors(r,oi),or.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),or.crossVectors(r,oi)),or.normalize(),Oc.crossVectors(oi,or),o[0]=or.x,o[4]=Oc.x,o[8]=oi.x,o[1]=or.y,o[5]=Oc.y,o[9]=oi.y,o[2]=or.z,o[6]=Oc.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],_=r[9],y=r[13],E=r[2],C=r[6],x=r[10],M=r[14],w=r[3],D=r[7],U=r[11],G=r[15],P=o[0],B=o[4],T=o[8],L=o[12],Y=o[1],z=o[5],j=o[9],ue=o[13],de=o[2],X=o[6],O=o[10],I=o[14],le=o[3],ve=o[7],Ee=o[11],F=o[15];return c[0]=u*P+d*Y+m*de+p*le,c[4]=u*B+d*z+m*X+p*ve,c[8]=u*T+d*j+m*O+p*Ee,c[12]=u*L+d*ue+m*I+p*F,c[1]=g*P+v*Y+_*de+y*le,c[5]=g*B+v*z+_*X+y*ve,c[9]=g*T+v*j+_*O+y*Ee,c[13]=g*L+v*ue+_*I+y*F,c[2]=E*P+C*Y+x*de+M*le,c[6]=E*B+C*z+x*X+M*ve,c[10]=E*T+C*j+x*O+M*Ee,c[14]=E*L+C*ue+x*I+M*F,c[3]=w*P+D*Y+U*de+G*le,c[7]=w*B+D*z+U*X+G*ve,c[11]=w*T+D*j+U*O+G*Ee,c[15]=w*L+D*ue+U*I+G*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],_=e[10],y=e[14],E=e[3],C=e[7],x=e[11],M=e[15],w=m*y-p*_,D=d*y-p*v,U=d*_-m*v,G=u*y-p*g,P=u*_-m*g,B=u*v-d*g;return n*(C*w-x*D+M*U)-r*(E*w-x*G+M*P)+o*(E*D-C*G+M*B)-c*(E*U-C*P+x*B)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],_=e[10],y=e[11],E=e[12],C=e[13],x=e[14],M=e[15],w=n*d-r*u,D=n*m-o*u,U=n*p-c*u,G=r*m-o*d,P=r*p-c*d,B=o*p-c*m,T=g*C-v*E,L=g*x-_*E,Y=g*M-y*E,z=v*x-_*C,j=v*M-y*C,ue=_*M-y*x,de=w*ue-D*j+U*z+G*Y-P*L+B*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/de;return e[0]=(d*ue-m*j+p*z)*X,e[1]=(o*j-r*ue-c*z)*X,e[2]=(C*B-x*P+M*G)*X,e[3]=(_*P-v*B-y*G)*X,e[4]=(m*Y-u*ue-p*L)*X,e[5]=(n*ue-o*Y+c*L)*X,e[6]=(x*U-E*B-M*D)*X,e[7]=(g*B-_*U+y*D)*X,e[8]=(u*j-d*Y+p*T)*X,e[9]=(r*Y-n*j-c*T)*X,e[10]=(E*P-C*U+M*w)*X,e[11]=(v*U-g*P-y*w)*X,e[12]=(d*L-u*z-m*T)*X,e[13]=(n*z-r*L+o*T)*X,e[14]=(C*D-E*G-x*w)*X,e[15]=(g*G-v*D+_*w)*X,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+r,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+r,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,v=d+d,_=c*p,y=c*g,E=c*v,C=u*g,x=u*v,M=d*v,w=m*p,D=m*g,U=m*v,G=r.x,P=r.y,B=r.z;return o[0]=(1-(C+M))*G,o[1]=(y+U)*G,o[2]=(E-D)*G,o[3]=0,o[4]=(y-U)*P,o[5]=(1-(_+M))*P,o[6]=(x+w)*P,o[7]=0,o[8]=(E+D)*B,o[9]=(x-w)*B,o[10]=(1-(_+C))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Ds.set(o[0],o[1],o[2]).length();const d=Ds.set(o[4],o[5],o[6]).length(),m=Ds.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ni.copy(this);const p=1/u,g=1/d,v=1/m;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=g,Ni.elements[5]*=g,Ni.elements[6]*=g,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,n.setFromRotationMatrix(Ni),r.x=u,r.y=d,r.z=m,this}makePerspective(e,n,r,o,c,u,d=ji,m=!1){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let E,C;if(m)E=c/(u-c),C=u*c/(u-c);else if(d===ji)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===Mu)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=ji,m=!1){const p=this.elements,g=2/(n-e),v=2/(r-o),_=-(n+e)/(n-e),y=-(r+o)/(r-o);let E,C;if(m)E=1/(u-c),C=u/(u-c);else if(d===ji)E=-2/(u-c),C=-(u+c)/(u-c);else if(d===Mu)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};bu.prototype.isMatrix4=!0;let fn=bu;const Ds=new K,Ni=new fn,cb=new K(0,0,0),ub=new K(1,1,1),or=new K,Oc=new K,oi=new K,r_=new fn,s_=new Qs;class qr{constructor(e=0,n=0,r=0,o=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return s_.setFromEuler(this),this.setFromQuaternion(s_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class Ix{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fb=0;const o_=new K,Ns=new Qs,xa=new fn,Pc=new K,Zo=new K,hb=new K,db=new Qs,l_=new K(1,0,0),c_=new K(0,1,0),u_=new K(0,0,1),f_={type:"added"},pb={type:"removed"},Us={type:"childadded",child:null},ed={type:"childremoved",child:null};class Zn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new K,n=new qr,r=new Qs,o=new K(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new ot}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,n){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Pc.copy(e):Pc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(Zo,Pc,this.up):xa.lookAt(Pc,Zo,this.up),this.quaternion.setFromRotationMatrix(xa),o&&(xa.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(xa),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Us.child=e,this.dispatchEvent(Us),Us.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pb),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Zn.DEFAULT_UP=new K(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fc extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const x=n.getJointPose(C,r),M=this._getHandJoint(p,C);x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=x.radius),M.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function nd(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=bt.workingColorSpace){if(e=Ip(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=nd(u,c,e+1/3),this.g=nd(u,c,e),this.b=nd(u,c,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,n=ci){function r(c){c!==void 0&&parseFloat(c)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:tt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const r=Hx[e.toLowerCase()];return r!==void 0?this.setHex(r,n):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return bt.workingToColorSpace(Fn.copy(this),e),Math.round(mt(Fn.r*255,0,255))*65536+Math.round(mt(Fn.g*255,0,255))*256+Math.round(mt(Fn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Fn.copy(this),n);const r=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const v=u-d;switch(p=g<=.5?v/(u+d):v/(2-u-d),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ci){bt.workingToColorSpace(Fn.copy(this),e);const n=Fn.r,r=Fn.g,o=Fn.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Bc);const r=rl(lr.h,Bc.h,n),o=rl(lr.s,Bc.s,n),c=rl(lr.l,Bc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Nt;Nt.NAMES=Hx;class gb extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new K,Sa=new K,id=new K,ya=new K,Ls=new K,Os=new K,h_=new K,ad=new K,rd=new K,sd=new K,od=new sn,ld=new sn,cd=new sn;class Pi{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ui.subVectors(e,n),o.cross(Ui);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Ui.subVectors(o,n),Sa.subVectors(r,n),id.subVectors(e,n);const u=Ui.dot(Ui),d=Ui.dot(Sa),m=Ui.dot(id),p=Sa.dot(Sa),g=Sa.dot(id),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*m-d*g)*_,E=(u*g-d*m)*_;return c.set(1-y-E,E,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,n,r,o,c,u,d,m){return this.getBarycoord(e,n,r,o,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(u,ya.y),m.addScaledVector(d,ya.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,n),ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(od,c.x),u.addScaledVector(ld,c.y),u.addScaledVector(cd,c.z),u}static isFrontFacing(e,n,r,o){return Ui.subVectors(r,n),Sa.subVectors(e,n),Ui.cross(Sa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ui.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Ls.subVectors(o,r),Os.subVectors(c,r),ad.subVectors(e,r);const m=Ls.dot(ad),p=Os.dot(ad);if(m<=0&&p<=0)return n.copy(r);rd.subVectors(e,o);const g=Ls.dot(rd),v=Os.dot(rd);if(g>=0&&v<=g)return n.copy(o);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(r).addScaledVector(Ls,u);sd.subVectors(e,c);const y=Ls.dot(sd),E=Os.dot(sd);if(E>=0&&y<=E)return n.copy(c);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(r).addScaledVector(Os,d);const x=g*E-y*v;if(x<=0&&v-g>=0&&y-E>=0)return h_.subVectors(c,o),d=(v-g)/(v-g+(y-E)),n.copy(o).addScaledVector(h_,d);const M=1/(x+C+_);return u=C*M,d=_*M,n.copy(r).addScaledVector(Ls,u).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xl{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Li):Li.fromBufferAttribute(c,u),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zc.copy(r.boundingBox)),zc.applyMatrix4(e.matrixWorld),this.union(zc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ic.subVectors(this.max,Ko),Ps.subVectors(e.a,Ko),Fs.subVectors(e.b,Ko),Bs.subVectors(e.c,Ko),cr.subVectors(Fs,Ps),ur.subVectors(Bs,Fs),Pr.subVectors(Ps,Bs);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Pr.z,Pr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Pr.z,0,-Pr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Pr.y,Pr.x,0];return!ud(n,Ps,Fs,Bs,Ic)||(n=[1,0,0,0,1,0,0,0,1],!ud(n,Ps,Fs,Bs,Ic))?!1:(Hc.crossVectors(cr,ur),n=[Hc.x,Hc.y,Hc.z],ud(n,Ps,Fs,Bs,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new K,new K,new K,new K,new K,new K,new K,new K],Li=new K,zc=new xl,Ps=new K,Fs=new K,Bs=new K,cr=new K,ur=new K,Pr=new K,Ko=new K,Ic=new K,Hc=new K,Fr=new K;function ud(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Fr.fromArray(a,c);const d=o.x*Math.abs(Fr.x)+o.y*Math.abs(Fr.y)+o.z*Math.abs(Fr.z),m=e.dot(Fr),p=n.dot(Fr),g=r.dot(Fr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const vn=new K,Gc=new Ke;let vb=0;class yi extends jr{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Qv,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Gc.fromBufferAttribute(this,n),Gc.applyMatrix3(e),this.setXY(n,Gc.x,Gc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Vs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array),c=In(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gx extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vx extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Mi extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const _b=new xl,Qo=new K,fd=new K;class wu{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_b.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Qo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(fd)),this.expandByPoint(Qo.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xb=0;const xi=new fn,hd=new Zn,zs=new K,li=new xl,Jo=new xl,bn=new K;class Ti extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FE(e)?Vx:Gx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,r){return xi.makeTranslation(e,n,r),this.applyMatrix4(xi),this}scale(e,n,r){return xi.makeScale(e,n,r),this.applyMatrix4(xi),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Mi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(li.min,Jo.min),li.expandByPoint(bn),bn.addVectors(li.max,Jo.max),li.expandByPoint(bn)):(li.expandByPoint(Jo.min),li.expandByPoint(Jo.max))}li.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)bn.fromBufferAttribute(d,p),m&&(zs.fromBufferAttribute(e,p),bn.add(zs)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new K,m[T]=new K;const p=new K,g=new K,v=new K,_=new Ke,y=new Ke,E=new Ke,C=new K,x=new K;function M(T,L,Y){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,Y),_.fromBufferAttribute(c,T),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,Y),g.sub(p),v.sub(p),y.sub(_),E.sub(_);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(z),x.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(z),d[T].add(C),d[L].add(C),d[Y].add(C),m[T].add(x),m[L].add(x),m[Y].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,L=w.length;T<L;++T){const Y=w[T],z=Y.start,j=Y.count;for(let ue=z,de=z+j;ue<de;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const D=new K,U=new K,G=new K,P=new K;function B(T){G.fromBufferAttribute(o,T),P.copy(G);const L=d[T];D.copy(L),D.sub(G.multiplyScalar(G.dot(L))).normalize(),U.crossVectors(P,L);const z=U.dot(m[T])<0?-1:1;u.setXYZW(T,D.x,D.y,D.z,z)}for(let T=0,L=w.length;T<L;++T){const Y=w[T],z=Y.start,j=Y.count;for(let ue=z,de=z+j;ue<de;ue+=3)B(e.getX(ue+0)),B(e.getX(ue+1)),B(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new K,c=new K,u=new K,d=new K,m=new K,p=new K,g=new K,v=new K;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),C=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)bn.fromBufferAttribute(e,n),bn.normalize(),e.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(m.length*g);let y=0,E=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let M=0;M<g;M++)_[E++]=p[y++]}return new yi(_,g,v)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ti,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=e(_,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sb=0;class Sl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=ks,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){tt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){tt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==wd&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ea=new K,dd=new K,Vc=new K,fr=new K,pd=new K,kc=new K,md=new K;class kx{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ea.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){dd.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(dd);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Vc),d=fr.dot(this.direction),m=-fr.dot(Vc),p=fr.lengthSq(),g=Math.abs(1-u*u);let v,_,y,E;if(g>0)if(v=u*m-d,_=u*d-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const C=1/g;v*=C,_*=C,y=v*(v+u*_+2*d)+_*(u*v+_+2*m)+p}else _=c,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(dd).addScaledVector(Vc,_),y}intersectSphere(e,n){Ea.subVectors(e.center,this.origin);const r=Ea.dot(this.direction),o=Ea.dot(Ea)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,n,r,o,c){pd.subVectors(n,e),kc.subVectors(r,e),md.crossVectors(pd,kc);let u=this.direction.dot(md),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;fr.subVectors(this.origin,e);const m=d*this.direction.dot(kc.crossVectors(fr,kc));if(m<0)return null;const p=d*this.direction.dot(pd.cross(fr));if(p<0||m+p>u)return null;const g=-d*fr.dot(md);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xx extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const d_=new fn,Br=new kx,Xc=new wu,p_=new K,Wc=new K,qc=new K,Yc=new K,gd=new K,jc=new K,m_=new K,Zc=new K;class $i extends Zn{constructor(e=new Ti,n=new Xx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(gd.fromBufferAttribute(v,e),u?jc.addScaledVector(gd,g):jc.addScaledVector(gd.sub(n),g))}n.add(jc)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(Xc.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Xc,p_)===null||Br.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(d_.copy(c).invert(),Br.copy(e.ray).applyMatrix4(d_),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,C=_.length;E<C;E++){const x=_[E],M=u[x.materialIndex],w=Math.max(x.start,y.start),D=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let U=w,G=D;U<G;U+=3){const P=d.getX(U),B=d.getX(U+1),T=d.getX(U+2);o=Kc(this,M,e,r,p,g,v,P,B,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let x=E,M=C;x<M;x+=3){const w=d.getX(x),D=d.getX(x+1),U=d.getX(x+2);o=Kc(this,u,e,r,p,g,v,w,D,U),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=_.length;E<C;E++){const x=_[E],M=u[x.materialIndex],w=Math.max(x.start,y.start),D=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let U=w,G=D;U<G;U+=3){const P=U,B=U+1,T=U+2;o=Kc(this,M,e,r,p,g,v,P,B,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let x=E,M=C;x<M;x+=3){const w=x,D=x+1,U=x+2;o=Kc(this,u,e,r,p,g,v,w,D,U),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function yb(a,e,n,r,o,c,u,d){let m;if(e.side===jn?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===mr,d),m===null)return null;Zc.copy(d),Zc.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Zc);return p<n.near||p>n.far?null:{distance:p,point:Zc.clone(),object:a}}function Kc(a,e,n,r,o,c,u,d,m,p){a.getVertexPosition(d,Wc),a.getVertexPosition(m,qc),a.getVertexPosition(p,Yc);const g=yb(a,e,n,r,Wc,qc,Yc,m_);if(g){const v=new K;Pi.getBarycoord(m_,Wc,qc,Yc,v),o&&(g.uv=Pi.getInterpolatedAttribute(o,d,m,p,v,new Ke)),c&&(g.uv1=Pi.getInterpolatedAttribute(c,d,m,p,v,new Ke)),u&&(g.normal=Pi.getInterpolatedAttribute(u,d,m,p,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new K,materialIndex:0};Pi.getNormal(Wc,qc,Yc,_.normal),g.face=_,g.barycoord=v}return g}class Mb extends Gn{constructor(e=null,n=1,r=1,o,c,u,d,m,p=Nn,g=Nn,v,_){super(null,u,d,m,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new K,Eb=new K,bb=new ot;class Ir{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=vd.subVectors(r,n).cross(Eb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(vd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||bb.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new wu,Tb=new Ke(.5,.5),Qc=new K;class Wx{constructor(e=new Ir,n=new Ir,r=new Ir,o=new Ir,c=new Ir,u=new Ir){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ji,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],y=c[7],E=c[8],C=c[9],x=c[10],M=c[11],w=c[12],D=c[13],U=c[14],G=c[15];if(o[0].setComponents(p-u,y-g,M-E,G-w).normalize(),o[1].setComponents(p+u,y+g,M+E,G+w).normalize(),o[2].setComponents(p+d,y+v,M+C,G+D).normalize(),o[3].setComponents(p-d,y-v,M-C,G-D).normalize(),r)o[4].setComponents(m,_,x,U).normalize(),o[5].setComponents(p-m,y-_,M-x,G-U).normalize();else if(o[4].setComponents(p-m,y-_,M-x,G-U).normalize(),n===ji)o[5].setComponents(p+m,y+_,M+x,G+U).normalize();else if(n===Mu)o[5].setComponents(m,_,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=Tb.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Qc.x=o.normal.x>0?e.max.x:e.min.x,Qc.y=o.normal.y>0?e.max.y:e.min.y,Qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ab extends Sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g_=new fn,gp=new kx,Jc=new wu,$c=new K;class Rb extends Zn{constructor(e=new Ti,n=new Ab){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(o),Jc.radius+=c,e.ray.intersectsSphere(Jc)===!1)return;g_.copy(o).invert(),gp.copy(e.ray).applyMatrix4(g_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=_,C=y;E<C;E++){const x=p.getX(E);$c.fromBufferAttribute(v,x),v_($c,x,m,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let E=_,C=y;E<C;E++)$c.fromBufferAttribute(v,E),v_($c,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function v_(a,e,n,r,o,c,u){const d=gp.distanceSqToPoint(a);if(d<n){const m=new K;gp.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class qx extends Gn{constructor(e=[],n=Xr,r,o,c,u,d,m,p,g){super(e,n,r,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends Gn{constructor(e,n,r=Ji,o,c,u,d=Nn,m=Nn,p,g=wa,v=1){if(g!==wa&&g!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,c,u,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cb extends Ys{constructor(e,n=Ji,r=Xr,o,c,u=Nn,d=Nn,m,p=wa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends Ti{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(v,2));function E(C,x,M,w,D,U,G,P,B,T,L){const Y=U/B,z=G/T,j=U/2,ue=G/2,de=P/2,X=B+1,O=T+1;let I=0,le=0;const ve=new K;for(let Ee=0;Ee<O;Ee++){const F=Ee*z-ue;for(let J=0;J<X;J++){const Se=J*Y-j;ve[C]=Se*w,ve[x]=F*D,ve[M]=de,p.push(ve.x,ve.y,ve.z),ve[C]=0,ve[x]=0,ve[M]=P>0?1:-1,g.push(ve.x,ve.y,ve.z),v.push(J/B),v.push(1-Ee/T),I+=1}}for(let Ee=0;Ee<T;Ee++)for(let F=0;F<B;F++){const J=_+F+X*Ee,Se=_+F+X*(Ee+1),Re=_+(F+1)+X*(Ee+1),Ne=_+(F+1)+X*Ee;m.push(J,Se,Ne),m.push(Se,Re,Ne),le+=6}d.addGroup(y,le,L),y+=le,_+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ea{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),n.push(c),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const c=r.length;let u;n?u=n:u=e*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,y=(u-g)/_;return(o+y)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=n||(u.isVector2?new Ke:new K);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new K,o=[],c=[],u=[],d=new K,m=new fn;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new K)}c[0]=new K,u[0]=new K;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),_<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=e;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(mt(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(mt(c[0].dot(c[e]),-1,1));y/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(y=-y);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],y*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gp extends ea{constructor(e=0,n=0,r=1,o=1,c=0,u=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=m}getPoint(e,n=new Ke){const r=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=m-this.aX,y=p-this.aY;m=_*g-y*v+this.aX,p=_*v+y*g+this.aY}return r.set(m,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wb extends Gp{constructor(e,n,r,o,c,u){super(e,n,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Vp(){let a=0,e=0,n=0,r=0;function o(c,u,d,m){a=c,e=d,n=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,p){o(u,d,p*(d-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,p,g,v){let _=(u-c)/p-(d-c)/(p+g)+(d-u)/g,y=(d-u)/g-(m-u)/(g+v)+(m-d)/v;_*=g,y*=g,o(u,d,_,y)},calc:function(c){const u=c*c,d=u*c;return a+e*c+n*u+r*d}}}const __=new K,x_=new K,_d=new Vp,xd=new Vp,Sd=new Vp;class Db extends ea{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new K){const r=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=o[(d-1)%c]:(x_.subVectors(o[0],o[1]).add(o[0]),p=x_);const v=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(__.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=__),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),C=Math.pow(v.distanceToSquared(_),y),x=Math.pow(_.distanceToSquared(g),y);C<1e-4&&(C=1),E<1e-4&&(E=C),x<1e-4&&(x=C),_d.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,E,C,x),xd.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,E,C,x),Sd.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,E,C,x)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),xd.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),Sd.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return r.set(_d.calc(m),xd.calc(m),Sd.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function S_(a,e,n,r,o){const c=(r-e)*.5,u=(o-n)*.5,d=a*a,m=a*d;return(2*n-2*r+c+u)*m+(-3*n+3*r-2*c-u)*d+c*a+n}function Nb(a,e){const n=1-a;return n*n*e}function Ub(a,e){return 2*(1-a)*a*e}function Lb(a,e){return a*a*e}function sl(a,e,n,r){return Nb(a,e)+Ub(a,n)+Lb(a,r)}function Ob(a,e){const n=1-a;return n*n*n*e}function Pb(a,e){const n=1-a;return 3*n*n*a*e}function Fb(a,e){return 3*(1-a)*a*a*e}function Bb(a,e){return a*a*a*e}function ol(a,e,n,r,o){return Ob(a,e)+Pb(a,n)+Fb(a,r)+Bb(a,o)}class jx extends ea{constructor(e=new Ke,n=new Ke,r=new Ke,o=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new Ke){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(ol(e,o.x,c.x,u.x,d.x),ol(e,o.y,c.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zb extends ea{constructor(e=new K,n=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new K){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(ol(e,o.x,c.x,u.x,d.x),ol(e,o.y,c.y,u.y,d.y),ol(e,o.z,c.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zx extends ea{constructor(e=new Ke,n=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ke){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ke){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ib extends ea{constructor(e=new K,n=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new K){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new K){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kx extends ea{constructor(e=new Ke,n=new Ke,r=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new Ke){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(sl(e,o.x,c.x,u.x),sl(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hb extends ea{constructor(e=new K,n=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new K){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(sl(e,o.x,c.x,u.x),sl(e,o.y,c.y,u.y),sl(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qx extends ea{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ke){const r=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,m=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return r.set(S_(d,m.x,p.x,g.x,v.x),S_(d,m.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new Ke().fromArray(o))}return this}}var y_=Object.freeze({__proto__:null,ArcCurve:wb,CatmullRomCurve3:Db,CubicBezierCurve:jx,CubicBezierCurve3:zb,EllipseCurve:Gp,LineCurve:Zx,LineCurve3:Ib,QuadraticBezierCurve:Kx,QuadraticBezierCurve3:Hb,SplineCurve:Qx});class Gb extends ea{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new y_[r](n,e))}return this}getPoint(e,n){const r=e*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=r){const u=o[c]-r,d=this.curves[c],m=d.getLength(),p=m===0?0:1-u/m;return d.getPointAt(p,n)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let r=0,o=this.curves.length;r<o;r++)n+=this.curves[r].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let r;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,m=u.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];r&&r.equals(g)||(n.push(g),r=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const o=e.curves[n];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,r=this.curves.length;n<r;n++){const o=this.curves[n];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const o=e.curves[n];this.curves.push(new y_[o.type]().fromJSON(o))}return this}}class M_ extends Gb{constructor(e){super(),this.type="Path",this.currentPoint=new Ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,r=e.length;n<r;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const r=new Zx(this.currentPoint.clone(),new Ke(e,n));return this.curves.push(r),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,r,o){const c=new Kx(this.currentPoint.clone(),new Ke(e,n),new Ke(r,o));return this.curves.push(c),this.currentPoint.set(r,o),this}bezierCurveTo(e,n,r,o,c,u){const d=new jx(this.currentPoint.clone(),new Ke(e,n),new Ke(r,o),new Ke(c,u));return this.curves.push(d),this.currentPoint.set(c,u),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),r=new Qx(n);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,r,o,c,u){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(e+d,n+m,r,o,c,u),this}absarc(e,n,r,o,c,u){return this.absellipse(e,n,r,r,o,c,u),this}ellipse(e,n,r,o,c,u,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,n+g,r,o,c,u,d,m),this}absellipse(e,n,r,o,c,u,d,m){const p=new Gp(e,n,r,o,c,u,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jx extends M_{constructor(e){super(e),this.uuid=Zr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let r=0,o=this.holes.length;r<o;r++)n[r]=this.holes[r].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,r=e.holes.length;n<r;n++){const o=e.holes[n];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,r=this.holes.length;n<r;n++){const o=this.holes[n];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,r=e.holes.length;n<r;n++){const o=e.holes[n];this.holes.push(new M_().fromJSON(o))}return this}}function Vb(a,e,n=2){const r=e&&e.length,o=r?e[0]*n:a.length;let c=$x(a,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let d,m,p;if(r&&(c=Yb(a,e,c,n)),a.length>80*n){d=a[0],m=a[1];let g=d,v=m;for(let _=n;_<o;_+=n){const y=a[_],E=a[_+1];y<d&&(d=y),E<m&&(m=E),y>g&&(g=y),E>v&&(v=E)}p=Math.max(g-d,v-m),p=p!==0?32767/p:0}return dl(c,u,n,d,m,p,0),u}function $x(a,e,n,r,o){let c;if(o===aT(a,e,n,r)>0)for(let u=e;u<n;u+=r)c=E_(u/r|0,a[u],a[u+1],c);else for(let u=n-r;u>=e;u-=r)c=E_(u/r|0,a[u],a[u+1],c);return c&&js(c,c.next)&&(ml(c),c=c.next),c}function Yr(a,e){if(!a)return a;e||(e=a);let n=a,r;do if(r=!1,!n.steiner&&(js(n,n.next)||nn(n.prev,n,n.next)===0)){if(ml(n),n=e=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==e);return e}function dl(a,e,n,r,o,c,u){if(!a)return;!u&&c&&Jb(a,r,o,c);let d=a;for(;a.prev!==a.next;){const m=a.prev,p=a.next;if(c?Xb(a,r,o,c):kb(a)){e.push(m.i,a.i,p.i),ml(a),a=p.next,d=p.next;continue}if(a=p,a===d){u?u===1?(a=Wb(Yr(a),e),dl(a,e,n,r,o,c,2)):u===2&&qb(a,e,n,r,o,c):dl(Yr(a),e,n,r,o,c,1);break}}}function kb(a){const e=a.prev,n=a,r=a.next;if(nn(e,n,r)>=0)return!1;const o=e.x,c=n.x,u=r.x,d=e.y,m=n.y,p=r.y,g=Math.min(o,c,u),v=Math.min(d,m,p),_=Math.max(o,c,u),y=Math.max(d,m,p);let E=r.next;for(;E!==e;){if(E.x>=g&&E.x<=_&&E.y>=v&&E.y<=y&&nl(o,d,c,m,u,p,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Xb(a,e,n,r){const o=a.prev,c=a,u=a.next;if(nn(o,c,u)>=0)return!1;const d=o.x,m=c.x,p=u.x,g=o.y,v=c.y,_=u.y,y=Math.min(d,m,p),E=Math.min(g,v,_),C=Math.max(d,m,p),x=Math.max(g,v,_),M=vp(y,E,e,n,r),w=vp(C,x,e,n,r);let D=a.prevZ,U=a.nextZ;for(;D&&D.z>=M&&U&&U.z<=w;){if(D.x>=y&&D.x<=C&&D.y>=E&&D.y<=x&&D!==o&&D!==u&&nl(d,g,m,v,p,_,D.x,D.y)&&nn(D.prev,D,D.next)>=0||(D=D.prevZ,U.x>=y&&U.x<=C&&U.y>=E&&U.y<=x&&U!==o&&U!==u&&nl(d,g,m,v,p,_,U.x,U.y)&&nn(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;D&&D.z>=M;){if(D.x>=y&&D.x<=C&&D.y>=E&&D.y<=x&&D!==o&&D!==u&&nl(d,g,m,v,p,_,D.x,D.y)&&nn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;U&&U.z<=w;){if(U.x>=y&&U.x<=C&&U.y>=E&&U.y<=x&&U!==o&&U!==u&&nl(d,g,m,v,p,_,U.x,U.y)&&nn(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function Wb(a,e){let n=a;do{const r=n.prev,o=n.next.next;!js(r,o)&&tS(r,n,n.next,o)&&pl(r,o)&&pl(o,r)&&(e.push(r.i,n.i,o.i),ml(n),ml(n.next),n=a=o),n=n.next}while(n!==a);return Yr(n)}function qb(a,e,n,r,o,c){let u=a;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&tT(u,d)){let m=nS(u,d);u=Yr(u,u.next),m=Yr(m,m.next),dl(u,e,n,r,o,c,0),dl(m,e,n,r,o,c,0);return}d=d.next}u=u.next}while(u!==a)}function Yb(a,e,n,r){const o=[];for(let c=0,u=e.length;c<u;c++){const d=e[c]*r,m=c<u-1?e[c+1]*r:a.length,p=$x(a,d,m,r,!1);p===p.next&&(p.steiner=!0),o.push(eT(p))}o.sort(jb);for(let c=0;c<o.length;c++)n=Zb(o[c],n);return n}function jb(a,e){let n=a.x-e.x;if(n===0&&(n=a.y-e.y,n===0)){const r=(a.next.y-a.y)/(a.next.x-a.x),o=(e.next.y-e.y)/(e.next.x-e.x);n=r-o}return n}function Zb(a,e){const n=Kb(a,e);if(!n)return e;const r=nS(n,a);return Yr(r,r.next),Yr(n,n.next)}function Kb(a,e){let n=e;const r=a.x,o=a.y;let c=-1/0,u;if(js(a,n))return n;do{if(js(a,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const v=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=r&&v>c&&(c=v,u=n.x<n.next.x?n:n.next,v===r))return u}n=n.next}while(n!==e);if(!u)return null;const d=u,m=u.x,p=u.y;let g=1/0;n=u;do{if(r>=n.x&&n.x>=m&&r!==n.x&&eS(o<p?r:c,o,m,p,o<p?c:r,o,n.x,n.y)){const v=Math.abs(o-n.y)/(r-n.x);pl(n,a)&&(v<g||v===g&&(n.x>u.x||n.x===u.x&&Qb(u,n)))&&(u=n,g=v)}n=n.next}while(n!==d);return u}function Qb(a,e){return nn(a.prev,a,e.prev)<0&&nn(e.next,a,a.next)<0}function Jb(a,e,n,r){let o=a;do o.z===0&&(o.z=vp(o.x,o.y,e,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==a);o.prevZ.nextZ=null,o.prevZ=null,$b(o)}function $b(a){let e,n=1;do{let r=a,o;a=null;let c=null;for(e=0;r;){e++;let u=r,d=0;for(let p=0;p<n&&(d++,u=u.nextZ,!!u);p++);let m=n;for(;d>0||m>0&&u;)d!==0&&(m===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,d--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:a=o,o.prevZ=c,c=o;r=u}c.nextZ=null,n*=2}while(e>1);return a}function vp(a,e,n,r,o){return a=(a-n)*o|0,e=(e-r)*o|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function eT(a){let e=a,n=a;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==a);return n}function eS(a,e,n,r,o,c,u,d){return(o-u)*(e-d)>=(a-u)*(c-d)&&(a-u)*(r-d)>=(n-u)*(e-d)&&(n-u)*(c-d)>=(o-u)*(r-d)}function nl(a,e,n,r,o,c,u,d){return!(a===u&&e===d)&&eS(a,e,n,r,o,c,u,d)}function tT(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!nT(a,e)&&(pl(a,e)&&pl(e,a)&&iT(a,e)&&(nn(a.prev,a,e.prev)||nn(a,e.prev,e))||js(a,e)&&nn(a.prev,a,a.next)>0&&nn(e.prev,e,e.next)>0)}function nn(a,e,n){return(e.y-a.y)*(n.x-e.x)-(e.x-a.x)*(n.y-e.y)}function js(a,e){return a.x===e.x&&a.y===e.y}function tS(a,e,n,r){const o=tu(nn(a,e,n)),c=tu(nn(a,e,r)),u=tu(nn(n,r,a)),d=tu(nn(n,r,e));return!!(o!==c&&u!==d||o===0&&eu(a,n,e)||c===0&&eu(a,r,e)||u===0&&eu(n,a,r)||d===0&&eu(n,e,r))}function eu(a,e,n){return e.x<=Math.max(a.x,n.x)&&e.x>=Math.min(a.x,n.x)&&e.y<=Math.max(a.y,n.y)&&e.y>=Math.min(a.y,n.y)}function tu(a){return a>0?1:a<0?-1:0}function nT(a,e){let n=a;do{if(n.i!==a.i&&n.next.i!==a.i&&n.i!==e.i&&n.next.i!==e.i&&tS(n,n.next,a,e))return!0;n=n.next}while(n!==a);return!1}function pl(a,e){return nn(a.prev,a,a.next)<0?nn(a,e,a.next)>=0&&nn(a,a.prev,e)>=0:nn(a,e,a.prev)<0||nn(a,a.next,e)<0}function iT(a,e){let n=a,r=!1;const o=(a.x+e.x)/2,c=(a.y+e.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==a);return r}function nS(a,e){const n=_p(a.i,a.x,a.y),r=_p(e.i,e.x,e.y),o=a.next,c=e.prev;return a.next=e,e.prev=a,n.next=o,o.prev=n,r.next=n,n.prev=r,c.next=r,r.prev=c,r}function E_(a,e,n,r){const o=_p(a,e,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ml(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function _p(a,e,n){return{i:a,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function aT(a,e,n,r){let o=0;for(let c=e,u=n-r;c<n;c+=r)o+=(a[u]-a[c])*(a[c+1]+a[u+1]),u=c;return o}class rT{static triangulate(e,n,r=2){return Vb(e,n,r)}}class ll{static area(e){const n=e.length;let r=0;for(let o=n-1,c=0;c<n;o=c++)r+=e[o].x*e[c].y-e[c].x*e[o].y;return r*.5}static isClockWise(e){return ll.area(e)<0}static triangulateShape(e,n){const r=[],o=[],c=[];b_(e),T_(r,e);let u=e.length;n.forEach(b_);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,T_(r,n[m]);const d=rT.triangulate(r,o);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function b_(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function T_(a,e){for(let n=0;n<e.length;n++)a.push(e[n].x),a.push(e[n].y)}class Du extends Ti{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,g=m+1,v=e/d,_=n/m,y=[],E=[],C=[],x=[];for(let M=0;M<g;M++){const w=M*_-u;for(let D=0;D<p;D++){const U=D*v-c;E.push(U,-w,0),C.push(0,0,1),x.push(D/d),x.push(1-M/m)}}for(let M=0;M<m;M++)for(let w=0;w<d;w++){const D=w+p*M,U=w+p*(M+1),G=w+1+p*(M+1),P=w+1+p*M;y.push(D,U,P),y.push(U,G,P)}this.setIndex(y),this.setAttribute("position",new Mi(E,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class kp extends Ti{constructor(e=new Jx([new Ke(0,.5),new Ke(-.5,-.5),new Ke(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const r=[],o=[],c=[],u=[];let d=0,m=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(d,m,g),d+=m,m=0;this.setIndex(r),this.setAttribute("position",new Mi(o,3)),this.setAttribute("normal",new Mi(c,3)),this.setAttribute("uv",new Mi(u,2));function p(g){const v=o.length/3,_=g.extractPoints(n);let y=_.shape;const E=_.holes;ll.isClockWise(y)===!1&&(y=y.reverse());for(let x=0,M=E.length;x<M;x++){const w=E[x];ll.isClockWise(w)===!0&&(E[x]=w.reverse())}const C=ll.triangulateShape(y,E);for(let x=0,M=E.length;x<M;x++){const w=E[x];y=y.concat(w)}for(let x=0,M=y.length;x<M;x++){const w=y[x];o.push(w.x,w.y,0),c.push(0,0,1),u.push(w.x,w.y)}for(let x=0,M=C.length;x<M;x++){const w=C[x],D=w[0]+v,U=w[1]+v,G=w[2]+v;r.push(D,U,G),m+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return sT(n,e)}static fromJSON(e,n){const r=[];for(let o=0,c=e.shapes.length;o<c;o++){const u=n[e.shapes[o]];r.push(u)}return new kp(r,e.curveSegments)}}function sT(a,e){if(e.shapes=[],Array.isArray(a))for(let n=0,r=a.length;n<r;n++){const o=a[n];e.shapes.push(o.uuid)}else e.shapes.push(a.uuid);return e}function Zs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(A_(o))o.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(A_(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Hn(a){const e={};for(let n=0;n<a.length;n++){const r=Zs(a[n]);for(const o in r)e[o]=r[o]}return e}function A_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function oT(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function iS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const lT={clone:Zs,merge:Hn};var cT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cT,this.fragmentShader=uT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=oT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class fT extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hT extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nu=new K,iu=new Qs,ki=new K;class aS extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nu,iu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,ki.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(nu,iu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new K,R_=new Ke,C_=new Ke;class Oi extends aS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,R_,C_),n.subVectors(C_,R_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(al*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xp extends aS{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=-90,Hs=1;class pT extends Zn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Oi(Is,Hs,e,n);o.layers=this.layers,this.add(o);const c=new Oi(Is,Hs,e,n);c.layers=this.layers,this.add(c);const u=new Oi(Is,Hs,e,n);u.layers=this.layers,this.add(u);const d=new Oi(Is,Hs,e,n);d.layers=this.layers,this.add(d);const m=new Oi(Is,Hs,e,n);m.layers=this.layers,this.add(m);const p=new Oi(Is,Hs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,_,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class mT extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Zp=class Zp{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Zp.prototype.isMatrix2=!0;let w_=Zp;function D_(a,e,n,r){const o=vT(r);switch(n){case Ox:return a*e;case Fx:return a*e/o.components*o.byteLength;case Op:return a*e/o.components*o.byteLength;case Wr:return a*e*2/o.components*o.byteLength;case Pp:return a*e*2/o.components*o.byteLength;case Px:return a*e*3/o.components*o.byteLength;case Fi:return a*e*4/o.components*o.byteLength;case Fp:return a*e*4/o.components*o.byteLength;case uu:case fu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case hu:case du:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Vd:return Math.max(a,16)*Math.max(e,8)/4;case Id:case Gd:return Math.max(a,8)*Math.max(e,8)/2;case kd:case Xd:case qd:case Yd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Wd:case _u:case jd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ap:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case sp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case cp:case up:case fp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case hp:case dp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case xu:case pp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(a){switch(a){case Si:case Dx:return{byteLength:1,components:1};case ul:case Nx:case Ca:return{byteLength:2,components:1};case Up:case Lp:return{byteLength:2,components:4};case Ji:case Np:case Yi:return{byteLength:4,components:1};case Ux:case Lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);function rS(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function _T(a){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,v=p.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,d),v.length===0)a.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++_,v[_]=C)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];a.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
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
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
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
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
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
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UT=`#ifdef USE_IRIDESCENCE
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
#endif`,LT=`#ifdef USE_BUMPMAP
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VT=`#define PI 3.141592653589793
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
} // validated`,kT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XT=`vec3 transformedNormal = objectNormal;
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
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,eA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sA=`#ifdef USE_GRADIENTMAP
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
}`,oA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uA=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,fA=`#ifdef USE_ENVMAP
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
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gA=`PhysicalMaterial material;
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
#endif`,vA=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,_A=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wA=`#if defined( USE_POINTS_UV )
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
#endif`,DA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`#ifdef USE_MORPHTARGETS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VA=`#ifdef USE_NORMALMAP
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
#endif`,kA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,a2=`float getShadowMask() {
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
}`,r2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,o2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l2=`#ifdef USE_SKINNING
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
#endif`,c2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,p2=`#ifdef USE_TRANSMISSION
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S2=`uniform sampler2D t2D;
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`#include <common>
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
}`,A2=`#if DEPTH_PACKING == 3200
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
}`,R2=`#define DISTANCE
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
}`,C2=`#define DISTANCE
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
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`uniform float scale;
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
}`,U2=`uniform vec3 diffuse;
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
}`,L2=`#include <common>
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
}`,O2=`uniform vec3 diffuse;
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
}`,P2=`#define LAMBERT
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
}`,F2=`#define LAMBERT
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
}`,B2=`#define MATCAP
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
}`,z2=`#define MATCAP
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
}`,I2=`#define NORMAL
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
}`,H2=`#define NORMAL
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
}`,G2=`#define PHONG
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
}`,V2=`#define PHONG
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
}`,k2=`#define STANDARD
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
}`,X2=`#define STANDARD
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
}`,W2=`#define TOON
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
}`,q2=`#define TOON
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
}`,Y2=`uniform float size;
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
}`,j2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,K2=`uniform vec3 color;
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
}`,Q2=`uniform float rotation;
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
}`,J2=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:xT,alphahash_pars_fragment:ST,alphamap_fragment:yT,alphamap_pars_fragment:MT,alphatest_fragment:ET,alphatest_pars_fragment:bT,aomap_fragment:TT,aomap_pars_fragment:AT,batching_pars_vertex:RT,batching_vertex:CT,begin_vertex:wT,beginnormal_vertex:DT,bsdfs:NT,iridescence_fragment:UT,bumpmap_pars_fragment:LT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:BT,color_fragment:zT,color_pars_fragment:IT,color_pars_vertex:HT,color_vertex:GT,common:VT,cube_uv_reflection_fragment:kT,defaultnormal_vertex:XT,displacementmap_pars_vertex:WT,displacementmap_vertex:qT,emissivemap_fragment:YT,emissivemap_pars_fragment:jT,colorspace_fragment:ZT,colorspace_pars_fragment:KT,envmap_fragment:QT,envmap_common_pars_fragment:JT,envmap_pars_fragment:$T,envmap_pars_vertex:eA,envmap_physical_pars_fragment:fA,envmap_vertex:tA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:aA,fog_pars_fragment:rA,gradientmap_pars_fragment:sA,lightmap_pars_fragment:oA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:cA,lights_pars_begin:uA,lights_toon_fragment:hA,lights_toon_pars_fragment:dA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:gA,lights_physical_pars_fragment:vA,lights_fragment_begin:_A,lights_fragment_maps:xA,lights_fragment_end:SA,lightprobes_pars_fragment:yA,logdepthbuf_fragment:MA,logdepthbuf_pars_fragment:EA,logdepthbuf_pars_vertex:bA,logdepthbuf_vertex:TA,map_fragment:AA,map_pars_fragment:RA,map_particle_fragment:CA,map_particle_pars_fragment:wA,metalnessmap_fragment:DA,metalnessmap_pars_fragment:NA,morphinstance_vertex:UA,morphcolor_vertex:LA,morphnormal_vertex:OA,morphtarget_pars_vertex:PA,morphtarget_vertex:FA,normal_fragment_begin:BA,normal_fragment_maps:zA,normal_pars_fragment:IA,normal_pars_vertex:HA,normal_vertex:GA,normalmap_pars_fragment:VA,clearcoat_normal_fragment_begin:kA,clearcoat_normal_fragment_maps:XA,clearcoat_pars_fragment:WA,iridescence_pars_fragment:qA,opaque_fragment:YA,packing:jA,premultiplied_alpha_fragment:ZA,project_vertex:KA,dithering_fragment:QA,dithering_pars_fragment:JA,roughnessmap_fragment:$A,roughnessmap_pars_fragment:e2,shadowmap_pars_fragment:t2,shadowmap_pars_vertex:n2,shadowmap_vertex:i2,shadowmask_pars_fragment:a2,skinbase_vertex:r2,skinning_pars_vertex:s2,skinning_vertex:o2,skinnormal_vertex:l2,specularmap_fragment:c2,specularmap_pars_fragment:u2,tonemapping_fragment:f2,tonemapping_pars_fragment:h2,transmission_fragment:d2,transmission_pars_fragment:p2,uv_pars_fragment:m2,uv_pars_vertex:g2,uv_vertex:v2,worldpos_vertex:_2,background_vert:x2,background_frag:S2,backgroundCube_vert:y2,backgroundCube_frag:M2,cube_vert:E2,cube_frag:b2,depth_vert:T2,depth_frag:A2,distance_vert:R2,distance_frag:C2,equirect_vert:w2,equirect_frag:D2,linedashed_vert:N2,linedashed_frag:U2,meshbasic_vert:L2,meshbasic_frag:O2,meshlambert_vert:P2,meshlambert_frag:F2,meshmatcap_vert:B2,meshmatcap_frag:z2,meshnormal_vert:I2,meshnormal_frag:H2,meshphong_vert:G2,meshphong_frag:V2,meshphysical_vert:k2,meshphysical_frag:X2,meshtoon_vert:W2,meshtoon_frag:q2,points_vert:Y2,points_frag:j2,shadow_vert:Z2,shadow_frag:K2,sprite_vert:Q2,sprite_frag:J2},He={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Hn([He.points,He.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Hn([He.common,He.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Hn([He.sprite,He.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Hn([He.common,He.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Hn([He.lights,He.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const au={r:0,b:0,g:0},$2=new fn,sS=new ot;sS.set(-1,0,0,0,1,0,0,0,1);function eR(a,e,n,r,o,c){const u=new Nt(0);let d=o===!0?0:1,m,p,g=null,v=0,_=null;function y(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const U=w.backgroundBlurriness>0;D=e.get(D,U)}return D}function E(w){let D=!1;const U=y(w);U===null?x(u,d):U&&U.isColor&&(x(U,1),D=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(w,D){const U=y(D);U&&(U.isCubeTexture||U.mapping===Cu)?(p===void 0&&(p=new $i(new yl(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Zs(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($2.makeRotationFromEuler(D.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(sS),p.material.toneMapped=bt.getTransfer(U.colorSpace)!==It,(g!==U||v!==U.version||_!==a.toneMapping)&&(p.material.needsUpdate=!0,g=U,v=U.version,_=a.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new $i(new Du(2,2),new Ei({name:"BackgroundMaterial",uniforms:Zs(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=bt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,_=a.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function x(w,D){w.getRGB(au,iS(a)),n.buffers.color.setClear(au.r,au.g,au.b,D,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,D=1){u.set(w),d=D,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,x(u,d)},render:E,addToRenderList:C,dispose:M}}function tR(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(z,j,ue,de,X){let O=!1;const I=v(z,de,ue,j);c!==I&&(c=I,p(c.object)),O=y(z,de,ue,X),O&&E(z,de,ue,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,U(z,j,ue,de),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return a.createVertexArray()}function p(z){return a.bindVertexArray(z)}function g(z){return a.deleteVertexArray(z)}function v(z,j,ue,de){const X=de.wireframe===!0;let O=r[j.id];O===void 0&&(O={},r[j.id]=O);const I=z.isInstancedMesh===!0?z.id:0;let le=O[I];le===void 0&&(le={},O[I]=le);let ve=le[ue.id];ve===void 0&&(ve={},le[ue.id]=ve);let Ee=ve[X];return Ee===void 0&&(Ee=_(m()),ve[X]=Ee),Ee}function _(z){const j=[],ue=[],de=[];for(let X=0;X<n;X++)j[X]=0,ue[X]=0,de[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:de,object:z,attributes:{},index:null}}function y(z,j,ue,de){const X=c.attributes,O=j.attributes;let I=0;const le=ue.getAttributes();for(const ve in le)if(le[ve].location>=0){const F=X[ve];let J=O[ve];if(J===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;I++}return c.attributesNum!==I||c.index!==de}function E(z,j,ue,de){const X={},O=j.attributes;let I=0;const le=ue.getAttributes();for(const ve in le)if(le[ve].location>=0){let F=O[ve];F===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(F=z.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),X[ve]=J,I++}c.attributes=X,c.attributesNum=I,c.index=de}function C(){const z=c.newAttributes;for(let j=0,ue=z.length;j<ue;j++)z[j]=0}function x(z){M(z,0)}function M(z,j){const ue=c.newAttributes,de=c.enabledAttributes,X=c.attributeDivisors;ue[z]=1,de[z]===0&&(a.enableVertexAttribArray(z),de[z]=1),X[z]!==j&&(a.vertexAttribDivisor(z,j),X[z]=j)}function w(){const z=c.newAttributes,j=c.enabledAttributes;for(let ue=0,de=j.length;ue<de;ue++)j[ue]!==z[ue]&&(a.disableVertexAttribArray(ue),j[ue]=0)}function D(z,j,ue,de,X,O,I){I===!0?a.vertexAttribIPointer(z,j,ue,X,O):a.vertexAttribPointer(z,j,ue,de,X,O)}function U(z,j,ue,de){C();const X=de.attributes,O=ue.getAttributes(),I=j.defaultAttributeValues;for(const le in O){const ve=O[le];if(ve.location>=0){let Ee=X[le];if(Ee===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(Ee=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(Ee=z.instanceColor)),Ee!==void 0){const F=Ee.normalized,J=Ee.itemSize,Se=e.get(Ee);if(Se===void 0)continue;const Re=Se.buffer,Ne=Se.type,se=Se.bytesPerElement,ye=Ne===a.INT||Ne===a.UNSIGNED_INT||Ee.gpuType===Np;if(Ee.isInterleavedBufferAttribute){const Te=Ee.data,Ge=Te.stride,nt=Ee.offset;if(Te.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)M(ve.location+$e,Te.meshPerAttribute);z.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<ve.locationSize;$e++)x(ve.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let $e=0;$e<ve.locationSize;$e++)D(ve.location+$e,J/ve.locationSize,Ne,F,Ge*se,(nt+J/ve.locationSize*$e)*se,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Te=0;Te<ve.locationSize;Te++)M(ve.location+Te,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Te=0;Te<ve.locationSize;Te++)x(ve.location+Te);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let Te=0;Te<ve.locationSize;Te++)D(ve.location+Te,J/ve.locationSize,Ne,F,J*se,J/ve.locationSize*Te*se,ye)}}else if(I!==void 0){const F=I[le];if(F!==void 0)switch(F.length){case 2:a.vertexAttrib2fv(ve.location,F);break;case 3:a.vertexAttrib3fv(ve.location,F);break;case 4:a.vertexAttrib4fv(ve.location,F);break;default:a.vertexAttrib1fv(ve.location,F)}}}}w()}function G(){L();for(const z in r){const j=r[z];for(const ue in j){const de=j[ue];for(const X in de){const O=de[X];for(const I in O)g(O[I].object),delete O[I];delete de[X]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const j=r[z.id];for(const ue in j){const de=j[ue];for(const X in de){const O=de[X];for(const I in O)g(O[I].object),delete O[I];delete de[X]}}delete r[z.id]}function B(z){for(const j in r){const ue=r[j];for(const de in ue){const X=ue[de];if(X[z.id]===void 0)continue;const O=X[z.id];for(const I in O)g(O[I].object),delete O[I];delete X[z.id]}}}function T(z){for(const j in r){const ue=r[j],de=z.isInstancedMesh===!0?z.id:0,X=ue[de];if(X!==void 0){for(const O in X){const I=X[O];for(const le in I)g(I[le].object),delete I[le];delete X[O]}delete ue[de],Object.keys(ue).length===0&&delete r[j]}}}function L(){Y(),u=!0,c!==o&&(c=o,p(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:Y,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:x,disableUnusedAttributes:w}}function nR(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,g){g!==0&&(a.drawArraysInstanced(r,m,p,g),n.update(p,r,g))}function d(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let _=0;for(let y=0;y<g;y++)_+=p[y];n.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function iR(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Fi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Si&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Yi&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(tt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),G=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:U,maxSamples:G,samples:P}}function aR(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Ir,d=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||o;return o=_,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,C=v.clipIntersection,x=v.clipShadows,M=a.get(v);if(!o||E===null||E.length===0||c&&!x)c?g(null):p();else{const w=c?0:r,D=w*4;let U=M.clippingState||null;m.value=U,U=g(E,_,D,y);for(let G=0;G!==D;++G)U[G]=n[G];M.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,y,E){const C=v!==null?v.length:0;let x=null;if(C!==0){if(x=m.value,E!==!0||x===null){const M=y+C*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(x===null||x.length<M)&&(x=new Float32Array(M));for(let D=0,U=y;D!==C;++D,U+=4)u.copy(v[D]).applyMatrix4(w,d),u.normal.toArray(x,U),x[U+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const pr=4,N_=[.125,.215,.35,.446,.526,.582],Gr=20,rR=256,$o=new Xp,U_=new Nt;let yd=null,Md=0,Ed=0,bd=!1;const sR=new K;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=sR}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ca,format:Fi,colorSpace:Su,depthBuffer:!1},o=O_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oR(c)),this._blurMaterial=cR(c,e,n),this._ggxMaterial=lR(c,e,n)}return o}_compileMaterial(e){const n=new $i(new Ti,e);this._renderer.compile(n,$o)}_sceneToCubeUV(e,n,r,o,c){const m=new Oi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(U_),v.toneMapping=Zi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new yl,new Xx({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let M=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,M=!0):(x.color.copy(U_),M=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const G=this._cubeSize;Gs(o,U*G,D>2?G:0,G,G),v.setRenderTarget(o),M&&v.render(C,m),v.render(e,m)}v.toneMapping=y,v.autoClear=_,e.background=w}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xr||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Gs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,$o)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,y=v*_,{_lodMax:E}=this,C=this._sizeLods[r],x=3*C*(r>E-pr?r-E+pr:0),M=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,Gs(c,x,M,3*C,2*C),o.setRenderTarget(c),o.render(d,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Gs(e,x,M,3*C,2*C),o.setRenderTarget(e),o.render(d,$o)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Gr-1),C=c/E,x=isFinite(c)?1+Math.floor(g*C):Gr;x>Gr&&tt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gr}`);const M=[];let w=0;for(let B=0;B<Gr;++B){const T=B/C,L=Math.exp(-T*T/2);M.push(L),B===0?w+=L:B<x&&(w+=2*L)}for(let B=0;B<M.length;B++)M[B]=M[B]/w;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=M,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const U=this._sizeLods[o],G=3*U*(o>D-pr?o-D+pr:0),P=4*(this._cubeSize-U);Gs(n,G,P,3*U,2*U),m.setRenderTarget(n),m.render(v,$o)}}function oR(a){const e=[],n=[],r=[];let o=a;const c=a-pr+1+N_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-pr?m=N_[u-a+pr-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,C=3,x=2,M=1,w=new Float32Array(C*E*y),D=new Float32Array(x*E*y),U=new Float32Array(M*E*y);for(let P=0;P<y;P++){const B=P%3*2/3-1,T=P>2?0:-1,L=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];w.set(L,C*E*P),D.set(_,x*E*P);const Y=[P,P,P,P,P,P];U.set(Y,M*E*P)}const G=new Ti;G.setAttribute("position",new yi(w,C)),G.setAttribute("uv",new yi(D,x)),G.setAttribute("faceIndex",new yi(U,M)),r.push(new $i(G,null)),o>pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function O_(a,e,n){const r=new Ki(a,e,n);return r.texture.mapping=Cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function lR(a,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function cR(a,e,n){const r=new Float32Array(Gr),o=new K(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function P_(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function F_(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}class oS extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new qx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new yl(5,5,5),c=new Ei({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ta});c.uniforms.tEquirect.value=n;const u=new $i(o,c),d=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Bn),new pT(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function uR(a){let e=new WeakMap,n=new WeakMap,r=null;function o(_,y=!1){return _==null?null:y?u(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===Yh||y===jh)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const C=new oS(E.height);return C.fromEquirectangularTexture(a,_),e.set(_,C),_.addEventListener("dispose",p),d(C.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const y=_.mapping,E=y===Yh||y===jh,C=y===Xr||y===qs;if(E||C){let x=n.get(_);const M=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return r===null&&(r=new L_(a)),x=E?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,n.set(_,x),x.texture;if(x!==void 0)return x.texture;{const w=_.image;return E&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new L_(a)),x=E?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,n.set(_,x),_.addEventListener("dispose",g),x.texture):null}}}return _}function d(_,y){return y===Yh?_.mapping=Xr:y===jh&&(_.mapping=qs),_}function m(_){let y=0;const E=6;for(let C=0;C<E;C++)_[C]!==void 0&&y++;return y===E}function p(_){const y=_.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function g(_){const y=_.target;y.removeEventListener("dispose",g);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function fR(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&mp("WebGLRenderer: "+r+" extension not supported."),o}}}function hR(a,e,n,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const y in _)e.update(_[y],a.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const w=y.array;C=y.version;for(let D=0,U=w.length;D<U;D+=3){const G=w[D+0],P=w[D+1],B=w[D+2];_.push(G,P,P,B,B,G)}}else{const w=E.array;C=E.version;for(let D=0,U=w.length/3-1;D<U;D+=3){const G=D+0,P=D+1,B=D+2;_.push(G,P,P,B,B,G)}}const x=new(E.count>=65535?Vx:Gx)(_,1);x.version=C;const M=c.get(v);M&&e.remove(M),c.set(v,x)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function dR(a,e,n){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),n.update(_,r,1)}function p(v,_,y){y!==0&&(a.drawElementsInstanced(r,_,c,v*u,y),n.update(_,r,y))}function g(v,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,y);let C=0;for(let x=0;x<y;x++)C+=_[x];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function pR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Tt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function mR(a,e,n){const r=new WeakMap,o=new sn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let Y=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",Y)};var y=Y;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),x===!0&&(U=3);let G=d.attributes.position.count*U,P=1;G>e.maxTextureSize&&(P=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*P*4*v),T=new zx(B,G,P,v);T.type=Yi,T.needsUpdate=!0;const L=U*4;for(let z=0;z<v;z++){const j=M[z],ue=w[z],de=D[z],X=G*P*4*z;for(let O=0;O<j.count;O++){const I=O*L;E===!0&&(o.fromBufferAttribute(j,O),B[X+I+0]=o.x,B[X+I+1]=o.y,B[X+I+2]=o.z,B[X+I+3]=0),C===!0&&(o.fromBufferAttribute(ue,O),B[X+I+4]=o.x,B[X+I+5]=o.y,B[X+I+6]=o.z,B[X+I+7]=0),x===!0&&(o.fromBufferAttribute(de,O),B[X+I+8]=o.x,B[X+I+9]=o.y,B[X+I+10]=o.z,B[X+I+11]=de.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new Ke(G,P)},r.set(d,_),d.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function gR(a,e,n,r,o){let c=new WeakMap;function u(p){const g=o.render.frame,v=p.geometry,_=e.get(p,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return _}function d(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const vR={[Mx]:"LINEAR_TONE_MAPPING",[Ex]:"REINHARD_TONE_MAPPING",[bx]:"CINEON_TONE_MAPPING",[Tx]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Cx]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function _R(a,e,n,r,o){const c=new Ki(e,n,{type:a,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Ys(e,n):void 0}),u=new Ki(e,n,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),d=new Ti;d.setAttribute("position",new Mi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mi([0,2,0,0,2,0],2));const m=new fT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new $i(d,m),g=new Xp(-1,1,1,-1,0,1);let v=null,_=null,y=!1,E,C=null,x=[],M=!1;this.setSize=function(w,D){c.setSize(w,D),u.setSize(w,D);for(let U=0;U<x.length;U++){const G=x[U];G.setSize&&G.setSize(w,D)}},this.setEffects=function(w){x=w,M=x.length>0&&x[0].isRenderPass===!0;const D=c.width,U=c.height;for(let G=0;G<x.length;G++){const P=x[G];P.setSize&&P.setSize(D,U)}},this.begin=function(w,D){if(y||w.toneMapping===Zi&&x.length===0)return!1;if(C=D,D!==null){const U=D.width,G=D.height;(c.width!==U||c.height!==G)&&this.setSize(U,G)}return M===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(w,D){w.toneMapping=E,y=!0;let U=c,G=u;for(let P=0;P<x.length;P++){const B=x[P];if(B.enabled!==!1&&(B.render(w,G,U,D),B.needsSwap!==!1)){const T=U;U=G,G=T}}if(v!==w.outputColorSpace||_!==w.toneMapping){v=w.outputColorSpace,_=w.toneMapping,m.defines={},bt.getTransfer(v)===It&&(m.defines.SRGB_TRANSFER="");const P=vR[_];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(C),w.render(p,g),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),d.dispose(),m.dispose()}}const lS=new Gn,xp=new Ys(1,1),cS=new zx,uS=new lb,fS=new qx,B_=[],z_=[],I_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function Js(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=B_[o];if(c===void 0&&(c=new Float32Array(o),B_[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function yn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Mn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Uu(a,e){let n=z_[e];n===void 0&&(n=new Int32Array(e),z_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function xR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function SR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2fv(this.addr,e),Mn(n,e)}}function yR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yn(n,e))return;a.uniform3fv(this.addr,e),Mn(n,e)}}function MR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4fv(this.addr,e),Mn(n,e)}}function ER(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,r))return;G_.set(r),a.uniformMatrix2fv(this.addr,!1,G_),Mn(n,r)}}function bR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,r))return;H_.set(r),a.uniformMatrix3fv(this.addr,!1,H_),Mn(n,r)}}function TR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,r))return;I_.set(r),a.uniformMatrix4fv(this.addr,!1,I_),Mn(n,r)}}function AR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function RR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2iv(this.addr,e),Mn(n,e)}}function CR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;a.uniform3iv(this.addr,e),Mn(n,e)}}function wR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4iv(this.addr,e),Mn(n,e)}}function DR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function NR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2uiv(this.addr,e),Mn(n,e)}}function UR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;a.uniform3uiv(this.addr,e),Mn(n,e)}}function LR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4uiv(this.addr,e),Mn(n,e)}}function OR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(xp.compareFunction=n.isReversedDepthBuffer()?zp:Bp,c=xp):c=lS,n.setTexture2D(e||c,o)}function PR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||uS,o)}function FR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||fS,o)}function BR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||cS,o)}function zR(a){switch(a){case 5126:return xR;case 35664:return SR;case 35665:return yR;case 35666:return MR;case 35674:return ER;case 35675:return bR;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return CR;case 35669:case 35673:return wR;case 5125:return DR;case 36294:return NR;case 36295:return UR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return BR}}function IR(a,e){a.uniform1fv(this.addr,e)}function HR(a,e){const n=Js(e,this.size,2);a.uniform2fv(this.addr,n)}function GR(a,e){const n=Js(e,this.size,3);a.uniform3fv(this.addr,n)}function VR(a,e){const n=Js(e,this.size,4);a.uniform4fv(this.addr,n)}function kR(a,e){const n=Js(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function XR(a,e){const n=Js(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function WR(a,e){const n=Js(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function qR(a,e){a.uniform1iv(this.addr,e)}function YR(a,e){a.uniform2iv(this.addr,e)}function jR(a,e){a.uniform3iv(this.addr,e)}function ZR(a,e){a.uniform4iv(this.addr,e)}function KR(a,e){a.uniform1uiv(this.addr,e)}function QR(a,e){a.uniform2uiv(this.addr,e)}function JR(a,e){a.uniform3uiv(this.addr,e)}function $R(a,e){a.uniform4uiv(this.addr,e)}function e3(a,e,n){const r=this.cache,o=e.length,c=Uu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Mn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=xp:u=lS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function t3(a,e,n){const r=this.cache,o=e.length,c=Uu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Mn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||uS,c[u])}function n3(a,e,n){const r=this.cache,o=e.length,c=Uu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Mn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||fS,c[u])}function i3(a,e,n){const r=this.cache,o=e.length,c=Uu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Mn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||cS,c[u])}function a3(a){switch(a){case 5126:return IR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return kR;case 35675:return XR;case 35676:return WR;case 5124:case 35670:return qR;case 35667:case 35671:return YR;case 35668:case 35672:return jR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return QR;case 36295:return JR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class r3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}}class s3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a3(n.type)}}class o3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function V_(a,e){a.seq.push(e),a.map[e.id]=e}function l3(a,e,n){const r=a.name,o=r.length;for(Td.lastIndex=0;;){const c=Td.exec(r),u=Td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){V_(n,p===void 0?new r3(d,a,e):new s3(d,a,e));break}else{let v=n.map[d];v===void 0&&(v=new o3(d),V_(n,v)),n=v}}}class pu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);l3(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function k_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const c3=37297;let u3=0;function f3(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const X_=new ot;function h3(a){bt._getMatrix(X_,bt.workingColorSpace,a);const e=`mat3( ${X_.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(a)){case yu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function W_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+f3(a.getShaderSource(e),d)}else return c}function d3(a,e){const n=h3(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const p3={[Mx]:"Linear",[Ex]:"Reinhard",[bx]:"Cineon",[Tx]:"ACESFilmic",[Rx]:"AgX",[Cx]:"Neutral",[Ax]:"Custom"};function m3(a,e){const n=p3[e];return n===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new K;function g3(){bt.getLuminanceCoefficients(ru);const a=ru.x.toFixed(4),e=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v3(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function _3(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function x3(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function il(a){return a!==""}function q_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(a){return a.replace(S3,M3)}const y3=new Map;function M3(a,e){let n=ht[e];if(n===void 0){const r=y3.get(e);if(r!==void 0)n=ht[r],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sp(n)}const E3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(a){return a.replace(E3,b3)}function b3(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Z_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const T3={[cu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function A3(a){return T3[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R3={[Xr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function C3(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":R3[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const w3={[qs]:"ENVMAP_MODE_REFRACTION"};function D3(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":w3[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N3={[yx]:"ENVMAP_BLENDING_MULTIPLY",[TE]:"ENVMAP_BLENDING_MIX",[AE]:"ENVMAP_BLENDING_ADD"};function U3(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":N3[a.combine]||"ENVMAP_BLENDING_NONE"}function L3(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function O3(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=A3(n),p=C3(n),g=D3(n),v=U3(n),_=L3(n),y=v3(n),E=_3(c),C=o.createProgram();let x,M,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(il).join(`
`),x.length>0&&(x+=`
`),M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(il).join(`
`),M.length>0&&(M+=`
`)):(x=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),M=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?ht.tonemapping_pars_fragment:"",n.toneMapping!==Zi?m3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,d3("linearToOutputTexel",n.outputColorSpace),g3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(il).join(`
`)),u=Sp(u),u=q_(u,n),u=Y_(u,n),d=Sp(d),d=q_(d,n),d=Y_(d,n),u=j_(u),d=j_(d),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,M=["#define varying in",n.glslVersion===Jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=w+x+u,U=w+M+d,G=k_(o,o.VERTEX_SHADER,D),P=k_(o,o.FRAGMENT_SHADER,U);o.attachShader(C,G),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function B(z){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(C)||"",ue=o.getShaderInfoLog(G)||"",de=o.getShaderInfoLog(P)||"",X=j.trim(),O=ue.trim(),I=de.trim();let le=!0,ve=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(le=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,G,P);else{const Ee=W_(o,G,"vertex"),F=W_(o,P,"fragment");Tt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+Ee+`
`+F)}else X!==""?tt("WebGLProgram: Program Info Log:",X):(O===""||I==="")&&(ve=!1);ve&&(z.diagnostics={runnable:le,programLog:X,vertexShader:{log:O,prefix:x},fragmentShader:{log:I,prefix:M}})}o.deleteShader(G),o.deleteShader(P),T=new pu(o,C),L=x3(o,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(C,c3)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=P,this}let P3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new B3(e),n.set(e,r)),r}}class B3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function z3(a){return a===Wr||a===_u||a===xu}function I3(a,e,n,r,o,c){const u=new Ix,d=new F3,m=new Set,p=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,L,Y,z,j,ue){const de=z.fog,X=j.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,le=e.get(T.envMap||O,I),ve=le&&le.mapping===Cu?le.image.height:null,Ee=y[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&tt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=F!==void 0?F.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Re,Ne,se,ye;if(Ee){const it=Wi[Ee];Re=it.vertexShader,Ne=it.fragmentShader}else Re=T.vertexShader,Ne=T.fragmentShader,d.update(T),se=d.getVertexShaderID(T),ye=d.getFragmentShaderID(T);const Te=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),nt=j.isInstancedMesh===!0,$e=j.isBatchedMesh===!0,Xt=!!T.map,dt=!!T.matcap,St=!!le,Lt=!!T.aoMap,ut=!!T.lightMap,on=!!T.bumpMap,Yt=!!T.normalMap,Tn=!!T.displacementMap,W=!!T.emissiveMap,en=!!T.metalnessMap,pt=!!T.roughnessMap,Ht=T.anisotropy>0,Ce=T.clearcoat>0,Kt=T.dispersion>0,N=T.iridescence>0,b=T.sheen>0,Q=T.transmission>0,_e=Ht&&!!T.anisotropyMap,be=Ce&&!!T.clearcoatMap,we=Ce&&!!T.clearcoatNormalMap,Oe=Ce&&!!T.clearcoatRoughnessMap,fe=N&&!!T.iridescenceMap,he=N&&!!T.iridescenceThicknessMap,Pe=b&&!!T.sheenColorMap,Fe=b&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,De=!!T.specularColorMap,at=!!T.specularIntensityMap,rt=Q&&!!T.transmissionMap,gt=Q&&!!T.thicknessMap,V=!!T.gradientMap,Ae=!!T.alphaMap,me=T.alphaTest>0,Ie=!!T.alphaHash,Le=!!T.extensions;let Me=Zi;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Me=a.toneMapping);const Ye={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:Ne,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:$e,batchingColor:$e&&j._colorsTexture!==null,instancing:nt,instancingColor:nt&&j.instanceColor!==null,instancingMorph:nt&&j.morphTexture!==null,outputColorSpace:Te===null?a.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:dt,envMap:St,envMapMode:St&&le.mapping,envMapCubeUVHeight:ve,aoMap:Lt,lightMap:ut,bumpMap:on,normalMap:Yt,displacementMap:Tn,emissiveMap:W,normalMapObjectSpace:Yt&&T.normalMapType===wE,normalMapTangentSpace:Yt&&T.normalMapType===Zv,packedNormalMap:Yt&&T.normalMapType===Zv&&z3(T.normalMap.format),metalnessMap:en,roughnessMap:pt,anisotropy:Ht,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:Kt,iridescence:N,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:b,sheenColorMap:Pe,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:De,specularIntensityMap:at,transmission:Q,transmissionMap:rt,thicknessMap:gt,gradientMap:V,opaque:T.transparent===!1&&T.blending===ks&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:Ie,combine:T.combine,mapUv:Xt&&E(T.map.channel),aoMapUv:Lt&&E(T.aoMap.channel),lightMapUv:ut&&E(T.lightMap.channel),bumpMapUv:on&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:Tn&&E(T.displacementMap.channel),emissiveMapUv:W&&E(T.emissiveMap.channel),metalnessMapUv:en&&E(T.metalnessMap.channel),roughnessMapUv:pt&&E(T.roughnessMap.channel),anisotropyMapUv:_e&&E(T.anisotropyMap.channel),clearcoatMapUv:be&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ue&&E(T.specularMap.channel),specularColorMapUv:De&&E(T.specularColorMap.channel),specularIntensityMapUv:at&&E(T.specularIntensityMap.channel),transmissionMapUv:rt&&E(T.transmissionMap.channel),thicknessMapUv:gt&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Yt||Ht),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!X.attributes.uv&&(Xt||Ae),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:j.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Se,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&Y.length>0,shadowMapType:a.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)L.push(Y),L.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(M(L,T),w(L,T),L.push(a.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function M(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function w(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function D(T){const L=y[T.type];let Y;if(L){const z=Wi[L];Y=lT.clone(z.uniforms)}else Y=T.uniforms;return Y}function U(T,L){let Y=g.get(L);return Y!==void 0?++Y.usedTimes:(Y=new O3(a,L,T,o),p.push(Y),g.set(L,Y)),Y}function G(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function B(){d.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:D,acquireProgram:U,releaseProgram:G,releaseShaderCache:P,programs:p,dispose:B}}function H3(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function G3(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function K_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Q_(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function d(_,y,E,C,x,M){let w=a[e];return w===void 0?(w={id:_.id,object:_,geometry:y,material:E,materialVariant:u(_),groupOrder:C,renderOrder:_.renderOrder,z:x,group:M},a[e]=w):(w.id=_.id,w.object=_,w.geometry=y,w.material=E,w.materialVariant=u(_),w.groupOrder=C,w.renderOrder=_.renderOrder,w.z=x,w.group=M),e++,w}function m(_,y,E,C,x,M){const w=d(_,y,E,C,x,M);E.transmission>0?r.push(w):E.transparent===!0?o.push(w):n.push(w)}function p(_,y,E,C,x,M){const w=d(_,y,E,C,x,M);E.transmission>0?r.unshift(w):E.transparent===!0?o.unshift(w):n.unshift(w)}function g(_,y){n.length>1&&n.sort(_||G3),r.length>1&&r.sort(y||K_),o.length>1&&o.sort(y||K_)}function v(){for(let _=e,y=a.length;_<y;_++){const E=a[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:g}}function V3(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Q_,a.set(r,[u])):o>=c.length?(u=new Q_,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function k3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Nt};break;case"SpotLight":n={position:new K,direction:new K,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=n,n}}}function X3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let W3=0;function q3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Y3(a){const e=new k3,n=X3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const o=new K,c=new fn,u=new fn;function d(p){let g=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,C=0,x=0,M=0,w=0,D=0,U=0,G=0,P=0,B=0;p.sort(q3);for(let L=0,Y=p.length;L<Y;L++){const z=p[L],j=z.color,ue=z.intensity,de=z.distance;let X=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Wr?X=z.shadow.map.texture:X=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=j.r*ue,v+=j.g*ue,_+=j.b*ue;else if(z.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(z.sh.coefficients[O],ue);B++}else if(z.isDirectionalLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const I=z.shadow,le=n.get(z);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,r.directionalShadow[y]=le,r.directionalShadowMap[y]=X,r.directionalShadowMatrix[y]=z.shadow.matrix,w++}r.directional[y]=O,y++}else if(z.isSpotLight){const O=e.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(j).multiplyScalar(ue),O.distance=de,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,r.spot[C]=O;const I=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,I.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[C]=I.matrix,z.castShadow){const le=n.get(z);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,r.spotShadow[C]=le,r.spotShadowMap[C]=X,U++}C++}else if(z.isRectAreaLight){const O=e.get(z);O.color.copy(j).multiplyScalar(ue),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=O,x++}else if(z.isPointLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const I=z.shadow,le=n.get(z);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,le.shadowCameraNear=I.camera.near,le.shadowCameraFar=I.camera.far,r.pointShadow[E]=le,r.pointShadowMap[E]=X,r.pointShadowMatrix[E]=z.shadow.matrix,D++}r.point[E]=O,E++}else if(z.isHemisphereLight){const O=e.get(z);O.skyColor.copy(z.color).multiplyScalar(ue),O.groundColor.copy(z.groundColor).multiplyScalar(ue),r.hemi[M]=O,M++}}x>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==x||T.hemiLength!==M||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==U||T.numSpotMaps!==G||T.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=x,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+G-P,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=x,T.hemiLength=M,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=U,T.numSpotMaps=G,T.numLightProbes=B,r.version=W3++)}function m(p,g){let v=0,_=0,y=0,E=0,C=0;const x=g.matrixWorldInverse;for(let M=0,w=p.length;M<w;M++){const D=p[M];if(D.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),v++}else if(D.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),u.identity(),c.copy(D.matrixWorld),c.premultiply(x),u.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),_++}else if(D.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:r}}function J_(a){const e=new Y3(a),n=[],r=[],o=[];function c(_){v.camera=_,n.length=0,r.length=0,o.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function m(_){o.push(_)}function p(){e.setup(n)}function g(_){e.setupView(n,_)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function j3(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new J_(a),e.set(o,[d])):c>=u.length?(d=new J_(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
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
}`,Q3=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],J3=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],$_=new fn,el=new K,Ad=new K;function $3(a,e,n){let r=new Wx;const o=new Ke,c=new Ke,u=new sn,d=new hT,m=new dT,p={},g=n.maxTextureSize,v={[mr]:jn,[jn]:mr,[qi]:qi},_=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Z3,fragmentShader:K3}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $i(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let M=this.type;this.render=function(P,B,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===sE&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const L=a.getRenderTarget(),Y=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ta),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ue=M!==this.type;ue&&B.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(X=>X.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,X=P.length;de<X;de++){const O=P[de],I=O.shadow;if(I===void 0){tt("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const le=I.getFrameExtents();o.multiply(le),c.copy(I.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/le.x),o.x=c.x*le.x,I.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/le.y),o.y=c.y*le.y,I.mapSize.y=c.y));const ve=a.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ve,I.map===null||ue===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===tl){if(O.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ki(o.x,o.y,{format:Wr,type:Ca,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Ys(o.x,o.y,Yi),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=wa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn}else O.isPointLight?(I.map=new oS(o.x),I.map.depthTexture=new Cb(o.x,Ji)):(I.map=new Ki(o.x,o.y),I.map.depthTexture=new Ys(o.x,o.y,Ji)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=wa,this.type===cu?(I.map.depthTexture.compareFunction=ve?zp:Bp,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn);I.camera.updateProjectionMatrix()}const Ee=I.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Ee;F++){if(I.map.isWebGLCubeRenderTarget)a.setRenderTarget(I.map,F),a.clear();else{F===0&&(a.setRenderTarget(I.map),a.clear());const J=I.getViewport(F);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),j.viewport(u)}if(O.isPointLight){const J=I.camera,Se=I.matrix,Re=O.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),el.setFromMatrixPosition(O.matrixWorld),J.position.copy(el),Ad.copy(J.position),Ad.add(Q3[F]),J.up.copy(J3[F]),J.lookAt(Ad),J.updateMatrixWorld(),Se.makeTranslation(-el.x,-el.y,-el.z),$_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),I._frustum.setFromProjectionMatrix($_,J.coordinateSystem,J.reversedDepth)}else I.updateMatrices(O);r=I.getFrustum(),U(B,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===tl&&w(I,T),I.needsUpdate=!1}M=this.type,x.needsUpdate=!1,a.setRenderTarget(L,Y,z)};function w(P,B){const T=e.update(C);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(o.x,o.y,{format:Wr,type:Ca})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(B,null,T,_,C,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(B,null,T,y,C,null)}function D(P,B,T,L){let Y=null;const z=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)Y=z;else if(Y=T.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=Y.uuid,ue=B.uuid;let de=p[j];de===void 0&&(de={},p[j]=de);let X=de[ue];X===void 0&&(X=Y.clone(),de[ue]=X,B.addEventListener("dispose",G)),Y=X}if(Y.visible=B.visible,Y.wireframe=B.wireframe,L===tl?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:v[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=a.properties.get(Y);j.light=T}return Y}function U(P,B,T,L,Y){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===tl)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),de=P.material;if(Array.isArray(de)){const X=ue.groups;for(let O=0,I=X.length;O<I;O++){const le=X[O],ve=de[le.materialIndex];if(ve&&ve.visible){const Ee=D(P,ve,L,Y);P.onBeforeShadow(a,P,B,T,ue,Ee,le),a.renderBufferDirect(T,null,ue,Ee,P,le),P.onAfterShadow(a,P,B,T,ue,Ee,le)}}}else if(de.visible){const X=D(P,de,L,Y);P.onBeforeShadow(a,P,B,T,ue,X,null),a.renderBufferDirect(T,null,ue,X,P,null),P.onAfterShadow(a,P,B,T,ue,X,null)}}const j=P.children;for(let ue=0,de=j.length;ue<de;ue++)U(j[ue],B,T,L,Y)}function G(P){P.target.removeEventListener("dispose",G);for(const T in p){const L=p[T],Y=P.target.uuid;Y in L&&(L[Y].dispose(),delete L[Y])}}}function eC(a,e){function n(){let V=!1;const Ae=new sn;let me=null;const Ie=new sn(0,0,0,0);return{setMask:function(Le){me!==Le&&!V&&(a.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Me,Ye,it,tn){tn===!0&&(Le*=it,Me*=it,Ye*=it),Ae.set(Le,Me,Ye,it),Ie.equals(Ae)===!1&&(a.clearColor(Le,Me,Ye,it),Ie.copy(Ae))},reset:function(){V=!1,me=null,Ie.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,me=null,Ie=null,Le=null;return{setReversed:function(Me){if(Ae!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const it=Le;Le=null,this.setClear(it)}},getReversed:function(){return Ae},setTest:function(Me){Me?Te(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(Me){me!==Me&&!V&&(a.depthMask(Me),me=Me)},setFunc:function(Me){if(Ae&&(Me=IE[Me]),Ie!==Me){switch(Me){case Dd:a.depthFunc(a.NEVER);break;case Nd:a.depthFunc(a.ALWAYS);break;case Ud:a.depthFunc(a.LESS);break;case Ws:a.depthFunc(a.LEQUAL);break;case Ld:a.depthFunc(a.EQUAL);break;case Od:a.depthFunc(a.GEQUAL);break;case Pd:a.depthFunc(a.GREATER);break;case Fd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Le!==Me&&(Le=Me,Ae&&(Me=1-Me),a.clearDepth(Me))},reset:function(){V=!1,me=null,Ie=null,Le=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Ie=null,Le=null,Me=null,Ye=null,it=null,tn=null;return{setTest:function(wt){V||(wt?Te(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!V&&(a.stencilMask(wt),Ae=wt)},setFunc:function(wt,ui,Qn){(me!==wt||Ie!==ui||Le!==Qn)&&(a.stencilFunc(wt,ui,Qn),me=wt,Ie=ui,Le=Qn)},setOp:function(wt,ui,Qn){(Me!==wt||Ye!==ui||it!==Qn)&&(a.stencilOp(wt,ui,Qn),Me=wt,Ye=ui,it=Qn)},setLocked:function(wt){V=wt},setClear:function(wt){tn!==wt&&(a.clearStencil(wt),tn=wt)},reset:function(){V=!1,Ae=null,me=null,Ie=null,Le=null,Me=null,Ye=null,it=null,tn=null}}}const c=new n,u=new r,d=new o,m=new WeakMap,p=new WeakMap;let g={},v={},_={},y=new WeakMap,E=[],C=null,x=!1,M=null,w=null,D=null,U=null,G=null,P=null,B=null,T=new Nt(0,0,0),L=0,Y=!1,z=null,j=null,ue=null,de=null,X=null;const O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,le=0;const ve=a.getParameter(a.VERSION);ve.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ve)[1]),I=le>=1):ve.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),I=le>=2);let Ee=null,F={};const J=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Re=new sn().fromArray(J),Ne=new sn().fromArray(Se);function se(V,Ae,me,Ie){const Le=new Uint8Array(4),Me=a.createTexture();a.bindTexture(V,Me),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<me;Ye++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Le):a.texImage2D(Ae+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Le);return Me}const ye={};ye[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Te(a.DEPTH_TEST),u.setFunc(Ws),on(!1),Yt(Wv),Te(a.CULL_FACE),Lt(Ta);function Te(V){g[V]!==!0&&(a.enable(V),g[V]=!0)}function Ge(V){g[V]!==!1&&(a.disable(V),g[V]=!1)}function nt(V,Ae){return _[V]!==Ae?(a.bindFramebuffer(V,Ae),_[V]=Ae,V===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ae),V===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e(V,Ae){let me=E,Ie=!1;if(V){me=y.get(Ae),me===void 0&&(me=[],y.set(Ae,me));const Le=V.textures;if(me.length!==Le.length||me[0]!==a.COLOR_ATTACHMENT0){for(let Me=0,Ye=Le.length;Me<Ye;Me++)me[Me]=a.COLOR_ATTACHMENT0+Me;me.length=Le.length,Ie=!0}}else me[0]!==a.BACK&&(me[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(me)}function Xt(V){return C!==V?(a.useProgram(V),C=V,!0):!1}const dt={[Hr]:a.FUNC_ADD,[lE]:a.FUNC_SUBTRACT,[cE]:a.FUNC_REVERSE_SUBTRACT};dt[uE]=a.MIN,dt[fE]=a.MAX;const St={[hE]:a.ZERO,[dE]:a.ONE,[pE]:a.SRC_COLOR,[Cd]:a.SRC_ALPHA,[SE]:a.SRC_ALPHA_SATURATE,[_E]:a.DST_COLOR,[gE]:a.DST_ALPHA,[mE]:a.ONE_MINUS_SRC_COLOR,[wd]:a.ONE_MINUS_SRC_ALPHA,[xE]:a.ONE_MINUS_DST_COLOR,[vE]:a.ONE_MINUS_DST_ALPHA,[yE]:a.CONSTANT_COLOR,[ME]:a.ONE_MINUS_CONSTANT_COLOR,[EE]:a.CONSTANT_ALPHA,[bE]:a.ONE_MINUS_CONSTANT_ALPHA};function Lt(V,Ae,me,Ie,Le,Me,Ye,it,tn,wt){if(V===Ta){x===!0&&(Ge(a.BLEND),x=!1);return}if(x===!1&&(Te(a.BLEND),x=!0),V!==oE){if(V!==M||wt!==Y){if((w!==Hr||G!==Hr)&&(a.blendEquation(a.FUNC_ADD),w=Hr,G=Hr),wt)switch(V){case ks:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qv:a.blendFunc(a.ONE,a.ONE);break;case Yv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case jv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Tt("WebGLState: Invalid blending: ",V);break}else switch(V){case ks:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Yv:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jv:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",V);break}D=null,U=null,P=null,B=null,T.set(0,0,0),L=0,M=V,Y=wt}return}Le=Le||Ae,Me=Me||me,Ye=Ye||Ie,(Ae!==w||Le!==G)&&(a.blendEquationSeparate(dt[Ae],dt[Le]),w=Ae,G=Le),(me!==D||Ie!==U||Me!==P||Ye!==B)&&(a.blendFuncSeparate(St[me],St[Ie],St[Me],St[Ye]),D=me,U=Ie,P=Me,B=Ye),(it.equals(T)===!1||tn!==L)&&(a.blendColor(it.r,it.g,it.b,tn),T.copy(it),L=tn),M=V,Y=!1}function ut(V,Ae){V.side===qi?Ge(a.CULL_FACE):Te(a.CULL_FACE);let me=V.side===jn;Ae&&(me=!me),on(me),V.blending===ks&&V.transparent===!1?Lt(Ta):Lt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ie=V.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),W(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Te(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function on(V){z!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),z=V)}function Yt(V){V!==aE?(Te(a.CULL_FACE),V!==j&&(V===Wv?a.cullFace(a.BACK):V===rE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),j=V}function Tn(V){V!==ue&&(I&&a.lineWidth(V),ue=V)}function W(V,Ae,me){V?(Te(a.POLYGON_OFFSET_FILL),(de!==Ae||X!==me)&&(de=Ae,X=me,u.getReversed()&&(Ae=-Ae),a.polygonOffset(Ae,me))):Ge(a.POLYGON_OFFSET_FILL)}function en(V){V?Te(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function pt(V){V===void 0&&(V=a.TEXTURE0+O-1),Ee!==V&&(a.activeTexture(V),Ee=V)}function Ht(V,Ae,me){me===void 0&&(Ee===null?me=a.TEXTURE0+O-1:me=Ee);let Ie=F[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[me]=Ie),(Ie.type!==V||Ie.texture!==Ae)&&(Ee!==me&&(a.activeTexture(me),Ee=me),a.bindTexture(V,Ae||ye[V]),Ie.type=V,Ie.texture=Ae)}function Ce(){const V=F[Ee];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Kt(){try{a.compressedTexImage2D(...arguments)}catch(V){Tt("WebGLState:",V)}}function N(){try{a.compressedTexImage3D(...arguments)}catch(V){Tt("WebGLState:",V)}}function b(){try{a.texSubImage2D(...arguments)}catch(V){Tt("WebGLState:",V)}}function Q(){try{a.texSubImage3D(...arguments)}catch(V){Tt("WebGLState:",V)}}function _e(){try{a.compressedTexSubImage2D(...arguments)}catch(V){Tt("WebGLState:",V)}}function be(){try{a.compressedTexSubImage3D(...arguments)}catch(V){Tt("WebGLState:",V)}}function we(){try{a.texStorage2D(...arguments)}catch(V){Tt("WebGLState:",V)}}function Oe(){try{a.texStorage3D(...arguments)}catch(V){Tt("WebGLState:",V)}}function fe(){try{a.texImage2D(...arguments)}catch(V){Tt("WebGLState:",V)}}function he(){try{a.texImage3D(...arguments)}catch(V){Tt("WebGLState:",V)}}function Pe(V){return v[V]!==void 0?v[V]:a.getParameter(V)}function Fe(V,Ae){v[V]!==Ae&&(a.pixelStorei(V,Ae),v[V]=Ae)}function Ue(V){Re.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),Re.copy(V))}function De(V){Ne.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),Ne.copy(V))}function at(V,Ae){let me=p.get(Ae);me===void 0&&(me=new WeakMap,p.set(Ae,me));let Ie=me.get(V);Ie===void 0&&(Ie=a.getUniformBlockIndex(Ae,V.name),me.set(V,Ie))}function rt(V,Ae){const Ie=p.get(Ae).get(V);m.get(Ae)!==Ie&&(a.uniformBlockBinding(Ae,Ie,V.__bindingPointIndex),m.set(Ae,Ie))}function gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Ee=null,F={},_={},y=new WeakMap,E=[],C=null,x=!1,M=null,w=null,D=null,U=null,G=null,P=null,B=null,T=new Nt(0,0,0),L=0,Y=!1,z=null,j=null,ue=null,de=null,X=null,Re.set(0,0,a.canvas.width,a.canvas.height),Ne.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Te,disable:Ge,bindFramebuffer:nt,drawBuffers:$e,useProgram:Xt,setBlending:Lt,setMaterial:ut,setFlipSided:on,setCullFace:Yt,setLineWidth:Tn,setPolygonOffset:W,setScissorTest:en,activeTexture:pt,bindTexture:Ht,unbindTexture:Ce,compressedTexImage2D:Kt,compressedTexImage3D:N,texImage2D:fe,texImage3D:he,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:at,uniformBlockBinding:rt,texStorage2D:we,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Ue,viewport:De,reset:gt}}function tC(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ke,g=new WeakMap,v=new Set;let _;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(N,b){return E?new OffscreenCanvas(N,b):Eu("canvas")}function x(N,b,Q){let _e=1;const be=Kt(N);if((be.width>Q||be.height>Q)&&(_e=Q/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(_e*be.width),Oe=Math.floor(_e*be.height);_===void 0&&(_=C(we,Oe));const fe=b?C(we,Oe):_;return fe.width=we,fe.height=Oe,fe.getContext("2d").drawImage(N,0,0,we,Oe),tt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+we+"x"+Oe+")."),fe}else return"data"in N&&tt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function M(N){return N.generateMipmaps}function w(N){a.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(N,b,Q,_e,be,we=!1){if(N!==null){if(a[N]!==void 0)return a[N];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Oe;_e&&(Oe=e.get("EXT_texture_norm16"),Oe||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=b;if(b===a.RED&&(Q===a.FLOAT&&(fe=a.R32F),Q===a.HALF_FLOAT&&(fe=a.R16F),Q===a.UNSIGNED_BYTE&&(fe=a.R8),Q===a.UNSIGNED_SHORT&&Oe&&(fe=Oe.R16_EXT),Q===a.SHORT&&Oe&&(fe=Oe.R16_SNORM_EXT)),b===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.R8UI),Q===a.UNSIGNED_SHORT&&(fe=a.R16UI),Q===a.UNSIGNED_INT&&(fe=a.R32UI),Q===a.BYTE&&(fe=a.R8I),Q===a.SHORT&&(fe=a.R16I),Q===a.INT&&(fe=a.R32I)),b===a.RG&&(Q===a.FLOAT&&(fe=a.RG32F),Q===a.HALF_FLOAT&&(fe=a.RG16F),Q===a.UNSIGNED_BYTE&&(fe=a.RG8),Q===a.UNSIGNED_SHORT&&Oe&&(fe=Oe.RG16_EXT),Q===a.SHORT&&Oe&&(fe=Oe.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RG8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RG16UI),Q===a.UNSIGNED_INT&&(fe=a.RG32UI),Q===a.BYTE&&(fe=a.RG8I),Q===a.SHORT&&(fe=a.RG16I),Q===a.INT&&(fe=a.RG32I)),b===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),Q===a.UNSIGNED_INT&&(fe=a.RGB32UI),Q===a.BYTE&&(fe=a.RGB8I),Q===a.SHORT&&(fe=a.RGB16I),Q===a.INT&&(fe=a.RGB32I)),b===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),Q===a.UNSIGNED_INT&&(fe=a.RGBA32UI),Q===a.BYTE&&(fe=a.RGBA8I),Q===a.SHORT&&(fe=a.RGBA16I),Q===a.INT&&(fe=a.RGBA32I)),b===a.RGB&&(Q===a.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGB16_EXT),Q===a.SHORT&&Oe&&(fe=Oe.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(fe=a.R11F_G11F_B10F)),b===a.RGBA){const he=we?yu:bt.getTransfer(be);Q===a.FLOAT&&(fe=a.RGBA32F),Q===a.HALF_FLOAT&&(fe=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(fe=he===It?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGBA16_EXT),Q===a.SHORT&&Oe&&(fe=Oe.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function G(N,b){let Q;return N?b===null||b===Ji||b===fl?Q=a.DEPTH24_STENCIL8:b===Yi?Q=a.DEPTH32F_STENCIL8:b===ul&&(Q=a.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===fl?Q=a.DEPTH_COMPONENT24:b===Yi?Q=a.DEPTH_COMPONENT32F:b===ul&&(Q=a.DEPTH_COMPONENT16),Q}function P(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nn&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),L(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&v.delete(b)}function T(N){const b=N.target;b.removeEventListener("dispose",T),z(b)}function L(N){const b=r.get(N);if(b.__webglInit===void 0)return;const Q=N.source,_e=y.get(Q);if(_e){const be=_e[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&Y(N),Object.keys(_e).length===0&&y.delete(Q)}r.remove(N)}function Y(N){const b=r.get(N);a.deleteTexture(b.__webglTexture);const Q=N.source,_e=y.get(Q);delete _e[b.__cacheKey],u.memory.textures--}function z(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let be=0;be<b.__webglFramebuffer[_e].length;be++)a.deleteFramebuffer(b.__webglFramebuffer[_e][be]);else a.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)a.deleteFramebuffer(b.__webglFramebuffer[_e]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=N.textures;for(let _e=0,be=Q.length;_e<be;_e++){const we=r.get(Q[_e]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(Q[_e])}r.remove(N)}let j=0;function ue(){j=0}function de(){return j}function X(N){j=N}function O(){const N=j;return N>=o.maxTextures&&tt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),j+=1,N}function I(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function le(N,b){const Q=r.get(N);if(N.isVideoTexture&&Ht(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const _e=N.image;if(_e===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Q,N,b);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+b)}function ve(N,b){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ge(Q,N,b);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+b)}function Ee(N,b){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Ge(Q,N,b);return}n.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+b)}function F(N,b){const Q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){nt(Q,N,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+b)}const J={[Bd]:a.REPEAT,[ba]:a.CLAMP_TO_EDGE,[zd]:a.MIRRORED_REPEAT},Se={[Nn]:a.NEAREST,[RE]:a.NEAREST_MIPMAP_NEAREST,[Lc]:a.NEAREST_MIPMAP_LINEAR,[Bn]:a.LINEAR,[Zh]:a.LINEAR_MIPMAP_NEAREST,[Vr]:a.LINEAR_MIPMAP_LINEAR},Re={[DE]:a.NEVER,[PE]:a.ALWAYS,[NE]:a.LESS,[Bp]:a.LEQUAL,[UE]:a.EQUAL,[zp]:a.GEQUAL,[LE]:a.GREATER,[OE]:a.NOTEQUAL};function Ne(N,b){if(b.type===Yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Zh||b.magFilter===Lc||b.magFilter===Vr||b.minFilter===Bn||b.minFilter===Zh||b.minFilter===Lc||b.minFilter===Vr)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,J[b.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,J[b.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,J[b.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Se[b.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,Re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Lc&&b.minFilter!==Vr||b.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function se(N,b){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const _e=b.source;let be=y.get(_e);be===void 0&&(be={},y.set(_e,be));const we=I(b);if(we!==N.__cacheKey){be[we]===void 0&&(be[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),be[we].usedTimes++;const Oe=be[N.__cacheKey];Oe!==void 0&&(be[N.__cacheKey].usedTimes--,Oe.usedTimes===0&&Y(b)),N.__cacheKey=we,N.__webglTexture=be[we].texture}return Q}function ye(N,b,Q){return Math.floor(Math.floor(N/Q)/b)}function Te(N,b,Q,_e){const we=N.updateRanges;if(we.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,Q,_e,b.data);else{we.sort((Fe,Ue)=>Fe.start-Ue.start);let Oe=0;for(let Fe=1;Fe<we.length;Fe++){const Ue=we[Oe],De=we[Fe],at=Ue.start+Ue.count,rt=ye(De.start,b.width,4),gt=ye(Ue.start,b.width,4);De.start<=at+1&&rt===gt&&ye(De.start+De.count-1,b.width,4)===rt?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Oe,we[Oe]=De)}we.length=Oe+1;const fe=n.getParameter(a.UNPACK_ROW_LENGTH),he=n.getParameter(a.UNPACK_SKIP_PIXELS),Pe=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Ue=we.length;Fe<Ue;Fe++){const De=we[Fe],at=Math.floor(De.start/4),rt=Math.ceil(De.count/4),gt=at%b.width,V=Math.floor(at/b.width),Ae=rt,me=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,gt),n.pixelStorei(a.UNPACK_SKIP_ROWS,V),n.texSubImage2D(a.TEXTURE_2D,0,gt,V,Ae,me,Q,_e,b.data)}N.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,fe),n.pixelStorei(a.UNPACK_SKIP_PIXELS,he),n.pixelStorei(a.UNPACK_SKIP_ROWS,Pe)}}function Ge(N,b,Q){let _e=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=a.TEXTURE_3D);const be=se(N,b),we=b.source;n.bindTexture(_e,N.__webglTexture,a.TEXTURE0+Q);const Oe=r.get(we);if(we.version!==Oe.__version||be===!0){if(n.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=bt.getPrimaries(bt.workingColorSpace),Ie=b.colorSpace===dr?null:bt.getPrimaries(b.colorSpace),Le=b.colorSpace===dr||me===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}n.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let he=x(b.image,!1,o.maxTextureSize);he=Ce(b,he);const Pe=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ue=U(b.internalFormat,Pe,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Ne(_e,b);let De;const at=b.mipmaps,rt=b.isVideoTexture!==!0,gt=Oe.__version===void 0||be===!0,V=we.dataReady,Ae=P(b,he);if(b.isDepthTexture)Ue=G(b.format===kr,b.type),gt&&(rt?n.texStorage2D(a.TEXTURE_2D,1,Ue,he.width,he.height):n.texImage2D(a.TEXTURE_2D,0,Ue,he.width,he.height,0,Pe,Fe,null));else if(b.isDataTexture)if(at.length>0){rt&&gt&&n.texStorage2D(a.TEXTURE_2D,Ae,Ue,at[0].width,at[0].height);for(let me=0,Ie=at.length;me<Ie;me++)De=at[me],rt?V&&n.texSubImage2D(a.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Fe,De.data):n.texImage2D(a.TEXTURE_2D,me,Ue,De.width,De.height,0,Pe,Fe,De.data);b.generateMipmaps=!1}else rt?(gt&&n.texStorage2D(a.TEXTURE_2D,Ae,Ue,he.width,he.height),V&&Te(b,he,Pe,Fe)):n.texImage2D(a.TEXTURE_2D,0,Ue,he.width,he.height,0,Pe,Fe,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&gt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ue,at[0].width,at[0].height,he.depth);for(let me=0,Ie=at.length;me<Ie;me++)if(De=at[me],b.format!==Fi)if(Pe!==null)if(rt){if(V)if(b.layerUpdates.size>0){const Le=D_(De.width,De.height,b.format,b.type);for(const Me of b.layerUpdates){const Ye=De.data.subarray(Me*Le/De.data.BYTES_PER_ELEMENT,(Me+1)*Le/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,Me,De.width,De.height,1,Pe,Ye)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,he.depth,Pe,De.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,me,Ue,De.width,De.height,he.depth,0,De.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,he.depth,Pe,Fe,De.data):n.texImage3D(a.TEXTURE_2D_ARRAY,me,Ue,De.width,De.height,he.depth,0,Pe,Fe,De.data)}else{rt&&gt&&n.texStorage2D(a.TEXTURE_2D,Ae,Ue,at[0].width,at[0].height);for(let me=0,Ie=at.length;me<Ie;me++)De=at[me],b.format!==Fi?Pe!==null?rt?V&&n.compressedTexSubImage2D(a.TEXTURE_2D,me,0,0,De.width,De.height,Pe,De.data):n.compressedTexImage2D(a.TEXTURE_2D,me,Ue,De.width,De.height,0,De.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&n.texSubImage2D(a.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Fe,De.data):n.texImage2D(a.TEXTURE_2D,me,Ue,De.width,De.height,0,Pe,Fe,De.data)}else if(b.isDataArrayTexture)if(rt){if(gt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ue,he.width,he.height,he.depth),V)if(b.layerUpdates.size>0){const me=D_(he.width,he.height,b.format,b.type);for(const Ie of b.layerUpdates){const Le=he.data.subarray(Ie*me/he.data.BYTES_PER_ELEMENT,(Ie+1)*me/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,he.width,he.height,1,Pe,Fe,Le)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,Fe,he.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Pe,Fe,he.data);else if(b.isData3DTexture)rt?(gt&&n.texStorage3D(a.TEXTURE_3D,Ae,Ue,he.width,he.height,he.depth),V&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,Fe,he.data)):n.texImage3D(a.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Pe,Fe,he.data);else if(b.isFramebufferTexture){if(gt)if(rt)n.texStorage2D(a.TEXTURE_2D,Ae,Ue,he.width,he.height);else{let me=he.width,Ie=he.height;for(let Le=0;Le<Ae;Le++)n.texImage2D(a.TEXTURE_2D,Le,Ue,me,Ie,0,Pe,Fe,null),me>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const me=a.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),v.add(b),me.onpaint=it=>{const tn=it.changedElements;for(const wt of v)tn.includes(wt.image)&&(wt.needsUpdate=!0)},me.requestPaint();return}const Ie=0,Le=a.RGBA,Me=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ie,Le,Me,Ye,he),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(at.length>0){if(rt&&gt){const me=Kt(at[0]);n.texStorage2D(a.TEXTURE_2D,Ae,Ue,me.width,me.height)}for(let me=0,Ie=at.length;me<Ie;me++)De=at[me],rt?V&&n.texSubImage2D(a.TEXTURE_2D,me,0,0,Pe,Fe,De):n.texImage2D(a.TEXTURE_2D,me,Ue,Pe,Fe,De);b.generateMipmaps=!1}else if(rt){if(gt){const me=Kt(he);n.texStorage2D(a.TEXTURE_2D,Ae,Ue,me.width,me.height)}V&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Pe,Fe,he)}else n.texImage2D(a.TEXTURE_2D,0,Ue,Pe,Fe,he);M(b)&&w(_e),Oe.__version=we.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function nt(N,b,Q){if(b.image.length!==6)return;const _e=se(N,b),be=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+Q);const we=r.get(be);if(be.version!==we.__version||_e===!0){n.activeTexture(a.TEXTURE0+Q);const Oe=bt.getPrimaries(bt.workingColorSpace),fe=b.colorSpace===dr?null:bt.getPrimaries(b.colorSpace),he=b.colorSpace===dr||Oe===fe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Pe&&!Fe?Ue[Me]=x(b.image[Me],!0,o.maxCubemapSize):Ue[Me]=Fe?b.image[Me].image:b.image[Me],Ue[Me]=Ce(b,Ue[Me]);const De=Ue[0],at=c.convert(b.format,b.colorSpace),rt=c.convert(b.type),gt=U(b.internalFormat,at,rt,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,Ae=we.__version===void 0||_e===!0,me=be.dataReady;let Ie=P(b,De);Ne(a.TEXTURE_CUBE_MAP,b);let Le;if(Pe){V&&Ae&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,gt,De.width,De.height);for(let Me=0;Me<6;Me++){Le=Ue[Me].mipmaps;for(let Ye=0;Ye<Le.length;Ye++){const it=Le[Ye];b.format!==Fi?at!==null?V?me&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,it.width,it.height,at,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,gt,it.width,it.height,0,it.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,it.width,it.height,at,rt,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,gt,it.width,it.height,0,at,rt,it.data)}}}else{if(Le=b.mipmaps,V&&Ae){Le.length>0&&Ie++;const Me=Kt(Ue[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,gt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Fe){V?me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,at,rt,Ue[Me].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,Ue[Me].width,Ue[Me].height,0,at,rt,Ue[Me].data);for(let Ye=0;Ye<Le.length;Ye++){const tn=Le[Ye].image[Me].image;V?me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,tn.width,tn.height,at,rt,tn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,gt,tn.width,tn.height,0,at,rt,tn.data)}}else{V?me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,at,rt,Ue[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,at,rt,Ue[Me]);for(let Ye=0;Ye<Le.length;Ye++){const it=Le[Ye];V?me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,at,rt,it.image[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,gt,at,rt,it.image[Me])}}}M(b)&&w(a.TEXTURE_CUBE_MAP),we.__version=be.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function $e(N,b,Q,_e,be,we){const Oe=c.convert(Q.format,Q.colorSpace),fe=c.convert(Q.type),he=U(Q.internalFormat,Oe,fe,Q.normalized,Q.colorSpace),Pe=r.get(b),Fe=r.get(Q);if(Fe.__renderTarget=b,!Pe.__hasExternalTextures){const Ue=Math.max(1,b.width>>we),De=Math.max(1,b.height>>we);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?n.texImage3D(be,we,he,Ue,De,b.depth,0,Oe,fe,null):n.texImage2D(be,we,he,Ue,De,0,Oe,fe,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,be,Fe.__webglTexture,0,en(b)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,be,Fe.__webglTexture,we),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Xt(N,b,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,N),b.depthBuffer){const _e=b.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,we=G(b.stencilBuffer,be),Oe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;pt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,en(b),we,b.width,b.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,en(b),we,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,we,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,N)}else{const _e=b.textures;for(let be=0;be<_e.length;be++){const we=_e[be],Oe=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),he=U(we.internalFormat,Oe,fe,we.normalized,we.colorSpace);pt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,en(b),he,b.width,b.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,en(b),he,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,he,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function dt(N,b,Q){const _e=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),be.__webglTexture===void 0){be.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let Ue;b.depthTexture.format===wa?Ue=a.DEPTH_COMPONENT24:b.depthTexture.format===kr&&(Ue=a.DEPTH24_STENCIL8);for(let De=0;De<6;De++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,b.width,b.height,0,Pe,Fe,null)}}else le(b.depthTexture,0);const we=be.__webglTexture,Oe=en(b),fe=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,he=b.depthTexture.format===kr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===wa)pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,fe,we,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,he,fe,we,0);else if(b.depthTexture.format===kr)pt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,fe,we,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,he,fe,we,0);else throw new Error("Unknown depthTexture format")}function St(N){const b=r.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=_e}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let _e=0;_e<6;_e++)dt(b.__webglFramebuffer[_e],N,_e);else{const _e=N.texture.mipmaps;_e&&_e.length>0?dt(b.__webglFramebuffer[0],N,0):dt(b.__webglFramebuffer,N,0)}else if(Q){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=a.createRenderbuffer(),Xt(b.__webglDepthbuffer[_e],N,!1);else{const be=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,we)}}else{const _e=N.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Xt(b.__webglDepthbuffer,N,!1);else{const be=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,we)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Lt(N,b,Q){const _e=r.get(N);b!==void 0&&$e(_e.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&St(N)}function ut(N){const b=N.texture,Q=r.get(N),_e=r.get(b);N.addEventListener("dispose",T);const be=N.textures,we=N.isWebGLCubeRenderTarget===!0,Oe=be.length>1;if(Oe||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=b.version,u.memory.textures++),we){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let he=0;he<b.mipmaps.length;he++)Q.__webglFramebuffer[fe][he]=a.createFramebuffer()}else Q.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let fe=0,he=be.length;fe<he;fe++){const Pe=r.get(be[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=a.createTexture(),u.memory.textures++)}if(N.samples>0&&pt(N)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<be.length;fe++){const he=be[fe];Q.__webglColorRenderbuffer[fe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const Pe=c.convert(he.format,he.colorSpace),Fe=c.convert(he.type),Ue=U(he.internalFormat,Pe,Fe,he.normalized,he.colorSpace,N.isXRRenderTarget===!0),De=en(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,De,Ue,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Xt(Q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){n.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)$e(Q.__webglFramebuffer[fe][he],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else $e(Q.__webglFramebuffer[fe],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);M(b)&&w(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let fe=0,he=be.length;fe<he;fe++){const Pe=be[fe],Fe=r.get(Pe);let Ue=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ue=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ue,Fe.__webglTexture),Ne(Ue,Pe),$e(Q.__webglFramebuffer,N,Pe,a.COLOR_ATTACHMENT0+fe,Ue,0),M(Pe)&&w(Ue)}n.unbindTexture()}else{let fe=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(fe,_e.__webglTexture),Ne(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)$e(Q.__webglFramebuffer[he],N,b,a.COLOR_ATTACHMENT0,fe,he);else $e(Q.__webglFramebuffer,N,b,a.COLOR_ATTACHMENT0,fe,0);M(b)&&w(fe),n.unbindTexture()}N.depthBuffer&&St(N)}function on(N){const b=N.textures;for(let Q=0,_e=b.length;Q<_e;Q++){const be=b[Q];if(M(be)){const we=D(N),Oe=r.get(be).__webglTexture;n.bindTexture(we,Oe),w(we),n.unbindTexture()}}}const Yt=[],Tn=[];function W(N){if(N.samples>0){if(pt(N)===!1){const b=N.textures,Q=N.width,_e=N.height;let be=a.COLOR_BUFFER_BIT;const we=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(N),fe=b.length>1;if(fe)for(let Pe=0;Pe<b.length;Pe++)n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const he=N.texture.mipmaps;he&&he.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),fe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=r.get(b[Pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Fe,0)}a.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,be,a.NEAREST),m===!0&&(Yt.length=0,Tn.length=0,Yt.push(a.COLOR_ATTACHMENT0+Pe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Yt.push(we),Tn.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Tn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<b.length;Pe++){n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Fe=r.get(b[Pe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.TEXTURE_2D,Fe,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function en(N){return Math.min(o.maxSamples,N.samples)}function pt(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(N){const b=u.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Ce(N,b){const Q=N.colorSpace,_e=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==Su&&Q!==dr&&(bt.getTransfer(Q)===It?(_e!==Fi||be!==Si)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Q)),b}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=X,this.setTexture2D=le,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=F,this.rebindTextures=Lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nC(a,e){function n(r,o=dr){let c;const u=bt.getTransfer(o);if(r===Si)return a.UNSIGNED_BYTE;if(r===Up)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Lp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Ux)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Lx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dx)return a.BYTE;if(r===Nx)return a.SHORT;if(r===ul)return a.UNSIGNED_SHORT;if(r===Np)return a.INT;if(r===Ji)return a.UNSIGNED_INT;if(r===Yi)return a.FLOAT;if(r===Ca)return a.HALF_FLOAT;if(r===Ox)return a.ALPHA;if(r===Px)return a.RGB;if(r===Fi)return a.RGBA;if(r===wa)return a.DEPTH_COMPONENT;if(r===kr)return a.DEPTH_STENCIL;if(r===Fx)return a.RED;if(r===Op)return a.RED_INTEGER;if(r===Wr)return a.RG;if(r===Pp)return a.RG_INTEGER;if(r===Fp)return a.RGBA_INTEGER;if(r===uu||r===fu||r===hu||r===du)if(u===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Hd||r===Gd||r===Vd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===_u||r===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===kd||r===Xd)return u===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===qd)return c.COMPRESSED_R11_EAC;if(r===Yd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===_u)return c.COMPRESSED_RG11_EAC;if(r===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===ep||r===tp||r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Zd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$d)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ep)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tp)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===np)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ip)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ap)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rp)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sp)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===op)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lp)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cp||r===up||r===fp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===cp)return u===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===up)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hp||r===dp||r===xu||r===pp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===dp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Yx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ei({vertexShader:iC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends jr{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,v=null,_=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",x=new rC,M={},w=n.getContextAttributes();let D=null,U=null;const G=[],P=[],B=new Ke;let T=null;const L=new Oi;L.viewport=new sn;const Y=new Oi;Y.viewport=new sn;const z=[L,Y],j=new mT;let ue=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=G[se];return ye===void 0&&(ye=new td,G[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=G[se];return ye===void 0&&(ye=new td,G[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=G[se];return ye===void 0&&(ye=new td,G[se]=ye),ye.getHandSpace()};function X(se){const ye=P.indexOf(se.inputSource);if(ye===-1)return;const Te=G[ye];Te!==void 0&&(Te.update(se.inputSource,se.frame,p||u),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function O(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",I);for(let se=0;se<G.length;se++){const ye=P[se];ye!==null&&(P[se]=null,G[se].disconnect(ye))}ue=null,de=null,x.reset();for(const se in M)delete M[se];e.setRenderTarget(D),y=null,_=null,v=null,o=null,U=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",O),o.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,nt=null;w.depth&&(nt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=w.stencil?kr:wa,Ge=w.stencil?fl:Ji);const $e={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer($e),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new Ki(_.textureWidth,_.textureHeight,{format:Fi,type:Si,depthTexture:new Ys(_.textureWidth,_.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ki(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(se){for(let ye=0;ye<se.removed.length;ye++){const Te=se.removed[ye],Ge=P.indexOf(Te);Ge>=0&&(P[Ge]=null,G[Ge].disconnect(Te))}for(let ye=0;ye<se.added.length;ye++){const Te=se.added[ye];let Ge=P.indexOf(Te);if(Ge===-1){for(let $e=0;$e<G.length;$e++)if($e>=P.length){P.push(Te),Ge=$e;break}else if(P[$e]===null){P[$e]=Te,Ge=$e;break}if(Ge===-1)break}const nt=G[Ge];nt&&nt.connect(Te)}}const le=new K,ve=new K;function Ee(se,ye,Te){le.setFromMatrixPosition(ye.matrixWorld),ve.setFromMatrixPosition(Te.matrixWorld);const Ge=le.distanceTo(ve),nt=ye.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Xt=nt[14]/(nt[10]-1),dt=nt[14]/(nt[10]+1),St=(nt[9]+1)/nt[5],Lt=(nt[9]-1)/nt[5],ut=(nt[8]-1)/nt[0],on=($e[8]+1)/$e[0],Yt=Xt*ut,Tn=Xt*on,W=Ge/(-ut+on),en=W*-ut;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(en),se.translateZ(W),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),nt[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const pt=Xt+W,Ht=dt+W,Ce=Yt-en,Kt=Tn+(Ge-en),N=St*dt/Ht*pt,b=Lt*dt/Ht*pt;se.projectionMatrix.makePerspective(Ce,Kt,N,b,pt,Ht),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ye=se.near,Te=se.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),j.near=Y.near=L.near=ye,j.far=Y.far=L.far=Te,(ue!==j.near||de!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ue=j.near,de=j.far),j.layers.mask=se.layers.mask|6,L.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Ge=se.parent,nt=j.cameras;F(j,Ge);for(let $e=0;$e<nt.length;$e++)F(nt[$e],Ge);nt.length===2?Ee(j,L,Y):j.projectionMatrix.copy(L.projectionMatrix),J(se,j,Ge)};function J(se,ye,Te){Te===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Te.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(se){m=se,_!==null&&(_.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(se){return M[se]};let Se=null;function Re(se,ye){if(g=ye.getViewerPose(p||u),E=ye,g!==null){const Te=g.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Ge=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let dt=0;dt<Te.length;dt++){const St=Te[dt];let Lt=null;if(y!==null)Lt=y.getViewport(St);else{const on=v.getViewSubImage(_,St);Lt=on.viewport,dt===0&&(e.setRenderTargetTextures(U,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(U))}let ut=z[dt];ut===void 0&&(ut=new Oi,ut.layers.enable(dt),ut.viewport=new sn,z[dt]=ut),ut.matrix.fromArray(St.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(St.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&(j.matrix.copy(ut.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(ut)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const dt=v.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&x.init(dt,o.renderState)}if(nt&&nt.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Te.length;dt++){const St=Te[dt].camera;if(St){let Lt=M[St];Lt||(Lt=new Yx,M[St]=Lt);const ut=v.getCameraImage(St);Lt.sourceTexture=ut}}}}for(let Te=0;Te<G.length;Te++){const Ge=P[Te],nt=G[Te];Ge!==null&&nt!==void 0&&nt.update(Ge,ye,p||u)}Se&&Se(se,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ne=new rS;Ne.setAnimationLoop(Re),this.setAnimationLoop=function(se){Se=se},this.dispose=function(){}}}const oC=new fn,hS=new ot;hS.set(-1,0,0,0,1,0,0,0,1);function lC(a,e){function n(x,M){x.matrixAutoUpdate===!0&&x.updateMatrix(),M.value.copy(x.matrix)}function r(x,M){M.color.getRGB(x.fogColor.value,iS(a)),M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function o(x,M,w,D,U){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(x,M):M.isMeshLambertMaterial?(c(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(x,M),v(x,M)):M.isMeshPhongMaterial?(c(x,M),g(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(x,M),_(x,M),M.isMeshPhysicalMaterial&&y(x,M,U)):M.isMeshMatcapMaterial?(c(x,M),E(x,M)):M.isMeshDepthMaterial?c(x,M):M.isMeshDistanceMaterial?(c(x,M),C(x,M)):M.isMeshNormalMaterial?c(x,M):M.isLineBasicMaterial?(u(x,M),M.isLineDashedMaterial&&d(x,M)):M.isPointsMaterial?m(x,M,w,D):M.isSpriteMaterial?p(x,M):M.isShadowMaterial?(x.color.value.copy(M.color),x.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(x,M){x.opacity.value=M.opacity,M.color&&x.diffuse.value.copy(M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map,n(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,n(M.alphaMap,x.alphaMapTransform)),M.bumpMap&&(x.bumpMap.value=M.bumpMap,n(M.bumpMap,x.bumpMapTransform),x.bumpScale.value=M.bumpScale,M.side===jn&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,n(M.normalMap,x.normalMapTransform),x.normalScale.value.copy(M.normalScale),M.side===jn&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,n(M.displacementMap,x.displacementMapTransform),x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap,n(M.emissiveMap,x.emissiveMapTransform)),M.specularMap&&(x.specularMap.value=M.specularMap,n(M.specularMap,x.specularMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest);const w=e.get(M),D=w.envMap,U=w.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(U)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(hS),x.reflectivity.value=M.reflectivity,x.ior.value=M.ior,x.refractionRatio.value=M.refractionRatio),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity,n(M.lightMap,x.lightMapTransform)),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity,n(M.aoMap,x.aoMapTransform))}function u(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,n(M.map,x.mapTransform))}function d(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function m(x,M,w,D){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.size.value=M.size*w,x.scale.value=D*.5,M.map&&(x.map.value=M.map,n(M.map,x.uvTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,n(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function p(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.rotation.value=M.rotation,M.map&&(x.map.value=M.map,n(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,n(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function g(x,M){x.specular.value.copy(M.specular),x.shininess.value=Math.max(M.shininess,1e-4)}function v(x,M){M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function _(x,M){x.metalness.value=M.metalness,M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap,n(M.metalnessMap,x.metalnessMapTransform)),x.roughness.value=M.roughness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap,n(M.roughnessMap,x.roughnessMapTransform)),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function y(x,M,w){x.ior.value=M.ior,M.sheen>0&&(x.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),x.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(x.sheenColorMap.value=M.sheenColorMap,n(M.sheenColorMap,x.sheenColorMapTransform)),M.sheenRoughnessMap&&(x.sheenRoughnessMap.value=M.sheenRoughnessMap,n(M.sheenRoughnessMap,x.sheenRoughnessMapTransform))),M.clearcoat>0&&(x.clearcoat.value=M.clearcoat,x.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(x.clearcoatMap.value=M.clearcoatMap,n(M.clearcoatMap,x.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,n(M.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(x.clearcoatNormalMap.value=M.clearcoatNormalMap,n(M.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===jn&&x.clearcoatNormalScale.value.negate())),M.dispersion>0&&(x.dispersion.value=M.dispersion),M.iridescence>0&&(x.iridescence.value=M.iridescence,x.iridescenceIOR.value=M.iridescenceIOR,x.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(x.iridescenceMap.value=M.iridescenceMap,n(M.iridescenceMap,x.iridescenceMapTransform)),M.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=M.iridescenceThicknessMap,n(M.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),M.transmission>0&&(x.transmission.value=M.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(x.transmissionMap.value=M.transmissionMap,n(M.transmissionMap,x.transmissionMapTransform)),x.thickness.value=M.thickness,M.thicknessMap&&(x.thicknessMap.value=M.thicknessMap,n(M.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=M.attenuationDistance,x.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(x.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(x.anisotropyMap.value=M.anisotropyMap,n(M.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=M.specularIntensity,x.specularColor.value.copy(M.specularColor),M.specularColorMap&&(x.specularColorMap.value=M.specularColorMap,n(M.specularColorMap,x.specularColorMapTransform)),M.specularIntensityMap&&(x.specularIntensityMap.value=M.specularIntensityMap,n(M.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,M){M.matcap&&(x.matcap.value=M.matcap)}function C(x,M){const w=e.get(M).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function cC(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const U=D.program;r.uniformBlockBinding(w,U)}function p(w,D){let U=o[w.id];U===void 0&&(E(w),U=g(w),o[w.id]=U,w.addEventListener("dispose",x));const G=D.program;r.updateUBOMapping(w,G);const P=e.render.frame;c[w.id]!==P&&(_(w),c[w.id]=P)}function g(w){const D=v();w.__bindingPointIndex=D;const U=a.createBuffer(),G=w.__size,P=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,G,P),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,U),U}function v(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const D=o[w.id],U=w.uniforms,G=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let P=0,B=U.length;P<B;P++){const T=Array.isArray(U[P])?U[P]:[U[P]];for(let L=0,Y=T.length;L<Y;L++){const z=T[L];if(y(z,P,L,G)===!0){const j=z.__offset,ue=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let X=0;X<ue.length;X++){const O=ue[X],I=C(O);typeof O=="number"||typeof O=="boolean"?(z.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,j+de,z.__data)):O.isMatrix3?(z.__data[0]=O.elements[0],z.__data[1]=O.elements[1],z.__data[2]=O.elements[2],z.__data[3]=0,z.__data[4]=O.elements[3],z.__data[5]=O.elements[4],z.__data[6]=O.elements[5],z.__data[7]=0,z.__data[8]=O.elements[6],z.__data[9]=O.elements[7],z.__data[10]=O.elements[8],z.__data[11]=0):ArrayBuffer.isView(O)?z.__data.set(new O.constructor(O.buffer,O.byteOffset,z.__data.length)):(O.toArray(z.__data,de),de+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,j,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(w,D,U,G){const P=w.value,B=D+"_"+U;if(G[B]===void 0)return typeof P=="number"||typeof P=="boolean"?G[B]=P:ArrayBuffer.isView(P)?G[B]=P.slice():G[B]=P.clone(),!0;{const T=G[B];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return G[B]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(T.equals(P)===!1)return T.copy(P),!0}}return!1}function E(w){const D=w.uniforms;let U=0;const G=16;for(let B=0,T=D.length;B<T;B++){const L=Array.isArray(D[B])?D[B]:[D[B]];for(let Y=0,z=L.length;Y<z;Y++){const j=L[Y],ue=Array.isArray(j.value)?j.value:[j.value];for(let de=0,X=ue.length;de<X;de++){const O=ue[de],I=C(O),le=U%G,ve=le%I.boundary,Ee=le+ve;U+=ve,Ee!==0&&G-Ee<I.storage&&(U+=G-Ee),j.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=I.storage}}}const P=U%G;return P>0&&(U+=G-P),w.__size=U,w.__cache={},this}function C(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(D.boundary=16,D.storage=w.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",w),D}function x(w){const D=w.target;D.removeEventListener("dispose",x);const U=u.indexOf(D.__bindingPointIndex);u.splice(U,1),a.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function M(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:p,dispose:M}}const uC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function fC(){return Xi===null&&(Xi=new Mb(uC,16,16,Wr,Ca),Xi.name="DFG_LUT",Xi.minFilter=Bn,Xi.magFilter=Bn,Xi.wrapS=ba,Xi.wrapT=ba,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class hC{constructor(e={}){const{canvas:n=BE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Si}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=y,x=new Set([Fp,Pp,Op]),M=new Set([Si,Ji,ul,fl,Up,Lp]),w=new Uint32Array(4),D=new Int32Array(4),U=new K;let G=null,P=null;const B=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let z=!1,j=null;this._outputColorSpace=ci;let ue=0,de=0,X=null,O=-1,I=null;const le=new sn,ve=new sn;let Ee=null;const F=new Nt(0);let J=0,Se=n.width,Re=n.height,Ne=1,se=null,ye=null;const Te=new sn(0,0,Se,Re),Ge=new sn(0,0,Se,Re);let nt=!1;const $e=new Wx;let Xt=!1,dt=!1;const St=new fn,Lt=new K,ut=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Tn(){return X===null?Ne:1}let W=r;function en(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dp}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ye,!1),n.addEventListener("webglcontextcreationerror",it,!1),W===null){const q="webgl2";if(W=en(q,A),W===null)throw en(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let pt,Ht,Ce,Kt,N,b,Q,_e,be,we,Oe,fe,he,Pe,Fe,Ue,De,at,rt,gt,V,Ae,me;function Ie(){pt=new fR(W),pt.init(),V=new nC(W,pt),Ht=new iR(W,pt,e,V),Ce=new eC(W,pt),Ht.reversedDepthBuffer&&_&&Ce.buffers.depth.setReversed(!0),Kt=new pR(W),N=new H3,b=new tC(W,pt,Ce,N,Ht,V,Kt),Q=new uR(Y),_e=new _T(W),Ae=new tR(W,_e),be=new hR(W,_e,Kt,Ae),we=new gR(W,be,_e,Ae,Kt),at=new mR(W,Ht,b),Fe=new aR(N),Oe=new I3(Y,Q,pt,Ht,Ae,Fe),fe=new lC(Y,N),he=new V3,Pe=new j3(pt),De=new eR(Y,Q,Ce,we,E,m),Ue=new $3(Y,we,Ht),me=new cC(W,Kt,Ht,Ce),rt=new nR(W,pt,Kt),gt=new dR(W,pt,Kt),Kt.programs=Oe.programs,Y.capabilities=Ht,Y.extensions=pt,Y.properties=N,Y.renderLists=he,Y.shadowMap=Ue,Y.state=Ce,Y.info=Kt}Ie(),C!==Si&&(L=new _R(C,n.width,n.height,o,c));const Le=new sC(Y,W);this.xr=Le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(Se,Re,!1))},this.getSize=function(A){return A.set(Se,Re)},this.setSize=function(A,q,ie=!0){if(Le.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Re=q,n.width=Math.floor(A*Ne),n.height=Math.floor(q*Ne),ie===!0&&(n.style.width=A+"px",n.style.height=q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Se*Ne,Re*Ne).floor()},this.setDrawingBufferSize=function(A,q,ie){Se=A,Re=q,Ne=ie,n.width=Math.floor(A*ie),n.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===Si){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(le)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,q,ie,te){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,q,ie,te),Ce.viewport(le.copy(Te).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,q,ie,te){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,q,ie,te),Ce.scissor(ve.copy(Ge).multiplyScalar(Ne).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){Ce.setScissorTest(nt=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ie=!0){let te=0;if(A){let ne=!1;if(X!==null){const ze=X.texture.format;ne=x.has(ze)}if(ne){const ze=X.texture.type,ke=M.has(ze),Be=De.getClearColor(),We=De.getClearAlpha(),Xe=Be.r,Qe=Be.g,lt=Be.b;ke?(w[0]=Xe,w[1]=Qe,w[2]=lt,w[3]=We,W.clearBufferuiv(W.COLOR,0,w)):(D[0]=Xe,D[1]=Qe,D[2]=lt,D[3]=We,W.clearBufferiv(W.COLOR,0,D))}else te|=W.COLOR_BUFFER_BIT}q&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ye,!1),n.removeEventListener("webglcontextcreationerror",it,!1),De.dispose(),he.dispose(),Pe.dispose(),N.dispose(),Q.dispose(),we.dispose(),Ae.dispose(),me.dispose(),Oe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",eo),Le.removeEventListener("sessionend",to),Un.stop()};function Me(A){A.preventDefault(),e_("WebGLRenderer: Context Lost."),z=!0}function Ye(){e_("WebGLRenderer: Context Restored."),z=!1;const A=Kt.autoReset,q=Ue.enabled,ie=Ue.autoUpdate,te=Ue.needsUpdate,ne=Ue.type;Ie(),Kt.autoReset=A,Ue.enabled=q,Ue.autoUpdate=ie,Ue.needsUpdate=te,Ue.type=ne}function it(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const q=A.target;q.removeEventListener("dispose",tn),wt(q)}function wt(A){ui(A),N.remove(A)}function ui(A){const q=N.get(A).programs;q!==void 0&&(q.forEach(function(ie){Oe.releaseProgram(ie)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,te,ne,ze){q===null&&(q=on);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=Oa(A,q,ie,te,ne);Ce.setMaterial(te,ke);let We=ie.index,Xe=1;if(te.wireframe===!0){if(We=be.getWireframeAttribute(ie),We===void 0)return;Xe=2}const Qe=ie.drawRange,lt=ie.attributes.position;let Ze=Qe.start*Xe,At=(Qe.start+Qe.count)*Xe;ze!==null&&(Ze=Math.max(Ze,ze.start*Xe),At=Math.min(At,(ze.start+ze.count)*Xe)),We!==null?(Ze=Math.max(Ze,0),At=Math.min(At,We.count)):lt!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,lt.count));const Qt=At-Ze;if(Qt<0||Qt===1/0)return;Ae.setup(ne,te,Be,ie,We);let Wt,Ot=rt;if(We!==null&&(Wt=_e.get(We),Ot=gt,Ot.setIndex(Wt)),ne.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*Tn()),Ot.setMode(W.LINES)):Ot.setMode(W.TRIANGLES);else if(ne.isLine){let Pt=te.linewidth;Pt===void 0&&(Pt=1),Ce.setLineWidth(Pt*Tn()),ne.isLineSegments?Ot.setMode(W.LINES):ne.isLineLoop?Ot.setMode(W.LINE_LOOP):Ot.setMode(W.LINE_STRIP)}else ne.isPoints?Ot.setMode(W.POINTS):ne.isSprite&&Ot.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Pt=ne._multiDrawStarts,Ve=ne._multiDrawCounts,Ln=ne._multiDrawCount,vt=We?_e.get(We).bytesPerElement:1,_n=N.get(te).currentProgram.getUniforms();for(let Jn=0;Jn<Ln;Jn++)_n.setValue(W,"_gl_DrawID",Jn),Ot.render(Pt[Jn]/vt,Ve[Jn])}else if(ne.isInstancedMesh)Ot.renderInstances(Ze,Qt,ne.count);else if(ie.isInstancedBufferGeometry){const Pt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ve=Math.min(ie.instanceCount,Pt);Ot.renderInstances(Ze,Qt,Ve)}else Ot.render(Ze,Qt)};function Qn(A,q,ie){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Kr(A,q,ie),A.side=mr,A.needsUpdate=!0,Kr(A,q,ie),A.side=qi):Kr(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),P=Pe.get(ie),P.init(q),T.push(P),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),A!==ie&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const ze=ne.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Be=ze[ke];Qn(Be,ie,ne),te.add(Be)}else Qn(ze,ie,ne),te.add(ze)}),P=T.pop(),te},this.compileAsync=function(A,q,ie=null){const te=this.compile(A,q,ie);return new Promise(ne=>{function ze(){if(te.forEach(function(ke){N.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){ne(A);return}setTimeout(ze,10)}pt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let gr=null;function $s(A){gr&&gr(A)}function eo(){Un.stop()}function to(){Un.start()}const Un=new rS;Un.setAnimationLoop($s),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){gr=A,Le.setAnimationLoop(A),A===null?Un.stop():Un.start()},Le.addEventListener("sessionstart",eo),Le.addEventListener("sessionend",to),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;j!==null&&j.renderStart(A,q);const ie=Le.enabled===!0&&Le.isPresenting===!0,te=L!==null&&(X===null||ie)&&L.begin(Y,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(q),q=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,q,X),P=Pe.get(A,T.length),P.init(q),P.state.textureUnits=b.getTextureUnits(),T.push(P),St.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$e.setFromProjectionMatrix(St,ji,q.reversedDepth),dt=this.localClippingEnabled,Xt=Fe.init(this.clippingPlanes,dt),G=he.get(A,B.length),G.init(),B.push(G),Le.enabled===!0&&Le.isPresenting===!0){const ke=Y.xr.getDepthSensingMesh();ke!==null&&ln(ke,q,-1/0,Y.sortObjects)}ln(A,q,0,Y.sortObjects),G.finish(),Y.sortObjects===!0&&G.sort(se,ye),Yt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Yt&&De.addToRenderList(G,A),this.info.render.frame++,Xt===!0&&Fe.beginShadows();const ne=P.state.shadowsArray;if(Ue.render(ne,A,q),Xt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&L.hasRenderPass())===!1){const ke=G.opaque,Be=G.transmissive;if(P.setupLights(),q.isArrayCamera){const We=q.cameras;if(Be.length>0)for(let Xe=0,Qe=We.length;Xe<Qe;Xe++){const lt=We[Xe];ta(ke,Be,A,lt)}Yt&&De.render(A);for(let Xe=0,Qe=We.length;Xe<Qe;Xe++){const lt=We[Xe];An(G,A,lt,lt.viewport)}}else Be.length>0&&ta(ke,Be,A,q),Yt&&De.render(A),An(G,A,q)}X!==null&&de===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),te&&L.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,q),Ae.resetDefaultState(),O=-1,I=null,T.pop(),T.length>0?(P=T[T.length-1],b.setTextureUnits(P.state.textureUnits),Xt===!0&&Fe.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?G=B[B.length-1]:G=null,j!==null&&j.renderEnd()};function ln(A,q,ie,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){te&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const ke=we.update(A),Be=A.material;Be.visible&&G.push(A,ke,Be,ie,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const ke=we.update(A),Be=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ut.copy(ke.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Be)){const We=ke.groups;for(let Xe=0,Qe=We.length;Xe<Qe;Xe++){const lt=We[Xe],Ze=Be[lt.materialIndex];Ze&&Ze.visible&&G.push(A,ke,Ze,ie,ut.z,lt)}}else Be.visible&&G.push(A,ke,Be,ie,ut.z,null)}}const ze=A.children;for(let ke=0,Be=ze.length;ke<Be;ke++)ln(ze[ke],q,ie,te)}function An(A,q,ie,te){const{opaque:ne,transmissive:ze,transparent:ke}=A;P.setupLightsView(ie),Xt===!0&&Fe.setGlobalState(Y.clippingPlanes,ie),te&&Ce.viewport(le.copy(te)),ne.length>0&&Ua(ne,q,ie),ze.length>0&&Ua(ze,q,ie),ke.length>0&&Ua(ke,q,ie),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ta(A,q,ie,te){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Ze=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new Ki(1,1,{generateMipmaps:!0,type:Ze?Ca:Si,minFilter:Vr,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const ze=P.state.transmissionRenderTarget[te.id],ke=te.viewport||le;ze.setSize(ke.z*Y.transmissionResolutionScale,ke.w*Y.transmissionResolutionScale);const Be=Y.getRenderTarget(),We=Y.getActiveCubeFace(),Xe=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(F),J=Y.getClearAlpha(),J<1&&Y.setClearColor(16777215,.5),Y.clear(),Yt&&De.render(ie);const Qe=Y.toneMapping;Y.toneMapping=Zi;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Xt===!0&&Fe.setGlobalState(Y.clippingPlanes,te),Ua(A,ie,te),b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Qt=q.length;At<Qt;At++){const Wt=q[At],{object:Ot,geometry:Pt,material:Ve,group:Ln}=Wt;if(Ve.side===qi&&Ot.layers.test(te.layers)){const vt=Ve.side;Ve.side=jn,Ve.needsUpdate=!0,Ml(Ot,ie,te,Pt,Ve,Ln),Ve.side=vt,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Be,We,Xe),Y.setClearColor(F,J),lt!==void 0&&(te.viewport=lt),Y.toneMapping=Qe}function Ua(A,q,ie){const te=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,ze=A.length;ne<ze;ne++){const ke=A[ne],{object:Be,geometry:We,group:Xe}=ke;let Qe=ke.material;Qe.allowOverride===!0&&te!==null&&(Qe=te),Be.layers.test(ie.layers)&&Ml(Be,q,ie,We,Qe,Xe)}}function Ml(A,q,ie,te,ne,ze){A.onBeforeRender(Y,q,ie,te,ne,ze),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Y,q,ie,te,A,ze),ne.transparent===!0&&ne.side===qi&&ne.forceSinglePass===!1?(ne.side=jn,ne.needsUpdate=!0,Y.renderBufferDirect(ie,q,te,ne,A,ze),ne.side=mr,ne.needsUpdate=!0,Y.renderBufferDirect(ie,q,te,ne,A,ze),ne.side=qi):Y.renderBufferDirect(ie,q,te,ne,A,ze),A.onAfterRender(Y,q,ie,te,ne,ze)}function Kr(A,q,ie){q.isScene!==!0&&(q=on);const te=N.get(A),ne=P.state.lights,ze=P.state.shadowsArray,ke=ne.state.version,Be=Oe.getParameters(A,ne.state,ze,q,ie,P.state.lightProbeGridArray),We=Oe.getProgramCacheKey(Be);let Xe=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Q.get(A.envMap||te.environment,Qe),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",tn),Xe=new Map,te.programs=Xe);let lt=Xe.get(We);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ke)return La(A,Be),lt}else Be.uniforms=Oe.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,ie,Be),A.onBeforeCompile(Be,Y),lt=Oe.acquireProgram(Be,We),Xe.set(We,lt),te.uniforms=Be.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),La(A,Be),te.needsLights=vr(A),te.lightsStateVersion=ke,te.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function no(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=pu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function La(A,q){const ie=N.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function io(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(q.matrixWorld);for(let ie=0,te=A.length;ie<te;ie++){const ne=A[ie];if(ne.texture!==null&&ne.boundingBox.containsPoint(U))return ne}return null}function Oa(A,q,ie,te,ne){q.isScene!==!0&&(q=on),b.resetTextureUnits();const ze=q.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Be=X===null?Y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:bt.workingColorSpace,We=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Xe=Q.get(te.envMap||ke,We),Qe=te.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,lt=!!ie.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ie.morphAttributes.position,At=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color;let Wt=Zi;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=Y.toneMapping);const Ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=N.get(te),Ln=P.state.lights;if(Xt===!0&&(dt===!0||A!==I)){const Ut=A===I&&te.id===O;Fe.setState(te,A,Ut)}let vt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ln.state.version||Ve.outputColorSpace!==Be||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==Xe||te.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==lt||Ve.morphTargets!==Ze||Ve.morphNormals!==At||Ve.morphColors!==Qt||Ve.toneMapping!==Wt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=te.version);let _n=Ve.currentProgram;vt===!0&&(_n=Kr(te,q,ne),j&&te.isNodeMaterial&&j.onUpdateProgram(te,_n,Ve));let Jn=!1,Ai=!1,$n=!1;const Ft=_n.getUniforms(),Jt=Ve.uniforms;if(Ce.useProgram(_n.program)&&(Jn=!0,Ai=!0,$n=!0),te.id!==O&&(O=te.id,Ai=!0),Ve.needsLights){const Ut=io(P.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==Ut&&(Ve.lightProbeGrid=Ut,Ai=!0)}if(Jn||I!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(W,"projectionMatrix",A.projectionMatrix),Ft.setValue(W,"viewMatrix",A.matrixWorldInverse);const zi=Ft.map.cameraPosition;zi!==void 0&&zi.setValue(W,Lt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&Ft.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ft.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Ai=!0,$n=!0)}if(Ve.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ft.setValue(W,"directionalShadowMap",Ln.state.directionalShadowMap,b),Ln.state.spotShadowMap.length>0&&Ft.setValue(W,"spotShadowMap",Ln.state.spotShadowMap,b),Ln.state.pointShadowMap.length>0&&Ft.setValue(W,"pointShadowMap",Ln.state.pointShadowMap,b)),ne.isSkinnedMesh){Ft.setOptional(W,ne,"bindMatrix"),Ft.setOptional(W,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Ft.setValue(W,"boneTexture",Ut.boneTexture,b))}ne.isBatchedMesh&&(Ft.setOptional(W,ne,"batchingTexture"),Ft.setValue(W,"batchingTexture",ne._matricesTexture,b),Ft.setOptional(W,ne,"batchingIdTexture"),Ft.setValue(W,"batchingIdTexture",ne._indirectTexture,b),Ft.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(W,"batchingColorTexture",ne._colorsTexture,b));const Ri=ie.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&at.update(ne,ie,_n),(Ai||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,Ft.setValue(W,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(Jt.envMapIntensity.value=q.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fC()),Ai){if(Ft.setValue(W,"toneMappingExposure",Y.toneMappingExposure),Ve.needsLights&&Pa(Jt,$n),ze&&te.fog===!0&&fe.refreshFogUniforms(Jt,ze),fe.refreshMaterialUniforms(Jt,te,Ne,Re,P.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ut=Ve.lightProbeGrid;Jt.probesSH.value=Ut.texture,Jt.probesMin.value.copy(Ut.boundingBox.min),Jt.probesMax.value.copy(Ut.boundingBox.max),Jt.probesResolution.value.copy(Ut.resolution)}pu.upload(W,no(Ve),Jt,b)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(pu.upload(W,no(Ve),Jt,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ft.setValue(W,"center",ne.center),Ft.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(W,"normalMatrix",ne.normalMatrix),Ft.setValue(W,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let zi=0,Ba=Ut.length;zi<Ba;zi++){const _r=Ut[zi];me.update(_r,_n),me.bind(_r,_n)}}return _n}function Pa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function vr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,ie){const te=N.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=q,N.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ie,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ie=N.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const Fa=W.createFramebuffer();this.setRenderTarget=function(A,q=0,ie=0){X=A,ue=q,de=ie;let te=null,ne=!1,ze=!1;if(A){const Be=N.get(A);if(Be.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),le.copy(A.viewport),ve.copy(A.scissor),Ee=A.scissorTest,Ce.viewport(le),Ce.scissor(ve),Ce.setScissorTest(Ee),O=-1;return}else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Be.__boundDepthTexture!==Qe){if(Qe!==null&&N.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ze=!0);const Xe=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?te=Xe[q][ie]:te=Xe[q],ne=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?te=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[ie]:te=Xe,le.copy(A.viewport),ve.copy(A.scissor),Ee=A.scissorTest}else le.copy(Te).multiplyScalar(Ne).floor(),ve.copy(Ge).multiplyScalar(Ne).floor(),Ee=nt;if(ie!==0&&(te=Fa),Ce.bindFramebuffer(W.FRAMEBUFFER,te)&&Ce.drawBuffers(A,te),Ce.viewport(le),Ce.scissor(ve),Ce.setScissorTest(Ee),ne){const Be=N.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ie)}else if(ze){const Be=q;for(let We=0;We<A.textures.length;We++){const Xe=N.get(A.textures[We]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ie,Be)}}else if(A!==null&&ie!==0){const Be=N.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,ie)}O=-1},this.readRenderTargetPixels=function(A,q,ie,te,ne,ze,ke,Be=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Ce.bindFramebuffer(W.FRAMEBUFFER,We);try{const Xe=A.textures[Be],Qe=Xe.format,lt=Xe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!Ht.textureFormatReadable(Qe)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&ie>=0&&ie<=A.height-ne&&W.readPixels(q,ie,te,ne,V.convert(Qe),V.convert(lt),ze)}finally{const Xe=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,te,ne,ze,ke,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(q>=0&&q<=A.width-te&&ie>=0&&ie<=A.height-ne){Ce.bindFramebuffer(W.FRAMEBUFFER,We);const Xe=A.textures[Be],Qe=Xe.format,lt=Xe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!Ht.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(q,ie,te,ne,V.convert(Qe),V.convert(lt),0);const At=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,At);const Qt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await zE(W,Qt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.deleteBuffer(Ze),W.deleteSync(Qt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ie=0){const te=Math.pow(2,-ie),ne=Math.floor(A.image.width*te),ze=Math.floor(A.image.height*te),ke=q!==null?q.x:0,Be=q!==null?q.y:0;b.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ie,0,0,ke,Be,ne,ze),Ce.unbindTexture()};const hn=W.createFramebuffer(),El=W.createFramebuffer();this.copyTextureToTexture=function(A,q,ie=null,te=null,ne=0,ze=0){let ke,Be,We,Xe,Qe,lt,Ze,At,Qt;const Wt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ie!==null)ke=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,Xe=ie.min.x,Qe=ie.min.y,lt=ie.isBox3?ie.min.z:0;else{const Jt=Math.pow(2,-ne);ke=Math.floor(Wt.width*Jt),Be=Math.floor(Wt.height*Jt),A.isDataArrayTexture?We=Wt.depth:A.isData3DTexture?We=Math.floor(Wt.depth*Jt):We=1,Xe=0,Qe=0,lt=0}te!==null?(Ze=te.x,At=te.y,Qt=te.z):(Ze=0,At=0,Qt=0);const Ot=V.convert(q.format),Pt=V.convert(q.type);let Ve;q.isData3DTexture?(b.setTexture3D(q,0),Ve=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Ve=W.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Ve=W.TEXTURE_2D),Ce.activeTexture(W.TEXTURE0),Ce.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=Ce.getParameter(W.UNPACK_ROW_LENGTH),vt=Ce.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(W.UNPACK_SKIP_PIXELS),Jn=Ce.getParameter(W.UNPACK_SKIP_ROWS),Ai=Ce.getParameter(W.UNPACK_SKIP_IMAGES);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,Xe),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Qe),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const $n=A.isDataArrayTexture||A.isData3DTexture,Ft=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Jt=N.get(A),Ri=N.get(q),Ut=N.get(Jt.__renderTarget),zi=N.get(Ri.__renderTarget);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Ba=0;Ba<We;Ba++)$n&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(A).__webglTexture,ne,lt+Ba),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(q).__webglTexture,ze,Qt+Ba)),W.blitFramebuffer(Xe,Qe,ke,Be,Ze,At,ke,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||N.has(A)){const Jt=N.get(A),Ri=N.get(q);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,hn),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,El);for(let Ut=0;Ut<We;Ut++)$n?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Jt.__webglTexture,ne,lt+Ut):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Jt.__webglTexture,ne),Ft?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ri.__webglTexture,ze,Qt+Ut):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ri.__webglTexture,ze),ne!==0?W.blitFramebuffer(Xe,Qe,ke,Be,Ze,At,ke,Be,W.COLOR_BUFFER_BIT,W.NEAREST):Ft?W.copyTexSubImage3D(Ve,ze,Ze,At,Qt+Ut,Xe,Qe,ke,Be):W.copyTexSubImage2D(Ve,ze,Ze,At,Xe,Qe,ke,Be);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ve,ze,Ze,At,Qt,ke,Be,We,Ot,Pt,Wt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,ze,Ze,At,Qt,ke,Be,We,Ot,Wt.data):W.texSubImage3D(Ve,ze,Ze,At,Qt,ke,Be,We,Ot,Pt,Wt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Ze,At,ke,Be,Ot,Pt,Wt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Ze,At,Wt.width,Wt.height,Ot,Wt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Ze,At,ke,Be,Ot,Pt,Wt);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,Ln),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Jn),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,Ai),ze===0&&q.generateMipmaps&&W.generateMipmap(Ve),Ce.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){ue=0,de=0,X=null,Ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const dC=[{id:"forehead",z:1.5,baseColor:"#111111",emissive:"#000000",mouseFactor:.4,vertices:[[-2.5,1],[2.5,1],[3,3.5],[-3,3.5]],features:[1,1,1,1]},{id:"cheekL",z:.75,baseColor:"#151515",emissive:"#000000",mouseFactor:.8,vertices:[[-3.5,-1.5],[-1,-1.5],[-1.5,1.5],[-4,1.5]],features:[1,0,1,1]},{id:"cheekR",z:.75,baseColor:"#151515",emissive:"#000000",mouseFactor:.8,vertices:[[1,-1.5],[3.5,-1.5],[4,1.5],[1.5,1.5]],features:[1,0,1,1]},{id:"nose",z:1.1,baseColor:"#0a0a0a",emissive:"#000000",mouseFactor:.3,vertices:[[-.75,-.5],[.75,-.5],[.5,1.5],[-.5,1.5]],features:[1,1,1,1]},{id:"chin",z:.3,baseColor:"#1a1a1a",emissive:"#000000",mouseFactor:1.2,vertices:[[-2,-3.8],[2,-3.8],[2.5,-1.5],[-2.5,-1.5]],features:[1,0,1,1]},{id:"earL",z:.2,baseColor:"#0f0f0f",emissive:"#000000",mouseFactor:1.5,vertices:[[-5,-2],[-3.5,-2],[-3.5,.5],[-5,0]],features:[0,0,1,0]},{id:"earR",z:.2,baseColor:"#0f0f0f",emissive:"#000000",mouseFactor:1.5,vertices:[[3.5,-2],[5,-2],[5,0],[3.5,.5]],features:[0,0,1,0]}],pC=`
  varying vec2 vUv;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.xy += uMouse * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,mC=`
  varying vec2 vUv;
  uniform vec3 uBaseColor;
  uniform vec3 uEmissive;
  uniform float uTime;
  uniform float uVelocity;
  uniform float uState;
  uniform vec4 uActiveFeatures;
  uniform float uBlinkPhase;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float hexGrid(vec2 uv) {
    vec2 p = uv * 30.0;
    vec2 s = vec2(1.0, 1.732);
    vec2 h = s * 0.5;
    vec2 a = mod(p, s) - h;
    vec2 b = mod(p - h, s) - h;
    vec2 g = dot(a, a) < dot(b, b) ? a : b;
    return length(g);
  }

  float scanlines(vec2 uv, float t) {
    return smoothstep(0.15, 0.0, abs(sin(uv.y * 60.0 - t * 3.0))) * 0.15;
  }

  vec3 alertPulse(float t) {
    float pt = pow(sin(t * 4.0) * 0.5 + 0.5, 6.0);
    return mix(vec3(0.0), vec3(1.0, 0.05, 0.0), pt);
  }

  vec3 eyeGlow(vec2 uv, float t, float bp) {
    vec3 col = vec3(0.0);
    vec2 eyeCenter = vec2(0.0, 0.0);
    float eyeSize = 0.25;
    float d = length(uv - eyeCenter);

    float blinkRaw = sin(t * 0.8 + bp * 6.28);
    float blink = smoothstep(0.3, 1.0, blinkRaw);
    float squeeze = 1.0 - blink * 0.9;

    vec2 testUv = uv;
    if (uActiveFeatures.y > 0.5) {
      testUv.y = eyeCenter.y + (uv.y - eyeCenter.y) / squeeze;
    }
    float testD = length(testUv - eyeCenter);
    float pupil = smoothstep(eyeSize, eyeSize * 0.5, testD);

    if (pupil > 0.01) {
      col += vec3(0.8, 0.9, 1.0) * pupil;
      col += smoothstep(eyeSize * 0.5, eyeSize * 0.3, testD) * vec3(0.3, 0.6, 1.0);
      float slant = smoothstep(0.04, 0.0, abs(testD - 0.12 + (testUv.x - eyeCenter.x) * 0.3)) * 0.5;
      col += vec3(0.2, 0.4, 0.8) * slant;
      if (uActiveFeatures.x > 0.5) {
        col += vec3(0.1, 0.2, 0.3) * scanlines(uv, t) * pupil;
      }
    }
    return col;
  }

  void main() {
    vec3 col = uBaseColor;
    float t = uTime;

    if (uActiveFeatures.z > 0.5) {
      col += alertPulse(t);
    }

    if (uActiveFeatures.w > 0.5) {
      col += (noise(vUv * 5.0 + t * 0.1) - 0.5) * 0.05;
    }

    float hx = hexGrid(vUv);
    float hc = 1.0 - smoothstep(0.0, 0.06, hx);

    if (uActiveFeatures.x > 0.5) {
      vec3 e = eyeGlow(vUv, t, uBlinkPhase);
      float em = max(e.r, max(e.g, e.b));
      col += vec3(0.4, 0.5, 0.6) * hc * (0.1 + em * 0.5);
    }

    if (uActiveFeatures.x > 0.5) {
      col += scanlines(vUv, t);
    }

    float fringe = smoothstep(0.5, 0.0, abs(vUv.x - 0.5)) * smoothstep(0.5, 0.0, abs(vUv.y - 0.5));
    col *= 0.7 + fringe * 0.3;

    col += uEmissive * 0.2;

    if (uActiveFeatures.x > 0.5) {
      col += eyeGlow(vUv, t, uBlinkPhase);
    }

    if (uActiveFeatures.z > 0.5) {
      col *= (0.7 + (sin(t * 8.0) * 0.5 + 0.5) * 0.6);
    }

    col = mix(col * 0.3, col, uState);

    gl_FragColor = vec4(col, 1.0);
  }
`,gC=`
  attribute float phase;
  varying float vPhase;
  uniform float uTime;
  uniform float uVelocity;

  void main() {
    vPhase = phase;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float twinkle = sin(uTime * 2.0 + phase) * 0.5 + 0.5;
    float velBoost = 1.0 + uVelocity * 2.0;
    gl_PointSize = (2.0 + twinkle * 1.5) * velBoost;
  }
`,vC=`
  varying float vPhase;
  uniform float uTime;
  uniform float uVelocity;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float twinkle = sin(uTime * 2.0 + vPhase) * 0.5 + 0.5;
    float alpha = (1.0 - d * 2.0) * (0.3 + twinkle * 0.7);
    vec3 color = mix(vec3(1.0, 1.0, 1.0), vec3(1.0, 0.2, 0.0), uVelocity);
    gl_FragColor = vec4(color, alpha);
  }
`;function _C(){const a=re.useRef(null),e=re.useRef(null);return re.useEffect(()=>{const n=a.current;if(!n)return;e.current&&(e.current(),e.current=null);const r=new gb;r.background=new Nt("#000000");const o=window.innerWidth/window.innerHeight,c=9,u=new Xp(-c*o/2,c*o/2,c/2,-c/2,.1,100);u.position.set(0,0,10);const d=new hC({antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(window.innerWidth,window.innerHeight),d.outputColorSpace=ci,n.appendChild(d.domElement);const m=[],p=new Nt;dC.forEach(L=>{const Y=new Jx,z=L.vertices;Y.moveTo(z[0][0],z[0][1]);for(let X=1;X<z.length;X++)Y.lineTo(z[X][0],z[X][1]);Y.closePath();const j=new kp(Y),ue=new Ei({vertexShader:pC,fragmentShader:mC,uniforms:{uBaseColor:{value:p.clone().set(L.baseColor)},uEmissive:{value:p.clone().set(L.emissive)},uTime:{value:0},uMouse:{value:new Ke(0,0)},uVelocity:{value:0},uState:{value:0},uActiveFeatures:{value:new sn(...L.features)},uBlinkPhase:{value:Math.random()}},side:qi}),de=new $i(j,ue);de.position.z=L.z,de.userData={originalX:0,mouseFactor:L.mouseFactor},r.add(de),m.push({id:L.id,mesh:de})});const v=window.innerWidth<768?400:800,_=new Ti,y=new Float32Array(v*3),E=new Float32Array(v);for(let L=0;L<v;L++)y[L*3]=(Math.random()-.5)*40,y[L*3+1]=(Math.random()-.5)*40,y[L*3+2]=(Math.random()-.5)*20-5,E[L]=Math.random()*Math.PI*2;_.setAttribute("position",new yi(y,3)),_.setAttribute("phase",new yi(E,1));const C=new Ei({vertexShader:gC,fragmentShader:vC,uniforms:{uTime:{value:0},uVelocity:{value:0}},transparent:!0,depthWrite:!1}),x=new Rb(_,C);r.add(x);const M=new Ke(0,0),w=new Ke(0,0);let D=0;const U=L=>{M.x=L.clientX/window.innerWidth*2-1,M.y=-(L.clientY/window.innerHeight)*2+1,D=Math.min(Math.sqrt(L.movementX**2+L.movementY**2)*.02,1)};window.addEventListener("pointermove",U);const G=new gT;let P;const B=()=>{P=requestAnimationFrame(B);const L=G.getElapsedTime();w.lerp(M,.05),D*=.95;const Y=nb.smoothstep(D,.1,.8);m.forEach(({mesh:z})=>{const j=z.material;j.uniforms.uTime.value=L,j.uniforms.uMouse.value=w,j.uniforms.uVelocity.value=D,j.uniforms.uState.value=Y;const ue=w.x*z.userData.mouseFactor*.5;z.position.x=z.userData.originalX+ue}),C.uniforms.uTime.value=L,C.uniforms.uVelocity.value=D,d.render(r,u)};B();const T=()=>{const L=window.innerWidth,Y=window.innerHeight,z=L/Y,j=9;u.left=-j*z/2,u.right=j*z/2,u.top=j/2,u.bottom=-j/2,u.updateProjectionMatrix(),d.setSize(L,Y)};return window.addEventListener("resize",T),e.current=()=>{cancelAnimationFrame(P),window.removeEventListener("pointermove",U),window.removeEventListener("resize",T),d.dispose(),m.forEach(({mesh:L})=>{L.geometry.dispose(),L.material.dispose()}),_.dispose(),C.dispose(),n.contains(d.domElement)&&n.removeChild(d.domElement)},()=>{e.current&&(e.current(),e.current=null)}},[]),oe.jsx("div",{"code-path":"src\\components\\RobotScene.tsx:444:5",ref:a,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}})}const xC=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SC=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),ex=a=>{const e=SC(a);return e.charAt(0).toUpperCase()+e.slice(1)},dS=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),yC=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var MC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const EC=re.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},m)=>re.createElement("svg",{ref:m,...MC,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:dS("lucide",o),...!c&&!yC(d)&&{"aria-hidden":"true"},...d},[...u.map(([p,g])=>re.createElement(p,g)),...Array.isArray(c)?c:[c]]));const Kn=(a,e)=>{const n=re.forwardRef(({className:r,...o},c)=>re.createElement(EC,{ref:c,iconNode:e,className:dS(`lucide-${xC(ex(a))}`,`lucide-${a}`,r),...o}));return n.displayName=ex(a),n};const bC=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],TC=Kn("bug",bC);const AC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],RC=Kn("cpu",AC);const CC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],mu=Kn("external-link",CC);const wC=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],DC=Kn("file-search",wC);const NC=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Lu=Kn("github",NC);const UC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],LC=Kn("globe",UC);const OC=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],PC=Kn("hard-drive",OC);const FC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],BC=Kn("lock-open",FC);const zC=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],IC=Kn("monitor",zC);const HC=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],GC=Kn("palette",HC);const VC=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],kC=Kn("rocket",VC);const XC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],WC=Kn("shield-alert",XC);const qC=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],YC=Kn("wrench",qC);const jC=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],pS=Kn("youtube",jC);function ZC(){const[a,e]=re.useState(!1);re.useEffect(()=>{const r=()=>e(window.scrollY>50);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const n=r=>{const o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth"})};return oe.jsx("nav",{"code-path":"src\\components\\Navigation.tsx:26:5",className:"fixed top-0 left-0 right-0 z-[100] h-16 flex items-center transition-all duration-300 "+(a?"bg-[rgba(5,5,8,0.9)] backdrop-blur-xl border-b border-[#1A1A2E]":"bg-[rgba(5,5,8,0.6)] backdrop-blur-md"),children:oe.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:34:7",className:"w-full max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between",children:[oe.jsxs("button",{"code-path":"src\\components\\Navigation.tsx:36:9",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"flex items-center gap-3 focus-ring rounded",children:[oe.jsx("img",{"code-path":"src\\components\\Navigation.tsx:40:11",src:"/logo.png",alt:"Pyraethon",className:"h-9 w-auto object-contain"}),oe.jsx("span",{"code-path":"src\\components\\Navigation.tsx:45:11",className:"font-mono-tech text-sm font-bold tracking-[0.15em] text-[#E8E8F0] hidden sm:inline",children:"PYRAETHON"})]}),oe.jsxs("div",{"code-path":"src\\components\\Navigation.tsx:51:9",className:"flex items-center gap-6 md:gap-8",children:[oe.jsx("button",{"code-path":"src\\components\\Navigation.tsx:52:11",onClick:()=>n("modules"),className:"font-sans text-sm font-medium text-[#6B6B80] hover:text-[#FF6B2B] transition-colors duration-300 focus-ring rounded",children:"Модули"}),oe.jsx("button",{"code-path":"src\\components\\Navigation.tsx:58:11",onClick:()=>n("about"),className:"font-sans text-sm font-medium text-[#6B6B80] hover:text-[#FF6B2B] transition-colors duration-300 focus-ring rounded hidden sm:block",children:"О проекте"}),oe.jsxs("a",{"code-path":"src\\components\\Navigation.tsx:64:11",href:"https://github.com/TopziCH/pyraethon",target:"_blank",rel:"noopener noreferrer",className:"font-sans text-sm font-medium text-[#6B6B80] hover:text-[#FF6B2B] transition-colors duration-300 flex items-center gap-1.5 focus-ring rounded",children:[oe.jsx(Lu,{"code-path":"src\\components\\Navigation.tsx:70:13",size:16}),oe.jsx("span",{"code-path":"src\\components\\Navigation.tsx:71:13",className:"hidden md:inline",children:"GitHub"})]}),oe.jsx("a",{"code-path":"src\\components\\Navigation.tsx:75:11",href:"https://github.com/TopziCH/pyraethon/releases",target:"_blank",rel:"noopener noreferrer",className:"font-mono-tech text-xs font-bold uppercase tracking-[0.1em] bg-[#FF6B2B] text-[#050508] px-5 py-2 rounded hover:bg-[#FF8C5A] hover:scale-[1.02] transition-all duration-200 focus-ring",children:"Скачать"})]})]})})}function KC(){const[a,e]=re.useState(""),[n,r]=re.useState(!0),[o,c]=re.useState(!1),u=re.useRef(null),d="СЖИГАЙ",m="ВИРУСЫ";re.useEffect(()=>{let g=0;const v=80,_=setInterval(()=>{if(g<=d.length)e(d.slice(0,g)),g++;else{clearInterval(_);let y=0;const E=setInterval(()=>{y<=m.length?(e(d+`
`+m.slice(0,y)),y++):(clearInterval(E),setTimeout(()=>{c(!0),setTimeout(()=>r(!1),2e3)},400))},v)}},v);return()=>clearInterval(_)},[]);const p=a.split(`
`);return oe.jsxs("section",{"code-path":"src\\sections\\Hero.tsx:53:5",ref:u,className:"relative min-h-[100dvh] flex items-end z-[1]",style:{padding:"0 0 80px 0"},children:[oe.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:58:7",className:"w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20",children:[oe.jsx("p",{"code-path":"src\\sections\\Hero.tsx:60:9",className:"font-mono-tech text-xs tracking-[0.2em] text-[#FF6B2B] mb-6 opacity-0 animate-[fadeIn_0.6s_ease_0.5s_forwards]",children:"OPEN-SOURCE ANTIMALWARE UTILITY"}),oe.jsxs("h1",{"code-path":"src\\sections\\Hero.tsx:65:9",className:"font-heading font-bold uppercase tracking-[-0.03em] text-[#E8E8F0] text-shadow-hero leading-[1.05]",children:[oe.jsxs("span",{"code-path":"src\\sections\\Hero.tsx:66:11",className:"block",style:{fontSize:"clamp(3rem, 7vw, 5.5rem)"},children:[p[0]||"",!p[1]&&n&&oe.jsx("span",{"code-path":"src\\sections\\Hero.tsx:72:15",className:"inline-block w-[3px] h-[0.8em] bg-[#FF6B2B] ml-1 align-middle animate-blink"})]}),p[1]&&oe.jsxs("span",{"code-path":"src\\sections\\Hero.tsx:76:13",className:"block mt-1",style:{fontSize:"clamp(3rem, 7vw, 5.5rem)"},children:[p[1],n&&oe.jsx("span",{"code-path":"src\\sections\\Hero.tsx:82:17",className:"inline-block w-[3px] h-[0.8em] bg-[#FF6B2B] ml-1 align-middle animate-blink"})]})]}),oe.jsx("p",{"code-path":"src\\sections\\Hero.tsx:89:9",className:"mt-6 text-lg text-[#6B6B80] max-w-[480px] leading-relaxed transition-opacity duration-700 "+(o?"opacity-100":"opacity-0"),children:"Pyraethon — утилита на Python с открытым исходным кодом для очистки Windows от вредоносного ПО. 11 модулей защиты. Полный контроль над системой."}),oe.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:101:9",className:"flex flex-wrap gap-4 mt-10 transition-opacity duration-700 "+(o?"opacity-100":"opacity-0"),children:[oe.jsxs("a",{"code-path":"src\\sections\\Hero.tsx:107:11",href:"https://github.com/TopziCH/pyraethon/releases",target:"_blank",rel:"noopener noreferrer",className:"font-mono-tech text-[13px] font-bold uppercase tracking-[0.08em] bg-[#FF6B2B] text-[#050508] px-8 py-3.5 rounded hover:bg-[#FF8C5A] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,107,43,0.3)] transition-all duration-200 inline-flex items-center gap-2 focus-ring",children:[oe.jsx(Lu,{"code-path":"src\\sections\\Hero.tsx:113:13",size:18}),"СКАЧАТЬ С GITHUB"]}),oe.jsxs("a",{"code-path":"src\\sections\\Hero.tsx:116:11",href:"https://github.com/TopziCH/pyraethon",target:"_blank",rel:"noopener noreferrer",className:"font-mono-tech text-[13px] font-bold uppercase tracking-[0.08em] bg-transparent border border-[#1A1A2E] text-[#E8E8F0] px-8 py-3.5 rounded hover:border-[#FF6B2B] hover:text-[#FF6B2B] transition-all duration-200 inline-flex items-center gap-2 focus-ring",children:["ИСХОДНИКИ",oe.jsx(mu,{"code-path":"src\\sections\\Hero.tsx:123:13",size:16})]})]})]}),oe.jsx("style",{"code-path":"src\\sections\\Hero.tsx:129:7",children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}const tx=[{value:"11",label:"МОДУЛЕЙ ЗАЩИТЫ"},{value:"100%",label:"ОТКРЫТЫЙ КОД"},{value:"0₽",label:"БЕСПЛАТНО"},{value:"∞",label:"СООБЩЕСТВО"}];function QC(){const a=re.useRef(null),[e,n]=re.useState(!1);return re.useEffect(()=>{const r=a.current;if(!r)return;const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(n(!0),o.disconnect())},{threshold:.3});return o.observe(r),()=>o.disconnect()},[]),oe.jsx("div",{"code-path":"src\\sections\\StatsBar.tsx:44:5",ref:a,className:"relative z-[2] w-full bg-[#0A0A12] border-y border-[#1A1A2E] py-10",children:oe.jsx("div",{"code-path":"src\\sections\\StatsBar.tsx:48:7",className:"max-w-[1200px] mx-auto px-6 md:px-10",children:oe.jsx("div",{"code-path":"src\\sections\\StatsBar.tsx:49:9",className:"grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4",children:tx.map((r,o)=>oe.jsxs("div",{"code-path":"src\\sections\\StatsBar.tsx:51:13",className:"flex flex-col items-center text-center relative transition-all duration-600 "+(e?"opacity-100 translate-y-0":"opacity-0 translate-y-5"),style:{transitionDelay:`${o*100}ms`},children:[oe.jsx("span",{"code-path":"src\\sections\\StatsBar.tsx:61:15",className:"font-mono-tech text-4xl font-bold text-[#FF6B2B]",children:r.value}),oe.jsx("span",{"code-path":"src\\sections\\StatsBar.tsx:64:15",className:"mt-2 text-[13px] text-[#6B6B80] tracking-[0.05em] uppercase",children:r.label}),o<tx.length-1&&oe.jsx("div",{"code-path":"src\\sections\\StatsBar.tsx:70:17",className:"hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#1A1A2E]"})]},r.label))})})})}const JC=[{icon:WC,number:"МОДУЛЬ 01",name:"Умный детектор блокировок",description:"Автосканирование реестра на любые ограничения. Находит DWORD в политиках, DisableXxx ключи, подмену запуска программ через IFEO, нестандартные Shell и Userinit."},{icon:BC,number:"МОДУЛЬ 02",name:"Разблокировка SimpleUnlocker x10",description:"Снимает все вирусные блокировки одним кликом: диспетчер задач, regedit, CMD, панель управления, безопасный режим, запуск .exe, UAC, брандмауэр, Defender, обновления, расширения файлов."},{icon:GC,number:"МОДУЛЬ 03",name:"Восстановление интерфейса",description:"Возвращает систему к стандарту: шрифты, язык и локаль, обои, курсор, звуковая схема, тема оформления, панель задач, настройки мыши и клавиатуры, имя компьютера."},{icon:RC,number:"МОДУЛЬ 04",name:"Диспетчер процессов",description:"Список всех процессов включая скрытые через два API. Путь, PID, CPU/RAM, цифровая подпись, проверка по базе хешей. Принудительное завершение защищённых процессов."},{icon:kC,number:"МОДУЛЬ 05",name:"Автозагрузка",description:"Полный контроль: Run, RunOnce, папки автозагрузки, службы, планировщик задач, драйверы, BHO, Winlogon Notify, AppInit_DLLs, IFEO, BootExecute."},{icon:LC,number:"МОДУЛЬ 06",name:"Сетевой анализ",description:"Анализатор TCP/UDP портов с базой троянов. Активные соединения с привязкой к процессу. Детектирование C2/RAT. Проверка hosts, DNS, прокси."},{icon:TC,number:"МОДУЛЬ 07",name:"Детектор угроз",description:"Обнаружение: стиллеры (Login Data, Cookies), RAT, майнеры (100% нагрузка CPU/GPU), локеры экрана, кейлоггеры (SetWindowsHookEx), клиперы."},{icon:PC,number:"МОДУЛЬ 08",name:"Файловая система",description:"Сканирование всех разделов, NTFS Alternate Data Streams, TEMP и APPDATA, неудаляемые файлы через отложенное удаление, поиск файлов с поддельными расширениями."},{icon:DC,number:"МОДУЛЬ 09",name:"Анализ PE файлов",description:"Проверка цифровой подписи, анализ энтропии (высокая = упакован), список импортируемых функций, детектирование подозрительных секций в .exe."},{icon:IC,number:"МОДУЛЬ 10",name:"Загрузчик / MBR / UEFI",description:"Чтение и анализ MBR, детектирование изменений Boot Record, восстановление MBR, UEFI сканер подозрительных модулей, работа в WinPE."},{icon:YC,number:"МОДУЛЬ 11",name:"Инструменты AVZ-стиля",description:"Менеджер служб и DLL, редактор hosts, резервная копия реестра, мастер устранения проблем, восстановление системных файлов, сброс сети и браузерных настроек."}];function $C({module:a,index:e,visible:n}){const r=a.icon;return oe.jsxs("div",{"code-path":"src\\sections\\Modules.tsx:123:5",className:"bg-[#0A0A12] border border-[#1A1A2E] rounded-lg p-8 group hover:border-[rgba(255,107,43,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-default "+(n?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),style:{transitionDelay:`${e*80}ms`},children:[oe.jsx(r,{"code-path":"src\\sections\\Modules.tsx:132:7",size:40,className:"text-[#2B7FFF] mb-4 group-hover:text-[#FF6B2B] transition-colors duration-300",strokeWidth:1.5}),oe.jsx("p",{"code-path":"src\\sections\\Modules.tsx:137:7",className:"font-mono-tech text-xs text-[#FF6B2B] tracking-[0.1em]",children:a.number}),oe.jsx("h3",{"code-path":"src\\sections\\Modules.tsx:140:7",className:"font-heading text-xl font-semibold text-[#E8E8F0] mt-3",children:a.name}),oe.jsx("p",{"code-path":"src\\sections\\Modules.tsx:143:7",className:"text-sm text-[#6B6B80] mt-3 leading-relaxed",children:a.description})]})}function ew(){const a=re.useRef(null),[e,n]=re.useState(!1);return re.useEffect(()=>{const r=a.current;if(!r)return;const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(n(!0),o.disconnect())},{threshold:.2});return o.observe(r),()=>o.disconnect()},[]),oe.jsx("section",{"code-path":"src\\sections\\Modules.tsx:171:5",id:"modules",ref:a,className:"relative z-[2] bg-[#050508] py-28 md:py-32",children:oe.jsxs("div",{"code-path":"src\\sections\\Modules.tsx:176:7",className:"max-w-[1200px] mx-auto px-6 md:px-10",children:[oe.jsxs("div",{"code-path":"src\\sections\\Modules.tsx:178:9",className:"transition-all duration-700 "+(e?"opacity-100 translate-y-0":"opacity-0 translate-y-5"),children:[oe.jsx("p",{"code-path":"src\\sections\\Modules.tsx:184:11",className:"font-mono-tech text-xs text-[#2B7FFF] tracking-[0.2em] uppercase",children:"ФУНКЦИОНАЛ"}),oe.jsx("h2",{"code-path":"src\\sections\\Modules.tsx:187:11",className:"font-heading font-bold text-[#E8E8F0] mt-3",style:{fontSize:"clamp(2rem, 4vw, 3rem)"},children:"11 модулей защиты"}),oe.jsx("p",{"code-path":"src\\sections\\Modules.tsx:193:11",className:"text-base text-[#6B6B80] mt-4 max-w-[600px] leading-relaxed",children:"Каждый модуль решает конкретную задачу безопасности — от разблокировки системы до анализа загрузчика."})]}),oe.jsx("div",{"code-path":"src\\sections\\Modules.tsx:200:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16",children:JC.map((r,o)=>oe.jsx($C,{"code-path":"src\\sections\\Modules.tsx:202:13",module:r,index:o,visible:e},r.number))})]})})}const su=[{text:"[Pyraethon] Запуск сканирования системы...",color:"#FF6B2B"},{text:"[INFO] Обнаружено 11 модулей защиты",color:"#2B7FFF"},{text:"[SCAN] Проверка реестра на блокировки...",color:"#E8E8F0"},{text:"[OK] Блокировок не найдено",color:"#00FF88"},{text:"[SCAN] Анализ автозагрузки...",color:"#E8E8F0"},{text:"[WARN] Подозрительный процесс: svch0st.exe [PID: 2847]",color:"#FFBD2E"},{text:"[ALERT] Обнаружен модифицированный hosts файл!",color:"#FF2B2B"},{text:"[ACTION] Восстановление hosts из резервной копии...",color:"#2B7FFF"},{text:"[OK] hosts файл восстановлен",color:"#00FF88"},{text:"[DONE] Сканирование завершено. Угроз найдено: 1 | Устранено: 1",color:"#FF6B2B"}];function tw(){const a=re.useRef(null),[e,n]=re.useState(!1),[r,o]=re.useState(!1),[c,u]=re.useState(0),[d,m]=re.useState(!0);return re.useEffect(()=>{const p=a.current;if(!p)return;const g=new IntersectionObserver(([v])=>{v.isIntersecting&&(n(!0),g.disconnect())},{threshold:.2});return g.observe(p),()=>g.disconnect()},[]),re.useEffect(()=>{if(!e)return;const p=setTimeout(()=>o(!0),300);return()=>clearTimeout(p)},[e]),re.useEffect(()=>{if(!r||c>=su.length)return;const p=setTimeout(()=>{u(g=>g+1)},400);return()=>clearTimeout(p)},[r,c]),re.useEffect(()=>{const p=setInterval(()=>{m(g=>!g)},530);return()=>clearInterval(p)},[]),oe.jsx("section",{"code-path":"src\\sections\\TerminalShowcase.tsx:92:5",ref:a,className:"relative z-[2] w-full bg-[#0A0A12] border-t border-[#1A1A2E] py-28 md:py-32",children:oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:96:7",className:"max-w-[1000px] mx-auto px-6 md:px-10",children:[oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:98:9",className:"text-center transition-all duration-700 "+(e?"opacity-100 translate-y-0":"opacity-0 translate-y-5"),children:[oe.jsx("p",{"code-path":"src\\sections\\TerminalShowcase.tsx:104:11",className:"font-mono-tech text-xs text-[#FF6B2B] tracking-[0.2em] uppercase",children:"ИНТЕРФЕЙС"}),oe.jsx("h2",{"code-path":"src\\sections\\TerminalShowcase.tsx:107:11",className:"font-heading font-bold text-[#E8E8F0] mt-3",style:{fontSize:"clamp(2rem, 4vw, 3rem)"},children:"Работает в тёмной теме"}),oe.jsx("p",{"code-path":"src\\sections\\TerminalShowcase.tsx:113:11",className:"text-base text-[#6B6B80] mt-4 max-w-[600px] mx-auto leading-relaxed",children:"Тёмный киберпанк-интерфейс с цветовой индикацией угроз и real-time прогрессом сканирования."})]}),oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:120:9",className:"mt-16 bg-[#0F0F1A] border border-[#1A1A2E] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-800 "+(r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"),children:[oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:128:11",className:"h-10 bg-[#16162A] flex items-center px-4 gap-2",children:[oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:129:13",className:"w-3 h-3 rounded-full bg-[#FF5F56]"}),oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:130:13",className:"w-3 h-3 rounded-full bg-[#FFBD2E]"}),oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:131:13",className:"w-3 h-3 rounded-full bg-[#27C93F]"}),oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:132:13",className:"font-mono-tech text-xs text-[#6B6B80] ml-3",children:"pyraethon.exe — Pyraethon Antimalware"})]}),oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:138:11",className:"bg-[#050508] p-6 font-mono-tech text-[13px] leading-[1.8] min-h-[320px]",children:[su.slice(0,c).map((p,g)=>oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:140:15",className:"flex",children:[oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:141:17",style:{color:p.color},children:p.text}),g===c-1&&c<su.length&&oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:143:19",className:"inline-block w-[8px] h-[15px] bg-[#FF6B2B] ml-1",style:{opacity:d?1:0}})]},g)),c>=su.length&&oe.jsxs("div",{"code-path":"src\\sections\\TerminalShowcase.tsx:153:15",className:"flex items-center mt-2",children:[oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:154:17",className:"text-[#FF6B2B]",children:">"}),oe.jsx("span",{"code-path":"src\\sections\\TerminalShowcase.tsx:155:17",className:"inline-block w-[8px] h-[15px] bg-[#FF6B2B] ml-2",style:{opacity:d?1:0}})]})]})]})]})})}const nw=["Python","HTML","CSS","C++","Lua"];function iw(){const a=re.useRef(null),[e,n]=re.useState(!1);return re.useEffect(()=>{const r=a.current;if(!r)return;const o=new IntersectionObserver(([c])=>{c.isIntersecting&&(n(!0),o.disconnect())},{threshold:.2});return o.observe(r),()=>o.disconnect()},[]),oe.jsx("section",{"code-path":"src\\sections\\AboutDeveloper.tsx:34:5",id:"about",ref:a,className:"relative z-[2] bg-[#050508] py-28 md:py-32",children:oe.jsx("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:39:7",className:"max-w-[1200px] mx-auto px-6 md:px-10",children:oe.jsxs("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:40:9",className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",children:[oe.jsxs("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:42:11",className:"transition-all duration-700 "+(e?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"),children:[oe.jsx("p",{"code-path":"src\\sections\\AboutDeveloper.tsx:50:13",className:"font-mono-tech text-xs text-[#FF6B2B] tracking-[0.2em] uppercase",children:"РАЗРАБОТЧИК"}),oe.jsx("h2",{"code-path":"src\\sections\\AboutDeveloper.tsx:53:13",className:"font-heading font-bold text-[#E8E8F0] mt-3",style:{fontSize:"clamp(1.8rem, 3vw, 2.5rem)"},children:"Создано для НЕДОХАКЕРЫ LITE"}),oe.jsx("p",{"code-path":"src\\sections\\AboutDeveloper.tsx:59:13",className:"text-base text-[#6B6B80] mt-6 leading-[1.7]",children:"Pyraethon разработан Михаилом (Topzi) — создателем канала НЕДОХАКЕРЫ LITE. Утилита создана на Python с открытым исходным кодом для борьбы с вредоносным ПО."}),oe.jsx("p",{"code-path":"src\\sections\\AboutDeveloper.tsx:64:13",className:"text-base text-[#6B6B80] mt-4 leading-[1.7]",children:"Стек разработчика: HTML, Python, CSS, C++, Lua. Партнёрская программа GitHub Education. Опыт в создании антивирусных инструментов."}),oe.jsxs("a",{"code-path":"src\\sections\\AboutDeveloper.tsx:69:13",href:"https://www.youtube.com/@nedohackerslite",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 mt-6 text-[#2B7FFF] text-sm hover:underline focus-ring rounded",children:[oe.jsx(pS,{"code-path":"src\\sections\\AboutDeveloper.tsx:75:15",size:16}),"youtube.com/@nedohackerslite →"]})]}),oe.jsx("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:81:11",className:"transition-all duration-700 delay-150 "+(e?"opacity-100 translate-x-0":"opacity-0 translate-x-8"),children:oe.jsxs("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:89:13",className:"bg-[#0A0A12] border border-[#1A1A2E] rounded-xl p-10 flex flex-col items-center",children:[oe.jsx("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:91:15",className:"w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#2B7FFF] flex items-center justify-center text-2xl font-heading font-bold text-white",children:"T"}),oe.jsx("h3",{"code-path":"src\\sections\\AboutDeveloper.tsx:96:15",className:"font-heading text-2xl font-bold text-[#E8E8F0] mt-5",children:"Topzi"}),oe.jsx("p",{"code-path":"src\\sections\\AboutDeveloper.tsx:99:15",className:"font-mono-tech text-sm text-[#6B6B80] mt-1",children:"@topzi_dev"}),oe.jsx("div",{"code-path":"src\\sections\\AboutDeveloper.tsx:104:15",className:"flex flex-wrap gap-2 justify-center mt-6",children:nw.map(r=>oe.jsx("span",{"code-path":"src\\sections\\AboutDeveloper.tsx:106:19",className:"bg-[rgba(255,107,43,0.1)] text-[#FF6B2B] px-3.5 py-1.5 rounded-full font-mono-tech text-[11px]",children:r},r))}),oe.jsxs("a",{"code-path":"src\\sections\\AboutDeveloper.tsx:116:15",href:"https://github.com/TopziCH",target:"_blank",rel:"noopener noreferrer",className:"mt-6 text-[#2B7FFF] font-mono-tech text-sm hover:underline inline-flex items-center gap-1.5 focus-ring rounded",children:[oe.jsx(Lu,{"code-path":"src\\sections\\AboutDeveloper.tsx:122:17",size:14}),"GitHub Profile →"]})]})})]})})})}function aw(){return oe.jsx("footer",{"code-path":"src\\sections\\Footer.tsx:12:5",className:"relative z-[2] w-full bg-[#0A0A12] border-t border-[#1A1A2E]",children:oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:13:7",className:"max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-10",children:[oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:15:9",className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:16:11",className:"flex items-center gap-3",children:[oe.jsx("img",{"code-path":"src\\sections\\Footer.tsx:17:13",src:"/logo.png",alt:"Pyraethon",className:"h-8 w-auto object-contain"}),oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:22:13",className:"font-mono-tech text-base font-bold text-[#E8E8F0] tracking-[0.1em]",children:"PYRAETHON"})]}),oe.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:26:11",href:"https://github.com/TopziCH/pyraethon",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[#6B6B80] hover:text-[#FF6B2B] transition-colors duration-300 text-sm focus-ring rounded",children:[oe.jsx(Lu,{"code-path":"src\\sections\\Footer.tsx:32:13",size:18}),"GitHub"]})]}),oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:38:9",className:"grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10",children:[oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:40:11",children:[oe.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:41:13",className:"font-mono-tech text-xs text-[#6B6B80] tracking-[0.1em] uppercase mb-4",children:"ПРОЕКТ"}),oe.jsxs("ul",{"code-path":"src\\sections\\Footer.tsx:44:13",className:"space-y-3",children:[oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:45:15",children:oe.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:46:17",href:"https://github.com/TopziCH/pyraethon/releases",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#6B6B80] hover:text-[#E8E8F0] transition-colors duration-200 inline-flex items-center gap-1 focus-ring rounded",children:["Скачать ",oe.jsx(mu,{"code-path":"src\\sections\\Footer.tsx:52:27",size:12})]})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:55:15",children:oe.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:56:17",href:"https://github.com/TopziCH/pyraethon",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#6B6B80] hover:text-[#E8E8F0] transition-colors duration-200 inline-flex items-center gap-1 focus-ring rounded",children:["Исходники ",oe.jsx(mu,{"code-path":"src\\sections\\Footer.tsx:62:29",size:12})]})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:65:15",children:oe.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:66:17",href:"https://education.github.com/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#6B6B80] hover:text-[#E8E8F0] transition-colors duration-200 inline-flex items-center gap-1 focus-ring rounded",children:["GitHub Education ",oe.jsx(mu,{"code-path":"src\\sections\\Footer.tsx:72:36",size:12})]})})]})]}),oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:79:11",children:[oe.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:80:13",className:"font-mono-tech text-xs text-[#6B6B80] tracking-[0.1em] uppercase mb-4",children:"СООБЩЕСТВО"}),oe.jsxs("ul",{"code-path":"src\\sections\\Footer.tsx:83:13",className:"space-y-3",children:[oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:84:15",children:oe.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:85:17",href:"https://www.youtube.com/@nedohackerslite",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#6B6B80] hover:text-[#E8E8F0] transition-colors duration-200 inline-flex items-center gap-1 focus-ring rounded",children:[oe.jsx(pS,{"code-path":"src\\sections\\Footer.tsx:91:19",size:14}),"НЕДОХАКЕРЫ LITE"]})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:95:15",children:oe.jsxs("span",{"code-path":"src\\sections\\Footer.tsx:96:17",className:"text-sm text-[#4A4A5A] cursor-default inline-flex items-center gap-1",children:["Telegram ",oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:97:28",className:"text-[10px]",children:"(скоро)"})]})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:100:15",children:oe.jsxs("span",{"code-path":"src\\sections\\Footer.tsx:101:17",className:"text-sm text-[#4A4A5A] cursor-default inline-flex items-center gap-1",children:["Discord ",oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:102:27",className:"text-[10px]",children:"(скоро)"})]})})]})]}),oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:109:11",children:[oe.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:110:13",className:"font-mono-tech text-xs text-[#6B6B80] tracking-[0.1em] uppercase mb-4",children:"ТЕХНОЛОГИИ"}),oe.jsxs("ul",{"code-path":"src\\sections\\Footer.tsx:113:13",className:"space-y-3",children:[oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:114:15",children:oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:115:17",className:"text-sm text-[#6B6B80]",children:"Python"})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:117:15",children:oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:118:17",className:"text-sm text-[#6B6B80]",children:"Open Source"})}),oe.jsx("li",{"code-path":"src\\sections\\Footer.tsx:120:15",children:oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:121:17",className:"text-sm text-[#6B6B80]",children:"Windows API"})})]})]})]}),oe.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:128:9",className:"mt-14 pt-6 border-t border-[#1A1A2E] flex flex-col sm:flex-row items-center justify-between gap-3",children:[oe.jsx("p",{"code-path":"src\\sections\\Footer.tsx:129:11",className:"text-[13px] text-[#6B6B80]",children:"© 2025 Pyraethon. Open Source под MIT License."}),oe.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:132:11",className:"text-[13px] text-[#6B6B80]",children:["Сделано с"," ",oe.jsx("span",{"code-path":"src\\sections\\Footer.tsx:134:13",className:"text-[#FF6B2B]",children:"огнём"})," ","для НЕДОХАКЕРЫ LITE"]})]})]})})}function rw(){return oe.jsxs(oe.Fragment,{children:[oe.jsx(_C,{"code-path":"src\\App.tsx:22:7"}),oe.jsx(ZC,{"code-path":"src\\App.tsx:25:7"}),oe.jsxs("main",{"code-path":"src\\App.tsx:28:7",className:"relative",children:[oe.jsx(KC,{"code-path":"src\\App.tsx:30:9"}),oe.jsx(QC,{"code-path":"src\\App.tsx:33:9"}),oe.jsx(ew,{"code-path":"src\\App.tsx:34:9"}),oe.jsx(tw,{"code-path":"src\\App.tsx:35:9"}),oe.jsx(iw,{"code-path":"src\\App.tsx:36:9"}),oe.jsx(aw,{"code-path":"src\\App.tsx:37:9"})]})]})}AM.createRoot(document.getElementById("root")).render(oe.jsx(re.StrictMode,{"code-path":"src\\main.tsx:8:3",children:oe.jsx(j1,{"code-path":"src\\main.tsx:9:5",children:oe.jsx(rw,{"code-path":"src\\main.tsx:10:7"})})}));
