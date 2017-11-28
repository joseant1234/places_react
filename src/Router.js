import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import App from './App';

const userSignIn = false
export default class Router extends React.Component{

  signedInRoutes(){
    if(userSignIn){
      return(
        <Route path="/new" render={()=><h1>Bievenido</h1>} />
      );
    }
  }

  home(){
    if(userSignIn) return Dashboard;
    return Home
  }

  render(){
    // en component se puede enviar una funcion ejecutandose, operador ternario, .... de esta manera poder condicionar la vista q se va a mostrar
    return(
      <ReactRouter>
        <App>
            <Switch>
              <Route exact path="/" component={this.home()}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Login}></Route>
              {this.signedInRoutes()}
            </Switch>
        </App>
      </ReactRouter>
    )
  }
}
