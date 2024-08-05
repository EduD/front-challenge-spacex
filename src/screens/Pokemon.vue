<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref, watch, watchEffect } from "vue";
import { Pokemon, Stat } from "../interfaces/pokemon";
import { useRoute, useRouter } from "vue-router";
import PokemonType from "../components/PokemonType.vue";
import useUtils from "../composables/useUtils";
import { QueryAllPokemonsResponse } from "./Dashboard.vue";
import Loading from "../components/Loading.vue";
const { capitalize } = useUtils();

interface QueryPokemonResponse {
  pokemon: Pokemon;
}

const QUERY_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      sprites {
        front_default
        back_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const QUERY_POKEMON_ARTWORK = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        artwork
      }
    }
  }
`;

const pokemon = ref<Pokemon>();
const artwork = ref("");
const loading = ref(false);
const route = useRoute();
const router = useRouter();

const backToAllPokemons = () => {
  router.push("/dashboard");
};

onMounted(() => {
  const pokemonName = route.params.name;
  const pokemonVariables = { name: pokemonName };
  loading.value = true;
  const { result: pokemonResult } = useQuery<QueryPokemonResponse>(
    QUERY_POKEMON,
    pokemonVariables
  );

  if (pokemonResult.value) {
    queryPokemonArtwork(pokemonResult.value.pokemon.id);
    pokemon.value = { ...pokemonResult.value.pokemon, artwork: artwork.value };
  }

  watch(pokemonResult, (updated) => {
    if (updated) {
      queryPokemonArtwork(updated.pokemon.id);
      pokemon.value = { ...updated.pokemon, artwork: artwork.value };
    }
  });
});

const queryPokemonArtwork = (id: string) => {
  const artworkVariables = { offset: Number(id) - 1, limit: 1 };
  loading.value = true;
  const { result: pokemonArtworkResult } = useQuery<QueryAllPokemonsResponse>(
    QUERY_POKEMON_ARTWORK,
    artworkVariables
  );
  if (pokemonArtworkResult.value) {
    artwork.value = pokemonArtworkResult.value.pokemons.results[0].artwork;
    loading.value = false;
  }

  watch(pokemonArtworkResult, (updated) => {
    if (updated) {
      artwork.value = updated.pokemons.results[0].artwork;
    }
    loading.value = false;
  });
};

watchEffect(() => {
  if (pokemon.value && artwork.value !== null) {
    pokemon.value = { ...pokemon.value, artwork: artwork.value };
  }
});
</script>

<template>
  <div class="container">
    <Loading v-if="loading" />
    <div class="pokemon" v-if="!loading && pokemon">
      <div class="header">
        <button @click="backToAllPokemons">&lt;</button>
        <h1>{{ capitalize(pokemon.name) }}</h1>
      </div>
      <div class="body">
        <div class="images">
          <div class="mainImage" :class="pokemon.types[0].type.name">
            <img
            :src="pokemon.artwork"
            alt=""
            />
          </div>
          <div class="sprites" v-if="pokemon.sprites">
            <img :src="pokemon.sprites.front_default" alt="" />
            <img :src="pokemon.sprites.back_default" alt="" />
          </div>
        </div>
        <div class="info">
          <p>
            Height: <span>{{ pokemon.height / 10 }}m</span>
          </p>
          <p>
            Weight: <span> {{ pokemon.weight / 10 }}kg</span>
          </p>
          <p>
            HP:
            <span>
              {{
                pokemon.stats.find((stat: any) => stat.stat.name == "hp")
                  ?.base_stat
              }}</span
            >
          </p>
          <p>
            Attack:
            <span>
              {{
                pokemon.stats.find((stat: any) => stat.stat.name == "attack")
                  ?.base_stat
              }}</span
            >
          </p>
          <p>
            Defense:
            <span>
              {{
                pokemon.stats.find((stat: any) => stat.stat.name == "defense")
                  ?.base_stat
              }}</span
            >
          </p>
          <br /><br />
          <p>
            Abilities:
            <span>
              {{
                pokemon.abilities.map((a: any) => a.ability.name).join(", ")
              }}</span
            >
          </p>
          <div class="types">
            <PokemonType
              :type="type.type"
              v-for="type in pokemon?.types"
              :key="type.type.name"
            />
          </div>
          <a
            :href="`https://www.pokemon.com/br/pokedex/${pokemon.name}`"
            target="_blank"
          >
            <button>Ver mais</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
}

.pokemon .header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
}

.pokemon .header button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #ffffff;
  outline: none;
  border: none;
}

.pokemon .types {
  align-self: flex-start;
  width: max-content;
  display: flex;
  gap: 1rem;
}

.pokemon .body {
  font-family: "Saira", sans-serif;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.pokemon .body .info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pokemon .body img {
  max-width: 100%;
  height: 200px;
}

.pokemon .body .mainImage {
  border-radius: 20px;
}

.pokemon .body .mainImage img {
  animation: bouge 5s ease-in-out infinite;
}

.pokemon .body .sprites {
  display: flex;
  justify-content: center;
}

.pokemon .body .sprites img {
  max-width: 100%;
  height: initial;
  background: none;
}

.pokemon .body p {
  font-size: 1.5rem;
}

.pokemon .body p span {
  font-weight: bold;
}

.pokemon .body button {
  margin-top: 2rem;
  width: 100%;
  outline: none;
  border: none;
  padding: 1rem 0;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  background: #fff;
  font-size: 1rem;
}

.pokemon .body button:hover {
  transform: scale(1.02);
}

@media screen and (min-width: 769px) {
  .pokemon {
    width: 50%;
  }

  .pokemon .header {
    gap: 3rem;
  }

  .pokemon .body {
    flex-direction: row;
    margin-top: 15%;
    gap: 2rem;
  }

  .pokemon .body img {
    height: initial;
    height: 22rem;
    max-width: 400px;
  }
}
</style>
