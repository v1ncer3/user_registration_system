<script setup>
    //import dotenv from 'dotenv';
    import { ref, computed } from "vue";
    import SalutationStage from '../Stages/Salutation/SalutationStage.vue';
    import CpfStage from '../Stages/Cpf/CpfStage.vue';
    import CnpjStage from '../Stages/Cnpj/CnpjStage.vue';
    import Password from '../Stages/Password/PasswordStage.vue';
    import Review from '../Stages/Review/ReviewStage.vue';
    import { STAGES, PERSON } from '../../../../../shared/enums/Form.js';
    //dotenv.config();

    const stage = ref(1);
    const userInfo = ref({
        email: "",
        personType: "",
        name: "",
        cpf: "",
        birthDate: "",
        number: "",
        corporateName: "",
        cnpj: "",
        corporateOpeningDate: "",
        password: "",
    });

    const isEmailStage = computed( () => {
        return (stage.value === STAGES.EMAIL.ID);
    }) 

    const isPersonStage = computed( () => {
        return (stage.value === STAGES.PHYSICAL_PERSON.ID && PERSON.PHYSICAL_PERSON === userInfo.value.personType);
    }) 

    const isLegalStage = computed( () => {
        return (stage.value === STAGES.LEGAL_PERSON.ID && PERSON.LEGAL_PERSON === userInfo.value.personType);
    })

    const isPasswordStage = computed( () => {
        return (stage.value === STAGES.PASSWORD.ID);
    }) 

    const isReviewStage = computed( () => {
        return (stage.value === STAGES.REVIEW.ID);
    }) 
    
    const nextStage = async (data) => {
        userInfo.value = { ...userInfo.value, ...data.nextStage.infos };
        if (isReviewStage.value && data.nextStage.id === STAGES.EMAIL.ID) await postUser();
        stage.value = data.nextStage.id;
    };


    const postUser = async () => {
        try {
            const response = await fetch(`http://localhost:3030/registration`,
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify(userInfo.value),
                                        });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert(error.message);
        } finally {
            clearUserInfo();
        }
    };

    const clearUserInfo = () => {
        Object.keys(userInfo.value).forEach((key) => {
            userInfo.value[key] = "";
        });
    };
</script>

<template>
    <div v-if="isEmailStage" id="salutation" class="stages">
        <SalutationStage :stage="STAGES.EMAIL.ID" :title="STAGES.EMAIL.TITLE" :userInfo="userInfo" @nextStage="nextStage"/>
    </div>
    <div v-if="isPersonStage" id="salutation" class="stages">
        <CpfStage :stage="STAGES.PHYSICAL_PERSON.ID" :title="STAGES.PHYSICAL_PERSON.TITLE" :userInfo="userInfo" @nextStage="nextStage" @previousStage="nextStage"/>
    </div>
    <div v-if="isLegalStage" id="salutation" class="stages">
        <CnpjStage :stage="STAGES.LEGAL_PERSON.ID" :title="STAGES.LEGAL_PERSON.TITLE" :userInfo="userInfo" @nextStage="nextStage" @previousStage="nextStage"/>
    </div>
    <div v-if="isPasswordStage" id="salutation" class="stages">
        <Password :stage="STAGES.PASSWORD.ID" :title="STAGES.PASSWORD.TITLE" :userInfo="userInfo" @nextStage="nextStage" @previousStage="nextStage"/>
    </div>
    <div v-if="isReviewStage" id="salutation" class="stages">
        <Review :stage="STAGES.REVIEW.ID" :title="STAGES.REVIEW.TITLE" :userInfo="userInfo" @nextStage="nextStage" @previousStage="nextStage"/>
    </div>

</template>

<style scoped>
@import "./Registration.scss";
</style>