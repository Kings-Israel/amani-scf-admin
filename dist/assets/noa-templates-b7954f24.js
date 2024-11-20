import{_ as Y}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js";import{_ as Z}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as M}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as ee}from"./edit-noa-template.vue_vue_type_script_setup_true_lang-00752fa0.js";import{u as te}from"./useApi-c9327355.js";import{c as oe}from"./createUrl-3e678c2b.js";import{$}from"./api-44dd0fa9.js";import{d as ae,r as n,b6 as le,R as ne,o as A,c as re,b as o,f as r,e as m,p as l,aI as c,a4 as V,x as d,y as B,t as U,a9 as k,h as ie,A as se,F as ce,a as me}from"./index-5caaa453.js";import{V as pe}from"./VDataTable-1493872b.js";import{V as F}from"./VChip-49676f7d.js";import{V as I}from"./VCard-1a5b2c5e.js";import{V as P}from"./VCardText-3b4da816.js";import{V as ue}from"./VDialog-808ce03e.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./TiptapEditor.vue_vue_type_style_index_0_lang-b24c8bd1.js";import"./index-f9c487c0.js";import"./VRow-e44df108.js";/* empty css              */import"./VCol-bcc5388c.js";import"./VCheckbox-4131d654.js";import"./index-2898f57d.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";const de={class:"d-flex flex-wrap gap-4 mx-5 my-5"},fe={class:"d-flex align-center"},ve={class:"d-flex gap-4 flex-wrap align-center"},_e={class:"text-h6"},ye={href:"javascript:void(0)"},ge=m("br",null,null,-1),dt=ae({__name:"noa-templates",async setup(Ve){let f,D;const v=n(""),_=n(),p=n(10),h=n(1),S=n(),N=n();n(),n();const u=n(null),y=n(),z=n(),i=n(!1),s=n(!1),j=a=>{u.value=a,s.value=!0},R=a=>{u.value=a,i.value=!0},q=n([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),E=n([{title:"Dealer Financing",value:"dealer_financing"},{title:"Vendor Financing",value:"vendor_financing"},{title:"Factoring",value:"factoring"}]),w=a=>a&&a==="active"?{color:"success",icon:"tabler-thumb-up"}:{color:"error",icon:"tabler-thumb-down"},O=a=>a==="active"?{text:"Active",color:"success"}:{text:"Inactive",color:"error"},Q=a=>a==="vendor_financing"?{text:"Vendor Financing"}:a==="dealer_financing"?{text:"Dealer Financing"}:{text:"Factoring"},G=[{title:"Template Name",key:"name"},{title:"Product Type",key:"product_type"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:H,execute:x}=([f,D]=le(()=>te(oe("get/UI/configurations/noa-templates",{query:{q:v,status:_,itemsPerPage:p,product:y,page:h,sortBy:S,orderBy:N}}))),f=await f,D(),f),J=ne(()=>H.value.data);x();const K=async a=>{try{await $(`/UI/configurations/delete/noa-template/${a}`,{method:"POST",onResponseError({response:t}){errors.value=t._data.errors}}),await x(),s.value=!1}catch(t){console.error(t)}},L=async a=>{await $("/UI/configurations/activate/noa-template",{method:"POST",body:{ids:a,status:z.value}}),await x()};return(a,t)=>{const W=M,b=Z,C=me("IconBtn"),X=Y;return A(),re(ce,null,[o(I,{class:"mb-6"},{default:r(()=>[m("div",de,[m("div",fe,[o(W,{modelValue:l(v),"onUpdate:modelValue":t[0]||(t[0]=e=>c(v)?v.value=e:null),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Template Name",style:{"inline-size":"200px"},type:"text"},null,8,["modelValue"]),o(b,{modelValue:l(_),"onUpdate:modelValue":t[1]||(t[1]=e=>c(_)?_.value=e:null),items:l(q),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"100px"}},null,8,["modelValue","items"]),o(b,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=e=>c(y)?y.value=e:null),items:l(E),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Product Type",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),m("div",ve,[o(b,{modelValue:l(p),"onUpdate:modelValue":t[3]||(t[3]=e=>c(p)?p.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),o(V,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}}),o(V,{color:"primary","prepend-icon":"tabler-plus",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:t[4]||(t[4]=e=>a.$router.push("/configurations/view/add-noa-template"))},{default:r(()=>[d(" Add Template ")]),_:1})])]),o(l(pe),{headers:G,items:l(J),"items-per-page":l(p),class:"text-no-wrap"},{"item.name":r(({item:e})=>[m("h6",_e,[m("a",ye,B(e.name),1)])]),"item.status":r(({item:e})=>[o(F,U({density:"default",label:""},O(e.status)),null,16)]),"item.product_type":r(({item:e})=>[o(F,U({density:"default",label:""},Q(e.product_type)),null,16)]),"item.actions":r(({item:e})=>[o(C,{onClick:g=>R(e)},{default:r(()=>[o(k,{icon:"tabler-pencil",color:"warning"})]),_:2},1032,["onClick"]),o(C,null,{default:r(()=>{var g,T;return[o(k,{icon:(g=w(e.status))==null?void 0:g.icon,color:(T=w(e.status))==null?void 0:T.color,title:e.status,onClick:xe=>L([e.id])},null,8,["icon","color","title","onClick"])]}),_:2},1024),o(C,null,{default:r(()=>[o(k,{icon:"tabler-trash",color:"error",onClick:g=>j(e)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["items","items-per-page"])]),_:1}),l(i)?(A(),ie(ee,{key:0,isDialogVisible:l(i),"onUpdate:isDialogVisible":t[5]||(t[5]=e=>c(i)?i.value=e:null),template:l(u)},null,8,["isDialogVisible","template"])):se("",!0),o(ue,{modelValue:l(s),"onUpdate:modelValue":t[9]||(t[9]=e=>c(s)?s.value=e:null),persistent:"",class:"v-dialog-sm"},{default:r(()=>[o(X,{onClick:t[6]||(t[6]=e=>i.value=!l(i))}),o(I,null,{default:r(()=>[o(P,null,{default:r(()=>[d(" Are you sure you want to delete template: "+B(l(u).name)+"? ",1),ge,d(" This action can not be undone. ")]),_:1}),o(P,{class:"d-flex justify-end gap-3 flex-wrap"},{default:r(()=>[o(V,{color:"secondary",variant:"tonal",onClick:t[7]||(t[7]=e=>s.value=!1)},{default:r(()=>[d(" Cancel ")]),_:1}),o(V,{color:"error",onClick:t[8]||(t[8]=e=>K(l(u).id))},{default:r(()=>[d(" Delete ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{dt as default};