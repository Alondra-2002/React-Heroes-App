// Importación de los tipos de acciones desde un archivo de configuración de tipos.
import { types } from '../types/types';

// Definición de la función reductora (reducer) para manejar el estado de autenticación.
export const authReducer = (state = {}, action) => {
    
    // Uso de una estructura de control switch para manejar diferentes tipos de acciones.
    switch (action.type) {
        case types.login: // Caso para el tipo de acción 'login'.
            return {
                ...state, // Mantener el estado anterior.
                logged: true, // Establecer 'logged' a true para indicar que el usuario ha iniciado sesión.
                user: action.payload // Actualizar el estado del usuario con los datos proporcionados en la acción.
            };

        case types.logout: // Caso para el tipo de acción 'logout'.
            return {
                logged: false, // Establecer 'logged' a false para indicar que el usuario ha cerrado sesión.
                user: null // Limpiar los datos del usuario.
            }
    
        default: // Caso por defecto si la acción no coincide con los casos anteriores.
            return state; // Retornar el estado sin cambios.
    }
}
