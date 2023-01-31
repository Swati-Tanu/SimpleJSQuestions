//Hoisting

function sayHello(){
  console.log("Hello");
}

var i = 10;
sayHello();
console.log(i);

//Another case

sayHello();
console.log(i);

function sayHello(){
  console.log("Hello");
}

var i = 10;

//Won't work using let.
sayHello();
console.log(i);

function sayHello(){
  console.log("Hello");
}

let i = 10;

