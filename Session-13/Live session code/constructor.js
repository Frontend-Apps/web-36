//factory function

function user(name, age) {
  // returning object -> factory function
  return {
    name: name,
    age: age,
    printHello() {
      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    },
  };
}

let u1 = user("kohli", 40);
u1.printHello();

let u2 = user("Dhoni", 50);
u2.printHello();

//constructor function
//1. function name should start with caps letter
function User(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;

  this.printHai = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

let c1 = new User("Rohit", 40);
c1.printHai();

// new Promise
// new URL
// new Date()

let student3 = {
  name: "Chandra",
  gender: "male",
  birthyear: 2000,

  calculateAge() {
    return 2024 - this.birthyear;
  },
};

console.log(student3.calculateAge());
//-----------------------------------
function Person(name, gender, birth) {
  this.name = name;
  this.gender = gender;
  this.birthyear = birth;

  this.calculateAge = function () {
    return 2024 - this.birthyear;
  };
}

let p1 = new Person("hardik", "Male", 1985);
console.log(p1.calculateAge());
