<template>
  <v-app-bar
    app
    color="rgba(78, 92, 205, 0.8)"
    style="backdrop-filter: blur(5px)"
  >
    <v-app-bar-title
      style="color: #e3e3e3; letter-spacing: 5%"
      @click="scrollToTop"
    >
      NEPTURIO
    </v-app-bar-title>

    <v-spacer />

    <font-awesome-icon
      :icon="faBars"
      color="#e3e3e3"
      class="mr-4 fa-xl"
      @click.stop="handlerDrawer"
    />
  </v-app-bar>
</template>

<script setup lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
import useEventsBus from '../plugins/Mitt';

const { emit } = useEventsBus();

const drawer = ref(false);

const handlerDrawer = () => {
  drawer.value = !drawer.value;
  emit('handlerDrawer', drawer.value);
};

const scrollToTop = () => {
  emit('scrollToTop');
};
</script>
