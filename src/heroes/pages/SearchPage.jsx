import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks";
import { HeroSearchResults } from "../components/HeroSearchResults";

export const SearchPage = () => {
  
  // useNavigate: obtener la navegación
  const navigate = useNavigate();
  // useLocation: obtener la información de la localización actual
  const location = useLocation();
  /**
   * ----¡OPCIONAL!----
   *  query-string sirve para ver mejor los parámetros que se envian
   *  Las propiedades del objeto location: search -> Son los parámetros del query parameters(?q='Batman'&asc=true)
   *  Log para ver todas las propiedades del objeto 'location'
   *  El parámetro q, es el nombre que buscamos en el formulario
   */
  const { q='' } = queryString.parse(location.search);

  
  // Implementar useForm y rescatar el valor del form
  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    // Enviar query parameters
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Búsquedas</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar un Héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <HeroSearchResults queryParameter={q}/>

        </div>
      </div>
    </>
  );
};
