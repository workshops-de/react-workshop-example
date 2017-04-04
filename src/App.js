import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './components/BookList';

class App extends Component {

  test = 'bla';

  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default App;
