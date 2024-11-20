import{_ as K}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as E}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{d as Q,r as f,bf as I,o as V,h as R,f as t,b as e,x as p,a$ as N,p as g,aI as D,e as s,a4 as C,a9 as k,c as F,z as w,F as M,j as q,y as J}from"./index-75b434bc.js";import{V as S,a as v,b as x,d as Z}from"./VCard-95c0d706.js";import{V as y}from"./VCardText-76f31582.js";import{V as G}from"./VForm-e46f5921.js";import{V as U}from"./VDialog-bc06d443.js";import{V as O}from"./VImg-ba4b392a.js";import{V as Y}from"./VAlert-1953529c.js";import{V as _,a as j,b as z}from"./VList-c7d4c8b4.js";const T=s("span",{class:"text-base"}," Enter your mobile phone number with country code and we will send you a verification code. ",-1),L={class:"d-flex flex-wrap justify-end gap-4"},P=Q({__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(h,{emit:b}){const i=h,n=b,l=f(structuredClone(I(i.mobileNumber))),c=()=>{l.value&&(n("submit",l.value),n("update:isDialogVisible",!1))},m=()=>{l.value=structuredClone(I(i.mobileNumber)),n("update:isDialogVisible",!1)},u=d=>{n("update:isDialogVisible",d)};return(d,r)=>{const a=E,A=K;return V(),R(U,{"max-width":"787","model-value":i.isDialogVisible,"onUpdate:modelValue":u},{default:t(()=>[e(a,{onClick:r[0]||(r[0]=B=>u(!1))}),e(S,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(v,{class:"text-start"},{default:t(()=>[e(x,{class:"text-h6 font-weight-medium mb-2"},{default:t(()=>[p(" Verify Your Mobile Number for SMS ")]),_:1}),e(Z,null,{default:t(()=>[T]),_:1})]),_:1}),e(y,{class:"pt-6"},{default:t(()=>[e(G,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(A,{modelValue:g(l),"onUpdate:modelValue":r[1]||(r[1]=B=>D(l)?l.value=B:null),name:"mobile",label:"Phone Number",placeholder:"+1 123 456 7890",type:"number",class:"mb-5"},null,8,["modelValue"]),s("div",L,[e(C,{color:"secondary",variant:"tonal",onClick:m},{default:t(()=>[p(" Cancel ")]),_:1}),e(C,{type:"submit",onClick:c},{default:t(()=>[p(" continue "),e(k,{end:"",icon:"tabler-arrow-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),X="data:image/png;base64,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",W=s("h6",{class:"text-lg font-weight-medium mb-2"}," Authenticator Apps ",-1),$=s("p",{class:"mb-6"}," Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. ",-1),ee={class:"mb-4"},te=s("span",{class:"text-lg font-weight-medium"},"ASDLKNASDA9AHS678dGhASD78AB",-1),ae=s("p",{class:"mb-0"}," If you are unable to scan the QR code, you can manually enter the secret key below. ",-1),oe={class:"d-flex justify-end flex-wrap gap-3"},le=Q({__name:"AddAuthenticatorAppDialog",props:{authCode:{},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(h,{emit:b}){const i=h,n=b,l=f(structuredClone(I(i.authCode))),c=()=>{l.value&&(n("submit",l.value),n("update:isDialogVisible",!1))},m=()=>{l.value=structuredClone(I(i.authCode)),n("update:isDialogVisible",!1)};return(u,d)=>{const r=E,a=K;return V(),R(U,{"max-width":"787","model-value":i.isDialogVisible,"onUpdate:modelValue":d[2]||(d[2]=A=>u.$emit("update:isDialogVisible",A))},{default:t(()=>[e(r,{onClick:d[0]||(d[0]=A=>u.$emit("update:isDialogVisible",!1))}),e(S,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(v,null,{default:t(()=>[e(x,{class:"text-h5 font-weight-medium text-center"},{default:t(()=>[p(" Add Authenticator App ")]),_:1})]),_:1}),e(y,{class:"pt-3"},{default:t(()=>[W,$,s("div",ee,[e(O,{width:"122",src:g(X),class:"mx-auto"},null,8,["src"])]),e(Y,{color:"light-warning",class:"text-warning"},{default:t(()=>[te,ae]),_:1}),e(G,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(a,{modelValue:g(l),"onUpdate:modelValue":d[1]||(d[1]=A=>D(l)?l.value=A:null),name:"auth-code",label:"Enter Authentication Code",placeholder:"123 456",class:"mb-4"},null,8,["modelValue"]),s("div",oe,[e(C,{color:"secondary",variant:"tonal",onClick:m},{default:t(()=>[p(" Cancel ")]),_:1}),e(C,{type:"submit",onClick:c},{default:t(()=>[p(" Continue "),e(k,{end:"",icon:"tabler-arrow-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),se=s("span",{class:"text-base"}," You also need to select a method by which the proxy authenticates to the directory serve. ",-1),ie={class:"text-xl font-weight-medium"},ne={class:"text-base mb-0"},ue={class:"d-flex gap-4 justify-center"},fe=Q({__name:"TwoFactorAuthDialog",props:{isDialogVisible:{type:Boolean,default:!1},smsCode:{default:""},authAppCode:{default:""}},emits:["update:isDialogVisible"],setup(h,{emit:b}){const i=h,n=b,l=[{icon:"tabler-settings",title:"Authenticator Apps",subtitle:"Get code from an app like Google Authenticator or Microsoft Authenticator.",method:"authApp"},{icon:"tabler-message",title:"SMS",subtitle:"We will send a code via SMS if you need to use your backup login method.",method:"sms"}],c=f(["authApp"]),m=f(!1),u=f(!1),d=()=>{c.value[0]==="authApp"&&(m.value=!0,u.value=!1,n("update:isDialogVisible",!1)),c.value[0]==="sms"&&(m.value=!1,u.value=!0,n("update:isDialogVisible",!1))};return(r,a)=>{const A=E,B=le,H=P;return V(),F(M,null,[e(U,{"max-width":"787","model-value":i.isDialogVisible,"onUpdate:modelValue":a[3]||(a[3]=o=>r.$emit("update:isDialogVisible",o))},{default:t(()=>[e(A,{onClick:a[0]||(a[0]=o=>r.$emit("update:isDialogVisible",!1))}),e(S,{class:"pa-5 pa-sm-8"},{default:t(()=>[e(v,{class:"text-center"},{default:t(()=>[e(x,{class:"text-h3 mb-3"},{default:t(()=>[p(" Select Authentication Method ")]),_:1}),e(Z,null,{default:t(()=>[se]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(_,{selected:g(c),"onUpdate:selected":a[1]||(a[1]=o=>D(c)?c.value=o:null),mandatory:"",variant:"outlined",class:w(["card-list auth-method-card",r.$vuetify.display.xs?"responsive-card":""])},{default:t(()=>[(V(),F(M,null,q(l,o=>e(j,{key:o.title,rounded:"",value:o.method,class:w(["py-5 px-6 my-6",g(c)[0]===o.method&&"text-primary"])},{prepend:t(()=>[e(k,{icon:o.icon,size:"38"},null,8,["icon"])]),default:t(()=>[e(z,{class:"mb-2"},{default:t(()=>[s("span",ie,J(o.title),1)]),_:2},1024),s("p",ne,J(o.subtitle),1)]),_:2},1032,["value","class"])),64))]),_:1},8,["selected","class"]),s("div",ue,[e(C,{onClick:d},{default:t(()=>[p(" submit ")]),_:1}),e(C,{color:"secondary",variant:"tonal",onClick:a[2]||(a[2]=o=>r.$emit("update:isDialogVisible",!1))},{default:t(()=>[p(" Close ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"]),e(B,{isDialogVisible:g(m),"onUpdate:isDialogVisible":a[4]||(a[4]=o=>D(m)?m.value=o:null),"auth-code":i.authAppCode},null,8,["isDialogVisible","auth-code"]),e(H,{isDialogVisible:g(u),"onUpdate:isDialogVisible":a[5]||(a[5]=o=>D(u)?u.value=o:null),"mobile-number":i.smsCode},null,8,["isDialogVisible","mobile-number"])],64)}}});export{fe as _};