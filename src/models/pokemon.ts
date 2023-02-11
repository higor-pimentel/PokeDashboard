export interface Pokemon {
  id: number;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  forms: [{ name: string }];
  height: number;
  is_default: boolean;
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  name: string;
  species: { name: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: [{ base_stat: number; effort: number; stat: { name: string } }];
  weight: number;
}

export type PokemonEvolution = {
  chain: Chain;
  id: 1;
};

export type Chain = {
  evolution_details: [
    {
      min_level: number;
      trigger: {
        name: string;
      };
    }
  ];
  evolves_to: Chain[];
  is_baby: boolean;
  species: {
    name: string;
  };
};
