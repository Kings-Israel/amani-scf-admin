import{N as x,O as y,ah as T,aj as V,X as k,b as t,ab as H,ad as I,ag as E,ai as w,al as D,am as $,an as j,ap as F,as as O,ak as Q,av as U,Q as X,R as h,aw as q,bx as u,V as o,bp as z}from"./index-75b434bc.js";import{V as A}from"./VImg-ba4b392a.js";const G=x({text:String,...y(),...T()},"VToolbarTitle"),J=V()({name:"VToolbarTitle",props:G(),setup(e,n){let{slots:a}=n;return k(()=>{const s=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),K=[null,"prominent","default","comfortable","compact"],L=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>K.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...H(),...y(),...I(),...E(),...T({tag:"header"}),...w()},"VToolbar"),Y=V()({name:"VToolbar",props:L(),setup(e,n){var c;let{slots:a}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=D($(e,"color")),{borderClasses:_}=j(e),{elevationClasses:C}=F(e),{roundedClasses:B}=O(e),{themeClasses:P}=Q(e),{rtlClasses:N}=U(),i=X(!!(e.extended||(c=a.extension)!=null&&c.call(a))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return q({VBtn:{variant:"text"}}),k(()=>{var g;const S=!!(e.title||a.title),R=!!(a.image||e.image),m=(g=a.extension)==null?void 0:g.call(a);return i.value=!!(e.extended||m),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,N.value,e.class],style:[l.value,e.style]},{default:()=>[R&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(A,{key:"image-img",cover:!0,src:e.image},null)]),t(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>{var b,v,f;return[t("div",{class:"v-toolbar__content",style:{height:o(d.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(b=a.prepend)==null?void 0:b.call(a)]),S&&t(J,{key:"title",text:e.title},{text:a.title}),(v=a.default)==null?void 0:v.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(f=a.append)==null?void 0:f.call(a)])])]}}),t(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>[t(z,null,{default:()=>[i.value&&t("div",{class:"v-toolbar__extension",style:{height:o(r.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:r}}});export{Y as V,J as a,G as b,L as m};