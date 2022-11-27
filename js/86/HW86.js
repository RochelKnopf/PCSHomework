'use strict';

function Vehicle(color) {
    this.color = color;
}

Vehicle.prototype.go = function (speed) {
    this.speed = speed; 
    console.log(`Go: now going at speed ${speed}`);
};

Vehicle.prototype.print = function() {
    console.log(`Print: My color: ${this.color} My speed: ${this.speed}`);
};

const car = new Vehicle('red');
car.go('65mph');
car.print();

function Plane(color){
    this.color = color;
}

Plane.prototype = Object.create(Vehicle.prototype);

Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`Go: now FLYING at speed ${speed}`);
};

const plane = new Plane('blue');
plane.go('200mph');
plane.print();