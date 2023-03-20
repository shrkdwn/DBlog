<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
// 变量
const route = useRoute();
const layout = computed(() => {
  return route.meta.layout;
});
onMounted(() => {
  console.log(route.meta);
});
</script>
<style scoped></style>
