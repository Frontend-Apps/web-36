function orderFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Food order placed");
      resolve();
    }, time);
  });
}

function prepareFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Food is being prepared");
      reject("Food preparation failed");
    }, time);
  });
}

function deliverFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Food is on the way");
      resolve();
    }, time);
  });
}

function enjoyFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Enjoy your food");
      resolve();
    }, time);
  });
}

function rateFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Rate your order");
      resolve();
    }, time);
  });
}

function walking(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Walking till your food digests");
    }, time);
  });
}

// orderFood(1000)
//   .then(() => prepareFood(5000))
//   .then(() => deliverFood(3000))
//   .then(() => enjoyFood(1000))
//   .then(() => rateFood(2000))
//   .then(() => walking(5000))
//   .catch((err) => console.log(err));

// Async await

async function foodProcess() {
  try {
    await orderFood(1000);
    await prepareFood(5000);
    await enjoyFood(1000);
    await rateFood(2000);
    await walking(5000);
  } catch (error) {
    console.log(error);
  }
}

foodProcess();
