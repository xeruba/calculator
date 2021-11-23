import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './Keyboard';
import Display from './Display';
import Congratulations from './Congratulations';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            display: '',
            congratulations: false
        };
    }
    
    concatToDisplay(e){
        var value = e.target.dataset.value;
        if (e.target.dataset.type== 'operator') {
            value = ' ' + value + ' ';
        }
        this.setState(state => ({
            display: this.state.display + value
        }));
    }

    resetDisplay(e){
        this.setState(state => ({
            display: '',
            congratulations: false
        }));
    }

    executeOperation(e){
        e.preventDefault();
        axios
            .post('/math-operation-logs/calculate', {
                display: this.state.display
            })
            .then(response => {
                this.setState({
                    display: response.data.result,
                    congratulations: response.data.congratulations
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <Display display={this.state.display}/>
                            </div>
                            <div className="card-body">
                                <Congratulations congratulations={this.state.congratulations}/>
                                <Keyboard concatToDisplay={this.concatToDisplay.bind(this)} executeOperation={this.executeOperation.bind(this)}  resetDisplay={this.resetDisplay.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}