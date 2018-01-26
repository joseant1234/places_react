import React from 'react';
import {Card} from 'material-ui/Card';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import Container from '../components/Container';
import VisitForm from '../components/visits/VisitForm';
import VisitsCollection from '../components/visits/VisitsCollection';
import * as actions from '../actions/visitsActions';

import { getPlace } from '../requests/places';

class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;
    this.loadPlace(slug);
    this.state={
      place: {}
    }
  }

  loadPlace(slug){
    getPlace(slug).then(json=>{
      this.setState({
        place: json
      })
    })
    this.props.dispatch(actions.loadAll(slug))
  }

  render(){
    // el destructuring assigment
    // busca una propiedad place dentro de this.state lo asigna a la constante o variable place
    // si el state tendria otra propidad como la de user. const {place, user} = this.state
    const {place} = this.state;
      return(

      <div className="Place-container">
        <header className="Place-cover" style={{'backgroundImage': 'url('+place.coverImage+')'}}></header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-card">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={place.avatarImage} style={{'maxWidth': '100%'}}/>
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                </div>
                <div style={{'marginTop': '1em'}}>
                  <VisitForm place={place}/>
                </div>
              </Card>
            </div>
            <div className="col-xs">
              <VisitsCollection visits={this.props.visits}/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return{
    visits: state.visits
  }
}

export default connect(mapStateToProps)(Place);
// export default withRouter(Place);
