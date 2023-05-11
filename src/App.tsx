import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
    const counter = 10;
  return (

    <div className="App">
      <Counter count={counter}/>
    </div>
  );
}

export default App;
