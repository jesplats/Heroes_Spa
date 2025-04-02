// Importa la biblioteca React para usar JSX y componentes.
import React from 'react';

// Importa el componente AppRouter que gestiona las rutas de la aplicación.
import { AppRouter } from './router/AppRouter';

// Importa el proveedor de contexto de autenticación.
import { AuthProvider } from './auth/context/AuthProvider';

// Define y exporta el componente principal de la aplicación HeroesApp.
export const HeroesApp = () => {
  

  return (
    // Envuelve la aplicación dentro del AuthProvider para proporcionar el contexto de autenticación.
  <AuthProvider>
      {/* Renderiza el componente AppRouter que contiene las rutas de la aplicación. */}
      <AppRouter />;
    </AuthProvider>
  );
};
