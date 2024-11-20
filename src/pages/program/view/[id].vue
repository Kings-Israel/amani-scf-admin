<script lang="ts" setup>
import { ref } from 'vue';
import ProgramPanel from './ProgramPanel.vue';

definePage({
  meta: {
    action: 'manage',
    subject: 'View Programs & Mapping',
    navActiveLink: 'programs',
    key: 'tab',
  },
})

const router = useRoute('program-view-id')

const programID = ref(router.params.id)

const contactID = ref<number>()
const isSending = ref<boolean>(false)


const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

interface Document {
  id: number
  name: string
  bank: string
}

const {
  data: fetchedData,
  execute: fetchProgram,
} = await useApi<any>(createUrl(`/all/UI/program/${programID.value}/details`))

onMounted(() => {
  fetchProgram()
},
)
</script>

<template>
  <ProgramPanel :program_data="fetchedData.data.program" :anchor="fetchedData.data.anchor" :buyer="fetchedData.data.buyers"/>
</template>

<style lang="scss">
.refer-link-input {
  .v-field--appended {
    padding-inline-end: 0;
  }

  .v-field__append-inner {
    padding-block-start: 0.125rem;
  }
}
</style>
