<script setup>
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
        <button id=button type="button" @click="handleClick">Cadastrar</button>
    </div>
</template>

<style scoped>
@import "./Cadastrar.scss";
@import "../Buttons.scss";
</style>
 