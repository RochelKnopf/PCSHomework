const dw = (function () {

    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDayName(index) {
        return days[index - 1];
    }

    function getDayNumber(day) {
        const d = day.toLowerCase();
        for (let i = 0; i < days.length; i++) {
            if (days[i].toLowerCase() === d) {
                return i + 1;
            }
        }
    }

    return {
        getDayName: getDayName,
        getDayNumber: getDayNumber
    };
})();

console.log(dw.getDayName(3));
console.log(dw.getDayNumber('thursday'));

const interest = (function () {

    'use strict';

    let rate = 0;
    let years = 0;

    function setRate(r) {
        rate = r;
    }

    function setYears(y){
        years = y;
    }

    function calculateInterest(principle){
        return principle * rate * years;
    }

    return {
        setRate: setRate,
        setYears: setYears,
        calculateInterest: calculateInterest
    };

})();

interest.setRate(0.5);
interest.setYears(2);
console.log( interest.calculateInterest(25));
