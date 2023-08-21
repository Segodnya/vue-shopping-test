<template>
  <div
    style="
      margin: 0 auto;
      max-width: 280px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    "
  >
    <h2 style="margin: 0; text-align: center">Список продуктов</h2>
    <ul
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: none;
        padding: 0;
        margin: 0;
      "
    >
      <li
        v-for="(product, index) in products"
        :key="index"
        :class="{ crossed: product.crossedOut }"
        @click="crossOutProduct(index)"
      >
        {{ product.name }}
      </li>
    </ul>
    <AddProduct @addProduct="addProduct" />
    <ClearListComponent @clearProductList="clearProductList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddProduct from "./AddProduct.vue";
import ClearListComponent from "./ClearListComponent.vue";

const localStorage = window.localStorage;

export default defineComponent({
  components: {
    AddProduct,
    ClearListComponent,
  },
  data() {
    return {
      products: [] as { name: string; crossedOut: boolean }[],
    };
  },
  methods: {
    addProduct(newProduct: string) {
      this.products.push({ name: newProduct, crossedOut: false });
      this.sortProducts();
    },
    crossOutProduct(index: number) {
      this.products[index].crossedOut = !this.products[index].crossedOut;
      this.sortProducts();
    },

    sortProducts() {
      this.products.sort((a, b) => {
        if (a.crossedOut === b.crossedOut) {
          return 0;
        }
        if (a.crossedOut) {
          return 1;
        }
        return -1;
      });
    },

    saveState() {
      localStorage.setItem("shoppingList", JSON.stringify(this.products));
    },
    loadState() {
      const savedState = localStorage.getItem("shoppingList");
      if (savedState) {
        this.products = JSON.parse(savedState);
      }
    },
    clearProductList() {
      this.products = [];
    },
  },
  created() {
    this.loadState();
  },
  watch: {
    products: {
      handler: "saveState",
      deep: true,
    },
  },
});
</script>

<style>
.crossed {
  text-decoration: line-through;
}
</style>
