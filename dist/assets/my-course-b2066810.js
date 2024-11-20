import{_ as G}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{R as B}from"./videojs-player.esm-f134dc94.js";import{u as N}from"./useApi-776c55ea.js";import{c as q}from"./createUrl-149317bf.js";import{V as E}from"./VSelect-54e8b29a.js";import{V as H}from"./VSwitch-84818870.js";import{V as $}from"./VRow-d6f20668.js";import{V as Q}from"./VPagination-2b54b87a.js";import{d as j,r as _,b6 as W,R as I,w as O,o as f,h as k,f as s,b as t,e,p as a,aI as C,c as A,j as X,F as Y,a4 as m,t as U,x as l,a as J,y,a9 as x,a_ as K,A as Z,aR as ee,aS as te,z as F}from"./index-75b434bc.js";import{V as c}from"./VCardText-76f31582.js";import{V as d}from"./VCard-95c0d706.js";import{V as g}from"./VCol-35b3d337.js";import{V as se}from"./VImg-ba4b392a.js";import{V as oe}from"./VChip-e2ddd660.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VAvatar-071125b9.js";import"./form-2b416184.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./index-2898f57d.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";/* empty css              */const P=h=>(ee("data-v-55f06905"),h=h(),te(),h),re={class:"d-flex justify-space-between align-center flex-wrap gap-4 mb-6"},ie=P(()=>e("div",null,[e("h5",{class:"text-h5"}," My Courses "),e("div",{class:"text-body-1"}," Total 6 course you have purchased ")],-1)),ne={class:"d-flex flex-wrap align-center gap-4"},ce={class:"mb-6"},de={class:"pa-2"},me={class:"d-flex justify-space-between align-center mb-4"},pe={class:"d-flex"},ue={class:"text-body-1 font-weight-medium align-center"},_e={class:"text-body-1 text-disabled font-weight-medium"},fe={class:"text-h5 mb-1"},he={key:0,class:"d-flex align-center mb-4"},ye={class:"text-body-1 my-auto"},xe={key:1,class:"mb-2"},ge=P(()=>e("span",{class:"text-success text-body-1"},"Completed",-1)),ve={class:"d-flex flex-wrap gap-4"},be=j({__name:"AcademyMyCourses",props:{searchQuery:{}},async setup(h){let r,i;const w=h,V=_(6),p=_(1),M=_(),S=_(),v=_(!1),b=_("All Courses"),{data:T}=([r,i]=W(()=>N(q("/apps/academy/courses",{query:{q:()=>w.searchQuery,hideCompleted:v,label:b,itemsPerPage:V,page:p,sortBy:M,orderBy:S}}))),r=await r,i(),r),z=I(()=>T.value.courses),R=I(()=>T.value.total);O([v,b],()=>{p.value=1});const D=u=>{if(u==="Web")return"primary";if(u==="Art")return"success";if(u==="UI/UX")return"error";if(u==="Psychology")return"warning";if(u==="Design")return"info"};return(u,n)=>{const L=J("RouterLink");return f(),k(d,{class:"mb-6"},{default:s(()=>[t(c,null,{default:s(()=>[e("div",re,[ie,e("div",ne,[t(E,{modelValue:a(b),"onUpdate:modelValue":n[0]||(n[0]=o=>C(b)?b.value=o:null),items:[{title:"Web",value:"web"},{title:"Art",value:"art"},{title:"UI/UX",value:"ui/ux"},{title:"Psychology",value:"psychology"},{title:"Design",value:"design"},{title:"All Courses",value:"All Courses"}],density:"compact",style:{"min-inline-size":"250px"}},null,8,["modelValue"]),t(H,{modelValue:a(v),"onUpdate:modelValue":n[1]||(n[1]=o=>C(v)?v.value=o:null),label:"Hide Completed"},null,8,["modelValue"])])]),e("div",ce,[t($,null,{default:s(()=>[(f(!0),A(Y,null,X(a(z),o=>(f(),k(g,{key:o.id,cols:"12",md:"4",sm:"6"},{default:s(()=>[t(d,{flat:"",border:""},{default:s(()=>[e("div",de,[t(se,{src:o.tutorImg,class:"cursor-pointer",onClick:n[2]||(n[2]=()=>u.$router.push({name:"apps-academy-course-details"}))},null,8,["src"])]),t(c,null,{default:s(()=>[e("div",me,[t(oe,{variant:"tonal",color:D(o.tags),label:""},{default:s(()=>[l(y(o.tags),1)]),_:2},1032,["color"]),e("div",pe,[e("span",ue,y(o.rating),1),t(x,{icon:"tabler-star-filled",color:"warning",class:"me-2",size:"20"}),e("span",_e,"("+y(o.ratingCount)+")",1)])]),e("h5",fe,[t(L,{to:{name:"apps-academy-course-details"},class:"course-title"},{default:s(()=>[l(y(o.courseTitle),1)]),_:2},1024)]),e("p",null,y(o.desc),1),o.completedTasks!==o.totalTasks?(f(),A("div",he,[t(x,{icon:"tabler-clock",size:"20",class:"me-1"}),e("span",ye,y(o.time),1)])):(f(),A("div",xe,[t(x,{icon:"tabler-checks",color:"success",class:"me-1"}),ge])),t(K,{"model-value":o.completedTasks/o.totalTasks*100,rounded:"",color:"primary",height:"8",class:"mb-6"},null,8,["model-value"]),e("div",ve,[t(m,{variant:"tonal",color:"secondary",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{prepend:s(()=>[t(x,{icon:"tabler-rotate-clockwise-2",class:"flip-in-rtl"})]),default:s(()=>[l(" Start Over ")]),_:1}),o.completedTasks!==o.totalTasks?(f(),k(m,{key:0,variant:"tonal",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{append:s(()=>[t(x,{icon:"tabler-arrow-right",class:"flip-in-rtl"})]),default:s(()=>[l(" Continue ")]),_:1})):Z("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(Q,{modelValue:a(p),"onUpdate:modelValue":n[3]||(n[3]=o=>C(p)?p.value=o:null),length:Math.ceil(a(R)/a(V))},{prev:s(o=>[t(m,U({variant:"tonal",color:"default"},o,{icon:!1}),{default:s(()=>[l(" Previous ")]),_:2},1040)]),next:s(o=>[t(m,U({variant:"tonal",color:"default"},o,{icon:!1}),{default:s(()=>[l(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length"])]),_:1})]),_:1})}}});const we=ae(be,[["__scopeId","data-v-55f06905"]]),Ve="/admin/assets/boy-app-academy-a2703eff.png",Ce="/admin/assets/girl-app-academy-4109b189.png",Ae="/admin/assets/academy-course-illustration1-0995cc5f.png",ke="/admin/assets/academy-course-illustration2-f6534761.png",$e=e("span",{class:"text-primary font-weight-bold"}," All in one place.",-1),Te=e("p",{class:"text-center text-wrap text-body-1 mx-auto mb-0"}," Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. ",-1),Be={class:"d-flex justify-center align-center gap-4 flex-wrap"},Ie=["src"],Ue=["src"],Fe={class:"mb-6"},je={class:"d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row"},Pe={class:"text-center text-sm-start"},Me=e("h5",{class:"text-h5 text-primary mb-1"},[e("div",{class:"d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row"},[e("div",{class:"text-center text-sm-start"},[e("h5",{class:"text-h5 text-primary mb-1"}," Earn a Certificate "),e("p",{class:"text-body-1 text-high-emphasis mb-6"})])])],-1),Se=e("p",{class:"text-body-1 text-high-emphasis mb-6"}," Get the right professional certificate program for you. ",-1),ze={class:"align-self-center"},Re={class:"align-self-center"},De=["src"],Le={class:"d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between"},Ge={class:"text-center text-sm-start"},Ne=e("h5",{class:"text-h5 text-error mb-1"},[e("div",{class:"d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between"},[e("div",{class:"text-center text-sm-start"},[e("h5",{class:"text-h5 text-error mb-1"}," Best Rated Courses "),e("p",{class:"text-body-1 text-high-emphasis text-wrap mb-6"})])])],-1),qe=e("p",{class:"text-body-1 text-high-emphasis text-wrap mb-6"}," Enroll now in the most popular and best rated courses. ",-1),Ee={class:"align-self-center"},He={class:"align-self-center"},Qe=["src"],We={class:"d-flex flex-column align-center gap-y-4 h-100 justify-center"},Oe=e("h3",{class:"text-h3 font-weight-medium"}," Today's Free Courses ",-1),Xe=e("p",{class:"text-body-1 text-center mb-2"}," We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! ",-1),Ye={class:"pa-2"},Je=e("h5",{class:"text-h5 mb-1"}," Your First Singing Lesson ",-1),Ke=e("p",{class:"text-body-1 mb-0"}," In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ",-1),Ze={class:"pa-2"},et=e("h5",{class:"text-h5 mb-1"}," Guitar for Beginners ",-1),tt=e("p",{class:"text-body-1 mb-0"}," The Fender Acoustic Guitar is best choice for beginners and professionals. ",-1),Gt=j({__name:"my-course",setup(h){const r=_("");return(i,w)=>{const V=G;return f(),A("div",null,[t(d,{class:"mb-6"},{default:s(()=>[t(c,{class:"py-12 position-relative"},{default:s(()=>[e("div",{class:F(["d-flex flex-column gap-y-4 mx-auto",i.$vuetify.display.mdAndUp?"w-50":i.$vuetify.display.xs?"w-100":"w-75"])},[e("h3",{class:F(["text-h3 text-center text-wrap mx-auto",i.$vuetify.display.mdAndUp?"w-75":"w-100"])},[l(" Education, talents, and career opportunities. "),$e],2),Te,e("div",Be,[t(V,{modelValue:a(r),"onUpdate:modelValue":w[0]||(w[0]=p=>C(r)?r.value=p:null),placeholder:"Find your course",density:"compact",style:{"min-inline-size":"200px"}},null,8,["modelValue"]),t(m,{color:"primary",density:"comfortable",icon:"tabler-search",class:"rounded"})])],2),e("img",{src:a(Ae),class:"illustration1 d-none d-md-block",height:"180"},null,8,Ie),e("img",{src:a(ke),class:"illustration2 d-none d-md-block",height:"100"},null,8,Ue)]),_:1})]),_:1}),t(we,{"search-query":a(r)},null,8,["search-query"]),e("div",Fe,[t($,null,{default:s(()=>[t(g,{cols:"12",md:"6"},{default:s(()=>[t(d,{flat:"",color:"rgba(115, 103, 240, 0.08)"},{default:s(()=>[t(c,null,{default:s(()=>[e("div",je,[e("div",Pe,[Me,Se,t(m,null,{default:s(()=>[l("View Programs")]),_:1})]),e("div",ze,[e("div",Re,[e("img",{src:a(Ve),height:"127"},null,8,De)])])])]),_:1})]),_:1})]),_:1}),t(g,{cols:"12",md:"6"},{default:s(()=>[t(d,{variant:"tonal",flat:"",color:"error"},{default:s(()=>[t(c,null,{default:s(()=>[e("div",Le,[e("div",Ge,[Ne,qe,t(m,{color:"error"},{default:s(()=>[l(" View Courses ")]),_:1})]),e("div",Ee,[e("div",He,[e("img",{src:a(Ce),height:"127"},null,8,Qe)])])])]),_:1})]),_:1})]),_:1})]),_:1})]),t(d,null,{default:s(()=>[t(c,null,{default:s(()=>[t($,null,{default:s(()=>[t(g,{cols:"12",md:"4"},{default:s(()=>[e("div",We,[t(le,{variant:"tonal",size:"48",rounded:"",color:"primary"},{default:s(()=>[t(x,{icon:"tabler-gift",size:"36"})]),_:1}),Oe,Xe,t(m,null,{default:s(()=>[l("Get Premium Courses")]),_:1})])]),_:1}),t(g,{cols:"12",md:"4",sm:"6"},{default:s(()=>[t(d,{flat:"",border:""},{default:s(()=>[e("div",Ye,[t(a(B),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",controls:"","plays-inline":"",height:i.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["height"])]),t(c,null,{default:s(()=>[Je,Ke]),_:1})]),_:1})]),_:1}),t(g,{cols:"12",md:"4",sm:"6"},{default:s(()=>[t(d,{flat:"",border:""},{default:s(()=>[e("div",Ze,[t(a(B),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",controls:"","plays-inline":"",height:i.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["height"])]),t(c,null,{default:s(()=>[et,tt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{Gt as default};
