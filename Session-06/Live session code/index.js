console.log("Start");

setTimeout(function() {
    console.log("Timeout 1");
}, 2000);

setTimeout(function() {
    console.log("Timeout 2");
}, 1000);

setTimeout(function() {
    console.log("Timeout 3");
}, 0);

console.log("End");

