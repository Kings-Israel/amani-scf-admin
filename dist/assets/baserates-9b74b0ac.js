import{_ as Re}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-035125fd.js";import{_ as De}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-544577ba.js";import{_ as $e}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{_ as Ue}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{d as Ae,r as i,R as M,b6 as Se,o as v,c as Z,b as a,f as o,e as h,p as r,aI as y,a4 as m,t as Te,h as b,a9 as x,A as V,a$ as Pe,F as ee,j as Be,x as n,y as F,aM as Ie,a as je}from"./index-75b434bc.js";import{_ as Ee}from"./EditRatesDialog.vue_vue_type_style_index_0_lang-52752f92.js";import{i as p}from"./index-4532b75c.js";import{u as Fe}from"./useApi-776c55ea.js";import{c as Oe}from"./createUrl-149317bf.js";import{$ as A}from"./api-0c1dfdf3.js";import{V as k}from"./VCol-35b3d337.js";import{V as S,a as qe}from"./VCard-95c0d706.js";import{V as _}from"./VCardText-76f31582.js";import{V as ze}from"./VDataTableServer-e9f6b4ac.js";import{V as Me}from"./VChip-e2ddd660.js";import{V as Ne}from"./VForm-e46f5921.js";import{V as N}from"./VRow-d6f20668.js";import{V as O}from"./VDialog-bc06d443.js";import"./VField-82993695.js";import"./form-2b416184.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./transition-6afda34e.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./validators-db74a876.js";import"./helpers-681711bc.js";import"./VSnackbar-f21966b4.js";import"./index-2898f57d.js";/* empty css              */import"./VDataTable-c3cccdda.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";const Ye={class:"d-flex flex-wrap gap-4 mx-5 my-5"},Qe={class:"d-flex align-center flex-wrap gap-4"},We={class:"config-d-flex flex-wrap mx-5"},He=h("br",null,null,-1),Le=h("br",null,null,-1),Ge=h("br",null,null,-1),Je=h("br",null,null,-1),Ke=h("br",null,null,-1),Jt=Ae({__name:"baserates",async setup(Xe){let q,Y;i(!0),i(0);const Q=i(""),W=i(),B=i(null),I=i(""),z=i(50),T=i(1),te=i(),H=i(),ae=i(),c=i(null),j=i(!1),w=i(!1),R=i(!1),D=i(!1),$=i(!1),U=i(!1),oe=[{title:"Rate Code",key:"rate_code"},{title:"Rate",key:"rate"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],le=l=>{var e,u;T.value=l.page,te.value=(e=l.sortBy[0])==null?void 0:e.key,H.value=(u=l.sortBy[0])==null?void 0:u.order},L=i([{title:"Active",value:"active"},{title:"In active",value:"inactive"}]),se=M(()=>({q:Q.value,status:W.value,page:T.value,itemsPerPage:z.value,orderBy:H.value})),{data:G,execute:C}=([q,Y]=Se(()=>Fe(Oe("/UI/configurations/base-rates",{query:se}))),q=await q,Y(),q),re=M(()=>G.value.data),ne=M(()=>G.value.total),J=i({message:void 0,statusCode:void 0}),ie=l=>{c.value=l,w.value=!0},ue=l=>{c.value=l,R.value=!0},ce=l=>{c.value=l,D.value=!0},de=l=>{c.value=l,$.value=!0},pe=l=>{c.value=l,U.value=!0},me=l=>{c.value=l,j.value=!0},P=i([]),fe=()=>{P.value.push({rate_code:"",rate:"",future_rate:"",effective_date:"Active"})},ve=l=>{P.value.splice(l,1)},K=l=>l&&l==="active"?{color:"error",icon:"tabler-circle-dot",title:"Deactivate"}:{color:"primary",icon:"tabler-circle-check",title:"Activate"},ge=l=>l==="active"?{text:"Active",color:"success"}:l==="waiting_checker_approval"?{text:"Pending Checker",color:"info"}:{text:"Inactive",color:"error"},_e=async()=>{try{for(const e of P.value){const u=await A("/UI/configurations/base-rate",{method:"POST",body:{rate_code:e.rate_code,rate:e.rate,future_rate:e.future_rate,effective_date:e.effective_date},onResponseError({response:s}){J.value=s._data.errors}})}P.value=[{rate_code:"",rate:"",future_rate:"",effective_date:""}],await Ie(()=>{C()});const{message:l}=res}catch(l){console.error(l)}},ye=async l=>{try{await A(`UI/configurations/delete/base-rates-configurations/${l}`,{method:"POST",onResponseError({response:e}){J.value=e._data.errors}}),await C(),w.value=!1}catch(e){console.error(e)}},be=async l=>{var e,u;try{const s=await A("/UI/configurations/base-rate/approve",{method:"POST",body:{rate_id:l}});s.message==="Rate approved successfully"?(p.success(s.message||"Rate approved successfully",{position:"top-right",autoClose:3e3}),await C(),R.value=!1):s.status===403?p.warn(s.message||"You cannot approve this Rate",{position:"top-right",autoClose:3e3}):p.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const d=((u=(e=s.response)==null?void 0:e.data)==null?void 0:u.message)||"Error activating the tax";p.error(d,{position:"top-right",autoClose:3e3})}},Ce=async l=>{var e,u;try{const s=await A("/UI/configurations/base-rate/disable",{method:"POST",body:{rate_id:l}});s.message==="Rate deactivated successfully"?(p.success(s.message||"Rate deactivated successfully",{position:"top-right",autoClose:3e3}),await C(),D.value=!1):s.status===403?p.warn(s.message||"You cannot deactivate this rate",{position:"top-right",autoClose:3e3}):p.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const d=((u=(e=s.response)==null?void 0:e.data)==null?void 0:u.message)||"Error deactivating the tax";p.error(d,{position:"top-right",autoClose:3e3})}},Ve=async l=>{var e,u;try{const s=await A("/UI/configurations/base-rate/initiate-activate",{method:"POST",body:{rate_id:l}});s.message==="Activation initiated successfully"?(p.success(s.message||"Activation initiated successfully",{position:"top-right",autoClose:3e3}),await C(),$.value=!1):s.status===403?p.warn(s.message||"You cannot deactivate this tax",{position:"top-right",autoClose:3e3}):p.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const d=((u=(e=s.response)==null?void 0:e.data)==null?void 0:u.message)||"Error deactivating the tax";p.error(d,{position:"top-right",autoClose:3e3})}},ke=async l=>{var e,u;try{const s=await A("/UI/configurations/base-rate/initiate-deactivate",{method:"POST",body:{rate_id:l}});s.message==="Deactivation initiated successfully"?(p.success(s.message||"Deactivation initiated successfully",{position:"top-right",autoClose:3e3}),await C(),U.value=!1):s.status===403?(p.warn(s.message||"You cannot deactivate this tax",{position:"top-right",autoClose:3e3}),qew):p.error(s.message||"Something went wrong",{position:"top-right",autoClose:3e3})}catch(s){const d=((u=(e=s.response)==null?void 0:e.data)==null?void 0:u.message)||"Error deactivating the tax";p.error(d,{position:"top-right",autoClose:3e3})}},we=async l=>{await A("UI/configurations/activate/base-rates-configurations",{method:"POST",body:{ids:l,status:ae.value}}),await C()},X=async()=>{Q.value=I.value,W.value=B.value,await C()},xe=()=>{I.value="",B.value="",T.value=1,X()};return C(),(l,e)=>{const u=Ue,s=$e,d=je("IconBtn"),he=De,E=Re;return v(),Z(ee,null,[a(N,null,{default:o(()=>[a(k,{cols:"12",md:"12"},{default:o(()=>[a(S,{class:"mt-5"},{default:o(()=>[a(_,null,{default:o(()=>[h("div",Ye,[h("div",Qe,[a(u,{modelValue:r(I),"onUpdate:modelValue":e[0]||(e[0]=t=>y(I)?I.value=t:null),class:"me-3","clear-icon":"tabler-circle-x",clearable:"",color:"primary",placeholder:"Rate Code",style:{"inline-size":"200px"},type:"text"},null,8,["modelValue"]),a(s,{modelValue:r(B),"onUpdate:modelValue":e[1]||(e[1]=t=>y(B)?B.value=t:null),items:r(L),class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","items"]),a(m,{color:"primary","prepend-icon":"tabler-search",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:X}),a(m,{color:"primary","prepend-icon":"tabler-refresh",style:{"text-size-adjust":"auto","text-transform":"none"},onClick:xe})])]),a(r(ze),{"items-per-page":r(z),"onUpdate:itemsPerPage":e[2]||(e[2]=t=>y(z)?z.value=t:null),page:r(T),"onUpdate:page":e[3]||(e[3]=t=>y(T)?T.value=t:null),headers:oe,items:r(re),"items-length":r(ne),class:"text-no-wrap","show-select":"","onUpdate:options":le},{"item.status":o(({item:t})=>[a(Me,Te({density:"default",label:""},ge(t.status)),null,16)]),"item.actions":o(({item:t})=>[t.status==="active"||t.status==="inactive"?(v(),b(d,{key:0,onClick:g=>me(t)},{default:o(()=>[a(x,{icon:"tabler-pencil",color:"warning"})]),_:2},1032,["onClick"])):V("",!0),t.status==="waiting_checker_approval"&&t.pending_action==="activate"||t.pending_action==="deactivate"&&t.checker_status===!0?(v(),b(d,{key:1},{default:o(()=>{var g,f;return[a(x,{icon:(g=K(t.status))==null?void 0:g.icon,color:(f=K(t.status))==null?void 0:f.color,title:t.status,onClick:Ze=>we([t.id])},null,8,["icon","color","title","onClick"])]}),_:2},1024)):V("",!0),t.status==="active"||t.status==="inactive"?(v(),b(d,{key:2},{default:o(()=>[a(x,{icon:"tabler-trash",color:"danger",onClick:g=>ie(t)},null,8,["onClick"])]),_:2},1024)):V("",!0),t.checker_status===!0&&t.pending_action==="Base Rate Created - Waiting Checker Approval"?(v(),b(d,{key:3},{default:o(()=>[a(x,{icon:"tabler-square-check",color:"success",onClick:g=>ue(t)},null,8,["onClick"])]),_:2},1024)):V("",!0),t.checker_status===!0&&t.pending_action==="Base Rate Created - Waiting Checker Approval"?(v(),b(d,{key:4},{default:o(()=>[a(x,{icon:"tabler-square-x",color:"error",onClick:g=>ce(t)},null,8,["onClick"])]),_:2},1024)):V("",!0),t.status==="inactive"&&t.pending_action===null?(v(),b(d,{key:5},{default:o(()=>[a(x,{icon:"tabler-thumb-down",color:"error",onClick:g=>de(t)},null,8,["onClick"])]),_:2},1024)):V("",!0),t.status==="active"&&t.pending_action===null?(v(),b(d,{key:6},{default:o(()=>[a(x,{icon:"tabler-thumb-up",color:"success",onClick:g=>pe(t)},null,8,["onClick"])]),_:2},1024)):V("",!0)]),_:1},8,["items-per-page","page","items","items-length"]),a(S,null,{default:o(()=>[a(qe,null,{default:o(()=>[a(Ne,{onSubmit:Pe(()=>{},["prevent"])},{default:o(()=>[(v(!0),Z(ee,null,Be(r(P),(t,g)=>(v(),b(N,{key:g},{default:o(()=>[h("div",We,[a(k,{cols:"12",md:"2"},{default:o(()=>[a(u,{modelValue:t.rate_code,"onUpdate:modelValue":f=>t.rate_code=f,label:"Rate Code",placeholder:"Rate Code"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(k,{cols:"12",md:"2"},{default:o(()=>[a(u,{modelValue:t.rate,"onUpdate:modelValue":f=>t.rate=f,type:"number",label:"Rate (%)",placeholder:"%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(k,{cols:"12",md:"2"},{default:o(()=>[a(u,{modelValue:t.future_rate,"onUpdate:modelValue":f=>t.future_rate=f,label:"Future Rate",placeholder:"Future Rate"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(k,{cols:"12",md:"3"},{default:o(()=>[a(he,{modelValue:t.effective_date,"onUpdate:modelValue":f=>t.effective_date=f,"append-inner-icon":"tabler-calendar-due",label:"Date",placeholder:"Select Date"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(k,{cols:"12",md:"2"},{default:o(()=>[a(s,{modelValue:t.status,"onUpdate:modelValue":f=>t.status=f,items:r(L),class:"me-1","clear-icon":"tabler-x",clearable:"",placeholder:"Status",style:{"inline-size":"200px"}},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024),a(k,{cols:"12",md:"1"},{default:o(()=>[a(d,{onClick:f=>ve(g)},{default:o(()=>[a(x,{icon:"tabler-trash",color:"error"})]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1024))),128)),a(N,null,{default:o(()=>[a(k,{cols:"12",md:"2",class:"text-left"},{default:o(()=>[a(m,{color:"primary",onClick:fe},{default:o(()=>[n(" Add New Rate ")]),_:1})]),_:1}),r(P).length>0?(v(),b(k,{key:0,class:"d-flex gap-4",cols:"12",md:"4"},{default:o(()=>[a(m,{type:"submit",onClick:_e},{default:o(()=>[n(" Submit ")]),_:1}),a(m,{color:"secondary",type:"reset",variant:"tonal"},{default:o(()=>[n(" Reset ")]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),r(j)?(v(),b(Ee,{key:0,isDialogVisible:r(j),"onUpdate:isDialogVisible":e[4]||(e[4]=t=>y(j)?j.value=t:null),rate:r(c)},null,8,["isDialogVisible","rate"])):V("",!0),a(O,{modelValue:r(w),"onUpdate:modelValue":e[8]||(e[8]=t=>y(w)?w.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[a(E,{onClick:e[5]||(e[5]=t=>w.value=!r(w))}),a(S,null,{default:o(()=>[a(_,null,{default:o(()=>[n(" Are you sure you want to delete rate: "+F(r(c).rate_code)+"? ",1),He,n(" This action can not be undone. ")]),_:1}),a(_,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[a(m,{color:"secondary",variant:"tonal",onClick:e[6]||(e[6]=t=>w.value=!1)},{default:o(()=>[n(" Cancel ")]),_:1}),a(m,{color:"error",onClick:e[7]||(e[7]=t=>ye(r(c).id))},{default:o(()=>[n(" Delete ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(O,{modelValue:r(R),"onUpdate:modelValue":e[12]||(e[12]=t=>y(R)?R.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[a(E,{onClick:e[9]||(e[9]=t=>R.value=!1)}),a(S,null,{default:o(()=>[a(_,null,{default:o(()=>[n(" Are you sure you want to Approve this Rate: "+F(r(c).rate_code)+"? ",1),Le,n(" This action cannot be undone. ")]),_:1}),a(_,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[a(m,{color:"secondary",variant:"tonal",onClick:e[10]||(e[10]=t=>R.value=!1)},{default:o(()=>[n(" Cancel ")]),_:1}),a(m,{color:"success",onClick:e[11]||(e[11]=t=>be(r(c).id))},{default:o(()=>[n(" Approve ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(O,{modelValue:r(D),"onUpdate:modelValue":e[16]||(e[16]=t=>y(D)?D.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[a(E,{onClick:e[13]||(e[13]=t=>D.value=!1)}),a(S,null,{default:o(()=>[a(_,null,{default:o(()=>[n(" Are you sure you want to Reject this Rate: "+F(r(c).rate_code)+"? ",1),Ge,n(" This action cannot be undone. ")]),_:1}),a(_,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[a(m,{color:"secondary",variant:"tonal",onClick:e[14]||(e[14]=t=>D.value=!1)},{default:o(()=>[n(" Cancel ")]),_:1}),a(m,{color:"error",onClick:e[15]||(e[15]=t=>Ce(r(c).id))},{default:o(()=>[n(" Reject ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(O,{modelValue:r($),"onUpdate:modelValue":e[20]||(e[20]=t=>y($)?$.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[a(E,{onClick:e[17]||(e[17]=t=>$.value=!1)}),a(S,null,{default:o(()=>[a(_,null,{default:o(()=>[n(" Are you sure you want to Enable this Rate: "+F(r(c).rate_code)+"? ",1),Je,n(" This action cannot be undone. ")]),_:1}),a(_,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[a(m,{color:"secondary",variant:"tonal",onClick:e[18]||(e[18]=t=>$.value=!1)},{default:o(()=>[n(" Cancel ")]),_:1}),a(m,{color:"success",onClick:e[19]||(e[19]=t=>Ve(r(c).id))},{default:o(()=>[n(" Enable ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(O,{modelValue:r(U),"onUpdate:modelValue":e[24]||(e[24]=t=>y(U)?U.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[a(E,{onClick:e[21]||(e[21]=t=>U.value=!1)}),a(S,null,{default:o(()=>[a(_,null,{default:o(()=>[n(" Are you sure you want to Disable this Rate: "+F(r(c).rate_code)+"? ",1),Ke,n(" This action cannot be undone. ")]),_:1}),a(_,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[a(m,{color:"secondary",variant:"tonal",onClick:e[22]||(e[22]=t=>U.value=!1)},{default:o(()=>[n(" Cancel ")]),_:1}),a(m,{color:"error",onClick:e[23]||(e[23]=t=>ke(r(c).id))},{default:o(()=>[n(" Disable ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Jt as default};