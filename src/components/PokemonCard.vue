<template>
  <RouterLink :to="`/pokemon/${pokemon.name}`">
    <div class="card">
      <div class="card-header">
        <h1>{{ capitalize(pokemon.name) }}</h1>
      </div>
      <div class="card-body">
        <div class="id">
          <p>{{ pokemon.id }}</p>
        </div>
        <div class="artwork">
          <img :src="pokemon.artwork" alt="">
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Pokemon } from "../interfaces/pokemon";
import { RouterLink } from "vue-router";
import useUtils from "../composables/useUtils";
const { capitalize } = useUtils()
defineProps({
  pokemon: {
    required: true,
    type: Object as PropType<Pokemon>
  },
});

</script>

<style scoped>
a {
  flex: 1;
  flex-basis: 300px;
  max-width: 350px;
  width: 100%;
}
.card {
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 1rem;
  padding: 1rem;
  background-image: linear-gradient(to right bottom, #cfffd0, #fff);
  cursor: pointer;
  justify-content: space-between;
  transition: .2s;
  color: #1f1f1f;
}

.card:hover {
  transform: scale(1.02);
}

.card .card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .25rem;
}

.card .card-header h1 {
  font-size: 1.5rem;
}

.card .card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
}

.card .card-body .id {
  font-size: 3rem;
}

.card .card-body .id p {
  font-weight: bold;
}

.card .card-body img {
  max-width: 200px;
  position: relative
}
</style>