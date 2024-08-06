<script setup>
    import { ref } from 'vue';
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
    const vcclicouCadastrar = () => {
        alert('vc clicou Cadastrar, congrats');
    }

    const vcclicouContinuar = () => {
        alert('vc clicou Continuar, congrats');
    }

    const vcclicouVoltar = () => {
        alert('vc clicou Voltar, congrats');
    }


    const stage = ref(2);
</script>

<template>
    <div v-if="stage==1" id="salutation" class="stages">
        <Salutation />
    </div>
    <div v-if="stage==2" id="salutation" class="stages">
        ola
    </div>
    <!--<Header :message="`Seja bem-vindo(a)`" :stage="1" />
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
 