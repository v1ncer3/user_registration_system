<script setup>
    import { onMounted } from "vue";
    const props = defineProps({
            nameExtended:{
                type: String
            },
            descriptionName:{
                type:String
            },
            readOnly:{
                type: Boolean,
                required: false
            }
        })
    const emits = defineEmits(['nameChanges']);

    const emitChanges = (event) => {
    emits('nameChanges', {name: event.target.value});
    }

    onMounted (() => {
        const nameField = document.getElementById('name');
        nameField.value = props.descriptionName || '';
        nameField.readOnly = props.readOnly;
    })

</script>

<template>
    <div id="divComponent">
        <label v-if="nameExtended" for="name">{{ nameExtended }}</label>
        <label v-else for="name">Nome</label>
        <input type="text" placeholder="Lorem Ipsum" @change="emitChanges" required id="name">
    </div>
</template>

<style scoped>
@import "../Fields.scss";
</style>
 