<script setup>

const toggleField = (selectedType) => {
    const cnpjField = document.getElementById('cnpjRadio');
    const cpfField = document.getElementById('cpfRadio');

    if (selectedType === 'cnpjRadio') {
        cpfField.checked = false;
        this.$emit('personTypeChanges', {type: 'cnpj'});
        delete cpfField.required;
        cnpjField.required = true;
    } else {
        cnpjField.checked = false;
        
        delete cnpjField.required;
        cpfField.required = true;
    }

    const emits = defineEmits({
        this.$emit('personTypeChanges', {type: 'cpf'});
    })
}
</script>

<template>
    <!-- <fieldset> -->
    <!--     <legend>Select a maintenance drone:</legend> -->
    <div>
        <div id="cpf">
            <input required type="radio" id="cpfRadio" name="cpf" value="CPF" @click="toggleField('cpfRadio')" @click="this.$emit('personTypeChanges', {type: 'cpf'});"/>
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
    padding:5px;
}
</style>
 
 