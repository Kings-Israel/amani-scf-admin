import{_ as E}from"./AddEditPermissionDialog.vue_vue_type_style_index_0_lang-8e135aae.js";import{_ as I}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as q}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{p as L}from"./paginationMeta-4ad053a4.js";import{u as O}from"./useApi-776c55ea.js";import{c as G}from"./createUrl-149317bf.js";import{V as B}from"./VCol-35b3d337.js";import{V as H}from"./VCard-95c0d706.js";import{V as J}from"./VCardText-76f31582.js";import{d as K,r,b6 as Q,R as C,o as P,h as T,f as o,b as i,e as p,y as b,p as s,aI as m,a4 as u,x as y,c as W,j as X,F as Y,t as N,a9 as $}from"./index-75b434bc.js";import{V as z}from"./VDivider-fc890531.js";import{V as Z}from"./VDataTableServer-e9f6b4ac.js";import{V as ee}from"./VPagination-2b54b87a.js";import{V as te}from"./VRow-d6f20668.js";import{V as se}from"./VChip-e2ddd660.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import"./api-0c1dfdf3.js";import"./index-2898f57d.js";import"./VForm-e46f5921.js";import"./form-2b416184.js";import"./forwardRefs-8348545e.js";import"./VAlert-1953529c.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VDialog-bc06d443.js";import"./VOverlay-0b79a00d.js";import"./easing-9f15041e.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./transition-6afda34e.js";import"./dialog-transition-14fdab67.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./VField-82993695.js";import"./VInput-b46333d7.js";import"./index-97808f23.js";import"./VSelect-54e8b29a.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VMenu-3f143933.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";/* empty css              */import"./VDataTable-c3cccdda.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";const ie=p("h5",{class:"text-h4 mb-6"}," Permissions List ",-1),oe={class:"mb-0"},ae={class:"d-flex align-center gap-4 flex-wrap"},le={class:"d-flex gap-2"},re={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},ne={class:"text-sm text-medium-emphasis mb-0"},ot=K({__name:"index",async setup(me){let c,D;const M=[{title:"Name",key:"name"},{title:"Assigned To",key:"assignedTo",sortable:!1},{title:"Created Date",key:"createdDate",sortable:!1},{title:"Actions",key:"actions",sortable:!1}],f=r(""),a=r(50),l=r(1),h=r(),w=r(),S=n=>{var t,_;l.value=n.page,h.value=(t=n.sortBy[0])==null?void 0:t.key,w.value=(_=n.sortBy[0])==null?void 0:_.order},g=r(!1),v=r(!1),V=r(""),k={support:{color:"info",text:"Support"},users:{color:"success",text:"Users"},manager:{color:"warning",text:"Manager"},administrator:{color:"primary",text:"Administrator"},"restricted-user":{color:"error",text:"Restricted User"}},{data:A}=([c,D]=Q(()=>O(G("/apps/permissions",{query:{q:f,itemsPerPage:a,page:l,sortBy:h,orderBy:w}}))),c=await c,D(),c),F=C(()=>A.value.permissions),d=C(()=>A.value.totalPermissions),R=n=>{g.value=!0,V.value=n};return(n,t)=>{const _=q,j=I,U=E;return P(),T(te,null,{default:o(()=>[i(B,{cols:"12"},{default:o(()=>[ie,p("p",oe," Each category (Basic, Professional, and Business) includes the four predefined roles shown below. "+b(s(d)),1)]),_:1}),i(B,{cols:"12"},{default:o(()=>[i(H,null,{default:o(()=>[i(J,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:o(()=>[i(_,{"model-value":s(a),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5rem"},"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=parseInt(e,10))},null,8,["model-value"]),p("div",ae,[i(j,{modelValue:s(f),"onUpdate:modelValue":t[1]||(t[1]=e=>m(f)?f.value=e:null),placeholder:"Search",density:"compact",style:{"inline-size":"12.5rem"}},null,8,["modelValue"]),i(u,{density:"default",onClick:t[2]||(t[2]=e=>v.value=!0)},{default:o(()=>[y(" Add Permission ")]),_:1})])]),_:1}),i(z),i(s(Z),{"items-per-page":s(a),"onUpdate:itemsPerPage":t[4]||(t[4]=e=>m(a)?a.value=e:null),page:s(l),"onUpdate:page":t[5]||(t[5]=e=>m(l)?l.value=e:null),"items-length":s(d),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:M,items:s(F),class:"text-no-wrap","onUpdate:options":S},{"item.assignedTo":o(({item:e})=>[p("div",le,[(P(!0),W(Y,null,X(e.assignedTo,x=>(P(),T(se,{key:x,label:"",color:k[x].color,class:"font-weight-medium"},{default:o(()=>[y(b(k[x].text),1)]),_:2},1032,["color"]))),128))])]),bottom:o(()=>[i(z),p("div",re,[p("p",ne,b(s(L)({page:s(l),itemsPerPage:s(a)},s(d))),1),i(ee,{modelValue:s(l),"onUpdate:modelValue":t[3]||(t[3]=e=>m(l)?l.value=e:null),length:Math.ceil(s(d)/s(a)),"total-visible":n.$vuetify.display.xs?1:Math.min(Math.ceil(s(d)/s(a)),5)},{prev:o(e=>[i(u,N({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[y(" Previous ")]),_:2},1040)]),next:o(e=>[i(u,N({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[y(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),"item.createdDate":o(({item:e})=>[p("span",null,b(e.createdDate),1)]),"item.actions":o(({item:e})=>[i(u,{icon:"",size:"small",color:"medium-emphasis",variant:"text",onClick:x=>R(e.name)},{default:o(()=>[i($,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),i(u,{icon:"",size:"small",variant:"text",color:"medium-emphasis"},{default:o(()=>[i($,{size:"22",icon:"tabler-trash"})]),_:1})]),_:1},8,["items-per-page","page","items-length","items"])]),_:1}),i(U,{isDialogVisible:s(g),"onUpdate:isDialogVisible":t[6]||(t[6]=e=>m(g)?g.value=e:null),"permission-name":s(V),"onUpdate:permissionName":t[7]||(t[7]=e=>m(V)?V.value=e:null)},null,8,["isDialogVisible","permission-name"]),i(U,{isDialogVisible:s(v),"onUpdate:isDialogVisible":t[8]||(t[8]=e=>m(v)?v.value=e:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}});export{ot as default};