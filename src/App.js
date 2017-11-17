import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';

// https://material.io/guidelines/style/color.html
import {indigo400, redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

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
          </div>
        </div>

        <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>
          <ul>

            <Card class="Header-Benefit">
              <CardText>
                <div class="row">
                  <div className="Header-Benefit-image style={{'backgroundColor': redA400}}">
                    <img src={process.env.PUBLIC_URL + '/images/heart.png'} />
                  </div>
                </div>
                <div className="Header-Benefit-content">
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con números</p>
                </div>
              </CardText>
            </Card>

            <Card class="Header-Benefit">
              <CardText>
                 <div class="row">
                  <div className="Header-Benefit-image style={{'backgroundColor': lightBlueA400}">
                    <img src={process.env.PUBLIC_URL + '/images/no-internet.png'} />
                  </div>
                </div>
                <div className="Header-Benefit-content">
                  <h3>¿Sin Internet? Sin problemas</h3>
                  <p>Places funcionan sin internet o en conexiones lentas</p>
                </div>
              </CardText>
            </Card>


            <Card class="Header-Benefit">
              <CardText>
                 <div class="row">
                  <div className="Header-Benefit-image style={{'backgroundColor': amberA400}}">
                    <img src={process.env.PUBLIC_URL + '/images/star.png'} />
                  </div>
                </div>
                <div className="Header-Benefit-content">
                  <h3>Tus lugares favoritos</h3>
                  <p>Define una lista de sitios favoritos</p>
                </div>
              </CardText>
            </Card>
              
          </ul>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
