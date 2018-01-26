export default function visitsReducer(state = [], action){
  switch(action.type){
    case 'ADD_VISIT':
      // no se hace push porque eso mutaria el arreglo y en Redux no se puede mutar el state, entonce se crea un nuevo arreglo con la visita creada  y concantena con lo q habia en el state
      // el resultado de concat es un nuevo arreglo
      console.log(action.visit)
      return [action.visit].concat(state);
    case 'LOAD_VISITS':
      return action.visits;
    default:
      return state;
  }
}
