'use strict';

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['a', 'B', 'c', 'D'];

//1
function ourEvery(theArray, test) {
    for(let i = 0; i < theArray.length; i++) {
        if(!test(theArray[i])) {
            return false;
        }
        return true;
    }
}

function isUpper(array) {
    return array === array.toUpperCase();
}

console.log(ourEvery(upper, isUpper));
console.log(ourEvery(lower, isUpper));
console.log(ourEvery(mixed, isUpper));

//2
function ourSome(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) { //if the guy we're up too passed the test
            return true; //return true
        }
    }
    return false;
}

console.log(ourSome(upper, isUpper));
console.log(ourSome(lower, isUpper));
console.log(ourSome(mixed, isUpper));

//3
function onlyIf(theArray, test, action) {
    theArray.forEach(element => {
        if (test(element)) {
            action(element);
        }
    });
}

console.log('onlyIf(mixed, isUpper, console.log)');
onlyIf(mixed, isUpper, console.log);

console.log('onlyIf(upper, isUpper, console.log)');
onlyIf(upper, isUpper, console.log);

console.log('onlyIf(lower, isUpper, console.log)');
onlyIf(lower, isUpper, console.log);

//4
const upperOnes = mixed.filter(isUpper);
upperOnes.forEach(elem => console.log(elem));

//5
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

//6
function getMultiplier() {
    return function (a, b) { //return a function that multiplies a and b
        return a * b;
    };
}

const theMultiplier = getMultiplier(); 
console.log(theMultiplier(2, 3));

//7
function getMultiplier2(a) { 
    return function (b) { 
        return a * b; 
    };
}

const multiplyBy5 = getMultiplier2(5);
const theProduct = multiplyBy5(2);
console.log(theProduct);