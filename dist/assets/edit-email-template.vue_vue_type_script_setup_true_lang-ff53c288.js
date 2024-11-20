import{_ as x}from"./AppStepper.vue_vue_type_style_index_0_lang-ef456a65.js";import{_ as D}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js";import{_ as S}from"./email-details.vue_vue_type_script_setup_true_lang-2b5cd757.js";import{_ as B}from"./header-footer.vue_vue_type_script_setup_true_lang-499a8c40.js";import{d as T,l as I,r as b,o as n,h as d,f as l,b as s,z as N,p as a,aI as V,e as z,a4 as u,a9 as c,x as m,aM as F}from"./index-5caaa453.js";import{$ as R}from"./api-44dd0fa9.js";import{V as A}from"./VRow-e44df108.js";import{V as y}from"./VCol-bcc5388c.js";import{V as g}from"./VCardText-3b4da816.js";import{V as H}from"./VForm-ed4803d2.js";import{V as P,a as _}from"./VWindowItem-1e406499.js";import{V as W}from"./VCard-1a5b2c5e.js";import{V as E}from"./VDialog-808ce03e.js";const M={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ae=T({__name:"edit-email-template",props:{isDialogVisible:{type:Boolean},email:{}},emits:["update:isDialogVisible","update:email"],setup(v,{emit:U}){const i=v,w=U,C=I(),p=[{title:"Header Footer",icon:"tabler-file-description",subtitle:"Header/Footer/Signature"},{title:"Email Details",icon:"tabler-align-justified"}],r=b(0),o=b({template_id:i.email.id,header:i.email.header,footer:i.email.footer,signature:i.email.signature,name:i.email.name,product_type:i.email.product_type,subject:i.email.subject,body:i.email.body,status:i.email.status}),j=async()=>{console.log(o.value),await R("/UI/configurations/edit/email-template",{method:"POST",body:o.value}),setTimeout(async()=>await F(()=>{C.go(0)}),3e3)};return(f,e)=>{const $=D,k=x;return n(),d(E,{"model-value":i.isDialogVisible,"max-width":"1000","onUpdate:modelValue":f.dialogVisibleUpdate},{default:l(()=>[s($,{onClick:e[0]||(e[0]=t=>w("update:isDialogVisible",!1))}),s(W,null,{default:l(()=>[s(A,null,{default:l(()=>[s(y,{cols:"12",md:"4",class:N(f.$vuetify.display.smAndDown?"border-b":"border-e")},{default:l(()=>[s(g,null,{default:l(()=>[s(k,{"current-step":a(r),"onUpdate:currentStep":e[1]||(e[1]=t=>V(r)?r.value=t:null),direction:"vertical",items:p,"icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),s(y,{cols:"12",md:"8"},{default:l(()=>[s(g,null,{default:l(()=>[s(H,null,{default:l(()=>[s(P,{modelValue:a(r),"onUpdate:modelValue":e[10]||(e[10]=t=>V(r)?r.value=t:null),class:"disable-tab-transition"},{default:l(()=>[s(_,null,{default:l(()=>[s(B,{header:a(o).header,"onUpdate:header":e[2]||(e[2]=t=>a(o).header=t),footer:a(o).footer,"onUpdate:footer":e[3]||(e[3]=t=>a(o).footer=t),signature:a(o).signature,"onUpdate:signature":e[4]||(e[4]=t=>a(o).signature=t)},null,8,["header","footer","signature"])]),_:1}),s(_,null,{default:l(()=>[s(S,{name:a(o).name,"onUpdate:name":e[5]||(e[5]=t=>a(o).name=t),product_type:a(o).product_type,"onUpdate:product_type":e[6]||(e[6]=t=>a(o).product_type=t),subject:a(o).subject,"onUpdate:subject":e[7]||(e[7]=t=>a(o).subject=t),body:a(o).body,"onUpdate:body":e[8]||(e[8]=t=>a(o).body=t),status:a(o).status,"onUpdate:status":e[9]||(e[9]=t=>a(o).status=t)},null,8,["name","product_type","subject","body","status"])]),_:1})]),_:1},8,["modelValue"]),z("div",M,[s(u,{color:"secondary",variant:"tonal",disabled:a(r)===0,onClick:e[11]||(e[11]=t=>r.value--)},{default:l(()=>[s(c,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),m(" Previous ")]),_:1},8,["disabled"]),p.length-1===a(r)?(n(),d(u,{key:0,color:"success",onClick:j},{default:l(()=>[m(" submit ")]),_:1})):(n(),d(u,{key:1,onClick:e[12]||(e[12]=t=>r.value++)},{default:l(()=>[m(" Next "),s(c,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","onUpdate:modelValue"])}}});export{ae as _};
