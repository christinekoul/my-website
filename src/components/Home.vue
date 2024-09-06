<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <div class="flex-container">
    <div class="content">
      <div class="child first">hi, I'm Christine</div>
      <div class="child second">a Brooklyn based software engineer</div>
      <div class="child third">
        & I love to create. please take a look around and see what I've done!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
}
.child {
  text-align: left;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.first {
  font-size: 64px;
  padding-top: 16%;
  padding-left: 8%;
}
.second {
  padding-left: 8%;
  font-size: 32px;
}
.third {
  font-size: 32px;
  text-align: right;
  padding-top: 10%;
  padding-left: 50%;
  padding-right: 8%;
}
.radial-gradient-bg {
  background: radial-gradient(circle, #ff7e5f, #feb47b);
}
</style>
