<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <nav class="navbar">
    <div class="nav-left">
      <div class="nav-item" :style="cssObj">
        <router-link to="/"> Home </router-link>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-item">
        <router-link to="/about"> About </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/projects"> Projects </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/contact"> Contact </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Style for the navigation bar */
.navbar {
  position: fixed; /* Fixes the navbar at the top */
  top: 0; /* Aligns it to the top */
  left: 0; /* Aligns it to the left */
  right: 0; /* Spans the full width of the screen */
  display: flex;
  justify-content: space-between; /* Creates space between left and right groups */
  align-items: center;
  color: white;
  height: 100px;
  z-index: 1000;
}

/* Left-aligned link */
.nav-left {
  display: flex;
  padding-left: 3%;
}

/* Right-aligned links */
.nav-right {
  display: flex;
  gap: 20px; /* Creates space between right-aligned links */
  padding-right: 3%;
}

/* Style for each navigation item */
.nav-item a {
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 25px;
  color: black;
  display: block;
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transitions */
}

.nav-item a:visited {
  color: black;
}

.nav-item a:hover {
  color: var(--link-hover-color); /* Use CSS variable */
  transform: scale(1.1);
}
</style>
