let numbers = [2, 4, 6, 8, 10, 13, 7, 5, 3];
// [2,4,6,8,10]

// let even = [];
// numbers.map(function (el, i, arr) {
//   //console.log(el,i,arr)
//   if (el % 2 == 0) {
//     even.push(el);
//   }
// });

// console.log(even);

//filter - return an array, same syntax as map and forEach

let evenNum = function (ele) {
  return ele % 2 == 0;
};

let even = numbers.filter(evenNum);

console.log(even);

//array of objects
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];

let adults = users.filter(function (el, i, arr) {
  return el.age >= 25;
});

console.log(adults);

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 700, inStock: false },
];

let pro = products.filter((ele) => {
  return ele.inStock && ele.price >= 500;
});
console.log(pro)

// filter by color, brand, size