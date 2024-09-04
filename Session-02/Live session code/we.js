let arr = [1, 2, 3, 4, 5, 6];

// sum of cubes if number is divisible by 3 - [3,6] -> 0+3^3+216 = 243
// HOF -> filter().reduce()

let divisibleBy3 = function (el) {
  return el % 3 == 0;
};

let sum = function (acc, el, i, arr) {
  return acc + el ** 3;
};


//let res = arr.filter(divisibleBy3).reduce(sum,0)

let res = arr
  .filter(function (el) {
    return el % 3 == 0;
  })
  .reduce(function (acc, el, i, arr) {
    return acc + el ** 3;
  },0);

// let divBy3 = arr.filter(function (el) {
//   return el % 3 == 0;
// });

// let res = divBy3.reduce(function (acc, el, i, arr) {
//   return acc + el ** 3;
// }, 0);

// console.log(divBy3);
console.log(res);

// filter by men , 
