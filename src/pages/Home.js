import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// https://material.io/guidelines/style/color.html
import {indigo400 } from 'material-ui/styles/colors';

import Title from '../components/Title';
import Benefit from '../components/Benefit';
import PlaceCard from '../components/places/PlaceCard';
import data from '../requests/places';

import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      places: []
    };

    this.hidePlace = this.hidePlace.bind(this);

    // Al eliminar el elemento del array, de forma automatica se modifica la props.in a false, eso es porque el PlaceCard tiene CSSTransition
    // Al ingresar elementos al array ocurre el efecto animado por TransitionGroup y CSSTransition
    setTimeout(()=>this.setState({places: data.places}),3000)
  }

  places(){
    // transforma un arreglo en otro distinto, donde pasa por una funcion q construye el nuevo arreglo
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard place={place} index={index} onRemove={this.hidePlace}/>
      );
    })
  }

  hidePlace(place){
    // con filter: si es true pasa el fitlro, si es falso no pasa el filtro
    this.setState({
      places: this.state.places.filter(el => el!= place)
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <div style={{"width": "80%", "margin": "0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary={true} />
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} />
            </div>
            <div>
              <Benefit />
            </div>
          </div>

        </div>

        <div style={{'backgroundColor': indigo400, 'padding': '50px', 'color': 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Sitios populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>

      </section>
    )
  }
}
