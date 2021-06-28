import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    lenght: "",
    input: "",
  };

  inputlenght = (event) => {
    console.log(event.target.value.length);
    const lenght = event.target.value.length;
    const input = event.target.value;

    this.setState({
      lenght: lenght,
      input: input,
    });
  };

  deletechar = (index) => {
    console.log(index);
    console.log(this.state.input);

    const input = this.state.input.split("");

    console.log(input);
    input.splice(index, 1);
    console.log(input);

    const updated = input;
    const lenght = this.state.lenght - 1;
    const join = updated.join("");
    this.setState({
      lenght: lenght,
      input: join,
    });
  };

  render() {
    // const charlist = this.state.input.split("").map((ch) => {
    //   return <CharComponent input={ch} />;
    // });

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input type="text" onChange={this.inputlenght} />
        <ValidationComponent lenght={this.state.lenght} />
        {this.state.input.split("").map((ch, index) => (
          <CharComponent
            input={ch}
            key={index}
            delete={() => this.deletechar(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
