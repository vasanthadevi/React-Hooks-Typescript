import React, { useState } from 'react';

function ManyState() {

    const [ age, setAge ] = useState(42);
    const [ fruit, setFruit ] = useState('Apple');
    const [ game, setGame ] = useState('Cricket');

  return (
    <div>
        <p>I'm {age} years old and my favorite fruit is {fruit}. I like to watch the game {game}. </p>
        
    </div>
  )
}

export default ManyState;