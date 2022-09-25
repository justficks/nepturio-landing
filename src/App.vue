<template>
  <v-app>
    <SplashContainer id="main" />
    <AppBar v-if="$vuetify.display.smAndDown" />
    <NavigationDrawer v-if="$vuetify.display.smAndDown" />
    <v-main app class="pa-0">
      <SiteContainer />
    </v-main>
    <FooterApp />
  </v-app>
</template>

<script setup lang="ts">
import useEventBus from '@/plugins/Mitt';
import { watch } from 'vue';
import AppBar from './components/AppBar.vue';
import FooterApp from './components/FooterApp.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import SiteContainer from './components/SiteContainer.vue';
import SplashContainer from './components/SplashContainer.vue';

const { bus } = useEventBus();

watch(
  () => bus.value.get('scrollToTop'),
  () => {
    let el = document.querySelector(`#main`);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
);
</script>

<style>
@import './assets/stylus/main.css';
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
*,
p {
  font-family: IBM Plex Mono !important;
}
</style>
