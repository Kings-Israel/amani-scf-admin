import{d as g,l as b,r as n,o as w,h as x,f as e,b as t,e as a,p as s,J as v,a$ as k,aI as y,a4 as I,x as C}from"./index-5caaa453.js";import{u as d}from"./useGenerateImageVariant-65226aac.js";import{a as T,b as R}from"./misc-mask-light-1aeffaee.js";import{V as B}from"./VNodeRenderer-f316f6d8.js";import{V as m}from"./VImg-6009f8f0.js";import{V as r}from"./VCol-bcc5388c.js";import{V as F}from"./VCard-1a5b2c5e.js";import{V as u}from"./VCardText-3b4da816.js";import{V as M}from"./VForm-ed4803d2.js";import{V as c}from"./VRow-e44df108.js";import{V as N}from"./VOtpInput-260f2df2.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";/* empty css              */import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./form-c9c578a3.js";import"./forwardRefs-8348545e.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";const j="/admin/assets/auth-v2-two-step-illustration-dark-c056383e.png",D="/admin/assets/auth-v2-two-step-illustration-light-c8305610.png",S={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},L={class:"d-flex align-center justify-center w-100 h-100"},O=a("h4",{class:"text-h4 mb-1"}," Two Step Verification 💬 ",-1),P=a("p",{class:"mb-2"}," We sent a verification code to your mobile. Enter the code from the mobile in the field below. ",-1),E=a("h6",{class:"text-base font-weight-medium"}," ******1234 ",-1),G=a("div",{class:"d-flex justify-center align-center flex-wrap"},[a("span",{class:"me-1"},"Didn't get the code?"),a("a",{href:"#"},"Resend")],-1),ct=g({__name:"two-steps-v2",setup(J){const p=d(D,j),f=d(R,T),h=b(),l=n(""),o=n(!1),_=()=>{o.value=!0,setTimeout(()=>{o.value=!1,h.push("/")},2e3)};return(U,i)=>(w(),x(c,{class:"auth-wrapper bg-surface","no-gutters":""},{default:e(()=>[t(r,{md:"8",class:"d-none d-md-flex"},{default:e(()=>[a("div",S,[a("div",L,[t(m,{"max-width":"418",src:s(p),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),t(m,{class:"auth-footer-mask",src:s(f)},null,8,["src"])])]),_:1}),t(r,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:e(()=>[t(F,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:e(()=>[t(u,null,{default:e(()=>[t(s(B),{nodes:s(v).app.logo,class:"mb-6"},null,8,["nodes"]),O,P,E]),_:1}),t(u,null,{default:e(()=>[t(M,{onSubmit:k(()=>{},["prevent"])},{default:e(()=>[t(c,null,{default:e(()=>[t(r,{cols:"12"},{default:e(()=>[t(s(N),{modelValue:s(l),"onUpdate:modelValue":i[0]||(i[0]=V=>y(l)?l.value=V:null),disabled:s(o),type:"number",class:"pa-0",onFinish:_},null,8,["modelValue","disabled"])]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(I,{block:"",loading:s(o),disabled:s(o),type:"submit"},{default:e(()=>[C(" Verify my account ")]),_:1},8,["loading","disabled"])]),_:1}),t(r,{cols:"12"},{default:e(()=>[G]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{ct as default};