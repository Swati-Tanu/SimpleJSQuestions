//To access the name

var details = {
  name: "Tanu",
  age: 23,
  print: function(){ 
    console.log("Hey",this.name);
  }
};

details.print();

details.name="Baburao";

details.print();
