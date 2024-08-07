<script setup>
  import { onMounted } from "vue";
  import {
    formatCnpj,
  } from "../../../../../shared/functions/Formatting.js";
  const emits = defineEmits(['cnpjChanges']);

  const handleformatCnpj = (event) => {
    cnpj.value = formatCnpj(event.target.value);
  };

  const emitChanges = (event) => {
    emits('cnpjChanges', {cnpj: event.target.value});
  }

  const props = defineProps({
      descriptionCnpj: {
          type: String
      },
      readOnly:{
        type: Boolean,
        required: false
      }
  })

  onMounted (() => {
      const cnpjField = document.getElementById('cnpj');
      cnpjField.value = props.descriptionCnpj || '';
      cnpjField.readOnly = props.readOnly;
  })
</script>

<template>
    <div id="divComponent">
        <label for="cnpj">CNPJ</label>
        <input type="text" placeholder="__.___.___/___ - __" @input="handleformatCnpj" @change="emitChanges" required id="cnpj">
    </div>
</template>

<style scoped>
@import "../../Fields.scss";
</style>
 