import{_ as ue}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-2f5f92ce.js";import{_ as me}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as pe}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as de}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import{_ as ce}from"./AppStepper.vue_vue_type_style_index_0_lang-ef456a65.js";import{d as ye,k as be,l as ve,b6 as D,R as w,r as c,w as _e,o as i,c as _,b as l,f as t,x as k,p as r,aI as V,y as he,z as fe,F as h,j as E,e as x,a4 as A,a9 as O,h as b,aM as ge}from"./index-5caaa453.js";import{u as C}from"./useApi-c9327355.js";import{c as N}from"./createUrl-3e678c2b.js";import{r as m}from"./validators-db74a876.js";import{$ as ke}from"./api-44dd0fa9.js";import{V as F}from"./VSnackbar-ea7773d7.js";import{V as L}from"./VRow-e44df108.js";import{V as d}from"./VCol-bcc5388c.js";import{V as K}from"./VCardText-3b4da816.js";import{V as Ve}from"./VForm-ed4803d2.js";import{V as Ce,a as S}from"./VWindowItem-1e406499.js";import{V as Ne}from"./VCard-1a5b2c5e.js";import{V as xe}from"./VFileInput-cab9861f.js";import"./form-c9c578a3.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./filter-aecd5fc1.js";import"./VSlideGroup-1fe3f4d3.js";import"./VSlideGroupItem-01cf7141.js";import"./index-2898f57d.js";import"./helpers-681711bc.js";/* empty css              */const Me={class:"mb-5"},Ue=["src"],De=x("div",{class:"d-flex flex-wrap gap-4 justify-sm-flex-start"},[x("label",null,"Company Logo")],-1),we={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ua=ye({__name:"[id]",emits:["update:product_type"],async setup(Le,{emit:Ie}){let u,v;const j=be(),W=ve(),{data:Z}=([u,v]=D(()=>C(N("/get/UI/user/roles",{query:{module:"Bank"}}))),u=await u,v(),u);w(()=>Z.value);const B=[{title:"Company Details",icon:"tabler-building",subtitle:"Name/KRA PIN/Type"},{title:"Company Address Details",icon:"tabler-location",subtitle:"Location Details"},{title:"Relationship Manager Details",icon:"tabler-user"}],y=c(0),I=c(j.params.id),{data:J,execute:Y}=([u,v]=D(()=>C(N(`all/UI/companies/${I.value}/details`))),u=await u,v(),u),s=w(()=>J.value);Y();const f=c(s.value.relationship_manager_name),G=s.value.logo,a=c({companyName:s.value.name||"",topLevelBorrowerLimit:s.value.top_level_borrower_limit||"",limitExpiryDate:s.value.limit_expiry_date||"",uniqueIdentificationNo:s.value.unique_identification_number||"",branchCode:s.value.branch_code||"",businessIdentificationNo:s.value.business_identification_number||"",organizationType:s.value.organization_type||"",bankCustomer:s.value.customer_type||"",kraPin:s.value.kra_pin||"",CUST_ANCODE:s.value.cust_ancode||"",companyLogo:"",city:s.value.city||"",postalCode:s.value.postal_code||"",address:s.value.address||"",relationshipManagerName:"",relationshipManagerEmail:s.value.relationship_manager_email||"",relationshipManagerMobile:s.value.relationship_manager_phone_number||""}),{data:M,execute:H}=([u,v]=D(()=>C(N("/users/UI/list"))),u=await u,v(),u);w(()=>{var o;return console.log((o=M.value)==null?void 0:o.users),!M.value||!M.value.users?[]:M.value.users});const P=[{name:"Nairobi",value:"Nairobi"},{name:"Nakuru",value:"Nakuru"},{name:"Kisumu",value:"Kisumu"},{name:"Mombasa",value:"Mombasa"}],Q=[{name:"Yes",value:"Bank Customer"},{name:"No",value:"Non-bank Customer"}],X=async()=>{const{data:o,error:n}=await C(N("/get/user/data/for/mapping",{query:{id:f.value}}));if(n.value)return n.value;a.value.relationshipManagerName=o.value.name,a.value.relationshipManagerEmail=o.value.email,a.value.relationshipManagerMobile=o.value.phone_number},ee=c([{key:"companyName",type:"text",model:"companyName",label:"Company Name",placeholder:"Company Name",readonly:!1,rules:[m]},{key:"topLevelBorrowerLimit",type:"text",model:"topLevelBorrowerLimit",label:"Top Level Borrower Limit",placeholder:"Top Level Borrower Limit",rules:[m]},{key:"limitExpiryDate",type:"date",model:"limitExpiryDate",label:"Limit Expiry Date",placeholder:"Limit Expiry Date",rules:[m],readonly:!1},{key:"uniqueIdentificationNo",type:"text",model:"uniqueIdentificationNo",label:"Unique Identification No.",placeholder:"Unique Identification No.",readonly:!0},{key:"branchCode",type:"text",model:"branchCode",label:"Branch Code",placeholder:"Branch Code",rules:[m],readonly:!1},{key:"businessIdentificationNo",type:"text",model:"businessIdentificationNo",label:"Business Identification No.",placeholder:"Business Identification No.",rules:[m],readonly:!1},{key:"organizationType",type:"text",model:"organizationType",label:"Organization Type",placeholder:"Organization Type",rules:[m],readonly:!1},{key:"bankCustomer",type:"text",model:"bankCustomer",label:"Bank Customer",placeholder:"Bank Customer",rules:[m],readonly:!1},{key:"kraPin",type:"text",model:"kraPin",label:"KRA PIN",placeholder:"KRA PIN",rules:[m],readonly:!1},{key:"CUST_ANCODE",type:"text",model:"CUST_ANCODE",label:"CUST_ANCODE",placeholder:"CUST_ANCODE",rules:[m],readonly:!1},{key:"companyLogo",type:"text",model:"companyLogo",label:"Company Logo",placeholder:"Company Logo",rules:[m],readonly:!1}]),ae=c([{key:"city",type:"select",items:P,model:"city",label:"City",placeholder:"City",readonly:!1,rules:[m]},{key:"postalCode",type:"text",model:"postalCode",label:"Pin/Zip/Postal Code",placeholder:"Pin/Zip/Postal Code",readonly:!1,rules:[m]},{key:"address",type:"text",show:!0,model:"address",label:"Address",placeholder:"Address",rules:[m]}]),le=c([{key:"relationshipManagerName",type:"select",model:"relationshipManagerName",label:"Relationship Manager Name",placeholder:"Relationship Manager Name",readonly:!1,rules:[m]},{key:"relationshipManagerEmail",type:"text",model:"relationshipManagerEmail",label:"Relationship Manager Email",placeholder:"Relationship Manager Email",readonly:!0,rules:[m]},{key:"relationshipManagerMobile",type:"text",model:"relationshipManagerMobile",label:"Relationship Manager Mobile",placeholder:"Relationship Manager Mobile",readonly:!0,rules:[m]}]),g=c(!1),U=c(!1),R=c({message:void 0,statusCode:void 0}),q=c([]),{data:oe}=([u,v]=D(()=>C(N("/users/UI/list/?itemsPerPage=100"))),u=await u,v(),u),te=w(()=>oe.value.users);q.value=te.value;const $=c(""),re=async()=>{const o=new FormData;o.append("company_id",I.value),o.append("companyName",a.value.companyName),o.append("topLevelBorrowerLimit",a.value.topLevelBorrowerLimit),o.append("limitExpiryDate",a.value.limitExpiryDate),o.append("uniqueIdentificationNo",a.value.uniqueIdentificationNo),o.append("branchCode",a.value.branchCode),o.append("businessIdentificationNo",a.value.businessIdentificationNo),o.append("organizationType",a.value.organizationType),o.append("bankCustomer",a.value.bankCustomer),o.append("kraPin",a.value.kraPin),o.append("CUST_ANCODE",a.value.CUST_ANCODE),a.value.companyLogo&&o.append("companyLogo",a.value.companyLogo[0]),o.append("city",a.value.city),o.append("postalCode",a.value.postalCode),o.append("address",a.value.address),o.append("relationshipManagerName",a.value.relationshipManagerName),o.append("relationshipManagerEmail",a.value.relationshipManagerEmail),o.append("relationshipManagerMobile",a.value.relationshipManagerMobile),await ke("/company/edit",{method:"POST",body:o,onResponseError({response:n}){R.value=n._data.errors,g.value=!1,U.value=!0,$.value=JSON.stringify(R.value,null,2)}}),g.value=!0,setTimeout(async()=>await ge(()=>{W.push({path:`/companies/view/${I.value}`,query:{refresh:new Date().getTime()}})}),3e3)};return H(),_e(f,()=>{X()}),(o,n)=>{const ne=ce,se=de,z=pe,T=me,ie=ue;return i(),_(h,null,[l(F,{modelValue:r(g),"onUpdate:modelValue":n[0]||(n[0]=e=>V(g)?g.value=e:null),color:"success",location:"top end",variant:"flat"},{default:t(()=>[k(" Company Updated Successfully ")]),_:1},8,["modelValue"]),l(F,{modelValue:r(U),"onUpdate:modelValue":n[1]||(n[1]=e=>V(U)?U.value=e:null),color:"error",location:"top end",variant:"flat"},{default:t(()=>[k(he(r($)),1)]),_:1},8,["modelValue"]),l(Ne,null,{default:t(()=>[l(L,null,{default:t(()=>[l(d,{class:fe(o.$vuetify.display.smAndDown?"border-b":"border-e"),cols:"12",md:"4"},{default:t(()=>[l(K,null,{default:t(()=>[l(ne,{"current-step":r(y),"onUpdate:currentStep":n[2]||(n[2]=e=>V(y)?y.value=e:null),items:B,class:"stepper-icon-step-bg",direction:"vertical","icon-size":"24"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),l(d,{cols:"12",md:"8"},{default:t(()=>[l(K,null,{default:t(()=>[l(Ve,null,{default:t(()=>[l(Ce,{modelValue:r(y),"onUpdate:modelValue":n[4]||(n[4]=e=>V(y)?y.value=e:null),class:"disable-tab-transition"},{default:t(()=>[l(S,null,{default:t(()=>[l(L,null,{default:t(()=>[(i(!0),_(h,null,E(r(ee),e=>(i(),_(h,{key:e.key},[e.key==="limitExpiryDate"?(i(),b(d,{key:0,cols:"12",md:"6"},{default:t(()=>[l(se,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,label:e.label,class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Select Date"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):e.key==="bankCustomer"?(i(),b(d,{key:1,cols:"12",md:"6"},{default:t(()=>[l(z,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,items:Q,"item-title":"name","item-value":"value",rules:e.rules,label:e.label,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","rules","label","placeholder"])]),_:2},1024)):e.key==="companyLogo"?(i(),b(d,{key:2,cols:"12",md:"6"},{default:t(()=>[x("div",Me,[x("img",{height:"50",width:"50",src:r(G),alt:"Company Logo"},null,8,Ue)]),De,l(xe,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,label:"Company Logo",accept:"image/*"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):(i(),b(d,{key:3,cols:"12",md:"6"},{default:t(()=>[l(T,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024))],64))),128)),l(d,{cols:"12",md:"12"})]),_:1})]),_:1}),l(S,null,{default:t(()=>[l(L,null,{default:t(()=>[(i(!0),_(h,null,E(r(ae),e=>(i(),_(h,{key:e.key},[e.key==="city"?(i(),b(d,{key:0,cols:"12",md:"8"},{default:t(()=>[l(z,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,items:P,"item-title":"name","item-value":"name",rules:e.rules,chips:"",label:e.label,placeholder:"Select City"},null,8,["modelValue","onUpdate:modelValue","rules","label"])]),_:2},1024)):(i(),b(d,{key:1,cols:"12",md:"8"},{default:t(()=>[l(T,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024))],64))),128)),l(d,{cols:"12",md:"12"})]),_:1})]),_:1}),l(S,null,{default:t(()=>[l(L,null,{default:t(()=>[(i(!0),_(h,null,E(r(le),e=>(i(),_(h,{key:e.key},[e.key==="relationshipManagerName"?(i(),b(d,{key:0,cols:"12",md:"8"},{default:t(()=>[l(ie,{modelValue:r(f),"onUpdate:modelValue":n[3]||(n[3]=p=>V(f)?f.value=p:null),chips:"","closable-chips":"",items:r(q),"item-title":"fullName","item-value":"id",placeholder:"Search Users",label:"Relationship Manager Name"},null,8,["modelValue","items"])]),_:1})):(i(),b(d,{key:1,cols:"12",md:"8"},{default:t(()=>[l(T,{modelValue:r(a)[e.model],"onUpdate:modelValue":p=>r(a)[e.model]=p,label:e.label,placeholder:e.placeholder,readonly:e.readonly,rules:e.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024))],64))),128)),l(d,{cols:"12",md:"12"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),x("div",we,[l(A,{color:"secondary",variant:"tonal",disabled:r(y)===0,onClick:n[5]||(n[5]=e=>y.value--)},{default:t(()=>[l(O,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),k(" Previous ")]),_:1},8,["disabled"]),B.length-1===r(y)?(i(),b(A,{key:0,color:"success",onClick:re},{default:t(()=>[k(" submit ")]),_:1})):(i(),b(A,{key:1,onClick:n[6]||(n[6]=e=>y.value++)},{default:t(()=>[k(" Next "),l(O,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Ua as default};
