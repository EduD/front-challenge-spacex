export interface Characters {
  characters: CharactersClass;
}

export interface CharactersClass {
  results: ResultCharacters[];
}

export interface ResultCharacters {
  name: string;
  id: string;
  image: string;
}

export interface CharacterByID {
  character: Character;
}

export interface Character {
  id: string;
  name: string;
  status: "Alive" | "Death" | "Unknown";
  species: string;
  gender: string;
  image: string;
  created: string;
}
