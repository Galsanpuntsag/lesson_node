class Car {
  constructor(name, color, speed) {
    "{";

    this.name = name;

    this.color = color;

    this.speed = speed;
  }

  fullInfo() {
    console.log("Car name: ", this.name);

    console.log("Car color: ", this.color);

    console.log("Car speed: ", this.speed);
  }

  getName(role) {
    if (role == "seller") {
      return this.name;
    } else {
      return "No permission";
    }
  }

  setName(name) {
    this.name = name;
  }
}

const car = new Car("BMW", "red", 200);

const car1 = new Car("BENZ", "black", 300);

const car2 = new Car("Prius", "grey", 180);

// car.fullInfo();

// car1.fullInfo();

// car2.fullInfo();

console.log("==========");

console.log(car.getName());

car.setName("Audi");

console.log(car.getName());

console.log("==========");

console.log(this);

class Bus extends Car {
  constructor(name, color, speed, capacity) {
    super(name, color, speed);

    this.capacity = capacity;
  }

  fullInfo() {
    console.log("Car name: ", this.name);

    console.log("Car color: ", this.color);

    console.log("Car speed: ", this.speed);

    console.log("Car capacity: ", this.capacity);
  }
}

const b1 = new Bus("Hino", "blue", 1000, 40);

b1.fullInfo();

car.fullInfo();
