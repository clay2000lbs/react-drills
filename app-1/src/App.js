import React, { Component } from 'react'

export default class App extends Component {

  state = {
    userInput: ""
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="userInput" type="text" value={this.state.userInput} onChange={this.handleChange}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    )
  }
}

