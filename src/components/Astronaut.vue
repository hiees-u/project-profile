<!-- src/components/GlbViewer.vue -->
<script setup lang="ts">
import gsap from "gsap";
import * as THREE from "three";
import { defineEmits } from 'vue'
import { ref, type Ref } from "vue";

const astronautUrl = new URL(
  "../assets/model3d/little_astronaut.glb",
  import.meta.url
).href;

const cameraPosition = { x: 5, y: 30, z: 25 };
const astronautPosition = { x: 1, y: 14, z: -100 };
const pixelRatio = window.devicePixelRatio || 1;
const model = ref<any>(null);
let renderer: Ref<THREE.WebGLRenderer | null> = ref(null);
let scene: Ref<THREE.Scene | null> = ref(null);
let camera: Ref<THREE.Camera | null> = ref(null);

const emit = defineEmits<{
  (e: 'isCompleteInit', value: boolean): void
}>()

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
  gsap.to(gltf.scene.position, {
    duration: 3,
    z: 3,
    ease: "power2.inOut",
    onComplete: () => {
      emit('isCompleteInit', true)
    }
  });

  if (model.value) {
    const { x, y, z } = model.value.position;
    console.log("x:", x, "y:", y, "z:", z);
  }

  console.log('renderer ', renderer.value);
  console.log('scene ', scene.value);
  console.log('camera ', camera.value);
  console.log('model ', model.value);
};
</script>

<template>
  <div class="viewer-container">
    <Renderer
      :pixelRatio="pixelRatio"
      ref="renderer"
      orbit-ctrl
      resize
      antialias
      alpha
      @created="handleRendererCreated"
    >
      <Camera ref="camera" :position="cameraPosition" :lookAt="{ x: 0, y: 1, z: 0 }" />
      <Scene
      ref="scene">
        <HemisphereLight
          :intensity="4"
          :color="'#ffffff'"
          :groundColor="'#444444'"
        />
        <HemisphereLight :intensity="1" />
        <GltfModel
          ref="model"
          :src="astronautUrl"
          :position="astronautPosition"
          @load="onModelLoadeded"
        />
      </Scene>
    </Renderer>
  </div>
</template>

<style scoped>
.viewer-container {
  width: 100vw; /* hoặc bất kỳ kích thước nào bạn muốn */
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: -1;
  overflow: hidden;
  margin: auto;
  position: relative;
}

:global(canvas) {
  width: 100% !important;
  height: 100% !important;
  display: block;
  pointer-events: auto;
  position: fixed;
}
</style>
