import{_ as y}from"./TiptapEditor.vue_vue_type_style_index_0_lang-e76d5625.js";import{_ as v}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as x}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{d as g,l as q,r as m,o as F,h as T,f as e,b as t,p as o,a4 as C,x as h,e as n,aM as w}from"./index-75b434bc.js";import{$ as N}from"./api-0c1dfdf3.js";import{V as U}from"./VRow-d6f20668.js";import{V as i}from"./VCol-35b3d337.js";import{a as $,V as k}from"./VCard-95c0d706.js";import"./index-78b172a6.js";import"./VDivider-fc890531.js";import"./form-2b416184.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./VChip-e2ddd660.js";import"./index-2898f57d.js";/* empty css              */import"./VCardText-76f31582.js";const B=n("h6",{class:"text-h6 font-weight-medium"}," Faq Details ",-1),D=n("p",{class:"mb-0"}," Enter your Faq Details ",-1),vt=g({__name:"add-faq",props:{name:{},product_type:{},body:{},status:{}},emits:["update:name","update:subject","update:product_type","update:body","update:status"],setup(d,{emit:S}){const u=q(),s=d,a=m({name:m(s.name),product_type:m(s.product_type),body:m(s.body),status:m(s.status)}),c=m([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),_=m([{title:"Vendor Financing",value:"vendor_financing"},{title:"Dealer Financing",value:"dealer_financing"},{title:"Generic",value:"generic"}]),f=async()=>{await N("/UI/configurations/faq",{method:"POST",body:a.value}),setTimeout(async()=>await w(()=>{u.push("/configurations/faqs")}),3e3)};return(A,l)=>{const V=x,p=v,b=y;return F(),T(k,null,{default:e(()=>[t($,null,{default:e(()=>[t(U,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[B,D]),_:1}),t(i,{cols:"12",md:"12"},{default:e(()=>[t(V,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=r=>o(a).name=r),placeholder:"Faq Name",label:"Faq Name"},null,8,["modelValue"])]),_:1}),t(i,{cols:"12",md:"12"},{default:e(()=>[t(p,{modelValue:o(a).product_type,"onUpdate:modelValue":l[1]||(l[1]=r=>o(a).product_type=r),items:o(_),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Product Type"},null,8,["modelValue","items"])]),_:1}),t(i,{cols:"12",md:"12"},{default:e(()=>[t(b,{modelValue:o(a).body,"onUpdate:modelValue":l[2]||(l[2]=r=>o(a).body=r),class:"border rounded basic-editor"},null,8,["modelValue"])]),_:1}),t(i,{cols:"12",md:"12"},{default:e(()=>[t(p,{modelValue:o(a).status,"onUpdate:modelValue":l[3]||(l[3]=r=>o(a).status=r),items:o(c),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Status"},null,8,["modelValue","items"])]),_:1}),t(i,{cols:"12",md:"12"},{default:e(()=>[t(C,{color:"success",onClick:f},{default:e(()=>[h(" submit ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{vt as default};
