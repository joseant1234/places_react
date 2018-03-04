import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export default class FadeAndScale extends React.Component{
  render(){
    // Si no se usaria unmountOnExit, TransitionGroup intentaría animar la salida, pero no esta configura para q despues de una animación de salida se elimine del DOM
    // unmountOnExit es para q cuando desmonte el componente tambien lo elimine del DOM
    return(
      <div className={this.props.className}>
        <CSSTransition
          classNames='fade-scale'
          in={this.props.in}
          timeout={300}
          unmountOnExit={true}
        >
          {this.props.children}
        </CSSTransition>
      </div>
    );
  }
}
