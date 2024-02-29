import React, { ChangeEvent, useState } from 'react';

import { cnStringLimit } from './StringLimit.classname';

import './StringLimit.css';

const maxLength = 10;

const StringLimit = () => {
  const [value, setValue] = useState('');
  const [remainder, setRemainder] = useState(maxLength);
  
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const difference = value.length - inputValue.length;

    setValue(inputValue);
    setRemainder(remainder + difference);
  }

  return (
    <div className={cnStringLimit()}>
      <input className={cnStringLimit('input')} onChange={handleChangeInput} maxLength={maxLength} type="text" />
      <p className={cnStringLimit('remainder')}>Осталось букв: {remainder}</p>
    </div>
  )
}

export { StringLimit };