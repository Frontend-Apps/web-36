// //let details = ["Manohar", 22, "India", "Masai", 1617171, "SBIN00011"];

// // let name = details[0];
// // let age = details[1]
// // let place = details[2]
// // let company = details[3]

// // Array Destructuring ES6

// //let [name, age, place, company, accNo, IFSC] = details;

// // console.log(name);
// // console.log(age);
// // console.log(place);
// // console.log(company);
// // console.log(accNo);
// // console.log(IFSC);

// // Object destructuring

// let person = {
//   name: "Sarvam",
//   age: 22,
// };

// //let { name, age, country = "India" } = person;

// // let personName = person.name;
// // let personAge = person.age;
// console.log(name, age, country);

// let numbers = [1, 2, 3, 12];

// let [a, b, d] = numbers;

// console.log(a, b, d);

// let nums = [1, 2, 34, 5, 4, 3, 1, 1, 3, 5, 67, 3, 1, 13, 4, 5, 5, 111];

// // let [x, y, z, ...rest] = nums;
// // console.log(x, y, z);
// // console.log(rest);

// const nestedArray = [
//   [1, 2],
//   [3, 4],
// ];

// let [[x, y], [z, q]] = nestedArray;
// console.log(x, y, z, q);

const profile = {
  name: "Jane Doe",
  details: {
    age: 28,
    address: "123 Main St",
  },
};

let { name, details:{age,address} } = profile;
console.log(name, age,address)
