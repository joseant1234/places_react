import React from 'react';
import emojione from 'emojione';

// const heart = {
//   __html: emojione.shortnameToImage(":heart:")
// }

function getEmojiHTML(code){
  return{
    __html: emojione.shortnameToImage(code)
  }
}

// componente funcional, porque no tiene state
const Emoji = (props) =>{
  // si se pone {emojione.shortnameToImage(":heart:")} en el div, no imprime la imagen del emoji, solo imprime como cadena la etiqueta <img ...>
  // es por cuestion de seguridad, React no deja imprimr html a traves de JS de esa manera
  // para imprimir HTML con JS se usa dangerouslySetInnerHTML
  // si fuese un dato q viene de un formulario, manipulación por el usuario, bd no se recomienda usar dangerouslySetInnerHTML, porque se estaría vulnerando la aplicación
  return(
    <div className="Emoji-emoji" onClick={()=> props.onClick(props.code)} dangerouslySetInnerHTML={getEmojiHTML(props.code)}></div>
  )
}

export default Emoji;
