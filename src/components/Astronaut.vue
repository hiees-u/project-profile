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

const cameraPosition = { x: 2, y: 5, z: 7 };
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
      resize
      orbit-ctrl
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
          :position="{ x: 1, y: 0, z: -20 }"
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
</style>
