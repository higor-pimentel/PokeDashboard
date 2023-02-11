<script setup lang="ts">
import type { Pokemon } from "@/models/pokemon";
import { usePokemonStore } from "@/stores/pokemons";
import { reactive } from "vue";
import { getPokemon, getPokeEvolution } from "../services/pokemon.service";

const state = reactive({ pokemon: usePokemonStore(), inputPokemon: "" });

function getPokemonName() {
  if (state.inputPokemon.trim()) {
    getPokemon(state.inputPokemon.toLowerCase()).then((data) => {
      state.pokemon.setPokemon([data]);

      getPokeEvolution(data.id).then((evolution) => {
        state.pokemon.setPokemonEvolution(evolution);

        state.pokemon.pokeEvolutions?.forEach((chain) => {
          getPokemon(chain.species.name).then((evolutionPoke) => {
            state.pokemon.setPokemon([
              ...(state.pokemon.pokeInfo as Pokemon[]),
              evolutionPoke,
            ]);
          });
        });
      });
    });
  }
}
</script>

<template>
  <h1>Procure seu Pokemón</h1>
  <form class="d-flex" role="search">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search for a Pokemon"
      aria-label="Search"
      v-model="state.inputPokemon"
    />
    <button
      @click.prevent="getPokemonName"
      class="btn btn-outline-success"
      type="submit"
    >
      Search
    </button>
  </form>
</template>

<style>
form {
  margin-top: 2rem;
  padding: 10vw 20vw;
}
</style>
