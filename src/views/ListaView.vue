<script setup lang="ts">
import lista from '@/assets/lista.json';
import { ref } from 'vue';
import draggable from 'vuedraggable';

let originalList = ref(lista);
let list = ref(lista);

</script>

<template>
  <div class="lista-view-wrapper content">
    <div class="left">
      <h2>Original list</h2>
      <p>Not editable here</p>
      <ul>
        <li v-for="item in originalList" :key="item.value">
          <i :class="'mdi ' + item.icon"></i> {{ item.label }}
        </li>
      </ul>
    </div>

    <!-- TODO: mudar tonalidade do card de acordo com o número e criar botão para atualizar a lista da esquerda, criar botão pra salvar no localstorage -->
    <div class="right">
      <h2>Edit order list</h2>
      <p class="is-6">Drag and drop!</p>
      <draggable v-model="list" tag="ul">
        <template #item="{ element: item }">
          <li>
            <i :class="'mdi ' + item.icon"></i> {{ item.label }}
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>