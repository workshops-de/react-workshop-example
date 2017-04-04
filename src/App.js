import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameRaw from './components/NameRaw';
import Name from './components/Name';

class App extends Component {

  test = 'bla';

  render() {
    return (
      <div>
        <Name />
        <NameRaw />
      </div>
    );
  }
}

export default App;
