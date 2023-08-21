<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    "
  >
    <button
      style="display: block; margin: 0 auto; width: 100%"
      @click="clearProductList"
    >
      Очистить список
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    clearProductList() {
      this.$emit("clearProductList");
    },
  },
});
</script>
