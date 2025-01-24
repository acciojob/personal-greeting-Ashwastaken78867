import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = () => {
    const { name } = this.state;
    if (name.trim() === "") {
      this.setState({ greeting: "Please enter a valid name." });
    } else {
      this.setState({ greeting: `Hello, ${name}!` });
    }
  };

  render() {
    return (
      <div>
        <p>Enter your name:</p>
        <input
          type="text"
          placeholder="Enter the name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.greeting && <p>{this.state.greeting}</p>}
      </div>
    );
  }
}

export default App;


