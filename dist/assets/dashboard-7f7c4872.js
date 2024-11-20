import{V as G}from"./VRow-d6f20668.js";import{V as b}from"./VCol-35b3d337.js";import{V as k,a as w}from"./VCard-95c0d706.js";import{V as S}from"./VCardText-76f31582.js";import{V as N}from"./VAvatar-071125b9.js";import{d as x,r as C,o as u,h as g,f as t,c as I,j as P,p as c,F as M,e as o,b as e,K as te,a9 as A,y as r,aR as j,aS as q,x as f,z as oe,aI as L,b6 as se,R as U,a_ as z,a4 as W,t as E,a as ie}from"./index-75b434bc.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{q as X}from"./vue3-apexcharts-8104d5b5.js";import{_ as R}from"./MoreBtn.vue_vue_type_script_setup_true_lang-f1f446b6.js";import{V as ae,a as le,b as re,c as ne}from"./VList-c7d4c8b4.js";import{V as ce,a as de}from"./VTabs-bb433ccf.js";import{V as pe,a as T}from"./VWindowItem-04415d19.js";import{V,a as m}from"./VTimelineItem-ec461a89.js";import{V as O}from"./VDivider-fc890531.js";import{p as ue}from"./paginationMeta-4ad053a4.js";import{u as _e}from"./useApi-776c55ea.js";import{c as me}from"./createUrl-149317bf.js";import{V as he}from"./VChip-e2ddd660.js";import{V as ve}from"./VPagination-2b54b87a.js";import{V as fe}from"./VDataTableServer-e9f6b4ac.js";import{V as ge}from"./VTable-de2d1039.js";/* empty css              */import"./createSimpleFunctional-4b3a0a39.js";import"./VImg-ba4b392a.js";import"./transition-6afda34e.js";import"./index-97808f23.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./easing-9f15041e.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-14fdab67.js";import"./ssrBoot-7f224ca6.js";import"./VSlideGroup-3e745b05.js";import"./index-2898f57d.js";import"./VDataTable-c3cccdda.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./VField-82993695.js";import"./form-2b416184.js";import"./VInput-b46333d7.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./filter-3bfef89c.js";const be=d=>(j("data-v-b4837905"),d=d(),q(),d),xe={class:"d-flex align-center gap-x-4 mb-2"},ye={class:"text-h5 font-weight-medium"},ke={class:"text-body-1"},Ve={class:"d-flex gap-x-2"},Ce={class:"text-h6 font-weight-medium"},we=be(()=>o("span",{class:"text-disabled"},"than last week",-1)),Se=x({__name:"LogisticsCardStatistics",setup(d){const i=C([{icon:"tabler-car",color:"primary",title:"On route vehicles",value:42,change:18.2,isHover:!1},{icon:"tabler-alert-triangle",color:"warning",title:"Vehicles with errors",value:8,change:-8.7,isHover:!1},{icon:"tabler-git-fork",color:"error",title:"Deviated from route",value:27,change:4.3,isHover:!1},{icon:"tabler-clock-hour-12",color:"info",title:"Late vehicles",value:13,change:-2.5,isHover:!1}]);return(_,p)=>(u(),g(G,null,{default:t(()=>[(u(!0),I(M,null,P(c(i),(s,l)=>(u(),g(b,{key:l,cols:"12",md:"3",sm:"6"},{default:t(()=>[o("div",null,[e(k,{class:"logistics-card-statistics cursor-pointer",style:te(s.isHover?{"border-block-end":`2px solid rgba(var(--v-theme-${s.color}))`}:{"border-block-end":`2px solid rgba(var(--v-theme-${s.color}), var(--v-disabled-opacity))`}),onMouseenter:n=>s.isHover=!0,onMouseleave:n=>s.isHover=!1},{default:t(()=>[e(S,null,{default:t(()=>[o("div",xe,[e(N,{variant:"tonal",color:s.color,rounded:""},{default:t(()=>[e(A,{icon:s.icon,size:"28"},null,8,["icon"])]),_:2},1032,["color"]),o("h5",ye,r(s.value),1)]),o("div",ke,r(s.title),1),o("div",Ve,[o("h6",Ce,r(s.change>0?"+":"")+" "+r(s.change)+"% ",1),we])]),_:2},1024)]),_:2},1032,["style","onMouseenter","onMouseleave"])])]),_:2},1024))),128))]),_:1}))}});const $e=H(Se,[["__scopeId","data-v-b4837905"]]),F="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",ze="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",Le=x({__name:"LogisticsDeliveryExpectations",setup(d){const i={donut:{series1:"#56ca00",series2:"#56ca00cc",series3:"#56ca0099",series4:"#56ca0066"}},_=[13,25,22,40],p={labels:["Incorrect address","Weather conditions","Federal Holidays","Damage during transit"],colors:[i.donut.series1,i.donut.series2,i.donut.series3,i.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(s){return`${Number.parseInt(s)}%`}},legend:{show:!0,position:"bottom",offsetY:10,markers:{width:8,height:8,offsetX:-3},itemMargin:{horizontal:15,vertical:5},fontSize:"13px",fontWeight:400,labels:{colors:F,useSeriesColors:!1}},tooltip:{theme:!1},grid:{padding:{top:15}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"26px",color:F,fontWeight:500,offsetY:-15,formatter(s){return`${Number.parseInt(s)}%`}},name:{offsetY:30},total:{show:!0,fontSize:"0.75rem",fontWeight:400,label:"AVG. Exceptions",color:ze,formatter(){return"30%"}}}}}},responsive:[{breakpoint:420,options:{chart:{height:400}}}]};return(s,l)=>{const n=R,$=X;return u(),g(k,null,{default:t(()=>[e(w,{title:"Delivery exceptions"},{append:t(()=>[e(n)]),_:1}),e(S,null,{default:t(()=>[e($,{type:"donut",height:"400",options:p,series:_})]),_:1})]),_:1})}}}),Oe={class:"text-high-emphasis text-body-1 font-weight-medium"},Ae=x({__name:"LogisticsDeliveryPerformance",setup(d){const i=[{title:"Packages in transit",value:"10k",change:25.8,icon:"tabler-gift-card",color:"primary"},{title:"Packages out for delivery",value:"5k",change:4.3,icon:"tabler-truck",color:"info"},{title:"Packages delivered",value:"15k",change:-12.5,icon:"tabler-circle-check",color:"success"},{title:"Delivery success rate",value:"95%",change:35.6,icon:"tabler-percentage",color:"warning"},{title:"Average delivery time",value:"2.5 Days",change:-2.15,icon:"tabler-clock",color:"secondary"},{title:"Customer satisfaction",value:"4.5/5",change:5.7,icon:"tabler-users",color:"error"}];return(_,p)=>{const s=R;return u(),g(k,null,{default:t(()=>[e(w,{title:"Delivery performance",subtitle:"12% increase in this month"},{append:t(()=>[e(s)]),_:1}),e(S,null,{default:t(()=>[e(ae,{class:"card-list"},{default:t(()=>[(u(),I(M,null,P(i,(l,n)=>e(le,{key:n},{prepend:t(()=>[e(N,{color:l.color,variant:"tonal",rounded:"",size:"38"},{default:t(()=>[e(A,{icon:l.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[o("span",Oe,r(l.value),1)]),default:t(()=>[e(re,null,{default:t(()=>[f(r(l.title),1)]),_:2},1024),e(ne,null,{default:t(()=>[o("div",{class:oe([l.change>0?"text-success":"text-error","d-flex align-center"])},[e(A,{icon:l.change>0?"tabler-chevron-up":"tabler-chevron-down",class:"me-1"},null,8,["icon"]),o("span",null,r(l.change)+"%",1)],2)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}});const Re=H(Ae,[["__scopeId","data-v-204d1f71"]]),Be=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),De=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),Ie=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),Pe=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),Me=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),Te=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),We=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),Ne=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),He=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),Je=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),Ue=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),Ee=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),Fe=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),Ye=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),Ge=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),je=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),qe=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),Xe=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),Ke=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),Qe=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),Ze=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),et=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),tt=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),ot=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),st=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),it=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),at=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),lt=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),rt=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),nt=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),ct=o("div",{class:"text-caption text-uppercase text-success"}," Sender ",-1),dt=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),pt=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),ut=o("div",{class:"text-caption text-primary text-uppercase"}," Receiver ",-1),_t=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),mt=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),ht=x({__name:"LogisticsOrderByCountries",setup(d){const i=C("New"),_=["New","Preparing","Shipping"];return(p,s)=>{const l=R;return u(),g(k,{class:"country-order-card"},{default:t(()=>[e(w,{title:"Orders by countries",subtitle:"62 deliveries in progress"},{append:t(()=>[e(l)]),_:1}),e(ce,{modelValue:c(i),"onUpdate:modelValue":s[0]||(s[0]=n=>L(i)?i.value=n:null),grow:"",class:"disable-tab-transition"},{default:t(()=>[(u(),I(M,null,P(_,(n,$)=>e(de,{key:$},{default:t(()=>[f(r(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(S,null,{default:t(()=>[e(pe,{modelValue:c(i),"onUpdate:modelValue":s[1]||(s[1]=n=>L(i)?i.value=n:null)},{default:t(()=>[e(T,null,{default:t(()=>[o("div",null,[e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[Be,De,Ie]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[Pe,Me,Te]),_:1})]),_:1}),e(O,{class:"my-5",style:{"border-style":"dashed"}}),e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[We,Ne,He]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[Je,Ue,Ee]),_:1})]),_:1})])]),_:1}),e(T,null,{default:t(()=>[o("div",null,[e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[Fe,Ye,Ge]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[je,qe,Xe]),_:1})]),_:1}),e(O,{class:"my-6"}),e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[Ke,Qe,Ze]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[et,tt,ot]),_:1})]),_:1})])]),_:1}),e(T,null,{default:t(()=>[o("div",null,[e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[st,it,at]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[lt,rt,nt]),_:1})]),_:1}),e(O,{class:"my-6"}),e(V,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"22",elevation:0},{default:t(()=>[ct,dt,pt]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"22",elevation:0},{default:t(()=>[ut,_t,mt]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});const vt={class:"d-flex align-center gap-x-4",style:{"min-inline-size":"240px"}},ft={class:"w-100"},gt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},bt={class:"text-sm text-disabled mb-0"},xt=x({__name:"LogisticsOverviewTable",async setup(d){let i,_;const p=C(5),s=C(1),l=C(),n=C(),$=h=>{var v,D;s.value=h.page,l.value=(v=h.sortBy[0])==null?void 0:v.key,n.value=(D=h.sortBy[0])==null?void 0:D.order},{data:J}=([i,_]=se(()=>_e(me("/apps/logistics/vehicles",{query:{page:s,itemsPerPage:p,sortBy:l,orderBy:n}}))),i=await i,_(),i),K=U(()=>J.value.vehicles),B=U(()=>J.value.totalVehicles),Q=[{title:"LOCATION",key:"location"},{title:"STARTING ROUTE",key:"startRoute"},{title:"ENDING ROUTE",key:"endRoute"},{title:"WARNINGS",key:"warnings"},{title:"PROGRESS",key:"progress"}],Z=h=>{if(h==="No Warnings")return"success";if(h==="fuel problems")return"primary";if(h==="Temperature Not Optimal")return"warning";if(h==="Ecu Not Responding")return"error";if(h==="Oil Leakage")return"info"};return(h,v)=>{const D=R,ee=ie("RouterLink");return u(),g(k,null,{default:t(()=>[e(w,{title:"On Route vehicles"},{append:t(()=>[e(D)]),_:1}),e(O),e(c(fe),{"items-per-page":c(p),"onUpdate:itemsPerPage":v[1]||(v[1]=a=>L(p)?p.value=a:null),page:c(s),"onUpdate:page":v[2]||(v[2]=a=>L(s)?s.value=a:null),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:20,title:"20"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],"items-length":c(B),items:c(K),headers:Q,"show-select":"",class:"text-no-wrap","onUpdate:options":$},{"item.location":t(({item:a})=>[e(N,{variant:"tonal",class:"me-2",size:"40"},{default:t(()=>[e(A,{icon:"tabler-truck",size:"24"})]),_:1}),e(ee,{class:"text-body-2 text-high-emphasis font-weight-medium",to:{name:"apps-logistics-fleet"}},{default:t(()=>[f(" VOL-"+r(a.location),1)]),_:2},1024)]),"item.startRoute":t(({item:a})=>[f(r(a.startCity)+", "+r(a.startCountry),1)]),"item.endRoute":t(({item:a})=>[f(r(a.endCity)+", "+r(a.endCountry),1)]),"item.warnings":t(({item:a})=>[e(he,{color:Z(a.warnings),label:""},{default:t(()=>[f(r(a.warnings),1)]),_:2},1032,["color"])]),"item.progress":t(({item:a})=>[o("div",vt,[o("div",ft,[e(z,{"model-value":a.progress,rounded:"",color:"primary",height:8},null,8,["model-value"])]),o("div",null,r(a.progress)+"% ",1)])]),bottom:t(()=>[e(O),o("div",gt,[o("p",bt,r(c(ue)({page:c(s),itemsPerPage:c(p)},c(B))),1),e(ve,{modelValue:c(s),"onUpdate:modelValue":v[0]||(v[0]=a=>L(s)?s.value=a:null),length:Math.ceil(c(B)/c(p)),"total-visible":h.$vuetify.display.xs?1:Math.min(Math.ceil(c(B)/c(p)),5)},{prev:t(a=>[e(W,E({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[f(" Previous ")]),_:2},1040)]),next:t(a=>[e(W,E({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[f(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items-length","items"])]),_:1})}}}),yt="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",Y="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",kt="rgba(var(--v-border-color), var(--v-border-opacity))",Vt=x({__name:"LogisticsShipmentStatistics",setup(d){const i={line:{series1:"#FFB400",series2:"#9055FD",series3:"#7367f029"}},_=[{name:"Shipment",type:"column",data:[38,45,33,38,32,48,45,40,42,37]},{name:"Delivery",type:"line",data:[23,28,23,32,25,42,32,32,26,24]}],p={chart:{type:"line",stacked:!1,parentHeightOffset:0,toolbar:{show:!1},zoom:{enabled:!1}},markers:{size:5,colors:"#fff",strokeColors:i.line.series2,hover:{size:6},borderRadius:4},stroke:{curve:"smooth",width:[0,3],lineCap:"round"},legend:{show:!0,position:"bottom",markers:{width:8,height:8,offsetX:-3},height:40,itemMargin:{horizontal:10,vertical:0},fontSize:"15px",fontFamily:"Open Sans",fontWeight:400,labels:{colors:yt,useSeriesColors:!1},offsetY:10},grid:{strokeDashArray:8,borderColor:kt},colors:[i.line.series1,i.line.series2],fill:{opacity:[1,1]},plotOptions:{bar:{columnWidth:"30%",startingShape:"rounded",endingShape:"rounded",borderRadius:4}},dataLabels:{enabled:!1},xaxis:{tickAmount:10,categories:["1 Jan","2 Jan","3 Jan","4 Jan","5 Jan","6 Jan","7 Jan","8 Jan","9 Jan","10 Jan"],labels:{style:{colors:Y,fontSize:"13px",fontWeight:400}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{tickAmount:4,min:10,max:50,labels:{style:{colors:Y,fontSize:"13px",fontWeight:400},formatter(s){return`${s}%`}}},responsive:[{breakpoint:1400,options:{chart:{height:320},xaxis:{labels:{style:{fontSize:"10px"}}},legend:{itemMargin:{vertical:0,horizontal:10},fontSize:"13px",offsetY:12}}},{breakpoint:1025,options:{chart:{height:415},plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:982,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:480,options:{chart:{height:250},legend:{offsetY:7}}}]};return(s,l)=>{const n=X;return u(),g(k,null,{default:t(()=>[e(w,{title:"Shipment statistics",subtitle:"Total number of deliveries 23.8k"},{append:t(()=>[e(W,{variant:"tonal","append-icon":"tabler-chevron-down"},{default:t(()=>[f(" January ")]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(n,{id:"shipment-statistics",type:"line",height:"320",options:p,series:_})]),_:1})]),_:1})}}});const y=d=>(j("data-v-953b29bc"),d=d(),q(),d),Ct={class:"d-flex mb-8"},wt={style:{"inline-size":"39.7%"}},St=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-4 text-body-1 d-none d-sm-block"}," On the way ",-1)),$t=y(()=>o("strong",{class:"text-start vehicle-progress-text"},"39.7%",-1)),zt={style:{"inline-size":"28.3%"}},Lt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-4 text-body-1 d-none d-sm-block"}," Unloading ",-1)),Ot=y(()=>o("strong",{class:"text-white vehicle-progress-text"},"28.3%",-1)),At={style:{"inline-size":"17.4%"}},Rt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-4 text-body-1 d-none d-sm-block"}," Loading ",-1)),Bt=y(()=>o("strong",{class:"text-white vehicle-progress-text"},"17.4%",-1)),Dt={style:{"inline-size":"14.6%"}},It=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-4 text-body-1 d-none d-sm-block"}," Waiting ",-1)),Pt=y(()=>o("strong",{class:"text-white vehicle-progress-text"},"14.6%",-1)),Mt={width:"70%"},Tt={class:"text-body-1 text-high-emphasis"},Wt={class:"font-weight-medium text-body-1 text-high-emphasis"},Nt={class:"text-body-1"},Ht=x({__name:"LogisticsVehicleOverview",setup(d){const i=[{icon:"tabler-truck",title:"On the way",time:"2hr 10min",percentage:39.7},{icon:"tabler-circle-arrow-down",title:"Unloading",time:"3hr 15min",percentage:28.3},{icon:"tabler-circle-arrow-up",title:"Loading",time:"1hr 24min",percentage:17.4},{icon:"tabler-clock",title:"Waiting",time:"5hr 19min",percentage:14.6}];return(_,p)=>{const s=R;return u(),g(k,null,{default:t(()=>[e(w,{title:"Vehicles Overview"},{append:t(()=>[e(s)]),_:1}),e(S,null,{default:t(()=>[o("div",Ct,[o("div",wt,[St,e(z,{color:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))","model-value":"100",height:"46",class:"rounded-e-0 rounded-sm"},{default:t(()=>[$t]),_:1})]),o("div",zt,[Lt,e(z,{color:"rgb(var(--v-theme-primary))","model-value":"100",class:"rounded-0",height:"46"},{default:t(()=>[Ot]),_:1})]),o("div",At,[Rt,e(z,{color:"rgb(var(--v-theme-info))","model-value":"100",height:"46",class:"rounded-0"},{default:t(()=>[Bt]),_:1})]),o("div",Dt,[It,e(z,{color:"#212121","model-value":"100",height:"46",class:"rounded-s-0 rounded-sm"},{default:t(()=>[Pt]),_:1})])]),e(ge,{class:"text-no-wrap"},{default:t(()=>[o("tbody",null,[(u(),I(M,null,P(i,(l,n)=>o("tr",{key:n},[o("td",Mt,[e(A,{icon:l.icon,size:"24",class:"me-2"},null,8,["icon"]),o("span",Tt,r(l.title),1)]),o("td",null,[o("div",Wt,r(l.time),1)]),o("td",null,[o("span",Nt,r(l.percentage)+"%",1)])])),64))])]),_:1})]),_:1})]),_:1})}}});const Jt=H(Ht,[["__scopeId","data-v-953b29bc"]]),Mo=x({__name:"dashboard",setup(d){return(i,_)=>(u(),g(G,{class:"match-height"},{default:t(()=>[e(b,{cols:"12"},{default:t(()=>[e($e)]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(Jt)]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(Vt)]),_:1}),e(b,{cols:"12",md:"4"},{default:t(()=>[e(Re)]),_:1}),e(b,{cols:"12",md:"4"},{default:t(()=>[e(Le)]),_:1}),e(b,{cols:"12",md:"4"},{default:t(()=>[e(ht)]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(xt)]),_:1})]),_:1}))}});export{Mo as default};
