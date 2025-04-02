import React from 'react' // Importa React para usar componentes funcionales.
import { Link } from 'react-router-dom' // Importa Link para la navegación entre rutas.

export const HeroCard = ({ // Componente funcional que recibe props desestructuradas.
    id, // ID del héroe.
    superhero, // Nombre del superhéroe.
    publisher, // Editorial del superhéroe.
    alter_ego, // Alter ego del superhéroe.
    first_appearance, // Primera aparición del superhéroe.
    characters // Otros personajes relacionados con el superhéroe.
}) => {

    // Función para mostrar los personajes solo si son diferentes del alter ego.
    let CharaterByHero = ({ alter_ego, characters }) => {
        if (alter_ego === characters) return (<></>); // Si son iguales, no muestra nada.
        return <p> {characters}</p> // Si son diferentes, muestra los personajes.
    }

    // Ruta de la imagen del héroe.
    let HeroeimageUrl = `/assets/heroes/heroes/${id}.jpg`

    return (
        <div className='col animate__animated animate__fadeIn '> {/* Contenedor principal con animación. */}
            <div className='card'> {/* Tarjeta que contiene la información del héroe. */}

                <div className='row no-gutters'> {/* Fila sin espacios entre columnas. */}
                    <div className="col-4 "> {/* Columna para la imagen del héroe. */}
                        <img src={HeroeimageUrl} alt={superhero} className='card-img' /> {/* Imagen del héroe. */}
                    </div>
                    <div className="col-8"> {/* Columna para la información del héroe. */}
                        <div className="card-body"> {/* Cuerpo de la tarjeta. */}
                            <h5 className='card-title'>{superhero}</h5> {/* Título con el nombre del superhéroe. */}
                            <p className='card-text'>{alter_ego}</p> {/* Texto con el alter ego del héroe. */}
                            
                            {/* Componente para mostrar los personajes si son diferentes del alter ego. */}
                            <CharaterByHero characters={characters} alter_ego={alter_ego} />
                            
                            <p className='card-text'> {/* Texto con la primera aparición del héroe. */}
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            
                            <Link to={`/hero/${id}`}> {/* Enlace para más información del héroe. */}
                                Mas imformacion
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
