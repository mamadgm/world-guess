(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Su(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ue={},pr=[],ci=()=>{},ag=()=>!1,Ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Eu=n=>n.startsWith("onUpdate:"),an=Object.assign,bu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},lg=Object.prototype.hasOwnProperty,Ee=(n,t)=>lg.call(n,t),re=Array.isArray,mr=n=>Va(n)==="[object Map]",Zd=n=>Va(n)==="[object Set]",le=n=>typeof n=="function",Ze=n=>typeof n=="string",os=n=>typeof n=="symbol",Ne=n=>n!==null&&typeof n=="object",qd=n=>(Ne(n)||le(n))&&le(n.then)&&le(n.catch),Yd=Object.prototype.toString,Va=n=>Yd.call(n),cg=n=>Va(n).slice(8,-1),jd=n=>Va(n)==="[object Object]",Tu=n=>Ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Jr=Su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},ug=/-(\w)/g,zn=Ga(n=>n.replace(ug,(t,e)=>e?e.toUpperCase():"")),hg=/\B([A-Z])/g,Bs=Ga(n=>n.replace(hg,"-$1").toLowerCase()),Wa=Ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),Rl=Ga(n=>n?`on${Wa(n)}`:""),ts=(n,t)=>!Object.is(n,t),Cl=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Kd=(n,t,e,s=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:s,value:e})},fg=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let $h;const Xa=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wu(n){if(re(n)){const t={};for(let e=0;e<n.length;e++){const s=n[e],r=Ze(s)?_g(s):wu(s);if(r)for(const a in r)t[a]=r[a]}return t}else if(Ze(n)||Ne(n))return n}const dg=/;(?![^(]*\))/g,pg=/:([^]+)/,mg=/\/\*[^]*?\*\//g;function _g(n){const t={};return n.replace(mg,"").split(dg).forEach(e=>{if(e){const s=e.split(pg);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Au(n){let t="";if(Ze(n))t=n;else if(re(n))for(let e=0;e<n.length;e++){const s=Au(n[e]);s&&(t+=s+" ")}else if(Ne(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const gg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vg=Su(gg);function $d(n){return!!n||n===""}const Jd=n=>!!(n&&n.__v_isRef===!0),Yr=n=>Ze(n)?n:n==null?"":re(n)||Ne(n)&&(n.toString===Yd||!le(n.toString))?Jd(n)?Yr(n.value):JSON.stringify(n,Qd,2):String(n),Qd=(n,t)=>Jd(t)?Qd(n,t.value):mr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,r],a)=>(e[Ll(s,a)+" =>"]=r,e),{})}:Zd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ll(e))}:os(t)?Ll(t):Ne(t)&&!re(t)&&!jd(t)?String(t):t,Ll=(n,t="")=>{var e;return os(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class tp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fn,!t&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=fn;try{return fn=this,t()}finally{fn=e}}}on(){fn=this}off(){fn=this.parent}stop(t){if(this._active){this._active=!1;let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(this.effects.length=0,e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ep(n){return new tp(n)}function np(){return fn}function xg(n,t=!1){fn&&fn.cleanups.push(n)}let Ie;const Dl=new WeakSet;class ip{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&fn.active&&fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dl.has(this)&&(Dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jh(this),op(this);const t=Ie,e=Yn;Ie=this,Yn=!0;try{return this.fn()}finally{ap(this),Ie=t,Yn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cu(t);this.deps=this.depsTail=void 0,Jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yc(this)&&this.run()}get dirty(){return yc(this)}}let sp=0,Qr,to;function rp(n,t=!1){if(n.flags|=8,t){n.next=to,to=n;return}n.next=Qr,Qr=n}function Pu(){sp++}function Ru(){if(--sp>0)return;if(to){let t=to;for(to=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Qr;){let t=Qr;for(Qr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){n||(n=s)}t=e}}if(n)throw n}function op(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ap(n){let t,e=n.depsTail,s=e;for(;s;){const r=s.prevDep;s.version===-1?(s===e&&(e=r),Cu(s),yg(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=t,n.depsTail=e}function yc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(lp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function lp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===lo))return;n.globalVersion=lo;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!yc(n)){n.flags&=-3;return}const e=Ie,s=Yn;Ie=n,Yn=!0;try{op(n);const r=n.fn(n._value);(t.version===0||ts(r,n._value))&&(n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Ie=e,Yn=s,ap(n),n.flags&=-3}}function Cu(n,t=!1){const{dep:e,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),e.subs===n&&(e.subs=s,!s&&e.computed)){e.computed.flags&=-5;for(let a=e.computed.deps;a;a=a.nextDep)Cu(a,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function yg(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Yn=!0;const cp=[];function as(){cp.push(Yn),Yn=!1}function ls(){const n=cp.pop();Yn=n===void 0?!0:n}function Jh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ie;Ie=void 0;try{t()}finally{Ie=e}}}let lo=0;class Mg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ie||!Yn||Ie===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ie)e=this.activeLink=new Mg(Ie,this),Ie.deps?(e.prevDep=Ie.depsTail,Ie.depsTail.nextDep=e,Ie.depsTail=e):Ie.deps=Ie.depsTail=e,up(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const s=e.nextDep;s.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=s),e.prevDep=Ie.depsTail,e.nextDep=void 0,Ie.depsTail.nextDep=e,Ie.depsTail=e,Ie.deps===e&&(Ie.deps=s)}return e}trigger(t){this.version++,lo++,this.notify(t)}notify(t){Pu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ru()}}}function up(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)up(s)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const La=new WeakMap,Rs=Symbol(""),Mc=Symbol(""),co=Symbol("");function on(n,t,e){if(Yn&&Ie){let s=La.get(n);s||La.set(n,s=new Map);let r=s.get(e);r||(s.set(e,r=new Lu),r.map=s,r.key=e),r.track()}}function Ri(n,t,e,s,r,a){const l=La.get(n);if(!l){lo++;return}const u=h=>{h&&h.trigger()};if(Pu(),t==="clear")l.forEach(u);else{const h=re(n),d=h&&Tu(e);if(h&&e==="length"){const p=Number(s);l.forEach((m,_)=>{(_==="length"||_===co||!os(_)&&_>=p)&&u(m)})}else switch((e!==void 0||l.has(void 0))&&u(l.get(e)),d&&u(l.get(co)),t){case"add":h?d&&u(l.get("length")):(u(l.get(Rs)),mr(n)&&u(l.get(Mc)));break;case"delete":h||(u(l.get(Rs)),mr(n)&&u(l.get(Mc)));break;case"set":mr(n)&&u(l.get(Rs));break}}Ru()}function Sg(n,t){const e=La.get(n);return e&&e.get(t)}function qs(n){const t=xe(n);return t===n?t:(on(t,"iterate",co),jn(n)?t:t.map(pn))}function Du(n){return on(n=xe(n),"iterate",co),n}const Eg={__proto__:null,[Symbol.iterator](){return Il(this,Symbol.iterator,pn)},concat(...n){return qs(this).concat(...n.map(t=>re(t)?qs(t):t))},entries(){return Il(this,"entries",n=>(n[1]=pn(n[1]),n))},every(n,t){return xi(this,"every",n,t,void 0,arguments)},filter(n,t){return xi(this,"filter",n,t,e=>e.map(pn),arguments)},find(n,t){return xi(this,"find",n,t,pn,arguments)},findIndex(n,t){return xi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return xi(this,"findLast",n,t,pn,arguments)},findLastIndex(n,t){return xi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return xi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ul(this,"includes",n)},indexOf(...n){return Ul(this,"indexOf",n)},join(n){return qs(this).join(n)},lastIndexOf(...n){return Ul(this,"lastIndexOf",n)},map(n,t){return xi(this,"map",n,t,void 0,arguments)},pop(){return kr(this,"pop")},push(...n){return kr(this,"push",n)},reduce(n,...t){return Qh(this,"reduce",n,t)},reduceRight(n,...t){return Qh(this,"reduceRight",n,t)},shift(){return kr(this,"shift")},some(n,t){return xi(this,"some",n,t,void 0,arguments)},splice(...n){return kr(this,"splice",n)},toReversed(){return qs(this).toReversed()},toSorted(n){return qs(this).toSorted(n)},toSpliced(...n){return qs(this).toSpliced(...n)},unshift(...n){return kr(this,"unshift",n)},values(){return Il(this,"values",pn)}};function Il(n,t,e){const s=Du(n),r=s[t]();return s!==n&&!jn(n)&&(r._next=r.next,r.next=()=>{const a=r._next();return a.value&&(a.value=e(a.value)),a}),r}const bg=Array.prototype;function xi(n,t,e,s,r,a){const l=Du(n),u=l!==n&&!jn(n),h=l[t];if(h!==bg[t]){const m=h.apply(n,a);return u?pn(m):m}let d=e;l!==n&&(u?d=function(m,_){return e.call(this,pn(m),_,n)}:e.length>2&&(d=function(m,_){return e.call(this,m,_,n)}));const p=h.call(l,d,s);return u&&r?r(p):p}function Qh(n,t,e,s){const r=Du(n);let a=e;return r!==n&&(jn(n)?e.length>3&&(a=function(l,u,h){return e.call(this,l,u,h,n)}):a=function(l,u,h){return e.call(this,l,pn(u),h,n)}),r[t](a,...s)}function Ul(n,t,e){const s=xe(n);on(s,"iterate",co);const r=s[t](...e);return(r===-1||r===!1)&&Ou(e[0])?(e[0]=xe(e[0]),s[t](...e)):r}function kr(n,t,e=[]){as(),Pu();const s=xe(n)[t].apply(n,e);return Ru(),ls(),s}const Tg=Su("__proto__,__v_isRef,__isVue"),hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(os));function wg(n){os(n)||(n=String(n));const t=xe(this);return on(t,"has",n),t.hasOwnProperty(n)}class fp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,a=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return a;if(e==="__v_raw")return s===(r?a?Ng:_p:a?mp:pp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=re(t);if(!r){let h;if(l&&(h=Eg[e]))return h;if(e==="hasOwnProperty")return wg}const u=Reflect.get(t,e,ke(t)?t:s);return(os(e)?hp.has(e):Tg(e))||(r||on(t,"get",e),a)?u:ke(u)?l&&Tu(e)?u:u.value:Ne(u)?r?vp(u):Mo(u):u}}class dp extends fp{constructor(t=!1){super(!1,t)}set(t,e,s,r){let a=t[e];if(!this._isShallow){const h=Is(a);if(!jn(s)&&!Is(s)&&(a=xe(a),s=xe(s)),!re(t)&&ke(a)&&!ke(s))return h?!1:(a.value=s,!0)}const l=re(t)&&Tu(e)?Number(e)<t.length:Ee(t,e),u=Reflect.set(t,e,s,ke(t)?t:r);return t===xe(r)&&(l?ts(s,a)&&Ri(t,"set",e,s):Ri(t,"add",e,s)),u}deleteProperty(t,e){const s=Ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&Ri(t,"delete",e,void 0),r}has(t,e){const s=Reflect.has(t,e);return(!os(e)||!hp.has(e))&&on(t,"has",e),s}ownKeys(t){return on(t,"iterate",re(t)?"length":Rs),Reflect.ownKeys(t)}}class Ag extends fp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Pg=new dp,Rg=new Ag,Cg=new dp(!0);const Sc=n=>n,Yo=n=>Reflect.getPrototypeOf(n);function Lg(n,t,e){return function(...s){const r=this.__v_raw,a=xe(r),l=mr(a),u=n==="entries"||n===Symbol.iterator&&l,h=n==="keys"&&l,d=r[n](...s),p=e?Sc:t?Ec:pn;return!t&&on(a,"iterate",h?Mc:Rs),{next(){const{value:m,done:_}=d.next();return _?{value:m,done:_}:{value:u?[p(m[0]),p(m[1])]:p(m),done:_}},[Symbol.iterator](){return this}}}}function jo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Dg(n,t){const e={get(r){const a=this.__v_raw,l=xe(a),u=xe(r);n||(ts(r,u)&&on(l,"get",r),on(l,"get",u));const{has:h}=Yo(l),d=t?Sc:n?Ec:pn;if(h.call(l,r))return d(a.get(r));if(h.call(l,u))return d(a.get(u));a!==l&&a.get(r)},get size(){const r=this.__v_raw;return!n&&on(xe(r),"iterate",Rs),Reflect.get(r,"size",r)},has(r){const a=this.__v_raw,l=xe(a),u=xe(r);return n||(ts(r,u)&&on(l,"has",r),on(l,"has",u)),r===u?a.has(r):a.has(r)||a.has(u)},forEach(r,a){const l=this,u=l.__v_raw,h=xe(u),d=t?Sc:n?Ec:pn;return!n&&on(h,"iterate",Rs),u.forEach((p,m)=>r.call(a,d(p),d(m),l))}};return an(e,n?{add:jo("add"),set:jo("set"),delete:jo("delete"),clear:jo("clear")}:{add(r){!t&&!jn(r)&&!Is(r)&&(r=xe(r));const a=xe(this);return Yo(a).has.call(a,r)||(a.add(r),Ri(a,"add",r,r)),this},set(r,a){!t&&!jn(a)&&!Is(a)&&(a=xe(a));const l=xe(this),{has:u,get:h}=Yo(l);let d=u.call(l,r);d||(r=xe(r),d=u.call(l,r));const p=h.call(l,r);return l.set(r,a),d?ts(a,p)&&Ri(l,"set",r,a):Ri(l,"add",r,a),this},delete(r){const a=xe(this),{has:l,get:u}=Yo(a);let h=l.call(a,r);h||(r=xe(r),h=l.call(a,r)),u&&u.call(a,r);const d=a.delete(r);return h&&Ri(a,"delete",r,void 0),d},clear(){const r=xe(this),a=r.size!==0,l=r.clear();return a&&Ri(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Lg(r,n,t)}),e}function Iu(n,t){const e=Dg(n,t);return(s,r,a)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Ee(e,r)&&r in s?e:s,r,a)}const Ig={get:Iu(!1,!1)},Ug={get:Iu(!1,!0)},Og={get:Iu(!0,!1)};const pp=new WeakMap,mp=new WeakMap,_p=new WeakMap,Ng=new WeakMap;function Fg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bg(n){return n.__v_skip||!Object.isExtensible(n)?0:Fg(cg(n))}function Mo(n){return Is(n)?n:Uu(n,!1,Pg,Ig,pp)}function gp(n){return Uu(n,!1,Cg,Ug,mp)}function vp(n){return Uu(n,!0,Rg,Og,_p)}function Uu(n,t,e,s,r){if(!Ne(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const a=r.get(n);if(a)return a;const l=Bg(n);if(l===0)return n;const u=new Proxy(n,l===2?s:e);return r.set(n,u),u}function Cs(n){return Is(n)?Cs(n.__v_raw):!!(n&&n.__v_isReactive)}function Is(n){return!!(n&&n.__v_isReadonly)}function jn(n){return!!(n&&n.__v_isShallow)}function Ou(n){return n?!!n.__v_raw:!1}function xe(n){const t=n&&n.__v_raw;return t?xe(t):n}function Nu(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Kd(n,"__v_skip",!0),n}const pn=n=>Ne(n)?Mo(n):n,Ec=n=>Ne(n)?vp(n):n;function ke(n){return n?n.__v_isRef===!0:!1}function So(n){return xp(n,!1)}function zg(n){return xp(n,!0)}function xp(n,t){return ke(n)?n:new kg(n,t)}class kg{constructor(t,e){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:xe(t),this._value=e?t:pn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,s=this.__v_isShallow||jn(t)||Is(t);t=s?t:xe(t),ts(t,e)&&(this._rawValue=t,this._value=s?t:pn(t),this.dep.trigger())}}function On(n){return ke(n)?n.value:n}const Hg={get:(n,t,e)=>t==="__v_raw"?n:On(Reflect.get(n,t,e)),set:(n,t,e,s)=>{const r=n[t];return ke(r)&&!ke(e)?(r.value=e,!0):Reflect.set(n,t,e,s)}};function yp(n){return Cs(n)?n:new Proxy(n,Hg)}function Vg(n){const t=re(n)?new Array(n.length):{};for(const e in n)t[e]=Wg(n,e);return t}class Gg{constructor(t,e,s){this._object=t,this._key=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Sg(xe(this._object),this._key)}}function Wg(n,t,e){const s=n[t];return ke(s)?s:new Gg(n,t,e)}class Xg{constructor(t,e,s){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return rp(this,!0),!0}get value(){const t=this.dep.track();return lp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zg(n,t,e=!1){let s,r;return le(n)?s=n:(s=n.get,r=n.set),new Xg(s,r,e)}const Ko={},Da=new WeakMap;let Es;function qg(n,t=!1,e=Es){if(e){let s=Da.get(e);s||Da.set(e,s=[]),s.push(n)}}function Yg(n,t,e=Ue){const{immediate:s,deep:r,once:a,scheduler:l,augmentJob:u,call:h}=e,d=A=>r?A:jn(A)||r===!1||r===0?Ji(A,1):Ji(A);let p,m,_,v,S=!1,b=!1;if(ke(n)?(m=()=>n.value,S=jn(n)):Cs(n)?(m=()=>d(n),S=!0):re(n)?(b=!0,S=n.some(A=>Cs(A)||jn(A)),m=()=>n.map(A=>{if(ke(A))return A.value;if(Cs(A))return d(A);if(le(A))return h?h(A,2):A()})):le(n)?t?m=h?()=>h(n,2):n:m=()=>{if(_){as();try{_()}finally{ls()}}const A=Es;Es=p;try{return h?h(n,3,[v]):n(v)}finally{Es=A}}:m=ci,t&&r){const A=m,k=r===!0?1/0:r;m=()=>Ji(A(),k)}const y=np(),g=()=>{p.stop(),y&&y.active&&bu(y.effects,p)};if(a&&t){const A=t;t=(...k)=>{A(...k),g()}}let I=b?new Array(n.length).fill(Ko):Ko;const D=A=>{if(!(!(p.flags&1)||!p.dirty&&!A))if(t){const k=p.run();if(r||S||(b?k.some((H,N)=>ts(H,I[N])):ts(k,I))){_&&_();const H=Es;Es=p;try{const N=[k,I===Ko?void 0:b&&I[0]===Ko?[]:I,v];h?h(t,3,N):t(...N),I=k}finally{Es=H}}}else p.run()};return u&&u(D),p=new ip(m),p.scheduler=l?()=>l(D,!1):D,v=A=>qg(A,!1,p),_=p.onStop=()=>{const A=Da.get(p);if(A){if(h)h(A,4);else for(const k of A)k();Da.delete(p)}},t?s?D(!0):I=p.run():l?l(D.bind(null,!0),!0):p.run(),g.pause=p.pause.bind(p),g.resume=p.resume.bind(p),g.stop=g,g}function Ji(n,t=1/0,e){if(t<=0||!Ne(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,ke(n))Ji(n.value,t,e);else if(re(n))for(let s=0;s<n.length;s++)Ji(n[s],t,e);else if(Zd(n)||mr(n))n.forEach(s=>{Ji(s,t,e)});else if(jd(n)){for(const s in n)Ji(n[s],t,e);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Ji(n[s],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eo(n,t,e,s){try{return s?n(...s):n()}catch(r){Za(r,t,e)}}function fi(n,t,e,s){if(le(n)){const r=Eo(n,t,e,s);return r&&qd(r)&&r.catch(a=>{Za(a,t,e)}),r}if(re(n)){const r=[];for(let a=0;a<n.length;a++)r.push(fi(n[a],t,e,s));return r}}function Za(n,t,e,s=!0){const r=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Ue;if(t){let u=t.parent;const h=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${e}`;for(;u;){const p=u.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](n,h,d)===!1)return}u=u.parent}if(a){as(),Eo(a,null,10,[n,h,d]),ls();return}}jg(n,e,r,s,l)}function jg(n,t,e,s=!0,r=!1){if(r)throw n;console.error(n)}const mn=[];let si=-1;const _r=[];let Yi=null,ur=0;const Mp=Promise.resolve();let Ia=null;function Fu(n){const t=Ia||Mp;return n?t.then(this?n.bind(this):n):t}function Kg(n){let t=si+1,e=mn.length;for(;t<e;){const s=t+e>>>1,r=mn[s],a=uo(r);a<n||a===n&&r.flags&2?t=s+1:e=s}return t}function Bu(n){if(!(n.flags&1)){const t=uo(n),e=mn[mn.length-1];!e||!(n.flags&2)&&t>=uo(e)?mn.push(n):mn.splice(Kg(t),0,n),n.flags|=1,Sp()}}function Sp(){Ia||(Ia=Mp.then(bp))}function $g(n){re(n)?_r.push(...n):Yi&&n.id===-1?Yi.splice(ur+1,0,n):n.flags&1||(_r.push(n),n.flags|=1),Sp()}function tf(n,t,e=si+1){for(;e<mn.length;e++){const s=mn[e];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;mn.splice(e,1),e--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ep(n){if(_r.length){const t=[...new Set(_r)].sort((e,s)=>uo(e)-uo(s));if(_r.length=0,Yi){Yi.push(...t);return}for(Yi=t,ur=0;ur<Yi.length;ur++){const e=Yi[ur];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Yi=null,ur=0}}const uo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bp(n){try{for(si=0;si<mn.length;si++){const t=mn[si];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Eo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;si<mn.length;si++){const t=mn[si];t&&(t.flags&=-2)}si=-1,mn.length=0,Ep(),Ia=null,(mn.length||_r.length)&&bp()}}let Bn=null,Tp=null;function Ua(n){const t=Bn;return Bn=n,Tp=n&&n.type.__scopeId||null,t}function wp(n,t=Bn,e){if(!t||n._n)return n;const s=(...r)=>{s._d&&hf(-1);const a=Ua(t);let l;try{l=n(...r)}finally{Ua(a),s._d&&hf(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function ms(n,t,e,s){const r=n.dirs,a=t&&t.dirs;for(let l=0;l<r.length;l++){const u=r[l];a&&(u.oldValue=a[l].value);let h=u.dir[s];h&&(as(),fi(h,e,8,[n.el,u,n,t]),ls())}}const Jg=Symbol("_vte"),Qg=n=>n.__isTeleport;function zu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,zu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function bo(n,t){return le(n)?an({name:n.name},t,{setup:n}):n}function Ap(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Oa(n,t,e,s,r=!1){if(re(n)){n.forEach((S,b)=>Oa(S,t&&(re(t)?t[b]:t),e,s,r));return}if(eo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Oa(n,t,e,s.component.subTree);return}const a=s.shapeFlag&4?Gu(s.component):s.el,l=r?null:a,{i:u,r:h}=n,d=t&&t.r,p=u.refs===Ue?u.refs={}:u.refs,m=u.setupState,_=xe(m),v=m===Ue?()=>!1:S=>Ee(_,S);if(d!=null&&d!==h&&(Ze(d)?(p[d]=null,v(d)&&(m[d]=null)):ke(d)&&(d.value=null)),le(h))Eo(h,u,12,[l,p]);else{const S=Ze(h),b=ke(h);if(S||b){const y=()=>{if(n.f){const g=S?v(h)?m[h]:p[h]:h.value;r?re(g)&&bu(g,a):re(g)?g.includes(a)||g.push(a):S?(p[h]=[a],v(h)&&(m[h]=p[h])):(h.value=[a],n.k&&(p[n.k]=h.value))}else S?(p[h]=l,v(h)&&(m[h]=l)):b&&(h.value=l,n.k&&(p[n.k]=l))};l?(y.id=-1,Pn(y,e)):y()}}}Xa().requestIdleCallback;Xa().cancelIdleCallback;const eo=n=>!!n.type.__asyncLoader,Pp=n=>n.type.__isKeepAlive;function tv(n,t){Rp(n,"a",t)}function ev(n,t){Rp(n,"da",t)}function Rp(n,t,e=nn){const s=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qa(t,s,e),e){let r=e.parent;for(;r&&r.parent;)Pp(r.parent.vnode)&&nv(s,t,e,r),r=r.parent}}function nv(n,t,e,s){const r=qa(t,n,s,!0);Cp(()=>{bu(s[t],r)},e)}function qa(n,t,e=nn,s=!1){if(e){const r=e[n]||(e[n]=[]),a=t.__weh||(t.__weh=(...l)=>{as();const u=To(e),h=fi(t,e,n,l);return u(),ls(),h});return s?r.unshift(a):r.push(a),a}}const Ni=n=>(t,e=nn)=>{(!fo||n==="sp")&&qa(n,(...s)=>t(...s),e)},iv=Ni("bm"),ku=Ni("m"),sv=Ni("bu"),rv=Ni("u"),ov=Ni("bum"),Cp=Ni("um"),av=Ni("sp"),lv=Ni("rtg"),cv=Ni("rtc");function uv(n,t=nn){qa("ec",n,t)}const hv="components";function Lp(n,t){return dv(hv,n,!0,t)||n}const fv=Symbol.for("v-ndc");function dv(n,t,e=!0,s=!1){const r=Bn||nn;if(r){const a=r.type;{const u=ex(a,!1);if(u&&(u===t||u===zn(t)||u===Wa(zn(t))))return a}const l=ef(r[n]||a[n],t)||ef(r.appContext[n],t);return!l&&s?a:l}}function ef(n,t){return n&&(n[t]||n[zn(t)]||n[Wa(zn(t))])}const bc=n=>n?Qp(n)?Gu(n):bc(n.parent):null,no=an(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bc(n.parent),$root:n=>bc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ip(n),$forceUpdate:n=>n.f||(n.f=()=>{Bu(n.update)}),$nextTick:n=>n.n||(n.n=Fu.bind(n.proxy)),$watch:n=>Ov.bind(n)}),Ol=(n,t)=>n!==Ue&&!n.__isScriptSetup&&Ee(n,t),pv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:s,data:r,props:a,accessCache:l,type:u,appContext:h}=n;let d;if(t[0]!=="$"){const v=l[t];if(v!==void 0)switch(v){case 1:return s[t];case 2:return r[t];case 4:return e[t];case 3:return a[t]}else{if(Ol(s,t))return l[t]=1,s[t];if(r!==Ue&&Ee(r,t))return l[t]=2,r[t];if((d=n.propsOptions[0])&&Ee(d,t))return l[t]=3,a[t];if(e!==Ue&&Ee(e,t))return l[t]=4,e[t];Tc&&(l[t]=0)}}const p=no[t];let m,_;if(p)return t==="$attrs"&&on(n.attrs,"get",""),p(n);if((m=u.__cssModules)&&(m=m[t]))return m;if(e!==Ue&&Ee(e,t))return l[t]=4,e[t];if(_=h.config.globalProperties,Ee(_,t))return _[t]},set({_:n},t,e){const{data:s,setupState:r,ctx:a}=n;return Ol(r,t)?(r[t]=e,!0):s!==Ue&&Ee(s,t)?(s[t]=e,!0):Ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(a[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:s,appContext:r,propsOptions:a}},l){let u;return!!e[l]||n!==Ue&&Ee(n,l)||Ol(t,l)||(u=a[0])&&Ee(u,l)||Ee(s,l)||Ee(no,l)||Ee(r.config.globalProperties,l)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function nf(n){return re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Tc=!0;function mv(n){const t=Ip(n),e=n.proxy,s=n.ctx;Tc=!1,t.beforeCreate&&sf(t.beforeCreate,n,"bc");const{data:r,computed:a,methods:l,watch:u,provide:h,inject:d,created:p,beforeMount:m,mounted:_,beforeUpdate:v,updated:S,activated:b,deactivated:y,beforeDestroy:g,beforeUnmount:I,destroyed:D,unmounted:A,render:k,renderTracked:H,renderTriggered:N,errorCaptured:G,serverPrefetch:C,expose:R,inheritAttrs:z,components:lt,directives:et,filters:mt}=t;if(d&&_v(d,s,null),l)for(const it in l){const V=l[it];le(V)&&(s[it]=V.bind(e))}if(r){const it=r.call(e,e);Ne(it)&&(n.data=Mo(it))}if(Tc=!0,a)for(const it in a){const V=a[it],Ct=le(V)?V.bind(e,e):le(V.get)?V.get.bind(e,e):ci,_t=!le(V)&&le(V.set)?V.set.bind(e):ci,Pt=Fn({get:Ct,set:_t});Object.defineProperty(s,it,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:kt=>Pt.value=kt})}if(u)for(const it in u)Dp(u[it],s,e,it);if(h){const it=le(h)?h.call(e):h;Reflect.ownKeys(it).forEach(V=>{ya(V,it[V])})}p&&sf(p,n,"c");function Q(it,V){re(V)?V.forEach(Ct=>it(Ct.bind(e))):V&&it(V.bind(e))}if(Q(iv,m),Q(ku,_),Q(sv,v),Q(rv,S),Q(tv,b),Q(ev,y),Q(uv,G),Q(cv,H),Q(lv,N),Q(ov,I),Q(Cp,A),Q(av,C),re(R))if(R.length){const it=n.exposed||(n.exposed={});R.forEach(V=>{Object.defineProperty(it,V,{get:()=>e[V],set:Ct=>e[V]=Ct})})}else n.exposed||(n.exposed={});k&&n.render===ci&&(n.render=k),z!=null&&(n.inheritAttrs=z),lt&&(n.components=lt),et&&(n.directives=et),C&&Ap(n)}function _v(n,t,e=ci){re(n)&&(n=wc(n));for(const s in n){const r=n[s];let a;Ne(r)?"default"in r?a=Kn(r.from||s,r.default,!0):a=Kn(r.from||s):a=Kn(r),ke(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[s]=a}}function sf(n,t,e){fi(re(n)?n.map(s=>s.bind(t.proxy)):n.bind(t.proxy),t,e)}function Dp(n,t,e,s){let r=s.includes(".")?qp(e,s):()=>e[s];if(Ze(n)){const a=t[n];le(a)&&io(r,a)}else if(le(n))io(r,n.bind(e));else if(Ne(n))if(re(n))n.forEach(a=>Dp(a,t,e,s));else{const a=le(n.handler)?n.handler.bind(e):t[n.handler];le(a)&&io(r,a,n)}}function Ip(n){const t=n.type,{mixins:e,extends:s}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:l}}=n.appContext,u=a.get(t);let h;return u?h=u:!r.length&&!e&&!s?h=t:(h={},r.length&&r.forEach(d=>Na(h,d,l,!0)),Na(h,t,l)),Ne(t)&&a.set(t,h),h}function Na(n,t,e,s=!1){const{mixins:r,extends:a}=t;a&&Na(n,a,e,!0),r&&r.forEach(l=>Na(n,l,e,!0));for(const l in t)if(!(s&&l==="expose")){const u=gv[l]||e&&e[l];n[l]=u?u(n[l],t[l]):t[l]}return n}const gv={data:rf,props:of,emits:of,methods:jr,computed:jr,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:jr,directives:jr,watch:xv,provide:rf,inject:vv};function rf(n,t){return t?n?function(){return an(le(n)?n.call(this,this):n,le(t)?t.call(this,this):t)}:t:n}function vv(n,t){return jr(wc(n),wc(t))}function wc(n){if(re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function un(n,t){return n?[...new Set([].concat(n,t))]:t}function jr(n,t){return n?an(Object.create(null),n,t):t}function of(n,t){return n?re(n)&&re(t)?[...new Set([...n,...t])]:an(Object.create(null),nf(n),nf(t??{})):t}function xv(n,t){if(!n)return t;if(!t)return n;const e=an(Object.create(null),n);for(const s in t)e[s]=un(n[s],t[s]);return e}function Up(){return{app:null,config:{isNativeTag:ag,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yv=0;function Mv(n,t){return function(s,r=null){le(s)||(s=an({},s)),r!=null&&!Ne(r)&&(r=null);const a=Up(),l=new WeakSet,u=[];let h=!1;const d=a.app={_uid:yv++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:ix,get config(){return a.config},set config(p){},use(p,...m){return l.has(p)||(p&&le(p.install)?(l.add(p),p.install(d,...m)):le(p)&&(l.add(p),p(d,...m))),d},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),d},component(p,m){return m?(a.components[p]=m,d):a.components[p]},directive(p,m){return m?(a.directives[p]=m,d):a.directives[p]},mount(p,m,_){if(!h){const v=d._ceVNode||_n(s,r);return v.appContext=a,_===!0?_="svg":_===!1&&(_=void 0),n(v,p,_),h=!0,d._container=p,p.__vue_app__=d,Gu(v.component)}},onUnmount(p){u.push(p)},unmount(){h&&(fi(u,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(p,m){return a.provides[p]=m,d},runWithContext(p){const m=Ls;Ls=d;try{return p()}finally{Ls=m}}};return d}}let Ls=null;function ya(n,t){if(nn){let e=nn.provides;const s=nn.parent&&nn.parent.provides;s===e&&(e=nn.provides=Object.create(s)),e[n]=t}}function Kn(n,t,e=!1){const s=nn||Bn;if(s||Ls){const r=Ls?Ls._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&le(t)?t.call(s&&s.proxy):t}}function Sv(){return!!(nn||Bn||Ls)}const Op={},Np=()=>Object.create(Op),Fp=n=>Object.getPrototypeOf(n)===Op;function Ev(n,t,e,s=!1){const r={},a=Np();n.propsDefaults=Object.create(null),Bp(n,t,r,a);for(const l in n.propsOptions[0])l in r||(r[l]=void 0);e?n.props=s?r:gp(r):n.type.props?n.props=r:n.props=a,n.attrs=a}function bv(n,t,e,s){const{props:r,attrs:a,vnode:{patchFlag:l}}=n,u=xe(r),[h]=n.propsOptions;let d=!1;if((s||l>0)&&!(l&16)){if(l&8){const p=n.vnode.dynamicProps;for(let m=0;m<p.length;m++){let _=p[m];if(Ya(n.emitsOptions,_))continue;const v=t[_];if(h)if(Ee(a,_))v!==a[_]&&(a[_]=v,d=!0);else{const S=zn(_);r[S]=Ac(h,u,S,v,n,!1)}else v!==a[_]&&(a[_]=v,d=!0)}}}else{Bp(n,t,r,a)&&(d=!0);let p;for(const m in u)(!t||!Ee(t,m)&&((p=Bs(m))===m||!Ee(t,p)))&&(h?e&&(e[m]!==void 0||e[p]!==void 0)&&(r[m]=Ac(h,u,m,void 0,n,!0)):delete r[m]);if(a!==u)for(const m in a)(!t||!Ee(t,m))&&(delete a[m],d=!0)}d&&Ri(n.attrs,"set","")}function Bp(n,t,e,s){const[r,a]=n.propsOptions;let l=!1,u;if(t)for(let h in t){if(Jr(h))continue;const d=t[h];let p;r&&Ee(r,p=zn(h))?!a||!a.includes(p)?e[p]=d:(u||(u={}))[p]=d:Ya(n.emitsOptions,h)||(!(h in s)||d!==s[h])&&(s[h]=d,l=!0)}if(a){const h=xe(e),d=u||Ue;for(let p=0;p<a.length;p++){const m=a[p];e[m]=Ac(r,h,m,d[m],n,!Ee(d,m))}}return l}function Ac(n,t,e,s,r,a){const l=n[e];if(l!=null){const u=Ee(l,"default");if(u&&s===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&le(h)){const{propsDefaults:d}=r;if(e in d)s=d[e];else{const p=To(r);s=d[e]=h.call(null,t),p()}}else s=h;r.ce&&r.ce._setProp(e,s)}l[0]&&(a&&!u?s=!1:l[1]&&(s===""||s===Bs(e))&&(s=!0))}return s}const Tv=new WeakMap;function zp(n,t,e=!1){const s=e?Tv:t.propsCache,r=s.get(n);if(r)return r;const a=n.props,l={},u=[];let h=!1;if(!le(n)){const p=m=>{h=!0;const[_,v]=zp(m,t,!0);an(l,_),v&&u.push(...v)};!e&&t.mixins.length&&t.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}if(!a&&!h)return Ne(n)&&s.set(n,pr),pr;if(re(a))for(let p=0;p<a.length;p++){const m=zn(a[p]);af(m)&&(l[m]=Ue)}else if(a)for(const p in a){const m=zn(p);if(af(m)){const _=a[p],v=l[m]=re(_)||le(_)?{type:_}:an({},_),S=v.type;let b=!1,y=!0;if(re(S))for(let g=0;g<S.length;++g){const I=S[g],D=le(I)&&I.name;if(D==="Boolean"){b=!0;break}else D==="String"&&(y=!1)}else b=le(S)&&S.name==="Boolean";v[0]=b,v[1]=y,(b||Ee(v,"default"))&&u.push(m)}}const d=[l,u];return Ne(n)&&s.set(n,d),d}function af(n){return n[0]!=="$"&&!Jr(n)}const kp=n=>n[0]==="_"||n==="$stable",Hu=n=>re(n)?n.map(ri):[ri(n)],wv=(n,t,e)=>{if(t._n)return t;const s=wp((...r)=>Hu(t(...r)),e);return s._c=!1,s},Hp=(n,t,e)=>{const s=n._ctx;for(const r in n){if(kp(r))continue;const a=n[r];if(le(a))t[r]=wv(r,a,s);else if(a!=null){const l=Hu(a);t[r]=()=>l}}},Vp=(n,t)=>{const e=Hu(t);n.slots.default=()=>e},Gp=(n,t,e)=>{for(const s in t)(e||s!=="_")&&(n[s]=t[s])},Av=(n,t,e)=>{const s=n.slots=Np();if(n.vnode.shapeFlag&32){const r=t._;r?(Gp(s,t,e),e&&Kd(s,"_",r,!0)):Hp(t,s)}else t&&Vp(n,t)},Pv=(n,t,e)=>{const{vnode:s,slots:r}=n;let a=!0,l=Ue;if(s.shapeFlag&32){const u=t._;u?e&&u===1?a=!1:Gp(r,t,e):(a=!t.$stable,Hp(t,r)),l=t}else t&&(Vp(n,t),l={default:1});if(a)for(const u in r)!kp(u)&&l[u]==null&&delete r[u]},Pn=Vv;function Rv(n){return Cv(n)}function Cv(n,t){const e=Xa();e.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:l,createText:u,createComment:h,setText:d,setElementText:p,parentNode:m,nextSibling:_,setScopeId:v=ci,insertStaticContent:S}=n,b=(U,O,E,ft=null,rt=null,J=null,ut=void 0,Et=null,ct=!!O.dynamicChildren)=>{if(U===O)return;U&&!Hr(U,O)&&(ft=W(U),kt(U,rt,J,!0),U=null),O.patchFlag===-2&&(ct=!1,O.dynamicChildren=null);const{type:w,ref:M,shapeFlag:B}=O;switch(w){case ja:y(U,O,E,ft);break;case Us:g(U,O,E,ft);break;case Fl:U==null&&I(O,E,ft,ut);break;case Pi:lt(U,O,E,ft,rt,J,ut,Et,ct);break;default:B&1?k(U,O,E,ft,rt,J,ut,Et,ct):B&6?et(U,O,E,ft,rt,J,ut,Et,ct):(B&64||B&128)&&w.process(U,O,E,ft,rt,J,ut,Et,ct,yt)}M!=null&&rt&&Oa(M,U&&U.ref,J,O||U,!O)},y=(U,O,E,ft)=>{if(U==null)s(O.el=u(O.children),E,ft);else{const rt=O.el=U.el;O.children!==U.children&&d(rt,O.children)}},g=(U,O,E,ft)=>{U==null?s(O.el=h(O.children||""),E,ft):O.el=U.el},I=(U,O,E,ft)=>{[U.el,U.anchor]=S(U.children,O,E,ft,U.el,U.anchor)},D=({el:U,anchor:O},E,ft)=>{let rt;for(;U&&U!==O;)rt=_(U),s(U,E,ft),U=rt;s(O,E,ft)},A=({el:U,anchor:O})=>{let E;for(;U&&U!==O;)E=_(U),r(U),U=E;r(O)},k=(U,O,E,ft,rt,J,ut,Et,ct)=>{O.type==="svg"?ut="svg":O.type==="math"&&(ut="mathml"),U==null?H(O,E,ft,rt,J,ut,Et,ct):C(U,O,rt,J,ut,Et,ct)},H=(U,O,E,ft,rt,J,ut,Et)=>{let ct,w;const{props:M,shapeFlag:B,transition:Y,dirs:nt}=U;if(ct=U.el=l(U.type,J,M&&M.is,M),B&8?p(ct,U.children):B&16&&G(U.children,ct,null,ft,rt,Nl(U,J),ut,Et),nt&&ms(U,null,ft,"created"),N(ct,U,U.scopeId,ut,ft),M){for(const Rt in M)Rt!=="value"&&!Jr(Rt)&&a(ct,Rt,null,M[Rt],J,ft);"value"in M&&a(ct,"value",null,M.value,J),(w=M.onVnodeBeforeMount)&&ii(w,ft,U)}nt&&ms(U,null,ft,"beforeMount");const K=Lv(rt,Y);K&&Y.beforeEnter(ct),s(ct,O,E),((w=M&&M.onVnodeMounted)||K||nt)&&Pn(()=>{w&&ii(w,ft,U),K&&Y.enter(ct),nt&&ms(U,null,ft,"mounted")},rt)},N=(U,O,E,ft,rt)=>{if(E&&v(U,E),ft)for(let J=0;J<ft.length;J++)v(U,ft[J]);if(rt){let J=rt.subTree;if(O===J||jp(J.type)&&(J.ssContent===O||J.ssFallback===O)){const ut=rt.vnode;N(U,ut,ut.scopeId,ut.slotScopeIds,rt.parent)}}},G=(U,O,E,ft,rt,J,ut,Et,ct=0)=>{for(let w=ct;w<U.length;w++){const M=U[w]=Et?ji(U[w]):ri(U[w]);b(null,M,O,E,ft,rt,J,ut,Et)}},C=(U,O,E,ft,rt,J,ut)=>{const Et=O.el=U.el;let{patchFlag:ct,dynamicChildren:w,dirs:M}=O;ct|=U.patchFlag&16;const B=U.props||Ue,Y=O.props||Ue;let nt;if(E&&_s(E,!1),(nt=Y.onVnodeBeforeUpdate)&&ii(nt,E,O,U),M&&ms(O,U,E,"beforeUpdate"),E&&_s(E,!0),(B.innerHTML&&Y.innerHTML==null||B.textContent&&Y.textContent==null)&&p(Et,""),w?R(U.dynamicChildren,w,Et,E,ft,Nl(O,rt),J):ut||V(U,O,Et,null,E,ft,Nl(O,rt),J,!1),ct>0){if(ct&16)z(Et,B,Y,E,rt);else if(ct&2&&B.class!==Y.class&&a(Et,"class",null,Y.class,rt),ct&4&&a(Et,"style",B.style,Y.style,rt),ct&8){const K=O.dynamicProps;for(let Rt=0;Rt<K.length;Rt++){const bt=K[Rt],Gt=B[bt],Wt=Y[bt];(Wt!==Gt||bt==="value")&&a(Et,bt,Gt,Wt,rt,E)}}ct&1&&U.children!==O.children&&p(Et,O.children)}else!ut&&w==null&&z(Et,B,Y,E,rt);((nt=Y.onVnodeUpdated)||M)&&Pn(()=>{nt&&ii(nt,E,O,U),M&&ms(O,U,E,"updated")},ft)},R=(U,O,E,ft,rt,J,ut)=>{for(let Et=0;Et<O.length;Et++){const ct=U[Et],w=O[Et],M=ct.el&&(ct.type===Pi||!Hr(ct,w)||ct.shapeFlag&70)?m(ct.el):E;b(ct,w,M,null,ft,rt,J,ut,!0)}},z=(U,O,E,ft,rt)=>{if(O!==E){if(O!==Ue)for(const J in O)!Jr(J)&&!(J in E)&&a(U,J,O[J],null,rt,ft);for(const J in E){if(Jr(J))continue;const ut=E[J],Et=O[J];ut!==Et&&J!=="value"&&a(U,J,Et,ut,rt,ft)}"value"in E&&a(U,"value",O.value,E.value,rt)}},lt=(U,O,E,ft,rt,J,ut,Et,ct)=>{const w=O.el=U?U.el:u(""),M=O.anchor=U?U.anchor:u("");let{patchFlag:B,dynamicChildren:Y,slotScopeIds:nt}=O;nt&&(Et=Et?Et.concat(nt):nt),U==null?(s(w,E,ft),s(M,E,ft),G(O.children||[],E,M,rt,J,ut,Et,ct)):B>0&&B&64&&Y&&U.dynamicChildren?(R(U.dynamicChildren,Y,E,rt,J,ut,Et),(O.key!=null||rt&&O===rt.subTree)&&Wp(U,O,!0)):V(U,O,E,M,rt,J,ut,Et,ct)},et=(U,O,E,ft,rt,J,ut,Et,ct)=>{O.slotScopeIds=Et,U==null?O.shapeFlag&512?rt.ctx.activate(O,E,ft,ut,ct):mt(O,E,ft,rt,J,ut,ct):vt(U,O,ct)},mt=(U,O,E,ft,rt,J,ut)=>{const Et=U.component=Kv(U,ft,rt);if(Pp(U)&&(Et.ctx.renderer=yt),$v(Et,!1,ut),Et.asyncDep){if(rt&&rt.registerDep(Et,Q,ut),!U.el){const ct=Et.subTree=_n(Us);g(null,ct,O,E)}}else Q(Et,U,O,E,rt,J,ut)},vt=(U,O,E)=>{const ft=O.component=U.component;if(kv(U,O,E))if(ft.asyncDep&&!ft.asyncResolved){it(ft,O,E);return}else ft.next=O,ft.update();else O.el=U.el,ft.vnode=O},Q=(U,O,E,ft,rt,J,ut)=>{const Et=()=>{if(U.isMounted){let{next:B,bu:Y,u:nt,parent:K,vnode:Rt}=U;{const Dt=Xp(U);if(Dt){B&&(B.el=Rt.el,it(U,B,ut)),Dt.asyncDep.then(()=>{U.isUnmounted||Et()});return}}let bt=B,Gt;_s(U,!1),B?(B.el=Rt.el,it(U,B,ut)):B=Rt,Y&&Cl(Y),(Gt=B.props&&B.props.onVnodeBeforeUpdate)&&ii(Gt,K,B,Rt),_s(U,!0);const Wt=cf(U),Tt=U.subTree;U.subTree=Wt,b(Tt,Wt,m(Tt.el),W(Tt),U,rt,J),B.el=Wt.el,bt===null&&Hv(U,Wt.el),nt&&Pn(nt,rt),(Gt=B.props&&B.props.onVnodeUpdated)&&Pn(()=>ii(Gt,K,B,Rt),rt)}else{let B;const{el:Y,props:nt}=O,{bm:K,m:Rt,parent:bt,root:Gt,type:Wt}=U,Tt=eo(O);_s(U,!1),K&&Cl(K),!Tt&&(B=nt&&nt.onVnodeBeforeMount)&&ii(B,bt,O),_s(U,!0);{Gt.ce&&Gt.ce._injectChildStyle(Wt);const Dt=U.subTree=cf(U);b(null,Dt,E,ft,U,rt,J),O.el=Dt.el}if(Rt&&Pn(Rt,rt),!Tt&&(B=nt&&nt.onVnodeMounted)){const Dt=O;Pn(()=>ii(B,bt,Dt),rt)}(O.shapeFlag&256||bt&&eo(bt.vnode)&&bt.vnode.shapeFlag&256)&&U.a&&Pn(U.a,rt),U.isMounted=!0,O=E=ft=null}};U.scope.on();const ct=U.effect=new ip(Et);U.scope.off();const w=U.update=ct.run.bind(ct),M=U.job=ct.runIfDirty.bind(ct);M.i=U,M.id=U.uid,ct.scheduler=()=>Bu(M),_s(U,!0),w()},it=(U,O,E)=>{O.component=U;const ft=U.vnode.props;U.vnode=O,U.next=null,bv(U,O.props,ft,E),Pv(U,O.children,E),as(),tf(U),ls()},V=(U,O,E,ft,rt,J,ut,Et,ct=!1)=>{const w=U&&U.children,M=U?U.shapeFlag:0,B=O.children,{patchFlag:Y,shapeFlag:nt}=O;if(Y>0){if(Y&128){_t(w,B,E,ft,rt,J,ut,Et,ct);return}else if(Y&256){Ct(w,B,E,ft,rt,J,ut,Et,ct);return}}nt&8?(M&16&&Mt(w,rt,J),B!==w&&p(E,B)):M&16?nt&16?_t(w,B,E,ft,rt,J,ut,Et,ct):Mt(w,rt,J,!0):(M&8&&p(E,""),nt&16&&G(B,E,ft,rt,J,ut,Et,ct))},Ct=(U,O,E,ft,rt,J,ut,Et,ct)=>{U=U||pr,O=O||pr;const w=U.length,M=O.length,B=Math.min(w,M);let Y;for(Y=0;Y<B;Y++){const nt=O[Y]=ct?ji(O[Y]):ri(O[Y]);b(U[Y],nt,E,null,rt,J,ut,Et,ct)}w>M?Mt(U,rt,J,!0,!1,B):G(O,E,ft,rt,J,ut,Et,ct,B)},_t=(U,O,E,ft,rt,J,ut,Et,ct)=>{let w=0;const M=O.length;let B=U.length-1,Y=M-1;for(;w<=B&&w<=Y;){const nt=U[w],K=O[w]=ct?ji(O[w]):ri(O[w]);if(Hr(nt,K))b(nt,K,E,null,rt,J,ut,Et,ct);else break;w++}for(;w<=B&&w<=Y;){const nt=U[B],K=O[Y]=ct?ji(O[Y]):ri(O[Y]);if(Hr(nt,K))b(nt,K,E,null,rt,J,ut,Et,ct);else break;B--,Y--}if(w>B){if(w<=Y){const nt=Y+1,K=nt<M?O[nt].el:ft;for(;w<=Y;)b(null,O[w]=ct?ji(O[w]):ri(O[w]),E,K,rt,J,ut,Et,ct),w++}}else if(w>Y)for(;w<=B;)kt(U[w],rt,J,!0),w++;else{const nt=w,K=w,Rt=new Map;for(w=K;w<=Y;w++){const Lt=O[w]=ct?ji(O[w]):ri(O[w]);Lt.key!=null&&Rt.set(Lt.key,w)}let bt,Gt=0;const Wt=Y-K+1;let Tt=!1,Dt=0;const Yt=new Array(Wt);for(w=0;w<Wt;w++)Yt[w]=0;for(w=nt;w<=B;w++){const Lt=U[w];if(Gt>=Wt){kt(Lt,rt,J,!0);continue}let ie;if(Lt.key!=null)ie=Rt.get(Lt.key);else for(bt=K;bt<=Y;bt++)if(Yt[bt-K]===0&&Hr(Lt,O[bt])){ie=bt;break}ie===void 0?kt(Lt,rt,J,!0):(Yt[ie-K]=w+1,ie>=Dt?Dt=ie:Tt=!0,b(Lt,O[ie],E,null,rt,J,ut,Et,ct),Gt++)}const $t=Tt?Dv(Yt):pr;for(bt=$t.length-1,w=Wt-1;w>=0;w--){const Lt=K+w,ie=O[Lt],te=Lt+1<M?O[Lt+1].el:ft;Yt[w]===0?b(null,ie,E,te,rt,J,ut,Et,ct):Tt&&(bt<0||w!==$t[bt]?Pt(ie,E,te,2):bt--)}}},Pt=(U,O,E,ft,rt=null)=>{const{el:J,type:ut,transition:Et,children:ct,shapeFlag:w}=U;if(w&6){Pt(U.component.subTree,O,E,ft);return}if(w&128){U.suspense.move(O,E,ft);return}if(w&64){ut.move(U,O,E,yt);return}if(ut===Pi){s(J,O,E);for(let B=0;B<ct.length;B++)Pt(ct[B],O,E,ft);s(U.anchor,O,E);return}if(ut===Fl){D(U,O,E);return}if(ft!==2&&w&1&&Et)if(ft===0)Et.beforeEnter(J),s(J,O,E),Pn(()=>Et.enter(J),rt);else{const{leave:B,delayLeave:Y,afterLeave:nt}=Et,K=()=>s(J,O,E),Rt=()=>{B(J,()=>{K(),nt&&nt()})};Y?Y(J,K,Rt):Rt()}else s(J,O,E)},kt=(U,O,E,ft=!1,rt=!1)=>{const{type:J,props:ut,ref:Et,children:ct,dynamicChildren:w,shapeFlag:M,patchFlag:B,dirs:Y,cacheIndex:nt}=U;if(B===-2&&(rt=!1),Et!=null&&Oa(Et,null,E,U,!0),nt!=null&&(O.renderCache[nt]=void 0),M&256){O.ctx.deactivate(U);return}const K=M&1&&Y,Rt=!eo(U);let bt;if(Rt&&(bt=ut&&ut.onVnodeBeforeUnmount)&&ii(bt,O,U),M&6)gt(U.component,E,ft);else{if(M&128){U.suspense.unmount(E,ft);return}K&&ms(U,null,O,"beforeUnmount"),M&64?U.type.remove(U,O,E,yt,ft):w&&!w.hasOnce&&(J!==Pi||B>0&&B&64)?Mt(w,O,E,!1,!0):(J===Pi&&B&384||!rt&&M&16)&&Mt(ct,O,E),ft&&Qt(U)}(Rt&&(bt=ut&&ut.onVnodeUnmounted)||K)&&Pn(()=>{bt&&ii(bt,O,U),K&&ms(U,null,O,"unmounted")},E)},Qt=U=>{const{type:O,el:E,anchor:ft,transition:rt}=U;if(O===Pi){at(E,ft);return}if(O===Fl){A(U);return}const J=()=>{r(E),rt&&!rt.persisted&&rt.afterLeave&&rt.afterLeave()};if(U.shapeFlag&1&&rt&&!rt.persisted){const{leave:ut,delayLeave:Et}=rt,ct=()=>ut(E,J);Et?Et(U.el,J,ct):ct()}else J()},at=(U,O)=>{let E;for(;U!==O;)E=_(U),r(U),U=E;r(O)},gt=(U,O,E)=>{const{bum:ft,scope:rt,job:J,subTree:ut,um:Et,m:ct,a:w}=U;lf(ct),lf(w),ft&&Cl(ft),rt.stop(),J&&(J.flags|=8,kt(ut,U,O,E)),Et&&Pn(Et,O),Pn(()=>{U.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&U.asyncDep&&!U.asyncResolved&&U.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Mt=(U,O,E,ft=!1,rt=!1,J=0)=>{for(let ut=J;ut<U.length;ut++)kt(U[ut],O,E,ft,rt)},W=U=>{if(U.shapeFlag&6)return W(U.component.subTree);if(U.shapeFlag&128)return U.suspense.next();const O=_(U.anchor||U.el),E=O&&O[Jg];return E?_(E):O};let dt=!1;const St=(U,O,E)=>{U==null?O._vnode&&kt(O._vnode,null,null,!0):b(O._vnode||null,U,O,null,null,null,E),O._vnode=U,dt||(dt=!0,tf(),Ep(),dt=!1)},yt={p:b,um:kt,m:Pt,r:Qt,mt,mc:G,pc:V,pbc:R,n:W,o:n};return{render:St,hydrate:void 0,createApp:Mv(St)}}function Nl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function _s({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Lv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Wp(n,t,e=!1){const s=n.children,r=t.children;if(re(s)&&re(r))for(let a=0;a<s.length;a++){const l=s[a];let u=r[a];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=r[a]=ji(r[a]),u.el=l.el),!e&&u.patchFlag!==-2&&Wp(l,u)),u.type===ja&&(u.el=l.el)}}function Dv(n){const t=n.slice(),e=[0];let s,r,a,l,u;const h=n.length;for(s=0;s<h;s++){const d=n[s];if(d!==0){if(r=e[e.length-1],n[r]<d){t[s]=r,e.push(s);continue}for(a=0,l=e.length-1;a<l;)u=a+l>>1,n[e[u]]<d?a=u+1:l=u;d<n[e[a]]&&(a>0&&(t[s]=e[a-1]),e[a]=s)}}for(a=e.length,l=e[a-1];a-- >0;)e[a]=l,l=t[l];return e}function Xp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xp(t)}function lf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Iv=Symbol.for("v-scx"),Uv=()=>Kn(Iv);function io(n,t,e){return Zp(n,t,e)}function Zp(n,t,e=Ue){const{immediate:s,deep:r,flush:a,once:l}=e,u=an({},e),h=t&&s||!t&&a!=="post";let d;if(fo){if(a==="sync"){const v=Uv();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!h){const v=()=>{};return v.stop=ci,v.resume=ci,v.pause=ci,v}}const p=nn;u.call=(v,S,b)=>fi(v,p,S,b);let m=!1;a==="post"?u.scheduler=v=>{Pn(v,p&&p.suspense)}:a!=="sync"&&(m=!0,u.scheduler=(v,S)=>{S?v():Bu(v)}),u.augmentJob=v=>{t&&(v.flags|=4),m&&(v.flags|=2,p&&(v.id=p.uid,v.i=p))};const _=Yg(n,t,u);return fo&&(d?d.push(_):h&&_()),_}function Ov(n,t,e){const s=this.proxy,r=Ze(n)?n.includes(".")?qp(s,n):()=>s[n]:n.bind(s,s);let a;le(t)?a=t:(a=t.handler,e=t);const l=To(this),u=Zp(r,a.bind(s),e);return l(),u}function qp(n,t){const e=t.split(".");return()=>{let s=n;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}const Nv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${zn(t)}Modifiers`]||n[`${Bs(t)}Modifiers`];function Fv(n,t,...e){if(n.isUnmounted)return;const s=n.vnode.props||Ue;let r=e;const a=t.startsWith("update:"),l=a&&Nv(s,t.slice(7));l&&(l.trim&&(r=e.map(p=>Ze(p)?p.trim():p)),l.number&&(r=e.map(fg)));let u,h=s[u=Rl(t)]||s[u=Rl(zn(t))];!h&&a&&(h=s[u=Rl(Bs(t))]),h&&fi(h,n,6,r);const d=s[u+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[u])return;n.emitted[u]=!0,fi(d,n,6,r)}}function Yp(n,t,e=!1){const s=t.emitsCache,r=s.get(n);if(r!==void 0)return r;const a=n.emits;let l={},u=!1;if(!le(n)){const h=d=>{const p=Yp(d,t,!0);p&&(u=!0,an(l,p))};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}return!a&&!u?(Ne(n)&&s.set(n,null),null):(re(a)?a.forEach(h=>l[h]=null):an(l,a),Ne(n)&&s.set(n,l),l)}function Ya(n,t){return!n||!Ha(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(n,t[0].toLowerCase()+t.slice(1))||Ee(n,Bs(t))||Ee(n,t))}function cf(n){const{type:t,vnode:e,proxy:s,withProxy:r,propsOptions:[a],slots:l,attrs:u,emit:h,render:d,renderCache:p,props:m,data:_,setupState:v,ctx:S,inheritAttrs:b}=n,y=Ua(n);let g,I;try{if(e.shapeFlag&4){const A=r||s,k=A;g=ri(d.call(k,A,p,m,v,_,S)),I=u}else{const A=t;g=ri(A.length>1?A(m,{attrs:u,slots:l,emit:h}):A(m,null)),I=t.props?u:Bv(u)}}catch(A){so.length=0,Za(A,n,1),g=_n(Us)}let D=g;if(I&&b!==!1){const A=Object.keys(I),{shapeFlag:k}=D;A.length&&k&7&&(a&&A.some(Eu)&&(I=zv(I,a)),D=yr(D,I,!1,!0))}return e.dirs&&(D=yr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(e.dirs):e.dirs),e.transition&&zu(D,e.transition),g=D,Ua(y),g}const Bv=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ha(e))&&((t||(t={}))[e]=n[e]);return t},zv=(n,t)=>{const e={};for(const s in n)(!Eu(s)||!(s.slice(9)in t))&&(e[s]=n[s]);return e};function kv(n,t,e){const{props:s,children:r,component:a}=n,{props:l,children:u,patchFlag:h}=t,d=a.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&h>=0){if(h&1024)return!0;if(h&16)return s?uf(s,l,d):!!l;if(h&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const _=p[m];if(l[_]!==s[_]&&!Ya(d,_))return!0}}}else return(r||u)&&(!u||!u.$stable)?!0:s===l?!1:s?l?uf(s,l,d):!0:!!l;return!1}function uf(n,t,e){const s=Object.keys(t);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(t[a]!==n[a]&&!Ya(e,a))return!0}return!1}function Hv({vnode:n,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=t.vnode).el=e,t=t.parent;else break}}const jp=n=>n.__isSuspense;function Vv(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):$g(n)}const Pi=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),Us=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),so=[];let Rn=null;function es(n=!1){so.push(Rn=n?null:[])}function Gv(){so.pop(),Rn=so[so.length-1]||null}let ho=1;function hf(n,t=!1){ho+=n,n<0&&Rn&&t&&(Rn.hasOnce=!0)}function Kp(n){return n.dynamicChildren=ho>0?Rn||pr:null,Gv(),ho>0&&Rn&&Rn.push(n),n}function Ds(n,t,e,s,r,a){return Kp(dn(n,t,e,s,r,a,!0))}function Wv(n,t,e,s,r){return Kp(_n(n,t,e,s,r,!0))}function Fa(n){return n?n.__v_isVNode===!0:!1}function Hr(n,t){return n.type===t.type&&n.key===t.key}const $p=({key:n})=>n??null,Ma=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ze(n)||ke(n)||le(n)?{i:Bn,r:n,k:t,f:!!e}:n:null);function dn(n,t=null,e=null,s=0,r=null,a=n===Pi?0:1,l=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&$p(t),ref:t&&Ma(t),scopeId:Tp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bn};return u?(Vu(h,e),a&128&&n.normalize(h)):e&&(h.shapeFlag|=Ze(e)?8:16),ho>0&&!l&&Rn&&(h.patchFlag>0||a&6)&&h.patchFlag!==32&&Rn.push(h),h}const _n=Xv;function Xv(n,t=null,e=null,s=0,r=null,a=!1){if((!n||n===fv)&&(n=Us),Fa(n)){const u=yr(n,t,!0);return e&&Vu(u,e),ho>0&&!a&&Rn&&(u.shapeFlag&6?Rn[Rn.indexOf(n)]=u:Rn.push(u)),u.patchFlag=-2,u}if(nx(n)&&(n=n.__vccOpts),t){t=Zv(t);let{class:u,style:h}=t;u&&!Ze(u)&&(t.class=Au(u)),Ne(h)&&(Ou(h)&&!re(h)&&(h=an({},h)),t.style=wu(h))}const l=Ze(n)?1:jp(n)?128:Qg(n)?64:Ne(n)?4:le(n)?2:0;return dn(n,t,e,s,r,l,a,!0)}function Zv(n){return n?Ou(n)||Fp(n)?an({},n):n:null}function yr(n,t,e=!1,s=!1){const{props:r,ref:a,patchFlag:l,children:u,transition:h}=n,d=t?qv(r||{},t):r,p={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&$p(d),ref:t&&t.ref?e&&a?re(a)?a.concat(Ma(t)):[a,Ma(t)]:Ma(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:u,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Pi?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:h,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yr(n.ssContent),ssFallback:n.ssFallback&&yr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return h&&s&&zu(p,h.clone(p)),p}function Jp(n=" ",t=0){return _n(ja,null,n,t)}function ff(n="",t=!1){return t?(es(),Wv(Us,null,n)):_n(Us,null,n)}function ri(n){return n==null||typeof n=="boolean"?_n(Us):re(n)?_n(Pi,null,n.slice()):Fa(n)?ji(n):_n(ja,null,String(n))}function ji(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yr(n)}function Vu(n,t){let e=0;const{shapeFlag:s}=n;if(t==null)t=null;else if(re(t))e=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Vu(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Fp(t)?t._ctx=Bn:r===3&&Bn&&(Bn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else le(t)?(t={default:t,_ctx:Bn},e=32):(t=String(t),s&64?(e=16,t=[Jp(t)]):e=8);n.children=t,n.shapeFlag|=e}function qv(...n){const t={};for(let e=0;e<n.length;e++){const s=n[e];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Au([t.class,s.class]));else if(r==="style")t.style=wu([t.style,s.style]);else if(Ha(r)){const a=t[r],l=s[r];l&&a!==l&&!(re(a)&&a.includes(l))&&(t[r]=a?[].concat(a,l):l)}else r!==""&&(t[r]=s[r])}return t}function ii(n,t,e,s=null){fi(n,t,7,[e,s])}const Yv=Up();let jv=0;function Kv(n,t,e){const s=n.type,r=(t?t.appContext:n.appContext)||Yv,a={uid:jv++,vnode:n,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(s,r),emitsOptions:Yp(s,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Fv.bind(null,a),n.ce&&n.ce(a),a}let nn=null,Ba,Pc;{const n=Xa(),t=(e,s)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(s),a=>{r.length>1?r.forEach(l=>l(a)):r[0](a)}};Ba=t("__VUE_INSTANCE_SETTERS__",e=>nn=e),Pc=t("__VUE_SSR_SETTERS__",e=>fo=e)}const To=n=>{const t=nn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(t)}},df=()=>{nn&&nn.scope.off(),Ba(null)};function Qp(n){return n.vnode.shapeFlag&4}let fo=!1;function $v(n,t=!1,e=!1){t&&Pc(t);const{props:s,children:r}=n.vnode,a=Qp(n);Ev(n,s,a,t),Av(n,r,e);const l=a?Jv(n,t):void 0;return t&&Pc(!1),l}function Jv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pv);const{setup:s}=e;if(s){as();const r=n.setupContext=s.length>1?tx(n):null,a=To(n),l=Eo(s,n,0,[n.props,r]),u=qd(l);if(ls(),a(),(u||n.sp)&&!eo(n)&&Ap(n),u){if(l.then(df,df),t)return l.then(h=>{pf(n,h)}).catch(h=>{Za(h,n,0)});n.asyncDep=l}else pf(n,l)}else tm(n)}function pf(n,t,e){le(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ne(t)&&(n.setupState=yp(t)),tm(n)}function tm(n,t,e){const s=n.type;n.render||(n.render=s.render||ci);{const r=To(n);as();try{mv(n)}finally{ls(),r()}}}const Qv={get(n,t){return on(n,"get",""),n[t]}};function tx(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Qv),slots:n.slots,emit:n.emit,expose:t}}function Gu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yp(Nu(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in no)return no[e](n)},has(t,e){return e in t||e in no}})):n.proxy}function ex(n,t=!0){return le(n)?n.displayName||n.name:n.name||t&&n.__name}function nx(n){return le(n)&&"__vccOpts"in n}const Fn=(n,t)=>Zg(n,t,fo);function em(n,t,e){const s=arguments.length;return s===2?Ne(t)&&!re(t)?Fa(t)?_n(n,null,[t]):_n(n,t):_n(n,null,t):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&Fa(e)&&(e=[e]),_n(n,t,e))}const ix="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const mf=typeof window<"u"&&window.trustedTypes;if(mf)try{Rc=mf.createPolicy("vue",{createHTML:n=>n})}catch{}const nm=Rc?n=>Rc.createHTML(n):n=>n,sx="http://www.w3.org/2000/svg",rx="http://www.w3.org/1998/Math/MathML",Ai=typeof document<"u"?document:null,_f=Ai&&Ai.createElement("template"),ox={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,s)=>{const r=t==="svg"?Ai.createElementNS(sx,n):t==="mathml"?Ai.createElementNS(rx,n):e?Ai.createElement(n,{is:e}):Ai.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Ai.createTextNode(n),createComment:n=>Ai.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ai.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,s,r,a){const l=e?e.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===a||!(r=r.nextSibling)););else{_f.innerHTML=nm(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const u=_f.content;if(s==="svg"||s==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}t.insertBefore(u,e)}return[l?l.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ax=Symbol("_vtc");function lx(n,t,e){const s=n[ax];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const gf=Symbol("_vod"),cx=Symbol("_vsh"),ux=Symbol(""),hx=/(^|;)\s*display\s*:/;function fx(n,t,e){const s=n.style,r=Ze(e);let a=!1;if(e&&!r){if(t)if(Ze(t))for(const l of t.split(";")){const u=l.slice(0,l.indexOf(":")).trim();e[u]==null&&Sa(s,u,"")}else for(const l in t)e[l]==null&&Sa(s,l,"");for(const l in e)l==="display"&&(a=!0),Sa(s,l,e[l])}else if(r){if(t!==e){const l=s[ux];l&&(e+=";"+l),s.cssText=e,a=hx.test(e)}}else t&&n.removeAttribute("style");gf in n&&(n[gf]=a?s.display:"",n[cx]&&(s.display="none"))}const vf=/\s*!important$/;function Sa(n,t,e){if(re(e))e.forEach(s=>Sa(n,t,s));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const s=dx(n,t);vf.test(e)?n.setProperty(Bs(s),e.replace(vf,""),"important"):n[s]=e}}const xf=["Webkit","Moz","ms"],Bl={};function dx(n,t){const e=Bl[t];if(e)return e;let s=zn(t);if(s!=="filter"&&s in n)return Bl[t]=s;s=Wa(s);for(let r=0;r<xf.length;r++){const a=xf[r]+s;if(a in n)return Bl[t]=a}return t}const yf="http://www.w3.org/1999/xlink";function Mf(n,t,e,s,r,a=vg(t)){s&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(yf,t.slice(6,t.length)):n.setAttributeNS(yf,t,e):e==null||a&&!$d(e)?n.removeAttribute(t):n.setAttribute(t,a?"":os(e)?String(e):e)}function Sf(n,t,e,s,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?nm(e):e);return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?n.getAttribute("value")||"":n.value,h=e==null?n.type==="checkbox"?"on":"":String(e);(u!==h||!("_value"in n))&&(n.value=h),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const u=typeof n[t];u==="boolean"?e=$d(e):e==null&&u==="string"?(e="",l=!0):u==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(r||t)}function px(n,t,e,s){n.addEventListener(t,e,s)}function mx(n,t,e,s){n.removeEventListener(t,e,s)}const Ef=Symbol("_vei");function _x(n,t,e,s,r=null){const a=n[Ef]||(n[Ef]={}),l=a[t];if(s&&l)l.value=s;else{const[u,h]=gx(t);if(s){const d=a[t]=yx(s,r);px(n,u,d,h)}else l&&(mx(n,u,l,h),a[t]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function gx(n){let t;if(bf.test(n)){t={};let s;for(;s=n.match(bf);)n=n.slice(0,n.length-s[0].length),t[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bs(n.slice(2)),t]}let zl=0;const vx=Promise.resolve(),xx=()=>zl||(vx.then(()=>zl=0),zl=Date.now());function yx(n,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;fi(Mx(s,e.value),t,5,[s])};return e.value=n,e.attached=xx(),e}function Mx(n,t){if(re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Tf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sx=(n,t,e,s,r,a)=>{const l=r==="svg";t==="class"?lx(n,s,l):t==="style"?fx(n,e,s):Ha(t)?Eu(t)||_x(n,t,e,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ex(n,t,s,l))?(Sf(n,t,s),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mf(n,t,s,l,a,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ze(s))?Sf(n,zn(t),s,a,t):(t==="true-value"?n._trueValue=s:t==="false-value"&&(n._falseValue=s),Mf(n,t,s,l))};function Ex(n,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in n&&Tf(t)&&le(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Tf(t)&&Ze(e)?!1:t in n}const bx=an({patchProp:Sx},ox);let wf;function Tx(){return wf||(wf=Rv(bx))}const wx=(...n)=>{const t=Tx().createApp(...n),{mount:e}=t;return t.mount=s=>{const r=Px(s);if(!r)return;const a=t._component;!le(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=e(r,!1,Ax(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function Ax(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Px(n){return Ze(n)?document.querySelector(n):n}const Rx=(n,t)=>{const e=n.__vccOpts||n;for(const[s,r]of t)e[s]=r;return e},Cx={},Lx={class:""},Dx={class:""};function Ix(n,t){const e=Lp("router-view");return es(),Ds("div",Lx,[dn("main",Dx,[_n(e)])])}const Ux=Rx(Cx,[["render",Ix]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hr=typeof document<"u";function im(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ox(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&im(n.default)}const Se=Object.assign;function kl(n,t){const e={};for(const s in t){const r=t[s];e[s]=Jn(r)?r.map(n):n(r)}return e}const ro=()=>{},Jn=Array.isArray,sm=/#/g,Nx=/&/g,Fx=/\//g,Bx=/=/g,zx=/\?/g,rm=/\+/g,kx=/%5B/g,Hx=/%5D/g,om=/%5E/g,Vx=/%60/g,am=/%7B/g,Gx=/%7C/g,lm=/%7D/g,Wx=/%20/g;function Wu(n){return encodeURI(""+n).replace(Gx,"|").replace(kx,"[").replace(Hx,"]")}function Xx(n){return Wu(n).replace(am,"{").replace(lm,"}").replace(om,"^")}function Cc(n){return Wu(n).replace(rm,"%2B").replace(Wx,"+").replace(sm,"%23").replace(Nx,"%26").replace(Vx,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function Zx(n){return Cc(n).replace(Bx,"%3D")}function qx(n){return Wu(n).replace(sm,"%23").replace(zx,"%3F")}function Yx(n){return n==null?"":qx(n).replace(Fx,"%2F")}function po(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const jx=/\/$/,Kx=n=>n.replace(jx,"");function Hl(n,t,e="/"){let s,r={},a="",l="";const u=t.indexOf("#");let h=t.indexOf("?");return u<h&&u>=0&&(h=-1),h>-1&&(s=t.slice(0,h),a=t.slice(h+1,u>-1?u:t.length),r=n(a)),u>-1&&(s=s||t.slice(0,u),l=t.slice(u,t.length)),s=t0(s??t,e),{fullPath:s+(a&&"?")+a+l,path:s,query:r,hash:po(l)}}function $x(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Af(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Jx(n,t,e){const s=t.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&Mr(t.matched[s],e.matched[r])&&cm(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Mr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function cm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Qx(n[e],t[e]))return!1;return!0}function Qx(n,t){return Jn(n)?Pf(n,t):Jn(t)?Pf(t,n):n===t}function Pf(n,t){return Jn(t)?n.length===t.length&&n.every((e,s)=>e===t[s]):n.length===1&&n[0]===t}function t0(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let a=e.length-1,l,u;for(l=0;l<s.length;l++)if(u=s[l],u!==".")if(u==="..")a>1&&a--;else break;return e.slice(0,a).join("/")+"/"+s.slice(l).join("/")}const ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mo;(function(n){n.pop="pop",n.push="push"})(mo||(mo={}));var oo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(oo||(oo={}));function e0(n){if(!n)if(hr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Kx(n)}const n0=/^[^#]+#/;function i0(n,t){return n.replace(n0,"#")+t}function s0(n,t){const e=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:t.behavior,left:s.left-e.left-(t.left||0),top:s.top-e.top-(t.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function r0(n){let t;if("el"in n){const e=n.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=s0(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Rf(n,t){return(history.state?history.state.position-t:-1)+n}const Lc=new Map;function o0(n,t){Lc.set(n,t)}function a0(n){const t=Lc.get(n);return Lc.delete(n),t}let l0=()=>location.protocol+"//"+location.host;function um(n,t){const{pathname:e,search:s,hash:r}=t,a=n.indexOf("#");if(a>-1){let u=r.includes(n.slice(a))?n.slice(a).length:1,h=r.slice(u);return h[0]!=="/"&&(h="/"+h),Af(h,"")}return Af(e,n)+s+r}function c0(n,t,e,s){let r=[],a=[],l=null;const u=({state:_})=>{const v=um(n,location),S=e.value,b=t.value;let y=0;if(_){if(e.value=v,t.value=_,l&&l===S){l=null;return}y=b?_.position-b.position:0}else s(v);r.forEach(g=>{g(e.value,S,{delta:y,type:mo.pop,direction:y?y>0?oo.forward:oo.back:oo.unknown})})};function h(){l=e.value}function d(_){r.push(_);const v=()=>{const S=r.indexOf(_);S>-1&&r.splice(S,1)};return a.push(v),v}function p(){const{history:_}=window;_.state&&_.replaceState(Se({},_.state,{scroll:Ka()}),"")}function m(){for(const _ of a)_();a=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:m}}function Cf(n,t,e,s=!1,r=!1){return{back:n,current:t,forward:e,replaced:s,position:window.history.length,scroll:r?Ka():null}}function u0(n){const{history:t,location:e}=window,s={value:um(n,e)},r={value:t.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(h,d,p){const m=n.indexOf("#"),_=m>-1?(e.host&&document.querySelector("base")?n:n.slice(m))+h:l0()+n+h;try{t[p?"replaceState":"pushState"](d,"",_),r.value=d}catch(v){console.error(v),e[p?"replace":"assign"](_)}}function l(h,d){const p=Se({},t.state,Cf(r.value.back,h,r.value.forward,!0),d,{position:r.value.position});a(h,p,!0),s.value=h}function u(h,d){const p=Se({},r.value,t.state,{forward:h,scroll:Ka()});a(p.current,p,!0);const m=Se({},Cf(s.value,h,null),{position:p.position+1},d);a(h,m,!1),s.value=h}return{location:s,state:r,push:u,replace:l}}function h0(n){n=e0(n);const t=u0(n),e=c0(n,t.state,t.location,t.replace);function s(a,l=!0){l||e.pauseListeners(),history.go(a)}const r=Se({location:"",base:n,go:s,createHref:i0.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function f0(n){return typeof n=="string"||n&&typeof n=="object"}function hm(n){return typeof n=="string"||typeof n=="symbol"}const fm=Symbol("");var Lf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Lf||(Lf={}));function Sr(n,t){return Se(new Error,{type:n,[fm]:!0},t)}function yi(n,t){return n instanceof Error&&fm in n&&(t==null||!!(n.type&t))}const Df="[^/]+?",d0={sensitive:!1,strict:!1,start:!0,end:!0},p0=/[.+*?^${}()[\]/\\]/g;function m0(n,t){const e=Se({},d0,t),s=[];let r=e.start?"^":"";const a=[];for(const d of n){const p=d.length?[]:[90];e.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const _=d[m];let v=40+(e.sensitive?.25:0);if(_.type===0)m||(r+="/"),r+=_.value.replace(p0,"\\$&"),v+=40;else if(_.type===1){const{value:S,repeatable:b,optional:y,regexp:g}=_;a.push({name:S,repeatable:b,optional:y});const I=g||Df;if(I!==Df){v+=10;try{new RegExp(`(${I})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${S}" (${I}): `+A.message)}}let D=b?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;m||(D=y&&d.length<2?`(?:/${D})`:"/"+D),y&&(D+="?"),r+=D,v+=20,y&&(v+=-8),b&&(v+=-20),I===".*"&&(v+=-50)}p.push(v)}s.push(p)}if(e.strict&&e.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,e.sensitive?"":"i");function u(d){const p=d.match(l),m={};if(!p)return null;for(let _=1;_<p.length;_++){const v=p[_]||"",S=a[_-1];m[S.name]=v&&S.repeatable?v.split("/"):v}return m}function h(d){let p="",m=!1;for(const _ of n){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const v of _)if(v.type===0)p+=v.value;else if(v.type===1){const{value:S,repeatable:b,optional:y}=v,g=S in d?d[S]:"";if(Jn(g)&&!b)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const I=Jn(g)?g.join("/"):g;if(!I)if(y)_.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);p+=I}}return p||"/"}return{re:l,score:s,keys:a,parse:u,stringify:h}}function _0(n,t){let e=0;for(;e<n.length&&e<t.length;){const s=t[e]-n[e];if(s)return s;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function dm(n,t){let e=0;const s=n.score,r=t.score;for(;e<s.length&&e<r.length;){const a=_0(s[e],r[e]);if(a)return a;e++}if(Math.abs(r.length-s.length)===1){if(If(s))return 1;if(If(r))return-1}return r.length-s.length}function If(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const g0={type:0,value:""},v0=/[a-zA-Z0-9_]/;function x0(n){if(!n)return[[]];if(n==="/")return[[g0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(v){throw new Error(`ERR (${e})/"${d}": ${v}`)}let e=0,s=e;const r=[];let a;function l(){a&&r.push(a),a=[]}let u=0,h,d="",p="";function m(){d&&(e===0?a.push({type:0,value:d}):e===1||e===2||e===3?(a.length>1&&(h==="*"||h==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):t("Invalid state to consume buffer"),d="")}function _(){d+=h}for(;u<n.length;){if(h=n[u++],h==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:h==="/"?(d&&m(),l()):h===":"?(m(),e=1):_();break;case 4:_(),e=s;break;case 1:h==="("?e=2:v0.test(h)?_():(m(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&u--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:e=3:p+=h;break;case 3:m(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&u--,p="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${d}"`),m(),l(),r}function y0(n,t,e){const s=m0(x0(n.path),e),r=Se(s,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function M0(n,t){const e=[],s=new Map;t=Ff({strict:!1,end:!0,sensitive:!1},t);function r(m){return s.get(m)}function a(m,_,v){const S=!v,b=Of(m);b.aliasOf=v&&v.record;const y=Ff(t,m),g=[b];if("alias"in m){const A=typeof m.alias=="string"?[m.alias]:m.alias;for(const k of A)g.push(Of(Se({},b,{components:v?v.record.components:b.components,path:k,aliasOf:v?v.record:b})))}let I,D;for(const A of g){const{path:k}=A;if(_&&k[0]!=="/"){const H=_.record.path,N=H[H.length-1]==="/"?"":"/";A.path=_.record.path+(k&&N+k)}if(I=y0(A,_,y),v?v.alias.push(I):(D=D||I,D!==I&&D.alias.push(I),S&&m.name&&!Nf(I)&&l(m.name)),pm(I)&&h(I),b.children){const H=b.children;for(let N=0;N<H.length;N++)a(H[N],I,v&&v.children[N])}v=v||I}return D?()=>{l(D)}:ro}function l(m){if(hm(m)){const _=s.get(m);_&&(s.delete(m),e.splice(e.indexOf(_),1),_.children.forEach(l),_.alias.forEach(l))}else{const _=e.indexOf(m);_>-1&&(e.splice(_,1),m.record.name&&s.delete(m.record.name),m.children.forEach(l),m.alias.forEach(l))}}function u(){return e}function h(m){const _=b0(m,e);e.splice(_,0,m),m.record.name&&!Nf(m)&&s.set(m.record.name,m)}function d(m,_){let v,S={},b,y;if("name"in m&&m.name){if(v=s.get(m.name),!v)throw Sr(1,{location:m});y=v.record.name,S=Se(Uf(_.params,v.keys.filter(D=>!D.optional).concat(v.parent?v.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),m.params&&Uf(m.params,v.keys.map(D=>D.name))),b=v.stringify(S)}else if(m.path!=null)b=m.path,v=e.find(D=>D.re.test(b)),v&&(S=v.parse(b),y=v.record.name);else{if(v=_.name?s.get(_.name):e.find(D=>D.re.test(_.path)),!v)throw Sr(1,{location:m,currentLocation:_});y=v.record.name,S=Se({},_.params,m.params),b=v.stringify(S)}const g=[];let I=v;for(;I;)g.unshift(I.record),I=I.parent;return{name:y,path:b,params:S,matched:g,meta:E0(g)}}n.forEach(m=>a(m));function p(){e.length=0,s.clear()}return{addRoute:a,resolve:d,removeRoute:l,clearRoutes:p,getRoutes:u,getRecordMatcher:r}}function Uf(n,t){const e={};for(const s of t)s in n&&(e[s]=n[s]);return e}function Of(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:S0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function S0(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const s in n.components)t[s]=typeof e=="object"?e[s]:e;return t}function Nf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function E0(n){return n.reduce((t,e)=>Se(t,e.meta),{})}function Ff(n,t){const e={};for(const s in n)e[s]=s in t?t[s]:n[s];return e}function b0(n,t){let e=0,s=t.length;for(;e!==s;){const a=e+s>>1;dm(n,t[a])<0?s=a:e=a+1}const r=T0(n);return r&&(s=t.lastIndexOf(r,s-1)),s}function T0(n){let t=n;for(;t=t.parent;)if(pm(t)&&dm(n,t)===0)return t}function pm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function w0(n){const t={};if(n===""||n==="?")return t;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(rm," "),l=a.indexOf("="),u=po(l<0?a:a.slice(0,l)),h=l<0?null:po(a.slice(l+1));if(u in t){let d=t[u];Jn(d)||(d=t[u]=[d]),d.push(h)}else t[u]=h}return t}function Bf(n){let t="";for(let e in n){const s=n[e];if(e=Zx(e),s==null){s!==void 0&&(t+=(t.length?"&":"")+e);continue}(Jn(s)?s.map(a=>a&&Cc(a)):[s&&Cc(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+e,a!=null&&(t+="="+a))})}return t}function A0(n){const t={};for(const e in n){const s=n[e];s!==void 0&&(t[e]=Jn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const P0=Symbol(""),zf=Symbol(""),$a=Symbol(""),mm=Symbol(""),Dc=Symbol("");function Vr(){let n=[];function t(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Ki(n,t,e,s,r,a=l=>l()){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((u,h)=>{const d=_=>{_===!1?h(Sr(4,{from:e,to:t})):_ instanceof Error?h(_):f0(_)?h(Sr(2,{from:t,to:_})):(l&&s.enterCallbacks[r]===l&&typeof _=="function"&&l.push(_),u())},p=a(()=>n.call(s&&s.instances[r],t,e,d));let m=Promise.resolve(p);n.length<3&&(m=m.then(d)),m.catch(_=>h(_))})}function Vl(n,t,e,s,r=a=>a()){const a=[];for(const l of n)for(const u in l.components){let h=l.components[u];if(!(t!=="beforeRouteEnter"&&!l.instances[u]))if(im(h)){const p=(h.__vccOpts||h)[t];p&&a.push(Ki(p,e,s,l,u,r))}else{let d=h();a.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${u}" at "${l.path}"`);const m=Ox(p)?p.default:p;l.mods[u]=p,l.components[u]=m;const v=(m.__vccOpts||m)[t];return v&&Ki(v,e,s,l,u,r)()}))}}return a}function kf(n){const t=Kn($a),e=Kn(mm),s=Fn(()=>{const h=On(n.to);return t.resolve(h)}),r=Fn(()=>{const{matched:h}=s.value,{length:d}=h,p=h[d-1],m=e.matched;if(!p||!m.length)return-1;const _=m.findIndex(Mr.bind(null,p));if(_>-1)return _;const v=Hf(h[d-2]);return d>1&&Hf(p)===v&&m[m.length-1].path!==v?m.findIndex(Mr.bind(null,h[d-2])):_}),a=Fn(()=>r.value>-1&&I0(e.params,s.value.params)),l=Fn(()=>r.value>-1&&r.value===e.matched.length-1&&cm(e.params,s.value.params));function u(h={}){if(D0(h)){const d=t[On(n.replace)?"replace":"push"](On(n.to)).catch(ro);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:Fn(()=>s.value.href),isActive:a,isExactActive:l,navigate:u}}function R0(n){return n.length===1?n[0]:n}const C0=bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:kf,setup(n,{slots:t}){const e=Mo(kf(n)),{options:s}=Kn($a),r=Fn(()=>({[Vf(n.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[Vf(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const a=t.default&&R0(t.default(e));return n.custom?a:em("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},a)}}}),L0=C0;function D0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function I0(n,t){for(const e in t){const s=t[e],r=n[e];if(typeof s=="string"){if(s!==r)return!1}else if(!Jn(r)||r.length!==s.length||s.some((a,l)=>a!==r[l]))return!1}return!0}function Hf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Vf=(n,t,e)=>n??t??e,U0=bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const s=Kn(Dc),r=Fn(()=>n.route||s.value),a=Kn(zf,0),l=Fn(()=>{let d=On(a);const{matched:p}=r.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),u=Fn(()=>r.value.matched[l.value]);ya(zf,Fn(()=>l.value+1)),ya(P0,u),ya(Dc,r);const h=So();return io(()=>[h.value,u.value,n.name],([d,p,m],[_,v,S])=>{p&&(p.instances[m]=d,v&&v!==p&&d&&d===_&&(p.leaveGuards.size||(p.leaveGuards=v.leaveGuards),p.updateGuards.size||(p.updateGuards=v.updateGuards))),d&&p&&(!v||!Mr(p,v)||!_)&&(p.enterCallbacks[m]||[]).forEach(b=>b(d))},{flush:"post"}),()=>{const d=r.value,p=n.name,m=u.value,_=m&&m.components[p];if(!_)return Gf(e.default,{Component:_,route:d});const v=m.props[p],S=v?v===!0?d.params:typeof v=="function"?v(d):v:null,y=em(_,Se({},S,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(m.instances[p]=null)},ref:h}));return Gf(e.default,{Component:y,route:d})||y}}});function Gf(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const O0=U0;function N0(n){const t=M0(n.routes,n),e=n.parseQuery||w0,s=n.stringifyQuery||Bf,r=n.history,a=Vr(),l=Vr(),u=Vr(),h=zg(ki);let d=ki;hr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=kl.bind(null,W=>""+W),m=kl.bind(null,Yx),_=kl.bind(null,po);function v(W,dt){let St,yt;return hm(W)?(St=t.getRecordMatcher(W),yt=dt):yt=W,t.addRoute(yt,St)}function S(W){const dt=t.getRecordMatcher(W);dt&&t.removeRoute(dt)}function b(){return t.getRoutes().map(W=>W.record)}function y(W){return!!t.getRecordMatcher(W)}function g(W,dt){if(dt=Se({},dt||h.value),typeof W=="string"){const E=Hl(e,W,dt.path),ft=t.resolve({path:E.path},dt),rt=r.createHref(E.fullPath);return Se(E,ft,{params:_(ft.params),hash:po(E.hash),redirectedFrom:void 0,href:rt})}let St;if(W.path!=null)St=Se({},W,{path:Hl(e,W.path,dt.path).path});else{const E=Se({},W.params);for(const ft in E)E[ft]==null&&delete E[ft];St=Se({},W,{params:m(E)}),dt.params=m(dt.params)}const yt=t.resolve(St,dt),Kt=W.hash||"";yt.params=p(_(yt.params));const U=$x(s,Se({},W,{hash:Xx(Kt),path:yt.path})),O=r.createHref(U);return Se({fullPath:U,hash:Kt,query:s===Bf?A0(W.query):W.query||{}},yt,{redirectedFrom:void 0,href:O})}function I(W){return typeof W=="string"?Hl(e,W,h.value.path):Se({},W)}function D(W,dt){if(d!==W)return Sr(8,{from:dt,to:W})}function A(W){return N(W)}function k(W){return A(Se(I(W),{replace:!0}))}function H(W){const dt=W.matched[W.matched.length-1];if(dt&&dt.redirect){const{redirect:St}=dt;let yt=typeof St=="function"?St(W):St;return typeof yt=="string"&&(yt=yt.includes("?")||yt.includes("#")?yt=I(yt):{path:yt},yt.params={}),Se({query:W.query,hash:W.hash,params:yt.path!=null?{}:W.params},yt)}}function N(W,dt){const St=d=g(W),yt=h.value,Kt=W.state,U=W.force,O=W.replace===!0,E=H(St);if(E)return N(Se(I(E),{state:typeof E=="object"?Se({},Kt,E.state):Kt,force:U,replace:O}),dt||St);const ft=St;ft.redirectedFrom=dt;let rt;return!U&&Jx(s,yt,St)&&(rt=Sr(16,{to:ft,from:yt}),Pt(yt,yt,!0,!1)),(rt?Promise.resolve(rt):R(ft,yt)).catch(J=>yi(J)?yi(J,2)?J:_t(J):V(J,ft,yt)).then(J=>{if(J){if(yi(J,2))return N(Se({replace:O},I(J.to),{state:typeof J.to=="object"?Se({},Kt,J.to.state):Kt,force:U}),dt||ft)}else J=lt(ft,yt,!0,O,Kt);return z(ft,yt,J),J})}function G(W,dt){const St=D(W,dt);return St?Promise.reject(St):Promise.resolve()}function C(W){const dt=at.values().next().value;return dt&&typeof dt.runWithContext=="function"?dt.runWithContext(W):W()}function R(W,dt){let St;const[yt,Kt,U]=F0(W,dt);St=Vl(yt.reverse(),"beforeRouteLeave",W,dt);for(const E of yt)E.leaveGuards.forEach(ft=>{St.push(Ki(ft,W,dt))});const O=G.bind(null,W,dt);return St.push(O),Mt(St).then(()=>{St=[];for(const E of a.list())St.push(Ki(E,W,dt));return St.push(O),Mt(St)}).then(()=>{St=Vl(Kt,"beforeRouteUpdate",W,dt);for(const E of Kt)E.updateGuards.forEach(ft=>{St.push(Ki(ft,W,dt))});return St.push(O),Mt(St)}).then(()=>{St=[];for(const E of U)if(E.beforeEnter)if(Jn(E.beforeEnter))for(const ft of E.beforeEnter)St.push(Ki(ft,W,dt));else St.push(Ki(E.beforeEnter,W,dt));return St.push(O),Mt(St)}).then(()=>(W.matched.forEach(E=>E.enterCallbacks={}),St=Vl(U,"beforeRouteEnter",W,dt,C),St.push(O),Mt(St))).then(()=>{St=[];for(const E of l.list())St.push(Ki(E,W,dt));return St.push(O),Mt(St)}).catch(E=>yi(E,8)?E:Promise.reject(E))}function z(W,dt,St){u.list().forEach(yt=>C(()=>yt(W,dt,St)))}function lt(W,dt,St,yt,Kt){const U=D(W,dt);if(U)return U;const O=dt===ki,E=hr?history.state:{};St&&(yt||O?r.replace(W.fullPath,Se({scroll:O&&E&&E.scroll},Kt)):r.push(W.fullPath,Kt)),h.value=W,Pt(W,dt,St,O),_t()}let et;function mt(){et||(et=r.listen((W,dt,St)=>{if(!gt.listening)return;const yt=g(W),Kt=H(yt);if(Kt){N(Se(Kt,{replace:!0,force:!0}),yt).catch(ro);return}d=yt;const U=h.value;hr&&o0(Rf(U.fullPath,St.delta),Ka()),R(yt,U).catch(O=>yi(O,12)?O:yi(O,2)?(N(Se(I(O.to),{force:!0}),yt).then(E=>{yi(E,20)&&!St.delta&&St.type===mo.pop&&r.go(-1,!1)}).catch(ro),Promise.reject()):(St.delta&&r.go(-St.delta,!1),V(O,yt,U))).then(O=>{O=O||lt(yt,U,!1),O&&(St.delta&&!yi(O,8)?r.go(-St.delta,!1):St.type===mo.pop&&yi(O,20)&&r.go(-1,!1)),z(yt,U,O)}).catch(ro)}))}let vt=Vr(),Q=Vr(),it;function V(W,dt,St){_t(W);const yt=Q.list();return yt.length?yt.forEach(Kt=>Kt(W,dt,St)):console.error(W),Promise.reject(W)}function Ct(){return it&&h.value!==ki?Promise.resolve():new Promise((W,dt)=>{vt.add([W,dt])})}function _t(W){return it||(it=!W,mt(),vt.list().forEach(([dt,St])=>W?St(W):dt()),vt.reset()),W}function Pt(W,dt,St,yt){const{scrollBehavior:Kt}=n;if(!hr||!Kt)return Promise.resolve();const U=!St&&a0(Rf(W.fullPath,0))||(yt||!St)&&history.state&&history.state.scroll||null;return Fu().then(()=>Kt(W,dt,U)).then(O=>O&&r0(O)).catch(O=>V(O,W,dt))}const kt=W=>r.go(W);let Qt;const at=new Set,gt={currentRoute:h,listening:!0,addRoute:v,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:b,resolve:g,options:n,push:A,replace:k,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:a.add,beforeResolve:l.add,afterEach:u.add,onError:Q.add,isReady:Ct,install(W){const dt=this;W.component("RouterLink",L0),W.component("RouterView",O0),W.config.globalProperties.$router=dt,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>On(h)}),hr&&!Qt&&h.value===ki&&(Qt=!0,A(r.location).catch(Kt=>{}));const St={};for(const Kt in ki)Object.defineProperty(St,Kt,{get:()=>h.value[Kt],enumerable:!0});W.provide($a,dt),W.provide(mm,gp(St)),W.provide(Dc,h);const yt=W.unmount;at.add(W),W.unmount=function(){at.delete(W),at.size<1&&(d=ki,et&&et(),et=null,h.value=ki,Qt=!1,it=!1),yt()}}};function Mt(W){return W.reduce((dt,St)=>dt.then(()=>C(St)),Promise.resolve())}return gt}function F0(n,t){const e=[],s=[],r=[],a=Math.max(t.matched.length,n.matched.length);for(let l=0;l<a;l++){const u=t.matched[l];u&&(n.matched.find(d=>Mr(d,u))?s.push(u):e.push(u));const h=n.matched[l];h&&(t.matched.find(d=>Mr(d,h))||r.push(h))}return[e,s,r]}function Xu(){return Kn($a)}const B0={class:"flex items-center justify-center h-screen bg-gray-900 text-white"},z0={__name:"Welcome",setup(n){const t=Xu(),e=()=>t.push("/play");return(s,r)=>(es(),Ds("div",B0,[dn("button",{onClick:e,class:"px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 text-xl"}," Start Game ")]))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="176",gr={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k0=0,Wf=1,H0=2,_m=1,V0=2,wi=3,ss=0,En=1,Ci=2,ns=0,vr=1,Xf=2,Zf=3,qf=4,G0=5,Ts=100,W0=101,X0=102,Z0=103,q0=104,Y0=200,j0=201,K0=202,$0=203,Ic=204,Uc=205,J0=206,Q0=207,ty=208,ey=209,ny=210,iy=211,sy=212,ry=213,oy=214,Oc=0,Nc=1,Fc=2,Er=3,Bc=4,zc=5,kc=6,Hc=7,gm=0,ay=1,ly=2,is=0,cy=1,uy=2,hy=3,fy=4,dy=5,py=6,my=7,vm=300,br=301,Tr=302,Vc=303,Gc=304,Ja=306,Wc=1e3,As=1001,Xc=1002,$n=1003,_y=1004,$o=1005,ai=1006,Gl=1007,Ps=1008,Ui=1009,xm=1010,ym=1011,_o=1012,qu=1013,Os=1014,Li=1015,wo=1016,Yu=1017,ju=1018,go=1020,Mm=35902,Sm=1021,Em=1022,qn=1023,vo=1026,xo=1027,bm=1028,Ku=1029,Tm=1030,$u=1031,Ju=1033,Ea=33776,ba=33777,Ta=33778,wa=33779,Zc=35840,qc=35841,Yc=35842,jc=35843,Kc=36196,$c=37492,Jc=37496,Qc=37808,tu=37809,eu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,hu=37820,fu=37821,Aa=36492,du=36494,pu=36495,wm=36283,mu=36284,_u=36285,gu=36286,gy=3200,vy=3201,xy=0,yy=1,Qi="",Un="srgb",wr="srgb-linear",za="linear",we="srgb",Ys=7680,Yf=519,My=512,Sy=513,Ey=514,Am=515,by=516,Ty=517,wy=518,Ay=519,jf=35044,Kf="300 es",Di=2e3,ka=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){const s=this._listeners;if(s===void 0)return;const r=s[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const s=e[t.type];if(s!==void 0){t.target=this;const r=s.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,vu=180/Math.PI;function Ao(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function Py(n,t){return(n%t+t)%t}function Wl(n,t,e){return(1-e)*n+e*t}function Gr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ry={DEG2RAD:Pa};class pe{constructor(t=0,e=0){pe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6],this.y=r[1]*e+r[4]*s+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*s-l*r+t.x,this.y=a*r+l*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,s,r,a,l,u,h,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,r,a,l,u,h,d)}set(t,e,s,r,a,l,u,h,d){const p=this.elements;return p[0]=t,p[1]=r,p[2]=u,p[3]=e,p[4]=a,p[5]=h,p[6]=s,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,a=this.elements,l=s[0],u=s[3],h=s[6],d=s[1],p=s[4],m=s[7],_=s[2],v=s[5],S=s[8],b=r[0],y=r[3],g=r[6],I=r[1],D=r[4],A=r[7],k=r[2],H=r[5],N=r[8];return a[0]=l*b+u*I+h*k,a[3]=l*y+u*D+h*H,a[6]=l*g+u*A+h*N,a[1]=d*b+p*I+m*k,a[4]=d*y+p*D+m*H,a[7]=d*g+p*A+m*N,a[2]=_*b+v*I+S*k,a[5]=_*y+v*D+S*H,a[8]=_*g+v*A+S*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8];return e*l*p-e*u*d-s*a*p+s*u*h+r*a*d-r*l*h}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],m=p*l-u*d,_=u*h-p*a,v=d*a-l*h,S=e*m+s*_+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=m*b,t[1]=(r*d-p*s)*b,t[2]=(u*s-r*l)*b,t[3]=_*b,t[4]=(p*e-r*h)*b,t[5]=(r*a-u*e)*b,t[6]=v*b,t[7]=(s*h-d*e)*b,t[8]=(l*e-s*a)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,r,a,l,u){const h=Math.cos(a),d=Math.sin(a);return this.set(s*h,s*d,-s*(h*l+d*u)+l+t,-r*d,r*h,-r*(-d*l+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<9;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new ce;function Pm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cy(){const n=yo("canvas");return n.style.display="block",n}const $f={};function Ra(n){n in $f||($f[n]=!0,console.warn(n))}function Ly(n,t,e){return new Promise(function(s,r){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:s()}}setTimeout(a,e)})}function Dy(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iy(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===we&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===we&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},fromWorkingColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},toWorkingColorSpace:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],s=[.3127,.329];return n.define({[wr]:{primaries:t,whitePoint:s,transfer:za,toXYZ:Jf,fromXYZ:Qf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:t,whitePoint:s,transfer:we,toXYZ:Jf,fromXYZ:Qf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),n}const ye=Uy();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let js;class Oy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{js===void 0&&(js=yo("canvas")),js.width=t.width,js.height=t.height;const r=js.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),s=js}return s.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yo("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const r=s.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Ii(a[l]/255)*255;return s.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(Ii(e[s]/255)*255):e[s]=Ii(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ny=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Ao(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?a.push(Zl(r[l].image)):a.push(Zl(r[l]))}else a=Zl(r);s.url=a}return e||(t.images[this.uuid]=s),s}}function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class gn extends zs{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,s=As,r=As,a=ai,l=Ps,u=qn,h=Ui,d=gn.DEFAULT_ANISOTROPY,p=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ao(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wc:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case Xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wc:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case Xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=vm;gn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,s=0,r=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,r){return this.x=t,this.y=e,this.z=s,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*s+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*s+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*s+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*s+l[11]*r+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,r,a;const h=t.elements,d=h[0],p=h[4],m=h[8],_=h[1],v=h[5],S=h[9],b=h[2],y=h[6],g=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-b)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+b)<.1&&Math.abs(S+y)<.1&&Math.abs(d+v+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(d+1)/2,A=(v+1)/2,k=(g+1)/2,H=(p+_)/4,N=(m+b)/4,G=(S+y)/4;return D>A&&D>k?D<.01?(s=0,r=.707106781,a=.707106781):(s=Math.sqrt(D),r=H/s,a=N/s):A>k?A<.01?(s=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),s=H/r,a=G/r):k<.01?(s=.707106781,r=.707106781,a=0):(a=Math.sqrt(k),s=N/a,r=G/a),this.set(s,r,a,e),this}let I=Math.sqrt((y-S)*(y-S)+(m-b)*(m-b)+(_-p)*(_-p));return Math.abs(I)<.001&&(I=1),this.x=(y-S)/I,this.y=(m-b)/I,this.z=(_-p)/I,this.w=Math.acos((d+v+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class By extends zs{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=s.depth?s.depth:1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const r={width:t,height:e,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const a=new gn(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);a.flipY=!1,a.generateMipmaps=s.generateMipmaps,a.internalFormat=s.internalFormat,this.textures=[];const l=s.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,s=1){if(this.width!==t||this.height!==e||this.depth!==s){this.width=t,this.height=e,this.depth=s;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=s;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,s=t.textures.length;e<s;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Qu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends By{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class Rm extends gn{constructor(t=null,e=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends gn{constructor(t=null,e=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=0,e=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=r}static slerpFlat(t,e,s,r,a,l,u){let h=s[r+0],d=s[r+1],p=s[r+2],m=s[r+3];const _=a[l+0],v=a[l+1],S=a[l+2],b=a[l+3];if(u===0){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(u===1){t[e+0]=_,t[e+1]=v,t[e+2]=S,t[e+3]=b;return}if(m!==b||h!==_||d!==v||p!==S){let y=1-u;const g=h*_+d*v+p*S+m*b,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const k=Math.sqrt(D),H=Math.atan2(k,g*I);y=Math.sin(y*H)/k,u=Math.sin(u*H)/k}const A=u*I;if(h=h*y+_*A,d=d*y+v*A,p=p*y+S*A,m=m*y+b*A,y===1-u){const k=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=k,d*=k,p*=k,m*=k}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,s,r,a,l){const u=s[r],h=s[r+1],d=s[r+2],p=s[r+3],m=a[l],_=a[l+1],v=a[l+2],S=a[l+3];return t[e]=u*S+p*m+h*v-d*_,t[e+1]=h*S+p*_+d*m-u*v,t[e+2]=d*S+p*v+u*_-h*m,t[e+3]=p*S-u*m-h*_-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,r){return this._x=t,this._y=e,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,r=t._y,a=t._z,l=t._order,u=Math.cos,h=Math.sin,d=u(s/2),p=u(r/2),m=u(a/2),_=h(s/2),v=h(r/2),S=h(a/2);switch(l){case"XYZ":this._x=_*p*m+d*v*S,this._y=d*v*m-_*p*S,this._z=d*p*S+_*v*m,this._w=d*p*m-_*v*S;break;case"YXZ":this._x=_*p*m+d*v*S,this._y=d*v*m-_*p*S,this._z=d*p*S-_*v*m,this._w=d*p*m+_*v*S;break;case"ZXY":this._x=_*p*m-d*v*S,this._y=d*v*m+_*p*S,this._z=d*p*S+_*v*m,this._w=d*p*m-_*v*S;break;case"ZYX":this._x=_*p*m-d*v*S,this._y=d*v*m+_*p*S,this._z=d*p*S-_*v*m,this._w=d*p*m+_*v*S;break;case"YZX":this._x=_*p*m+d*v*S,this._y=d*v*m+_*p*S,this._z=d*p*S-_*v*m,this._w=d*p*m-_*v*S;break;case"XZY":this._x=_*p*m-d*v*S,this._y=d*v*m-_*p*S,this._z=d*p*S+_*v*m,this._w=d*p*m+_*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],r=e[4],a=e[8],l=e[1],u=e[5],h=e[9],d=e[2],p=e[6],m=e[10],_=s+u+m;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(p-h)*v,this._y=(a-d)*v,this._z=(l-r)*v}else if(s>u&&s>m){const v=2*Math.sqrt(1+s-u-m);this._w=(p-h)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+d)/v}else if(u>m){const v=2*Math.sqrt(1+u-s-m);this._w=(a-d)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(h+p)/v}else{const v=2*Math.sqrt(1+m-s-u);this._w=(l-r)/v,this._x=(a+d)/v,this._y=(h+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,e/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,r=t._y,a=t._z,l=t._w,u=e._x,h=e._y,d=e._z,p=e._w;return this._x=s*p+l*u+r*d-a*h,this._y=r*p+l*h+a*u-s*d,this._z=a*p+l*d+s*h-r*u,this._w=l*p-s*u-r*h-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,r=this._y,a=this._z,l=this._w;let u=l*t._w+s*t._x+r*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=s,this._y=r,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const v=1-e;return this._w=v*l+e*this._w,this._x=v*s+e*this._x,this._y=v*r+e*this._y,this._z=v*a+e*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),m=Math.sin((1-e)*p)/d,_=Math.sin(e*p)/d;return this._w=l*m+this._w*_,this._x=s*m+this._x*_,this._y=r*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),a=Math.sqrt(s);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*s+a[6]*r,this.y=a[1]*e+a[4]*s+a[7]*r,this.z=a[2]*e+a[5]*s+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*s+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*s+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*s+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*s+a[10]*r+a[14])*l,this}applyQuaternion(t){const e=this.x,s=this.y,r=this.z,a=t.x,l=t.y,u=t.z,h=t.w,d=2*(l*r-u*s),p=2*(u*e-a*r),m=2*(a*s-l*e);return this.x=e+h*d+l*m-u*p,this.y=s+h*p+u*d-a*m,this.z=r+h*m+a*p-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*s+a[8]*r,this.y=a[1]*e+a[5]*s+a[9]*r,this.z=a[2]*e+a[6]*s+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,r=t.y,a=t.z,l=e.x,u=e.y,h=e.z;return this.x=r*h-a*u,this.y=a*l-s*h,this.z=s*u-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ql.copy(this).projectOnVector(t),this.sub(ql)}reflect(t){return this.sub(ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return e*e+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const r=Math.sin(e)*t;return this.x=r*Math.sin(s),this.y=Math.cos(e)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new $,td=new Fs;class Po{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const a=s.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,Gn):Gn.fromBufferAttribute(a,l),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jo.copy(s.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}const r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),Qo.subVectors(this.max,Wr),Ks.subVectors(t.a,Wr),$s.subVectors(t.b,Wr),Js.subVectors(t.c,Wr),Hi.subVectors($s,Ks),Vi.subVectors(Js,$s),gs.subVectors(Ks,Js);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-gs.z,gs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,gs.z,0,-gs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-gs.y,gs.x,0];return!Yl(e,Ks,$s,Js,Qo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Ks,$s,Js,Qo))?!1:(ta.crossVectors(Hi,Vi),e=[ta.x,ta.y,ta.z],Yl(e,Ks,$s,Js,Qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mi=[new $,new $,new $,new $,new $,new $,new $,new $],Gn=new $,Jo=new Po,Ks=new $,$s=new $,Js=new $,Hi=new $,Vi=new $,gs=new $,Wr=new $,Qo=new $,ta=new $,vs=new $;function Yl(n,t,e,s,r){for(let a=0,l=n.length-3;a<=l;a+=3){vs.fromArray(n,a);const u=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),h=t.dot(vs),d=e.dot(vs),p=s.dot(vs);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const ky=new Po,Xr=new $,jl=new $;class th{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):ky.setFromPoints(t).getCenter(s);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,s.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);const e=Xr.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),r=(s-this.radius)*.5;this.center.addScaledVector(Xr,r/s),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(jl)),this.expandByPoint(Xr.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new $,Kl=new $,ea=new $,Gi=new $,$l=new $,na=new $,Jl=new $;class Cm{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,s,r){Kl.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Kl);const a=t.distanceTo(e)*.5,l=-this.direction.dot(ea),u=Gi.dot(this.direction),h=-Gi.dot(ea),d=Gi.lengthSq(),p=Math.abs(1-l*l);let m,_,v,S;if(p>0)if(m=l*h-u,_=l*u-h,S=a*p,m>=0)if(_>=-S)if(_<=S){const b=1/p;m*=b,_*=b,v=m*(m+l*_+2*u)+_*(l*m+_+2*h)+d}else _=a,m=Math.max(0,-(l*_+u)),v=-m*m+_*(_+2*h)+d;else _=-a,m=Math.max(0,-(l*_+u)),v=-m*m+_*(_+2*h)+d;else _<=-S?(m=Math.max(0,-(-l*a+u)),_=m>0?-a:Math.min(Math.max(-a,-h),a),v=-m*m+_*(_+2*h)+d):_<=S?(m=0,_=Math.min(Math.max(-a,-h),a),v=_*(_+2*h)+d):(m=Math.max(0,-(l*a+u)),_=m>0?a:Math.min(Math.max(-a,-h),a),v=-m*m+_*(_+2*h)+d);else _=l>0?-a:a,m=Math.max(0,-(l*_+u)),v=-m*m+_*(_+2*h)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Kl).addScaledVector(ea,_),v}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const s=Si.dot(this.direction),r=Si.dot(Si)-s*s,a=t.radius*t.radius;if(r>a)return null;const l=Math.sqrt(a-r),u=s-l,h=s+l;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,r,a,l,u,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),p>=0?(a=(t.min.y-_.y)*p,l=(t.max.y-_.y)*p):(a=(t.max.y-_.y)*p,l=(t.min.y-_.y)*p),s>l||a>r||((a>s||isNaN(s))&&(s=a),(l<r||isNaN(r))&&(r=l),m>=0?(u=(t.min.z-_.z)*m,h=(t.max.z-_.z)*m):(u=(t.max.z-_.z)*m,h=(t.min.z-_.z)*m),s>h||u>r)||((u>s||s!==s)&&(s=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(s>=0?s:r,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,s,r,a){$l.subVectors(e,t),na.subVectors(s,t),Jl.crossVectors($l,na);let l=this.direction.dot(Jl),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Gi.subVectors(this.origin,t);const h=u*this.direction.dot(na.crossVectors(Gi,na));if(h<0)return null;const d=u*this.direction.dot($l.cross(Gi));if(d<0||h+d>l)return null;const p=-u*Gi.dot(Jl);return p<0?null:this.at(p/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,e,s,r,a,l,u,h,d,p,m,_,v,S,b,y){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,r,a,l,u,h,d,p,m,_,v,S,b,y)}set(t,e,s,r,a,l,u,h,d,p,m,_,v,S,b,y){const g=this.elements;return g[0]=t,g[4]=e,g[8]=s,g[12]=r,g[1]=a,g[5]=l,g[9]=u,g[13]=h,g[2]=d,g[6]=p,g[10]=m,g[14]=_,g[3]=v,g[7]=S,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,r=1/Qs.setFromMatrixColumn(t,0).length(),a=1/Qs.setFromMatrixColumn(t,1).length(),l=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=s[0]*r,e[1]=s[1]*r,e[2]=s[2]*r,e[3]=0,e[4]=s[4]*a,e[5]=s[5]*a,e[6]=s[6]*a,e[7]=0,e[8]=s[8]*l,e[9]=s[9]*l,e[10]=s[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,r=t.y,a=t.z,l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const _=l*p,v=l*m,S=u*p,b=u*m;e[0]=h*p,e[4]=-h*m,e[8]=d,e[1]=v+S*d,e[5]=_-b*d,e[9]=-u*h,e[2]=b-_*d,e[6]=S+v*d,e[10]=l*h}else if(t.order==="YXZ"){const _=h*p,v=h*m,S=d*p,b=d*m;e[0]=_+b*u,e[4]=S*u-v,e[8]=l*d,e[1]=l*m,e[5]=l*p,e[9]=-u,e[2]=v*u-S,e[6]=b+_*u,e[10]=l*h}else if(t.order==="ZXY"){const _=h*p,v=h*m,S=d*p,b=d*m;e[0]=_-b*u,e[4]=-l*m,e[8]=S+v*u,e[1]=v+S*u,e[5]=l*p,e[9]=b-_*u,e[2]=-l*d,e[6]=u,e[10]=l*h}else if(t.order==="ZYX"){const _=l*p,v=l*m,S=u*p,b=u*m;e[0]=h*p,e[4]=S*d-v,e[8]=_*d+b,e[1]=h*m,e[5]=b*d+_,e[9]=v*d-S,e[2]=-d,e[6]=u*h,e[10]=l*h}else if(t.order==="YZX"){const _=l*h,v=l*d,S=u*h,b=u*d;e[0]=h*p,e[4]=b-_*m,e[8]=S*m+v,e[1]=m,e[5]=l*p,e[9]=-u*p,e[2]=-d*p,e[6]=v*m+S,e[10]=_-b*m}else if(t.order==="XZY"){const _=l*h,v=l*d,S=u*h,b=u*d;e[0]=h*p,e[4]=-m,e[8]=d*p,e[1]=_*m+b,e[5]=l*p,e[9]=v*m-S,e[2]=S*m-v,e[6]=u*p,e[10]=b*m+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hy,t,Vy)}lookAt(t,e,s){const r=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Wi.crossVectors(s,wn),Wi.lengthSq()===0&&(Math.abs(s.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Wi.crossVectors(s,wn)),Wi.normalize(),ia.crossVectors(wn,Wi),r[0]=Wi.x,r[4]=ia.x,r[8]=wn.x,r[1]=Wi.y,r[5]=ia.y,r[9]=wn.y,r[2]=Wi.z,r[6]=ia.z,r[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,a=this.elements,l=s[0],u=s[4],h=s[8],d=s[12],p=s[1],m=s[5],_=s[9],v=s[13],S=s[2],b=s[6],y=s[10],g=s[14],I=s[3],D=s[7],A=s[11],k=s[15],H=r[0],N=r[4],G=r[8],C=r[12],R=r[1],z=r[5],lt=r[9],et=r[13],mt=r[2],vt=r[6],Q=r[10],it=r[14],V=r[3],Ct=r[7],_t=r[11],Pt=r[15];return a[0]=l*H+u*R+h*mt+d*V,a[4]=l*N+u*z+h*vt+d*Ct,a[8]=l*G+u*lt+h*Q+d*_t,a[12]=l*C+u*et+h*it+d*Pt,a[1]=p*H+m*R+_*mt+v*V,a[5]=p*N+m*z+_*vt+v*Ct,a[9]=p*G+m*lt+_*Q+v*_t,a[13]=p*C+m*et+_*it+v*Pt,a[2]=S*H+b*R+y*mt+g*V,a[6]=S*N+b*z+y*vt+g*Ct,a[10]=S*G+b*lt+y*Q+g*_t,a[14]=S*C+b*et+y*it+g*Pt,a[3]=I*H+D*R+A*mt+k*V,a[7]=I*N+D*z+A*vt+k*Ct,a[11]=I*G+D*lt+A*Q+k*_t,a[15]=I*C+D*et+A*it+k*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],r=t[8],a=t[12],l=t[1],u=t[5],h=t[9],d=t[13],p=t[2],m=t[6],_=t[10],v=t[14],S=t[3],b=t[7],y=t[11],g=t[15];return S*(+a*h*m-r*d*m-a*u*_+s*d*_+r*u*v-s*h*v)+b*(+e*h*v-e*d*_+a*l*_-r*l*v+r*d*p-a*h*p)+y*(+e*d*m-e*u*v-a*l*m+s*l*v+a*u*p-s*d*p)+g*(-r*u*p-e*h*m+e*u*_+r*l*m-s*l*_+s*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],l=t[4],u=t[5],h=t[6],d=t[7],p=t[8],m=t[9],_=t[10],v=t[11],S=t[12],b=t[13],y=t[14],g=t[15],I=m*y*d-b*_*d+b*h*v-u*y*v-m*h*g+u*_*g,D=S*_*d-p*y*d-S*h*v+l*y*v+p*h*g-l*_*g,A=p*b*d-S*m*d+S*u*v-l*b*v-p*u*g+l*m*g,k=S*m*h-p*b*h-S*u*_+l*b*_+p*u*y-l*m*y,H=e*I+s*D+r*A+a*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return t[0]=I*N,t[1]=(b*_*a-m*y*a-b*r*v+s*y*v+m*r*g-s*_*g)*N,t[2]=(u*y*a-b*h*a+b*r*d-s*y*d-u*r*g+s*h*g)*N,t[3]=(m*h*a-u*_*a-m*r*d+s*_*d+u*r*v-s*h*v)*N,t[4]=D*N,t[5]=(p*y*a-S*_*a+S*r*v-e*y*v-p*r*g+e*_*g)*N,t[6]=(S*h*a-l*y*a-S*r*d+e*y*d+l*r*g-e*h*g)*N,t[7]=(l*_*a-p*h*a+p*r*d-e*_*d-l*r*v+e*h*v)*N,t[8]=A*N,t[9]=(S*m*a-p*b*a-S*s*v+e*b*v+p*s*g-e*m*g)*N,t[10]=(l*b*a-S*u*a+S*s*d-e*b*d-l*s*g+e*u*g)*N,t[11]=(p*u*a-l*m*a-p*s*d+e*m*d+l*s*v-e*u*v)*N,t[12]=k*N,t[13]=(p*b*r-S*m*r+S*s*_-e*b*_-p*s*y+e*m*y)*N,t[14]=(S*u*r-l*b*r-S*s*h+e*b*h+l*s*y-e*u*y)*N,t[15]=(l*m*r-p*u*r+p*s*h-e*m*h-l*s*_+e*u*_)*N,this}scale(t){const e=this.elements,s=t.x,r=t.y,a=t.z;return e[0]*=s,e[4]*=r,e[8]*=a,e[1]*=s,e[5]*=r,e[9]*=a,e[2]*=s,e[6]*=r,e[10]*=a,e[3]*=s,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,r))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),r=Math.sin(e),a=1-s,l=t.x,u=t.y,h=t.z,d=a*l,p=a*u;return this.set(d*l+s,d*u-r*h,d*h+r*u,0,d*u+r*h,p*u+s,p*h-r*l,0,d*h-r*u,p*h+r*l,a*h*h+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,r,a,l){return this.set(1,s,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,s){const r=this.elements,a=e._x,l=e._y,u=e._z,h=e._w,d=a+a,p=l+l,m=u+u,_=a*d,v=a*p,S=a*m,b=l*p,y=l*m,g=u*m,I=h*d,D=h*p,A=h*m,k=s.x,H=s.y,N=s.z;return r[0]=(1-(b+g))*k,r[1]=(v+A)*k,r[2]=(S-D)*k,r[3]=0,r[4]=(v-A)*H,r[5]=(1-(_+g))*H,r[6]=(y+I)*H,r[7]=0,r[8]=(S+D)*N,r[9]=(y-I)*N,r[10]=(1-(_+b))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,s){const r=this.elements;let a=Qs.set(r[0],r[1],r[2]).length();const l=Qs.set(r[4],r[5],r[6]).length(),u=Qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Wn.copy(this);const d=1/a,p=1/l,m=1/u;return Wn.elements[0]*=d,Wn.elements[1]*=d,Wn.elements[2]*=d,Wn.elements[4]*=p,Wn.elements[5]*=p,Wn.elements[6]*=p,Wn.elements[8]*=m,Wn.elements[9]*=m,Wn.elements[10]*=m,e.setFromRotationMatrix(Wn),s.x=a,s.y=l,s.z=u,this}makePerspective(t,e,s,r,a,l,u=Di){const h=this.elements,d=2*a/(e-t),p=2*a/(s-r),m=(e+t)/(e-t),_=(s+r)/(s-r);let v,S;if(u===Di)v=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(u===ka)v=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,s,r,a,l,u=Di){const h=this.elements,d=1/(e-t),p=1/(s-r),m=1/(l-a),_=(e+t)*d,v=(s+r)*p;let S,b;if(u===Di)S=(l+a)*m,b=-2*m;else if(u===ka)S=a*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=b,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<16;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const Qs=new $,Wn=new We,Hy=new $(0,0,0),Vy=new $(1,1,1),Wi=new $,ia=new $,wn=new $,ed=new We,nd=new Fs;class Oi{constructor(t=0,e=0,s=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,r=this._order){return this._x=t,this._y=e,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const r=t.elements,a=r[0],l=r[4],u=r[8],h=r[1],d=r[5],p=r[9],m=r[2],_=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nd.setFromEuler(this),this.setFromQuaternion(nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gy=0;const id=new $,tr=new Fs,Ei=new We,sa=new $,Zr=new $,Wy=new $,Xy=new Fs,sd=new $(1,0,0),rd=new $(0,1,0),od=new $(0,0,1),ad={type:"added"},Zy={type:"removed"},er={type:"childadded",child:null},Ql={type:"childremoved",child:null};class Cn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new $,e=new Oi,s=new Fs,r=new $(1,1,1);function a(){s.setFromEuler(e,!1)}function l(){e.setFromQuaternion(s,void 0,!1)}e._onChange(a),s._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new ce}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(rd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return id.copy(t).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(rd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?sa.copy(t):sa.set(t,e,s);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Zr,sa,this.up):Ei.lookAt(sa,Zr,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Ei),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zy),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,r=this.children.length;s<r;s++){const l=this.children[s].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,Wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].updateMatrixWorld(t)}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?{min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}:void 0,boundingSphere:u.boundingSphere?{radius:u.boundingSphere.radius,center:u.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];a(t.shapes,m)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(t.materials,this.material[h]));r.material=u}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(a(t.animations,h))}}if(e){const u=l(t.geometries),h=l(t.materials),d=l(t.textures),p=l(t.images),m=l(t.shapes),_=l(t.skeletons),v=l(t.animations),S=l(t.nodes);u.length>0&&(s.geometries=u),h.length>0&&(s.materials=h),d.length>0&&(s.textures=d),p.length>0&&(s.images=p),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),v.length>0&&(s.animations=v),S.length>0&&(s.nodes=S)}return s.object=r,s;function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const r=t.children[s];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new $(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new $,bi=new $,tc=new $,Ti=new $,nr=new $,ir=new $,ld=new $,ec=new $,nc=new $,ic=new $,sc=new ze,rc=new ze,oc=new ze;class Zn{constructor(t=new $,e=new $,s=new $){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,r){r.subVectors(s,e),Xn.subVectors(t,e),r.cross(Xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,s,r,a){Xn.subVectors(r,e),bi.subVectors(s,e),tc.subVectors(t,e);const l=Xn.dot(Xn),u=Xn.dot(bi),h=Xn.dot(tc),d=bi.dot(bi),p=bi.dot(tc),m=l*d-u*u;if(m===0)return a.set(0,0,0),null;const _=1/m,v=(d*h-u*p)*_,S=(l*p-u*h)*_;return a.set(1-v-S,S,v)}static containsPoint(t,e,s,r){return this.getBarycoord(t,e,s,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,s,r,a,l,u,h){return this.getBarycoord(t,e,s,r,Ti)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Ti.x),h.addScaledVector(l,Ti.y),h.addScaledVector(u,Ti.z),h)}static getInterpolatedAttribute(t,e,s,r,a,l){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,s),oc.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(sc,a.x),l.addScaledVector(rc,a.y),l.addScaledVector(oc,a.z),l}static isFrontFacing(t,e,s,r){return Xn.subVectors(s,e),bi.subVectors(t,e),Xn.cross(bi).dot(r)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,r){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,s,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,s,r,a){return Zn.getInterpolation(t,this.a,this.b,this.c,e,s,r,a)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,r=this.b,a=this.c;let l,u;nr.subVectors(r,s),ir.subVectors(a,s),ec.subVectors(t,s);const h=nr.dot(ec),d=ir.dot(ec);if(h<=0&&d<=0)return e.copy(s);nc.subVectors(t,r);const p=nr.dot(nc),m=ir.dot(nc);if(p>=0&&m<=p)return e.copy(r);const _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(s).addScaledVector(nr,l);ic.subVectors(t,a);const v=nr.dot(ic),S=ir.dot(ic);if(S>=0&&v<=S)return e.copy(a);const b=v*d-h*S;if(b<=0&&d>=0&&S<=0)return u=d/(d-S),e.copy(s).addScaledVector(ir,u);const y=p*S-v*m;if(y<=0&&m-p>=0&&v-S>=0)return ld.subVectors(a,r),u=(m-p)/(m-p+(v-S)),e.copy(r).addScaledVector(ld,u);const g=1/(y+b+_);return l=b*g,u=_*g,e.copy(s).addScaledVector(nr,l).addScaledVector(ir,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pe{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,s,r=ye.workingColorSpace){return this.r=t,this.g=e,this.b=s,ye.toWorkingColorSpace(this,r),this}setHSL(t,e,s,r=ye.workingColorSpace){if(t=Py(t,1),e=me(e,0,1),s=me(s,0,1),e===0)this.r=this.g=this.b=s;else{const a=s<=.5?s*(1+e):s+e-s*e,l=2*s-a;this.r=ac(l,a,t+1/3),this.g=ac(l,a,t),this.b=ac(l,a,t-1/3)}return ye.toWorkingColorSpace(this,r),this}setStyle(t,e=Un){function s(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const s=Dm[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return ye.fromWorkingColorSpace(rn.copy(this),t),Math.round(me(rn.r*255,0,255))*65536+Math.round(me(rn.g*255,0,255))*256+Math.round(me(rn.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(rn.copy(this),e);const s=rn.r,r=rn.g,a=rn.b,l=Math.max(s,r,a),u=Math.min(s,r,a);let h,d;const p=(u+l)/2;if(u===l)h=0,d=0;else{const m=l-u;switch(d=p<=.5?m/(l+u):m/(2-l-u),l){case s:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-s)/m+2;break;case a:h=(s-r)/m+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Un){ye.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,s=rn.g,r=rn.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(t,e,s){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(ra);const s=Wl(Xi.h,ra.h,e),r=Wl(Xi.s,ra.s,e),a=Wl(Xi.l,ra.l,e);return this.setHSL(s,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*s+a[6]*r,this.g=a[1]*e+a[4]*s+a[7]*r,this.b=a[2]*e+a[5]*s+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Pe;Pe.NAMES=Dm;let qy=0;class Qa extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=vr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ic&&(s.blendSrc=this.blendSrc),this.blendDst!==Uc&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yf&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}if(e){const a=r(t.textures),l=r(t.images);a.length>0&&(s.textures=a),l.length>0&&(s.images=l)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const r=e.length;s=new Array(r);for(let a=0;a!==r;++a)s[a]=e[a].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class eh extends Qa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new $,oa=new pe;let Yy=0;class ui{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=jf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[s+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=Gr(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Mn(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),s=Mn(s,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this}setXYZW(t,e,s,r,a){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),s=Mn(s,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jf&&(t.usage=this.usage),t}}class Im extends ui{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class Um extends ui{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class hi extends ui{constructor(t,e,s){super(new Float32Array(t),e,s)}}let jy=0;const In=new We,lc=new Cn,sr=new $,An=new Po,qr=new Po,Qe=new $;class cs extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pm(t)?Um:Im)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const a=new ce().getNormalMatrix(t);s.applyNormalMatrix(a),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,s){return In.makeTranslation(t,e,s),this.applyMatrix4(In),this}scale(t,e,s){return In.makeScale(t,e,s),this.applyMatrix4(In),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const s=[];for(let r=0,a=t.length;r<a;r++){const l=t[r];s.push(l.x,l.y,l.z||0)}this.setAttribute("position",new hi(s,3))}else{const s=Math.min(t.length,e.count);for(let r=0;r<s;r++){const a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];An.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const u=e[a];qr.setFromBufferAttribute(u),this.morphTargetsRelative?(Qe.addVectors(An.min,qr.min),An.expandByPoint(Qe),Qe.addVectors(An.max,qr.max),An.expandByPoint(Qe)):(An.expandByPoint(qr.min),An.expandByPoint(qr.max))}An.getCenter(s);let r=0;for(let a=0,l=t.count;a<l;a++)Qe.fromBufferAttribute(t,a),r=Math.max(r,s.distanceToSquared(Qe));if(e)for(let a=0,l=e.length;a<l;a++){const u=e[a],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)Qe.fromBufferAttribute(u,d),h&&(sr.fromBufferAttribute(t,d),Qe.add(sr)),r=Math.max(r,s.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s.count),4));const l=this.getAttribute("tangent"),u=[],h=[];for(let G=0;G<s.count;G++)u[G]=new $,h[G]=new $;const d=new $,p=new $,m=new $,_=new pe,v=new pe,S=new pe,b=new $,y=new $;function g(G,C,R){d.fromBufferAttribute(s,G),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,R),_.fromBufferAttribute(a,G),v.fromBufferAttribute(a,C),S.fromBufferAttribute(a,R),p.sub(d),m.sub(d),v.sub(_),S.sub(_);const z=1/(v.x*S.y-S.x*v.y);isFinite(z)&&(b.copy(p).multiplyScalar(S.y).addScaledVector(m,-v.y).multiplyScalar(z),y.copy(m).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(z),u[G].add(b),u[C].add(b),u[R].add(b),h[G].add(y),h[C].add(y),h[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let G=0,C=I.length;G<C;++G){const R=I[G],z=R.start,lt=R.count;for(let et=z,mt=z+lt;et<mt;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const D=new $,A=new $,k=new $,H=new $;function N(G){k.fromBufferAttribute(r,G),H.copy(k);const C=u[G];D.copy(C),D.sub(k.multiplyScalar(k.dot(C))).normalize(),A.crossVectors(H,C);const z=A.dot(h[G])<0?-1:1;l.setXYZW(G,D.x,D.y,D.z,z)}for(let G=0,C=I.length;G<C;++G){const R=I[G],z=R.start,lt=R.count;for(let et=z,mt=z+lt;et<mt;et+=3)N(t.getX(et+0)),N(t.getX(et+1)),N(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let _=0,v=s.count;_<v;_++)s.setXYZ(_,0,0,0);const r=new $,a=new $,l=new $,u=new $,h=new $,d=new $,p=new $,m=new $;if(t)for(let _=0,v=t.count;_<v;_+=3){const S=t.getX(_+0),b=t.getX(_+1),y=t.getX(_+2);r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,b),l.fromBufferAttribute(e,y),p.subVectors(l,a),m.subVectors(r,a),p.cross(m),u.fromBufferAttribute(s,S),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,y),u.add(p),h.add(p),d.add(p),s.setXYZ(S,u.x,u.y,u.z),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,v=e.count;_<v;_+=3)r.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),p.subVectors(l,a),m.subVectors(r,a),p.cross(m),s.setXYZ(_+0,p.x,p.y,p.z),s.setXYZ(_+1,p.x,p.y,p.z),s.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(u,h){const d=u.array,p=u.itemSize,m=u.normalized,_=new d.constructor(h.length*p);let v=0,S=0;for(let b=0,y=h.length;b<y;b++){u.isInterleavedBufferAttribute?v=h[b]*u.data.stride+u.offset:v=h[b]*p;for(let g=0;g<p;g++)_[S++]=d[v++]}return new ui(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cs,s=this.index.array,r=this.attributes;for(const u in r){const h=r[u],d=t(h,s);e.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let p=0,m=d.length;p<m;p++){const _=d[p],v=t(_,s);h.push(v)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const h in s){const d=s[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){const v=d[m];p.push(v.toJSON(t.data))}p.length>0&&(r[h]=p,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const r=t.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(e))}const a=t.morphAttributes;for(const d in a){const p=[],m=a[d];for(let _=0,v=m.length;_<v;_++)p.push(m[_].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let d=0,p=l.length;d<p;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cd=new We,xs=new Cm,aa=new th,ud=new $,la=new $,ca=new $,ua=new $,cc=new $,ha=new $,hd=new $,fa=new $;class li extends Cn{constructor(t=new cs,e=new eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const s=this.geometry,r=s.attributes.position,a=s.morphAttributes.position,l=s.morphTargetsRelative;e.fromBufferAttribute(r,t);const u=this.morphTargetInfluences;if(a&&u){ha.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const p=u[h],m=a[h];p!==0&&(cc.fromBufferAttribute(m,t),l?ha.addScaledVector(cc,p):ha.addScaledVector(cc.sub(e),p))}e.add(ha)}return e}raycast(t,e){const s=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),aa.copy(s.boundingSphere),aa.applyMatrix4(a),xs.copy(t.ray).recast(t.near),!(aa.containsPoint(xs.origin)===!1&&(xs.intersectSphere(aa,ud)===null||xs.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(cd.copy(a).invert(),xs.copy(t.ray).applyMatrix4(cd),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,s){let r;const a=this.geometry,l=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,b=_.length;S<b;S++){const y=_[S],g=l[y.materialIndex],I=Math.max(y.start,v.start),D=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let A=I,k=D;A<k;A+=3){const H=u.getX(A),N=u.getX(A+1),G=u.getX(A+2);r=da(this,g,t,s,d,p,m,H,N,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),b=Math.min(u.count,v.start+v.count);for(let y=S,g=b;y<g;y+=3){const I=u.getX(y),D=u.getX(y+1),A=u.getX(y+2);r=da(this,l,t,s,d,p,m,I,D,A),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let S=0,b=_.length;S<b;S++){const y=_[S],g=l[y.materialIndex],I=Math.max(y.start,v.start),D=Math.min(h.count,Math.min(y.start+y.count,v.start+v.count));for(let A=I,k=D;A<k;A+=3){const H=A,N=A+1,G=A+2;r=da(this,g,t,s,d,p,m,H,N,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),b=Math.min(h.count,v.start+v.count);for(let y=S,g=b;y<g;y+=3){const I=y,D=y+1,A=y+2;r=da(this,l,t,s,d,p,m,I,D,A),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Ky(n,t,e,s,r,a,l,u){let h;if(t.side===En?h=s.intersectTriangle(l,a,r,!0,u):h=s.intersectTriangle(r,a,l,t.side===ss,u),h===null)return null;fa.copy(u),fa.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(fa);return d<e.near||d>e.far?null:{distance:d,point:fa.clone(),object:n}}function da(n,t,e,s,r,a,l,u,h,d){n.getVertexPosition(u,la),n.getVertexPosition(h,ca),n.getVertexPosition(d,ua);const p=Ky(n,t,e,s,la,ca,ua,hd);if(p){const m=new $;Zn.getBarycoord(hd,la,ca,ua,m),r&&(p.uv=Zn.getInterpolatedAttribute(r,u,h,d,m,new pe)),a&&(p.uv1=Zn.getInterpolatedAttribute(a,u,h,d,m,new pe)),l&&(p.normal=Zn.getInterpolatedAttribute(l,u,h,d,m,new $),p.normal.dot(s.direction)>0&&p.normal.multiplyScalar(-1));const _={a:u,b:h,c:d,normal:new $,materialIndex:0};Zn.getNormal(la,ca,ua,_.normal),p.face=_,p.barycoord=m}return p}class Ro extends cs{constructor(t=1,e=1,s=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:r,heightSegments:a,depthSegments:l};const u=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const h=[],d=[],p=[],m=[];let _=0,v=0;S("z","y","x",-1,-1,s,e,t,l,a,0),S("z","y","x",1,-1,s,e,-t,l,a,1),S("x","z","y",1,1,t,s,e,r,l,2),S("x","z","y",1,-1,t,s,-e,r,l,3),S("x","y","z",1,-1,t,e,s,r,a,4),S("x","y","z",-1,-1,t,e,-s,r,a,5),this.setIndex(h),this.setAttribute("position",new hi(d,3)),this.setAttribute("normal",new hi(p,3)),this.setAttribute("uv",new hi(m,2));function S(b,y,g,I,D,A,k,H,N,G,C){const R=A/N,z=k/G,lt=A/2,et=k/2,mt=H/2,vt=N+1,Q=G+1;let it=0,V=0;const Ct=new $;for(let _t=0;_t<Q;_t++){const Pt=_t*z-et;for(let kt=0;kt<vt;kt++){const Qt=kt*R-lt;Ct[b]=Qt*I,Ct[y]=Pt*D,Ct[g]=mt,d.push(Ct.x,Ct.y,Ct.z),Ct[b]=0,Ct[y]=0,Ct[g]=H>0?1:-1,p.push(Ct.x,Ct.y,Ct.z),m.push(kt/N),m.push(1-_t/G),it+=1}}for(let _t=0;_t<G;_t++)for(let Pt=0;Pt<N;Pt++){const kt=_+Pt+vt*_t,Qt=_+Pt+vt*(_t+1),at=_+(Pt+1)+vt*(_t+1),gt=_+(Pt+1)+vt*_t;h.push(kt,Qt,gt),h.push(Qt,at,gt),V+=6}u.addGroup(v,V,C),v+=V,_+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(n){const t={};for(const e in n){t[e]={};for(const s in n[e]){const r=n[e][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=r.clone():Array.isArray(r)?t[e][s]=r.slice():t[e][s]=r}}return t}function hn(n){const t={};for(let e=0;e<n.length;e++){const s=Ar(n[e]);for(const r in s)t[r]=s[r]}return t}function $y(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Om(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const Jy={clone:Ar,merge:hn};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Qa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=$y(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class Nm extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new $,fd=new pe,dd=new pe;class Nn extends Nm{constructor(t=50,e=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,s){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,fd,dd),e.subVectors(dd,fd)}setViewOffset(t,e,s,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pa*.5*this.fov)/this.zoom,s=2*e,r=this.aspect*s,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;a+=l.offsetX*r/h,e-=l.offsetY*s/d,r*=l.width/h,s*=l.height/d}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,or=1;class eM extends Cn{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(rr,or,t,e);r.layers=this.layers,this.add(r);const a=new Nn(rr,or,t,e);a.layers=this.layers,this.add(a);const l=new Nn(rr,or,t,e);l.layers=this.layers,this.add(l);const u=new Nn(rr,or,t,e);u.layers=this.layers,this.add(u);const h=new Nn(rr,or,t,e);h.layers=this.layers,this.add(h);const d=new Nn(rr,or,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,r,a,l,u,h]=e;for(const d of e)this.remove(d);if(t===Di)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ka)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,h,d,p]=this.children,m=t.getRenderTarget(),_=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,r),t.render(e,a),t.setRenderTarget(s,1,r),t.render(e,l),t.setRenderTarget(s,2,r),t.render(e,u),t.setRenderTarget(s,3,r),t.render(e,h),t.setRenderTarget(s,4,r),t.render(e,d),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,r),t.render(e,p),t.setRenderTarget(m,_,v),t.xr.enabled=S,s.texture.needsPMREMUpdate=!0}}class Fm extends gn{constructor(t=[],e=br,s,r,a,l,u,h,d,p){super(t,e,s,r,a,l,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends Ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},r=[s,s,s,s,s,s];this.texture=new Fm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),a=new rs({name:"CubemapFromEquirect",uniforms:Ar(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:En,blending:ns});a.uniforms.tEquirect.value=e;const l=new li(r,a),u=e.minFilter;return e.minFilter===Ps&&(e.minFilter=ai),new eM(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,s=!0,r=!0){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,s,r);t.setRenderTarget(a)}}class pa extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let r=null,a=null,l=null;const u=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(const b of t.hand.values()){const y=e.getJointPose(b,s),g=this._getHandJoint(d,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),v=.02,S=.005;d.inputState.pinching&&_>v+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=v-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,s),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=e.getPose(t.targetRaySpace,s),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new pa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class sM extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hc=new $,rM=new $,oM=new ce;class $i{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,r){return this.normal.set(t,e,s),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const r=hc.subVectors(s,e).cross(rM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||oM.getNormalMatrix(t),r=this.coplanarPoint(hc).applyMatrix4(t),a=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new th,ma=new $;class Bm{constructor(t=new $i,e=new $i,s=new $i,r=new $i,a=new $i,l=new $i){this.planes=[t,e,s,r,a,l]}set(t,e,s,r,a,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(s),u[3].copy(r),u[4].copy(a),u[5].copy(l),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=Di){const s=this.planes,r=t.elements,a=r[0],l=r[1],u=r[2],h=r[3],d=r[4],p=r[5],m=r[6],_=r[7],v=r[8],S=r[9],b=r[10],y=r[11],g=r[12],I=r[13],D=r[14],A=r[15];if(s[0].setComponents(h-a,_-d,y-v,A-g).normalize(),s[1].setComponents(h+a,_+d,y+v,A+g).normalize(),s[2].setComponents(h+l,_+p,y+S,A+I).normalize(),s[3].setComponents(h-l,_-p,y-S,A-I).normalize(),s[4].setComponents(h-u,_-m,y-b,A-D).normalize(),e===Di)s[5].setComponents(h+u,_+m,y+b,A+D).normalize();else if(e===ka)s[5].setComponents(u,m,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const e=this.planes,s=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(s)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const r=e[s];if(ma.x=r.normal.x>0?t.max.x:t.min.x,ma.y=r.normal.y>0?t.max.y:t.min.y,ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zm extends gn{constructor(t,e,s=Os,r,a,l,u=$n,h=$n,d,p=vo){if(p!==vo&&p!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,a,l,u,h,p,s,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tl extends cs{constructor(t=1,e=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:r};const a=t/2,l=e/2,u=Math.floor(s),h=Math.floor(r),d=u+1,p=h+1,m=t/u,_=e/h,v=[],S=[],b=[],y=[];for(let g=0;g<p;g++){const I=g*_-l;for(let D=0;D<d;D++){const A=D*m-a;S.push(A,-I,0),b.push(0,0,1),y.push(D/u),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<u;I++){const D=I+d*g,A=I+d*(g+1),k=I+1+d*(g+1),H=I+1+d*g;v.push(D,A,H),v.push(A,k,H)}this.setIndex(v),this.setAttribute("position",new hi(S,3)),this.setAttribute("normal",new hi(b,3)),this.setAttribute("uv",new hi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class nh extends cs{constructor(t=1,e=32,s=16,r=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:s,phiStart:r,phiLength:a,thetaStart:l,thetaLength:u},e=Math.max(3,Math.floor(e)),s=Math.max(2,Math.floor(s));const h=Math.min(l+u,Math.PI);let d=0;const p=[],m=new $,_=new $,v=[],S=[],b=[],y=[];for(let g=0;g<=s;g++){const I=[],D=g/s;let A=0;g===0&&l===0?A=.5/e:g===s&&h===Math.PI&&(A=-.5/e);for(let k=0;k<=e;k++){const H=k/e;m.x=-t*Math.cos(r+H*a)*Math.sin(l+D*u),m.y=t*Math.cos(l+D*u),m.z=t*Math.sin(r+H*a)*Math.sin(l+D*u),S.push(m.x,m.y,m.z),_.copy(m).normalize(),b.push(_.x,_.y,_.z),y.push(H+A,1-D),I.push(d++)}p.push(I)}for(let g=0;g<s;g++)for(let I=0;I<e;I++){const D=p[g][I+1],A=p[g][I],k=p[g+1][I],H=p[g+1][I+1];(g!==0||l>0)&&v.push(D,A,H),(g!==s-1||h<Math.PI)&&v.push(A,k,H)}this.setIndex(v),this.setAttribute("position",new hi(S,3)),this.setAttribute("normal",new hi(b,3)),this.setAttribute("uv",new hi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class aM extends Qa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lM extends Qa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pd={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cM{constructor(t,e,s){const r=this;let a=!1,l=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(p){u++,a===!1&&r.onStart!==void 0&&r.onStart(p,l,u),a=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,u),l===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const v=d[m],S=d[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null}}}const uM=new cM;class ih{constructor(t){this.manager=t!==void 0?t:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(r,a){s.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ih.DEFAULT_MATERIAL_NAME="__DEFAULT";class hM extends ih{constructor(t){super(t)}load(t,e,s,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=pd.get(t);if(l!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0),l;const u=yo("img");function h(){p(),pd.add(t,this),e&&e(this),a.manager.itemEnd(t)}function d(m){p(),r&&r(m),a.manager.itemError(t),a.manager.itemEnd(t)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class fM extends ih{constructor(t){super(t)}load(t,e,s,r){const a=new gn,l=new hM(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},s,r),a}}class dM extends Nm{constructor(t=-1,e=1,s=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=s-t,l=s+t,u=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pM extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class md{constructor(t=1,e=0,s=0){this.radius=t,this.phi=e,this.theta=s}set(t,e,s){return this.radius=t,this.phi=e,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,s){return this.radius=Math.sqrt(t*t+e*e+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mM extends zs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _d(n,t,e,s){const r=_M(s);switch(e){case Sm:return n*t;case bm:return n*t/r.components*r.byteLength;case Ku:return n*t/r.components*r.byteLength;case Tm:return n*t*2/r.components*r.byteLength;case $u:return n*t*2/r.components*r.byteLength;case Em:return n*t*3/r.components*r.byteLength;case qn:return n*t*4/r.components*r.byteLength;case Ju:return n*t*4/r.components*r.byteLength;case Ea:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:case jc:return Math.max(n,16)*Math.max(t,8)/4;case Zc:case Yc:return Math.max(n,8)*Math.max(t,8)/2;case Kc:case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case iu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Aa:case du:case pu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wm:case mu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _u:case gu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _M(n){switch(n){case Ui:case xm:return{byteLength:1,components:1};case _o:case ym:case wo:return{byteLength:2,components:1};case Yu:case ju:return{byteLength:2,components:4};case Os:case qu:case Li:return{byteLength:4,components:1};case Mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function km(){let n=null,t=!1,e=null,s=null;function r(a,l){e(a,l),s=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(s=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function gM(n){const t=new WeakMap;function e(u,h){const d=u.array,p=u.usage,m=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,p),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,h,d){const p=h.array,m=h.updateRanges;if(n.bindBuffer(d,u),m.length===0)n.bufferSubData(d,0,p);else{m.sort((v,S)=>v.start-S.start);let _=0;for(let v=1;v<m.length;v++){const S=m[_],b=m[v];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++_,m[_]=b)}m.length=_+1;for(let v=0,S=m.length;v<S;v++){const b=m[v];n.bufferSubData(d,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=t.get(u);h&&(n.deleteBuffer(h.buffer),t.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=t.get(u);if(d===void 0)t.set(u,e(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,h),d.version=u.version}}return{get:r,remove:a,update:l}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xM=`#ifdef USE_ALPHAHASH
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
#endif`,yM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
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
#endif`,eS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rS=`#ifdef USE_GRADIENTMAP
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
}`,oS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
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
#endif`,uS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,hS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_S=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AS=`#if defined( USE_POINTS_UV )
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
#endif`,PS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
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
#endif`,US=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kS=`#ifdef USE_NORMALMAP
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
#endif`,HS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,bE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
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
}`,wE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
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
}`,CE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,DE=`uniform vec3 diffuse;
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
}`,IE=`#define LAMBERT
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
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,OE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
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
}`,kE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,HE=`#define STANDARD
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
}`,VE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,GE=`#define TOON
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
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,XE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jE=`uniform float rotation;
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
}`,KE=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:vM,alphahash_pars_fragment:xM,alphamap_fragment:yM,alphamap_pars_fragment:MM,alphatest_fragment:SM,alphatest_pars_fragment:EM,aomap_fragment:bM,aomap_pars_fragment:TM,batching_pars_vertex:wM,batching_vertex:AM,begin_vertex:PM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:NM,color_fragment:FM,color_pars_fragment:BM,color_pars_vertex:zM,color_vertex:kM,common:HM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:GM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:ZM,emissivemap_pars_fragment:qM,colorspace_fragment:YM,colorspace_pars_fragment:jM,envmap_fragment:KM,envmap_common_pars_fragment:$M,envmap_pars_fragment:JM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:uS,envmap_vertex:tS,fog_vertex:eS,fog_pars_vertex:nS,fog_fragment:iS,fog_pars_fragment:sS,gradientmap_pars_fragment:rS,lightmap_pars_fragment:oS,lights_lambert_fragment:aS,lights_lambert_pars_fragment:lS,lights_pars_begin:cS,lights_toon_fragment:hS,lights_toon_pars_fragment:fS,lights_phong_fragment:dS,lights_phong_pars_fragment:pS,lights_physical_fragment:mS,lights_physical_pars_fragment:_S,lights_fragment_begin:gS,lights_fragment_maps:vS,lights_fragment_end:xS,logdepthbuf_fragment:yS,logdepthbuf_pars_fragment:MS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:ES,map_fragment:bS,map_pars_fragment:TS,map_particle_fragment:wS,map_particle_pars_fragment:AS,metalnessmap_fragment:PS,metalnessmap_pars_fragment:RS,morphinstance_vertex:CS,morphcolor_vertex:LS,morphnormal_vertex:DS,morphtarget_pars_vertex:IS,morphtarget_vertex:US,normal_fragment_begin:OS,normal_fragment_maps:NS,normal_pars_fragment:FS,normal_pars_vertex:BS,normal_vertex:zS,normalmap_pars_fragment:kS,clearcoat_normal_fragment_begin:HS,clearcoat_normal_fragment_maps:VS,clearcoat_pars_fragment:GS,iridescence_pars_fragment:WS,opaque_fragment:XS,packing:ZS,premultiplied_alpha_fragment:qS,project_vertex:YS,dithering_fragment:jS,dithering_pars_fragment:KS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:JS,shadowmap_pars_fragment:QS,shadowmap_pars_vertex:tE,shadowmap_vertex:eE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:sE,skinning_vertex:rE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:hE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:_E,background_vert:gE,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:ME,cube_frag:SE,depth_vert:EE,depth_frag:bE,distanceRGBA_vert:TE,distanceRGBA_frag:wE,equirect_vert:AE,equirect_frag:PE,linedashed_vert:RE,linedashed_frag:CE,meshbasic_vert:LE,meshbasic_frag:DE,meshlambert_vert:IE,meshlambert_frag:UE,meshmatcap_vert:OE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:BE,meshphong_vert:zE,meshphong_frag:kE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:GE,meshtoon_frag:WE,points_vert:XE,points_frag:ZE,shadow_vert:qE,shadow_frag:YE,sprite_vert:jE,sprite_frag:KE},It={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},oi={basic:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:hn([It.points,It.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:hn([It.common,It.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:hn([It.sprite,It.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:hn([It.common,It.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:hn([It.lights,It.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const _a={r:0,b:0,g:0},Ms=new Oi,$E=new We;function JE(n,t,e,s,r,a,l){const u=new Pe(0);let h=a===!0?0:1,d,p,m=null,_=0,v=null;function S(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?e:t).get(A)),A}function b(D){let A=!1;const k=S(D);k===null?g(u,h):k&&k.isColor&&(g(k,1),A=!0);const H=n.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,l):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,l),(n.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(D,A){const k=S(A);k&&(k.isCubeTexture||k.mapping===Ja)?(p===void 0&&(p=new li(new Ro(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Ar(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Ms.copy(A.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),p.material.uniforms.envMap.value=k,p.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(Ms)),p.material.toneMapped=ye.getTransfer(k.colorSpace)!==we,(m!==k||_!==k.version||v!==n.toneMapping)&&(p.material.needsUpdate=!0,m=k,_=k.version,v=n.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):k&&k.isTexture&&(d===void 0&&(d=new li(new tl(2,2),new rs({name:"BackgroundMaterial",uniforms:Ar(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=k,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=ye.getTransfer(k.colorSpace)!==we,k.matrixAutoUpdate===!0&&k.updateMatrix(),d.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||_!==k.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,m=k,_=k.version,v=n.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function g(D,A){D.getRGB(_a,Om(n)),s.buffers.color.setClear(_a.r,_a.g,_a.b,A,l)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,A=1){u.set(D),h=A,g(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(u,h)},render:b,addToRenderList:y,dispose:I}}function QE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),s={},r=_(null);let a=r,l=!1;function u(R,z,lt,et,mt){let vt=!1;const Q=m(et,lt,z);a!==Q&&(a=Q,d(a.object)),vt=v(R,et,lt,mt),vt&&S(R,et,lt,mt),mt!==null&&t.update(mt,n.ELEMENT_ARRAY_BUFFER),(vt||l)&&(l=!1,A(R,z,lt,et),mt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function h(){return n.createVertexArray()}function d(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function m(R,z,lt){const et=lt.wireframe===!0;let mt=s[R.id];mt===void 0&&(mt={},s[R.id]=mt);let vt=mt[z.id];vt===void 0&&(vt={},mt[z.id]=vt);let Q=vt[et];return Q===void 0&&(Q=_(h()),vt[et]=Q),Q}function _(R){const z=[],lt=[],et=[];for(let mt=0;mt<e;mt++)z[mt]=0,lt[mt]=0,et[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:lt,attributeDivisors:et,object:R,attributes:{},index:null}}function v(R,z,lt,et){const mt=a.attributes,vt=z.attributes;let Q=0;const it=lt.getAttributes();for(const V in it)if(it[V].location>=0){const _t=mt[V];let Pt=vt[V];if(Pt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Pt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Pt=R.instanceColor)),_t===void 0||_t.attribute!==Pt||Pt&&_t.data!==Pt.data)return!0;Q++}return a.attributesNum!==Q||a.index!==et}function S(R,z,lt,et){const mt={},vt=z.attributes;let Q=0;const it=lt.getAttributes();for(const V in it)if(it[V].location>=0){let _t=vt[V];_t===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const Pt={};Pt.attribute=_t,_t&&_t.data&&(Pt.data=_t.data),mt[V]=Pt,Q++}a.attributes=mt,a.attributesNum=Q,a.index=et}function b(){const R=a.newAttributes;for(let z=0,lt=R.length;z<lt;z++)R[z]=0}function y(R){g(R,0)}function g(R,z){const lt=a.newAttributes,et=a.enabledAttributes,mt=a.attributeDivisors;lt[R]=1,et[R]===0&&(n.enableVertexAttribArray(R),et[R]=1),mt[R]!==z&&(n.vertexAttribDivisor(R,z),mt[R]=z)}function I(){const R=a.newAttributes,z=a.enabledAttributes;for(let lt=0,et=z.length;lt<et;lt++)z[lt]!==R[lt]&&(n.disableVertexAttribArray(lt),z[lt]=0)}function D(R,z,lt,et,mt,vt,Q){Q===!0?n.vertexAttribIPointer(R,z,lt,mt,vt):n.vertexAttribPointer(R,z,lt,et,mt,vt)}function A(R,z,lt,et){b();const mt=et.attributes,vt=lt.getAttributes(),Q=z.defaultAttributeValues;for(const it in vt){const V=vt[it];if(V.location>=0){let Ct=mt[it];if(Ct===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(Ct=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(Ct=R.instanceColor)),Ct!==void 0){const _t=Ct.normalized,Pt=Ct.itemSize,kt=t.get(Ct);if(kt===void 0)continue;const Qt=kt.buffer,at=kt.type,gt=kt.bytesPerElement,Mt=at===n.INT||at===n.UNSIGNED_INT||Ct.gpuType===qu;if(Ct.isInterleavedBufferAttribute){const W=Ct.data,dt=W.stride,St=Ct.offset;if(W.isInstancedInterleavedBuffer){for(let yt=0;yt<V.locationSize;yt++)g(V.location+yt,W.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<V.locationSize;yt++)y(V.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let yt=0;yt<V.locationSize;yt++)D(V.location+yt,Pt/V.locationSize,at,_t,dt*gt,(St+Pt/V.locationSize*yt)*gt,Mt)}else{if(Ct.isInstancedBufferAttribute){for(let W=0;W<V.locationSize;W++)g(V.location+W,Ct.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let W=0;W<V.locationSize;W++)y(V.location+W);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let W=0;W<V.locationSize;W++)D(V.location+W,Pt/V.locationSize,at,_t,Pt*gt,Pt/V.locationSize*W*gt,Mt)}}else if(Q!==void 0){const _t=Q[it];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(V.location,_t);break;case 3:n.vertexAttrib3fv(V.location,_t);break;case 4:n.vertexAttrib4fv(V.location,_t);break;default:n.vertexAttrib1fv(V.location,_t)}}}}I()}function k(){G();for(const R in s){const z=s[R];for(const lt in z){const et=z[lt];for(const mt in et)p(et[mt].object),delete et[mt];delete z[lt]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const z=s[R.id];for(const lt in z){const et=z[lt];for(const mt in et)p(et[mt].object),delete et[mt];delete z[lt]}delete s[R.id]}function N(R){for(const z in s){const lt=s[z];if(lt[R.id]===void 0)continue;const et=lt[R.id];for(const mt in et)p(et[mt].object),delete et[mt];delete lt[R.id]}}function G(){C(),l=!0,a!==r&&(a=r,d(a.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:G,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:y,disableUnusedAttributes:I}}function tb(n,t,e){let s;function r(d){s=d}function a(d,p){n.drawArrays(s,d,p),e.update(p,s,1)}function l(d,p,m){m!==0&&(n.drawArraysInstanced(s,d,p,m),e.update(p,s,m))}function u(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=p[S];e.update(v,s,1)}function h(d,p,m,_){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<d.length;S++)l(d[S],p[S],_[S]);else{v.multiDrawArraysInstancedWEBGL(s,d,0,p,0,_,0,m);let S=0;for(let b=0;b<m;b++)S+=p[b]*_[b];e.update(S,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eb(n,t,e,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==qn&&s.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const G=N===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ui&&s.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Li&&!G)}function h(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=S>0,H=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:k,maxSamples:H}}function nb(n){const t=this;let e=null,s=0,r=!1,a=!1;const l=new $i,u=new ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const v=m.length!==0||_||s!==0||r;return r=_,s=m.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){e=p(m,_,0)},this.setState=function(m,_,v){const S=m.clippingPlanes,b=m.clipIntersection,y=m.clipShadows,g=n.get(m);if(!r||S===null||S.length===0||a&&!y)a?p(null):d();else{const I=a?0:s,D=I*4;let A=g.clippingState||null;h.value=A,A=p(S,_,D,v);for(let k=0;k!==D;++k)A[k]=e[k];g.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function p(m,_,v,S){const b=m!==null?m.length:0;let y=null;if(b!==0){if(y=h.value,S!==!0||y===null){const g=v+b*4,I=_.matrixWorldInverse;u.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,A=v;D!==b;++D,A+=4)l.copy(m[D]).applyMatrix4(I,u),l.normal.toArray(y,A),y[A+3]=l.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function ib(n){let t=new WeakMap;function e(l,u){return u===Vc?l.mapping=br:u===Gc&&(l.mapping=Tr),l}function s(l){if(l&&l.isTexture){const u=l.mapping;if(u===Vc||u===Gc)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new nM(h.height);return d.fromEquirectangularTexture(n,l),t.set(l,d),l.addEventListener("dispose",r),e(d.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function a(){t=new WeakMap}return{get:s,dispose:a}}const dr=4,gd=[.125,.215,.35,.446,.526,.582],ws=20,fc=new dM,vd=new Pe;let dc=null,pc=0,mc=0,_c=!1;const bs=(1+Math.sqrt(5))/2,ar=1/bs,xd=[new $(-bs,ar,0),new $(bs,ar,0),new $(-ar,0,bs),new $(ar,0,bs),new $(0,bs,-ar),new $(0,bs,ar),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],sb=new $;class yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,r=100,a={}){const{size:l=256,position:u=sb}=a;dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,s,r,h,u),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=_c,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:wo,format:qn,colorSpace:wr,depthBuffer:!1},r=Md(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,s);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(a)),this._blurMaterial=ob(a,t,e)}return r}_compileMaterial(t){const e=new li(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,s,r,a){const h=new Nn(90,1,e,s),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(vd),m.toneMapping=is,m.autoClear=!1;const S=new eh({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),b=new li(new Ro,S);let y=!1;const g=t.background;g?g.isColor&&(S.color.copy(g),t.background=null,y=!0):(S.color.copy(vd),y=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(h.up.set(0,d[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[I],a.y,a.z)):D===1?(h.up.set(0,0,d[I]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[I],a.z)):(h.up.set(0,d[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[I]));const A=this._cubeSize;ga(r,D*A,I>2?A:0,A,A),m.setRenderTarget(r),y&&m.render(b,h),m.render(t,h)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=v,m.autoClear=_,t.background=g}_textureToCubeUV(t,e){const s=this._renderer,r=t.mapping===br||t.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new li(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const h=this._cubeSize;ga(e,0,0,3*h,2*h),s.setRenderTarget(e),s.render(l,fc)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=xd[(r-a-1)%xd.length];this._blur(t,a-1,a,l,u)}e.autoClear=s}_blur(t,e,s,r,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,s,r,"latitudinal",a),this._halfBlur(l,t,s,s,r,"longitudinal",a)}_halfBlur(t,e,s,r,a,l,u){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new li(this._lodPlanes[r],d),_=d.uniforms,v=this._sizeLods[s]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*ws-1),b=a/S,y=isFinite(a)?1+Math.floor(p*b):ws;y>ws&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const g=[];let I=0;for(let N=0;N<ws;++N){const G=N/b,C=Math.exp(-G*G/2);g.push(C),N===0?I+=C:N<y&&(I+=2*C)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=l==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:D}=this;_.dTheta.value=S,_.mipInt.value=D-s;const A=this._sizeLods[r],k=3*A*(r>D-dr?r-D+dr:0),H=4*(this._cubeSize-A);ga(e,k,H,3*A,2*A),h.setRenderTarget(e),h.render(m,fc)}}function rb(n){const t=[],e=[],s=[];let r=n;const a=n-dr+1+gd.length;for(let l=0;l<a;l++){const u=Math.pow(2,r);e.push(u);let h=1/u;l>n-dr?h=gd[l-n+dr-1]:l===0&&(h=0),s.push(h);const d=1/(u-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,S=6,b=3,y=2,g=1,I=new Float32Array(b*S*v),D=new Float32Array(y*S*v),A=new Float32Array(g*S*v);for(let H=0;H<v;H++){const N=H%3*2/3-1,G=H>2?0:-1,C=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];I.set(C,b*S*H),D.set(_,y*S*H);const R=[H,H,H,H,H,H];A.set(R,g*S*H)}const k=new cs;k.setAttribute("position",new ui(I,b)),k.setAttribute("uv",new ui(D,y)),k.setAttribute("faceIndex",new ui(A,g)),t.push(k),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function Md(n,t,e){const s=new Ns(n,t,e);return s.texture.mapping=Ja,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ga(n,t,e,s,r){n.viewport.set(t,e,s,r),n.scissor.set(t,e,s,r)}function ob(n,t,e){const s=new Float32Array(ws),r=new $(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Sd(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ed(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function ab(n){let t=new WeakMap,e=null;function s(u){if(u&&u.isTexture){const h=u.mapping,d=h===Vc||h===Gc,p=h===br||h===Tr;if(d||p){let m=t.get(u);const _=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return e===null&&(e=new yd(n)),m=d?e.fromEquirectangular(u,m):e.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return d&&v&&v.height>0||p&&v&&r(v)?(e===null&&(e=new yd(n)),m=d?e.fromEquirectangular(u):e.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function r(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:l}}function lb(n){const t={};function e(s){if(t[s]!==void 0)return t[s];let r;switch(s){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(s)}return t[s]=r,r}return{has:function(s){return e(s)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(s){const r=e(s);return r===null&&Ra("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function cb(n,t,e,s){const r={},a=new WeakMap;function l(m){const _=m.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",l),delete r[_.id];const v=a.get(_);v&&(t.remove(v),a.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function u(m,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function h(m){const _=m.attributes;for(const v in _)t.update(_[v],n.ARRAY_BUFFER)}function d(m){const _=[],v=m.index,S=m.attributes.position;let b=0;if(v!==null){const I=v.array;b=v.version;for(let D=0,A=I.length;D<A;D+=3){const k=I[D+0],H=I[D+1],N=I[D+2];_.push(k,H,H,N,N,k)}}else if(S!==void 0){const I=S.array;b=S.version;for(let D=0,A=I.length/3-1;D<A;D+=3){const k=D+0,H=D+1,N=D+2;_.push(k,H,H,N,N,k)}}else return;const y=new(Pm(_)?Um:Im)(_,1);y.version=b;const g=a.get(m);g&&t.remove(g),a.set(m,y)}function p(m){const _=a.get(m);if(_){const v=m.index;v!==null&&_.version<v.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:h,getWireframeAttribute:p}}function ub(n,t,e){let s;function r(_){s=_}let a,l;function u(_){a=_.type,l=_.bytesPerElement}function h(_,v){n.drawElements(s,v,a,_*l),e.update(v,s,1)}function d(_,v,S){S!==0&&(n.drawElementsInstanced(s,v,a,_*l,S),e.update(v,s,S))}function p(_,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,a,_,0,S);let y=0;for(let g=0;g<S;g++)y+=v[g];e.update(y,s,1)}function m(_,v,S,b){if(S===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)d(_[g]/l,v[g],b[g]);else{y.multiDrawElementsInstancedWEBGL(s,v,0,a,_,0,b,0,S);let g=0;for(let I=0;I<S;I++)g+=v[I]*b[I];e.update(g,s,1)}}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function hb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,l,u){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=u*(a/3);break;case n.LINES:e.lines+=u*(a/2);break;case n.LINE_STRIP:e.lines+=u*(a-1);break;case n.LINE_LOOP:e.lines+=u*a;break;case n.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:s}}function fb(n,t,e){const s=new WeakMap,r=new ze;function a(l,u,h){const d=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let R=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",R)};var v=R;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let A=0;S===!0&&(A=1),b===!0&&(A=2),y===!0&&(A=3);let k=u.attributes.position.count*A,H=1;k>t.maxTextureSize&&(H=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const N=new Float32Array(k*H*4*m),G=new Rm(N,k,H,m);G.type=Li,G.needsUpdate=!0;const C=A*4;for(let z=0;z<m;z++){const lt=g[z],et=I[z],mt=D[z],vt=k*H*4*z;for(let Q=0;Q<lt.count;Q++){const it=Q*C;S===!0&&(r.fromBufferAttribute(lt,Q),N[vt+it+0]=r.x,N[vt+it+1]=r.y,N[vt+it+2]=r.z,N[vt+it+3]=0),b===!0&&(r.fromBufferAttribute(et,Q),N[vt+it+4]=r.x,N[vt+it+5]=r.y,N[vt+it+6]=r.z,N[vt+it+7]=0),y===!0&&(r.fromBufferAttribute(mt,Q),N[vt+it+8]=r.x,N[vt+it+9]=r.y,N[vt+it+10]=r.z,N[vt+it+11]=mt.itemSize===4?r.w:1)}}_={count:m,texture:G,size:new pe(k,H)},s.set(u,_),u.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let S=0;for(let y=0;y<d.length;y++)S+=d[y];const b=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:a}}function db(n,t,e,s){let r=new WeakMap;function a(h){const d=s.render.frame,p=h.geometry,m=t.get(h,p);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return m}function l(){r=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}const Hm=new gn,bd=new zm(1,1),Vm=new Rm,Gm=new zy,Wm=new Fm,Td=[],wd=[],Ad=new Float32Array(16),Pd=new Float32Array(9),Rd=new Float32Array(4);function Pr(n,t,e){const s=n[0];if(s<=0||s>0)return n;const r=t*e;let a=Td[r];if(a===void 0&&(a=new Float32Array(r),Td[r]=a),t!==0){s.toArray(a,0);for(let l=1,u=0;l!==t;++l)u+=e,n[l].toArray(a,u)}return a}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,s=n.length;e<s;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,s=t.length;e<s;e++)n[e]=t[e]}function el(n,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let s=0;s!==t;++s)e[s]=n.allocateTextureUnit();return e}function pb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function vb(n,t){const e=this.cache,s=t.elements;if(s===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,s))return;Rd.set(s),n.uniformMatrix2fv(this.addr,!1,Rd),Ye(e,s)}}function xb(n,t){const e=this.cache,s=t.elements;if(s===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,s))return;Pd.set(s),n.uniformMatrix3fv(this.addr,!1,Pd),Ye(e,s)}}function yb(n,t){const e=this.cache,s=t.elements;if(s===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,s))return;Ad.set(s),n.uniformMatrix4fv(this.addr,!1,Ad),Ye(e,s)}}function Mb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function Eb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function Tb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function Ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function Pb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function Rb(n,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(bd.compareFunction=Am,a=bd):a=Hm,e.setTexture2D(t||a,r)}function Cb(n,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),e.setTexture3D(t||Gm,r)}function Lb(n,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),e.setTextureCube(t||Wm,r)}function Db(n,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(n.uniform1i(this.addr,r),s[0]=r),e.setTexture2DArray(t||Vm,r)}function Ib(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return _b;case 35666:return gb;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Sb;case 35668:case 35672:return Eb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return wb;case 36295:return Ab;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}function Ub(n,t){n.uniform1fv(this.addr,t)}function Ob(n,t){const e=Pr(t,this.size,2);n.uniform2fv(this.addr,e)}function Nb(n,t){const e=Pr(t,this.size,3);n.uniform3fv(this.addr,e)}function Fb(n,t){const e=Pr(t,this.size,4);n.uniform4fv(this.addr,e)}function Bb(n,t){const e=Pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zb(n,t){const e=Pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kb(n,t){const e=Pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hb(n,t){n.uniform1iv(this.addr,t)}function Vb(n,t){n.uniform2iv(this.addr,t)}function Gb(n,t){n.uniform3iv(this.addr,t)}function Wb(n,t){n.uniform4iv(this.addr,t)}function Xb(n,t){n.uniform1uiv(this.addr,t)}function Zb(n,t){n.uniform2uiv(this.addr,t)}function qb(n,t){n.uniform3uiv(this.addr,t)}function Yb(n,t){n.uniform4uiv(this.addr,t)}function jb(n,t,e){const s=this.cache,r=t.length,a=el(e,r);qe(s,a)||(n.uniform1iv(this.addr,a),Ye(s,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||Hm,a[l])}function Kb(n,t,e){const s=this.cache,r=t.length,a=el(e,r);qe(s,a)||(n.uniform1iv(this.addr,a),Ye(s,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Gm,a[l])}function $b(n,t,e){const s=this.cache,r=t.length,a=el(e,r);qe(s,a)||(n.uniform1iv(this.addr,a),Ye(s,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Wm,a[l])}function Jb(n,t,e){const s=this.cache,r=t.length,a=el(e,r);qe(s,a)||(n.uniform1iv(this.addr,a),Ye(s,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||Vm,a[l])}function Qb(n){switch(n){case 5126:return Ub;case 35664:return Ob;case 35665:return Nb;case 35666:return Fb;case 35674:return Bb;case 35675:return zb;case 35676:return kb;case 5124:case 35670:return Hb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Zb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Jb}}class tT{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=Ib(e.type)}}class eT{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qb(e.type)}}class nT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const u=r[a];u.setValue(t,e[u.id],s)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Cd(n,t){n.seq.push(t),n.map[t.id]=t}function iT(n,t,e){const s=n.name,r=s.length;for(gc.lastIndex=0;;){const a=gc.exec(s),l=gc.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&l+2===r){Cd(e,d===void 0?new tT(u,n,t):new eT(u,n,t));break}else{let m=e.map[u];m===void 0&&(m=new nT(u),Cd(e,m)),e=m}}}class Ca{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);iT(a,l,this)}}setValue(t,e,s,r){const a=this.map[e];a!==void 0&&a.setValue(t,s,r)}setOptional(t,e,s){const r=e[s];r!==void 0&&this.setValue(t,s,r)}static upload(t,e,s,r){for(let a=0,l=e.length;a!==l;++a){const u=e[a],h=s[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,r)}}static seqWithValue(t,e){const s=[];for(let r=0,a=t.length;r!==a;++r){const l=t[r];l.id in e&&s.push(l)}return s}}function Ld(n,t,e){const s=n.createShader(t);return n.shaderSource(s,e),n.compileShader(s),s}const sT=37297;let rT=0;function oT(n,t){const e=n.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){const u=l+1;s.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return s.join(`
`)}const Dd=new ce;function aT(n){ye._getMatrix(Dd,ye.workingColorSpace,n);const t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case za:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Id(n,t,e){const s=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(s&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+oT(n.getShaderSource(t),l)}else return r}function lT(n,t){const e=aT(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cT(n,t){let e;switch(t){case cy:e="Linear";break;case uy:e="Reinhard";break;case hy:e="Cineon";break;case fy:e="ACESFilmic";break;case py:e="AgX";break;case my:e="Neutral";break;case dy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new $;function uT(){ye.getLuminanceCoefficients(va);const n=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function fT(n){const t=[];for(const e in n){const s=n[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function dT(n,t){const e={},s=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const a=n.getActiveAttrib(t,r),l=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),e[l]={type:a.type,location:n.getAttribLocation(t,l),locationSize:u}}return e}function Kr(n){return n!==""}function Ud(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(n){return n.replace(pT,_T)}const mT=new Map;function _T(n,t){let e=ue[t];if(e===void 0){const s=mT.get(t);if(s!==void 0)e=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return xu(e)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(n){return n.replace(gT,vT)}function vT(n,t,e,s){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_m?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===V0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function yT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Tr:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function ST(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gm:t="ENVMAP_BLENDING_MULTIPLY";break;case ay:t="ENVMAP_BLENDING_MIX";break;case ly:t="ENVMAP_BLENDING_ADD";break}return t}function ET(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function bT(n,t,e,s){const r=n.getContext(),a=e.defines;let l=e.vertexShader,u=e.fragmentShader;const h=xT(e),d=yT(e),p=MT(e),m=ST(e),_=ET(e),v=hT(e),S=fT(a),b=r.createProgram();let y,g,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Kr).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Kr).join(`
`),g.length>0&&(g+=`
`)):(y=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),g=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==is?"#define TONE_MAPPING":"",e.toneMapping!==is?ue.tonemapping_pars_fragment:"",e.toneMapping!==is?cT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,lT("linearToOutputTexel",e.outputColorSpace),uT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),l=xu(l),l=Ud(l,e),l=Od(l,e),u=xu(u),u=Ud(u,e),u=Od(u,e),l=Nd(l),u=Nd(u),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+y+l,A=I+g+u,k=Ld(r,r.VERTEX_SHADER,D),H=Ld(r,r.FRAGMENT_SHADER,A);r.attachShader(b,k),r.attachShader(b,H),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N(z){if(n.debug.checkShaderErrors){const lt=r.getProgramInfoLog(b).trim(),et=r.getShaderInfoLog(k).trim(),mt=r.getShaderInfoLog(H).trim();let vt=!0,Q=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(vt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,k,H);else{const it=Id(r,k,"vertex"),V=Id(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+lt+`
`+it+`
`+V)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(et===""||mt==="")&&(Q=!1);Q&&(z.diagnostics={runnable:vt,programLog:lt,vertexShader:{log:et,prefix:y},fragmentShader:{log:mt,prefix:g}})}r.deleteShader(k),r.deleteShader(H),G=new Ca(r,b),C=dT(r,b)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(b,sT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rT++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=H,this}let TT=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(s),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new AT(t),e.set(t,s)),s}}class AT{constructor(t){this.id=TT++,this.code=t,this.usedTimes=0}}function PT(n,t,e,s,r,a,l){const u=new Lm,h=new wT,d=new Set,p=[],m=r.logarithmicDepthBuffer,_=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return d.add(C),C===0?"uv":`uv${C}`}function y(C,R,z,lt,et){const mt=lt.fog,vt=et.geometry,Q=C.isMeshStandardMaterial?lt.environment:null,it=(C.isMeshStandardMaterial?e:t).get(C.envMap||Q),V=it&&it.mapping===Ja?it.image.height:null,Ct=S[C.type];C.precision!==null&&(v=r.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const _t=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,Pt=_t!==void 0?_t.length:0;let kt=0;vt.morphAttributes.position!==void 0&&(kt=1),vt.morphAttributes.normal!==void 0&&(kt=2),vt.morphAttributes.color!==void 0&&(kt=3);let Qt,at,gt,Mt;if(Ct){const Me=oi[Ct];Qt=Me.vertexShader,at=Me.fragmentShader}else Qt=C.vertexShader,at=C.fragmentShader,h.update(C),gt=h.getVertexShaderID(C),Mt=h.getFragmentShaderID(C);const W=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),St=et.isInstancedMesh===!0,yt=et.isBatchedMesh===!0,Kt=!!C.map,U=!!C.matcap,O=!!it,E=!!C.aoMap,ft=!!C.lightMap,rt=!!C.bumpMap,J=!!C.normalMap,ut=!!C.displacementMap,Et=!!C.emissiveMap,ct=!!C.metalnessMap,w=!!C.roughnessMap,M=C.anisotropy>0,B=C.clearcoat>0,Y=C.dispersion>0,nt=C.iridescence>0,K=C.sheen>0,Rt=C.transmission>0,bt=M&&!!C.anisotropyMap,Gt=B&&!!C.clearcoatMap,Wt=B&&!!C.clearcoatNormalMap,Tt=B&&!!C.clearcoatRoughnessMap,Dt=nt&&!!C.iridescenceMap,Yt=nt&&!!C.iridescenceThicknessMap,$t=K&&!!C.sheenColorMap,Lt=K&&!!C.sheenRoughnessMap,ie=!!C.specularMap,te=!!C.specularColorMap,Te=!!C.specularIntensityMap,X=Rt&&!!C.transmissionMap,Ut=Rt&&!!C.thicknessMap,ht=!!C.gradientMap,xt=!!C.alphaMap,Ft=C.alphaTest>0,Nt=!!C.alphaHash,oe=!!C.extensions;let Oe=is;C.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const je={shaderID:Ct,shaderType:C.type,shaderName:C.name,vertexShader:Qt,fragmentShader:at,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:yt,batchingColor:yt&&et._colorsTexture!==null,instancing:St,instancingColor:St&&et.instanceColor!==null,instancingMorph:St&&et.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:wr,alphaToCoverage:!!C.alphaToCoverage,map:Kt,matcap:U,envMap:O,envMapMode:O&&it.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:ft,bumpMap:rt,normalMap:J,displacementMap:_&&ut,emissiveMap:Et,normalMapObjectSpace:J&&C.normalMapType===yy,normalMapTangentSpace:J&&C.normalMapType===xy,metalnessMap:ct,roughnessMap:w,anisotropy:M,anisotropyMap:bt,clearcoat:B,clearcoatMap:Gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Tt,dispersion:Y,iridescence:nt,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:K,sheenColorMap:$t,sheenRoughnessMap:Lt,specularMap:ie,specularColorMap:te,specularIntensityMap:Te,transmission:Rt,transmissionMap:X,thicknessMap:Ut,gradientMap:ht,opaque:C.transparent===!1&&C.blending===vr&&C.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ft,alphaHash:Nt,combine:C.combine,mapUv:Kt&&b(C.map.channel),aoMapUv:E&&b(C.aoMap.channel),lightMapUv:ft&&b(C.lightMap.channel),bumpMapUv:rt&&b(C.bumpMap.channel),normalMapUv:J&&b(C.normalMap.channel),displacementMapUv:ut&&b(C.displacementMap.channel),emissiveMapUv:Et&&b(C.emissiveMap.channel),metalnessMapUv:ct&&b(C.metalnessMap.channel),roughnessMapUv:w&&b(C.roughnessMap.channel),anisotropyMapUv:bt&&b(C.anisotropyMap.channel),clearcoatMapUv:Gt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(C.sheenRoughnessMap.channel),specularMapUv:ie&&b(C.specularMap.channel),specularColorMapUv:te&&b(C.specularColorMap.channel),specularIntensityMapUv:Te&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:Ut&&b(C.thicknessMap.channel),alphaMapUv:xt&&b(C.alphaMap.channel),vertexTangents:!!vt.attributes.tangent&&(J||M),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!vt.attributes.uv&&(Kt||xt),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:dt,skinning:et.isSkinnedMesh===!0,morphTargets:vt.morphAttributes.position!==void 0,morphNormals:vt.morphAttributes.normal!==void 0,morphColors:vt.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:kt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Kt&&C.map.isVideoTexture===!0&&ye.getTransfer(C.map.colorSpace)===we,decodeVideoTextureEmissive:Et&&C.emissiveMap.isVideoTexture===!0&&ye.getTransfer(C.emissiveMap.colorSpace)===we,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ci,flipSided:C.side===En,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:oe&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&C.extensions.multiDraw===!0||yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)R.push(z),R.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(R,C),D(R,C),R.push(n.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function I(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),C.push(u.mask)}function A(C){const R=S[C.type];let z;if(R){const lt=oi[R];z=Jy.clone(lt.uniforms)}else z=C.uniforms;return z}function k(C,R){let z;for(let lt=0,et=p.length;lt<et;lt++){const mt=p[lt];if(mt.cacheKey===R){z=mt,++z.usedTimes;break}}return z===void 0&&(z=new bT(n,R,C,a),p.push(z)),z}function H(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function N(C){h.remove(C)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:k,releaseProgram:H,releaseShaderCache:N,programs:p,dispose:G}}function RT(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function s(l){n.delete(l)}function r(l,u,h){n.get(l)[u]=h}function a(){n=new WeakMap}return{has:t,get:e,remove:s,update:r,dispose:a}}function CT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Bd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zd(){const n=[];let t=0;const e=[],s=[],r=[];function a(){t=0,e.length=0,s.length=0,r.length=0}function l(m,_,v,S,b,y){let g=n[t];return g===void 0?(g={id:m.id,object:m,geometry:_,material:v,groupOrder:S,renderOrder:m.renderOrder,z:b,group:y},n[t]=g):(g.id=m.id,g.object=m,g.geometry=_,g.material=v,g.groupOrder=S,g.renderOrder=m.renderOrder,g.z=b,g.group=y),t++,g}function u(m,_,v,S,b,y){const g=l(m,_,v,S,b,y);v.transmission>0?s.push(g):v.transparent===!0?r.push(g):e.push(g)}function h(m,_,v,S,b,y){const g=l(m,_,v,S,b,y);v.transmission>0?s.unshift(g):v.transparent===!0?r.unshift(g):e.unshift(g)}function d(m,_){e.length>1&&e.sort(m||CT),s.length>1&&s.sort(_||Bd),r.length>1&&r.sort(_||Bd)}function p(){for(let m=t,_=n.length;m<_;m++){const v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:s,transparent:r,init:a,push:u,unshift:h,finish:p,sort:d}}function LT(){let n=new WeakMap;function t(s,r){const a=n.get(s);let l;return a===void 0?(l=new zd,n.set(s,[l])):r>=a.length?(l=new zd,a.push(l)):l=a[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function DT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Pe};break;case"SpotLight":e={position:new $,direction:new $,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":e={color:new Pe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function IT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let UT=0;function OT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NT(n){const t=new DT,e=IT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const r=new $,a=new We,l=new We;function u(d){let p=0,m=0,_=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let v=0,S=0,b=0,y=0,g=0,I=0,D=0,A=0,k=0,H=0,N=0;d.sort(OT);for(let C=0,R=d.length;C<R;C++){const z=d[C],lt=z.color,et=z.intensity,mt=z.distance,vt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=lt.r*et,m+=lt.g*et,_+=lt.b*et;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(z.sh.coefficients[Q],et);N++}else if(z.isDirectionalLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const it=z.shadow,V=e.get(z);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,s.directionalShadow[v]=V,s.directionalShadowMap[v]=vt,s.directionalShadowMatrix[v]=z.shadow.matrix,I++}s.directional[v]=Q,v++}else if(z.isSpotLight){const Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(lt).multiplyScalar(et),Q.distance=mt,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,s.spot[b]=Q;const it=z.shadow;if(z.map&&(s.spotLightMap[k]=z.map,k++,it.updateMatrices(z),z.castShadow&&H++),s.spotLightMatrix[b]=it.matrix,z.castShadow){const V=e.get(z);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,s.spotShadow[b]=V,s.spotShadowMap[b]=vt,A++}b++}else if(z.isRectAreaLight){const Q=t.get(z);Q.color.copy(lt).multiplyScalar(et),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=Q,y++}else if(z.isPointLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const it=z.shadow,V=e.get(z);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,V.shadowCameraNear=it.camera.near,V.shadowCameraFar=it.camera.far,s.pointShadow[S]=V,s.pointShadowMap[S]=vt,s.pointShadowMatrix[S]=z.shadow.matrix,D++}s.point[S]=Q,S++}else if(z.isHemisphereLight){const Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(et),Q.groundColor.copy(z.groundColor).multiplyScalar(et),s.hemi[g]=Q,g++}}y>0&&(n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;const G=s.hash;(G.directionalLength!==v||G.pointLength!==S||G.spotLength!==b||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==I||G.numPointShadows!==D||G.numSpotShadows!==A||G.numSpotMaps!==k||G.numLightProbes!==N)&&(s.directional.length=v,s.spot.length=b,s.rectArea.length=y,s.point.length=S,s.hemi.length=g,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=A+k-H,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=N,G.directionalLength=v,G.pointLength=S,G.spotLength=b,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=I,G.numPointShadows=D,G.numSpotShadows=A,G.numSpotMaps=k,G.numLightProbes=N,s.version=UT++)}function h(d,p){let m=0,_=0,v=0,S=0,b=0;const y=p.matrixWorldInverse;for(let g=0,I=d.length;g<I;g++){const D=d[g];if(D.isDirectionalLight){const A=s.directional[m];A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(y),m++}else if(D.isSpotLight){const A=s.spot[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(y),v++}else if(D.isRectAreaLight){const A=s.rectArea[S];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),l.identity(),a.copy(D.matrixWorld),a.premultiply(y),l.extractRotation(a),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),S++}else if(D.isPointLight){const A=s.point[_];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const A=s.hemi[b];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(y),b++}}}return{setup:u,setupView:h,state:s}}function kd(n){const t=new NT(n),e=[],s=[];function r(p){d.camera=p,e.length=0,s.length=0}function a(p){e.push(p)}function l(p){s.push(p)}function u(){t.setup(e)}function h(p){t.setupView(e,p)}const d={lightsArray:e,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l}}function FT(n){let t=new WeakMap;function e(r,a=0){const l=t.get(r);let u;return l===void 0?(u=new kd(n),t.set(r,[u])):a>=l.length?(u=new kd(n),l.push(u)):u=l[a],u}function s(){t=new WeakMap}return{get:e,dispose:s}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kT(n,t,e){let s=new Bm;const r=new pe,a=new pe,l=new ze,u=new aM({depthPacking:vy}),h=new lM,d={},p=e.maxTextureSize,m={[ss]:En,[En]:ss,[Ci]:Ci},_=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:BT,fragmentShader:zT}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const S=new cs;S.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new li(S,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_m;let g=this.type;this.render=function(H,N,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const C=n.getRenderTarget(),R=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),lt=n.state;lt.setBlending(ns),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const et=g!==wi&&this.type===wi,mt=g===wi&&this.type!==wi;for(let vt=0,Q=H.length;vt<Q;vt++){const it=H[vt],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Ct=V.getFrameExtents();if(r.multiply(Ct),a.copy(V.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/Ct.x),r.x=a.x*Ct.x,V.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/Ct.y),r.y=a.y*Ct.y,V.mapSize.y=a.y)),V.map===null||et===!0||mt===!0){const Pt=this.type!==wi?{minFilter:$n,magFilter:$n}:{};V.map!==null&&V.map.dispose(),V.map=new Ns(r.x,r.y,Pt),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const _t=V.getViewportCount();for(let Pt=0;Pt<_t;Pt++){const kt=V.getViewport(Pt);l.set(a.x*kt.x,a.y*kt.y,a.x*kt.z,a.y*kt.w),lt.viewport(l),V.updateMatrices(it,Pt),s=V.getFrustum(),A(N,G,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===wi&&I(V,G),V.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(C,R,z)};function I(H,N){const G=t.update(b);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,v.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ns(r.x,r.y)),_.uniforms.shadow_pass.value=H.map.texture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,n.setRenderTarget(H.mapPass),n.clear(),n.renderBufferDirect(N,null,G,_,b,null),v.uniforms.shadow_pass.value=H.mapPass.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,n.setRenderTarget(H.map),n.clear(),n.renderBufferDirect(N,null,G,v,b,null)}function D(H,N,G,C){let R=null;const z=G.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)R=z;else if(R=G.isPointLight===!0?h:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const lt=R.uuid,et=N.uuid;let mt=d[lt];mt===void 0&&(mt={},d[lt]=mt);let vt=mt[et];vt===void 0&&(vt=R.clone(),mt[et]=vt,N.addEventListener("dispose",k)),R=vt}if(R.visible=N.visible,R.wireframe=N.wireframe,C===wi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:m[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=n.properties.get(R);lt.light=G}return R}function A(H,N,G,C,R){if(H.visible===!1)return;if(H.layers.test(N.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===wi)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,H.matrixWorld);const et=t.update(H),mt=H.material;if(Array.isArray(mt)){const vt=et.groups;for(let Q=0,it=vt.length;Q<it;Q++){const V=vt[Q],Ct=mt[V.materialIndex];if(Ct&&Ct.visible){const _t=D(H,Ct,C,R);H.onBeforeShadow(n,H,N,G,et,_t,V),n.renderBufferDirect(G,null,et,_t,H,V),H.onAfterShadow(n,H,N,G,et,_t,V)}}}else if(mt.visible){const vt=D(H,mt,C,R);H.onBeforeShadow(n,H,N,G,et,vt,null),n.renderBufferDirect(G,null,et,vt,H,null),H.onAfterShadow(n,H,N,G,et,vt,null)}}const lt=H.children;for(let et=0,mt=lt.length;et<mt;et++)A(lt[et],N,G,C,R)}function k(H){H.target.removeEventListener("dispose",k);for(const G in d){const C=d[G],R=H.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const HT={[Oc]:Nc,[Fc]:kc,[Bc]:Hc,[Er]:zc,[Nc]:Oc,[kc]:Fc,[Hc]:Bc,[zc]:Er};function VT(n,t){function e(){let X=!1;const Ut=new ze;let ht=null;const xt=new ze(0,0,0,0);return{setMask:function(Ft){ht!==Ft&&!X&&(n.colorMask(Ft,Ft,Ft,Ft),ht=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Nt,oe,Oe,je){je===!0&&(Ft*=Oe,Nt*=Oe,oe*=Oe),Ut.set(Ft,Nt,oe,Oe),xt.equals(Ut)===!1&&(n.clearColor(Ft,Nt,oe,Oe),xt.copy(Ut))},reset:function(){X=!1,ht=null,xt.set(-1,0,0,0)}}}function s(){let X=!1,Ut=!1,ht=null,xt=null,Ft=null;return{setReversed:function(Nt){if(Ut!==Nt){const oe=t.get("EXT_clip_control");Nt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Ut=Nt;const Oe=Ft;Ft=null,this.setClear(Oe)}},getReversed:function(){return Ut},setTest:function(Nt){Nt?W(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(Nt){ht!==Nt&&!X&&(n.depthMask(Nt),ht=Nt)},setFunc:function(Nt){if(Ut&&(Nt=HT[Nt]),xt!==Nt){switch(Nt){case Oc:n.depthFunc(n.NEVER);break;case Nc:n.depthFunc(n.ALWAYS);break;case Fc:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Bc:n.depthFunc(n.EQUAL);break;case zc:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case Hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Nt}},setLocked:function(Nt){X=Nt},setClear:function(Nt){Ft!==Nt&&(Ut&&(Nt=1-Nt),n.clearDepth(Nt),Ft=Nt)},reset:function(){X=!1,ht=null,xt=null,Ft=null,Ut=!1}}}function r(){let X=!1,Ut=null,ht=null,xt=null,Ft=null,Nt=null,oe=null,Oe=null,je=null;return{setTest:function(Me){X||(Me?W(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!X&&(n.stencilMask(Me),Ut=Me)},setFunc:function(Me,ln,kn){(ht!==Me||xt!==ln||Ft!==kn)&&(n.stencilFunc(Me,ln,kn),ht=Me,xt=ln,Ft=kn)},setOp:function(Me,ln,kn){(Nt!==Me||oe!==ln||Oe!==kn)&&(n.stencilOp(Me,ln,kn),Nt=Me,oe=ln,Oe=kn)},setLocked:function(Me){X=Me},setClear:function(Me){je!==Me&&(n.clearStencil(Me),je=Me)},reset:function(){X=!1,Ut=null,ht=null,xt=null,Ft=null,Nt=null,oe=null,Oe=null,je=null}}}const a=new e,l=new s,u=new r,h=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,v=[],S=null,b=!1,y=null,g=null,I=null,D=null,A=null,k=null,H=null,N=new Pe(0,0,0),G=0,C=!1,R=null,z=null,lt=null,et=null,mt=null;const vt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,it=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=it>=2);let Ct=null,_t={};const Pt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),Qt=new ze().fromArray(Pt),at=new ze().fromArray(kt);function gt(X,Ut,ht,xt){const Ft=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(X,Nt),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<ht;oe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ut,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Ut+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return Nt}const Mt={};Mt[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),W(n.DEPTH_TEST),l.setFunc(Er),rt(!1),J(Wf),W(n.CULL_FACE),E(ns);function W(X){p[X]!==!0&&(n.enable(X),p[X]=!0)}function dt(X){p[X]!==!1&&(n.disable(X),p[X]=!1)}function St(X,Ut){return m[X]!==Ut?(n.bindFramebuffer(X,Ut),m[X]=Ut,X===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ut),X===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ut),!0):!1}function yt(X,Ut){let ht=v,xt=!1;if(X){ht=_.get(Ut),ht===void 0&&(ht=[],_.set(Ut,ht));const Ft=X.textures;if(ht.length!==Ft.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,oe=Ft.length;Nt<oe;Nt++)ht[Nt]=n.COLOR_ATTACHMENT0+Nt;ht.length=Ft.length,xt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,xt=!0);xt&&n.drawBuffers(ht)}function Kt(X){return S!==X?(n.useProgram(X),S=X,!0):!1}const U={[Ts]:n.FUNC_ADD,[W0]:n.FUNC_SUBTRACT,[X0]:n.FUNC_REVERSE_SUBTRACT};U[Z0]=n.MIN,U[q0]=n.MAX;const O={[Y0]:n.ZERO,[j0]:n.ONE,[K0]:n.SRC_COLOR,[Ic]:n.SRC_ALPHA,[ny]:n.SRC_ALPHA_SATURATE,[ty]:n.DST_COLOR,[J0]:n.DST_ALPHA,[$0]:n.ONE_MINUS_SRC_COLOR,[Uc]:n.ONE_MINUS_SRC_ALPHA,[ey]:n.ONE_MINUS_DST_COLOR,[Q0]:n.ONE_MINUS_DST_ALPHA,[iy]:n.CONSTANT_COLOR,[sy]:n.ONE_MINUS_CONSTANT_COLOR,[ry]:n.CONSTANT_ALPHA,[oy]:n.ONE_MINUS_CONSTANT_ALPHA};function E(X,Ut,ht,xt,Ft,Nt,oe,Oe,je,Me){if(X===ns){b===!0&&(dt(n.BLEND),b=!1);return}if(b===!1&&(W(n.BLEND),b=!0),X!==G0){if(X!==y||Me!==C){if((g!==Ts||A!==Ts)&&(n.blendEquation(n.FUNC_ADD),g=Ts,A=Ts),Me)switch(X){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xf:n.blendFunc(n.ONE,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,D=null,k=null,H=null,N.set(0,0,0),G=0,y=X,C=Me}return}Ft=Ft||Ut,Nt=Nt||ht,oe=oe||xt,(Ut!==g||Ft!==A)&&(n.blendEquationSeparate(U[Ut],U[Ft]),g=Ut,A=Ft),(ht!==I||xt!==D||Nt!==k||oe!==H)&&(n.blendFuncSeparate(O[ht],O[xt],O[Nt],O[oe]),I=ht,D=xt,k=Nt,H=oe),(Oe.equals(N)===!1||je!==G)&&(n.blendColor(Oe.r,Oe.g,Oe.b,je),N.copy(Oe),G=je),y=X,C=!1}function ft(X,Ut){X.side===Ci?dt(n.CULL_FACE):W(n.CULL_FACE);let ht=X.side===En;Ut&&(ht=!ht),rt(ht),X.blending===vr&&X.transparent===!1?E(ns):E(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);const xt=X.stencilWrite;u.setTest(xt),xt&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Et(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){R!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),R=X)}function J(X){X!==k0?(W(n.CULL_FACE),X!==z&&(X===Wf?n.cullFace(n.BACK):X===H0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),z=X}function ut(X){X!==lt&&(Q&&n.lineWidth(X),lt=X)}function Et(X,Ut,ht){X?(W(n.POLYGON_OFFSET_FILL),(et!==Ut||mt!==ht)&&(n.polygonOffset(Ut,ht),et=Ut,mt=ht)):dt(n.POLYGON_OFFSET_FILL)}function ct(X){X?W(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function w(X){X===void 0&&(X=n.TEXTURE0+vt-1),Ct!==X&&(n.activeTexture(X),Ct=X)}function M(X,Ut,ht){ht===void 0&&(Ct===null?ht=n.TEXTURE0+vt-1:ht=Ct);let xt=_t[ht];xt===void 0&&(xt={type:void 0,texture:void 0},_t[ht]=xt),(xt.type!==X||xt.texture!==Ut)&&(Ct!==ht&&(n.activeTexture(ht),Ct=ht),n.bindTexture(X,Ut||Mt[X]),xt.type=X,xt.texture=Ut)}function B(){const X=_t[Ct];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Y(){try{n.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{n.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{n.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{n.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{n.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{n.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{n.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{n.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{n.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(X){Qt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Qt.copy(X))}function Lt(X){at.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),at.copy(X))}function ie(X,Ut){let ht=d.get(Ut);ht===void 0&&(ht=new WeakMap,d.set(Ut,ht));let xt=ht.get(X);xt===void 0&&(xt=n.getUniformBlockIndex(Ut,X.name),ht.set(X,xt))}function te(X,Ut){const xt=d.get(Ut).get(X);h.get(Ut)!==xt&&(n.uniformBlockBinding(Ut,xt,X.__bindingPointIndex),h.set(Ut,xt))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},Ct=null,_t={},m={},_=new WeakMap,v=[],S=null,b=!1,y=null,g=null,I=null,D=null,A=null,k=null,H=null,N=new Pe(0,0,0),G=0,C=!1,R=null,z=null,lt=null,et=null,mt=null,Qt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:W,disable:dt,bindFramebuffer:St,drawBuffers:yt,useProgram:Kt,setBlending:E,setMaterial:ft,setFlipSided:rt,setCullFace:J,setLineWidth:ut,setPolygonOffset:Et,setScissorTest:ct,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:nt,texImage2D:Dt,texImage3D:Yt,updateUBOMapping:ie,uniformBlockBinding:te,texStorage2D:Wt,texStorage3D:Tt,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Gt,scissor:$t,viewport:Lt,reset:Te}}function GT(n,t,e,s,r,a,l){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pe,p=new WeakMap;let m;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,M){return v?new OffscreenCanvas(w,M):yo("canvas")}function b(w,M,B){let Y=1;const nt=ct(w);if((nt.width>B||nt.height>B)&&(Y=B/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Y*nt.width),Rt=Math.floor(Y*nt.height);m===void 0&&(m=S(K,Rt));const bt=M?S(K,Rt):m;return bt.width=K,bt.height=Rt,bt.getContext("2d").drawImage(w,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Rt+")."),bt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function y(w){return w.generateMipmaps}function g(w){n.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(w,M,B,Y,nt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=M;if(M===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),M===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),M===n.RGBA){const Rt=nt?za:ye.getTransfer(Y);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=Rt===we?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function A(w,M){let B;return w?M===null||M===Os||M===go?B=n.DEPTH24_STENCIL8:M===Li?B=n.DEPTH32F_STENCIL8:M===_o&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Os||M===go?B=n.DEPTH_COMPONENT24:M===Li?B=n.DEPTH_COMPONENT32F:M===_o&&(B=n.DEPTH_COMPONENT16),B}function k(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==$n&&w.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function H(w){const M=w.target;M.removeEventListener("dispose",H),G(M),M.isVideoTexture&&p.delete(M)}function N(w){const M=w.target;M.removeEventListener("dispose",N),R(M)}function G(w){const M=s.get(w);if(M.__webglInit===void 0)return;const B=w.source,Y=_.get(B);if(Y){const nt=Y[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(w),Object.keys(Y).length===0&&_.delete(B)}s.remove(w)}function C(w){const M=s.get(w);n.deleteTexture(M.__webglTexture);const B=w.source,Y=_.get(B);delete Y[M.__cacheKey],l.memory.textures--}function R(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let nt=0;nt<M.__webglFramebuffer[Y].length;nt++)n.deleteFramebuffer(M.__webglFramebuffer[Y][nt]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,nt=B.length;Y<nt;Y++){const K=s.get(B[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),l.memory.textures--),s.remove(B[Y])}s.remove(w)}let z=0;function lt(){z=0}function et(){const w=z;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),z+=1,w}function mt(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function vt(w,M){const B=s.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,w,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function Q(w,M){const B=s.get(w);if(w.version>0&&B.__version!==w.version){at(B,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function it(w,M){const B=s.get(w);if(w.version>0&&B.__version!==w.version){at(B,w,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function V(w,M){const B=s.get(w);if(w.version>0&&B.__version!==w.version){gt(B,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const Ct={[Wc]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[Xc]:n.MIRRORED_REPEAT},_t={[$n]:n.NEAREST,[_y]:n.NEAREST_MIPMAP_NEAREST,[$o]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},Pt={[My]:n.NEVER,[Ay]:n.ALWAYS,[Sy]:n.LESS,[Am]:n.LEQUAL,[Ey]:n.EQUAL,[wy]:n.GEQUAL,[by]:n.GREATER,[Ty]:n.NOTEQUAL};function kt(w,M){if(M.type===Li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===Gl||M.magFilter===$o||M.magFilter===Ps||M.minFilter===ai||M.minFilter===Gl||M.minFilter===$o||M.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ct[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ct[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ct[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_t[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$n||M.minFilter!==$o&&M.minFilter!==Ps||M.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",H));const Y=M.source;let nt=_.get(Y);nt===void 0&&(nt={},_.set(Y,nt));const K=mt(M);if(K!==w.__cacheKey){nt[K]===void 0&&(nt[K]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,B=!0),nt[K].usedTimes++;const Rt=nt[w.__cacheKey];Rt!==void 0&&(nt[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&C(M)),w.__cacheKey=K,w.__webglTexture=nt[K].texture}return B}function at(w,M,B){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const nt=Qt(w,M),K=M.source;e.bindTexture(Y,w.__webglTexture,n.TEXTURE0+B);const Rt=s.get(K);if(K.version!==Rt.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);const bt=ye.getPrimaries(ye.workingColorSpace),Gt=M.colorSpace===Qi?null:ye.getPrimaries(M.colorSpace),Wt=M.colorSpace===Qi||bt===Gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Tt=b(M.image,!1,r.maxTextureSize);Tt=Et(M,Tt);const Dt=a.convert(M.format,M.colorSpace),Yt=a.convert(M.type);let $t=D(M.internalFormat,Dt,Yt,M.colorSpace,M.isVideoTexture);kt(Y,M);let Lt;const ie=M.mipmaps,te=M.isVideoTexture!==!0,Te=Rt.__version===void 0||nt===!0,X=K.dataReady,Ut=k(M,Tt);if(M.isDepthTexture)$t=A(M.format===xo,M.type),Te&&(te?e.texStorage2D(n.TEXTURE_2D,1,$t,Tt.width,Tt.height):e.texImage2D(n.TEXTURE_2D,0,$t,Tt.width,Tt.height,0,Dt,Yt,null));else if(M.isDataTexture)if(ie.length>0){te&&Te&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,ie[0].width,ie[0].height);for(let ht=0,xt=ie.length;ht<xt;ht++)Lt=ie[ht],te?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,Dt,Yt,Lt.data):e.texImage2D(n.TEXTURE_2D,ht,$t,Lt.width,Lt.height,0,Dt,Yt,Lt.data);M.generateMipmaps=!1}else te?(Te&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,Tt.width,Tt.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Dt,Yt,Tt.data)):e.texImage2D(n.TEXTURE_2D,0,$t,Tt.width,Tt.height,0,Dt,Yt,Tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&Te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,$t,ie[0].width,ie[0].height,Tt.depth);for(let ht=0,xt=ie.length;ht<xt;ht++)if(Lt=ie[ht],M.format!==qn)if(Dt!==null)if(te){if(X)if(M.layerUpdates.size>0){const Ft=_d(Lt.width,Lt.height,M.format,M.type);for(const Nt of M.layerUpdates){const oe=Lt.data.subarray(Nt*Ft/Lt.data.BYTES_PER_ELEMENT,(Nt+1)*Ft/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Nt,Lt.width,Lt.height,1,Dt,oe)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Lt.width,Lt.height,Tt.depth,Dt,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,$t,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Lt.width,Lt.height,Tt.depth,Dt,Yt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,$t,Lt.width,Lt.height,Tt.depth,0,Dt,Yt,Lt.data)}else{te&&Te&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,ie[0].width,ie[0].height);for(let ht=0,xt=ie.length;ht<xt;ht++)Lt=ie[ht],M.format!==qn?Dt!==null?te?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,$t,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,Dt,Yt,Lt.data):e.texImage2D(n.TEXTURE_2D,ht,$t,Lt.width,Lt.height,0,Dt,Yt,Lt.data)}else if(M.isDataArrayTexture)if(te){if(Te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,$t,Tt.width,Tt.height,Tt.depth),X)if(M.layerUpdates.size>0){const ht=_d(Tt.width,Tt.height,M.format,M.type);for(const xt of M.layerUpdates){const Ft=Tt.data.subarray(xt*ht/Tt.data.BYTES_PER_ELEMENT,(xt+1)*ht/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,Tt.width,Tt.height,1,Dt,Yt,Ft)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Dt,Yt,Tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,Tt.width,Tt.height,Tt.depth,0,Dt,Yt,Tt.data);else if(M.isData3DTexture)te?(Te&&e.texStorage3D(n.TEXTURE_3D,Ut,$t,Tt.width,Tt.height,Tt.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Dt,Yt,Tt.data)):e.texImage3D(n.TEXTURE_3D,0,$t,Tt.width,Tt.height,Tt.depth,0,Dt,Yt,Tt.data);else if(M.isFramebufferTexture){if(Te)if(te)e.texStorage2D(n.TEXTURE_2D,Ut,$t,Tt.width,Tt.height);else{let ht=Tt.width,xt=Tt.height;for(let Ft=0;Ft<Ut;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,$t,ht,xt,0,Dt,Yt,null),ht>>=1,xt>>=1}}else if(ie.length>0){if(te&&Te){const ht=ct(ie[0]);e.texStorage2D(n.TEXTURE_2D,Ut,$t,ht.width,ht.height)}for(let ht=0,xt=ie.length;ht<xt;ht++)Lt=ie[ht],te?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Dt,Yt,Lt):e.texImage2D(n.TEXTURE_2D,ht,$t,Dt,Yt,Lt);M.generateMipmaps=!1}else if(te){if(Te){const ht=ct(Tt);e.texStorage2D(n.TEXTURE_2D,Ut,$t,ht.width,ht.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Yt,Tt)}else e.texImage2D(n.TEXTURE_2D,0,$t,Dt,Yt,Tt);y(M)&&g(Y),Rt.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function gt(w,M,B){if(M.image.length!==6)return;const Y=Qt(w,M),nt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const K=s.get(nt);if(nt.version!==K.__version||Y===!0){e.activeTexture(n.TEXTURE0+B);const Rt=ye.getPrimaries(ye.workingColorSpace),bt=M.colorSpace===Qi?null:ye.getPrimaries(M.colorSpace),Gt=M.colorSpace===Qi||Rt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let xt=0;xt<6;xt++)!Wt&&!Tt?Dt[xt]=b(M.image[xt],!0,r.maxCubemapSize):Dt[xt]=Tt?M.image[xt].image:M.image[xt],Dt[xt]=Et(M,Dt[xt]);const Yt=Dt[0],$t=a.convert(M.format,M.colorSpace),Lt=a.convert(M.type),ie=D(M.internalFormat,$t,Lt,M.colorSpace),te=M.isVideoTexture!==!0,Te=K.__version===void 0||Y===!0,X=nt.dataReady;let Ut=k(M,Yt);kt(n.TEXTURE_CUBE_MAP,M);let ht;if(Wt){te&&Te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ie,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){ht=Dt[xt].mipmaps;for(let Ft=0;Ft<ht.length;Ft++){const Nt=ht[Ft];M.format!==qn?$t!==null?te?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,Nt.width,Nt.height,$t,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,ie,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,Nt.width,Nt.height,$t,Lt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,ie,Nt.width,Nt.height,0,$t,Lt,Nt.data)}}}else{if(ht=M.mipmaps,te&&Te){ht.length>0&&Ut++;const xt=ct(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ie,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Tt){te?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Dt[xt].width,Dt[xt].height,$t,Lt,Dt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,Dt[xt].width,Dt[xt].height,0,$t,Lt,Dt[xt].data);for(let Ft=0;Ft<ht.length;Ft++){const oe=ht[Ft].image[xt].image;te?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,oe.width,oe.height,$t,Lt,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,ie,oe.width,oe.height,0,$t,Lt,oe.data)}}else{te?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,$t,Lt,Dt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,$t,Lt,Dt[xt]);for(let Ft=0;Ft<ht.length;Ft++){const Nt=ht[Ft];te?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,$t,Lt,Nt.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,ie,$t,Lt,Nt.image[xt])}}}y(M)&&g(n.TEXTURE_CUBE_MAP),K.__version=nt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Mt(w,M,B,Y,nt,K){const Rt=a.convert(B.format,B.colorSpace),bt=a.convert(B.type),Gt=D(B.internalFormat,Rt,bt,B.colorSpace),Wt=s.get(M),Tt=s.get(B);if(Tt.__renderTarget=M,!Wt.__hasExternalTextures){const Dt=Math.max(1,M.width>>K),Yt=Math.max(1,M.height>>K);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,Gt,Dt,Yt,M.depth,0,Rt,bt,null):e.texImage2D(nt,K,Gt,Dt,Yt,0,Rt,bt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),J(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,nt,Tt.__webglTexture,0,rt(M)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,nt,Tt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function W(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const Y=M.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,K=A(M.stencilBuffer,nt),Rt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=rt(M);J(M)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,K,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,w)}else{const Y=M.textures;for(let nt=0;nt<Y.length;nt++){const K=Y[nt],Rt=a.convert(K.format,K.colorSpace),bt=a.convert(K.type),Gt=D(K.internalFormat,Rt,bt,K.colorSpace),Wt=rt(M);B&&J(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,Gt,M.width,M.height):J(M)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt,Gt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Gt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=s.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),vt(M.depthTexture,0);const nt=Y.__webglTexture,K=rt(M);if(M.depthTexture.format===vo)J(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(M.depthTexture.format===xo)J(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function St(w){const M=s.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=Y}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?dt(M.__webglFramebuffer[0],w):dt(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),W(M.__webglDepthbuffer[Y],w,!1);else{const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,K)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),W(M.__webglDepthbuffer,w,!1);else{const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(w,M,B){const Y=s.get(w);M!==void 0&&Mt(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&St(w)}function Kt(w){const M=w.texture,B=s.get(w),Y=s.get(M);w.addEventListener("dispose",N);const nt=w.textures,K=w.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,l.memory.textures++),K){B.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[bt]=[];for(let Gt=0;Gt<M.mipmaps.length;Gt++)B.__webglFramebuffer[bt][Gt]=n.createFramebuffer()}else B.__webglFramebuffer[bt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let bt=0;bt<M.mipmaps.length;bt++)B.__webglFramebuffer[bt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let bt=0,Gt=nt.length;bt<Gt;bt++){const Wt=s.get(nt[bt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),l.memory.textures++)}if(w.samples>0&&J(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let bt=0;bt<nt.length;bt++){const Gt=nt[bt];B.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[bt]);const Wt=a.convert(Gt.format,Gt.colorSpace),Tt=a.convert(Gt.type),Dt=D(Gt.internalFormat,Wt,Tt,Gt.colorSpace,w.isXRRenderTarget===!0),Yt=rt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,Dt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,B.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),W(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(n.TEXTURE_CUBE_MAP,M);for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Gt=0;Gt<M.mipmaps.length;Gt++)Mt(B.__webglFramebuffer[bt][Gt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Gt);else Mt(B.__webglFramebuffer[bt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);y(M)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let bt=0,Gt=nt.length;bt<Gt;bt++){const Wt=nt[bt],Tt=s.get(Wt);e.bindTexture(n.TEXTURE_2D,Tt.__webglTexture),kt(n.TEXTURE_2D,Wt),Mt(B.__webglFramebuffer,w,Wt,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),y(Wt)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let bt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Y.__webglTexture),kt(bt,M),M.mipmaps&&M.mipmaps.length>0)for(let Gt=0;Gt<M.mipmaps.length;Gt++)Mt(B.__webglFramebuffer[Gt],w,M,n.COLOR_ATTACHMENT0,bt,Gt);else Mt(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,bt,0);y(M)&&g(bt),e.unbindTexture()}w.depthBuffer&&St(w)}function U(w){const M=w.textures;for(let B=0,Y=M.length;B<Y;B++){const nt=M[B];if(y(nt)){const K=I(w),Rt=s.get(nt).__webglTexture;e.bindTexture(K,Rt),g(K),e.unbindTexture()}}}const O=[],E=[];function ft(w){if(w.samples>0){if(J(w)===!1){const M=w.textures,B=w.width,Y=w.height;let nt=n.COLOR_BUFFER_BIT;const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=s.get(w),bt=M.length>1;if(bt)for(let Wt=0;Wt<M.length;Wt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Gt=w.texture.mipmaps;Gt&&Gt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Wt=0;Wt<M.length;Wt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),bt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Wt]);const Tt=s.get(M[Wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,nt,n.NEAREST),h===!0&&(O.length=0,E.length=0,O.push(n.COLOR_ATTACHMENT0+Wt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(O.push(K),E.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Wt=0;Wt<M.length;Wt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Wt]);const Tt=s.get(M[Wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&h){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function rt(w){return Math.min(r.maxSamples,w.samples)}function J(w){const M=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(w){const M=l.render.frame;p.get(w)!==M&&(p.set(w,M),w.update())}function Et(w,M){const B=w.colorSpace,Y=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==wr&&B!==Qi&&(ye.getTransfer(B)===we?(Y!==qn||nt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=lt,this.setTexture2D=vt,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=J}function WT(n,t){function e(s,r=Qi){let a;const l=ye.getTransfer(r);if(s===Ui)return n.UNSIGNED_BYTE;if(s===Yu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ju)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Mm)return n.UNSIGNED_INT_5_9_9_9_REV;if(s===xm)return n.BYTE;if(s===ym)return n.SHORT;if(s===_o)return n.UNSIGNED_SHORT;if(s===qu)return n.INT;if(s===Os)return n.UNSIGNED_INT;if(s===Li)return n.FLOAT;if(s===wo)return n.HALF_FLOAT;if(s===Sm)return n.ALPHA;if(s===Em)return n.RGB;if(s===qn)return n.RGBA;if(s===vo)return n.DEPTH_COMPONENT;if(s===xo)return n.DEPTH_STENCIL;if(s===bm)return n.RED;if(s===Ku)return n.RED_INTEGER;if(s===Tm)return n.RG;if(s===$u)return n.RG_INTEGER;if(s===Ju)return n.RGBA_INTEGER;if(s===Ea||s===ba||s===Ta||s===wa)if(l===we)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zc||s===qc||s===Yc||s===jc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kc||s===$c||s===Jc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Kc||s===$c)return l===we?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jc)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qc||s===tu||s===eu||s===nu||s===iu||s===su||s===ru||s===ou||s===au||s===lu||s===cu||s===uu||s===hu||s===fu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qc)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===eu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===iu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===su)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ru)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ou)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===au)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fu)return l===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Aa||s===du||s===pu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Aa)return l===we?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===du)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wm||s===mu||s===_u||s===gu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_u)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===go?n.UNSIGNED_INT_24_8:n[s]!==void 0?n[s]:null}return{convert:e}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
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

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,s){if(this.texture===null){const r=new gn,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!==s.depthNear||e.depthFar!==s.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,s=new rs({vertexShader:XT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new li(new tl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends zs{constructor(t,e){super();const s=this;let r=null,a=1,l=null,u="local-floor",h=1,d=null,p=null,m=null,_=null,v=null,S=null;const b=new qT,y=e.getContextAttributes();let g=null,I=null;const D=[],A=[],k=new pe;let H=null;const N=new Nn;N.viewport=new ze;const G=new Nn;G.viewport=new ze;const C=[N,G],R=new pM;let z=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=D[at];return gt===void 0&&(gt=new uc,D[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=D[at];return gt===void 0&&(gt=new uc,D[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=D[at];return gt===void 0&&(gt=new uc,D[at]=gt),gt.getHandSpace()};function et(at){const gt=A.indexOf(at.inputSource);if(gt===-1)return;const Mt=D[gt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,d||l),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function mt(){r.removeEventListener("select",et),r.removeEventListener("selectstart",et),r.removeEventListener("selectend",et),r.removeEventListener("squeeze",et),r.removeEventListener("squeezestart",et),r.removeEventListener("squeezeend",et),r.removeEventListener("end",mt),r.removeEventListener("inputsourceschange",vt);for(let at=0;at<D.length;at++){const gt=A[at];gt!==null&&(A[at]=null,D[at].disconnect(gt))}z=null,lt=null,b.reset(),t.setRenderTarget(g),v=null,_=null,m=null,r=null,I=null,Qt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){a=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(at){if(r=at,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",et),r.addEventListener("selectstart",et),r.addEventListener("selectend",et),r.addEventListener("squeeze",et),r.addEventListener("squeezestart",et),r.addEventListener("squeezeend",et),r.addEventListener("end",mt),r.addEventListener("inputsourceschange",vt),y.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,W=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?xo:vo,W=y.stencil?go:Os);const St={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:a};m=new XRWebGLBinding(r,e),_=m.createProjectionLayer(St),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),I=new Ns(_.textureWidth,_.textureHeight,{format:qn,type:Ui,depthTexture:new zm(_.textureWidth,_.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),I=new Ns(v.framebufferWidth,v.framebufferHeight,{format:qn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await r.requestReferenceSpace(u),Qt.setContext(r),Qt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function vt(at){for(let gt=0;gt<at.removed.length;gt++){const Mt=at.removed[gt],W=A.indexOf(Mt);W>=0&&(A[W]=null,D[W].disconnect(Mt))}for(let gt=0;gt<at.added.length;gt++){const Mt=at.added[gt];let W=A.indexOf(Mt);if(W===-1){for(let St=0;St<D.length;St++)if(St>=A.length){A.push(Mt),W=St;break}else if(A[St]===null){A[St]=Mt,W=St;break}if(W===-1)break}const dt=D[W];dt&&dt.connect(Mt)}}const Q=new $,it=new $;function V(at,gt,Mt){Q.setFromMatrixPosition(gt.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);const W=Q.distanceTo(it),dt=gt.projectionMatrix.elements,St=Mt.projectionMatrix.elements,yt=dt[14]/(dt[10]-1),Kt=dt[14]/(dt[10]+1),U=(dt[9]+1)/dt[5],O=(dt[9]-1)/dt[5],E=(dt[8]-1)/dt[0],ft=(St[8]+1)/St[0],rt=yt*E,J=yt*ft,ut=W/(-E+ft),Et=ut*-E;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Et),at.translateZ(ut),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),dt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const ct=yt+ut,w=Kt+ut,M=rt-Et,B=J+(W-Et),Y=U*Kt/w*ct,nt=O*Kt/w*ct;at.projectionMatrix.makePerspective(M,B,Y,nt,ct,w),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Ct(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(r===null)return;let gt=at.near,Mt=at.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),R.near=G.near=N.near=gt,R.far=G.far=N.far=Mt,(z!==R.near||lt!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,lt=R.far),N.layers.mask=at.layers.mask|2,G.layers.mask=at.layers.mask|4,R.layers.mask=N.layers.mask|G.layers.mask;const W=at.parent,dt=R.cameras;Ct(R,W);for(let St=0;St<dt.length;St++)Ct(dt[St],W);dt.length===2?V(R,N,G):R.projectionMatrix.copy(N.projectionMatrix),_t(at,R,W)};function _t(at,gt,Mt){Mt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=vu*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&v===null))return h},this.setFoveation=function(at){h=at,_!==null&&(_.fixedFoveation=at),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=at)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let Pt=null;function kt(at,gt){if(p=gt.getViewerPose(d||l),S=gt,p!==null){const Mt=p.views;v!==null&&(t.setRenderTargetFramebuffer(I,v.framebuffer),t.setRenderTarget(I));let W=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,W=!0);for(let yt=0;yt<Mt.length;yt++){const Kt=Mt[yt];let U=null;if(v!==null)U=v.getViewport(Kt);else{const E=m.getViewSubImage(_,Kt);U=E.viewport,yt===0&&(t.setRenderTargetTextures(I,E.colorTexture,E.depthStencilTexture),t.setRenderTarget(I))}let O=C[yt];O===void 0&&(O=new Nn,O.layers.enable(yt),O.viewport=new ze,C[yt]=O),O.matrix.fromArray(Kt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Kt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(U.x,U.y,U.width,U.height),yt===0&&(R.matrix.copy(O.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),W===!0&&R.cameras.push(O)}const dt=r.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){const yt=m.getDepthInformation(Mt[0]);yt&&yt.isValid&&yt.texture&&b.init(t,yt,r.renderState)}}for(let Mt=0;Mt<D.length;Mt++){const W=A[Mt],dt=D[Mt];W!==null&&dt!==void 0&&dt.update(W,gt,d||l)}Pt&&Pt(at,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),S=null}const Qt=new km;Qt.setAnimationLoop(kt),this.setAnimationLoop=function(at){Pt=at},this.dispose=function(){}}}const Ss=new Oi,jT=new We;function KT(n,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,Om(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function r(y,g,I,D,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(y,g):g.isMeshToonMaterial?(a(y,g),m(y,g)):g.isMeshPhongMaterial?(a(y,g),p(y,g)):g.isMeshStandardMaterial?(a(y,g),_(y,g),g.isMeshPhysicalMaterial&&v(y,g,A)):g.isMeshMatcapMaterial?(a(y,g),S(y,g)):g.isMeshDepthMaterial?a(y,g):g.isMeshDistanceMaterial?(a(y,g),b(y,g)):g.isMeshNormalMaterial?a(y,g):g.isLineBasicMaterial?(l(y,g),g.isLineDashedMaterial&&u(y,g)):g.isPointsMaterial?h(y,g,I,D):g.isSpriteMaterial?d(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===En&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===En&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=t.get(g),D=I.envMap,A=I.envMapRotation;D&&(y.envMap.value=D,Ss.copy(A),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),y.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(Ss)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function u(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,I,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=D*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function v(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){const I=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function $T(n,t,e,s){let r={},a={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const A=D.program;s.uniformBlockBinding(I,A)}function d(I,D){let A=r[I.id];A===void 0&&(S(I),A=p(I),r[I.id]=A,I.addEventListener("dispose",y));const k=D.program;s.updateUBOMapping(I,k);const H=t.render.frame;a[I.id]!==H&&(_(I),a[I.id]=H)}function p(I){const D=m();I.__bindingPointIndex=D;const A=n.createBuffer(),k=I.__size,H=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,k,H),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,A),A}function m(){for(let I=0;I<u;I++)if(l.indexOf(I)===-1)return l.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const D=r[I.id],A=I.uniforms,k=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let H=0,N=A.length;H<N;H++){const G=Array.isArray(A[H])?A[H]:[A[H]];for(let C=0,R=G.length;C<R;C++){const z=G[C];if(v(z,H,C,k)===!0){const lt=z.__offset,et=Array.isArray(z.value)?z.value:[z.value];let mt=0;for(let vt=0;vt<et.length;vt++){const Q=et[vt],it=b(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,lt+mt,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,mt),mt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,lt,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(I,D,A,k){const H=I.value,N=D+"_"+A;if(k[N]===void 0)return typeof H=="number"||typeof H=="boolean"?k[N]=H:k[N]=H.clone(),!0;{const G=k[N];if(typeof H=="number"||typeof H=="boolean"){if(G!==H)return k[N]=H,!0}else if(G.equals(H)===!1)return G.copy(H),!0}return!1}function S(I){const D=I.uniforms;let A=0;const k=16;for(let N=0,G=D.length;N<G;N++){const C=Array.isArray(D[N])?D[N]:[D[N]];for(let R=0,z=C.length;R<z;R++){const lt=C[R],et=Array.isArray(lt.value)?lt.value:[lt.value];for(let mt=0,vt=et.length;mt<vt;mt++){const Q=et[mt],it=b(Q),V=A%k,Ct=V%it.boundary,_t=V+Ct;A+=Ct,_t!==0&&k-_t<it.storage&&(A+=k-_t),lt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=A,A+=it.storage}}}const H=A%k;return H>0&&(A+=k-H),I.__size=A,I.__cache={},this}function b(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function y(I){const D=I.target;D.removeEventListener("dispose",y);const A=l.indexOf(D.__bindingPointIndex);l.splice(A,1),n.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function g(){for(const I in r)n.deleteBuffer(r[I]);l=[],r={},a={}}return{bind:h,update:d,dispose:g}}class JT{constructor(t={}){const{canvas:e=Cy(),context:s=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),b=new Int32Array(4);let y=null,g=null;const I=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let k=!1;this._outputColorSpace=Un;let H=0,N=0,G=null,C=-1,R=null;const z=new ze,lt=new ze;let et=null;const mt=new Pe(0);let vt=0,Q=e.width,it=e.height,V=1,Ct=null,_t=null;const Pt=new ze(0,0,Q,it),kt=new ze(0,0,Q,it);let Qt=!1;const at=new Bm;let gt=!1,Mt=!1;const W=new We,dt=new We,St=new $,yt=new ze,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function O(){return G===null?V:1}let E=s;function ft(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zu}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),E===null){const Z="webgl2";if(E=ft(Z,P),E===null)throw ft(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let rt,J,ut,Et,ct,w,M,B,Y,nt,K,Rt,bt,Gt,Wt,Tt,Dt,Yt,$t,Lt,ie,te,Te,X;function Ut(){rt=new lb(E),rt.init(),te=new WT(E,rt),J=new eb(E,rt,t,te),ut=new VT(E,rt),J.reverseDepthBuffer&&_&&ut.buffers.depth.setReversed(!0),Et=new hb(E),ct=new RT,w=new GT(E,rt,ut,ct,J,te,Et),M=new ib(A),B=new ab(A),Y=new gM(E),Te=new QE(E,Y),nt=new cb(E,Y,Et,Te),K=new db(E,nt,Y,Et),$t=new fb(E,J,w),Tt=new nb(ct),Rt=new PT(A,M,B,rt,J,Te,Tt),bt=new KT(A,ct),Gt=new LT,Wt=new FT(rt),Yt=new JE(A,M,B,ut,K,v,h),Dt=new kT(A,K,J),X=new $T(E,Et,J,ut),Lt=new tb(E,rt,Et),ie=new ub(E,rt,Et),Et.programs=Rt.programs,A.capabilities=J,A.extensions=rt,A.properties=ct,A.renderLists=Gt,A.shadowMap=Dt,A.state=ut,A.info=Et}Ut();const ht=new YT(A,E);this.xr=ht,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(Q,it,!1))},this.getSize=function(P){return P.set(Q,it)},this.setSize=function(P,Z,tt=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=P,it=Z,e.width=Math.floor(P*V),e.height=Math.floor(Z*V),tt===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(Q*V,it*V).floor()},this.setDrawingBufferSize=function(P,Z,tt){Q=P,it=Z,V=tt,e.width=Math.floor(P*tt),e.height=Math.floor(Z*tt),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(Pt)},this.setViewport=function(P,Z,tt,ot){P.isVector4?Pt.set(P.x,P.y,P.z,P.w):Pt.set(P,Z,tt,ot),ut.viewport(z.copy(Pt).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(kt)},this.setScissor=function(P,Z,tt,ot){P.isVector4?kt.set(P.x,P.y,P.z,P.w):kt.set(P,Z,tt,ot),ut.scissor(lt.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(P){ut.setScissorTest(Qt=P)},this.setOpaqueSort=function(P){Ct=P},this.setTransparentSort=function(P){_t=P},this.getClearColor=function(P){return P.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,tt=!0){let ot=0;if(P){let q=!1;if(G!==null){const At=G.texture.format;q=At===Ju||At===$u||At===Ku}if(q){const At=G.texture.type,Ot=At===Ui||At===Os||At===_o||At===go||At===Yu||At===ju,Ht=Yt.getClearColor(),Vt=Yt.getClearAlpha(),Jt=Ht.r,ee=Ht.g,jt=Ht.b;Ot?(S[0]=Jt,S[1]=ee,S[2]=jt,S[3]=Vt,E.clearBufferuiv(E.COLOR,0,S)):(b[0]=Jt,b[1]=ee,b[2]=jt,b[3]=Vt,E.clearBufferiv(E.COLOR,0,b))}else ot|=E.COLOR_BUFFER_BIT}Z&&(ot|=E.DEPTH_BUFFER_BIT),tt&&(ot|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Gt.dispose(),Wt.dispose(),ct.dispose(),M.dispose(),B.dispose(),K.dispose(),Te.dispose(),X.dispose(),Rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Lo),ht.removeEventListener("sessionend",Do),di.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const P=Et.autoReset,Z=Dt.enabled,tt=Dt.autoUpdate,ot=Dt.needsUpdate,q=Dt.type;Ut(),Et.autoReset=P,Dt.enabled=Z,Dt.autoUpdate=tt,Dt.needsUpdate=ot,Dt.type=q}function Nt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function oe(P){const Z=P.target;Z.removeEventListener("dispose",oe),Oe(Z)}function Oe(P){je(P),ct.remove(P)}function je(P){const Z=ct.get(P).programs;Z!==void 0&&(Z.forEach(function(tt){Rt.releaseProgram(tt)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,tt,ot,q,At){Z===null&&(Z=Kt);const Ot=q.isMesh&&q.matrixWorld.determinant()<0,Ht=Fi(P,Z,tt,ot,q);ut.setMaterial(ot,Ot);let Vt=tt.index,Jt=1;if(ot.wireframe===!0){if(Vt=nt.getWireframeAttribute(tt),Vt===void 0)return;Jt=2}const ee=tt.drawRange,jt=tt.attributes.position;let he=ee.start*Jt,Xt=(ee.start+ee.count)*Jt;At!==null&&(he=Math.max(he,At.start*Jt),Xt=Math.min(Xt,(At.start+At.count)*Jt)),Vt!==null?(he=Math.max(he,0),Xt=Math.min(Xt,Vt.count)):jt!=null&&(he=Math.max(he,0),Xt=Math.min(Xt,jt.count));const se=Xt-he;if(se<0||se===1/0)return;Te.setup(q,ot,Ht,tt,Vt);let Re,fe=Lt;if(Vt!==null&&(Re=Y.get(Vt),fe=ie,fe.setIndex(Re)),q.isMesh)ot.wireframe===!0?(ut.setLineWidth(ot.wireframeLinewidth*O()),fe.setMode(E.LINES)):fe.setMode(E.TRIANGLES);else if(q.isLine){let qt=ot.linewidth;qt===void 0&&(qt=1),ut.setLineWidth(qt*O()),q.isLineSegments?fe.setMode(E.LINES):q.isLineLoop?fe.setMode(E.LINE_LOOP):fe.setMode(E.LINE_STRIP)}else q.isPoints?fe.setMode(E.POINTS):q.isSprite&&fe.setMode(E.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ra("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qt=q._multiDrawStarts,Be=q._multiDrawCounts,Bt=q._multiDrawCount,ve=Vt?Y.get(Vt).bytesPerElement:1,Qn=ct.get(ot).currentProgram.getUniforms();for(let Ke=0;Ke<Bt;Ke++)Qn.setValue(E,"_gl_DrawID",Ke),fe.render(qt[Ke]/ve,Be[Ke])}else if(q.isInstancedMesh)fe.renderInstances(he,se,q.count);else if(tt.isInstancedBufferGeometry){const qt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Be=Math.min(tt.instanceCount,qt);fe.renderInstances(he,se,Be)}else fe.render(he,se)};function Me(P,Z,tt){P.transparent===!0&&P.side===Ci&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,hs(P,Z,tt),P.side=ss,P.needsUpdate=!0,hs(P,Z,tt),P.side=Ci):hs(P,Z,tt)}this.compile=function(P,Z,tt=null){tt===null&&(tt=P),g=Wt.get(tt),g.init(Z),D.push(g),tt.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),P!==tt&&P.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const ot=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const At=q.material;if(At)if(Array.isArray(At))for(let Ot=0;Ot<At.length;Ot++){const Ht=At[Ot];Me(Ht,tt,q),ot.add(Ht)}else Me(At,tt,q),ot.add(At)}),g=D.pop(),ot},this.compileAsync=function(P,Z,tt=null){const ot=this.compile(P,Z,tt);return new Promise(q=>{function At(){if(ot.forEach(function(Ot){ct.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){q(P);return}setTimeout(At,10)}rt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ln=null;function kn(P){ln&&ln(P)}function Lo(){di.stop()}function Do(){di.start()}const di=new km;di.setAnimationLoop(kn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(P){ln=P,ht.setAnimationLoop(P),P===null?di.stop():di.start()},ht.addEventListener("sessionstart",Lo),ht.addEventListener("sessionend",Do),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Z),Z=ht.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,Z,G),g=Wt.get(P,D.length),g.init(Z),D.push(g),dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),at.setFromProjectionMatrix(dt),Mt=this.localClippingEnabled,gt=Tt.init(this.clippingPlanes,Mt),y=Gt.get(P,I.length),y.init(),I.push(y),ht.enabled===!0&&ht.isPresenting===!0){const At=A.xr.getDepthSensingMesh();At!==null&&xn(At,Z,-1/0,A.sortObjects)}xn(P,Z,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(Ct,_t),U=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,U&&Yt.addToRenderList(y,P),this.info.render.frame++,gt===!0&&Tt.beginShadows();const tt=g.state.shadowsArray;Dt.render(tt,P,Z),gt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,q=y.transmissive;if(g.setupLights(),Z.isArrayCamera){const At=Z.cameras;if(q.length>0)for(let Ot=0,Ht=At.length;Ot<Ht;Ot++){const Vt=At[Ot];Rr(ot,q,P,Vt)}U&&Yt.render(P);for(let Ot=0,Ht=At.length;Ot<Ht;Ot++){const Vt=At[Ot];Zt(y,P,Vt,Vt.viewport)}}else q.length>0&&Rr(ot,q,P,Z),U&&Yt.render(P),Zt(y,P,Z);G!==null&&N===0&&(w.updateMultisampleRenderTarget(G),w.updateRenderTargetMipmap(G)),P.isScene===!0&&P.onAfterRender(A,P,Z),Te.resetDefaultState(),C=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],gt===!0&&Tt.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function xn(P,Z,tt,ot){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||at.intersectsSprite(P)){ot&&yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const Ot=K.update(P),Ht=P.material;Ht.visible&&y.push(P,Ot,Ht,tt,yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||at.intersectsObject(P))){const Ot=K.update(P),Ht=P.material;if(ot&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),yt.copy(P.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),yt.copy(Ot.boundingSphere.center)),yt.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(Ht)){const Vt=Ot.groups;for(let Jt=0,ee=Vt.length;Jt<ee;Jt++){const jt=Vt[Jt],he=Ht[jt.materialIndex];he&&he.visible&&y.push(P,Ot,he,tt,yt.z,jt)}}else Ht.visible&&y.push(P,Ot,Ht,tt,yt.z,null)}}const At=P.children;for(let Ot=0,Ht=At.length;Ot<Ht;Ot++)xn(At[Ot],Z,tt,ot)}function Zt(P,Z,tt,ot){const q=P.opaque,At=P.transmissive,Ot=P.transparent;g.setupLightsView(tt),gt===!0&&Tt.setGlobalState(A.clippingPlanes,tt),ot&&ut.viewport(z.copy(ot)),q.length>0&&us(q,Z,tt),At.length>0&&us(At,Z,tt),Ot.length>0&&us(Ot,Z,tt),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Rr(P,Z,tt,ot){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Ns(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?wo:Ui,minFilter:Ps,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const At=g.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||z;At.setSize(Ot.z*A.transmissionResolutionScale,Ot.w*A.transmissionResolutionScale);const Ht=A.getRenderTarget();A.setRenderTarget(At),A.getClearColor(mt),vt=A.getClearAlpha(),vt<1&&A.setClearColor(16777215,.5),A.clear(),U&&Yt.render(tt);const Vt=A.toneMapping;A.toneMapping=is;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),gt===!0&&Tt.setGlobalState(A.clippingPlanes,ot),us(P,tt,ot),w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let jt=0,he=Z.length;jt<he;jt++){const Xt=Z[jt],se=Xt.object,Re=Xt.geometry,fe=Xt.material,qt=Xt.group;if(fe.side===Ci&&se.layers.test(ot.layers)){const Be=fe.side;fe.side=En,fe.needsUpdate=!0,Cr(se,tt,ot,Re,fe,qt),fe.side=Be,fe.needsUpdate=!0,ee=!0}}ee===!0&&(w.updateMultisampleRenderTarget(At),w.updateRenderTargetMipmap(At))}A.setRenderTarget(Ht),A.setClearColor(mt,vt),Jt!==void 0&&(ot.viewport=Jt),A.toneMapping=Vt}function us(P,Z,tt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,At=P.length;q<At;q++){const Ot=P[q],Ht=Ot.object,Vt=Ot.geometry,Jt=Ot.group;let ee=Ot.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Ht.layers.test(tt.layers)&&Cr(Ht,Z,tt,Vt,ee,Jt)}}function Cr(P,Z,tt,ot,q,At){P.onBeforeRender(A,Z,tt,ot,q,At),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(A,Z,tt,ot,P,At),q.transparent===!0&&q.side===Ci&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,A.renderBufferDirect(tt,Z,ot,q,P,At),q.side=ss,q.needsUpdate=!0,A.renderBufferDirect(tt,Z,ot,q,P,At),q.side=Ci):A.renderBufferDirect(tt,Z,ot,q,P,At),P.onAfterRender(A,Z,tt,ot,q,At)}function hs(P,Z,tt){Z.isScene!==!0&&(Z=Kt);const ot=ct.get(P),q=g.state.lights,At=g.state.shadowsArray,Ot=q.state.version,Ht=Rt.getParameters(P,q.state,At,Z,tt),Vt=Rt.getProgramCacheKey(Ht);let Jt=ot.programs;ot.environment=P.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(P.isMeshStandardMaterial?B:M).get(P.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,Jt===void 0&&(P.addEventListener("dispose",oe),Jt=new Map,ot.programs=Jt);let ee=Jt.get(Vt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Ot)return Lr(P,Ht),ee}else Ht.uniforms=Rt.getUniforms(P),P.onBeforeCompile(Ht,A),ee=Rt.acquireProgram(Ht,Vt),Jt.set(Vt,ee),ot.uniforms=Ht.uniforms;const jt=ot.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Lr(P,Ht),ot.needsLights=il(P),ot.lightsStateVersion=Ot,ot.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function ks(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Ca.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Lr(P,Z){const tt=ct.get(P);tt.outputColorSpace=Z.outputColorSpace,tt.batching=Z.batching,tt.batchingColor=Z.batchingColor,tt.instancing=Z.instancing,tt.instancingColor=Z.instancingColor,tt.instancingMorph=Z.instancingMorph,tt.skinning=Z.skinning,tt.morphTargets=Z.morphTargets,tt.morphNormals=Z.morphNormals,tt.morphColors=Z.morphColors,tt.morphTargetsCount=Z.morphTargetsCount,tt.numClippingPlanes=Z.numClippingPlanes,tt.numIntersection=Z.numClipIntersection,tt.vertexAlphas=Z.vertexAlphas,tt.vertexTangents=Z.vertexTangents,tt.toneMapping=Z.toneMapping}function Fi(P,Z,tt,ot,q){Z.isScene!==!0&&(Z=Kt),w.resetTextureUnits();const At=Z.fog,Ot=ot.isMeshStandardMaterial?Z.environment:null,Ht=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:wr,Vt=(ot.isMeshStandardMaterial?B:M).get(ot.envMap||Ot),Jt=ot.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),jt=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,Xt=!!tt.morphAttributes.color;let se=is;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(se=A.toneMapping);const Re=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,fe=Re!==void 0?Re.length:0,qt=ct.get(ot),Be=g.state.lights;if(gt===!0&&(Mt===!0||P!==R)){const _e=P===R&&ot.id===C;Tt.setState(ot,P,_e)}let Bt=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Be.state.version||qt.outputColorSpace!==Ht||q.isBatchedMesh&&qt.batching===!1||!q.isBatchedMesh&&qt.batching===!0||q.isBatchedMesh&&qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qt.instancing===!1||!q.isInstancedMesh&&qt.instancing===!0||q.isSkinnedMesh&&qt.skinning===!1||!q.isSkinnedMesh&&qt.skinning===!0||q.isInstancedMesh&&qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qt.instancingMorph===!1&&q.morphTexture!==null||qt.envMap!==Vt||ot.fog===!0&&qt.fog!==At||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==Jt||qt.vertexTangents!==ee||qt.morphTargets!==jt||qt.morphNormals!==he||qt.morphColors!==Xt||qt.toneMapping!==se||qt.morphTargetsCount!==fe)&&(Bt=!0):(Bt=!0,qt.__version=ot.version);let ve=qt.currentProgram;Bt===!0&&(ve=hs(ot,Z,q));let Qn=!1,Ke=!1,$e=!1;const Le=ve.getUniforms(),tn=qt.uniforms;if(ut.useProgram(ve.program)&&(Qn=!0,Ke=!0,$e=!0),ot.id!==C&&(C=ot.id,Ke=!0),Qn||R!==P){ut.buffers.depth.getReversed()?(W.copy(P.projectionMatrix),Dy(W),Iy(W),Le.setValue(E,"projectionMatrix",W)):Le.setValue(E,"projectionMatrix",P.projectionMatrix),Le.setValue(E,"viewMatrix",P.matrixWorldInverse);const Fe=Le.map.cameraPosition;Fe!==void 0&&Fe.setValue(E,St.setFromMatrixPosition(P.matrixWorld)),J.logarithmicDepthBuffer&&Le.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Le.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Ke=!0,$e=!0)}if(q.isSkinnedMesh){Le.setOptional(E,q,"bindMatrix"),Le.setOptional(E,q,"bindMatrixInverse");const _e=q.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),Le.setValue(E,"boneTexture",_e.boneTexture,w))}q.isBatchedMesh&&(Le.setOptional(E,q,"batchingTexture"),Le.setValue(E,"batchingTexture",q._matricesTexture,w),Le.setOptional(E,q,"batchingIdTexture"),Le.setValue(E,"batchingIdTexture",q._indirectTexture,w),Le.setOptional(E,q,"batchingColorTexture"),q._colorsTexture!==null&&Le.setValue(E,"batchingColorTexture",q._colorsTexture,w));const He=tt.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&$t.update(q,tt,ve),(Ke||qt.receiveShadow!==q.receiveShadow)&&(qt.receiveShadow=q.receiveShadow,Le.setValue(E,"receiveShadow",q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(tn.envMap.value=Vt,tn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(tn.envMapIntensity.value=Z.environmentIntensity),Ke&&(Le.setValue(E,"toneMappingExposure",A.toneMappingExposure),qt.needsLights&&Io(tn,$e),At&&ot.fog===!0&&bt.refreshFogUniforms(tn,At),bt.refreshMaterialUniforms(tn,ot,V,it,g.state.transmissionRenderTarget[P.id]),Ca.upload(E,ks(qt),tn,w)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ca.upload(E,ks(qt),tn,w),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Le.setValue(E,"center",q.center),Le.setValue(E,"modelViewMatrix",q.modelViewMatrix),Le.setValue(E,"normalMatrix",q.normalMatrix),Le.setValue(E,"modelMatrix",q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const _e=ot.uniformsGroups;for(let Fe=0,pi=_e.length;Fe<pi;Fe++){const Tn=_e[Fe];X.update(Tn,ve),X.bind(Tn,ve)}}return ve}function Io(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function il(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(P,Z,tt){const ot=ct.get(P);ot.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ct.get(P.texture).__webglTexture=Z,ct.get(P.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:tt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const tt=ct.get(P);tt.__webglFramebuffer=Z,tt.__useDefaultFramebuffer=Z===void 0};const sl=E.createFramebuffer();this.setRenderTarget=function(P,Z=0,tt=0){G=P,H=Z,N=tt;let ot=!0,q=null,At=!1,Ot=!1;if(P){const Vt=ct.get(P);if(Vt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(E.FRAMEBUFFER,null),ot=!1;else if(Vt.__webglFramebuffer===void 0)w.setupRenderTarget(P);else if(Vt.__hasExternalTextures)w.rebindTextures(P,ct.get(P.texture).__webglTexture,ct.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const jt=P.depthTexture;if(Vt.__boundDepthTexture!==jt){if(jt!==null&&ct.has(jt)&&(P.width!==jt.image.width||P.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(P)}}const Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);const ee=ct.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?q=ee[Z][tt]:q=ee[Z],At=!0):P.samples>0&&w.useMultisampledRTT(P)===!1?q=ct.get(P).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[tt]:q=ee,z.copy(P.viewport),lt.copy(P.scissor),et=P.scissorTest}else z.copy(Pt).multiplyScalar(V).floor(),lt.copy(kt).multiplyScalar(V).floor(),et=Qt;if(tt!==0&&(q=sl),ut.bindFramebuffer(E.FRAMEBUFFER,q)&&ot&&ut.drawBuffers(P,q),ut.viewport(z),ut.scissor(lt),ut.setScissorTest(et),At){const Vt=ct.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,tt)}else if(Ot){const Vt=ct.get(P.texture),Jt=Z;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Vt.__webglTexture,tt,Jt)}else if(P!==null&&tt!==0){const Vt=ct.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Vt.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(P,Z,tt,ot,q,At,Ot){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){ut.bindFramebuffer(E.FRAMEBUFFER,Ht);try{const Vt=P.texture,Jt=Vt.format,ee=Vt.type;if(!J.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ot&&tt>=0&&tt<=P.height-q&&E.readPixels(Z,tt,ot,q,te.convert(Jt),te.convert(ee),At)}finally{const Vt=G!==null?ct.get(G).__webglFramebuffer:null;ut.bindFramebuffer(E.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,tt,ot,q,At,Ot){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht)if(Z>=0&&Z<=P.width-ot&&tt>=0&&tt<=P.height-q){ut.bindFramebuffer(E.FRAMEBUFFER,Ht);const Vt=P.texture,Jt=Vt.format,ee=Vt.type;if(!J.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.bufferData(E.PIXEL_PACK_BUFFER,At.byteLength,E.STREAM_READ),E.readPixels(Z,tt,ot,q,te.convert(Jt),te.convert(ee),0);const he=G!==null?ct.get(G).__webglFramebuffer:null;ut.bindFramebuffer(E.FRAMEBUFFER,he);const Xt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ly(E,Xt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,At),E.deleteBuffer(jt),E.deleteSync(Xt),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,tt=0){const ot=Math.pow(2,-tt),q=Math.floor(P.image.width*ot),At=Math.floor(P.image.height*ot),Ot=Z!==null?Z.x:0,Ht=Z!==null?Z.y:0;w.setTexture2D(P,0),E.copyTexSubImage2D(E.TEXTURE_2D,tt,0,0,Ot,Ht,q,At),ut.unbindTexture()};const rl=E.createFramebuffer(),ol=E.createFramebuffer();this.copyTextureToTexture=function(P,Z,tt=null,ot=null,q=0,At=null){At===null&&(q!==0?(Ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=q,q=0):At=0);let Ot,Ht,Vt,Jt,ee,jt,he,Xt,se;const Re=P.isCompressedTexture?P.mipmaps[At]:P.image;if(tt!==null)Ot=tt.max.x-tt.min.x,Ht=tt.max.y-tt.min.y,Vt=tt.isBox3?tt.max.z-tt.min.z:1,Jt=tt.min.x,ee=tt.min.y,jt=tt.isBox3?tt.min.z:0;else{const He=Math.pow(2,-q);Ot=Math.floor(Re.width*He),Ht=Math.floor(Re.height*He),P.isDataArrayTexture?Vt=Re.depth:P.isData3DTexture?Vt=Math.floor(Re.depth*He):Vt=1,Jt=0,ee=0,jt=0}ot!==null?(he=ot.x,Xt=ot.y,se=ot.z):(he=0,Xt=0,se=0);const fe=te.convert(Z.format),qt=te.convert(Z.type);let Be;Z.isData3DTexture?(w.setTexture3D(Z,0),Be=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(w.setTexture2DArray(Z,0),Be=E.TEXTURE_2D_ARRAY):(w.setTexture2D(Z,0),Be=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Bt=E.getParameter(E.UNPACK_ROW_LENGTH),ve=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Qn=E.getParameter(E.UNPACK_SKIP_PIXELS),Ke=E.getParameter(E.UNPACK_SKIP_ROWS),$e=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Re.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Re.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Jt),E.pixelStorei(E.UNPACK_SKIP_ROWS,ee),E.pixelStorei(E.UNPACK_SKIP_IMAGES,jt);const Le=P.isDataArrayTexture||P.isData3DTexture,tn=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const He=ct.get(P),_e=ct.get(Z),Fe=ct.get(He.__renderTarget),pi=ct.get(_e.__renderTarget);ut.bindFramebuffer(E.READ_FRAMEBUFFER,Fe.__webglFramebuffer),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Tn=0;Tn<Vt;Tn++)Le&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ct.get(P).__webglTexture,q,jt+Tn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ct.get(Z).__webglTexture,At,se+Tn)),E.blitFramebuffer(Jt,ee,Ot,Ht,he,Xt,Ot,Ht,E.DEPTH_BUFFER_BIT,E.NEAREST);ut.bindFramebuffer(E.READ_FRAMEBUFFER,null),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||ct.has(P)){const He=ct.get(P),_e=ct.get(Z);ut.bindFramebuffer(E.READ_FRAMEBUFFER,rl),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,ol);for(let Fe=0;Fe<Vt;Fe++)Le?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,He.__webglTexture,q,jt+Fe):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,He.__webglTexture,q),tn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_e.__webglTexture,At,se+Fe):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,_e.__webglTexture,At),q!==0?E.blitFramebuffer(Jt,ee,Ot,Ht,he,Xt,Ot,Ht,E.COLOR_BUFFER_BIT,E.NEAREST):tn?E.copyTexSubImage3D(Be,At,he,Xt,se+Fe,Jt,ee,Ot,Ht):E.copyTexSubImage2D(Be,At,he,Xt,Jt,ee,Ot,Ht);ut.bindFramebuffer(E.READ_FRAMEBUFFER,null),ut.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else tn?P.isDataTexture||P.isData3DTexture?E.texSubImage3D(Be,At,he,Xt,se,Ot,Ht,Vt,fe,qt,Re.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(Be,At,he,Xt,se,Ot,Ht,Vt,fe,Re.data):E.texSubImage3D(Be,At,he,Xt,se,Ot,Ht,Vt,fe,qt,Re):P.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,At,he,Xt,Ot,Ht,fe,qt,Re.data):P.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,At,he,Xt,Re.width,Re.height,fe,Re.data):E.texSubImage2D(E.TEXTURE_2D,At,he,Xt,Ot,Ht,fe,qt,Re);E.pixelStorei(E.UNPACK_ROW_LENGTH,Bt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Qn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ke),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$e),At===0&&Z.generateMipmaps&&E.generateMipmap(Be),ut.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,tt=null,ot=null,q=0){return Ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,tt,ot,q)},this.initRenderTarget=function(P){ct.get(P).__webglFramebuffer===void 0&&w.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),ut.unbindTexture()},this.resetState=function(){H=0,N=0,G=null,ut.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const QT="/assets/tower-BhzPKVRN.png",Hd={type:"change"},rh={type:"start"},Xm={type:"end"},xa=new Cm,Vd=new $i,tw=Math.cos(70*Ry.DEG2RAD),Xe=new $,Sn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vc=1e-6;class ew extends mM{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Fs,this._lastTargetPosition=new $,this._quat=new Fs().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new md,this._sphericalDelta=new md,this._scale=1,this._panOffset=new $,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new $,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iw.bind(this),this._onPointerDown=nw.bind(this),this._onPointerUp=sw.bind(this),this._onContextMenu=hw.bind(this),this._onMouseWheel=aw.bind(this),this._onKeyDown=lw.bind(this),this._onTouchStart=cw.bind(this),this._onTouchMove=uw.bind(this),this._onMouseDown=rw.bind(this),this._onMouseMove=ow.bind(this),this._interceptControlDown=fw.bind(this),this._interceptControlUp=dw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hd),this.update(),this.state=Ae.NONE}update(t=null){const e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(s)&&isFinite(r)&&(s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),r<-Math.PI?r+=Sn:r>Math.PI&&(r-=Sn),s<=r?this._spherical.theta=Math.max(s,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+r)/2?Math.max(s,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=Xe.length();l=this._clampDistance(u*this._scale);const h=u-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const u=new $(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),l=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<tw?this.object.lookAt(this.target):(Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(Vd,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vc||this._lastTargetPosition.distanceToSquared(this.target)>vc?(this.dispatchEvent(Hd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){const s=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Xe.copy(r).sub(this.target);let a=Xe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/s.clientHeight,this.object.matrix),this._panUp(2*e*a/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),r=t-s.left,a=e-s.top,l=s.width,u=s.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(s,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(s,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(s*s+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),r=.5*(t.pageX+s.x),a=.5*(t.pageY+s.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(s,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(s*s+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pe,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function nw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function iw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xm),this.state=Ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rw(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ae.DOLLY;break;case gr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}break;case gr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(rh)}function ow(n){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(n.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xm))}function lw(n){this.enabled!==!1&&this._handleKeyDown(n)}function cw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ae.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ae.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(rh)}function uw(n){switch(this._trackPointer(n),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ae.NONE}}function hw(n){this.enabled!==!1&&n.preventDefault()}function fw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pw={class:"h-screen w-screen bg-black relative"},mw=bo({__name:"Play",setup(n){const t=So(null),e=Xu(),s=()=>e.push("/guess");return ku(()=>{const r=new sM,a=new Nn(75,window.innerWidth/window.innerHeight,1,1e3);a.position.z=.1;const l=new JT({canvas:t.value});l.setSize(window.innerWidth,window.innerHeight);const u=new nh(500,60,40);u.scale(-1,1,1);const h=new fM().load(QT),d=new eh({map:h}),p=new li(u,d);r.add(p);const m=new ew(a,l.domElement);m.enableZoom=!1,m.rotateSpeed=.3,m.enableDamping=!0,m.dampingFactor=.05;const _=()=>{requestAnimationFrame(_),m.update(),l.render(r,a)};_()}),(r,a)=>(es(),Ds("div",pw,[dn("canvas",{ref_key:"canvasRef",ref:t,class:"w-full h-full"},null,512),dn("button",{onClick:s,class:"absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded-xl text-white hover:bg-green-700"}," Let's Guess ")]))}});function _w(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $r={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var gw=$r.exports,Gd;function vw(){return Gd||(Gd=1,function(n,t){(function(e,s){s(t)})(gw,function(e){var s="1.9.4";function r(i){var o,c,f,x;for(c=1,f=arguments.length;c<f;c++){x=arguments[c];for(o in x)i[o]=x[o]}return i}var a=Object.create||function(){function i(){}return function(o){return i.prototype=o,new i}}();function l(i,o){var c=Array.prototype.slice;if(i.bind)return i.bind.apply(i,c.call(arguments,1));var f=c.call(arguments,2);return function(){return i.apply(o,f.length?f.concat(c.call(arguments)):arguments)}}var u=0;function h(i){return"_leaflet_id"in i||(i._leaflet_id=++u),i._leaflet_id}function d(i,o,c){var f,x,T,F;return F=function(){f=!1,x&&(T.apply(c,x),x=!1)},T=function(){f?x=arguments:(i.apply(c,arguments),setTimeout(F,o),f=!0)},T}function p(i,o,c){var f=o[1],x=o[0],T=f-x;return i===f&&c?i:((i-x)%T+T)%T+x}function m(){return!1}function _(i,o){if(o===!1)return i;var c=Math.pow(10,o===void 0?6:o);return Math.round(i*c)/c}function v(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function S(i){return v(i).split(/\s+/)}function b(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var c in o)i.options[c]=o[c];return i.options}function y(i,o,c){var f=[];for(var x in i)f.push(encodeURIComponent(c?x.toUpperCase():x)+"="+encodeURIComponent(i[x]));return(!o||o.indexOf("?")===-1?"?":"&")+f.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function I(i,o){return i.replace(g,function(c,f){var x=o[f];if(x===void 0)throw new Error("No value provided for variable "+c);return typeof x=="function"&&(x=x(o)),x})}var D=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function A(i,o){for(var c=0;c<i.length;c++)if(i[c]===o)return c;return-1}var k="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function H(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var N=0;function G(i){var o=+new Date,c=Math.max(0,16-(o-N));return N=o+c,window.setTimeout(i,c)}var C=window.requestAnimationFrame||H("RequestAnimationFrame")||G,R=window.cancelAnimationFrame||H("CancelAnimationFrame")||H("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function z(i,o,c){if(c&&C===G)i.call(o);else return C.call(window,l(i,o))}function lt(i){i&&R.call(window,i)}var et={__proto__:null,extend:r,create:a,bind:l,get lastId(){return u},stamp:h,throttle:d,wrapNum:p,falseFn:m,formatNum:_,trim:v,splitWords:S,setOptions:b,getParamString:y,template:I,isArray:D,indexOf:A,emptyImageUrl:k,requestFn:C,cancelFn:R,requestAnimFrame:z,cancelAnimFrame:lt};function mt(){}mt.extend=function(i){var o=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,f=a(c);f.constructor=o,o.prototype=f;for(var x in this)Object.prototype.hasOwnProperty.call(this,x)&&x!=="prototype"&&x!=="__super__"&&(o[x]=this[x]);return i.statics&&r(o,i.statics),i.includes&&(vt(i.includes),r.apply(null,[f].concat(i.includes))),r(f,i),delete f.statics,delete f.includes,f.options&&(f.options=c.options?a(c.options):{},r(f.options,i.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,F=f._initHooks.length;T<F;T++)f._initHooks[T].call(this)}},o},mt.include=function(i){var o=this.prototype.options;return r(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},mt.mergeOptions=function(i){return r(this.prototype.options,i),this},mt.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),c=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function vt(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=D(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Q={on:function(i,o,c){if(typeof i=="object")for(var f in i)this._on(f,i[f],o);else{i=S(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],o,c)}return this},off:function(i,o,c){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var f in i)this._off(f,i[f],o);else{i=S(i);for(var x=arguments.length===1,T=0,F=i.length;T<F;T++)x?this._off(i[T]):this._off(i[T],o,c)}return this},_on:function(i,o,c,f){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,c)===!1){c===this&&(c=void 0);var x={fn:o,ctx:c};f&&(x.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(x)}},_off:function(i,o,c){var f,x,T;if(this._events&&(f=this._events[i],!!f)){if(arguments.length===1){if(this._firingCount)for(x=0,T=f.length;x<T;x++)f[x].fn=m;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var F=this._listens(i,o,c);if(F!==!1){var j=f[F];this._firingCount&&(j.fn=m,this._events[i]=f=f.slice()),f.splice(F,1)}}},fire:function(i,o,c){if(!this.listens(i,c))return this;var f=r({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var x=this._events[i];if(x){this._firingCount=this._firingCount+1||1;for(var T=0,F=x.length;T<F;T++){var j=x[T],st=j.fn;j.once&&this.off(i,st,j.ctx),st.call(j.ctx||this,f)}this._firingCount--}}return c&&this._propagateEvent(f),this},listens:function(i,o,c,f){typeof i!="string"&&console.warn('"string" type argument expected');var x=o;typeof o!="function"&&(f=!!o,x=void 0,c=void 0);var T=this._events&&this._events[i];if(T&&T.length&&this._listens(i,x,c)!==!1)return!0;if(f){for(var F in this._eventParents)if(this._eventParents[F].listens(i,o,c,f))return!0}return!1},_listens:function(i,o,c){if(!this._events)return!1;var f=this._events[i]||[];if(!o)return!!f.length;c===this&&(c=void 0);for(var x=0,T=f.length;x<T;x++)if(f[x].fn===o&&f[x].ctx===c)return x;return!1},once:function(i,o,c){if(typeof i=="object")for(var f in i)this._on(f,i[f],o,!0);else{i=S(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],o,c,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[h(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[h(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,r({layer:i.target,propagatedFrom:i.target},i),!0)}};Q.addEventListener=Q.on,Q.removeEventListener=Q.clearAllEventListeners=Q.off,Q.addOneTimeEventListener=Q.once,Q.fireEvent=Q.fire,Q.hasEventListeners=Q.listens;var it=mt.extend(Q);function V(i,o,c){this.x=c?Math.round(i):i,this.y=c?Math.round(o):o}var Ct=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(i){return this.clone()._add(_t(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(_t(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new V(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new V(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ct(this.x),this.y=Ct(this.y),this},distanceTo:function(i){i=_t(i);var o=i.x-this.x,c=i.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(i){return i=_t(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=_t(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function _t(i,o,c){return i instanceof V?i:D(i)?new V(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new V(i.x,i.y):new V(i,o,c)}function Pt(i,o){if(i)for(var c=o?[i,o]:i,f=0,x=c.length;f<x;f++)this.extend(c[f])}Pt.prototype={extend:function(i){var o,c;if(!i)return this;if(i instanceof V||typeof i[0]=="number"||"x"in i)o=c=_t(i);else if(i=kt(i),o=i.min,c=i.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(i){return _t((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return _t(this.min.x,this.max.y)},getTopRight:function(){return _t(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,c;return typeof i[0]=="number"||i instanceof V?i=_t(i):i=kt(i),i instanceof Pt?(o=i.min,c=i.max):o=c=i,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(i){i=kt(i);var o=this.min,c=this.max,f=i.min,x=i.max,T=x.x>=o.x&&f.x<=c.x,F=x.y>=o.y&&f.y<=c.y;return T&&F},overlaps:function(i){i=kt(i);var o=this.min,c=this.max,f=i.min,x=i.max,T=x.x>o.x&&f.x<c.x,F=x.y>o.y&&f.y<c.y;return T&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,c=this.max,f=Math.abs(o.x-c.x)*i,x=Math.abs(o.y-c.y)*i;return kt(_t(o.x-f,o.y-x),_t(c.x+f,c.y+x))},equals:function(i){return i?(i=kt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function kt(i,o){return!i||i instanceof Pt?i:new Pt(i,o)}function Qt(i,o){if(i)for(var c=o?[i,o]:i,f=0,x=c.length;f<x;f++)this.extend(c[f])}Qt.prototype={extend:function(i){var o=this._southWest,c=this._northEast,f,x;if(i instanceof gt)f=i,x=i;else if(i instanceof Qt){if(f=i._southWest,x=i._northEast,!f||!x)return this}else return i?this.extend(Mt(i)||at(i)):this;return!o&&!c?(this._southWest=new gt(f.lat,f.lng),this._northEast=new gt(x.lat,x.lng)):(o.lat=Math.min(f.lat,o.lat),o.lng=Math.min(f.lng,o.lng),c.lat=Math.max(x.lat,c.lat),c.lng=Math.max(x.lng,c.lng)),this},pad:function(i){var o=this._southWest,c=this._northEast,f=Math.abs(o.lat-c.lat)*i,x=Math.abs(o.lng-c.lng)*i;return new Qt(new gt(o.lat-f,o.lng-x),new gt(c.lat+f,c.lng+x))},getCenter:function(){return new gt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new gt(this.getNorth(),this.getWest())},getSouthEast:function(){return new gt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof gt||"lat"in i?i=Mt(i):i=at(i);var o=this._southWest,c=this._northEast,f,x;return i instanceof Qt?(f=i.getSouthWest(),x=i.getNorthEast()):f=x=i,f.lat>=o.lat&&x.lat<=c.lat&&f.lng>=o.lng&&x.lng<=c.lng},intersects:function(i){i=at(i);var o=this._southWest,c=this._northEast,f=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>=o.lat&&f.lat<=c.lat,F=x.lng>=o.lng&&f.lng<=c.lng;return T&&F},overlaps:function(i){i=at(i);var o=this._southWest,c=this._northEast,f=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>o.lat&&f.lat<c.lat,F=x.lng>o.lng&&f.lng<c.lng;return T&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=at(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function at(i,o){return i instanceof Qt?i:new Qt(i,o)}function gt(i,o,c){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,c!==void 0&&(this.alt=+c)}gt.prototype={equals:function(i,o){if(!i)return!1;i=Mt(i);var c=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return c<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return dt.distance(this,Mt(i))},wrap:function(){return dt.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,c=o/Math.cos(Math.PI/180*this.lat);return at([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new gt(this.lat,this.lng,this.alt)}};function Mt(i,o,c){return i instanceof gt?i:D(i)&&typeof i[0]!="object"?i.length===3?new gt(i[0],i[1],i[2]):i.length===2?new gt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new gt(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new gt(i,o,c)}var W={latLngToPoint:function(i,o){var c=this.projection.project(i),f=this.scale(o);return this.transformation._transform(c,f)},pointToLatLng:function(i,o){var c=this.scale(o),f=this.transformation.untransform(i,c);return this.projection.unproject(f)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(i),f=this.transformation.transform(o.min,c),x=this.transformation.transform(o.max,c);return new Pt(f,x)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,c=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,f=i.alt;return new gt(c,o,f)},wrapLatLngBounds:function(i){var o=i.getCenter(),c=this.wrapLatLng(o),f=o.lat-c.lat,x=o.lng-c.lng;if(f===0&&x===0)return i;var T=i.getSouthWest(),F=i.getNorthEast(),j=new gt(T.lat-f,T.lng-x),st=new gt(F.lat-f,F.lng-x);return new Qt(j,st)}},dt=r({},W,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var c=Math.PI/180,f=i.lat*c,x=o.lat*c,T=Math.sin((o.lat-i.lat)*c/2),F=Math.sin((o.lng-i.lng)*c/2),j=T*T+Math.cos(f)*Math.cos(x)*F*F,st=2*Math.atan2(Math.sqrt(j),Math.sqrt(1-j));return this.R*st}}),St=6378137,yt={R:St,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,c=this.MAX_LATITUDE,f=Math.max(Math.min(c,i.lat),-c),x=Math.sin(f*o);return new V(this.R*i.lng*o,this.R*Math.log((1+x)/(1-x))/2)},unproject:function(i){var o=180/Math.PI;return new gt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:function(){var i=St*Math.PI;return new Pt([-i,-i],[i,i])}()};function Kt(i,o,c,f){if(D(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=c,this._d=f}Kt.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new V((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function U(i,o,c,f){return new Kt(i,o,c,f)}var O=r({},dt,{code:"EPSG:3857",projection:yt,transformation:function(){var i=.5/(Math.PI*yt.R);return U(i,.5,-i,.5)}()}),E=r({},O,{code:"EPSG:900913"});function ft(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function rt(i,o){var c="",f,x,T,F,j,st;for(f=0,T=i.length;f<T;f++){for(j=i[f],x=0,F=j.length;x<F;x++)st=j[x],c+=(x?"L":"M")+st.x+" "+st.y;c+=o?Zt.svg?"z":"x":""}return c||"M0 0"}var J=document.documentElement.style,ut="ActiveXObject"in window,Et=ut&&!document.addEventListener,ct="msLaunchUri"in navigator&&!("documentMode"in document),w=xn("webkit"),M=xn("android"),B=xn("android 2")||xn("android 3"),Y=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),nt=M&&xn("Google")&&Y<537&&!("AudioNode"in window),K=!!window.opera,Rt=!ct&&xn("chrome"),bt=xn("gecko")&&!w&&!K&&!ut,Gt=!Rt&&xn("safari"),Wt=xn("phantom"),Tt="OTransition"in J,Dt=navigator.platform.indexOf("Win")===0,Yt=ut&&"transition"in J,$t="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!B,Lt="MozPerspective"in J,ie=!window.L_DISABLE_3D&&(Yt||$t||Lt)&&!Tt&&!Wt,te=typeof orientation<"u"||xn("mobile"),Te=te&&w,X=te&&$t,Ut=!window.PointerEvent&&window.MSPointerEvent,ht=!!(window.PointerEvent||Ut),xt="ontouchstart"in window||!!window.TouchEvent,Ft=!window.L_NO_TOUCH&&(xt||ht),Nt=te&&K,oe=te&&bt,Oe=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,je=function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",m,o),window.removeEventListener("testPassiveEventSupport",m,o)}catch{}return i}(),Me=function(){return!!document.createElement("canvas").getContext}(),ln=!!(document.createElementNS&&ft("svg").createSVGRect),kn=!!ln&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Lo=!ln&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),Do=navigator.platform.indexOf("Mac")===0,di=navigator.platform.indexOf("Linux")===0;function xn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Zt={ie:ut,ielt9:Et,edge:ct,webkit:w,android:M,android23:B,androidStock:nt,opera:K,chrome:Rt,gecko:bt,safari:Gt,phantom:Wt,opera12:Tt,win:Dt,ie3d:Yt,webkit3d:$t,gecko3d:Lt,any3d:ie,mobile:te,mobileWebkit:Te,mobileWebkit3d:X,msPointer:Ut,pointer:ht,touch:Ft,touchNative:xt,mobileOpera:Nt,mobileGecko:oe,retina:Oe,passiveEvents:je,canvas:Me,svg:ln,vml:Lo,inlineSvg:kn,mac:Do,linux:di},Rr=Zt.msPointer?"MSPointerDown":"pointerdown",us=Zt.msPointer?"MSPointerMove":"pointermove",Cr=Zt.msPointer?"MSPointerUp":"pointerup",hs=Zt.msPointer?"MSPointerCancel":"pointercancel",ks={touchstart:Rr,touchmove:us,touchend:Cr,touchcancel:hs},Lr={touchstart:ot,touchmove:tt,touchend:tt,touchcancel:tt},Fi={},Io=!1;function il(i,o,c){return o==="touchstart"&&Z(),Lr[o]?(c=Lr[o].bind(this,c),i.addEventListener(ks[o],c,!1),c):(console.warn("wrong event specified:",o),m)}function sl(i,o,c){if(!ks[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(ks[o],c,!1)}function rl(i){Fi[i.pointerId]=i}function ol(i){Fi[i.pointerId]&&(Fi[i.pointerId]=i)}function P(i){delete Fi[i.pointerId]}function Z(){Io||(document.addEventListener(Rr,rl,!0),document.addEventListener(us,ol,!0),document.addEventListener(Cr,P,!0),document.addEventListener(hs,P,!0),Io=!0)}function tt(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in Fi)o.touches.push(Fi[c]);o.changedTouches=[o],i(o)}}function ot(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&en(o),tt(i,o)}function q(i){var o={},c,f;for(f in i)c=i[f],o[f]=c&&c.bind?c.bind(i):c;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var At=200;function Ot(i,o){i.addEventListener("dblclick",o);var c=0,f;function x(T){if(T.detail!==1){f=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var F=dh(T);if(!(F.some(function(st){return st instanceof HTMLLabelElement&&st.attributes.for})&&!F.some(function(st){return st instanceof HTMLInputElement||st instanceof HTMLSelectElement}))){var j=Date.now();j-c<=At?(f++,f===2&&o(q(T))):f=1,c=j}}}return i.addEventListener("click",x),{dblclick:o,simDblclick:x}}function Ht(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var Vt=tn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Jt=tn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ee=Jt==="webkitTransition"||Jt==="OTransition"?Jt+"End":"transitionend";function jt(i){return typeof i=="string"?document.getElementById(i):i}function he(i,o){var c=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(i,null);c=f?f[o]:null}return c==="auto"?null:c}function Xt(i,o,c){var f=document.createElement(i);return f.className=o||"",c&&c.appendChild(f),f}function se(i){var o=i.parentNode;o&&o.removeChild(i)}function Re(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function fe(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function qt(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function Be(i,o){if(i.classList!==void 0)return i.classList.contains(o);var c=Ke(i);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function Bt(i,o){if(i.classList!==void 0)for(var c=S(o),f=0,x=c.length;f<x;f++)i.classList.add(c[f]);else if(!Be(i,o)){var T=Ke(i);Qn(i,(T?T+" ":"")+o)}}function ve(i,o){i.classList!==void 0?i.classList.remove(o):Qn(i,v((" "+Ke(i)+" ").replace(" "+o+" "," ")))}function Qn(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function Ke(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function $e(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&Le(i,o)}function Le(i,o){var c=!1,f="DXImageTransform.Microsoft.Alpha";try{c=i.filters.item(f)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):i.style.filter+=" progid:"+f+"(opacity="+o+")"}function tn(i){for(var o=document.documentElement.style,c=0;c<i.length;c++)if(i[c]in o)return i[c];return!1}function He(i,o,c){var f=o||new V(0,0);i.style[Vt]=(Zt.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(c?" scale("+c+")":"")}function _e(i,o){i._leaflet_pos=o,Zt.any3d?He(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function Fe(i){return i._leaflet_pos||new V(0,0)}var pi,Tn,al;if("onselectstart"in document)pi=function(){ae(window,"selectstart",en)},Tn=function(){De(window,"selectstart",en)};else{var Dr=tn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);pi=function(){if(Dr){var i=document.documentElement.style;al=i[Dr],i[Dr]="none"}},Tn=function(){Dr&&(document.documentElement.style[Dr]=al,al=void 0)}}function ll(){ae(window,"dragstart",en)}function cl(){De(window,"dragstart",en)}var Uo,ul;function hl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Oo(),Uo=i,ul=i.style.outlineStyle,i.style.outlineStyle="none",ae(window,"keydown",Oo))}function Oo(){Uo&&(Uo.style.outlineStyle=ul,Uo=void 0,ul=void 0,De(window,"keydown",Oo))}function hh(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function fl(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var d_={__proto__:null,TRANSFORM:Vt,TRANSITION:Jt,TRANSITION_END:ee,get:jt,getStyle:he,create:Xt,remove:se,empty:Re,toFront:fe,toBack:qt,hasClass:Be,addClass:Bt,removeClass:ve,setClass:Qn,getClass:Ke,setOpacity:$e,testProp:tn,setTransform:He,setPosition:_e,getPosition:Fe,get disableTextSelection(){return pi},get enableTextSelection(){return Tn},disableImageDrag:ll,enableImageDrag:cl,preventOutline:hl,restoreOutline:Oo,getSizedParentNode:hh,getScale:fl};function ae(i,o,c,f){if(o&&typeof o=="object")for(var x in o)pl(i,x,o[x],c);else{o=S(o);for(var T=0,F=o.length;T<F;T++)pl(i,o[T],c,f)}return this}var ti="_leaflet_events";function De(i,o,c,f){if(arguments.length===1)fh(i),delete i[ti];else if(o&&typeof o=="object")for(var x in o)ml(i,x,o[x],c);else if(o=S(o),arguments.length===2)fh(i,function(j){return A(o,j)!==-1});else for(var T=0,F=o.length;T<F;T++)ml(i,o[T],c,f);return this}function fh(i,o){for(var c in i[ti]){var f=c.split(/\d/)[0];(!o||o(f))&&ml(i,f,null,null,c)}}var dl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function pl(i,o,c,f){var x=o+h(c)+(f?"_"+h(f):"");if(i[ti]&&i[ti][x])return this;var T=function(j){return c.call(f||i,j||window.event)},F=T;!Zt.touchNative&&Zt.pointer&&o.indexOf("touch")===0?T=il(i,o,T):Zt.touch&&o==="dblclick"?T=Ot(i,T):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(dl[o]||o,T,Zt.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(T=function(j){j=j||window.event,gl(i,j)&&F(j)},i.addEventListener(dl[o],T,!1)):i.addEventListener(o,F,!1):i.attachEvent("on"+o,T),i[ti]=i[ti]||{},i[ti][x]=T}function ml(i,o,c,f,x){x=x||o+h(c)+(f?"_"+h(f):"");var T=i[ti]&&i[ti][x];if(!T)return this;!Zt.touchNative&&Zt.pointer&&o.indexOf("touch")===0?sl(i,o,T):Zt.touch&&o==="dblclick"?Ht(i,T):"removeEventListener"in i?i.removeEventListener(dl[o]||o,T,!1):i.detachEvent("on"+o,T),i[ti][x]=null}function fs(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function _l(i){return pl(i,"wheel",fs),this}function Ir(i){return ae(i,"mousedown touchstart dblclick contextmenu",fs),i._leaflet_disable_click=!0,this}function en(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function ds(i){return en(i),fs(i),this}function dh(i){if(i.composedPath)return i.composedPath();for(var o=[],c=i.target;c;)o.push(c),c=c.parentNode;return o}function ph(i,o){if(!o)return new V(i.clientX,i.clientY);var c=fl(o),f=c.boundingClientRect;return new V((i.clientX-f.left)/c.x-o.clientLeft,(i.clientY-f.top)/c.y-o.clientTop)}var p_=Zt.linux&&Zt.chrome?window.devicePixelRatio:Zt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function mh(i){return Zt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/p_:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function gl(i,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==i;)c=c.parentNode}catch{return!1}return c!==i}var m_={__proto__:null,on:ae,off:De,stopPropagation:fs,disableScrollPropagation:_l,disableClickPropagation:Ir,preventDefault:en,stop:ds,getPropagationPath:dh,getMousePosition:ph,getWheelDelta:mh,isExternalTarget:gl,addListener:ae,removeListener:De},_h=it.extend({run:function(i,o,c,f){this.stop(),this._el=i,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=Fe(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=z(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var c=this._startPos.add(this._offset.multiplyBy(i));o&&c._round(),_e(this._el,c),this.fire("step")},_complete:function(){lt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ge=it.extend({options:{crs:O,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=b(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(Mt(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Jt&&Zt.any3d&&!Zt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ae(this._proxy,ee,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter(Mt(i),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=r({animate:c.animate},c.zoom),c.pan=r({animate:c.animate,duration:c.duration},c.pan));var f=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,c.zoom):this._tryAnimatedPan(i,c.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(Zt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(Zt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,c){var f=this.getZoomScale(o),x=this.getSize().divideBy(2),T=i instanceof V?i:this.latLngToContainerPoint(i),F=T.subtract(x).multiplyBy(1-1/f),j=this.containerPointToLatLng(x.add(F));return this.setView(j,o,{zoom:c})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():at(i);var c=_t(o.paddingTopLeft||o.padding||[0,0]),f=_t(o.paddingBottomRight||o.padding||[0,0]),x=this.getBoundsZoom(i,!1,c.add(f));if(x=typeof o.maxZoom=="number"?Math.min(o.maxZoom,x):x,x===1/0)return{center:i.getCenter(),zoom:x};var T=f.subtract(c).divideBy(2),F=this.project(i.getSouthWest(),x),j=this.project(i.getNorthEast(),x),st=this.unproject(F.add(j).divideBy(2).add(T),x);return{center:st,zoom:x}},fitBounds:function(i,o){if(i=at(i),!i.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(i,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=_t(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new _h,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Bt(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,c){if(c=c||{},c.animate===!1||!Zt.any3d)return this.setView(i,o,c);this._stop();var f=this.project(this.getCenter()),x=this.project(i),T=this.getSize(),F=this._zoom;i=Mt(i),o=o===void 0?F:o;var j=Math.max(T.x,T.y),st=j*this.getZoomScale(F,o),wt=x.distanceTo(f)||1,zt=1.42,ne=zt*zt;function de(Ve){var qo=Ve?-1:1,ig=Ve?st:j,sg=st*st-j*j+qo*ne*ne*wt*wt,rg=2*ig*ne*wt,Pl=sg/rg,Kh=Math.sqrt(Pl*Pl+1)-Pl,og=Kh<1e-9?-18:Math.log(Kh);return og}function cn(Ve){return(Math.exp(Ve)-Math.exp(-Ve))/2}function Je(Ve){return(Math.exp(Ve)+Math.exp(-Ve))/2}function Dn(Ve){return cn(Ve)/Je(Ve)}var yn=de(0);function Zs(Ve){return j*(Je(yn)/Je(yn+zt*Ve))}function Q_(Ve){return j*(Je(yn)*Dn(yn+zt*Ve)-cn(yn))/ne}function tg(Ve){return 1-Math.pow(1-Ve,1.5)}var eg=Date.now(),Yh=(de(1)-yn)/zt,ng=c.duration?1e3*c.duration:1e3*Yh*.8;function jh(){var Ve=(Date.now()-eg)/ng,qo=tg(Ve)*Yh;Ve<=1?(this._flyToFrame=z(jh,this),this._move(this.unproject(f.add(x.subtract(f).multiplyBy(Q_(qo)/wt)),F),this.getScaleZoom(j/Zs(qo),F),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),jh.call(this),this},flyToBounds:function(i,o){var c=this._getBoundsCenterZoom(i,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(i){return i=at(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var c=this.getCenter(),f=this._limitCenter(c,this._zoom,at(i));return c.equals(f)||this.panTo(f,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var c=_t(o.paddingTopLeft||o.padding||[0,0]),f=_t(o.paddingBottomRight||o.padding||[0,0]),x=this.project(this.getCenter()),T=this.project(i),F=this.getPixelBounds(),j=kt([F.min.add(c),F.max.subtract(f)]),st=j.getSize();if(!j.contains(T)){this._enforcingBounds=!0;var wt=T.subtract(j.getCenter()),zt=j.extend(T).getSize().subtract(st);x.x+=wt.x<0?-zt.x:zt.x,x.y+=wt.y<0?-zt.y:zt.y,this.panTo(this.unproject(x),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=r({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),f=o.divideBy(2).round(),x=c.divideBy(2).round(),T=f.subtract(x);return!T.x&&!T.y?this:(i.animate&&i.pan?this.panBy(T):(i.pan&&this._rawPanBy(T),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=r({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,i):navigator.geolocation.getCurrentPosition(o,c,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,c=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,c=i.coords.longitude,f=new gt(o,c),x=f.toBounds(i.coords.accuracy*2),T=this._locateOptions;if(T.setView){var F=this.getBoundsZoom(x);this.setView(f,T.maxZoom?Math.min(F,T.maxZoom):F)}var j={latlng:f,bounds:x,timestamp:i.timestamp};for(var st in i.coords)typeof i.coords[st]=="number"&&(j[st]=i.coords[st]);this.fire("locationfound",j)}},addHandler:function(i,o){if(!o)return this;var c=this[i]=new o(this);return this._handlers.push(c),this.options[i]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),se(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(lt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)se(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var c="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),f=Xt("div",c,o||this._mapPane);return i&&(this._panes[i]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),c=this.unproject(i.getTopRight());return new Qt(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,c){i=at(i),c=_t(c||[0,0]);var f=this.getZoom()||0,x=this.getMinZoom(),T=this.getMaxZoom(),F=i.getNorthWest(),j=i.getSouthEast(),st=this.getSize().subtract(c),wt=kt(this.project(j,f),this.project(F,f)).getSize(),zt=Zt.any3d?this.options.zoomSnap:1,ne=st.x/wt.x,de=st.y/wt.y,cn=o?Math.max(ne,de):Math.min(ne,de);return f=this.getScaleZoom(cn,f),zt&&(f=Math.round(f/(zt/100))*(zt/100),f=o?Math.ceil(f/zt)*zt:Math.floor(f/zt)*zt),Math.max(x,Math.min(T,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var c=this._getTopLeftPoint(i,o);return new Pt(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(i)/c.scale(o)},getScaleZoom:function(i,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var f=c.zoom(i*c.scale(o));return isNaN(f)?1/0:f},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(Mt(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(_t(i),o)},layerPointToLatLng:function(i){var o=_t(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project(Mt(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(Mt(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(at(i))},distance:function(i,o){return this.options.crs.distance(Mt(i),Mt(o))},containerPointToLayerPoint:function(i){return _t(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return _t(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(_t(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Mt(i)))},mouseEventToContainerPoint:function(i){return ph(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=jt(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ae(o,"scroll",this._onScroll,this),this._containerId=h(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Zt.any3d,Bt(i,"leaflet-container"+(Zt.touch?" leaflet-touch":"")+(Zt.retina?" leaflet-retina":"")+(Zt.ielt9?" leaflet-oldie":"")+(Zt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=he(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),_e(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Bt(i.markerPane,"leaflet-zoom-hide"),Bt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,c){_e(this._mapPane,new V(0,0));var f=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var x=this._zoom!==o;this._moveStart(x,c)._move(i,o)._moveEnd(x),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,c,f){o===void 0&&(o=this._zoom);var x=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),f?c&&c.pinch&&this.fire("zoom",c):((x||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return lt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){_e(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[h(this._container)]=this;var o=i?De:ae;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Zt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){lt(this._resizeRequest),this._resizeRequest=z(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var c=[],f,x=o==="mouseout"||o==="mouseover",T=i.target||i.srcElement,F=!1;T;){if(f=this._targets[h(T)],f&&(o==="click"||o==="preclick")&&this._draggableMoved(f)){F=!0;break}if(f&&f.listens(o,!0)&&(x&&!gl(T,i)||(c.push(f),x))||T===this._container)break;T=T.parentNode}return!c.length&&!F&&!x&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var c=i.type;c==="mousedown"&&hl(o),this._fireDOMEvent(i,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,c){if(i.type==="click"){var f=r({},i);f.type="preclick",this._fireDOMEvent(f,f.type,c)}var x=this._findEventTargets(i,o);if(c){for(var T=[],F=0;F<c.length;F++)c[F].listens(o,!0)&&T.push(c[F]);x=T.concat(x)}if(x.length){o==="contextmenu"&&en(i);var j=x[0],st={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var wt=j.getLatLng&&(!j._radius||j._radius<=10);st.containerPoint=wt?this.latLngToContainerPoint(j.getLatLng()):this.mouseEventToContainerPoint(i),st.layerPoint=this.containerPointToLayerPoint(st.containerPoint),st.latlng=wt?j.getLatLng():this.layerPointToLatLng(st.layerPoint)}for(F=0;F<x.length;F++)if(x[F].fire(o,st,!0),st.originalEvent._stopped||x[F].options.bubblingMouseEvents===!1&&A(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return Fe(this._mapPane)||new V(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var c=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var c=this.getSize()._divideBy(2);return this.project(i,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,c){var f=this._getNewPixelOrigin(c,o);return this.project(i,o)._subtract(f)},_latLngBoundsToNewLayerBounds:function(i,o,c){var f=this._getNewPixelOrigin(c,o);return kt([this.project(i.getSouthWest(),o)._subtract(f),this.project(i.getNorthWest(),o)._subtract(f),this.project(i.getSouthEast(),o)._subtract(f),this.project(i.getNorthEast(),o)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,c){if(!c)return i;var f=this.project(i,o),x=this.getSize().divideBy(2),T=new Pt(f.subtract(x),f.add(x)),F=this._getBoundsOffset(T,c,o);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?i:this.unproject(f.add(F),o)},_limitOffset:function(i,o){if(!o)return i;var c=this.getPixelBounds(),f=new Pt(c.min.add(i),c.max.add(i));return i.add(this._getBoundsOffset(f,o))},_getBoundsOffset:function(i,o,c){var f=kt(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),x=f.min.subtract(i.min),T=f.max.subtract(i.max),F=this._rebound(x.x,-T.x),j=this._rebound(x.y,-T.y);return new V(F,j)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),c=this.getMaxZoom(),f=Zt.any3d?this.options.zoomSnap:1;return f&&(i=Math.round(i/f)*f),Math.max(o,Math.min(c,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ve(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var c=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var i=this._proxy=Xt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var c=Vt,f=this._proxy.style[c];He(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),f===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){se(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();He(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(o),x=this._getCenterOffset(i)._divideBy(1-1/f);return c.animate!==!0&&!this.getSize().contains(x)?!1:(z(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,c,f){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,Bt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ve(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function __(i,o){return new ge(i,o)}var Hn=mt.extend({options:{position:"topright"},initialize:function(i){b(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),c=this.getPosition(),f=i._controlCorners[c];return Bt(o,"leaflet-control"),c.indexOf("bottom")!==-1?f.insertBefore(o,f.firstChild):f.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(se(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Ur=function(i){return new Hn(i)};ge.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",c=this._controlContainer=Xt("div",o+"control-container",this._container);function f(x,T){var F=o+x+" "+o+T;i[x+T]=Xt("div",F,c)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)se(this._controlCorners[i]);se(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var gh=Hn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,c,f){return c<f?-1:f<c?1:0}},initialize:function(i,o,c){b(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in i)this._addLayer(i[f],f);for(f in o)this._addLayer(o[f],f,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Hn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(h(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Bt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Bt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):ve(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ve(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=Xt("div",i),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Ir(o),_l(o);var f=this._section=Xt("section",i+"-list");c&&(this._map.on("click",this.collapse,this),ae(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var x=this._layersLink=Xt("a",i+"-toggle",o);x.href="#",x.title="Layers",x.setAttribute("role","button"),ae(x,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){en(T),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Xt("div",i+"-base",f),this._separator=Xt("div",i+"-separator",f),this._overlaysList=Xt("div",i+"-overlays",f),o.appendChild(f)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&h(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,c){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(f,x){return this.options.sortFunction(f.layer,x.layer,f.name,x.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Re(this._baseLayersList),Re(this._overlaysList),this._layerControlInputs=[];var i,o,c,f,x=0;for(c=0;c<this._layers.length;c++)f=this._layers[c],this._addItem(f),o=o||f.overlay,i=i||!f.overlay,x+=f.overlay?0:1;return this.options.hideSingleBase&&(i=i&&x>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(h(i.target)),c=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(i,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=c,f.firstChild},_addItem:function(i){var o=document.createElement("label"),c=this._map.hasLayer(i.layer),f;i.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=c):f=this._createRadioElement("leaflet-base-layers_"+h(this),c),this._layerControlInputs.push(f),f.layerId=h(i.layer),ae(f,"click",this._onInputClick,this);var x=document.createElement("span");x.innerHTML=" "+i.name;var T=document.createElement("span");o.appendChild(T),T.appendChild(f),T.appendChild(x);var F=i.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,c,f=[],x=[];this._handlingClick=!0;for(var T=i.length-1;T>=0;T--)o=i[T],c=this._getLayer(o.layerId).layer,o.checked?f.push(c):o.checked||x.push(c);for(T=0;T<x.length;T++)this._map.hasLayer(x[T])&&this._map.removeLayer(x[T]);for(T=0;T<f.length;T++)this._map.hasLayer(f[T])||this._map.addLayer(f[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,c,f=this._map.getZoom(),x=i.length-1;x>=0;x--)o=i[x],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&f<c.options.minZoom||c.options.maxZoom!==void 0&&f>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ae(i,"click",en),this.expand();var o=this;setTimeout(function(){De(i,"click",en),o._preventClick=!1})}}),g_=function(i,o,c){return new gh(i,o,c)},vl=Hn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",c=Xt("div",o+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,c,f,x){var T=Xt("a",c,f);return T.innerHTML=i,T.href="#",T.title=o,T.setAttribute("role","button"),T.setAttribute("aria-label",o),Ir(T),ae(T,"click",ds),ae(T,"click",x,this),ae(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";ve(this._zoomInButton,o),ve(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Bt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Bt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ge.mergeOptions({zoomControl:!0}),ge.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new vl,this.addControl(this.zoomControl))});var v_=function(i){return new vl(i)},vh=Hn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",c=Xt("div",o),f=this.options;return this._addScales(f,o+"-line",c),i.on(f.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),c},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,c){i.metric&&(this._mScale=Xt("div",o,c)),i.imperial&&(this._iScale=Xt("div",o,c))},_update:function(){var i=this._map,o=i.getSize().y/2,c=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/i)},_updateImperial:function(i){var o=i*3.2808399,c,f,x;o>5280?(c=o/5280,f=this._getRoundNum(c),this._updateScale(this._iScale,f+" mi",f/c)):(x=this._getRoundNum(o),this._updateScale(this._iScale,x+" ft",x/o))},_updateScale:function(i,o,c){i.style.width=Math.round(this.options.maxWidth*c)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),c=i/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),x_=function(i){return new vh(i)},y_='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',xl=Hn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Zt.inlineSvg?y_+" ":"")+"Leaflet</a>"},initialize:function(i){b(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Xt("div","leaflet-control-attribution"),Ir(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),i.length&&c.push(i.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});ge.mergeOptions({attributionControl:!0}),ge.addInitHook(function(){this.options.attributionControl&&new xl().addTo(this)});var M_=function(i){return new xl(i)};Hn.Layers=gh,Hn.Zoom=vl,Hn.Scale=vh,Hn.Attribution=xl,Ur.layers=g_,Ur.zoom=v_,Ur.scale=x_,Ur.attribution=M_;var ei=mt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ei.addTo=function(i,o){return i.addHandler(o,this),this};var S_={Events:Q},xh=Zt.touch?"touchstart mousedown":"mousedown",Bi=it.extend({options:{clickTolerance:3},initialize:function(i,o,c,f){b(this,f),this._element=i,this._dragStartTarget=o||i,this._preventOutline=c},enable:function(){this._enabled||(ae(this._dragStartTarget,xh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Bi._dragging===this&&this.finishDrag(!0),De(this._dragStartTarget,xh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Be(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Bi._dragging===this&&this.finishDrag();return}if(!(Bi._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Bi._dragging=this,this._preventOutline&&hl(this._element),ll(),pi(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,c=hh(this._element);this._startPoint=new V(o.clientX,o.clientY),this._startPos=Fe(this._element),this._parentScale=fl(c);var f=i.type==="mousedown";ae(document,f?"mousemove":"touchmove",this._onMove,this),ae(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,c=new V(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,en(i),this._moved||(this.fire("dragstart"),this._moved=!0,Bt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Bt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),_e(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){ve(document.body,"leaflet-dragging"),this._lastTarget&&(ve(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),De(document,"mousemove touchmove",this._onMove,this),De(document,"mouseup touchend touchcancel",this._onUp,this),cl(),Tn();var o=this._moved&&this._moving;this._moving=!1,Bi._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function yh(i,o,c){var f,x=[1,4,2,8],T,F,j,st,wt,zt,ne,de;for(T=0,zt=i.length;T<zt;T++)i[T]._code=ps(i[T],o);for(j=0;j<4;j++){for(ne=x[j],f=[],T=0,zt=i.length,F=zt-1;T<zt;F=T++)st=i[T],wt=i[F],st._code&ne?wt._code&ne||(de=No(wt,st,ne,o,c),de._code=ps(de,o),f.push(de)):(wt._code&ne&&(de=No(wt,st,ne,o,c),de._code=ps(de,o),f.push(de)),f.push(st));i=f}return i}function Mh(i,o){var c,f,x,T,F,j,st,wt,zt;if(!i||i.length===0)throw new Error("latlngs not passed");Ln(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var ne=Mt([0,0]),de=at(i),cn=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());cn<1700&&(ne=yl(i));var Je=i.length,Dn=[];for(c=0;c<Je;c++){var yn=Mt(i[c]);Dn.push(o.project(Mt([yn.lat-ne.lat,yn.lng-ne.lng])))}for(j=st=wt=0,c=0,f=Je-1;c<Je;f=c++)x=Dn[c],T=Dn[f],F=x.y*T.x-T.y*x.x,st+=(x.x+T.x)*F,wt+=(x.y+T.y)*F,j+=F*3;j===0?zt=Dn[0]:zt=[st/j,wt/j];var Zs=o.unproject(_t(zt));return Mt([Zs.lat+ne.lat,Zs.lng+ne.lng])}function yl(i){for(var o=0,c=0,f=0,x=0;x<i.length;x++){var T=Mt(i[x]);o+=T.lat,c+=T.lng,f++}return Mt([o/f,c/f])}var E_={__proto__:null,clipPolygon:yh,polygonCenter:Mh,centroid:yl};function Sh(i,o){if(!o||!i.length)return i.slice();var c=o*o;return i=w_(i,c),i=T_(i,c),i}function Eh(i,o,c){return Math.sqrt(Or(i,o,c,!0))}function b_(i,o,c){return Or(i,o,c)}function T_(i,o){var c=i.length,f=typeof Uint8Array<"u"?Uint8Array:Array,x=new f(c);x[0]=x[c-1]=1,Ml(i,x,o,0,c-1);var T,F=[];for(T=0;T<c;T++)x[T]&&F.push(i[T]);return F}function Ml(i,o,c,f,x){var T=0,F,j,st;for(j=f+1;j<=x-1;j++)st=Or(i[j],i[f],i[x],!0),st>T&&(F=j,T=st);T>c&&(o[F]=1,Ml(i,o,c,f,F),Ml(i,o,c,F,x))}function w_(i,o){for(var c=[i[0]],f=1,x=0,T=i.length;f<T;f++)A_(i[f],i[x])>o&&(c.push(i[f]),x=f);return x<T-1&&c.push(i[T-1]),c}var bh;function Th(i,o,c,f,x){var T=f?bh:ps(i,c),F=ps(o,c),j,st,wt;for(bh=F;;){if(!(T|F))return[i,o];if(T&F)return!1;j=T||F,st=No(i,o,j,c,x),wt=ps(st,c),j===T?(i=st,T=wt):(o=st,F=wt)}}function No(i,o,c,f,x){var T=o.x-i.x,F=o.y-i.y,j=f.min,st=f.max,wt,zt;return c&8?(wt=i.x+T*(st.y-i.y)/F,zt=st.y):c&4?(wt=i.x+T*(j.y-i.y)/F,zt=j.y):c&2?(wt=st.x,zt=i.y+F*(st.x-i.x)/T):c&1&&(wt=j.x,zt=i.y+F*(j.x-i.x)/T),new V(wt,zt,x)}function ps(i,o){var c=0;return i.x<o.min.x?c|=1:i.x>o.max.x&&(c|=2),i.y<o.min.y?c|=4:i.y>o.max.y&&(c|=8),c}function A_(i,o){var c=o.x-i.x,f=o.y-i.y;return c*c+f*f}function Or(i,o,c,f){var x=o.x,T=o.y,F=c.x-x,j=c.y-T,st=F*F+j*j,wt;return st>0&&(wt=((i.x-x)*F+(i.y-T)*j)/st,wt>1?(x=c.x,T=c.y):wt>0&&(x+=F*wt,T+=j*wt)),F=i.x-x,j=i.y-T,f?F*F+j*j:new V(x,T)}function Ln(i){return!D(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function wh(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Ln(i)}function Ah(i,o){var c,f,x,T,F,j,st,wt;if(!i||i.length===0)throw new Error("latlngs not passed");Ln(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var zt=Mt([0,0]),ne=at(i),de=ne.getNorthWest().distanceTo(ne.getSouthWest())*ne.getNorthEast().distanceTo(ne.getNorthWest());de<1700&&(zt=yl(i));var cn=i.length,Je=[];for(c=0;c<cn;c++){var Dn=Mt(i[c]);Je.push(o.project(Mt([Dn.lat-zt.lat,Dn.lng-zt.lng])))}for(c=0,f=0;c<cn-1;c++)f+=Je[c].distanceTo(Je[c+1])/2;if(f===0)wt=Je[0];else for(c=0,T=0;c<cn-1;c++)if(F=Je[c],j=Je[c+1],x=F.distanceTo(j),T+=x,T>f){st=(T-f)/x,wt=[j.x-st*(j.x-F.x),j.y-st*(j.y-F.y)];break}var yn=o.unproject(_t(wt));return Mt([yn.lat+zt.lat,yn.lng+zt.lng])}var P_={__proto__:null,simplify:Sh,pointToSegmentDistance:Eh,closestPointOnSegment:b_,clipSegment:Th,_getEdgeIntersection:No,_getBitCode:ps,_sqClosestPointOnSegment:Or,isFlat:Ln,_flat:wh,polylineCenter:Ah},Sl={project:function(i){return new V(i.lng,i.lat)},unproject:function(i){return new gt(i.y,i.x)},bounds:new Pt([-180,-90],[180,90])},El={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Pt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,c=this.R,f=i.lat*o,x=this.R_MINOR/c,T=Math.sqrt(1-x*x),F=T*Math.sin(f),j=Math.tan(Math.PI/4-f/2)/Math.pow((1-F)/(1+F),T/2);return f=-c*Math.log(Math.max(j,1e-10)),new V(i.lng*o*c,f)},unproject:function(i){for(var o=180/Math.PI,c=this.R,f=this.R_MINOR/c,x=Math.sqrt(1-f*f),T=Math.exp(-i.y/c),F=Math.PI/2-2*Math.atan(T),j=0,st=.1,wt;j<15&&Math.abs(st)>1e-7;j++)wt=x*Math.sin(F),wt=Math.pow((1-wt)/(1+wt),x/2),st=Math.PI/2-2*Math.atan(T*wt)-F,F+=st;return new gt(F*o,i.x*o/c)}},R_={__proto__:null,LonLat:Sl,Mercator:El,SphericalMercator:yt},C_=r({},dt,{code:"EPSG:3395",projection:El,transformation:function(){var i=.5/(Math.PI*El.R);return U(i,.5,-i,.5)}()}),Ph=r({},dt,{code:"EPSG:4326",projection:Sl,transformation:U(1/180,1,-1/180,.5)}),L_=r({},W,{projection:Sl,transformation:U(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var c=o.lng-i.lng,f=o.lat-i.lat;return Math.sqrt(c*c+f*f)},infinite:!0});W.Earth=dt,W.EPSG3395=C_,W.EPSG3857=O,W.EPSG900913=E,W.EPSG4326=Ph,W.Simple=L_;var Vn=it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[h(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[h(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ge.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=h(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=h(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return h(i)in this._layers},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},_addLayers:function(i){i=i?D(i)?i:[i]:[];for(var o=0,c=i.length;o<c;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[h(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=h(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,c=this._getZoomSpan();for(var f in this._zoomBoundLayers){var x=this._zoomBoundLayers[f].options;i=x.minZoom===void 0?i:Math.min(i,x.minZoom),o=x.maxZoom===void 0?o:Math.max(o,x.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Hs=Vn.extend({initialize:function(i,o){b(this,o),this._layers={};var c,f;if(i)for(c=0,f=i.length;c<f;c++)this.addLayer(i[c])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),c,f;for(c in this._layers)f=this._layers[c],f[i]&&f[i].apply(f,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return h(i)}}),D_=function(i,o){return new Hs(i,o)},mi=Hs.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Hs.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Hs.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new Qt;for(var o in this._layers){var c=this._layers[o];i.extend(c.getBounds?c.getBounds():c.getLatLng())}return i}}),I_=function(i,o){return new mi(i,o)},Vs=mt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){b(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var c=this._getIconUrl(i);if(!c){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(f,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(i,o){var c=this.options,f=c[o+"Size"];typeof f=="number"&&(f=[f,f]);var x=_t(f),T=_t(o==="shadow"&&c.shadowAnchor||c.iconAnchor||x&&x.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(c.className||""),T&&(i.style.marginLeft=-T.x+"px",i.style.marginTop=-T.y+"px"),x&&(i.style.width=x.x+"px",i.style.height=x.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return Zt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function U_(i){return new Vs(i)}var Nr=Vs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Nr.imagePath!="string"&&(Nr.imagePath=this._detectIconPath()),(this.options.imagePath||Nr.imagePath)+Vs.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(c,f,x){var T=f.exec(c);return T&&T[x]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Xt("div","leaflet-default-icon-path",document.body),o=he(i,"background-image")||he(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Rh=ei.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Bi(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Bt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ve(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,c=o._map,f=this._marker.options.autoPanSpeed,x=this._marker.options.autoPanPadding,T=Fe(o._icon),F=c.getPixelBounds(),j=c.getPixelOrigin(),st=kt(F.min._subtract(j).add(x),F.max._subtract(j).subtract(x));if(!st.contains(T)){var wt=_t((Math.max(st.max.x,T.x)-st.max.x)/(F.max.x-st.max.x)-(Math.min(st.min.x,T.x)-st.min.x)/(F.min.x-st.min.x),(Math.max(st.max.y,T.y)-st.max.y)/(F.max.y-st.max.y)-(Math.min(st.min.y,T.y)-st.min.y)/(F.min.y-st.min.y)).multiplyBy(f);c.panBy(wt,{animate:!1}),this._draggable._newPos._add(wt),this._draggable._startPos._add(wt),_e(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=z(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(lt(this._panRequest),this._panRequest=z(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,c=o._shadow,f=Fe(o._icon),x=o._map.layerPointToLatLng(f);c&&_e(c,f),o._latlng=x,i.latlng=x,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){lt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Fo=Vn.extend({options:{icon:new Nr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){b(this,o),this._latlng=Mt(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=Mt(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=i.icon.createIcon(this._icon),f=!1;c!==this._icon&&(this._icon&&this._removeIcon(),f=!0,i.title&&(c.title=i.title),c.tagName==="IMG"&&(c.alt=i.alt||"")),Bt(c,o),i.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ae(c,"focus",this._panOnFocus,this);var x=i.icon.createShadow(this._shadow),T=!1;x!==this._shadow&&(this._removeShadow(),T=!0),x&&(Bt(x,o),x.alt=""),this._shadow=x,i.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),x&&T&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&De(this._icon,"focus",this._panOnFocus,this),se(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&se(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&_e(this._icon,i),this._shadow&&_e(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Bt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Rh)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Rh(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&$e(this._icon,i),this._shadow&&$e(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,c=o.iconSize?_t(o.iconSize):_t(0,0),f=o.iconAnchor?_t(o.iconAnchor):_t(0,0);i.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:c.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function O_(i,o){return new Fo(i,o)}var zi=Vn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return b(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Bo=zi.extend({options:{fill:!0,radius:10},initialize:function(i,o){b(this,o),this._latlng=Mt(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=Mt(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return zi.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,c=this._clickTolerance(),f=[i+c,o+c];this._pxBounds=new Pt(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function N_(i,o){return new Bo(i,o)}var bl=Bo.extend({initialize:function(i,o,c){if(typeof o=="number"&&(o=r({},c,{radius:o})),b(this,o),this._latlng=Mt(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new Qt(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:zi.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,c=this._map,f=c.options.crs;if(f.distance===dt.distance){var x=Math.PI/180,T=this._mRadius/dt.R/x,F=c.project([o+T,i]),j=c.project([o-T,i]),st=F.add(j).divideBy(2),wt=c.unproject(st).lat,zt=Math.acos((Math.cos(T*x)-Math.sin(o*x)*Math.sin(wt*x))/(Math.cos(o*x)*Math.cos(wt*x)))/x;(isNaN(zt)||zt===0)&&(zt=T/Math.cos(Math.PI/180*o)),this._point=st.subtract(c.getPixelOrigin()),this._radius=isNaN(zt)?0:st.x-c.project([wt,i-zt]).x,this._radiusY=st.y-F.y}else{var ne=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ne).x}this._updateBounds()}});function F_(i,o,c){return new bl(i,o,c)}var _i=zi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){b(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,c=null,f=Or,x,T,F=0,j=this._parts.length;F<j;F++)for(var st=this._parts[F],wt=1,zt=st.length;wt<zt;wt++){x=st[wt-1],T=st[wt];var ne=f(i,x,T,!0);ne<o&&(o=ne,c=f(i,x,T))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ah(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=Mt(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new Qt,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Ln(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],c=Ln(i),f=0,x=i.length;f<x;f++)c?(o[f]=Mt(i[f]),this._bounds.extend(o[f])):o[f]=this._convertLatLngs(i[f]);return o},_project:function(){var i=new Pt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new V(i,i);this._rawPxBounds&&(this._pxBounds=new Pt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,c){var f=i[0]instanceof gt,x=i.length,T,F;if(f){for(F=[],T=0;T<x;T++)F[T]=this._map.latLngToLayerPoint(i[T]),c.extend(F[T]);o.push(F)}else for(T=0;T<x;T++)this._projectLatlngs(i[T],o,c)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,f,x,T,F,j,st;for(c=0,x=0,T=this._rings.length;c<T;c++)for(st=this._rings[c],f=0,F=st.length;f<F-1;f++)j=Th(st[f],st[f+1],i,f,!0),j&&(o[x]=o[x]||[],o[x].push(j[0]),(j[1]!==st[f+1]||f===F-2)&&(o[x].push(j[1]),x++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,c=0,f=i.length;c<f;c++)i[c]=Sh(i[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var c,f,x,T,F,j,st=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(c=0,T=this._parts.length;c<T;c++)for(j=this._parts[c],f=0,F=j.length,x=F-1;f<F;x=f++)if(!(!o&&f===0)&&Eh(i,j[x],j[f])<=st)return!0;return!1}});function B_(i,o){return new _i(i,o)}_i._flat=wh;var Gs=_i.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=_i.prototype._convertLatLngs.call(this,i),c=o.length;return c>=2&&o[0]instanceof gt&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(i){_i.prototype._setLatLngs.call(this,i),Ln(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Ln(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,c=new V(o,o);if(i=new Pt(i.min.subtract(c),i.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,x=this._rings.length,T;f<x;f++)T=yh(this._rings[f],i,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,c,f,x,T,F,j,st,wt;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(T=0,st=this._parts.length;T<st;T++)for(c=this._parts[T],F=0,wt=c.length,j=wt-1;F<wt;j=F++)f=c[F],x=c[j],f.y>i.y!=x.y>i.y&&i.x<(x.x-f.x)*(i.y-f.y)/(x.y-f.y)+f.x&&(o=!o);return o||_i.prototype._containsPoint.call(this,i,!0)}});function z_(i,o){return new Gs(i,o)}var gi=mi.extend({initialize:function(i,o){b(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=D(i)?i:i.features,c,f,x;if(o){for(c=0,f=o.length;c<f;c++)x=o[c],(x.geometries||x.geometry||x.features||x.coordinates)&&this.addData(x);return this}var T=this.options;if(T.filter&&!T.filter(i))return this;var F=zo(i,T);return F?(F.feature=Vo(i),F.defaultOptions=F.options,this.resetStyle(F),T.onEachFeature&&T.onEachFeature(i,F),this.addLayer(F)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=r({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function zo(i,o){var c=i.type==="Feature"?i.geometry:i,f=c?c.coordinates:null,x=[],T=o&&o.pointToLayer,F=o&&o.coordsToLatLng||Tl,j,st,wt,zt;if(!f&&!c)return null;switch(c.type){case"Point":return j=F(f),Ch(T,i,j,o);case"MultiPoint":for(wt=0,zt=f.length;wt<zt;wt++)j=F(f[wt]),x.push(Ch(T,i,j,o));return new mi(x);case"LineString":case"MultiLineString":return st=ko(f,c.type==="LineString"?0:1,F),new _i(st,o);case"Polygon":case"MultiPolygon":return st=ko(f,c.type==="Polygon"?1:2,F),new Gs(st,o);case"GeometryCollection":for(wt=0,zt=c.geometries.length;wt<zt;wt++){var ne=zo({geometry:c.geometries[wt],type:"Feature",properties:i.properties},o);ne&&x.push(ne)}return new mi(x);case"FeatureCollection":for(wt=0,zt=c.features.length;wt<zt;wt++){var de=zo(c.features[wt],o);de&&x.push(de)}return new mi(x);default:throw new Error("Invalid GeoJSON object.")}}function Ch(i,o,c,f){return i?i(o,c):new Fo(c,f&&f.markersInheritOptions&&f)}function Tl(i){return new gt(i[1],i[0],i[2])}function ko(i,o,c){for(var f=[],x=0,T=i.length,F;x<T;x++)F=o?ko(i[x],o-1,c):(c||Tl)(i[x]),f.push(F);return f}function wl(i,o){return i=Mt(i),i.alt!==void 0?[_(i.lng,o),_(i.lat,o),_(i.alt,o)]:[_(i.lng,o),_(i.lat,o)]}function Ho(i,o,c,f){for(var x=[],T=0,F=i.length;T<F;T++)x.push(o?Ho(i[T],Ln(i[T])?0:o-1,c,f):wl(i[T],f));return!o&&c&&x.length>0&&x.push(x[0].slice()),x}function Ws(i,o){return i.feature?r({},i.feature,{geometry:o}):Vo(o)}function Vo(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Al={toGeoJSON:function(i){return Ws(this,{type:"Point",coordinates:wl(this.getLatLng(),i)})}};Fo.include(Al),bl.include(Al),Bo.include(Al),_i.include({toGeoJSON:function(i){var o=!Ln(this._latlngs),c=Ho(this._latlngs,o?1:0,!1,i);return Ws(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),Gs.include({toGeoJSON:function(i){var o=!Ln(this._latlngs),c=o&&!Ln(this._latlngs[0]),f=Ho(this._latlngs,c?2:o?1:0,!0,i);return o||(f=[f]),Ws(this,{type:(c?"Multi":"")+"Polygon",coordinates:f})}}),Hs.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(i).geometry.coordinates)}),Ws(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var c=o==="GeometryCollection",f=[];return this.eachLayer(function(x){if(x.toGeoJSON){var T=x.toGeoJSON(i);if(c)f.push(T.geometry);else{var F=Vo(T);F.type==="FeatureCollection"?f.push.apply(f,F.features):f.push(F)}}}),c?Ws(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function Lh(i,o){return new gi(i,o)}var k_=Lh,Go=Vn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,c){this._url=i,this._bounds=at(o),b(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Bt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){se(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&qt(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=at(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:Xt("img");if(Bt(o,"leaflet-image-layer"),this._zoomAnimated&&Bt(o,"leaflet-zoom-animated"),this.options.className&&Bt(o,this.options.className),o.onselectstart=m,o.onmousemove=m,o.onload=l(this.fire,this,"load"),o.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;He(this._image,c,o)},_reset:function(){var i=this._image,o=new Pt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();_e(i,o.min),i.style.width=c.x+"px",i.style.height=c.y+"px"},_updateOpacity:function(){$e(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),H_=function(i,o,c){return new Go(i,o,c)},Dh=Go.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:Xt("video");if(Bt(o,"leaflet-image-layer"),this._zoomAnimated&&Bt(o,"leaflet-zoom-animated"),this.options.className&&Bt(o,this.options.className),o.onselectstart=m,o.onmousemove=m,o.onloadeddata=l(this.fire,this,"load"),i){for(var c=o.getElementsByTagName("source"),f=[],x=0;x<c.length;x++)f.push(c[x].src);this._url=c.length>0?f:[o.src];return}D(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var F=Xt("source");F.src=this._url[T],o.appendChild(F)}}});function V_(i,o,c){return new Dh(i,o,c)}var Ih=Go.extend({_initImage:function(){var i=this._image=this._url;Bt(i,"leaflet-image-layer"),this._zoomAnimated&&Bt(i,"leaflet-zoom-animated"),this.options.className&&Bt(i,this.options.className),i.onselectstart=m,i.onmousemove=m}});function G_(i,o,c){return new Ih(i,o,c)}var ni=Vn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof gt||D(i))?(this._latlng=Mt(i),b(this,o)):(b(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&$e(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&$e(this._container,1),this.bringToFront(),this.options.interactive&&(Bt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?($e(this._container,0),this._removeTimeout=setTimeout(l(se,void 0,this._container),200)):se(this._container),this.options.interactive&&(ve(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=Mt(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&qt(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof mi){o=null;var c=this._source._layers;for(var f in c)if(c[f]._map){o=c[f];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=_t(this.options.offset),c=this._getAnchor();this._zoomAnimated?_e(this._container,i.add(c)):o=o.add(i).add(c);var f=this._containerBottom=-o.y,x=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=f+"px",this._container.style.left=x+"px"}},_getAnchor:function(){return[0,0]}});ge.include({_initOverlay:function(i,o,c,f){var x=o;return x instanceof i||(x=new i(f).setContent(o)),c&&x.setLatLng(c),x}}),Vn.include({_initOverlay:function(i,o,c,f){var x=c;return x instanceof i?(b(x,f),x._source=this):(x=o&&!f?o:new i(f,this),x.setContent(c)),x}});var Wo=ni.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,ni.prototype.openOn.call(this,i)},onAdd:function(i){ni.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof zi||this._source.on("preclick",fs))},onRemove:function(i){ni.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof zi||this._source.off("preclick",fs))},getEvents:function(){var i=ni.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=Xt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Xt("div",i+"-content-wrapper",o);if(this._contentNode=Xt("div",i+"-content",c),Ir(o),_l(this._contentNode),ae(o,"contextmenu",fs),this._tipContainer=Xt("div",i+"-tip-container",o),this._tip=Xt("div",i+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Xt("a",i+"-close-button",o);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',ae(f,"click",function(x){en(x),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var c=i.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var f=i.offsetHeight,x=this.options.maxHeight,T="leaflet-popup-scrolled";x&&f>x?(o.height=x+"px",Bt(i,T)):ve(i,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),c=this._getAnchor();_e(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(he(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,f=this._containerWidth,x=new V(this._containerLeft,-c-this._containerBottom);x._add(Fe(this._container));var T=i.layerPointToContainerPoint(x),F=_t(this.options.autoPanPadding),j=_t(this.options.autoPanPaddingTopLeft||F),st=_t(this.options.autoPanPaddingBottomRight||F),wt=i.getSize(),zt=0,ne=0;T.x+f+st.x>wt.x&&(zt=T.x+f-wt.x+st.x),T.x-zt-j.x<0&&(zt=T.x-j.x),T.y+c+st.y>wt.y&&(ne=T.y+c-wt.y+st.y),T.y-ne-j.y<0&&(ne=T.y-j.y),(zt||ne)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([zt,ne]))}},_getAnchor:function(){return _t(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),W_=function(i,o){return new Wo(i,o)};ge.mergeOptions({closePopupOnClick:!0}),ge.include({openPopup:function(i,o,c){return this._initOverlay(Wo,i,o,c).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Vn.include({bindPopup:function(i,o){return this._popup=this._initOverlay(Wo,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof mi||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){ds(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof zi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Xo=ni.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){ni.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){ni.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=ni.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Xt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,c,f=this._map,x=this._container,T=f.latLngToContainerPoint(f.getCenter()),F=f.layerPointToContainerPoint(i),j=this.options.direction,st=x.offsetWidth,wt=x.offsetHeight,zt=_t(this.options.offset),ne=this._getAnchor();j==="top"?(o=st/2,c=wt):j==="bottom"?(o=st/2,c=0):j==="center"?(o=st/2,c=wt/2):j==="right"?(o=0,c=wt/2):j==="left"?(o=st,c=wt/2):F.x<T.x?(j="right",o=0,c=wt/2):(j="left",o=st+(zt.x+ne.x)*2,c=wt/2),i=i.subtract(_t(o,c,!0)).add(zt).add(ne),ve(x,"leaflet-tooltip-right"),ve(x,"leaflet-tooltip-left"),ve(x,"leaflet-tooltip-top"),ve(x,"leaflet-tooltip-bottom"),Bt(x,"leaflet-tooltip-"+j),_e(x,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&$e(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return _t(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),X_=function(i,o){return new Xo(i,o)};ge.include({openTooltip:function(i,o,c){return this._initOverlay(Xo,i,o,c).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Vn.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Xo,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof mi||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(ae(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ae(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,c,f;this._tooltip.options.sticky&&i.originalEvent&&(c=this._map.mouseEventToContainerPoint(i.originalEvent),f=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(o)}});var Uh=Vs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Re(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var f=_t(c.bgPos);o.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Z_(i){return new Uh(i)}Vs.Default=Nr;var Fr=Vn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Zt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){b(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),se(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof V?i:new V(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,c=-i(-1/0,1/0),f=0,x=o.length,T;f<x;f++)T=o[f].style.zIndex,o[f]!==this._container&&T&&(c=i(c,+T));isFinite(c)&&(this.options.zIndex=c+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Zt.ielt9){$e(this._container,this.options.opacity);var i=+new Date,o=!1,c=!1;for(var f in this._tiles){var x=this._tiles[f];if(!(!x.current||!x.loaded)){var T=Math.min(1,(i-x.loaded)/200);$e(x.el,T),T<1?o=!0:(x.active?c=!0:this._onOpaqueTile(x),x.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(lt(this._fadeFrame),this._fadeFrame=z(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=Xt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===i?(this._levels[c].el.style.zIndex=o-Math.abs(i-c),this._onUpdateLevel(c)):(se(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var f=this._levels[i],x=this._map;return f||(f=this._levels[i]={},f.el=Xt("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=o,f.origin=x.project(x.unproject(x.getPixelOrigin()),i).round(),f.zoom=i,this._setZoomTransform(f,x.getCenter(),x.getZoom()),m(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var i,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var f=o.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)se(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,c,f){var x=Math.floor(i/2),T=Math.floor(o/2),F=c-1,j=new V(+x,+T);j.z=+F;var st=this._tileCoordsToKey(j),wt=this._tiles[st];return wt&&wt.active?(wt.retain=!0,!0):(wt&&wt.loaded&&(wt.retain=!0),F>f?this._retainParent(x,T,F,f):!1)},_retainChildren:function(i,o,c,f){for(var x=2*i;x<2*i+2;x++)for(var T=2*o;T<2*o+2;T++){var F=new V(x,T);F.z=c+1;var j=this._tileCoordsToKey(F),st=this._tiles[j];if(st&&st.active){st.retain=!0;continue}else st&&st.loaded&&(st.retain=!0);c+1<f&&this._retainChildren(x,T,c+1,f)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,c,f){var x=Math.round(o);this.options.maxZoom!==void 0&&x>this.options.maxZoom||this.options.minZoom!==void 0&&x<this.options.minZoom?x=void 0:x=this._clampZoom(x);var T=this.options.updateWhenZooming&&x!==this._tileZoom;(!f||T)&&(this._tileZoom=x,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),x!==void 0&&this._update(i),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],i,o)},_setZoomTransform:function(i,o,c){var f=this._map.getZoomScale(c,i.zoom),x=i.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(o,c)).round();Zt.any3d?He(i.el,x,f):_e(i.el,x)},_resetGrid:function(){var i=this._map,o=i.options.crs,c=this._tileSize=this.getTileSize(),f=this._tileZoom,x=this._map.getPixelWorldBounds(this._tileZoom);x&&(this._globalTileRange=this._pxBoundsToTileRange(x)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],f).x/c.x),Math.ceil(i.project([0,o.wrapLng[1]],f).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],f).y/c.x),Math.ceil(i.project([o.wrapLat[1],0],f).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),f=o.getZoomScale(c,this._tileZoom),x=o.project(i,this._tileZoom).floor(),T=o.getSize().divideBy(f*2);return new Pt(x.subtract(T),x.add(T))},_update:function(i){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(i),x=this._pxBoundsToTileRange(f),T=x.getCenter(),F=[],j=this.options.keepBuffer,st=new Pt(x.getBottomLeft().subtract([j,-j]),x.getTopRight().add([j,-j]));if(!(isFinite(x.min.x)&&isFinite(x.min.y)&&isFinite(x.max.x)&&isFinite(x.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var wt in this._tiles){var zt=this._tiles[wt].coords;(zt.z!==this._tileZoom||!st.contains(new V(zt.x,zt.y)))&&(this._tiles[wt].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(i,c);return}for(var ne=x.min.y;ne<=x.max.y;ne++)for(var de=x.min.x;de<=x.max.x;de++){var cn=new V(de,ne);if(cn.z=this._tileZoom,!!this._isValidTile(cn)){var Je=this._tiles[this._tileCoordsToKey(cn)];Je?Je.current=!0:F.push(cn)}}if(F.sort(function(yn,Zs){return yn.distanceTo(T)-Zs.distanceTo(T)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Dn=document.createDocumentFragment();for(de=0;de<F.length;de++)this._addTile(F[de],Dn);this._level.el.appendChild(Dn)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(i.x<c.min.x||i.x>c.max.x)||!o.wrapLat&&(i.y<c.min.y||i.y>c.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(i);return at(this.options.bounds).overlaps(f)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,c=this.getTileSize(),f=i.scaleBy(c),x=f.add(c),T=o.unproject(f,i.z),F=o.unproject(x,i.z);return[T,F]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),c=new Qt(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),c=new V(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(i){var o=this._tiles[i];o&&(se(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Bt(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=m,i.onmousemove=m,Zt.ielt9&&this.options.opacity<1&&$e(i,this.options.opacity)},_addTile:function(i,o){var c=this._getTilePos(i),f=this._tileCoordsToKey(i),x=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(x),this.createTile.length<2&&z(l(this._tileReady,this,i,null,x)),_e(x,c),this._tiles[f]={el:x,coords:i,current:!0},o.appendChild(x),this.fire("tileloadstart",{tile:x,coords:i})},_tileReady:function(i,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:i});var f=this._tileCoordsToKey(i);c=this._tiles[f],c&&(c.loaded=+new Date,this._map._fadeAnimated?($e(c.el,0),lt(this._fadeFrame),this._fadeFrame=z(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||(Bt(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Zt.ielt9||!this._map._fadeAnimated?z(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new V(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new Pt(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function q_(i){return new Fr(i)}var Xs=Fr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=b(this,o),o.detectRetina&&Zt.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var c=document.createElement("img");return ae(c,"load",l(this._tileOnLoad,this,o,c)),ae(c,"error",l(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(i),c},getTileUrl:function(i){var o={r:Zt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=c),o["-y"]=c}return I(this._url,r(o,this.options))},_tileOnLoad:function(i,o){Zt.ielt9?setTimeout(l(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,c){var f=this.options.errorTileUrl;f&&o.getAttribute("src")!==f&&(o.src=f),i(c,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,f=this.options.zoomOffset;return c&&(i=o-i),i+f},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=m,o.onerror=m,!o.complete)){o.src=k;var c=this._tiles[i].coords;se(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",k),Fr.prototype._removeTile.call(this,i)},_tileReady:function(i,o,c){if(!(!this._map||c&&c.getAttribute("src")===k))return Fr.prototype._tileReady.call(this,i,o,c)}});function Oh(i,o){return new Xs(i,o)}var Nh=Xs.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var c=r({},this.defaultWmsParams);for(var f in o)f in this.options||(c[f]=o[f]);o=b(this,o);var x=o.detectRetina&&Zt.retina?2:1,T=this.getTileSize();c.width=T.x*x,c.height=T.y*x,this.wmsParams=c},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Xs.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),c=this._crs,f=kt(c.project(o[0]),c.project(o[1])),x=f.min,T=f.max,F=(this._wmsVersion>=1.3&&this._crs===Ph?[x.y,x.x,T.y,T.x]:[x.x,x.y,T.x,T.y]).join(","),j=Xs.prototype.getTileUrl.call(this,i);return j+y(this.wmsParams,j,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(i,o){return r(this.wmsParams,i),o||this.redraw(),this}});function Y_(i,o){return new Nh(i,o)}Xs.WMS=Nh,Oh.wms=Y_;var vi=Vn.extend({options:{padding:.1},initialize:function(i){b(this,i),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Bt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var c=this._map.getZoomScale(o,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),x=this._map.project(this._center,o),T=f.multiplyBy(-c).add(x).subtract(this._map._getNewPixelOrigin(i,o));Zt.any3d?He(this._container,T,c):_e(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new Pt(c,c.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fh=vi.extend({options:{tolerance:0},getEvents:function(){var i=vi.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){vi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ae(i,"mousemove",this._onMouseMove,this),ae(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ae(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){lt(this._redrawRequest),delete this._ctx,se(this._container),De(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){vi.prototype._update.call(this);var i=this._bounds,o=this._container,c=i.getSize(),f=Zt.retina?2:1;_e(o,i.min),o.width=f*c.x,o.height=f*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",Zt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){vi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[h(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,c=o.next,f=o.prev;c?c.prev=f:this._drawLast=f,f?f.next=c:this._drawFirst=c,delete i._order,delete this._layers[h(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),c=[],f,x;for(x=0;x<o.length;x++){if(f=Number(o[x]),isNaN(f))return;c.push(f)}i.options._dashArray=c}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||z(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Pt,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)i=f.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var c,f,x,T,F=i._parts,j=F.length,st=this._ctx;if(j){for(st.beginPath(),c=0;c<j;c++){for(f=0,x=F[c].length;f<x;f++)T=F[c][f],st[f?"lineTo":"moveTo"](T.x,T.y);o&&st.closePath()}this._fillStroke(st,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,c=this._ctx,f=Math.max(Math.round(i._radius),1),x=(Math.max(Math.round(i._radiusY),1)||f)/f;x!==1&&(c.save(),c.scale(1,x)),c.beginPath(),c.arc(o.x,o.y/x,f,0,Math.PI*2,!1),x!==1&&c.restore(),this._fillStroke(c,i)}},_fillStroke:function(i,o){var c=o.options;c.fill&&(i.globalAlpha=c.fillOpacity,i.fillStyle=c.fillColor||c.color,i.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=c.opacity,i.lineWidth=c.weight,i.strokeStyle=c.color,i.lineCap=c.lineCap,i.lineJoin=c.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),c,f,x=this._drawFirst;x;x=x.next)c=x.layer,c.options.interactive&&c._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(c))&&(f=c);this._fireEvent(f?[f]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(ve(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var c,f,x=this._drawFirst;x;x=x.next)c=x.layer,c.options.interactive&&c._containsPoint(o)&&(f=c);f!==this._hoveredLayer&&(this._handleMouseOut(i),f&&(Bt(this._container,"leaflet-interactive"),this._fireEvent([f],i,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,c){this._map._fireDOMEvent(o,c||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var c=o.next,f=o.prev;if(c)c.prev=f;else return;f?f.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var c=o.next,f=o.prev;if(f)f.next=c;else return;c?c.prev=f:f&&(this._drawLast=f),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function Bh(i){return Zt.canvas?new Fh(i):null}var Br=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),j_={_initContainer:function(){this._container=Xt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(vi.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=Br("shape");Bt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=Br("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;se(o),i.removeInteractiveTarget(o),delete this._layers[h(i)]},_updateStyle:function(i){var o=i._stroke,c=i._fill,f=i.options,x=i._container;x.stroked=!!f.stroke,x.filled=!!f.fill,f.stroke?(o||(o=i._stroke=Br("stroke")),x.appendChild(o),o.weight=f.weight+"px",o.color=f.color,o.opacity=f.opacity,f.dashArray?o.dashStyle=D(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=f.lineCap.replace("butt","flat"),o.joinstyle=f.lineJoin):o&&(x.removeChild(o),i._stroke=null),f.fill?(c||(c=i._fill=Br("fill")),x.appendChild(c),c.color=f.fillColor||f.color,c.opacity=f.fillOpacity):c&&(x.removeChild(c),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),c=Math.round(i._radius),f=Math.round(i._radiusY||c);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+f+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){fe(i._container)},_bringToBack:function(i){qt(i._container)}},Zo=Zt.vml?Br:ft,zr=vi.extend({_initContainer:function(){this._container=Zo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Zo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){se(this._container),De(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){vi.prototype._update.call(this);var i=this._bounds,o=i.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),_e(c,i.min),c.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=Zo("path");i.options.className&&Bt(o,i.options.className),i.options.interactive&&Bt(o,"leaflet-interactive"),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){se(i._path),i.removeInteractiveTarget(i._path),delete this._layers[h(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,c=i.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,rt(i._parts,o))},_updateCircle:function(i){var o=i._point,c=Math.max(Math.round(i._radius),1),f=Math.max(Math.round(i._radiusY),1)||c,x="a"+c+","+f+" 0 1,0 ",T=i._empty()?"M0 0":"M"+(o.x-c)+","+o.y+x+c*2+",0 "+x+-c*2+",0 ";this._setPath(i,T)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){fe(i._path)},_bringToBack:function(i){qt(i._path)}});Zt.vml&&zr.include(j_);function zh(i){return Zt.svg||Zt.vml?new zr(i):null}ge.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&Bh(i)||zh(i)}});var kh=Gs.extend({initialize:function(i,o){Gs.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=at(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function K_(i,o){return new kh(i,o)}zr.create=Zo,zr.pointsToPath=rt,gi.geometryToLayer=zo,gi.coordsToLatLng=Tl,gi.coordsToLatLngs=ko,gi.latLngToCoords=wl,gi.latLngsToCoords=Ho,gi.getFeature=Ws,gi.asFeature=Vo,ge.mergeOptions({boxZoom:!0});var Hh=ei.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ae(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){De(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){se(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),pi(),ll(),this._startPoint=this._map.mouseEventToContainerPoint(i),ae(document,{contextmenu:ds,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Xt("div","leaflet-zoom-box",this._container),Bt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new Pt(this._point,this._startPoint),c=o.getSize();_e(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(se(this._box),ve(this._container,"leaflet-crosshair")),Tn(),cl(),De(document,{contextmenu:ds,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var o=new Qt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ge.addInitHook("addHandler","boxZoom",Hh),ge.mergeOptions({doubleClickZoom:!0});var Vh=ei.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,c=o.getZoom(),f=o.options.zoomDelta,x=i.originalEvent.shiftKey?c-f:c+f;o.options.doubleClickZoom==="center"?o.setZoom(x):o.setZoomAround(i.containerPoint,x)}});ge.addInitHook("addHandler","doubleClickZoom",Vh),ge.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Gh=ei.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Bi(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Bt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ve(this._map._container,"leaflet-grab"),ve(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=at(this._map.options.maxBounds);this._offsetLimit=kt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),c=this._initialWorldOffset,f=this._draggable._newPos.x,x=(f-o+c)%i+o-c,T=(f+o+c)%i-o-c,F=Math.abs(x+c)<Math.abs(T+c)?x:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(i){var o=this._map,c=o.options,f=!c.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),f)o.fire("moveend");else{this._prunePositions(+new Date);var x=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,F=c.easeLinearity,j=x.multiplyBy(F/T),st=j.distanceTo([0,0]),wt=Math.min(c.inertiaMaxSpeed,st),zt=j.multiplyBy(wt/st),ne=wt/(c.inertiaDeceleration*F),de=zt.multiplyBy(-ne/2).round();!de.x&&!de.y?o.fire("moveend"):(de=o._limitOffset(de,o.options.maxBounds),z(function(){o.panBy(de,{duration:ne,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});ge.addInitHook("addHandler","dragging",Gh),ge.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Wh=ei.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ae(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),De(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,c=i.scrollTop||o.scrollTop,f=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(f,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},c=this.keyCodes,f,x;for(f=0,x=c.left.length;f<x;f++)o[c.left[f]]=[-1*i,0];for(f=0,x=c.right.length;f<x;f++)o[c.right[f]]=[i,0];for(f=0,x=c.down.length;f<x;f++)o[c.down[f]]=[0,i];for(f=0,x=c.up.length;f<x;f++)o[c.up[f]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},c=this.keyCodes,f,x;for(f=0,x=c.zoomIn.length;f<x;f++)o[c.zoomIn[f]]=i;for(f=0,x=c.zoomOut.length;f<x;f++)o[c.zoomOut[f]]=-i},_addHooks:function(){ae(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){De(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,c=this._map,f;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(f=this._panKeys[o],i.shiftKey&&(f=_t(f).multiplyBy(3)),c.options.maxBounds&&(f=c._limitOffset(_t(f),c.options.maxBounds)),c.options.worldCopyJump){var x=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(f)));c.panTo(x)}else c.panBy(f)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;ds(i)}}});ge.addInitHook("addHandler","keyboard",Wh),ge.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Xh=ei.extend({addHooks:function(){ae(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){De(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=mh(i),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var f=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),ds(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),c=this._map.options.zoomSnap||0;i._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),x=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,T=c?Math.ceil(x/c)*c:x,F=i._limitZoom(o+(this._delta>0?T:-T))-o;this._delta=0,this._startTime=null,F&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+F):i.setZoomAround(this._lastMousePos,o+F))}});ge.addInitHook("addHandler","scrollWheelZoom",Xh);var $_=600;ge.mergeOptions({tapHold:Zt.touchNative&&Zt.safari&&Zt.mobile,tapTolerance:15});var Zh=ei.extend({addHooks:function(){ae(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){De(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new V(o.clientX,o.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ae(document,"touchend",en),ae(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),$_),ae(document,"touchend touchcancel contextmenu",this._cancel,this),ae(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){De(document,"touchend",en),De(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),De(document,"touchend touchcancel contextmenu",this._cancel,this),De(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new V(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var c=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});ge.addInitHook("addHandler","tapHold",Zh),ge.mergeOptions({touchZoom:Zt.touch,bounceAtZoomLimits:!0});var qh=ei.extend({addHooks:function(){Bt(this._map._container,"leaflet-touch-zoom"),ae(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ve(this._map._container,"leaflet-touch-zoom"),De(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(i.touches[0]),f=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(f)._divideBy(2))),this._startDist=c.distanceTo(f),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),ae(document,"touchmove",this._onTouchMove,this),ae(document,"touchend touchcancel",this._onTouchEnd,this),en(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(i.touches[0]),f=o.mouseEventToContainerPoint(i.touches[1]),x=c.distanceTo(f)/this._startDist;if(this._zoom=o.getScaleZoom(x,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&x<1||this._zoom>o.getMaxZoom()&&x>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,x===1)return}else{var T=c._add(f)._divideBy(2)._subtract(this._centerPoint);if(x===1&&T.x===0&&T.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),lt(this._animRequest);var F=l(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=z(F,this,!0),en(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,lt(this._animRequest),De(document,"touchmove",this._onTouchMove,this),De(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ge.addInitHook("addHandler","touchZoom",qh),ge.BoxZoom=Hh,ge.DoubleClickZoom=Vh,ge.Drag=Gh,ge.Keyboard=Wh,ge.ScrollWheelZoom=Xh,ge.TapHold=Zh,ge.TouchZoom=qh,e.Bounds=Pt,e.Browser=Zt,e.CRS=W,e.Canvas=Fh,e.Circle=bl,e.CircleMarker=Bo,e.Class=mt,e.Control=Hn,e.DivIcon=Uh,e.DivOverlay=ni,e.DomEvent=m_,e.DomUtil=d_,e.Draggable=Bi,e.Evented=it,e.FeatureGroup=mi,e.GeoJSON=gi,e.GridLayer=Fr,e.Handler=ei,e.Icon=Vs,e.ImageOverlay=Go,e.LatLng=gt,e.LatLngBounds=Qt,e.Layer=Vn,e.LayerGroup=Hs,e.LineUtil=P_,e.Map=ge,e.Marker=Fo,e.Mixin=S_,e.Path=zi,e.Point=V,e.PolyUtil=E_,e.Polygon=Gs,e.Polyline=_i,e.Popup=Wo,e.PosAnimation=_h,e.Projection=R_,e.Rectangle=kh,e.Renderer=vi,e.SVG=zr,e.SVGOverlay=Ih,e.TileLayer=Xs,e.Tooltip=Xo,e.Transformation=Kt,e.Util=et,e.VideoOverlay=Dh,e.bind=l,e.bounds=kt,e.canvas=Bh,e.circle=F_,e.circleMarker=N_,e.control=Ur,e.divIcon=Z_,e.extend=r,e.featureGroup=I_,e.geoJSON=Lh,e.geoJson=k_,e.gridLayer=q_,e.icon=U_,e.imageOverlay=H_,e.latLng=Mt,e.latLngBounds=at,e.layerGroup=D_,e.map=__,e.marker=O_,e.point=_t,e.polygon=z_,e.polyline=B_,e.popup=W_,e.rectangle=K_,e.setOptions=b,e.stamp=h,e.svg=zh,e.svgOverlay=G_,e.tileLayer=Oh,e.tooltip=X_,e.transformation=U,e.version=s,e.videoOverlay=V_;var J_=window.L;e.noConflict=function(){return window.L=J_,this},window.L=e})}($r,$r.exports)),$r.exports}var pt=vw();const lr=_w(pt);/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Zm;const nl=n=>Zm=n,qm=Symbol();function yu(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ao;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ao||(ao={}));function xw(){const n=ep(!0),t=n.run(()=>So({}));let e=[],s=[];const r=Nu({install(a){nl(r),r._a=a,a.provide(qm,r),a.config.globalProperties.$pinia=r,s.forEach(l=>e.push(l)),s=[]},use(a){return this._a?e.push(a):s.push(a),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}const Ym=()=>{};function Wd(n,t,e,s=Ym){n.push(t);const r=()=>{const a=n.indexOf(t);a>-1&&(n.splice(a,1),s())};return!e&&np()&&xg(r),r}function cr(n,...t){n.slice().forEach(e=>{e(...t)})}const yw=n=>n(),Xd=Symbol(),xc=Symbol();function Mu(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,s)=>n.set(s,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const s=t[e],r=n[e];yu(r)&&yu(s)&&n.hasOwnProperty(e)&&!ke(s)&&!Cs(s)?n[e]=Mu(r,s):n[e]=s}return n}const Mw=Symbol();function Sw(n){return!yu(n)||!Object.prototype.hasOwnProperty.call(n,Mw)}const{assign:qi}=Object;function Ew(n){return!!(ke(n)&&n.effect)}function bw(n,t,e,s){const{state:r,actions:a,getters:l}=t,u=e.state.value[n];let h;function d(){u||(e.state.value[n]=r?r():{});const p=Vg(e.state.value[n]);return qi(p,a,Object.keys(l||{}).reduce((m,_)=>(m[_]=Nu(Fn(()=>{nl(e);const v=e._s.get(n);return l[_].call(v,v)})),m),{}))}return h=jm(n,d,t,e,s,!0),h}function jm(n,t,e={},s,r,a){let l;const u=qi({actions:{}},e),h={deep:!0};let d,p,m=[],_=[],v;const S=s.state.value[n];!a&&!S&&(s.state.value[n]={}),So({});let b;function y(G){let C;d=p=!1,typeof G=="function"?(G(s.state.value[n]),C={type:ao.patchFunction,storeId:n,events:v}):(Mu(s.state.value[n],G),C={type:ao.patchObject,payload:G,storeId:n,events:v});const R=b=Symbol();Fu().then(()=>{b===R&&(d=!0)}),p=!0,cr(m,C,s.state.value[n])}const g=a?function(){const{state:C}=e,R=C?C():{};this.$patch(z=>{qi(z,R)})}:Ym;function I(){l.stop(),m=[],_=[],s._s.delete(n)}const D=(G,C="")=>{if(Xd in G)return G[xc]=C,G;const R=function(){nl(s);const z=Array.from(arguments),lt=[],et=[];function mt(it){lt.push(it)}function vt(it){et.push(it)}cr(_,{args:z,name:R[xc],store:k,after:mt,onError:vt});let Q;try{Q=G.apply(this&&this.$id===n?this:k,z)}catch(it){throw cr(et,it),it}return Q instanceof Promise?Q.then(it=>(cr(lt,it),it)).catch(it=>(cr(et,it),Promise.reject(it))):(cr(lt,Q),Q)};return R[Xd]=!0,R[xc]=C,R},A={_p:s,$id:n,$onAction:Wd.bind(null,_),$patch:y,$reset:g,$subscribe(G,C={}){const R=Wd(m,G,C.detached,()=>z()),z=l.run(()=>io(()=>s.state.value[n],lt=>{(C.flush==="sync"?p:d)&&G({storeId:n,type:ao.direct,events:v},lt)},qi({},h,C)));return R},$dispose:I},k=Mo(A);s._s.set(n,k);const N=(s._a&&s._a.runWithContext||yw)(()=>s._e.run(()=>(l=ep()).run(()=>t({action:D}))));for(const G in N){const C=N[G];if(ke(C)&&!Ew(C)||Cs(C))a||(S&&Sw(C)&&(ke(C)?C.value=S[G]:Mu(C,S[G])),s.state.value[n][G]=C);else if(typeof C=="function"){const R=D(C,G);N[G]=R,u.actions[G]=C}}return qi(k,N),qi(xe(k),N),Object.defineProperty(k,"$state",{get:()=>s.state.value[n],set:G=>{y(C=>{qi(C,G)})}}),s._p.forEach(G=>{qi(k,l.run(()=>G({store:k,app:s._a,pinia:s,options:u})))}),S&&a&&e.hydrate&&e.hydrate(k.$state,S),d=!0,p=!0,k}/*! #__NO_SIDE_EFFECTS__ */function Tw(n,t,e){let s;const r=typeof t=="function";s=r?e:t;function a(l,u){const h=Sv();return l=l||(h?Kn(qm,null):null),l&&nl(l),l=Zm,l._s.has(n)||(r?jm(n,t,s,l):bw(n,s,l)),l._s.get(n)}return a.$id=n,a}const Km=Tw("game",{state:()=>({realLocation:{lat:48.8584,lng:2.2945},userGuess:null}),actions:{setGuess(n,t){this.userGuess={lat:n,lng:t}}}}),ww={class:"h-screen w-screen relative"},Aw=["disabled"],Pw=bo({__name:"Guess",setup(n){const t=Xu(),e=Km(),s=So(e.userGuess),r=()=>{t.push("/end")};return ku(()=>{const a=lr.map("map").setView([32.4279,53.688],5);lr.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(a),lr.Control.geocoder({defaultMarkGeocode:!1}).on("markgeocode",function(u){const h=u.geocode.bbox,d=lr.polygon([h.getSouthEast(),h.getNorthEast(),h.getNorthWest(),h.getSouthWest()]).addTo(a);a.fitBounds(d.getBounds());const p=u.geocode.center;l?l.setLatLng(p):l=lr.marker(p).addTo(a),e.setGuess(p.lat,p.lng),s.value=e.userGuess}).addTo(a);let l=null;a.on("click",u=>{const{lat:h,lng:d}=u.latlng;l?l.setLatLng(u.latlng):l=lr.marker(u.latlng).addTo(a),e.setGuess(h,d),s.value=e.userGuess})}),(a,l)=>(es(),Ds("div",ww,[l[0]||(l[0]=dn("div",{id:"map",class:"h-full w-full z-0"},null,-1)),dn("button",{onClick:r,disabled:!s.value,class:"absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-xl transition text-white bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-500 disabled:cursor-not-allowed"}," Next ",8,Aw)]))}}),Rw={class:"flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6"},Cw={key:0,class:"mb-6 text-center"},Lw={key:1,class:"mb-6 text-center"},Dw=bo({__name:"End",setup(n){const t=Km(),e=t.userGuess,s=t.realLocation;return(r,a)=>{const l=Lp("router-link");return es(),Ds("div",Rw,[a[3]||(a[3]=dn("h1",{class:"text-4xl mb-6"},"مرسی از بازیت عزیزم",-1)),On(e)?(es(),Ds("div",Cw,[a[0]||(a[0]=dn("h2",{class:"text-2xl mb-2"},"حدس شما",-1)),dn("p",null,"Latitude: "+Yr(On(e).lat.toFixed(4)),1),dn("p",null,"Longitude: "+Yr(On(e).lng.toFixed(4)),1)])):ff("",!0),On(s)?(es(),Ds("div",Lw,[a[1]||(a[1]=dn("h2",{class:"text-2xl mb-2"},"مکان واقعی",-1)),dn("p",null,"Latitude: "+Yr(On(s).lat.toFixed(4)),1),dn("p",null,"Longitude: "+Yr(On(s).lng.toFixed(4)),1)])):ff("",!0),_n(l,{to:"/",class:"text-blue-400 hover:underline text-lg"},{default:wp(()=>a[2]||(a[2]=[Jp("دوباره")])),_:1})])}}}),Iw=[{path:"/",name:"Welcome",component:z0},{path:"/play",name:"Play",component:mw},{path:"/guess",name:"Guess",component:Pw},{path:"/end",name:"End",component:Dw}],Uw=N0({history:h0(),routes:Iw});var Ow=Object.defineProperty,Nw=(n,t,e)=>t in n?Ow(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,be=(n,t,e)=>Nw(n,typeof t!="symbol"?t+"":t,e);function vn(n,t){return Object.assign(t,n.geocodingQueryParams)}function bn(n,t){return Object.assign(t,n.reverseQueryParams)}const Fw=/[&<>"'`]/g,Bw=/[&<>"'`]/,zw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};function kw(n){return zw[n]}function Hw(n){return n==null?"":n?(n=""+n,Bw.test(n)?n.replace(Fw,kw):n):n+""}function Ce(n,t){const e={Accept:"application/json"},s=new URL(n);return Object.entries(t).forEach(([r,a])=>{(Array.isArray(a)?a:[a]).forEach(l=>{s.searchParams.append(r,l)})}),fetch(s.toString(),{headers:e}).then(r=>r.json())}function Vw(n,t){return n.replace(/\{ *([\w_]+) *\}/g,(e,s)=>{let r=t[s];return r===void 0?r="":typeof r=="function"&&(r=r(t)),Hw(r)})}class $m{constructor(t){be(this,"options",{serviceUrl:"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",apiKey:""}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{token:this.options.apiKey,SingleLine:t,outFields:"Addr_Type",forStorage:!1,maxLocations:10,f:"json"});return(await Ce(this.options.serviceUrl+"/findAddressCandidates",e)).candidates.map(s=>{const r=new pt.LatLng(s.location.y,s.location.x),a=new pt.LatLngBounds(new pt.LatLng(s.extent.ymax,s.extent.xmax),new pt.LatLng(s.extent.ymin,s.extent.xmin));return{name:s.address,bbox:a,center:r}})}suggest(t){return this.geocode(t)}async reverse(t,e){const s=bn(this.options,{location:t.lng+","+t.lat,distance:100,f:"json"}),r=await Ce(this.options.serviceUrl+"/reverseGeocode",s);if(!r||r.error)return[];const a=new pt.LatLng(r.location.y,r.location.x),l=new pt.LatLngBounds(a,a);return[{name:r.address.Match_addr,center:a,bbox:l}]}}function Gw(n){return new $m(n)}class Jm{constructor(t){be(this,"options",{serviceUrl:"https://dev.virtualearth.net/REST/v1/Locations/"}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{query:t,key:this.options.apiKey}),s=await Ce(this.options.serviceUrl,e);return this._parseResults(s)}async reverse(t,e){const s=bn(this.options,{key:this.options.apiKey}),r=await Ce(this.options.serviceUrl+t.lat+","+t.lng,s);return this._parseResults(r)}_parseResults(t){return t.resourceSets[0].resources.map(e=>{const s=e.bbox;return{name:e.name,bbox:new pt.LatLngBounds([s[0],s[1]],[s[2],s[3]]),center:new pt.LatLng(...e.point.coordinates)}})}}function Ww(n){return new Jm(n)}class Qm{constructor(t){if(be(this,"options",{apiKey:"",serviceUrl:"https://atlas.microsoft.com/search"}),pt.Util.setOptions(this,t),!this.options.apiKey)throw new Error("Azure Maps Geocoder requires an API key.")}async geocode(t){const e={"api-version":"1.0",query:t,"subscription-key":this.options.apiKey},s=this.options.serviceUrl+"/address/json";return((await Ce(s,e)).results||[]).map(r=>({name:r.address.freeformAddress,bbox:new pt.LatLngBounds([r.viewport.topLeftPoint.lat,r.viewport.topLeftPoint.lon],[r.viewport.btmRightPoint.lat,r.viewport.btmRightPoint.lon]),center:new pt.LatLng(r.position.lat,r.position.lon)}))}async reverse(t,e){const s={"api-version":"1.0",query:t.lat+","+t.lng,"subscription-key":this.options.apiKey},r=this.options.serviceUrl+"/address/reverse/json";return((await Ce(r,s)).addresses||[]).map(a=>({name:a.address.freeformAddress,bbox:new pt.LatLngBounds([a.viewport.topLeftPoint.lat,a.viewport.topLeftPoint.lon],[a.viewport.btmRightPoint.lat,a.viewport.btmRightPoint.lon]),center:new pt.LatLng(t.lat,t.lng)}))}}function Xw(n){return new Qm(n)}class t_{constructor(t){be(this,"options",{serviceUrl:"https://maps.googleapis.com/maps/api/geocode/json"}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{key:this.options.apiKey,address:t}),s=await Ce(this.options.serviceUrl,e);return this._parseResults(s)}async reverse(t,e){const s=bn(this.options,{key:this.options.apiKey,latlng:t.lat+","+t.lng}),r=await Ce(this.options.serviceUrl,s);return this._parseResults(r)}_parseResults(t){var e;return(e=t.results||[])==null?void 0:e.map(s=>{const r=new pt.LatLng(s.geometry.location.lat,s.geometry.location.lng),a=new pt.LatLngBounds(new pt.LatLng(s.geometry.viewport.northeast.lat,s.geometry.viewport.northeast.lng),new pt.LatLng(s.geometry.viewport.southwest.lat,s.geometry.viewport.southwest.lng));return{name:s.formatted_address,bbox:a,center:r,properties:s.address_components}})}}function Zw(n){return new t_(n)}class e_{constructor(t){if(be(this,"options",{serviceUrl:"https://geocoder.api.here.com/6.2/",app_id:"",app_code:"",apiKey:"",maxResults:5}),pt.Util.setOptions(this,t),t!=null&&t.apiKey)throw Error("apiKey is not supported, use app_id/app_code instead!")}geocode(t){const e=vn(this.options,{searchtext:t,gen:9,app_id:this.options.app_id,app_code:this.options.app_code,jsonattributes:1,maxresults:this.options.maxResults});return this.getJSON(this.options.serviceUrl+"geocode.json",e)}reverse(t,e){let s=t.lat+","+t.lng;this.options.reverseGeocodeProxRadius&&(s+=","+this.options.reverseGeocodeProxRadius);const r=bn(this.options,{prox:s,mode:"retrieveAddresses",app_id:this.options.app_id,app_code:this.options.app_code,gen:9,jsonattributes:1,maxresults:this.options.maxResults});return this.getJSON(this.options.serviceUrl+"reversegeocode.json",r)}async getJSON(t,e){var s,r;return(((r=(s=(await Ce(t,e)).response.view)==null?void 0:s[0])==null?void 0:r.result)||[]).map(a=>{const l=a.location,u=new pt.LatLng(l.displayPosition.latitude,l.displayPosition.longitude),h=new pt.LatLngBounds(new pt.LatLng(l.mapView.topLeft.latitude,l.mapView.topLeft.longitude),new pt.LatLng(l.mapView.bottomRight.latitude,l.mapView.bottomRight.longitude));return{name:l.address.label,properties:l.address,bbox:h,center:u}})}}class n_{constructor(t){be(this,"options",{serviceUrl:"https://geocode.search.hereapi.com/v1",apiKey:"",app_id:"",app_code:"",maxResults:10}),pt.Util.setOptions(this,t)}geocode(t){const e=vn(this.options,{q:t,apiKey:this.options.apiKey,limit:this.options.maxResults});if(!e.at&&!e.in)throw Error("at / in parameters not found. Please define coordinates (at=latitude,longitude) or other (in) in your geocodingQueryParams.");return this.getJSON(this.options.serviceUrl+"/discover",e)}reverse(t,e){const s=bn(this.options,{at:t.lat+","+t.lng,limit:this.options.reverseGeocodeProxRadius,apiKey:this.options.apiKey});return this.getJSON(this.options.serviceUrl+"/revgeocode",s)}async getJSON(t,e){return((await Ce(t,e)).items||[]).map(s=>{const r=new pt.LatLng(s.position.lat,s.position.lng);let a;return s.mapView?a=new pt.LatLngBounds(new pt.LatLng(s.mapView.south,s.mapView.west),new pt.LatLng(s.mapView.north,s.mapView.east)):a=new pt.LatLngBounds(new pt.LatLng(s.position.lat,s.position.lng),new pt.LatLng(s.position.lat,s.position.lng)),{name:s.address.label,properties:s.address,bbox:a,center:r}})}}function qw(n){return n!=null&&n.apiKey?new n_(n):new e_(n)}function i_(n){let t;if(t=n.match(/^([NS])\s*(\d{1,3}(?:\.\d*)?)\W*([EW])\s*(\d{1,3}(?:\.\d*)?)$/))return new pt.LatLng((/N/i.test(t[1])?1:-1)*+t[2],(/E/i.test(t[3])?1:-1)*+t[4]);if(t=n.match(/^(\d{1,3}(?:\.\d*)?)\s*([NS])\W*(\d{1,3}(?:\.\d*)?)\s*([EW])$/))return new pt.LatLng((/N/i.test(t[2])?1:-1)*+t[1],(/E/i.test(t[4])?1:-1)*+t[3]);if(t=n.match(/^([NS])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?$/))return new pt.LatLng((/N/i.test(t[1])?1:-1)*(+t[2]+ +t[3]/60),(/E/i.test(t[4])?1:-1)*(+t[5]+ +t[6]/60));if(t=n.match(/^(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([NS])\W*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([EW])$/))return new pt.LatLng((/N/i.test(t[3])?1:-1)*(+t[1]+ +t[2]/60),(/E/i.test(t[6])?1:-1)*(+t[4]+ +t[5]/60));if(t=n.match(/^([NS])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?$/))return new pt.LatLng((/N/i.test(t[1])?1:-1)*(+t[2]+ +t[3]/60+ +t[4]/3600),(/E/i.test(t[5])?1:-1)*(+t[6]+ +t[7]/60+ +t[8]/3600));if(t=n.match(/^(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]\s*([NS])\W*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\s*([EW])$/))return new pt.LatLng((/N/i.test(t[4])?1:-1)*(+t[1]+ +t[2]/60+ +t[3]/3600),(/E/i.test(t[8])?1:-1)*(+t[5]+ +t[6]/60+ +t[7]/3600));if(t=n.match(/^\s*([+-]?\d+(?:\.\d*)?)\s*[\s,]\s*([+-]?\d+(?:\.\d*)?)\s*$/))return new pt.LatLng(+t[1],+t[2])}class s_{constructor(t){be(this,"options",{next:void 0,sizeInMeters:1e4}),pt.Util.setOptions(this,t)}async geocode(t){const e=i_(t);return e?[{name:t,center:e,bbox:e.toBounds(this.options.sizeInMeters)}]:this.options.next?this.options.next.geocode(t):[]}}function Yw(n){return new s_(n)}class r_{constructor(t){be(this,"options",{serviceUrl:"https://api.mapbox.com/geocoding/v5/mapbox.places/"}),pt.Util.setOptions(this,t)}_getProperties(t){const e={text:t.text,address:t.address};return(t.context||[]).forEach(s=>{const r=s.id.split(".")[0];e[r]=s.text,s.short_code&&(e.countryShortCode=s.short_code)}),e}async geocode(t){const e=this.options.serviceUrl+encodeURIComponent(t)+".json",s=vn(this.options,{access_token:this.options.apiKey});s.proximity!==void 0&&s.proximity.lat!==void 0&&s.proximity.lng!==void 0&&(s.proximity=s.proximity.lng+","+s.proximity.lat);const r=await Ce(e,s);return this._parseResults(r)}suggest(t){return this.geocode(t)}async reverse(t,e){const s=this.options.serviceUrl+t.lng+","+t.lat+".json",r=bn(this.options,{access_token:this.options.apiKey}),a=await Ce(s,r);return this._parseResults(a)}_parseResults(t){var e;return(e=t.features)!=null&&e.length?t.features.map(s=>{const r=new pt.LatLng(...s.center.reverse());let a;return s.bbox?a=new pt.LatLngBounds(new pt.LatLng(...s.bbox.slice(0,2).reverse()),new pt.LatLng(...s.bbox.slice(2,4).reverse())):a=new pt.LatLngBounds(r,r),{name:s.place_name,bbox:a,center:r,properties:this._getProperties(s)}}):[]}}function jw(n){return new r_(n)}class o_{constructor(t){be(this,"options",{serviceUrl:"https://www.mapquestapi.com/geocoding/v1"}),pt.Util.setOptions(this,t),this.options.apiKey=decodeURIComponent(this.options.apiKey)}_formatName(...t){return t.filter(e=>!!e).join(", ")}async geocode(t){const e=vn(this.options,{key:this.options.apiKey,location:t,limit:5,outFormat:"json"}),s=await Ce(this.options.serviceUrl+"/address",e);return this._parseResults(s)}async reverse(t,e){const s=bn(this.options,{key:this.options.apiKey,location:t.lat+","+t.lng,outputFormat:"json"}),r=await Ce(this.options.serviceUrl+"/reverse",s);return this._parseResults(r)}_parseResults(t){var e,s;return(((s=(e=t.results)==null?void 0:e[0])==null?void 0:s.locations)||[]).map(r=>{const a=new pt.LatLng(r.latLng.lat,r.latLng.lng);return{name:this._formatName(r.street,r.adminArea4,r.adminArea3,r.adminArea1),bbox:new pt.LatLngBounds(a,a),center:a}})}}function Kw(n){return new o_(n)}class a_{constructor(t){be(this,"options",{userId:"",apiKey:"",serviceUrl:"https://neutrinoapi.com/"}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{apiKey:this.options.apiKey,userId:this.options.userId,address:t.split(/\s+/).join(".")}),s=await Ce(this.options.serviceUrl+"geocode-address",e);if(!s.locations)return[];s.geometry=s.locations[0];const r=new pt.LatLng(s.geometry.latitude,s.geometry.longitude),a=new pt.LatLngBounds(r,r);return[{name:s.geometry.address,bbox:a,center:r}]}suggest(t){return this.geocode(t)}async reverse(t,e){const s=bn(this.options,{apiKey:this.options.apiKey,userId:this.options.userId,latitude:t.lat,longitude:t.lng}),r=await Ce(this.options.serviceUrl+"geocode-reverse",s);if(r.status.status!==200||!r.found)return[];const a=new pt.LatLng(t.lat,t.lng),l=new pt.LatLngBounds(a,a);return[{name:r.address,bbox:l,center:a}]}}function $w(n){return new a_(n)}let oh=class{constructor(t){be(this,"options",{serviceUrl:"https://nominatim.openstreetmap.org/",htmlTemplate(e){const s=e.address;let r;const a=[];return(s.road||s.building)&&a.push("{building} {road} {house_number}"),(s.city||s.town||s.village||s.hamlet)&&(r=a.length>0?"leaflet-control-geocoder-address-detail":"",a.push('<span class="'+r+'">{postcode} {city} {town} {village} {hamlet}</span>')),(s.state||s.country)&&(r=a.length>0?"leaflet-control-geocoder-address-context":"",a.push('<span class="'+r+'">{state} {country}</span>')),Vw(a.join("<br/>"),s)}}),pt.Util.setOptions(this,t||{})}async geocode(t){const e=vn(this.options,{q:t,limit:5,format:"json",addressdetails:1});return(await Ce(this.options.serviceUrl+"search",e)).map(s=>{const r=s.boundingbox;return{icon:s.icon,name:s.display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(s):void 0,bbox:new pt.LatLngBounds([+r[0],+r[2]],[+r[1],+r[3]]),center:new pt.LatLng(+s.lat,+s.lon),properties:s}})}async reverse(t,e){const s=bn(this.options,{lat:t.lat,lon:t.lng,zoom:Math.round(Math.log(e/256)/Math.log(2)),addressdetails:1,format:"json"}),r=await Ce(this.options.serviceUrl+"reverse",s);if(!(r!=null&&r.lat)||!(r!=null&&r.lon))return[];const a=new pt.LatLng(+r.lat,+r.lon),l=new pt.LatLngBounds(a,a);return[{name:r.display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(r):void 0,center:a,bbox:l,properties:r}]}};function Jw(n){return new oh(n)}class l_{constructor(t){be(this,"options",{}),pt.Util.setOptions(this,t)}async geocode(t){try{const e=this.options.OpenLocationCode.decode(t);return[{name:t,center:new pt.LatLng(e.latitudeCenter,e.longitudeCenter),bbox:new pt.LatLngBounds(new pt.LatLng(e.latitudeLo,e.longitudeLo),new pt.LatLng(e.latitudeHi,e.longitudeHi))}]}catch(e){return console.warn(e),[]}}async reverse(t,e){try{return[{name:this.options.OpenLocationCode.encode(t.lat,t.lng,this.options.codeLength),center:new pt.LatLng(t.lat,t.lng),bbox:new pt.LatLngBounds(new pt.LatLng(t.lat,t.lng),new pt.LatLng(t.lat,t.lng))}]}catch(s){return console.warn(s),[]}}}function Qw(n){return new l_(n)}class c_{constructor(t){be(this,"options",{serviceUrl:"https://api.opencagedata.com/geocode/v1/json"}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{key:this.options.apiKey,q:t}),s=await Ce(this.options.serviceUrl,e);return this._parseResults(s)}suggest(t){return this.geocode(t)}async reverse(t,e){const s=bn(this.options,{key:this.options.apiKey,q:[t.lat,t.lng].join(",")}),r=await Ce(this.options.serviceUrl,s);return this._parseResults(r)}_parseResults(t){return(t.results||[]).map(e=>{const s=new pt.LatLng(e.geometry.lat,e.geometry.lng),r=e.annotations&&e.annotations.bounds?new pt.LatLngBounds(new pt.LatLng(e.annotations.bounds.northeast.lat,e.annotations.bounds.northeast.lng),new pt.LatLng(e.annotations.bounds.southwest.lat,e.annotations.bounds.southwest.lng)):new pt.LatLngBounds(s,s);return{name:e.formatted,bbox:r,center:s,properties:e}})}}function tA(n){return new c_(n)}class Co{constructor(t){be(this,"options",{serviceUrl:"https://api.geocode.earth/v1"}),pt.Util.setOptions(this,t)}async geocode(t){const e=vn(this.options,{api_key:this.options.apiKey,text:t}),s=await Ce(this.options.serviceUrl+"/search",e);return this._parseResults(s,"bbox")}async suggest(t){const e=vn(this.options,{api_key:this.options.apiKey,text:t}),s=await Ce(this.options.serviceUrl+"/autocomplete",e);return this._parseResults(s,"bbox")}async reverse(t,e){const s=bn(this.options,{api_key:this.options.apiKey,"point.lat":t.lat,"point.lon":t.lng}),r=await Ce(this.options.serviceUrl+"/reverse",s);return this._parseResults(r,"bounds")}_parseResults(t,e){const s=[];return new pt.GeoJSON(t,{pointToLayer(r,a){return new pt.CircleMarker(a,{radius:10})},onEachFeature(r,a){const l={};let u,h;a.getBounds?(u=a.getBounds(),h=u.getCenter()):a.feature.bbox?(h=a.getLatLng(),u=new pt.LatLngBounds(pt.GeoJSON.coordsToLatLng(a.feature.bbox.slice(0,2)),pt.GeoJSON.coordsToLatLng(a.feature.bbox.slice(2,4)))):(h=a.getLatLng(),u=new pt.LatLngBounds(h,h)),l.name=a.feature.properties.label,l.center=h,l[e]=u,l.properties=a.feature.properties,s.push(l)}}),s}}function ah(n){return new Co(n)}const eA=Co,nA=ah,iA=Co,sA=ah;class u_ extends Co{constructor(t){super(Object.assign({serviceUrl:"https://api.openrouteservice.org/geocode"},t))}}function rA(n){return new u_(n)}class h_{constructor(t){be(this,"options",{serviceUrl:"https://photon.komoot.io/api/",reverseUrl:"https://photon.komoot.io/reverse/",nameProperties:["name","street","suburb","hamlet","town","city","state","country"]}),pt.Util.setOptions(this,t)}async geocode(t,e){var s,r,a,l;const u=vn(this.options,{q:t}),h=(r=(s=e==null?void 0:e.map)==null?void 0:s.getCenter)==null?void 0:r.call(s);h&&(u.lat=h.lat,u.lon=h.lng);const d=(l=(a=e==null?void 0:e.map)==null?void 0:a.getZoom)==null?void 0:l.call(a);d&&(u.zoom=d);const p=await Ce(this.options.serviceUrl,u);return this._parseResults(p)}suggest(t){return this.geocode(t)}async reverse(t,e){const s=bn(this.options,{lat:t.lat,lon:t.lng}),r=await Ce(this.options.reverseUrl,s);return this._parseResults(r)}_parseResults(t){return(t.features||[]).map(e=>{var s;const r=e.geometry.coordinates,a=new pt.LatLng(r[1],r[0]),l=(s=e.properties)==null?void 0:s.extent,u=l?new pt.LatLngBounds([l[1],l[0]],[l[3],l[2]]):new pt.LatLngBounds(a,a);return{name:this._decodeFeatureName(e),html:this.options.htmlTemplate?this.options.htmlTemplate(e):void 0,center:a,bbox:u,properties:e.properties}})}_decodeFeatureName(t){return(this.options.nameProperties||[]).map(e=>{var s;return(s=t.properties)==null?void 0:s[e]}).filter(e=>!!e).join(", ")}}function oA(n){return new h_(n)}class f_{constructor(t){be(this,"options",{serviceUrl:"https://api.what3words.com/v2/"}),pt.Util.setOptions(this,t)}async geocode(t){const e=await Ce(this.options.serviceUrl+"forward",vn(this.options,{key:this.options.apiKey,addr:t.split(/\s+/).join(".")}));if(!e.geometry)return[];const s=new pt.LatLng(e.geometry.lat,e.geometry.lng),r=new pt.LatLngBounds(s,s);return[{name:e.words,bbox:r,center:s}]}suggest(t){return this.geocode(t)}async reverse(t,e){const s=await Ce(this.options.serviceUrl+"reverse",bn(this.options,{key:this.options.apiKey,coords:[t.lat,t.lng].join(",")}));if(s.status.status!=200)return[];const r=new pt.LatLng(s.geometry.lat,s.geometry.lng),a=new pt.LatLngBounds(r,r);return[{name:s.words,bbox:a,center:r}]}}function aA(n){return new f_(n)}const lA=Object.freeze(Object.defineProperty({__proto__:null,ArcGis:$m,AzureMaps:Qm,Bing:Jm,GeocodeEarth:eA,Google:t_,HERE:e_,HEREv2:n_,LatLng:s_,MapQuest:o_,Mapbox:r_,Mapzen:iA,Neutrino:a_,Nominatim:oh,OpenCage:c_,OpenLocationCode:l_,Openrouteservice:u_,Pelias:Co,Photon:h_,What3Words:f_,arcgis:Gw,azure:Xw,bing:Ww,geocodeEarth:nA,geocodingParams:vn,google:Zw,here:qw,latLng:Yw,mapQuest:Kw,mapbox:jw,mapzen:sA,neutrino:$w,nominatim:Jw,openLocationCode:Qw,opencage:tA,openrouteservice:rA,parseLatLng:i_,pelias:ah,photon:oA,reverseParams:bn,what3words:aA},Symbol.toStringTag,{value:"Module"}));class lh{constructor(...t){}}Object.assign(lh.prototype,pt.Control.prototype);Object.assign(lh.prototype,pt.Evented.prototype);class ch extends lh{constructor(t){super(t),be(this,"options",{showUniqueResult:!0,showResultIcons:!1,collapsed:!0,expand:"touch",position:"topright",placeholder:"Search...",errorMessage:"Nothing found.",iconLabel:"Initiate a new search",query:"",queryMinLength:1,suggestMinLength:3,suggestTimeout:250,defaultMarkGeocode:!0}),be(this,"_alts"),be(this,"_container"),be(this,"_errorElement"),be(this,"_geocodeMarker"),be(this,"_input"),be(this,"_lastGeocode"),be(this,"_map"),be(this,"_preventBlurCollapse"),be(this,"_requestCount",0),be(this,"_results"),be(this,"_selection"),be(this,"_suggestTimeout"),pt.Util.setOptions(this,t),this.options.geocoder||(this.options.geocoder=new oh)}addThrobberClass(){this._container.classList.add("leaflet-control-geocoder-throbber")}removeThrobberClass(){this._container.classList.remove("leaflet-control-geocoder-throbber")}onAdd(t){var e;const s="leaflet-control-geocoder",r=pt.DomUtil.create("div",s+" leaflet-bar"),a=pt.DomUtil.create("button",s+"-icon",r),l=pt.DomUtil.create("div",s+"-form",r);this._map=t,this._container=r,a.innerHTML="&nbsp;",a.type="button",a.setAttribute("aria-label",this.options.iconLabel);const u=this._input=pt.DomUtil.create("input","",l);return u.type="search",u.value=this.options.query,u.placeholder=this.options.placeholder,pt.DomEvent.disableClickPropagation(u),this._errorElement=pt.DomUtil.create("div",s+"-form-no-error",r),this._errorElement.innerHTML=this.options.errorMessage,this._alts=pt.DomUtil.create("ul",s+"-alternatives leaflet-control-geocoder-alternatives-minimized",r),pt.DomEvent.disableClickPropagation(this._alts),pt.DomEvent.addListener(u,"keydown",this._keydown,this),(e=this.options.geocoder)!=null&&e.suggest&&pt.DomEvent.addListener(u,"input",this._change,this),pt.DomEvent.addListener(u,"blur",()=>{this.options.collapsed&&!this._preventBlurCollapse&&this._collapse(),this._preventBlurCollapse=!1}),this.options.collapsed?this.options.expand==="click"?pt.DomEvent.addListener(r,"click",h=>{h.button===0&&h.detail!==2&&this._toggle()}):this.options.expand==="touch"?pt.DomEvent.addListener(r,pt.Browser.touch?"touchstart mousedown":"mousedown",h=>{this._toggle(),h.preventDefault(),h.stopPropagation()},this):(pt.DomEvent.addListener(r,"mouseover",this._expand,this),pt.DomEvent.addListener(r,"mouseout",this._collapse,this),this._map.on("movestart",this._collapse,this)):(this._expand(),pt.Browser.touch?pt.DomEvent.addListener(r,"touchstart",()=>this._geocode()):pt.DomEvent.addListener(r,"click",()=>this._geocode())),this.options.defaultMarkGeocode&&this.on("markgeocode",this.markGeocode,this),this.on("startgeocode",this.addThrobberClass,this),this.on("finishgeocode",this.removeThrobberClass,this),this.on("startsuggest",this.addThrobberClass,this),this.on("finishsuggest",this.removeThrobberClass,this),pt.DomEvent.disableClickPropagation(r),r}setQuery(t){return this._input.value=t,this}_geocodeResult(t,e){!e&&this.options.showUniqueResult&&t.length===1?this._geocodeResultSelected(t[0]):t.length>0?(this._alts.innerHTML="",this._results=t,this._alts.classList.remove("leaflet-control-geocoder-alternatives-minimized"),this._container.classList.add("leaflet-control-geocoder-options-open"),this._results.forEach((s,r)=>this._alts.appendChild(this._createAlt(s,r)))):(this._container.classList.add("leaflet-control-geocoder-options-error"),this._errorElement.classList.add("leaflet-control-geocoder-error"))}markGeocode(t){const e=t.geocode;return this._map.fitBounds(e.bbox),this._geocodeMarker&&this._map.removeLayer(this._geocodeMarker),this._geocodeMarker=new pt.Marker(e.center).bindPopup(e.html||e.name).addTo(this._map).openPopup(),this}async _geocode(t=!1){const e=this._input.value;if(!t&&e.length<this.options.queryMinLength)return;const s=++this._requestCount;this._lastGeocode=e,t||this._clearResults();const r={input:e};this.fire(t?"startsuggest":"startgeocode",r);const a={map:this._map},l=t?await this.options.geocoder.suggest(e,a):await this.options.geocoder.geocode(e,a);if(s===this._requestCount){const u={input:e,results:l};this.fire(t?"finishsuggest":"finishgeocode",u),this._geocodeResult(l,t)}}_geocodeResultSelected(t){const e={geocode:t};this.fire("markgeocode",e)}_toggle(){this._container.classList.contains("leaflet-control-geocoder-expanded")?this._collapse():this._expand()}_expand(){this._container.classList.add("leaflet-control-geocoder-expanded"),this._input.select(),this.fire("expand")}_collapse(){this._container.classList.remove("leaflet-control-geocoder-expanded"),this._alts.classList.add("leaflet-control-geocoder-alternatives-minimized"),this._errorElement.classList.remove("leaflet-control-geocoder-error"),this._container.classList.remove("leaflet-control-geocoder-options-open"),this._container.classList.remove("leaflet-control-geocoder-options-error"),this._input.blur(),this.fire("collapse")}_clearResults(){this._alts.classList.add("leaflet-control-geocoder-alternatives-minimized"),this._selection=null,this._errorElement.classList.remove("leaflet-control-geocoder-error"),this._container.classList.remove("leaflet-control-geocoder-options-open"),this._container.classList.remove("leaflet-control-geocoder-options-error")}_createAlt(t,e){const s=pt.DomUtil.create("li",""),r=pt.DomUtil.create("a","",s),a=this.options.showResultIcons&&t.icon?pt.DomUtil.create("img","",r):null,l=t.html?void 0:document.createTextNode(t.name),u=h=>{this._preventBlurCollapse=!0,pt.DomEvent.stop(h),this._geocodeResultSelected(t),pt.DomEvent.on(s,"click touchend",()=>{this.options.collapsed?this._collapse():this._clearResults()})};return a&&(a.src=t.icon),s.setAttribute("data-result-index",String(e)),t.html?r.innerHTML=r.innerHTML+t.html:l&&r.appendChild(l),pt.DomEvent.addListener(s,"mousedown touchstart",u,this),s}_keydown(t){const e=s=>{this._selection&&(this._selection.classList.remove("leaflet-control-geocoder-selected"),this._selection=this._selection[s>0?"nextSibling":"previousSibling"]),this._selection||(this._selection=this._alts[s>0?"firstChild":"lastChild"]),this._selection&&this._selection.classList.add("leaflet-control-geocoder-selected")};switch(t.key){case"Escape":this.options.collapsed?this._collapse():this._clearResults();break;case"ArrowUp":e(-1);break;case"ArrowDown":e(1);break;case"Enter":if(this._selection){const s=parseInt(this._selection.getAttribute("data-result-index"),10);this._geocodeResultSelected(this._results[s]),this._clearResults()}else this._geocode();break;default:return}pt.DomEvent.preventDefault(t)}_change(){const t=this._input.value;t!==this._lastGeocode&&(clearTimeout(this._suggestTimeout),t.length>=this.options.suggestMinLength?this._suggestTimeout=setTimeout(()=>this._geocode(!0),this.options.suggestTimeout):this._clearResults())}}function cA(n){return new ch(n)}/* @preserve
 * Leaflet Control Geocoder
 * https://github.com/perliedman/leaflet-control-geocoder
 *
 * Copyright (c) 2012 sa3m (https://github.com/sa3m)
 * Copyright (c) 2018 Per Liedman
 * All rights reserved.
 */Object.assign(ch,lA);Object.assign(pt.Control,{Geocoder:ch,geocoder:cA});const uh=wx(Ux);uh.use(Uw);uh.use(xw());uh.mount("#app");
