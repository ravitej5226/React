import React, { Component } from 'react';
import "./result.css"

class Result extends Component {
    render() {
        return (
            <div className="result-container">
                {this.props.sum}
            </div>
        );
    }
}

export default Result;