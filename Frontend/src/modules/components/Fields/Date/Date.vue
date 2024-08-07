<script setup>
    import { onMounted } from "vue";
    const props = defineProps({
        labelExtended:{
            type: String
        },
        descriptionDate:{
            type: String
        },
        readOnly:{
            type: Boolean,
            required: false
        }
    })

    onMounted (() => {
        const dateField = document.getElementById('date');
        dateField.value = props.descriptionDate || '';
        dateField.readOnly = props.readOnly;
    })

    const emits = defineEmits(['dateChanges']);

    const emitChanges = (event) => {
        emits('dateChanges', {date: event.target.value});
    }
</script>

<template>
    <div id="divComponent">
        <label v-if="labelExtended" for="date">Data de {{ labelExtended }}</label>
        <label v-else for="date">Data</label>
        <input type="date" @change="emitChanges" required id="date">
    </div>
</template>

<style scoped>
@import "../Fields.scss";
</style>
 