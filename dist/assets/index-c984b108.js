import{f as Me,b as Ee}from"./formatters-92bc75d8.js";import{d as te,r as I,o as u,h as A,f as t,b as e,e as s,a9 as c,p as o,aI as G,a4 as q,x as _,b5 as De,c as w,F as D,j as z,a as ce,t as ue,y as g,A as ie,k as _e,L as P,M as O,a$ as U,z as H,b6 as Le,R as j,w as Te,K as Ae}from"./index-75b434bc.js";import{_ as he}from"./MoreBtn.vue_vue_type_script_setup_true_lang-f1f446b6.js";import{P as me}from"./vue3-perfect-scrollbar.esm-4577c4a2.js";import{_ as ze}from"./TiptapEditor.vue_vue_type_style_index_0_lang-e76d5625.js";import{V as N}from"./VSpacer-6f8dff92.js";import{a as Ie,V as X}from"./VCard-95c0d706.js";import{V as ne}from"./VTextField-05e93cc8.js";import{V as R}from"./VDivider-fc890531.js";import{V as J}from"./VMenu-3f143933.js";import{V as K,a as Y,b as Z}from"./VList-c7d4c8b4.js";import{V as be}from"./VChip-e2ddd660.js";import{V as ee}from"./VBadge-5a0d87a2.js";import{$ as fe}from"./api-0c1dfdf3.js";import{V as L}from"./VTooltip-c5403118.js";import{V as xe}from"./VAvatar-071125b9.js";import{V as re}from"./VImg-ba4b392a.js";import{V as se}from"./VCardText-76f31582.js";import{V as ge}from"./VNavigationDrawer-0a767767.js";import{u as Re,V as Be,a as Ue}from"./VMain-696d1220.js";import{u as Ne}from"./useApi-776c55ea.js";import{c as Fe}from"./createUrl-149317bf.js";import{V as ve}from"./VCheckbox-e2d8e1ba.js";import"./helpers-681711bc.js";import"./index-78b172a6.js";import"./createSimpleFunctional-4b3a0a39.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./form-2b416184.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./dialog-transition-14fdab67.js";import"./ssrBoot-7f224ca6.js";import"./index-2898f57d.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";const Pe={class:"d-flex align-center"},Oe=s("span",{class:"font-weight-medium"},"Compose Mail",-1),je={class:"pe-5"},qe=s("div",{class:"text-sm text-disabled"}," To: ",-1),He=s("span",{class:"cursor-pointer text-primary"},"Cc | Bcc",-1),Ge=s("div",{class:"text-sm text-disabled"}," Subject: ",-1),Je={class:"d-flex align-center px-5 py-4"},Ke=te({__name:"ComposeDialog",emits:["close"],setup(S){const k=I(""),n=I(""),x=I(""),C=I(""),T=I(!1),f=()=>{n.value=x.value=C.value=""};return(M,i)=>{const V=ze;return u(),A(X,{class:"email-compose-dialog",elevation:"24","max-width":"30vw"},{default:t(()=>[e(Ie,{class:"py-3 px-5"},{default:t(()=>[s("div",Pe,[Oe,e(N),e(c,{size:"20",icon:"tabler-minus",class:"me-4",onClick:i[0]||(i[0]=m=>M.$emit("close"))}),e(c,{size:"20",icon:"tabler-x",onClick:i[1]||(i[1]=m=>{M.$emit("close"),f()})})])]),_:1}),s("div",je,[e(ne,{modelValue:o(n),"onUpdate:modelValue":i[2]||(i[2]=m=>G(n)?n.value=m:null),density:"compact"},{"prepend-inner":t(()=>[qe]),append:t(()=>[He]),_:1},8,["modelValue"])]),e(R),e(ne,{modelValue:o(x),"onUpdate:modelValue":i[3]||(i[3]=m=>G(x)?x.value=m:null),density:"compact"},{"prepend-inner":t(()=>[Ge]),_:1},8,["modelValue"]),e(R),e(V,{modelValue:o(k),"onUpdate:modelValue":i[4]||(i[4]=m=>G(k)?k.value=m:null)},null,8,["modelValue"]),e(R),s("div",Je,[e(De,{color:"primary",divided:"",density:"comfortable"},{default:t(()=>[e(q,null,{default:t(()=>[_("Send")]),_:1}),e(q,{icon:"",onClick:i[5]||(i[5]=()=>T.value=!o(T))},{default:t(()=>[e(c,{icon:"tabler-send ",size:"18"}),e(J,{activator:"parent"},{default:t(()=>[e(K,{items:["Schedule Mail","Save Draft"]})]),_:1})]),_:1})]),_:1}),e(c,{icon:"tabler-link",class:"ms-4 cursor-pointer"}),e(N),e(q,{icon:"",variant:"text",color:"default",density:"comfortable"},{default:t(()=>[e(c,{icon:"tabler-dots-vertical",size:"20"})]),_:1}),e(q,{icon:"",variant:"text",color:"default",density:"comfortable",onClick:i[6]||(i[6]=m=>{M.$emit("close"),f()})},{default:t(()=>[e(c,{icon:"tabler-trash",size:"20"})]),_:1})])]),_:1})}}});const Qe={class:"d-flex flex-column h-100"},We={class:"px-6 pb-5 pt-6"},Xe={class:"email-filters"},Ye=["href","onClick"],Ze={class:"font-weight-medium"},et={class:"email-labels"},tt=s("li",{class:"text-xs d-block text-uppercase text-disabled mt-6 mb-2"}," LABELS ",-1),at=["href","onClick"],lt={class:"font-weight-medium"},ot=te({inheritAttrs:!1,__name:"EmailLeftSidebarContent",emits:["toggleComposeDialogVisibility"],setup(S){const k=[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"},badge:{content:"4",color:"primary"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-pencil",to:{name:"apps-email-filter",params:{filter:"draft"}},badge:{content:"2",color:"warning"}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}},badge:{content:"9",color:"success"}},{title:"Spam",prependIcon:"tabler-info-circle",to:{name:"apps-email-filter",params:{filter:"spam"}}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}],n=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(x,C)=>{const T=ce("RouterLink");return u(),w("div",Qe,[s("div",We,[e(q,{block:"",onClick:C[0]||(C[0]=f=>x.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[_(" Compose ")]),_:1})]),e(o(me),{options:{wheelPropagation:!1},class:"h-100"},{default:t(()=>[s("ul",Xe,[(u(),w(D,null,z(k,f=>e(T,{key:f.title,class:"d-flex align-center cursor-pointer",to:f.to,custom:""},{default:t(({isActive:M,href:i,navigate:V})=>{var m;return[s("li",ue({ref_for:!0},x.$attrs,{href:i,class:[M&&"email-filter-active text-primary","d-flex align-center cursor-pointer"],onClick:V}),[e(c,{icon:f.prependIcon,class:"me-2",size:"20"},null,8,["icon"]),s("span",Ze,g(f.title),1),e(N),(m=f.badge)!=null&&m.content?(u(),A(be,{key:0,color:f.badge.color,pill:""},{default:t(()=>[_(g(f.badge.content),1)]),_:2},1032,["color"])):ie("",!0)],16,Ye)]}),_:2},1032,["to"])),64))]),s("ul",et,[tt,(u(),w(D,null,z(n,f=>e(T,{key:f.title,class:"d-flex align-center",to:f.to,custom:""},{default:t(({isActive:M,href:i,navigate:V})=>[s("li",ue({ref_for:!0},x.$attrs,{href:i,class:[M&&"email-label-active text-primary","cursor-pointer"],onClick:V}),[e(ee,{inline:"",dot:"",color:f.color,class:"me-4"},null,8,["color"]),s("span",lt,g(f.title),1)],16,at)]),_:2},1032,["to"])),64))])]),_:1})])}}});const de=()=>{const S=_e(),k=async(i,V)=>{await fe("apps/email",{method:"POST",body:JSON.stringify({ids:i,data:V})})};return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:i=>i==="personal"?"success":i==="company"?"primary":i==="important"?"warning":i==="private"?"error":"secondary",shallShowMoveToActionFor:i=>i==="trash"?S.params.filter!=="trashed":i==="inbox"?!(S.params.filter===void 0||S.params.filter==="sent"||S.params.filter==="draft"):i==="spam"?!(S.params.filter==="spam"||S.params.filter==="sent"||S.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:(i,V)=>{const m={};i==="inbox"?(S.params.filter==="trashed"&&(m.isDeleted=!1),m.folder="inbox"):i==="spam"?(S.params.filter==="trashed"&&(m.isDeleted=!1),m.folder="spam"):i==="trash"&&(m.isDeleted=!0),k(V,m)},updateEmails:k,updateEmailLabels:async(i,V)=>{await fe("/apps/email",{method:"POST",body:{ids:i,label:V}})}}},st={class:"email-view-header d-flex align-center px-5 py-3"},it={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-3"},nt={class:"text-body-1 font-weight-medium text-high-emphasis text-truncate"},rt={class:"d-flex flex-wrap gap-1"},dt={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-5"},ct={class:"d-flex align-center"},mt=s("span",null,"1-10 of 448",-1),pt={class:"d-flex align-center"},ut={class:"d-flex align-start align-sm-center px-6 py-3"},ft={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},vt={class:"text-truncate"},_t={class:"d-block text-high-emphasis font-weight-medium text-truncate"},ht={class:"text-sm text-disabled"},bt={class:"d-flex align-center"},xt={class:"me-2"},gt=["innerHTML"],yt=s("span",null,"2 Attachments",-1),$t=s("div",{class:"text-base"},[_(" Click here to "),s("span",{class:"text-primary cursor-pointer"}," Reply "),_(" or "),s("span",{class:"text-primary cursor-pointer"}," Forward ")],-1),kt=te({__name:"EmailView",props:{email:{},emailMeta:{}},emits:["refresh","navigated","close","trash","unread","read","star","unstar"],setup(S,{emit:k}){const n=S,x=k,{updateEmailLabels:C}=de(),{labels:T,resolveLabelColor:f,emailMoveToFolderActions:M,shallShowMoveToActionFor:i,moveSelectedEmailTo:V}=de(),m=v=>{V(v,[n.email.id]),x("refresh"),x("close")},ae=async v=>{await C([n.email.id],v),x("refresh")};return(v,y)=>{const p=ce("IconBtn"),Q=he;return u(),A(ge,{temporary:"","model-value":!!n.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[n.email?(u(),w(D,{key:0},[s("div",st,[e(p,{class:"me-4",onClick:y[0]||(y[0]=d=>v.$emit("close"))},{default:t(()=>[e(c,{size:"22",icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1}),s("div",it,[s("h2",nt,g(n.email.subject),1),s("div",rt,[(u(!0),w(D,null,z(n.email.labels,d=>(u(),A(be,{key:d,color:o(f)(d),density:"default",class:"px-2 text-capitalize flex-shrink-0 me-2",label:""},{default:t(()=>[_(g(d),1)]),_:2},1032,["color"]))),128))])]),s("div",null,[e(p,null,{default:t(()=>[e(c,{icon:"tabler-printer"})]),_:1}),e(Q,{density:"comfortable",color:"undefined"})])]),e(R),s("div",dt,[P(e(p,{onClick:y[1]||(y[1]=d=>{v.$emit("trash"),v.$emit("close")})},{default:t(()=>[e(c,{icon:"tabler-trash"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:1},512),[[O,!n.email.isDeleted]]),e(p,{onClick:y[2]||(y[2]=U(d=>{v.$emit("unread"),v.$emit("close")},["stop"]))},{default:t(()=>[e(c,{icon:"tabler-mail"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Mark as Unread ")]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(c,{icon:"tabler-folder"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Move to ")]),_:1}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(u(!0),w(D,null,z(o(M),d=>(u(),A(Y,{key:d.title,class:H([o(i)(d.action)?"d-flex":"d-none","align-center"]),href:"#",onClick:h=>m(d.action)},{prepend:t(()=>[e(c,{icon:d.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(Z,{class:"text-capitalize"},{default:t(()=>[_(g(d.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(c,{icon:"tabler-tag"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Label ")]),_:1}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(u(!0),w(D,null,z(o(T),d=>(u(),A(Y,{key:d.title,href:"#",onClick:U(h=>ae(d.title),["stop"])},{prepend:t(()=>[e(ee,{inline:"",color:o(f)(d.title),dot:""},null,8,["color"])]),default:t(()=>[e(Z,{class:"ms-2 text-capitalize"},{default:t(()=>[_(g(d.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(N),s("div",ct,[mt,s("div",pt,[e(p,{disabled:!n.emailMeta.hasPreviousEmail,onClick:y[3]||(y[3]=d=>v.$emit("navigated","previous"))},{default:t(()=>[e(c,{icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1},8,["disabled"]),e(p,{disabled:!n.emailMeta.hasNextEmail,onClick:y[4]||(y[4]=d=>v.$emit("navigated","next"))},{default:t(()=>[e(c,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),_:1},8,["disabled"])])])]),e(R),e(o(me),{tag:"div",class:"mail-content-container flex-grow-1",options:{wheelPropagation:!1}},{default:t(()=>[e(X,{class:"mx-5 my-4"},{default:t(()=>[s("div",ut,[e(xe,{class:"me-3",size:"32"},{default:t(()=>[e(re,{src:n.email.from.avatar,alt:n.email.from.name},null,8,["src","alt"])]),_:1}),s("div",ft,[s("div",vt,[s("span",_t,g(n.email.from.name),1),s("span",ht,g(n.email.from.email),1)]),e(N),s("div",bt,[s("span",xt,g(("formatDate"in v?v.formatDate:o(Me))(n.email.time)),1),P(e(p,null,{default:t(()=>[e(c,{icon:"tabler-paperclip"})]),_:1},512),[[O,n.email.attachments.length]]),e(p,{color:n.email.isStarred?"warning":"default",onClick:y[5]||(y[5]=d=>{var h;(h=n.email)!=null&&h.isStarred?v.$emit("unstar"):v.$emit("star"),v.$emit("refresh")})},{default:t(()=>[e(c,{icon:n.email.isStarred?"tabler-star-filled":"tabler-star"},null,8,["icon"])]),_:1},8,["color"])])]),e(Q,{class:"align-self-sm-center",density:"comfortable",color:"undefined"})]),e(R),e(se,null,{default:t(()=>[s("div",{class:"text-base",innerHTML:n.email.message},null,8,gt)]),_:1}),n.email.attachments.length?(u(),w(D,{key:0},[e(R),e(se,{class:"d-flex flex-column gap-y-4 pt-4"},{default:t(()=>[yt,(u(!0),w(D,null,z(n.email.attachments,d=>(u(),w("div",{key:d.fileName,class:"d-flex align-center"},[e(re,{src:d.thumbnail,alt:d.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),s("span",null,g(d.fileName),1)]))),128))]),_:1})],64)):ie("",!0)]),_:1}),e(X,{class:"mx-5 mb-5"},{default:t(()=>[e(se,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[$t]),_:1})]),_:1})]),_:1})],64)):ie("",!0)]),_:1},8,["model-value"])}}});const Ct={class:"d-flex align-center"},Vt={class:"py-2 px-5 d-flex align-center"},wt=["onClick"],St={class:"mx-3 text-body-1 font-weight-medium text-high-emphasis"},Mt={class:"truncate"},Et={class:"text-disabled text-sm ms-2"},Dt={class:"email-actions d-none"},Lt={class:"py-4 px-5 text-center"},Tt=s("span",{class:"text-high-emphasis"},"No items found.",-1),At=[Tt],ka=te({__name:"index",async setup(S){let k,n;const{isLeftSidebarOpen:x}=Re(),C=_e(),{labels:T,resolveLabelColor:f,emailMoveToFolderActions:M,shallShowMoveToActionFor:i,moveSelectedEmailTo:V,updateEmails:m,updateEmailLabels:ae}=de(),v=I(!1),y=I(""),p=I([]),{data:Q,execute:d}=([k,n]=Le(()=>Ne(Fe("/apps/email",{query:{q:y,filter:()=>"filter"in C.params?C.params.filter:void 0,label:()=>"label"in C.params?C.params.label:void 0}}))),k=await k,n(),k),h=j(()=>Q.value.emails),ye=r=>{const l=p.value.indexOf(r);l===-1?p.value.push(r):p.value.splice(l,1)},le=j(()=>h.value.length&&h.value.length===p.value.length),pe=j(()=>!!p.value.length&&h.value.length!==p.value.length),oe=j(()=>p.value.every(r=>{var l;return(l=h.value.find($=>$.id===r))==null?void 0:l.isRead})),$e=()=>{p.value=le.value?[]:h.value.map(r=>r.id)},b=I(null),ke=j(()=>{const r={hasNextEmail:!1,hasPreviousEmail:!1};if(b.value){const l=h.value.findIndex($=>{var F;return $.id===((F=b.value)==null?void 0:F.id)});r.hasNextEmail=!!h.value[l+1],r.hasPreviousEmail=!!h.value[l-1]}return r}),E=async(r,l=p.value)=>{p.value=[],p.value=[],l.length&&(r==="trash"?await m(l,{isDeleted:!0}):r==="spam"?await m(l,{folder:"spam"}):r==="unread"?await m(l,{isRead:!1}):r==="read"?await m(l,{isRead:!0}):r==="star"?await m(l,{isStarred:!0}):r==="unstar"&&await m(l,{isStarred:!1}),await d())},Ce=r=>{V(r,p.value),d()},Ve=r=>{if(!b.value)return;const l=h.value.findIndex(F=>{var a;return F.id===((a=b.value)==null?void 0:a.id)}),$=r==="previous"?l-1:l+1;b.value=h.value[$]},we=r=>{b.value=r,E("read",[r.id])},Se=async()=>{await d(),b.value&&(b.value=h.value.find(r=>{var l;return r.id===((l=b.value)==null?void 0:l.id)}))};return Te(()=>C.params,()=>{p.value=[]},{deep:!0}),(r,l)=>{const $=ce("IconBtn"),F=he;return u(),A(Ue,{style:{"min-block-size":"100%"},class:"email-app-layout"},{default:t(()=>[e(ge,{modelValue:o(x),"onUpdate:modelValue":l[1]||(l[1]=a=>G(x)?x.value=a:null),absolute:"",touchless:"",location:"start",temporary:r.$vuetify.display.mdAndDown},{default:t(()=>[e(ot,{onToggleComposeDialogVisibility:l[0]||(l[0]=a=>v.value=!o(v))})]),_:1},8,["modelValue","temporary"]),e(kt,{email:o(b),"email-meta":o(ke),onRefresh:Se,onNavigated:Ve,onClose:l[2]||(l[2]=a=>b.value=null),onRemove:l[3]||(l[3]=a=>E("trash",o(b)?[o(b).id]:[])),onUnread:l[4]||(l[4]=a=>E("unread",o(b)?[o(b).id]:[])),onStar:l[5]||(l[5]=a=>E("star",o(b)?[o(b).id]:[])),onUnstar:l[6]||(l[6]=a=>E("unstar",o(b)?[o(b).id]:[]))},null,8,["email","email-meta"]),e(Be,null,{default:t(()=>[e(X,{flat:"",class:"email-content-list h-100 d-flex flex-column"},{default:t(()=>[s("div",Ct,[e($,{class:"d-lg-none ms-3",onClick:l[7]||(l[7]=a=>x.value=!0)},{default:t(()=>[e(c,{icon:"tabler-menu-2"})]),_:1}),e(ne,{modelValue:o(y),"onUpdate:modelValue":l[8]||(l[8]=a=>G(y)?y.value=a:null),density:"default",class:"email-search px-1 flex-grow-1","prepend-inner-icon":"tabler-search",placeholder:"Search email"},null,8,["modelValue"])]),e(R),s("div",Vt,[e(ve,{"model-value":o(le),indeterminate:o(pe),"onUpdate:modelValue":$e},null,8,["model-value","indeterminate"]),s("div",{class:"w-100 d-flex align-center action-bar-actions",style:Ae({visibility:o(pe)||o(le)?void 0:"hidden"})},[P(e($,{onClick:l[9]||(l[9]=a=>E("trash"))},{default:t(()=>[e(c,{icon:"tabler-trash"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:1},512),[[O,"filter"in o(C).params?o(C).params.filter!=="trashed":!0]]),e($,{onClick:l[10]||(l[10]=a=>o(oe)?E("unread"):E("read"))},{default:t(()=>[e(c,{icon:o(oe)?"tabler-mail":"tabler-mail-opened"},null,8,["icon"]),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(g(o(oe)?"Mark as Unread":"Mark as Read"),1)]),_:1})]),_:1}),e($,null,{default:t(()=>[e(c,{icon:"tabler-folder"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Folder ")]),_:1}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(u(!0),w(D,null,z(o(M),a=>(u(),A(Y,{key:a.title,class:H([o(i)(a.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:W=>Ce(a.action)},{prepend:t(()=>[e(c,{icon:a.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(Z,{class:"text-capitalize"},{default:t(()=>[_(g(a.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(c,{icon:"tabler-tag"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Label ")]),_:1}),e(J,{activator:"parent"},{default:t(()=>[e(K,{density:"compact"},{default:t(()=>[(u(!0),w(D,null,z(o(T),a=>(u(),A(Y,{key:a.title,href:"#",onClick:W=>o(ae)(o(p),a.title)},{prepend:t(()=>[e(ee,{inline:"",color:o(f)(a.title),dot:""},null,8,["color"])]),default:t(()=>[e(Z,{class:"ms-2 text-capitalize"},{default:t(()=>[_(g(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(N),e($,{onClick:o(d)},{default:t(()=>[e(c,{icon:"tabler-reload"})]),_:1},8,["onClick"]),e(F,{density:"comfortable",color:"undefined"})]),e(R),e(o(me),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(u(!0),w(D,null,z(o(h),a=>{var W;return P((u(),w("li",{key:a.id,class:H(["email-item d-flex align-center py-2 px-5 cursor-pointer",[{"email-read":a.isRead}]]),onClick:B=>we(a)},[e(ve,{"model-value":o(p).includes(a.id),class:"flex-shrink-0","onUpdate:modelValue":B=>ye(a.id),onClick:l[11]||(l[11]=U(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e($,{color:a.isStarred?"warning":"default",onClick:U(B=>E(a.isStarred?"unstar":"star",[a.id]),["stop"])},{default:t(()=>[e(c,{icon:a.isStarred?"tabler-star-filled":"tabler-star",class:H(a.isStarred?"":"text-disabled")},null,8,["icon","class"])]),_:2},1032,["color","onClick"]),e(xe,{class:"mx-2",size:"32"},{default:t(()=>[e(re,{src:a.from.avatar,alt:a.from.name},null,8,["src","alt"])]),_:2},1024),s("h6",St,g(a.from.name),1),s("span",Mt,g(a.subject),1),e(N),s("div",{class:H(["email-meta",r.$vuetify.display.xs?"d-none":""])},[(u(!0),w(D,null,z(a.labels,B=>(u(),A(ee,{key:B,inline:"",color:o(f)(B),dot:""},null,8,["color"]))),128)),s("small",Et,g(("formatDateToMonthShort"in r?r.formatDateToMonthShort:o(Ee))(a.time)),1)],2),s("div",Dt,[e($,{onClick:U(B=>E("trash",[a.id]),["stop"])},{default:t(()=>[e(c,{icon:"tabler-trash"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:2},1032,["onClick"]),e($,{onClick:U(B=>E(a.isRead?"unread":"read",[a.id]),["stop"])},{default:t(()=>[e(c,{icon:a.isRead?"tabler-mail":"tabler-mail-opened"},null,8,["icon"]),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(g(a.isRead?"Mark as Unread":"Mark as Read"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e($,{onClick:U(B=>E("spam",[a.id]),["stop"])},{default:t(()=>[e(c,{icon:"tabler-alert-octagon"}),e(L,{activator:"parent",location:"top"},{default:t(()=>[_(" Move to Spam ")]),_:1})]),_:2},1032,["onClick"])])],10,wt)),[[O,(W=o(h))==null?void 0:W.length]])}),128)),P(s("li",Lt,At,512),[[O,!o(h).length]])]),_:1})]),_:1}),P(e(Ke,{onClose:l[12]||(l[12]=a=>v.value=!1)},null,512),[[O,o(v)]])]),_:1})]),_:1})}}});export{ka as default};