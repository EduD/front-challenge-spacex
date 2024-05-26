<template>
  <main>
    <img class="logo" :src="img" alt="Imagem" />
    <Vitrine></Vitrine>
  </main>
</template>

<script setup lang="ts">
import Vitrine from './Vitrine.vue'
import { defineProps } from 'vue'

defineProps<{
  img: string;
}>()

</script>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
}

.logo {
  width: 35vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-items: center;
  align-self: center;
  margin-top: 2vw;
}

</style>
