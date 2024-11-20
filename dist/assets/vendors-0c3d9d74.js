import{_ as ye}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9e7a34d5.js";import{_ as fe}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as ge}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{F as ke}from"./FileSaver.min-162ac943.js";import{X as A}from"./xlsx-d63df831.js";import{p as _e}from"./paginationMeta-4ad053a4.js";import{u as z}from"./useApi-c9327355.js";import{c as N}from"./createUrl-3e678c2b.js";import{$ as be}from"./api-44dd0fa9.js";import{V as Ve}from"./VSpacer-a56288e5.js";import{d as Ce,r as n,b6 as j,R as G,w as xe,o as u,c as he,b as l,f as s,e as d,p as a,aI as p,h as y,A as I,a4 as k,y as S,t as F,a9 as R,x as C,F as we,a as $e,aR as Be,aS as Ae}from"./index-5caaa453.js";import{V as Ie}from"./VDataTableServer-64dc84b4.js";import{V as Se}from"./VChip-49676f7d.js";import{V as Ue}from"./VDivider-d40713ce.js";import{V as De}from"./VPagination-4169e3c5.js";import{V as J}from"./VCard-1a5b2c5e.js";import{V as q}from"./VCardText-3b4da816.js";import{V as Pe}from"./VDialog-808ce03e.js";import{_ as Me}from"./_plugin-vue_export-helper-c27b6911.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./index-2898f57d.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";const K=x=>(Be("data-v-533620d1"),x=x(),Ae(),x),Te={class:"d-flex flex-wrap gap-4 mx-5 my-5 row"},ze={class:"d-flex align-center"},Ne={class:"d-flex gap-4 flex-wrap align-center"},je=["onClick"],Fe={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Re={class:"text-sm text-medium-emphasis mb-0"},qe=K(()=>d("br",null,null,-1)),Ee=K(()=>d("br",null,null,-1)),Oe=Ce({__name:"vendors",async setup(x){let i,g;const W=[{title:"Name",key:"name"},{title:"Bank",key:"bank"},{title:"Business ID Number",key:"business_identification_number"},{title:"Customer Type",key:"customer_type"},{title:"Bank Manager",key:"relationship_manager_name"},{title:"Business Segment",key:"business_segment"},{title:"Organization Type",key:"organization_type"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],U=n(!0),Y=n(0),_=n(""),h=n(),b=n(),V=n([]),r=n(10),c=n(1),E=n(),O=n(),v=n(!1),f=n(null),Z=o=>{f.value=o,v.value=!0},ee=()=>{U.value=!U.value},te=()=>{_.value=""},ae=()=>{Y.value=0},oe=()=>{ae(),te()},le=n([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),se=n([{title:"Approve",value:"active"},{title:"Reject",value:"inactive"}]),ne=o=>{var t,m;c.value=o.page,E.value=(t=o.sortBy[0])==null?void 0:t.key,O.value=(m=o.sortBy[0])==null?void 0:m.order,console.log(o+0)},ie=o=>o==="active"?{text:"Active",color:"success"}:{text:"Inactive",color:"error"},D=o=>o&&o==="active"?{color:"success",icon:"tabler-thumb-up",title:"Deactivate"}:{color:"error",icon:"tabler-thumb-down",title:"Activate"},w=n(),{data:re,execute:Xe}=([i,g]=j(()=>z(N("UI/get/banks/list"))),i=await i,g(),i),pe=re.value.data.map(o=>({title:o.name,value:o.id})),{data:X,execute:H}=([i,g]=j(()=>z(N("/programs/buyers-dealers/vendors",{query:{q:_,status:h,bank:w,page:c,itemsPerPage:r,sortBy:E,orderBy:O}}))),i=await i,g(),i),L=G(()=>X.value.data),$=G(()=>X.value.total),{data:ce,execute:me}=([i,g]=j(()=>z(N("/UI/companies/changes"))),i=await i,g(),i);H(),me(),ce.value.companychange,n([]);const P=async o=>{await be("/UI/companies/activate",{method:"POST",body:{ids:o,status:b.value}}),await H(),v.value=!1};xe(b,o=>{o&&V.value.length&&P(V.value)});const ue=()=>{const o=A.utils.json_to_sheet(L.value),t=A.utils.book_new();A.utils.book_append_sheet(t,o,"Vendors");const m=A.write(t,{bookType:"xlsx",type:"array"});ke.saveAs(new Blob([m],{type:"application/octet-stream"}),"Vendors.xlsx")};return(o,t)=>{const m=ge,de=fe,M=$e("IconBtn"),ve=ye;return u(),he(we,null,[l(J,{class:"mb-6"},{default:s(()=>[d("div",Te,[d("div",ze,[l(m,{modelValue:a(w),"onUpdate:modelValue":t[0]||(t[0]=e=>p(w)?w.value=e:null),items:a(pe),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Bank",style:{"inline-size":"200px"}},null,8,["modelValue","items"]),l(de,{modelValue:a(_),"onUpdate:modelValue":t[1]||(t[1]=e=>p(_)?_.value=e:null),"append-inner-icon":a(U)?"tabler-search":"tabler-map-pin-off",class:"me-1","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Company Name",style:{"inline-size":"200px"},type:"text","onClick:appendInner":ee,"onClick:append":oe},null,8,["modelValue","append-inner-icon"]),l(m,{modelValue:a(h),"onUpdate:modelValue":t[2]||(t[2]=e=>p(h)?h.value=e:null),items:a(le),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"100px"}},null,8,["modelValue","items"]),o.$can("manage","Company Changes Checker")&&o.$can("manage","Company Bulk Approve")?(u(),y(m,{key:0,modelValue:a(b),"onUpdate:modelValue":t[3]||(t[3]=e=>p(b)?b.value=e:null),items:a(se),"item-title":"title","item-value":"value",class:"me-1","clear-icon":"tabler-x",clearable:"",chips:"",placeholder:"Bulk Actions",style:{"inline-size":"200px"}},null,8,["modelValue","items"])):I("",!0),l(Ve)]),d("div",Ne,[l(m,{modelValue:a(r),"onUpdate:modelValue":t[4]||(t[4]=e=>p(r)?r.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),l(k,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:ue})])]),l(a(Ie),{"items-per-page":a(r),"onUpdate:itemsPerPage":t[6]||(t[6]=e=>p(r)?r.value=e:null),page:a(c),"onUpdate:page":t[7]||(t[7]=e=>p(c)?c.value=e:null),modelValue:a(V),"onUpdate:modelValue":t[8]||(t[8]=e=>p(V)?V.value=e:null),headers:W,items:a(L),"items-length":a($),"item-key":"id",class:"text-wrap","show-select":"","onUpdate:options":ne},{"item.name":s(({item:e})=>[d("h6",null,[d("a",{href:"javascript:void(0)",class:"text-primary",onClick:T=>o.$router.push(`/companies/view/${e.id}`)},S(e.name),9,je)])]),"item.status":s(({item:e})=>[l(Se,F({density:"default",label:""},ie(e.status)),null,16)]),"item.actions":s(({item:e})=>{var T;return[o.$can("manage","Company Changes Checker")?(u(),y(M,{key:0,onClick:B=>o.$router.push(`/companies/view/${e.id}`)},{default:s(()=>[l(R,{icon:"tabler-eye",color:"info"})]),_:2},1032,["onClick"])):I("",!0),o.$can("manage","Company Changes Checker")?(u(),y(M,{key:1,onClick:B=>o.$router.push(`/companies/edit/${e.id}`)},{default:s(()=>[l(R,{icon:"tabler-pencil",color:"warning"})]),_:2},1032,["onClick"])):I("",!0),o.$can("manage","Company Changes Checker")?(u(),y(M,{key:2,title:(T=D(e.status))==null?void 0:T.title},{default:s(()=>{var B,Q;return[l(R,{icon:(B=D(e.status))==null?void 0:B.icon,color:(Q=D(e.status))==null?void 0:Q.color,onClick:He=>Z(e)},null,8,["icon","color","onClick"])]}),_:2},1032,["title"])):I("",!0)]}),bottom:s(()=>[l(Ue),d("div",Fe,[d("p",Re,S(a(_e)({page:a(c),itemsPerPage:a(r)},a($))),1),l(De,{modelValue:a(c),"onUpdate:modelValue":t[5]||(t[5]=e=>p(c)?c.value=e:null),length:Math.min(Math.ceil(a($)/a(r)),5),"total-visible":o.$vuetify.display.xs?1:Math.min(Math.ceil(a($)/a(r)),5)},{prev:s(e=>[l(k,F({color:"default"},e,{variant:"tonal"}),null,16)]),next:s(e=>[l(k,F({color:"default"},e,{variant:"tonal"}),null,16)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","modelValue","items","items-length"])]),_:1}),l(Pe,{modelValue:a(v),"onUpdate:modelValue":t[13]||(t[13]=e=>p(v)?v.value=e:null),persistent:"",class:"v-dialog-sm"},{default:s(()=>[l(ve,{onClick:t[9]||(t[9]=e=>v.value=!a(v))}),l(J,null,{default:s(()=>[a(f).status!=="active"?(u(),y(q,{key:0},{default:s(()=>[C(" Are you sure you want to activate company: "+S(a(f).name)+"? ",1),qe]),_:1})):(u(),y(q,{key:1},{default:s(()=>[C(" Are you sure you want to deactivate company: "+S(a(f).name)+"? ",1),Ee]),_:1})),l(q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:s(()=>[l(k,{color:"secondary",variant:"tonal",onClick:t[10]||(t[10]=e=>v.value=!1)},{default:s(()=>[C(" Cancel ")]),_:1}),a(f).status!=="active"?(u(),y(k,{key:0,color:"success",onClick:t[11]||(t[11]=e=>P([a(f).id]))},{default:s(()=>[C(" Activate ")]),_:1})):(u(),y(k,{key:1,color:"error",onClick:t[12]||(t[12]=e=>P([a(f).id]))},{default:s(()=>[C(" Deactivate ")]),_:1}))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const jt=Me(Oe,[["__scopeId","data-v-533620d1"]]);export{jt as default};
