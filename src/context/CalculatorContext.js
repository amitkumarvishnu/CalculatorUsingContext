import React, { createContext, Component } from 'react';

// Create the context
const CalculatorContext = createContext();

// Create a provider component
class CalculatorProvider extends Component {
  state = {
    result: 0
  };

  // Addition
  add = (value) => {
    this.setState({ result: this.state.result + value });
  };

  // Subtraction
  subtract = (value) => {
    this.setState({ result: this.state.result - value });
  };

  // Multiplication
  multiply = (value) => {
    this.setState({ result: this.state.result * value });
  };

  // Division
  divide = (value) => {
    if (value !== 0) {
      this.setState({ result: this.state.result / value });
    } else {
      alert('Cannot divide by zero');
    }
  };

  // Reset the calculator
  reset = () => {
    this.setState({ result: 0 });
  };

  render() {
    return (
      <CalculatorContext.Provider
        value={{
          result: this.state.result,
          add: this.add,
          subtract: this.subtract,
          multiply: this.multiply,
          divide: this.divide,
          reset: this.reset
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    );
  }
}

export { CalculatorProvider, CalculatorContext };
