// Importación del componente Link desde la biblioteca react-router-dom para la navegación interna.
import { Link } from "react-router-dom";

// Componente para mostrar personajes si son diferentes del alter ego.
const CharactersByHero = ({ alter_ego, characters }) => {
    // Si el alter ego es igual a los personajes, no se muestra nada.
    if (alter_ego === characters) return (<></>);
    // Si el alter ego es diferente a los personajes, se muestra el nombre de los personajes.
    return <p>{characters}</p>
}

// Componente que representa la tarjeta de un héroe.
export const HeroCard = ({ 
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters,
}) => {

    // URL de la imagen del héroe basada en el id del héroe.
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        {/* Imagen del héroe */}
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            {/* Título de la tarjeta con el nombre del superhéroe */}
                            <h5 className="card-title">{superhero}</h5>
                            {/* Texto de la tarjeta con el alter ego del superhéroe */}
                            <p className="card-text">{alter_ego}</p>
                            {/* Componente que muestra los personajes si son diferentes del alter ego */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />
                            {/* Texto con la primera aparición del superhéroe */}
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            {/* Enlace para navegar a más detalles del héroe */}
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}