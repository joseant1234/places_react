import React from 'react';
import AppBar from 'material-ui/AppBar';
import {indigo600} from 'material-ui/styles/colors';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class MyAppBar extends React.Component{

  getName(){
    if(this.props.user.email)
      return this.props.user.email.split("@")[0];
    return ""
  }

  title(){
    return(
      <span style={{'cursor': 'pointer', 'textTransform': 'capitalize'}}>
        {this.props.user.jwt ? 'Bienvenido ' + this.getName() : 'Places'}
      </span>
    );
  }

  render(){
    return(
      <AppBar title={this.title()}
            style={{'backgroundColor': indigo600}}
            showMenuIconButton={false}
            onTitleTouchTap={this.props.goHome}
            iconElementRight={this.props.user.jwt ?  <LogoutButton logout={this.props.logout} /> : <LoginButton /> }
      />
    );
  }
}
