<!-- src\App.vue -->
<script setup lang="ts">
import StarryNight from '@/components/StarryNight.vue';
import WrapperContent from '@/components/WrapperContent.vue';
</script>

<template>
  <StarryNight />
  <WrapperContent/>
</template>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
