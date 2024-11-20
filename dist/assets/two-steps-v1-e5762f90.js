import{d as b,l as y,r as p,o as v,c as x,e as o,b as e,p as t,aN as m,f as s,J as u,x as c,y as g,a$ as w,aI as T,a4 as C}from"./index-5caaa453.js";import{a as S,b as k}from"./auth-v1-top-shape-c5f58476.js";import{V as r}from"./VNodeRenderer-f316f6d8.js";import{a as B,b as N,V as R}from"./VCard-1a5b2c5e.js";import{V as f}from"./VCardText-3b4da816.js";import{V as I}from"./VForm-ed4803d2.js";import{V as j}from"./VRow-e44df108.js";import{V as n}from"./VCol-bcc5388c.js";import{V as M}from"./VOtpInput-260f2df2.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";import"./form-c9c578a3.js";import"./forwardRefs-8348545e.js";/* empty css              */import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";const D={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},F={class:"d-flex"},H=o("h4",{class:"text-h4 mb-1"}," Two Step Verification 💬 ",-1),L=o("p",{class:"mb-2"}," We sent a verification code to your mobile. Enter the code from the mobile in the field below. ",-1),O=o("h6",{class:"text-base font-weight-medium"}," ******1234 ",-1),z=o("h6",{class:"text-base font-weight-medium mt-3"}," Type your 6 digit security code ",-1),J=o("div",{class:"d-flex justify-center align-center flex-wrap"},[o("span",{class:"me-1"},"Didn't get the code?"),o("a",{href:"#"},"Resend")],-1),me=b({__name:"two-steps-v1",setup(U){const h=y(),l=p(""),a=p(!1),_=()=>{a.value=!0,setTimeout(()=>{a.value=!1,h.push("/")},2e3)};return(i,d)=>(v(),x("div",D,[o("div",E,[e(t(r),{nodes:("h"in i?i.h:t(m))("div",{innerHTML:t(S)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(r),{nodes:("h"in i?i.h:t(m))("div",{innerHTML:t(k)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(R,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[e(B,{class:"justify-center"},{prepend:s(()=>[o("div",F,[e(t(r),{nodes:t(u).app.logo},null,8,["nodes"])])]),default:s(()=>[e(N,{class:"font-weight-bold text-capitalize text-h3 py-1"},{default:s(()=>[c(g(t(u).app.title),1)]),_:1})]),_:1}),e(f,{class:"pt-2"},{default:s(()=>[H,L,O,z]),_:1}),e(f,null,{default:s(()=>[e(I,{onSubmit:w(()=>{},["prevent"])},{default:s(()=>[e(j,null,{default:s(()=>[e(n,{cols:"12"},{default:s(()=>[e(t(M),{modelValue:t(l),"onUpdate:modelValue":d[0]||(d[0]=V=>T(l)?l.value=V:null),disabled:t(a),type:"number",class:"pa-0",onFinish:_},null,8,["modelValue","disabled"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(C,{loading:t(a),disabled:t(a),block:"",type:"submit"},{default:s(()=>[c(" Verify my account ")]),_:1},8,["loading","disabled"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[J]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]))}});export{me as default};