// Importación de la función useReducer desde la biblioteca React.
import { useReducer } from "react";
// Importación del AuthContext previamente creado.
import { AuthContext } from './AuthContext';
// Importación de la función authReducer que maneja el estado de autenticación.
import { authReducer } from "./authReducer";
// Importación de los tipos de acciones utilizados en authReducer.
import { types } from '../types/types';

// Estado inicial de la autenticación: el usuario no está conectado.
const initialState = {
    logged: false,
}

// Función de inicialización que recupera el estado del usuario desde el almacenamiento local (localStorage).
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user, // Si hay un usuario, logged es true; de lo contrario, es false.
    user: user,
  }
}

// Componente de proveedor de autenticación que envolverá a otros componentes.
export const AuthProvider = ({ children }) => {
    // Uso del hook useReducer para manejar el estado de autenticación y las acciones asociadas.
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    // Función de login que se llamará cuando un usuario inicie sesión.
    const login = (name = '') => {
      const user = { id: 'ABC', name }; // Crear un objeto usuario con un ID y un nombre.
      const action = { type: types.login, payload: user }; // Crear una acción de tipo login con el usuario como payload.
      localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en localStorage.
      dispatch(action); // Despachar la acción para actualizar el estado.
    }

    // Función de logout que se llamará cuando un usuario cierre sesión.
    const logout = () => {
      localStorage.removeItem('user'); // Eliminar el usuario de localStorage.
      const action = { type: types.logout }; // Crear una acción de tipo logout.
      dispatch(action); // Despachar la acción para actualizar el estado.
    }

    // Retorno del componente AuthProvider con el contexto de autenticación.
    return (
      <AuthContext.Provider value={{
        ...authState, // Propagar el estado de autenticación actual.
        login: login, // Propagar la función login.
        logout: logout // Propagar la función logout.
      }}>
        {children} {/* Renderizar los componentes hijos envueltos por el proveedor */}
      </AuthContext.Provider>
    );
}