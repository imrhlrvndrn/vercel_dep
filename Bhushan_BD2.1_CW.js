let express = require("express");
let app = express();
let PORT = 3000;

let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "Male",
  age: "30",
  isMember: "true",
};

// Question 1:

app.get("/person", (req, res) => {
  res.json(person);
});

// Question 2:

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});

// Question 3:

function getFirstNameAndGender(person) {
  return {
    firstName: person.firstName,
    age: person.age,
  };
}

app.get("/person/firstname-gender", (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person);
  res.json(firstNameAndGender);
});

// Question 4:

function getIncrementAgeObject(person) {
  person.age = parseFloat(person.age) + 1;
  return person;
}

app.get("/person/increment-age", (req, res) => {
  let updatedObject = getIncrementAgeObject(person);
  res.json(updatedObject);
});

// Question 5:

function getFullNameAndMembership(person) {
  return {
    fullName: getFullName(person),
    isMember: person.isMember,
  };
}

app.get("/person/fullname-membership", (req, res) => {
  let fullNameAndMembership = getFullNameAndMembership(person);
  res.json(fullNameAndMembership);
});

// Question 6:

function getFinalPrice(cartTotal, isMember) {
  let finalPrice;
  if (isMember === "true") {
    finalPrice = cartTotal - cartTotal * 0.1;
  } else {
    finalPrice = cartTotal;
  }
  return finalPrice;
}

app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let finalPrice = getFinalPrice(cartTotal, person.isMember);
  res.json({ finalPrice: finalPrice });
});

// Question 7:

function getShippingCost(isMember, cartTotal) {
  let finalShippingCost;
  if (cartTotal > 500 && isMember === "true") {
    finalShippingCost = 0;
  } else {
    finalShippingCost = 99;
  }
  return finalShippingCost;
}

app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost = getShippingCost(person.isMember, cartTotal);
  res.json({ shippingCost: shippingCost });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
