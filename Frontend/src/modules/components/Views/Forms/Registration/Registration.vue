<script setup>
    import { ref, computed } from "vue";
    import Header from '../../Header/Header.vue';
    import Email from '../../../Fields/Email/Email.vue';
    import Cnpj from '../../../Fields/CnpjCpf/Cnpj/Cnpj.vue';
    import Cpf from '../../../Fields/CnpjCpf/Cpf/Cpf.vue';
    import CnpjCpf from '../../../Fields/CnpjCpf/CnpjCpf.vue';
    import Date from '../../../Fields/Date/Date.vue';
    import Name from '../../../Fields/Name/Name.vue';
    import Password from '../../../Fields/Password/Password.vue';
    import Phone from '../../../Fields/Phone/Phone.vue';
    import Cadastrar from '../../../Buttons/Cadastrar/Cadastrar.vue';
    import Continuar from '../../../Buttons/Continuar/Continuar.vue';
    import Voltar from '../../../Buttons/Voltar/Voltar.vue';
    import Salutation from '../Stages/Salutation/Salutation.vue';
    import { STAGES, PERSON } from '../../../../../shared/enums/Form.js';

    const vcclicouCadastrar = () => {
        alert('vc clicou Cadastrar, congrats');
    }

    const vcclicouContinuar = () => {
        alert('vc clicou Continuar, congrats');
    }

    const vcclicouVoltar = () => {
        alert('vc clicou Voltar, congrats');
    }

    const stage = ref(1);
    const typePerson = ref('');

    const isEmailStage = computed( () => {
        return (stage.value === STAGES.EMAIL.ID);
    }) 

    const isPersonStage = computed( () => {
        return (stage.value === STAGES.PHYSICAL_PERSON.ID && PERSON.PHYSICAL_PERSON === typePerson);
    }) 
    
    const nextStage = (data) => {
        //userInfo.value = { ...userInfo.value, ...data.infos };

        //if (isReviewStage.value && data.stage === STAGES.EMAIL) await postUser();

        stage.value = data.nextStage.id;
        typePerson = data.nextStage.typePerson;
    };
</script>

<template>
    <div v-if="isEmailStage" id="salutation" class="stages">
        <Salutation :stage="STAGES.EMAIL.ID" :title="STAGES.EMAIL.TITLE" @nextStage="nextStage"/>
    </div>
    <div v-if="isPersonStage" id="salutation" class="stages">
        ola
    </div>







    <!--<Header :message="`Seja bem-vindo(a)`" :stage="stage" />
    <Header :message="`Pessoa Física`" :stage="2"/>
    <Header :message="`Pessoa Jurídica`" :stage="2" />
    <Header :message="`Senha de acesso`" :stage="3" />
    <Header :message="`Revise suas informações`" :stage="4" />
    <Email />
    <Cnpj />
    <Cpf />
    <CnpjCpf />
    <Date :labelExtended="'Abertura'"/>
    <Date :labelExtended="'nascimento'"/>
    <Name />
    <Password />
    <Phone />
    <div id="buttons">
        <Cadastrar :callbackFunction="vcclicouCadastrar"/>
        <Continuar :callbackFunction="vcclicouContinuar"/>
        <Voltar :callbackFunction="vcclicouVoltar"/>
    </div>-->
    

</template>

<style scoped>
@import "./Registration.scss";
</style>