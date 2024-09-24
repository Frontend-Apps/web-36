let student1 = {
  name: "Prakash",
  gender: "male",
  birthyear: 2002,

  calculateAge() {
    return 2024 - this.birthyear;
  },
};

console.log(student1.calculateAge());

let student2 = {
  name: "Sarvam",
  gender: "male",
  birthyear: 2004,

  calculateAge() {
    return 2024 - this.birthyear;
  },
};

console.log(student2.calculateAge());

let student3 = {
  name: "Chandra",
  gender: "male",
  birthyear: 2000,

  calculateAge() {
    return 2024 - this.birthyear;
  },
};

console.log(student3.calculateAge());

// factory functions -> is a function which returns a new object

function createPerson(name, gender, birth) {
  return {
    name: name,
    gender: gender,
    birthyear: birth,

    calculateAge() {
      return 2024 - this.birthyear;
    },
  };
}

let s1 = createPerson("Chandra", "male", 2004);
console.log(s1.calculateAge());

let s2 = createPerson("Sachin", "male", 1985);
console.log(s2.calculateAge());

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


