<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemons";
import { reactive } from "vue";

const state = reactive({ pokemon: usePokemonStore() });
</script>

<template>
  <div v-if="!!state.pokemon.pokeInfo?.length" class="cardsSection">
    <div
      v-for="(pokemon, indexPoke) in state.pokemon.pokeInfo"
      :key="indexPoke"
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
            :href="'#stats' + indexPoke"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ver características
          </a>
        </p>
        <div class="collapse" :id="'stats' + indexPoke">
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

.cardsSection {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .card-body {
    font-size: 12px;
  }
}
</style>
