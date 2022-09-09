window.app = (function () {
    'use strict';

    let totalCounters = 0;

    function createCounter () {
        let counter = 0; 
        return {
            counter: counter,
            totalCounters: totalCounters++,
            increment: function (amt) {
                counter += amt;
            },
            currentCount: function () {
                console.log(`Current count: ${counter}`);
            }
        };
    }

    const counter1 = createCounter();
    counter1.increment(7);
    counter1.currentCount();

})(window.app || {});


//I worked on this part of the quiz for around 2 hours and couldn't figure out the last step, I'm not sure why... the code above works but I couldn't get past that part. Below is the code that didn't work...

/* window.app = (function (myModule) {
    'use strict';

    myModule.createCounter = function () {
        let counter = 0;
        return {
            counter: counter,
            increment: function (amt) {
                counter += amt;
            },
            currentCount: function () {
                console.log(`Current count: ${counter}`);
            }
        };
    };

    return myModule;

})(window.app || {});

window.app.createCounter();
window.app.increment(7);
window.app.currentCount(); */