<script setup lang="ts">
import { useConfigStore } from '@core/stores/config'
import congoImg from '@images/illustrations/congo-illustration.png'

const styleObject = reactive({
  background: '',
})

const currentState = ref()
const configStore = useConfigStore()

watch(
  () => configStore.theme,
  newTheme => {
    if (newTheme !== 'light')
      styleObject.background = ''
    else
      styleObject.background = '#FEEEEE'
  },
  { deep: true },
)
</script>

<template>
  <VCard :style="styleObject">
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText>
          <h6 class="text-lg text-no-wrap font-weight-medium">
            Welcome to Financing!
          </h6>
          <p class="mb-2 text-sm">
            You can handle tasks through the {{ currentState }}
          </p>
          <!-- <VBtn @click="toggleUser">Switch to {{ currentState }}</VBtn> -->
        </VCardText>
      </VCol>

      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            height="130"
            class="congo-john-img w-100"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.congo-john-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 1.20rem;
}
</style>
