import React, { Component } from 'react';
import { CalculatorProvider } from './context/CalculatorContext';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <CalculatorProvider>
        <div className="app">
          <Calculator />
        </div>
      </CalculatorProvider>
    );
  }
}

export default App;
