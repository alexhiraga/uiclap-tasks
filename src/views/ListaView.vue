<script setup lang="ts">
import lista from '@/assets/lista.json';
import Botao from '@/components/Botao.vue';
import { PaletteColorTypes } from '@/types/PaletteColorTypes.';
import { ref } from 'vue';
import draggable from 'vuedraggable';

let originalList = ref(lista);
const originalListDefault = ref(lista);
let list = ref(lista);
let colorType = ref(PaletteColorTypes.WHITE);
let appliedColorType = ref(PaletteColorTypes.WHITE);
let isApplied = ref(false);

const setColorType = (type: PaletteColorTypes) => {
  colorType.value = type;
};

const applyChanges = () => {
  appliedColorType.value = colorType.value;
  isApplied.value = true;
  originalList.value = [...list.value];
};

const resetChanges = () => {
  appliedColorType.value = PaletteColorTypes.WHITE;
  isApplied.value = false;
  originalList.value = originalListDefault.value
};

</script>

<template>
  <div class="lista-view-wrapper content">
    <div class="left">
      <h2>Original list</h2>
      <p>Not editable here</p>
      <ul>
        <li v-for="item in originalList" :key="item.value" :class="isApplied ? appliedColorType + item.value : '' ">
          <i :class="'mdi ' + item.icon"></i> {{ item.label }}
        </li>
      </ul>
      <div class="is-flex gap-1">
        <Botao label="Reset" @click="resetChanges()" />
        <Botao label="Apply changes" @click="applyChanges()" />
      </div>
    </div>

    <div class="right">
      <h2>Edit order list</h2>
      <p class="is-6">Drag and drop!</p>
      <draggable v-model="list" tag="ul">
        <template #item="{ element: item }">
          <li :class="colorType + item.value" :key="item.value">
            <i :class="'mdi ' + item.icon"></i> {{ item.label }}
          </li>
        </template>
      </draggable>
      <p>Choose different palettes:</p>
      <div class="is-flex gap-1">
        <Botao label="White" @click="setColorType(PaletteColorTypes.WHITE)" />
        <Botao class="colorful-button" label="Colorful" @click="setColorType(PaletteColorTypes.COLORFUL)" />
        <Botao class="gray-button" label="Gray" @click="setColorType(PaletteColorTypes.GRAY)" />
        <Botao class="divergent-button" label="Divergent" @click="setColorType(PaletteColorTypes.DIVERGENT)" />
      </div>
    </div>
  </div>
</template>