import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acorns: 0,
    };
  }

  handleDecrease() {
    const { acorns } = this.state;
    if (acorns > 0) {
      this.setState(
        { acorns: acorns - 1 },
      );
    }
  }

  handleIncrement() {
    const { acorns } = this.state;
    this.setState(
      { acorns: acorns + 1 },
    );
  }


  render() {
    const { acorns } = this.state;
    return (
      <div className="App">
        <button className="buy-button" type="button" onClick={this.handleIncrement.bind(this)}>Buy one</button>
        <p>{acorns}</p>
        <button className="eat-button" type="button" onClick={this.handleDecrease.bind(this)}>Eat one</button>
      </div>
    );
  }
}

export default App;
