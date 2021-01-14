import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
// 1. Constructor Function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, my name is Davin. I want to learn React.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//  ============================================================================

// 2. Using Class (which got inherited methods)

class App extends Component {
  // These are private. Forbidden to edit directly. Use setState method to edit.
  constructor() {
    super();

    this.state = {
      string: "Hello, My Name is Davin Darmalaksana B.",
    };
  }

  // render method that renders JSX, return must be specified
  render() {
    // setState ables us to edit this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button
            onClick={() => this.setState({ string: "I want to learn React." })}
          >
            Change Text
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
//  ============================================================================

// 3. map method and key attribute

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "m1",
        },
        {
          name: "Dracula",
          id: "m2",
        },
        {
          name: "Zombie",
          id: "m1",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
