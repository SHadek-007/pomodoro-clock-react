import React from 'react';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class PromoClock extends React.Component {
    constructor () {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-5xl font-bold'>Promodoro Clock</h1>
                <BreakInterval breakInterval = {this.state.breakLength}></BreakInterval>
                <SessionLength sessionLength = {this.state.sessionLength}></SessionLength>
                <Timer timerMinute = {this.state.timerMinute}></Timer>
            </div>
        );
    }
};

export default PromoClock;