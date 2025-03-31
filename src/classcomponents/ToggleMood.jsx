import React, { Component } from 'react'

export default class ToggleMood extends Component {

    constructor (props) {
        super(props);
        this.state = { mood: 'Happy' };
    }
    changeMood = () => {
        this.setState({ mood: this.state.mood === 'Happy' ? 'Sad' : 'Happy' });
    };

  render() {
    return (
        <>
            <div>ToggleMood</div>
            <p>this.state.mood: {this.state.mood}</p>
            <button onClick={this.changeMood}>Toggle Mood</button>
        </>
    )
  }
}
