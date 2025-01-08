<script setup lang="ts">
import Botao from '@/components/Botao.vue';
import Modal from '../components/Modal.vue'
import { ref } from 'vue';
import Message from '@/components/Message.vue';
import { MessageClass } from '@/types/MessageClasses';
import projects from '@/assets/project-list.json';
import ProjectCard from '@/components/ProjectCard.vue';

// const showModal = ref(false);

</script>

<template>
  <!-- Sobre:
    <Botao label="Info" class="is-info" @click="showModal=true"></Botao>
    
    <Modal v-if="showModal" @close="showModal=false">
        <Message :messageClass=MessageClass.INFO>
            Algumas informações sobre o app??
        </Message>
    </Modal> -->
  <div class="content about-view-wrapper">
    <h1>About</h1>

    <div class="projects">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>

  </div>
</template>