let form={
  name: "Tanu",
  age: 23,
  contact: "0987654321",
  location: "Mumbai",

  submit: function(){
  console.log("name:",this.name);
  console.log("age:",this.age);
  console.log("contact:",this.contact);
  console.log("location:",this.location);
  console.log("The above details has been registered");
  },
  reset: function(){
    this.name="";
    this.age="";
    this.contact="";
    this.location="";
  console.log("name:",this.name);
  console.log("age:",this.age);
  console.log("contact:",this.contact);
  console.log("location:",this.location);
  console.log("The form has been cleared");
  }
};

form.submit();
form.reset();