import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import VisitModal from './VisitModal';

import * as actions from '../../actions/visitsActions';

class VisitForm extends React.Component{
  constructor(props){
    super(props);
    this.openVisitsModal = this.openVisitsModal.bind(this);
    this.add = this.add.bind(this);
  }

  openVisitsModal(){
    // console.log(this.refs);
    // se con el ref se tiene acceso al modal, luego se pone le nombre del ref y luego se ejecuta un metodo del VisitModal
    this.refs.modalRef.openModal();
  }

  add(observation){
    this.props.dispatch(actions.addVisit(this.props.place,observation))
  }

  render(){
    return(
      <div>
        <VisitModal  place={this.props.place} onSubmit={this.add} ref="modalRef"/>
        <FlatButton
          onClick={this.openVisitsModal}
          label="Agregar un comentario"
          secondary={true}/>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return{

  };
}

export default connect(mapStateToProps)(VisitForm);
