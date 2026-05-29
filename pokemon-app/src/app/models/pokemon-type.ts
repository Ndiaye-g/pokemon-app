export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeList {
  count: number;
  results: PokemonType[];
}

export interface PokemonTypeDetail {
  name: string;
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}