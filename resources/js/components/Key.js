import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            type: props.type
        };
    }

    composeClassName(){
        var className = 'btn btn-secondary';
        if (this.state.type == 'number') {
            className += ' btn-number';
        } else if (this.state.type == 'operator') {
            className += ' btn-operator';
        } else if (this.state.type == 'equals'){
            className += ' btn-equals';
        } else if (this.state.type == 'reset'){
            className += ' btn-reset';
        }
        return className;
    }

    specificFuncion2 = (e) => {
        this.props.specificFunction(e);
    }

    render() {
        return (
            <button data-value={this.state.value} data-type={this.state.type} type="button" className={this.composeClassName()} onClick={this.specificFuncion2}>
                {this.state.value}
            </button>
        );
    }
}