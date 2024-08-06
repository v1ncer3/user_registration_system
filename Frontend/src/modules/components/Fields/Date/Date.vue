<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        labelExtended:{
            type: String
        }
    })
</script>

<template>
    <div id="divComponent">
        <label v-if="labelExtended" for="date">Data de {{ labelExtended }}</label>
        <label v-else for="date">Data</label>
        <input type="date" placeholder="example@provider.com" required id="date">
    </div>
</template>

<style scoped>
@import "./Date.scss";
@import "../Fields.scss";
</style>
 