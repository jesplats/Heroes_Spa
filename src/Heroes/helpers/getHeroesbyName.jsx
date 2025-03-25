import {Heroes} from '../data/heroes'
export const getHeroesbyName = (name='') => {
    
    name=name.toLowerCase().trim();
    
    if(name===''){
        return []
    }

    return Heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
 
}
