<!-- src/components/GlbViewer.vue -->
<script setup lang="ts">
const astronautUrl = new URL(
  "../assets/model3d/little_astronaut.glb",
  import.meta.url
).href;

const cameraPosition = { x: 2, y: 2, z: 7 };
const pixelRatio = window.devicePixelRatio || 1;
</script>

<template>
  <div class="viewer-container">
    <Renderer :pixelRatio="pixelRatio" resize orbit-ctrl antialias alpha>
      <Camera :position="cameraPosition" :lookAt="{ x: 0, y: 2, z: 0 }" />
      <Scene>
        <HemisphereLight
          :intensity="4"
          :color="'#ffffff'"
          :groundColor="'#444444'"
        />
        <HemisphereLight :intensity="1" />
        <GltfModel :src="astronautUrl" />
       <!-- Popup gắn vào vị trí 3D -->
      </Scene>
    </Renderer>
  </div>
</template>

<style scoped>
.viewer-container {
  width: 150px; /* hoặc bất kỳ kích thước nào bạn muốn */
  height: 150px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  margin: 50px auto;
}

:global(canvas) {
  width: 100% !important;
  height: 100% !important;
  display: block;
  pointer-events: auto;
}
</style>
