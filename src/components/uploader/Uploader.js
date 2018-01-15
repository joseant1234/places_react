import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Uploader extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      file: {name: ''}
    }
    this.openInput = this.openInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  openInput(){
    this.refs.file.click();
  }

  handleFile(ev){
    // con ev.target dice quien disparo el evento, en este caso el input file
    // ese input tiene atribute files con todos los archivos q se seleccionaron
    let file = ev.target.files[0]
    if(!file) return;
    this.setState({
      file: file
    })

    this.props.getFile(this.props.type, file)
  }

  render(){
    return(
      <div>
        <input type='file' ref="file" style={{'display': 'none'}} onChange={this.handleFile}/>
        <span style={{'marginRight': '0.5em'}}>{this.state.file.name}</span>
        <RaisedButton label={this.props.label} primary={true} onClick={this.openInput}/>
      </div>
    );
  }

}
