import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import {getPlaces} from '../requests/places';
import * as actions from '../actions/placesActions';

class Dashboard extends React.Component{

  constructor(props){
    super(props);

    // this.state = {
    //     places: []
    // }
    this.loadPlaces();
  }

  loadPlaces(){
    // getPlaces().then(jsonR=>{
    //   console.log(jsonR);
    //   this.setState({
    //     places: jsonR.docs
    //   })
    // })
    // se hace dispatch de una accion, que en este caso es una funcion
    this.props.dispatch(actions.loadAll())
  }

  places(){
    return this.props.places.map((place,index)=>{
      return <PlaceHorizontal place={place}/>
    })
  }

  render(){
    return(
      <div>
        <Link to='/new' >
          <FloatingActionButton secondary={true} className="FAB">
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{'textAlign': 'left'}}>
              <FlatButton label="Explorar" />
              <FlatButton label="Favoritos"/>
              <FlatButton label="Visitas Previas"/>
            </div>
            <div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  // se solicita q en la prop places se inserte el state q viene desde el reducer
  // cada vez q los props se modifican el componente se actualiza con los nuevos datos, por tanto el metodo this.places() dentro del metodo return, se ejecuta otra vez
  // el metodo this.places() lee los props q se están insertando y genera el componente <PlaceHorizontal> q muestra el negocio
  return{
    places: state.places
  }
}

export default connect(mapStateToProps)(Dashboard);
