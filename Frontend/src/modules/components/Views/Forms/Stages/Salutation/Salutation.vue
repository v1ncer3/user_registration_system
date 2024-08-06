<script setup>
    import Header from '../../../Header/Header.vue';
    import Email from '../../../../Fields/Email/Email.vue';
    import CnpjCpf from '../../../../Fields/CnpjCpf/CnpjCpf.vue';
    import Cadastrar from '../../../../Buttons/Cadastrar/Cadastrar.vue';

</script>

<template>
    <form>
        <div id="header">
            <Header :message="`Seja bem-vindo(a)`" :stage="1" />
        </div>
        <div id="fields">
            <Email />
            <CnpjCpf />
        </div>
        
        <div id="buttons">
            <Cadastrar :callbackFunction="vcclicouCadastrar"/>
        </div>
    </form>
</template>

<style scoped>
@import "./Salutation.scss";
</style>
 