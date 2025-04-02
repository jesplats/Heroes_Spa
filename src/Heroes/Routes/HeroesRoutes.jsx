// Importa React para usar JSX y componentes funcionales
import React from 'react'

// Importa el componente Navbar desde la carpeta ui/components
import { Navbar } from '../../ui/components/navbar'

// Importa componentes de react-router-dom para manejar rutas
import { Route, Routes, Navigate } from 'react-router-dom'

// Importa las páginas específicas de Marvel, DC, búsqueda y héroe
import { MarvelPage } from '../Pages/MarvelPage'
import { DcPages } from '../Pages/DcPages'
import { SearchPage } from '../Pages/SearchPage'
import { HeroPage } from '../Pages/HeroPage'

// Define el componente HeroesRoutes que contiene las rutas de la aplicación
export const HeroesRoutes = () => {
  return (
    <>
      {/* Renderiza el componente Navbar */}
      <Navbar />
      
      {/* Contenedor principal para las páginas */}
      <div className='container'>
        {/* Define las rutas de la aplicación */}
        <Routes>
          {/* Ruta para la página de Marvel */}
          <Route path="/marvel" element={<MarvelPage />} />
          
          {/* Ruta para la página de DC */}
          <Route path="/dc" element={<DcPages />} />
          
          {/* Ruta para la página de búsqueda */}
          <Route path="/search" element={<SearchPage />} />
          
          {/* Ruta para la página de detalles de un héroe específico */}
          <Route path="hero/:id" element={<HeroPage />} />
          
          {/* Ruta vacía (posiblemente un error, debería eliminarse o definirse) */}
          <Route />
          
          {/* Redirección a la página de Marvel si la ruta no coincide */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}
