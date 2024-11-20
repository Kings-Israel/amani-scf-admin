import{V as r}from"./VSwitch-31612395.js";import{d as w,r as m,o as h,c as v,b as t,p as n,aI as p,h as b,f as d,x as i,b7 as y,e as a,y as L,F as _,j as $}from"./index-5caaa453.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-afde834d.js";import{V as f}from"./VCol-bcc5388c.js";import{V as C}from"./VRow-e44df108.js";import"./VInput-e87890b4.js";import"./form-c9c578a3.js";import"./transition-1886cce0.js";import"./VSelectionControl-e0df1dbd.js";import"./VCard-1a5b2c5e.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./index-7dd1f5f0.js";import"./VCardText-3b4da816.js";import"./VDivider-d40713ce.js";/* empty css              */const U={class:"demo-space-x"},T=w({__name:"DemoSwitchStates",setup(S){const e=m("on"),o=m("on"),c=m("on");return(l,s)=>(h(),v("div",U,[t(r,{modelValue:n(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),t(r,{label:"Off"}),t(r,{modelValue:n(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),t(r,{disabled:"",label:"Off disabled"}),t(r,{modelValue:n(c),"onUpdate:modelValue":s[2]||(s[2]=u=>p(c)?c.value=u:null),loading:"warning",value:"on",label:"On loading"},null,8,["modelValue"]),t(r,{loading:"warning",label:"Off loading"})]))}}),J={class:"demo-space-x"},A=w({__name:"DemoSwitchTrueAndFalseValue",setup(S){const e=m(1),o=m("Show");return(c,l)=>(h(),v("div",J,[t(r,{modelValue:n(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),label:n(e).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),t(r,{modelValue:n(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),label:n(o).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}}),F=w({__name:"DemoSwitchLabelSlot",setup(S){const e=m(!1);return(o,c)=>(h(),b(r,{modelValue:n(e),"onUpdate:modelValue":c[0]||(c[0]=l=>p(e)?e.value=l:null)},{label:d(()=>[i(" Turn on the progress: "),t(y,{indeterminate:n(e),class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}}),M={class:"demo-space-x"},I={class:"mt-2 mb-0"},P=w({__name:"DemoSwitchModelAsArray",setup(S){const e=m(["John"]);return(o,c)=>(h(),v(_,null,[a("div",M,[t(r,{modelValue:n(e),"onUpdate:modelValue":c[0]||(c[0]=l=>p(e)?e.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),t(r,{modelValue:n(e),"onUpdate:modelValue":c[1]||(c[1]=l=>p(e)?e.value=l:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),a("p",I,L(n(e)),1)],64))}}),j={class:"demo-space-x"},z=w({__name:"DemoSwitchColors",setup(S){const e=m(["Primary","Secondary","Success","Info","Warning","Error"]),o=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(c,l)=>(h(),v("div",j,[(h(!0),v(_,null,$(n(o),s=>(h(),b(r,{key:s,modelValue:n(e),"onUpdate:modelValue":l[0]||(l[0]=u=>p(e)?e.value=u:null),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}}),B={class:"demo-space-x"},E=w({__name:"DemoSwitchInset",setup(S){const e=m(!0),o=m(!1);return(c,l)=>(h(),v("div",B,[t(r,{modelValue:n(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),inset:!1,label:`Switch 1: ${n(e).toString()}`},null,8,["modelValue","label"]),t(r,{modelValue:n(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),inset:!1,label:`Switch 2: ${n(o).toString()}`},null,8,["modelValue","label"])]))}}),k={class:"demo-space-x"},W=w({__name:"DemoSwitchBasic",setup(S){const e=m(!0),o=m(!1),c=l=>{const s=l.toString();return s.charAt(0).toUpperCase()+s.slice(1)};return(l,s)=>(h(),v("div",k,[t(r,{modelValue:n(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),label:c(n(e))},null,8,["modelValue","label"]),t(r,{modelValue:n(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),label:c(n(o))},null,8,["modelValue","label"])]))}}),H={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :inset="false"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :inset="false"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :inset="false"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :inset="false"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},q={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},G={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},K={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},X=a("p",null,[i("A "),a("code",null,"v-switch"),i(" in its simplest form provides a toggle between 2 values.")],-1),Y=a("p",null,[i("To change the default "),a("code",null,"inset"),i(" switch, simply modify the inset prop to a "),a("code",null,"false"),i(" value.")],-1),Z=a("p",null,[i("Switches can be colored by using any of the builtin colors and contextual names using the "),a("code",null,"color"),i(" prop.")],-1),ee=a("p",null,[i("Multiple "),a("code",null,"v-switch"),i("'s can share the same "),a("code",null,"v-model"),i(" by using an array.")],-1),te=a("p",null,[i("Switch labels can be defined in "),a("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),le=a("p",null,[i(" Use "),a("code",null,"false-value"),i(" and "),a("code",null,"true-value"),i(" prop to sets value for truthy and falsy state ")],-1),se=a("p",null,[a("code",null,"v-switch"),i(" can have different states such as "),a("code",null,"default"),i(", "),a("code",null,"disabled"),i(", and "),a("code",null,"loading"),i(".")],-1),ge=w({__name:"switch",setup(S){return(e,o)=>{const c=W,l=D,s=E,u=z,g=P,V=F,x=A,O=T;return h(),b(C,null,{default:d(()=>[t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Basic",code:H},{default:d(()=>[X,t(c)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Inset",code:R},{default:d(()=>[Y,t(s)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Colors",code:N},{default:d(()=>[Z,t(u)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Model as array",code:G},{default:d(()=>[ee,t(g)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"Label slot",code:q},{default:d(()=>[te,t(V)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"True and False Value",code:Q},{default:d(()=>[le,t(x)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:d(()=>[t(l,{title:"States",code:K},{default:d(()=>[se,t(O)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ge as default};
