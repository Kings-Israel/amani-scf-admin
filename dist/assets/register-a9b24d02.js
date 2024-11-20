import{r as u,e as k}from"./validators-db74a876.js";import{d as x,r as p,o as w,h as C,f as t,b as e,e as r,p as a,J as I,a$ as R,a4 as q,x as c,a as B}from"./index-75b434bc.js";import{_ as L}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as M}from"./AuthProvider.vue_vue_type_script_setup_true_lang-2ee8a9b3.js";import{V as P}from"./VNodeRenderer-4fd8aaef.js";import{a as U,b as j,c as D,d as N}from"./auth-v2-register-illustration-light-3df11b14.js";import{a as T,b as $}from"./misc-mask-light-1aeffaee.js";import{u as f}from"./useGenerateImageVariant-5ebe84de.js";import{V}from"./VImg-ba4b392a.js";import{V as n}from"./VCol-35b3d337.js";import{V as A}from"./VCard-95c0d706.js";import{V as _}from"./VCardText-76f31582.js";import{V as S}from"./VForm-e46f5921.js";import{V as h}from"./VRow-d6f20668.js";import{V as F}from"./VCheckbox-e2d8e1ba.js";import{V as J}from"./form-2b416184.js";import{V as g}from"./VDivider-fc890531.js";import"./helpers-681711bc.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";/* empty css              */import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";const E={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},G={class:"d-flex align-center justify-center w-100 h-100"},z=r("h5",{class:"text-h5 mb-1"}," Adventure starts here 🚀 ",-1),H=r("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),K={class:"d-flex align-center mt-2 mb-4"},O=r("span",{class:"me-1"},"I agree to",-1),Q=r("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),W=r("span",null,"Already have an account?",-1),X=r("span",{class:"mx-4"},"or",-1),Me=x({__name:"register",setup(Y){const y=f(N,D,j,U,!0),b=f($,T),s=p({username:"",email:"",password:"",privacyPolicies:!1}),m=p(!1);return(l,o)=>{const d=L,v=B("RouterLink");return w(),C(h,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[e(n,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[r("div",E,[r("div",G,[e(V,{"max-width":"441",src:a(y),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(V,{class:"auth-footer-mask",src:a(b)},null,8,["src"])])]),_:1}),e(n,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[e(A,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(_,null,{default:t(()=>[e(a(P),{nodes:a(I).app.logo,class:"mb-6"},null,8,["nodes"]),z,H]),_:1}),e(_,null,{default:t(()=>[e(a(S),{onSubmit:R(()=>{},["prevent"])},{default:t(()=>[e(h,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(s).username,"onUpdate:modelValue":o[0]||(o[0]=i=>a(s).username=i),rules:["requiredValidator"in l?l.requiredValidator:a(u)],autofocus:"",label:"Username",placeholder:"Johndoe"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=i=>a(s).email=i),rules:["requiredValidator"in l?l.requiredValidator:a(u),"emailValidator"in l?l.emailValidator:a(k)],label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=i=>a(s).password=i),rules:["requiredValidator"in l?l.requiredValidator:a(u)],label:"Password",placeholder:"············",type:a(m)?"text":"password","append-inner-icon":a(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=i=>m.value=!a(m))},null,8,["modelValue","rules","type","append-inner-icon"]),r("div",K,[e(F,{id:"privacy-policy",modelValue:a(s).privacyPolicies,"onUpdate:modelValue":o[4]||(o[4]=i=>a(s).privacyPolicies=i),inline:""},null,8,["modelValue"]),e(J,{for:"privacy-policy",style:{opacity:"1"}},{default:t(()=>[O,Q]),_:1})]),e(q,{block:"",type:"submit"},{default:t(()=>[c(" Sign up ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[W,e(v,{class:"text-primary ms-2",to:{name:"login"}},{default:t(()=>[c(" Sign in instead ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(g),X,e(g)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Me as default};
