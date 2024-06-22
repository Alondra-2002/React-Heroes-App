// Importación del array de héroes desde el archivo de datos.
import { heroes } from '../data/heroes';

// Función que obtiene héroes por su nombre.
export const getHeroesByName = (name = '') => {
    // Convierte el nombre a minúsculas y elimina espacios en blanco al principio y al final.
    name = name.toLowerCase().trim();

    // Si el nombre está vacío después de la limpieza, retorna un array vacío.
    if (name.length === 0) return [];

    // Filtra los héroes cuyo nombre de superhéroe incluye el nombre proporcionado (ignorando mayúsculas/minúsculas).
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );
}