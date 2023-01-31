//Write an obj method to add two numbers.

//1.
let obj={        
  sum: function (){
  let a=4; b=5;
  console.log(a+b);
}
}
obj.sum(); 

//2.
let smart_obj={        
  sum: function (a,b){
  console.log(a+b);
}
}
smart_obj.sum(2,4); 

//3.
let return_obj={        
  sum: function (x,y){
  return x+y;
}
}
store=return_obj.sum(2,9); 
console.log(store);
console.log(store*10);