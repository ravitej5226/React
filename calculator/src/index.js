import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';
import * as serviceWorker from './serviceWorker';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

const state1={
    display: 0,
    result: null,
    currentOp:'',
    currentNum:0
  };
let reducer = function (state=state1, action) {
    switch (action.type) {
        case 'NUMBER_SELECTED':
            let currentNumber = action.number;

            if (state.currentNum !== 0) {
                currentNumber = state.currentNum + currentNumber;
            }

            return Object.assign({}, state, {
                currentNum: parseFloat(currentNumber),
                display: parseFloat(currentNumber)
            })
        default:
        return state;
    }
}

let store = Redux.createStore(reducer,state1,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <Route path="/" exact component={Calculator} />
        </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
