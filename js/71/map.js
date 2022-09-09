(function () {
    'use strict';

    function myMap(array, callback) {

        const newArray = [];

        for (let i = 0; i < array.length; i++) {

            newArray[i] = callback(array[i]);

        }

        return newArray;
    }

    function double(number) {
        return number * 2;
    }

    const array1 = [1, 2, 3];

    const array2 = myMap(array1, double);
    console.log(array1, array2);
    
})();

