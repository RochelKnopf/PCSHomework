'use strict';

function deposit (amt){
    this.balance += amt;
    console.log(this.balance);
}

const checking = {
    balance: 500,

    /* deposit: function (amt) {
        this.balance += amt;
        console.log(this.balance);
    } */
};

const savings = {
    balance: 500,

    /* deposit: function (amt) {
        this.balance += amt;
        console.log(this.balance);
    } */
};

/* checking.deposit(50);
savings.deposit(100); */

deposit.call(checking, 50);
deposit.call(savings, 100);

const deposit50InSavings = deposit.bind(savings, 50);
deposit50InSavings();