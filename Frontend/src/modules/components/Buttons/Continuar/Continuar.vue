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
        <button id=button type="submit" @click="handleClick">Continuar</button>
    </div>
</template>

<style scoped>
@import "./Continuar.scss";
@import "../Buttons.scss";
</style>
 