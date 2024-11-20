<script lang="ts" setup>
import { computed, ref } from 'vue'
import { VForm } from 'vuetify/components/VForm'

interface Props {
  pipeline: number
  isDialogVisible: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const isDefaultSnackbarVisible = ref(false)
const router = useRouter()

const counties = [
  'Baringo',
  'Bomet',
  'Bungoma',
  'Busia',
  'Elgeyo Marakwet',
  'Embu',
  'Garissa',
  'Homa Bay',
  'Isiolo',
  'Kajiado',
  'Kakamega',
  'Kericho',
  'Kiambu',
  'Kilifi',
  'Kirinyaga',
  'Kisii',
  'Kisumu',
  'Kitui',
  'Kwale',
  'Laikipia',
  'Lamu',
  'Machakos',
  'Makueni',
  'Mandera',
  'Marsabit',
  'Meru',
  'Migori',
  'Mombasa',
  'Murang\'a',
  'Nairobi',
  'Nakuru',
  'Nandi',
  'Narok',
  'Nyamira',
  'Nyandarua',
  'Nyeri',
  'Samburu',
  'Siaya',
  'Taita Taveta',
  'Tana River',
  'Tharaka-Nithi',
  'Trans Nzoia',
  'Turkana',
  'Uasin Gishu',
  'Vihiga',
  'Wajir',
  'West Pokot',
]

const isSameAsPhone = ref<boolean>(false)

interface Lead {
  stage: 'Contact' | 'Lead' | 'Opportunity' | 'Cold' | 'Reject' | 'Closed'
  name: string
  company: string
  department: string
  lead_type: 'individual' | 'corporate'
  product: 'vendor financing' | 'dealer financing'
  email: string
  phone_number: string
  point_of_contact: string
  whatsapp_number: string
  bank_id: string
  region: string
  industry?: string
  location?: string
  campaign?: string
  pipeline_id?: string
  contact_send_email_id?: string
  gender: 'male' | 'female' | 'other'
  status: 'hot' | 'warm' | 'cold'
  priority: 'high' | 'medium' | 'low'
  source: 'Email' | 'Marketing' | 'Outdoor' | 'LinkedIn' | 'Messages' | 'Google' | 'Adverts'
  owner: string
  branch: string
  associated_user: string
  interaction_type: 'phone' | 'email' | 'sms' | 'physical'
  very_next_step: string
  note?: string
}

interface Member {
  avatar: string
  name: string
  email: string
}

const errors = ref<Record<string, number | undefined>>({
  message: undefined,
  statusCode: undefined,
})

const response2 = await $api(`/get/UI/specific/pipeline/${props.pipeline}`, {
  method: 'GET',
})

const pipelineView = ref<Lead>(response2)

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
}

const onFormReset = () => {
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const whatsappNumber = computed({
  get() {
    return isSameAsPhone.value ? pipelineView.value.phone_number : pipelineView.value.whatsapp_number
  },
  set(value) {
    if (isSameAsPhone.value)
      pipelineView.value.phone_number = value
    else
      pipelineView.value.whatsapp_number = value
  },
})

const { data: usersData, execute: fetchAssociation } = await useApi<any>(createUrl('/get/UI/associated/contacts', {
  query: {
    pipeline_id: props.pipeline,
  },
}))

const membersList: Ref<Member[]> = computed(() => usersData.value)

const formFields = ref([
  {
    key: 'leadType',
    type: 'text',
    model: 'lead_type',
    label: 'Lead Type',
    placeholder: 'Lead Type',
    condition: true,
    readonly: true,
  },
  {
    key: 'name',
    type: 'text',
    model: 'name',
    label: computed(() => pipelineView.value.lead_type === 'corporate' ? 'Corporate Name' : 'Individual First Name'),
    placeholder: 'Enter Name',
    condition: true,
  },
  {
    key: 'name',
    type: 'text',
    model: 'firstName',
    label: computed(() => pipelineView.value.lead_type === 'corporate' ? 'Contact First Name' : 'Individual Last Name'),
    placeholder: 'Enter Name',
  },
  {
    key: 'name',
    type: 'text',
    model: 'lastName',
    label: computed(() => pipelineView.value.lead_type === 'corporate' ? 'Contact Last Name' : 'Individual Last Name'),
    placeholder: 'Enter Name',
    condition: computed(() => pipelineView.value.lead_type === 'corporate'),
  },
  {
    key: 'contact',
    type: 'select_contact',
    model: 'contact_send_email_id',
    label: 'Contact Person',
    placeholder: 'Select Contact Person',
    items: membersList.value,
    condition: computed(() => pipelineView.value.lead_type === 'corporate'),
  },
  {
    key: 'name',
    type: 'text',
    model: 'websiteUrl',
    label: 'Website URL',
    placeholder: 'Website URL',
    condition: computed(() => pipelineView.value.lead_type === 'corporate'),
  },
  {
    key: 'phoneNumber',
    type: 'text',
    model: 'phone_number',
    label: 'Phone Number',
    placeholder: '0700000000',
    condition: true,
  },
  {
    key: whatsappNumber,
    type: 'text',
    model: whatsappNumber,
    label: 'WhatsApp Number',
    placeholder: '0700000000',
    condition: true,
  },
  {
    key: 'gender',
    type: 'select',
    model: 'gender',
    label: 'Gender',
    placeholder: 'Select Gender',
    items: ['Male', 'Female', 'Other'],
    condition: computed(() => pipelineView.value.lead_type === 'individual'),
  },
  {
    key: 'status',
    type: 'select',
    model: 'status',
    label: 'Status',
    placeholder: 'Select Status',
    items: ['hot', 'cold', 'warm'],
    condition: true,
  },
  {
    key: 'priority',
    type: 'select',
    model: 'priority',
    label: 'Priority',
    placeholder: 'Select Status',
    items: ['high', 'medium', 'low'],
    condition: true,
  },
  {
    key: 'product',
    type: 'select',
    model: 'product',
    label: 'Product Type',
    placeholder: 'Select Product Type',
    items: ['vendor financing', 'dealer financing', 'factoring'],
    condition: true,
  },
  {
    key: 'source',
    type: 'select',
    model: 'source',
    label: 'Source',
    placeholder: 'Select Source',
    items: ['Email', 'Marketing', 'Outdoor', 'LinkedIn', 'Messages', 'Google', 'Adverts'],
    condition: true,
  },
  {
    key: 'region',
    type: 'select',
    model: 'region',
    label: 'Region',
    placeholder: 'Select Region',
    items: counties,
    condition: true,
  },
])

onMounted(async () => {
  await fetchAssociation()
})

const submitData = async () => {
  try {
    const res = await $api(`/update/UI/pipeline/lead/data/${props.pipeline}`, {
      method: 'POST',
      body: pipelineView.value,
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    isDefaultSnackbarVisible.value = true
    console.log(res)

    const { message } = res

    console.log(message)

    await nextTick(() => {
      router.push('/pipeline/leads/Leads')
    })
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VDialog
    v-model.lazy="props.isDialogVisible"
    :width="$vuetify.display.smAndDown ? 'auto' : 677"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-8 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 mb-3">
          Contact Details
        </VCardTitle>
        <p class="mb-0">
          Confirm Details before Conversion
        </p>
        <template v-if="isDefaultSnackbarVisible">
          <VAlert color="success">
            Data Send Successfully
          </VAlert>
        </template>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm
          class="mt-6"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <VCol cols="12">
              <h6 class="text-h6 font-weight-medium">
                Account Details
              </h6>
              <p class="mb-0">
                Enter your Account Details
              </p>
            </VCol>
            <template
              v-for="field in formFields"
              :key="field.key"
            >
              <VCol
                v-if="field.condition"
                cols="12"
                md="6"
              >
                <template v-if="field.type === 'text' && field.key !== whatsappNumber">
                  <AppTextField
                    v-model="pipelineView[field.model]"
                    :label="field.label"
                    :placeholder="field.placeholder"
                    :readonly="field.readonly"
                    :rules="field.rules"
                  />
                </template>
                <template v-if="field.type === 'text' && field.key === whatsappNumber">
                  <AppTextField
                    v-model="whatsappNumber"
                    :label="field.label"
                    :placeholder="field.placeholder"
                    :rules="field.rules"
                  />

                  <VCheckbox
                    v-model="isSameAsPhone"
                    label="Same as Phone Number"
                  />
                </template>
                <template v-if="field.type === 'email'">
                  <AppTextField
                    v-model="pipelineView[field.model]"
                    :label="field.label"
                    :placeholder="field.placeholder"
                    :rules="field.rules"
                  />
                </template>
                <template v-else-if="field.type === 'select'">
                  <AppSelect
                    v-model="pipelineView[field.model]"
                    :items="field.items"
                    :label="field.label"
                    :placeholder="field.placeholder"
                    :rules="field.rules"
                  />
                </template>
                <template v-else-if="field.type === 'select_contact'">
                  <AppSelect
                    v-model="pipelineView[field.model]"
                    :items="field.items"
                    :label="field.label"
                    :rules="[requiredValidator]"
                    item-title="name"
                    item-value="id"
                  />
                </template>
                <!-- Add other field types as needed -->
              </VCol>
            </template>
          </VRow>
          <VRow>
            <!-- 👉 Submit and Cancel -->
            <VCol
              class="d-flex flex-wrap justify-center gap-4"
              cols="12"
            >
              <VBtn
                type="submit"
                @click="submitData"
              >
                Convert
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="onFormReset"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
