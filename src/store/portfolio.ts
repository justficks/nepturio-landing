import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    currentPortfolio: {
      id: 1 as number,
      title: '' as string,
      img: '' as string,
      description: '' as string,
    },
    dialog: false as boolean,
  }),
  actions: {
    setCurrentPortfolio(
      id: number,
      title: string,
      img: string,
      description: string,
    ) {
      this.currentPortfolio = {
        id,
        title,
        img,
        description,
      };
      this.dialog = true;
    },
    closeDialog() {
      this.currentPortfolio = {
        id: 1,
        title: '',
        img: '',
        description: '',
      };
      this.dialog = false;
    },
  },
});
