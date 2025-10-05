<script setup lang="ts"></script>

<template>
  <img src="@/assets/images/clouds/cloud-2.png" alt="cloud-1" class="cloud cloud-1" style="--end-x: 0%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-1.png" alt="cloud-2" class="cloud cloud-2" style="--end-x: -30%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-1.png" alt="cloud-3" class="cloud cloud-3" style="--end-x: 0%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-1.png" alt="cloud-4" class="cloud cloud-4" style="--end-x: 45%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-2.png" alt="cloud-5" class="cloud cloud-5" style="--end-x: -20%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-1.png" alt="cloud-6" class="cloud cloud-6" style="--end-x: -30%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-1.png" alt="cloud-7" class="cloud cloud-7" style="--end-x: 55%; --direction: -1;" />
  <img src="@/assets/images/clouds/cloud-6.png" alt="cloud-9" class="cloud cloud-9" style="--end-x: -15%; --direction: 1;" />
  <img src="@/assets/images/clouds/cloud-4.png" alt="cloud-10" class="cloud cloud-10" style="--end-x: -10%; --direction: -1;" />
  <img src="@/assets/images/clouds/cloud-5.png" alt="cloud-11" class="cloud cloud-11" style="--end-x: 40%; --direction: 1;" />
</template>

<style scoped>
.cloud {
  width: 350px;
  position: absolute;
  opacity: 0;
  top: 45vh;
  animation: cloudFlyIn 3s ease-out forwards;
}

/* 🔹 vị trí & độ sâu */
.cloud-1 { top: 45vh; z-index: -3; animation-delay: 0.2s; }
.cloud-2 { top: 50vh; left: 0; z-index: -3; animation-delay: 0.4s; }
.cloud-3 { top: 55vh; right: 0; animation-delay: 0.6s; }
.cloud-4 { top: 50vh; right: 0; z-index: -3; animation-delay: 0.8s; }
.cloud-5 { top: 60vh; z-index: -3; animation-delay: 1s; }
.cloud-6 { top: 65vh; z-index: -2; animation-delay: 1.2s; }
.cloud-7 { top: 65vh; z-index: -2; animation-delay: 1.4s; }
.cloud-9 { top: 85vh; z-index: -3; animation-delay: 1.6s; }
.cloud-10 { top: 75vh; z-index: 0; animation-delay: 1.8s; }
.cloud-11 { top: 75vh; z-index: 0; animation-delay: 2s; }

/* 🔹 Animation chung (1 keyframes xử lý cả left/right) */
@keyframes cloudFlyIn {
  0% {
    transform: translateX(calc(var(--direction, 1) * 120vw));
    opacity: 0;
  }
  100% {
    transform: translateX(var(--end-x, 0));
    opacity: 1;
  }
}
</style>
