import{d as I,r as p,cX as b,cY as _,w as R,cZ as S,o as l,c,e as s,p as i,b as o,f as t,a9 as j,x as h,a4 as v,F as z,j as Z,a as N,h as A,a$ as x,y as g,aR as D,aS as E}from"./index-75b434bc.js";import{V as O}from"./VRow-d6f20668.js";import{V as T}from"./VCol-35b3d337.js";import{V as $,c as K}from"./VCard-95c0d706.js";import{V as L}from"./VCardText-76f31582.js";import{V as U}from"./VImg-ba4b392a.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./transition-6afda34e.js";import"./index-97808f23.js";const V=n=>(D("data-v-c603d263"),n=n(),E(),n),Y={class:""},q={class:"w-full h-auto relative"},F={key:0,class:"d-flex flex-column justify-center align-center gap-y-2 pa-12 drop-zone rounded"},G=V(()=>s("h4",{class:"text-h4"}," Drag and drop your file here. ",-1)),H=V(()=>s("span",{class:"text-disabled"},"or",-1)),J={key:1,class:"d-flex justify-center align-center gap-3 pa-8 drop-zone flex-wrap"},P={class:"mt-2"},Q={class:"clamp-text text-wrap"},W=I({__name:"anchor-manual",props:{anchorManual:{},manuals:{}},emits:["update:anchorManual"],setup(n,{emit:w}){const u=n,y=w,f=p(),r=p(u.anchorManual);p(u.anchorManual);const{open:k,onChange:C}=b({multiple:!1});function B(e){e==null||e.forEach(a=>{if(a.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}r.value.push({file:a,url:_(a).value??""})})}return C(e=>{if(e)for(const a of e)r.value.push({file:a,url:_(a).value??""})}),R(()=>u.anchorManual,e=>y("update:anchorManual",e)),S(f,B),(e,a)=>{const M=N("IconBtn");return l(),c("div",Y,[s("div",q,[s("div",{ref_key:"dropZoneRef",ref:f,class:"cursor-pointer",onClick:a[1]||(a[1]=()=>i(k)())},[i(r).length===0?(l(),c("div",F,[o(M,{variant:"tonal",class:"rounded-sm"},{default:t(()=>[o(j,{icon:"tabler-upload"})]),_:1}),G,H,o(v,{variant:"tonal",size:"small"},{default:t(()=>[h(" Browse Files ")]),_:1})])):(l(),c("div",J,[o(O,{class:"match-height w-100"},{default:t(()=>[(l(!0),c(z,null,Z(i(r),(d,m)=>(l(),A(T,{key:m,cols:"12",sm:"12"},{default:t(()=>[o($,{ripple:!1,border:""},{default:t(()=>[o(L,{class:"d-flex flex-column",onClick:a[0]||(a[0]=x(()=>{},["stop"]))},{default:t(()=>[o(U,{src:d.url,width:"200px",height:"150px",class:"w-100 mx-auto"},null,8,["src"]),s("div",P,[s("span",Q,g(d.file.name),1),s("span",null,g(d.file.size/1e3)+" KB ",1)])]),_:2},1024),o(K,null,{default:t(()=>[o(v,{variant:"text",block:"",onClick:x(aa=>i(r).splice(m,1),["stop"])},{default:t(()=>[h(" Remove File ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))],512)])])}}});const fa=X(W,[["__scopeId","data-v-c603d263"]]);export{fa as default};