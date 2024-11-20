<script setup lang="ts">
import { VOtpInput } from 'vuetify/labs/VOtpInput'
import { useRouter, useRoute } from 'vue-router'
import { ref, nextTick, computed, onMounted, onUnmounted } from 'vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-two-step-illustration-dark.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-two-step-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { VForm } from 'vuetify/components'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const authThemeImg = useGenerateImageVariant(authV2ForgotPasswordIllustrationLight, authV2ForgotPasswordIllustrationDark)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

const router = useRouter()
const route = useRoute()
const ability = useAbility()

const otp = ref('')
const isOtpInserted = ref(false)

const errors = ref<Record<string, string | undefined>>({
  otp: undefined,
})

const refVForm = ref<VForm>()

const credentials = ref({
  email: route.query.email as string || '', 
  otp: '',
})

const resendMessage = ref<string | null>(null)

if (!credentials.value.email) {
  router.push('/') 
}

// const onFinish = async () => {
//   isOtpInserted.value = true
//   try {
//     const res = await $api('/admin/auth/UI/verify', {
//       method: 'POST',
//       body: {
//         email: credentials.value.email,
//         otp: credentials.value.otp,
//       },
//       onResponseError({ response }) {
//         errors.value = response._data.errors
//         credentials.value.otp = ''
//         toast.error("Invalid OTP, please try again.")
//       },
//     })

//     const { accessToken, userData, permissions } = res

//     useCookie('yofAbilities').value = permissions
//     localStorage.setItem('permissions', JSON.stringify(permissions))

//     useCookie('userData').value = userData
//     useCookie('adminAccessToken').value = accessToken

//     toast.success("OTP Verified! Redirecting...")

//     // Directly redirect after showing the toast
//     router.replace(route.query.to ? String(route.query.to) : '/')
//   } catch (err) {
//     console.error(err)
//     toast.error("An error occurred during OTP verification.")
//   } finally {
//     isOtpInserted.value = false // Reset the loading state
//   }
// }

const onFinish = async () => {
  isOtpInserted.value = true
  try {
    const res = await $api('/admin/auth/UI/verify', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        otp: credentials.value.otp,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
        const otpError = response._data.errors?.otp?.[0] || "Invalid OTP, please try again."
        toast.error(otpError) // Display the first error message from the backend
      },
    })

    const { accessToken, userData, permissions } = res

    useCookie('yofAbilities').value = permissions
    localStorage.setItem('permissions', JSON.stringify(permissions))

    useCookie('userData').value = userData
    useCookie('adminAccessToken').value = accessToken
    ability.update(permissions)

    toast.success("OTP Verified! Redirecting ...")

    await new Promise(resolve => setTimeout(resolve, 3000))

    router.replace(route.query.to ? String(route.query.to) : '/')

    await nextTick()
  } catch (err) {
    console.error(err)
  } finally {
    isOtpInserted.value = false 
  }
}


const onSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) {
      onFinish()
    }
  })
}

const countdown = ref(120)
let timer: ReturnType<typeof setInterval>

const startTimer = () => {
  countdown.value = 120
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

const resendOtp = async () => {
  try {
    await $api('/crm/auth/UI/resend-otp', {
      method: 'POST',
      body: {
        email: credentials.value.email,
      },
    })
    resendMessage.value = 'OTP has been resent to your email.'
    toast.success("OTP resent successfully.")
    startTimer() 
  } catch (err) {
    console.error('Error resending OTP:', err)
    toast.error("Failed to resend OTP, please try again.")
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})

const formattedCountdown = computed(() => {
  const minutes = Math.floor(countdown.value / 60)
  const seconds = countdown.value % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})
</script>


<template>
  <VRow class="auth-wrapper bg-surface" no-gutters>
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg max-width="418" :src="authThemeImg" class="auth-illustration mt-16 mb-2" />
        </div>
        <VImg class="auth-footer-mask" :src="authThemeMask" />
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />

          <h4 class="text-h4 mb-1">Two Step Verification 💬</h4>
          <p class="mb-2">
            We sent a verification code to {{ credentials.email }}. Enter the code from the email in the field below.
          </p>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="12">
                <VOtpInput v-model="credentials.otp" :disabled="isOtpInserted" type="number" class="pa-0" @finish="onFinish" />
              </VCol>
              <VCol cols="12">
                <VBtn block :loading="isOtpInserted" :disabled="isOtpInserted" type="submit">
                  Verify my account
                </VBtn>
              </VCol>
              <VCol cols="12">
                <div class="d-flex justify-center align-center flex-wrap">
                  <span class="me-1">Didn't get the code?</span>
                  <span v-if="countdown > 0">{{ formattedCountdown }}</span>
                  <a v-else href="#" @click.prevent="resendOtp">Resend</a>
                </div>
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

.text-red-500 {
  color: red;
  text-align: center;
}

.text-green-500 {
  color: green;
  text-align: center;
}
</style>
