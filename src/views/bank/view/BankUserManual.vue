<script lang="ts" setup>
interface Emit {
  (e: 'update:bank_user_manual', value: File): void
  (e: 'update:anchor_user_manual', value: File): void
  (e: 'update:vendor_user_manual', value: File): void
  (e: 'update:dealer_user_manual', value: File): void
}

interface Props {
  bank_user_manual: File
  anchor_user_manual: File
  vendor_user_manual: File
  dealer_user_manual: File
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const formData = ref({
  bank_user_manual: ref(''),
  anchor_user_manual: ref(''),
  vendor_user_manual: ref(''),
  dealer_user_manual: ref(''),
})

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

const submitConfig = async () => {
  const data = new FormData()

  data.append('bank_id', route.params.id)
  data.append('bank_user_manual', formData.value.bank_user_manual[0])
  data.append('anchor_user_manual', formData.value.anchor_user_manual[0])
  data.append('vendor_user_manual', formData.value.vendor_user_manual[0])
  data.append('dealer_user_manual', formData.value.dealer_user_manual[0])

  try {
    const res = await $api('edit/UI/configurations/bank-manuals-configurations', {
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
          <p>Bank User Manual</p>
          <p v-if="configs.bank_user_manual">
            <a
              :href="configs.bank_user_manual"
              target="_blank"
            >{{ configs.bank_user_manual }}</a>
          </p>
          <VFileInput
            v-model="formData.bank_user_manual"
            label="Upload file..."
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <p>Anchor User Manual</p>
          <p v-if="configs.anchor_user_manual">
            <a
              :href="configs.anchor_user_manual"
              target="_blank"
            >{{ configs.anchor_user_manual }}</a>
          </p>
          <VFileInput
            v-model="formData.anchor_user_manual"
            label="Upload file..."
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <p>Vendor User Manual</p>
          <p v-if="configs.vendor_user_manual">
            <a
              :href="configs.vendor_user_manual"
              target="_blank"
            >{{ configs.vendor_user_manual }}</a>
          </p>
          <VFileInput
            v-model="formData.vendor_user_manual"
            label="Upload file..."
          />
        </VCol>
        <VCol
          cols="12"
          md="12"
        >
          <p>Dealer User Manual</p>
          <p v-if="configs.dealer_user_manual">
            <a
              :href="configs.dealer_user_manual"
              target="_blank"
            >{{ configs.dealer_user_manual }}</a>
          </p>
          <VFileInput
            v-model="formData.dealer_user_manual"
            label="Upload file..."
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
