<template>
  <div class="splash">
    <h1>NEPTURIO</h1>
    <h4 class="mb-4">команда разработчиков</h4>
    <img :src="Neptune" :width="$vuetify.display.smAndDown ? '250' : '350'" class="planet" />
    <svg
      :width="$vuetify.display.smAndDown ? '320' : '420'"
      :height="$vuetify.display.smAndDown ? '320' : '400'"
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="path"
    >
      <circle
        cx="0"
        cy="0"
        :r="$vuetify.display.smAndDown ? '130' : '150'"
        stroke="none"
        stroke-width="3"
        fill="none"
      />
    </svg>
    <img :src="Rocket" width="70" class="rocket" />
    <v-btn prepend-icon="mdi-rocket" class="rounded-pill btn mt-4" variant="outlined" size="large" @click="start">
      НАЖМИ НА МЕНЯ
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { rocketAnimation } from '@/animation'
import Neptune from '@/assets/neptune.png'
import Rocket from '@/assets/Rocket.png'
import useEventBus from '@/plugins/Mitt'
import { onMounted } from 'vue'

const { emit } = useEventBus()

const start = () => {
  emit('scrollToSection', 'services')
}

onMounted(() => {
  rocketAnimation('circle', '.rocket')
})
</script>

<style scoped>
.splash {
  background-color: #b8dce8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: inherit;
}
.path {
  position: absolute;
  z-index: 10;
}
.rocket {
  transform: translateY(-180px);
  position: absolute;
  z-index: 5;
}
.btn {
  z-index: 20;
}
</style>
