//How to update a particular value?
let details = {
  name: "Aman",
  age: 34,
  location: "Delhi",
  pincode: "110098",
  math: 54,
  eng: 33,
  phy: 88,
  chem: 67,
  hobbies: ["Reading", "Playing guitar"] //Always use array for more than one value in a key.
};

details["name"]="Ajay"; //Go to that key using bracket notation and update a new value, similar to array.

details["profession"]="Developers" //How to add a particular value?

//1. If the key is present in the object it gets updated.
//2. If the key is not present in the object it gets added.

console.log(details);


