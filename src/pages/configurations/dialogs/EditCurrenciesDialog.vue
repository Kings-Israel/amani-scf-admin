<script setup lang="ts">
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

interface Props {
  isDialogVisible: boolean
  currency?: any
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const router = useRouter()

const isNewCurrencyAdded = ref(false)

const currencydata = ref(structuredClone(toRaw(props.currency)))

// Form fields
const currency_title = ref(currencydata.value.name)
const symbol = ref(currencydata.value.symbol)
const status = ref(currencydata.value.status)

const submitRate = async () => {
  try {
    const res = await $api('/UI/configurations/edit/currency', {
      method: 'POST',
      body: {
        currency_id: currencydata.value.id,
        name: currency_title.value,
        symbol: symbol.value,
        status: status.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    isNewCurrencyAdded.value = true
    console.log(res)

    await nextTick(() => {
      // router.go(0)
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}

const currencystatus = ref([
  { title: 'Active', value: 'active' },
  { title: 'In active', value: 'inactive' },
])
</script>

<template v-if="props.isDialogVisible">
  <VSnackbar
    v-model="isNewCurrencyAdded"
    color="success"
    location="top end"
    variant="flat"
  >
    Rates Updated Successfully
  </VSnackbar>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="900"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />

    <VCard class="refer-and-earn-dialog">
      <VCardText class="pa-5 pa-sm-16">
        <h3 class="text-h3 text-left mb-5">
          Update Currency: {{ props.currency.name }}
        </h3>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Currency -->
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="currency_title"
                :rules="[requiredValidator]"
                label="Currency Title"
                placeholder="Currency Title"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="symbol"
                :rules="[requiredValidator]"
                label="Symbol"
                placeholder="Symbol"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppSelect
                v-model="status"
                :items="currencystatus"
                class="me-1"
                clear-icon="tabler-x"
                clearable
                placeholder="Status"
                style="inline-size: 200px;"
              />
            </VCol>
            <!-- 👉 submit and reset button -->
            <VCol
              class="d-flex gap-4"
              cols="12"
              md="9"
            >
              <VBtn
                type="submit"
                @click="submitRate"
              >
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                type="reset"
                variant="tonal"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
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
