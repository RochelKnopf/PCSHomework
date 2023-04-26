import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    current: '0'
  }

  handleInputChange = e => {
    this.setState({
      current: e.target.value
    });
  }

  calculate() {
    const left = Number(this.state.last);
    const right = Number(this.state.current);
    let answer;

    switch(this.state.operator) {
      case '+':
        answer = left + right;
        break;
      case '-':
        answer = left - right;
        break;
      case '*':
        answer = left * right;
        break;
      case '/':
        answer = left / right;
        break;
      default:
        console.log('no operator found');
    }

    this.setState({
      current: answer,
      last: ''
    })
  }

  //handleClick = (btn) => {
  handleClick(btn) {
    //console.log(this, 'was clicked', btn);

    switch (btn) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          last: this.state.current,
          current: '',
          operator: btn
        });
        break;
      case '=':
        this.calculate()
        break;
      case 'C':
        this.setState({
          last: '',
          current: '0',
          operator: null
        });
        break;
      case '.':
        if (this.state.current.includes('.')){
          break;
        }
        // fall through
      default:
        this.setState({
          current: this.state.current !== '0' ? this.state.current + btn : btn.toString()
        });
        break;
    }
  }

  render() {
    return (
      <div className="calculator">
        <input value={this.state.current} onChange={this.handleInputChange}/>
        {/*<button onClick={() => this.handleClick(7)/*this.handleClick.bind(this, 7)* /}>7</button>*/}

        {
          [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '.', '/', '='].map(n => <button key={n} onClick={() => this.handleClick(n)}>{n}</button>)
        }
      </div>
    );
  }
}

export default App;
