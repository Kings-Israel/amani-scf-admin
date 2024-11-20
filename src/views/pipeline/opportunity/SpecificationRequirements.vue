<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VCard class="p-2 m-5">
      <VCol>
        <VRow>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <!-- 👉 Last Name -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              placeholder="Doe"
            />
          </VCol>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <!-- 👉 City -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="city"
              label="City"
              placeholder="New York"
            />
          </VCol>
          <!-- 👉 Country -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="country"
              label="Country"
              placeholder="United States"
            />
          </VCol>
          <!-- 👉 Company -->
          <VCol
            cols="12"
            md="6"
          >
            <AppTextField
              v-model="company"
              label="Company"
              placeholder="Pixinvent"
            />
          </VCol>
          <VCol
            cols="12"
            class="d-flex gap-4"
          />
        </VRow>
      </VCol>
    </VCard>
  </VForm>
</template>
