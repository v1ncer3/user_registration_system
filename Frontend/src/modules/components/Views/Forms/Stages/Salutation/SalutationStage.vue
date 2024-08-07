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
        },
        userInfo: {
            type: Object
        }
    })

    const personType = ref(props.userInfo.personType || "");
    const email = ref(props.userInfo.email || "");

    const changePersonType = (person) => {
      personType.value = person.type;
    }
    const changeEmail = (value) => {
        email.value = value.email;
    }

</script>

<template>
    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 2,  infos: { email, personType }} })">
        <Header :message="props.title" :stage="props.stage" />
        <Email :descriptionEmail="props.userInfo.email" @emailChanges="changeEmail"/>
        <CnpjCpf :descriptionCnpj @personTypeChanges="changePersonType"/>
        <div id="buttons">
            <Continuar/>
        </div>
    </form>
</template>

<style scoped>
@import "./Salutation.scss";
</style>
 