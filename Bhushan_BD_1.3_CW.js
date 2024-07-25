let express = require("express");
let app = express();
let PORT = 3000;

// Question 1:

app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if (number >= 0) {
    result = "Number is Positive";
  } else {
    result = "Number is Negative";
  }
  res.send(result);
});

// Question 2:

app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";

  if (number % 2 === 0) {
    result = "Number is Even";
  } else {
    result = "Number is Odd";
  }

  res.send(result);
});

// Question 3:

app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;
  let result = "";
  if (isLoggedIn === "true") {
    result = "User is logged in";
  } else {
    result = "User is not logged in";
  }
  res.send(result);
});

// Question 4:

app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result = "";
  if (age > 65) {
    result = "User is eligible for a discount";
  } else {
    result = "User is not eligible for a discount";
  }
  res.send(result);
});

// Question 5:

app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if (number > 0) {
    result = "Number is Positive";
  } else if (number < 0) {
    result = "Number is Negative";
  } else {
    result = "Number is Zero";
  }
  res.send(result);
});

// Question 6:

app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result = "";
  if (temperature < 15) {
    result = "Temperature is cold";
  } else if (temperature >= 15 && temperature <= 25) {
    result = "Temperature is warm";
  } else {
    result = "Temperature is hot";
  }
  res.send(result);
});

// Question 7:

app.get("/check-activity-level", (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result = "";

  if (steps < 5000) {
    result = "Activity level is low";
  } else if (steps <= 10000) {
    result = "Activity level is moderate";
  } else {
    result = "Activity level is high";
  }
  res.send(result);
});

// Question 8:

app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result = "";
  if (likes < 100) {
    result = "Engagement level is low";
  } else if (likes <= 500) {
    result = "Engagement level is medium";
  } else {
    result = "Engagement level is high";
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
