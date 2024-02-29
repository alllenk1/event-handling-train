import React, { useState } from 'react';

import { cnEmoji } from './Emoji.classname';

import './Emoji.css';

const emojis = ['😴', '🥱', '😑', '😖', '😡', '🤯', '💥'];

const Emoji = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = emojis.length - 1;
  const emoji = emojis[index];

  const handleEmojiClick = () => {
    index !== maxIndex ?  setIndex(index + 1) : setIndex(index);
  }
  
  return (
    <p className={cnEmoji()} onClick={handleEmojiClick}>{emoji}</p>
  )
}

export { Emoji };