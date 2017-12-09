function login(credentials){
  return fetch("http://localhost:8085/sessions",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'appplication/json'
    }
  }).then(response=>{
    return response.json();
  })
}

function signUp(credentials){
  return fetch("http://localhost:8085/users",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'appplication/json'
    }
  }).then(response=>{
    return response.json();
  })
}

export {login, signUp};
