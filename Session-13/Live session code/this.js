
// "this" inside global scope
console.log(this); // window object
console.log(window == this);
// this refers to window object in global scope in browser environment

//------------------------
// "this" inside function
function greet() {
  console.log(this, "inside function");
  console.log(this == window);
}
//this inside function also refers to window object in non-strict mode
//this inside function is undefined in strict mode.
// non strict -> undefined is being replaced by window object -> "this" substitution

greet();

// value of "this" inside object method
let person = {
  name: "Jack",
  age: 25,

  greet1() {
    console.log(this);
  },
};

person.greet1();

// inside object method "this" refers to nearest parent object
