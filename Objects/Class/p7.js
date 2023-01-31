//Loops in object (for...in as we have keys in objects not index or length)

let details = {
  name: "Aman",
  age: 34,
  location: "Delhi",
  pincode: "110098",
  math: 54,
  eng: 33,
  phy: 88,
  chem: 67
};

/*console.log(details["name"]);
console.log(details["age"]);
console.log(details["location"]);
console.log(details["pincode"]);
console.log(details["math"]);
console.log(details["eng"]);
console.log(details["phy"]);
console.log(details["chem"]);*/

for(let i in details){
  console.log(i); //To print the keys.
  console.log(details[i]); //To print the values. Dot notation don't work here.
  console.log(i,details[i]); //To print both keys and values.
  console.log(i+" : "+details[i]);
  console.log(details);
}