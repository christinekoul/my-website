<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    currentRoute() {
      return this.$route.path; // Returns the current route path
    },
    // Determine hover color based on the current route
    linkHoverColor() {
      switch (this.currentRoute) {
        case "/about":
          return "rgb(255, 216, 60, 1)";
        case "/projects":
          return "rgb(25, 202, 98, 1)";
        case "/contact":
          return "rgb(138, 60, 255, 1)";
        case "/":
        default:
          return "rgba(255, 60, 165, 1)";
      }
    },
  },
  watch: {
    // Watch for changes in the route and update the CSS variable
    currentRoute() {
      this.updateLinkHoverColor();
    },
  },
  methods: {
    updateLinkHoverColor() {
      document.documentElement.style.setProperty(
        "--link-hover-color",
        this.linkHoverColor
      );
    },
  },
  mounted() {
    // Set the initial CSS variable value
    this.updateLinkHoverColor();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --link-color: black;
  --link-hover-color: rgba(255, 60, 165, 1);
}

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
