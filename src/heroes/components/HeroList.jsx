// Importación del hook useMemo desde la biblioteca React.
import { useMemo } from 'react';
// Importación de la función getHeroesByPublisher desde el archivo de helpers.
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
// Importación del componente HeroCard.
import { HeroCard } from './HeroCard';

// Componente que muestra una lista de héroes filtrados por editorial.
export const HeroList = ({ publisher }) => {
    // Uso del hook useMemo para memorizar la lista de héroes filtrados por editorial.
    // Esto evita que la función getHeroesByPublisher se ejecute en cada renderización.
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                // Mapeo de la lista de héroes para crear una tarjeta para cada uno.
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id} // Clave única para cada tarjeta.
                        {...hero} // Propagación de las propiedades del héroe.
                    />
                ))
            }
        </div>
    );
}
