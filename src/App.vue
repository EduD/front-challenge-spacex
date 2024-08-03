<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref, watch } from "vue";

export interface Pokemon {
  id: string;
  name: string;
  artwork: string;
}

interface QueryAllPokemonsResponse {
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

onMounted(() => {
  const variables = { limit: 10, offset: 0 };
  const { result } = useQuery<QueryAllPokemonsResponse>(
    QUERY_POKEMONS,
    variables
  );

  watch(result, (updated) => {
    if (updated && updated) {
      pokemons.value = updated.pokemons.results;
    }
  });
});
</script>

<template>
  <p v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.name}}</p>
</template>

<style scoped></style>
