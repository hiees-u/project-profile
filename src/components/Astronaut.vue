<!-- src/components/GlbViewer.vue -->
<script setup lang="ts">
import gsap from "gsap";
import * as THREE from "three";
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";

const isShowModal = ref(false);

const astronautUrl = new URL(
  "../assets/model3d/little_astronaut.glb",
  import.meta.url
).href;

const cameraPosition = { x: 2, y: 5, z: 7 };
const pixelRatio = window.devicePixelRatio || 1;

function handleRendererCreated({
  renderer,
}: {
  renderer: THREE.WebGLRenderer;
}) {
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
}

function onModelLoadeded(gltf: any) {
  isShowModal.value = true;
  //   setInterval(() => {
  //     isShowModal.value = false;
  //   }, 3000);
  gsap.to(gltf.scene.position, {
    duration: 3,
    z: 3, // từ -20 bay về 0
    ease: "power2.inOut",
  });
};
</script>

<template>
  <div class="viewer-container">
    <VueFinalModal v-model="isShowModal">
      <div class="popup-custom"><span>Hi, I'm Híu</span></div>
    </VueFinalModal>
    <Renderer
      :pixelRatio="pixelRatio"
      resize
      orbit-ctrl
      antialias
      alpha
      @created="handleRendererCreated"
    >
      <Camera :position="cameraPosition" :lookAt="{ x: 0, y: 1, z: 0 }" />
      <Scene>
        <HemisphereLight
          :intensity="4"
          :color="'#ffffff'"
          :groundColor="'#444444'"
        />
        <HemisphereLight :intensity="1" />
        <GltfModel
          :src="astronautUrl"
          :position="{ x: 0, y: 0, z: -20 }"
          @load="onModelLoadeded"
        />
      </Scene>
    </Renderer>
  </div>
</template>

<style scoped>
.viewer-container {
  width: 250px; /* hoặc bất kỳ kích thước nào bạn muốn */
  height: 250px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  margin: auto;
  position: relative;
}

:global(canvas) {
  width: 100% !important;
  height: 100% !important;
  display: block;
  pointer-events: auto;
}

.popup-custom {
  background-color: #fff;
  color: #000;
  width: fit-content;
  position: fixed;
}
</style>
