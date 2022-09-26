<template>
  <div>
    <v-dialog activator="parent" scrollable @click:outside="closeDialog" v-model="dialog">
      <v-card class="d-flex justify-center align-center flex-column pa-2 w-100">
        <img :src="`${currentPortfolio.img}`" class="w-100" />

        <v-divider />
        <v-card-text
          class="d-flex justify-center akign-start flex-column text-left w-100"
          :style="{
            fontSize: $vuetify.display.smAndDown ? `14px` : '20px',
            fontFamily: 'IBM Plex Mono',
          }"
        >
          <p class="ma-0 pa-0 mb-4">{{ currentPortfolio.description }}</p>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn variant="plain" @click="closeDialog">ЗАКРЫТЬ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { usePortfolioStore } from '../../store/portfolio'

const emits = defineEmits(['closeEmitDialog'])
const props = defineProps({
  dialog: { type: Boolean, default: false },
})

const store = usePortfolioStore()
const currentPortfolio = computed(() => store.currentPortfolio)

const closeDialog = () => {
  emits('closeEmitDialog')
}
</script>

<style scoped></style>
