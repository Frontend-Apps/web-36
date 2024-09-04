// sum of array, product of elements, total price of product

// let acc = 0; // 1, 1+2 =3, 3+3=6, 6+4=10, 10+5=15

// for (let i = 0; i < arr.length; i++) {
//   acc = acc + arr[i];
// }
// console.log(acc);

//reduce - HOf - arrays - similar to forEach, map and filter but with small change

let arr = [10, 2, 3, 4, 5];
// reduce(cb(acc,el,i,arr),initialValue)

let out = arr.reduce(function (acc, el, i, arr) {
  return acc + el;
}, 20);

console.log(out);

// 2 cases - 1. with initial value, 2. Without initial value

//Without initial value - it is taking default initial value
// initial value - 1st element in the array, acc = 10

// 1st iteration -> acc=10, el=2 -> acc+el=10+2 = 12 -> acc = 12
// 2nd iteration -> acc=12, el= 3 -> acc+el= 15  -> acc = 15
// 3rd iteration -> acc=15, el= 4 -> acc+el= 19  -> acc = 19
// 4th iteration -> acc=19, el= 5-> acc+el= 24  -> acc = 24

// With initial value

// 1st iteration -> acc=20, el=10 -> acc+el= 30  -> acc = 30
// 2nd iteration -> acc= 30, el=2 -> acc+el= 32  -> acc = 32
// 3rd iteration -> acc=32, el= 3 -> acc+el= 35  -> acc = 35
// 4th iteration -> acc=35, el= 4-> acc+el= 39  -> acc = 39
// 5th iteration -> acc=39, el= 5 -> acc+el= 44  -> acc = 44

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 700, inStock: false },
];

let total = products.reduce(function (acc, el, i, arr) {
  return acc + Number(el.price);
}, 0);

console.log(total);
