// classes

class Iphone16 {
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;

    this.dial = function () {
      return "tring....tring";
    };

    this.sendMessage = function () {
      return "Sending message....";
    };

    this.cameraClick = function () {
      return `Camera clicked with ${this.camera}`;
    };
    this.connectBluetooth = function () {
      return "Bluetooth connected successfully";
    };
  }
}

let p1 = new Iphone16(2, "Black", 6.6, "48MP", "5.0");

console.log(p1.dial());
console.log(p1.sendMessage());
console.log(p1.cameraClick());
console.log(p1.connectBluetooth());



class Promise{
    constructor(resolve,reject){
        this.resolve = function(){
            
        }
    }
}


new Promise((resolve,reject))