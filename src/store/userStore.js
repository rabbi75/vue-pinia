import { defineStore } from "pinia";
import { computed, ref, unref } from "vue";

export const useUserStore = defineStore("user", () => {
  // state
  const username = ref();
  // computed property
  const isLoggedIn = computed(() => !!unref(username));
  // action
  const setUser = (name) => {
    username.value = name;
  };
  return { username, isLoggedIn, setUser };
});
