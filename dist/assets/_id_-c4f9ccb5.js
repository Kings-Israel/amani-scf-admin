import{r as U}from"./validators-db74a876.js";import{_ as O}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as P}from"./AppStepper.vue_vue_type_style_index_0_lang-ef456a65.js";import{_ as G}from"./AllRoles.vue_vue_type_script_setup_true_lang-a04c45f2.js";import{d as H,l as J,k as K,b6 as D,r as u,R as L,w as h,I as Q,o as x,c as X,b as o,f as t,x as g,z as Y,p as v,e as k,a4 as Z,h as ee,A as ae,F as oe,aM as te}from"./index-5caaa453.js";import{u as S}from"./useApi-c9327355.js";import{$ as le}from"./api-44dd0fa9.js";import{c as se}from"./createUrl-3e678c2b.js";import{V as re}from"./VSnackbar-ea7773d7.js";import{V as ue}from"./VCard-1a5b2c5e.js";import{V as C}from"./VRow-e44df108.js";import{V as p}from"./VCol-bcc5388c.js";import{V as T}from"./VCardText-3b4da816.js";import{V as $}from"./VForm-ed4803d2.js";import{V as ie,a as q}from"./VWindowItem-1e406499.js";import{V as ne}from"./VDivider-d40713ce.js";import"./helpers-681711bc.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSlideGroup-1fe3f4d3.js";import"./VSlideGroupItem-01cf7141.js";import"./VCheckbox-4131d654.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./index-2898f57d.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";/* empty css              */import"./ssrBoot-2696bccc.js";const me=k("h6",{class:"text-h6 font-weight-medium"}," Role Information ",-1),pe=k("p",{class:"mb-0"}," Setup Information ",-1),de={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},aa=H({__name:"[id]",async setup(ce){let r,n;const B=J(),I=K(),{data:d}=([r,n]=D(()=>S(`/UI/roles/permissions/${I.params.id}`)),r=await r,n(),r),i=u([]),V=u(d.value.permissions[0].RoleName),_=u(d.value.permissions[0].RoleTypeName),E=u([]),R=u(d.value.permissions[0].RoleDescription),m=u([]),N=u([]);N.value=d.value.permissions;const F=[{title:"Role Details",subtitle:"Setup Role Details"},{title:"Draft",subtitle:"Available Drafts"}],c=u(0),b=u(!1),j=async()=>{try{const a=await le(`/UI/roles/${I.params.id}/rolename/update`,{method:"POST",body:{RoleName:V.value,RoleTypeName:_.value,RoleDescription:R.value,RoleIDs:w.value},onResponseError({response:l}){console.log("Error",l)}}),{message:e}=a;console.log(e),await te(()=>{b.value=!0,B.push("/users/role")})}catch(a){console.error(a)}},z=a=>{(Array.isArray(a)?a:[a]).forEach(l=>{m.value.includes(l)?m.value=m.value.filter(f=>f!==l):m.value.push(l)})},M=a=>{a.forEach(e=>{m.value.includes(e)||m.value.push(e)})},{data:W,execute:A}=([r,n]=D(()=>S(se("/UI/roles/permissions"))),r=await r,n(),r),y=L(()=>W.value),w=u([]);return h(_,a=>{const e=y.value.find(l=>l.name===a);e?i.value=e.groups:i.value=[]}),h(i,a=>{i.value=a},{immediate:!0}),Q(async()=>{await A(),E.value=y.value.map(a=>a.name),h(_,a=>{const e=y.value.find(l=>l.name===a);e?i.value=e.groups:i.value=[]},{immediate:!0})}),[r,n]=D(()=>A()),await r,n(),(a,e)=>{const l=P,f=O;return x(),X(oe,null,[o(re,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=s=>b.value=s),color:"success",location:"top end",variant:"flat"},{default:t(()=>[g(" Role updated successfully ")]),_:1},8,["modelValue"]),o(v($),null,{default:t(()=>[o(ue,null,{default:t(()=>[o(C,null,{default:t(()=>[o(p,{class:Y(a.$vuetify.display.smAndDown?"border-b":"border-e"),cols:"12",md:"4"},{default:t(()=>[o(T,null,{default:t(()=>[o(l,{"current-step":c.value,"onUpdate:currentStep":e[1]||(e[1]=s=>c.value=s),items:F,direction:"vertical"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),o(p,{cols:"12",md:"8"},{default:t(()=>[o(T,null,{default:t(()=>[o(v($),null,{default:t(()=>[o(ie,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=s=>c.value=s),class:"disable-tab-transition"},{default:t(()=>[o(q,null,{default:t(()=>[o(C,null,{default:t(()=>[o(p,{cols:"12"},{default:t(()=>[me,pe]),_:1}),o(p,{cols:"12",md:"6"},{default:t(()=>[o(f,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=s=>V.value=s),rules:["requiredValidator"in a?a.requiredValidator:v(U)],label:"Role Name",placeholder:"Role",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(p,{cols:"12",md:"6"},{default:t(()=>[o(f,{modelValue:R.value,"onUpdate:modelValue":e[3]||(e[3]=s=>R.value=s),rules:["requiredValidator"in a?a.requiredValidator:v(U)],label:"Role Description",placeholder:"Role Description"},null,8,["modelValue","rules"])]),_:1})]),_:1}),k("div",de,[o(Z,{"append-icon":"tabler-check",color:"success",onClick:j},{default:t(()=>[g(" Update ")]),_:1})]),o(ne,{class:"my-4"}),i.value&&i.value.length>0?(x(),ee(G,{key:0,currentdata:N.value,group:i.value,onCheckboxChanged:z,selectedIds:w.value,"onUpdate:selectedIds":[e[4]||(e[4]=s=>w.value=s),M]},null,8,["currentdata","group","selectedIds"])):ae("",!0)]),_:1}),o(q,null,{default:t(()=>[o(C,null,{default:t(()=>[g(" No Drafts ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{aa as default};
