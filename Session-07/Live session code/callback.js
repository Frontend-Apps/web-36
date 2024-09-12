function orderFood(time, cb) {
  setTimeout(function () {
    console.log("Food order placed");
    cb(); // cb!==prepareFood() , cb == anonymous function
  }, time);
}

function prepareFood(time, cb) {
  setTimeout(function () {
    console.log("Food is being prepared");
    cb();
  }, time);
}

function deliverFood(time, cb) {
  setTimeout(function () {
    console.log("Food is on the way");
    cb();
  }, time);
}

function enjoyFood(time, cb) {
  setTimeout(function () {
    console.log("Enjoy your food");
    cb();
  }, time);
}

function rateFood(time, cb) {
  setTimeout(function () {
    console.log("Rate your order");
    cb();
  }, time);
}

function walking(time) {
  setTimeout(function () {
    console.log("Walk till your food digests");
  }, time);
}

orderFood(2000, function () {
  prepareFood(5000, function () {
    deliverFood(3000, function () {
      enjoyFood(1000, function () {
        rateFood(500, function () {
          walking(10000);
        });
      });
    });
  });
});

//callback hell - Promises

//order food -> Restaurant will prepare order -> deliver order -> enjoy food
