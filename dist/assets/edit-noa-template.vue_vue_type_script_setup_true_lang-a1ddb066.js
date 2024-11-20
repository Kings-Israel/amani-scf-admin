import{_ as T}from"./TiptapEditor.vue_vue_type_style_index_0_lang-e76d5625.js";import{_ as h}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as D}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as N}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{d as x,l as U,r as n,o as A,h as B,f as t,b as e,p as o,a4 as I,x as $,e as i,aM as k}from"./index-75b434bc.js";import{$ as w}from"./api-0c1dfdf3.js";import{a as F,V as S}from"./VCard-95c0d706.js";import{V as P}from"./VRow-d6f20668.js";import{V as d}from"./VCol-35b3d337.js";import{V as R}from"./VCheckbox-e2d8e1ba.js";import{V as E}from"./VDialog-bc06d443.js";const O=i("h6",{class:"text-h6 font-weight-medium"}," Noa Template Details ",-1),j=i("p",{class:"mb-0"}," Enter NOA Template Details ",-1),q=i("p",null,"Content",-1),Z=x({__name:"edit-noa-template",props:{isDialogVisible:{type:Boolean},template:{}},emits:["update:name","update:subject","update:product_type","update:body","update:status"],setup(p,{emit:c}){const m=p,f=c,_=U(),l=n({id:n(m.template.id),name:n(m.template.name),product_type:n(m.template.product_type),body:n(m.template.body),status:n(m.template.status),is_default:n(m.template.is_default)}),V=n([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),b=n([{title:"Vendor Financing",value:"vendor_financing"},{title:"Dealer Financing",value:"dealer_financing"},{title:"Factoring",value:"factoring"}]),y=async()=>{await w("/UI/configurations/edit/noa-template",{method:"POST",body:l.value}),setTimeout(async()=>await k(()=>{_.go(0)}),3e3)};return(g,a)=>{const v=N,u=D,r=h,C=T;return A(),B(E,{"model-value":m.isDialogVisible,"max-width":"1000","onUpdate:modelValue":g.dialogVisibleUpdate},{default:t(()=>[e(v,{onClick:a[0]||(a[0]=s=>f("update:isDialogVisible",!1))}),e(S,null,{default:t(()=>[e(F,null,{default:t(()=>[e(P,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[O,j]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(u,{modelValue:o(l).name,"onUpdate:modelValue":a[1]||(a[1]=s=>o(l).name=s),placeholder:"Template Name",label:"Template Name"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(r,{modelValue:o(l).product_type,"onUpdate:modelValue":a[2]||(a[2]=s=>o(l).product_type=s),items:o(b),class:"me-1","clear-icon":"tabler-x",clearable:"",label:"Product Type",placeholder:"Product Type"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[q,e(C,{modelValue:o(l).body,"onUpdate:modelValue":a[3]||(a[3]=s=>o(l).body=s),class:"border rounded basic-editor"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(R,{modelValue:o(l).is_default,"onUpdate:modelValue":a[4]||(a[4]=s=>o(l).is_default=s),label:"Is Default"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(r,{modelValue:o(l).status,"onUpdate:modelValue":a[5]||(a[5]=s=>o(l).status=s),items:o(V),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Status"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(u,{value:"date,buyerName,anchorName,company,anchorCompanyUniqueID,time,agreementDate,contract,anchorAccountName,anchorAccountNumber,anchorCustomerId,anchorBranch,anchorIFSCCode,anchorAddress,penalnterestRate,sellerName",disabled:"",label:"Variables"})]),_:1}),e(d,{cols:"12",md:"12"},{default:t(()=>[e(I,{color:"success",onClick:y},{default:t(()=>[$(" submit ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","onUpdate:modelValue"])}}});export{Z as _};
