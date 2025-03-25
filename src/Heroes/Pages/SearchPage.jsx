import React from 'react';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import {getHeroesbyName} from '../helpers/getHeroesbyName'

export const Search = () => {


let {searchText,onInputChange}=useForm({
  searchText:''
})

     let navigate = useNavigate()
     let location = useLocation();
    //  console.log({location})
     let {q=''} = queryString.parse(location.search)
     //console.log({query})
     let heroes= getHeroesbyName(q);



  let onSearchSubmit =(event)=>{
event.preventDefault();
if(searchText.trim().length<=1) return
console.log({searchText})

navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar Heroes"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
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

            no se encontro <b> {q}</b>
          </div>

          {

            heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  );
};