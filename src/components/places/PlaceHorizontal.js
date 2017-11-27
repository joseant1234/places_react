import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card,CardHeader,CardText,CardActions}from 'material-ui/Card';

export default class PlaceHorizontal extends React.Component{


  render(){
    return(
      <Card style={{'marginTop': '1em','overflow': 'hidden'}}>
        <div className="row">
          <div className="PlaceH-avatar">
            <img src={this.props.place.imageUrl}/>
          </div>
          <div className="col-xs" style={{'textAlign': 'left'}}>
            <CardHeader title={this.props.place.title} subtitle={this.props.place.address} />
            <div className="row middle-xs">
              <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9" >
                <CardText>{this.props.place.description}</CardText>
              </div>
              <div className="col-xs">
                <CardActions>
                  <FlatButton label="Ver mas" />
                </CardActions>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
