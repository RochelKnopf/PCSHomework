window.app = (function (myModule) {

    'use strict';

    let counter = 0;

    myModule.increment = function (amt) {
        return counter += amt;
    };

    myModule.currentCount = function () {
        // SL - not really counters job to log it. It should return and caller can choose to log if they want too
        console.log(`Current count: ${counter}`);
    };

    //increment(5);
    //currentCount();

    return myModule;

})(window.app || {});

window.app.increment(5);
window.app.currentCount();

// SL - nice - but I did ask for the test code (the last 2 lines) to be in a separate file