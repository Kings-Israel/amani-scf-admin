import{m as P,a as f}from"./VOverlay-da001e16.js";import{f as y}from"./forwardRefs-8348545e.js";import{N as D,aj as h,au as S,r as w,cd as x,w as m,R,t as v,X as B,aM as F,b as g,by as I,bz as T}from"./index-5caaa453.js";import{u as N}from"./scopeId-484eb469.js";import{V as O}from"./dialog-transition-1ae6ec72.js";const z=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...P({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},"VDialog"),k=h()({name:"VDialog",props:z(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=S(a,"modelValue"),{scopeId:V}=N(),o=w();function i(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=T(o.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}x&&m(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),m(n,async l=>{var e,t;await F(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const b=R(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return B(()=>{const[l]=f.filterProps(a);return g(f,v({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(I,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),y({},o)}});export{k as V};
