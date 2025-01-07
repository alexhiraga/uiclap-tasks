<script setup lang="ts">
import lista from '@/assets/lista.json';
 
</script>

<template>
  <div class="bg-red-500">
    <ul>
      <li v-for="item in lista" :key="item.value">
        <i :class="'mdi ' + item.icon"></i> {{ item.label }}
      </li>
    </ul>
  </div>
</template>