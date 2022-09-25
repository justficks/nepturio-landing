<template>
  <v-footer
    class="d-flex flex-column ma-0 pa-0"
    style="background-color: #4e5ccd"
  >
    <div class="d-flex w-100 justify-center align-center pa-4">
      <a href="https://t.me/bigdendoni">
        <font-awesome-icon
          :icon="faTelegram"
          class="fa-2x mr-4"
          color="#fff"
          style="cursor: pointer"
        />
      </a>
      <a href="mailto:nepturio@mail.ru">
        <font-awesome-icon
          :icon="faEnvelope"
          class="fa-2x mr-4"
          color="#fff"
          style="cursor: pointer"
        />
      </a>
      <a href="tel:+79234874172">
        <font-awesome-icon
          :icon="faPhone"
          class="fa-xl"
          color="#fff"
          style="cursor: pointer"
        />
      </a>
    </div>
    <div
      class="px-4 py-2 text-black text-center w-100"
      style="background-color: #afd2dd"
    >
      {{ new Date().getFullYear() }} — <strong>NEPTURIO</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
