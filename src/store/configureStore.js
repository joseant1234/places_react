import { createStore, combineReducers } from 'redux';
// si no se especificar el archivo va de directo a index
import reducers from '../reducers';
// reducer es una funcion pura que recibe el estado original, la accion a realizar y return un nuevo estado
// createStore tiene parametro el reducer o funcion, el otro argumento es el almacenamiento original o el estado cuando se carga la aplicacion asignada al contenedor
// export default const store = createStore(function(state,action){
//   return state;
// },{});

// rootReducer va ser la funcion pura que se pasa al createStore
// destructuring assigment (...). Se toma el objeto reducers, se destroy. Se agarra un objeto base con sus propiedas o claves y se la pasan como si fueran del objeto {} que está en la función combineReducers
// se combina los reducers en uno solo
const rootReducer = combineReducers({
  ...reducers
})
// al ejecutarse la funcion desde index.js de src se crea el almacenamiento o store
export default function configureStore(){
  return createStore(rootReducer);
}
