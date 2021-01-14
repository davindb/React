import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

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

//  ============================================================================

// 3. map method and key attribute

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'm1',
        },
        {
          name: 'Dracula',
          id: 'm2',
        },
        {
          name: 'Zombie',
          id: 'm1',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, i) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        <button
          onClick={() =>
            this.setState(() =>
              this.state.monsters.map(monster => (monster.name = 'Davin'))
            )
          }
        >
          Hit this
        </button>
      </div>
    );
  }
}

//  ============================================================================

// 4. Fetch API, using lifecycle method and
// JSX Component with Arrow Function and JSX extension file

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // This will run after the render() mounted to the browser
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  // Use comma after fetch url to write the header, content-type, data, etc.

  render() {
    return (
      <div className="App">
        <CardList name="Yihua">
          {this.state.monsters.map((monster, i) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

//============================================================================

// 5. Create a Card Component

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // This will run after the render() mounted to the browser
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  // Use comma after fetch url to write the header, content-type, data, etc.

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

//============================================================================

// 6. Create a Search Field
// 7. Create a filter() to filter monsters with the search box

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This will run after the render() mounted to the browser
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  // Use comma after fetch url to write the header, content-type, data, etc.

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(searchField.toLowerCase());
    console.log(filteredMonsters);
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state.searchField)
            )
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//============================================================================

// 8. Create a SearchBox Component

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This will run after the render() mounted to the browser
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  // Use comma after fetch url to write the header, content-type, data, etc.

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(searchField.toLowerCase());
    console.log(filteredMonsters);
    return (
      <div className="App">
        <SearchBox
          placeholder="Search monster"
          handleChange={e =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state.searchField)
            )
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
//============================================================================

// 9. Create a handleChange Method

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This will run after the render() mounted to the browser
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  // Use comma after fetch url to write the header, content-type, data, etc.

  // HERE IS NOT GONNA WORK. BECAUSE THE THIS KEYWORD IS ATTACHED TO WHERE THIS FUNCTION IS DEFINED
  // handleChanges(e) {
  //   console.log(this);
  //   return this.setState({ searchField: e.target.value });
  // }

  // IT'S DIFFERENT WITH ARROW FUNCTION. IT'S LEXICAL SCOPE. ARROW FUNCTION WILL FIND SETSTATE UNTIL IT'S PARENT CLASS WHICH IS "COMPONENT"
  handleChange = e => {
    console.log(this);
    return this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
