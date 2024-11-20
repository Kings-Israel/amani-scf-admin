import{_ as S}from"./AppTextarea.vue_vue_type_script_setup_true_lang-bddf1338.js";import{_ as R}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as O}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import{_ as j}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as _}from"./VCol-bcc5388c.js";import{V as z}from"./VRow-e44df108.js";import{V as U}from"./VTooltip-302d2810.js";import{d as q,r as f,bf as Q,w as B,R as W,a as L,o as g,c as $,e,b as t,f as o,p as s,aI as C,x as D,y as c,a9 as N,F as Y,h as G,J as P,A as H,j as K,a4 as X,z as w}from"./index-5caaa453.js";import{V as F}from"./VCard-1a5b2c5e.js";import{V as Z}from"./VNodeRenderer-f316f6d8.js";import{u as ee}from"./useApi-c9327355.js";import{V as v}from"./VCardText-3b4da816.js";import{V}from"./VDivider-d40713ce.js";const te={class:"add-products-header mb-4 d-none d-md-flex ps-5 pe-16"},se=e("h6",{class:"text-sm font-weight-medium"},[e("span",{class:"text-base"}," Item ")],-1),oe=e("span",{class:"text-base"}," Cost ",-1),le=e("span",{class:"text-base"}," Qty ",-1),ae=e("span",{class:"text-base"}," Price ",-1),ne={class:"pa-5 flex-grow-1"},ie={class:"text-body-2 text-no-wrap mt-4"},de=e("p",{class:"mb-1"}," Discount ",-1),ce=e("span",null,"0%",-1),me={class:"mx-2"},pe={class:"my-2"},ue=e("span",{class:"d-inline d-md-none"},"Price: ",-1),re={class:"text-body-1"},_e={class:"d-flex flex-column justify-space-between border-s pa-1"},fe=q({__name:"InvoiceProductEdit",props:{id:{},data:{default:()=>({title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(A,{emit:I}){const i=A,b=I,a=[{title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,qty:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,qty:1,description:"Vuetify admin template."},{title:"App Development",cost:32,qty:1,description:"Native App Development."}],r=f("App Customization"),d=f(structuredClone(Q(i.data)));B(r,()=>{const T=a.filter(m=>m.title===r.value);d.value=T[0]});const y=()=>{b("removeProduct",i.id)},h=W(()=>Number(d.value.cost)*Number(d.value.qty));return B(h,()=>{b("totalAmount",h.value)},{immediate:!0}),(T,m)=>{const k=R,p=S,l=j,x=L("IconBtn");return g(),$(Y,null,[e("div",te,[t(z,{class:"font-weight-medium"},{default:o(()=>[t(_,{cols:"12",md:"6"},{default:o(()=>[se]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[oe]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[le]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[ae]),_:1})]),_:1})]),t(F,{flat:"",border:"",class:"d-flex flex-row"},{default:o(()=>[e("div",ne,[t(z,null,{default:o(()=>[t(_,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:s(r),"onUpdate:modelValue":m[0]||(m[0]=u=>C(r)?r.value=u:null),items:a,"item-title":"title","item-value":"title",label:"Select Item",placeholder:"Select Item",class:"mb-3"},null,8,["modelValue"]),t(p,{modelValue:s(d).description,"onUpdate:modelValue":m[1]||(m[1]=u=>s(d).description=u),rows:"2",label:"Description",placeholder:"Item description"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).cost,"onUpdate:modelValue":m[2]||(m[2]=u=>s(d).cost=u),type:"number",label:"Cost",placeholder:"100"},null,8,["modelValue"]),e("div",ie,[de,ce,e("span",me,[D(" 0% "),t(U,{activator:"parent"},{default:o(()=>[D("Tax 1")]),_:1})]),e("span",null,[D(" 0% "),t(U,{activator:"parent"},{default:o(()=>[D("Tax 2")]),_:1})])])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).qty,"onUpdate:modelValue":m[3]||(m[3]=u=>s(d).qty=u),type:"number",label:"Qty"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e("p",pe,[ue,e("span",re,"$"+c(s(h)),1)])]),_:1})]),_:1})]),e("div",_e,[t(x,{onClick:y},{default:o(()=>[t(N,{size:"20",icon:"tabler-x"})]),_:1}),t(x,null,{default:o(()=>[t(N,{size:"20",icon:"tabler-settings"})]),_:1})])]),_:1})],64)}}}),he={class:"ma-sm-4"},xe={class:"d-flex align-center mb-6"},be={class:"font-weight-bold text-capitalize text-h4"},ye=e("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),ve=e("p",{class:"my-2"}," San Diego County, CA 91905, USA ",-1),Ve=e("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),ge={class:"mt-4 ma-sm-4"},De={class:"d-flex align-center font-weight-medium justify-sm-end text-xl mb-3"},we=e("span",{class:"me-3 text-h4",style:{"inline-size":"6rem"}},"Invoice",-1),$e={class:"d-flex align-center justify-sm-end mb-3"},Ce=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Date Issued",-1),Ae={style:{"inline-size":"9.5rem"}},Ie={class:"d-flex align-center justify-sm-end mb-0"},Te=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Due Date",-1),ke={style:{"min-inline-size":"9.5rem"}},ze={class:"ma-sm-4",style:{"inline-size":"15.5rem"}},Ue=e("h6",{class:"text-base font-weight-medium mb-6"}," Invoice To: ",-1),Be={class:"mb-1"},Ne={class:"mb-1"},Pe={key:0,class:"mb-1"},Se={class:"mb-1"},Re={class:"mb-0"},je={class:"ma-sm-4"},qe=e("h6",{class:"text-base font-weight-medium mb-6"}," Bill To: ",-1),Ye=e("td",{class:"pe-6 pb-1"}," Total Due: ",-1),Fe={class:"font-weight-medium pb-1"},Me=e("td",{class:"pe-6 pb-1"}," Bank Name: ",-1),Ee={class:"pb-1"},Je=e("td",{class:"pe-6 pb-1"}," Country: ",-1),Oe={class:"pb-1"},Qe=e("td",{class:"pe-6 pb-1"}," IBAN: ",-1),We={class:"pb-1"},Le=e("td",{class:"pe-6 pb-1"}," SWIFT Code: ",-1),Ge={class:"pb-1"},He={class:"mt-4 ma-sm-4"},Ke={class:"mx-sm-4 my-4"},Xe={class:"d-flex align-center mb-4"},Ze=e("h6",{class:"text-sm font-weight-medium me-10"}," Salesperson: ",-1),et={class:"mx-sm-4 my-4"},tt={class:"w-100"},st=e("td",{class:"pe-16"}," Subtotal: ",-1),ot=e("h6",{class:"text-sm"}," $1800 ",-1),lt=[ot],at=e("td",{class:"pe-16"}," Discount: ",-1),nt=e("h6",{class:"text-sm"}," $28 ",-1),it=[nt],dt=e("td",{class:"pe-16"}," Tax: ",-1),ct=e("h6",{class:"text-sm"}," 21% ",-1),mt=[ct],pt={class:"w-100"},ut=e("td",{class:"pe-16"}," Total: ",-1),rt=e("h6",{class:"text-sm"}," $1690 ",-1),_t=[rt],ft=e("p",{class:"font-weight-medium text-sm text-high-emphasis mb-2"}," Note: ",-1),Tt=q({__name:"InvoiceEditable",props:{data:{}},emits:["push","remove"],setup(A,{emit:I}){const i=A,b=I,a=f(i.data.invoice),r=f(i.data.salesperson),d=f(i.data.thanksNote),y=f(i.data.note),h=f([]);(async()=>{const{data:p,error:l}=await ee("/apps/invoice/clients");l.value?console.log(l.value):h.value=p.value})();const m=()=>{b("push",{title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."})},k=p=>{b("remove",p)};return(p,l)=>{const x=j,u=O,M=R,E=S;return g(),G(F,null,{default:o(()=>[t(v,{class:"d-flex flex-wrap justify-space-between gap-y-5 flex-column flex-sm-row"},{default:o(()=>[e("div",he,[e("div",xe,[t(s(Z),{nodes:s(P).app.logo,class:"me-3"},null,8,["nodes"]),e("h6",be,c(s(P).app.title),1)]),ye,ve,Ve]),e("div",ge,[e("h6",De,[we,e("span",null,[t(x,{modelValue:s(a).id,"onUpdate:modelValue":l[0]||(l[0]=n=>s(a).id=n),disabled:"",prefix:"#",density:"compact",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",$e,[Ce,e("span",Ae,[t(u,{modelValue:s(a).issuedDate,"onUpdate:modelValue":l[1]||(l[1]=n=>s(a).issuedDate=n),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",Ie,[Te,e("span",ke,[t(u,{modelValue:s(a).dueDate,"onUpdate:modelValue":l[2]||(l[2]=n=>s(a).dueDate=n),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),_:1}),t(V),t(v,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-y-5 gap-4"},{default:o(()=>[e("div",ze,[Ue,t(M,{modelValue:s(a).client,"onUpdate:modelValue":l[3]||(l[3]=n=>s(a).client=n),items:s(h),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-6",density:"compact"},null,8,["modelValue","items"]),e("p",Be,c(s(a).client.name),1),e("p",Ne,c(s(a).client.company),1),s(a).client.address?(g(),$("p",Pe,c(s(a).client.address)+", "+c(s(a).client.country),1)):H("",!0),e("p",Se,c(s(a).client.contact),1),e("p",Re,c(s(a).client.companyEmail),1)]),e("div",je,[qe,e("table",null,[e("tbody",null,[e("tr",null,[Ye,e("td",Fe,c(i.data.paymentDetails.totalDue),1)]),e("tr",null,[Me,e("td",Ee,c(i.data.paymentDetails.bankName),1)]),e("tr",null,[Je,e("td",Oe,c(i.data.paymentDetails.country),1)]),e("tr",null,[Qe,e("td",We,c(i.data.paymentDetails.iban),1)]),e("tr",null,[Le,e("td",Ge,c(i.data.paymentDetails.swiftCode),1)])])])])]),_:1}),t(V),t(v,{class:"add-products-form"},{default:o(()=>[(g(!0),$(Y,null,K(i.data.purchasedProducts,(n,J)=>(g(),$("div",{key:n.title,class:"my-4 ma-sm-4"},[t(fe,{id:J,data:n,onRemoveProduct:k},null,8,["id","data"])]))),128)),e("div",He,[t(X,{onClick:m},{default:o(()=>[D(" Add Item ")]),_:1})])]),_:1}),t(V),t(v,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},{default:o(()=>[e("div",Ke,[e("div",Xe,[Ze,t(x,{modelValue:s(r),"onUpdate:modelValue":l[4]||(l[4]=n=>C(r)?r.value=n:null),style:{"inline-size":"10rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(x,{modelValue:s(d),"onUpdate:modelValue":l[5]||(l[5]=n=>C(d)?d.value=n:null),placeholder:"Message"},null,8,["modelValue"])]),e("div",et,[e("table",tt,[e("tbody",null,[e("tr",null,[st,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},lt,2)]),e("tr",null,[at,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},it,2)]),e("tr",null,[dt,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},mt,2)])])]),t(V,{class:"mt-4 mb-3"}),e("table",pt,[e("tbody",null,[e("tr",null,[ut,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},_t,2)])])])])]),_:1}),t(V),t(v,{class:"mx-sm-4"},{default:o(()=>[ft,t(E,{modelValue:s(y),"onUpdate:modelValue":l[6]||(l[6]=n=>C(y)?y.value=n:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])]),_:1})]),_:1})}}});export{Tt as _};