import React, { Component } from 'react';

export default class DemoCompo extends Component {
  
  changeMood = () => {
    console.log("changeMood");
  };

  // display = (num) => {
  //   console.log(`Hello ${num}`);
  // };

  display = () => {
    console.log("Hello parent component");
  };

  render() {
    return (
      <>
        <div>DemoCompo</div>
        {/* Use 'this' to reference class methods */}
        {/* nearest function gets called, polymorphism isn't working here precisely */}
        
        {/* <button onClick={this.display}>Display Hello</button> */}
        {/* <button onClick={() => this.display(10)}>Display Hello with Number</button> */}

        {/* <h1>Hello {this.props.name}</h1> */}

      </>
    );
  }
}
