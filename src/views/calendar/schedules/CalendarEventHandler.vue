<script lang="ts" setup>
import type { Options } from 'flatpickr/dist/types/options'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'

import type { Event, NewEvent } from './types'
import { useCalendarStore } from './useCalendarStore'

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:isDrawerOpen', val: boolean): void
  (e: 'addEvent', val: NewEvent): void
  (e: 'updateEvent', val: Event): void
  (e: 'removeEvent', eventId: string): void
}>()

interface Guest {
  id: string
  name: string
  avatar: string
}

interface LeadName {
  id: number
  name: string
}

interface ApiResponse {
  data?: Guest[]
}

interface CalendarItem {
  label: string
  color: string
}

interface Props {
  isDrawerOpen: boolean
  id?: number
  event: (Event | NewEvent)
}

const pipelineID = toRef(props, 'id')

// 👉 store
const store = useCalendarStore()
const refForm = ref<VForm>()

// 👉 Event
const event = ref<Event>(JSON.parse(JSON.stringify(props.event)))

const resetEvent = () => {
  event.value = JSON.parse(JSON.stringify(props.event))
  nextTick(() => {
    refForm.value?.resetValidation()
  })
}

watch(() => props.isDrawerOpen, resetEvent)

const removeEvent = () => {
  emit('removeEvent', String((event.value as Event).id))

  // Close drawer
  emit('update:isDrawerOpen', false)
}

const handleSubmit = () => {
  refForm.value?.validate()
    .then(({ valid }) => {
      if (valid) {
        // If id exist on id => Update event
        if ('id' in event.value)
          emit('updateEvent', event.value)

        // Else => add new event
        else
          emit('addEvent', event.value)

        // Close drawer
        emit('update:isDrawerOpen', false)
      }
    })
}

const { data: namesData, execute: fetchLeadName } = await useApi<LeadName[] | null>(createUrl('/get/lead/names'))
const { data: usersData, execute: fetchGuests } = await useApi<ApiResponse | null>(createUrl('/get/UI/invited/guest'))

const leadNames = computed(() => {
  if (!usersData.value || !usersData.value.data)
    return []

  return usersData.value.data
})

const names: Ref<LeadName[] | null> = computed(() => namesData.value)

fetchLeadName()
fetchGuests()

const onCancel = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    resetEvent()
    refForm.value?.resetValidation()
  })
}

const startDateTimePickerConfig = computed(() => {
  const config: Options = { enableTime: !event.value.allDay, dateFormat: `Y-m-d${event.value.allDay ? '' : ' H:i'}` }

  if (event.value.end)
    config.maxDate = event.value.end

  return config
})

const endDateTimePickerConfig = computed(() => {
  const config: Options = { enableTime: !event.value.allDay, dateFormat: `Y-m-d${event.value.allDay ? '' : ' H:i'}` }

  if (event.value.start)
    config.minDate = event.value.start

  return config
})

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const title = computed({
  get() {
    return pipelineID.value === 0 ? event.value.title : pipelineID.value
  },
  set(value) {
    console.log('Value', value)
    if (pipelineID.value)
      event.value.title = String(pipelineID.value)
    else
      event.value.title = String(value)
  },
})

onMounted(() => {
  const scheduleID = useCookie('scheduleIDCookie').value
  if (scheduleID) {
    pipelineID.value = Number(scheduleID)
    event.value.title = String(pipelineID.value)
  }
})
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    class="scrollable-content"
    location="end"
    temporary
    width="420"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      :title="event.id ? 'Update Event' : 'Add Event'"
      @cancel="$emit('update:isDrawerOpen', false)"
    >
      <template #beforeClose>
        <IconBtn
          v-show="event.id"
          @click="removeEvent"
        >
          <VIcon
            icon="tabler-trash"
            size="18"
          />
        </IconBtn>
      </template>
    </AppDrawerHeaderSection>

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- SECTION Form -->
          <VForm
            ref="refForm"
            @submit.prevent="handleSubmit"
          >
            <VRow>
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="event.title"
                  label="Title"
                  placeholder="Meeting with Jane"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Calendar -->
              <VCol cols="12">
                <AppSelect
                  v-model="event.extendedProps.calendar"
                  :item-title="(item:CalendarItem) => item.label"
                  :item-value="(item:CalendarItem) => item.label"
                  :items="store.availableCalendars"
                  :rules="[requiredValidator]"
                  label="Type of Event"
                  placeholder="Select type of Event"
                >
                  <template #selection="{ item }">
                    <div
                      v-show="event.extendedProps.calendar"
                      :class="event.extendedProps.calendar ? 'd-flex' : ''"
                      class="align-center"
                    >
                      <VBadge
                        :color="item.raw.color"
                        class="pa-1 pb-2"
                        dot
                        inline
                      />
                      <span>{{ item.raw.label }}</span>
                    </div>
                  </template>
                </AppSelect>
              </VCol>

              <!-- 👉 Start date -->
              <VCol cols="12">
                <AppDateTimePicker
                  :key="JSON.stringify(startDateTimePickerConfig)"
                  v-model="event.start"
                  :config="startDateTimePickerConfig"
                  :rules="[requiredValidator]"
                  label="Start date"
                  placeholder="Select Date"
                />
              </VCol>

              <!-- 👉 End date -->
              <VCol cols="12">
                <AppDateTimePicker
                  :key="JSON.stringify(endDateTimePickerConfig)"
                  v-model="event.end"
                  :config="endDateTimePickerConfig"
                  :rules="[requiredValidator]"
                  label="End date"
                  placeholder="Select End Date"
                />
              </VCol>

              <!-- 👉 All day -->
              <VCol cols="12">
                <VSwitch
                  v-model="event.allDay"
                  label="All day"
                />
              </VCol>

              <!-- 👉 Event URL -->
              <VCol cols="12">
                <AppTextField
                  v-model="event.url"
                  :rules="[urlValidator]"
                  label="Event URL"
                  placeholder="https://event.com/meeting"
                  type="url"
                />
              </VCol>

              <!-- 👉 Guests -->
              <VCol cols="12">
                <AppSelect
                  v-model="event.extendedProps.guests"
                  :item-title="(item:Guest) => item.name"
                  :item-value="(item:Guest) => item.name"
                  :items="leadNames"
                  chips
                  eager
                  label="Guests"
                  multiple
                  placeholder="Select Lead"
                />
              </VCol>

              <!-- 👉 Location -->
              <VCol cols="12">
                <AppTextField
                  v-model="event.extendedProps.location"
                  label="Location"
                  placeholder="Meeting room"
                />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea
                  v-model="event.extendedProps.description"
                  label="Description"
                  placeholder="Meeting description"
                />
              </VCol>

              <!-- 👉 Form buttons -->
              <VCol cols="12">
                <VBtn
                  class="me-3"
                  type="submit"
                >
                  Submit
                </VBtn>
                <VBtn
                  color="secondary"
                  variant="outlined"
                  @click="onCancel"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
          <!-- !SECTION -->
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
