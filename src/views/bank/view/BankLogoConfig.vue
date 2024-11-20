<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<Emit>()

const router = useRouter()

interface Emit {
  (e: 'update:selectedCurrencyIds', value: number[]): void
  (e: 'update:selectedRateIds', value: number[]): void
  (e: 'update:selectedTaxIds', value: number[]): void
  (e: 'update:offdays', value: string): void
  (e: 'update:languages', value: string): void
  (e: 'update:date_format', value: string): void
  (e: 'update:help_contact_number', value: string): void
  (e: 'update:help_contact_email', value: string): void
}
const route = useRoute('bank-view-id')
interface Currency {
  id: number
  code: string
  name: string
  symbol: string
  status: string
}

interface Rates {
  id: number
  rate_code: string
}

interface Taxes {
  id: number
  name: string
}

interface Configs {
  id: number
}

const currencyItems = ref<Currency[]>([])
const rateItems = ref<Rates[]>([])
const configItems = ref<Configs[]>([])

const searchQuery = ref('')
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(150)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const week_items = ['Saturday', 'Sunday', 'Friday - Saturday', 'Saturday - Sunday', '2nd and 4th Saturday and all Sundays']
const date_formats = ['DD/MM/YYYY (Ex. 12/02/2020)', 'MM/DD/YYYY (Ex. 02/12/2020)', 'DD-MM-YYYY (Ex. 12-02-2020)', 'MM-DD-YYYY (Ex. 02-12-2020)', 'DD-MMM-YYYY (Ex. 12-Feb-2020)', 'DD MMM YYYY (Ex. 02 Feb 2020)']

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

configItems.value = configs.value

const formData = ref({
  logo: '',
  favicon: '',
  primary_color: configs.primary_color || '',
  secondary_color: configs.secondary_color || '',
})

onMounted(() => {
  fetchConfigs()

//   console.log(currencyItems.value)
})

const submitConfig = async () => {
  const data = new FormData()

  data.append('bank_id', route.params.id)
  if (formData.value.logo)
    data.append('logo', formData.value.logo[0])

  if (formData.value.favicon)
    data.append('favicon', formData.value.favicon[0])

  data.append('primary_color', formData.value.primary_color)
  data.append('secondary_color', formData.value.secondary_color)

  try {
    const res = await $api('edit/UI/configurations/bank-appearance-configurations', {
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

    // console.log(message)
    isNewContactAdded.value = true
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VCard>
    <VCardItem>
      <VRow>
        <!-- 👉 Color -->

        <VCol
          cols="12"
          md="3"
        >
          <AppTextField
            v-model="formData.primary_color"
            type="color"
            label="Theme Primary Color"
            placeholder="Select Primary Color"
          />
        </VCol>
        <VCol
          cols="12"
          md="3"
        >
          <AppTextField
            v-model="formData.secondary_color"
            type="color"
            label="Theme Secondary Color"
            placeholder="Select Secondary Color"
          />
        </VCol>
        <VCol
          cols="12"
          md="12"
        >
          <p>Logo</p>
          <VCol
            cols="12"
            md="2"
          >
            <VCard v-if="configs.logo">
              <VCardItem>
                <img
                  :src="configs.logo"
                  alt="Logo"
                  width="150"
                >
              </VCardItem>
            </VCard>
          </VCol>
          <VFileInput
            v-model="formData.logo"
            label="Upload logo..."
          />
        </VCol>

        <VCol
          cols="12"
          md="12"
        >
          <VCol
            cols="12"
            md="1"
          >
            <VCard v-if="configs.favicon">
              <VCardItem>
                <img
                  :src="configs.favicon"
                  alt="Favicon"
                  width="70"
                >
              </VCardItem>
            </VCard>
          </VCol>
          <p>Favicon</p>
          <VFileInput
            v-model="formData.favicon"
            label="Upload favicon..."
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
