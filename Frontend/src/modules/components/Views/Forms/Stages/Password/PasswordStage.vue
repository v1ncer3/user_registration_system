<script setup>
    import { ref, computed } from "vue";
    import Header from '../../../Header/Header.vue';
    import Password from '../../../../Fields/Password/Password.vue';
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
    
    const password = ref(props.userInfo.password || '');

    const changeName= (value) => {
        password.value = value.password;
    }
</script>

<template>
    <form @submit.prevent="$emit('nextStage', { nextStage: {id: 4,  infos: { password } }})">
        <Header :message="props.title" :stage="props.stage" />
        <Password @passwordChanges="changeName"/>

        <div id="buttons">
            <div id="button">
                <Voltar @click="$emit('previousStage', { nextStage: {id: 2,  infos: { password:'' } }})"/>
            </div>
            <div id="button">
                <Continuar/>
            </div>
        </div>
    </form>
</template>

<style scoped>
@import "./Password.scss";
</style>
 