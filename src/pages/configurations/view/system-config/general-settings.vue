<script lang="ts" setup>
import ConfigFile from '@/pages/configurations/view/system-config/config-file.vue';

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const router = useRouter()

interface Emit {
  (e: 'update:page_title', value: string): void
  (e: 'update:admin_logo', value: string): void
  (e: 'update:favicon', value: string): void
  (e: 'update:weekly_off', value: string): void
  (e: 'update:date_format', value: string): void
  (e: 'update:contact_no', value: string): void
  (e: 'update:contact_email', value: string): void
  (e: 'update:whatsapp_no', value: string): void
  (e: 'update:admin_maker_checker', value: string): void
}
interface Props {
  page_title: string
  admin_logo: []
  favicon: []
  weekly_off: string
  date_format: string
  contact_no: string
  whatsapp_no: string
  contact_email: string
  logo_url: string
  favicon_url: string
  admin_maker_checker: boolean
}

const formData = ref({
  page_title: ref(props.page_title),
  admin_logo: ref(props.admin_logo),
  favicon: ref(props.favicon),
  weekly_off: ref(props.weekly_off),
  date_format: ref(props.date_format),
  contact_no: ref(props.contact_no),
  whatsapp_no: ref(props.whatsapp_no),
  contact_email: ref(props.contact_email),
  admin_maker_checker: ref(props.admin_maker_checker),
})

const week_items = ['Saturday', 'Sunday', 'Friday - Saturday', 'Saturday - Sunday', '2nd and 4th Saturday and all Sundays']
const date_formats = ['DD/MM/YYYY (Ex. 12/02/2020)', 'MM/DD/YYYY (Ex. 02/12/2020)', 'DD-MM-YYYY (Ex. 12-02-2020)', 'MM-DD-YYYY (Ex. 02-12-2020)', 'DD-MMM-YYYY (Ex. 12-Feb-2020)', 'DD MMM YYYY (Ex. 02 Feb 2020)']

watch(() => formData.value.page_title, newValue => emit('update:page_title', newValue))
watch(() => formData.value.admin_logo, newValue => emit('update:admin_logo', newValue))
watch(() => formData.value.favicon, newValue => emit('update:favicon', newValue))
watch(() => formData.value.weekly_off, newValue => emit('update:weekly_off', newValue))
watch(() => formData.value.date_format, newValue => emit('update:date_format', newValue))
watch(() => formData.value.contact_no, newValue => emit('update:contact_no', newValue))
watch(() => formData.value.whatsapp_no, newValue => emit('update:whatsapp_no', newValue))
watch(() => formData.value.contact_email, newValue => emit('update:contact_email', newValue))
watch(() => formData.value.admin_maker_checker, newValue => emit('update:admin_maker_checker', newValue))

const logoTitle = 'Drag and drop your logo here'
const favTitle = 'Drag and drop your favicon here'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h6 class="text-h6 font-weight-medium">
        Configurations Details
      </h6>
      <p class="mb-0">
        Enter your Config Details
      </p>
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <AppTextField
        v-model="formData.page_title"
        placeholder="Page Title"
        label="Page Title"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <p>Admin Logo</p>
      <div class="pb-5">
        <img
          :src="props.logo_url"
          height="100"
          width="100"
          alt=""
        >
      </div>
      <ConfigFile
        v-model:file="formData.admin_logo"
        v-model:title="logoTitle"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <p>Favicon</p>
      <div class="pb-5">
        <img
          :src="props.favicon_url"
          height="100"
          width="100"
          alt=""
        >
      </div>
      <!--
        <VFileInput
        v-model="formData.favicon"
        accept="image/*"
        label="Favicon"
        />
      -->
      <ConfigFile
        v-model:file="formData.favicon"
        v-model:title="favTitle"
      />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
    <VSwitch
      v-model="formData.admin_maker_checker"
      label="Enable Maker Checker"
    />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <AppSelect
        v-model="formData.weekly_off"
        :items="week_items"
        placeholder="Select Week Off"
        label="Weekly Off"
        chips
        closable-chips
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AppSelect
        v-model="formData.date_format"
        :items="date_formats"
        placeholder="Date Format"
        label="Select Date Format"
        chips
        closable-chips
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.contact_no"
        placeholder="Help Page Contact Number"
        label="Help Page Contact Number"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.whatsapp_no"
        placeholder="Whatsapp Number"
        label="Whatsapp Number"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AppTextField
        v-model="formData.contact_email"
        placeholder="Help Page Contact Email"
        label="Help Page Contact Email"
      />
    </VCol>
  </VRow>
</template>
