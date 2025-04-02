// Importa la biblioteca React para usar JSX y componentes.
import React from 'react';


//import {HeroesRoutes} from '../Heroes/Routes/HeroesRoutes'; // Importa las rutas de los héroes desde el módulo correspondiente.
import { PrivateRoute } from './PrivateRoute';

import { PublicRoute } from './PublicRoute';
// Importa las rutas de los héroes desde el módulo correspondiente.
// import { MarvelPage } from '../Heroes/Pages/MarvelPage'; // Comentado porque no se utiliza actualmente.
import { HeroesRoutes } from '../Heroes/Routes/HeroesRoutes';
// import {HeroesRoutes} from '../Heroes/Routes/HeroesRoutes'; // Importa las rutas de los héroes desde el módulo correspondiente.
// Importa la página de inicio de sesión desde el módulo correspondiente.
// import { DcPages} from '../Heroes/Pages/DcPages'; // Comentado porque no se utiliza actualmente.
import { LoginPage } from '../auth/pages/LoginPage';

// Importa el componente de la barra de navegación desde el módulo correspondiente.
import { Navbar } from '../ui/components/navbar';

// Importa los componentes necesarios de react-router-dom para manejar las rutas.
import { Route, Routes } from 'react-router-dom';

// Define el componente principal de enrutamiento de la aplicación.
export const AppRouter = () => {
  return (
    <>
      {/* Renderiza las rutas de la aplicación */}
      <Routes>
        {/* Define la ruta para la página de inicio de sesión */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        
      <Route 
      path="/login"
      element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      }
      />


      <Route path='/*' element={
         <PrivateRoute>
          <HeroesRoutes />
         </PrivateRoute>
      }  />

        {/* Define una ruta comodín que renderiza las rutas de los héroes */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
