<template>
  <div>
    <h2>Список продуктов</h2>
    <ul>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddProduct from "./AddProduct.vue";

export default defineComponent({
  components: {
    AddProduct,
  },
  data() {
    return {
      products: [] as { name: string; crossedOut: boolean }[],
    };
  },
  methods: {
    addProduct(newProduct: string) {
      this.products.push({ name: newProduct, crossedOut: false });
    },
    crossOutProduct(index: number) {
      this.products[index].crossedOut = !this.products[index].crossedOut;
      const crossedProduct = this.products.splice(index, 1)[0];
      this.products.push(crossedProduct);
    },
  },
});
</script>

<style>
.crossed {
  text-decoration: line-through;
}
</style>
