import{V as r}from"./VSpacer-6f8dff92.js";import{d as c,o as i,c as l,e as p,y as d,b as e,B as m,f as _,a9 as f,a as B}from"./index-75b434bc.js";const u={class:"pa-6 d-flex align-center"},C={class:"text-h5"},x=c({__name:"AppDrawerHeaderSection",props:{title:{}},emits:["cancel"],setup(s){const n=s;return(t,o)=>{const a=B("IconBtn");return i(),l("div",u,[p("h5",C,d(n.title),1),e(r),m(t.$slots,"beforeClose"),e(a,{variant:"tonal",class:"rounded",size:"32",onClick:o[0]||(o[0]=V=>t.$emit("cancel"))},{default:_(()=>[e(f,{size:"18",icon:"tabler-x"})]),_:1})])}}});export{x as _};