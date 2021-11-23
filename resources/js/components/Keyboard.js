import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Key from './Key';

export default class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'+'} type={'operator'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'-'} type={'operator'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'*'} type={'operator'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'/'} type={'operator'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'MOD'} type={'operator'} specificFunction={this.props.concatToDisplay} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'7'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'8'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'9'} type={'number'} specificFunction={this.props.concatToDisplay} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'4'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'5'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'6'} type={'number'} specificFunction={this.props.concatToDisplay} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'1'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'2'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'3'} type={'number'} specificFunction={this.props.concatToDisplay} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'0'} type={'number'} specificFunction={this.props.concatToDisplay} />
                        <Key value={'.'} type={'number'} specificFunction={this.props.concatToDisplay} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <Key value={'='} type={'equals'} specificFunction={this.props.executeOperation}/>
                        <Key value={'RESET'} type={'reset'} specificFunction={this.props.resetDisplay}/>
                    </div>
                </div>
            </div>
        );
    }
}