import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("Hello!")
    fetch("/stitchfix/men")
			.then(res => res.text())
      .then(html => console.log("[1] Got response:", html.slice(10000,12000)))
      .catch(err => console.error("[1] Got error:", err));
    fetch("https://www.stitchfix.com/men")
			.then(res => res.text())
      .then(html => console.log("[2] Got response:", html))
      .catch(err => console.error("[2] Got error:", err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Please open your console</h1>
        </header>
      </div>
    );
  }
}

export default App;
