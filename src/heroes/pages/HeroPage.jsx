// Importación de componentes y hooks desde react-router-dom y react.
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

// Componente que muestra los detalles de un héroe específico.
export const HeroPage = () => {
  // Obtención del parámetro 'id' de la URL usando el hook useParams.
  const { id } = useParams();

  // Hook useNavigate para la navegación programática.
  const navigate = useNavigate();

  // Uso del hook useMemo para memorizar el resultado de getHeroById basado en 'id'.
  const hero = useMemo(() => getHeroById(id), [id]);

  // Función para manejar el evento de navegación hacia atrás.
  const onNavigateBack = () => {
    navigate(-1); // Navega hacia atrás en la pila de historial.
  }

  // Verificación si el héroe no existe (es undefined).
  if (!hero) {
    return <Navigate to="/marvel" />; // Redirige a la página de Marvel si no se encuentra el héroe.
  }

  // Renderización de la página con los detalles del héroe encontrado.
  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      {/* Columna para la imagen del héroe */}
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`} // URL de la imagen del héroe basada en 'id'
          alt={hero.superhero} // Altura de la imagen con el nombre del superhéroe
          className="img-thumbnail" // Clase para dar estilo a la imagen
        />
      </div>
      {/* Columna para los detalles del héroe */}
      <div className="col-8">
        <h3>{hero.superhero}</h3> {/* Título con el nombre del superhéroe */}
        <ul className="list-group list-group-flush">
          {/* Lista de detalles del héroe */}
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego} {/* Nombre real del superhéroe */}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher} {/* Editorial del superhéroe */}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance} {/* Primera aparición del superhéroe */}
          </li>
        </ul>
        <h5 className="mt-3">Characters:</h5> {/* Título para los personajes del superhéroe */}
        <p>{hero.characters}</p> {/* Lista de personajes del superhéroe */}
        
        {/* Botón para navegar hacia atrás en el historial del navegador */}
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};