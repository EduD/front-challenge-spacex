<template>
  <router-link to="/">
    <img class="img-back" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="Voltar" /></router-link>
  <div class="pokemon-container">
    <div v-if="pokemon" class="pokemon-card">
      <section>
        <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
      </section>
      <section class="pokemon-details">
        <h1>{{ pokemon.name }}</h1>
        <p><strong>Pokedex:</strong> {{ pokemon.pokedex }}</p>
        <p><strong>Altura:</strong> {{ pokemon.height }} metros</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }} kg</p>
        <p><strong>Tipo(s):</strong> {{ pokemon.type }}</p>
        <span>
          <a :href="`https://www.pokemon.com/br/pokedex/${pokemon.name}`" target="_blank">Ver mais informações</a>
        </span>
      </section>
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
import {type PokemonFromApi } from '../interfaces/PokemonFromApi';

const route = useRoute();
const pokemon = ref<Pokemon>();

async function fetchPokemonDetails() {
  const pokemonId = route.params.id;  

  try {
    const { data } = await client.query({
      query: GET_POKEMON_DETAILS,
      variables: { id: pokemonId },
    });

    const pokemonData: PokemonFromApi = data.pokemon_v2_pokemon[0];

    pokemon.value = {
      id: pokemonData.id,
      pokedex: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.pokemon_v2_pokemonsprites[0].sprites.front_default,
      height: pokemonData.height,
      weight: pokemonData.weight,
      type: pokemonData.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name).join(', '),
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
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.pokemon-card {
  background: #fff;
  border: 2px solid #ddd;
  width: 350px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.pokemon-details {
  display: flex;
  flex-direction: column;
  background-color: beige;
  padding-bottom: 5px;
  text-transform: capitalize;
}

.pokemon-image {
  max-width: 100%;
  height: 250px;
  width: 250px;
  border-radius: 10px;
}

.img-back {
  width: 50px;
  margin: 10px;
}

h1 {
  font-size: 24px;
  margin-top: 10px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}

a {
  text-decoration: none;
  font-weight: 800;
}

a:hover {
  transition: 0.3s;
  color: brown;
}
</style>
