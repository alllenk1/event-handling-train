import React, { ChangeEvent, useState } from 'react';

import { cnCounter } from './Counter.classname';

import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const handleCounter = () => {
    if (Number(value)) {
      setCount((prev) => prev + Number(value));
    } 

    setValue('');
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <div className={cnCounter()}>
      <input className={cnCounter('input')} onChange={handleChangeInput} value={value} type="text"/>
      <div className={cnCounter('container')}>
        <button className={cnCounter('button')} onClick={handleCounter}>+</button>
        <span className={cnCounter('result')}>{count}</span>
      </div>
    </div>
  )
}

export { Counter };