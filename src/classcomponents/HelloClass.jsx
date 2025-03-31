import React, { Component } from 'react'
import DemoCompo from './DemoCompo'

export default class HelloClass extends DemoCompo {

  display = () => {
    console.log("hello child component")
  }

  render() {
    return (
      <>
        <button onClick={this.display}>Hello (this)</button>
        <br />
        <button onClick={() => super.display()}>Hello (super)</button>
      </>
    )
  }
}
