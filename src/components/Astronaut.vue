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

// const cameraPosition = ref({ x: 0, y: 0, z: 0 });  //default
// const astronautPosition = ref({ x: 0, y: 0, z: -100 }); //default
const cameraPosition = ref({ x: 1, y: 15, z: 12 });  //default
const astronautPosition = ref({ x: 0.35, y: 5, z: -100 }); //default
// const cameraPosition = ref({ x: 5, y: 30, z: 25 }); //size mini
// const astronautPosition = ref({ x: 1, y: 14, z: -100 }); //size mini

const defaultCamera = { x: 1, y: 15, z: 120 };
const miniCamera = { x: 5, y: 30, z: 100 };

const defaultAstronaut = { x: 0.35, y: 5, z: -10 };
const miniAstronaut = { x: 1, y: 14, z: -20 };


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
  const maxScroll = 100; // Ngưỡng đạt kích thước mini
  const progress = Math.min(Math.max(scrollY / maxScroll, 0) * 0.001, 1); // clamp từ 0 → 1

  console.log(
    `Camera:`,
    cameraPosition.value,
    `Astronaut:`,
    astronautPosition.value
  );

  // Camera tween mượt theo scroll
  gsap.to(cameraPosition.value, {
    x: defaultCamera.x + (miniCamera.x - defaultCamera.x) * progress,
    y: defaultCamera.y + (miniCamera.y - defaultCamera.y) * progress,
    z: defaultCamera.z + (miniCamera.z - defaultCamera.z) * progress,
    duration: 0.4,
    ease: "power2.out",
    overwrite: true,
  });

  // Astronaut tween theo scroll
  gsap.to(astronautPosition.value, {
    x: defaultAstronaut.x + (miniAstronaut.x - defaultAstronaut.x) * progress,
    y: defaultAstronaut.y + (miniAstronaut.y - defaultAstronaut.y) * progress,
    duration: 0.4,
    ease: "power2.out",
    overwrite: true,
  });

  console.log("handleScroll => ", scrollY, progress);
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

function onModelLoadeded(gltf: any) {
  gsap.to(gltf.scene.position, {
    duration: 3,
    z: 5,
    ease: "power2.inOut",
    onComplete: () => {
      emit("isCompleteInit", true);
      window.addEventListener("scroll", handleScroll);
    },
  });

  if (model.value) {
    const { x, y, z } = model.value.position;
    console.log("x:", x, "y:", y, "z:", z);
  }
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
