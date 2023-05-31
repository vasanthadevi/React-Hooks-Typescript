import React from 'react';
import './App.css';

import Counter from './components/useState/Counter';
import ManyState from './components/useState/ManyState';

function App() {
  return (
    <div className="App">
      <Counter />
      <ManyState />
    </div>
  );
}

export default App;
