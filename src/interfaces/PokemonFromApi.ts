export interface PokemonFromApi {
    id: number;
    pokedex: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    type: string;
    pokemon_v2_pokemonsprites: Array<{
      pokemon_v2_type: {
        name: string
      };
      sprites: {
        front_default: string
      };
    }>;
    pokemon_v2_pokemontypes: string[]
}