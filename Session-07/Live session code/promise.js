let myPromise = new Promise(function (resolve, reject) {
  resolve("Got drinks, prepare table");
  reject("No drinks, prepare dessert");
});

// myPromise
//   .then((resoleValue) => console.log(resoleValue))
//   .catch((rejectValue) => console.log(rejectValue));

//console.log(myPromise);

let completedAssignment = new Promise((resolve, reject) => {
  let isCompleted = true;
  if (isCompleted) {
    resolve("Completed assignment");
  } else {
    reject("Assignment is pending");
  }
});

console.log(completedAssignment);

completedAssignment
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
