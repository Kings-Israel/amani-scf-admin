import{_ as c}from"./AppPricing-e228954f.js";import{_ as d}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{V as _}from"./VCardText-76f31582.js";import{V as u}from"./VCard-95c0d706.js";import{V as g}from"./VDialog-bc06d443.js";import{d as f,o as V,h as b,f as e,b as o}from"./index-75b434bc.js";const $=f({__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup(s,{emit:t}){const l=s,n=t,p=i=>{n("update:isDialogVisible",i)};return(i,a)=>{const m=d,r=c;return V(),b(g,{"model-value":l.isDialogVisible,class:"v-dialog-xl","onUpdate:modelValue":p},{default:e(()=>[o(m,{onClick:a[0]||(a[0]=D=>i.$emit("update:isDialogVisible",!1))}),o(u,{class:"pricing-dialog pa-5 pa-sm-8"},{default:e(()=>[o(_,null,{default:e(()=>[o(r,{title:"Subscription Plan",md:"4"})]),_:1})]),_:1})]),_:1},8,["model-value"])}}});export{$ as _};