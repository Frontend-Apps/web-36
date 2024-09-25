// classes

class Iphone16 {
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }

  dial() {
    return "tring...tring";
  }
  sendMessage(){
    return "Sending message....."
  }
}



let p1 = new Iphone16(2, "Black", 6.6, "48MP", "5.0");
console.log(p1);
let p2 = new Iphone16(2, "Gold", 6.8, "66MP", "5.0");
console.log(p2);
let p3 = new Iphone16(2, "red", 6.8, "30MP", "5.0");
console.log(p3);
