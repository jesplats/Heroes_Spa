import { useContext } from 'react'; 
// Importa el hook useContext de React para acceder al contexto.

import { useNavigate } from 'react-router-dom'; 
// Importa el hook useNavigate de react-router-dom para realizar navegaciones programáticas.

import { AuthContext } from '../context/AuthContext'; 
// Importa el contexto de autenticación para acceder a las funciones y datos relacionados con la autenticación.

export const LoginPage = () => { 
// Define el componente funcional LoginPage.

  const { login } = useContext( AuthContext ); 
  // Extrae la función login del contexto de autenticación usando useContext.

  const navigate = useNavigate(); 
  // Obtiene la función navigate para redirigir al usuario a diferentes rutas.

  const onLogin = () => { 
  // Define la función que se ejecutará al hacer clic en el botón de login.

    const lastPath = localStorage.getItem('lastPath') || '/'; 
    // Obtiene la última ruta visitada del localStorage o usa '/' como valor predeterminado.

    login( 'Jesus plata' ); 
    // Llama a la función login del contexto, pasando un nombre de usuario como argumento.

    navigate( lastPath, { 
      replace: true 
    }); 
    // Navega a la última ruta visitada y reemplaza la entrada actual en el historial del navegador.
  }

  return ( 
    // Retorna el JSX que define la interfaz del componente.
    <div className="container mt-5"> 
      {/* Contenedor principal con clases de estilo */}
      <h1>Login</h1> 
      {/* Título de la página */}
      <hr /> 
      {/* Línea horizontal para separar secciones */}

      <button 
        className="btn btn-primary" 
        // Botón con clases de estilo.
        onClick={ onLogin } 
        // Asigna la función onLogin al evento onClick.
      >
        Login 
        {/* Texto del botón */}
      </button>

    </div>
  )
}