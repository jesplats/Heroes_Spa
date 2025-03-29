import React, { useMemo } from 'react';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string';
import { useForm } from '../../Hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesbyName } from '../helpers/getHeroesbyName';

export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  // Extrae el parámetro 'q' de la URL o usa '' por defecto
  const { q = '' } = queryString.parse(location.search);

  // Estado del formulario inicializado con 'q'
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  // Optimiza la búsqueda para evitar cálculos innecesarios
  const heroes = useMemo(() => getHeroesbyName(q), [q]);

  // Lógica para mostrar alertas
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  // Manejo del envío del formulario
  const onSearchSubmit = (event) => {
    event.preventDefault();

    // Validar que la búsqueda no esté vacía o solo tenga espacios
    const trimmedSearch = searchText.trim();
    if (trimmedSearch.length <= 1) return;

    // Actualiza la URL con la búsqueda nueva
    navigate(`?q=${trimmedSearch}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        {/* Sección de búsqueda */}
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        {/* Sección de resultados */}
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

          {/* Mensaje de error si no se encuentra ningún héroe */}
          <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>

          {/* Renderizado de tarjetas de héroes */}
          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
