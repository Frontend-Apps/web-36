const car = {
  type: "Car",
  wheels: 4,
};

const bike = {
  type: "Bike",
  wheels: 2,
};

const vehicleMethods = {
  startEngine() {
    console.log(`${this.type} engine started.`);
  },
  stopEngine() {
    console.log(`${this.type} engine stopped.`);
  },
};

// 1. __proto__
// car.__proto__ = vehicleMethods;
// bike.__proto__ = vehicleMethods;

// console.log(car);

// car.startEngine();
// car.stopEngine();

// bike.startEngine();
// bike.stopEngine();

// setPrototypeOf(car,vehicle)
Object.setPrototypeOf(car,vehicleMethods)
Object.setPrototypeOf(bike,vehicleMethods)
car.startEngine();
car.stopEngine();
console.log(car)
bike.startEngine();
bike.stopEngine();
