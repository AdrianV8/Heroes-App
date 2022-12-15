import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {

  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  // Búsqueda en el objeto `héroes` por nombre, filtrar para obtener resultados
  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) )
};
