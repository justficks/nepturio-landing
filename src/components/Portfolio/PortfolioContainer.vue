<template>
  <div>
    <p
      class="text-h5 text-md-h4 text-center pa-0 ma-0 title-custom"
      style="font-family: 'IBM Plex Mono' !important"
    >
      ПОРТФОЛИО
    </p>
    <p
      class="text-subtitle-2 text-center pa-0 ma-0 mt-2 subtitle-custom mx-4"
      style="font-family: 'IBM Plex Mono' !important"
    >
      Наши последние работы по разработке веб-приложений, сайтов, сервисов и
      мобильных приложений.
    </p>
    <PortfolioCarousel />
  </div>
</template>

<script setup lang="ts">
import PortfolioCarousel from './PortfolioCarousel.vue';
</script>

<style lang="scss" scoped></style>
