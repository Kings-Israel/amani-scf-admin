import{_ as I}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as D}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{p as $}from"./paginationMeta-4ad053a4.js";import{_ as T}from"./ECommerceAddCustomerDrawer.vue_vue_type_style_index_0_lang-3ede05f7.js";import{u as M}from"./useApi-c9327355.js";import{c as N}from"./createUrl-3e678c2b.js";import{V as O}from"./VCardText-3b4da816.js";import{d as R,r as m,b6 as j,R as b,o as z,c as q,b as s,f as a,e as r,p as t,aI as p,a4 as v,x as d,y as n,t as C,a as E}from"./index-5caaa453.js";import{V as k}from"./VDivider-d40713ce.js";import{V as F}from"./VDataTableServer-64dc84b4.js";import{V as L}from"./VAvatar-3ee4c690.js";import{V as Q}from"./VPagination-4169e3c5.js";import{V as G}from"./VCard-1a5b2c5e.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./validators-db74a876.js";import"./helpers-681711bc.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-be308735.js";import"./VSpacer-a56288e5.js";import"./vue3-perfect-scrollbar.esm-ba9c318d.js";import"./VForm-ed4803d2.js";import"./VRow-e44df108.js";/* empty css              */import"./VCol-bcc5388c.js";import"./VSwitch-31612395.js";import"./VNavigationDrawer-edab2f77.js";import"./index-2898f57d.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";import"./VImg-6009f8f0.js";const J={class:"d-flex justify-space-between flex-wrap gap-y-4"},K={class:"d-flex flex-row gap-4 align-center flex-wrap"},W={class:"d-flex align-center gap-x-3"},X={class:"d-flex flex-column"},Y={class:"text-sm text-disabled"},Z={class:"font-weight-medium text-high-emphasis"},ee={class:"d-flex gap-x-2"},te=["src"],oe={class:"text-body-1"},se={class:"text-body-1 font-weight-medium text-high-emphasis"},ae={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},re={class:"text-sm text-disabled mb-0"},ie=R({__name:"index",async setup(le){let _,y;const f=m(""),u=m(!1),i=m(10),l=m(1),h=m(),V=m(),P=[{title:"Customer",key:"customer"},{title:"Customer Id",key:"customerId"},{title:"Country",key:"country"},{title:"Orders",key:"orders"},{title:"Total Spent",key:"totalSpent"}],B=c=>{var o,g;l.value=c.page,h.value=(o=c.sortBy[0])==null?void 0:o.key,V.value=(g=c.sortBy[0])==null?void 0:g.order},{data:w}=([_,y]=j(()=>M(N("/apps/ecommerce/customers",{query:{q:f,itemsPerPage:i,page:l,sortBy:h,orderBy:V}}))),_=await _,y(),_),S=b(()=>w.value.customers),x=b(()=>w.value.total);return(c,o)=>{const g=D,U=I,A=E("RouterLink");return z(),q("div",null,[s(G,null,{default:a(()=>[s(O,null,{default:a(()=>[r("div",J,[s(g,{modelValue:t(f),"onUpdate:modelValue":o[0]||(o[0]=e=>p(f)?f.value=e:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search ..",density:"compact"},null,8,["modelValue"]),r("div",K,[s(U,{modelValue:t(i),"onUpdate:modelValue":o[1]||(o[1]=e=>p(i)?i.value=e:null),density:"compact",items:[5,10,20,50,100]},null,8,["modelValue"]),s(v,{"prepend-icon":"tabler-screen-share",variant:"tonal",color:"secondary"},{default:a(()=>[d(" Export ")]),_:1}),s(v,{"prepend-icon":"tabler-plus",onClick:o[2]||(o[2]=e=>u.value=!t(u))},{default:a(()=>[d(" Add Customer ")]),_:1})])])]),_:1}),s(k),s(t(F),{"items-per-page":t(i),"onUpdate:itemsPerPage":o[4]||(o[4]=e=>p(i)?i.value=e:null),page:t(l),"onUpdate:page":o[5]||(o[5]=e=>p(l)?l.value=e:null),items:t(S),headers:P,"items-length":t(x),"show-select":"",class:"text-no-wrap","onUpdate:options":B},{"item.customer":a(({item:e})=>[r("div",W,[s(L,{size:"38",image:e.avatar},null,8,["image"]),r("div",X,[s(A,{to:{name:"apps-ecommerce-customer-details-id",params:{id:e.customerId}},class:"font-weight-medium"},{default:a(()=>[d(n(e.customer),1)]),_:2},1032,["to"]),r("span",Y,n(e.email),1)])])]),"item.customerId":a(({item:e})=>[r("span",Z,"#"+n(e.customerId),1)]),"item.orders":a(({item:e})=>[d(n(e.order),1)]),"item.country":a(({item:e})=>[r("div",ee,[r("img",{src:e.countryFlag,height:"22",width:"22"},null,8,te),r("span",oe,n(e.country),1)])]),"item.totalSpent":a(({item:e})=>[r("span",se,"$"+n(e.totalSpent),1)]),bottom:a(()=>[s(k),r("div",ae,[r("p",re,n(t($)({page:t(l),itemsPerPage:t(i)},t(x))),1),s(Q,{modelValue:t(l),"onUpdate:modelValue":o[3]||(o[3]=e=>p(l)?l.value=e:null),length:Math.ceil(t(x)/t(i)),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(t(x)/t(i)),5)},{prev:a(e=>[s(v,C({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[d(" Previous ")]),_:2},1040)]),next:a(e=>[s(v,C({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[d(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),s(T,{"is-drawer-open":t(u),"onUpdate:isDrawerOpen":o[6]||(o[6]=e=>p(u)?u.value=e:null)},null,8,["is-drawer-open"])])}}});const it=H(ie,[["__scopeId","data-v-cd7d8e56"]]);export{it as default};