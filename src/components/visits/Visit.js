import React from 'react';

import { Card, CardText, CardHeader, CardTitle, CardActions } from 'material-ui/Card';

import FadeAndScale from '../animations/FadeAndScale';
import Emoji from './emoji_picker/Emoji';

import { relationInverse } from './emoji_picker/emojis'

export default class Visit extends React.Component{

  getShortCode(){
    if(!this.props.visit.reactions) return relationInverse["love"];

    return relationInverse[this.props.visit.reactions];
  }
  render(){
    //  TransitionGroup envia una prop llamada in q indica si animaciòn es de entrada o salida
    // luego definir la animaciòn q està en FadeAndScale y en el css
    return(
      <FadeAndScale in={this.props.in}>
        <div>
          <Card style={{'textAlign': 'left', 'marginTop': '1em'}}>
            <div className="row middle-xs">
              <div className="col-xs">
                <CardHeader
                  avatar={'https://cdn.dribbble.com/users/373338/screenshots/2558656/batman_avatar_dribbb_1x.png'}
                  title="Hola"
                  subtitle={this.props.visit.observation}></CardHeader>
              </div>
              <div className="col-xs-2 col-sm-1">
                <Emoji code={this.getShortCode()} />
              </div>
            </div>
          </Card>
        </div>
      </FadeAndScale>
    )
  }
}
