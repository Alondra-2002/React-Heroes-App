import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

// Componente PrivateRoute para proteger rutas que requieren autenticación
export const PrivateRoute = ({ children }) => {
  
    // Obtiene el estado de autenticación del contexto de autenticación
    const { logged } = useContext(AuthContext);

    // Obtiene la ubicación actual (pathname y search) usando useLocation
    const { pathname, search } = useLocation();

    // Combina pathname y search para formar la última ruta visitada
    const lastPath = pathname + search;

    // Guarda la última ruta visitada en localStorage
    localStorage.setItem('lastPath', lastPath);
    
    // Si el usuario está autenticado, muestra los hijos (rutas protegidas), de lo contrario, redirige a /login
    return logged ? (
        children // Muestra los hijos (componentes o rutas protegidas)
    ) : (
        <Navigate to="/login" /> // Redirige al usuario a la página de inicio de sesión si no está autenticado
    );
}

