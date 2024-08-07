<template>
    <div id="divComponent">
        <label for="email">Endereço de e-mail</label>
        <input type="email" placeholder="example@provider.com" @change="emailChanges" required id="email">
    </div>
</template>

<style scoped>
@import "../Fields.scss";
</style>
 
<script setup>
    import { onMounted } from "vue";
    const props = defineProps({
        descriptionEmail: {
            type: String
        },
        readOnly:{
            type: Boolean,
            required: false
        }
    })
    
    const emits = defineEmits(['emailChanges']);

    const emailChanges = (selectedType) => {
        const emailField = document.getElementById('email');
        emits('emailChanges', {email: emailField.value});
    }

    onMounted (() => {
        const emailField = document.getElementById('email');
        emailField.value = props.descriptionEmail || '';
        emailField.readOnly = props.readOnly;
    })
</script>