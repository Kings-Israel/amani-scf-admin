import{_ as me}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-544577ba.js";import{_ as ve}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as pe}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{p as xe}from"./paginationMeta-4ad053a4.js";import{F as fe}from"./FileSaver.min-4f66c306.js";import{X as C}from"./xlsx-d63df831.js";import{u as ye}from"./useApi-776c55ea.js";import{c as _e}from"./createUrl-149317bf.js";import{V as Q}from"./VCol-35b3d337.js";import{d as Ve,r as l,R as A,b6 as be,w as ge,o as W,c as De,b as a,f as n,e as s,a4 as S,x as ke,p as Y,y as d,h as Ce,a9 as he,t as Z,A as Ae,F as Se,a as we}from"./index-75b434bc.js";import{V as Ie}from"./VDataTableServer-e9f6b4ac.js";import{V as qe}from"./VTooltip-c5403118.js";import{V as Be}from"./VChip-e2ddd660.js";import{V as ze}from"./VDivider-fc890531.js";import{V as Ue}from"./VPagination-2b54b87a.js";import{V as Pe}from"./VRow-d6f20668.js";const Re=s("h2",{class:"my-4 mx-5"},[s("b",null," Requested Invoices")],-1),Ee={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Ne={class:"d-flex align-center flex-wrap gap-4"},Fe={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Te={class:"d-flex align-center flex-wrap gap-4"},je={class:"d-flex gap-4 flex-wrap align-center"},Oe={class:"d-flex align-center"},$e={class:"text-success"},Xe={class:"text-success"},Me={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},He={class:"text-sm text-medium-emphasis mb-0"},ct=Ve({__name:"RequestedInvoiceReport",async setup(Le){let m,w;l(!0);const I=l(),v=l(),q=l(),p=l(null),x=l(null),f=l(""),y=l(""),_=l(""),V=l(),b=l(),B=l(""),g=l(""),D=l(""),z=l(""),U=l(""),P=l(),R=l(),E=l(),N=l(),F=l(),T=l(),j=l(),ee=l(),O=l(),$=l(),X=l(),r=l(50),u=l(1),te=l(),M=l(),le=[{title:"Invoice Number",key:"invoice_number"},{title:"Vendor",key:"vendor"},{title:"Bank",key:"bank"},{title:"Anchor",key:"anchor"},{title:"Date Requested",key:"date_requested"},{title:"Invoice Amount",key:"amount"},{title:"Discount Amount",key:"discount_amount"},{title:"Expiry Date",key:"expiry_date"},{title:"Invoice Due Date",key:"due_date"},{title:"Status",key:"status"}],ae=l([{title:"Submitted",value:"submitted"},{title:"Pending Approval",value:"pending_approval"},{title:"Approved",value:"approved"},{title:"Disbursed",value:"disbursed"},{title:"Rejected",value:"denied"},{title:"Closed",value:"closed"}]),oe=l([{title:"Invoice No. (ASC)",value:"asc_invoice_number"},{title:"Invoice No (DESC)",value:"desc_invoice_number"},{title:"Vendor (ASC)",value:"asc_vendor"},{title:"Vendor (DESC)",value:"desc_vendor"},{title:"Anchor (ASC)",value:"asc_anchor"},{title:"Anchor (DESC)",value:"desc_anchor"},{title:"Due Date (ASC)",value:"asc_due_date"},{title:"Due Date (DESC)",value:"desc_due_date"},{title:"Request Date (ASC)",value:"asc_date_requested"},{title:"Request Date (DESC)",value:"desc_date_requested"}]),se=l([{title:"Vendor Financing",value:1},{title:"Dealer Financing",value:2}]),H=A(()=>({vendor:P.value,anchor:R.value,bank:E.value,status:I.value,program_type:v.value,sortBy:q.value,invoice_number:F.value,invoice_amount:N.value,expiry_date:T.value,due_date:j.value,request_date:ee.value,date_requested:O.value,start_date:$.value,end_date:X.value,page:u.value,itemsPerPage:r.value,orderBy:M.value})),{data:L,execute:h}=([m,w]=be(()=>ye(_e("/admin/requested/invoices",{query:H}))),m=await m,w(),m),G=A(()=>L.value.data),k=A(()=>L.value.total),ne=o=>{var t,i;u.value=o.page,te.value=(t=o.sortBy[0])==null?void 0:t.key,M.value=(i=o.sortBy[0])==null?void 0:i.order},ie=o=>{switch(o){case"Approved":return{text:"Approved",color:"success"};case"Past Due":return{text:o,color:"error"};case"Closed":return{text:"Closed",color:"success"};case"Rejected":return{text:"Rejected",color:"error"};case"Disbursed":return{text:"Disbursed",color:"info"};default:return{text:o,color:"default"}}},J=async()=>{P.value=f.value,R.value=y.value,E.value=_.value,F.value=b.value,I.value=p.value,q.value=x.value,N.value=V.value,T.value=B.value,j.value=g.value,O.value=D.value,$.value=z.value,X.value=U.value,await h()},re=()=>{f.value="",y.value="",_.value="",p.value=void 0,v.value=void 0,x.value=void 0,b.value=void 0,V.value=void 0,B.value=void 0,g.value=void 0,D.value=void 0,z.value=void 0,U.value=void 0,u.value=1,J()},ue=()=>{const o=C.utils.json_to_sheet(G.value),t=C.utils.book_new();C.utils.book_append_sheet(t,o,"Invoices");const i=C.write(t,{bookType:"xlsx",type:"array"});fe.saveAs(new Blob([i],{type:"application/octet-stream"}),"invoices.xlsx")};return ge(H,h,{immediate:!0}),h(),(o,t)=>{const i=pe,c=ve,K=me,ce=we("IconBtn");return W(),De(Se,null,[a(Q,null,{default:n(()=>[Re]),_:1}),a(Pe,null,{default:n(()=>[s("div",Ee,[s("div",Ne,[a(i,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),items:se.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Program Type",style:{flex:"1 1 auto","min-inline-size":"400px"}},null,8,["modelValue","items"])])]),s("div",Fe,[s("div",Te,[a(c,{modelValue:b.value,"onUpdate:modelValue":t[1]||(t[1]=e=>b.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Invoice Number",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),a(c,{modelValue:V.value,"onUpdate:modelValue":t[2]||(t[2]=e=>V.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Invoice Amount",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),a(c,{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=e=>f.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Vendor",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),a(c,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=e=>_.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Bank",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),a(c,{modelValue:y.value,"onUpdate:modelValue":t[5]||(t[5]=e=>y.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Anchor",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),a(K,{modelValue:D.value,"onUpdate:modelValue":t[6]||(t[6]=e=>D.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Request Date",style:{flex:"1 1 auto","min-inline-size":"150px"}},null,8,["modelValue"]),a(K,{modelValue:g.value,"onUpdate:modelValue":t[7]||(t[7]=e=>g.value=e),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Invoice Due Date",style:{flex:"1 1 auto","min-inline-size":"150px"}},null,8,["modelValue"]),a(i,{modelValue:p.value,"onUpdate:modelValue":t[8]||(t[8]=e=>p.value=e),items:ae.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Select Status",style:{flex:"1 1 auto","max-inline-size":"200px","min-inline-size":"150px"}},null,8,["modelValue","items"]),a(i,{modelValue:x.value,"onUpdate:modelValue":t[9]||(t[9]=e=>x.value=e),items:oe.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Sort By",style:{flex:"1 1 auto","max-inline-size":"200px","min-inline-size":"150px"}},null,8,["modelValue","items"]),a(S,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:J}),a(S,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:re})]),s("div",je,[a(i,{modelValue:r.value,"onUpdate:modelValue":t[10]||(t[10]=e=>r.value=e),items:[5,10,20,25,50,100],style:{flex:"1 1 auto"}},null,8,["modelValue"]),a(S,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:ue},{default:n(()=>[ke(" Export ")]),_:1})])]),a(Q,null,{default:n(()=>[a(Y(Ie),{"items-per-page":r.value,"onUpdate:itemsPerPage":t[12]||(t[12]=e=>r.value=e),page:u.value,"onUpdate:page":t[13]||(t[13]=e=>u.value=e),modelValue:o.selectedCompany,"onUpdate:modelValue":t[14]||(t[14]=e=>o.selectedCompany=e),headers:le,items:G.value,"items-length":k.value,"item-key":"id",class:"text-wrap","show-select":"","onUpdate:options":ne},{"item.invoice_number":n(({item:e})=>[s("div",Oe,[s("span",null,d(e.invoice_number),1),e.reason!=null?(W(),Ce(ce,{key:0,class:"mx-1",small:"",color:"error"},{default:n(()=>[a(qe,{bottom:""},{activator:n(({props:de})=>[a(he,Z(de,{icon:"tabler-info-circle",size:"15",onClick:Ge=>o.openInfoDialog(e)}),null,16,["onClick"])]),default:n(()=>[s("span",null,d(e.reason),1)]),_:2},1024)]),_:2},1024)):Ae("",!0)])]),"item.amount":n(({item:e})=>[s("span",$e,d(e.amount),1)]),"item.discount_amount":n(({item:e})=>[s("span",Xe,d(e.discount_amount),1)]),"item.status":n(({item:e})=>[a(Be,Z({density:"default",label:""},ie(e.status),{class:"text-capitalize"}),null,16)]),bottom:n(()=>[a(ze),s("div",Me,[s("p",He,d(Y(xe)({page:u.value,itemsPerPage:r.value},k.value)),1),a(Ue,{modelValue:u.value,"onUpdate:modelValue":t[11]||(t[11]=e=>u.value=e),length:Math.ceil(k.value/r.value),"total-visible":o.$vuetify.display.xs?1:Math.min(Math.ceil(k.value/r.value),5),"active-color":"primary","next-icon":"tabler-caret-right","prev-icon":"tabler-caret-left"},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1})]),_:1})],64)}}});export{ct as _};
