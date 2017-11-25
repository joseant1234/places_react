import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as ReactRouter, Link, Route} from 'react-router-dom';

import Title from '../components/Title';
import Container from '../components/Container';



export default class Login extends React.Component{

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
              <TextField floatingLabelText="Correo electrónico" type="email" className="textfield" />
              <TextField floatingLabelText="Contraseña" type="password" className="textfield"/>

                <div className="Login-actions">
                  <Route path="/login" exact render={()=>{
                      return(
                        <div>
                          <Link to="/signup"style={{marginRight: '1em'}}>Crear nueva cuenta</Link>
                          <RaisedButton label="Ingresar" secondary={true}/>
                        </div>
                      );
                  }}></Route>
                  <Route path="/signup" exact render={()=>{
                      return(
                        <div>
                          <Link to="/login"style={{marginRight: '1em'}}>Ya tengo una cuenta</Link>
                          <RaisedButton label="Crear cuenta" secondary={true}/>
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
