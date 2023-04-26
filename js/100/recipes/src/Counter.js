import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    /*this.handleClick = this.handleClick.bind(this);*/
  }
  /*state = {
    count: 0
  }*/

  //handleClick() {
  handleClick = () => {
    //console.log('handleClick called');

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    // console.log(this);
    return (
      <div>
        I was clicked
        <button onClick={this.handleClick/*this.handleClick.bind(this)*/
      /*() => this.handleClick()*/}>{this.state.count}</button>
        times
      </div>
    )
  }
}
