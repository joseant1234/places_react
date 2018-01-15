import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Place from './pages/Place';
import NewPlace from './pages/places/NewPlace';
import Dashboard from './pages/Dashboard';
import App from './App';

const userSignIn = false
class Router extends React.Component{

  signedInRoutes(){
    if(this.props.user.jwt){
      return(
        // <Route path="/new" render={()=><h1>Bievenido</h1>} />
        <Route path="/new" component={NewPlace} />
      );
    }
  }

  home(){
    if(this.props.user.jwt) return Dashboard;
    return Home
  }

  render(){
    // en component se puede enviar una funcion ejecutandose, operador ternario, .... de esta manera poder condicionar la vista q se va a mostrar
    // el transition se puede poner luego del app, pero para no contaminar este archivo q contine las rutas, se pone en app.js
    return(
      <ConnectedRouter history={this.props.history}>
        <App>
            <Switch>
              <Route exact path="/" component={this.home()}></Route>
              <Route path="/lugares/:slug" component={Place}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Login}></Route>
              {this.signedInRoutes()}
            </Switch>
        </App>
      </ConnectedRouter>
    )
  }
}


function mapStateToProps(state,ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Router);
