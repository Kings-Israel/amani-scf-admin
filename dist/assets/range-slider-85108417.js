import{m as ee,u as le,a as ae,V as te,b as E,g as X}from"./VSliderTrack-e6e272f0.js";import{m as se,V as q}from"./VInput-e87890b4.js";import{m as oe,u as ue,V as ne}from"./form-c9c578a3.js";import{N as re,aj as ie,r as b,av as de,au as ce,R as G,X as me,b as a,F as pe,t as ve,d as S,o as R,h as k,p as w,aI as x,f as i,a9 as fe,e as d,x as v}from"./index-5caaa453.js";import{_ as Ve}from"./AppCardCode.vue_vue_type_style_index_0_lang-afde834d.js";import{V as $}from"./VCol-bcc5388c.js";import{V as be}from"./VRow-e44df108.js";import"./transition-1886cce0.js";import"./VCard-1a5b2c5e.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./index-7dd1f5f0.js";import"./VCardText-3b4da816.js";import"./VDivider-d40713ce.js";/* empty css              */const _e=re({...oe(),...se(),...ee(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=ie()({name:"VRangeSlider",props:_e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=b(),n=b(),g=b(),{rtlClasses:I}=de();function M(c){if(!l.value||!n.value)return;const f=X(c,l.value.$el,e.direction),m=X(c,n.value.$el,e.direction),r=Math.abs(f),p=Math.abs(m);return r<p||r===p&&f<0?l.value.$el:n.value.$el}const B=le(e),t=ce(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(f=>B.roundValue(f)):[0,0]),{activeThumbRef:V,hasLabels:H,max:L,min:z,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:N,trackContainerRef:Z}=ae({props:e,steps:B,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:f}=c;const m=V.value===((r=l.value)==null?void 0:r.$el)?[f,t.value[1]]:[t.value[0],f];!e.strict&&m[0]<m[1]&&(t.value=m),o("end",t.value)},onSliderMove:c=>{var p,_,D,T;let{value:f}=c;const[m,r]=t.value;!e.strict&&m===r&&m!==z.value&&(V.value=f>m?(p=n.value)==null?void 0:p.$el:(_=l.value)==null?void 0:_.$el,(D=V.value)==null||D.focus()),V.value===((T=l.value)==null?void 0:T.$el)?t.value=[Math.min(f,r),r]:t.value=[m,Math.max(m,f)]},getActiveThumb:M}),{isFocused:j,focus:A,blur:O}=ue(e),W=G(()=>N(t.value[0])),Y=G(()=>N(t.value[1]));return me(()=>{const[c,f]=q.filterProps(e),m=!!(e.label||u.label||u.prepend);return a(q,ve({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||H.value,"v-slider--focused":j.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},I.value,e.class],style:e.style,ref:g},c,{focused:j.value}),{...u,prepend:m?r=>{var p,_;return a(pe,null,[((p=u.label)==null?void 0:p.call(u,r))??(e.label?a(ne,{class:"v-slider__label",text:e.label},null):void 0),(_=u.prepend)==null?void 0:_.call(u,r)])}:void 0,default:r=>{var D,T;let{id:p,messagesId:_}=r;return a("div",{class:"v-slider__container",onMousedown:K,onTouchstartPassive:Q},[a("input",{id:`${p.value}_start`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${p.value}_stop`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(te,{ref:Z,start:W.value,stop:Y.value},{"tick-label":u["tick-label"]}),a(E,{ref:l,"aria-describedby":_.value,focused:j&&V.value===((D=l.value)==null?void 0:D.$el),modelValue:t.value[0],"onUpdate:modelValue":h=>t.value=[h,t.value[1]],onFocus:h=>{var C,F,P,U;A(),V.value=(C=l.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[1]===z.value&&h.relatedTarget!==((F=n.value)==null?void 0:F.$el)&&((P=l.value)==null||P.$el.blur(),(U=n.value)==null||U.$el.focus())},onBlur:()=>{O(),V.value=void 0},min:z.value,max:t.value[1],position:W.value},{"thumb-label":u["thumb-label"]}),a(E,{ref:n,"aria-describedby":_.value,focused:j&&V.value===((T=n.value)==null?void 0:T.$el),modelValue:t.value[1],"onUpdate:modelValue":h=>t.value=[t.value[0],h],onFocus:h=>{var C,F,P,U;A(),V.value=(C=n.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[0]===L.value&&h.relatedTarget!==((F=l.value)==null?void 0:F.$el)&&((P=n.value)==null||P.$el.blur(),(U=l.value)==null||U.$el.focus())},onBlur:()=>{O(),V.value=void 0},min:t.value[0],max:L.value,position:Y.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),ge=S({__name:"DemoRangeSliderVertical",setup(e){const s=b([20,40]);return(u,o)=>(R(),k(y,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),he=S({__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=b([1,2]);return(l,n)=>(R(),k(y,{modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=g=>x(o)?o.value=g:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:g})=>[a(fe,{icon:u[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),Se=S({__name:"DemoRangeSliderStep",setup(e){const s=b([20,40]);return(u,o)=>(R(),k(y,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),Re=S({__name:"DemoRangeSliderColor",setup(e){const s=b([10,60]);return(u,o)=>(R(),k(y,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}}),ke=S({__name:"DemoRangeSliderDisabled",setup(e){const s=b([30,60]);return(u,o)=>(R(),k(y,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),$e=S({__name:"DemoRangeSliderBasic",setup(e){const s=b([10,60]);return(u,o)=>(R(),k(y,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null)},null,8,["modelValue"]))}}),we={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Te={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Ce={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Pe=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1),Ue=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Be=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),je=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Ie=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ze=S({__name:"range-slider",setup(e){return(s,u)=>{const o=$e,l=Ve,n=ke,g=Re,I=Se,M=he,B=ge;return R(),k(be,null,{default:i(()=>[a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:we},{default:i(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:ye},{default:i(()=>[Pe,a(n)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:xe},{default:i(()=>[Ue,a(g)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:De},{default:i(()=>[Be,a(I)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:Te},{default:i(()=>[je,a(M)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:Ce},{default:i(()=>[Ie,a(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ze as default};
