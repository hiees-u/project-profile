<script setup lang="ts"></script>

<template>
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-1"
    class="cloud cloud-1"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-1"
    class="cloud cloud-2"
  />
  <img
    src="@/assets/images/clouds/cloud-1.png"
    alt="cloud-1"
    class="cloud cloud-3"
  />
  <img
    src="@/assets/images/clouds/cloud-2.png"
    alt="cloud-1"
    class="cloud cloud-4"
  />
</template>

<style scoped>
.cloud {
  width: 350px;
  position: absolute;
  top: 45vh;
}

.cloud.cloud-1 {
  left: 0;
  z-index: -3;
}
.cloud.cloud-2 {
  top: 50vh;
  left: 0;
  transform: translateX(-30%);
}
.cloud.cloud-3 {
  top: 55vh;
  right: 0%;
}
.cloud.cloud-4 {
  top: 50vh;
  z-index: -3;
  transform: translateX(25%);
  right: -0%;
  width: 250px;
}
</style>
