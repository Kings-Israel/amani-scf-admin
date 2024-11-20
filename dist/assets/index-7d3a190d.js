import{f as J}from"./formatters-92bc75d8.js";import{_ as ht}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{p as mt}from"./paginationMeta-4ad053a4.js";import"./FileSaver.min-4f66c306.js";import{u as S}from"./useApi-776c55ea.js";import{c as j}from"./createUrl-149317bf.js";import{V as w}from"./VCol-35b3d337.js";import{d as lt,r as l,b6 as M,R as W,o as b,c as z,b as s,f as a,a4 as et,x as P,p as e,aI as h,e as t,y as c,h as q,a9 as X,t as ct,A as N,F as pt,a as Z,w as gt,I as yt,j as bt}from"./index-75b434bc.js";import{V as xt}from"./VDataTableServer-e9f6b4ac.js";import{V as Vt}from"./VTooltip-c5403118.js";import{V as dt}from"./VChip-e2ddd660.js";import{V as _t}from"./VDivider-fc890531.js";import{V as vt}from"./VPagination-2b54b87a.js";import{V as st}from"./VRow-d6f20668.js";import{V as F,b as at,c as kt}from"./VCard-95c0d706.js";import{V as O}from"./VCardText-76f31582.js";import{V as ot}from"./VDialog-bc06d443.js";import{$ as ft}from"./api-0c1dfdf3.js";import{V as wt}from"./VDataTable-c3cccdda.js";import{_ as Dt,a as Ct,b as $t,c as Pt}from"./EcommerceTotalProfitLineCharts.vue_vue_type_script_setup_true_lang-76a9c42e.js";import{_ as At}from"./HomeEarningReportsYearlyOverview.vue_vue_type_script_setup_true_lang-bb35d48c.js";import{i as K}from"./index-4532b75c.js";import{V as It}from"./VCheckbox-e2d8e1ba.js";import{V as Ut,a as Bt}from"./VTabs-bb433ccf.js";import{V as Tt,a as ut}from"./VWindowItem-04415d19.js";import"./helpers-681711bc.js";import"./index-2898f57d.js";/* empty css              */import"./VTable-de2d1039.js";import"./VOverlay-0b79a00d.js";import"./easing-9f15041e.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./transition-6afda34e.js";import"./forwardRefs-8348545e.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./index-97808f23.js";import"./createSimpleFunctional-4b3a0a39.js";import"./dialog-transition-14fdab67.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./VField-82993695.js";import"./form-2b416184.js";import"./VInput-b46333d7.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./VMenu-3f143933.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./filter-3bfef89c.js";import"./vue3-apexcharts-8104d5b5.js";import"./VSlideGroup-3e745b05.js";import"./VSlideGroupItem-95742265.js";const Rt={class:"d-flex align-center"},St={class:"text-h8 mb-0 mr-2"},jt=["onClick"],Mt={class:"d-flex align-center"},qt={class:"text-h8 mb-0 mr-2"},Nt=["onClick"],Lt={class:"d-flex align-center"},Ft={class:"text-h8 mb-0 mr-2"},Et=["onClick"],Ht={class:"text-success"},Yt={class:"text-success"},zt={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Ot={class:"text-sm text-medium-emphasis mb-0"},Wt={class:"my-3"},Qt=t("strong",{class:"text-subtitle-1"},"Invoice Number:",-1),Gt={class:"text-body-1"},Jt={class:"my-3"},Kt=t("strong",{class:"text-subtitle-1"},"PI Number:",-1),Xt={class:"my-3"},Zt=t("strong",{class:"text-subtitle-1"},"Vendor:",-1),te={class:"text-body-1"},ee=["href"],se={class:"my-3"},ae=t("strong",{class:"text-subtitle-1"},"Bank:",-1),oe={class:"text-body-1"},le={class:"my-3"},ne=t("strong",{class:"text-subtitle-1"},"Anchor:",-1),ie={class:"text-body-1"},re={class:"my-3"},ce=t("strong",{class:"text-subtitle-1"},"Request Date:",-1),de={class:"text-body-1"},ue={class:"my-3"},me=t("strong",{class:"text-subtitle-1"},"Invoice Date:",-1),pe={class:"text-body-1"},_e={class:"my-3"},ve=t("strong",{class:"text-subtitle-1"},"Expiry Date:",-1),fe={class:"text-body-1"},he={class:"my-3"},ge=t("strong",{class:"text-subtitle-1"},"Due Date:",-1),ye={class:"text-body-1"},be={class:"my-3"},xe=t("strong",{class:"text-subtitle-1"},"Amount:",-1),Ve={class:"text-success"},ke={class:"my-3"},we=t("strong",{class:"text-subtitle-1"},"Discount Amount:",-1),De={class:"text-success"},Ce={key:0,class:"my-3"},$e=t("strong",{class:"text-subtitle-1"},"Financial Approval Status:",-1),Pe={class:"text-body-1"},Ae={class:"d-flex align-center mb-3"},Ie=t("strong",{class:"me-2 text-subtitle-1"},"Status:",-1),Ue={key:1,class:"my-3"},Be=t("strong",{class:"text-subtitle-1"},"Approved By:",-1),Te={class:"text-body-1"},Re={key:2,class:"my-3"},Se=t("strong",{class:"text-subtitle-1"},"Reason:",-1),je={class:"text-body-1"},Me={class:"d-flex justify-content-between mb-3"},qe={class:"fw-light"},Ne={class:"fw-bold"},Le={class:"d-flex justify-content-between mb-3"},Fe={class:"fw-light"},Ee={class:"fw-bold"},He=lt({__name:"AnalyticsInvoices",async setup(nt){let r,_;l(!0),l(0),l("");const D=l();l();const L=l(),A=l(),E=l(),I=l(),p=l(),x=l(),y=l(),V=l(!1),C=l(!1),n=l(null),U=l([]),H=o=>{var u,R;v.value=o.page,B.value=(u=o.sortBy[0])==null?void 0:u.key,$.value=(R=o.sortBy[0])==null?void 0:R.order,console.log(o+0)},k=l(15),v=l(1),B=l(),$=l();l([{title:"Created",value:"created"},{title:"Pending",value:"pending"},{title:"Approved",value:"approved"},{title:"Submitted",value:"submitted"},{title:"Disbursed",value:"disbursed"},{title:"Denied",value:"denied"}]);const m=o=>{switch(o){case"Approved":return{text:"Approved",color:"success"};case"Past Due":return{text:o,color:"error"};case"Closed":return{text:"Closed",color:"success"};case"Rejected":return{text:"Rejected",color:"error"};case"Disbursed":return{text:"Disbursed",color:"info"};default:return{text:o,color:"default"}}},d=[{title:"Invoice Number",key:"invoice_number"},{title:"Vendor",key:"vendor"},{title:"Bank",key:"bank"},{title:"Anchor",key:"anchor"},{title:"Date Requested",key:"date_requested"},{title:"Invoice Amount",key:"amount"},{title:"Expiry Date",key:"expiry_date"},{title:"Invoice Due Date",key:"due_date"},{title:"Discount Amount ",key:"discount_amount"},{title:"Status",key:"status"}],{data:T,execute:Q}=([r,_]=M(()=>S(j("/admin/invoices",{query:{vendor:L,anchor:A,bank:E,status:D,invoice_amount:I,expiry_date:p,due_date:x,date_requested:y,page:v,itemsPerPage:k,sortBy:B,orderBy:$}}))),r=await r,_(),r),f=W(()=>T.value.data),g=W(()=>T.value.total);Q();const tt=o=>{n.value=o,V.value=!0},Y=o=>{V.value=!1,n.value=o,C.value=!0};return(o,u)=>{const R=Z("router-link"),it=Z("IconBtn"),rt=ht;return b(),z(pt,null,[s(st,null,{default:a(()=>[s(w,{cols:"11",class:"d-flex justify-end mx-5 my-5"},{default:a(()=>[s(R,{to:"/reports/allinvoice"},{default:a(()=>[s(et,{color:"primary"},{default:a(()=>[P(" View All ")]),_:1})]),_:1})]),_:1}),s(w,null,{default:a(()=>[s(e(xt),{"items-per-page":e(k),"onUpdate:itemsPerPage":u[1]||(u[1]=i=>h(k)?k.value=i:null),page:e(v),"onUpdate:page":u[2]||(u[2]=i=>h(v)?v.value=i:null),modelValue:e(U),"onUpdate:modelValue":u[3]||(u[3]=i=>h(U)?U.value=i:null),headers:d,items:e(f),"items-length":e(g),"item-key":"id",class:"text-wrap","onUpdate:options":H},{"item.invoice_number":a(({item:i})=>[t("div",Rt,[t("h6",St,[t("a",{href:"javascript:void(0)",onClick:G=>tt(i)},c(i.invoice_number),9,jt)]),i.reason!=null?(b(),q(it,{key:0,class:"mx-1",small:"",color:"error"},{default:a(()=>[s(Vt,{bottom:""},{activator:a(({props:G})=>[s(X,ct(G,{icon:"tabler-info-circle",size:"15",onClick:es=>o.openInfoDialog(i)}),null,16,["onClick"])]),default:a(()=>[t("span",null,c(i.reason),1)]),_:2},1024)]),_:2},1024)):N("",!0)])]),"item.vendor":a(({item:i})=>[t("div",Mt,[t("h6",qt,[t("a",{href:"javascript:void(0)",onClick:G=>o.$router.push(`/companies/view/${i.vendor_id}`)},c(i.vendor),9,Nt)])])]),"item.anchor":a(({item:i})=>[t("div",Lt,[t("h6",Ft,[t("a",{href:"javascript:void(0)",onClick:G=>o.$router.push(`/companies/view/${i.vendor_id}`)},c(i.anchor),9,Et)])])]),"item.status":a(({item:i})=>[s(dt,ct({density:"default",label:""},m(i.status),{class:"text-capitalize"}),null,16)]),"item.amount":a(({item:i})=>[t("span",Ht,c(i.amount),1)]),"item.discount_amount":a(({item:i})=>[t("span",Yt,c(i.discount_amount),1)]),bottom:a(()=>[s(_t),t("div",zt,[t("p",Ot,c(e(mt)({page:e(v),itemsPerPage:e(k)},e(g))),1),s(vt,{modelValue:e(v),"onUpdate:modelValue":u[0]||(u[0]=i=>h(v)?v.value=i:null),length:Math.ceil(e(g)/e(k)),"total-visible":o.$vuetify.display.xs?1:Math.min(Math.ceil(e(g)/e(k)),5),"active-color":"primary","next-icon":"tabler-caret-right","prev-icon":"tabler-caret-left"},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1})]),_:1}),s(ot,{modelValue:e(V),"onUpdate:modelValue":u[6]||(u[6]=i=>h(V)?V.value=i:null),persistent:"","max-width":"600px",class:"elevation-10"},{default:a(()=>[s(rt,{onClick:u[4]||(u[4]=i=>V.value=!e(V)),class:"text-h6 d-flex align-center justify-center"}),s(F,{class:"pa-4"},{default:a(()=>[s(at,{class:"text-h5 font-weight-bold text-center"},{default:a(()=>[P(" Invoice Details ")]),_:1}),s(O,null,{default:a(()=>[t("div",Wt,[Qt,t("span",Gt,c(e(n).invoice_number),1)]),t("div",Jt,[Kt,t("span",{class:"text-primary cursor-pointer",onClick:u[5]||(u[5]=i=>Y(e(n)))},c(e(n).pi_number),1)]),t("div",Xt,[Zt,t("span",te,[t("a",{href:`/admin/companies/view/${e(n).vendor_id}`,class:"text-primary"},c(e(n).vendor),9,ee)])]),t("div",se,[ae,t("span",oe,c(e(n).bank),1)]),t("div",le,[ne,t("span",ie,c(e(n).anchor),1)]),t("div",re,[ce,t("span",de,c(("formatDate"in o?o.formatDate:e(J))(e(n).date_requested)),1)]),t("div",ue,[me,t("span",pe,c(("formatDate"in o?o.formatDate:e(J))(e(n).invoice_date)),1)]),t("div",_e,[ve,t("span",fe,c(("formatDate"in o?o.formatDate:e(J))(e(n).expiry_date)),1)]),t("div",he,[ge,t("span",ye,c(("formatDate"in o?o.formatDate:e(J))(e(n).due_date)),1)]),t("div",be,[xe,t("span",Ve,c(e(n).amount),1)]),t("div",ke,[we,t("span",De,c(e(n).discount_amount),1)]),e(n).financial_approval_status?(b(),z("div",Ce,[$e,t("span",Pe,c(e(n).financial_approval_status||"N/A"),1)])):N("",!0),t("div",Ae,[Ie,s(dt,{color:m(e(n).status).color,label:"",class:"text-capitalize"},{default:a(()=>[P(c(m(e(n).status).text),1)]),_:1},8,["color"])]),e(n).approvals.length>0?(b(),z("div",Ue,[Be,t("span",Te,c(e(n).approvals[e(n).approvals.length-1].approved_by.name||"N/A"),1)])):N("",!0),e(n).reason?(b(),z("div",Re,[Se,t("span",je,c(e(n).reason||"N/A"),1)])):N("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(ot,{modelValue:e(C),"onUpdate:modelValue":u[8]||(u[8]=i=>h(C)?C.value=i:null),persistent:"","max-width":"600px"},{default:a(()=>[s(rt,{onClick:u[7]||(u[7]=i=>C.value=!e(C)),class:"text-h6 d-flex align-center justify-center"}),s(F,{class:"pa-4"},{default:a(()=>[s(at,{class:"text-h5 font-weight-bold text-center"},{default:a(()=>[P(" Payment Instruction ")]),_:1}),s(O,null,{default:a(()=>[t("div",Me,[t("h6",qe,c(o.$t("Anchor"))+":",1),t("h6",Ne,c(e(n).anchor),1)]),t("div",Le,[t("h6",Fe,c(o.$t("Invoice/Unique Ref No"))+":",1),t("h6",Ee,c(e(n).invoice_number),1)])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Ye={class:"d-flex flex-wrap gap-4 mx-5 my-5"},ze=t("div",{class:"d-flex align-center"},null,-1),Oe={class:"d-flex gap-4 flex-wrap align-center"},We={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Qe={class:"text-sm text-medium-emphasis mb-0"},Ge=lt({__name:"AnalyticsPrograms",async setup(nt){let r,_;const D=l(""),L=l(),A=l(),E=l(),I=l([]),p=l(),x=l(15),y=l(1),V=l(),C=l(),n=l(),U=l();l([{title:"Pending",value:"pending"},{title:"Suspended",value:"suspended"}]),l([{title:"Approve",value:"active"},{title:"Reject",value:"inactive"}]);const H=f=>f&&f==="active"?{color:"success",icon:"tabler-thumb-up"}:{color:"error",icon:"tabler-thumb-down"},k=[{title:"Anchor",key:"name"},{title:"Name",key:"code"},{title:"Bank",key:"bank"},{title:"Approval Date",key:"approved_date"},{title:"Program Limit",key:"program_limit"},{title:"Max Limit Per Account",key:"max_limit_per_account"},{title:"Min Financing Days",key:"min_financing_days"},{title:"Max Financing Days",key:"max_financing_days"},{title:"Program Type",key:"program_type"},{title:"Actions",key:"actions",sortable:!1}],{data:v,execute:B}=([r,_]=M(()=>S(j("/all/UI/program/approved",{query:{q:D,status:E,plan:A,role:L,itemsPerPage:x,page:y,sortBy:V,orderBy:C,fromdate:n,todate:U}}))),r=await r,_(),r),{data:$,execute:m}=([r,_]=M(()=>S(j("/programs/changes"))),r=await r,_(),r),d=W(()=>v.value.data);console.log(d);const T=W(()=>$.value.total);B(),m(),$.value.programchange;const Q=async f=>{await ft("/programs/admin/activate",{method:"POST",body:{ids:f,status:p.value}}),await B()};return gt(p,f=>{f&&I.value.length&&Q(I.value)}),(f,g)=>{const tt=Z("router-link"),Y=Z("IconBtn");return b(),q(F,{class:"mb-6"},{default:a(()=>[t("div",Ye,[ze,t("div",Oe,[s(tt,{to:"/programs",class:"btn btn-primary"},{default:a(()=>[P(" View All ")]),_:1})])]),s(e(wt),{"items-per-page":e(x),"onUpdate:itemsPerPage":g[1]||(g[1]=o=>h(x)?x.value=o:null),page:e(y),"onUpdate:page":g[2]||(g[2]=o=>h(y)?y.value=o:null),modelValue:e(I),"onUpdate:modelValue":g[3]||(g[3]=o=>h(I)?I.value=o:null),headers:k,items:e(d),"items-length":e(T),class:"text-no-wrap","show-select":""},{"item.program_limit":a(({item:o})=>[t("p",null,c(o.program_limit.toLocaleString()),1)]),"item.max_limit_per_account":a(({item:o})=>[t("p",null,c(o.max_limit_per_account.toLocaleString()),1)]),bottom:a(()=>[s(_t),t("div",We,[t("p",Qe,c(e(mt)({page:e(y),itemsPerPage:e(x)},e(T))),1),s(vt,{modelValue:e(y),"onUpdate:modelValue":g[0]||(g[0]=o=>h(y)?y.value=o:null),length:Math.ceil(e(T)/e(x)),"total-visible":f.$vuetify.display.xs?1:Math.min(Math.ceil(e(T)/e(x)),5),"active-color":"primary","next-icon":"tabler-caret-right","prev-icon":"tabler-caret-left"},null,8,["modelValue","length","total-visible"])])]),"item.actions":a(({item:o})=>[f.$can("manage","Program Changes Checker")?(b(),q(Y,{key:0,onClick:u=>f.$router.push(`/program/view/${o.id}`)},{default:a(()=>[s(X,{icon:"tabler-eye",color:"info"})]),_:2},1032,["onClick"])):N("",!0),f.$can("manage","Program Changes Checker")?(b(),q(Y,{key:1,onClick:u=>f.$router.push(`/program/view/edit-program/${o.id}`)},{default:a(()=>[s(X,{icon:"tabler-pencil",color:"warning"})]),_:2},1032,["onClick"])):N("",!0),f.$can("manage","Program Changes Checker")?(b(),q(Y,{key:2},{default:a(()=>{var u,R;return[s(X,{icon:(u=H(o.account_status))==null?void 0:u.icon,color:(R=H(o.account_status))==null?void 0:R.color,title:o.account_status,onClick:it=>Q([o.id])},null,8,["icon","color","title","onClick"])]}),_:2},1024)):N("",!0)]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1})}}}),Je=t("h3",{class:"text-h"},"Welcome to Yofinvoice",-1),Ke=t("p",null,"You can handle tasks through the CRM",-1),Xe={href:"https://yofinvoice.deveint.live/crm/",target:"_blank"},Ze=t("p",{class:"mb-4 text-subtitle-1 text-center"}," Please review and accept our terms and conditions to proceed. ",-1),ts=["innerHTML"],oa=lt({__name:"index",async setup(nt){let r,_;l(0);const D=l(!1),L=l(""),A=l(!1),{data:E,execute:I}=([r,_]=M(()=>S(j("/admin/dashboard/statistics"))),r=await r,_(),r),p=E.value,{data:x,execute:y}=([r,_]=M(()=>S(j("/get/UI/dashboard/lead/opportunity"))),r=await r,_(),r);W(()=>x.value.data);const{data:V,execute:C}=([r,_]=M(()=>S(j("/UI/configurations/terms/admin"))),r=await r,_(),r),n=V.value,{data:U,execute:H}=([r,_]=M(()=>S(j("/user/terms/status"))),r=await r,_(),r);y(),yt(async()=>{U.value.accepted_terms===0?D.value=!0:D.value=!1,n&&n.length>0&&(L.value=n[0].terms_conditions)});const k=async()=>{if(!A.value){K.error("You must accept the terms to proceed.");return}try{const $=await ft("/user/terms/accept",{method:"POST",body:{accepted_terms:1},onResponseError({response:m}){errors.value=m._data.errors,K.error("Failed to accept terms. Please try again.")}});D.value=!1,K.success("Terms accepted successfully!")}catch($){console.error($),K.error("An error occurred. Please try again.")}},v=l("Invoice Requests"),B=l(["Invoice Requests","Program Approval"]);return($,m)=>(b(),q(st,{class:"match-height"},{default:a(()=>[s(w,{cols:"12",md:"8"},{default:a(()=>[s(Dt,{stats:e(p),"onUpdate:stats":m[0]||(m[0]=d=>h(p)?p.value=d:null)},null,8,["stats"])]),_:1}),s(w,{cols:"12",md:"4"},{default:a(()=>[s(F,null,{default:a(()=>[s(O,null,{default:a(()=>[Je,Ke,t("a",Xe,[s(et,{class:"me-3"},{default:a(()=>[P("Switch to CRM")]),_:1})])]),_:1})]),_:1})]),_:1}),s(ot,{modelValue:D.value,"onUpdate:modelValue":m[2]||(m[2]=d=>D.value=d),"max-width":"900px",persistent:""},{default:a(()=>[s(F,null,{default:a(()=>[s(at,{class:"headline text-center"},{default:a(()=>[P("Terms and Conditions")]),_:1}),s(O,{class:"pa-4"},{default:a(()=>[Ze,t("div",{innerHTML:L.value,class:"terms-content",style:{"max-height":"600px","overflow-y":"auto",padding:"10px",border:"1px solid #e0e0e0","border-radius":"4px"}},null,8,ts),s(It,{modelValue:A.value,"onUpdate:modelValue":m[1]||(m[1]=d=>A.value=d),label:"I have read and accept the terms and conditions",class:"mt-4",rules:[d=>d||"You must accept the terms to proceed."]},null,8,["modelValue","rules"])]),_:1}),s(kt,{class:"justify-end pa-4"},{default:a(()=>[s(et,{onClick:k,color:"primary",class:"ml-2",disabled:!A.value},{default:a(()=>[P(" Accept ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(w,{cols:"12",lg:"4"},{default:a(()=>[s(st,null,{default:a(()=>[s(w,{cols:"12",lg:"6",md:"3",sm:"6"},{default:a(()=>[s(Ct,{stats:e(p),"onUpdate:stats":m[3]||(m[3]=d=>h(p)?p.value=d:null)},null,8,["stats"])]),_:1}),s(w,{cols:"12",lg:"6",md:"3",sm:"6"},{default:a(()=>[s($t,{stats:e(p),"onUpdate:stats":m[4]||(m[4]=d=>h(p)?p.value=d:null)},null,8,["stats"])]),_:1}),s(w,{cols:"12",md:"6",lg:"12"},{default:a(()=>[s(Pt,{stats:e(p),"onUpdate:stats":m[5]||(m[5]=d=>h(p)?p.value=d:null)},null,8,["stats"])]),_:1})]),_:1})]),_:1}),s(w,{cols:"12",lg:"8",md:"8"},{default:a(()=>[s(At)]),_:1}),s(w,{cols:"12",md:"12"},{default:a(()=>[s(F,null,{default:a(()=>[s(Ut,{modelValue:v.value,"onUpdate:modelValue":m[6]||(m[6]=d=>v.value=d)},{default:a(()=>[(b(!0),z(pt,null,bt(B.value,d=>(b(),q(Bt,{key:d,value:d},{default:a(()=>[P(c(d),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s(O,null,{default:a(()=>[s(Tt,{modelValue:v.value,"onUpdate:modelValue":m[7]||(m[7]=d=>v.value=d)},{default:a(()=>[s(ut,{value:"Invoice Requests"},{default:a(()=>[s(He)]),_:1}),s(ut,{value:"Program Approval"},{default:a(()=>[s(Ge)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}});export{oa as default};