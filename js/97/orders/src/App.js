import { Component } from 'react';
import './App.css';

class App extends Component() {
  state = {
    orders: [
      {
        "customer": "Bob",
        "address": "123 Any Street Lakewood NJ 08701",
        "items": [
          {
            "item": "cookies",
            "quantity": 5,
            "total": 4.95
          },
          {
            "item": "jelly beans",
            "quantity": 2,
            "total": 3
          }
        ]
      },
      {
        "customer": "Joe",
        "address": "456 Any Street Lakewood NJ 08701",
        "items": [
          {
            "item": "carrots",
            "quantity": 3,
            "total": 1.02
          }
        ]
      }
    ]
  }
  render(){
    const orders = this.state.orders.map(o => <li>o</li>)
    return (
      <div>
        <ul>{orders}</ul>
      </div>
    );
  }
  
}

export default App;
