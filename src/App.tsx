import React from 'react';
import './App.css';
import { Statement } from './components/Statement';
import { statements } from './data/statements';

function App() {
  
  return (
    <div className='super-container'>
      <div className='main-container'>
        { statements.map(statement => <Statement statement={statement} key={statement.id} />) }
      </div>
    </div>
  );
}

export default App;
