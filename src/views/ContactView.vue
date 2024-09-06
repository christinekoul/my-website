<template>
  <div class="contact">
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "ContactView",
  components: {
    Contact,
  },
};
</script>

<style scoped>
.contact {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(138, 60, 255);
  background: radial-gradient(
    circle,
    rgb(138, 60, 255) 5%,
    rgb(198, 149, 250) 17%,
    rgba(255, 255, 255, 1) 54%
  );
}
</style>
