export interface RawPokemon {
    id: number;
    name: string;
    pokemon_v2_pokemonsprites: Array<{
      sprites: {
        front_default: string
      };
    }>;
    
}