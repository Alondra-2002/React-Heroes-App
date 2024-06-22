// Importación del array de héroes desde el archivo de datos.
import { heroes } from '../data/heroes';

// Función que filtra héroes por su editorial.
export const getHeroesByPublisher = (publisher) => {
    // Editoriales válidas que se pueden filtrar.
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    
    // Si la editorial proporcionada no está en las editoriales válidas, lanza un error.
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es válido`);
    }
    
    // Filtra y retorna los héroes cuya editorial coincida con la proporcionada.
    return heroes.filter(hero => hero.publisher === publisher);
}
