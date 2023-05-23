<template>
  <div>
    <p>Count is {{ composionStore.count }}</p>
    <p>Double Count is {{ composionStore.doubleCount }}</p>
    <form @submit.prevent="changeCount">
      <input type="number" v-model="cCount" placeholder="Enter number" />
      <button type="submit ">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useCompostionStore } from "./store/compositionStore";
export default {
  data() {
    return {
      cCount: 0,
    };
  },
  computed: {
    ...mapStores(useCompostionStore),
  },
  methods: {
    changeCount() {
      this.composionStore.setCount(this.cCount);
    },
  },
};
</script>

<!-- composition api -->
<!-- <script setup>
import { useUserStore } from "./store/userStore";
import { ref } from "vue";
const usernam = ref("");
const userStore = useUserStore();
const storeUser = () => {
  userStore.setUser(usernam.value);
};
</script>
<template>
  <div>
    <div v-if="userStore.isLoggedIn">
      <h4>Hello {{ userStore.username }}</h4>
    </div>
    <div v-else>
      <h4>Login Gust</h4>
    </div>
    <form @submit.prevent="storeUser">
      <input type="text" v-model="usernam" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template> -->
