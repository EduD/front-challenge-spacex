<template>
  <main>
    <div>
      <header>Lista de Pokemons</header>
      <section>
        <article v-for="pokemon in pokemons" :key="pokemon.pokedex" class="card">
          <img :src="pokemon.image" :alt="pokemon.name" />
          <div class="info">
            <div class="name">{{ pokemon.name }}</div>
            <div class="pokedex-number">#{{ pokemon.pokedex }}</div>
          </div>
          <footer>
            <router-link :to="`/pokemon/${pokemon.pokedex}`">Ver detalhes</router-link>
          </footer>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import client from '../services/client';
import { GET_RANDOM_POKEMONS } from '../services/getRandomPokemons';
import { type Pokemon } from '../interfaces/Pokemon';
import { type RawPokemon } from '../interfaces/RawPokemon';

const pokemons = ref<Pokemon[]>([]);

async function fetchPokemons() {
  const variables = {
    limit: 10,
    offset: 0,
  };

  try {
    const { data } = await client.query({
      query: GET_RANDOM_POKEMONS,
      variables,
    });

    console.log(data)

    pokemons.value = data.pokemon_v2_pokemon.map((pokemon: RawPokemon): Pokemon => ({
      pokedex: pokemon.id,
      name: pokemon.name,
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default,
    }));
  } catch (error) {
    console.error('Erro ao buscar Pokémon', error);
  }
}

onBeforeMount(() => {
  fetchPokemons();
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

div {
  width: 70%;
}

header {
  text-align: center;
  font-size: 24px;
  margin: 16px 0;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card {
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 140px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 8px;
}

.info {
  width: 100% !important; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background-color: #ccc;
}

.name {
  font-weight: bold;
}

.pokedex-number {
  font-size: 14px;
  color: #555;
}
</style>
