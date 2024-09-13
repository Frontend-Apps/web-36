let promise1 = new Promise((resolve, reject) => {
  resolve("Task-1 is completed");
});

let promise2 = new Promise((resolve, reject) => {
  resolve("Task-2 is completed");
});

let promise3 = new Promise((resolve, reject) => {
  reject("Task-3 is not-completed");
});

console.log(Promise.all([promise1, promise2, promise3]));

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


  // payment transaction- card num, expiry, cvv 
  // irctc -> 