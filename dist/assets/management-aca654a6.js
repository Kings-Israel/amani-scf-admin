import{_ as de}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-544577ba.js";import{_ as Te}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as st}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-bc372057.js";import{_ as pe}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{F as ke}from"./FileSaver.min-4f66c306.js";import{i as g}from"./index-4532b75c.js";import{r as Y}from"./validators-db74a876.js";import{d as me,r as i,w as ce,b4 as je,o as b,h as A,f as o,b as a,p as l,aI as u,a$ as Ie,a4 as $,x as c,aM as le,b6 as se,R as F,c as ae,e as r,A as q,y as P,K as De,t as H,a9 as Ue,a as rt}from"./index-75b434bc.js";import{_ as Be}from"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-678f1b92.js";import{P as ze}from"./vue3-perfect-scrollbar.esm-4577c4a2.js";import{V as fe}from"./VCard-95c0d706.js";import{V as oe}from"./VCardText-76f31582.js";import{V as Me}from"./VForm-e46f5921.js";import{V as Fe}from"./VRow-d6f20668.js";import{V as E}from"./VCol-35b3d337.js";import{V as Le}from"./VFileInput-0c012a84.js";import{V as Xe}from"./VTextarea-86010cd2.js";import{V as He}from"./VNavigationDrawer-0a767767.js";import{p as Ae}from"./paginationMeta-4ad053a4.js";import{X as I}from"./xlsx-d63df831.js";import{u as re}from"./useApi-776c55ea.js";import{c as ie}from"./createUrl-149317bf.js";import{$ as j}from"./api-0c1dfdf3.js";import{V as it,a as Ce}from"./VTabs-bb433ccf.js";import{V as ue}from"./VDivider-fc890531.js";import{V as ut,a as Se}from"./VWindowItem-04415d19.js";import{V as Ee}from"./VSpacer-6f8dff92.js";import{V as Ne}from"./VDataTableServer-e9f6b4ac.js";import{V as Re}from"./VChip-e2ddd660.js";import{V as qe}from"./VMenu-3f143933.js";import{V as $e,a as B}from"./VList-c7d4c8b4.js";import{V as Pe}from"./VPagination-2b54b87a.js";import"./VField-82993695.js";import"./form-2b416184.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./transition-6afda34e.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./dialog-transition-14fdab67.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./filter-3bfef89c.js";import"./helpers-681711bc.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";/* empty css              */import"./ssrBoot-7f224ca6.js";import"./index-2898f57d.js";import"./VSlideGroup-3e745b05.js";import"./VDataTable-c3cccdda.js";import"./VTable-de2d1039.js";const Oe=[{title:"Requested By",key:"user",sortable:!1},{title:"Lead Name",key:"lead_name"},{title:"Activity",key:"activity"},{title:"Amount",key:"amount"},{title:"Approval Date",key:"approved_date",sortable:!1},{title:"Request Date",key:"date",sortable:!1},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],dt=[{title:"Lead Name",key:"lead_name"},{title:"Amount",key:"amount"},{title:"Approval Date",key:"approval_date",sortable:!1},{title:"Request Date",key:"date",sortable:!1},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],pt=me({__name:"NewExpense",props:{isDrawerOpen:{type:Boolean}},emits:["update:isDrawerOpen","userData"],setup(Z,{emit:w}){const O=Z,v=w,m=i(),N=i(!0);ce(m,()=>{N.value=!m.value[0]});const W=je("userData"),T=i(!1),x=i(),y=i(""),_=i(""),D=i(""),V=i(""),U=i(""),p=()=>{v("update:isDrawerOpen",!1),le(()=>{var d,s;(d=x.value)==null||d.reset(),(s=x.value)==null||s.resetValidation()})},f=()=>{var d;(d=x.value)==null||d.validate().then(({valid:s})=>{s&&(v("userData",{leadName:y.value,file:m.value!==void 0?m.value[0]:null,activity:D.value,requestDate:_.value,amount:V.value,notes:U.value,user_id:W.value.id}),v("update:isDrawerOpen",!1),le(()=>{var R,C;(R=x.value)==null||R.reset(),(C=x.value)==null||C.resetValidation()}))})},z=d=>{v("update:isDrawerOpen",d)};return(d,s)=>{const R=Be,C=pe,K=Te,h=de;return b(),A(He,{"model-value":O.isDrawerOpen,width:400,class:"scrollable-content",location:"end",temporary:"","onUpdate:modelValue":z},{default:o(()=>[a(R,{title:"New Expense",onCancel:p}),a(l(ze),{options:{wheelPropagation:!1}},{default:o(()=>[a(fe,{flat:""},{default:o(()=>[a(oe,null,{default:o(()=>[a(l(Me),{ref_key:"refForm",ref:x,modelValue:l(T),"onUpdate:modelValue":s[6]||(s[6]=k=>u(T)?T.value=k:null),onSubmit:Ie(f,["prevent"])},{default:o(()=>[a(Fe,null,{default:o(()=>[a(E,{cols:"12"},{default:o(()=>[a(C,{modelValue:l(y),"onUpdate:modelValue":s[0]||(s[0]=k=>u(y)?y.value=k:null),rules:["requiredValidator"in d?d.requiredValidator:l(Y)],label:"Lead Name",placeholder:"Lead Name"},null,8,["modelValue","rules"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(K,{modelValue:l(D),"onUpdate:modelValue":s[1]||(s[1]=k=>u(D)?D.value=k:null),items:["Airtime","Accomodation","Travel","Internet"],rules:["requiredValidator"in d?d.requiredValidator:l(Y)],label:"Select Expense Purpose",placeholder:"Accomodation"},null,8,["modelValue","rules"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(h,{modelValue:l(_),"onUpdate:modelValue":s[2]||(s[2]=k=>u(_)?_.value=k:null),"append-inner-icon":"tabler-calendar-due",label:"Date",placeholder:"Select Date"},null,8,["modelValue"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(Le,{modelValue:l(m),"onUpdate:modelValue":s[3]||(s[3]=k=>u(m)?m.value=k:null),loading:l(N),"append-inner-icon":"tabler-paperclip",color:"primary",label:"Attatch Document","prepend-icon":""},null,8,["modelValue","loading"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(C,{modelValue:l(V),"onUpdate:modelValue":s[4]||(s[4]=k=>u(V)?V.value=k:null),rules:["requiredValidator"in d?d.requiredValidator:l(Y)],label:"Amount",placeholder:"Amount",type:"number"},null,8,["modelValue","rules"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(Xe,{modelValue:l(U),"onUpdate:modelValue":s[5]||(s[5]=k=>u(U)?U.value=k:null),"auto-grow":"",label:"Notes",placeholder:"Any Additional Details",rows:"2"},null,8,["modelValue"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a($,{class:"me-3",type:"submit"},{default:o(()=>[c(" Submit ")]),_:1}),a($,{color:"secondary",type:"reset",variant:"outlined",onClick:p},{default:o(()=>[c(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),mt=me({__name:"NewReimbursement",props:{isDrawerOpen:{type:Boolean}},emits:["update:isDrawerOpen","userData"],setup(Z,{emit:w}){const O=Z,v=w,m=i(),N=i(!0);ce(m,()=>{N.value=!m.value[0]});const W=je("userData"),T=i(!1),x=i(),y=i(""),_=i(""),D=i(""),V=i(""),U=i(""),p=()=>{v("update:isDrawerOpen",!1),le(()=>{var d,s;(d=x.value)==null||d.reset(),(s=x.value)==null||s.resetValidation()})},f=()=>{var d;(d=x.value)==null||d.validate().then(({valid:s})=>{s&&(v("userData",{leadName:y.value,file:m.value!==void 0?m.value[0]:null,activity:D.value,requestDate:_.value,amount:V.value,notes:U.value,user_id:W.value.id}),v("update:isDrawerOpen",!1),le(()=>{var R,C;(R=x.value)==null||R.reset(),(C=x.value)==null||C.resetValidation()}))})},z=d=>{v("update:isDrawerOpen",d)};return(d,s)=>{const R=Be,C=pe,K=de;return b(),A(He,{"model-value":O.isDrawerOpen,width:400,class:"scrollable-content",location:"end",temporary:"","onUpdate:modelValue":z},{default:o(()=>[a(R,{title:"New Reimbursement",onCancel:p}),a(l(ze),{options:{wheelPropagation:!1}},{default:o(()=>[a(fe,{flat:""},{default:o(()=>[a(oe,null,{default:o(()=>[a(l(Me),{ref_key:"refForm",ref:x,modelValue:l(T),"onUpdate:modelValue":s[5]||(s[5]=h=>u(T)?T.value=h:null),onSubmit:Ie(f,["prevent"])},{default:o(()=>[a(Fe,null,{default:o(()=>[a(E,{cols:"12"},{default:o(()=>[a(C,{modelValue:l(y),"onUpdate:modelValue":s[0]||(s[0]=h=>u(y)?y.value=h:null),rules:["requiredValidator"in d?d.requiredValidator:l(Y)],label:"Lead Name",placeholder:"Lead Name"},null,8,["modelValue","rules"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(K,{modelValue:l(_),"onUpdate:modelValue":s[1]||(s[1]=h=>u(_)?_.value=h:null),"append-inner-icon":"tabler-calendar-due",label:"Date",placeholder:"Select Date"},null,8,["modelValue"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(Le,{modelValue:l(m),"onUpdate:modelValue":s[2]||(s[2]=h=>u(m)?m.value=h:null),loading:l(N),"append-inner-icon":"tabler-paperclip",color:"primary",label:"Attatch Document","prepend-icon":""},null,8,["modelValue","loading"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(C,{modelValue:l(V),"onUpdate:modelValue":s[3]||(s[3]=h=>u(V)?V.value=h:null),rules:["requiredValidator"in d?d.requiredValidator:l(Y)],label:"Amount",placeholder:"Amount",type:"number"},null,8,["modelValue","rules"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a(Xe,{modelValue:l(U),"onUpdate:modelValue":s[4]||(s[4]=h=>u(U)?U.value=h:null),"auto-grow":"",label:"Notes",placeholder:"Any Additional Details",rows:"2"},null,8,["modelValue"])]),_:1}),a(E,{cols:"12"},{default:o(()=>[a($,{class:"me-3",type:"submit"},{default:o(()=>[c(" Submit ")]),_:1}),a($,{color:"secondary",type:"reset",variant:"outlined",onClick:p},{default:o(()=>[c(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),ct=r("h4",{class:"text-h4 text-high-emphasis mb-1"}," Expense Management ",-1),ft=r("h5",{class:"text-h5"}," Expenses ",-1),vt=r("h5",{class:"text-h5"}," Reimbursements ",-1),Vt={class:"d-flex flex-wrap gap-4 mx-5"},bt={class:"d-flex align-center"},yt={class:"d-flex gap-4 flex-wrap align-center"},_t={class:"v-data-table__tr"},gt=["colspan"],wt={class:"my-2"},xt=r("strong",null,"Requested By:",-1),ht=r("strong",null,"Lead Name:",-1),kt=r("strong",null,"Activity:",-1),Dt=r("strong",null,"Amount:",-1),Ut=r("strong",null,"Request Date:",-1),At=r("strong",null,"Approval Date:",-1),Ct=r("strong",null,"Notes:",-1),St={key:0},Et=r("strong",null,"Attachment:",-1),Nt=["href"],Rt=r("td",null,null,-1),qt=r("td",null,null,-1),$t=r("td",null,null,-1),Pt=["href"],Ot={key:1},Tt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},jt={class:"text-sm text-disabled mb-0"},It={class:"d-flex flex-wrap gap-4 mx-5"},Bt={class:"d-flex align-center"},zt={class:"d-flex gap-4 flex-wrap align-center"},Mt=["href"],Ft={key:1},Lt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Xt={class:"text-sm text-disabled mb-0"},Za=me({__name:"management",async setup(Z){let w,O;const v={action:"manage",subject:"View Expenses"},m=i(""),N=i(!0),W=i(0),T=i(),x=i(),y=i(),_=i(),D=i();i();const V=i([]),U=i(),p=i(50),f=i(1),z=i(),d=i(),s=n=>{var t,S;f.value=n.page,z.value=(t=n.sortBy[0])==null?void 0:t.key,d.value=(S=n.sortBy[0])==null?void 0:S.order},R=()=>{N.value=!N.value},C=()=>{m.value=""},K=()=>{W.value=0},h=()=>{K(),C()},k=i([{title:"Pending",value:"pending"},{title:"Approved",value:"approved"},{title:"Closed",value:"closed"}]),We=i([{title:"Approve",value:"approved"},{title:"Reject",value:"rejected"}]),{data:ve,execute:L}=([w,O]=se(()=>re(ie("/expense/management",{query:{q:m,status:y,requestedBy:D,plan:x,role:T,date:_,itemsPerPage:p,page:f,sortBy:z,orderBy:d}}))),w=await w,O(),w),{data:Ve,execute:Q}=([w,O]=se(()=>re(ie("/expense/reimbursements",{query:{q:m,status:y,requestedBy:D,plan:x,date:_,role:T,itemsPerPage:p,page:f,sortBy:z,orderBy:d}}))),w=await w,O(),w),be=F(()=>ve.value.data),M=F(()=>ve.value.total),ye=F(()=>Ve.value.data),Ke=F(()=>Ve.value.total),_e=n=>{const t=n.toLowerCase();return t==="pending"?{text:"Pending",color:"warning"}:t==="pending_checker_approval"?{text:"Pending Checker",color:"warning"}:t==="approved"?{text:"Approved",color:"success"}:t==="rejected"?{text:"Rejected",color:"error"}:t==="inactive"?{text:"Inactive",color:"secondary"}:{text:n,color:"primary"}};F(()=>V.value.length<1),F(()=>V.value.length<1);const ee=i(!1),te=i(!1),Qe=async n=>{const t=new FormData;t.append("leadName",n.leadName),n.file&&t.append("file",n.file),t.append("requestDate",n.requestDate),t.append("notes",n.notes),t.append("amount",n.amount.toString());try{await j("/new/UI/reimbursement",{method:"POST",body:t}),await Q(),g.success("Reimbursement added successfully!")}catch(S){g.error("Error adding reimbursement."),console.error("Error adding expense:",S)}},Ge=async n=>{const t=new FormData;t.append("leadName",n.leadName),n.file&&t.append("file",n.file),t.append("activity",n.activity),t.append("requestDate",n.requestDate),t.append("notes",n.notes),t.append("amount",n.amount.toString());try{await j("/new/UI/expenses",{method:"POST",body:t}),await L(),g.success("Expense added successfully!")}catch(S){g.error("Error adding expense."),console.error("Error adding expense:",S)}},Je=async n=>{try{await j("/approve/UI/expense",{method:"POST",body:{id:n}}),await L(),g.success("Expense approved successfully!")}catch{g.error("Error approving expense.")}},Ye=async n=>{try{await j("/reject/UI/expense",{method:"POST",body:{id:n}}),await L(),g.success("Expense rejected successfully!")}catch{g.error("Error rejecting expense.")}},Ze=async n=>{try{await j("/approve/UI/reimbursement",{method:"POST",body:{id:n}}),await Q(),g.success("Reimbursement approved successfully!")}catch{g.error("Error approving reimbursement.")}},et=async n=>{try{await j("/approve/UI/reimbursement/reject",{method:"POST",body:{id:n}}),await Q(),g.success("Reimbursement rejected successfully!")}catch{g.error("Error rejecting reimbursement.")}},tt=async n=>{try{await j("/close/UI/expense",{method:"POST",body:{id:n}}),await L(),g.success("Expense closed successfully!")}catch{g.error("Error closing expense.")}},at=async n=>{try{await j("/close/UI/reimbursement",{method:"POST",body:{id:n}}),await Q(),g.success("Reimbursement closed successfully!")}catch{g.error("Error closing reimbursement.")}},lt=async n=>{try{await j("/update/UI/expenses/status",{method:"POST",body:{ids:n,status:U.value}}),await L(),g.success("Status updated successfully!")}catch{g.error("Error updating status.")}};ce(U,n=>{n&&V.value.length&&lt(V.value)});const X=i("item-1"),{data:ne,execute:Ht}=([w,O]=se(()=>re(ie("/users/UI/list?itemsPerPage=100"))),w=await w,O(),w),ge=F(()=>!ne.value||!ne.value.users?[]:ne.value.users);L(),Q();const ot=()=>{const n=I.utils.json_to_sheet(be.value),t=I.utils.book_new();I.utils.book_append_sheet(t,n,"Expenses");const S=I.write(t,{bookType:"xlsx",type:"array"});ke.saveAs(new Blob([S],{type:"application/octet-stream"}),"Expenses.xlsx")},nt=()=>{const n=I.utils.json_to_sheet(ye.value),t=I.utils.book_new();I.utils.book_append_sheet(t,n,"Reimbursements");const S=I.write(t,{bookType:"xlsx",type:"array"});ke.saveAs(new Blob([S],{type:"application/octet-stream"}),"Reimbursements.xlsx")};return(n,t)=>{const S=pe,we=st,G=Te,xe=de,he=rt("IconBtn");return b(),ae("section",null,[ct,a(fe,null,{default:o(()=>[a(it,{modelValue:l(X),"onUpdate:modelValue":t[0]||(t[0]=e=>u(X)?X.value=e:null)},{default:o(()=>[a(Ce,null,{default:o(()=>[ft]),_:1}),a(Ce,null,{default:o(()=>[vt]),_:1})]),_:1},8,["modelValue"]),a(ue),a(ut,{modelValue:l(X),"onUpdate:modelValue":t[22]||(t[22]=e=>u(X)?X.value=e:null)},{default:o(()=>[a(Se,null,{default:o(()=>[a(oe,{class:"d-flex flex-wrap py-4 gap-4"},{default:o(()=>[r("div",Vt,[r("div",bt,[a(S,{modelValue:l(m),"onUpdate:modelValue":t[1]||(t[1]=e=>u(m)?m.value=e:null),"append-inner-icon":l(N)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Search",style:{"inline-size":"200px"},type:"text","onClick:appendInner":R,"onClick:append":h},null,8,["modelValue","append-inner-icon"]),a(we,{modelValue:l(D),"onUpdate:modelValue":t[2]||(t[2]=e=>u(D)?D.value=e:null),"item-title":e=>e.fullName,"item-value":e=>e.id,items:l(ge),style:{"inline-size":"200px"},class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Requested By"},null,8,["modelValue","item-title","item-value","items"]),a(G,{modelValue:l(y),"onUpdate:modelValue":t[3]||(t[3]=e=>u(y)?y.value=e:null),items:l(k),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"]),a(xe,{modelValue:l(_),"onUpdate:modelValue":t[4]||(t[4]=e=>u(_)?_.value=e:null),"append-inner-icon":l(N)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Select Date",style:{"inline-size":"200px"}},null,8,["modelValue","append-inner-icon"])]),a(Ee),r("div",yt,[n.$can("manage","Expenses Checker")?(b(),A(G,{key:0,modelValue:l(U),"onUpdate:modelValue":t[5]||(t[5]=e=>u(U)?U.value=e:null),items:l(We),"item-title":"title","item-value":"value",class:"me-1","clear-icon":"tabler-x",clearable:"",chips:"",placeholder:"Bulk Actions",style:{"inline-size":"200px"}},null,8,["modelValue","items"])):q("",!0),a(G,{modelValue:l(p),"onUpdate:modelValue":t[6]||(t[6]=e=>u(p)?p.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),a($,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:ot})]),n.$can(v.action,"Expenses Maker")?(b(),A($,{key:0,"prepend-icon":"tabler-plus",onClick:t[7]||(t[7]=e=>ee.value=!0)},{default:o(()=>[c(" Request Expense ")]),_:1})):q("",!0)])]),_:1}),a(l(Ne),{modelValue:l(V),"onUpdate:modelValue":t[9]||(t[9]=e=>u(V)?V.value=e:null),"items-per-page":l(p),"onUpdate:itemsPerPage":t[10]||(t[10]=e=>u(p)?p.value=e:null),page:l(f),"onUpdate:page":t[11]||(t[11]=e=>u(f)?f.value=e:null),headers:l(Oe),items:l(be),"items-length":l(M),class:"text-no-wrap","show-select":"","expand-on-click":"","onUpdate:options":s},{"expanded-row":o(e=>[r("tr",_t,[r("td",{colspan:l(Oe).length},[r("div",wt,[r("p",null,[xt,c(" "+P(e.item.user),1)]),r("p",null,[ht,c(" "+P(e.item.lead_name),1)]),r("p",null,[kt,c(" "+P(e.item.activity),1)]),r("p",null,[Dt,c(" "+P(e.item.amount),1)]),r("p",null,[Ut,c(" "+P(e.item.date),1)]),r("p",null,[At,c(" "+P(e.item.approved_date),1)]),r("p",null,[Ct,c(" "+P(e.item.notes),1)]),e.item.attachment?(b(),ae("p",St,[Et,c(),r("a",{href:e.item.attachment,target:"_blank",rel:"noopener noreferrer"},"View Attachment",8,Nt)])):q("",!0)])],8,gt),Rt,qt,$t])]),"item.amount":o(({item:e})=>[r("span",{style:De({color:`${n.$vuetify.theme.global.current.colors.success}`})},P(e.amount),5)]),"item.status":o(({item:e})=>[a(Re,H({class:"text-capitalize",size:"small"},_e(e.status)),null,16)]),"item.actions":o(({item:e})=>[n.$can(v.action,"Expenses Checker")?(b(),A(he,{key:0},{default:o(()=>[a(Ue,{icon:"tabler-dots-vertical"}),a(qe,{activator:"parent"},{default:o(()=>[a($e,null,{default:o(()=>[e.attachment?(b(),A(B,{key:0,"prepend-icon":"tabler-eye"},{default:o(()=>[r("a",{href:e.attachment,target:"_blank",rel:"noopener noreferrer"}," View Attachment ",8,Pt)]),_:2},1024)):q("",!0),(e.status==="pending_checker_approval"||e.status==="pending")&&n.$can(v.action,v.subject)?(b(),A(B,{key:1,value:"approve","prepend-icon":"tabler-thumb-up",onClick:J=>Je(e.id)},{default:o(()=>[c(" Approve ")]),_:2},1032,["onClick"])):q("",!0),(e.status==="pending_checker_approval"||e.status==="pending")&&n.$can(v.action,v.subject)?(b(),A(B,{key:2,value:"approve","prepend-icon":"tabler-thumb-down",onClick:J=>Ye(e.id)},{default:o(()=>[c(" Reject ")]),_:2},1032,["onClick"])):q("",!0),e.status==="approved"&&n.$can(v.action,v.subject)?(b(),A(B,{key:3,value:"close","prepend-icon":"tabler-check",onClick:J=>tt(e.id)},{default:o(()=>[c(" Close ")]),_:2},1032,["onClick"])):q("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(b(),ae("p",Ot," Insufficient Permissions "))]),bottom:o(()=>[a(ue),r("div",Tt,[r("p",jt,P(l(Ae)({page:l(f),itemsPerPage:l(p)},l(M))),1),a(Pe,{modelValue:l(f),"onUpdate:modelValue":t[8]||(t[8]=e=>u(f)?f.value=e:null),length:Math.ceil(l(M)/l(p)),"total-visible":n.$vuetify.display.xs?1:Math.ceil(l(M)/l(p))},{prev:o(e=>[a($,H({color:"default"},e,{variant:"tonal"}),{default:o(()=>[c(" Previous ")]),_:2},1040)]),next:o(e=>[a($,H({color:"default"},e,{variant:"tonal"}),{default:o(()=>[c(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","headers","items","items-length"])]),_:1}),a(Se,null,{default:o(()=>[a(oe,{class:"d-flex flex-wrap py-4 gap-4"},{default:o(()=>[r("div",It,[r("div",Bt,[a(S,{modelValue:l(m),"onUpdate:modelValue":t[12]||(t[12]=e=>u(m)?m.value=e:null),"append-inner-icon":l(N)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Search",style:{"inline-size":"200px"},type:"text","onClick:appendInner":R,"onClick:append":h},null,8,["modelValue","append-inner-icon"]),a(we,{modelValue:l(D),"onUpdate:modelValue":t[13]||(t[13]=e=>u(D)?D.value=e:null),"item-title":e=>e.fullName,"item-value":e=>e.id,items:l(ge),style:{"inline-size":"200px"},class:"me-3",placeholder:"Requested By"},null,8,["modelValue","item-title","item-value","items"]),a(G,{modelValue:l(y),"onUpdate:modelValue":t[14]||(t[14]=e=>u(y)?y.value=e:null),items:l(k),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"]),a(xe,{modelValue:l(_),"onUpdate:modelValue":t[15]||(t[15]=e=>u(_)?_.value=e:null),"append-inner-icon":l(N)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Select Date",style:{"inline-size":"200px"}},null,8,["modelValue","append-inner-icon"])]),a(Ee),r("div",zt,[a(G,{modelValue:l(p),"onUpdate:modelValue":t[16]||(t[16]=e=>u(p)?p.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),a($,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:nt})]),n.$can(v.action,"Reimbursements Maker")?(b(),A($,{key:0,"prepend-icon":"tabler-plus",onClick:t[17]||(t[17]=e=>te.value=!0)},{default:o(()=>[c(" Request Reimbursement ")]),_:1})):q("",!0)])]),_:1}),a(l(Ne),{modelValue:l(V),"onUpdate:modelValue":t[19]||(t[19]=e=>u(V)?V.value=e:null),"items-per-page":l(p),"onUpdate:itemsPerPage":t[20]||(t[20]=e=>u(p)?p.value=e:null),page:l(f),"onUpdate:page":t[21]||(t[21]=e=>u(f)?f.value=e:null),headers:l(dt),items:l(ye),"items-length":l(Ke),class:"text-no-wrap","show-select":"","onUpdate:options":s},{"item.amount":o(({item:e})=>[r("span",{style:De({color:`${n.$vuetify.theme.global.current.colors.success}`})},P(e.amount),5)]),"item.status":o(({item:e})=>[a(Re,H({class:"text-capitalize",size:"small"},_e(e.status)),null,16)]),"item.actions":o(({item:e})=>[n.$can(v.action,"Reimbursements Checker")?(b(),A(he,{key:0},{default:o(()=>[a(Ue,{icon:"tabler-dots-vertical"}),a(qe,{activator:"parent"},{default:o(()=>[a($e,null,{default:o(()=>[e.attachment?(b(),A(B,{key:0,"prepend-icon":"tabler-eye"},{default:o(()=>[r("a",{href:e.attachment,target:"_blank",rel:"noopener noreferrer"},"View Attachment",8,Mt)]),_:2},1024)):q("",!0),e.status==="pending_checker_approval"||e.status==="pending"?(b(),A(B,{key:1,value:"approve","prepend-icon":"tabler-thumb-up",onClick:J=>Ze(e.id)},{default:o(()=>[c(" Approve ")]),_:2},1032,["onClick"])):q("",!0),e.status==="pending_checker_approval"||e.status==="pending"?(b(),A(B,{key:2,value:"reject","prepend-icon":"tabler-thumb-down",onClick:J=>et(e.id)},{default:o(()=>[c(" Reject ")]),_:2},1032,["onClick"])):q("",!0),e.status==="approved"?(b(),A(B,{key:3,value:"approve","prepend-icon":"tabler-check",onClick:J=>at(e.id)},{default:o(()=>[c(" Close ")]),_:2},1032,["onClick"])):q("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(b(),ae("p",Ft," Insufficient Permissions "))]),bottom:o(()=>[a(ue),r("div",Lt,[r("p",Xt,P(l(Ae)({page:l(f),itemsPerPage:l(p)},l(M))),1),a(Pe,{modelValue:l(f),"onUpdate:modelValue":t[18]||(t[18]=e=>u(f)?f.value=e:null),length:Math.ceil(l(M)/l(p)),"total-visible":n.$vuetify.display.xs?1:Math.ceil(l(M)/l(p))},{prev:o(e=>[a($,H({color:"default"},e,{variant:"tonal"}),{default:o(()=>[c(" Previous ")]),_:2},1040)]),next:o(e=>[a($,H({color:"default"},e,{variant:"tonal"}),{default:o(()=>[c(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","headers","items","items-length"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(pt,{isDrawerOpen:l(ee),"onUpdate:isDrawerOpen":t[23]||(t[23]=e=>u(ee)?ee.value=e:null),onUserData:Ge},null,8,["isDrawerOpen"]),a(mt,{isDrawerOpen:l(te),"onUpdate:isDrawerOpen":t[24]||(t[24]=e=>u(te)?te.value=e:null),onUserData:Qe},null,8,["isDrawerOpen"])])}}});export{Za as default};