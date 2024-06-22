// Importación de hooks y componentes necesarios desde react-router-dom, queryString y archivos locales.
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'; // Suponiendo que useForm es un custom hook para manejar formularios.
import { HeroCard } from '../components/HeroCard'; // Componente que representa la tarjeta de un héroe.
import { getHeroesByName } from '../helpers'; // Función que obtiene héroes por nombre desde un helper.

// Página de búsqueda que permite buscar héroes por nombre.
export const SearchPage = () => {
  // Hook useNavigate para la navegación programática.
  const navigate = useNavigate();
  
  // Hook useLocation para obtener la ubicación actual.
  const location = useLocation();

  // Obtención del parámetro 'q' de la URL usando queryString.
  const { q = '' } = queryString.parse(location.search);

  // Llama a la función getHeroesByName para obtener héroes cuyo nombre coincida con 'q'.
  const heroes = getHeroesByName(q);

  // Booleano que indica si se debe mostrar el mensaje de búsqueda.
  const showSearch = (q.length === 0);

  // Booleano que indica si se debe mostrar el mensaje de error (ningún héroe encontrado).
  const showError = (q.length > 0) && heroes.length === 0;

  // Custom hook useForm para manejar el estado del formulario de búsqueda.
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  // Función que maneja el envío del formulario de búsqueda.
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`); // Navega a la misma página con el parámetro 'q' actualizado.
  }

  // Renderización de la página de búsqueda.
  return (
    <>
      <h1> Search </h1> {/* Título principal de la página */}
      <hr /> {/* Línea horizontal para separar el título del contenido */}

      {/* Contenedor principal con clases de Bootstrap */}
      <div className="row">
        {/* Columna izquierda con el formulario de búsqueda */}
        <div className="col-5">
          <h4>Searching</h4> {/* Título de la sección de búsqueda */}
        </div>

        {/* Formulario de búsqueda */}
        <form onSubmit={onSearchSubmit}>
          {/* Campo de entrada para buscar un héroe */}
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />

          {/* Botón para enviar el formulario de búsqueda */}
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>

        {/* Columna derecha con los resultados de la búsqueda */}
        <div className="col-7">
          <h4>Results</h4> {/* Título de la sección de resultados */}
          <hr /> {/* Línea horizontal para separar el título de los resultados */}

          {/* Mensaje de advertencia si no se ha realizado ninguna búsqueda */}
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          {/* Mensaje de error si no se encontraron héroes con el nombre buscado */}
          <div className='alert alert-danger' style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {/* Renderización de las tarjetas de héroes encontrados */}
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  );
}


