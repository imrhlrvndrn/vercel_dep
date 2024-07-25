let express = require("express");
let app = express();
let PORT = 3000;

let book = {
  title: "The God of Small Things",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
};

// Question 1:

app.get("/book", (req, res) => {
  res.json(book);
});

// Question 2:

function getfulltitleAuther(book) {
  return book.title + " by " + book.author;
}

app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAuthor = getfulltitleAuther(book);
  res.json({ fullTitleAuthor: fullTitleAuthor });
});

// Question 3:

function getGenreAndAvailability(book) {
  return {
    genre: book.genre,
    isAvailable: book.isAvailable,
  };
}

app.get("/book/genre-availability", (req, res) => {
  let genreAndAvailability = getGenreAndAvailability(book);
  res.json(genreAndAvailability);
});

// Question 4:

function getCalculateBookAge(book) {
  let currentYear = 2024;
  return currentYear - book.publicationYear;
}

app.get("/book/age", (req, res) => {
  let calculateBookAge = getCalculateBookAge(book);
  res.json({ age: calculateBookAge });
});

// Question 5:
function getBookSummary(book) {
  return {
    Title: book.title,
    Author: book.author,
    Genre: book.genre,
    Published: book.publicationYear,
  };
}

app.get("/book/summary", (req, res) => {
  let booksummary = getBookSummary(book);
  res.json({ summary: booksummary });
});

// Question 6:

function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: "In Stock", stock: book.stock };
  } else {
    return { status: "Out of Stock", Message: "Order Required" };
  }
}

app.get("/book/stock-status", (req, res) => {
  let checkStockStatuts = checkStockAndOrder(book);
  res.json(checkStockStatuts);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
