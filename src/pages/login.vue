<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { VForm } from 'vuetify/components/VForm'
import { toast } from "vue3-toastify";
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import "vue3-toastify/dist/index.css";

const clearCookies = () => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
};

const clearCache = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
  }
}

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

onBeforeMount(() => {
  clearCookies();
  clearCache();
});

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

const isPasswordVisible = ref(false)
const isLoggingIn = ref(false)

const route = useRoute()
const router = useRouter()

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

const refVForm = ref<VForm>()

const credentials = ref({
  email: '',
  password: '',
})

const rememberMe = ref(false)

const login = async () => {
  isLoggingIn.value = true
  try {
    const res = await $api('/admin/auth/UI/login', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        throw new Error(response._data.errors ? response._data.errors.email || "Incorrect email or password." : "Login failed.");
      },
    })

    if (res.message) {
      toast.success("Login successful! Redirecting...")

      setTimeout(() => {
        router.push({ name: 'two-steps', query: { email: credentials.value.email } })
      }, 300) 
    }
  } catch (err) {
    console.error(err)
    toast.error(err.message || "An error occurred during login. Please try again later.");
  } finally {
    isLoggingIn.value = false
  }
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      login() 
    }
  })
}
</script>

<template>
  <VRow class="auth-wrapper bg-surface" no-gutters>
    <VCol class="d-none d-lg-flex" lg="8">
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg :src="authThemeImg" class="auth-illustration mt-16 mb-2" max-width="505" />
        </div>
        <VImg :src="authThemeMask" class="auth-footer-mask" />
      </div>
    </VCol>

    <VCol class="auth-card-v2 d-flex align-center justify-center" cols="12" lg="4">
      <VCard :max-width="500" class="mt-12 mt-sm-0 pa-4" flat>
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />
          <h4 class="text-h4 mb-1">
            Welcome to <span class="text-capitalize"> Yofinvoice</span>! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.email"
                  :error-messages="errors.email"
                  :rules="[requiredValidator, emailValidator]"
                  autofocus
                  label="Email"
                  placeholder="user@yofinvoice.com"
                  type="email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  label="Password"
                  placeholder="············"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                  <VCheckbox v-model="rememberMe" label="Remember me" />
                  <RouterLink :to="{ name: 'forgot-password' }" class="text-primary ms-2 mb-1">
                    Forgot Password?
                  </RouterLink>
                </div>

                <VBtn block type="submit" :loading="isLoggingIn" :disabled="isLoggingIn">
                  Login
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
