<script lang="ts" setup>
import AllRoles from '@/pages/users/edit-role/AllRoles.vue';
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

const router = useRouter()
const route = useRoute('users-edit-role-id')
const { data: userData } = await useApi<any>(`/UI/roles/permissions/${route.params.id}`)

const groupData = ref<Group[]>([])
const RoleName = ref<string>(userData.value.permissions[0].RoleName)
const RoleTypeName = ref<string>(userData.value.permissions[0].RoleTypeName)
const RoleTypes = ref<string[]>([])
const RoleDescription = ref<string>(userData.value.permissions[0].RoleDescription)
const roleIds = ref<number[]>([])
const currentids = ref([])

currentids.value = userData.value.permissions


const numberedSteps = [
  {
    title: 'Role Details',
    subtitle: 'Setup Role Details',
  },
  {
    title: 'Draft',
    subtitle: 'Available Drafts',
  },
]

const currentStep = ref(0)
const isFlatSnackbarVisible = ref(false)

const onSubmit = async () => {
  try {
    const res = await $api(`/UI/roles/${route.params.id}/rolename/update`, {
      method: 'POST',
      body: {
        RoleName: RoleName.value,
        RoleTypeName: RoleTypeName.value,
        RoleDescription: RoleDescription.value,
        RoleIDs: selectedIds.value,
      },
      onResponseError({ response }) {
        console.log('Error', response)
      },
    })

    const { message } = res

    console.log(message)
    await nextTick(() => {
      isFlatSnackbarVisible.value = true
      router.push('/users/role')
    })
  }
  catch (err) {
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
}

const submittedIds = (ids: number[]) => {
  ids.forEach(id => {
    if (!roleIds.value.includes(id))
      roleIds.value.push(id)
  })
}

const { data: roleData, execute: fetchRoles } = await useApi<any>(createUrl('/UI/roles/permissions'))

const roles: Ref<RoleType[]> = computed(() => roleData.value)

const selectedIds = ref<number[]>([]);

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
    Role updated successfully
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
                      <AppTextField
                        v-model="RoleName"
                        :rules="[requiredValidator]"
                        label="Role Name"
                        placeholder="Role"
                        disabled
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
                      Update
                    </VBtn>
                  </div>
                  <VDivider class="my-4" />
                  <AllRoles
                    v-if="groupData && groupData.length > 0"
                    :currentdata="currentids"
                    :group="groupData"
                    @checkboxChanged="handleCheckboxChange"
                    v-model:selectedIds="selectedIds"
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
