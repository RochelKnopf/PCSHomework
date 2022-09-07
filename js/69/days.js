window.myApp = window.myApp || {};

window.myApp.utils = (function dayUtils(myModule) { //myModule = variable name, real object we're using = myApp
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //put function in object
    myModule.getDay = function (index) {
        return days[index - 1];
    };

    myModule.getDayIndex = function (day) {
        const d = day.toLowerCase();
        return days.findIndex(e => e.toLowerCase() === d) + 1;
    };

    return myModule;

})(window.myApp.utils || {}); //passing in object to invoke with

console.log(window.myApp.utils.getDay(2));
console.log(window.myApp.utils.getDayIndex('Monday'));