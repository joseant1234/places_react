import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as ReactRouter, Link, Route} from 'react-router-dom';

import Title from '../components/Title';
import Container from '../components/Container';
import { login, signUp } from '../requests/auth';


export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }
    console.log(credentials)
    login(credentials).then(console.log).catch(console.log)
  }

  createAccount(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }
    console.log(credentials)
    signUp(credentials).then(console.log).catch(console.log)
  }

  // en render de route de imgs se puede poner directo porque es un solo componente
  // solo se puede usar un ReactRouter por componente. En este componente no està el ReactRouter porque en Router.js esta ReactRouter.
  // El componente Login es parte de Router.js
  render(){
    return(
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{'textAlign': 'left'}}>
              <Title/>
              <TextField floatingLabelText="Correo electrónico" type="email" className="textfield" ref="emailField" />
              <TextField floatingLabelText="Contraseña" type="password" className="textfield" ref="passwordField"/>

                <div className="Login-actions">
                  <Route path="/login" exact render={()=>{
                      return(
                        <div>
                          <Link to="/signup"style={{marginRight: '1em'}}>Crear nueva cuenta</Link>
                          <RaisedButton label="Ingresar" secondary={true} onClick={this.requestAuth}/>
                        </div>
                      );
                  }}></Route>
                  <Route path="/signup" exact render={()=>{
                      return(
                        <div>
                          <Link to="/login"style={{marginRight: '1em'}}>Ya tengo una cuenta</Link>
                          <RaisedButton label="Crear cuenta" secondary={true} onClick={this.createAccount}/>
                        </div>
                      );
                  }}></Route>
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
