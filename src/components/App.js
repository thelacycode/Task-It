import React, { Component } from 'react';
import logo from '../style/images/logo.svg';
import '../style/css/App.css';
import { TaskViewer } from './TaskViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TaskViewer />
      </div>
    );
  }
}

export default App;
