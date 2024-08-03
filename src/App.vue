<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref, watch } from "vue";
import PokemonCard from "./components/PokemonCard.vue";

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
    <div class="container">
        <h1>Pokedex</h1>
        <div class="allPokemons">
            <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon" :key="pokemon.id" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
}

.container h1 {
    align-self: flex-start;
    font-size: 3rem;
}

.allPokemons {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
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
