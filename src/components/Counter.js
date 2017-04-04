import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.incCounter = this.incCounter.bind(this);
  }

  incCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <button onClick={this.incCounter}>{this.state.counter}</button>
    );
  }
}

export default Counter;
