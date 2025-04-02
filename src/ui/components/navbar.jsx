// Importamos los componentes necesarios de react-router-dom
import { Link, NavLink, useNavigate } from 'react-router-dom';
// Importamos el hook useContext de React
import { useContext } from 'react';
// Importamos el contexto de autenticación
import { AuthContext } from '../../auth/context/AuthContext';

// Definimos el componente Navbar
export let Navbar = () => {
    
    // Extraemos el usuario y la función logout del contexto de autenticación
    let { user, logout } = useContext(AuthContext);
    console.log(user); // Mostramos el usuario en la consola para depuración

    // Obtenemos la función navigate para redireccionar entre rutas
    let navigate = useNavigate();

    // Función que se ejecuta al hacer logout
    let onLogout = () => {
        logout(); // Llamamos a la función logout del contexto
        // Redirigimos al usuario a la página de login y reemplazamos la ruta actual
        navigate('/login', {
            replace: true
        });
    };

    // Retornamos el JSX del componente Navbar
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            {/* Enlace principal que redirige a la página de inicio */}
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            {/* Contenedor de los enlaces de navegación */}
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* Enlace a la sección de Marvel */}
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    {/* Enlace a la sección de DC */}
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    {/* Enlace a la sección de búsqueda */}
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Search"
                    >
                        Search
                    </NavLink>

                    {/* Enlace a la sección de héroes (pendiente de implementación) */}
                    <NavLink to="hero">
                    </NavLink>

                    {/* Enlace a la página de login (pendiente de implementación) */}
                    <NavLink to='/login'>
                    </NavLink>
                </div>
            </div>

            {/* Contenedor de la información del usuario y el botón de logout */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* Muestra el nombre del usuario autenticado */}
                    <span className="nav-item nav-link text-info">
                       {user?.name}
                    </span>
                    {/* Botón para cerrar sesión */}
                    <button className="nav-item nav-link btn btn-outline"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
