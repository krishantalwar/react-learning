import logo from "./logo.svg";
import "./App.css";
import Persons from "./Persons/Persons";
import React, { Component } from "react";

class App extends Component {
  state = {
    Personss: [
      {
        name: "kr",
        age: 45,
      },
      {
        name: "kr",
        age: 4,
      },
    ],
  };
  changenameHandler = () => {
    this.setState({
      Personss: [
        {
          name: "kr",
          age: 45,
        },
        {
          name: "kr",
          age: 44,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.changenameHandler}>change age</button>
        {this.state.Personss.map((person, index) => (
          <Persons age={person.age} />
        ))}
      </div>
    );
  }
}

export default App;
