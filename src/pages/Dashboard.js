import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';
import {getPlaces} from '../requests/places';


export default class Dashboard extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        places: []
    }
    this.loadPlaces();
  }

  loadPlaces(){
    getPlaces().then(jsonR=>{
      console.log(jsonR);
      this.setState({
        places: jsonR.docs
      })
    })
  }

  places(){
    return this.state.places.map((place,index)=>{
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
