import React from 'react';
import { HeroCard } from '../components/HeroCard';

export const Search = () => {

  let letra=()=>{
     return "contenido"
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Buscar Heroes"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4 className="mt-3">Resultados</h4>
          <hr />
          <div className="alert alert-primary">
            Buscar Heroe
          </div>

          <div className='alert alert-danger' >

            no se encontro <b> {letra()}</b>
          </div>

          <HeroCard />
        </div>
      </div>
    </>
  );
};