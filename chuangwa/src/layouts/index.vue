<template>
  <div>
    <Header v-if="$route.meta.layout" />
    <Audio v-if="$route.meta.layout" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Audio from './components/Audio.vue'
export default {
  components: {
    Header,
    Audio,
  },
}
</script>

<style></style>
