<script lang="ts" setup>
import { nextTick, ref, watchEffect } from 'vue';

import type NotificationType from '@/types/notification';
import { delay } from '../unitls/untils';

const props = defineProps<{
  top: number;
  noti: NotificationType[];
}>();
const messages = ref<NotificationType[]>([]);
const message = ref('');
let heightNoti = ref(0);

async function extractFirstNotificationMessage() {
  message.value = props.noti[0]?.message || '';
  await nextTick();
  const el = document.querySelector('.notification') as HTMLElement;
  if (el) {
    heightNoti.value = el.offsetHeight;
  }

  await delay(messages.value[0]?.duration || 1000);
  
  messages.value.shift();
}

for (let i = 0; i < props.noti.length; i++) {
  message.value = props.noti[i].message;  
}

watchEffect(() => {
  if (props.noti) {
    messages.value = props.noti;
  }
});

watchEffect(() => {
  extractFirstNotificationMessage();
});

</script>

<template>
  <div class="wapper-notification">
    <div class="notification" v-if="message" :style="{ top: `calc(35% - ${heightNoti}px)` }">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<style scoped>
.wapper-notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2;
  height: 100vh;
}

.notification {
  position: fixed;
  left: 52%;
  max-width: 35%;
  top: calc(10% - 30px);
  background-color: #333;
  z-index: -1;
  color: rgb(0, 0, 0);
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.notification span {
  color: white;
  font-size: 16px;
  max-width: 40%;
  font-weight: 500;
}

.notification::after {
  content: "";
  position: absolute;
  z-index: -2;
  top: 95%;
  left: 10px;
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
</style>
