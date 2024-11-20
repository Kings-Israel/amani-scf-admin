<script lang="ts" setup>
interface Emit {
  (e: 'update:terms_and_conditions', value: string): void
  (e: 'update:terms_and_conditions_companies', value: string): void
  (e: 'update:terms_and_conditions_vendors', value: string): void
}

interface Props {
  terms_and_conditions: string
  terms_and_conditions_companies: string
  terms_and_conditions_vendors: string
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(150)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const route = useRoute('bank-view-id')

const { data: configsData, execute: fetchConfigs } = await useApi<any>(createUrl(`get/UI/configurations/bank-configurations/${route.params.id}`,
  {
    query: {
      q: searchQuery,
      status: selectedStatus,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  },
))

const configs = configsData.value

const formData = ref({
  terms_and_conditions: ref(configs.terms_and_conditions),
  terms_and_conditions_companies: ref(configs.terms_and_conditions_companies),
  terms_and_conditions_vendors: ref(configs.terms_and_conditions_vendors),
})

const submitConfig = async () => {
  const data = new FormData()

  data.append('bank_id', route.params.id)
  data.append('terms_and_conditions', formData.value.terms_and_conditions)
  data.append('terms_and_conditions_companies', formData.value.terms_and_conditions_companies)
  data.append('terms_and_conditions_vendors', formData.value.terms_and_conditions_vendors)

  try {
    const res = await $api('edit/UI/configurations/bank-terms-configurations', {
      method: 'POST',
      body: data,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { message } = res

    await nextTick(() => {
      // router.push(`/bank/view/${route.params.id}`)
      // router.go(0)
    })

    console.log(message)

    // isNewContactAdded.value = true
  }
  catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchConfigs()

//   console.log(currencyItems.value)
})
</script>

<template>
  <VCard>
    <VCardItem>
      <VRow>
        <VCol
          cols="12"
          md="12"
        >
          <p>Terms and Conditions</p>
          <TiptapEditor
            v-model="formData.terms_and_conditions"
            class="border rounded basic-editor"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <p>Terms and Conditions for Companies</p>
          <TiptapEditor
            v-model="formData.terms_and_conditions_companies"
            class="border rounded basic-editor"
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <p>Terms and Conditions for Vendors</p>
          <TiptapEditor
            v-model="formData.terms_and_conditions_vendors"
            class="border rounded basic-editor"
          />
        </VCol>

        <VCol
          cols="12"
          class="d-flex gap-4"
        >
          <VBtn
            type="submit"
            @click="submitConfig"
          >
            Submit
          </VBtn>

          <VBtn
            type="reset"
            color="secondary"
            variant="tonal"
          >
            Reset
          </VBtn>
        </VCol>
      </VRow>
    </VCardItem>
  </VCard>
</template>
