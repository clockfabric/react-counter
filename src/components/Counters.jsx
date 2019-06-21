import React, { Component } from "react";
import Counter from "./Counter";
import UUID from "node-uuid";

class Counters extends Component {
  state = {
    counters: []
  };

  updateValue = (id, value) => {
    const newCounters = this.state.counters.map(item => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    this.setState({
      counters: newCounters
    });
  };

  addCounter = counter => {
    this.setState({ counters: [...this.state.counters, counter] });
    this.props.setNumberOfCounters(this.state.counters.length + 1);
  };

  removeCounter = id => {
    this.setState({
      counters: this.state.counters.filter(item => {
        return item.id !== id;
      })
    });
    this.props.setNumberOfCounters(this.state.counters.length - 1);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counterObj={counter}
            removeCounterMethod={this.removeCounter}
            updateValueMethod={this.updateValue}
          />
        ))}
        <br />
        <button
          className="btn btn-primary btn-md"
          onClick={() =>
            this.addCounter({
              id: UUID.v4(),
              value: 0
            })
          }
        >
          Add Counter
        </button>
      </React.Fragment>
    );
  }
}

export default Counters;
