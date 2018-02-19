import * as requests from '../requests/visits';

export function addVisitSuccess(visit){
  return { type: 'ADD_VISIT', visit};
}

export function addVisit(place,observation,reaction){
  // el thunk return una funcion q recibe dos argumentos dispatch y getState
  return (dispatch,getState) =>{
    let user = getState().user;
    if(!user) return null;

    requests.add(user.jwt,place,observation,reaction).then(result => {
      dispatch(addVisitSuccess(result))
    })
  }
}

export function loadVisits(visits){
  return {type: 'LOAD_VISITS', visits}
}

export function loadAll(slug){
  return (dispatch,getState) => {
    requests.getVisits(slug).then(result=>{
      dispatch(loadVisits(result))
    })
  }
}
