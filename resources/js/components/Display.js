import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Display extends Component {

    render() {
        return (
            <h1 className="display">{this.props.display}</h1>
        );
    }

}