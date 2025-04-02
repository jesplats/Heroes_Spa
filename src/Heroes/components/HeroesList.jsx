// Importa React para usar JSX y componentes funcionales
import React from 'react'

// Importa la función que obtiene héroes según el publisher
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

// Importa el componente HeroCard para mostrar información de cada héroe
import { HeroCard } from './HeroCard'

// Importa useMemo para memorizar valores calculados
import { useMemo } from 'react'

// Componente funcional que recibe el publisher como prop
export const HeroesList = ({publisher}) => {

    // Memoriza la lista de héroes obtenida según el publisher para evitar cálculos innecesarios
    let heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    // Retorna el JSX que renderiza la lista de héroes
    return (
        // Contenedor con clases de Bootstrap para diseño responsivo
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
        
        {
            // Itera sobre la lista de héroes y renderiza un HeroCard para cada uno
            heroes.map(heroe => (
                <HeroCard 
                    key={heroe.id} // Clave única para cada elemento de la lista
                    {...heroe} // Pasa todas las propiedades del héroe como props al HeroCard
                />
            ))
        }
        </div>
    )
}
