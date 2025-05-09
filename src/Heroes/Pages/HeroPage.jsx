import React, { useMemo } from 'react'
import { useParams,Navigate,useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
export const HeroPage = () => {
  
let navigate=useNavigate()

let OnNavigateBack =()=>{
  navigate(-1)
}

  let {id}=useParams();
  console.log(id)
  

  let img=`/assets/heroes/heroes/${id}.jpg`

let hero= useMemo(()=>getHeroById(id),[id]); 

if(!hero){
    return <Navigate to="/marvel" />
}
    return (
    <div className='row mt-5'>
  <div className="col-4">
    <img src={img} alt=""
    className='img-thumbnail animate__animated animate__fadeInLeft ' />
  </div>

  <div className="col-8">

    <h3>{hero.superhero}</h3>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>  <b>Alter ego</b> {hero.alter_ego}</li>
      <li className='list-group-item'>  <b>Publisher</b> {hero.publisher}</li>
      <li className='list-group-item'>  <b>Primera Aparicion</b> {hero.first_appearance}</li>
    </ul>

<h5 className='mt-3'> Character</h5>
<p>{hero.characters}</p>


<button className='btn btn-outline-primary'
onClick={OnNavigateBack}
>
Back
</button>
  </div>
    </div>
  )
}


