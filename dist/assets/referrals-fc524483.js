import{_ as q}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{p as G}from"./paginationMeta-4ad053a4.js";import{u as H}from"./useApi-c9327355.js";import{c as O}from"./createUrl-3e678c2b.js";import{V as g}from"./VCol-bcc5388c.js";import{V as v,a as J,b as K,d as Q}from"./VCard-1a5b2c5e.js";import{V as x}from"./VCardText-3b4da816.js";import{d as W,r as h,b6 as X,R as B,o as k,c as C,b as e,f as t,F as E,j,x as c,e as s,a4 as p,a9 as y,p as o,aI as b,y as d,t as S,a as Y,aR as Z,aS as ee}from"./index-5caaa453.js";import{V as te}from"./VSelect-f0a443ce.js";import{V as z}from"./VDivider-d40713ce.js";import{V as ae}from"./VDataTableServer-64dc84b4.js";import{V as D}from"./VAvatar-3ee4c690.js";import{V as se}from"./VChip-49676f7d.js";import{V as oe}from"./VPagination-4169e3c5.js";import{V as le}from"./VRow-e44df108.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./index-2898f57d.js";/* empty css              */import"./createSimpleFunctional-9624028d.js";import"./VImg-6009f8f0.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";const V=u=>(Z("data-v-e742f2d9"),u=u(),ee(),u),ie={class:"d-flex justify-space-between align-center"},ne={class:"d-flex flex-column"},de={class:"text-h4"},ce={class:"text-sm"},pe=V(()=>s("span",{class:"text-body-1"},"Integrate your referral code in 3 easy steps.",-1)),me={class:"d-flex flex-column flex-sm-row gap-6 justify-sm-space-between align-center pt-2"},ue={class:"icon-container"},fe={class:"text-body-2 text-wrap text-center"},_e={class:"text-primary text-h5"},ge={class:"mb-8"},ve=V(()=>s("h5",{class:"text-h5 mb-4"}," Invite your friends ",-1)),xe={class:"d-flex align-center flex-wrap gap-4 flex-wrap"},he=V(()=>s("h5",{class:"text-h5 mb-4"}," Share the referral link ",-1)),ye={class:"d-flex gap-4 align-center flex-wrap"},be={class:"d-flex align-self-end gap-x-4"},Ve={class:"d-flex justify-space-between align-center flex-wrap gap-4"},we=V(()=>s("h5",{class:"text-h5"}," Referred Users ",-1)),ke={class:"d-flex flex-wrap gap-4"},Ce={class:"d-flex gap-4 align-center flex-wrap"},Se={class:"d-flex align-center gap-x-3"},Re={class:"font-weight-medium text-high-emphasis"},Ie={class:"text-sm text-disabled"},Pe={class:"text-h6"},Ue={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Be={class:"text-sm text-disabled mb-0"},Ee=W({__name:"referrals",async setup(u){let f,R;const A=[{title:"Total Earning",value:"$24,983",icon:"tabler-currency-dollar",color:"primary"},{title:"Unpaid Earning",value:"$8,647",icon:"tabler-gift",color:"success"},{title:"Signups",value:"2,367",icon:"tabler-user",color:"error"},{title:"Conversion Rate",value:"4.5%",icon:"tabler-infinity",color:"info"}],T=[{icon:"custom-rocket",desc:"Create & validate your referral link and get",value:"$50"},{icon:"custom-userinfo",desc:"For every new signup you get",value:"10%"},{icon:"custom-paper",desc:"Get other friends to generate link and get",value:"$100"}],r=h(10),i=h(1),I=h(),P=h(),$=[{title:"Users",key:"users"},{title:"Referred ID",key:"referred-id"},{title:"Status",key:"status"},{title:"Value",key:"value"},{title:"Earnings",key:"earning"}],F=n=>{var l,m;i.value=n.page,I.value=(l=n.sortBy[0])==null?void 0:l.key,P.value=(m=n.sortBy[0])==null?void 0:m.order},{data:U}=([f,R]=X(()=>H(O("/apps/ecommerce/referrals",{query:{page:i,itemsPerPage:r,sortBy:I,orderBy:P}}))),f=await f,R(),f),M=B(()=>U.value.referrals),_=B(()=>U.value.total),N=n=>{if(n==="Rejected")return{text:"Rejected",color:"error"};if(n==="Unpaid")return{text:"Unpaid",color:"warning"};if(n==="Paid")return{text:"Paid",color:"success"}};return(n,l)=>{const m=q,L=Y("RouterLink");return k(),C("div",null,[e(le,{class:"match-height"},{default:t(()=>[(k(),C(E,null,j(A,(a,w)=>e(g,{key:w,cols:"12",md:"3",sm:"6"},{default:t(()=>[e(v,null,{default:t(()=>[e(x,null,{default:t(()=>[s("div",ie,[s("div",ne,[s("h4",de,d(a.value),1),s("span",ce,d(a.title),1)]),e(D,{size:"42",variant:"tonal",color:a.color},{default:t(()=>[e(y,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),e(g,{cols:"12",md:"6"},{default:t(()=>[e(v,null,{default:t(()=>[e(J,null,{default:t(()=>[e(K,{class:"mb-1"},{default:t(()=>[c(" How to use ")]),_:1}),e(Q,null,{default:t(()=>[pe]),_:1})]),_:1}),e(x,null,{default:t(()=>[s("div",me,[(k(),C(E,null,j(T,(a,w)=>s("div",{key:w,class:"d-flex flex-column align-center gap-y-2",style:{"max-inline-size":"185px"}},[s("div",ue,[e(y,{icon:a.icon,color:"primary",size:"36"},null,8,["icon"])]),s("span",fe,d(a.desc),1),s("h5",_e,d(a.value),1)])),64))])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(v,null,{default:t(()=>[e(x,null,{default:t(()=>[s("div",ge,[ve,s("div",xe,[e(m,{label:"Enter friend’s email address and invite them",placeholder:"Email Addresss",density:"compact"}),e(p,{class:"align-self-end"},{default:t(()=>[c(" Submit ")]),_:1})])]),s("div",null,[he,s("div",ye,[e(m,{label:"Share referral link in social media",placeholder:"pixinvent.com/?ref=6478",density:"compact"}),s("div",be,[e(p,{icon:"",class:"rounded",color:"#3B5998",size:"40"},{default:t(()=>[e(y,{color:"white",icon:"tabler-brand-facebook"})]),_:1}),e(p,{icon:"",class:"rounded",color:"#55ACEE",size:"40"},{default:t(()=>[e(y,{color:"white",icon:"tabler-brand-twitter"})]),_:1})])])])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(v,null,{default:t(()=>[e(x,null,{default:t(()=>[s("div",Ve,[we,s("div",ke,[s("div",Ce,[e(te,{modelValue:o(r),"onUpdate:modelValue":l[0]||(l[0]=a=>b(r)?r.value=a:null),items:[10,25,50,100],style:{"inline-size":"100px"},density:"compact"},null,8,["modelValue"]),e(p,{"prepend-icon":"tabler-screen-share",color:"default",variant:"tonal"},{default:t(()=>[c(" Export ")]),_:1})])])])]),_:1}),e(z),e(o(ae),{"items-per-page":o(r),"onUpdate:itemsPerPage":l[2]||(l[2]=a=>b(r)?r.value=a:null),page:o(i),"onUpdate:page":l[3]||(l[3]=a=>b(i)?i.value=a:null),items:o(M),headers:$,"items-length":o(_),"show-select":"","onUpdate:options":F},{"item.users":t(({item:a})=>[s("div",Se,[e(D,{image:a.avatar,size:38},null,8,["image"]),s("div",null,[s("div",Re,[e(L,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}}},{default:t(()=>[c(d(a.user),1)]),_:2},1024)]),s("div",Ie,d(a.email),1)])])]),"item.referred-id":t(({item:a})=>[c(d(a.referredId),1)]),"item.status":t(({item:a})=>[e(se,S(N(a.status),{label:""}),null,16)]),"item.earning":t(({item:a})=>[s("h6",Pe,d(a.earning),1)]),bottom:t(()=>[e(z),s("div",Ue,[s("p",Be,d(o(G)({page:o(i),itemsPerPage:o(r)},o(_))),1),e(oe,{modelValue:o(i),"onUpdate:modelValue":l[1]||(l[1]=a=>b(i)?i.value=a:null),length:Math.ceil(o(_)/o(r)),"total-visible":n.$vuetify.display.xs?1:Math.min(Math.ceil(o(_)/o(r)),5)},{prev:t(a=>[e(p,S({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[c(" Previous ")]),_:2},1040)]),next:t(a=>[e(p,S({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[c(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})])}}});const bt=re(Ee,[["__scopeId","data-v-e742f2d9"]]);export{bt as default};
