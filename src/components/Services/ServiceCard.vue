<template>
  <v-card
    class="elevation-8 d-flex flex-column justify-center align-center pa-2 px-4 rounded-lg"
    style="background-color: transparent"
    height="100%"
  >
    <v-img :src="img" width="80" />
    <v-card-title
      class="font-weight-bold subtitle-custom text-center"
      :class="[{ 'text-body-2': $vuetify.display.mdAndUp }]"
      :style="{
        fontSize: $vuetify.display.smAndDown ? `14px` : '16px',
        fontFamily: 'IBM Plex Mono !important',
      }"
    >
      {{ title }}
    </v-card-title>
    <v-card-text
      class="text-body-2 text-center"
      style="font-family: 'IBM Plex Mono' !important"
    >
      {{ short_description }}
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn variant="plain" color="#4E5CCD" @click="handlerServiceCard">
        ПОДРОБНЕЕ
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, default: 1 },
  title: { type: String, default: '' },
  short_description: { type: String, default: '' },
  description: { type: Array, default: [] },
  img: { type: String, default: '' },
});

const emits = defineEmits(['handlerServiceCard']);
const handlerServiceCard = () => emits('handlerServiceCard');
</script>

<style lang="scss" scoped></style>
