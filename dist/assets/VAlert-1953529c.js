import{c as L}from"./createSimpleFunctional-4b3a0a39.js";import{N as $,br as D,O as z,bC as R,ac as E,ad as F,ae as O,af as j,ag as w,ah as N,ai as p,bE as q,aj as H,au as M,R as o,ak as G,bH as J,bI as K,ao as Q,ap as U,aq as W,ar as X,as as Y,bt as Z,am as ee,bs as ae,b as t,bL as te,a9 as le,bx as d,a4 as se,t as ne}from"./index-75b434bc.js";const oe=L("v-alert-title"),re=["success","info","warning","error"],ie=$({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...R(),...E(),...F(),...O(),...j(),...w(),...N(),...p(),...q({variant:"flat"})},"VAlert"),de=H()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=M(e,"modelValue"),s=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=G(e),{colorClasses:f,colorStyles:k,variantClasses:P}=J(y),{densityClasses:V}=K(e),{dimensionStyles:C}=Q(e),{elevationClasses:g}=U(e),{locationStyles:x}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:h,textColorStyles:A}=Z(ee(e,"borderColor")),{t:B}=ae(),i=o(()=>({"aria-label":B(e.closeLabel),onClick(n){r.value=!1,m("click:close",n)}}));return()=>{const n=!!(a.prepend||s.value),I=!!(a.title||e.title),T=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",h.value],style:A.value},null),n&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!s.value,defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:s.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[I&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),T&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(se,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{de as V,oe as a};