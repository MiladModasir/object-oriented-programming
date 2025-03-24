/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSumary = function () {
  return `${this.title} Written in ${this.year} is a ${this.genre}`;
};

Book.prototype.isClassic = function () {
  if (this.year > 50) {
    return true;
  } else {
    return false;
  }
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;

  return `Genre updated to ${newGenre}`;
};

const myBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
console.log(myBook);
console.log(myBook.getSumary());
console.log(myBook.isClassic());
console.log(myBook.changeGenre("Classic Literature"));
