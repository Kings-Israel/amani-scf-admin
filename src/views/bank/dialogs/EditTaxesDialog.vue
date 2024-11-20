<script setup lang="ts">
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

interface Props {
  isDialogVisible: boolean
  bank_id: string
  tax?: any
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'update:tax', val: any): void
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const isNewCurrencyAdded = ref(false)

const taxdata = ref(structuredClone(toRaw(props.tax)))

// Form fields
const taxname = ref(taxdata.value.tax_name)
const percentage = ref(taxdata.value.value)
const accountno = ref(taxdata.value.account_no)
const status = ref(taxdata.value.status)
const route = useRoute()
const router = useRouter()

const submitRate = async () => {
  try {
    const res = await $api('edit/UI/configurations/bank-tax-rates-configurations', {
      method: 'POST',
      body: {
        tax_id: taxdata.value.id,
        bank_id: taxdata.value.bank_id,
        name: taxname.value,
        percentage: percentage.value,
        account_no: accountno.value,
        status: status.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    isNewCurrencyAdded.value = true
    console.log(res)

    await nextTick(() => {
      emit('refresh', true)
    })

    const { message } = res
  }
  catch (err) {
    console.error(err)
  }
}

const taxstatus = ref([
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
          Update Rate: {{ props.tax.name }}
        </h3>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Currency -->
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="taxname"
                :rules="[requiredValidator]"
                label="Tax Name"
                placeholder="Tax Name"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="percentage"
                :rules="[requiredValidator]"
                type="number"
                label="Percentage"
                placeholder="%"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="accountno"
                :rules="[requiredValidator]"
                type="number"
                label="Account No"
                placeholder="%"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppSelect
                v-model="status"
                :items="taxstatus"
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
