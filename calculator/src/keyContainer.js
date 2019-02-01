import React, { Component } from 'react';
import './bootstrap.min.css';
import './keyContainer.css';

function KeyContainer(props) {
    let keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    return (
        <div className="container keypad-container">
            <div className="row number-container col-md-8">


                {keys.map((x) => <div className="col-lg-4 key-btn-container"><button className="btn btn-info key-number">{x}</button></div>)}
            </div>

            <div class="row operation-container col-md-4">

            </div>
        </div>
    );
}

export default KeyContainer;

