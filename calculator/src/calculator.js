import React, { Component } from 'react';
import logo from './logo.svg';
import './calculator.css';
import './bootstrap.min.css';

class Calculator extends Component {
  render() {
    return (
     <div class="container">
        <div class="main">
          <div class="jumbotron">
          <h1 class="display-4">
            A simple calculator
          </h1>
          
          </div>
          <div class="calculator-body">
          

          </div>
        </div>
     </div>
    );
  }
}

export default Calculator;
