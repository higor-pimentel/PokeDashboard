import { environment } from "../environment/enviroment";

export function getPokemon(pokeName: string) {
  return fetch(environment.base.concat(...["pokemon\\", pokeName])).then(
    (response) => response.json()
  );
}

export function getPokeEvolution(pokeId: string) {
  return fetch(environment.base.concat("evolution-chain\\", pokeId)).then(
    (response) => response.json()
  );
}
