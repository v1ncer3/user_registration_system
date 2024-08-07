<script setup>
    import {
          formatCpf,
        } from "../../../../../shared/functions/Formatting.js";
    import { onMounted } from "vue";
    const props = defineProps({
        descriptionCpf: {
            type: String
        },
        readOnly:{
            type: Boolean,
            required: false
        }
    })

    onMounted (() => {
        const cpfField = document.getElementById('cpf');
        cpfField.value = props.descriptionCpf || '';
        cpfField.readOnly = props.readOnly;
    })
    
    const emits = defineEmits(['cpfChanges']);

    const handleformatCpf = (event) => {
      cpf.value = formatCpf(event.target.value);
    };

    const emitChanges = (event) => {
      emits('cpfChanges', {cpf: event.target.value});
    }
</script>

<template>
    <div id="divComponent">
        <label for="cpf">CPF</label>
        <input type="text" placeholder="___.___.___-__" @input="handleformatCpf" @change="emitChanges" required id="cpf">
    </div>
</template>

<style scoped>
@import "../../Fields.scss";
</style>
 