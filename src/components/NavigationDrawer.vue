<template>
  <v-navigation-drawer v-model="drawer" app color="rgba(78, 92, 205, 1)">
    <v-list color="transparent" nav temporary>
      <v-list-item
        v-for="section in sections"
        :key="section.id"
        @click="scrollToSection(section.id)"
      >
        <v-list-item-title
          class="text-button text-white"
          style="font-family: 'IBM Plex Mono' !important"
          >{{ section.title }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import useEventsBus from '../plugins/Mitt';

const { emit } = useEventsBus();
const { bus } = useEventsBus();

const drawer = ref(false);

const scrollToSection = (id: string) => {
  emit('scrollToSection', id);
  drawer.value = false;
};

watch(
  () => bus.value.get('handlerDrawer'),
  value => {
    drawer.value = value;
  },
);

const sections = ref([
  { id: 'services', title: 'УСЛУГИ' },
  { id: 'devsteps', title: 'ЭТАПЫ РАЗРАБОТКИ' },
  { id: 'devtools', title: 'СРЕДСТВА РАЗРАБОТКИ' },
  { id: 'portfolio', title: 'ПОРТФОЛИО' },
]);
</script>

<style lang="scss" scoped></style>
