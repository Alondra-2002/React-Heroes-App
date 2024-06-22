// Importación de useContext desde la biblioteca React.
import { useContext } from "react";
// Importación de useNavigate desde la biblioteca react-router-dom para la navegación programática.
import { useNavigate } from "react-router-dom";
// Importación del AuthContext desde el archivo de contexto de autenticación.
import { AuthContext } from "../context/AuthContext";

// Definición del componente LoginPage.
export const LoginPage = () => {
  // Uso del hook useContext para obtener la función login desde AuthContext.
  const { login } = useContext(AuthContext);
  // Uso del hook useNavigate para manejar la navegación.
  const navigate = useNavigate();

  // Función que se ejecuta al hacer clic en el botón de login.
  const onLogin = () => {
    // Recupera la última ruta visitada desde localStorage, o usa '/' si no existe.
    const lastPath = localStorage.getItem('lastPath') || '/';
    
    // Llama a la función login con un nombre de usuario.
    login('Alo');
    
    // Navega a la última ruta visitada y reemplaza la entrada actual en el historial de navegación.
    navigate(lastPath, { replace: true });
  }

  // Renderiza el contenido de la página de login.
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login 
      </button>
    </div>
  );
}