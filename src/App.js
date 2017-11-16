import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Title from './components/Title';

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

  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width": "80%", "margin": "0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary={true} />
              <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} />
            </div>
            <div>
              <ul>
                <li>
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con números</p>
                </li>
                <li>
                  <h3>¿Sin Internet? Sin problemas</h3>
                  <p>Places funcionan sin internet o en conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>Define una lista de sitios favoritos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
