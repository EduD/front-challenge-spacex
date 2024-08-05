<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref, watch } from "vue";
import PokemonCard from "../components/PokemonCard.vue";
import { Pokemon } from "../interfaces/pokemon";
import Pagination from "../components/Pagination.vue";
import Loading from "../components/Loading.vue";

export interface QueryAllPokemonsResponse {
  pokemons: {
    results: Pokemon[];
  };
}

const QUERY_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        id
        artwork
      }
    }
  }
`;

const pokemons = ref<Pokemon[]>();
const offset = ref(0);
const loading = ref(false);

const handleOffsetUpdate = (newOffset: number) => {
  offset.value = newOffset;
};


onMounted(() => {

  const limit = 10;

  const queryPokemons = (offset: number, limit: number) => {
    loading.value = true;
    
    const { result } = useQuery<QueryAllPokemonsResponse>(
      QUERY_POKEMONS,
      {
        offset: offset,
        limit: limit
      }
    );
    if (result.value) {
      pokemons.value = result.value.pokemons.results;
      loading.value = false;
    }

    watch(result, (updated) => {
      if (updated) {
        pokemons.value = updated.pokemons.results;
      }
      loading.value = false;
    });

  };

  queryPokemons(offset.value, limit);

  watch(offset, (newOffset, oldOffset) => {
    if (newOffset != oldOffset) {
      queryPokemons(newOffset, limit);
    }
  });
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Pokedex</h1>
      <Pagination :offset="offset" @update:offset="handleOffsetUpdate" />
    </header>
    <Loading v-if="loading"/>
    <div class="allPokemons" v-else>
      <PokemonCard
        v-for="pokemon in pokemons"
        :pokemon="pokemon"
        :key="pokemon.id"
      />
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center
}
.allPokemons {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  .allPokemons {
    flex-direction: row;
  }

  .container img {
    max-width: 400px;
  }
}
</style>
