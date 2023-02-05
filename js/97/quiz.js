/* global DOMPurify*/
(async function () {
    'use strict';
  
    class Order {
      constructor(customer, address, items) {
        this.customer = customer;
        this.address = address;
        this.items = items;
      }
  
      static fromJSON(props) {
        const { customer, address, items } = props;
  
        const theItems = items.map(item => Item.fromJSON(item));
        return new Order(customer, address, theItems);
      }
  
      get total() {
        return this.items.reduce((a, c) => a + (c.price * c.quantity), 0);
      }
  
      toHtml() {
        let html = `
          <h2>order</h2>
          <p>${this.customer}</p>
          <p>${this.address}</p>
          <h3>items</h3>
          <ul>`;
  
        html += this.items.map(item => item.toHtml()).join('');
  
        html += `</ul>`;
  
        return html;
      }
    }
  
    class Item {
      constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
      }
  
      static fromJSON(props) {
        const { item, quantity, total } = props;
        return new Item(item, quantity, total / quantity);
      }
  
      toHtml() {
        return `<li>${this.name} ${this.quantity} @ ${this.price}</li>`;
      }
    }

    async function loadJson() {
      try {
        const response = await fetch('orders.json');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return await response.json();
      }
      catch (e) {
        console.error('oops', e);
      }
    }
  
    const orderElem = document.querySelector('#order');
    async function loadOrder() {
      const orders = await loadJson();
      if (orders) {
        const theOrders = orders.map(order => Order.fromJSON(order));
        orderElem.innerHTML = DOMPurify.sanitize(theOrders.map(order => order.toHtml()).join('<hr>'));
      }
    }
  
    document.querySelector('#load').addEventListener('click', loadOrder);
  }());