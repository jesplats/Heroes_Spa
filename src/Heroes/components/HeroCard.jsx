import React from 'react'
import { Link } from 'react-router-dom'
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {

let CharaterByHero=({alter_ego,characters})=>{
if(alter_ego===characters) return(<></>);
return <p> {characters}</p>
}


let HeroeimageUrl=`/assets/heroes/heroes/${id}.jpg`

  return (
    <div className='col animate__animated animate__fadeIn '>
<div className='card'>

<div className='row no-gutters'>
    <div className="col-4 ">
<img src={HeroeimageUrl} alt={superhero}  className='card-img'/>

    </div>
    <div className="col-8">
      <div className="card-body">
        <h5 className='card-title'>{superhero}</h5>
        <p className='card-text'>{alter_ego}</p>
        
         <CharaterByHero characters={characters} alter_ego={alter_ego}/>
        
        <p className='card-text'>
          <small className='text-muted'>{first_appearance}</small>
        </p>
        
       <Link to={`/hero/${id}`}>
       Mas imformacion
       </Link>
      </div>
    </div>
</div>

</div>

    </div>
  )
}
