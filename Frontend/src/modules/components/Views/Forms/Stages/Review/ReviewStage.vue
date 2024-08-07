<script setup>
    import Header from '../../../Header/Header.vue';
    import Email from "@/modules/components/Fields/Email/Email.vue";
    import Name from "@/modules/components/Fields/Name/Name.vue";
    import Cpf from "@/modules/components/Fields/CnpjCpf/Cpf/Cpf.vue";
    import Cnpj from "@/modules/components/Fields/CnpjCpf/Cnpj/Cnpj.vue";
    import Date from "@/modules/components/Fields/Date/Date.vue";
    import Phone from "@/modules/components/Fields/Phone/Phone.vue";
    import Password from '../../../../Fields/Password/Password.vue';
    import Voltar from '../../../../Buttons/Voltar/Voltar.vue';
    import Cadastrar from '../../../../Buttons/Cadastrar/Cadastrar.vue';
    
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

</script>

<template>
    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 1,  infos: {} }})">
        <Header :message="props.title" :stage="props.stage" :readOnly="true"/>
        <Email :descriptionEmail="props.userInfo.email" :readOnly="true"/>
        
        <div v-if="props.userInfo.personType=='cpf'">
            <Nome :descriptionName="props.userInfo.name" :nameExtended="`Nome`" :readOnly="true" />
            <Cpf :descriptionCpf="props.userInfo.cpf" :readOnly="true"/>
            <Date :descriptionDate="props.userInfo.birthDate" :labelExtended=" `nascimento`" :readOnly="true"/>
        </div>
        <div v-if="props.userInfo.personType=='cnpj'">
            <Nome :descriptionName="props.userInfo.corporateName" :nameExtended="`Razão Social`" :readOnly="true"/>
            <Cnpj :descriptionCnpj="props.userInfo.cnpj" :readOnly="true"/>
            <Date :descriptionDate="props.userInfo.corporateOpeningDate" :labelExtended=" `abertura`" :readOnly="true"/>        
        </div>

        <Phone :descriptionNumber="props.userInfo.number" :readOnly="true"/>
        <Password :descriptionPassword="props.userInfo.password" :readOnly="true"/>

        <div id="buttons">
            <div id="button">
                <Voltar @click="$emit('previousStage', { nextStage: {id: 3,  infos: {} }})"/>
            </div>
            <div id="button">
                <Cadastrar/>
            </div>
        </div>
    </form>
</template>

<style scoped>
@import "./Review.scss";
</style>
 