import{_ as f}from"./MoreBtn.vue_vue_type_script_setup_true_lang-f1f446b6.js";import{u as V}from"./useApi-776c55ea.js";import{c as x}from"./createUrl-149317bf.js";import{a as h,V as C}from"./VCard-95c0d706.js";import{V as p}from"./VDivider-fc890531.js";import{V as b}from"./VCardText-76f31582.js";import{V as g,a as y,b as w,c as B}from"./VList-c7d4c8b4.js";import{d as I,b6 as L,R as k,o as i,h as n,f as t,b as e,c as v,F as D,j as P,p as N,e as s,y as m,x as l}from"./index-75b434bc.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./easing-9f15041e.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./transition-6afda34e.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-14fdab67.js";import"./index-2898f57d.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./index-97808f23.js";import"./ssrBoot-7f224ca6.js";const T=s("div",{class:"text-overline d-flex justify-space-between px-5"},[s("span",null,"Pipeline"),s("span",null,"Count")],-1),j={class:"text-body-1 text-high-emphasis"},it=I({__name:"PipelineCardCount",async setup(A){let a,r;const{data:c,execute:u}=([a,r]=L(()=>V(x("/get/UI/reports/pipeline/count"))),a=await a,r(),a),d=k(()=>c.value);return u(),(F,S)=>{const _=f;return i(),n(C,null,{default:t(()=>[e(h,{title:"Pipeline Count"},{append:t(()=>[e(_)]),_:1}),e(p),T,e(p),e(b,null,{default:t(()=>[e(g,{class:"card-list"},{default:t(()=>[(i(!0),v(D,null,P(N(d),o=>(i(),n(y,{key:o.stage},{append:t(()=>[s("span",j,m(o.count),1)]),default:t(()=>[e(w,{class:"font-weight-medium"},{default:t(()=>[l(m(o.stage),1)]),_:2},1024),e(B,{class:"text-disabled"},{default:t(()=>[l(" pipeline ")]),_:1})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}});export{it as default};