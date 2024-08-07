<script setup>
    import { onMounted } from "vue";
    const props = defineProps({
        descriptionPassword:{
            type:String
        },
        readOnly:{
            type: Boolean,
            required: false
        }
    })
    onMounted (() => {
        const passwordField = document.getElementById('password');
        passwordField.value = props.descriptionPassword || '';
        passwordField.readOnly = props.readOnly;
    })

    const emits = defineEmits(['passwordChanges']);

    const emitChanges = (event) => {
        emits('passwordChanges', {password: event.target.value});
    }
</script>

<template>
    <div id="divComponent">
        <label for="password">Sua senha</label>
        <input type="password" placeholder="********" required id="password" @change="emitChanges">
    </div>
</template>

<style scoped>
@import "../Fields.scss";
</style>
 