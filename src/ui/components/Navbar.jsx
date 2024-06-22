import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    // Obtiene los datos de usuario y la función de logout del contexto de autenticación
    const { user, logout } = useContext(AuthContext);

    // Hook para la navegación programática
    const navigate = useNavigate();

    // Función para manejar el logout
    const onLogout = () => {
        logout(); // Llama a la función de logout del contexto de autenticación
        navigate('/login', { replace: true }); // Navega a la página de login y reemplaza la ruta actual en el historial
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            {/* Enlace al inicio de la aplicación */}
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            {/* Contenido del menú de navegación */}
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* Enlaces a secciones específicas de la aplicación */}
                    <NavLink 
                        className="nav-item nav-link" 
                        activeClassName="active"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        activeClassName="active"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        activeClassName="active"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* Área derecha del menú de navegación */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* Nombre del usuario autenticado */}
                    <span className='nav-item nav-link text-info'>
                        { user?.name }
                    </span>
                    {/* Botón de logout */}
                    <button className='nav-item nav-link btn' onClick={ onLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
