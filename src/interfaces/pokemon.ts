export interface Pokemon {
  id: string;
  name: string;
  artwork: string;
  sprites: Sprite;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
}

export interface PokemonStat {
  stat: Stat;
  base_stat: number;
}

export interface PokemonType {
  type: Type
}

export interface PokemonAbility {
  ability: Ability;
}

interface Sprite {
  front_default: string;
  back_default: string;
}

interface Ability {
  name: string;
}

interface Stat {
  name: string;
}

export interface Type {
  name: string;
}
