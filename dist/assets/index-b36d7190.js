import{_ as ve}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as pe}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{p as me}from"./paginationMeta-4ad053a4.js";import{F as _e}from"./FileSaver.min-4f66c306.js";import{X as C}from"./xlsx-d63df831.js";import{u as Q}from"./useApi-776c55ea.js";import{c as Y}from"./createUrl-149317bf.js";import{V as L}from"./VCol-35b3d337.js";import{d as Z,r as e,R as r,b6 as ee,o as P,h as G,f as l,b as o,e as i,a4 as w,x as fe,p as B,y as V,a9 as xe,t as J,A as ye,a as Ve,c as be,aI as ge}from"./index-75b434bc.js";import{a as De,V as ke}from"./VCard-95c0d706.js";import{V as Ae}from"./VDataTableServer-e9f6b4ac.js";import{V as Ce}from"./VTooltip-c5403118.js";import{V as he}from"./VChip-e2ddd660.js";import{V as Ie}from"./VDivider-fc890531.js";import{V as we}from"./VPagination-2b54b87a.js";import{V as Pe}from"./VRow-d6f20668.js";import{V as Be}from"./VCardText-76f31582.js";import{V as Se,a as Fe}from"./VWindowItem-04415d19.js";import{_ as Re}from"./_plugin-vue_export-helper-c27b6911.js";import"./form-2b416184.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./index-2898f57d.js";/* empty css              */import"./VDataTable-c3cccdda.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";const Ee=i("h2",{class:"my-4 mx-5"},[i("b",null," VF - Potential Financing Report ")],-1),qe={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Ue={class:"d-flex align-center flex-wrap gap-4"},je={class:"d-flex gap-4 flex-wrap align-center"},Ne={class:"d-flex align-center"},Te={class:"text-success"},ze={class:"text-success"},$e={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Me={class:"text-sm text-medium-emphasis mb-0"},Xe=Z({__name:"VFInvoiceReport",async setup(te){let u,x;const p=e(),s=e(),h=e(),m=e(""),_=e(""),b=e(""),g=e(),f=e(),D=e(""),I=e(""),y=e(""),k=e(""),S=e(""),F=e(""),R=e(""),E=e(""),q=e(),U=e(),j=e(""),N=e(""),T=e(""),z=e(""),$=e(""),M=e([]),c=e(50),d=e(1),ae=e(),X=e(),oe=[{title:"Invoice/Unique Ref No.",key:"invoice_number"},{title:"Bank",key:"bank"},{title:"Vendor",key:"vendor"},{title:"Anchor",key:"anchor"},{title:"Net Invoice Amount (Ksh)",key:"amount"},{title:"Invoice Date",key:"invoice_date"},{title:"Due Date",key:"due_date"}];e([{title:"Submitted",value:"submitted"},{title:"Pending Approval",value:"pending_approval"},{title:"Approved",value:"approved"},{title:"Disbursed",value:"disbursed"},{title:"Rejected",value:"denied"},{title:"Closed",value:"closed"}]),e([{title:"Due Date (ASC)",value:"asc_due_date"},{title:"Due Date (DESC)",value:"desc_due_date"},{title:"Request Date (ASC)",value:"asc_date_requested"},{title:"Request Date (DESC)",value:"desc_date_requested"},{title:"Invoice Amount (ASC)",value:"asc_amount"},{title:"Invoice Amount (DESC)",value:"desc_amount"},{title:"Created (ASC)",value:"asc_created"},{title:"Created (DESC)",value:"desc_created"}]),e([{title:"Vendor Financing",value:1},{title:"Dealer Financing",value:2}]);const le=r(()=>({vendor:F.value||void 0,anchor:R.value||void 0,bank:E.value||void 0,status:p.value,program_type:s.value,sortBy:h.value,invoice_number:U.value||void 0,invoice_amount:q.value||void 0,expiry_date:j.value||void 0,due_date:N.value||void 0,date_requested:T.value||void 0,start_date:z.value||void 0,end_date:$.value||void 0,page:d.value,itemsPerPage:c.value,orderBy:X.value})),{data:O,execute:W}=([u,x]=ee(()=>Q(Y("/admin/vfrequests/invoices",{query:le}))),u=await u,x(),u),H=r(()=>O.value.data),A=r(()=>O.value.total),ie=n=>{var a,v;d.value=n.page,ae.value=(a=n.sortBy[0])==null?void 0:a.key,X.value=(v=n.sortBy[0])==null?void 0:v.order},ne=n=>({Approved:{text:"Approved",color:"success"},"Past Due":{text:n,color:"error"},Closed:{text:"Closed",color:"success"},Rejected:{text:"Rejected",color:"error"},Disbursed:{text:"Disbursed",color:"info"}})[n]||{text:n,color:"default"},K=async()=>{F.value=m.value,R.value=_.value,E.value=b.value,U.value=f.value,q.value=g.value,j.value=D.value,N.value=I.value,T.value=y.value,z.value=k.value,$.value=S.value,await W()},se=()=>{m.value="",_.value="",b.value="",p.value=void 0,s.value=void 0,h.value=void 0,f.value=void 0,g.value=void 0,D.value=void 0,I.value=void 0,y.value=void 0,k.value=void 0,S.value=void 0,d.value=1,K()},re=()=>{const n=C.utils.json_to_sheet(H.value),a=C.utils.book_new();C.utils.book_append_sheet(a,n,"Invoices");const v=C.write(a,{bookType:"xlsx",type:"array"});_e.saveAs(new Blob([v],{type:"application/octet-stream"}),"invoices.xlsx")};return W(),(n,a)=>{const v=pe,ue=ve,ce=Ve("IconBtn");return P(),G(L,null,{default:l(()=>[Ee,o(Pe,null,{default:l(()=>[o(L,null,{default:l(()=>[i("div",qe,[i("div",Ue,[o(v,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=t=>f.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Invoice Number",style:{flex:"1 auto","min-inline-size":"250px"},type:"text"},null,8,["modelValue"]),o(v,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Dealer",style:{flex:"1 1 auto","min-inline-size":"250px"},type:"text"},null,8,["modelValue"]),o(v,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=t=>_.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Anchor",style:{flex:"1 1 auto","min-inline-size":"250px"},type:"text"},null,8,["modelValue"]),o(w,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:K}),o(w,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:se})]),i("div",je,[o(ue,{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=t=>c.value=t),items:[5,10,20,25,50,100],style:{flex:"1 1 auto"}},null,8,["modelValue"]),o(w,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:re},{default:l(()=>[fe(" Export ")]),_:1})])]),o(De,{class:"notification-section"},{default:l(()=>[o(B(Ae),{"items-per-page":c.value,"onUpdate:itemsPerPage":a[5]||(a[5]=t=>c.value=t),page:d.value,"onUpdate:page":a[6]||(a[6]=t=>d.value=t),modelValue:M.value,"onUpdate:modelValue":a[7]||(a[7]=t=>M.value=t),headers:oe,items:H.value,"items-length":A.value,"item-key":"id",class:"text-wrap","show-select":"","onUpdate:options":ie},{"item.invoice_number":l(({item:t})=>[i("div",Ne,[i("span",null,V(t.invoice_number),1),t.reason!=null?(P(),G(ce,{key:0,class:"mx-1",small:"",color:"error"},{default:l(()=>[o(Ce,{bottom:""},{activator:l(({props:de})=>[o(xe,J(de,{icon:"tabler-info-circle",size:"15",onClick:We=>n.openInfoDialog(t)}),null,16,["onClick"])]),default:l(()=>[i("span",null,V(t.reason),1)]),_:2},1024)]),_:2},1024)):ye("",!0)])]),"item.amount":l(({item:t})=>[i("span",Te,V(t.amount),1)]),"item.discount_amount":l(({item:t})=>[i("span",ze,V(t.discount_amount),1)]),"item.status":l(({item:t})=>[o(he,J({density:"default",label:""},ne(t.status),{class:"text-capitalize"}),null,16)]),bottom:l(()=>[o(Ie),i("div",$e,[i("p",Me,V(B(me)({page:d.value,itemsPerPage:c.value},A.value)),1),o(we,{modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=t=>d.value=t),length:Math.ceil(A.value/c.value),"total-visible":n.$vuetify.display.xs?1:Math.min(Math.ceil(A.value/c.value),5),"active-color":"primary","next-icon":"tabler-caret-right","prev-icon":"tabler-caret-left"},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Oe=Z({__name:"index",async setup(te){let u,x;const p=e("All Uploaded Invoices"),{data:s,execute:h}=([u,x]=ee(()=>Q(Y("/admin/invoices"))),u=await u,x(),u);r(()=>s.value.data);const m=r(()=>s.value.total);r(()=>s.value.totalCreated);const _=r(()=>s.value.totalExpired),b=r(()=>s.value.totalApproved),g=r(()=>s.value.totalPending),f=r(()=>s.value.totalDenied),D=r(()=>s.value.totalPaid);return e([{title:"Anchor Invoices",value:m,icon:"tabler-mail-opened",color:"#42A5F5"},{title:"Expired Invoices",value:_,icon:"tabler-checks",color:"#EF5350"},{title:"Approved Invoices",value:b,icon:"tabler-checks",color:"#66BB6A"},{title:"Paid Invoices",value:D,icon:"tabler-file-invoice",color:"#26A69A"},{title:"Pending Invoices",value:g,icon:"tabler-clock",color:"#FFCA28"},{title:"Rejected Invoices",value:f,icon:"tabler-x",color:"#D32F2F"}]),(I,y)=>(P(),be("div",null,[i("section",null,[o(ke,null,{default:l(()=>[o(Be,null,{default:l(()=>[o(Se,{modelValue:B(p),"onUpdate:modelValue":y[0]||(y[0]=k=>ge(p)?p.value=k:null)},{default:l(()=>[o(Fe,{value:"Requested"},{default:l(()=>[o(Xe)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]))}});const Tt=Re(Oe,[["__scopeId","data-v-7f85d25a"]]);export{Tt as default};