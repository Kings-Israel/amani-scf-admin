<script lang="ts" setup>
const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  isChanged: false,
})

const emit = defineEmits(['changed'])
const isChanged = ref(props.isChanged)

const emitChanged = () => {
  emit('changed', props.index)
  isChanged.value = !isChanged
}

interface Props {
  index: number
  title: string
  color?: string
  stats: string
  isChanged?: boolean
}
</script>

<template>
  <VCard>
    <VCardText
      class="d-flex align-center justify-space-between"
      @click="emitChanged"
    >
      <div>
        <div class="d-flex align-center flex-wrap">
          <span
            :style="{ color: isChanged ? $vuetify.theme.global.current.colors.primary : 'inherit' }"
            class="text-h5"
          >{{ props.stats }}</span>
        </div>
        <span
          :style="{ color: isChanged ? $vuetify.theme.global.current.colors.primary : 'inherit' }"
          class="text-body-2"
        >{{ props.title }}</span>
      </div>
    </VCardText>
  </VCard>
</template>
