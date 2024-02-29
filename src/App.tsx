import React from 'react';

import { cnApp } from './App.classname';
import { Counter } from './components/Counter/Counter';
import { Square } from './components/Square/Square';
import { StringLimit } from './components/StringLimit/StringLimit';
import { Emoji } from './components/Emoji/Emoji';

import './App.css';

function App() {
  return (
    <div className={cnApp()}>
      <h1 className={cnApp('title')}>8.2 Обработка событий в React</h1>

      <h2 className={cnApp('task-title')}>Плюсуем</h2>
      <Counter />

      <h2 className={cnApp('task-title')}>Прыг-скок</h2>
      <Square />

      <h2 className={cnApp('task-title')}>Не наглей</h2>
      <StringLimit />

      <h2 className={cnApp('task-title')}>Щекотно</h2>
      <Emoji />
    </div>
  );
}

export default App;
