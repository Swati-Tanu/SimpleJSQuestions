let details = {
  name: "Aman",
  age: 34,
  location: "Delhi",
  pincode: "110098",
  math: 54,
  eng: 33,
  phy: 88,
  chem: 67,
  hobbies: ["Reading", "Playing guitar"]
};

console.log(details["hobbies"]);

/*Since the hobbies is an array, so in output it will be printed with bracket.*/
console.log(details["hobbies"][0]);
console.log(details.hobbies[0]);
/*Also we can use indexing and print just one element since it is an array.*/