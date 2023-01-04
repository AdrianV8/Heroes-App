import { getHeroesByName } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroSearchResults = ({ queryParameter }) => {
  // Obtener el listado de héroes por parámetro del query enviado (q)
  const heroes = getHeroesByName(queryParameter);

  const showSearch = (queryParameter.length === 0);
  const showError = (queryParameter.length > 0) && heroes.length === 0;

  return (
    <>
      <div
        aria-label="search_hero"
        className="alert alert-primary text-center animate__animated animate__fadeIn"
        style={{ display: showSearch ? '' : 'none'}}
      >
        Busca un héroe
      </div>

      <div
        aria-label="search_error"
        className="alert alert-danger animate__animated animate__fadeIn"
        style={{ display: showError ? '' : 'none'}}
      >
        No se ha encontrado resultados de <b>{queryParameter}</b>
      </div>
  
      {
        heroes.map( hero => <HeroCard key={hero.id} {...hero} />)
      }
      
    </>
  );
};
