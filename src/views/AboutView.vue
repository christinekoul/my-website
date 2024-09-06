<template>
  <div class="about">
    <About />
  </div>
</template>

<script>
import About from "@/components/About.vue";

export default {
  name: "AboutView",
  components: {
    About,
  },
};
</script>
<style scoped>
.about {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(255, 216, 60);
  background: radial-gradient(
    circle,
    rgb(255, 216, 60) 5%,
    rgb(250, 255, 159) 17%,
    rgba(255, 255, 255, 1) 54%
  );
}
</style>
