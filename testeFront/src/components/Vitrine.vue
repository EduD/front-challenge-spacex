<template>
    <div class="vitrineAnimes">
      <Animes></Animes>
    </div>
  </template>

<script setup lang="ts">
import Animes from './Animes.vue'
</script>

<style scoped>
.vitrineAnimes{
  width: 85%;
  border: 2px solid wheat;
  margin-top: 1vw;
  margin-bottom: 3vw;
  border-radius: 2vw;
}
</style>