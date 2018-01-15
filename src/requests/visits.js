import config from '../config/secrets';

export function add(jwt,place,observation){
  const data = {
    _place: place._id,
    observation
  }

  // el accept es para q se mas rápido la lectura, pues se le dice q es del tipo json a JS.
  return fetch(config.url + "/places/" + place.slug + "/visits",{
    method: 'POSTS',
    body: JSON.stringify(data),
    headers:{
      'Content-Tye': 'applicaiton/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + jwt
    }
  })
}
