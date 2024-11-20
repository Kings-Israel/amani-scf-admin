import{a as te}from"./formatters-92bc75d8.js";import{_ as ae}from"./MoreBtn.vue_vue_type_script_setup_true_lang-9b51d22c.js";import{_ as le}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as oe}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import{_ as ie}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{p as ne}from"./paginationMeta-4ad053a4.js";import{u as se}from"./useApi-c9327355.js";import{c as re}from"./createUrl-3e678c2b.js";import{$ as ce}from"./api-44dd0fa9.js";import{V as I}from"./VCardText-3b4da816.js";import{V as j}from"./VRow-e44df108.js";import{V as D,b as de}from"./VCard-1a5b2c5e.js";import{V as $}from"./VCol-bcc5388c.js";import{d as ue,r as d,R as w,b6 as pe,p as i,o as u,c as y,b as t,f as a,F as O,j as me,aI as m,e as n,a4 as U,x as p,a9 as V,y as s,t as A,h as B,a as Q,A as ve}from"./index-5caaa453.js";import{V as fe}from"./VSpacer-a56288e5.js";import{V as C}from"./VDivider-d40713ce.js";import{V as _e}from"./VDataTableServer-64dc84b4.js";import{V as be}from"./VTooltip-302d2810.js";import{V as T}from"./VAvatar-3ee4c690.js";import{V as ye}from"./VImg-6009f8f0.js";import{V as ge}from"./VChip-49676f7d.js";import{V as Ve}from"./VPagination-4169e3c5.js";import"./helpers-681711bc.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./easing-9f15041e.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./transition-1886cce0.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-1ae6ec72.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./VField-6b3808ed.js";import"./VInput-e87890b4.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./index-2898f57d.js";/* empty css              */import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";const he={key:0},xe={class:"d-flex justify-space-between"},ke={class:"d-flex flex-column gap-y-1"},De={class:"text-h4 text-high-emphasis"},we={class:"text-body-1 text-capitalize"},Pe={class:"me-3 d-flex gap-3 align-center"},Se={class:"d-flex align-center flex-wrap gap-4"},Ie={class:"invoice-list-filter"},$e={class:"invoice-list-filter"},Ue={class:"mb-0"},Ae={class:"mb-0"},Be={class:"mb-0"},Ce={class:"d-flex align-center"},Te={key:1},Re={class:"d-flex flex-column"},ze={class:"text-sm text-disabled"},Ne={key:1,class:"text-base"},Ee={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Me={class:"text-sm text-disabled mb-0"},qe={key:1},Nt=ue({__name:"index",async setup(Fe){let h,R;const x=d(""),g=d(""),v=d(null),P=d([]),r=d(10),c=d(1),z=d(),N=d(),G=l=>{var o,_;c.value=l.page,z.value=(o=l.sortBy[0])==null?void 0:o.key,N.value=(_=l.sortBy[0])==null?void 0:_.order},E=d([{title:"Clients",value:24,icon:"tabler-user"},{title:"Invoices",value:165,icon:"tabler-file-invoice"},{title:"Paid",value:"$2.46k",icon:"tabler-checks"},{title:"Unpaid",value:"$876",icon:"tabler-currency-dollar-off"}]),H=[{title:"#ID",key:"id"},{title:"Vendor",key:"vendor",sortable:!1},{title:"Anchor",key:"anchor"},{title:"Amount",key:"amount"},{title:"Date Request",key:"date_requested"},{title:"Due Date",key:"due_date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],J=w(()=>{const[l,o]=g.value?g.value.split("to"):"";return{start:l,end:o}}),{data:M,execute:K}=([h,R]=pe(()=>se(re("/invoice/UI/request",{query:{q:x,status:v,selectedDateRange:J,itemsPerPage:r,page:c,sortBy:z,orderBy:N}}))),h=await h,R(),h),q=w(()=>M.value.data),k=w(()=>M.value.total),f=(l,o)=>l===o?{status:"Unpaid",chip:{color:"error"}}:l===0?{status:"Paid",chip:{color:"success"}}:{status:l,chip:{variant:"text"}},S=l=>l==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:l==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:l==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:l==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:l==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:l==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"},W=w(()=>l=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:l}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),X=async l=>{await ce(`/apps/invoice/${l}`,{method:"DELETE"}),K()};return(l,o)=>{const _=ie,Y=oe,Z=le,F=Q("RouterLink"),L=Q("IconBtn"),ee=ae;return i(q)?(u(),y("section",he,[t(D,{class:"mb-6"},{default:a(()=>[t(I,null,{default:a(()=>[t(j,null,{default:a(()=>[(u(!0),y(O,null,me(i(E),(e,b)=>(u(),y(O,{key:b},[t($,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:a(()=>[n("div",xe,[n("div",ke,[n("h4",De,s(e.value),1),n("div",we,s(e.title),1)]),t(T,{color:"rgba(var(--v-theme-on-background), var(--v-hover-opacity))",rounded:"",class:"text-high-emphasis",size:"38"},{default:a(()=>[t(V,{icon:e.icon,size:"26"},null,8,["icon"])]),_:2},1024)])]),_:2},1024),(l.$vuetify.display.mdAndUp?b!==i(E).length-1:l.$vuetify.display.smAndUp&&b%2===0)?(u(),B(C,{key:0,vertical:"",inset:""})):ve("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(D,{title:"Filters",class:"mb-6"},{default:a(()=>[t(I,null,{default:a(()=>[t(j,null,{default:a(()=>[t($,{cols:"12",md:"6"},{default:a(()=>[t(_,{modelValue:i(v),"onUpdate:modelValue":o[0]||(o[0]=e=>m(v)?v.value=e:null),label:"Select Status",placeholder:"Select Status",clearable:"","clear-icon":"tabler-x",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])]),_:1}),t($,{cols:"12",md:"6"},{default:a(()=>[t(Y,{modelValue:i(g),"onUpdate:modelValue":o[1]||(o[1]=e=>m(g)?g.value=e:null),label:"Invoice Date","clear-icon":"tabler-x",clearable:"",config:{mode:"range"},placeholder:"Select Date"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(D,{id:"invoice-list"},{default:a(()=>[t(I,{class:"d-flex align-center flex-wrap gap-4"},{default:a(()=>[n("div",Pe,[t(_,{"model-value":i(r),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":o[2]||(o[2]=e=>r.value=parseInt(e,10))},null,8,["model-value"]),t(U,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:a(()=>[p(" Create invoice ")]),_:1})]),t(fe),n("div",Se,[n("div",Ie,[t(Z,{modelValue:i(x),"onUpdate:modelValue":o[3]||(o[3]=e=>m(x)?x.value=e:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),n("div",$e,[t(_,{modelValue:i(v),"onUpdate:modelValue":o[4]||(o[4]=e=>m(v)?v.value=e:null),placeholder:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),t(C),t(i(_e),{modelValue:i(P),"onUpdate:modelValue":o[6]||(o[6]=e=>m(P)?P.value=e:null),"items-per-page":i(r),"onUpdate:itemsPerPage":o[7]||(o[7]=e=>m(r)?r.value=e:null),page:i(c),"onUpdate:page":o[8]||(o[8]=e=>m(c)?c.value=e:null),"show-select":"","items-length":i(k),headers:H,items:i(q),class:"text-no-wrap","onUpdate:options":G},{"column.trending":a(()=>[t(V,{size:"22",icon:"tabler-trending-up"})]),"item.id":a(({item:e})=>[t(F,{to:{name:"apps-invoice-preview-id",params:{id:e.id}}},{default:a(()=>[p(" #"+s(e.id),1)]),_:2},1032,["to"])]),"item.trending":a(({item:e})=>[t(be,null,{activator:a(({props:b})=>[t(T,A({size:30},b,{color:S(e.invoiceStatus).variant,variant:"tonal"}),{default:a(()=>[t(V,{size:20,icon:S(e.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:a(()=>[n("p",Ue,s(e.invoiceStatus),1),n("p",Ae," Balance: "+s(e.balance),1),n("p",Be," Due date: "+s(e.dueDate),1)]),_:2},1024)]),"item.client":a(({item:e})=>[n("div",Ce,[t(T,{size:"38",color:e.avatar.length?void 0:S(e.invoiceStatus).variant,variant:e.avatar.length?void 0:"tonal",class:"me-3"},{default:a(()=>[e.avatar.length?(u(),B(ye,{key:0,src:e.avatar},null,8,["src"])):(u(),y("span",Te,s(("avatarText"in l?l.avatarText:i(te))(e.client.name)),1))]),_:2},1032,["color","variant"]),n("div",Re,[t(F,{to:{name:"pages-user-profile-tab",params:{tab:"profile"}},class:"text-link font-weight-medium"},{default:a(()=>[p(s(e.client.name),1)]),_:2},1024),n("span",ze,s(e.client.companyEmail),1)])])]),"item.total":a(({item:e})=>[p(" $"+s(e.total),1)]),"item.date":a(({item:e})=>[p(s(e.issuedDate),1)]),"item.balance":a(({item:e})=>[typeof f(e.balance,e.total).status=="string"?(u(),B(ge,{key:0,color:f(e.balance,e.total).chip.color,label:""},{default:a(()=>[p(s(f(e.balance,e.total).status),1)]),_:2},1032,["color"])):(u(),y("span",Ne,s(Number(f(e.balance,e.total).status)>0?`$${f(e.balance,e.total).status}`:`-$${Math.abs(Number(f(e.balance,e.total).status))}`),1))]),"item.actions":a(({item:e})=>[t(L,{onClick:b=>X(e.id)},{default:a(()=>[t(V,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(L,{to:{name:"apps-invoice-preview-id",params:{id:e.id}}},{default:a(()=>[t(V,{icon:"tabler-eye"})]),_:2},1032,["to"]),t(ee,{"menu-list":i(W)(e.id),"item-props":"",color:"undefined"},null,8,["menu-list"])]),bottom:a(()=>[t(C),n("div",Ee,[n("p",Me,s(i(ne)({page:i(c),itemsPerPage:i(r)},i(k))),1),t(Ve,{modelValue:i(c),"onUpdate:modelValue":o[5]||(o[5]=e=>m(c)?c.value=e:null),length:Math.ceil(i(k)/i(r)),"total-visible":l.$vuetify.display.xs?1:Math.ceil(i(k)/i(r))},{prev:a(e=>[t(U,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[p(" Previous ")]),_:2},1040)]),next:a(e=>[t(U,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[p(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","items-length","items"])]),_:1})])):(u(),y("section",qe,[t(D,null,{default:a(()=>[t(de,null,{default:a(()=>[p("No Invoice Found")]),_:1})]),_:1})]))}}});export{Nt as default};
