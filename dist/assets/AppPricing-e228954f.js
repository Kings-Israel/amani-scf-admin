import{d as v,r as k,o as n,c as m,e as s,y as a,b as t,f as o,x as l,p,aI as C,a9 as g,F as u,j as y,t as S,z as w,L as h,M as b,h as L,a4 as B,aR as I,aS as U}from"./index-75b434bc.js";import{V as z}from"./form-2b416184.js";import{V as A}from"./VSwitch-84818870.js";import{V as x}from"./VChip-e2ddd660.js";import{V as T}from"./VRow-d6f20668.js";import{V as D}from"./VCol-35b3d337.js";import{V as F}from"./VCard-95c0d706.js";import{V as P}from"./VCardText-76f31582.js";import{V as M}from"./VImg-ba4b392a.js";import{V as N,a as R,b as j}from"./VList-c7d4c8b4.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const E="/admin/assets/3d-safe-box-with-golden-dollar-coins-fcbc95c7.png",Y="/admin/assets/3d-space-rocket-with-smoke-603bb4f0.png",$="/admin/assets/dollar-coins-flying-pink-piggy-bank-85567cfa.png",c=r=>(I("data-v-ce18e8cf"),r=r(),U(),r),J={class:"text-center"},W={class:"text-h2 pricing-title mb-2"},q=c(()=>s("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. ",-1)),H=c(()=>s("p",{class:"mb-2"}," Choose the best plan to fit your needs. ",-1)),K={class:"d-flex align-center justify-center mx-auto my-10"},O={class:"position-relative"},Q={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},X={class:"text-h3 mb-1 text-center"},Z={class:"mb-0 text-center"},ee={class:"position-relative"},te={class:"d-flex justify-center align-center py-8"},se=c(()=>s("sup",{class:"text-sm text-primary me-1"},"$",-1)),oe={class:"text-5xl font-weight-medium text-primary"},ae=c(()=>s("sub",{class:"text-sm text-disabled ms-1"},"/month",-1)),re=v({__name:"AppPricing",props:{title:{},xs:{},sm:{},md:{},lg:{},xl:{}},setup(r){const d=r,i=k(!0),V=[{name:"Basic",tagLine:"A simple start for everyone",logo:$,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:E,monthlyPrice:49,yearlyPrice:499,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom “Thank you” page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:Y,monthlyPrice:99,yearlyPrice:999,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(ie,f)=>(n(),m(u,null,[s("div",J,[s("h2",W,a(d.title?d.title:"Pricing Plans"),1),q,H]),s("div",K,[t(z,{for:"pricing-plan-toggle",class:"me-2"},{default:o(()=>[l(" Monthly ")]),_:1}),s("div",O,[t(A,{id:"pricing-plan-toggle",modelValue:p(i),"onUpdate:modelValue":f[0]||(f[0]=e=>C(i)?i.value=e:null),label:"Annual"},null,8,["modelValue"]),s("div",Q,[t(g,{icon:"tabler-corner-left-down",class:"flip-in-rtl mt-2"}),t(x,{label:"",color:"primary"},{default:o(()=>[l(" Save up to 10% ")]),_:1})])])]),t(T,null,{default:o(()=>[(n(),m(u,null,y(V,e=>t(D,S({key:e.logo,ref_for:!0},d,{cols:"12"}),{default:o(()=>[t(F,{flat:"",border:"",class:w(e.isPopular?"border-primary border-opacity-100":"")},{default:o(()=>[t(P,{style:{"block-size":"4.125rem"},class:"text-end"},{default:o(()=>[h(t(x,{label:"",color:"primary",size:"small"},{default:o(()=>[l(" Popular ")]),_:2},1536),[[b,e.isPopular]])]),_:2},1024),t(P,null,{default:o(()=>[t(M,{height:140,src:e.logo,class:"mx-auto mb-5"},null,8,["src"]),s("h3",X,a(e.name),1),s("p",Z,a(e.tagLine),1),s("div",ee,[s("div",te,[se,s("h1",oe,a(p(i)?Math.floor(Number(e.yearlyPrice)/12):e.monthlyPrice),1),ae]),h(s("span",{class:"annual-price-text position-absolute text-sm text-disabled"},a(e.yearlyPrice===0?"free":`USD ${e.yearlyPrice}/Year`),513),[[b,p(i)]])]),t(N,{class:"card-list mb-4"},{default:o(()=>[(n(!0),m(u,null,y(e.features,_=>(n(),L(R,{key:_},{prepend:o(()=>[t(g,{size:14,icon:"tabler-circle"})]),default:o(()=>[t(j,null,{default:o(()=>[l(a(_),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),t(B,{block:"",color:e.current?"success":"primary",variant:e.isPopular?"elevated":"tonal",to:{name:"front-pages-payment"}},{default:o(()=>[l(a(e.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}});const he=G(re,[["__scopeId","data-v-ce18e8cf"]]);export{he as _};
