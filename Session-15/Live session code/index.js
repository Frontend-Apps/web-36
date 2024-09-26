// classes
class Book {
  constructor(title, author, year) {
    console.log("2");
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  }
}

// extends, super
class Magazine extends Book {
  constructor(title, year, month) {
    console.log("1");
    // this.title = title;
    // this.author = author;
    // this.year = year;
    super(title,  year);
    console.log(title);
    this.month = month;
  }
  getSummary() {
    console.log(
      `${this.title} was written by ${this.author} in ${this.year} on ${this.month}`
    );
  }
}

// let b1 = new Book("abc", "xyz", "1999");
// b1.getSummary();
let m1 = new Magazine("def", 1998, "Aug");
m1.getSummary();
