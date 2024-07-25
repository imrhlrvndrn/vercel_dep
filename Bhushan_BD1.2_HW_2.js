let express = require("express");
let app = express();
let PORT = 3000;

// Question 1:

app.get("/bmi", (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);
  let BMI = weight / (height * height);
  res.send("Your BMI is " + BMI.toString());
});

// Question 2:

app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
  let total_price = price * units;
  res.send(
    "Your total for " + units + " " + product + " is " + total_price.toString(),
  );
});

// Question 3:

app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  res.send("Your grade in percentage is " + gradeInPercentage + "%");
});

// Question 4:

app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let billAmount = cartTotal - cartTotal * (discount / 100);
  res.send("Your bill amount is " + billAmount.toString());
});

// Question 5:

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send(
    "Each friend owes Rs. " + splitAmount.toString() + " against the bill",
  );
});

// Question 6:
app.get("/celsius-to-fahrenheit", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;
  res.send("Result: " + fahrenheit.toString() + " Fahrenheit");
});

// Question 7:

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = hourlyWage * totalHours;
  res.send("Result: Your monthly salary is ₹" + monthlySalary.toString());
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
