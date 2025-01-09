<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';
import { MessageClass } from '@/types/MessageClasses';
import Message from './Message.vue';
const showModal = ref(false);

const props = defineProps<{
  stack: {
    name: string;
    imageUrl: string;
  }
}>();	
</script>

<template>
  <div class="box" @click="showModal=true">
    <img :src="props.stack.imageUrl" :alt="props.stack.name" />
  </div>
  <Modal v-if="showModal" @close="showModal=false">
    <Message :messageClass=MessageClass.INFO>
      {{stack.name}}
    </Message>
  </Modal>
</template>