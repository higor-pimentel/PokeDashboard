import { ref } from "vue";
import { defineStore } from "pinia";
import type { Chain, Pokemon, PokemonEvolution } from "@/models/pokemon";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokeInfo = ref<Pokemon[]>([]);
  const pokeEvolutions = ref<Chain[]>([]);

  function setPokemon(pokemon: Pokemon[]) {
    pokeInfo.value = [...pokemon];
  }

  function setPokemonEvolution(pokemon: PokemonEvolution) {
    pokeEvolutions.value = [];
    pokemon.chain.evolves_to.forEach((chain) => {
      pokeEvolutions.value?.push(chain);
      if (chain.evolves_to.length) {
        setChains(chain);
      }
    });
  }

  function setChains(chain: Chain) {
    chain.evolves_to.forEach((evolveChain) => {
      pokeEvolutions.value?.push(evolveChain);
      if (evolveChain.evolves_to.length) {
        setChains(evolveChain);
      }
    });
  }

  return { pokeInfo, pokeEvolutions, setPokemon, setPokemonEvolution };
});
