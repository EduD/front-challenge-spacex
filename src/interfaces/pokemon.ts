export interface Pokemon {
  id: string;
  name: string;
  artwork: string;
  sprites: Sprite;
  height: number;
  weight: number;
  abilities: { ability: Ability }[];
  types: { type: Type }[];
  stats: { stat: Stat, base_stat: number }[];
}

interface Sprite {
  front_default: string;
  back_default: string;
}

interface Ability {
  name: string;
}

export interface Stat {
  name: string;
}

export interface Type {
  name: string;
}
