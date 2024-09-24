//object methods

const person = {
  name: "bob",
  age: 30,

  // Object method - function inside objects
  greet: function () {
    console.log("bob says hi");
  },
};

person.place = "India";
//person.greet();
person.bye = function () {
  console.log("bye");
};

//console.log(person);
//person.bye();

// Inbuilt object methods
// Object.entries()

let car = {
  make: "Suzuki",
  model: "Brezza",
  year: 2023,
};

// Object.keys() - will return an array
console.log(Object.values(car));

let scores = { sarvam: 90, atul: 87, anjali: 99 };
// return array of names whose score is > 90
let res = Object.keys(scores).filter((name) => scores[name] > 90);
console.log(res);

let out = Object.values(scores).reduce((acc, el) => acc + el, 0);
console.log(out);

//object.keys(), Object.values()

let target = { a: 1, b: 2 };
let source = { c: 3, d: 4 };
let source2 = { e: 10, a: 14 };

// {a:1,b:2,c:3,d:4}
// Object.assign(target,source1,source2,......)
let merged = Object.assign(target, source, source2);
console.log(merged);
console.log(target);

// Object.freeze()


// Object.freeze(obj);
// // existing prop cannot be changed
// obj.name = "Jane";
// obj.age = 25;

// // new prop cannot be added
// obj.place = "India";

// // you can't delete prop
// delete obj.name;


// console.log(obj);

let obj = {
    name: "john",
    age: 30,
  };
// Object.seal()
Object.seal(obj);
// existing prop can be changed
obj.name = "Jane";
obj.age = 25;

// new prop cannot be added
obj.place = "India";

// you can't delete prop
delete obj.name;


console.log(obj);
