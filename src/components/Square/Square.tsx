import React, { useState } from 'react';

import { cnSquare } from './Square.classname';

import './Square.css';

const Square = () => {
  const [state, setState] = useState('start');

  const handleClick = () => {
    state === 'start' ? setState('end') : setState('start');
  }

  return (
    <div className={cnSquare('container')}>
      <div 
        className={cnSquare(state === 'start' ? {position: 'start'} : {position: 'end'})} 
        onClick={handleClick}>
      </div>
    </div>
  )
}

export { Square };