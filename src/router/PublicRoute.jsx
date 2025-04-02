// Importa el hook useContext de React para acceder al contexto.
import { useContext } from 'react';

// Importa el componente Navigate de react-router-dom para redirigir a otras rutas.
import { Navigate } from 'react-router-dom';

// Importa el contexto de autenticación desde su ubicación definida.
import { AuthContext } from '../auth/context/AuthContext'; 

// Define un componente funcional llamado PublicRoute que recibe children como prop.
export const PublicRoute = ({ children }) => {

    // Obtiene el estado de autenticación (logged) desde el contexto AuthContext.
    const { logged } = useContext( AuthContext );

    // Si el usuario no está autenticado (logged es falso), renderiza los children.
    // Si el usuario está autenticado (logged es verdadero), redirige a la ruta "/marvel".
    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}