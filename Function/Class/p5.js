//Return: It will give back the answer to calling statement instead of printing it.

function ram(x,y) {
  return x+y; //return helps in storing the result rather than printing.
}

let aman=ram(10,5);

console.log(aman*5);//Another operation further can be performed on that stored result.

//Ram performs addition of 2 nums.
//Shyam will take take the ans from Ram and perform multiplication on it.
//Raju took the ans from Shyam and divided it by 10.
//Baburao took the ans from Raju and added 10 to it.
function ram(a,b) {  //Declaration
  return a+b;
}
function shyam(x) {  //Declaration
  return x*5;
}
function raju(y) {   //Declaration
  return y/10;
}
function baburao(z) {  //Declaration
  return (z+10);
}

let step1=ram(10,10);    //Calling
let step2=shyam(step1);  //Calling
let step3=raju(step2);   //Calling
let step4=baburao(step3);  //Calling

console.log(step4);  