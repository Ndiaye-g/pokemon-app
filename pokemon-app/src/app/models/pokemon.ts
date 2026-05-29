export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

export interface PokemonEntry {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonTypeDetail {
  name: string;
  pokemon: PokemonEntry[];
}