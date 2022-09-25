<template>
  <div>
    <v-dialog
      v-model="dialog"
      activator="parent"
      @click:outside="closeEmitDialog"
      max-width="350px"
      scrollable
    >
      <v-card class="d-flex justify-center align-center flex-column pa-2 w-100">
        <v-card-title
          class="font-weight-bold"
          :style="{
            fontSize: $vuetify.display.smAndDown ? `14px` : '20px',
            fontFamily: 'IBM Plex Mono',
          }"
        >
          {{ currentService.title }}
        </v-card-title>
        <v-divider />
        <v-card-text
          class="d-flex justify-center align-start flex-column text-left w-100"
        >
          <p
            v-for="text in currentService.description"
            :key="text"
            class="ma-0 pa-0 mb-4"
          >
            {{ text }}
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn variant="plain" @click="closeEmitDialog">ЗАКРЫТЬ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useServiceStore } from '@/store/service';
import { computed } from 'vue';

const store = useServiceStore();
const currentService = computed(() => store.currentService);

const props = defineProps({
  dialog: { type: Boolean, default: false },
});

const emits = defineEmits(['closeEmitDialog']);

const closeEmitDialog = () => {
  emits('closeEmitDialog');
};
</script>
