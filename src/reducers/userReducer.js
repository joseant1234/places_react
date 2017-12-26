export default function userReducer(state = {name: 'Hola'}, action){
  switch(action.type){
    case 'LOG_IN':
      // se espera como parte del objeto action se envia el jwt
      // {jwt: action.jwt};
      // realiza el clone del objeto state sobre un nuevo objeto ({}), y asigna o modifca el valor de la clave jwt con action.jwt
      return Object.assign({},state,{jwt: action.jwt});
    case 'LOG_OUT':
        return {};
    case 'LOAD_USER':
      return Object.assign({},state,{name: action.user.name, _id: action.user._id, email: action.user.email});
    default:
      // se debe de hacer retun en el default del state, pues si no se pone por la inmutabilidad con el destructuring assigment se colocará nada o si se envia null se pondrá en null
      return state;
  }
}
