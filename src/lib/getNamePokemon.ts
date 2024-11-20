export function getIdFromUrl(url: any) {
  const segments = url.split("/");
  return parseInt(segments[segments.length - 2]);
}

export function getNamesById(pokemonArray: any, currentId: any) {
  const prevId = currentId > 1 ? currentId - 1 : 1;
  const nextId = currentId + 1;

  const prevPokemon = pokemonArray.find(
    (pokemon: any) => getIdFromUrl(pokemon.url) === prevId
  );
  const nextPokemon = pokemonArray.find(
    (pokemon: any) => getIdFromUrl(pokemon.url) === nextId
  );

  return {
    previous: prevPokemon ? prevPokemon.name : null,
    next: nextPokemon ? nextPokemon.name : null,
  };
}
