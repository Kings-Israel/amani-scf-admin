import{q as C}from"./vue3-apexcharts-8104d5b5.js";import{d as g,ay as $,R as S,bb as b,o as u,h as x,f as e,b as a,e as t,y as f,p as _,bn as T,c as w,j as V,F as z,a9 as B}from"./index-75b434bc.js";import{V as v}from"./VCardText-76f31582.js";import{V as y}from"./VCard-95c0d706.js";import{V as L}from"./VRow-d6f20668.js";import{V as R}from"./VCol-35b3d337.js";import{V as O}from"./VAvatar-071125b9.js";const A={class:"mb-n2"},I={class:"text-h5"},P=t("span",{class:"text-disabled text-sm"},"Invoices",-1),E={class:"text-sm text-center clamp-text text-disabled mt-3"},it=g({__name:"EcommerceExpensesRadialBarCharts",props:{stats:{}},setup(i){const l=$(),p=i.stats,h=p.total_invoices,d=p.approved_invoices.toFixed(2),s=[d],o=S(()=>{const r=l.current.value.colors,n=l.current.value.variables;return{chart:{sparkline:{enabled:!0},parentHeightOffset:0,type:"radialBar"},colors:[r.warning],plotOptions:{radialBar:{offsetY:0,startAngle:-90,endAngle:90,hollow:{size:"65%"},track:{strokeWidth:"45%",background:`rgba(${b(String(n["border-color"]))},${n["border-opacity"]})`},dataLabels:{name:{show:!1},value:{fontSize:"22px",color:`rgba(${b(r["on-background"])},${n["high-emphasis-opacity"]})`,fontWeight:600,offsetY:-5}}}},grid:{show:!1,padding:{bottom:5}},stroke:{lineCap:"round"},labels:["Progress"],responsive:[{breakpoint:1442,options:{chart:{height:140},plotOptions:{radialBar:{dataLabels:{value:{fontSize:"18px"}},hollow:{size:"60%"}}}}},{breakpoint:1370,options:{chart:{height:120}}},{breakpoint:1280,options:{chart:{height:150},plotOptions:{radialBar:{dataLabels:{value:{fontSize:"18px"}},hollow:{size:"70%"}}}}},{breakpoint:960,options:{chart:{height:250},plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{value:{fontSize:"18px"}}}}}}]}});return(r,n)=>{const m=C;return u(),x(y,null,{default:e(()=>[a(v,null,{default:e(()=>[t("div",A,[t("h5",I,f(_(h)),1),P]),a(m,{options:_(o),series:s,type:"radialBar",height:155},null,8,["options"]),t("div",E,f(_(d))+"% invoices have been approved ",1)]),_:1})]),_:1})}}}),F={class:"d-flex flex-column"},D=t("div",{class:"mb-auto"},[t("h5",{class:"text-h5 text-no-wrap"}," Total Program Limit "),t("span",{class:"text-sm"},"Summary Report")],-1),N={class:"text-h3 mb-1"},W=t("div",null,null,-1),Y=t("div",null,null,-1),lt=g({__name:"EcommerceGeneratedLeads",props:{stats:{}},setup(i){const p=i.stats.program_limit.toLocaleString(),h=$(),d=T();return S(()=>{const s=h.current.value.colors,o=h.current.value.variables,r=`rgba(${b(s.success)},0.2)`,n=`rgba(${b(s["on-background"])},${o["high-emphasis-opacity"]})`,m={donut:{series1:s.success,series2:"#28c76fb3",series3:"#28c76f80",series4:r}};return{chart:{parentHeightOffset:0,type:"donut"},labels:[],colors:[m.donut.series1,m.donut.series2,m.donut.series3,m.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(k){return`${Number.parseInt(k)}%`}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:0,bottom:-10,right:-20,left:-20}},states:{hover:{filter:{type:"none"}}},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,value:{fontSize:"1.375rem",fontFamily:"Public Sans",color:n,fontWeight:600,offsetY:-15,formatter(k){return`${Number.parseInt(k)}%`}},name:{offsetY:20,fontFamily:"Public Sans"},total:{show:!0,showAlways:!0,color:s.success,fontSize:".8125rem",label:"Total",fontFamily:"Public Sans",formatter(){return"184"}}}}}},responsive:[{breakpoint:d.thresholds.value.lg,options:{chart:{width:200,height:160}}},{breakpoint:420,options:{chart:{width:150,height:120}}}]}}),(s,o)=>(u(),x(y,null,{default:e(()=>[a(v,{class:"d-flex justify-space-between"},{default:e(()=>[t("div",F,[D,t("div",null,[t("h3",N,f(_(p)),1),W])]),Y]),_:1})]),_:1}))}}),j=t("span",{class:"text-sm text-disabled"},"Updated 1 month ago",-1),H={class:"d-flex align-center gap-4"},q={class:"d-flex flex-column"},G={class:"text-h5 font-weight-medium"},K=["href"],M={class:"text-sm"},U={key:1,class:"text-sm"},ct=g({__name:"EcommerceStatistics",props:{stats:{}},setup(i){const c=i.stats,p=[{title:"Anchors",stats:c.anchors,icon:"tabler-chart-pie-2",color:"primary",slug:"admin/anchor"},{title:"Vendors",stats:c.vendors,icon:"tabler-users",color:"info",slug:"admin/vendor"},{title:"Buyers",stats:c.buyers,icon:"tabler-shopping-cart",color:"error",slug:"admin/buyers"},{title:"Banks",stats:c.banks,icon:"tabler-currency-dollar",color:"success",slug:"admin/bank/banks"}];return(h,d)=>(u(),x(y,{title:"STATISTICS"},{append:e(()=>[j]),default:e(()=>[a(v,{class:"pt-6"},{default:e(()=>[a(L,null,{default:e(()=>[(u(),w(z,null,V(p,s=>a(R,{key:s.title,cols:"6",md:"3"},{default:e(()=>[t("div",H,[a(O,{color:s.color,variant:"tonal",size:"42"},{default:e(()=>[a(B,{icon:s.icon},null,8,["icon"])]),_:2},1032,["color"]),t("div",q,[t("span",G,f(s.stats),1),s.slug?(u(),w("a",{key:0,href:"https://yofinvoice.deveint.live/"+s.slug,target:"_blank"},[t("span",M,f(s.title),1)],8,K)):(u(),w("span",U,f(s.title),1))])])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}}),J=t("div",null,[t("h5",{class:"text-h5"}," Discount Value "),t("span",{class:"text-disabled text-sm"},"Last Month")],-1),Q={class:"d-flex align-center justify-space-between mt-3"},X={class:"text-h4 text-center font-weight-medium"},Z=t("span",{class:"text-sm text-success"}," +8.24% ",-1),pt=g({__name:"EcommerceTotalProfitLineCharts",props:{stats:{}},setup(i){const l=$(),h=i.stats.totaldiscount.toLocaleString(),d=[{data:[0,25,10,40,25,55]}],s=S(()=>{const o=l.current.value.colors,r=l.current.value.variables;return{chart:{height:90,type:"line",parentHeightOffset:0,toolbar:{show:!1}},grid:{borderColor:`rgba(${b(String(r["border-color"]))},${r["border-opacity"]})`,strokeDashArray:6,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-18,left:-4,right:7,bottom:-10}},colors:[o.info],stroke:{width:2},tooltip:{enabled:!1,shared:!1,intersect:!0,x:{show:!1}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},markers:{size:3.5,fillColor:o.info,strokeColors:"transparent",strokeWidth:3.2,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:o.surface,strokeColor:o.info,size:5,shape:"circle"}],hover:{size:5.5}},responsive:[{breakpoint:960,options:{chart:{height:110}}}]}});return(o,r)=>{const n=C;return u(),x(y,null,{default:e(()=>[a(v,null,{default:e(()=>[J,a(n,{type:"line",options:_(s),series:d,height:80},null,8,["options"]),t("div",Q,[t("h4",X," Ksh "+f(_(h)),1),Z])]),_:1})]),_:1})}}});export{ct as _,it as a,pt as b,lt as c};