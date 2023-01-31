//Nested object: Array inside object.
let details = {
  name: "Aman",
  age: 34,
  phone: 9876543210,
  address:{
    location: "Delhi",
    pincode: "110098",
    locality: "Kamla Nagar",
    state: "Delhi",
    hobbies: ["coding","biking","movies"]
  }
};
console.log(details);
console.log(details["address"]);
console.log(details["address"]["pincode"]);
console.log(details["address"]["hobbies"][1]);

//Using loop
for(let i=0;i<details["address"]["hobbies"].length;i++){
  console.log(details["address"]["hobbies"][i]);
}
