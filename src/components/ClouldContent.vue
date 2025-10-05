<script setup lang="ts"></script>

<template>
  <img
    src="@/assets/images/clouds/cloud-2.png"
    alt="cloud-1"
    style="--end-x: 0%;"
    class="cloud cloud-1"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-2"
    class="cloud cloud-2"
    style="--end-x: -30%;"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-3"
    style="--end-x: 0%;"
    class="cloud cloud-3"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-4"
    style="--end-x: 45%;"
    class="cloud cloud-4"
  />
  <img
    src="@/assets/images/clouds/cloud-2.png"
    alt="cloud-5"
    style="--end-x: -20%;"
    class="cloud cloud-5"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-6"
    class="cloud cloud-6"
    style="--end-x: -30%;"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-7"
    class="cloud cloud-7"
    style="--end-x: 55%;"
  />
  <img
    src="@/assets/images/clouds/cloud-3.png"
    alt="cloud-8"
    class="cloud cloud-8"
  />
  <img
    src="@/assets/images/clouds/cloud-6.png"
    alt="cloud-9"
    class="cloud cloud-9"
    style="--end-x: -15%;"
  />
  <img
    src="@/assets/images/clouds/cloud-4.png"
    style="--end-x: -10%;"
    alt="cloud-10"
    class="cloud cloud-10"
  />
  <img
    src="@/assets/images/clouds/cloud-5.png"
    alt="cloud-11"
    class="cloud cloud-11"
    style="--end-x: 40%;"
  />
</template>

<style scoped>
.cloud {
  width: 350px;
  position: absolute;
  top: 45vh;
}

.cloud.cloud-1 {
  animation: fromRight 3s ease-out 0.9s;
    transform: translateX(0%);
  z-index: -3;
}
.cloud.cloud-2 {
  top: 50vh;
  left: 0;
  animation: fromRight 3s ease-out 0.9s;
  transform: translateX(-30%);
}
.cloud.cloud-3 {
  top: 55vh;
  animation: fromRight 3s ease-out 0.9s;
    transform: translateX(0%);
}
.cloud.cloud-4 {
  top: 50vh;
  z-index: -3;
  animation: fromRight 3s ease-out 0.9s;
  transform: translateX(45%);
  right: -0%;
}
.cloud.cloud-5 {
  top: 60vh;
  animation: fromRight 3s ease-out 0.9s;
  z-index: -3;
  transform: translateX(-20%);
}
.cloud.cloud-6 {
  top: 65vh;
  transform: translateX(-30%);
  animation: fromRight 3s ease-out 0.9s;
  z-index: -2;
}
.cloud.cloud-7 {
  top: 65vh;
  transform: translateX(55%);
  animation: fromLeft 3s ease-out 0.9s;
  z-index: -2;
}
.cloud.cloud-8 {
  top: 65vh;
  z-index: -2;
  transform: translateX(25%);
}
.cloud.cloud-8 {
  z-index: -2;
  top: -150px;
  transform: translate3d(-90px, -100px, 0);
}
.cloud.cloud-9 {
  top: 85vh;
  z-index: -3;
  transform: translateX(-15%);
  animation: fromRight 3s ease-out 0.9s;
}
.cloud.cloud-10 {
  z-index: 0;
  top: 75vh;
  transform: translateX(-10%);
  animation: fromLeft 3s ease-out 0.9s;
}
.cloud.cloud-11 {
  top: 75vh;
  z-index: 0;
  transform: translateX(40%);
  animation: fromRight 3s ease-out 0.9s;
}

/* 🔹 Keyframes: từ hai bên bay vào */
@keyframes fromLeft {
  0% {
    transform: translateX(-120vw);
    opacity: 0;
  }
  100% {
    transform: translateX(var(--end-x, 0));
    opacity: 1;
  }
}

@keyframes fromRight {
  0% {
    transform: translateX(120vw);
    opacity: 0;
  }
  100% {
    transform: translateX(var(--end-x, 0));
    opacity: 1;
  }
}
</style>
