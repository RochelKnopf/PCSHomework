(async function () {
    'use strict';

    class Item {
        constructor(name, quantity, price){
            this.name = name;
            this.quantity  = quantity;
            this.price = price;
        }
    }

    class Order {
        items = [];
        constructor(customerName, customerAddress, total, items){
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.total = total;
            this.items = items;
        }

        // SL - hmm. Total should be calculated from items. What if an item is added/removed/changed?
        get Total(){
            return this.total;
        }
    }

    // SL - nice
    function createOrder(order){
        const theOrder = new Order(order.customer, order.address, order.total, order.items);
        theOrder.items.forEach(item => {
            new Item(item.item, item.quantity, item.price);
        });
        console.log(theOrder);
    }

    function printOrders(orders){
        orders.forEach(order => {
            let total = 0;

            $(`<h3>Customer: ${order.customer}</h3>
            <h3>Address: ${order.address}</h3>
            `).appendTo(document.body);

            order.items.forEach(item => {
                $(`<br/>
                <h4>Item: ${item.item}</h4>
                <h4>Quantity: ${item.quantity}</h4>
                <h4>Total: $${item.total}</h4>
                `).appendTo(document.body);

                // SL - doesnt order have total getter? Why are we calculating it ourselves here?
                total += (item.quantity * item.total);
            });

            // SL - rather then Math.round x * 100 / 100 you might look at .toFixed which javascript supports on numbers
            $(`<br/>
            <h3>Total: $${Math.round(total * 100) / 100}</h3>
            `).appendTo(document.body);

            $(`<hr/>`).appendTo(document.body);
        });
    }

    $('#load').click(async () => {
        try {
            const response = await fetch ('orders.json');
            const orders = await response.json();
            orders.forEach(order => {
                createOrder(order);
            });
            printOrders(orders);
        }
        catch (e) {
            console.error(e.message);
        }
    });

})();

// SL - grade 97