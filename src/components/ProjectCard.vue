<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const props = defineProps<{
  project: {
    id: number;
    name: string;
    description: string;
    stacks: string;
    imageUrl: string;
    projectUrl: string;
  } 
}>();
const showModal = ref(false);
</script>

<template>
  <div class="card project-card-wrapper">
    <div class="card-image">
      <figure class="image" @click="showModal=true">
        <img
          :src="props.project.imageUrl"
          :alt="props.project.name"
        />
      </figure>
      <Modal v-if="showModal" @close="showModal=false">
        <img
          :src="props.project.imageUrl"
          :alt="props.project.name"
        />
      </Modal>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ props.project.name }}</p>
          <p class="title is-7 is-info">{{ props.project.stacks }}</p>
        </div>
      </div>

      <div class="content">
        {{ props.project.description }}
        <br />
        <a :href="props.project.projectUrl"><i class="mdi mdi-link-variant"></i> Live project</a>
      </div>
    </div>
  </div>
</template>