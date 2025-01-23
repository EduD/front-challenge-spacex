<template>
  <div class="pokemon-details">
    <div v-if="pokemon" class="pokemon-card">
      <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
      <h1>{{ pokemon.name }}</h1>
      <p><strong>Pokedex Number:</strong> {{ pokemon.pokedex }}</p>
      <p><strong>Height:</strong> {{ pokemon.height }} meters</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }} kg</p>
      <p><strong>Type:</strong> {{ pokemon.type }}</p>
      <a :href="`https://www.pokemon.com/br/pokedex/${pokemon.name}`" target="_blank">Ver site oficial</a>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import client from '../services/client';
import { GET_POKEMON_DETAILS } from '../services/getPokemonDetails';
import { type Pokemon } from '../interfaces/Pokemon';

const route = useRoute();
const pokemon = ref<Pokemon[]>([]);

async function fetchPokemonDetails() {
  const pokemonId = route.params.id;  

  try {
    const { data } = await client.query({
      query: GET_POKEMON_DETAILS,
      variables: { id: pokemonId },
    });

    const pokemonData = data.pokemon_v2_pokemon[0];
    console.log(pokemonData)

    pokemon.value = {
      pokedex: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.pokemon_v2_pokemonsprites[0].sprites.front_default,
      height: pokemonData.height,
      weight: pokemonData.weight,
      type: pokemonData.pokemon_v2_pokemontypes.map((type: Pokemon) => type.pokemon_v2_type.name).join(', '),
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do Pokémon:', error);
  }
}

onBeforeMount(() => {
  fetchPokemonDetails();
});
</script>

<style scoped>
.pokemon-details {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.pokemon-card {
  background: #fff;
  border: 2px solid #ddd;
  padding: 20px;
  width: 350px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.pokemon-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  margin-top: 10px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
</style>
