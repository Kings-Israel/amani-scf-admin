import{N as M,at as J,cJ as O,aj as R,bu as U,R as z,Q as Y,r as $,X as D,a4 as w,b as g,t as V,bD as q,ah as F,au as K,bJ as Q,al as W,am as o,aw as L,cK as Z,V as p}from"./index-5caaa453.js";import{a as ee,s as te}from"./easing-9f15041e.js";import{m as ae,V as E}from"./VSlideGroup-1fe3f4d3.js";const G=Symbol.for("vuetify:v-tabs"),se=M({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...J(O({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),oe=R()({name:"VTab",props:se(),setup(e,t){let{slots:l,attrs:b}=t;const{textColorClasses:y,textColorStyles:h}=U(e,"sliderColor"),a=z(()=>e.direction==="horizontal"),c=Y(!1),f=$(),s=$();function _(x){var T,k;let{value:u}=x;if(c.value=u,u){const C=(k=(T=f.value)==null?void 0:T.$el.parentElement)==null?void 0:k.querySelector(".v-tab--selected .v-tab__slider"),S=s.value;if(!C||!S)return;const N=getComputedStyle(C).color,n=C.getBoundingClientRect(),r=S.getBoundingClientRect(),m=a.value?"x":"y",v=a.value?"X":"Y",B=a.value?"right":"bottom",i=a.value?"width":"height",X=n[m],j=r[m],d=X>j?n[B]-r[B]:n[m]-r[m],A=Math.sign(d)>0?a.value?"right":"bottom":Math.sign(d)<0?a.value?"left":"top":"center",H=(Math.abs(d)+(Math.sign(d)<0?n[i]:r[i]))/Math.max(n[i],r[i])||0,I=n[i]/r[i]||0,P=1.5;ee(S,{backgroundColor:[N,"currentcolor"],transform:[`translate${v}(${d}px) scale${v}(${I})`,`translate${v}(${d/P}px) scale${v}(${(H-1)/P+1})`,"none"],transformOrigin:Array(3).fill(A)},{duration:225,easing:te})}}return D(()=>{const[x]=w.filterProps(e);return g(w,V({symbol:G,ref:f,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},x,b,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":_}),{default:()=>{var u;return[((u=l.default)==null?void 0:u.call(l))??e.text,!e.hideSlider&&g("div",{ref:s,class:["v-tab__slider",y.value],style:h.value},null)]}})}),{}}});function le(e){return e?e.map(t=>Z(t)?t:{text:t,value:t}):[]}const ne=M({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ae({mandatory:"force"}),...q(),...F()},"VTabs"),ue=R()({name:"VTabs",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const b=K(e,"modelValue"),y=z(()=>le(e.items)),{densityClasses:h}=Q(e),{backgroundColorClasses:a,backgroundColorStyles:c}=W(o(e,"bgColor"));return L({VTab:{color:o(e,"color"),direction:o(e,"direction"),stacked:o(e,"stacked"),fixed:o(e,"fixedTabs"),sliderColor:o(e,"sliderColor"),hideSlider:o(e,"hideSlider")}}),D(()=>{const[f]=E.filterProps(e);return g(E,V(f,{modelValue:b.value,"onUpdate:modelValue":s=>b.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,a.value,e.class],style:[{"--v-tabs-height":p(e.height)},c.value,e.style],role:"tablist",symbol:G}),{default:()=>[l.default?l.default():y.value.map(s=>g(oe,V(s,{key:s.text}),null))]})}),{}}});export{ue as V,oe as a};