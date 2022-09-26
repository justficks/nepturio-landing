<template>
  <div>
    <v-card flat class="d-flex justify-center align-center flex-column flex-md-row">
      <div class="d-flex justify-center align-center circle pa-2">
        <p
          class="pa-0 ma-0 d-flex justify-center align-center stepNum font-weight-regular"
          :style="{
            fontFamily: 'IBM Plex Mono !important',
            fontSize: $vuetify.display.smAndDown ? '36px' : '30px',
          }"
        >
          {{ id }}
        </p>
      </div>
      <div>
        <v-card-title
          class="subtitle-custom text-center text-md-left font-weight-bold text-wrap"
          :style="{
            fontSize: $vuetify.display.smAndDown ? '14px' : $vuetify.display.md ? '12px' : '14px',
            fontFamily: 'IBM Plex Mono !important',
          }"
        >
          {{ title }}
        </v-card-title>
        <v-card-text class="text-center text-md-left">{{ description }}</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<style scoped>
.circle {
  border: 4px solid #4e5ccd;
  border-radius: 50%;
}
.stepNum {
  height: 50px;
  width: 50px;
  color: #4e5ccd;
}
</style>
