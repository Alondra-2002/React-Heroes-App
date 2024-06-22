import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'; // Importa las rutas relacionadas con los héroes desde el módulo correspondiente.
import { LoginPage } from "../auth/pages/LoginPage"; // Importa la página de inicio de sesión desde el módulo de autenticación.
import { PrivateRoute } from "./PrivateRoute"; // Importa el componente de ruta privada para proteger rutas privadas.
import { PublicRoute } from "./PublicRoute"; // Importa el componente de ruta pública para rutas accesibles públicamente.

// Componente funcional que define el enrutador principal de la aplicación.
export const AppRouter = () => {
  return (
    <>
      {/* Componente Routes para definir las rutas de la aplicación */}
      <Routes>
        
        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={
          <PublicRoute> {/* Utiliza PublicRoute para la ruta de inicio de sesión, que es accesible públicamente */}
            <LoginPage/> {/* Renderiza la página de inicio de sesión */}
          </PublicRoute>
        }/>

        {/* Ruta para todas las demás rutas (protegidas) */}
        <Route path="/*" element={
          <PrivateRoute> {/* Utiliza PrivateRoute para las rutas protegidas */}
            <HeroesRoutes/> {/* Renderiza las rutas relacionadas con los héroes */}
          </PrivateRoute>
        } />
        
      </Routes>
    </>
  )
}

export default AppRouter; // Exporta AppRouter como componente por defecto.
