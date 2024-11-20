import{d as I,r as u,cX as R,cY as m,w as S,cZ as j,o as n,c as i,e as o,p as c,b as a,f as s,a9 as z,x as h,a4 as x,F as M,j as U,a as Z,h as N,a$ as v,y as g,aR as D,aS as E}from"./index-5caaa453.js";import{V as O}from"./VRow-e44df108.js";import{V as T}from"./VCol-bcc5388c.js";import{V as $,c as A}from"./VCard-1a5b2c5e.js";import{V as K}from"./VCardText-3b4da816.js";import{V as L}from"./VImg-6009f8f0.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";const V=l=>(D("data-v-1bebed15"),l=l(),E(),l),Y={class:""},q={class:"w-full h-auto relative"},F={key:0,class:"d-flex flex-column justify-center align-center gap-y-2 pa-12 drop-zone rounded"},G=V(()=>o("h4",{class:"text-h4 text-center"}," Drag and drop your files here ",-1)),H=V(()=>o("span",{class:"text-disabled"},"or",-1)),J={key:1,class:"d-flex justify-center align-center gap-3 pa-8 drop-zone flex-wrap"},P={class:"mt-2"},Q={class:"clamp-text text-wrap"},W=I({__name:"UserManuals",props:{file:{},title:{}},emits:["update:file"],setup(l,{emit:w}){const d=l,y=w,f=u(),r=u(d.file);u(d.file);const{open:b,onChange:k}=R({multiple:!0});function C(t){t==null||t.forEach(e=>{if(e.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}r.value.push({file:e,url:m(e).value??""})})}return k(t=>{if(t)for(const e of t)r.value.push({file:e,url:m(e).value??""})}),S(()=>d.file,t=>y("update:file",t)),j(f,C),(t,e)=>{const B=Z("IconBtn");return n(),i("div",Y,[o("div",q,[o("div",{ref_key:"dropZoneRef",ref:f,class:"cursor-pointer",onClick:e[1]||(e[1]=()=>c(b)())},[c(r).length===0?(n(),i("div",F,[a(B,{variant:"tonal",class:"rounded-sm"},{default:s(()=>[a(z,{icon:"tabler-upload"})]),_:1}),G,H,a(x,{variant:"tonal",size:"small"},{default:s(()=>[h(" Browse Files ")]),_:1})])):(n(),i("div",J,[a(O,{class:"match-height w-100"},{default:s(()=>[(n(!0),i(M,null,U(c(r),(p,_)=>(n(),N(T,{key:_,cols:"12",sm:"4"},{default:s(()=>[a($,{ripple:!1,border:""},{default:s(()=>[a(K,{class:"d-flex flex-column",onClick:e[0]||(e[0]=v(()=>{},["stop"]))},{default:s(()=>[a(L,{src:p.url,width:"200px",height:"150px",class:"w-100 mx-auto"},null,8,["src"]),o("div",P,[o("span",Q,g(p.file.name),1),o("span",null,g(p.file.size/1e3)+" KB ",1)])]),_:2},1024),a(A,null,{default:s(()=>[a(x,{variant:"text",block:"",onClick:v(ee=>c(r).splice(_,1),["stop"])},{default:s(()=>[h(" Remove File ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))],512)])])}}});const fe=X(W,[["__scopeId","data-v-1bebed15"]]);export{fe as default};
