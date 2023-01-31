//To access a particular value use keys.

let details = {
  name: "Aman",
  age: 34,
  location: "Delhi",
  pincode: "110098",
  math: 54,
  eng: 33,
  phy: 88,
  chem: 67,
};

//Bracket Notation (Keys name should always be string datatypes)
console.log(details["location"]);
console.log(details["phy"]);

//Dot Notation (No need to use double quote in this)
console.log(details.location);
console.log(details.phy);


