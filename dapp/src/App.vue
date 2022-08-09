<script setup lang="ts">
import Web3Interact from "./components/Web3Interact.vue";
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Web3Interact contractAddress="0x453afb6edC8C00e7256C677fbA0855a8961Edc23" abi="{}" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
