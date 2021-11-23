import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Congratulations extends Component {

    render() {
        if(!this.props.congratulations){
            return (<div />);
        }
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h3 className="congratulations">Congratulations</h3>
                </div>
            </div>
        );
    }

}