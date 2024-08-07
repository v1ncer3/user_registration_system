<script setup>
const emits = defineEmits(['personTypeChanges']);

const toggleField = (selectedType) => {
    const cnpjField = document.getElementById('cnpjRadio');
    const cpfField = document.getElementById('cpfRadio');

    if (selectedType === 'cnpjRadio') {
        cpfField.checked = false;
        cpfField.required = false;
        cnpjField.required = true;
        emits('personTypeChanges', {type: 'cnpj'});
    } else {
        cnpjField.checked = false;
        cnpjField.required = false;
        cpfField.required = true;
        emits('personTypeChanges', {type: 'cpf'});
    }

    
}
</script>

<template>
    <!-- <fieldset> -->
    <!--     <legend>Select a maintenance drone:</legend> -->
    <div>
        <div id="cpf">
            <input required type="radio" id="cpfRadio" name="cpf" value="CPF" @click="toggleField('cpfRadio')"/>
            <label for="cpfRadio">Pessoa física</label>
        </div>
        <div id="cnpj">
            <input required type="radio" id="cnpjRadio" name="cnpj" value="CNPJ" @click="toggleField('cnpjRadio')"/>
            <label for="cnpjRadio">Pessoa jurídica</label>
        </div>
    </div>
    <!-- </fieldset> -->
</template>

<style scoped>
div{
    display: flex;
    max-width: 300px;
    width: 100%;
}

#cpf, #cnpj{
    padding:10px;
}
</style>
 
 