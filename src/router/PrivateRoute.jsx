// Importa el hook useContext de React para acceder al contexto.
import { useContext } from "react"

// Importa el hook useLocation de react-router-dom para obtener información sobre la ubicación actual.
import { useLocation } from "react-router-dom";

// Importa el contexto de autenticación desde su ubicación para acceder al estado de autenticación.
import { AuthContext } from "../auth/context/AuthContext";

// Importa el componente Navigate de react-router-dom para redirigir a otras rutas.
import { Navigate } from "react-router-dom";

// Define el componente PrivateRoute que recibe children como propiedad.
export const PrivateRoute = ({children}) => {

  // Obtiene la propiedad logged del contexto de autenticación para verificar si el usuario está autenticado.
  let {logged} = useContext(AuthContext);

  // Obtiene el pathname y search de la ubicación actual para construir la ruta completa.
  let {pathname, search} = useLocation();

  // Construye la última ruta visitada combinando pathname y search.
  let lastPath = pathname + search;

  // Almacena la última ruta visitada en el localStorage para recordarla después de iniciar sesión.
  localStorage.setItem('lastPath', lastPath);

  // Si el usuario está autenticado (logged es true), renderiza los children.
  // De lo contrario, redirige al usuario a la ruta "/login".
  return (logged) ? children : <Navigate to="/login"/>
}
