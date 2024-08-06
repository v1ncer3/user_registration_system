<script setup>
import { defineProps } from 'vue'

const props = defineProps({
   message: {
    type: String,
    required: true
   },
   stage: {
    type: Number,
    required: true
   }
})
    
</script>

<template>
    <div id="header">
        <div>
            <p>Etapa <span :style="{ color: 'orange' }">{{ stage }}</span> de 4</p>
        </div>
        <div>
            <h2>{{ message }}</h2>
        </div>
    </div>
</template>

<style scoped>
@import "./Header.scss";
</style>
 