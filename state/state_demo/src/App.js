import React, { Component } from 'react';
// import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      {/* <Rando maxNum={7}/> */}
      <BrokenClick />
    </div>
  }
}

export default App;
