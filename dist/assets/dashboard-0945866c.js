import{_ as M}from"./MoreBtn.vue_vue_type_script_setup_true_lang-f1f446b6.js";import{q as G}from"./vue3-apexcharts-8104d5b5.js";import{a as L,V as $}from"./VCard-95c0d706.js";import{V as R,a as E,b as W,c as X}from"./VList-c7d4c8b4.js";import{V as A}from"./VCardText-76f31582.js";import{d as z,o as u,h as w,f as s,b as e,c as x,j as V,F as k,b7 as K,e as t,y as l,a4 as F,a9 as v,x as p,p as i,b8 as Q,b9 as Z,ba as ee,b0 as te,r as D,b6 as se,R as O,aI as I,a_ as ae,t as q,a as oe,z as H}from"./index-75b434bc.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{V as j}from"./VDivider-fc890531.js";import{V as C}from"./VAvatar-071125b9.js";import{V as Y}from"./VChip-e2ddd660.js";import{_ as re}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{p as ie}from"./paginationMeta-4ad053a4.js";import{u as ne}from"./useApi-776c55ea.js";import{c as ce}from"./createUrl-149317bf.js";import{V as de}from"./VPagination-2b54b87a.js";import{V as ue}from"./VDataTableServer-e9f6b4ac.js";import{g as pe}from"./laptop-girl-81118deb.js";import{V as me}from"./VImg-ba4b392a.js";import{V as _}from"./VCol-35b3d337.js";import{V as N}from"./VRow-d6f20668.js";import{V as _e}from"./VBadge-5a0d87a2.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./easing-9f15041e.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./transition-6afda34e.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-14fdab67.js";import"./createSimpleFunctional-4b3a0a39.js";import"./ssrBoot-7f224ca6.js";import"./form-2b416184.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./VField-82993695.js";import"./VInput-b46333d7.js";import"./index-97808f23.js";import"./index-2898f57d.js";import"./VDataTable-c3cccdda.js";import"./VSelect-54e8b29a.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./VTable-de2d1039.js";import"./filter-3bfef89c.js";/* empty css              */const fe={class:"text-body-1 text-high-emphasis font-weight-medium"},he=z({__name:"AcademyAssignmentProgress",setup(B){const d=[{title:"User Experience Design",tasks:120,progress:72,color:"primary"},{title:"Basic fundamentals",tasks:32,progress:48,color:"success"},{title:"React Native components",tasks:182,progress:15,color:"error"},{title:"Basic of music theory",tasks:56,progress:24,color:"info"}];return(h,n)=>{const r=M;return u(),w($,null,{default:s(()=>[e(L,{title:"Assignment progress"},{append:s(()=>[e(r)]),_:1}),e(A,null,{default:s(()=>[e(R,{class:"card-list"},{default:s(()=>[(u(),x(k,null,V(d,o=>e(E,{key:o.title},{prepend:s(()=>[e(K,{modelValue:o.progress,"onUpdate:modelValue":g=>o.progress=g,size:54,class:"me-4",color:o.color},{default:s(()=>[t("span",fe,l(o.progress)+"% ",1)]),_:2},1032,["modelValue","onUpdate:modelValue","color"])]),append:s(()=>[e(F,{variant:"tonal",color:"default",class:"rounded-sm",size:"30"},{default:s(()=>[e(v,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),_:1})]),default:s(()=>[e(W,{class:"font-weight-medium mb-2"},{default:s(()=>[p(l(o.title),1)]),_:2},1024),e(X,null,{default:s(()=>[p(l(o.tasks)+" Tasks",1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}});const ge=le(he,[["__scopeId","data-v-04b57095"]]),ve=t("div",{class:"text-overline d-flex justify-space-between px-5"},[t("span",null,"instructors"),t("span",null,"Courses")],-1),be={class:"text-body-1 text-high-emphasis"},xe=z({__name:"AcademyCardPopularInstructors",setup(B){return(d,h)=>{const n=M;return u(),w($,null,{default:s(()=>[e(L,{title:"Popular Instructors"},{append:s(()=>[e(n)]),_:1}),e(j),ve,e(j),e(A,null,{default:s(()=>[e(R,{class:"card-list"},{default:s(()=>[(u(!0),x(k,null,V([{name:"Jordan Stevenson",profession:"Business Intelligence",totalCourses:33,avatar:i(Q)},{name:"Bentlee Emblin",profession:"Digital Marketing",totalCourses:52,avatar:i(Z)},{name:"Benedetto Rossiter",profession:"UI/UX Design",totalCourses:12,avatar:i(ee)},{name:"Beverlie Krabbe",profession:"Vue",totalCourses:8,avatar:i(te)}],r=>(u(),w(E,{key:r.name},{prepend:s(()=>[e(C,{size:"34",image:r.avatar},null,8,["image"])]),append:s(()=>[t("span",be,l(r.totalCourses),1)]),default:s(()=>[e(W,{class:"font-weight-medium"},{default:s(()=>[p(l(r.name),1)]),_:2},1024),e(X,{class:"text-disabled"},{default:s(()=>[p(l(r.profession),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}}),ye={class:"d-flex flex-column"},we={class:"font-weight-medium text-truncate"},Ve=z({__name:"AcademyCardTopCourses",setup(B){const d=[{title:"Videography Basic Design Course",views:"1.2k",icon:"tabler-brand-zoom",color:"primary"},{title:"Basic Front-end Development Course",views:"834",icon:"tabler-code",color:"info"},{title:"Basic Fundamentals of Photography",views:"3.7k",icon:"tabler-camera",color:"success"},{title:"Advance Dribble Base Visual Design",views:"2.5k",icon:"tabler-brand-dribbble",color:"warning"},{title:"Your First Singing Lesson",views:"948",icon:"tabler-microphone",color:"error"}];return(h,n)=>{const r=M;return u(),w($,null,{default:s(()=>[e(L,{title:"Top Courses"},{append:s(()=>[e(r)]),_:1}),e(A,null,{default:s(()=>[e(R,{class:"card-list"},{default:s(()=>[(u(),x(k,null,V(d,(o,g)=>e(E,{key:g},{prepend:s(()=>[e(C,{color:o.color,rounded:"",variant:"tonal"},{default:s(()=>[e(v,{icon:o.icon,size:"24"},null,8,["icon"])]),_:2},1032,["color"])]),default:s(()=>[e(W,{class:"me-4"},{default:s(()=>[t("div",ye,[t("div",we,l(o.title),1),t("div",null,[e(Y,{color:"secondary",label:"",variant:"tonal"},{default:s(()=>[p(l(o.views),1)]),_:2},1024)])])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),ke={class:"d-flex flex-wrap justify-space-between align-center gap-4"},Ce=t("h5",{class:"text-h5 font-weight-medium"}," Courses you are taking ",-1),$e={class:"d-flex align-center gap-x-4 py-2"},Ae={class:"text-base font-weight-medium mb-1"},ze={class:"d-flex align-center"},Be={class:"text-base ms-2"},De={class:"text-base text-high-emphasis font-weight-medium"},Se={class:"d-flex align-center gap-x-4 mb-2",style:{"inline-size":"15.625rem"}},Te={class:"text-no-wrap font-weight-medium text-high-emphasis"},Pe={class:"w-100"},Ue={class:"text-disabled"},Ie={class:"d-flex justify-space-between gap-x-4"},Fe={class:"text-body-1"},Me={class:"text-body-1"},Le={class:"text-body-1"},Ne={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},je={class:"text-sm text-disabled mb-0"},Re=z({__name:"AcademyCourseTable",async setup(B){let d,h;const n=D(""),r=D(5),o=D(1),g=D(),m=D(),S=b=>{var c,U;o.value=b.page,g.value=(c=b.sortBy[0])==null?void 0:c.key,m.value=(U=b.sortBy[0])==null?void 0:U.order},T=[{title:"Course Name",key:"courseName"},{title:"Time",key:"time",sortable:!1},{title:"Progress",key:"progress"},{title:"Status",key:"status",sortable:!1}],{data:P}=([d,h]=se(()=>ne(ce("/apps/academy/courses",{query:{q:n,itemsPerPage:r,page:o,sortBy:g,orderBy:m}}))),d=await d,h(),d),f=O(()=>P.value.courses),y=O(()=>P.value.total);return(b,c)=>{const U=re,J=oe("RouterLink");return u(),w($,null,{default:s(()=>[e(A,null,{default:s(()=>[t("div",ke,[Ce,t("div",null,[e(U,{modelValue:i(n),"onUpdate:modelValue":c[0]||(c[0]=a=>I(n)?n.value=a:null),placeholder:"Search",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"])])])]),_:1}),e(i(ue),{"items-per-page":i(r),"onUpdate:itemsPerPage":c[2]||(c[2]=a=>I(r)?r.value=a:null),page:i(o),"onUpdate:page":c[3]||(c[3]=a=>I(o)?o.value=a:null),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:20,title:"20"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:T,items:i(f),"items-length":i(y),"show-select":"",class:"text-no-wrap","onUpdate:options":S},{"item.courseName":s(({item:a})=>[t("div",$e,[e(C,{variant:"tonal",size:"40",rounded:"",color:a.color},{default:s(()=>[e(v,{icon:a.logo},null,8,["icon"])]),_:2},1032,["color"]),t("div",null,[t("div",Ae,[e(J,{to:{name:"apps-academy-course-details"},class:"text-link"},{default:s(()=>[p(l(a.courseTitle),1)]),_:2},1024)]),t("div",ze,[e(C,{size:"22",image:a.image},null,8,["image"]),t("span",Be,l(a.user),1)])])])]),"item.time":s(({item:a})=>[t("span",De,l(a.time),1)]),"item.progress":s(({item:a})=>[t("div",Se,[t("div",Te,l(Math.floor(a.completedTasks/a.totalTasks*100))+"% ",1),t("div",Pe,[e(ae,{color:"primary",height:"8","model-value":Math.floor(a.completedTasks/a.totalTasks*100),rounded:""},null,8,["model-value"])]),t("div",Ue,l(a.completedTasks)+"/"+l(a.totalTasks),1)])]),"item.status":s(({item:a})=>[t("div",Ie,[t("div",null,[e(v,{icon:"tabler-users",color:"primary",size:"24",class:"me-2"}),t("span",Fe,l(a.userCount),1)]),t("div",null,[e(v,{icon:"tabler-book",color:"info",size:"24",class:"me-2"}),t("span",Me,l(a.note),1)]),t("div",null,[e(v,{icon:"tabler-brand-zoom",color:"error",size:"24",class:"me-2"}),t("span",Le,l(a.view),1)])])]),bottom:s(()=>[e(j),t("div",Ne,[t("p",je,l(i(ie)({page:i(o),itemsPerPage:i(r)},i(y))),1),e(de,{modelValue:i(o),"onUpdate:modelValue":c[1]||(c[1]=a=>I(o)?o.value=a:null),length:Math.ceil(i(y)/i(r)),"total-visible":b.$vuetify.display.xs?1:Math.min(Math.ceil(i(y)/i(r)),5)},{prev:s(a=>[e(F,q({variant:"tonal",color:"default"},a,{icon:!1}),{default:s(()=>[p(" Previous ")]),_:2},1040)]),next:s(a=>[e(F,q({variant:"tonal",color:"default"},a,{icon:!1}),{default:s(()=>[p(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})}}}),Ee={class:"d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light-primary rounded"},We=t("h4",{class:"text-h4 mb-1"}," Upcoming Webinar ",-1),Oe=t("span",{class:"text-body-2"},"Next Generation Frontend Architecture Using Layout Engine And Vue.",-1),qe={class:"d-flex justify-space-between my-4 flex-wrap"},He={class:"text-h6 text-high-emphasis"},Xe={class:"text-sm"},Ye=z({__name:"AcademyUpcomingWebinar",setup(B){return(d,h)=>(u(),w($,null,{default:s(()=>[e(A,null,{default:s(()=>[t("div",Ee,[e(me,{src:i(pe),width:"145",height:"140"},null,8,["src"])]),t("div",null,[We,Oe,t("div",qe,[(u(),x(k,null,V([{icon:"tabler-calendar",title:"17 Nov 23",value:"Date"},{icon:"tabler-clock",title:"32 Minutes",value:"Duration"}],({icon:n,title:r,value:o})=>t("div",{key:r,class:"d-flex gap-x-3 align-center"},[e(C,{color:"primary",variant:"tonal",rounded:""},{default:s(()=>[e(v,{icon:n},null,8,["icon"])]),_:2},1024),t("div",null,[t("h6",He,l(r),1),t("div",Xe,l(o),1)])])),64))]),e(F,{block:""},{default:s(()=>[p(" Join the event ")]),_:1})])]),_:1})]),_:1}))}}),Je={class:"pe-3"},Ge=t("h3",{class:"text-h3 text-high-emphasis mb-1"},[p(" Welcome back,"),t("span",{class:"font-weight-medium"}," Felecia 👋🏻 ")],-1),Ke=t("div",{class:"mb-2 text-wrap",style:{"max-inline-size":"400px"}}," Your progress this week is Awesome. let's keep it up and get a lot of points reward! ",-1),Qe={class:"d-flex justify-space-between flex-wrap gap-4 flex-column flex-md-row"},Ze={class:"d-flex"},et={class:"text-base"},tt={class:"d-flex justify-space-between align-center"},st={class:"d-flex flex-column ps-3"},at=t("h5",{class:"text-h5 text-high-emphasis mb-2 text-no-wrap"}," Time Spendings ",-1),ot=t("span",{class:"mb-7"},"Weekly Report",-1),lt=t("div",{class:"text-h3 mb-2"},[p(" 231"),t("span",{class:"text-h4 text-medium-emphasis"},"h"),p(" 14"),t("span",{class:"text-h4 text-medium-emphasis"},"m")],-1),rt={class:"d-flex flex-wrap gap-x-4 gap-y-10 mx-auto",style:{"inline-size":"300px"}},it={class:"text-body-1",style:{"min-inline-size":"90px"}},nt={class:"text-h4"},ct="rgba(var(--v-border-color), var(--v-border-opacity))",ss=z({__name:"dashboard",setup(B){const d={chart:{height:270,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"70%",distributed:!0,startingShape:"rounded",borderRadius:7}},colors:["#7367f0","#16B1FF","#56CA00","#8A8D93","#FF4C51","#FFB400"],grid:{borderColor:ct,strokeDashArray:10,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-35,bottom:-12}},dataLabels:{enabled:!0,style:{colors:["#fff"],fontWeight:200,fontSize:"13px"},offsetX:0,dropShadow:{enabled:!1},formatter(m,S){return d.labels[S.dataPointIndex]}},labels:["UI Design","UX Design","Music","Animation","Vue","SEO"],xaxis:{categories:["6","5","4","3","2","1"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:"rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",fontSize:"13px"},formatter(m){return`${m}%`}}},yaxis:{max:35,labels:{style:{colors:"rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",fontSize:"13px"}}},tooltip:{enabled:!0,style:{fontSize:"12px"},onDatasetHover:{highlightDataSeries:!1}},legend:{show:!1}},h=[{data:[35,20,14,12,10,9]}],n={donut:{series1:"#22A95E",series2:"#24B364",series3:"#56CA00",series4:"#53D28C",series5:"#7EDDA9",series6:"#A9E9C5"}},r={chart:{height:157,width:130,parentHeightOffset:0,type:"donut"},labels:["36h","56h","16h","32h","56h","16h"],colors:[n.donut.series1,n.donut.series2,n.donut.series3,n.donut.series4,n.donut.series5,n.donut.series6],stroke:{width:0},dataLabels:{enabled:!1,formatter(m){return`${Number.parseInt(m)}%`}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:0}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"1.5rem",color:"rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",fontWeight:500,offsetY:-15,formatter(m){return`${Number.parseInt(m)}%`}},name:{offsetY:20},total:{show:!0,fontSize:".7rem",label:"Total",color:"rgba(var(--v-theme-on-background), var(--v-disabled-opacity))",formatter(){return"231h"}}}}}}},o=[23,35,10,20,35,23],g=[{title:"UI Design",value:35,color:"primary"},{title:"UX Design",value:20,color:"info"},{title:"Music",value:14,color:"success"},{title:"Animation",value:12,color:"secondary"},{title:"Vue",value:10,color:"error"},{title:"SEO",value:9,color:"warning"}];return(m,S)=>{const T=G,P=M;return u(),x("div",null,[e(N,{class:"py-6"},{default:s(()=>[e(_,{cols:"12",md:"8",class:H(m.$vuetify.display.mdAndUp?"border-e":"border-b")},{default:s(()=>[t("div",Je,[Ge,Ke,t("div",Qe,[(u(),x(k,null,V([{title:"Hours Spent",value:"34h",icon:"custom-laptop",color:"primary"},{title:"Test Results",value:"82%",icon:"custom-lightbulb",color:"info"},{title:"Course Completed",value:"14",icon:"custom-check",color:"warning"}],({title:f,value:y,icon:b,color:c})=>t("div",{key:f},[t("div",Ze,[e(C,{variant:"tonal",color:c,rounded:"",size:"54",class:"text-primary me-4"},{default:s(()=>[e(v,{icon:b,size:"38"},null,8,["icon"])]),_:2},1032,["color"]),t("div",null,[t("span",et,l(f),1),t("h4",{class:H(["text-h4 font-weight-medium",`text-${c}`])},l(y),3)])])])),64))])])]),_:1},8,["class"]),e(_,{cols:"12",md:"4"},{default:s(()=>[t("div",tt,[t("div",st,[at,ot,lt,t("div",null,[e(Y,{color:"success",label:""},{default:s(()=>[p(" +18.4% ")]),_:1})])]),t("div",null,[e(T,{type:"donut",height:"150",width:"150",options:r,series:o})])])]),_:1})]),_:1}),e(N,{class:"match-height"},{default:s(()=>[e(_,{cols:"12",md:"8"},{default:s(()=>[e($,null,{default:s(()=>[e(L,{title:"Topic you are interested in"},{append:s(()=>[e(P)]),_:1}),e(A,null,{default:s(()=>[e(N,null,{default:s(()=>[e(_,{cols:"12",md:"6"},{default:s(()=>[t("div",null,[e(T,{type:"bar",height:"260",options:d,series:h})])]),_:1}),e(_,{cols:"12",md:"6"},{default:s(()=>[t("div",rt,[(u(),x(k,null,V(g,f=>t("div",{key:f.title,class:"d-flex gap-x-4"},[e(_e,{dot:"",inline:"",class:"mt-1 custom-badge",color:f.color},null,8,["color"]),t("div",null,[t("div",it,l(f.title),1),t("h4",nt,l(f.value)+"% ",1)])])),64))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(xe)]),_:1}),e(_,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(Ve)]),_:1}),e(_,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(Ye)]),_:1}),e(_,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(ge)]),_:1}),e(_,null,{default:s(()=>[e(Re)]),_:1})]),_:1})])}}});export{ss as default};
