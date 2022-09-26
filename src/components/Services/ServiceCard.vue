<template>
  <v-card class="elevation-8 d-flex flex-column justify-start align-center pa-2 rounded-lg" height="100%">
    <v-img :src="img" width="80" />
    <v-card-title
      class="font-weight-bold subtitle-custom text-center"
      :class="[{ 'text-body-2': $vuetify.display.mdAndUp }]"
      :style="{
        fontFamily: 'IBM Plex Mono !important',
        fontSize: $vuetify.display.smAndDown ? '12px' : '14px',
      }"
    >
      {{ title }}
    </v-card-title>
    <v-card-text
      class="text-center"
      :style="{
        fontFamily: 'IBM Plex Mono !important',
        fontSize: $vuetify.display.smAndDown ? '12px' : '14px',
      }"
    >
      {{ short_description }}
    </v-card-text>
    <v-divider />
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, default: 1 },
  title: { type: String, default: '' },
  short_description: { type: String, default: '' },
  description: { type: Array, default: [] },
  img: { type: String, default: '' },
})
</script>

<style lang="scss" scoped></style>
