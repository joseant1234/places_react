import React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
// https://material.io/guidelines/style/color.html
import {indigo400, redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

export default class Benefit extends React.Component{
  render(){
    return(
      <ul>

        <Card className="Header-Benefit">
          <CardText>
            <div className="row">
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

        <Card className="Header-Benefit">
          <CardText>
             <div className="row">
              <div className="Header-Benefit-image" style={{'backgroundColor': lightBlueA400}}>
                <img src={process.env.PUBLIC_URL + '/images/no-internet.png'} />
              </div>
            </div>
            <div className="Header-Benefit-content">
              <h3>¿Sin Internet? Sin problemas</h3>
              <p>Places funcionan sin internet o en conexiones lentas</p>
            </div>
          </CardText>
        </Card>

        <Card className="Header-Benefit">
          <CardText>
             <div className="row">
              <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
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
    )
  }

}
