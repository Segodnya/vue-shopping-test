import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/ProductList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ProductList,
    },
  ],
});

const app = createApp(ProductList);
app.use(router);
app.mount("#app");
