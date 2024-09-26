// static methods
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayUserDetails() {
    console.log(`user is ${this.name} and Age is ${this.age}`);
  }

  //encapsulation
  static displayGreeting() {
    console.log("Welcome to Masai");
  }
}

let u1 = new User("Ashwani", 24);
console.log(u1);
// u1.displayGreeting();
// u1.displayUserDetails();

class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}

Admin.displayGreeting()
// staic methods can be accessed when you are extending from parent class
// and cannot be accesses if you are creating a new instance of class