<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const clouds = document.querySelectorAll<HTMLImageElement>('.cloud')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add('enter')
          el.classList.remove('leave')
        } else {
          el.classList.add('leave')
          el.classList.remove('enter')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '-65% 0px 60% 0px' // ✅ cả trên và dưới
    }
  )

  clouds.forEach((cloud) => observer.observe(cloud))
})
</script>

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
  transition: transform 1s ease-in-out, opacity .5s ease-in-out;
  will-change: transform, opacity;
}

/* 🔹 Khi xuất hiện trong viewport */
.cloud.enter {
  opacity: 1;
  transform: translateX(var(--end-x, 0));
}

/* 🔹 Khi ra khỏi viewport */
.cloud.leave {
  opacity: 0;
  transform: translateX(calc(var(--direction, 1) * 50vw));
}

/* 🔹 vị trí & độ sâu + delay riêng */
.cloud-1 { top: 45vh; z-index: -3; transition-delay: 0.2s; }
.cloud-2 { top: 50vh; left: 0; z-index: -3; transition-delay: 0.4s; }
.cloud-3 { top: 55vh; right: 0; transition-delay: 0.6s; }
.cloud-4 { top: 50vh; right: 0; z-index: -3; transition-delay: 0.8s; }
.cloud-5 { top: 60vh; z-index: -3; transition-delay: 1s; }
.cloud-6 { top: 65vh; z-index: -2; transition-delay: 1.2s; }
.cloud-7 { top: 65vh; z-index: -2; transition-delay: 1.4s; }
.cloud-9 { top: 85vh; z-index: -3; transition-delay: 1.6s; }
.cloud-10 { top: 75vh; z-index: 0; transition-delay: 1.8s; }
.cloud-11 { top: 75vh; z-index: 0; transition-delay: 2s; }
</style>
