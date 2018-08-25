import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rollbar } from './rollbar';

class App extends Component {
  render() {
    console.log(1)
    Rollbar.configure({ payload: { user_id: 1 } });
    console.log(2);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
