import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    console.log("Timer constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(" componentDidMount");
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log(" componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h4>Timer: {this.state.count}</h4>
        <>  </>
      </>
    );
  }
}