import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {yellow700} from 'material-ui/styles/colors';

import Container from '../Container';
import Title from '../Title';



export default class VisitModal extends React.Component{
  constructor(props){
    super(props);
    this.state = { open: false }
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  openModal(){
    this.setState({
      open: true
    });
  }

  closeModal(){
    this.setState({
      open:false
    });
  }

  submit(){
    const observation = this.refs.observationField.getValue();

    this.props.onSubmit(observation);
    // this.refs.observationField.setValue("");
    this.closeModal();
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.open} ariaHideApp={false}>
          <Container>
            <div style={{'textAlign': 'left', 'marginTop': '2em'}}>
              <header>
                <Title />
                <h1>
                  Cuentanos de tu visita a
                  <span style={{'backgroundColor': yellow700, 'margin': '0 0.3em'}}>{this.props.place.title}</span>
                </h1>
              </header>
              <div className="row">
                <div className="col-xs-4 col-sm-2 col-lg-1">
                  <EmojiPicker />
                </div>
                <div className="col-xs">
                  <TextField
                    floatingLabelText="Cuentanos que te parecio este lugar"
                    ref="observationField"
                    multiLine={true}
                    style={{'width': '100%'}}/>
                  <div style={{'marginTop': '1em'}}>
                    <RaisedButton label="Guardar" onClick={this.submit} secondary={true}/>
                    <FlatButton
                      onClick={this.closeModal}
                      label="Cancelar"
                      style={{'marginLeft': '2em'}}/>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Modal>
      </div>
    )
  }
}
