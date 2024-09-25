// Constructor functions

function Iphone16(ASIN, color, display, camera, bluetooth) {
  this.ASIN = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;
  this.bluetooth = bluetooth;
}

Iphone16.prototype.dial = function () {
  return "tring....tring";
};

Iphone16.prototype.sendMessage = function () {
  return "Sending message....";
};

Iphone16.prototype.cameraClick = function () {
  return `Camera clicked with ${this.camera}`;
};

Iphone16.prototype.connectBluetooth = function () {
  return "Bluetooth connected successfully";
};

let p1 = new Iphone16(2, "Black", 6.6, "48MP", "5.0");
console.log(p1);
let p2 = new Iphone16(2, "Gold", 6.8, "66MP", "5.0");
console.log(p2);
let p3 = new Iphone16(2, "red", 6.8, "30MP", "5.0");
console.log(p3);
