<script lang="ts" setup>
import Astronaut from "@/components/Astronaut.vue";
import Notification from "@/components/Notification.vue";
import { ref } from "vue";

const isCompleteInit = ref(false);
</script>

<template>
  <Astronaut @isCompleteInit="(val:boolean) => isCompleteInit = val"/>
  <Notification :isShow="isCompleteInit"/>
</template>
