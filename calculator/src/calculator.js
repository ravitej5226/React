import React, { Component } from 'react';
import logo from './logo.svg';
import './calculator.css';
import './bootstrap.min.css';
import Result from './Result';
import KeyContainter from './keyContainer';
import compute from './helper';
import { connect } from 'react-redux';

let state = {
  display: 0,
  result: null,
  currentOp: '',
  currentNum: 0
}


class Calculator extends Component {
  constructor(props) {
    super(props);


    this.onOperationClick = this.onOperationClick.bind(this);
    // this.onNumberClick = this.onNumberClick.bind(this);
  }
  onOperationClick(args) {
    // Load the current op
    let operation = args.target.textContent;

    if (this.state.result === null) {
      this.setState({
        result: this.state.currentNum,
        currentOp: operation,
        currentNum: 0
      })
    }
    else if (operation === "=") {
      let newResult = compute(this.state.result, this.state.currentNum, this.state.currentOp);

      this.setState({
        result: null,
        currentOp: '',
        currentNum: 0,
        display: newResult
      })
    }
    else if (operation === "DEL") {
      console.log("DEL not handled yet!")
    }
    else {
      let newResult = compute(this.state.result, this.state.currentNum, this.state.currentOp);

      this.setState({
        result: newResult,
        currentOp: operation,
        currentNum: 0,
        display: newResult
      })
    }
  }


  // onNumberClick(args) {
  //   // Load the current number
  //   let currentNumber=args.target.textContent;

  //   if(this.state.currentNum!==0){
  //     currentNumber=this.state.currentNum+currentNumber;
  //   }

  //   this.setState({
  //     currentNum:parseFloat(currentNumber),
  //     display:parseFloat(currentNumber)
  //   })
  // }

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="jumbotron">
            <h1 className="display-4">
              A simple calculator
          </h1>

          </div>
          <div className="calculator-body clearfix">
            <Result sum={this.props.display} />
            <KeyContainter onOperationClick={this.onOperationClick} onNumberClick={this.props.onNumberClick} />

          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    display: state,
    result: state,
    currentOp: state,
    currentNum: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNumberClick: (number) => {
      dispatch({ type: 'NUMBER_SELECTED', number });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  function ({display}) {
    return (<Calculator />)
  });
