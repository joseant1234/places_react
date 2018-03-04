import config from '../config/secrets';

export function add(jwt,place,observation,reactions){
  const data = {
    _place: place._id,
    observation,
    reactions
  }

  // el accept es para q se mas rápido la lectura de datos cuando se recibe como respuesta, pues se le dice q es del tipo json a JS.
  return fetch(config.url + "/places/" + place.slug + "/visits",{
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + jwt
    }
  }).then(response => response.json()).catch(console.log);
}

export function getVisits(slug){
  return fetch(config.url+"/places/"+slug+"/visits").then(data =>{
    return data.json();
  }).catch(console.log)

}
