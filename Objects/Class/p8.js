//Spread Operators: creating an object using existing object.

let obj1={
  x: 10,
  y: 20
};
let obj2={
  ...obj1,
  z: 67
};
console.log(obj2);

//Copy object
let obj3 = {
  ...obj1
};
console.log(obj3);

//Joining objects together

let details={...obj1,...obj2};
console.log(details);