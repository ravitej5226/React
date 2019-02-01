import React, { Component } from 'react';
import './bootstrap.min.css';

function KeyContainer(props){
    let keys=['%','sqrt','^2','1/x']
    return keys.map((x)=><div className="col-md-3"><button className="btn btn-info">{x}</button></div>);
}

export default KeyContainer;

