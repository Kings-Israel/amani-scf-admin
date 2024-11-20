import{_ as X}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{o as d,h as g,f as t,e as a,b as e,x as k,a4 as I,d as E,c as j,y as b,p as l,A as F,aR as ae,aS as le,r as y,am as M,R as Y,j as se,F as Z,a9 as oe,b4 as ne,l as ie,a$ as re,K as de,aM as ue,k as ce,b6 as J,bY as me,w as pe,aI as K,a_ as _e}from"./index-5caaa453.js";import{V as fe,a as O}from"./VTimelineItem-17fcaa28.js";import{V as q}from"./VCardText-3b4da816.js";import{V as T}from"./VCard-1a5b2c5e.js";import{a as ye}from"./formatters-92bc75d8.js";import{V as ee}from"./VAvatar-3ee4c690.js";import{V as ve}from"./VImg-6009f8f0.js";import{V as be}from"./VDivider-d40713ce.js";import{V as te,a as $,d as he}from"./VList-4b1bf96e.js";import{V as Ve}from"./VChip-49676f7d.js";import{V as r}from"./VCol-bcc5388c.js";import{V as U}from"./VRow-e44df108.js";import{r as S}from"./validators-db74a876.js";import{$ as Q}from"./api-44dd0fa9.js";import{V as z}from"./VContainer-c2b47f6e.js";import{V as ge}from"./VForm-ed4803d2.js";import{u as W}from"./useApi-c9327355.js";import{c as ke}from"./createUrl-3e678c2b.js";import{V as xe}from"./VSnackbar-ea7773d7.js";import{V as De}from"./VDialog-808ce03e.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./createSimpleFunctional-9624028d.js";import"./helpers-681711bc.js";import"./ssrBoot-2696bccc.js";/* empty css              */import"./index-2898f57d.js";const we={},Ce={class:"me-n2",style:{"text-decoration":"underline"}},Se=a("div",{class:"d-flex justify-space-between align-center flex-wrap mb-1"},[a("span",{class:"app-timeline-title"}," Client Meeting "),a("span",{class:"app-timeline-meta"},"Today")],-1),$e=a("p",{class:"app-timeline-text mb-2"}," Project meeting with john @10:15am ",-1),Ie=a("div",{class:"d-flex justify-space-between align-center mb-1"},[a("span",{class:"app-timeline-title"}," Create a new project for client "),a("span",{class:"app-timeline-meta"},"2 Day Ago")],-1),Te=a("p",{class:"app-timeline-text mb-1"}," Add files to new design folder ",-1),Le=a("div",{class:"d-flex justify-space-between align-center mb-1"},[a("span",{class:"app-timeline-title"}," Shared 2 New Project Files "),a("span",{class:"app-timeline-meta"},"6 Day Ago")],-1),Ae=a("div",{class:"d-flex align-center"},[a("p",{class:"mb-1 app-timeline-text me-2"}," Sent by Mollie Dixon ")],-1);function Oe(c,s){return d(),g(T,{title:"Activity Timeline"},{append:t(()=>[a("div",Ce,[e(I,{"prepend-icon":"tabler-plus",variant:"plain",style:{"text-decoration":"underline"}},{default:t(()=>[k(" Add ")]),_:1})])]),default:t(()=>[e(q,null,{default:t(()=>[e(fe,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:t(()=>[e(O,{"dot-color":"primary",size:"x-small"},{default:t(()=>[Se,$e]),_:1}),e(O,{"dot-color":"success",size:"x-small"},{default:t(()=>[Ie,Te]),_:1}),e(O,{"dot-color":"error",size:"x-small"},{default:t(()=>[Le,Ae]),_:1})]),_:1})]),_:1})]),_:1})}const Ue=N(we,[["render",Oe]]),L=c=>(ae("data-v-83b255a9"),c=c(),le(),c),je={key:1,class:"text-5xl font-weight-medium"},qe={class:"text-h4 mt-4"},Re={class:"text-sm"},Be=L(()=>a("div",{class:"text-disabled text-uppercase text-sm"}," Details ",-1)),Fe={class:"text-body-1"},Me=L(()=>a("span",{class:"font-weight-medium me-2"},"Username:",-1)),ze={class:"text-body-1"},Ne=L(()=>a("span",{class:"font-weight-medium me-2"},"Billing Email:",-1)),Ee={class:"text-body-1"},Pe=L(()=>a("span",{class:"font-weight-medium me-2"},"Status:",-1)),Ge={class:"text-body-1"},He=L(()=>a("span",{class:"font-weight-medium me-2"},"Contact:",-1)),Ke={class:"text-body-1"},Ye=L(()=>a("span",{class:"font-weight-medium me-2"},"County:",-1)),Je=E({__name:"CompanyDetails",props:{companyDetail:{}},setup(c){const s=c;return(u,m)=>(d(),g(U,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[s.companyDetail?(d(),g(T,{key:0},{default:t(()=>[e(q,{class:"text-center pt-15"},{default:t(()=>[e(ee,{rounded:"",size:100,color:s.companyDetail.username?void 0:"primary",variant:s.companyDetail.avatar?void 0:"tonal"},{default:t(()=>[s.companyDetail.avatar?(d(),g(ve,{key:0,src:s.companyDetail.avatar},null,8,["src"])):(d(),j("span",je,b(("avatarText"in u?u.avatarText:l(ye))(s.companyDetail.username)),1))]),_:1},8,["color","variant"]),a("h4",qe,b(s.companyDetail.company),1),a("span",Re,"Customer ID #"+b(s.companyDetail.id),1)]),_:1}),e(q,null,{default:t(()=>[e(be,{class:"my-4"}),Be,e(te,{class:"card-list mt-2"},{default:t(()=>[e($,null,{default:t(()=>[a("div",Fe,[Me,a("span",null,b(s.companyDetail.username),1)])]),_:1}),e($,null,{default:t(()=>[a("div",ze,[Ne,a("span",null,b(s.companyDetail.email),1)])]),_:1}),e($,null,{default:t(()=>[a("div",Ee,[Pe,e(Ve,{label:"",color:"success"},{default:t(()=>[k(b(s.companyDetail.status),1)]),_:1})])]),_:1}),e($,null,{default:t(()=>[a("div",Ge,[He,a("span",null,b(s.companyDetail.contact),1)])]),_:1}),e($,null,{default:t(()=>[a("div",Ke,[Ye,a("span",null,b(s.companyDetail.county),1)])]),_:1})]),_:1})]),_:1})]),_:1})):F("",!0)]),_:1})]),_:1}))}});const Qe=N(Je,[["__scopeId","data-v-83b255a9"]]),We=E({__name:"Documents",props:{documents:{},bank:{},name:{}},setup(c){const s=c,u=y(s.documents),m=M(()=>s.bank),p=M(()=>s.name),x=Y(()=>{const D=[];return u.value.forEach(h=>{h.documents.some(_=>_.bank_id===m.value)&&D.push(...h.documents.filter(_=>_.bank_id===m.value))}),D});return(D,h)=>(d(),g(te,{lines:"two"},{default:t(()=>[e(he,{inset:""},{default:t(()=>[k(" Documents Required By "+b(l(p)),1)]),_:1}),(d(!0),j(Z,null,se(l(x),_=>(d(),g($,{key:_.id,subtitle:new Date().toLocaleDateString("en-Us",{year:"numeric",month:"short",day:"numeric"}),title:_.name},{prepend:t(()=>[e(ee,{color:"secondary",variant:"tonal"},{default:t(()=>[e(oe,{size:26,icon:"tabler-clipboard-text"})]),_:1})]),append:t(()=>[e(I,{color:"warning",icon:"tabler-info-circle",size:"small",variant:"text"})]),_:2},1032,["subtitle","title"]))),128))]),_:1}))}}),Xe={key:0,class:"d-flex align-center gap-x-2"},Ze={class:"d-flex flex-column"},et=["href"],tt=E({__name:"OtherDetails",props:{pipeline:{},bank:{}},emits:["changeLoading"],setup(c,{emit:s}){const u=c,m=s,p=y(),x=y(!0),D=y({message:void 0,statusCode:void 0}),h=ne("userData"),_=y(h.value.name),A=ie(),P={stage:"Opportunity",product:"Vendor Financing",industry:"ICT",tatDays:0,priority:"High",status:"Converted",source:"Email",customerType:"Vendor",branch:"None",email:"Email",owner:_,associatedUsers:""},n=y(structuredClone(P)),w=["Converted","Moved to SCF","Contact us in 2 -3 months","Contact us Later","Agreement Signing","Assign Financier","Document Collection","Future Opportunities","In discussion","Lost","Not Interested"],R=["Email","Marketing","Outdoor","LinkedIn","Messages","Google","Adverts"],B=M(()=>u.bank),G=M(()=>u.pipeline),V=async()=>{m("changeLoading",!0);try{const o=await Q("/generate/documents/link",{method:"POST",body:{bank:B.value,pipeline:G.value},onResponseError({response:v}){D.value=v._data.errors}}),{url:i}=o;p.value=i,x.value=!1}catch(o){console.error(o)}},C=async o=>{await ue(),await A.push(`/pipeline/opportunity/${o}`)},H=async()=>{try{const o=await Q(`/store/UI/pipeline/opportunity/data/${u.pipeline}`,{method:"POST",body:n.value,onResponseError({response:v}){D.value=v._data.errors}});console.log(o);const{message:i}=o;console.log(i),await C("Opportunity")}catch(o){console.error(o)}};return(o,i)=>{const v=X;return d(),j("div",null,[e(ge,{onSubmit:re(()=>{},["prevent"])},{default:t(()=>[e(z,null,{default:t(()=>[e(T,{class:"p-2 m-5"},{default:t(()=>[e(r,null,{default:t(()=>[e(U,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).product,"onUpdate:modelValue":i[0]||(i[0]=f=>l(n).product=f),items:["Vendor Financing","Dealer Financing","Reverse Factor"],rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Product",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).priority,"onUpdate:modelValue":i[1]||(i[1]=f=>l(n).priority=f),items:["High","Medium","Low"],rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Priority",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).status,"onUpdate:modelValue":i[2]||(i[2]=f=>l(n).status=f),items:w,rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Status",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).customerType,"onUpdate:modelValue":i[3]||(i[3]=f=>l(n).customerType=f),items:["Vendor","Buyer","Anchor"],rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Customer Type",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).source,"onUpdate:modelValue":i[4]||(i[4]=f=>l(n).source=f),items:R,rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Source",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(v,{modelValue:l(n).industry,"onUpdate:modelValue":i[5]||(i[5]=f=>l(n).industry=f),items:["ICT","Bank","Others"],rules:["requiredValidator"in o?o.requiredValidator:l(S)],label:"Industry",placeholder:"Select Item"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(T,{class:"p-2 m-5"},{default:t(()=>[e(r,null,{default:t(()=>[e(r,{class:"d-flex gap-4 align-items-end",cols:"12"},{default:t(()=>[e(I,{color:"primary",type:"submit",variant:"tonal",onClick:V},{default:t(()=>[k(" Generate Link ")]),_:1}),e(I,{disabled:l(x),type:"submit",onClick:H},{default:t(()=>[k(" Convert to Opportunity ")]),_:1},8,["disabled"]),e(I,{color:"secondary",type:"reset",variant:"tonal"},{default:t(()=>[k(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(p)?(d(),j("div",Xe,[a("div",Ze,[a("a",{href:l(p).toString(),rel:"noopener noreferrer",target:"_blank"},[a("span",{style:de({color:`${o.$vuetify.theme.global.current.colors.primary}`}),class:"text-body-1 font-weight-medium"},b(l(p)),5)],8,et)])])):F("",!0)])}}});const at=N(tt,[["__scopeId","data-v-1ee3d659"]]),lt={},st={class:"me-n2",style:{"text-decoration":"underline"}},ot={side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},nt=a("div",{class:"d-flex justify-space-between align-center flex-wrap mb-1"},[a("span",{class:"app-timeline-title"}," Client Meeting "),a("span",{class:"app-timeline-meta"},"Today")],-1),it=a("p",{class:"app-timeline-text mb-2"}," Project meeting with john @10:15am ",-1),rt=a("div",{class:"d-flex justify-space-between align-center mb-1"},[a("span",{class:"app-timeline-title"}," Create a new project for client "),a("span",{class:"app-timeline-meta"},"2 Day Ago")],-1),dt=a("p",{class:"app-timeline-text mb-1"}," Add files to new design folder ",-1);function ut(c,s){return d(),g(T,{title:"Remarks"},{append:t(()=>[a("div",st,[e(I,{"prepend-icon":"tabler-plus",variant:"plain",style:{"text-decoration":"underline"}},{default:t(()=>[k(" Add ")]),_:1})])]),default:t(()=>[e(q,null,{default:t(()=>[a("div",ot,[e(O,{size:"x-small"},{default:t(()=>[nt,it]),_:1}),e(O,{size:"x-small"},{default:t(()=>[rt,dt]),_:1})])]),_:1})]),_:1})}const ct=N(lt,[["render",ut]]),la=E({__name:"[id]",async setup(c){let s,u;const m=y(!1),p=y(!1),x=y(),D=ce(),h=y(D.params.id),{data:_,execute:A}=([s,u]=J(()=>W(ke("/details/UI/bank/documents"))),s=await s,u(),s),P=Y(()=>_.value.data),n=Y(()=>_.value.data.map(V=>({name:V.name,bank_id:V.id}))),w=y({name:n.value[0].name,bank_id:n.value[0].bank_id});A(),me(()=>A());const{data:R,error:B}=([s,u]=J(()=>W(`/company/detail/${h.value}`)),s=await s,u(),s),G=V=>{m.value=V};return pe(m,V=>{V&&setTimeout(()=>{m.value=!1,p.value=!0},4e3)}),B.value?console.log(B.value):R.value&&(x.value=R.value.data),(V,C)=>{const H=X;return d(),j(Z,null,[e(xe,{modelValue:l(p),"onUpdate:modelValue":C[0]||(C[0]=o=>K(p)?p.value=o:null),color:"success",location:"top end",variant:"flat"},{default:t(()=>[k(" Link Successfully generated. ")]),_:1},8,["modelValue"]),e(De,{modelValue:l(m),"onUpdate:modelValue":C[1]||(C[1]=o=>K(m)?m.value=o:null),width:"300"},{default:t(()=>[e(T,{color:"primary",width:"300"},{default:t(()=>[e(q,{class:"pt-3"},{default:t(()=>[k(" Generating link "),e(_e,{height:8,class:"mb-0 mt-4",color:"white",indeterminate:""})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,null,{default:t(()=>[e(U,{class:"d-flex"},{default:t(()=>[l(x)?(d(),g(r,{key:0,cols:"4",lg:"4",md:"5"},{default:t(()=>[e(Qe,{"company-detail":l(x)},null,8,["company-detail"])]),_:1})):F("",!0),e(r,null,{default:t(()=>[e(U,null,{default:t(()=>[e(r,null,{default:t(()=>[e(Ue)]),_:1}),e(r,null,{default:t(()=>[e(ct)]),_:1})]),_:1}),e(U,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(H,{modelValue:l(w),"onUpdate:modelValue":C[2]||(C[2]=o=>K(w)?w.value=o:null),items:l(n),"item-title":"name","item-value":"bank_id",label:"Select Bank",placeholder:"Select Bank","return-object":"","single-line":"",onChange:l(A)},null,8,["modelValue","items","onChange"])]),_:1}),e(z,null,{default:t(()=>[e(We,{bank:l(w).bank_id,documents:l(P),name:l(w).name},null,8,["bank","documents","name"])]),_:1}),l(h)?(d(),g(at,{key:0,bank:l(w).bank_id,pipeline:l(h),onChangeLoading:G},null,8,["bank","pipeline"])):F("",!0)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{la as default};