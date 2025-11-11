import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import RecipesView from "../views/RecipesView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/projects", name: "Projects", component: ProjectsView },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/recipes", name: "Recipes", component: RecipesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
