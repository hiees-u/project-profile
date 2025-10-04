<script lang="ts" setup>
import Astronaut from "@/components/Astronaut.vue";
import Notification from "@/components/Notification.vue";
import type NotificationType from '@/types/notification';
import { ref, watch } from "vue";

const isCompleteInit = ref(false);
const messages = ref<NotificationType[]>([]);

watch(isCompleteInit, (newVal) => {
  if (newVal) {
    messages.value = [
      { message: `Hiii! I'm Híu`, type: 'info', duration: 3000 },
      { message: `Welcome to my profile`, type: 'info', duration: 3000 },
      { message: `Scroll down to see more!`, type: 'info', duration: 3000 },
    ];
  }
})
</script>

<template>
  <Astronaut @isCompleteInit="(val:boolean) => {isCompleteInit = val}"/>
  <Notification :isShow="isCompleteInit" :noti="messages" :top="80"/>
  <div class="content">
    
  </div>
</template>

<style scoped>
.content {
  height: 500vh;
}
</style>