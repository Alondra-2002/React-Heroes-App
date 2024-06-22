import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

// Componente PublicRoute para manejar rutas públicas
export const PublicRoute = ({ children }) => {
  
    // Obtiene el estado de autenticación del contexto de autenticación
    const { logged } = useContext(AuthContext);
  
    // Si el usuario no está autenticado, muestra los hijos (rutas públicas), de lo contrario, redirige a /marvel
    return !logged ? (
        children // Muestra los hijos (componentes o rutas públicas)
    ) : (
        <Navigate to="/marvel" /> // Redirige al usuario a la ruta /marvel si está autenticado
    );
}
