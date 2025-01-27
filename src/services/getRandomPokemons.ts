import { gql } from '@apollo/client/core';

export const GET_RANDOM_POKEMONS = gql`
  query GetRandomPokemons($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
