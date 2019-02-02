import React, { Component } from 'react';
import './bootstrap.min.css';
import './keyContainer.css';


function KeyContainer(props) {
    let keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']
    let operations=['/','DEL','x','','-','','+','=']
    return (
        <div className="keypad-container clear">
            <div className="number-container col-md-8 col-sm-8 col-xs-8">
                {
                    keys.map(function (x, i) {
                        let paddingClass='';
                    if (i % 3 == 0) {
                        paddingClass='no-left-padding';
                    }                    
                   return  <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 key-btn-container "+paddingClass}><button onClick={props.onNumberClick}  className="btn btn-info key-number">{x}</button></div>
                })
            }
            </div>

            <div class="operation-container col-md-4 col-sm-4 col-xs-4">
                {operations.map(function(x,i){
                    if(x=='DEL')
                    {
                        return <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6 key-btn-container "}><button onClick={props.onOperationClick} disabled className="btn btn-info key-number">{x}</button></div>
                    }
                   else if(x!=''){
                   return <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6 key-btn-container "}><button onClick={props.onOperationClick} className="btn btn-info key-number">{x}</button></div>
                    }
                     
                    else{
                        return <div className={"col-lg-6 col-md-6 col-sm-6 key-btn-container "} style={{height:'66px'}}></div>
                    }
                })
            }
            </div>
        </div>
    );
}

export default KeyContainer;

