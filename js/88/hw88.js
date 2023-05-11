(function () {
    'use strict';

    class Person {
        #age = 0;

        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get age() {
            return this.#age;
        }

        set age(value) {
            if (typeof value !== 'number' || value < 0 || value > 120) {
                throw new Error('Age must be a number between 0 and 120');
            }
            this.#age = value;
        }

        toString() {
            return `First: ${this.firstName}, Last: ${this.lastName}, Age: ${this.age}`;
        }

    }

    class Student extends Person {
        constructor(firstName, lastName, age, grade) {
            super(firstName, lastName, age);
            this.grade = grade;
        }
    }

    const joe = new Person('Joe', 'Biden', 87);
    console.log(joe.toString());

})();