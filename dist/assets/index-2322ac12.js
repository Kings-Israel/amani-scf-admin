import{a as Z,p as ee}from"./formatters-92bc75d8.js";import{_ as te}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as le}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{p as ae}from"./paginationMeta-4ad053a4.js";import{u as se}from"./useApi-c9327355.js";import{c as oe}from"./createUrl-3e678c2b.js";import{$ as ie}from"./api-44dd0fa9.js";import{V as D}from"./VRow-e44df108.js";import{V as w}from"./VCardText-3b4da816.js";import{V as k}from"./VCol-bcc5388c.js";import{V as C}from"./VCard-1a5b2c5e.js";import{V as re}from"./VSpacer-a56288e5.js";import{d as ne,r as n,b6 as ce,R as N,o as v,c as P,e as o,b as e,f as l,F as ue,j as pe,p as s,aI as f,a4 as _,x as p,h as E,y as r,a9 as d,t as W,a as j,z as de}from"./index-5caaa453.js";import{V as F}from"./VDivider-d40713ce.js";import{V as me}from"./VDataTableServer-64dc84b4.js";import{V as S}from"./VAvatar-3ee4c690.js";import{V as fe}from"./VImg-6009f8f0.js";import{V as ve}from"./VChip-49676f7d.js";import{V as _e}from"./VMenu-97c48b4e.js";import{V as Ve,a as z,b as A}from"./VList-4b1bf96e.js";import{V as ge}from"./VPagination-4169e3c5.js";import"./helpers-681711bc.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./dialog-transition-1ae6ec72.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./index-2898f57d.js";/* empty css              */import"./createSimpleFunctional-9624028d.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";import"./ssrBoot-2696bccc.js";const xe={class:"d-flex mb-6"},he={class:"d-flex justify-space-between"},be={class:"d-flex flex-column gap-y-1"},ye={class:"text-body-1 text-medium-emphasis"},ke={class:"text-h4"},Ue={class:"text-sm"},we={class:"me-3 d-flex gap-3"},Ce={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Pe={style:{"inline-size":"10rem"}},Se={class:"d-flex align-center"},ze={key:1},Ae={class:"d-flex flex-column"},Be={class:"text-base"},Le={class:"text-sm text-medium-emphasis"},Re={class:"d-flex align-center gap-4"},Ie={class:"text-capitalize"},Te={class:"text-capitalize font-weight-medium"},$e={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},De={class:"text-sm text-disabled mb-0"},Bt=ne({__name:"index",async setup(Ne){let V,B;const g=n(""),x=n(),h=n(),b=n(),c=n(10),u=n(1),L=n(),R=n(),M=i=>{var a,m;u.value=i.page,L.value=(a=i.sortBy[0])==null?void 0:a.key,R.value=(m=i.sortBy[0])==null?void 0:m.order},q=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:I,execute:O}=([V,B]=ce(()=>se(oe("/users/UI/list",{query:{q:g,status:b,plan:h,role:x,itemsPerPage:c,page:u,sortBy:L,orderBy:R}}))),V=await V,B(),V),Q=N(()=>I.value.users),y=N(()=>I.value.totalUsers),G=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],H=i=>{const a=i.toLowerCase();return a==="pending"?"warning":a==="active"?"success":a==="inactive"?"secondary":"primary"},J=n(!1),T=async i=>{await ie(`/apps/users/${i}`,{method:"DELETE"}),O()},K=n([{title:"Session",value:"21,459",change:29,desc:"Total Users",icon:"tabler-user",iconColor:"primary"},{title:"Paid Users",value:"4,567",change:18,desc:"Last Week Analytics",icon:"tabler-user-plus",iconColor:"error"},{title:"Active Users",value:"19,860",change:-14,desc:"Last Week Analytics",icon:"tabler-user-check",iconColor:"success"},{title:"Pending Users",value:"237",change:42,desc:"Last Week Analytics",icon:"tabler-user-exclamation",iconColor:"warning"}]);return(i,a)=>{const m=le,X=te,Y=j("RouterLink"),$=j("IconBtn");return v(),P("section",null,[o("div",xe,[e(D,null,{default:l(()=>[(v(!0),P(ue,null,pe(s(K),(t,U)=>(v(),E(k,{key:U,cols:"12",md:"3",sm:"6"},{default:l(()=>[e(C,null,{default:l(()=>[e(w,null,{default:l(()=>[o("div",he,[o("div",be,[o("span",ye,r(t.title),1),o("div",null,[o("h4",ke,[p(r(t.value)+" ",1),o("span",{class:de([t.change>0?"text-success":"text-error","text-base"])},"("+r(("prefixWithPlus"in i?i.prefixWithPlus:s(ee))(t.change))+"%)",3)])]),o("span",Ue,r(t.desc),1)]),e(S,{color:t.iconColor,rounded:"",size:"38",variant:"tonal"},{default:l(()=>[e(d,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),e(C,{class:"mb-6",title:"Filters"},{default:l(()=>[e(w,null,{default:l(()=>[e(D,null,{default:l(()=>[e(k,{cols:"12",sm:"4"},{default:l(()=>[e(m,{modelValue:s(x),"onUpdate:modelValue":a[0]||(a[0]=t=>f(x)?x.value=t:null),items:i.roles,"clear-icon":"tabler-x",clearable:"",label:"Select Role",placeholder:"Select Role"},null,8,["modelValue","items"])]),_:1}),e(k,{cols:"12",sm:"4"},{default:l(()=>[e(m,{modelValue:s(h),"onUpdate:modelValue":a[1]||(a[1]=t=>f(h)?h.value=t:null),items:i.plans,"clear-icon":"tabler-x",clearable:"",label:"Select Plan",placeholder:"Select Plan"},null,8,["modelValue","items"])]),_:1}),e(k,{cols:"12",sm:"4"},{default:l(()=>[e(m,{modelValue:s(b),"onUpdate:modelValue":a[2]||(a[2]=t=>f(b)?b.value=t:null),items:G,"clear-icon":"tabler-x",clearable:"",label:"Select Status",placeholder:"Select Status"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(w,{class:"d-flex flex-wrap py-4 gap-4"},{default:l(()=>[o("div",we,[e(m,{items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],"model-value":s(c),style:{"inline-size":"6.25rem"},"onUpdate:modelValue":a[3]||(a[3]=t=>c.value=parseInt(t,10))},null,8,["model-value"])]),e(re),o("div",Ce,[o("div",Pe,[e(X,{modelValue:s(g),"onUpdate:modelValue":a[4]||(a[4]=t=>f(g)?g.value=t:null),density:"compact",placeholder:"Search"},null,8,["modelValue"])]),e(_,{color:"secondary","prepend-icon":"tabler-screen-share",variant:"tonal"},{default:l(()=>[p(" Export ")]),_:1}),e(_,{"prepend-icon":"tabler-plus",onClick:a[5]||(a[5]=t=>J.value=!0)},{default:l(()=>[p(" Add New User ")]),_:1})])]),_:1}),e(F),e(s(me),{"items-per-page":s(c),"onUpdate:itemsPerPage":a[7]||(a[7]=t=>f(c)?c.value=t:null),page:s(u),"onUpdate:page":a[8]||(a[8]=t=>f(u)?u.value=t:null),headers:q,items:s(Q),"items-length":s(y),class:"text-no-wrap","onUpdate:options":M},{"item.user":l(({item:t})=>[o("div",Se,[e(S,{class:"me-3",color:"primary",size:"34",variant:"tonal"},{default:l(()=>[t.avatar?(v(),E(fe,{key:0,src:t.avatar},null,8,["src"])):(v(),P("span",ze,r(("avatarText"in i?i.avatarText:s(Z))(t.fullName)),1))]),_:2},1024),o("div",Ae,[o("h6",Be,[e(Y,{to:{name:"apps-user-view-id",params:{id:t.id}},class:"font-weight-medium text-link"},{default:l(()=>[p(r(t.fullName),1)]),_:2},1032,["to"])]),o("span",Le,r(t.email),1)])])]),"item.role":l(({item:t})=>[o("div",Re,[e(S,{color:i.resolveUserRoleVariant(t.role).color,size:30,variant:"tonal"},{default:l(()=>[e(d,{icon:i.resolveUserRoleVariant(t.role).icon,size:20},null,8,["icon"])]),_:2},1032,["color"]),o("span",Ie,r(t.role)+" rolessss",1)])]),"item.plan":l(({item:t})=>[o("span",Te,r(t.currentPlan),1)]),"item.status":l(({item:t})=>[e(ve,{color:H(t.status),class:"text-capitalize",label:"",size:"small"},{default:l(()=>[p(r(t.status),1)]),_:2},1032,["color"])]),"item.actions":l(({item:t})=>[e($,{onClick:U=>T(t.id)},{default:l(()=>[e(d,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e($,null,{default:l(()=>[e(d,{icon:"tabler-edit"})]),_:1}),e(_,{color:"medium-emphasis",icon:"",size:"small",variant:"text"},{default:l(()=>[e(d,{icon:"tabler-dots-vertical",size:"24"}),e(_e,{activator:"parent"},{default:l(()=>[e(Ve,null,{default:l(()=>[e(z,{to:{name:"apps-user-view-id",params:{id:t.id}}},{prepend:l(()=>[e(d,{icon:"tabler-eye"})]),default:l(()=>[e(A,null,{default:l(()=>[p("View")]),_:1})]),_:2},1032,["to"]),e(z,{link:""},{prepend:l(()=>[e(d,{icon:"tabler-pencil"})]),default:l(()=>[e(A,null,{default:l(()=>[p("Edit")]),_:1})]),_:1}),e(z,{onClick:U=>T(t.id)},{prepend:l(()=>[e(d,{icon:"tabler-trash"})]),default:l(()=>[e(A,null,{default:l(()=>[p("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:l(()=>[e(F),o("div",$e,[o("p",De,r(s(ae)({page:s(u),itemsPerPage:s(c)},s(y))),1),e(ge,{modelValue:s(u),"onUpdate:modelValue":a[6]||(a[6]=t=>f(u)?u.value=t:null),length:Math.ceil(s(y)/s(c)),"total-visible":i.$vuetify.display.xs?1:Math.ceil(s(y)/s(c))},{prev:l(t=>[e(_,W({color:"default"},t,{variant:"tonal"}),null,16)]),next:l(t=>[e(_,W({color:"default"},t,{variant:"tonal"}),null,16)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}});export{Bt as default};
