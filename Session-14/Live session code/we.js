//sitting - 30, half sleep-60, full sleep-90

// constructors

class Movie {
  constructor(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
  }
  describeMovie() {
    return `${this.title} is a film directed by ${this.director} released in ${this.releaseYear}.`;
  }
}

let m1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log(m1.describeMovie());
let m2 = new Movie("Avengers", "Jow Nolan", 2019);
console.log(m2.describeMovie());


