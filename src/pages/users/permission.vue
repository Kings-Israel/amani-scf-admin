<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import AllRoles from '@/pages/users/AllRoles.vue';
import type { Group, RoleType } from '@/pages/users/index';
import { ref } from 'vue';
import { VForm } from 'vuetify/components/VForm';

definePage({
  meta: {
    navActiveLink: 'users-role',
    action: 'manage',
    subject: 'Manage Roles',
  },
})

const groupData = ref<Group[]>([])
const RoleName = ref<string>('')
const RoleTypeName = ref<string>('Bank')
const RoleTypes = ref<string[]>([])
const RoleDescription = ref<string>('')
const roleIds = ref<number[]>([])

const numberedSteps = [
  {
    title: 'Role Details',
    subtitle: 'Setup Role Details',
  },
]

const router = useRouter()
const currentStep = ref(0)
const isFlatSnackbarVisible = ref(false)

const onSubmit = async () => {
  try {
    const res = await $api('/UI/roles/permissions/data', {
      method: 'POST',
      body: {
        RoleName: RoleName.value,
        RoleTypeName: RoleTypeName.value,
        RoleDescription: RoleDescription.value,
        RoleIDs: roleIds.value,
      },
      onResponseError({ response }) {
        console.error('Error', response)
        const errorMessage = response._data?.message || "An error occurred while saving role permissions."
        toast.error(errorMessage) 
      },
    })

    const { message } = res
    toast.success(message || "Role permissions saved successfully.")

    await nextTick(() => {
      router.push('/users/role')
    })
  } catch (err) {
    console.error(err)
  }
}

const handleCheckboxChange = (changedIds: number[] | number) => {
  // Convert to array if it's not one
  const idsArray = Array.isArray(changedIds) ? changedIds : [changedIds]

  idsArray.forEach(id => {
    if (roleIds.value.includes(id))
      roleIds.value = roleIds.value.filter(roleId => roleId !== id)

    // Remove the id
    else
      roleIds.value.push(id)
  })
  console.log('Updated Role IDs', roleIds.value)
}

const submittedIds = (ids: number[]) => {
  ids.forEach(id => {
    if (!roleIds.value.includes(id))
      roleIds.value.push(id)
  })
}

const { data: roleData, execute: fetchRoles } = await useApi<any>(createUrl('/admin/UI/roles/permissions'))

const roles: Ref<RoleType[]> = computed(() => roleData.value)

watch(RoleTypeName, newRoleTypeName => {
  const roleType = roles.value.find(role => role.name === newRoleTypeName)

  if (roleType)
    groupData.value = roleType.groups
  else
    groupData.value = []
})
watch(groupData, newGroupData => {
  groupData.value = newGroupData
}, {
  immediate: true,
})
onMounted(async () => {
  await fetchRoles()

  RoleTypes.value = roles.value.map(role => role.name)

  watch(RoleTypeName, newRoleTypeName => {
    const matchingRole = roles.value.find(role => role.name === newRoleTypeName)
    if (matchingRole)
      groupData.value = matchingRole.groups
    else
      groupData.value = []
  }, {
    immediate: true,
  })
})
await fetchRoles()
</script>

<template>
  <VSnackbar
    v-model="isFlatSnackbarVisible"
    color="success"
    location="top end"
    variant="flat"
  >
    New Role Added successfully
  </VSnackbar>
  <VForm>
    <VCard>
      <VRow>
        <VCol
          :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
          cols="12"
          md="4"
        >
          <VCardText>
            <!-- 👉 Stepper -->
            <AppStepper
              v-model:current-step="currentStep"
              :items="numberedSteps"
              direction="vertical"
            />
          </VCardText>
        </VCol>
        <!-- 👉 stepper content -->
        <VCol
          cols="12"
          md="8"
        >
          <VCardText>
            <VForm>
              <VWindow
                v-model="currentStep"
                class="disable-tab-transition"
              >
                <VWindowItem>
                  <VRow>
                    <VCol cols="12">
                      <h6 class="text-h6 font-weight-medium">
                        Role Information
                      </h6>
                      <p class="mb-0">
                        Setup Information
                      </p>
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <AppSelect
                        v-model="RoleTypeName"
                        :items="RoleTypes"
                        :rules="[requiredValidator]"
                        label="Role Type"
                        placeholder="Select Role Type"
                      />
                    </VCol>
                    <VCol
                      cols="12"
                      md="6"
                    >
                      <AppTextField
                        v-model="RoleName"
                        :rules="[requiredValidator]"
                        label="Role Name"
                        placeholder="Role"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <AppTextField
                        v-model="RoleDescription"
                        :rules="[requiredValidator]"
                        label="Role Description"
                        placeholder="Role Description"
                      />
                    </VCol>
                  </VRow>
                  <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                    <VBtn
                      append-icon="tabler-check"
                      color="success"
                      @click="onSubmit"
                    >
                      Submit
                    </VBtn>
                  </div>
                  <VDivider class="my-4" />
                  <AllRoles
                    v-if="groupData && groupData.length > 0"
                    :group="groupData"
                    @checkbox-changed="handleCheckboxChange"
                    @update:selected-ids="submittedIds"
                  />
                </VWindowItem>

                <VWindowItem>
                  <VRow>
                    No Drafts
                  </VRow>
                </VWindowItem>
              </VWindow>
            </VForm>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
  </VForm>
</template>
