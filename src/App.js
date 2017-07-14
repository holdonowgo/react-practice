import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';

class App extends Component {
  render() {
    console.log('App props:', this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Counter />
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

// export default App;
export default connect(mapStateToProps, null)(App);
