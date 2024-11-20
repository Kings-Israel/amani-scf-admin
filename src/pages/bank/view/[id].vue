<script lang="ts" setup>
import BankAddNewUser from '@/views/bank/view/BankAddNewUser.vue'
import BankBioPanel from '@/views/bank/view/BankBioPanel.vue'
import BankLogoConfig from '@/views/bank/view/BankLogoConfig.vue'
import BankMapNewUser from '@/views/bank/view/BankMapNewUser.vue'
import BankTabAccount from '@/views/bank/view/BankTabAccount.vue'
import BankTabConfig from '@/views/bank/view/BankTabConfig.vue'
import BankTaxesConfig from '@/views/bank/view/BankTaxesConfig.vue'
import BankTermsConfig from '@/views/bank/view/BankTermsConfig.vue'
import BankUserManual from '@/views/bank/view/BankUserManual.vue'
import BankRatesConfig from '@/views/bank/view/BaseRatesConfig.vue'

definePage({
  meta: {
    action: 'manage',
    subject: 'Edit Banks & Mapping',
  },
})

const route = useRoute('bank-view-id')

const userTab = ref(0)

const tabs = [
  { icon: 'tabler-user-check', title: 'Account' },
  { icon: 'tabler-affiliate', title: 'Add New User' },
  { icon: 'tabler-arrow-left-right', title: 'Map a User' },
  { icon: 'tabler-arrow-left-right', title: 'Configurations' },
  { icon: 'tabler-arrow-left-right', title: 'Logo & Appearance' },
  { icon: 'tabler-arrow-left-right', title: 'Base Rates' },
  { icon: 'tabler-arrow-left-right', title: 'Taxes' },
  { icon: 'tabler-arrow-left-right', title: 'User Manuals' },

  // { icon: 'tabler-arrow-left-right', title: 'Terms & Conditions' },
]

interface Props {
  userData: {
    id: number
    bank: string
    email: string
    url: string
    contactPerson: string
    status: string
    approval_status: string

  }
}

const { data: userData } = await useApi<any>(`/get/bank/${route.params.id}`)
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      lg="4"
      md="5"
    >
      <BankBioPanel :user-data="userData" />
    </VCol>

    <VCol
      cols="12"
      lg="8"
      md="7"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            :icon="tab.icon"
            :size="18"
            class="me-1"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        :touch="false"
        class="mt-6 disable-tab-transition"
      >
        <VWindowItem>
          <BankTabAccount />
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active'">
            <BankAddNewUser />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active'">
            <BankMapNewUser />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active' ">
            <BankTabConfig />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active' ">
            <BankLogoConfig />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active' ">
            <BankRatesConfig />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active'">
            <BankTaxesConfig />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active' ">
            <BankUserManual />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>
        <VWindowItem>
          <div v-if="userData.status === 'active'">
            <BankTermsConfig />
          </div>
          <div v-else>
            <div
              style="
                display: flex;
                justify-content: center; 
                align-items: center; 
                height: 100%;
              "
            >
              <div
                role="alert"
                style="
                  width: 70%;
                  max-width: 500px; 
                  height: 60%;
                  max-height: 300px; 
                  text-align: center;
                  background-color: rgba(255, 0, 0, 0.1);
                  border: 1px solid red;
                  border-radius: 50px;
                  padding: 20px;
                "
              >
                <strong style="color: red;">Bank has not been Approved</strong>
                <p>Please check back later or contact support for more information.</p> 
              </div>
            </div>
          </div>
        </VWindowItem>

      </VWindow>
    </VCol>
  </VRow>
  <VCard v-else>
    <VCardTitle class="text-center">
      No User Found
    </VCardTitle>
  </VCard>
</template>
