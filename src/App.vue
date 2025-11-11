<template>
  <div id="app" class="background">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
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
    backgroundColor() {
      switch (this.currentRoute) {
        case "/about":
          return "rgb(255, 216, 60)";
        case "/projects":
          return "rgb(25, 202, 98)";
        case "/contact":
          return "rgb(138, 60, 255)";
        case "/":
        default:
          return "rgba(255, 60, 165, 1)";
      }
    },
    gradientColor1() {
      switch (this.currentRoute) {
        case "/about":
          return "rgb(255, 216, 60) 5%";
        case "/projects":
          return "rgb(25, 202, 98) 5%";
        case "/contact":
          return "rgb(138, 60, 255) 5%";
        case "/":
        default:
          return "rgba(255, 60, 165, 1) 5%";
      }
    },
    gradientColor2() {
      switch (this.currentRoute) {
        case "/about":
          return "rgb(250, 255, 159) 17%";
        case "/projects":
          return "rgb(169, 250, 175) 17%";
        case "/contact":
          return "rgb(199, 159, 255) 17%";
        case "/":
        default:
          return "rgba(255, 159, 243, 1) 17%";
      }
    },
    gradientColor3() {
      switch (this.currentRoute) {
        case "/about":
          return "rgba(255, 255, 255, 1) 54%";
        case "/projects":
          return "rgba(255, 255, 255, 1) 54%";
        case "/contact":
          return "rgba(255, 255, 255, 1) 54%";
        case "/":
        default:
          return "rgba(255, 255, 255, 1) 54%";
      }
    },
  },
  watch: {
    // Watch for changes in the route and update the CSS variable
    currentRoute() {
      this.updateLinkHoverColor();
      this.updateGradientColors();
    },
  },
  methods: {
    updateLinkHoverColor() {
      document.documentElement.style.setProperty(
        "--link-hover-color",
        this.linkHoverColor
      );
    },
    updateGradientColors() {
      document.documentElement.style.setProperty(
        "--background-color",
        this.backgroundColor
      );
      document.documentElement.style.setProperty(
        "--gradient-color-1",
        this.gradientColor1
      );
      document.documentElement.style.setProperty(
        "--gradient-color-2",
        this.gradientColor2
      );
      document.documentElement.style.setProperty(
        "--gradient-color-3",
        this.gradientColor3
      );
    },
  },
  mounted() {
    // Set the initial CSS variable value
    this.updateLinkHoverColor();
    this.updateGradientColors();
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
  --background-color: rgba(255, 60, 165, 1);
  --gradient-color-1: rgba(255, 60, 165, 1) 5%;
  --gradient-color-2: rgba(255, 159, 243, 1) 17%;
  --gradient-color-3: rgba(255, 255, 255, 1) 54%;
  --navbar-height: 100px; /* central navbar height used for layout */
}

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

/* Push page content below the fixed navbar and keep the main area full-height */
.background {
  margin: 0;
  padding: 0;
  background: var(--background-color);
  background: radial-gradient(
    circle,
    var(--gradient-color-1),
    var(--gradient-color-2),
    var(--gradient-color-3)
  );
}
</style>
