import React from 'react';

import Emoji from './Emoji';
import { emojis } from './emojis';

export default class EmojiPicker extends React.Component{

  buildEmojis(){
    return emojis.map(short_code => <Emoji code={short_code}/>)
  }

  render(){
      return(
        <div>
          <ul>
            {this.buildEmojis()}
          </ul>
        </div>
      )
  }
}
