<!-- src/components/GlbViewer.vue -->
<script setup lang="ts">
import gsap from "gsap";
import * as THREE from "three";
import { defineEmits } from "vue";
import { ref, type Ref } from "vue";

const astronautUrl = new URL(
  "../assets/model3d/little_astronaut.glb",
  import.meta.url
).href;

const cameraPosition = ref({ x: 1, y: 15, z: 12 });  //default
const astronautPosition = ref({ x: 0.35, y: 5, z: -100 }); //default
const scaleAstronaut = ref({ x: 1, y: 1, z: 1 }); //default

const pixelRatio = window.devicePixelRatio || 1;
const model = ref<any>(null);
let renderer: Ref<THREE.WebGLRenderer | null> = ref(null);
let scene: Ref<THREE.Scene | null> = ref(null);
let camera: Ref<THREE.Camera | null> = ref(null);

const emit = defineEmits<{
  (e: "isCompleteInit", value: boolean): void;
}>();

function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = 100;
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  const targetScale = progress >= 0.5 ? 0.5 : 1 - progress;

  gsap.to(scaleAstronaut.value, {
    x: targetScale,
    y: targetScale,
    z: targetScale,
    duration: 0.3,
    ease: "power1.out",
  });

  gsap.to(astronautPosition.value, {
    x: 0.35,
    y: 5 + progress * 3.5,
    z: 5,
    duration: 0.3,
    ease: "power1.out",
  });
}


function handleRendererCreated({
  renderer,
}: {
  renderer: THREE.WebGLRenderer;
}) {
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
}

function onModelLoadeded() {
  gsap.to(astronautPosition.value, {
    duration: 3,
    z: 5,
    ease: "power2.inOut",
    onComplete: () => {
      emit("isCompleteInit", true);
      window.addEventListener("scroll", handleScroll);
    },
  });
}
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
      <Camera
        ref="camera"
        :position="cameraPosition"
        :lookAt="astronautPosition"
      />
      <Scene ref="scene">
        <HemisphereLight
          :intensity="4"
          :color="'#ffffff'"
          :groundColor="'#444444'"
        />
        <HemisphereLight :intensity="1" />
        <GltfModel
          ref="model"
          :src="astronautUrl"
          :scale="scaleAstronaut"
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
