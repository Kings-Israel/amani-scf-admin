import{_ as b}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as n}from"./VCol-bcc5388c.js";import{V as C}from"./VRow-e44df108.js";import{d as w,r as f,o as _,h,f as l,b as e,p as d,aI as T,e as o,x as a}from"./index-5caaa453.js";import{r as I,e as M}from"./validators-db74a876.js";import{V as D}from"./VForm-ed4803d2.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{V as v}from"./VTextField-604d91ff.js";import{_ as q}from"./AppCardCode.vue_vue_type_style_index_0_lang-afde834d.js";import"./form-c9c578a3.js";/* empty css              */import"./helpers-681711bc.js";import"./forwardRefs-8348545e.js";/* empty css                   */import"./VCounter-728f7f8c.js";import"./transition-1886cce0.js";import"./VField-6b3808ed.js";import"./easing-9f15041e.js";import"./VInput-e87890b4.js";import"./index-7dd1f5f0.js";import"./VCard-1a5b2c5e.js";import"./createSimpleFunctional-9624028d.js";import"./VAvatar-3ee4c690.js";import"./VImg-6009f8f0.js";import"./VCardText-3b4da816.js";import"./VDivider-d40713ce.js";const U=w({__name:"DemoTextfieldPasswordInput",setup(x){const r=f(!1),t=f(!0),p=f("Password"),s=f("wqfasds"),m={required:i=>!!i||"Required.",min:i=>i.length>=8||"Min 8 characters"};return(i,c)=>{const u=b;return _(),h(C,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(u,{modelValue:d(p),"onUpdate:modelValue":c[0]||(c[0]=V=>T(p)?p.value=V:null),"append-inner-icon":d(r)?"tabler-eye-off":"tabler-eye",rules:[m.required,m.min],type:d(r)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":c[1]||(c[1]=V=>r.value=!d(r))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(u,{modelValue:d(s),"onUpdate:modelValue":c[2]||(c[2]=V=>T(s)?s.value=V:null),rules:[m.required,m.min],"append-inner-icon":d(t)?"tabler-eye-off":"tabler-eye",type:d(t)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":c[3]||(c[3]=V=>t.value=!d(t))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}}),j=w({__name:"DemoTextfieldIconEvents",setup(x){const r=f("Hey!"),t=f(!0),p=f(0),s=()=>{t.value=!t.value},m=()=>{r.value=""},i=()=>{p.value=0},c=()=>{i(),m()};return(u,V)=>{const F=b;return _(),h(F,{modelValue:d(r),"onUpdate:modelValue":V[0]||(V[0]=A=>T(r)?r.value=A:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"tabler-circle-x","append-icon":d(r)?u.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":d(t)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":s,"onClick:append":c,"onClick:clear":m},null,8,["modelValue","append-icon","append-inner-icon"])}}}),S=w({__name:"DemoTextfieldValidation",setup(x){const r=f("");return(t,p)=>{const s=b;return _(),h(D,null,{default:l(()=>[e(s,{modelValue:d(r),"onUpdate:modelValue":p[0]||(p[0]=m=>T(r)?r.value=m:null),rules:["requiredValidator"in t?t.requiredValidator:d(I),"emailValidator"in t?t.emailValidator:d(M)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}}),E={};function L(x,r){const t=b;return _(),h(t,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const H=g(E,[["render",L]]),N=w({__name:"DemoTextfieldPrefixesAndSuffixes",setup(x){const r=f(10.05),t=f(28.02),p=f("example"),s=f("04:56");return(m,i)=>{const c=b;return _(),h(C,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(c,{modelValue:d(r),"onUpdate:modelValue":i[0]||(i[0]=u=>T(r)?r.value=u:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(c,{modelValue:d(t),"onUpdate:modelValue":i[1]||(i[1]=u=>T(t)?t.value=u:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(c,{modelValue:d(p),"onUpdate:modelValue":i[2]||(i[2]=u=>T(p)?p.value=u:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(c,{modelValue:d(s),"onUpdate:modelValue":i[3]||(i[3]=u=>T(s)?s.value=u:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}}),B={};function W(x,r){const t=b;return _(),h(C,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend","prepend-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(t,{label:"Append","append-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(t,{label:"Append Inner","append-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const O=g(B,[["render",W]]),z={};function Y(x,r){const t=b;return _(),h(t,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const G=g(z,[["render",Y]]),J={};function K(x,r){const t=b;return _(),h(t,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const Q=g(J,[["render",K]]),X=w({__name:"DemoTextfieldCounter",setup(x){const r=f("Preliminary report"),t=f("California is a state in the western United States"),p=[s=>s.length<=25||"Max 25 characters"];return(s,m)=>{const i=b;return _(),h(C,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:d(r),"onUpdate:modelValue":m[0]||(m[0]=c=>T(r)?r.value=c:null),rules:p,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:d(t),"onUpdate:modelValue":m[1]||(m[1]=c=>T(t)?t.value=c:null),rules:p,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}}),Z={};function ee(x,r){const t=b;return _(),h(C,null,{default:l(()=>[e(n,null,{default:l(()=>[e(t,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(t,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const le=g(Z,[["render",ee]]),te={};function oe(x,r){return _(),h(C,null,{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Outlined",variant:"outlined"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Filled",variant:"filled"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Solo",variant:"solo"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Plain",variant:"plain"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const ae=g(te,[["render",oe]]),ne={};function re(x,r){const t=b;return _(),h(t,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const se=g(ne,[["render",re]]),ce={};function ie(x,r){const t=b;return _(),h(t,{label:"Regular",placeholder:"Placeholder Text"})}const de=g(ce,[["render",ie]]),pe={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},me={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},fe={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},_e={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},he={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},xe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},be={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Ve={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},Te={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},ge={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Ce={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},we={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},ve=o("p",null,"Text fields components are used for collecting user provided information.",-1),Fe=o("p",null,[a("The "),o("code",null,"density"),a(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),o("code",null,"default"),a(", "),o("code",null,"comfortable"),a(", and "),o("code",null,"compact"),a(".")],-1),Ae=o("p",null,[a("Use "),o("code",null,"solo"),a(", "),o("code",null,"filled"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"plain"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of the textfield. ")],-1),ye=o("p",null,"Text fields can be disabled or readonly.",-1),Pe=o("p",null,[a("Use a "),o("code",null,"counter"),a(" prop to inform a user of the character limit.")],-1),Re=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),ke=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the input border color.")],-1),$e=o("p",null,[a("You can add icons to the text field with "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-icon"),a(" and "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props.")],-1),Ie=o("p",null,[a("The "),o("code",null,"prefix"),a(" and "),o("code",null,"suffix"),a(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Me=o("p",null,[o("code",null,"single-line"),a(" text fields do not float their label on focus or with data.")],-1),De=o("p",null,[a("Vuetify includes simple validation through the "),o("code",null,"rules"),a(" prop.")],-1),qe=o("p",null,[o("code",null,"click:prepend"),a(", "),o("code",null,"click:append"),a(", "),o("code",null,"click:append-inner"),a(", and "),o("code",null,"click:clear"),a(" will be emitted when you click on the respective icon")],-1),Ue=o("p",null,[a("Using the HTML input "),o("code",null,"type"),a(" password can be used with an appended icon and callback to control the visibility.")],-1),il=w({__name:"textfield",setup(x){return(r,t)=>{const p=de,s=q,m=se,i=ae,c=le,u=X,V=Q,F=G,A=O,y=N,P=H,R=S,k=j,$=U;return _(),h(C,{class:"match-height"},{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Basic",code:pe},{default:l(()=>[ve,e(p)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Density",code:_e},{default:l(()=>[Fe,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(s,{title:"Variant",code:we},{default:l(()=>[Ae,e(i)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"State",code:ge},{default:l(()=>[ye,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Counter",code:ue},{default:l(()=>[Pe,e(u)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Clearable",code:me},{default:l(()=>[Re,e(V)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Custom Colors",code:fe},{default:l(()=>[ke,e(F)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Icons",code:xe},{default:l(()=>[$e,e(A)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Prefixes and suffixes",code:Ve},{default:l(()=>[Ie,e(y)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Single line",code:Te},{default:l(()=>[Me,e(P)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Validation",code:Ce},{default:l(()=>[De,e(R)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Icon events",code:he},{default:l(()=>[qe,e(k)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Password input",code:be},{default:l(()=>[Ue,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{il as default};
