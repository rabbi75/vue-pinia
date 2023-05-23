import { defineStore } from "pinia";

export const useCompostionStore = defineStore("composion", {
  state: () => ({
    count: 0,
  }),

  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },

  actions: {
    setCount(v) {
      this.count = v;
    },
  },
});
