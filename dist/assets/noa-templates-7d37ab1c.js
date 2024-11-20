import{_ as Ce}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{_ as _e}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as ke}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as Ve}from"./edit-noa-template.vue_vue_type_script_setup_true_lang-a1ddb066.js";import{i as c}from"./index-4532b75c.js";import{u as we}from"./useApi-776c55ea.js";import{c as xe}from"./createUrl-149317bf.js";import{$}from"./api-0c1dfdf3.js";import{d as Te,r,R as G,b6 as he,o as b,c as De,b as o,f as a,e as g,p as n,aI as f,a4 as d,x as i,y as A,t as H,h as _,A as k,a9 as h,F as $e,a as Ae}from"./index-75b434bc.js";import{V as je}from"./VDataTable-c3cccdda.js";import{V as J}from"./VChip-e2ddd660.js";import{V as j}from"./VCard-95c0d706.js";import{V as v}from"./VCardText-76f31582.js";import{V as E}from"./VDialog-bc06d443.js";import"./form-2b416184.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./TiptapEditor.vue_vue_type_style_index_0_lang-e76d5625.js";import"./index-78b172a6.js";import"./VRow-d6f20668.js";/* empty css              */import"./VCol-35b3d337.js";import"./VCheckbox-e2d8e1ba.js";import"./index-2898f57d.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";const Pe={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Ue={class:"d-flex align-center flex-wrap gap-4"},Se={class:"d-flex gap-4 flex-wrap align-center"},Ie={class:"text-h6"},Be={href:"javascript:void(0)"},Fe=g("br",null,null,-1),Ee=g("br",null,null,-1),Ne=g("br",null,null,-1),ze=g("br",null,null,-1),Re=g("br",null,null,-1),Ft=Te({__name:"noa-templates",async setup(Oe){let N,z;const R=r(""),O=r(),P=r(50),q=r(1);r();const K=r();r(),r();const u=r(null),Y=r(),L=r(),U=r(null),S=r(null),I=r(""),B=r(!1),D=r(!1),V=r(!1),w=r(!1),x=r(!1),T=r(!1),X=l=>{u.value=l,D.value=!0},Z=l=>{u.value=l,V.value=!0},ee=l=>{u.value=l,w.value=!0},te=l=>{u.value=l,x.value=!0},oe=l=>{u.value=l,T.value=!0},ae=l=>{u.value=l,B.value=!0},le=r([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),se=r([{title:"Dealer Financing",value:"dealer_financing"},{title:"Vendor Financing",value:"vendor_financing"},{title:"Factoring",value:"factoring"}]),M=l=>l&&l==="active"?{color:"error",icon:"tabler-circle-dot"}:{color:"primary",icon:"tabler-circle-check"},ne=l=>l==="active"?{text:"Active",color:"success"}:l==="waiting_checker_approval"?{text:"Pending Checker",color:"info"}:{text:"Inactive",color:"error"},re=l=>l==="vendor_financing"?{text:"Vendor Financing"}:l==="dealer_financing"?{text:"Dealer Financing"}:{text:"Factoring"},ie=[{title:"Template Name",key:"name"},{title:"Product Type",key:"product_type"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],ue=G(()=>({q:R.value,status:O.value,product:Y.value,page:q.value,itemsPerPage:P.value,orderBy:K.value})),{data:ce,execute:y}=([N,z]=he(()=>we(xe("get/UI/configurations/noa-templates",{query:ue}))),N=await N,z(),N),pe=G(()=>ce.value.data);y();const de=async l=>{var e,m;try{const s=await $("/UI/configurations/noa-template/approve",{method:"POST",body:{template_id:l}});s.message==="Template approved successfully"?(c.success(s.message||"Template approved successfully",{position:"top-right",autoClose:3e3}),await y(),V.value=!1):s.status===403?c.warn(s.message||"You cannot approve this template",{position:"top-right",autoClose:3e3}):c.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const p=((m=(e=s.response)==null?void 0:e.data)==null?void 0:m.message)||"Error approving the template";c.error(p,{position:"top-right",autoClose:3e3})}},me=async l=>{var e,m;try{const s=await $("/UI/configurations/noa-template/reject",{method:"POST",body:{template_id:l}});s.message==="Template rejected successfully"?(c.success(s.message||"Template rejected successfully",{position:"top-right",autoClose:3e3}),await y(),w.value=!1):s.status===403?c.warn(s.message||"You cannot reject this template",{position:"top-right",autoClose:3e3}):c.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const p=((m=(e=s.response)==null?void 0:e.data)==null?void 0:m.message)||"Error rejecting the template";c.error(p,{position:"top-right",autoClose:3e3})}},fe=async l=>{var e,m;try{const s=await $("/UI/configurations/noa-template/enable/initiate",{method:"POST",body:{template_id:l}});s.message==="Activation initiated successfully"?(c.success(s.message||"Activation initiated successfully",{position:"top-right",autoClose:3e3}),await y(),x.value=!1):s.status===403?c.warn(s.message||"You cannot enable this template",{position:"top-right",autoClose:3e3}):c.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const p=((m=(e=s.response)==null?void 0:e.data)==null?void 0:m.message)||"Error enabling the template";c.error(p,{position:"top-right",autoClose:3e3})}},ve=async l=>{var e,m;try{const s=await $("/UI/configurations/noa-template/disable/initiate",{method:"POST",body:{template_id:l}});s.message==="Deactivation initiated successfully"?(c.success(s.message||"Deactivation initiated successfully",{position:"top-right",autoClose:3e3}),await y(),T.value=!1):s.status===403?c.warn(s.message||"You cannot disable this template",{position:"top-right",autoClose:3e3}):c.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const p=((m=(e=s.response)==null?void 0:e.data)==null?void 0:m.message)||"Error disabling the template";c.error(p,{position:"top-right",autoClose:3e3})}},ge=async l=>{try{await $(`/UI/configurations/delete/noa-template/${l}`,{method:"POST",onResponseError({response:e}){errors.value=e._data.errors}}),await y(),D.value=!1}catch(e){console.error(e)}},ye=async l=>{await $("/UI/configurations/activate/noa-template",{method:"POST",body:{ids:l,status:L.value}}),await y()},Q=async()=>{R.value=I.value,O.value=U.value,Y.value=S.value,await y()},be=()=>{I.value="",U.value="",S.value="",q.value=1,Q()};return y(),(l,e)=>{const m=ke,s=_e,p=Ae("IconBtn"),F=Ce;return b(),De($e,null,[o(j,{class:"mb-6"},{default:a(()=>[g("div",Pe,[g("div",Ue,[o(m,{modelValue:n(I),"onUpdate:modelValue":e[0]||(e[0]=t=>f(I)?I.value=t:null),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Template Name",style:{"inline-size":"200px"},type:"text"},null,8,["modelValue"]),o(s,{modelValue:n(U),"onUpdate:modelValue":e[1]||(e[1]=t=>f(U)?U.value=t:null),items:n(le),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"100px"}},null,8,["modelValue","items"]),o(s,{modelValue:n(S),"onUpdate:modelValue":e[2]||(e[2]=t=>f(S)?S.value=t:null),items:n(se),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Product Type",style:{"inline-size":"200px"}},null,8,["modelValue","items"]),o(d,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:Q}),o(d,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:be})]),g("div",Se,[o(s,{modelValue:n(P),"onUpdate:modelValue":e[3]||(e[3]=t=>f(P)?P.value=t:null),items:[5,10,20,25,50]},null,8,["modelValue"]),o(d,{color:"primary","prepend-icon":"tabler-download",style:{"text-size-adjust":"auto","text-transform":"none"}}),o(d,{color:"primary","prepend-icon":"tabler-plus",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:e[4]||(e[4]=t=>l.$router.push("/configurations/view/add-noa-template"))},{default:a(()=>[i(" Add Template ")]),_:1})])]),o(n(je),{headers:ie,items:n(pe),"items-per-page":n(P),class:"text-no-wrap"},{"item.name":a(({item:t})=>[g("h6",Ie,[g("a",Be,A(t.name),1)])]),"item.status":a(({item:t})=>[o(J,H({density:"default",label:""},ne(t.status)),null,16)]),"item.product_type":a(({item:t})=>[o(J,H({density:"default",label:""},re(t.product_type)),null,16)]),"item.actions":a(({item:t})=>[o(p,{onClick:C=>ae(t)},{default:a(()=>[t.status==="active"||t.status==="inactive"?(b(),_(h,{key:0,icon:"tabler-pencil",color:"warning"})):k("",!0)]),_:2},1032,["onClick"]),t.status==="waiting_checker_approval"&&t.pending_action==="activate"||t.pending_action==="deactivate"&&t.checker_status===!0?(b(),_(p,{key:0},{default:a(()=>{var C,W;return[o(h,{icon:(C=M(t.status))==null?void 0:C.icon,color:(W=M(t.status))==null?void 0:W.color,title:t.status,onClick:qe=>ye([t.id])},null,8,["icon","color","title","onClick"])]}),_:2},1024)):k("",!0),t.status==="active"||t.status==="inactive"?(b(),_(p,{key:1},{default:a(()=>[o(h,{icon:"tabler-trash",color:"error",onClick:C=>X(t)},null,8,["onClick"])]),_:2},1024)):k("",!0),t.checker_status===!0&&t.pending_action==="NoaTemplates Created - Waiting Checker Approval"?(b(),_(p,{key:2},{default:a(()=>[o(h,{icon:"tabler-square-check",color:"success",onClick:C=>Z(t)},null,8,["onClick"])]),_:2},1024)):k("",!0),t.checker_status===!0&&t.pending_action==="NoaTemplates Created - Waiting Checker Approval"?(b(),_(p,{key:3},{default:a(()=>[o(h,{icon:"tabler-square-x",color:"error",onClick:C=>ee(t)},null,8,["onClick"])]),_:2},1024)):k("",!0),t.status==="inactive"&&t.pending_action===null?(b(),_(p,{key:4},{default:a(()=>[o(h,{icon:"tabler-thumb-down",color:"error",onClick:C=>te(t)},null,8,["onClick"])]),_:2},1024)):k("",!0),t.status==="active"&&t.pending_action===null?(b(),_(p,{key:5},{default:a(()=>[o(h,{icon:"tabler-thumb-up",color:"success",onClick:C=>oe(t)},null,8,["onClick"])]),_:2},1024)):k("",!0)]),_:1},8,["items","items-per-page"])]),_:1}),n(B)?(b(),_(Ve,{key:0,isDialogVisible:n(B),"onUpdate:isDialogVisible":e[5]||(e[5]=t=>f(B)?B.value=t:null),template:n(u)},null,8,["isDialogVisible","template"])):k("",!0),o(E,{modelValue:n(D),"onUpdate:modelValue":e[9]||(e[9]=t=>f(D)?D.value=t:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[o(F,{onClick:e[6]||(e[6]=t=>l.isDDialogVisible=!1)}),o(j,null,{default:a(()=>[o(v,null,{default:a(()=>[i(" Are you sure you want to delete template: "+A(n(u).name)+"? ",1),Fe,i(" This action can not be undone. ")]),_:1}),o(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[o(d,{color:"secondary",variant:"tonal",onClick:e[7]||(e[7]=t=>D.value=!1)},{default:a(()=>[i(" Cancel ")]),_:1}),o(d,{color:"error",onClick:e[8]||(e[8]=t=>ge(n(u).id))},{default:a(()=>[i(" Delete ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:n(V),"onUpdate:modelValue":e[13]||(e[13]=t=>f(V)?V.value=t:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[o(F,{onClick:e[10]||(e[10]=t=>V.value=!1)}),o(j,null,{default:a(()=>[o(v,null,{default:a(()=>[i(" Are you sure you want to Approve template: "+A(n(u).name)+"? ",1),Ee,i(" This action cannot be undone. ")]),_:1}),o(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[o(d,{color:"secondary",variant:"tonal",onClick:e[11]||(e[11]=t=>V.value=!1)},{default:a(()=>[i(" Cancel ")]),_:1}),o(d,{color:"success",onClick:e[12]||(e[12]=t=>de(n(u).id))},{default:a(()=>[i(" Approve ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:n(w),"onUpdate:modelValue":e[17]||(e[17]=t=>f(w)?w.value=t:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[o(F,{onClick:e[14]||(e[14]=t=>w.value=!1)}),o(j,null,{default:a(()=>[o(v,null,{default:a(()=>[i(" Are you sure you want to Reject template: "+A(n(u).name)+"? ",1),Ne,i(" This action cannot be undone. ")]),_:1}),o(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[o(d,{color:"secondary",variant:"tonal",onClick:e[15]||(e[15]=t=>w.value=!1)},{default:a(()=>[i(" Cancel ")]),_:1}),o(d,{color:"error",onClick:e[16]||(e[16]=t=>me(n(u).id))},{default:a(()=>[i(" Reject ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:n(x),"onUpdate:modelValue":e[21]||(e[21]=t=>f(x)?x.value=t:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[o(F,{onClick:e[18]||(e[18]=t=>x.value=!1)}),o(j,null,{default:a(()=>[o(v,null,{default:a(()=>[i(" Are you sure you want to Enable template: "+A(n(u).name)+"? ",1),ze,i(" This action cannot be undone. ")]),_:1}),o(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[o(d,{color:"secondary",variant:"tonal",onClick:e[19]||(e[19]=t=>x.value=!1)},{default:a(()=>[i(" Cancel ")]),_:1}),o(d,{color:"success",onClick:e[20]||(e[20]=t=>fe(n(u).id))},{default:a(()=>[i(" Enable ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:n(T),"onUpdate:modelValue":e[25]||(e[25]=t=>f(T)?T.value=t:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[o(F,{onClick:e[22]||(e[22]=t=>T.value=!1)}),o(j,null,{default:a(()=>[o(v,null,{default:a(()=>[i(" Are you sure you want to Disable template: "+A(n(u).name)+"? ",1),Re,i(" This action cannot be undone. ")]),_:1}),o(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[o(d,{color:"secondary",variant:"tonal",onClick:e[23]||(e[23]=t=>T.value=!1)},{default:a(()=>[i(" Cancel ")]),_:1}),o(d,{color:"error",onClick:e[24]||(e[24]=t=>ve(n(u).id))},{default:a(()=>[i(" Disable ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Ft as default};