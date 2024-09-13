// bookcab, waitforacb, trip started, complete trip

function bookCab(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cab booked");
      resolve();
    }, time);
  });
}

function waitForCab(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cab has arrived");
      resolve();
    }, time);
  });
}

function tripStarted(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Trip has started, happy journey ");
      resolve();
    }, time);
  });
}

function completeTrip(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Trip has ended, Thanku ");
      resolve();
    }, time);
  });
}

// bookCab(2000)
//   .then(() => waitForCab(3000))
//   .then(() => tripStarted(5000))
//   .then(() => completeTrip(2000));

async function cabProcess() {
  await bookCab(2000);
  await waitForCab(3000);
  await tripStarted(5000);
  await completeTrip(2000);
}

cabProcess()