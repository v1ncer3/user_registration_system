<script setup>

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
    <p>Etapa <span :style="{ color: 'orange' }">{{ stage }}</span> de 4</p>
    <h2>{{ message }}</h2>
</template>

<style scoped>
</style>
 