(function () {
    'use strict';

    let IDs = 0;
    const boyNames = ['Bill', 'Joe', 'Donald', 'John', 'Barack'];
    const girlNames = ['Hillary', 'Jill', 'Michele', 'Jane', 'Mary'];
    const lastNames = ['Clinton', 'Biden', 'Trump', 'Doe', 'Obama'];

    function createBoy() {
        const first = boyNames[Math.floor(Math.random() * boyNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return {
            id: IDs++,
            first: first,
            last: last,
            gender: 'male'
        };
    }

    function createGirl() {
        return {
            id: IDs++,
            first: girlNames[Math.floor(Math.random() * girlNames.length)],
            last: lastNames[Math.floor(Math.random() * lastNames.length)],
            gender: 'female'
        };
    }

    function printPerson(person) {
        console.log(`ID: ${person.id}, First: ${person.first}, Last: ${person.last}, Gender: ${person.gender}`);
    }

    const person1 = createBoy();
    printPerson(person1);

    const person2 = createBoy();
    printPerson(person2);

})();