import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let name = 'Smittywerbenjagermanjensen'
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello {name}</h1>
        </header>
      </div>
    );
  }
}

export default App;
