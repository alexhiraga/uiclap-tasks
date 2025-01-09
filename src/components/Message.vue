<script setup lang="ts">
import { MessageClass } from '@/types/MessageClasses';

const props = defineProps<{
  messageClass: MessageClass
}>();
</script>

<template>
  <div :class="props.messageClass + ' message message-wrapper'">
    <div class="message-body">
      <slot></slot>
    </div>
  </div>
</template>