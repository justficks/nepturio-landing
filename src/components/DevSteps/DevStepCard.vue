<template>
  <div>
    <v-card
      flat
      class="d-flex justify-center align-center flex-column flex-md-row"
    >
      <div class="d-flex justify-center align-center circle pa-4">
        <p
          class="pa-0 ma-0 text-h3 d-flex justify-center align-center stepNum font-weight-regular"
          style="font-family: 'IBM Plex Mono' !important"
        >
          {{ id }}
        </p>
      </div>
      <div>
        <v-card-title
          class="subtitle-custom text-subtitle-1 text-md-h7 text-center text-md-left font-weight-bold"
          style="font-family: 'IBM Plex Mono' !important"
          >{{ title }}</v-card-title
        >
        <v-card-text class="text-center text-md-left">{{
          description
        }}</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
});
</script>

<style scoped>
.circle {
  border: 8px solid #4e5ccd;
  border-radius: 50%;
}
.stepNum {
  height: 50px;
  width: 50px;
  color: #4e5ccd;
}
</style>
