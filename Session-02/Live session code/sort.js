let nums = [10, 100, 4, 2, 3, 6, 8, 7];

//console.log(nums.sort(compareFn));

// callback - compare

function compareFn(a, b) {
  return a - b; // asc dsc =>b-a
}

//negative number -> a is placed before b
// positive num -> b is placed after a
// 0 -> no change

let arr = [3, 1, 5, 0];

let asc = arr.sort((a, b) => a - b);
let dsc = arr.sort((a, b) => b - a);

console.log(asc);
console.log(dsc);

let animals = ["cat", "dog", "elephant", "bee", "ant"];
let strAsc = animals.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(strAsc);

let employees = [
  { name: "john", salary: 90000, hireDate: "July 1, 2010" },
  { name: "david", salary: 75000, hireDate: "August 15, 2009" },
  { name: "ana", salary: 80000, hireDate: "December 12, 2011" },
];

employees.sort(function (a, b) {
  return b.salary - a.salary;
});

employees.sort(function (a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(employees);

