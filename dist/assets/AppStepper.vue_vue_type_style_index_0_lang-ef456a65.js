import{V as A}from"./VSlideGroup-1fe3f4d3.js";import{V as C}from"./VSlideGroupItem-01cf7141.js";import{d as w,r as B,R as f,cl as N,o as t,h as c,f as d,c as r,j,F as g,p as l,aI as E,z as h,e as o,b as z,a9 as u,y as n,A as _,a4 as V,K as I}from"./index-5caaa453.js";const F=["onClick"],G={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center gap-2"},L={class:"stepper-icon"},R={class:"stepper-title font-weight-medium mb-0"},$={key:0,class:"stepper-subtitle"},D={class:"text-sm"},H={key:1,class:"d-flex align-center gap-x-4"},K={class:"d-flex align-center gap-2"},O={class:"d-flex align-center justify-center"},U={class:"text-h5",style:{color:"rgb(var(--v-theme-primary))"}},q={class:"d-flex flex-column justify-center"},J={class:"step-title font-weight-medium"},M={key:0,class:"step-subtitle text-sm text-disabled"},P={key:0,class:"stepper-step-line"},Y=w({__name:"AppStepper",props:{items:{},currentStep:{default:0},direction:{default:"horizontal"},iconSize:{default:52},isActiveStepValid:{type:Boolean,default:void 0},align:{default:"center"}},emits:["update:currentStep"],setup(k,{emit:b}){const e=k,m=b,s=B(e.currentStep||0),x=f(()=>p=>p<s.value?"stepper-steps-completed":p===s.value?"stepper-steps-active":""),y=f(()=>p=>e.direction==="horizontal"&&e.items.length-1!==p),v=f(()=>e.isActiveStepValid!==void 0);return N(()=>{e.currentStep!==void 0&&e.currentStep<e.items.length&&e.currentStep>=0&&(s.value=e.currentStep),m("update:currentStep",s.value)}),(p,S)=>(t(),c(A,{modelValue:l(s),"onUpdate:modelValue":S[0]||(S[0]=a=>E(s)?s.value=a:null),class:h(["app-stepper",`app-stepper-${e.align}`]),"show-arrows":"",direction:e.direction},{default:d(()=>[(t(!0),r(g,null,j(e.items,(a,i)=>(t(),c(C,{key:a.title,value:i},{default:d(()=>[o("div",{class:h(["cursor-pointer mx-1",[!e.isActiveStepValid&&l(v)&&"stepper-steps-invalid",l(x)(i)]]),onClick:Q=>!l(v)&&m("update:currentStep",i)},[a.icon?(t(),r("div",G,[o("div",{class:h(["d-flex align-center gap-4 step-wrapper",[e.direction==="horizontal"&&"flex-column"]])},[o("div",L,[z(u,{icon:a.icon,size:a.size||e.iconSize},null,8,["icon","size"])]),o("div",null,[o("p",R,n(a.title),1),a.subtitle?(t(),r("span",$,[o("span",D,n(a.subtitle),1)])):_("",!0)])],2),l(y)(i)?(t(),c(u,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"24",icon:"tabler-chevron-right"})):_("",!0)])):(t(),r("div",H,[o("div",K,[o("div",O,[i>=l(s)?(t(),r(g,{key:0},[!l(v)||e.isActiveStepValid||i!==l(s)?(t(),c(V,{key:0,size:"40",variant:i===l(s)?"elevated":"tonal",color:i===l(s)?"primary":"default"},{default:d(()=>[o("h5",{class:"text-h5",style:I(i===l(s)?{color:"#fff"}:"")},n(i+1),5)]),_:2},1032,["variant","color"])):(t(),c(u,{key:1,icon:"tabler-alert-circle",size:"24",color:"error"}))],64)):(t(),c(V,{key:1,class:"stepper-icon",variant:"tonal",color:"primary",size:"40"},{default:d(()=>[o("h5",U,n(i+1),1)]),_:2},1024))])]),o("div",q,[o("div",J,n(a.title),1),a.subtitle?(t(),r("div",M,n(a.subtitle),1)):_("",!0)]),l(y)(i)?(t(),r("div",P,[z(u,{icon:"tabler-chevron-right",size:"24"})])):_("",!0)]))],10,F)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction","class"]))}});export{Y as _};
