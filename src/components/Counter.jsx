import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  formatCount() {
    const { value } = this.props.counterObj;
    return value === 0 ? "Zero" : value;
  }

  decrementCount = props => {
    if (this.props.counterObj.value !== 0) {
      this.props.updateValueMethod(
        this.props.counterObj.id,
        this.props.counterObj.value - 1
      );
    }
  };

  incrementCount = props => {
    this.props.updateValueMethod(
      this.props.counterObj.id,
      this.props.counterObj.value + 1
    );
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counterObj.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.decrementCount}
        >
          Decrement
        </button>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.incrementCount}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          style={{ marginLeft: "20px" }}
          onClick={() =>
            this.props.removeCounterMethod(this.props.counterObj.id)
          }
        >
          Remove Counter
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default Counter;
