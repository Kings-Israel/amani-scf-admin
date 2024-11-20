import{m as pe,V as ee}from"./VTextField-05e93cc8.js";import{N as H,O as se,aj as Y,W as re,w as Q,X as G,b as s,F as E,t as M,Q as j,R as C,r as O,ck as he,bn as ge,cw as ye,U as le,ac as Ve,bA as Se,ao as we,am as be,bW as ke,I as xe,cd as Ie,V as W,br as Pe,at as Ce,bs as Te,au as te,cc as Re,a9 as ne,bx as De,x as Be,cs as Ae,cn as ae}from"./index-75b434bc.js";import{a as _e}from"./form-2b416184.js";import{f as Le}from"./forwardRefs-8348545e.js";import{m as Fe,u as Me,V as Oe,a as oe}from"./VList-c7d4c8b4.js";import{m as Ee}from"./transition-6afda34e.js";import{V as He}from"./dialog-transition-14fdab67.js";import{V as Ue}from"./VMenu-3f143933.js";import{g as Ke}from"./VOverlay-0b79a00d.js";import{V as Ne}from"./VCheckboxBtn-0f22f589.js";import{V as ze}from"./VChip-e2ddd660.js";const $e=H({renderless:Boolean,...se()},"VVirtualScrollItem"),qe=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:$e(),emits:{"update:height":e=>!0},setup(e,m){let{attrs:l,emit:f,slots:r}=m;const{resizeRef:c,contentRect:h}=re(void 0,"border");Q(()=>{var a;return(a=h.value)==null?void 0:a.height},a=>{a!=null&&f("update:height",a)}),G(()=>{var a,o;return e.renderless?s(E,null,[(a=r.default)==null?void 0:a.call(r,{itemRef:c})]):s("div",M({ref:c,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(o=r.default)==null?void 0:o.call(r)])})}}),ue=-1,ie=1,We=H({itemHeight:{type:[Number,String],default:48}},"virtual");function je(e,m,l){const f=j(0),r=j(e.itemHeight),c=C({get:()=>parseInt(r.value??0,10),set(d){r.value=d}}),h=O(),{resizeRef:a,contentRect:o}=re();he(()=>{a.value=h.value});const y=ge(),k=new Map;let w=Array.from({length:m.value.length});const n=C(()=>{const d=(!o.value||h.value===document.documentElement?y.height.value:o.value.height)-((l==null?void 0:l.value)??0);return Math.ceil(d/c.value*1.7+1)});function p(d,v){c.value=Math.max(c.value,v),w[d]=v,k.set(m.value[d],v)}function T(d){return w.slice(0,d).reduce((v,V)=>v+(V||c.value),0)}function x(d){const v=m.value.length;let V=0,D=0;for(;D<d&&V<v;)D+=w[V++]||c.value;return V-1}let L=0;function F(){if(!h.value||!o.value)return;const d=o.value.height-56,v=h.value.scrollTop,V=v<L?ue:ie,D=x(v+d/2),_=Math.round(n.value/3),N=D-_,z=f.value+_*2-1;V===ue&&D<=z?f.value=le(N,0,m.value.length):V===ie&&D>=z&&(f.value=le(N,0,m.value.length-n.value)),L=v}function U(d){if(!h.value)return;const v=T(d);h.value.scrollTop=v}const B=C(()=>Math.min(m.value.length,f.value+n.value)),K=C(()=>m.value.slice(f.value,B.value).map((d,v)=>({raw:d,index:v+f.value}))),A=C(()=>T(f.value)),X=C(()=>T(m.value.length)-T(B.value));return Q(()=>m.value.length,()=>{w=ye(m.value.length).map(()=>c.value),k.forEach((d,v)=>{const V=m.value.indexOf(v);V===-1?k.delete(v):w[V]=d})}),{containerRef:h,computedItems:K,itemHeight:c,paddingTop:A,paddingBottom:X,scrollToIndex:U,handleScroll:F,handleItemResize:p}}const Qe=H({items:{type:Array,default:()=>[]},renderless:Boolean,...We(),...se(),...Ve()},"VVirtualScroll"),Xe=Y()({name:"VVirtualScroll",props:Qe(),setup(e,m){let{slots:l}=m;const f=Se("VVirtualScroll"),{dimensionStyles:r}=we(e),{containerRef:c,handleScroll:h,handleItemResize:a,scrollToIndex:o,paddingTop:y,paddingBottom:k,computedItems:w}=je(e,be(e,"items"));return ke(()=>e.renderless,()=>{xe(()=>{var n;c.value=Ke(f.vnode.el,!0),(n=c.value)==null||n.addEventListener("scroll",h)}),Ie(()=>{var n;(n=c.value)==null||n.removeEventListener("scroll",h)})}),G(()=>{const n=w.value.map(p=>s(qe,{key:p.index,renderless:e.renderless,"onUpdate:height":T=>a(p.index,T)},{default:T=>{var x;return(x=l.default)==null?void 0:x.call(l,{item:p.raw,index:p.index,...T})}}));return e.renderless?s(E,null,[s("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:W(y.value)}},null),n,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:W(k.value)}},null)]):s("div",{ref:c,class:["v-virtual-scroll",e.class],onScroll:h,style:[r.value,e.style]},[s("div",{class:"v-virtual-scroll__container",style:{paddingTop:W(y.value),paddingBottom:W(k.value)}},[n])])}),{scrollToIndex:o}}});function Ye(e,m){const l=j(!1);let f;function r(a){cancelAnimationFrame(f),l.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{l.value=!1})})}async function c(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(l.value){const o=Q(l,()=>{o(),a()})}else a()})}async function h(a){var k,w;if(a.key==="Tab"&&((k=m.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const o=(w=e.value)==null?void 0:w.$el;if(!o)return;(a.key==="Home"||a.key==="End")&&o.scrollTo({top:a.key==="Home"?0:o.scrollHeight,behavior:"smooth"}),await c();const y=o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const n=o.getBoundingClientRect().top;for(const p of y)if(p.getBoundingClientRect().top>=n){p.focus();break}}else{const n=o.getBoundingClientRect().bottom;for(const p of[...y].reverse())if(p.getBoundingClientRect().bottom<=n){p.focus();break}}}return{onListScroll:r,onListKeydown:h}}const Ge=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Pe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Fe({itemChildren:!1})},"Select"),Je=H({...Ge(),...Ce(pe({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Ee({transition:{component:He}})},"VSelect"),cl=Y()({name:"VSelect",props:Je(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,m){let{slots:l}=m;const{t:f}=Te(),r=O(),c=O(),h=O(),a=te(e,"menu"),o=C({get:()=>a.value,set:t=>{var u;a.value&&!t&&((u=c.value)!=null&&u.ΨopenChildren)||(a.value=t)}}),{items:y,transformIn:k,transformOut:w}=Me(e),n=te(e,"modelValue",[],t=>k(t===null?[null]:Ae(t)),t=>{const u=w(t);return e.multiple?u:u[0]??null}),p=_e(),T=C(()=>n.value.map(t=>t.value)),x=j(!1),L=C(()=>o.value?e.closeText:e.openText);let F="",U;const B=C(()=>e.hideSelected?y.value.filter(t=>!n.value.some(u=>u===t)):y.value),K=C(()=>e.hideNoData&&!y.value.length||e.readonly||(p==null?void 0:p.isReadonly.value)),A=O(),{onListScroll:X,onListKeydown:d}=Ye(A,r);function v(t){e.openOnClear&&(o.value=!0)}function V(){K.value||(o.value=!o.value)}function D(t){var i,b;if(!t.key||e.readonly||p!=null&&p.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(o.value=!0),["Escape","Tab"].includes(t.key)&&(o.value=!1),t.key==="Home"?(i=A.value)==null||i.focus("first"):t.key==="End"&&((b=A.value)==null||b.focus("last"));const u=1e3;function S(g){const R=g.key.length===1,I=!g.ctrlKey&&!g.metaKey&&!g.altKey;return R&&I}if(e.multiple||!S(t))return;const $=performance.now();$-U>u&&(F=""),F+=t.key.toLowerCase(),U=$;const q=y.value.find(g=>g.title.toLowerCase().startsWith(F));q!==void 0&&(n.value=[q])}function _(t){if(e.multiple){const u=n.value.findIndex(S=>e.valueComparator(S.value,t.value));if(u===-1)n.value=[...n.value,t];else{const S=[...n.value];S.splice(u,1),n.value=S}}else n.value=[t],o.value=!1}function N(t){var u;(u=A.value)!=null&&u.$el.contains(t.relatedTarget)||(o.value=!1)}function z(){var t;x.value&&((t=r.value)==null||t.focus())}function ce(t){x.value=!0}function de(t){if(t==null)n.value=[];else if(ae(r.value,":autofill")||ae(r.value,":-webkit-autofill")){const u=y.value.find(S=>S.title===t);u&&_(u)}else r.value&&(r.value.value="")}return Q(o,()=>{if(!e.hideSelected&&o.value&&n.value.length){const t=B.value.findIndex(u=>n.value.some(S=>e.valueComparator(S.value,u.value)));Re&&window.requestAnimationFrame(()=>{var u;t>=0&&((u=h.value)==null||u.scrollToIndex(t))})}}),G(()=>{const t=!!(e.chips||l.chip),u=!!(!e.hideNoData||B.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),S=n.value.length>0,[$]=ee.filterProps(e),q=S||!x.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(ee,M({ref:r},$,{modelValue:n.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":de,focused:x.value,"onUpdate:focused":i=>x.value=i,validationValue:n.externalValue,counterValue:n.value.length,dirty:S,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":n.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:q,"onClick:clear":v,"onMousedown:control":V,onBlur:N,onKeydown:D,"aria-label":f(L.value),title:f(L.value)}),{...l,default:()=>s(E,null,[s(Ue,M({ref:c,modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,activator:"parent",contentClass:"v-select__content",disabled:K.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:z},e.menuProps),{default:()=>[u&&s(Oe,{ref:A,selected:T.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:d,onFocusin:ce,onScrollPassive:X,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var i,b,g;return[(i=l["prepend-item"])==null?void 0:i.call(l),!B.value.length&&!e.hideNoData&&(((b=l["no-data"])==null?void 0:b.call(l))??s(oe,{title:f(e.noDataText)},null)),s(Xe,{ref:h,renderless:!0,items:B.value},{default:R=>{var Z;let{item:I,index:P,itemRef:ve}=R;const J=M(I.props,{ref:ve,key:P,onClick:()=>_(I)});return((Z=l.item)==null?void 0:Z.call(l,{item:I,index:P,props:J}))??s(oe,J,{prepend:me=>{let{isSelected:fe}=me;return s(E,null,[e.multiple&&!e.hideSelected?s(Ne,{key:I.value,modelValue:fe,ripple:!1,tabindex:"-1"},null):void 0,I.props.prependIcon&&s(ne,{icon:I.props.prependIcon},null)])}})}}),(g=l["append-item"])==null?void 0:g.call(l)]}})]}),n.value.map((i,b)=>{var I;function g(P){P.stopPropagation(),P.preventDefault(),_(i)}const R={"onClick:close":g,onMousedown(P){P.preventDefault(),P.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:i.value,class:"v-select__selection"},[t?l.chip?s(De,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>{var P;return[(P=l.chip)==null?void 0:P.call(l,{item:i,index:b,props:R})]}}):s(ze,M({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},R),null):((I=l.selection)==null?void 0:I.call(l,{item:i,index:b}))??s("span",{class:"v-select__selection-text"},[i.title,e.multiple&&b<n.value.length-1&&s("span",{class:"v-select__selection-comma"},[Be(",")])])])})]),"append-inner":function(){var R;for(var i=arguments.length,b=new Array(i),g=0;g<i;g++)b[g]=arguments[g];return s(E,null,[(R=l["append-inner"])==null?void 0:R.call(l,...b),e.menuIcon?s(ne,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Le({isFocused:x,menu:o,select:_},r)}});export{cl as V,Xe as a,Ge as m,Ye as u};
