let promise1 = new Promise((resolve, reject) => {
  resolve("Task-1 is completed");
});

let promise2 = new Promise((resolve, reject) => {
  reject("Task-2 is not-completed");
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Task-3 is completed");
});

console.log(Promise.allSettled([promise1, promise2, promise3]));
Promise.allSettled([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//settled - either resolved or rejected
