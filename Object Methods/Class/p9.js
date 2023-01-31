//To print additional message

var details = {
  name: "Tanu",
  age: 23,
  print: function(msg){ //msg parameter to add message: look at the calling statement.
    console.log("Hey",msg);
  }
};

let x = "There!"
details.print(x);  //Using new variable as a parameter.