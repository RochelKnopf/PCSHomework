class Vehicle {
    constructor(color) {
        this.color = color;
    }
    go(speed) {
        this.speed = speed;
        console.log(`now going ${this.speed} MPH`);
    }
    print(){
        console.log(`Color: ${this.color}, Speed: ${this.speed}`);
    }
}

const v1 = new Vehicle('red');
v1.go(65);
v1.print();

class Plane extends Vehicle {
    constructor(color) {
        super(color);
    }
    go(speed) {
        this.speed = speed;
        console.log(`now FLYING ${this.speed} MPH`);
    }
}

const p1 = new Plane('blue');
p1.go(25000);
p1.print();