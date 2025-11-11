<template>
  <div class="recipes">
    <RecipeBook />
  </div>
</template>

<script>
import RecipeBook from "@/components/RecipeBook.vue";

export default {
  name: "RecipesView",
  components: {
    RecipeBook,
  },
};
</script>

<style scoped>
.recipes {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(60, 255, 141);
  background: radial-gradient(
    circle,
    rgb(25, 202, 98) 5%,
    rgb(169, 250, 175) 17%,
    rgba(255, 255, 255, 1) 54%
  );
}
</style>
