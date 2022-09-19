(function () {
    'use strict';

    let IDs = 0;

    const boyNames = ['Bill', 'Joe', 'Donald', 'John', 'Barack'];
    const girlNames = ['Hillary', 'Jill', 'Michele', 'Jane', 'Mary'];
    const lastNames = ['Clinton', 'Biden', 'Trump', 'Doe', 'Obama'];

    function createBoy(){
        const id = IDs++;
        const first = boyNames[Math.floor() * boyNames.length];
        const last = lastNames[Math.floor() * lastNames.length];
        const gender = 'male';

        return {
            id,
            first,
            last,
            gender
        };
    }

    function createGirl() {
        const id = IDs++;
        const first = girlNames[(Math.floor() * girlNames.length)];
        const last = lastNames[(Math.floor() * lastNames.length)];
        const gender = 'female';

        return {
            id,
            first,
            last,
            gender
        };
    }

    function printPerson(person){
        console.log(`ID: ${person.id}, First: ${person.first}, Last: ${person.last}, Gender: ${person.gender}`);
    }

    const person1 = createBoy();
    printPerson(person1);

    const person2 = createGirl();
    printPerson(person2);

})();