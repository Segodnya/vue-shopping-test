<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    "
  >
    <input
      style="display: block; max-width: calc(100%-20px); padding: 10px"
      v-model="newProduct"
      @keyup.enter="addNewProduct"
      placeholder="Введите новый продукт"
    />
    <button
      style="display: block; margin: 0 auto; width: 100%"
      @click="addNewProduct"
    >
      Добавить
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
