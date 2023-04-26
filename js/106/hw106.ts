let x: number = 7;
let y: number = 14;

function addNumbers(a: number, b: number) {
    console.log(a + b);
}

interface Person {
    name: string,
    age: number
}

function printPerson(person: Person) {
    console.log(person.name, person.age);
}

class Employee implements Person {
    constructor(public name: string, public age: number, public department: string){

    }

}

const me : Employee= {
    name: "Ruchi",
    age: 21,
    department: "administrative"
}

