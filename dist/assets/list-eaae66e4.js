import{_ as ye}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{_ as _e}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as he}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{p as Ce}from"./paginationMeta-4ad053a4.js";import"./FileSaver.min-4f66c306.js";import{i as n}from"./index-4532b75c.js";import{u as K}from"./useApi-776c55ea.js";import{c as ke}from"./createUrl-149317bf.js";import{$ as A}from"./api-0c1dfdf3.js";import{V as we}from"./VRow-d6f20668.js";import{V as C}from"./VCardText-76f31582.js";import{d as Ve,r as c,b6 as xe,R as W,w as be,o as m,c as J,e as i,b as s,f as o,F as Y,j as X,p as l,aI as g,a4 as u,x as p,y as k,h as w,a9 as x,t as Ue,A as S,a as je}from"./index-75b434bc.js";import{V as Z}from"./VDivider-fc890531.js";import{V as $e}from"./VDataTableServer-e9f6b4ac.js";import{V as Se}from"./VTooltip-c5403118.js";import{V as ee}from"./VChip-e2ddd660.js";import{V as Ae}from"./VPagination-2b54b87a.js";import{V as z}from"./VCard-95c0d706.js";import{V as F}from"./VDialog-bc06d443.js";import{V as ze}from"./VCol-35b3d337.js";import{V as Ne}from"./VAvatar-071125b9.js";import"./form-2b416184.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./index-2898f57d.js";/* empty css              */import"./VDataTable-c3cccdda.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";import"./VImg-ba4b392a.js";const Pe={class:"d-flex mb-6"},Te={class:"d-flex justify-space-between"},De={class:"d-flex flex-column gap-y-1"},Re={class:"text-body-1 text-medium-emphasis"},Be={class:"text-h4"},Oe={class:"d-flex align-center gap-4 flex-wrap"},Ie={cols:"12",md:"3"},Fe={cols:"12",md:"3"},qe={class:"d-flex align-center gap-4 flex-wrap"},Ee={class:"d-flex align-center"},Me={class:"text-h8 mb-0 mr-2"},Je={href:"javascript:void(0)"},Ye=i("span",null," User pending changes awaiting approval",-1),Qe={class:"d-flex align-center gap-4"},Le={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Ge={class:"text-sm text-disabled mb-0"},He=i("br",null,null,-1),Ke=i("br",null,null,-1),Lt=Ve({__name:"list",async setup(We){let D,Q;const q=c(""),R=c(null),v=c(null),B=c(null),y=c(50),f=c(1),E=c(""),M=c(""),b=c(!1),U=c(!1),j=c(!1),$=c(!1),N=c(""),P=c(null),T=c(null),te=r=>{var t,d;f.value=r.page,E.value=((t=r.sortBy[0])==null?void 0:t.key)??"",M.value=((d=r.sortBy[0])==null?void 0:d.order)??""},se=[{title:"Full Name",key:"fullName"},{title:"Role",key:"roles"},{title:"Email",key:"email"},{title:"Contact",key:"contact"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:oe}=([D,Q]=xe(()=>K("/users/UI/roles")),D=await D,Q(),D),L=W(()=>oe.value.roles.map(r=>({title:r.name,value:r.id,userCount:r.user_count||0}))),_=async()=>{const r={q:q.value||"",status:B.value!==null?B.value:void 0,role:R.value!==null?R.value:void 0,itemsPerPage:y.value,page:f.value,sortBy:E.value||"",orderBy:M.value||""},{data:t}=await K(ke("/users/UI/list",{query:r}));G.value=t.value.users,O.value=t.value.total};_(),be([q,R,B,y,f,E,M],_);const G=c([]),O=c(0),ae=r=>{v.value=r,b.value=!0},le=r=>{v.value=r,U.value=!0},re=r=>{v.value=r,j.value=!0},ne=r=>{v.value=r,$.value=!0},ie=[{title:"Active",value:1},{title:"Pending Checker",value:"waiting_checker_approval"},{title:"Inactive",value:0}],ue=async r=>{try{await A(`/user/deactivate/${r}`,{method:"POST"}),await _(),n.success("User Updated saved successfully")}catch{n.error("Failed to deactivate the user")}},ce=async r=>{try{await A(`/user/activate/${r}`,{method:"POST"}),await _(),n.success("User changes saved successfully")}catch{n.error("Failed to activate the user")}},pe=W(()=>L.value.slice(0,4)),de=async r=>{var t,d;try{const a=await A("/post/user/approve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:r})});a.message==="User approved successfully"?(n.success(a.message,{position:"top-right",autoClose:3e3}),await _(),b.value=!1):a.status===403?n.warn(a.message||"You cannot approve this user",{position:"top-right",autoClose:3e3}):n.error(a.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(a){const V=((d=(t=a.response)==null?void 0:t.data)==null?void 0:d.message)||"Error approving the user";n.error(V,{position:"top-right",autoClose:3e3})}},me=async r=>{var t,d;try{const a=await A("/post/user/reject",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:r})});a.message==="User rejected successfully"?(n.success(a.message,{position:"top-right",autoClose:3e3}),await _(),U.value=!1):a.status===403?n.warn(a.message||"You cannot reject this user",{position:"top-right",autoClose:3e3}):n.error(a.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(a){const V=((d=(t=a.response)==null?void 0:t.data)==null?void 0:d.message)||"Error rejecting the user";n.error(V,{position:"top-right",autoClose:3e3})}},ve=async r=>{var t,d;try{const a=await A("/approve/user/changes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:r})});a.message==="User changes approved successfully"?(n.success(a.message,{position:"top-right",autoClose:3e3}),await _(),j.value=!1):a.status===403?n.warn(a.message||"You cannot approve this user",{position:"top-right",autoClose:3e3}):n.error(a.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(a){const V=((d=(t=a.response)==null?void 0:t.data)==null?void 0:d.message)||"Error approving the user";n.error(V,{position:"top-right",autoClose:3e3})}},fe=async r=>{var t,d;try{const a=await A("/reject/user/changes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:r})});a.message==="User changes rejected successfully"?(n.success(a.message,{position:"top-right",autoClose:3e3}),await _(),$.value=!1):a.status===403?n.warn(a.message||"You cannot reject this user",{position:"top-right",autoClose:3e3}):n.error(a.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(a){const V=((d=(t=a.response)==null?void 0:t.data)==null?void 0:d.message)||"Error rejecting the user";n.error(V,{position:"top-right",autoClose:3e3})}},H=async()=>{q.value=N.value,R.value=P.value,B.value=T.value,await _()},ge=()=>{N.value="",P.value="",T.value="",f.value=1,H()};return _(),(r,t)=>{const d=he,a=_e,V=je("IconBtn"),I=ye;return m(),J(Y,null,[i("section",null,[i("div",Pe,[s(we,null,{default:o(()=>[(m(!0),J(Y,null,X(l(pe),e=>(m(),w(ze,{key:e.title,cols:"12",md:"3",sm:"6"},{default:o(()=>[s(z,null,{default:o(()=>[s(C,null,{default:o(()=>[i("div",Te,[i("div",De,[i("span",Re,k(e.title),1),i("h4",Be,k(e.userCount),1)]),s(Ne,{color:e.iconColor,rounded:"",size:"38",variant:"tonal"},{default:o(()=>[s(x,{icon:e.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),s(z,null,{default:o(()=>[s(C,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:o(()=>[i("div",Oe,[i("div",null,[s(d,{modelValue:l(N),"onUpdate:modelValue":t[0]||(t[0]=e=>g(N)?N.value=e:null),density:"compact",placeholder:"Search","clear-icon":"tabler-circle-x",clearable:"",style:{"inline-size":"12.5rem"}},null,8,["modelValue"])]),i("div",Ie,[s(a,{modelValue:l(P),"onUpdate:modelValue":t[1]||(t[1]=e=>g(P)?P.value=e:null),items:l(L),"clear-icon":"tabler-circle-x",clearable:"",placeholder:"Select Role Type",style:{"inline-size":"12.5rem"}},null,8,["modelValue","items"])]),i("div",Fe,[s(a,{modelValue:l(T),"onUpdate:modelValue":t[2]||(t[2]=e=>g(T)?T.value=e:null),items:ie,"clear-icon":"tabler-circle-x",clearable:"",placeholder:"Select Status",style:{"inline-size":"12.5rem"}},null,8,["modelValue"])]),s(u,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:H}),s(u,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:ge})]),i("div",qe,[s(a,{modelValue:l(y),"onUpdate:modelValue":t[3]||(t[3]=e=>g(y)?y.value=e:null),items:[5,10,20,25,50,100]},null,8,["modelValue"]),s(u,{density:"default",onClick:t[4]||(t[4]=e=>r.$router.push("/users/AddNewUser"))},{default:o(()=>[p(" Add New User ")]),_:1})])]),_:1}),s(Z),s(l($e),{"items-per-page":l(y),"onUpdate:itemsPerPage":t[6]||(t[6]=e=>g(y)?y.value=e:null),page:l(f),"onUpdate:page":t[7]||(t[7]=e=>g(f)?f.value=e:null),headers:se,items:l(G),"items-length":l(O),class:"text-no-wrap","onUpdate:options":te},{"item.fullName":o(({item:e})=>[i("div",Ee,[i("h6",Me,[i("a",Je,k(e.fullName),1)]),e.user_changes!==null?(m(),w(V,{key:0,class:"mx-1",small:"",color:"error"},{default:o(()=>[s(Se,{bottom:""},{activator:o(({props:h})=>[s(x,Ue(h,{icon:"tabler-info-circle",size:"20","aria-label":"User changes awaiting approval",onClick:Xe=>r.openaInfoDialog(e)}),null,16,["onClick"])]),default:o(()=>[Ye]),_:2},1024)]),_:2},1024)):S("",!0)])]),"item.status":o(({item:e})=>[s(ee,{color:e.status==="active"?"success":e.status==="waiting_checker_approval"?"info":"error",label:"",size:"small"},{default:o(()=>[p(k(e.status==="active"?"Active":e.status==="waiting_checker_approval"?"Pending Checker":"Inactive"),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[e.status==="active"||e.status==="inactive"?(m(),w(u,{key:0,to:{name:"users-view-id",params:{id:e.id}},icon:"",size:"small",variant:"text",color:"primary"},{default:o(()=>[s(x,{icon:"tabler-eye",size:"20"})]),_:2},1032,["to"])):S("",!0),e.status==="waiting_checker_approval"&&e.checker_status?(m(),w(u,{key:1,icon:"",size:"small",variant:"text",color:"success",onClick:h=>ae(e)},{default:o(()=>[s(x,{icon:"tabler-square-check",size:"20"})]),_:2},1032,["onClick"])):S("",!0),e.status==="waiting_checker_approval"&&e.checker_status?(m(),w(u,{key:2,icon:"",size:"small",variant:"text",color:"error",onClick:h=>le(e)},{default:o(()=>[s(x,{icon:"tabler-square-x",size:"20"})]),_:2},1032,["onClick"])):S("",!0),e.user_changes!==null&&e.user_checker_status?(m(),w(u,{key:3,icon:"",size:"small",variant:"text",color:"success",onClick:h=>re(e)},{default:o(()=>[s(x,{icon:"tabler-square-check",size:"20"})]),_:2},1032,["onClick"])):S("",!0),e.user_changes!==null&&e.user_checker_status?(m(),w(u,{key:4,icon:"",size:"small",variant:"text",color:"error",onClick:h=>ne(e)},{default:o(()=>[s(x,{icon:"tabler-square-x",size:"20"})]),_:2},1032,["onClick"])):S("",!0),e.user_changes===null&&e.status==="active"?(m(),w(u,{key:5,icon:"",size:"small",variant:"text",color:"success",onClick:h=>ue(e.id)},{default:o(()=>[s(x,{icon:"tabler-thumb-up",size:"20",title:"Click to Suspend user"})]),_:2},1032,["onClick"])):S("",!0),e.user_changes===null&&e.status==="inactive"?(m(),w(u,{key:6,icon:"",size:"small",variant:"text",color:"error",onClick:h=>ce(e.id)},{default:o(()=>[s(x,{icon:"tabler-thumb-down",size:"20",title:"Click to Activate user"})]),_:2},1032,["onClick"])):S("",!0)]),"item.roles":o(({item:e})=>[i("div",Qe,[(m(!0),J(Y,null,X(e.roles,h=>(m(),w(ee,{key:h.id,color:"primary"},{default:o(()=>[p(k(h.name),1)]),_:2},1024))),128))])]),bottom:o(()=>[s(Z),i("div",Le,[i("p",Ge,k(l(Ce)({page:l(f),itemsPerPage:l(y)},l(O))),1),s(Ae,{modelValue:l(f),"onUpdate:modelValue":t[5]||(t[5]=e=>g(f)?f.value=e:null),length:Math.ceil(l(O)/l(y)),"total-visible":r.$vuetify.display.xs?1:7},null,8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),s(F,{modelValue:l(b),"onUpdate:modelValue":t[11]||(t[11]=e=>g(b)?b.value=e:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[s(I,{onClick:t[8]||(t[8]=e=>b.value=!l(b))}),s(z,null,{default:o(()=>[s(C,null,{default:o(()=>[p(" Are you sure you want to Approve this User: "+k(l(v).fullName)+"? ",1),He,p(" This action cannot be undone. ")]),_:1}),s(C,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[s(u,{color:"secondary",variant:"tonal",onClick:t[9]||(t[9]=e=>b.value=!1)},{default:o(()=>[p(" Cancel ")]),_:1}),s(u,{color:"success",onClick:t[10]||(t[10]=e=>de(l(v).id))},{default:o(()=>[p(" Approve ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(F,{modelValue:l(U),"onUpdate:modelValue":t[15]||(t[15]=e=>g(U)?U.value=e:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[s(I,{onClick:t[12]||(t[12]=e=>U.value=!l(U))}),s(z,null,{default:o(()=>[s(C,null,{default:o(()=>[p(" Are you sure you want to Reject this User: "+k(l(v).fullName)+"? ",1),Ke,p(" This action cannot be undone. ")]),_:1}),s(C,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[s(u,{color:"secondary",variant:"tonal",onClick:t[13]||(t[13]=e=>U.value=!1)},{default:o(()=>[p(" Cancel ")]),_:1}),s(u,{color:"error",onClick:t[14]||(t[14]=e=>me(l(v).id))},{default:o(()=>[p(" Reject ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(F,{modelValue:l(j),"onUpdate:modelValue":t[19]||(t[19]=e=>g(j)?j.value=e:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[s(I,{onClick:t[16]||(t[16]=e=>j.value=!l(j))}),s(z,null,{default:o(()=>[s(C,null,{default:o(()=>[p(" Are you sure you want to Approve this User Chnages: "+k(l(v).fullName)+"? ",1)]),_:1}),s(C,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[s(u,{color:"secondary",variant:"tonal",onClick:t[17]||(t[17]=e=>j.value=!1)},{default:o(()=>[p(" Cancel ")]),_:1}),s(u,{color:"success",onClick:t[18]||(t[18]=e=>ve(l(v).id))},{default:o(()=>[p(" Approve ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(F,{modelValue:l($),"onUpdate:modelValue":t[23]||(t[23]=e=>g($)?$.value=e:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[s(I,{onClick:t[20]||(t[20]=e=>$.value=!l($))}),s(z,null,{default:o(()=>[s(C,null,{default:o(()=>[p(" Are you sure you want to Reject this User Changes: "+k(l(v).fullName)+"? ",1)]),_:1}),s(C,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[s(u,{color:"secondary",variant:"tonal",onClick:t[21]||(t[21]=e=>$.value=!1)},{default:o(()=>[p(" Cancel ")]),_:1}),s(u,{color:"error",onClick:t[22]||(t[22]=e=>fe(l(v).id))},{default:o(()=>[p(" Reject ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Lt as default};
