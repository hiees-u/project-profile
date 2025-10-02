<!-- src\App.vue -->
<script setup lang="ts">
import StarryNight from '@/components/StarryNight.vue';
import Astronaut from '@/components/Astronaut.vue';
import Notification from './components/Notification.vue';
</script>

<template>
  <StarryNight />
  <Astronaut />
  <Notification />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
