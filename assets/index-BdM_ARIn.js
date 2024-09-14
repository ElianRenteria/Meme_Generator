var z=Object.defineProperty;var H=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>H(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function v(){}function G(e){return e()}function j(){return Object.create(null)}function k(e){e.forEach(G)}function T(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let E;function I(e,t){return e===t?!0:(E||(E=document.createElement("a")),E.href=t,e===E.href)}function V(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function M(){return D(" ")}function J(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}let x;function w(e){x=e}function W(){if(!x)throw new Error("Function called outside component initialization");return x}function X(e){W().$$.on_mount.push(e)}const $=[],q=[];let b=[];const B=[],Y=Promise.resolve();let C=!1;function Z(){C||(C=!0,Y.then(U))}function P(e){b.push(e)}const A=new Set;let y=0;function U(){if(y!==0)return;const e=x;do{try{for(;y<$.length;){const t=$[y];y++,w(t),ee(t.$$)}}catch(t){throw $.length=0,y=0,t}for(w(null),$.length=0,y=0;q.length;)q.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];A.has(n)||(A.add(n),n())}b.length=0}while($.length);for(;B.length;)B.pop()();C=!1,A.clear(),w(e)}function ee(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function te(e){const t=[],n=[];b.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),b=t}const ne=new Set;function re(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function oe(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),P(()=>{const i=e.$$.on_mount.map(G).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...i):k(i),e.$$.on_mount=[]}),o.forEach(P)}function ie(e,t){const n=e.$$;n.fragment!==null&&(te(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&($.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,r,o,i,f=null,p=[-1]){const m=x;w(e);const c=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:j(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};f&&f(c.root);let g=!1;if(c.ctx=n?n(e,t.props||{},(u,l,...s)=>{const a=s.length?s[0]:l;return c.ctx&&o(c.ctx[u],c.ctx[u]=a)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](a),g&&ce(e,u)),l}):[],c.update(),g=!0,k(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const u=Q(t.target);c.fragment&&c.fragment.l(u),u.forEach(L)}else c.fragment&&c.fragment.c();t.intro&&re(e.$$.fragment),oe(e,t.target,t.anchor),U()}w(m)}class le{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){ie(this,1),this.$destroy=v}$on(t,n){if(!T(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);function F(e){let t;return{c(){t=h("div"),t.textContent="Loading meme...",d(t,"class","loading svelte-1i9s002"),d(t,"aria-busy","true")},m(n,r){S(n,t,r)},d(n){n&&L(t)}}}function R(e){let t,n;return{c(){t=h("img"),I(t.src,n=e[0])||d(t,"src",n),d(t,"alt","Random Meme"),d(t,"width","400"),d(t,"class","svelte-1i9s002")},m(r,o){S(r,t,o)},p(r,o){o&1&&!I(t.src,n=r[0])&&d(t,"src",n)},d(r){r&&L(t)}}}function ue(e){let t,n,r,o,i,f,p,m,c,g,u,l=e[1]&&F(),s=!e[1]&&R(e);return{c(){t=h("main"),n=h("article"),r=h("header"),r.innerHTML="<h1>Random Meme Generator</h1>",o=M(),l&&l.c(),i=M(),s&&s.c(),f=M(),p=h("footer"),m=h("div"),c=h("button"),c.textContent="Get Funny",d(m,"class","button__container svelte-1i9s002"),d(n,"class","meme__card svelte-1i9s002"),d(t,"class","meme__container svelte-1i9s002")},m(a,O){S(a,t,O),_(t,n),_(n,r),_(n,o),l&&l.m(n,null),_(n,i),s&&s.m(n,null),_(n,f),_(n,p),_(p,m),_(m,c),g||(u=J(c,"click",e[2]),g=!0)},p(a,[O]){a[1]?l||(l=F(),l.c(),l.m(n,i)):l&&(l.d(1),l=null),a[1]?s&&(s.d(1),s=null):s?s.p(a,O):(s=R(a),s.c(),s.m(n,f))},i:v,o:v,d(a){a&&L(t),l&&l.d(),s&&s.d(),g=!1,u()}}}function ae(e,t,n){let r="",o=!0;async function i(){n(1,o=!0);try{const p=await(await fetch("https://meme-api.com/gimme")).json();n(0,r=p.url)}catch(f){console.error("Error fetching meme:",f)}finally{n(1,o=!1)}}return X(()=>{i()}),[r,o,i]}class de extends le{constructor(t){super(),se(this,t,ae,ue,K,{})}}new de({target:document.getElementById("app")});
