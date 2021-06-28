import logo from "./logo.svg";
import "./App.css";
import Persons from "./Persons/Persons";
import Userinput from "./Userinput/Userinput";

import Useroutput from "./Useroutput/Useroutput";

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

  changenameHandler = (newage) => {
    this.setState({
      Personss: [
        {
          name: "kr",
          age: 45,
        },
        {
          name: "kr",
          age: newage,
        },
      ],
    });
  };

  namechangehandler = (event) => {
    console.log(event);
    this.setState({
      Personss: [
        {
          name: "kr",
          age: 45,
        },
        {
          name: "kr",
          age: event.target.value,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.changenameHandler("asd")}>
          change age
        </button>
        {this.state.Personss.map((person, index) => (
          <Persons
            click={() => this.changenameHandler("dee")}
            namechangehandler={this.namechangehandler}
            age={person.age}
          />
        ))}
      </div>
    );
  }
}

export default App;
