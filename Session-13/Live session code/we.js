// factory functions

function iphone16(ASIN, color, display, camera, bluetooth) {
  return {
    ASIN: ASIN,
    color: color,
    display: display,
    camera: camera,
    bluetooth: bluetooth,

    dial: function () {
      return "tring....tring";
    },

    sendMessage: function () {
      return "Sending message....";
    },

    cameraClick: function () {
      return `Camera clicked with ${this.camera}`;
    },
    connectBluetooth: function () {
      return "Bluetooth connected successfully";
    },
  };
}

let p1 = iphone16(2, "Black", 6.6, "48MP", "5.0");
console.log(p1.dial());
console.log(p1.sendMessage());
console.log(p1.cameraClick());
console.log(p1.connectBluetooth());

