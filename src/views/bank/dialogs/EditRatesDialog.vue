<script setup lang="ts">
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

interface Props {
  isDialogVisible: boolean
  bank_id: string
  rate?: any
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'update:rate', val: any): void
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const isNewCurrencyAdded = ref(false)

const ratedata = ref(structuredClone(toRaw(props.rate)))

// Form fields
const ratecode = ref(ratedata.value.name)
const ratevalue = ref(ratedata.value.rate)
const futurerate = ref(ratedata.value.future_rate)
const effectivedate = ref(ratedata.value.effective_date)
const status = ref(ratedata.value.status)
const route = useRoute()
const router = useRouter()

const submitRate = async () => {
  try {
    const res = await $api('edit/UI/configurations/bank-rates-configurations', {
      method: 'POST',
      body: {
        rate_id: ratedata.value.id,
        bank_id: ratedata.value.bank_id,
        rate_code: ratecode.value,
        rate: ratevalue.value,
        future_rate: futurerate.value,
        effective_date: effectivedate.value,
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

const ratestatus = ref([
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
          Update Rate: {{ props.rate.name }}
        </h3>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Currency -->
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="ratecode"
                :rules="[requiredValidator]"
                label="Rate Code"
                placeholder="Rate (%)"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="ratevalue"
                :rules="[requiredValidator]"
                type="number"
                label="Rate"
                placeholder="%"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppTextField
                v-model="futurerate"
                :rules="[requiredValidator]"
                type="number"
                label="Future Rate"
                placeholder="%"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppDateTimePicker
                v-model="effectivedate"
                append-inner-icon="tabler-calendar-due"
                label="Date"
                placeholder="Select Date"
              />
            </VCol>
            <VCol
              cols="12"
              md="12"
            >
              <AppSelect
                v-model="status"
                :items="ratestatus"
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
