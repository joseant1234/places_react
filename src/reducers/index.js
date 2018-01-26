import places from './placesReducer';
import user from './userReducer';
import visits from './visitsReducer';

// shorthand properties
// exportando un objeto que contiene el reducer, en donde se va realizar las modificaciones del estado
// si hay otros reducer se tiene que pasar al objeto {} que se está exportando
// aqui se decide como se accede a la informacion que se està alterando en placesReducer
export default {places, user, visits};
// se encarga la propiedad store.lugares del reducer places
// export default{lugares: places};
