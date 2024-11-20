import{_ as Y}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as Z}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as ee}from"./AppStepper.vue_vue_type_style_index_0_lang-ef456a65.js";import{d as le,k as oe,l as ae,r as n,b6 as C,R as h,w as te,cl as re,p as r,o as p,c as U,b as l,f as o,x,aI as f,z as se,F as M,j as me,e as ue,a4 as ne,A as $,aM as pe,h as k}from"./index-5caaa453.js";import{u as F}from"./useApi-c9327355.js";import{c as ce}from"./createUrl-3e678c2b.js";import{r as c,e as de}from"./validators-db74a876.js";import{$ as R}from"./api-44dd0fa9.js";import{V as ie}from"./VSnackbar-ea7773d7.js";import{V as B}from"./VRow-e44df108.js";import{V as b}from"./VCol-bcc5388c.js";import{V as I}from"./VCardText-3b4da816.js";import{V as ye}from"./VForm-ed4803d2.js";import{V as be,a as j}from"./VWindowItem-1e406499.js";import{V as Ve}from"./VCard-1a5b2c5e.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./VSlideGroup-1fe3f4d3.js";import"./VSlideGroupItem-01cf7141.js";import"./index-2898f57d.js";import"./helpers-681711bc.js";/* empty css              */const _e={key:0},he={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},dl=le({__name:"[id]",async setup(fe){var g,N,T,D;let t,d;const v=oe(),z=[{title:"User Details",icon:"tabler-building",subtitle:"Setup account details"}];ae();const P=n([]),S=n([]),i=n(0),q=n("CRM"),y=n("Dealer"),{data:O,execute:ke}=([t,d]=C(()=>F(ce("/get/UI/user/roles",{query:{roleType:y}}))),t=await t,d(),t),{data:V}=([t,d]=C(()=>F(`/get/UI/user/roles/${v.params.id}`)),t=await t,d(),t);[t,d]=C(()=>F(`/user/roles/permissions/${v.params.id}`)),t=await t,d();const W={module:"",category:"",role:(g=V.value)==null?void 0:g.role,user_id:v.params.id,name:(N=V.value)==null?void 0:N.name,email:(T=V.value)==null?void 0:T.email,contactNumber:(D=V.value)==null?void 0:D.phone_number},s=n(structuredClone(W)),L=h(()=>O.value),G=[{key:"name",show:!0,type:"text",model:"name",label:"Full Name",placeholder:"Enter Full Name",rules:[c]},{key:"email",show:!0,type:"email",model:"email",label:"Email",placeholder:"Enter Email",rules:[c,de]},{key:"contactNumber",type:"text",show:!0,model:"contactNumber",label:"Phone Number.",placeholder:"Enter Phone Number",rules:[c]}],H=[{key:"typeOfModule",type:"select",show:!1,model:"selectedModule",label:"Module",placeholder:"Module",items:["Bank","Company","CRM"],rules:[c]}],J=h(()=>[{key:"roles",type:"select",show:!0,model:"role",label:"Roles",placeholder:"Roles",items:L.value,rules:[c]}]),K=h(()=>[{key:"company",type:"select",model:"company",label:"Companies",placeholder:"Select Company",items:S.value,rules:[c]},{key:"roleTypes",type:"select",show:!1,value:y,model:y,label:"Different Role Types",placeholder:"Role Types",rules:[c],items:["Dealer","Vendor","Anchor"]}]);te(q,a=>{s.value.module=a}),re(async()=>{P.value=await R("/get/banks/names"),S.value=await R("/company/names")});const _=n(!1),Q=h(()=>{let a=[...H];return s.value.module==="Bank"?a=a.concat(bankFields.value):s.value.module==="Company"&&(a=a.concat(K.value)),a=a.concat(J.value),a.concat(G)}),X=async()=>{_.value=!0;try{const a=await R("/auth/UI/edit/user",{method:"POST",body:s.value,onResponseError({response:w}){console.log("Error",w)}}),{message:m}=a;console.log(m),await pe(()=>{})}catch(a){console.error(a)}};return(a,m)=>{const w=ee,E=Z,A=Y;return r(V)?(p(),U("div",_e,[l(ie,{modelValue:r(_),"onUpdate:modelValue":m[0]||(m[0]=e=>f(_)?_.value=e:null),color:"success",location:"top end",variant:"flat"},{default:o(()=>[x(" User updated Successfully ")]),_:1},8,["modelValue"]),l(Ve,null,{default:o(()=>[l(B,null,{default:o(()=>[l(b,{class:se(a.$vuetify.display.smAndDown?"border-b":"border-e"),cols:"12",md:"4"},{default:o(()=>[l(I,null,{default:o(()=>[l(w,{"current-step":r(i),"onUpdate:currentStep":m[1]||(m[1]=e=>f(i)?i.value=e:null),items:z,class:"stepper-icon-step-bg",direction:"vertical","icon-size":"24"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),l(b,{cols:"12",md:"8"},{default:o(()=>[l(I,null,{default:o(()=>[l(ye,null,{default:o(()=>[l(be,{modelValue:r(i),"onUpdate:modelValue":m[3]||(m[3]=e=>f(i)?i.value=e:null),class:"disable-tab-transition"},{default:o(()=>[l(j,null,{default:o(()=>[l(B,null,{default:o(()=>[(p(!0),U(M,null,me(r(Q),e=>(p(),U(M,{key:e.key},[e.type==="select"&&e.key==="roleTypes"&&!e.show?(p(),k(b,{key:0,cols:"12",md:"12"},{default:o(()=>[l(E,{modelValue:r(y),"onUpdate:modelValue":m[2]||(m[2]=u=>f(y)?y.value=u:null),items:e.items,label:e.label,placeholder:e.placeholder,rules:e.rules},null,8,["modelValue","items","label","placeholder","rules"])]),_:2},1024)):e.type==="select"&&e.show?(p(),k(b,{key:1,cols:"12",md:"8"},{default:o(()=>[l(E,{modelValue:r(s)[e.model],"onUpdate:modelValue":u=>r(s)[e.model]=u,items:e.items,label:e.label,placeholder:e.placeholder,rules:e.rules,chips:"",multiple:"","closable-chips":""},null,8,["modelValue","onUpdate:modelValue","items","label","placeholder","rules"])]),_:2},1024)):e.type==="text"?(p(),k(b,{key:2,cols:"12",md:"8"},{default:o(()=>[l(A,{modelValue:r(s)[e.model],"onUpdate:modelValue":u=>r(s)[e.model]=u,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024)):e.type==="email"?(p(),k(b,{key:3,cols:"12",md:"8"},{default:o(()=>[l(A,{modelValue:r(s)[e.model],"onUpdate:modelValue":u=>r(s)[e.model]=u,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024)):$("",!0)],64))),128))]),_:1})]),_:1}),l(j,null,{default:o(()=>[x(" Drafts ")]),_:1})]),_:1},8,["modelValue"]),ue("div",he,[l(ne,{"append-icon":"tabler-check",color:"success",onClick:X},{default:o(()=>[x(" submit ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])):$("",!0)}}});export{dl as default};