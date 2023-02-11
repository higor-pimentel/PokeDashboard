<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemons";
import { reactive } from "vue";

const state = reactive({ pokemon: usePokemonStore() });
</script>

<template>
  <div v-if="!!state.pokemon.pokeInfo?.length">
    <div
      v-for="(pokemon, index) in state.pokemon.pokeInfo"
      :key="index"
      class="card"
      style="width: 18rem"
    >
      <img
        :src="pokemon.sprites.front_default"
        class="card-img-top"
        :alt="pokemon.name"
      />
      <div class="card-body">
        <h5 class="card-title">
          {{ pokemon.name.toLocaleUpperCase() }}
        </h5>
        <p>
          <a
            data-bs-toggle="collapse"
            href="#stats"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ver características
          </a>
        </p>
        <div class="collapse" id="stats">
          <div class="card card-body">
            <p
              v-for="(stat, index) in pokemon.stats"
              :key="index"
              class="card-text"
            >
              <strong>{{ stat.stat.name.toUpperCase() }}</strong
              >: {{ stat.base_stat }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin: 2rem;
}
</style>
