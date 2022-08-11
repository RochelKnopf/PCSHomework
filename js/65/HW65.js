//configure your linter to not allow var.
//declare some variables using let and const.
//do some comparisons using === and / or !== and prove you don't get free type coercion (5 == '5')...-
//make a variable be NaN and then write code that does something only if the value of the variable is NaN.

'use strict';

let x = 5;
let y = '5';

console.log(x === y);
console.log(x !== y);

const z = 'I am NaN';

if (isNaN(z)) {
    console.log(z);
}