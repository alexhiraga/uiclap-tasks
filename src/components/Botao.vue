<script setup lang="ts">
const props = defineProps({
    icon: String,
    label: String
})
</script>
<template>
    <button class="button">
        <span v-if="props.icon?.length>0" class="icon"><i class="mdi" :class="props.icon"></i></span>
        <span v-if="props.label.length>0">{{props.label}}</span>
    </button>
</template>