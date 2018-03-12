import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './containers/Board';
import CreateGameButton from './components/CreateGameButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">0hh1</h1>
          <CreateGameButton/>
          <Board/>
        </header>

      </div>
    );
  }
}

export default App;
