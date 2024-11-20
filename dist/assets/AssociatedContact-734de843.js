import{_ as L}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-2f5f92ce.js";import{_ as $}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js";import{u as T}from"./useApi-c9327355.js";import{c as j}from"./createUrl-3e678c2b.js";import{$ as z}from"./api-44dd0fa9.js";import{V as S}from"./VCard-1a5b2c5e.js";import{V as N}from"./VCardText-3b4da816.js";import{a as g,V as P,b as R,c as E}from"./VList-4b1bf96e.js";import{V}from"./VAvatar-3ee4c690.js";import{d as F,r as h,b6 as O,R as b,o as p,h as x,f as e,b as t,p as d,cT as q,cU as G,e as a,y as u,c as H,F as J,j as K,a9 as M,a4 as Q,x as W}from"./index-5caaa453.js";import{V as X}from"./VDialog-808ce03e.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./filter-aecd5fc1.js";import"./index-2898f57d.js";import"./createSimpleFunctional-9624028d.js";import"./VImg-6009f8f0.js";import"./ssrBoot-2696bccc.js";import"./VDivider-d40713ce.js";const Y=a("h3",{class:"text-h3 text-center mb-3"}," Associate Contact ",-1),Z=a("p",{class:"text-sm-body-1 text-center mb-6"}," Select a contact to associate ",-1),tt=a("p",{class:"font-weight-medium mb-1"}," Add Contact ",-1),et={class:"text-h4 mb-4 mt-8"},st={class:"font-weight-medium"},at={class:"text-disabled font-weight-medium text-body-1"},ot={class:"d-flex align-center justify-space-between flex-wrap gap-3 mt-6"},it={class:"text-h6 font-weight-medium d-flex align-start"},rt=a("div",null,"Associate User",-1),qt=F({__name:"AssociatedContact",props:{isDialogVisible:{type:Boolean},pipeline:{}},emits:["update:isDialogVisible","update:isContactAssociated"],async setup(v,{emit:C}){let r,_;const f=v,l=C,y=h({message:void 0,statusCode:void 0}),n=h(),A=o=>{l("update:isDialogVisible",o)},{data:w,execute:D}=([r,_]=O(()=>T(j("/associated/users/bank"))),r=await r,_(),r),m=b(()=>w.value),k=b(()=>f.pipeline),B=async()=>{try{const o=await z("/post/UI/association/contacts",{method:"POST",body:{contact_id:n.value,pipeline_id:k.value},onResponseError({response:c}){y.value=c._data.errors}});console.log(o);const{message:i}=o;console.log(i)}catch(o){console.error(o)}l("update:isContactAssociated",!0),l("update:isDialogVisible",!1)};return D(),(o,i)=>{const c=$,U=L;return p(),x(X,{"model-value":f.isDialogVisible,"max-width":"800","onUpdate:modelValue":A},{default:e(()=>[t(c,{onClick:i[0]||(i[0]=s=>o.$emit("update:isDialogVisible",!1))}),t(S,{class:"share-project-dialog pa-5 pa-sm-8"},{default:e(()=>[t(N,null,{default:e(()=>[Y,Z,tt,t(U,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=s=>n.value=s),items:d(m),density:"compact","item-title":"name","item-value":"id",placeholder:"Add project members..."},{item:e(({props:s,item:I})=>[t(g,q(G(s)),{prepend:e(()=>[t(V,{image:I.raw.avatar,size:"30"},null,8,["image"])]),_:2},1040)]),_:1},8,["modelValue","items"]),a("h4",et,u(d(m).length)+" Contacts ",1),t(P,{class:"card-list"},{default:e(()=>[(p(!0),H(J,null,K(d(m),s=>(p(),x(g,{key:s.name},{prepend:e(()=>[t(V,{image:s.avatar},null,8,["image"])]),default:e(()=>[t(R,null,{default:e(()=>[a("span",st,u(s.name),1)]),_:2},1024),t(E,null,{default:e(()=>[a("span",at,u(s.email),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a("div",ot,[a("h6",it,[t(M,{class:"me-2",icon:"tabler-users",size:"20"}),rt]),t(Q,{class:"text-capitalize",onClick:B},{default:e(()=>[W(" Associate ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"])}}});export{qt as default};