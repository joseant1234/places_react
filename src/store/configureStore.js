// compose es una funcion diseñada para poder aplicar los potenciadores en fila
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// enhancer o potenciador de redux
import persistState from 'redux-localstorage';
// si no se especificar el archivo va de directo a index
import reducers from '../reducers';
// reducer es una funcion pura que recibe el estado original, la accion a realizar y return un nuevo estado
// createStore tiene parametro el reducer o funcion, el otro argumento es el almacenamiento original o el estado cuando se carga la aplicacion asignada al contenedor
// export default const store = createStore(function(state,action){
//   return state;
// },{});
import thunk from 'redux-thunk';

// es una una funcion pura que se encarga de procesar las acciones q tengan q ver con la navegacion o router
import { routerReducer } from 'react-router-redux';

const enhancer = compose(
  persistState('user')//,
  // el otroPotenciador recibe el resultado del primero y asi si hay otro potenciador. Relacionado con programación funcional, el resultado de una funcion es utilizada por la otra funcion
  // otroPotenciador(),
)


// rootReducer va ser la funcion pura que se pasa al createStore
// destructuring assigment (...). Se toma el objeto reducers, se destroy. Se agarra un objeto base con sus propiedas o claves y se la pasan como si fueran del objeto {} que está en la función combineReducers
// se combina los reducers en uno solo
const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
})

// con el combineReducers:
// {
//   places: function(){},
//   users: function(){}
// }
// para manipular la informacion que està en places o users se hace:
// con este diseño cada reducer se encarga de una parte del almacenamiento central
// la propiedad store.places se encarga del reducer places, la propiedad store.user ese encarga del reducer users
// store.places
// store.users

// al ejecutarse la funcion desde index.js de src se crea el almacenamiento o store
// recibe como argumento middleware, porque se le envio en el index.js
export default function configureStore(middleware){
  // se pone {} si el valor inicial es vacio del contenedor
  // createStore: reducer, middleware (acciones q se procesan antes de las acciones en el store), potenciadores
  return createStore(rootReducer,
    applyMiddleware(middleware,thunk),
    enhancer);
}
