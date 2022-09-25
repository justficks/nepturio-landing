<template>
  <div>
    <p
      class="text-h5 text-md-h4 text-center pa-0 ma-0 title-custom"
      style="font-family: 'IBM Plex Mono' !important"
    >
      СРЕДСТВА РАЗРАБОТКИ
    </p>
    <v-row align="stretch" justify="center" class="mx-4 mt-4">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="3"
        v-for="tool in devtools"
        :key="tool.id"
      >
        <DevToolCard :id="tool.id" :titles="tool.titles" :img="tool.img" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MONGO from '../../assets/mongo.svg';
import ReactIcon from '../../assets/react.svg';
import TSIcon from '../../assets/ts.svg';
import VueIcon from '../../assets/vue.svg';
import DevToolCard from './DevToolCard.vue';

const devtools = ref([
  { id: 1, img: ReactIcon, titles: ['REACT JS', 'REACT NATIVE'] },
  { id: 2, img: VueIcon, titles: ['VUE 3', 'NUXT JS'] },
  { id: 3, img: TSIcon, titles: ['TYPESCRIPT', 'NEST JS'] },
  { id: 4, img: MONGO, titles: ['MONGO DB', 'PostgreSQL'] },
]);
</script>

<style lang="scss" scoped></style>
