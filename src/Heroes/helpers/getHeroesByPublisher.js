import { Heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {

    let valuePublisher=['DC Comics','Marvel Comics']
    if(!valuePublisher.includes(publisher)){
        throw new Error(`${publisher} no existe`)
    }

    return Heroes.filter(heroe=>heroe.publisher===publisher);

    
}
