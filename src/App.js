import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import {withRouter} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

import './App.css';

class App extends Component {
  // el constructor de un componente tiene los props del componente
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     numero: 0
  //   };

  //   this.updateNumero = this.updateNumero.bind(this);
  // }
  // updateNumero(){
  //     this.setState({
  //       numero: this.state.numero + 1
  //     });
  //     // el estado no debe modificarse de forma directa, sino con el metodo setState
  //     // this.state.numero = 1
  // }

  // en el render
  // <button onClick={this.updateNumero}>Crear cuenta gratuita</button>

  constructor(props){
    super(props);
    // this.goHome = this.goHome.bind(this);
  }

  // goHome(){
  //   // history tiene los lugares o paths q se ha visitado en una pila
       // history se encarga del ir hacia atras o adelante, al hacer push se agrega un elemento a la pila, por tanto se hace redireccionamiento
  //   // con push se inserta un nuevo elemento a la pila
  //   this.props.history.push('/');
  // }

  render() {
    // this.props.children es un arreglo q contiene los compoenntes q al momento de usar el componente App se insertaron dentro de la declaracion del mismo
    // <MyAppBar goHome={this.goHome}/> se ponía para hacer el redireccionamiento solo con react-router. Navigation es el componente que se va a encargar de hacer el redireccionamiento a traves react-router-redux
    return (
      <MuiThemeProvider>
        <div>
          <Navigation />
          <TransitionGroup>
            <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[0]} >
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

// App = withRouter(App);
// export default App
// en MyAppBar no se tiene acceso a las props que inserta withRouter, pero en App si se tiene acceso, por el eso en la funcion goHome() se tiene acceso props.history.push('/')
// uno de los props que inserta es history
export default withRouter(App);
