<template>
  <v-card
    class="pa-2 elevation-4 d-flex justify-center align-center flex-column"
    height="100%"
  >
    <v-img :src="img" width="300" />
    <v-card-actions>
      <v-btn variant="plain" color="#4E5CCD">ПОДРОБНЕЕ</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, defualt: 1 },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  img: { type: String, default: '' },
});
</script>
