<script setup lang="ts">
const props = defineProps<{
  stack: {
    name: string;
    imageUrl: string;
  }
}>();	
</script>

<template>
  <div class="box">
    <img :src="props.stack.imageUrl" :alt="props.stack.name" />
  </div>
</template>