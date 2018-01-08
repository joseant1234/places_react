import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as ReactRouter, Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Title from '../components/Title';
import Container from '../components/Container';
import { login, signUp } from '../requests/auth';
// todo lo que se este exportando del archivo userActions lo vo a poner en el objeto actions
// el nombre del action estará como una propiedad del objeto action
import * as actions from '../actions/userActions';

// el arroy function no lleva llaves, porque lo que sigue es lo q va hacer return, con los () se indica que todo eso es lo q se va hacer return
// el componente q es una funciona recibe como argumento los props y hacer return de los elementos q se van a insertar
// es un staless function, no tiene un lifecycle, no tiene un state, x tanto no debe de tener refs
// solo los componentes que se crean en base a clases pueden refs. Los q se crean en base a funciones no tiene acceso a refs
// se pasa la funcion via props al ref y asignarlo al componente a obtener el elemento
const NameField = (props) => (
  <TextField floatingLabelText="Nombre" type="text" className="textfield" ref={props.nameRef}/>
);

const LoginActions = (props) => (
  <div>
    <Link to="/signup"style={{marginRight: '1em'}}>Crear nueva cuenta</Link>
    <RaisedButton label="Ingresar" secondary={true} onClick={props.requestAuth}/>
  </div>
)

const SignUpActions = (props) => (
  <div>
    <Link to="/login"style={{marginRight: '1em'}}>Ya tengo una cuenta</Link>
    <RaisedButton label="Crear cuenta" secondary={true} onClick={props.createAccount}/>
  </div>
)

class Login extends React.Component{

  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.auth = this.auth.bind(this);
    console.log(props.user);
  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }
    login(credentials).then(this.auth).catch(console.log)
  }

  auth(data){
    // la manera de modificar el contenedor centrar o store es haciendo dispatch de una acción
    // por ello al hacer connect con store parte de las props q se envia es la funcion dispatch
    this.props.dispatch(actions.login(data.jwt));
    this.props.dispatch(actions.loadUser(data.user));
    // push es un actionCreator de react-router-redux para que el router-reducer se encarge de la modificacion en la navegacion
    // el argumento de push el path a donde se redirecciona la pagina.
    this.props.dispatch(push('/'));
  }

  createAccount(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
      name: this.nameElement.getValue()
    }
    console.log(credentials)
    signUp(credentials).then(data=>{
      this.auth(data);
    }).catch(console.log)
  }

  // en render de route de imgs se puede poner directo porque es un solo componente
  // solo se puede usar un ReactRouter por componente. En este componente no està el ReactRouter porque en Router.js esta ReactRouter.
  // El componente Login es parte de Router.js
  render(){
    // en route de namefield, se se pone por component no tiene problemas en reconocer el ref
    return(
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{'textAlign': 'left'}}>
              <Title/>
              <TextField floatingLabelText="Correo electrónico" type="email" className="textfield" ref="emailField" />
              <TextField floatingLabelText="Contraseña" type="password" className="textfield" ref="passwordField"/>

              <Route path="/signup" exact render={()=> (<NameField nameRef={(el)=> this.nameElement = el }/>) }></Route>

              <div className="Login-actions">
                <Route path="/login" exact
                  render={()=>(<LoginActions requestAuth={this.requestAuth} />)}>
                </Route>
                <Route path="/signup" exact
                  render={()=>(<SignUpActions createAccount={this.createAccount} />) }>
                </Route>
              </div>

            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Route path="/login" exact render={()=>
              <div className="Login-background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login-background.jpeg'+")"}}></div>
          }></Route>
          <Route path="/signup" exact render={()=>
              <div className="Login-background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/friends.jpeg'+")"}}></div>
          }></Route>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
