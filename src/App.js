import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormMovie from './components/FormMovie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormMovie />
    </div>
  );
}

export default App;
