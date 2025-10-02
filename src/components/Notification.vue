<script lang="ts" setup></script>

<template>
  <div class="wapper">
    <div class="notification">
      <p>Hi! I'm Híu</p>
    </div>
  </div>
</template>

<style scoped>
.wapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}

.notification {
  position: fixed;
  top: 20px;
  left: 52%;
  background-color: #333;
  color: rgb(0, 0, 0);
  padding: 5px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.notification::after {
    content: '';
    position: absolute;
    top: 95%;
    left: 10px;
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
}
</style>
