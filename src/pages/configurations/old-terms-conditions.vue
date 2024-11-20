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

const router = useRouter()

const isFlatSnackbarVisible = ref(false)
const iserrorFlatSnackbarVisible = ref(false)

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const { data: termsData, execute: fetchTerms } = await useApi<ApiResponse | null>(createUrl('/UI/configurations/terms-and-conditions'))

const terms = computed(() => termsData.value)

fetchTerms()

const formData = ref({
  terms_and_conditions: ref(terms.value.terms_and_conditions),
  terms_and_conditions_companies: ref(terms.value.terms_and_conditions_for_companies),
  terms_and_conditions_vendors: ref(terms.value.terms_and_conditions_for_vendors),
})

const errormessage = ref('')

const onSubmit = async () => {
  const data = new FormData()

  data.append('terms_and_conditions', formData.value.terms_and_conditions)
  data.append('terms_and_conditions_for_companies', formData.value.terms_and_conditions_companies)
  data.append('terms_and_conditions_for_vendors', formData.value.terms_and_conditions_vendors)
  await $api('/UI/configurations/add/terms-and-conditions', {
    method: 'POST',
    body: data,
  })
  isFlatSnackbarVisible.value = true
  setTimeout(async () =>
    await nextTick(() => {
      router.push('/configurations/terms-conditions')
    }),
  3000,
  )
}
</script>

<template>
  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    Terms and Conditions Created Successfully
  </VSnackbar>
  <VSnackbar
    v-model="iserrorFlatSnackbarVisible"
    color="error"
    location="top end"
    variant="flat"
  >
    {{ errormessage }}
  </VSnackbar>
  <VCard>
    <VCardItem>
      <VCardTitle>Add/Update Terms and Conditions</VCardTitle>
      <VRow>
        <VCol
          cols="12"
          md="12"
          class="my-8"
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
        <VCol>
          <VBtn
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
        </VCol>
      </VRow>
    </VCardItem>
  </VCard>
</template>
