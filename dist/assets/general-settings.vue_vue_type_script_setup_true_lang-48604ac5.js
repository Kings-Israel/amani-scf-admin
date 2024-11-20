import{_ as Y}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as y}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import f from"./config-file-43a4f39e.js";import{d as b,l as D,r as i,w as s,o as M,h as x,f as m,b as o,p as n,e as u}from"./index-5caaa453.js";import{V as p}from"./VCol-bcc5388c.js";import{V as C}from"./VSwitch-31612395.js";import{V as S}from"./VRow-e44df108.js";const U=u("h6",{class:"text-h6 font-weight-medium"}," Configurations Details ",-1),E=u("p",{class:"mb-0"}," Enter your Config Details ",-1),F=u("p",null,"Admin Logo",-1),N={class:"pb-5"},P=["src"],T=u("p",null,"Favicon",-1),B={class:"pb-5"},H=["src"],g="Drag and drop your logo here",h="Drag and drop your favicon here",q=b({__name:"general-settings",props:{page_title:{},admin_logo:{},favicon:{},weekly_off:{},date_format:{},contact_no:{},whatsapp_no:{},contact_email:{},logo_url:{},favicon_url:{},admin_maker_checker:{type:Boolean}},emits:["update:page_title","update:admin_logo","update:favicon","update:weekly_off","update:date_format","update:contact_no","update:contact_email","update:whatsapp_no","update:admin_maker_checker"],setup(k,{emit:V}){const d=k,_=V;D();const e=i({page_title:i(d.page_title),admin_logo:i(d.admin_logo),favicon:i(d.favicon),weekly_off:i(d.weekly_off),date_format:i(d.date_format),contact_no:i(d.contact_no),whatsapp_no:i(d.whatsapp_no),contact_email:i(d.contact_email),admin_maker_checker:i(d.admin_maker_checker)}),w=["Saturday","Sunday","Friday - Saturday","Saturday - Sunday","2nd and 4th Saturday and all Sundays"],v=["DD/MM/YYYY (Ex. 12/02/2020)","MM/DD/YYYY (Ex. 02/12/2020)","DD-MM-YYYY (Ex. 12-02-2020)","MM-DD-YYYY (Ex. 02-12-2020)","DD-MMM-YYYY (Ex. 12-Feb-2020)","DD MMM YYYY (Ex. 02 Feb 2020)"];return s(()=>e.value.page_title,l=>_("update:page_title",l)),s(()=>e.value.admin_logo,l=>_("update:admin_logo",l)),s(()=>e.value.favicon,l=>_("update:favicon",l)),s(()=>e.value.weekly_off,l=>_("update:weekly_off",l)),s(()=>e.value.date_format,l=>_("update:date_format",l)),s(()=>e.value.contact_no,l=>_("update:contact_no",l)),s(()=>e.value.whatsapp_no,l=>_("update:whatsapp_no",l)),s(()=>e.value.contact_email,l=>_("update:contact_email",l)),s(()=>e.value.admin_maker_checker,l=>_("update:admin_maker_checker",l)),(l,a)=>{const r=y,c=Y;return M(),x(S,null,{default:m(()=>[o(p,{cols:"12"},{default:m(()=>[U,E]),_:1}),o(p,{cols:"12",md:"12"},{default:m(()=>[o(r,{modelValue:n(e).page_title,"onUpdate:modelValue":a[0]||(a[0]=t=>n(e).page_title=t),placeholder:"Page Title",label:"Page Title"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[F,u("div",N,[u("img",{src:d.logo_url,height:"100",width:"100",alt:""},null,8,P)]),o(f,{file:n(e).admin_logo,"onUpdate:file":a[1]||(a[1]=t=>n(e).admin_logo=t),title:g,"onUpdate:title":a[2]||(a[2]=t=>g=t)},null,8,["file"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[T,u("div",B,[u("img",{src:d.favicon_url,height:"100",width:"100",alt:""},null,8,H)]),o(f,{file:n(e).favicon,"onUpdate:file":a[3]||(a[3]=t=>n(e).favicon=t),title:h,"onUpdate:title":a[4]||(a[4]=t=>h=t)},null,8,["file"])]),_:1}),o(p,{cols:"12",md:"12"},{default:m(()=>[o(C,{modelValue:n(e).admin_maker_checker,"onUpdate:modelValue":a[5]||(a[5]=t=>n(e).admin_maker_checker=t),label:"Enable Maker Checker"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(c,{modelValue:n(e).weekly_off,"onUpdate:modelValue":a[6]||(a[6]=t=>n(e).weekly_off=t),items:w,placeholder:"Select Week Off",label:"Weekly Off",chips:"","closable-chips":""},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(c,{modelValue:n(e).date_format,"onUpdate:modelValue":a[7]||(a[7]=t=>n(e).date_format=t),items:v,placeholder:"Date Format",label:"Select Date Format",chips:"","closable-chips":""},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(r,{modelValue:n(e).contact_no,"onUpdate:modelValue":a[8]||(a[8]=t=>n(e).contact_no=t),placeholder:"Help Page Contact Number",label:"Help Page Contact Number"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(r,{modelValue:n(e).whatsapp_no,"onUpdate:modelValue":a[9]||(a[9]=t=>n(e).whatsapp_no=t),placeholder:"Whatsapp Number",label:"Whatsapp Number"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(r,{modelValue:n(e).contact_email,"onUpdate:modelValue":a[10]||(a[10]=t=>n(e).contact_email=t),placeholder:"Help Page Contact Email",label:"Help Page Contact Email"},null,8,["modelValue"])]),_:1})]),_:1})}}});export{q as _};
