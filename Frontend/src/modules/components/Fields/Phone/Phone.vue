<script setup>
  import {
    formatNumber,
  } from "../../../../shared/functions/Formatting.js";
  import { onMounted } from "vue";
      const props = defineProps({
          labelExtended:{
              type: String
          },
          descriptionNumber:{
              type: String
          },
          readOnly:{
              type: Boolean,
              required: false
          }
      })

      onMounted (() => {
          const phoneField = document.getElementById('phone');
          phoneField.value = props.descriptionNumber || '';
          phoneField.readOnly = props.readOnly;
      })
  const handleformatNumber = (event) => {
    phone.value = formatNumber(event.target.value);
  };

  const emits = defineEmits(['numberChanges']);

  const emitChanges = (event) => {
    emits('numberChanges', {number: event.target.value});
  }
</script>

<template>
    <div id="divComponent">
        <label for="phone">Telefone</label>
        <input type="tel" placeholder="(00) 12345-6789" required id="phone" @input="handleformatNumber" @change="emitChanges" pattern="[0-9]{(2)} [0-9]{5}-[0-9]{4}">
    </div>
</template>

<style scoped>
@import "../Fields.scss";
</style>
 