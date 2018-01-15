import * as requests from '../requests/places';

// REDUX tiene que hacer load_places y enviar la prop places
// luego va al REDUCER para ver que accion se le solicitó
export function loadPlaces(places){
  // envia places al contenedor
  // shorthand properties
  return { type: 'LOAD_PLACES', places };
}

// la funcion no la procesa REDUX, sino lo procesa middleware Redux Thunk
// procesa las peticiones asincronas (ejecutar la funcion), y espera hasta ver un nuevo dispatch
// el nuevo dispath tiene q pasar un JSON o encadenar otros dispatch de Thunks
// en este caso se esta pasando un objeto (JSON), que es q espera REDUX
export function loadAll(){
  // return 2 funciones: dispatch y getState
  // con thunk los action creator return funciones, no objetos.
  // dispatch es una funcion que hace dispatch de otras acciones
  // getState es una funcion q permite obtener el estado actual del storage, permitiendo obtener los datos que están almacenados en el contenedor de redux
  return (dispatch,getState) => {
    requests.getPlaces().then(result=>{
      // hasta q no se haga dispatch se puede seguir eseprarando a que otras peticiones u otras operaciones se realicen

      dispatch(loadPlaces(result.docs));
    })
  }
}
