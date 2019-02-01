import React, { Component } from 'react';
import logo from './logo.svg';
import './calculator.css';
import './bootstrap.min.css';
import Result from './Result';
import KeyContainter from './keyContainer';
import compute from './helper';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 0,
      result: null,
      currentOp:'',
      currentNum:0
    }

    this.onOperationClick = this.onOperationClick.bind(this);
    this.onNumberClick = this.onNumberClick.bind(this);
  }
  onOperationClick(args) {
   // Load the current op
   let operation=args.target.textContent;

   if(this.state.result===null){
    this.setState({
      result:this.state.currentNum,
      currentOp:operation,
      currentNum:0
    })
   }  
   else if(operation==="="){
    let newResult=compute(this.state.result,this.state.currentNum,this.state.currentOp);

    this.setState({
      result:null,
      currentOp:'',
      currentNum:0,
      display:newResult
    })
   }
   else if(operation==="DEL"){
     console.log("DEL not handled yet!")
   }
   else{
     let newResult=compute(this.state.result,this.state.currentNum,this.state.currentOp);
     
     this.setState({
       result:newResult,
       currentOp:operation,
       currentNum:0,
       display:newResult
     })
   }
  }


  onNumberClick(args) {
    // Load the current number
    let currentNumber=args.target.textContent;

    if(this.state.currentNum!==0){
      currentNumber=this.state.currentNum+currentNumber;
    }

    this.setState({
      currentNum:parseFloat(currentNumber),
      display:parseFloat(currentNumber)
    })
  }

  render() {
    return (
      <div class="container">
        <div class="main">
          <div class="jumbotron">
            <h1 class="display-4">
              A simple calculator
          </h1>

          </div>
          <div class="calculator-body clearfix">
            <Result sum={this.state.display} />
            <KeyContainter onOperationClick={this.onOperationClick} onNumberClick={this.onNumberClick} />

          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
