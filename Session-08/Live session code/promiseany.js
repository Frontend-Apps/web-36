let promise1 = new Promise((resolve, reject) => {
  reject("Task-1 is not-completed");
});

let promise2 = new Promise((resolve, reject) => {
  reject("Task-2 is not-completed");
});

let promise3 = new Promise((resolve, reject) => {
  reject("Task-3 is not-completed");
});

console.log(Promise.any([promise1, promise2, promise3]));

Promise.any([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  