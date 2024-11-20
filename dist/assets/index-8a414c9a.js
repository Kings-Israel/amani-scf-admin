import{_ as U}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as x}from"./InvoiceEditable.vue_vue_type_script_setup_true_lang-098aa084.js";import{_ as P}from"./InvoiceSendInvoiceDrawer.vue_vue_type_script_setup_true_lang-03a774da.js";import{V as w}from"./VCol-bcc5388c.js";import{V as C}from"./VCard-1a5b2c5e.js";import{V as B}from"./VCardText-3b4da816.js";import{d as N,r as n,o as O,c as T,b as t,f as a,p as l,a4 as b,x as r,aI as i,e as s,F as $}from"./index-5caaa453.js";import{V as y}from"./form-c9c578a3.js";import{V as _}from"./VSwitch-31612395.js";import{V as g}from"./VRow-e44df108.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-bddf1338.js";import"./VTextarea-92d5209d.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import"./VTooltip-302d2810.js";import"./VNodeRenderer-f316f6d8.js";import"./useApi-c9327355.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-be308735.js";import"./VSpacer-a56288e5.js";import"./vue3-perfect-scrollbar.esm-ba9c318d.js";import"./VForm-ed4803d2.js";import"./VNavigationDrawer-edab2f77.js";/* empty css              */const I={class:"d-flex align-center justify-space-between mb-2"},j={class:"d-flex align-center justify-space-between mb-2"},R={class:"d-flex align-center justify-space-between"},Te=N({__name:"index",setup(E){const d=n({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",dueDate:"",balance:0,client:{address:"112, Lorem Ipsum, Florida, USA",company:"Greeva Inc",companyEmail:"johndoe@greeva.com",contact:"+1 123 3452 12",country:"USA",name:"John Doe"}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,qty:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),p=n(!1),u=n(!0),c=n(!1),f=n(!1),v=n("Bank Account"),S=["Bank Account","PayPal","UPI Transfer"],V=n(!1),D=m=>{var e;(e=d.value)==null||e.purchasedProducts.push(m)},k=m=>{var e;(e=d.value)==null||e.purchasedProducts.splice(m,1)};return(m,e)=>{const A=U;return O(),T($,null,[t(g,null,{default:a(()=>[t(w,{cols:"12",md:"9"},{default:a(()=>[t(x,{data:l(d),onPush:D,onRemove:k},null,8,["data"])]),_:1}),t(w,{cols:"12",md:"3"},{default:a(()=>[t(C,{class:"mb-8"},{default:a(()=>[t(B,null,{default:a(()=>[t(b,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:e[0]||(e[0]=o=>p.value=!0)},{default:a(()=>[r(" Send Invoice ")]),_:1}),t(b,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:a(()=>[r(" Preview ")]),_:1}),t(b,{block:"",color:"default",variant:"tonal",onClick:e[1]||(e[1]=o=>m.isAddPaymentSidebarActive=!0)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1}),t(A,{modelValue:l(v),"onUpdate:modelValue":e[2]||(e[2]=o=>i(v)?v.value=o:null),items:S,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",I,[t(y,{for:"payment-terms"},{default:a(()=>[r(" Payment Terms ")]),_:1}),s("div",null,[t(_,{id:"payment-terms",modelValue:l(u),"onUpdate:modelValue":e[3]||(e[3]=o=>i(u)?u.value=o:null)},null,8,["modelValue"])])]),s("div",j,[t(y,{for:"client-notes"},{default:a(()=>[r(" Client Notes ")]),_:1}),s("div",null,[t(_,{id:"client-notes",modelValue:l(c),"onUpdate:modelValue":e[4]||(e[4]=o=>i(c)?c.value=o:null)},null,8,["modelValue"])])]),s("div",R,[t(y,{for:"payment-stub"},{default:a(()=>[r(" Payment Stub ")]),_:1}),s("div",null,[t(_,{id:"payment-stub",modelValue:l(f),"onUpdate:modelValue":e[5]||(e[5]=o=>i(f)?f.value=o:null)},null,8,["modelValue"])])])]),_:1}),t(P,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>i(p)?p.value=o:null)},null,8,["isDrawerOpen"])]),_:1}),t(P,{isDrawerOpen:l(V),"onUpdate:isDrawerOpen":e[7]||(e[7]=o=>i(V)?V.value=o:null)},null,8,["isDrawerOpen"])],64)}}});export{Te as default};