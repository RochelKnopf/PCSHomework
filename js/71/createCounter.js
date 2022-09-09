/*window.app = (function () {
    'use strict';

    let totalCounters = 0;

    function createCounter () {
        let counter = 0;
        return {
            counter: counter, // SL - why are we making this available in addition to currentCount below? You didnt in counter.js
            totalCounters: totalCounters++, // SL - ok, but while the private totalCounters will be correct, the one your returning in this object will be one less since you did post increment
            increment: function (amt) {
                counter += amt;
            },
            currentCount: function () {
                // sl - should return not log out
                console.log(`Current count: ${counter}`);
            }
        };
    }

    const counter1 = createCounter();
    counter1.increment(7);
    counter1.currentCount();

})(window.app || {});*/


//I worked on this part of the quiz for around 2 hours and couldn't figure out the last step, I'm not sure why... the code above works but I couldn't get past that part. Below is the code that didn't work...

// SL - so close. Your code is correct. You just didnt use it correctly...
// you wrote a function that can create a counter and saved it as window.app.createCounter. You call that function and it returns a counter - but then you didnt use the counter you got back, instead, you used window.app.increment and window.app.currentCount which are from the other counter in counter.js

// SL - no count of number of counters created - you mostly have that in version above

window.app = (function (myModule) {
    'use strict';

    myModule.createCounter = function () {
        let counter = 0;
        return {
            counter: counter, // SL - why are we making this available in addition to currentCount below? You didnt in counter.js
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

/*window.app.createCounter();
window.app.increment(7);
window.app.currentCount();*/

const counter1 = window.app.createCounter();
const counter2 = window.app.createCounter();
counter1.increment(10);
counter2.increment(15);
counter1.currentCount();
counter2.currentCount();

// SL - grade - 94