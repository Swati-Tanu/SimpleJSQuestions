//Add 3 numbers.

//Conventional method

let a = 10;
let b = 20;
let c = 30;
console.log(a+b+c);

//Function: Dumb function.

function addition(){
  let a = 10;
let b = 20;
let c = 30;
console.log(a+b+c);
}

addition();

//Function: Smart function.

function addition(a,b,c){
console.log(a+b+c);
}

addition(10,20,30);

//A variable with an anonymous function as value.

let addition = function (a,b,c){
console.log(a+b+c);
}

addition(10,20,30);

//ES6 : Arrow Function (Short-hand Notation)

let addition = (a,b,c) => {
  console.log(a+b+c);
}

addition(10,20,30);
