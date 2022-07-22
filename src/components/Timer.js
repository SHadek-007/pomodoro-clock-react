import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.isSession === true ? "Break" : "Session"}</p>
        <span>{this.props.timerMinute}</span>
        <span>:</span>
        <span>
          {this.state.timerSecond === 0
            ? "00"
            : this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
        </span>
      </div>
    );
  }
}
export default Timer;
