import{_ as T}from"./TiptapEditor.vue_vue_type_style_index_0_lang-e76d5625.js";import{_ as x}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as D}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as U}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{d as $,l as w,r as n,o as B,h as k,f as t,b as e,p as o,a4 as N,x as h,e as m,aM as F}from"./index-75b434bc.js";import{$ as S}from"./api-0c1dfdf3.js";import{a as A,V as I}from"./VCard-95c0d706.js";import{V as P}from"./VRow-d6f20668.js";import{V as d}from"./VCol-35b3d337.js";import{V as E}from"./VDialog-bc06d443.js";const R=m("h6",{class:"text-h6 font-weight-medium"}," Terms & Conditions Details ",-1),j=m("p",{class:"mb-0"}," Enter T&C Details ",-1),M=m("p",null,"Content",-1),X=$({__name:"edit-terms",props:{isDialogVisible:{type:Boolean},template:{}},emits:["update:name","update:subject","update:product_type","update:body","update:status"],setup(r,{emit:p}){const i=r,c=p,_=w(),l=n({id:n(i.template.id),name:n(i.template.name),product_type:n(i.template.product_type),body:n(i.template.terms_conditions),status:n(i.template.status)}),f=n([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),V=n([{title:"Vendor Financing",value:"vendor_financing"},{title:"Dealer Financing",value:"dealer_financing"},{title:"Factoring",value:"factoring"}]),b=async()=>{await S("/UI/configurations/edit/terms-and-conditions",{method:"POST",body:l.value}),setTimeout(async()=>await F(()=>{_.go(0)}),3e3)};return(y,a)=>{const g=U,v=D,u=x,C=T;return B(),k(E,{"model-value":i.isDialogVisible,"max-width":"1000","onUpdate:modelValue":y.dialogVisibleUpdate},{default:t(()=>[e(g,{onClick:a[0]||(a[0]=s=>c("update:isDialogVisible",!1))}),e(I,null,{default:t(()=>[e(A,null,{default:t(()=>[e(P,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[R,j]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(v,{modelValue:o(l).name,"onUpdate:modelValue":a[1]||(a[1]=s=>o(l).name=s),placeholder:"T&C Name",label:"T&C Name"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(u,{modelValue:o(l).product_type,"onUpdate:modelValue":a[2]||(a[2]=s=>o(l).product_type=s),items:o(V),class:"me-1","clear-icon":"tabler-x",clearable:"",label:"Product Type",placeholder:"Product Type"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[M,e(C,{modelValue:o(l).body,"onUpdate:modelValue":a[3]||(a[3]=s=>o(l).body=s),class:"border rounded basic-editor"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(u,{modelValue:o(l).status,"onUpdate:modelValue":a[4]||(a[4]=s=>o(l).status=s),items:o(f),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Status"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(N,{color:"success",onClick:b},{default:t(()=>[h(" submit ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","onUpdate:modelValue"])}}});export{X as _};