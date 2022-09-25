import { defineStore } from 'pinia';

export const useServiceStore = defineStore('service', {
  state: () => ({
    currentService: {
      id: 1 as number,
      title: '' as string,
      description: [] as string[],
    },
    dialog: false as boolean,
  }),
  actions: {
    setCurrentService(id: number, title: string, description: string[]) {
      this.currentService = {
        id,
        title,

        description: description,
      };
      this.dialog = true;
    },
    closeDialog() {
      this.currentService = {
        id: 1,
        title: '',
        description: [],
      };
      this.dialog = false;
    },
  },
});
