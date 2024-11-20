import{b as V,V as x}from"./VCard-1a5b2c5e.js";import{V as v}from"./VCardText-3b4da816.js";import{V as I,a as C,b as r}from"./VList-4b1bf96e.js";import{V as A}from"./VChip-49676f7d.js";import{d as g,am as k,o as f,c as P,b as e,f as t,e as a,y as i,t as w,a4 as y,x as S,F as R,aR as E,aS as T,h as N,p as c,k as B,r as U,I as D,w as M,A as j}from"./index-5caaa453.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as z}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as O}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as F}from"./VSpacer-a56288e5.js";import{V as L}from"./VDataTableServer-64dc84b4.js";import{_ as q}from"./Documents.vue_vue_type_script_setup_true_lang-3e8a635c.js";import{$ as H}from"./api-44dd0fa9.js";import{V as m}from"./VCol-bcc5388c.js";import{V as h}from"./VRow-e44df108.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./transition-1886cce0.js";import"./index-7dd1f5f0.js";import"./ssrBoot-2696bccc.js";import"./VDivider-d40713ce.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";import"./VTimelineItem-17fcaa28.js";import"./index-2898f57d.js";/* empty css              */const o=d=>(E("data-v-de18c8a8"),d=d(),T(),d),G=o(()=>a("h4",{class:"my-4 text-h4 text-center"},"FACTORING BUYER",-1)),K={class:"text-x8"},Y=o(()=>a("b",null,"Company ID#",-1)),J=o(()=>a("h5",{class:"text-h5 me-1"},"Approval Status:",-1)),Q=o(()=>a("h5",{class:"text-h5 me-1"},"Active Status:",-1)),W=o(()=>a("h5",{class:"text-h5 me-1"},"KRA PIN:",-1)),X=o(()=>a("h5",{class:"text-h5 me-1"},"Branch Code:",-1)),Z=o(()=>a("h5",{class:"text-h5 me-1"},"Organization Type:",-1)),ee=o(()=>a("h5",{class:"text-h5 me-1"},"City:",-1)),te=o(()=>a("h5",{class:"text-h5 me-1"},"Industry:",-1)),ae=o(()=>a("span",null,null,-1)),se=o(()=>a("h5",{class:"text-h5 me-1"},"Customer Type:",-1)),oe={class:"d-flex justify-space-between"},le=o(()=>a("h4",{class:"my-4 text-h4 text-center"},"Relationship Manager Details",-1)),ne=o(()=>a("h5",{class:"text-h5 me-1"},"Name:",-1)),re=o(()=>a("h5",{class:"text-h5 me-1"},"Email:",-1)),ie=o(()=>a("h5",{class:"text-h5 me-1"},"Phone Number:",-1)),pe=g({__name:"About",props:{data:{}},setup(d){const s=d;k(s.data);const p=n=>n==="active"?{text:"Active",color:"success"}:{text:"Inactive",color:"error"},l=n=>n==="approved"?{text:"Approved",color:"success"}:{text:"Pending",color:"warning"};return(n,_)=>(f(),P(R,null,[e(x,{class:"mb-4"},{default:t(()=>[e(V,null,{default:t(()=>[G]),_:1}),e(v,null,{default:t(()=>[a("h4",K,[Y,a("span",null,i(s.data.unique_identification_number),1)]),e(I,{class:"card-list mt-2"},{default:t(()=>[e(C,{class:"my-4"},{default:t(()=>[e(r,{class:"my-4 d-flex"},{default:t(()=>[J,e(A,w({density:"default",label:""},l(s.data.approval_status)),null,16)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[Q,e(A,w({density:"default",label:""},p(s.data.status)),null,16)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[W,a("span",null,i(s.data.kra_pin),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[X,a("span",null,i(s.data.branch_code),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[Z,a("span",null,i(s.data.organization_type),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[ee,a("span",null,i(s.data.city),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[te,ae]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[se,a("span",null,i(s.data.customer_type),1)]),_:1})]),_:1})]),_:1}),a("div",oe,[e(y,{color:"primary","prepend-icon":"tabler-plus",style:{"text-size-adjust":"auto","text-transform":"none"}},{default:t(()=>[S(" Approve ")]),_:1}),e(y,{color:"error",style:{"text-size-adjust":"auto","text-transform":"none"}},{default:t(()=>[S(" Reject ")]),_:1})])]),_:1})]),_:1}),e(x,{class:"mb-4"},{default:t(()=>[e(V,null,{default:t(()=>[le]),_:1}),e(v,null,{default:t(()=>[e(I,{class:"card-list mt-2"},{default:t(()=>[e(C,{class:"my-4"},{default:t(()=>[e(r,{class:"my-4 d-flex"},{default:t(()=>[ne,a("span",null,i(s.data.relationship_manager_name),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[re,a("span",null,i(s.data.relationship_manager_email),1)]),_:1}),e(r,{class:"my-4 d-flex"},{default:t(()=>[ie,a("span",null,i(s.data.relationship_manager_phone_number),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});const de=$(pe,[["__scopeId","data-v-de18c8a8"]]),me={class:"d-flex flex-wrap gap-4 mx-5 my-5 row justify-space-between"},ce={class:"d-flex flex-wrap gap-4 mx-5 my-5 row"},_e={class:"d-flex gap-4 flex-wrap align-center"},ue=g({__name:"Users",props:{data:{}},setup(d){k(d.data);const p=[{title:"USER NAME",key:"name"},{title:"USER EMAIL",key:"email"},{title:"USER PHONE NUMBER",key:"phone_number"},{title:"ACTIONS",key:"actions"}];return(l,n)=>{const _=O,b=z;return f(),N(x,{class:"mb-4"},{default:t(()=>[a("div",me,[a("div",ce,[e(_,{"append-inner-icon":"tabler-search",class:"me-1","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"User Name/Email",style:{"inline-size":"200px"},type:"text","onClick:appendInner":l.toggleMarker,"onClick:append":l.sendMessage},null,8,["onClick:appendInner","onClick:append"]),e(F)]),a("div",_e,[e(b,{modelValue:l.itemsPerPage,"onUpdate:modelValue":n[0]||(n[0]=u=>l.itemsPerPage=u),items:[5,10,20,25,50]},null,8,["modelValue"]),e(y,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})])]),e(c(L),{"items-per-page":l.itemsPerPage,"onUpdate:itemsPerPage":n[1]||(n[1]=u=>l.itemsPerPage=u),page:l.page,"onUpdate:page":n[2]||(n[2]=u=>l.page=u),headers:p,items:l.products,"items-length":1,class:"text-no-wrap","show-select":"","onUpdate:options":l.updateOptions},null,8,["items-per-page","page","items","onUpdate:options"])]),_:1})}}});const fe=$(ue,[["__scopeId","data-v-a9bf47fd"]]),he={class:"text-h4"},nt=g({__name:"[id]",setup(d){const s=B(),p=U([]),l=U(s.params.id),n=async()=>{p.value=await H(`all/UI/companies/${l.value}/details`).catch(_=>console.log(_))};return D(()=>{n()}),M(s,n,{immediate:!0}),(_,b)=>(f(),P(R,null,[e(h,null,{default:t(()=>[e(m,{cols:"12",md:"12"},{default:t(()=>[a("h4",he,[a("span",null,"Company ID#"+i(c(p).unique_identification_number),1)])]),_:1})]),_:1}),c(p)?(f(),N(h,{key:0},{default:t(()=>[e(m,{cols:"12",md:"4"},{default:t(()=>[e(de,{data:c(p)},null,8,["data"])]),_:1}),e(m,{cols:"12",md:"8"},{default:t(()=>[e(h,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(fe,{id:c(p)},null,8,["id"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(q,{id:c(s).params.id},null,8,["id"])]),_:1}),e(m,{cols:"12",md:"6"})]),_:1})]),_:1})]),_:1})):j("",!0)],64))}});export{nt as default};