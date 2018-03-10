export default function favoritesReducer(state = {}, action){
  switch(action.type){
    case 'ADD_FAVORITE':
      // se copia el estado, porque no se debe de mutar
      let stateCopy = Object.assign(state);
      stateCopy[action.place] = true;
      return stateCopy;
    default:
      return state;
  }
}
