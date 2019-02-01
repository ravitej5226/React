import React, { Component } from 'react';
import logo from './logo.svg';
import './calculator.css';
import './bootstrap.min.css';
import Result from './Result';
import KeyContainter from './keyContainer';

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
          <Result sum="4"/>
          <KeyContainter />

          </div>
        </div>
     </div>
    );
  }
}

export default Calculator;
