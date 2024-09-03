// function statement
function javascript() {
  console.log("Welcome to JS");
}

//javascript();

// function expressions
let b = function () {
  console.log("Welcome to JS");
};

//b();

function washclothes(name, num, cb) {
  console.log(` ${name}'s ${num} Clothes are washed`);
  //cb===ironClothes
  cb(name, num);
}

function ironClothes(name, num) {
  console.log(` ${name}'s ${num} Clothes are ironed`);
}

//washclothes("Atul", 20,ironClothes);

function eatBreakfast(item, time, cb) {
  console.log(`I will eat ${item} as my breakfast at ${time}am`)
  cb();
}

function doBrush() {
  console.log("First brush your teeth");
}

eatBreakfast("idly", 9, doBrush);

// cb - HOF
// synchronous
// fb - username - 20secs , password

// Higher order functions - forEach, map, filter, reduce