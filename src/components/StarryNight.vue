<template>
  <canvas ref="starCanvas" class="canvas"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const starCanvas = ref(null);
let ctx, width, height;
const stars = [];
const numStars = 200;
let animationFrameId;

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 1.5;
    this.alpha = Math.random();
    this.delta = Math.random() * 0.02;
    this.vx = (Math.random() - 0.5) * 0.5; // tốc độ ngang
    this.vy = (Math.random() - 0.5) * 0.5; // tốc độ dọc
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // nếu ra khỏi màn hình thì reset lại
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset();
    }

    this.alpha += this.delta;
    if (this.alpha <= 0 || this.alpha >= 1) this.delta = -this.delta;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
  }
}

function initStars() {
  stars.length = 0;
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let star of stars) {
    star.update();
    star.draw();
  }
  animationFrameId = requestAnimationFrame(animate);
}

function resizeCanvas() {
  width = starCanvas.value.width = window.innerWidth;
  height = starCanvas.value.height = window.innerHeight;
}

onMounted(() => {
  resizeCanvas();
  ctx = starCanvas.value.getContext("2d");
  initStars();
  animate();
  window.addEventListener("resize", resizeCanvas);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<style scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* Đặt phía sau nội dung */
  width: 100vw;
  height: 100vh;
  background-color: black;
}

</style>
