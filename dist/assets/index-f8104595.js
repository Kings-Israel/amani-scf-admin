import{p as oe}from"./formatters-92bc75d8.js";import{_ as le}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as ae}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{p as se}from"./paginationMeta-4ad053a4.js";import{u as re}from"./useApi-c9327355.js";import{c as ie}from"./createUrl-3e678c2b.js";import{$ as ne}from"./api-44dd0fa9.js";import{V as L}from"./VCardText-3b4da816.js";import{V as M}from"./VRow-e44df108.js";import{V as W}from"./VCard-1a5b2c5e.js";import{V as b}from"./VCol-bcc5388c.js";import{V as k}from"./VDivider-d40713ce.js";import{V as ce}from"./VSpacer-a56288e5.js";import{d as de,r as i,b6 as ue,R as j,o as v,c as P,b as t,f as o,F as q,j as me,p as a,aI as u,e as r,a4 as w,x as m,h as C,A as $,y as p,a9 as S,t as A,a as pe,z as fe}from"./index-5caaa453.js";import{V as ve}from"./VDataTableServer-64dc84b4.js";import{V as D}from"./VAvatar-3ee4c690.js";import{V as _e}from"./VSwitch-31612395.js";import{V as G}from"./VChip-49676f7d.js";import{V as ye}from"./VMenu-97c48b4e.js";import{V as ge,a as U}from"./VList-4b1bf96e.js";import{V as he}from"./VPagination-4169e3c5.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";import"./helpers-681711bc.js";import"./form-c9c578a3.js";import"./VTextField-604d91ff.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./dialog-transition-1ae6ec72.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./index-2898f57d.js";import"./createSimpleFunctional-9624028d.js";/* empty css              */import"./VImg-6009f8f0.js";import"./VDataTable-1493872b.js";import"./VTable-f9bab7db.js";import"./filter-aecd5fc1.js";import"./ssrBoot-2696bccc.js";const xe={class:"d-flex flex-column gap-y-1"},be={class:"text-body-1 font-weight-medium text-capitalize"},ke={class:"text-h4 my-1"},we={class:"d-flex"},Se={class:"me-2 text-disabled text-no-wrap"},Pe={class:"d-flex flex-wrap gap-4 mx-5"},Ce={class:"d-flex align-center"},$e={class:"d-flex gap-4 flex-wrap align-center"},Ae={class:"d-flex align-center gap-x-2"},De={class:"d-flex flex-column"},Ue={class:"text-body-1 font-weight-medium"},Be={class:"text-sm text-disabled"},Ie={class:"text-body-1 font-weight-medium"},ze={class:"d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"},Ee={class:"text-sm text-medium-emphasis mb-0"},Ne=de({__name:"index",async setup(Te){let _,B;const I=i([{title:"In-Store Sales",value:"$5,345.43",icon:"tabler-home",desc:"5k orders",change:5.7},{title:"Website Sales",value:"$674,347.12",icon:"tabler-device-laptop",desc:"21k orders",change:12.4},{title:"Discount",value:"$14,235.12",icon:"tabler-gift",desc:"6k orders"},{title:"Affiliate",value:"$8,345.23",icon:"tabler-wallet",desc:"150 orders",change:-3.5}]),H=[{title:"Product",key:"product"},{title:"Category",key:"category"},{title:"Stock",key:"stock",sortable:!1},{title:"SKU",key:"sku"},{title:"Price",key:"price"},{title:"QTY",key:"qty"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],y=i(),g=i(),h=i(),V=i(""),R=i([{title:"Scheduled",value:"Scheduled"},{title:"Publish",value:"Published"},{title:"Inactive",value:"Inactive"}]),Q=i([{title:"Accessories",value:"Accessories"},{title:"Home Decor",value:"Home Decor"},{title:"Electronics",value:"Electronics"},{title:"Shoes",value:"Shoes"},{title:"Office",value:"Office"},{title:"Games",value:"Games"}]),K=i([{title:"In Stock",value:!0},{title:"Out of Stock",value:!1}]),n=i(10),c=i(1),z=i(),E=i(),Y=l=>{var s,f;c.value=l.page,z.value=(s=l.sortBy[0])==null?void 0:s.key,E.value=(f=l.sortBy[0])==null?void 0:f.order},N=l=>{if(l==="Accessories")return{color:"error",icon:"tabler-device-watch"};if(l==="Home Decor")return{color:"info",icon:"tabler-home"};if(l==="Electronics")return{color:"primary",icon:"tabler-device-imac"};if(l==="Shoes")return{color:"success",icon:"tabler-shoe"};if(l==="Office")return{color:"warning",icon:"tabler-briefcase"};if(l==="Games")return{color:"primary",icon:"tabler-device-gamepad-2"}},J=l=>{if(l==="Scheduled")return{text:"Scheduled",color:"warning"};if(l==="Published")return{text:"Publish",color:"success"};if(l==="Inactive")return{text:"Inactive",color:"error"}},{data:T,execute:X}=([_,B]=ue(()=>re(ie("/apps/ecommerce/products",{query:{q:V,stock:h,category:g,status:y,page:c,itemsPerPage:n,sortBy:z,orderBy:E}}))),_=await _,B(),_),Z=j(()=>T.value.products),x=j(()=>T.value.total),ee=async l=>{await ne(`apps/ecommerce/products/${l}`,{method:"DELETE"}),X()};return(l,s)=>{const f=ae,te=le,O=pe("IconBtn");return v(),P("div",null,[t(W,{class:"mb-6"},{default:o(()=>[t(L,null,{default:o(()=>[t(M,null,{default:o(()=>[(v(!0),P(q,null,me(a(I),(e,d)=>(v(),P(q,{key:d},[t(b,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:o(()=>[r("div",{class:fe(["d-flex justify-space-between",l.$vuetify.display.xs||l.$vuetify.display.sm&&d<2?"product-widget":""])},[r("div",xe,[r("div",be,p(e.title),1),r("h4",ke,p(e.value),1),r("div",we,[r("div",Se,p(e.desc),1),e.change?(v(),C(G,{key:0,label:"",color:e.change>0?"success":"error"},{default:o(()=>[m(p(("prefixWithPlus"in l?l.prefixWithPlus:a(oe))(e.change))+"% ",1)]),_:2},1032,["color"])):$("",!0)])]),t(D,{variant:"tonal",rounded:"",size:"38"},{default:o(()=>[t(S,{icon:e.icon,size:"28"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(l.$vuetify.display.mdAndUp?d!==a(I).length-1:l.$vuetify.display.smAndUp&&d%2===0)?(v(),C(k,{key:0,vertical:"",inset:"",length:"95"})):$("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(W,{title:"Filters",class:"mb-6"},{default:o(()=>[t(L,null,{default:o(()=>[t(M,null,{default:o(()=>[t(b,{cols:"12",sm:"4"},{default:o(()=>[t(f,{modelValue:a(y),"onUpdate:modelValue":s[0]||(s[0]=e=>u(y)?y.value=e:null),placeholder:"Status",items:a(R),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(b,{cols:"12",sm:"4"},{default:o(()=>[t(f,{modelValue:a(g),"onUpdate:modelValue":s[1]||(s[1]=e=>u(g)?g.value=e:null),placeholder:"Category",items:a(Q),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(b,{cols:"12",sm:"4"},{default:o(()=>[t(f,{modelValue:a(h),"onUpdate:modelValue":s[2]||(s[2]=e=>u(h)?h.value=e:null),placeholder:"Stock",items:a(K),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(k,{class:"my-4"}),r("div",Pe,[r("div",Ce,[t(te,{modelValue:a(V),"onUpdate:modelValue":s[3]||(s[3]=e=>u(V)?V.value=e:null),placeholder:"Search Product",density:"compact",style:{"inline-size":"200px"},class:"me-3"},null,8,["modelValue"])]),t(ce),r("div",$e,[t(f,{modelValue:a(n),"onUpdate:modelValue":s[4]||(s[4]=e=>u(n)?n.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(w,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:o(()=>[m(" Export ")]),_:1}),t(w,{color:"primary","prepend-icon":"tabler-plus",onClick:s[5]||(s[5]=e=>l.$router.push("/apps/ecommerce/product/add"))},{default:o(()=>[m(" Add Product ")]),_:1})])]),t(k,{class:"mt-4"}),t(a(ve),{"items-per-page":a(n),"onUpdate:itemsPerPage":s[7]||(s[7]=e=>u(n)?n.value=e:null),page:a(c),"onUpdate:page":s[8]||(s[8]=e=>u(c)?c.value=e:null),headers:H,"show-select":"",items:a(Z),"items-length":a(x),class:"text-no-wrap","onUpdate:options":Y},{"item.product":o(({item:e})=>[r("div",Ae,[e.image?(v(),C(D,{key:0,size:"38",variant:"tonal",rounded:"",image:e.image},null,8,["image"])):$("",!0),r("div",De,[r("span",Ue,p(e.productName),1),r("span",Be,p(e.productBrand),1)])])]),"item.category":o(({item:e})=>{var d;return[t(D,{size:"30",variant:"tonal",color:(d=N(e.category))==null?void 0:d.color,class:"me-2"},{default:o(()=>{var F;return[t(S,{icon:(F=N(e.category))==null?void 0:F.icon,size:"18"},null,8,["icon"])]}),_:2},1032,["color"]),r("span",Ie,p(e.category),1)]}),"item.stock":o(({item:e})=>[t(_e,{"model-value":e.stock},null,8,["model-value"])]),"item.status":o(({item:e})=>[t(G,A(J(e.status),{density:"default",label:""}),null,16)]),"item.actions":o(({item:e})=>[t(O,null,{default:o(()=>[t(S,{icon:"tabler-edit"})]),_:1}),t(O,null,{default:o(()=>[t(S,{icon:"tabler-dots-vertical"}),t(ye,{activator:"parent"},{default:o(()=>[t(ge,null,{default:o(()=>[t(U,{value:"download","prepend-icon":"tabler-download"},{default:o(()=>[m(" Download ")]),_:1}),t(U,{value:"delete","prepend-icon":"tabler-trash",onClick:d=>ee(e.id)},{default:o(()=>[m(" Delete ")]),_:2},1032,["onClick"]),t(U,{value:"duplicate","prepend-icon":"tabler-copy"},{default:o(()=>[m(" Duplicate ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[t(k),r("div",ze,[r("p",Ee,p(a(se)({page:a(c),itemsPerPage:a(n)},a(x))),1),t(he,{modelValue:a(c),"onUpdate:modelValue":s[6]||(s[6]=e=>u(c)?c.value=e:null),length:Math.min(Math.ceil(a(x)/a(n)),5),"total-visible":l.$vuetify.display.xs?1:Math.min(Math.ceil(a(x)/a(n)),5)},{prev:o(e=>[t(w,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[m(" Previous ")]),_:2},1040)]),next:o(e=>[t(w,A({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[m(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}});const Bt=Ve(Ne,[["__scopeId","data-v-ad590349"]]);export{Bt as default};
