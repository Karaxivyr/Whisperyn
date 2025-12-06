<template>
  <KaraLayout />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import KaraLayout from "./layout/KaraLayout.vue";

onMounted(() => {
  document.body.classList.add("karaFrame");
});

onBeforeUnmount(() => {
  document.body.classList.remove("karaFrame");
});
</script>

<style scoped>
/* No styles needed */
</style>
