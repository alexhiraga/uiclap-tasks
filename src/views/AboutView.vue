<script setup lang="ts">
import projects from '@/assets/project-list.json';
import ProjectCard from '@/components/ProjectCard.vue';
import stacks from '@/assets/stacks-list.json';
import IconBox from '@/components/IconBox.vue';

</script>

<template>
  <div class="content about-view-wrapper">
    <h1>About</h1>

    <div class="projects">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>

    <div class="stacks">
      <div v-for="stack in stacks" :key="stack.name">
        <IconBox :stack="stack" />
      </div>
    </div>

  </div>
</template>