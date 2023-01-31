//Declare an object with following data:
//1.name
//2.age
//3.contact
//4.location
//5.hobbies


let form={
  name: "Tanu",
  age: 23,
  contact: "0987654321",
  location: "Mumbai",
  hobbies: ["reading", "dancing", "driving", "coding"],

  print: function(){
  console.log("name:",this.name);
  console.log("age:",this.age);
  console.log("contact:",this.contact);
  console.log("location:",this.location);
  console.log("hobbies:", this.hobbies.join());//use join to print in string form with comma in place of array.
  }
};

form.print();