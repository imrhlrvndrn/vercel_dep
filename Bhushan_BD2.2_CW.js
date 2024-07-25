let express = require("express");
let app = express();
let PORT = 3000;

// Question 1:

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumber(num) {
  return num % 2 === 0;
}

app.get("/even-numbers", (req, res) => {
  let result = number.filter((num) => filterEvenNumber(num));
  res.json(result);
});

// Question 2:

let age = [10, 20, 30, 15, 17, 25];

function filterAgegreaterthan18(age) {
  return age > 18;
}

app.get("/adult-ages", (req, res) => {
  let result = age.filter((age) => filterAgegreaterthan18(age));
  res.json(result);
});

// Question 3:

let words = ["apple", "banana", "cherry", "date", "fig", "grape"];

function filterLongWords(word) {
  return word.length > 5;
}

app.get("/long-words", (req, res) => {
  let result = words.filter((word) => filterLongWords(word));
  res.json(result);
});

// Question 4:

let filesize = [50, 200, 75, 120, 30, 90, 150];

function filterSmallFiles(size, filterParam) {
  return size < filterParam;
}

app.get("/small-files", (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = filesize.filter((size) => filterSmallFiles(size, filterParam));
  res.json(result);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
