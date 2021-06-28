import logo from "./logo.svg";
import "./App.css";
import Persons from "./Persons/Persons";
import Userinput from "./Userinput/Userinput";

import Useroutput from "./Useroutput/Useroutput";

import React, { Component } from "react";

class App extends Component {
  state = {
    user: [{ name: "kri" }],
  };

  setusername = (event) => {
    this.setState({
      user: [{ name: event.target.value }],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.changenameHandler("asd")}>
          change age
        </button>
        <Userinput
          setusername={this.setusername}
          currentvalue={this.state.user[0].name}
        />
        <Useroutput name={this.state.user[0].name} />
      </div>
    );
  }
}

export default App;
