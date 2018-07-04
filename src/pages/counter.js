import React from "react";

// class component
class Counter extends React.Component {
  // Set up component state
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        {/* Render current count from component state */}
        <p>current count: {this.state.count}</p>
        {/* Change the state when we click on buttons */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
      </div>
    );
  }
}

export default Counter;
