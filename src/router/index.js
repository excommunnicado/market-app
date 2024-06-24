import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductCard from "@/views/ProductCard.vue";
import ProductsCart from "@/views/ProductsCart.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductCard,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: ProductsCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
