<script lang="ts" setup>
import { ref, watch } from "vue";

import Astronaut from "@/components/Astronaut.vue";
import Notification from "@/components/Notification.vue";
import FooterContent from "@/components/ClouldContent.vue";

import type NotificationType from "@/types/notification";

const isCompleteInit = ref(false);
const messages = ref<NotificationType[]>([]);

watch(isCompleteInit, (newVal) => {
  if (newVal) {
    messages.value = [
      { message: `Hiii! I'm Híu`, type: "info", duration: 3000 },
      { message: `Welcome to my profile`, type: "info", duration: 3000 },
      { message: `Scroll down to see more!`, type: "info", duration: 3000 },
    ];
  }
});
</script>

<template>
  <div class="wapper">
    <Astronaut @isCompleteInit="(val:boolean) => {isCompleteInit = val}" />
    <div class="content">
      <FooterContent />
    </div>
    <Notification :noti="messages" :top="80" />
  </div>
</template>

<style scoped>
.wapper {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.content {
  padding-top: 50vh;
  height: 500vh;
}
</style>
