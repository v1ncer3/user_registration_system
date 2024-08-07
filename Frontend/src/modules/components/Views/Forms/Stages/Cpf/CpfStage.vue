<script setup>
    import { ref, computed } from "vue";
    import Header from '../../../Header/Header.vue';
    import Nome from '../../../../Fields/Name/Name.vue';
    import Cpf from '../../../../Fields/CnpjCpf/Cpf/Cpf.vue';
    import Date from '../../../../Fields/Date/Date.vue';
    import Phone from '../../../../Fields/Phone/Phone.vue';
    import Voltar from '../../../../Buttons/Voltar/Voltar.vue';
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
        userInfo:{
            type: Object,
            required: true
        }
    })

    const name = ref(props.userInfo.name || "");
    const cpf = ref(props.userInfo.cpf || "");
    const birthDate = ref(props.userInfo.birthDate || "");
    const number = ref(props.userInfo.number || "");

    const changeName= (value) => {
        name.value = value.name;
    }
    const changeCpf = (value) => {
        cpf.value = value.cpf;
    }
    const changeBirthDate = (value) => {
        birthDate.value = value.date;
    }
    const changeNumber = (value) => {
        number.value = value.number;
    }
</script>

<template>
    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 3,  infos: {name, cpf, birthDate, number} }})">
        <Header :message="props.title" :stage="props.stage" />
        <Nome @nameChanges="changeName" :descriptionName="props.userInfo.name"/>
        <Cpf @cpfChanges="changeCpf" :descriptionCpf="props.userInfo.cpf"/>
        <Date @dateChanges="changeBirthDate" :descriptionDate="props.userInfo.birthDate" :labelExtended=" `nascimento`" />
        <Phone @numberChanges="changeNumber" :descriptionNumber="props.userInfo.number"/>
        

        <div id="buttons">
            <div id="button">
                <Voltar @click="$emit('previousStage', { nextStage: {id: 1,  infos: {name:'', cpf:'', birthDate:'', number:''} }})"/>
            </div>
            <div id="button">
                <Continuar/>
            </div>
        </div>
        
    </form>
</template>

<style scoped>
@import "./Cpf.scss";
</style>
 