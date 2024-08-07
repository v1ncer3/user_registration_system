<script setup>
    import { ref, computed } from "vue";
    import Header from '../../../Header/Header.vue';
    import Nome from '../../../../Fields/Name/Name.vue';
    import Cnpj from '../../../../Fields/CnpjCpf/Cnpj/Cnpj.vue';
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

    const corporateName = ref(props.userInfo.corporateName || "");
    const cnpj = ref(props.userInfo.cnpj || "");
    const corporateOpeningDate = ref(props.userInfo.corporateOpeningDate || "");
    const number = ref(props.userInfo.number || "");

    const changeName= (value) => {
        corporateName.value = value.name;
    }
    const changeCnpj = (value) => {
        cnpj.value = value.cnpj;
    }
    const changeBirthDate = (value) => {
        corporateOpeningDate.value = value.date;
    }
    const changeNumber = (value) => {
        number.value = value.number;
    }
</script>

<template>

    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 3,  infos: {corporateName, cnpj, corporateOpeningDate, number} }})">
        <Header :message="props.title" :stage="props.stage" />
        <Nome @nameChanges="changeName" :descriptionName="props.userInfo.corporateName" :nameExtended="`Razão Social`"/>
        <Cnpj @cnpjChanges="changeCnpj" :descriptionCnpj="props.userInfo.cnpj"/>
        <Date @dateChanges="changeBirthDate" :labelExtended=" `abertura`" :descriptionDate="props.userInfo.corporateOpeningDate"/>
        <Phone @numberChanges="changeNumber" :descriptionNumber="props.userInfo.number"/>

        
        <div id="buttons">
            <div id="button">
                <Voltar @click="$emit('previousStage', { nextStage: {id: 1,  infos: {corporateName:'', cnpj:'', corporateOpeningDate:'', number:''} }})"/>
            </div>
            <div id="button">
                <Continuar/>
            </div>
        </div>
    </form>
</template>

<style scoped>
@import "./Cnpj.scss";
</style>
 