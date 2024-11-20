<script lang="ts" setup>
import { ref } from 'vue'
import type { BankDocument, Document } from './index'

const props = defineProps<Props>()
const documents = ref<BankDocument[]>(props.documents)
const selectedBankId = toRef(() => props.bank)
const bankName = toRef(() => props.name)

interface Props {
  documents: BankDocument[]
  bank: number
  name: string
}

definePage({
  meta: {
    navActiveLink: 'pipeline-leads-Leads',
    key: 'tab',
    action: 'manage',
    subject: 'Convert to Opportunity',
  },
})

const filteredDocuments = computed(() => {
  const docs: Document[] = []

  documents.value.forEach(bankDocument => {
    if (bankDocument.documents.some(doc => doc.bank_id === selectedBankId.value))
      docs.push(...bankDocument.documents.filter(doc => doc.bank_id === selectedBankId.value))
  })

  return docs
})
</script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Documents Required By {{ bankName }}
    </VListSubheader>

    <VListItem
      v-for="document in filteredDocuments"
      :key="document.id"
      :subtitle="new Date().toLocaleDateString('en-Us', { year: 'numeric', month: 'short', day: 'numeric' })"
      :title="document.name"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="tabler-clipboard-text"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          color="warning"
          icon="tabler-info-circle"
          size="small"
          variant="text"
        />
      </template>
    </VListItem>
  </VList>
</template>
