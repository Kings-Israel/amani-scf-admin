import{_ as U}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as B}from"./InvoiceAddPaymentDrawer.vue_vue_type_script_setup_true_lang-569b1262.js";import{_ as N}from"./InvoiceEditable.vue_vue_type_script_setup_true_lang-098aa084.js";import{_ as $}from"./InvoiceSendInvoiceDrawer.vue_vue_type_script_setup_true_lang-03a774da.js";import{d as O,r as l,k as I,b6 as j,o as D,h as x,f as a,b as t,p as s,A as R,a4 as f,x as r,e as n,aI as i}from"./index-5caaa453.js";import{u as M}from"./useApi-c9327355.js";import{V as C}from"./VCol-bcc5388c.js";import{V as q}from"./VCard-1a5b2c5e.js";import{V as L}from"./VCardText-3b4da816.js";import{V as b}from"./form-c9c578a3.js";import{V as w}from"./VSwitch-31612395.js";import{V as W}from"./VRow-e44df108.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-bddf1338.js";import"./VTextarea-92d5209d.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-be308735.js";import"./VSpacer-a56288e5.js";import"./vue3-perfect-scrollbar.esm-ba9c318d.js";import"./VForm-ed4803d2.js";import"./VNavigationDrawer-edab2f77.js";import"./VTooltip-302d2810.js";import"./VNodeRenderer-f316f6d8.js";/* empty css              */const Y={class:"d-flex gap-2"},z={class:"w-50"},E={class:"w-50"},F={class:"d-flex align-center justify-space-between mb-2"},G={class:"d-flex align-center justify-space-between mb-2"},H={class:"d-flex align-center justify-space-between"},ze=O({__name:"[id]",async setup(J){let p,k;const m=l(),P=I(),{data:A}=([p,k]=j(()=>M(`/apps/invoice/${P.params.id}`)),p=await p,k(),p);m.value={invoice:A.value.invoice,paymentDetails:A.value.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,qty:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"};const S=c=>{var e;(e=m.value)==null||e.purchasedProducts.push(c)},g=c=>{var e;(e=m.value)==null||e.purchasedProducts.splice(c,1)},d=l(!1),u=l(!1),v=l(!0),_=l(!1),y=l(!1),V=l("Bank Account"),h=["Bank Account","PayPal","UPI Transfer"];return(c,e)=>{const T=U;return D(),x(W,null,{default:a(()=>[t(C,{cols:"12",md:"9"},{default:a(()=>{var o;return[(o=s(m))!=null&&o.invoice?(D(),x(N,{key:0,data:s(m),onPush:S,onRemove:g},null,8,["data"])):R("",!0)]}),_:1}),t(C,{cols:"12",md:"3"},{default:a(()=>[t(q,{class:"mb-8"},{default:a(()=>[t(L,null,{default:a(()=>[t(f,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:e[0]||(e[0]=o=>d.value=!0)},{default:a(()=>[r(" Send Invoice ")]),_:1}),n("div",Y,[n("div",z,[t(f,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:s(P).params.id}}},{default:a(()=>[r(" Preview ")]),_:1},8,["to"])]),n("div",E,[t(f,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[r(" Save ")]),_:1})])]),t(f,{block:"","prepend-icon":"tabler-currency-dollar",onClick:e[1]||(e[1]=o=>u.value=!0)},{default:a(()=>[r(" Add Payment ")]),_:1})]),_:1})]),_:1}),t(T,{modelValue:s(V),"onUpdate:modelValue":e[2]||(e[2]=o=>i(V)?V.value=o:null),items:h,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",F,[t(b,{for:"payment-terms"},{default:a(()=>[r(" Payment Terms ")]),_:1}),n("div",null,[t(w,{id:"payment-terms",modelValue:s(v),"onUpdate:modelValue":e[3]||(e[3]=o=>i(v)?v.value=o:null)},null,8,["modelValue"])])]),n("div",G,[t(b,{for:"client-notes"},{default:a(()=>[r(" Client Notes ")]),_:1}),n("div",null,[t(w,{id:"client-notes",modelValue:s(_),"onUpdate:modelValue":e[4]||(e[4]=o=>i(_)?_.value=o:null)},null,8,["modelValue"])])]),n("div",H,[t(b,{for:"payment-stub"},{default:a(()=>[r(" Payment Stub ")]),_:1}),n("div",null,[t(w,{id:"payment-stub",modelValue:s(y),"onUpdate:modelValue":e[5]||(e[5]=o=>i(y)?y.value=o:null)},null,8,["modelValue"])])])]),_:1}),t($,{isDrawerOpen:s(d),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>i(d)?d.value=o:null)},null,8,["isDrawerOpen"]),t(B,{isDrawerOpen:s(u),"onUpdate:isDrawerOpen":e[7]||(e[7]=o=>i(u)?u.value=o:null)},null,8,["isDrawerOpen"])]),_:1})}}});export{ze as default};
