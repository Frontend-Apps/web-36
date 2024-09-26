//OOPs
//abstraction - hiding unnecessary details from user

//car -> brake, acceleration, speed display, gears

class Car {
  constructor(model) {
    this.model = model;
    this.speed = 0; // Speed of the car in km/h
  }

  // Method to simulate accelerating
  accelerate(increment) {
    this.speed += increment;
    console.log(
      `${this.model} is accelerating: Current speed is ${this.speed} km/h`
    );
  }

  // Method to simulate braking
  brake(decrement) {
    if (this.speed > 0 && decrement <= this.speed) {
      this.speed -= decrement;
      console.log(
        `${this.model} is braking: Current speed is ${this.speed} km/h`
      );
    } else {
      console.log(
        `${this.model} cannot brake: Speed is already 0 km/h or decrement too large.`
      );
    }
  }

  // Method to display current speed
  displaySpeed() {
    console.log(`Current speed of ${this.model} is ${this.speed} km/h`);
  }
}

let newCar = new Car("Tesla")
newCar.accelerate(50)

//encapsulation- bundling data and methods together, protect data from accidental manipulation
// bank 

//inheritance

// polymorphism -> poly-many forms -> ability of an object to take multiple forms

