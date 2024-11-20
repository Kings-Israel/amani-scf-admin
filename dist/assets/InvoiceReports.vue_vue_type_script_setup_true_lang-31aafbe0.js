import{f as P}from"./formatters-92bc75d8.js";import{_ as Ae}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{_ as Ie}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-544577ba.js";import{_ as Se}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as Pe}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{p as Be}from"./paginationMeta-4ad053a4.js";import{F as Ue}from"./FileSaver.min-4f66c306.js";import{X as B}from"./xlsx-d63df831.js";import{u as $e}from"./useApi-776c55ea.js";import{c as qe}from"./createUrl-149317bf.js";import{V as re}from"./VCol-35b3d337.js";import{d as ze,r as a,R,b6 as Ne,w as Re,o as x,c as U,b as s,f as r,e,a4 as j,x as $,p as m,y as i,h as je,a9 as Ee,t as ue,A as q,F as Te,a as Fe}from"./index-75b434bc.js";import{V as Oe}from"./VDataTableServer-e9f6b4ac.js";import{V as Me}from"./VTooltip-c5403118.js";import{V as ce}from"./VChip-e2ddd660.js";import{V as Xe}from"./VDivider-fc890531.js";import{V as He}from"./VPagination-2b54b87a.js";import{V as Le}from"./VRow-d6f20668.js";import{V as de,b as ve}from"./VCard-95c0d706.js";import{V as me}from"./VCardText-76f31582.js";import{V as pe}from"./VDialog-bc06d443.js";const Ge=e("h2",{class:"my-4 mx-5"},[e("b",null," All Invoices")],-1),Je={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Ke={class:"d-flex align-center flex-wrap gap-4"},Qe={class:"d-flex flex-wrap gap-4 mx-5 my-5"},We={class:"d-flex align-center flex-wrap gap-4"},Ye={class:"d-flex gap-4 flex-wrap align-center"},Ze={class:"d-flex align-center"},et={class:"text-h8 mb-0 mr-2"},tt=["onClick"],lt={class:"d-flex align-center"},at={class:"text-h8 mb-0 mr-2"},st=["onClick"],ot={class:"d-flex align-center"},nt={class:"text-h8 mb-0 mr-2"},it=["onClick"],rt={class:"text-success"},ut={class:"text-success"},ct={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},dt={class:"text-sm text-medium-emphasis mb-0"},vt={class:"my-3"},mt=e("strong",{class:"text-subtitle-1"},"Invoice Number:",-1),pt={class:"text-body-1"},_t={class:"my-3"},xt=e("strong",{class:"text-subtitle-1"},"PI Number:",-1),ft={class:"my-3"},yt=e("strong",{class:"text-subtitle-1"},"Vendor:",-1),bt={class:"text-body-1"},ht=["href"],Vt={class:"my-3"},gt=e("strong",{class:"text-subtitle-1"},"Bank:",-1),Dt={class:"text-body-1"},kt={class:"my-3"},Ct=e("strong",{class:"text-subtitle-1"},"Anchor:",-1),wt={class:"text-body-1"},At={class:"my-3"},It=e("strong",{class:"text-subtitle-1"},"Request Date:",-1),St={class:"text-body-1"},Pt={class:"my-3"},Bt=e("strong",{class:"text-subtitle-1"},"Invoice Date:",-1),Ut={class:"text-body-1"},$t={class:"my-3"},qt=e("strong",{class:"text-subtitle-1"},"Expiry Date:",-1),zt={class:"text-body-1"},Nt={class:"my-3"},Rt=e("strong",{class:"text-subtitle-1"},"Due Date:",-1),jt={class:"text-body-1"},Et={class:"my-3"},Tt=e("strong",{class:"text-subtitle-1"},"Amount:",-1),Ft={class:"text-success"},Ot={class:"my-3"},Mt=e("strong",{class:"text-subtitle-1"},"Discount Amount:",-1),Xt={class:"text-success"},Ht={key:0,class:"my-3"},Lt=e("strong",{class:"text-subtitle-1"},"Financial Approval Status:",-1),Gt={class:"text-body-1"},Jt={class:"d-flex align-center mb-3"},Kt=e("strong",{class:"me-2 text-subtitle-1"},"Status:",-1),Qt={key:1,class:"my-3"},Wt=e("strong",{class:"text-subtitle-1"},"Approved By:",-1),Yt={class:"text-body-1"},Zt={key:2,class:"my-3"},el=e("strong",{class:"text-subtitle-1"},"Reason:",-1),tl={class:"text-body-1"},ll={class:"d-flex justify-content-between mb-3"},al={class:"fw-light"},sl={class:"fw-bold"},ol={class:"d-flex justify-content-between mb-3"},nl={class:"fw-light"},il={class:"fw-bold"},Bl=ze({__name:"InvoiceReports",async setup(rl){let f,E;a(!0);const T=a(),y=a(),F=a(),n=a(null),b=a(null),h=a(null),V=a(""),g=a(""),D=a(""),k=a(),C=a(),O=a(""),w=a(""),A=a(""),M=a(""),X=a(""),H=a(),L=a(),G=a(),J=a(),K=a(),Q=a(),W=a(),_e=a(),Y=a(),Z=a(),ee=a(),v=a(!1),p=a(!1),c=a(50),d=a(1),xe=a(),te=a(),fe=[{title:"Invoice Number",key:"invoice_number"},{title:"Vendor",key:"vendor"},{title:"Bank",key:"bank"},{title:"Anchor",key:"anchor"},{title:"Date Requested",key:"date_requested"},{title:"PI Amount",key:"amount"},{title:"Discount Amount",key:"discount_amount"},{title:"Expiry Date",key:"expiry_date"},{title:"Invoice Due Date",key:"due_date"},{title:"Status",key:"status"}],ye=a([{title:"Submitted",value:"submitted"},{title:"Pending Approval",value:"pending_approval"},{title:"Approved",value:"approved"},{title:"Disbursed",value:"disbursed"},{title:"Rejected",value:"denied"},{title:"Closed",value:"closed"}]),be=a([{title:"Invoice No. (ASC)",value:"asc_invoice_number"},{title:"Invoice No (DESC)",value:"desc_invoice_number"},{title:"Vendor (ASC)",value:"asc_vendor"},{title:"Vendor (DESC)",value:"desc_vendor"},{title:"Anchor (ASC)",value:"asc_anchor"},{title:"Anchor (DESC)",value:"desc_anchor"},{title:"Due Date (ASC)",value:"asc_due_date"},{title:"Due Date (DESC)",value:"desc_due_date"},{title:"Request Date (ASC)",value:"asc_date_requested"},{title:"Request Date (DESC)",value:"desc_date_requested"}]),he=a([{title:"Vendor Financing",value:1},{title:"Dealer Financing",value:2}]),le=R(()=>({vendor:H.value,anchor:L.value,bank:G.value,status:T.value,program_type:y.value,sortBy:F.value,invoice_number:K.value,invoice_amount:J.value,expiry_date:Q.value,due_date:W.value,request_date:_e.value,date_requested:Y.value,start_date:Z.value,end_date:ee.value,page:d.value,itemsPerPage:c.value,orderBy:te.value})),{data:ae,execute:z}=([f,E]=Ne(()=>$e(qe("/admin/invoices",{query:le}))),f=await f,E(),f),se=R(()=>ae.value.data),I=R(()=>ae.value.total),Ve=o=>{var l,u;d.value=o.page,xe.value=(l=o.sortBy[0])==null?void 0:l.key,te.value=(u=o.sortBy[0])==null?void 0:u.order},N=o=>{switch(o){case"Approved":return{text:"Approved",color:"success"};case"Past Due":return{text:o,color:"error"};case"Closed":return{text:"Closed",color:"success"};case"Rejected":return{text:"Rejected",color:"error"};case"Disbursed":return{text:"Disbursed",color:"info"};default:return{text:o,color:"default"}}},oe=async()=>{H.value=V.value,L.value=g.value,G.value=D.value,K.value=C.value,T.value=b.value,F.value=h.value,J.value=k.value,Q.value=O.value,W.value=w.value,Y.value=A.value,Z.value=M.value,ee.value=X.value,await z()},ge=()=>{V.value="",g.value="",D.value="",b.value=void 0,y.value=void 0,h.value=void 0,C.value=void 0,k.value=void 0,O.value=void 0,w.value=void 0,A.value=void 0,M.value=void 0,X.value=void 0,d.value=1,oe()},De=o=>{n.value=o,v.value=!0},ke=o=>{v.value=!1,n.value=o,p.value=!0},Ce=()=>{const o=B.utils.json_to_sheet(se.value),l=B.utils.book_new();B.utils.book_append_sheet(l,o,"Invoices");const u=B.write(l,{bookType:"xlsx",type:"array"});Ue.saveAs(new Blob([u],{type:"application/octet-stream"}),"invoices.xlsx")};return Re(le,z,{immediate:!0}),z(),(o,l)=>{const u=Pe,_=Se,ne=Ie,we=Fe("IconBtn"),ie=Ae;return x(),U(Te,null,[s(re,null,{default:r(()=>[Ge]),_:1}),s(Le,null,{default:r(()=>[e("div",Je,[e("div",Ke,[s(u,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=t=>y.value=t),items:he.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Program Type",style:{flex:"1 1 auto","min-inline-size":"400px"}},null,8,["modelValue","items"])])]),e("div",Qe,[e("div",We,[s(_,{modelValue:C.value,"onUpdate:modelValue":l[1]||(l[1]=t=>C.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Invoice Number",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),s(_,{modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=t=>k.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Invoice Amount",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),s(_,{modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=t=>V.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Vendor",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),s(_,{modelValue:D.value,"onUpdate:modelValue":l[4]||(l[4]=t=>D.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Bank",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),s(_,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=t=>g.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Anchor",style:{flex:"1 1 auto","min-inline-size":"150px"},type:"text"},null,8,["modelValue"]),s(ne,{modelValue:A.value,"onUpdate:modelValue":l[6]||(l[6]=t=>A.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Request Date",style:{flex:"1 1 auto","min-inline-size":"150px"}},null,8,["modelValue"]),s(ne,{modelValue:w.value,"onUpdate:modelValue":l[7]||(l[7]=t=>w.value=t),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Invoice Due Date",style:{flex:"1 1 auto","min-inline-size":"150px"}},null,8,["modelValue"]),s(u,{modelValue:b.value,"onUpdate:modelValue":l[8]||(l[8]=t=>b.value=t),items:ye.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Select Status",style:{flex:"1 1 auto","max-inline-size":"200px","min-inline-size":"150px"}},null,8,["modelValue","items"]),s(u,{modelValue:h.value,"onUpdate:modelValue":l[9]||(l[9]=t=>h.value=t),items:be.value,"item-value":"value","item-title":"title",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",placeholder:"Sort By",style:{flex:"1 1 auto","max-inline-size":"200px","min-inline-size":"150px"}},null,8,["modelValue","items"]),s(j,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:oe}),s(j,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:ge})]),e("div",Ye,[s(u,{modelValue:c.value,"onUpdate:modelValue":l[10]||(l[10]=t=>c.value=t),items:[5,10,20,25,50,100],style:{flex:"1 1 auto"}},null,8,["modelValue"]),s(j,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:Ce},{default:r(()=>[$(" Export ")]),_:1})])]),s(re,null,{default:r(()=>[s(m(Oe),{"items-per-page":c.value,"onUpdate:itemsPerPage":l[12]||(l[12]=t=>c.value=t),page:d.value,"onUpdate:page":l[13]||(l[13]=t=>d.value=t),modelValue:o.selectedCompany,"onUpdate:modelValue":l[14]||(l[14]=t=>o.selectedCompany=t),headers:fe,items:se.value,"items-length":I.value,"item-key":"id",class:"text-wrap","show-select":"","onUpdate:options":Ve},{"item.invoice_number":r(({item:t})=>[e("div",Ze,[e("h6",et,[e("a",{href:"javascript:void(0)",onClick:S=>De(t)},i(t.invoice_number),9,tt)]),t.reason!=null?(x(),je(we,{key:0,class:"mx-1",small:"",color:"error"},{default:r(()=>[s(Me,{bottom:""},{activator:r(({props:S})=>[s(Ee,ue(S,{icon:"tabler-info-circle",size:"15",onClick:ul=>o.openInfoDialog(t)}),null,16,["onClick"])]),default:r(()=>[e("span",null,i(t.reason),1)]),_:2},1024)]),_:2},1024)):q("",!0)])]),"item.vendor":r(({item:t})=>[e("div",lt,[e("h6",at,[e("a",{href:"javascript:void(0)",onClick:S=>o.$router.push(`/companies/view/${t.vendor_id}`)},i(t.vendor),9,st)])])]),"item.anchor":r(({item:t})=>[e("div",ot,[e("h6",nt,[e("a",{href:"javascript:void(0)",onClick:S=>o.$router.push(`/companies/view/${t.vendor_id}`)},i(t.anchor),9,it)])])]),"item.amount":r(({item:t})=>[e("span",rt,i(t.amount),1)]),"item.discount_amount":r(({item:t})=>[e("span",ut,i(t.discount_amount),1)]),"item.status":r(({item:t})=>[s(ce,ue({density:"default",label:""},N(t.status),{class:"text-capitalize"}),null,16)]),bottom:r(()=>[s(Xe),e("div",ct,[e("p",dt,i(m(Be)({page:d.value,itemsPerPage:c.value},I.value)),1),s(He,{modelValue:d.value,"onUpdate:modelValue":l[11]||(l[11]=t=>d.value=t),length:Math.ceil(I.value/c.value),"total-visible":o.$vuetify.display.xs?1:Math.min(Math.ceil(I.value/c.value),5),"active-color":"primary","next-icon":"tabler-caret-right","prev-icon":"tabler-caret-left"},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1})]),_:1}),s(pe,{modelValue:v.value,"onUpdate:modelValue":l[17]||(l[17]=t=>v.value=t),persistent:"","max-width":"600px",class:"elevation-10"},{default:r(()=>[s(ie,{onClick:l[15]||(l[15]=t=>v.value=!v.value),class:"text-h6 d-flex align-center justify-center"}),s(de,{class:"pa-4"},{default:r(()=>[s(ve,{class:"text-h5 font-weight-bold text-center"},{default:r(()=>[$(" Invoice Details ")]),_:1}),s(me,null,{default:r(()=>[e("div",vt,[mt,e("span",pt,i(n.value.invoice_number),1)]),e("div",_t,[xt,e("span",{class:"text-primary cursor-pointer",onClick:l[16]||(l[16]=t=>ke(n.value))},i(n.value.pi_number),1)]),e("div",ft,[yt,e("span",bt,[e("a",{href:`/admin/companies/view/${n.value.vendor_id}`,class:"text-primary"},i(n.value.vendor),9,ht)])]),e("div",Vt,[gt,e("span",Dt,i(n.value.bank),1)]),e("div",kt,[Ct,e("span",wt,i(n.value.anchor),1)]),e("div",At,[It,e("span",St,i(("formatDate"in o?o.formatDate:m(P))(n.value.date_requested)),1)]),e("div",Pt,[Bt,e("span",Ut,i(("formatDate"in o?o.formatDate:m(P))(n.value.invoice_date)),1)]),e("div",$t,[qt,e("span",zt,i(("formatDate"in o?o.formatDate:m(P))(n.value.expiry_date)),1)]),e("div",Nt,[Rt,e("span",jt,i(("formatDate"in o?o.formatDate:m(P))(n.value.due_date)),1)]),e("div",Et,[Tt,e("span",Ft,i(n.value.amount),1)]),e("div",Ot,[Mt,e("span",Xt,i(n.value.discount_amount),1)]),n.value.financial_approval_status?(x(),U("div",Ht,[Lt,e("span",Gt,i(n.value.financial_approval_status||"N/A"),1)])):q("",!0),e("div",Jt,[Kt,s(ce,{color:N(n.value.status).color,label:"",class:"text-capitalize"},{default:r(()=>[$(i(N(n.value.status).text),1)]),_:1},8,["color"])]),n.value.approvals.length>0?(x(),U("div",Qt,[Wt,e("span",Yt,i(n.value.approvals[n.value.approvals.length-1].approved_by.name||"N/A"),1)])):q("",!0),n.value.reason?(x(),U("div",Zt,[el,e("span",tl,i(n.value.reason||"N/A"),1)])):q("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(pe,{modelValue:p.value,"onUpdate:modelValue":l[19]||(l[19]=t=>p.value=t),persistent:"","max-width":"600px"},{default:r(()=>[s(ie,{onClick:l[18]||(l[18]=t=>p.value=!p.value),class:"text-h6 d-flex align-center justify-center"}),s(de,{class:"pa-4"},{default:r(()=>[s(ve,{class:"text-h5 font-weight-bold text-center"},{default:r(()=>[$(" Payment Instruction ")]),_:1}),s(me,null,{default:r(()=>[e("div",ll,[e("h6",al,i(o.$t("Anchor"))+":",1),e("h6",sl,i(n.value.anchor),1)]),e("div",ol,[e("h6",nl,i(o.$t("Invoice/Unique Ref No"))+":",1),e("h6",il,i(n.value.invoice_number),1)])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Bl as _};
