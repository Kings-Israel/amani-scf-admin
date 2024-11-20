import{d as B,r as g,R as D,a as Y,o as d,h as m,f as o,p as v,c as z,b as e,cT as w,cU as U,e as t,B as R,a9 as u,K as E,A as h,x as l,y as V,bp as A,L as O,M as P,aI as I,b7 as j,j as F,F as K}from"./index-5caaa453.js";import{V as M,a as q,b as G}from"./VCard-1a5b2c5e.js";import{a as H}from"./VOverlay-da001e16.js";import{V as p}from"./VCardText-3b4da816.js";import{V as J}from"./VTable-f9bab7db.js";import{V as f}from"./VCol-bcc5388c.js";import{V as Q}from"./VChip-49676f7d.js";import{V as W}from"./VRow-e44df108.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";import"./easing-9f15041e.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";/* empty css              */const X={key:0},Z={class:"v-card-content"},x=B({inheritAttrs:!1,__name:"AppCardActions",props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapsed:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1},loading:{type:Boolean,default:void 0},title:{default:void 0}},emits:["collapsed","refresh","trash","initialLoad","update:loading"],setup(b,{emit:C}){const s=b,r=C,_=g(!1),c=D({get(){return s.loading!==void 0?s.loading:_.value},set(a){s.loading!==void 0?r("update:loading",a):_.value=a}}),n=g(s.collapsed),i=g(!1),T=()=>{c.value=!1},$=()=>{n.value=!n.value,r("collapsed",n.value)},L=()=>{c.value=!0,r("refresh",T)},N=()=>{i.value=!0,r("trash")};return(a,k)=>{const y=Y("IconBtn");return d(),m(A,null,{default:o(()=>[v(i)?h("",!0):(d(),z("div",X,[e(M,w(U(a.$attrs)),{default:o(()=>[e(q,null,{append:o(()=>[t("div",null,[R(a.$slots,"before-actions"),(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(d(),m(y,{key:0,onClick:$},{default:o(()=>[e(u,{size:"20",icon:"tabler-chevron-up",style:E([{transform:v(n)?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):h("",!0),(!(a.actionRemove||a.actionCollapsed)||a.actionRefresh)&&!a.noActions?(d(),m(y,{key:1,onClick:L},{default:o(()=>[e(u,{size:"20",icon:"tabler-refresh"})]),_:1})):h("",!0),(!(a.actionRefresh||a.actionCollapsed)||a.actionRemove)&&!a.noActions?(d(),m(y,{key:2,onClick:N},{default:o(()=>[e(u,{size:"20",icon:"tabler-x"})]),_:1})):h("",!0)])]),default:o(()=>[s.title||a.$slots.title?(d(),m(G,{key:0},{default:o(()=>[R(a.$slots,"title",{},()=>[l(V(s.title),1)])]),_:3})):h("",!0)]),_:3}),e(A,null,{default:o(()=>[O(t("div",Z,[R(a.$slots,"default")],512),[[P,!v(n)]])]),_:3}),e(H,{modelValue:v(c),"onUpdate:modelValue":k[0]||(k[0]=S=>I(c)?c.value=S:null),contained:"",persistent:"","scroll-strategy":"none",class:"align-center justify-center"},{default:o(()=>[e(j,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}});const ee=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ACTION "),t("th",{scope:"col"}," ICON "),t("th",{scope:"col"}," DETAILS ")])],-1),oe=t("p",null,[l("You can specifically add Initial Load action using "),t("code",null,"loading"),l(" prop")],-1),te=t("span",null,"Refresh the page to see it again in action.",-1),ae=t("p",null,[l("You can specifically add collapsible action using "),t("code",null,"actionCollapse"),l(" prop")],-1),le=t("p",null,[l("You can specifically add refresh action using "),t("code",null,"actionRefresh"),l(" prop")],-1),ne=t("p",null,[l("You can specifically add remove action using "),t("code",null,"actionRemove"),l(" prop")],-1),se=t("p",null,[t("code",null,"app-card-actions"),l(" also provides "),t("code",null,"before-actions"),l(" and "),t("code",null,"after-actions"),l(" slot")],-1),ie=t("span",null,"You can find more details in our documentation",-1),Ae=B({__name:"card-actions",setup(b){const C=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],s=g(!0);setTimeout(()=>{s.value=!1},3e3);const r=_=>{setTimeout(_,3e3)};return(_,c)=>{const n=x;return d(),m(W,null,{default:o(()=>[e(f,{cols:"12"},{default:o(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:o(()=>[e(p,null,{default:o(()=>[e(J,null,{default:o(()=>[ee,t("tbody",null,[(d(),z(K,null,F(C,i=>t("tr",{key:i.icon},[t("td",null,V(i.action),1),t("td",null,[e(u,{size:"20",icon:i.icon},null,8,["icon"])]),t("td",null,V(i.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",md:"6"},{default:o(()=>[e(n,{loading:v(s),"onUpdate:loading":c[0]||(c[0]=i=>I(s)?s.value=i:null),title:"Initial Load","no-actions":""},{default:o(()=>[e(p,null,{default:o(()=>[oe,te]),_:1})]),_:1},8,["loading"])]),_:1}),e(f,{cols:"12",md:"6"},{default:o(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:o(()=>[e(p,null,{default:o(()=>[ae,t("span",null,[l("Click on "),e(u,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:o(()=>[e(p,null,{default:o(()=>[le,t("span",null,[l("Click on "),e(u,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Remove Card","action-remove":""},{default:o(()=>[e(p,null,{default:o(()=>[ne,t("span",null,[l("Click on "),e(u,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":o(()=>[e(Q,{class:"me-3",color:"primary",size:"small"},{default:o(()=>[l(" 3 Updates ")]),_:1})]),default:o(()=>[e(p,null,{default:o(()=>[se,ie]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ae as default};