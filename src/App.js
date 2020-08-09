import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='App'>
      <h1>G</h1>
      <input vlaue={input} onChange={(e) => setInput(e.target.value)}></input>
      <button>Send Message</button>
    </div>
  );
}

export default App;
