//Undefined concept & Default parameters.
function addition(a,b){  //fun declaration
  console.log(a,b);
    console.log(a+b);

}
addition();  //fun calling
//it will return NaN(Not a number) as js gives them value (undefined) if we don't.
addition(10); //10 will be given to a; so o/p will be 10undefined.

//If developer forget to put value of b and Since showing NaN or undefined is a bad experience, we will put a default value. So incase of missing it will take default value else it will take the given value. These are called default parameters. Look below:
function newaddition(a,b=0){  //incase we set default value to a, value still will be assigned to a.
  console.log(a,b);
    console.log(a+b);

}
newaddition(10); 
newaddition(10,20); 

//If you have assigned a default value for a parameter, it will take that value when nothing has been assigned in the calling statement.

//If we passed a value in calling statement it will take that value under consideration.
