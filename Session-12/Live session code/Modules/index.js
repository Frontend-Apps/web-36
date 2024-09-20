import {
  mul as multiplication,
  addition as add,
  subs as sub,
  price,
} from "./util.js";

//default import
import xyz from "./util.js";

console.log(multiplication(1, 2, 3));
console.log(add(1, 2));
console.log(sub(10, 5));
console.log(price);
console.log(xyz(100, 2));


//named exports