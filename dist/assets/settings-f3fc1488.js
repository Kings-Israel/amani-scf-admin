import{V as f}from"./VCardText-3b4da816.js";import{V as T,a as b}from"./VRadioGroup-ceb4b39c.js";import{V as k}from"./VAlert-009fe8a7.js";import{V as O}from"./VAvatar-3ee4c690.js";import{d as U,r as V,o as p,c as _,b as e,f as l,p as v,aI as $,a9 as C,x as i,e as t,a4 as c,F as g,j as P,y as x,aR as j,aS as q,d8 as z,a as B,h as F}from"./index-5caaa453.js";import{V as h,a as K}from"./VCard-1a5b2c5e.js";import{_ as R}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as M}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as w}from"./VCheckbox-4131d654.js";import{V as A}from"./VRow-e44df108.js";import{V as d}from"./VCol-bcc5388c.js";import{V as N}from"./VTable-f9bab7db.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Y,a as W}from"./AddPaymentMethodDialog.vue_vue_type_style_index_0_lang-ff9ebd0e.js";import{p as G}from"./paypal-primary-7940bdf6.js";import{V as H}from"./VImg-6009f8f0.js";import{V as Z}from"./VDivider-d40713ce.js";import{V as J}from"./VChip-49676f7d.js";import{V as Q}from"./VMenu-97c48b4e.js";import{V as X,a as ee,b as le}from"./VList-4b1bf96e.js";import{V as E}from"./VSpacer-a56288e5.js";import{V as te,a as ae}from"./VTabs-423f31b3.js";import{V as oe,a as D}from"./VWindowItem-1e406499.js";import"./createSimpleFunctional-9624028d.js";import"./VSelectionControl-e0df1dbd.js";import"./form-c9c578a3.js";import"./VInput-e87890b4.js";import"./transition-1886cce0.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./dialog-transition-1ae6ec72.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";/* empty css              */import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js";import"./mastercard-091f965c.js";import"./visa-dark-88f6d41a.js";import"./visa-light-5e3d9782.js";import"./useGenerateImageVariant-65226aac.js";import"./VDialog-808ce03e.js";import"./ssrBoot-2696bccc.js";import"./VSlideGroup-1fe3f4d3.js";const ne={class:"d-flex justify-end gap-x-4"},se=U({__name:"SettingsCheckout",setup(S){const u=V("Phone number"),n=V("Only require last name"),m=V("Don't include"),s=V("Optional"),r=V("Optional");return(a,o)=>(p(),_(g,null,[e(h,{title:"Customer contact method",subtitle:"Select what contact method customers use to check out.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(T,{modelValue:v(u),"onUpdate:modelValue":o[0]||(o[0]=y=>$(u)?u.value=y:null),class:"mb-4"},{default:l(()=>[e(b,{label:"Phone number",value:"Phone number"}),e(b,{label:"Email",value:"Email"})]),_:1},8,["modelValue"]),e(k,{color:"info",variant:"tonal"},{prepend:l(()=>[e(O,{size:"28",rounded:"",color:"#fff"},{default:l(()=>[e(C,{icon:"tabler-alert-circle",size:"18",color:"warning"})]),_:1})]),default:l(()=>[i(" To send SMS updates, you need to install an SMS App. ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Customer information",class:"mb-6"},{default:l(()=>[e(f,{class:"customer-info-card"},{default:l(()=>[e(T,{modelValue:v(n),"onUpdate:modelValue":o[1]||(o[1]=y=>$(n)?n.value=y:null),label:"Full name",class:"mb-4"},{default:l(()=>[e(b,{value:"Only require last name",label:"Only require last name"}),e(b,{value:"Require first and last name",label:"Require first and last name"})]),_:1},8,["modelValue"]),e(T,{modelValue:v(m),"onUpdate:modelValue":o[2]||(o[2]=y=>$(m)?m.value=y:null),label:"Company name",class:"mb-4"},{default:l(()=>[e(b,{value:"Don't include",label:"Don't include"}),e(b,{value:"Optional",label:"Optional"}),e(b,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(T,{modelValue:v(s),"onUpdate:modelValue":o[3]||(o[3]=y=>$(s)?s.value=y:null),label:"Address line 2 (apartment, unit, etc.)",class:"mb-4"},{default:l(()=>[e(b,{value:"Don't include",label:"Don't include"}),e(b,{value:"Optional",label:"Optional"}),e(b,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(T,{modelValue:v(r),"onUpdate:modelValue":o[4]||(o[4]=y=>$(r)?r.value=y:null),label:"Shipping address phone number",class:"mb-4"},{default:l(()=>[e(b,{value:"Don't include",label:"Don't include"}),e(b,{value:"Optional",label:"Optional"}),e(b,{value:"Required",label:"Required"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t("div",ne,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save")]),_:1})])],64))}});const de={class:"my-4"},ie={class:"d-flex justify-end gap-x-4 mt-6"},re=U({__name:"SettingsLocations",setup(S){const u=V(!0);return(n,m)=>{const s=M,r=R;return p(),_("div",null,[e(h,{title:"Location Name",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(s,{label:"Location Name",placeholder:"Empire Hub"}),t("div",de,[e(w,{modelValue:v(u),"onUpdate:modelValue":m[0]||(m[0]=a=>$(u)?u.value=a:null),disabled:"",label:"Fulfil online orders from this location"},null,8,["modelValue"])]),e(k,{color:"info",closable:"",variant:"tonal"},{prepend:l(()=>[e(O,{size:"26",rounded:"",color:"#fff"},{default:l(()=>[e(C,{icon:"tabler-info-circle",size:"18",color:"primary"})]),_:1})]),default:l(()=>[i(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Address"},{default:l(()=>[e(f,null,{default:l(()=>[e(A,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(r,{label:"Country/religion",placeholder:"Select Country",items:["United States","UK","Canada"],"model-value":"United States"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Address",placeholder:"123 , New Street"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Apartment, suite, etc.",placeholder:"Empire Heights"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"Phone",placeholder:"+1 (234) 456-7890"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"City",placeholder:"New York"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"State",placeholder:"NY"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"PIN code",placeholder:"123897"})]),_:1})]),_:1})]),_:1})]),_:1}),t("div",ie,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save")]),_:1})])])}}}),I=S=>(j("data-v-561e5d57"),S=S(),q(),S),ue=I(()=>t("h5",{class:"text-h5 mb-2"}," Customer ",-1)),ce=I(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1)),me={width:"400px"},pe=I(()=>t("h5",{class:"text-h5 mb-2"}," Orders ",-1)),_e=I(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1)),fe={width:"400px"},he=I(()=>t("h5",{class:"text-h5 mb-2"}," Shipping ",-1)),be=I(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1)),ve={width:"400px"},ye={class:"d-flex justify-end gap-x-4"},Ve=U({__name:"SettingsNotifications",setup(S){const u=V([{type:"New customer sign up",email:!0,app:!0},{type:"Customer account password reset",email:!0,app:!0},{type:"Customer account invite",email:!1,app:!1}]),n=V([{type:"Picked up",email:!0,app:!0},{type:"Shipping update ",email:!0,app:!1},{type:"Delivered",email:!1,app:!0}]),m=V([{type:"Order purchase",email:!0,app:!0},{type:"Order cancelled",email:!0,app:!1},{type:"Order refund request",email:!1,app:!0},{type:"Order confirmation",email:!0,app:!1},{type:"Payment error",email:!0,app:!1}]);return(s,r)=>(p(),_(g,null,[e(h,{class:"mb-4"},{default:l(()=>[e(f,null,{default:l(()=>[ue,e(N,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[ce,t("tbody",null,[(p(!0),_(g,null,P(v(u),a=>(p(),_("tr",{key:a.type},[t("td",me,x(a.type),1),t("td",null,[e(w,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(w,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),pe,e(N,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[_e,t("tbody",null,[(p(!0),_(g,null,P(v(m),a=>(p(),_("tr",{key:a.type},[t("td",fe,x(a.type),1),t("td",null,[e(w,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(w,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),he,e(N,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[be,t("tbody",null,[(p(!0),_(g,null,P(v(n),a=>(p(),_("tr",{key:a.type},[t("td",ve,x(a.type),1),t("td",null,[e(w,{modelValue:a.email,"onUpdate:modelValue":o=>a.email=o},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(w,{modelValue:a.app,"onUpdate:modelValue":o=>a.app=o},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}),t("div",ye,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save")]),_:1})])],64))}});const ge=L(Ve,[["__scopeId","data-v-561e5d57"]]),xe=t("div",{class:"text-sm mb-4"}," Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. ",-1),Se=t("div",{class:"text-body-1 font-weight-medium text-high-emphasis mb-6"}," Default ",-1),Ce={class:"my-class mb-6"},$e={class:"d-flex justify-space-between align-center mb-6"},we={class:"d-flex justify-space-between flex-wrap mt-6 gap-x-4"},Pe=t("div",null,[t("div",{class:"text-body-2 mb-1"}," Provider "),t("div",{class:"text-body-1 text-high-emphasis font-weight-medium"}," PayPal ")],-1),De=t("div",{class:"text-body-2 mb-1"}," Status ",-1),Ae=t("div",null,[t("div",{class:"text-body-2 mb-1"}," Transaction Fee "),t("div",{class:"text-body-1 text-high-emphasis"}," 2.99% ")],-1),Ue=t("p",null,"Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve their order before it can be fulfilled.",-1),Ie=t("span",null,"Add Manual Payment Methods",-1),Te={class:"d-flex justify-end gap-x-4"},Ne=U({__name:"SettingsPayment",setup(S){const u=V(!1),n=V(!1);return(m,s)=>{const r=Y,a=W;return p(),_(g,null,[t("div",null,[e(h,{class:"mb-6",title:"Payment providers"},{default:l(()=>[e(f,null,{default:l(()=>[xe,e(c,{variant:"tonal",onClick:s[0]||(s[0]=o=>n.value=!n.value)},{default:l(()=>[i(" Choose a provider ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Supported payment methods",subtitle:"Payment methods that are available with one of Vuexy's approved payment providers.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[Se,t("div",Ce,[t("div",$e,[e(O,{variant:"elevated",color:"#ffffff",rounded:"",class:"px-1"},{default:l(()=>[e(H,{src:v(G),height:"21",width:"21"},null,8,["src"])]),_:1}),e(c,{variant:"text"},{default:l(()=>[i(" Activate PayPal ")]),_:1})]),e(Z),t("div",we,[Pe,t("div",null,[De,e(J,{color:"warning",label:""},{default:l(()=>[i(" Inactive ")]),_:1})]),Ae])]),e(c,{variant:"tonal",onClick:s[1]||(s[1]=o=>u.value=!u.value)},{default:l(()=>[i(" Add Payment Method ")]),_:1})]),_:1})]),_:1}),e(h,{title:"Manual payment methods",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[Ue,e(c,{variant:"tonal","append-icon":m.$vuetify.display.smAndUp?"tabler-chevron-down":""},{default:l(()=>[Ie,e(Q,{activator:"parent"},{default:l(()=>[e(X,null,{default:l(()=>[(p(),_(g,null,P(["Create custom payment method","Bank Deposit","Money Order","Cash on Delivery(COD)"],(o,y)=>e(ee,{key:y,value:y},{default:l(()=>[e(le,null,{default:l(()=>[i(x(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1},8,["append-icon"])]),_:1})]),_:1}),t("div",Te,[e(c,{color:"secondary",variant:"tonal"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,{color:"primary"},{default:l(()=>[i(" save ")]),_:1})])]),e(r,{"is-dialog-visible":u.value,"onUpdate:isDialogVisible":s[2]||(s[2]=o=>u.value=o)},null,8,["is-dialog-visible"]),e(a,{"is-dialog-visible":n.value,"onUpdate:isDialogVisible":s[3]||(s[3]=o=>n.value=o)},null,8,["is-dialog-visible"])],64)}}}),Oe={class:"mb-6"},ke={class:"d-flex flex-wrap align-center mb-4"},Ee=t("div",null,[t("div",{class:"text-high-emphasis font-weight-medium"}," Domestic "),t("div",null,"United state of America")],-1),Re={class:"text-disabled"},Me=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),Le={class:"d-flex flex-wrap align-center mb-4"},je=t("div",null,[t("div",{class:"text-high-emphasis"}," International "),t("div",null,"United state of America")],-1),qe={class:"text-disabled"},ze=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),Be={class:"d-flex justify-end gap-x-4"},Fe=U({__name:"SettingsShippingAndDelivery",setup(S){const u=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"-",price:"-"}],n=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"Japan",price:"$49"}];return(m,s)=>{const r=B("IconBtn");return p(),_(g,null,[e(h,{class:"mb-6"},{default:l(()=>[e(K,{title:"Shipping Zone",subtitle:"Choose where you ship and how much you charge for shipping at checkout."},{append:l(()=>[e(c,{variant:"text"},{default:l(()=>[i(" Create Zone ")]),_:1})]),_:1}),e(f,null,{default:l(()=>[t("div",Oe,[t("div",ke,[e(O,{image:v(z),size:"30",class:"me-4"},null,8,["image"]),Ee,e(E),t("div",Re,[e(r,null,{default:l(()=>[e(C,{icon:"tabler-edit"})]),_:1}),e(r,null,{default:l(()=>[e(C,{icon:"tabler-trash"})]),_:1})])]),e(N,{class:"mb-4 border rounded"},{default:l(()=>[Me,t("tbody",null,[(p(),_(g,null,P(u,(a,o)=>t("tr",{key:o},[t("td",null,x(a.rate),1),t("td",null,x(a.condition),1),t("td",null,x(a.price),1),t("td",null,[e(r,null,{default:l(()=>[e(C,{icon:"tabler-dots-vertical"})]),_:1})])])),64))])]),_:1}),e(c,{variant:"tonal"},{default:l(()=>[i(" Add rate ")]),_:1})]),t("div",null,[t("div",Le,[e(C,{icon:"tabler-world",size:"30",class:"me-4"}),je,e(E),t("div",qe,[e(r,null,{default:l(()=>[e(C,{icon:"tabler-edit"})]),_:1}),e(r,null,{default:l(()=>[e(C,{icon:"tabler-trash"})]),_:1})])]),e(N,{class:"mb-4 border rounded"},{default:l(()=>[ze,t("tbody",null,[(p(),_(g,null,P(n,(a,o)=>t("tr",{key:o},[t("td",null,x(a.rate),1),t("td",null,x(a.condition),1),t("td",null,x(a.price),1),t("td",null,[e(r,null,{default:l(()=>[e(C,{icon:"tabler-dots-vertical"})]),_:1})])])),64))])]),_:1}),e(c,{variant:"tonal"},{default:l(()=>[i(" Add rate ")]),_:1})])]),_:1})]),_:1}),t("div",Be,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save")]),_:1})])],64)}}}),Ke={},Ye=t("div",{class:"v-card-title text-wrap"}," Time zone and units of measurement ",-1),We=t("div",{class:"text-wrap"}," Used to calculate product prices, shipping weights, and order times. ",-1),Ge=t("div",{class:"mt-2"}," Your order ID will appear as #1001, #1002, #1003 ... ",-1),He={class:"d-flex justify-end gap-x-4"};function Ze(S,u){const n=M,m=R;return p(),_(g,null,[e(h,{title:"Profile",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(A,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Store name",placeholder:"Pixinvent"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Phone",placeholder:"+(123) 456-7890"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Store contact email",placeholder:"johndoe@email.com"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Sender email",placeholder:"johndoe@email.com"})]),_:1}),e(d,null,{default:l(()=>[e(k,{color:"warning",variant:"tonal"},{prepend:l(()=>[e(O,{size:"26",rounded:"",color:"#fff"},{default:l(()=>[e(C,{icon:"tabler-bell",size:"18",color:"warning",class:"font-weight-medium"})]),_:1})]),default:l(()=>[i(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Billing Information",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(A,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Legal business name",placeholder:"Pixinvent"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Country/Region",items:["United States","Canada","UK"],placeholder:"Canada"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{placeholder:"126, New Street",label:"Address"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Apartment,suit, etc.",placeholder:"Empire Heights"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"City",placeholder:"New York"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"State",placeholder:"NY"})]),_:1}),e(d,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"PIN Code",placeholder:"111011"})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"mb-6"},{title:l(()=>[Ye]),subtitle:l(()=>[We]),default:l(()=>[e(f,null,{default:l(()=>[e(A,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(m,{label:"Time zone",items:["(UTC-12:00) International Date Line West","(UTC-11:00) Coordinated Universal Time-11","(UTC-09:00) Alaska","(UTC-08:00) Baja California"],placeholder:"(UTC-12:00) International Date Line West"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Unit system",items:["Metric System","Imperial","International System"],placeholder:"Metric System"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Default weight unit",placeholder:"Kilogram",items:["Kilogram","Pounds","Gram"]})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Store currency",subtitle:"The currency your products are sold in.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(m,{label:"Store currency",items:["USD","INR","Euro","Pound"],placeholder:"USD"})]),_:1})]),_:1}),e(h,{title:"Order id format",subtitle:"Shown on the Orders page, customer pages, and customer order notifications to identify orders.",class:"mb-6"},{default:l(()=>[e(f,null,{default:l(()=>[e(A,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Prefix",prefix:"#"})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Suffix",suffix:"$"})]),_:1})]),_:1}),Ge]),_:1})]),_:1}),t("div",He,[e(c,{variant:"tonal",color:"secondary"},{default:l(()=>[i(" Discard ")]),_:1}),e(c,null,{default:l(()=>[i("Save")]),_:1})])],64)}const Je=L(Ke,[["render",Ze]]),Qe=t("h6",{class:"text-h6 mb-4"}," Getting Started ",-1),Hl=U({__name:"settings",setup(S){const u=[{icon:"tabler-building-store",title:"Store Details"},{icon:"tabler-credit-card",title:"Payments"},{icon:"tabler-shopping-cart",title:"Checkout"},{icon:"tabler-discount-2",title:"Shipping & Delivery"},{icon:"tabler-map-pin",title:"Location"},{icon:"tabler-bell-ringing",title:"Notifications"}],n=V(null);return(m,s)=>(p(),F(A,null,{default:l(()=>[e(d,{cols:"12",md:"4"},{default:l(()=>[Qe,e(te,{modelValue:v(n),"onUpdate:modelValue":s[0]||(s[0]=r=>$(n)?n.value=r:null),direction:"vertical",class:"v-tabs-pill disable-tab-transition"},{default:l(()=>[(p(),_(g,null,P(u,(r,a)=>e(ae,{key:a,"prepend-icon":r.icon},{default:l(()=>[i(x(r.title),1)]),_:2},1032,["prepend-icon"])),64))]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"8"},{default:l(()=>[e(oe,{modelValue:v(n),"onUpdate:modelValue":s[1]||(s[1]=r=>$(n)?n.value=r:null),class:"disable-tab-transition",touch:!1},{default:l(()=>[e(D,null,{default:l(()=>[e(Je)]),_:1}),e(D,null,{default:l(()=>[e(Ne)]),_:1}),e(D,null,{default:l(()=>[e(se)]),_:1}),e(D,null,{default:l(()=>[e(Fe)]),_:1}),e(D,null,{default:l(()=>[e(re)]),_:1}),e(D,null,{default:l(()=>[e(ge)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Hl as default};