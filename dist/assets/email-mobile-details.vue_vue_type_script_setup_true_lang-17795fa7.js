import{_ as f}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as t}from"./VCol-bcc5388c.js";import{V as U}from"./VRow-e44df108.js";import{d as k,r as D,o as r,h as N,f as n,b as a,c as d,j as _,p as h,F as u,e as b}from"./index-5caaa453.js";const B=b("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),E=b("p",{class:"mb-0"}," Enter your Account Details ",-1),C=k({__name:"email-mobile-details",props:{programsdata:{},anchorDetails:{},bankUserDetails:{}},emits:["update:anchorDetails","update:bankUserDetails"],setup(V,{emit:A}){const s=V,c=s.anchorDetails,p=s.bankUserDetails;for(const o of s.programsdata.anchor_details)c.push({phone_number:o.phone_number,email:o.email});for(const o of s.programsdata.bank_user_details)p.push({name:o.name,phone_number:o.phone_number,email:o.email});return D({anchorEmailId:"",anchorMobileNo:"",bankUserName:"",bankEmail:"",bankUserMobileNo:""}),(o,M)=>{const m=f;return r(),N(U,null,{default:n(()=>[a(t,{cols:"12"},{default:n(()=>[B,E]),_:1}),(r(!0),d(u,null,_(h(c),(e,i)=>(r(),d(u,{key:i},[a(t,{cols:"12",md:"6"},{default:n(()=>[a(m,{modelValue:e.email,"onUpdate:modelValue":l=>e.email=l,placeholder:"Anchor Email ID",label:"Anchor Email ID"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12",md:"6"},{default:n(()=>[a(m,{modelValue:e.phone_number,"onUpdate:modelValue":l=>e.phone_number=l,placeholder:"Anchor Mobile No",label:"Anchor Mobile No"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128)),(r(!0),d(u,null,_(h(p),(e,i)=>(r(),d(u,{key:i},[a(t,{cols:"12",md:"6"},{default:n(()=>[a(m,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,placeholder:"Bank User Name",label:"Bank User Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12",md:"6"},{default:n(()=>[a(m,{modelValue:e.email,"onUpdate:modelValue":l=>e.email=l,placeholder:"Bank Email",label:"Bank Email"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(t,{cols:"12",md:"6"},{default:n(()=>[a(m,{modelValue:e.phone_number,"onUpdate:modelValue":l=>e.phone_number=l,placeholder:"Bank User Mobile No",label:"Bank User Mobile No"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128))]),_:1})}}});export{C as _};