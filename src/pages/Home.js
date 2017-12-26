import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// https://material.io/guidelines/style/color.html
import {indigo400 } from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
// para conectar el componente contenedor con el contenedor de la aplicacion o store
import { connect } from 'react-redux'


import Title from '../components/Title';
import Container from '../components/Container';
import Benefit from '../components/Benefit';
import PlaceCard from '../components/places/PlaceCard';
import {getPlaces} from '../requests/places';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      places: []
    };
    console.log(this.props.places);
    this.hidePlace = this.hidePlace.bind(this);
    // Al eliminar el elemento del array, de forma automatica se modifica la props.in a false, eso es porque el PlaceCard tiene CSSTransition
    // Al ingresar elementos al array ocurre el efecto animado por TransitionGroup y CSSTransition
    // setTimeout(()=>this.setState({places: data.places}),3000)
  }

  loadPlaces(){
    getPlaces().then(jsonR=>{
      const places = jsonR.docs;
      // dispatch de la accion LOAD_PLACES, para que se guarden en el contenedor o store

    })
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
          <Container>
            <div className="Header-main">
              <Title></Title>
              <Link to="/signup">
                <RaisedButton label="Crear cuenta gratuita" secondary={true} />
              </Link>
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} />
            </div>
            <div>
              <Benefit />
            </div>
          </Container>
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

// argumentos: estado del store, las propias props del componente
function mapStateToProps(state,ownProps){
  // el state es del store
  return {
    places: state.places
  }
}

// la clase pasa por la funcion connect
// connect no recibe la clase de manera directa, lo q recibe es una funcion q traduce como está estructurado el estado a props que luego le envia al componente
// el resultado la funcion connect es otra funcion connect(....)() al que al ejecutarla si se debe enviar el componente en el cual se va inyectar los props y metodos para hacer dispatch de acciones
// ya es un container component y tiene inyectado como parte del prop.places la informacion que viene del state.places
export default connect(mapStateToProps)(Home);
