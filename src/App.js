import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             
             Hello React

          </p>
          <a
            className="App-link"
            href="http://186.64.118.50/~mpcgarcia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vive Quilicura

          </a>
        </header>
      </div>
    );
  }
}

export default App;
