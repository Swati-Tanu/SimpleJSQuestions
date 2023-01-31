//Syntax of Object Methods

//Here key is print(name of function) and rest all (without name) is the value.
let obj={        
  print: function (){
  console.log("Hello World");
}
}
obj.print(); //calling the object method: access object through dot notation and calling function by its name.
obj["print"](); //bracket notation


function print(){          //syntax of function
  console.log("Hello World");
}
print();
