import{m as T,V as p,a as y}from"./VOverlay-da001e16.js";import{f as A}from"./forwardRefs-8348545e.js";import{N as k,at as S,aj as K,au as I,bw as O,R as V,r as R,aT as U,Q as N,w as j,t as b,X as F,aP as L,bx as g,b as w,by as $,aM as z,bz as P,bA as Q}from"./index-5caaa453.js";import{u as X}from"./scopeId-484eb469.js";import{V as q}from"./dialog-transition-1ae6ec72.js";const B=k({id:String,...S(T({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:q}}),["absolute"])},"VMenu"),_=K()({name:"VMenu",props:B(),emits:{"update:modelValue":r=>!0},setup(r,E){let{slots:i}=E;const l=I(r,"modelValue"),{scopeId:x}=X(),h=O(),d=V(()=>r.id||`v-menu-${h}`),n=R(),o=U(p,null),c=N(0);L(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(l.value=!1,o==null||o.closeParents())},40)}});async function v(e){var s,u,f;const t=e.relatedTarget,a=e.target;await z(),l.value&&t!==a&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(a)&&!n.value.contentEl.contains(a)&&((f=P(n.value.contentEl)[0])==null||f.focus())}j(l,e=>{e?(o==null||o.register(),document.addEventListener("focusin",v,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",v))});function C(){o==null||o.closeParents()}function D(e){var t,a,s;r.disabled||e.key==="Tab"&&(Q(P((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(s=(a=n.value)==null?void 0:a.activatorEl)==null||s.focus()))}function m(e){var a;if(r.disabled)return;const t=(a=n.value)==null?void 0:a.contentEl;t&&l.value?e.key==="ArrowDown"?(e.preventDefault(),g(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),g(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=V(()=>b({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},r.activatorProps));return F(()=>{const[e]=y.filterProps(r);return w(y,b({ref:n,class:["v-menu",r.class],style:r.style},e,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return w($,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...a)]}})}})}),A({id:d,ΨopenChildren:c},n)}});export{_ as V};