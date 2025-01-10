<script setup lang="ts">

const props = defineProps<{
  messageClass: string
}>();
</script>

<template>
  <div :class="props.messageClass + ' message message-wrapper'">
    <div class="message-body">
      <slot></slot>
    </div>
  </div>
</template>