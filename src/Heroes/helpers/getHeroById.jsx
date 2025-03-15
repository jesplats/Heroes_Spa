import { Heroes } from "../data/heroes"


export const getHeroById = (id) => {
 
return Heroes.find(hero=>hero.id===id);

}
