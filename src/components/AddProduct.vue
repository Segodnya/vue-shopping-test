<template>
  <div>
    <input
      v-model="newProduct"
      @keyup.enter="addNewProduct"
      placeholder="Введите новый продукт"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      newProduct: "",
    };
  },
  methods: {
    addNewProduct() {
      if (this.newProduct.trim() !== "") {
        this.$emit("addProduct", this.newProduct);
        this.newProduct = "";
      }
    },
  },
});
</script>
