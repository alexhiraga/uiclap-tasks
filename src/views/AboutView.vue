<script setup lang="ts">
import Botao from '@/components/Botao.vue';
import { ref } from 'vue';

const mostraModal = ref(false);

</script>

<template>
    Sobre:
    <Botao label="Info" class="is-info" @click="mostraModal=true"></Botao>


    <div class="modal" :class="{'is-active' : mostraModal}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="message is-info">
                <div class="message-body">
            Algumas informações sobre o app??

                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="mostraModal=false"></button>
    </div>

</template>