<script setup>
</script>

<template>
    <div id="divComponent">
        <label for="phone">Telefone</label>
        <input type="tel" placeholder="(00) 12345-6789" required id="phone" pattern="[0-9]{(2)} [0-9]{5}-[0-9]{4}">
    </div>
</template>

<style scoped>
@import "./Phone.scss";
@import "../Fields.scss";
</style>
 