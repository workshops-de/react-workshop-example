import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameRaw from './components/NameRaw';

class App extends Component {

  test = 'bla';

  render() {
    return React.createElement(NameRaw, null, null);
  }
}

export default App;
