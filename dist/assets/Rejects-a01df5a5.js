import{V as xe}from"./VCardText-3b4da816.js";import{V as ge}from"./VAvatar-3ee4c690.js";import{V as G}from"./VCard-1a5b2c5e.js";import{d as J,o as q,h as re,f as a,b as t,e as m,y as A,r as s,b6 as X,cl as be,c as Y,j as Ve,p as e,F as ke,t as D,R as W,aI as d,a4 as P,K as Ce,a9 as H,x as C,a as L,l as he,A as we,b2 as $e,b4 as _e,b3 as Pe,cS as Ie}from"./index-5caaa453.js";import{u as Z}from"./useApi-c9327355.js";import{c as ee}from"./createUrl-3e678c2b.js";import{V as Ue}from"./VRow-e44df108.js";import{V as Me}from"./VCol-bcc5388c.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as le}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as ae}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{p as ne}from"./paginationMeta-4ad053a4.js";import{V as oe}from"./VSpacer-a56288e5.js";import{V as T}from"./VDivider-d40713ce.js";import{V as se}from"./VDataTableServer-64dc84b4.js";import{V as pe}from"./VChip-49676f7d.js";import{V as ie}from"./VPagination-4169e3c5.js";import{V as ce}from"./VMenu-97c48b4e.js";import{V as ue,a as K}from"./VList-4b1bf96e.js";import{$ as Be}from"./api-44dd0fa9.js";const Se={class:"d-flex align-center flex-wrap"},De={class:"text-h6"},ze={class:"text-body-2"},Ae=J({__name:"CardStatistics",props:{title:{},color:{default:"primary"},icon:{},value:{}},setup(Q){const f=Q;return(h,x)=>(q(),re(G,null,{default:a(()=>[t(xe,{class:"d-flex align-center justify-space-between"},{default:a(()=>[m("div",null,[m("div",Se,[m("span",De,A(f.value),1)]),m("span",ze,A(f.title),1)]),t(ge,{color:f.color,icon:f.icon,size:42,variant:"tonal"},null,8,["color","icon"])]),_:1})]),_:1}))}}),Ne=J({__name:"CardWidgets",async setup(Q){let f,h;const x=s([]),{data:I,execute:o}=([f,h]=X(()=>Z(ee("/get/UI/pipeline/widget/data"))),f=await f,h(),f);return o(),be(()=>{I.value&&(x.value=I.value)}),(_,p)=>(q(),re(Ue,{class:"match-height"},{default:a(()=>[(q(!0),Y(ke,null,Ve(e(x),u=>(q(),re(Me,{key:u.title,cols:"12",md:"3",sm:"6"},{default:a(()=>[m("div",null,[t(Ae,D({ref_for:!0},u),null,16)])]),_:2},1024))),128))]),_:1}))}});const Jt=te(Ne,[["__scopeId","data-v-9fb8db34"]]),Ee=[{title:"Contact Name",key:"name"},{title:"Company",key:"company"},{title:"Department",key:"department"},{title:"Email",key:"email"},{title:"Source",key:"source"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],Oe=[{title:"Company",key:"company"},{title:"Contact Name",key:"name"},{title:"Date",key:"created_at",sortable:!1},{title:"Contact Email",key:"email"},{title:"Phone Number",key:"phone_number"},{title:"Source",key:"source"},{title:"Actions",key:"actions",sortable:!1}],me=[{title:"Company",key:"company"},{title:"Name",key:"name"},{title:"Convert On",key:"converted_on",sortable:!1},{title:"Email",key:"email"},{title:"Phone Number",key:"phone_number"},{title:"Branch",key:"branch"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],je=[{title:"Company",key:"company"},{title:"Contact Name",key:"contact_name"},{title:"Date Added",key:"converted_on",sortable:!1},{title:"Contact Email",key:"email"},{title:"Region",key:"region"},{title:"Lead Source",key:"source"},{title:"Actions",key:"actions",sortable:!1}],Le={class:"d-flex flex-wrap gap-4 mx-5"},Re={class:"d-flex align-center"},We={class:"d-flex gap-4 flex-wrap align-center"},Te={class:"d-flex align-center gap-x-2"},qe={class:"d-flex flex-column"},Fe={class:"text-body-1 font-weight-medium"},He={class:"text-body-1 font-weight-medium"},Qe={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Ke={class:"text-sm text-medium-emphasis mb-0"},Ge=J({__name:"Closed",async setup(Q){let f,h;const x=s(!0),I=s(0),o=s(""),_=s(),p=s(10),u=s(1),g=s(),b=s(),w=()=>{x.value=!x.value},N=()=>{o.value=""},U=()=>{I.value=0},k=()=>{U(),N()},E=s([{title:"Pending",value:"Pending"},{title:"Completed",value:"Completed"},{title:"Initiation",value:"Initiation"}]),O=c=>{var l,v;u.value=c.page,g.value=(l=c.sortBy[0])==null?void 0:l.key,b.value=(v=c.sortBy[0])==null?void 0:v.order},R=c=>c==="warm"?{text:"Warm",color:"warning"}:c==="hot"?{text:"Hot",color:"success"}:{text:"cold",color:"error"},{data:B,execute:j}=([f,h]=X(()=>Z(ee("/get/UI/pipelines/closed",{query:{q:o,status:_,page:u,itemsPerPage:p,sortBy:g,orderBy:b,stage:"Opportunity"}}))),f=await f,h(),f),M=W(()=>B.value.data),$=W(()=>B.value.total);return j(),(c,l)=>{const v=ae,y=le,S=L("DownloadExcel"),z=L("RouterLink"),n=L("IconBtn");return q(),Y("div",null,[t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",Le,[m("div",Re,[t(v,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=i=>d(o)?o.value=i:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=i=>d(o)?o.value=i:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[2]||(l[2]=i=>d(o)?o.value=i:null),"append-inner-icon":e(x)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(y,{modelValue:e(_),"onUpdate:modelValue":l[3]||(l[3]=i=>d(_)?_.value=i:null),items:e(E),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",We,[t(y,{modelValue:e(p),"onUpdate:modelValue":l[4]||(l[4]=i=>d(p)?p.value=i:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(S,{data:e(M),name:"opportunity.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"])])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(p),"onUpdate:itemsPerPage":l[6]||(l[6]=i=>d(p)?p.value=i:null),page:e(u),"onUpdate:page":l[7]||(l[7]=i=>d(u)?u.value=i:null),headers:e(me),items:e(M),"items-length":e($),class:"text-no-wrap","show-select":"","onUpdate:options":O},{"item.company":a(({item:i})=>[m("div",Te,[m("div",qe,[t(z,{to:`/lead/view/${i.id}`,style:{"text-decoration":"underline"}},{default:a(()=>[m("span",{style:Ce({color:`${c.$vuetify.theme.global.current.colors.primary}`}),class:"text-body-1 font-weight-medium"},A(i.company),5)]),_:2},1032,["to"])])])]),"item.contact_name":a(({item:i})=>[m("span",Fe,A(i.contact_name),1)]),"item.converted_on":a(({item:i})=>[m("span",He,A(i.converted_on),1)]),"item.status":a(({item:i})=>[t(pe,D({density:"default",label:""},R(i.status)),null,16)]),"item.actions":a(({item:i})=>[t(n,null,{default:a(()=>[t(H,{icon:"tabler-eye",onClick:r=>c.$router.push(`/pipeline/view/${i.id}`)},null,8,["onClick"])]),_:2},1024)]),bottom:a(()=>[t(T),m("div",Qe,[m("p",Ke,A(e(ne)({page:e(u),itemsPerPage:e(p)},e($))),1),t(ie,{modelValue:e(u),"onUpdate:modelValue":l[5]||(l[5]=i=>d(u)?u.value=i:null),length:Math.min(Math.ceil(e($)/e(p)),5),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(e($)/e(p)),5)},{prev:a(i=>[t(P,D({icon:!1,color:"default"},i,{variant:"tonal"}),{default:a(()=>[C(" Previous ")]),_:2},1040)]),next:a(i=>[t(P,D({icon:!1,color:"default"},i,{variant:"tonal"}),{default:a(()=>[C(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const Xt=te(Ge,[["__scopeId","data-v-8d56fc55"]]),Je={class:"d-flex flex-wrap gap-4 mx-5"},Xe={class:"d-flex align-center"},Ye={class:"d-flex gap-4 flex-wrap align-center"},Ze={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},et={class:"text-sm text-medium-emphasis mb-0"},tt=J({__name:"ColdLeads",async setup(Q){let f,h;const x=s(!0),I=s(0),o=s(""),_=s(),p=s(10),u=s(1),g=s(),b=s(),w=()=>{x.value=!x.value},N=()=>{o.value=""},U=()=>{I.value=0},k=()=>{U(),N()},E=s([{title:"Pending",value:"Pending"},{title:"Completed",value:"Completed"},{title:"Intiation",value:"Intiation"}]),O=c=>{var l,v;u.value=c.page,g.value=(l=c.sortBy[0])==null?void 0:l.key,b.value=(v=c.sortBy[0])==null?void 0:v.order},R=c=>c==="warm"?{text:"Warm",color:"warning"}:c==="hot"?{text:"Hot",color:"success"}:{text:"cold",color:"error"},{data:B,execute:j}=([f,h]=X(()=>Z(ee("/get/UI/pipelines/opportunity",{query:{q:o,status:_,page:u,itemsPerPage:p,sortBy:g,orderBy:b,stage:"Opportunity"}}))),f=await f,h(),f),M=W(()=>B.value.data),$=W(()=>B.value.total);return j(),(c,l)=>{const v=ae,y=le,S=L("DownloadExcel"),z=L("IconBtn");return q(),Y("div",null,[t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",Je,[m("div",Xe,[t(v,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[2]||(l[2]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(y,{modelValue:e(_),"onUpdate:modelValue":l[3]||(l[3]=n=>d(_)?_.value=n:null),items:e(E),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",Ye,[t(y,{modelValue:e(p),"onUpdate:modelValue":l[4]||(l[4]=n=>d(p)?p.value=n:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(S,{data:e(M),name:"opportunity.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"]),t(P,{color:"primary","prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=n=>c.$router.push("/pipeline/new"))},{default:a(()=>[C(" New Opportunity ")]),_:1})])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(p),"onUpdate:itemsPerPage":l[7]||(l[7]=n=>d(p)?p.value=n:null),page:e(u),"onUpdate:page":l[8]||(l[8]=n=>d(u)?u.value=n:null),headers:e(me),items:e(M),"items-length":e($),class:"text-no-wrap","show-select":"","onUpdate:options":O},{"item.status":a(({item:n})=>[t(pe,D({density:"default",label:""},R(n.status)),null,16)]),"item.actions":a(({item:n})=>[t(z,null,{default:a(()=>[t(H,{icon:"tabler-eye",onClick:i=>c.$router.push(`/pipeline/view/${n.id}`)},null,8,["onClick"])]),_:2},1024)]),bottom:a(()=>[t(T),m("div",Ze,[m("p",et,A(e(ne)({page:e(u),itemsPerPage:e(p)},e($))),1),t(ie,{modelValue:e(u),"onUpdate:modelValue":l[6]||(l[6]=n=>d(u)?u.value=n:null),length:Math.min(Math.ceil(e($)/e(p)),5),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(e($)/e(p)),5)},{prev:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Previous ")]),_:2},1040)]),next:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const Yt=te(tt,[["__scopeId","data-v-7727ac75"]]),lt={class:"d-flex flex-wrap gap-4 mx-5"},at={class:"d-flex align-center"},nt={class:"d-flex gap-4 flex-wrap align-center"},ot=["title"],st={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},it={class:"text-sm text-medium-emphasis mb-0"},rt=J({__name:"Contacts",async setup(Q){let f,h;const x=s(!0),I=s(0),o=s(""),_=s(),p=he(),u=$e(()=>Pe(()=>import("./LeadConversion-b6660370.js"),["assets/LeadConversion-b6660370.js","assets/validators-db74a876.js","assets/helpers-681711bc.js","assets/index-5caaa453.js","assets/index-c76bff88.css","assets/AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js","assets/form-c9c578a3.js","assets/form-16aeed72.css","assets/VSelect-f0a443ce.js","assets/VTextField-604d91ff.js","assets/VCounter-728f7f8c.js","assets/transition-1886cce0.js","assets/VCounter-66d880d8.css","assets/VField-6b3808ed.js","assets/easing-9f15041e.js","assets/VField-f0ae27e6.css","assets/VInput-e87890b4.js","assets/VInput-aff17aa7.css","assets/forwardRefs-8348545e.js","assets/index-7dd1f5f0.js","assets/VTextField-72d54917.css","assets/VList-4b1bf96e.js","assets/ssrBoot-2696bccc.js","assets/createSimpleFunctional-9624028d.js","assets/VAvatar-3ee4c690.js","assets/VImg-6009f8f0.js","assets/VImg-b8589eee.css","assets/VAvatar-0c2eeb2f.css","assets/VDivider-d40713ce.js","assets/VDivider-357e019d.css","assets/VList-124a256e.css","assets/dialog-transition-1ae6ec72.js","assets/VMenu-97c48b4e.js","assets/VOverlay-da001e16.js","assets/lazy-9cd674a5.js","assets/scopeId-484eb469.js","assets/VOverlay-3a294b3a.css","assets/VMenu-fe9a8434.css","assets/VCheckboxBtn-1d552264.js","assets/VSelectionControl-e0df1dbd.js","assets/VSelectionControl-3bc768c3.css","assets/VChip-49676f7d.js","assets/VChip-615f71d7.css","assets/VSelect-055dcab5.css","assets/AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js","assets/DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js","assets/api-44dd0fa9.js","assets/index-2898f57d.js","assets/useApi-c9327355.js","assets/createUrl-3e678c2b.js","assets/VCard-1a5b2c5e.js","assets/VCardText-3b4da816.js","assets/VCard-948d992c.css","assets/VAlert-009fe8a7.js","assets/VAlert-c2716c91.css","assets/VForm-ed4803d2.js","assets/VRow-e44df108.js","assets/VGrid-a2928905.css","assets/VCol-bcc5388c.js","assets/VCheckbox-4131d654.js","assets/VCheckbox-1ea139e1.css","assets/VDialog-808ce03e.js","assets/VDialog-94321bd4.css"])),g=s(10),b=s(1),w=s(),N=s(),U=s(!1),k=s(0),E=()=>{x.value=!x.value},O=()=>{o.value=""},R=()=>{I.value=0},B=()=>{R(),O()},j=s([{title:"Hot",value:"hot"},{title:"Warm",value:"warm"},{title:"Cold",value:"cold"}]),M=i=>{var r,F;b.value=i.page,w.value=(r=i.sortBy[0])==null?void 0:r.key,N.value=(F=i.sortBy[0])==null?void 0:F.order},$=(i,r)=>i.length>r?`${i.substring(0,r)}...`:i,c=i=>i==="warm"?{text:"Warm",color:"warning"}:i==="hot"?{text:"Hot",color:"success"}:{text:"Cold",color:"error"},{data:l,execute:v}=([f,h]=X(()=>Z(ee("/get/UI/pipelines/contacts",{query:{q:o,status:_,page:b,itemsPerPage:g,sortBy:w,orderBy:N}}))),f=await f,h(),f),y=async i=>{_e("scheduleIDCookie").value=i.toString(),await p.push("/calendar/schedules")},S=i=>{k.value=i,U.value=!U.value},z=W(()=>l.value.data),n=W(()=>l.value.total);return v(),(i,r)=>{const F=ae,ve=le,ye=L("DownloadExcel"),fe=L("IconBtn");return q(),Y("div",null,[t(G,{class:"text-high-emphasis text-center"},{default:a(()=>[e(U)&&e(k)>0?(q(),re(e(u),{key:0,isDialogVisible:e(U),"onUpdate:isDialogVisible":r[0]||(r[0]=V=>d(U)?U.value=V:null),pipeline:e(k),"onUpdate:pipeline":r[1]||(r[1]=V=>d(k)?k.value=V:null)},null,8,["isDialogVisible","pipeline"])):we("",!0)]),_:1}),t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",lt,[m("div",at,[t(F,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=V=>d(o)?o.value=V:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":E,"onClick:append":B},null,8,["modelValue","append-inner-icon"]),t(F,{modelValue:e(o),"onUpdate:modelValue":r[3]||(r[3]=V=>d(o)?o.value=V:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":E,"onClick:append":B},null,8,["modelValue","append-inner-icon"]),t(F,{modelValue:e(o),"onUpdate:modelValue":r[4]||(r[4]=V=>d(o)?o.value=V:null),"append-inner-icon":e(x)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":E,"onClick:append":B},null,8,["modelValue","append-inner-icon"]),t(ve,{modelValue:e(_),"onUpdate:modelValue":r[5]||(r[5]=V=>d(_)?_.value=V:null),items:e(j),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",nt,[t(ve,{modelValue:e(g),"onUpdate:modelValue":r[6]||(r[6]=V=>d(g)?g.value=V:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(ye,{data:e(z),name:"contacts.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"]),t(P,{color:"primary",onClick:r[7]||(r[7]=V=>i.$router.push("/pipeline/new"))},{default:a(()=>[C(" New Contact ")]),_:1})])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(g),"onUpdate:itemsPerPage":r[9]||(r[9]=V=>d(g)?g.value=V:null),page:e(b),"onUpdate:page":r[10]||(r[10]=V=>d(b)?b.value=V:null),headers:e(Ee),items:e(z),"items-length":e(n),class:"text-no-wrap","show-select":"","onUpdate:options":M},{"item.email":a(({item:V})=>[m("span",{title:V.email},A($(V.email,10)),9,ot)]),"item.status":a(({item:V})=>[t(pe,D({density:"default",label:""},c(V.status)),null,16)]),"item.actions":a(({item:V})=>[t(fe,null,{default:a(()=>[t(H,{icon:"tabler-edit",onClick:de=>i.$router.push(`/pipeline/edit/${V.id}`)},null,8,["onClick"])]),_:2},1024),t(fe,null,{default:a(()=>[t(H,{icon:"tabler-dots-vertical"}),t(ce,{activator:"parent"},{default:a(()=>[t(ue,null,{default:a(()=>[t(K,{"prepend-icon":"tabler-mail",value:"download",onClick:de=>y(V.id)},{default:a(()=>[C(" Schedule Visit ")]),_:2},1032,["onClick"]),t(K,{"prepend-icon":"tabler-share",value:"convertToLead",onClick:de=>S(V.id)},{default:a(()=>[C(" Convert to Lead ")]),_:2},1032,["onClick"]),t(K,{"prepend-icon":"tabler-eye",value:"duplicate",onClick:de=>i.$router.push(`/pipeline/view/${V.id}`)},{default:a(()=>[C(" View ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(T),m("div",st,[m("p",it,A(e(ne)({page:e(b),itemsPerPage:e(g)},e(n))),1),t(ie,{modelValue:e(b),"onUpdate:modelValue":r[8]||(r[8]=V=>d(b)?b.value=V:null),length:Math.min(Math.ceil(e(n)/e(g)),5),"total-visible":i.$vuetify.display.xs?1:Math.min(Math.ceil(e(n)/e(g)),5)},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const Zt=te(rt,[["__scopeId","data-v-3b52b891"]]),pt={class:"d-flex flex-wrap gap-4 mx-5"},dt={class:"d-flex align-center"},ct={class:"d-flex gap-4 flex-wrap align-center"},ut={class:"d-flex align-center gap-x-2"},mt={class:"d-flex flex-column"},vt={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},ft={class:"text-sm text-medium-emphasis mb-0"},_t=J({__name:"Leads",async setup(Q){let f,h;const x=s(Oe),I=s(!0),o=s(0),_=s(""),p=s(),u=s(!1),g=s(10),b=s(1),w=s(),N=s(),U=()=>{I.value=!I.value},k=()=>{_.value=""},E=()=>{o.value=0},O=()=>{E(),k()},R=s([{title:"ICT",value:"Pending"},{title:"Factory",value:"Completed"},{title:"Bank",value:"Initiation"}]),B=v=>{var y,S;b.value=v.page,w.value=(y=v.sortBy[0])==null?void 0:y.key,N.value=(S=v.sortBy[0])==null?void 0:S.order},{data:j,execute:M}=([f,h]=X(()=>Z(ee("/get/UI/pipelines/leads",{query:{q:_,status:p,page:b,itemsPerPage:g,sortBy:w,orderBy:N,stage:"Lead"}}))),f=await f,h(),f),$=W(()=>j.value.data),c=W(()=>j.value.total),l=s(_e("userData"));return M(),(v,y)=>{const S=ae,z=le,n=L("DownloadExcel"),i=L("IconBtn");return q(),Y("div",null,[t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",pt,[m("div",dt,[t(S,{modelValue:e(_),"onUpdate:modelValue":y[0]||(y[0]=r=>d(_)?_.value=r:null),"append-inner-icon":e(I)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":U,"onClick:append":O},null,8,["modelValue","append-inner-icon"]),t(S,{modelValue:e(_),"onUpdate:modelValue":y[1]||(y[1]=r=>d(_)?_.value=r:null),"append-inner-icon":e(I)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":U,"onClick:append":O},null,8,["modelValue","append-inner-icon"]),t(S,{modelValue:e(_),"onUpdate:modelValue":y[2]||(y[2]=r=>d(_)?_.value=r:null),"append-inner-icon":e(I)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":U,"onClick:append":O},null,8,["modelValue","append-inner-icon"]),t(z,{modelValue:e(p),"onUpdate:modelValue":y[3]||(y[3]=r=>d(p)?p.value=r:null),items:e(R),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",ct,[t(z,{modelValue:e(g),"onUpdate:modelValue":y[4]||(y[4]=r=>d(g)?g.value=r:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(n,{data:e($),name:"leads.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"]),t(P,{color:"primary","prepend-icon":"tabler-plus",onClick:y[5]||(y[5]=r=>v.$router.push("/pipeline/new"))},{default:a(()=>[C(" New Lead ")]),_:1})])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(g),"onUpdate:itemsPerPage":y[8]||(y[8]=r=>d(g)?g.value=r:null),page:e(b),"onUpdate:page":y[9]||(y[9]=r=>d(b)?b.value=r:null),headers:e(x),items:e($),"items-length":e(c),class:"text-no-wrap","show-select":"","onUpdate:options":B},Ie({"item.actions":a(({item:r})=>[t(i,null,{default:a(()=>[t(H,{icon:"tabler-edit",onClick:F=>v.$router.push(`/pipeline/edit/${r.id}`)},null,8,["onClick"])]),_:2},1024),t(i,null,{default:a(()=>[t(H,{icon:"tabler-dots-vertical"}),t(ce,{activator:"parent"},{default:a(()=>[t(ue,null,{default:a(()=>[t(K,{"prepend-icon":"tabler-calendar",value:"schedule",onClick:y[6]||(y[6]=F=>v.$router.push("/calendar/schedules"))},{default:a(()=>[C(" Schedule Follow up ")]),_:1}),t(K,{"prepend-icon":"tabler-status-change",value:"opportunity",onClick:F=>v.$router.push(`/pipeline/opportunity/new/${r.id}`)},{default:a(()=>[C(" Convert to Opportunity ")]),_:2},1032,["onClick"]),t(K,{"prepend-icon":"tabler-eye",value:"cold",onClick:F=>v.$router.push(`/pipeline/view/${r.id}`)},{default:a(()=>[C(" View ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(T),m("div",vt,[m("p",ft,A(e(ne)({page:e(b),itemsPerPage:e(g)},e(c))),1),t(ie,{modelValue:e(b),"onUpdate:modelValue":y[7]||(y[7]=r=>d(b)?b.value=r:null),length:Math.min(Math.ceil(e(c)/e(g)),5),"total-visible":v.$vuetify.display.xs?1:Math.min(Math.ceil(e(c)/e(g)),5)},{prev:a(r=>[t(P,D({icon:!1,color:"default"},r,{variant:"tonal"}),{default:a(()=>[C(" Previous ")]),_:2},1040)]),next:a(r=>[t(P,D({icon:!1,color:"default"},r,{variant:"tonal"}),{default:a(()=>[C(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:2},[e(u)?{name:"item.sales",fn:a(()=>[m("div",ut,[m("div",mt,[m("span",null,A(e(l).name),1)])])]),key:"0"}:void 0]),1032,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const el=te(_t,[["__scopeId","data-v-1aa1509f"]]),yt={class:"d-flex flex-wrap gap-4 mx-5"},xt={class:"d-flex align-center"},gt={class:"d-flex gap-4 flex-wrap align-center"},bt={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Vt={class:"text-sm text-medium-emphasis mb-0"},kt=J({__name:"Opportunity",async setup(Q){let f,h;const x=s(!0),I=s(0),o=s(""),_=s(),p=s(10),u=s(1),g=s(),b=s(),w=()=>{x.value=!x.value},N=()=>{o.value=""},U=()=>{I.value=0},k=()=>{U(),N()},E=s([{title:"Pending",value:"Pending"},{title:"Completed",value:"Completed"},{title:"Initiation",value:"Initiation"}]),O=c=>{var l,v;u.value=c.page,g.value=(l=c.sortBy[0])==null?void 0:l.key,b.value=(v=c.sortBy[0])==null?void 0:v.order},R=c=>c==="warm"?{text:"Warm",color:"warning"}:c==="hot"?{text:"Hot",color:"success"}:{text:"cold",color:"error"},{data:B,execute:j}=([f,h]=X(()=>Z(ee("/get/UI/pipelines/opportunity",{query:{q:o,status:_,page:u,itemsPerPage:p,sortBy:g,orderBy:b,stage:"Opportunity"}}))),f=await f,h(),f),M=W(()=>B.value.data),$=W(()=>B.value.total);return j(),(c,l)=>{const v=ae,y=le,S=L("DownloadExcel"),z=L("IconBtn");return q(),Y("div",null,[t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",yt,[m("div",xt,[t(v,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[2]||(l[2]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(y,{modelValue:e(_),"onUpdate:modelValue":l[3]||(l[3]=n=>d(_)?_.value=n:null),items:e(E),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",gt,[t(y,{modelValue:e(p),"onUpdate:modelValue":l[4]||(l[4]=n=>d(p)?p.value=n:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(S,{data:e(M),name:"opportunity.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"]),t(P,{color:"primary","prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=n=>c.$router.push("/pipeline/new"))},{default:a(()=>[C(" New Opportunity ")]),_:1})])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(p),"onUpdate:itemsPerPage":l[7]||(l[7]=n=>d(p)?p.value=n:null),page:e(u),"onUpdate:page":l[8]||(l[8]=n=>d(u)?u.value=n:null),headers:e(me),items:e(M),"items-length":e($),class:"text-no-wrap","show-select":"","onUpdate:options":O},{"item.status":a(({item:n})=>[t(pe,D({density:"default",label:""},R(n.status)),null,16)]),"item.actions":a(({item:n})=>[t(z,null,{default:a(()=>[t(H,{icon:"tabler-edit",onClick:i=>c.$router.push(`/pipeline/edit/${n.id}`)},null,8,["onClick"])]),_:2},1024),t(z,null,{default:a(()=>[t(H,{icon:"tabler-eye",onClick:i=>c.$router.push(`/pipeline/view/${n.id}`)},null,8,["onClick"])]),_:2},1024)]),bottom:a(()=>[t(T),m("div",bt,[m("p",Vt,A(e(ne)({page:e(u),itemsPerPage:e(p)},e($))),1),t(ie,{modelValue:e(u),"onUpdate:modelValue":l[6]||(l[6]=n=>d(u)?u.value=n:null),length:Math.min(Math.ceil(e($)/e(p)),5),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(e($)/e(p)),5)},{prev:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Previous ")]),_:2},1040)]),next:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const tl=te(kt,[["__scopeId","data-v-c8d30042"]]),Ct={class:"d-flex flex-wrap gap-4 mx-5"},ht={class:"d-flex align-center"},wt={class:"d-flex gap-4 flex-wrap align-center"},$t={class:"text-body-1 font-weight-medium"},Pt={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},It={class:"text-sm text-medium-emphasis mb-0"},Ut=J({__name:"Rejects",async setup(Q){let f,h;const x=s(!0),I=s(0),o=s(""),_=s(),p=s(10),u=s(1),g=s(),b=s(),w=()=>{x.value=!x.value},N=()=>{o.value=""},U=()=>{I.value=0},k=()=>{U(),N()},E=s([{title:"Pending",value:"Pending"},{title:"Completed",value:"Completed"},{title:"Intiation",value:"Intiation"}]),O=c=>{var l,v;u.value=c.page,g.value=(l=c.sortBy[0])==null?void 0:l.key,b.value=(v=c.sortBy[0])==null?void 0:v.order},{data:R,execute:B}=([f,h]=X(()=>Z(ee("/dashboard/opportunities",{query:{q:o,status:_,page:u,itemsPerPage:p,sortBy:g,orderBy:b,stage:"Reject"}}))),f=await f,h(),f),j=W(()=>R.value.data),M=W(()=>R.value.total),$=async c=>{try{const l=await Be(`/opportunities/UI/update/cold/${c}`,{method:"POST",body:{lead_status:"Cold"}});console.log(l)}catch(l){console.error(l)}};return B(),(c,l)=>{const v=ae,y=le,S=L("DownloadExcel"),z=L("IconBtn");return q(),Y("div",null,[t(G,{class:"mb-6 pt-10"},{default:a(()=>[m("div",Ct,[m("div",ht,[t(v,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-search":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Contact Person",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(v,{modelValue:e(o),"onUpdate:modelValue":l[2]||(l[2]=n=>d(o)?o.value=n:null),"append-inner-icon":e(x)?"tabler-calendar":"tabler-map-pin-off",class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Date",style:{"inline-size":"200px"},type:"text","onClick:appendInner":w,"onClick:append":k},null,8,["modelValue","append-inner-icon"]),t(y,{modelValue:e(_),"onUpdate:modelValue":l[3]||(l[3]=n=>d(_)?_.value=n:null),items:e(E),"clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"])]),t(oe),m("div",wt,[t(y,{modelValue:e(p),"onUpdate:modelValue":l[4]||(l[4]=n=>d(p)?p.value=n:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(S,{data:e(j),name:"rejects.xls",worksheet:"My Worksheet"},{default:a(()=>[t(P,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}})]),_:1},8,["data"])])]),t(T,{class:"mt-4"}),t(e(se),{"items-per-page":e(p),"onUpdate:itemsPerPage":l[7]||(l[7]=n=>d(p)?p.value=n:null),page:e(u),"onUpdate:page":l[8]||(l[8]=n=>d(u)?u.value=n:null),headers:e(je),items:e(j),"items-length":e(M),class:"text-no-wrap","show-select":"","onUpdate:options":O},{"item.source":a(({item:n})=>[m("span",$t,A(n.source),1)]),"item.actions":a(({item:n})=>[t(z,null,{default:a(()=>[t(H,{icon:"tabler-dots-vertical"}),t(ce,{activator:"parent"},{default:a(()=>[t(ue,null,{default:a(()=>[t(K,{"prepend-icon":"tabler-calendar",value:"schedule",onClick:l[5]||(l[5]=i=>c.$router.push("/calendar/schedules"))},{default:a(()=>[C(" Add to Schedule ")]),_:1}),t(K,{"prepend-icon":"tabler-coffee-off",value:"cold",onClick:i=>$(n.id)},{default:a(()=>[C(" Mark as Cold ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(T),m("div",Pt,[m("p",It,A(e(ne)({page:e(u),itemsPerPage:e(p)},e(M))),1),t(ie,{modelValue:e(u),"onUpdate:modelValue":l[6]||(l[6]=n=>d(u)?u.value=n:null),length:Math.min(Math.ceil(e(M)/e(p)),5),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(e(M)/e(p)),5)},{prev:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Previous ")]),_:2},1040)]),next:a(n=>[t(P,D({icon:!1,color:"default"},n,{variant:"tonal"}),{default:a(()=>[C(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","headers","items","items-length"])]),_:1})])}}});const ll=te(Ut,[["__scopeId","data-v-cd7e8010"]]);export{Jt as C,el as L,tl as O,ll as R,Zt as a,Yt as b,Xt as c};
