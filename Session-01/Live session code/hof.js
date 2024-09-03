let sweets = ["kova", "Laddu", "GulabJamun", "Barfi", "Halwa"];

for (let i = 0; i < sweets.length; i++) {
  //console.log(i,sweets[i],sweets)
}

//forEach - Arrays
//let box = [];

sweets.forEach(function (el, i) {
  //box.push(el);
});
//console.log(box);

//console.log(x);

// forEach and map has same syntax
// forEach will return undefined, map will return an array

let numbers = [1, 2, 3, 4, 5]; // [2,4,6,8,10]
let x = "10";
console.log(Number(x));
//map(Number)
let out = numbers.map(function (el) {
  return el * 2;
});

//console.log(out);

//forEach

let box = [];

numbers.forEach(function (el) {
  box.push(el * 2);
});

//console.log(box);

let scores = "10 30 55 66 77";

let myNumberFn = function (el) {
    return Number(el);
  }

let input = scores.split(" ").map(Number);
console.log(input);

//map and forEach - Filter reduce and sorting


