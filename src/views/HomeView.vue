<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(255, 60, 165);
  background: radial-gradient(
    circle,
    rgba(255, 60, 165, 1) 5%,
    rgba(255, 153, 208, 1) 17%,
    rgba(255, 255, 255, 1) 54%
  );
}
</style>
