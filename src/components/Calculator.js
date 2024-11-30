import React, { Component } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (e) => {
    this.setState({ value: parseFloat(e.target.value) });
  };

  handleAdd = (add) => {
    add(this.state.value);
  };

  handleSubtract = (subtract) => {
    subtract(this.state.value);
  };

  handleMultiply = (multiply) => {
    multiply(this.state.value);
  };

  handleDivide = (divide) => {
    if (this.state.value !== 0) {
      divide(this.state.value);
    } else {
      alert('Cannot divide by zero');
    }
  };

  handleReset = (reset) => {
    reset();
    this.setState({ value: 0 });
  };

  render() {
    return (
      <CalculatorContext.Consumer>
        {({ result, add, subtract, multiply, divide, reset }) => (
          <div className="calculator">
            <h2>Calculator</h2>
            <div>
              <input
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter number"
              />
            </div>
            <div>
              <button onClick={() => this.handleAdd(add)}>Add</button>
              <button onClick={() => this.handleSubtract(subtract)}>Subtract</button>
              <button onClick={() => this.handleMultiply(multiply)}>Multiply</button>
              <button onClick={() => this.handleDivide(divide)}>Divide</button>
            </div>
            <div>
              <button onClick={() => this.handleReset(reset)}>Reset</button>
            </div>
            <div>
              <h3>Result: {result}</h3>
            </div>
          </div>
        )}
      </CalculatorContext.Consumer>
    );
  }
}

export default Calculator;
