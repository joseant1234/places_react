import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import {withRouter} from 'react-router-dom';
import MyAppBar from './components/navigation/MyAppBar';

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
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    // history tiene los lugares o paths q se ha visitado en una pila
    // con push se inserta un nuevo elemento a la pila
    this.props.history.push('/');
  }

  render() {
    // this.props.children es un arreglo q contiene los compoenntes q al momento de usar el componente App se insertaron dentro de la declaracion del mismo
    return (
      <MuiThemeProvider>
        <MyAppBar goHome={this.goHome}/>
        <TransitionGroup>
          <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[0]} >
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    );
  }
}

// App = withRouter(App);
// export default App

export default withRouter(App);
