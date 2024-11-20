import{R as M}from"./videojs-player.esm-4f518cee.js";import{u as P}from"./useApi-c9327355.js";import{V as U}from"./VRow-e44df108.js";import{V as L}from"./VCol-bcc5388c.js";import{a as z,b as E,d as H,V as S}from"./VCard-1a5b2c5e.js";import{V as N}from"./VChip-49676f7d.js";import{d as j,b6 as J,R as X,r as $,o as f,h as y,f as e,b as t,e as s,x as r,a9 as d,y as l,p as o,aI as q,c as B,j as D,F as A,a as G,aR as K,aS as O}from"./index-5caaa453.js";import{V as T}from"./VCardText-3b4da816.js";import{V as g}from"./VDivider-d40713ce.js";import{V as w,a as u,b as _,c as Q}from"./VList-4b1bf96e.js";import{V as W}from"./VAvatar-3ee4c690.js";import{V as Y,a as Z}from"./VExpansionPanel-1ea313c3.js";import{V as tt}from"./VCheckbox-4131d654.js";import{_ as et}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./createSimpleFunctional-9624028d.js";import"./VImg-6009f8f0.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";import"./ssrBoot-2696bccc.js";import"./lazy-9cd674a5.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./form-c9c578a3.js";import"./VInput-e87890b4.js";const v=h=>(K("data-v-b58163c1"),h=h(),O(),h),st={class:"font-weight-medium text-high-emphasis ms-1"},at={class:"d-flex gap-2 align-center"},lt={class:"px-2 pt-2"},ot=v(()=>s("h5",{class:"text-h5 mb-3"}," About this course ",-1)),it={class:"text-body-1"},nt=v(()=>s("h5",{class:"text-h5 mb-3"}," By the numbers ",-1)),rt={class:"d-flex gap-x-12 gap-y-5 flex-wrap"},dt=v(()=>s("h5",{class:"text-h5 mb-3"}," Description ",-1)),ct=["innerHTML"],ut=v(()=>s("h5",{class:"text-h5 mb-2"}," Instructor ",-1)),_t={class:"d-flex align-center"},pt={class:"text-body-1 font-weight-medium"},mt={class:"text-sm text-disabled"},ft={class:"course-content"},ht={class:"text-h5 mb-1"},bt={class:"text-medium-emphasis font-weight-normal"},xt={class:"text-disabled text-base"},vt=j({__name:"course-details",async setup(h){let b,C;const{data:R}=([b,C]=J(()=>P("/apps/academy/course-details")),b=await b,C(),b),i=X(()=>R.value),V=$(0);return(F,I)=>{const k=G("IconBtn");return f(),y(S,{class:"overflow-visible course-details"},{default:e(()=>[t(T,null,{default:e(()=>[t(U,null,{default:e(()=>[t(L,{cols:"12",md:"8"},{default:e(()=>[t(z,{class:"pa-0 mb-2"},{append:e(()=>[s("div",at,[t(N,{variant:"tonal",color:"error",label:""},{default:e(()=>[r(" UI/UX ")]),_:1}),t(k,null,{default:e(()=>[t(d,{icon:"tabler-share",size:"26"})]),_:1}),t(k,null,{default:e(()=>[t(d,{icon:"tabler-bookmarks",size:"26"})]),_:1})])]),default:e(()=>[t(E,{class:"mb-2"},{default:e(()=>{var n;return[r(l((n=o(i))==null?void 0:n.title),1)]}),_:1}),t(H,null,{default:e(()=>{var n;return[r("Prof."),s("span",st,l((n=o(i))==null?void 0:n.instructor),1)]}),_:1})]),_:1}),t(S,{flat:"",border:""},{default:e(()=>[s("div",lt,[t(o(M),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",controls:"","plays-inline":"",height:F.$vuetify.display.mdAndUp?440:250,class:"w-100 rounded"},null,8,["height"])]),t(T,null,{default:e(()=>{var n,c,m,p,x;return[ot,s("p",it,l((n=o(i))==null?void 0:n.about),1),t(g,{class:"my-6"}),nt,s("div",rt,[s("div",null,[t(w,{class:"card-list"},{default:e(()=>[t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-checks"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Skill Level: "+l((a=o(i))==null?void 0:a.skillLevel),1)]}),_:1})]),_:1}),t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-user"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Students: "+l((a=o(i))==null?void 0:a.totalStudents),1)]}),_:1})]),_:1}),t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-flag"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Languages: "+l((a=o(i))==null?void 0:a.language),1)]}),_:1})]),_:1}),t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-file-text"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Captions: "+l((a=o(i))==null?void 0:a.isCaptions),1)]}),_:1})]),_:1})]),_:1})]),s("div",null,[t(w,{class:"card-list"},{default:e(()=>[t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-pencil"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Lectures: "+l((a=o(i))==null?void 0:a.totalLectures),1)]}),_:1})]),_:1}),t(u,null,{prepend:e(()=>[t(d,{icon:"tabler-clock"})]),default:e(()=>[t(_,{class:"text-body-1"},{default:e(()=>{var a;return[r(" Video: "+l((a=o(i))==null?void 0:a.length),1)]}),_:1})]),_:1})]),_:1})])]),t(g,{class:"my-6"}),dt,s("div",{innerHTML:(c=o(i))==null?void 0:c.description},null,8,ct),t(g,{class:"my-6"}),ut,s("div",_t,[t(W,{image:(m=o(i))==null?void 0:m.instructorAvatar,size:"38",class:"me-3"},null,8,["image"]),s("div",null,[s("div",pt,l((p=o(i))==null?void 0:p.instructor),1),s("div",mt,l((x=o(i))==null?void 0:x.instructorPosition),1)])])]}),_:1})]),_:1})]),_:1}),t(L,{cols:"12",md:"4"},{default:e(()=>[s("div",ft,[t(Y,{modelValue:o(V),"onUpdate:modelValue":I[0]||(I[0]=n=>q(V)?V.value=n:null),variant:"accordion",class:"expansion-panels-width-border"},{default:e(()=>{var n;return[(f(!0),B(A,null,D((n=o(i))==null?void 0:n.content,(c,m)=>(f(),y(Z,{key:m,elevation:"0",value:m},{title:e(()=>[s("div",null,[s("h5",ht,l(c.title),1),s("div",bt,l(c.status)+" | "+l(c.time),1)])]),text:e(()=>[t(w,{class:"card-list px-2"},{default:e(()=>[(f(!0),B(A,null,D(c.topics,(p,x)=>(f(),y(u,{key:x,class:"py-4"},{prepend:e(()=>[t(tt,{class:"me-3","model-value":p.isCompleted},null,8,["model-value"])]),default:e(()=>[t(_,{class:"text-high-emphasis font-weight-medium mb-1"},{default:e(()=>[r(l(p.title),1)]),_:2},1024),t(Q,null,{default:e(()=>[s("span",xt,l(p.time),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});const $t=et(vt,[["__scopeId","data-v-b58163c1"]]);export{$t as default};
