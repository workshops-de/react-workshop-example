import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';

class App extends Component {

  test = 'bla';

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
