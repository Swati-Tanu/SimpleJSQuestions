let obj={
  name:"Bruce Wayne",
  age: 40,

  print: function(){
    console.log("name:",this.name);
    console.log("age:",this.age);
  }
};

obj.print();

obj.name="Clark Kent";

obj.print();
