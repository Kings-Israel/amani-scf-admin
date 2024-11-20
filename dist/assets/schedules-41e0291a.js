import{_ as ne}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import{i as de,a as ue,b as pe,c as ce,F as me}from"./index-f90239cf.js";import{r as N,u as ve}from"./validators-db74a876.js";import{bi as fe,d as re,am as Ve,r as k,w as R,b6 as Y,R as T,I as z,b4 as B,o as U,h as L,f as s,b as l,L as W,M as K,p as t,a9 as ge,a$ as be,e as S,y as ye,z as _e,a4 as J,x as G,aM as Q,a as Ce,ax as De,bY as Ee,dh as we,c as X,aI as Z,F as he,j as xe,aR as Se,aS as ke}from"./index-5caaa453.js";import{_ as Pe}from"./AppTextarea.vue_vue_type_script_setup_true_lang-bddf1338.js";import{_ as Te}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as Ue}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as Oe}from"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-be308735.js";import{P as Ie}from"./vue3-perfect-scrollbar.esm-ba9c318d.js";import{$ as F}from"./api-44dd0fa9.js";import{u as ee}from"./useApi-c9327355.js";import{c as te}from"./createUrl-3e678c2b.js";import{V as j}from"./VCard-1a5b2c5e.js";import{V as $e}from"./VCardText-3b4da816.js";import{V as Ae}from"./VForm-ed4803d2.js";import{V as Me}from"./VRow-e44df108.js";import{V as E}from"./VCol-bcc5388c.js";import{V as Ne}from"./VBadge-7defb6dc.js";import{V as Fe}from"./VSwitch-31612395.js";import{V as se}from"./VNavigationDrawer-edab2f77.js";import{u as Be,a as Le,V as Re}from"./VMain-e47c59cb.js";import{V as ae}from"./VDivider-d40713ce.js";import{V as le}from"./VCheckbox-4131d654.js";import{_ as qe}from"./_plugin-vue_export-helper-c27b6911.js";import"./VField-6b3808ed.js";import"./form-c9c578a3.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./transition-1886cce0.js";import"./helpers-681711bc.js";import"./VTextarea-92d5209d.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./forwardRefs-8348545e.js";import"./index-7dd1f5f0.js";import"./VSelect-f0a443ce.js";import"./VTextField-604d91ff.js";import"./VList-4b1bf96e.js";import"./ssrBoot-2696bccc.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./dialog-transition-1ae6ec72.js";import"./VMenu-97c48b4e.js";import"./VOverlay-da001e16.js";import"./lazy-9cd674a5.js";import"./scopeId-484eb469.js";import"./VCheckboxBtn-1d552264.js";import"./VSelectionControl-e0df1dbd.js";import"./VChip-49676f7d.js";import"./VSpacer-a56288e5.js";import"./index-2898f57d.js";/* empty css              */const H=fe("calendar",{state:()=>({availableCalendars:[{color:"error",label:"Physical Meetings"},{color:"primary",label:"Online Meetings"},{color:"primary",label:"Corporate Events"},{color:"warning",label:"Follow ups"},{color:"success",label:"Activity"},{color:"info",label:"ETC"}],selectedCalendars:["Physical Meetings","Online Meetings","Corporate Events","Follow ups","Activity","ETC"]}),actions:{async fetchEvents(){return(await F("/all/UI/data/followups",{method:"GET",query:{calendars:this.selectedCalendars}})).data??[]},async addEvent(u){await F("/post/UI/event",{method:"POST",body:u})},async updateEvent(u){return await F(`/apps/calendar/${u.id}`,{method:"PUT",body:u})},async removeEvent(u){return await F(`/apps/calendar/${u}`,{method:"DELETE"})}}}),Je=re({__name:"CalendarEventHandler",props:{isDrawerOpen:{type:Boolean},id:{},event:{}},emits:["update:isDrawerOpen","addEvent","updateEvent","removeEvent"],async setup(u,{emit:m}){let g,b;const c=u,v=m,_=Ve(c,"id"),h=H(),C=k(),e=k(JSON.parse(JSON.stringify(c.event))),P=()=>{e.value=JSON.parse(JSON.stringify(c.event)),Q(()=>{var o;(o=C.value)==null||o.resetValidation()})};R(()=>c.isDrawerOpen,P);const O=()=>{v("removeEvent",String(e.value.id)),v("update:isDrawerOpen",!1)},D=()=>{var o;(o=C.value)==null||o.validate().then(({valid:n})=>{n&&("id"in e.value?v("updateEvent",e.value):v("addEvent",e.value),v("update:isDrawerOpen",!1))})},{data:f,execute:d}=([g,b]=Y(()=>ee(te("/get/lead/names"))),g=await g,b(),g),{data:x,execute:p}=([g,b]=Y(()=>ee(te("/get/UI/invited/guest"))),g=await g,b(),g),I=T(()=>!x.value||!x.value.data?[]:x.value.data);T(()=>f.value),d(),p();const a=()=>{v("update:isDrawerOpen",!1),Q(()=>{var o,n;(o=C.value)==null||o.reset(),P(),(n=C.value)==null||n.resetValidation()})},i=T(()=>{const o={enableTime:!e.value.allDay,dateFormat:`Y-m-d${e.value.allDay?"":" H:i"}`};return e.value.end&&(o.maxDate=e.value.end),o}),V=T(()=>{const o={enableTime:!e.value.allDay,dateFormat:`Y-m-d${e.value.allDay?"":" H:i"}`};return e.value.start&&(o.minDate=e.value.start),o}),y=o=>{v("update:isDrawerOpen",o)};return T({get(){return _.value===0?e.value.title:_.value},set(o){console.log("Value",o),_.value?e.value.title=String(_.value):e.value.title=String(o)}}),z(()=>{const o=B("scheduleIDCookie").value;o&&(_.value=Number(o),e.value.title=String(_.value))}),(o,n)=>{const w=Ce("IconBtn"),q=Oe,$=Ue,A=Te,M=ne,ie=Pe;return U(),L(se,{"model-value":c.isDrawerOpen,class:"scrollable-content",location:"end",temporary:"",width:"420","onUpdate:modelValue":y},{default:s(()=>[l(q,{title:t(e).id?"Update Event":"Add Event",onCancel:n[0]||(n[0]=r=>o.$emit("update:isDrawerOpen",!1))},{beforeClose:s(()=>[W(l(w,{onClick:O},{default:s(()=>[l(ge,{icon:"tabler-trash",size:"18"})]),_:1},512),[[K,t(e).id]])]),_:1},8,["title"]),l(t(Ie),{options:{wheelPropagation:!1}},{default:s(()=>[l(j,{flat:""},{default:s(()=>[l($e,null,{default:s(()=>[l(t(Ae),{ref_key:"refForm",ref:C,onSubmit:be(D,["prevent"])},{default:s(()=>[l(Me,null,{default:s(()=>[l(E,{cols:"12"},{default:s(()=>[l($,{modelValue:t(e).title,"onUpdate:modelValue":n[1]||(n[1]=r=>t(e).title=r),label:"Title",placeholder:"Meeting with Jane",rules:["requiredValidator"in o?o.requiredValidator:t(N)]},null,8,["modelValue","rules"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l(A,{modelValue:t(e).extendedProps.calendar,"onUpdate:modelValue":n[2]||(n[2]=r=>t(e).extendedProps.calendar=r),"item-title":r=>r.label,"item-value":r=>r.label,items:t(h).availableCalendars,rules:["requiredValidator"in o?o.requiredValidator:t(N)],label:"Type of Event",placeholder:"Select type of Event"},{selection:s(({item:r})=>[W(S("div",{class:_e([t(e).extendedProps.calendar?"d-flex":"","align-center"])},[l(Ne,{color:r.raw.color,class:"pa-1 pb-2",dot:"",inline:""},null,8,["color"]),S("span",null,ye(r.raw.label),1)],2),[[K,t(e).extendedProps.calendar]])]),_:1},8,["modelValue","item-title","item-value","items","rules"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[(U(),L(M,{key:JSON.stringify(t(i)),modelValue:t(e).start,"onUpdate:modelValue":n[3]||(n[3]=r=>t(e).start=r),config:t(i),rules:["requiredValidator"in o?o.requiredValidator:t(N)],label:"Start date",placeholder:"Select Date"},null,8,["modelValue","config","rules"]))]),_:1}),l(E,{cols:"12"},{default:s(()=>[(U(),L(M,{key:JSON.stringify(t(V)),modelValue:t(e).end,"onUpdate:modelValue":n[4]||(n[4]=r=>t(e).end=r),config:t(V),rules:["requiredValidator"in o?o.requiredValidator:t(N)],label:"End date",placeholder:"Select End Date"},null,8,["modelValue","config","rules"]))]),_:1}),l(E,{cols:"12"},{default:s(()=>[l(Fe,{modelValue:t(e).allDay,"onUpdate:modelValue":n[5]||(n[5]=r=>t(e).allDay=r),label:"All day"},null,8,["modelValue"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l($,{modelValue:t(e).url,"onUpdate:modelValue":n[6]||(n[6]=r=>t(e).url=r),rules:["urlValidator"in o?o.urlValidator:t(ve)],label:"Event URL",placeholder:"https://event.com/meeting",type:"url"},null,8,["modelValue","rules"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l(A,{modelValue:t(e).extendedProps.guests,"onUpdate:modelValue":n[7]||(n[7]=r=>t(e).extendedProps.guests=r),"item-title":r=>r.name,"item-value":r=>r.name,items:t(I),chips:"",eager:"",label:"Guests",multiple:"",placeholder:"Select Lead"},null,8,["modelValue","item-title","item-value","items"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l($,{modelValue:t(e).extendedProps.location,"onUpdate:modelValue":n[8]||(n[8]=r=>t(e).extendedProps.location=r),label:"Location",placeholder:"Meeting room"},null,8,["modelValue"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l(ie,{modelValue:t(e).extendedProps.description,"onUpdate:modelValue":n[9]||(n[9]=r=>t(e).extendedProps.description=r),label:"Description",placeholder:"Meeting description"},null,8,["modelValue"])]),_:1}),l(E,{cols:"12"},{default:s(()=>[l(J,{class:"me-3",type:"submit"},{default:s(()=>[G(" Submit ")]),_:1}),l(J,{color:"secondary",variant:"outlined",onClick:a},{default:s(()=>[G(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),oe={title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:void 0,guests:[],location:"",description:""}},Ge=(u,m,g)=>{const b=De(),c=H(),v=k(),_={PhysicalMeetings:"primary",OnlineMeetings:"success",CorporateEvents:"info",FollowUp:"error",Activity:"warning",ETC:"info"},h=a=>{const{id:i,title:V,start:y,end:o,url:n,extendedProps:{calendar:w,guests:q,location:$,description:A},allDay:M}=a;return{id:i,title:V,start:y,end:o,url:n,extendedProps:{calendar:w,guests:q,location:$,description:A},allDay:M}};typeof process<"u"&&process.server&&c.fetchEvents();const C=(a,i)=>{a&&c.fetchEvents().then(V=>{i(V.map(y=>({...y,start:new Date(y.start),end:new Date(y.end)})))}).catch(V=>{console.error("Error occurred while fetching calendar events",V)})},e=k(null),P=(a,i,V)=>{var o;const y=(o=e.value)==null?void 0:o.getEventById(String(a.id));if(!y){console.warn("Can't found event in calendar to update");return}for(let n=0;n<i.length;n++){const w=i[n];y.setProp(w,a[w])}y.setDates(a.start,a.end,{allDay:a.allDay});for(let n=0;n<V.length;n++){const w=V[n];y.setExtendedProp(w,a.extendedProps[w])}},O=a=>{var V;const i=(V=e.value)==null?void 0:V.getEventById(a);i&&i.remove()},D=()=>{var a;(a=e.value)==null||a.refetchEvents()};R(()=>c.selectedCalendars,D);const f=a=>{c.addEvent(a).then(()=>{D()})},d=a=>{c.updateEvent(a).then(i=>{P(i,["id","title","url"],["calendar","guests","location","description"])}),D()},x=a=>{c.removeEvent(a).then(()=>{O(a)})},p={plugins:[de,ue,pe,ce],initialView:"dayGridMonth",headerToolbar:{start:"drawerToggler,prev,next title",end:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},events:C,forceEventDuration:!0,editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames({event:a}){const i=_[a._def.extendedProps.calendar];return[`bg-light-${i} text-${i}`]},eventClick({event:a}){u.value=h(a),m.value=!0},dateClick(a){u.value={...u.value,start:a.date},m.value=!0},eventDrop({event:a}){d(h(a))},eventResize({event:a}){a.start&&a.end&&d(h(a))},customButtons:{drawerToggler:{text:"calendarDrawerToggler",click(){g.value=!0}}}};z(()=>{e.value=v.value.getApi()});const I=a=>{var i;(i=e.value)==null||i.gotoDate(new Date(a))};return R(()=>b.isAppRTL,a=>{var i;(i=e.value)==null||i.setOption("direction",a?"rtl":"ltr")},{immediate:!0}),{refCalendar:v,calendarOptions:p,refetchEvents:D,fetchEvents:C,addEvent:f,updateEvent:d,removeEvent:x,jumpToDate:I}},je=u=>(Se("data-v-878b4e70"),u=u(),ke(),u),ze={style:{margin:"1.4rem"}},He={class:"d-flex align-center justify-center pa-2 mb-3"},Ye={class:"pa-7"},We=je(()=>S("p",{class:"text-sm text-uppercase text-disabled mb-3"}," FILTER ",-1)),Ke={class:"d-flex flex-column calendars-checkbox"},Qe=re({__name:"schedules",setup(u){const m=H(),g=k(structuredClone(oe)),b=k(!1),c=k(0);R(b,f=>{f||(g.value=structuredClone(oe))});const{isLeftSidebarOpen:v}=Be(),{refCalendar:_,calendarOptions:h,addEvent:C,updateEvent:e,removeEvent:P,jumpToDate:O}=Ge(g,b,v),D=T({get:()=>m.selectedCalendars.length===m.availableCalendars.length,set:f=>{f?m.selectedCalendars=m.availableCalendars.map(d=>d.label):m.selectedCalendars.length===m.availableCalendars.length&&(m.selectedCalendars=[])}});return Ee(()=>{const f=B("scheduleIDCookie").value;f&&(b.value=!0,c.value=Number(f))}),z(()=>{const f=B("scheduleIDCookie").value;f&&(b.value=!0,c.value=Number(f))}),we(()=>{B("scheduleIDCookie").value=null}),(f,d)=>{const x=ne;return U(),X("div",null,[l(j,null,{default:s(()=>[l(Le,{style:{"z-index":"0"}},{default:s(()=>[l(se,{modelValue:t(v),"onUpdate:modelValue":d[4]||(d[4]=p=>Z(v)?v.value=p:null),temporary:f.$vuetify.display.mdAndDown,absolute:"",class:"calendar-add-event-drawer",location:"start",touchless:"",width:"292"},{default:s(()=>[S("div",ze,[l(J,{block:"","prepend-icon":"tabler-plus",onClick:d[0]||(d[0]=p=>b.value=!0)},{default:s(()=>[G(" Add event ")]),_:1})]),l(ae),S("div",He,[l(x,{config:{inline:!0},"model-value":new Date().toJSON().slice(0,10),class:"calendar-date-picker",onInput:d[1]||(d[1]=p=>t(O)(p.target.value))},null,8,["model-value"])]),l(ae),S("div",Ye,[We,S("div",Ke,[l(le,{modelValue:t(D),"onUpdate:modelValue":d[2]||(d[2]=p=>Z(D)?D.value=p:null),label:"View all"},null,8,["modelValue"]),(U(!0),X(he,null,xe(t(m).availableCalendars,p=>(U(),L(le,{key:p.label,modelValue:t(m).selectedCalendars,"onUpdate:modelValue":d[3]||(d[3]=I=>t(m).selectedCalendars=I),color:p.color,label:p.label,value:p.label},null,8,["modelValue","color","label","value"]))),128))])])]),_:1},8,["modelValue","temporary"]),l(Re,null,{default:s(()=>[l(j,{flat:""},{default:s(()=>[l(t(me),{ref_key:"refCalendar",ref:_,options:t(h)},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}),l(Je,{id:c.value,isDrawerOpen:b.value,"onUpdate:isDrawerOpen":d[5]||(d[5]=p=>b.value=p),event:g.value,onAddEvent:t(C),onUpdateEvent:t(e),onRemoveEvent:t(P)},null,8,["id","isDrawerOpen","event","onAddEvent","onUpdateEvent","onRemoveEvent"])])}}});const Qt=qe(Qe,[["__scopeId","data-v-878b4e70"]]);export{Qt as default};
