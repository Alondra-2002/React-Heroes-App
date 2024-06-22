// Importación del array de héroes desde el archivo de datos.
import { heroes } from "../data/heroes";

// Función que obtiene un héroe por su id.
export const getHeroById = (id) => {
    // Utiliza el método find para buscar en el array de héroes.
    // Retorna el héroe cuyo id coincide con el id proporcionado.
    return heroes.find(hero => hero.id === id);
}