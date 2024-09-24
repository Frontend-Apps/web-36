//factory functions
let student3 = {
  name: "Chandra",
  gender: "male",
  birthyear: 2000,

  calculateAge() {
    return 2024 - this.birthyear;
  },
};

console.log(student3.calculateAge());

// constructor functions
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

//classes
class Person_class {
  constructor(name, gender, birth) {
    console.log("inside constructor");
    this.name = name;
    this.gender = gender;
    this.birthyear = birth;

    this.calculateAge = function () {
      return 2024 - this.birthyear;
    };
  }
}

let pc1 = new Person_class("Bumrah", "male", 1991);
console.log(pc1);
