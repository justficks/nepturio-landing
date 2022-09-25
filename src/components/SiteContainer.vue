<template>
  <div
    :class="{
      'mt-2': $vuetify.display.smAndDown,
    }"
  >
    <div
      class="mb-8"
      id="services"
      :class="[
        {
          'pt-16': $vuetify.display.smAndDown,
        },
        {
          'mt-6': $vuetify.display.mdAndUp,
        },
      ]"
    >
      <ServicesContainer />
    </div>
    <div
      class="mb-8"
      id="devsteps"
      :class="[
        {
          'pt-16': $vuetify.display.smAndDown,
        },
        {
          'mt-6': $vuetify.display.mdAndUp,
        },
      ]"
    >
      <DevStepsContainer />
    </div>
    <div
      class="mb-8"
      id="devtools"
      :class="[
        {
          'pt-16': $vuetify.display.smAndDown,
        },
        {
          'mt-6': $vuetify.display.mdAndUp,
        },
      ]"
    >
      <DevToolsContainer />
    </div>
    <div
      class="mb-8"
      id="portfolio"
      :class="[
        {
          'pt-16': $vuetify.display.smAndDown,
        },
        {
          'mt-6': $vuetify.display.mdAndUp,
        },
      ]"
    >
      <PortfolioContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import useEventsBus from '../plugins/Mitt';
import DevStepsContainer from './DevSteps/DevStepsContainer.vue';
import DevToolsContainer from './DevTools/DevToolsContainer.vue';
import PortfolioContainer from './Portfolio/PortfolioContainer.vue';
import ServicesContainer from './Services/ServicesContainer.vue';

const { bus } = useEventsBus();

watch(
  () => bus.value.get('scrollToSection'),
  id => {
    let el = document.querySelector(`#${id.toString()}`);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
);
</script>

<style lang="scss" scoped></style>
