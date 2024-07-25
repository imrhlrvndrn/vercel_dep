let express = require("express");
let app = express();

let PORT = 3000;

//Question 1: Name in Lowercase
app.get("/whisper", (req, res) => {
  let name = req.query.name.toLowerCase();
  res.send(name);
});

//Question 2: Concatinate ProductName
app.get("/fullProductname", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
});

//Question 3: Date Format
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "/" + year;
  res.send(formattedDate);
});

// Question 4: Greeting Example
app.get("/greet", (req, res) => {
  let city = req.query.city;
  let greeting = "You live in " + city;
  res.send(greeting);
});

//Question 5: Formatted capital and country name
app.get("/capital", (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let countryCapital = capital + " is the capital of " + country;
  res.send(countryCapital);
});

//Question 6: Formatted Email Address
app.get("/email", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  console.log(email);
  res.send(email);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
