import{_ as b,V as S}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-bc372057.js";import{d as u,r as g,o as d,h,p as C,aI as v,w as T,f as o,b as e,e as l,x as s}from"./index-75b434bc.js";import{V as c}from"./VCol-35b3d337.js";import{V as y}from"./VRow-d6f20668.js";import{_ as F}from"./AppCardCode.vue_vue_type_style_index_0_lang-6592a71a.js";import"./form-2b416184.js";import"./VSelect-54e8b29a.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./VChip-e2ddd660.js";import"./filter-3bfef89c.js";/* empty css              */import"./VCard-95c0d706.js";import"./VCardText-76f31582.js";const N=u({__name:"DemoAutocompleteValidation",setup(_){const a=["foo","bar","fizz","buzz"],i=g(["foo"]),n=[t=>!!t.length||"Select at least one option."];return(t,r)=>{const f=b;return d(),h(f,{modelValue:C(i),"onUpdate:modelValue":r[0]||(r[0]=m=>v(i)?i.value=m:null),items:a,rules:n,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}}}),M=u({__name:"DemoAutocompleteAsyncItems",setup(_){const a=g(!1),i=g(),n=g(null),t=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],r=g(t),f=m=>{a.value=!0,setTimeout(()=>{r.value=t.filter(p=>(p||"").toLowerCase().includes((m||"").toLowerCase())),a.value=!1},500)};return T(i,m=>{m&&m!==n.value&&f(m)}),(m,p)=>(d(),h(S,{modelValue:C(n),"onUpdate:modelValue":p[0]||(p[0]=A=>v(n)?n.value=A:null),search:C(i),"onUpdate:search":p[1]||(p[1]=A=>v(i)?i.value=A:null),loading:C(a),items:C(r),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}}),k=u({__name:"DemoAutocompleteCustomFilter",setup(_){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function i(n,t,r){const f=r.title.toLowerCase(),m=r.value.toLowerCase(),p=t.toLocaleLowerCase();return f.includes(p)||m.includes(p)}return(n,t)=>{const r=b;return d(),h(r,{label:"States",items:a,"custom-filter":i,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}}}),D=u({__name:"DemoAutocompleteChips",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,n)=>{const t=b;return d(),h(t,{label:"States",items:a,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}}}),W=u({__name:"DemoAutocompleteClearable",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,n)=>{const t=b;return d(),h(t,{label:"States",items:a,multiple:"",placeholder:"Select State",clearable:""})}}}),G=u({__name:"DemoAutocompleteMultiple",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,n)=>{const t=b;return d(),h(t,{label:"States",items:a,placeholder:"Select State",multiple:"",eager:""})}}}),I=u({__name:"DemoAutocompleteVariant",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,n)=>(d(),h(y,null,{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(S,{variant:"solo",label:"solo",items:a,placeholder:"Select State"})]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(S,{variant:"outlined",label:"outlined",placeholder:"Select State",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(S,{variant:"underlined",label:"underlined",placeholder:"Select State",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(S,{variant:"filled",label:"filled",placeholder:"Select State",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(S,{variant:"plain",label:"plain",placeholder:"Select State",items:a})]),_:1})]),_:1}))}}),L=u({__name:"DemoAutocompleteDensity",setup(_){const a=g("Florida"),i=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(n,t)=>{const r=b;return d(),h(r,{modelValue:C(a),"onUpdate:modelValue":t[0]||(t[0]=f=>v(a)?a.value=f:null),label:"States",density:"compact",placeholder:"Select State",items:i},null,8,["modelValue"])}}}),q=u({__name:"DemoAutocompleteBasic",setup(_){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,n)=>{const t=b;return d(),h(t,{label:"States",items:a,placeholder:"Select State"})}}}),O={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},R={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},z={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},j={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},U={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(item: string, queryText: string, itemText: { title: string; value: string }) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},$={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},P={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},Y={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},H={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},B=l("p",null,[s(" The "),l("code",null," v-autocomplete "),s(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),K=l("p",null,[s(" You can use "),l("code",null," density "),s(" prop to adjusts vertical spacing within the component. Available options are: "),l("code",null,"default"),s(", "),l("code",null,"comfortable"),s(", and "),l("code",null,"compact"),s(". ")],-1),E=l("p",null,[s("Use "),l("code",null,"solo"),s(", "),l("code",null,"outlined"),s(", "),l("code",null,"underlined"),s(", "),l("code",null,"filled"),s(" and "),l("code",null,"plain"),s(" options of "),l("code",null,"variant"),s(" prop to change the look of Autocomplete. ")],-1),J=l("p",null,[s("Use "),l("code",null,"multiple"),s(" prop to select multiple. Accepts array for value")],-1),Q=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to add input clear functionality.")],-1),X=l("p",null,[s("Use "),l("code",null," chips "),s(" prop to use chips in select.")],-1),Z=l("p",null,[s("The "),l("code",null," custom-filter "),s(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),ee=l("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),te=l("p",null,[s("Use "),l("code",null,"rules"),s(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Le=u({__name:"autocomplete",setup(_){return(a,i)=>{const n=q,t=F,r=L,f=I,m=G,p=W,A=D,x=k,V=M,w=N;return d(),h(y,{class:"match-height"},{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",code:R},{default:o(()=>[B,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Density",code:$},{default:o(()=>[K,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"12"},{default:o(()=>[e(t,{title:"Variant",code:H},{default:o(()=>[E,e(f)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Multiple",code:P},{default:o(()=>[J,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Clearable",code:j},{default:o(()=>[Q,e(p)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Chips",code:z},{default:o(()=>[X,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Custom-Filter",code:U},{default:o(()=>[Z,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Async items",code:O},{default:o(()=>[ee,e(V)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"validation",code:Y},{default:o(()=>[te,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Le as default};
