<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
}

</script>

<template>

  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>