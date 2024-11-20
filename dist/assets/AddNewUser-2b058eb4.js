import{_ as Q}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as Y}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as Z}from"./AppStepper.vue_vue_type_style_index_0_lang-c08c6f80.js";import{i as R}from"./index-4532b75c.js";import{d as ee,l as le,r as n,b6 as oe,R as k,w as ae,ck as te,o as c,c as N,b as l,f as o,x as g,y as re,p as r,aI as b,z as se,F as U,j as me,e as ne,a4 as ue,aM as ce,h as _,A}from"./index-75b434bc.js";import{u as pe}from"./useApi-776c55ea.js";import{c as de}from"./createUrl-149317bf.js";import{r as u,e as ie}from"./validators-db74a876.js";import{$ as x}from"./api-0c1dfdf3.js";import{V as T}from"./VSnackbar-f21966b4.js";import{V as E}from"./VRow-d6f20668.js";import{V as p}from"./VCol-35b3d337.js";import{V as M}from"./VCardText-76f31582.js";import{V as ye}from"./VForm-e46f5921.js";import{V as be,a as Ve}from"./VWindowItem-04415d19.js";import{V as he}from"./VCard-95c0d706.js";import"./form-2b416184.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VSelect-54e8b29a.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./VChip-e2ddd660.js";import"./VSlideGroup-3e745b05.js";import"./VSlideGroupItem-95742265.js";import"./index-2898f57d.js";import"./helpers-681711bc.js";/* empty css              */const fe={class:"d-flex justify-center mt-6"},dl=ee({__name:"AddNewUser",async setup(ke){let v,S;const B=a=>/^\+(\d{1,3})(\d{9,15})$/.test(a)?!0:"Please enter a valid phone number with the country code (e.g., +2547XXXXXXXX)",D=[{title:"User Details",icon:"tabler-building",subtitle:"Setup account details"}],$=le(),X=n([]),F=n([]),d=n(0),V=n("CRM"),i=n("Dealer"),I={module:"CRM",category:"",role:"",firstName:"",lastName:"",email:"",contactNumber:"",countryCode:"+254"},s=n(structuredClone(I)),{data:z,execute:L}=([v,S]=oe(()=>pe(de("/admin/get/UI/user/roles",{query:{module:V,roleType:i}}))),v=await v,S(),v),j=k(()=>z.value),q=[{key:"firstName",show:!0,type:"text",model:"firstName",label:"First Name",placeholder:"Enter First Name",rules:[u]},{key:"lastName",type:"text",model:"lastName",label:"Last Name",placeholder:"Enter Last Name",rules:[u]},{key:"email",show:!0,type:"email",model:"email",label:"Email",placeholder:"Enter Email",rules:[u,ie]},{key:"contactNumber",type:"text",show:!0,model:"contactNumber",label:"Contact No.",placeholder:"+2547XXXXXXXX",rules:[u,B]}],O=[{key:"typeOfModule",type:"select",show:!1,model:"selectedModule",label:"Module",placeholder:"Module",items:["Bank","CRM","Admin"],rules:[u]}],P=k(()=>[{key:"bank",type:"select",show:!0,model:"bank",label:"Bank",placeholder:"Select Bank",items:X.value,rules:[u]}]),W=k(()=>[{key:"roles",type:"select",show:!0,model:"role",label:"Role",placeholder:"Role",items:j.value,rules:[u]}]),G=k(()=>[{key:"company",type:"select",model:"company",label:"Companies",placeholder:"Select Company",items:F.value,rules:[u]},{key:"roleTypes",type:"select",show:!1,value:i,model:i,label:"Different Role Types",placeholder:"Role Types",rules:[u],items:["Dealer","Vendor","Anchor"]}]);ae(V,a=>{s.value.module=a}),te(async()=>{X.value=await x("/get/banks/names"),F.value=await x("/company/names")});const w=n(!1),C=n(!1),H=k(()=>{let a=[...O];return s.value.module==="Bank"?a=a.concat(P.value):s.value.module==="Company"&&(a=a.concat(G.value)),a=a.concat(W.value),a.concat(q)}),J=n(""),K=async()=>{try{const a=await x("/auth/UI/add/user",{method:"POST",body:s.value,onResponseError({response:y}){var f;const h=((f=y==null?void 0:y.data)==null?void 0:f.message)||"An error occurred while adding the user";console.log("Error",y),R.error(h,{position:"top-right",autoClose:3e3})}}),{message:t}=a;t&&R.success(t,{position:"top-right",autoClose:3e3}),await ce(()=>{$.push("/users/list")})}catch(a){console.error(a)}};return L(),(a,t)=>{const y=Z,h=Y,f=Q;return c(),N(U,null,[l(T,{modelValue:r(C),"onUpdate:modelValue":t[0]||(t[0]=e=>b(C)?C.value=e:null),color:"error",location:"top end",variant:"flat"},{default:o(()=>[g(re(r(J)),1)]),_:1},8,["modelValue"]),l(T,{modelValue:r(w),"onUpdate:modelValue":t[1]||(t[1]=e=>b(w)?w.value=e:null),color:"success",location:"top end",variant:"flat"},{default:o(()=>[g(" User Created Successfully ")]),_:1},8,["modelValue"]),l(he,{class:"pa-6"},{default:o(()=>[l(E,null,{default:o(()=>[l(p,{class:se(a.$vuetify.display.smAndDown?"border-b":"border-e"),cols:"12",md:"4"},{default:o(()=>[l(M,null,{default:o(()=>[l(y,{"current-step":r(d),"onUpdate:currentStep":t[2]||(t[2]=e=>b(d)?d.value=e:null),items:D,class:"stepper-icon-step-bg",direction:"vertical","icon-size":"24"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),l(p,{cols:"12",md:"8"},{default:o(()=>[l(M,null,{default:o(()=>[l(ye,null,{default:o(()=>[l(be,{modelValue:r(d),"onUpdate:modelValue":t[5]||(t[5]=e=>b(d)?d.value=e:null),class:"disable-tab-transition"},{default:o(()=>[l(Ve,null,{default:o(()=>[l(E,null,{default:o(()=>[(c(!0),N(U,null,me(r(H),e=>(c(),N(U,{key:e.key},[e.type==="select"&&!e.show?(c(),_(p,{key:0,cols:"12",md:"6",class:"mb-4"},{default:o(()=>[l(h,{modelValue:r(V),"onUpdate:modelValue":t[3]||(t[3]=m=>b(V)?V.value=m:null),items:e.items,label:e.label,placeholder:e.placeholder,rules:e.rules},null,8,["modelValue","items","label","placeholder","rules"])]),_:2},1024)):A("",!0),e.type==="select"&&e.key==="roleTypes"&&!e.show?(c(),_(p,{key:1,cols:"12",md:"6",class:"mb-4"},{default:o(()=>[l(h,{modelValue:r(i),"onUpdate:modelValue":t[4]||(t[4]=m=>b(i)?i.value=m:null),items:e.items,label:e.label,placeholder:e.placeholder,rules:e.rules},null,8,["modelValue","items","label","placeholder","rules"])]),_:2},1024)):e.type==="select"&&e.show?(c(),_(p,{key:2,cols:"12",md:"6",class:"mb-4"},{default:o(()=>[l(h,{modelValue:r(s)[e.model],"onUpdate:modelValue":m=>r(s)[e.model]=m,items:e.items,label:e.label,placeholder:e.placeholder,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","items","label","placeholder","rules"])]),_:2},1024)):e.type==="text"?(c(),_(p,{key:3,cols:"12",md:"6",class:"mb-4"},{default:o(()=>[l(f,{modelValue:r(s)[e.model],"onUpdate:modelValue":m=>r(s)[e.model]=m,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024)):e.type==="email"?(c(),_(p,{key:4,cols:"12",md:"6",class:"mb-4"},{default:o(()=>[l(f,{modelValue:r(s)[e.model],"onUpdate:modelValue":m=>r(s)[e.model]=m,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024)):A("",!0)],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),ne("div",fe,[l(ue,{"append-icon":"tabler-check",color:"primary",onClick:K,class:"px-6 py-3",elevation:"2"},{default:o(()=>[g(" Submit ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{dl as default};
