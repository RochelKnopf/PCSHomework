window.myApp = window.myApp || {};

window.myApp.utils = (function (myModule) {
    'use strict';

    myModule.caseInsensitiveCompare = function (a, b) {
        return a.toLowerCase() === b.toLowerCase();
    };

    return myModule;

}(window.myApp.utils || {}));

console.log(window.myApp.utils.caseInsensitiveCompare('Joe', 'JoE'));
console.log(window.myApp.utils.caseInsensitiveCompare('Joe', 'JoEy'));