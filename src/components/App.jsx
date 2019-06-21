import React, { Component } from "react";
import Counters from "./Counters";
import NavBar from "./NavBar";

class App extends Component {
  state = {
    numberOfCounters: 0
  };

  setNumberOfCounters = number => {
    this.setState({ numberOfCounters: number });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar numberOfCounters={this.state.numberOfCounters} />
        <main className="container">
          <Counters setNumberOfCounters={this.setNumberOfCounters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
