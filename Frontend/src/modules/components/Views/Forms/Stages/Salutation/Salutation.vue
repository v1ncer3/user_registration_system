<script setup>
    import { ref, computed } from "vue";
    import Header from '../../../Header/Header.vue';
    import Email from '../../../../Fields/Email/Email.vue';
    import CnpjCpf from '../../../../Fields/CnpjCpf/CnpjCpf.vue';
    import Continuar from '../../../../Buttons/Continuar/Continuar.vue';
    
    const props = defineProps({
        stage: {
            type: Number,
            required: true
        },
        title:{
            type: String,
            required: true
        }
    })

    const personType = ref('');

    const changePersonType = (person) => {
      personType.value = person.type;
    }
</script>

<template>
    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 2,  typePerson: personType} })">
        <div id="header">
            <Header :message="props.title" :stage="props.stage" />
        </div>
        <div id="fields">
            <Email />
            <CnpjCpf @personTypeChanges="changePersonType"/>
        </div>
        
        <div id="buttons">
            <Continuar/>
        </div>
    </form>
</template>

<style scoped>
@import "./Salutation.scss";
</style>
 