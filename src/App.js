import React from 'react';
import './App.css';
import { Biography } from './components/components-2.jsx';
import { Lego } from './components/components-1.jsx';

function App() {
  return (
    <div className='App'>
      <Lego url='function_component' title='functional component' />

      {/* <Biography /> */}
    </div>
  );
}

export default App;
