window.app = (function (myModule) {

    'use strict';

    let counter = 0;

    myModule.increment = function (amt) {
        return counter += amt;
    };

    myModule.currentCount = function () {
        console.log(`Current count: ${counter}`);
    };

    //increment(5);
    //currentCount();

    return myModule;

})(window.app || {});

window.app.increment(5);
window.app.currentCount();