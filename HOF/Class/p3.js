//HOF: When a function is accepting another function as parameter or returning a function, those functions are called higher order function.

//Fuction as an argument and parameter.

let brush=function (){
  console.log("Please brush your teeth");
}

function eatBreakfast(item,time,brush){
  brush();
  console.log("I will eat"+" "+item+" "+"as my breakfast"+" "+"at"+" "+time);
}
eatBreakfast("idli",9,brush);  //invoking the function: invoking is a technical term for calling a function.

//Order of parameter and argument matters.

//Here eatBreakfast is a HOF.

//Anonymous functions are the once who doesn't have any name.

//A function that is passed as a parameter/arguments in a HOF is called callbacks. Eg brush().