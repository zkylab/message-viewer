import React, { Component } from 'react';
import './Simulator.css';
import Message from './../Message/Message'

var a = 0;
class Simulator extends Component {

    constructor() {
        super();
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="wrapper">
                <div className="messageTitle">{this.props.sim_name}</div>
                <div className="messages">
                    <div>
                        <Message></Message>
                        <Message></Message>
                        <Message></Message>
                        <Message></Message>
                    </div>
                </div>
            </div>
        );
    }




}
export default Simulator;
