<script setup lang="ts">
import Botao from '@/components/Botao.vue';
import Modal from '../components/Modal.vue'
import { ref } from 'vue';
import Message from '@/components/Message.vue';
import { MessageClass } from '@/types/MessageClasses';

const showModal = ref(false);

</script>

<template>
    Sobre:
    <Botao label="Info" class="is-info" @click="showModal=true"></Botao>
    
    <Modal v-if="showModal" @close="showModal=false">
        <Message :messageClass=MessageClass.INFO>
            Algumas informações sobre o app??
        </Message>
    </Modal>


</template>