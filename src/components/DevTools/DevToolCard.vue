<template>
  <v-card
    class="elevation-8 d-flex justify-start align-center flex-column pa-2"
    height="100%"
    color="#4E5CCD"
  >
    <v-img :src="img" width="80" class="mb-4" />
    <v-card-title
      v-for="(title, i) in titles"
      :key="i"
      style="color: #e3e3e3; font-family: 'IBM Plex Mono' !important"
    >
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, default: 1 },
  img: { type: String, default: '' },
  titles: { type: Array, default: [] },
});
</script>

<style scoped></style>
