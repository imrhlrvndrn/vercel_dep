let express = require("express");
let app = express();
let PORT = 3000;

// Question 1:

function generateProfileUrl(username) {
  return " https://github.com/" + username;
}

app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

// Question 2:

function generateCertificate(firstName, lastName, courseName) {
  return (
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName
  );
}

app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

// Question 3:

function calculateGrade(maths, science, english) {
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  return "Your grade in percentage is " + gradeInPercentage + "%";
}

app.get("/grade", (req, res) => {
  let maths = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  res.send(calculateGrade(maths, science, english).toString());
});

// Question 4:

function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return " Result: Each friend owes Rs. " + splitAmount + " against the bill";
}

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends).toString());
});

// Question 5:

function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage).toString());
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
