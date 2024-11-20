import{d as A,l as J,k as L,r,I as G,dj as W,R as z,o as _,h as H,f as t,b as e,e as n,p as i,J as K,y as x,a$ as I,a4 as Q,x as X,c as O,b4 as y,aM as Y}from"./index-75b434bc.js";import{u as P}from"./useGenerateImageVariant-5ebe84de.js";import{a as Z,b as ee}from"./auth-v2-two-step-illustration-light-0160fe1c.js";import{a as te,b as ae}from"./misc-mask-light-1aeffaee.js";import{V as se}from"./VNodeRenderer-4fd8aaef.js";import{i as d}from"./index-4532b75c.js";import{u as oe}from"./useAbility-967bc35e.js";import{$ as S}from"./api-0c1dfdf3.js";import{V as C}from"./VImg-ba4b392a.js";import{V as c}from"./VCol-35b3d337.js";import{V as re}from"./VCard-95c0d706.js";import{V as M}from"./VCardText-76f31582.js";import{V as le}from"./VForm-e46f5921.js";import{V as R}from"./VRow-d6f20668.js";import{V as ie}from"./VOtpInput-b83ab4ec.js";import"./index-2898f57d.js";import"./transition-6afda34e.js";import"./index-97808f23.js";/* empty css              */import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./form-2b416184.js";import"./forwardRefs-8348545e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";const ne={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},ue={class:"d-flex align-center justify-center w-100 h-100"},ce=n("h4",{class:"text-h4 mb-1"},"Two Step Verification 💬",-1),me={class:"mb-2"},de={class:"d-flex justify-center align-center flex-wrap"},pe=n("span",{class:"me-1"},"Didn't get the code?",-1),fe={key:0},Le=A({__name:"two-steps",setup(he){const F=P(ee,Z),D=P(ae,te),V=J(),p=L(),$=oe();r("");const u=r(!1),B=r({otp:void 0}),g=r(),o=r({email:p.query.email||"",otp:""}),E=r(null);o.value.email||V.push("/");const b=async()=>{u.value=!0;try{const a=await S("/admin/auth/UI/verify",{method:"POST",body:{email:o.value.email,otp:o.value.otp},onResponseError({response:m}){var k,T;B.value=m._data.errors;const q=((T=(k=m._data.errors)==null?void 0:k.otp)==null?void 0:T[0])||"Invalid OTP, please try again.";d.error(q)}}),{accessToken:s,userData:h,permissions:v}=a;y("yofAbilities").value=v,localStorage.setItem("permissions",JSON.stringify(v)),y("userData").value=h,y("adminAccessToken").value=s,$.update(v),d.success("OTP Verified! Redirecting ..."),await new Promise(m=>setTimeout(m,3e3)),V.replace(p.query.to?String(p.query.to):"/"),await Y()}catch(a){console.error(a)}finally{u.value=!1}},N=()=>{var a;(a=g.value)==null||a.validate().then(({valid:s})=>{s&&b()})},l=r(120);let f;const w=()=>{l.value=120,f=setInterval(()=>{l.value>0?l.value--:clearInterval(f)},1e3)},j=async()=>{try{await S("/crm/auth/UI/resend-otp",{method:"POST",body:{email:o.value.email}}),E.value="OTP has been resent to your email.",d.success("OTP resent successfully."),w()}catch(a){console.error("Error resending OTP:",a),d.error("Failed to resend OTP, please try again.")}};G(()=>{w()}),W(()=>{clearInterval(f)});const U=z(()=>{const a=Math.floor(l.value/60),s=l.value%60;return`${a}:${s<10?"0":""}${s}`});return(a,s)=>(_(),H(R,{class:"auth-wrapper bg-surface","no-gutters":""},{default:t(()=>[e(c,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[n("div",ne,[n("div",ue,[e(C,{"max-width":"418",src:i(F),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(C,{class:"auth-footer-mask",src:i(D)},null,8,["src"])])]),_:1}),e(c,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(re,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(M,null,{default:t(()=>[e(i(se),{nodes:i(K).app.logo,class:"mb-6"},null,8,["nodes"]),ce,n("p",me," We sent a verification code to "+x(o.value.email)+". Enter the code from the email in the field below. ",1)]),_:1}),e(M,null,{default:t(()=>[e(i(le),{ref_key:"refVForm",ref:g,onSubmit:I(N,["prevent"])},{default:t(()=>[e(R,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(i(ie),{modelValue:o.value.otp,"onUpdate:modelValue":s[0]||(s[0]=h=>o.value.otp=h),disabled:u.value,type:"number",class:"pa-0",onFinish:b},null,8,["modelValue","disabled"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(Q,{block:"",loading:u.value,disabled:u.value,type:"submit"},{default:t(()=>[X(" Verify my account ")]),_:1},8,["loading","disabled"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[n("div",de,[pe,l.value>0?(_(),O("span",fe,x(U.value),1)):(_(),O("a",{key:1,href:"#",onClick:I(j,["prevent"])},"Resend"))])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Le as default};
