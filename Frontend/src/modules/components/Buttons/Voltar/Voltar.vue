<script setup>
import { defineProps } from 'vue'

const props = defineProps({
   callbackFunction: {
    type: Function
   }
})

const handleClick = () => {
  props.callbackFunction()
}
</script>

<template>
    <div id="divComponent">
        <button id=button type="button" @click="handleClick">Voltar</button>
    </div>
</template>

<style scoped>
@import "./Voltar.scss";
@import "../Buttons.scss";
</style>
 