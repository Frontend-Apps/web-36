class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  //area, perimeter
  area() {
    console.log(this.height * this.width);
  }
  perimeter() {
    console.log(2 * (this.height + this.width));
  }
}

class Square extends Rectangle{
    constructor(side){
       super(side,side)
    }
}

// let c1 = new Rectangle(10,10)
// c1.area()
// c1.perimeter()
let s1 = new Square(4)
console.log(s1)
s1.perimeter()
s1.area()