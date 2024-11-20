import{_ as F}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{u as U}from"./useApi-c9327355.js";import{c as L}from"./createUrl-3e678c2b.js";import{V as R}from"./VCardText-3b4da816.js";import{V as z}from"./VDataTable-1493872b.js";import{V as y}from"./VChip-49676f7d.js";import{V as A}from"./VCard-1a5b2c5e.js";import{d as M,r as o,b6 as N,R as S,o as c,h as O,f as a,b as i,e,p as m,aI as j,c as h,F as q,j as I,x as g,y as s}from"./index-5caaa453.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./index-2898f57d.js";import"./createSimpleFunctional-9624028d.js";import"./VSelect-f0a443ce.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VDivider-d40713ce.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";const G={class:"d-flex flex-wrap justify-space-between align-center gap-4"},Q=e("h5",{class:"text-h5 font-weight-medium"}," Leads Reports ",-1),$={class:"v-data-table__tr"},H=["colspan"],J={class:"my-1"},K={class:"my-1"},W={class:"my-1"},X={class:"my-1"},Y={class:"my-1"},ze=M({__name:"LeadReport",async setup(Z){let l,d;const n=o(""),V=o(),w=o(),C=o(),k=o(10),v=o(1),P=o(),D=o(),_=[{title:"",key:"data-table-expand"},{title:"Name",key:"name"},{title:"Contact Person",key:"pointOfContact"},{title:"Lead Type",key:"leadType"},{title:"Email",key:"email"},{title:"Creation Date",key:"CreationDate"},{title:"tatDays",key:"tatDays"}],{data:T,execute:E}=([l,d]=N(()=>U(L("/get/UI/leads/reports",{query:{q:n,status:C,plan:w,role:V,itemsPerPage:k,page:v,sortBy:P,orderBy:D}}))),l=await l,d(),l),b=S(()=>T.value);E();const u=r=>r==="Physical Meetings"?{color:"primary",text:"Physical Meetings"}:r==="Online Meetings"?{color:"success",text:"Online Meetings"}:r==="Corporate Events"?{color:"error",text:"Corporate Events"}:r==="Follow ups"?{color:"warning",text:"Follow ups"}:{color:"info",text:"ETC"},f=r=>r==="active"?{color:"primary",text:"Active"}:{color:"error",text:"Expired"};return(r,x)=>{const B=F;return c(),O(A,null,{default:a(()=>[i(R,null,{default:a(()=>[e("div",G,[Q,e("div",null,[i(B,{modelValue:m(n),"onUpdate:modelValue":x[0]||(x[0]=p=>j(n)?n.value=p:null),placeholder:"Search",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"])])])]),_:1}),i(m(z),{headers:_,items:m(b),"items-per-page":5,"expand-on-click":""},{"expanded-row":a(p=>[(c(!0),h(q,null,I(p.item.schedules,t=>(c(),h("tr",$,[e("td",{colspan:_.length},[e("p",J,[i(y,{color:u(t.extendedProps.calendar).color,class:"font-weight-medium",size:"small"},{default:a(()=>[g(s(u(t.extendedProps.calendar).text),1)]),_:2},1032,["color"])]),e("p",K,[i(y,{color:f(t.expired).color,class:"font-weight-medium",size:"small"},{default:a(()=>[g(s(f(t.expired).text),1)]),_:2},1032,["color"])]),e("p",W," Title: "+s(t.title),1),e("p",X," Location: "+s(t.extendedProps.location),1),e("p",Y," Guests: "+s(t.extendedProps.guests),1),e("p",null,"Description: "+s(t.extendedProps.description),1)],8,H)]))),256))]),_:1},8,["items"])]),_:1})}}});export{ze as default};