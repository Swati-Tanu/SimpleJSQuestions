//Spread Operators(Arrays & Objects)

//Rest Parameter

//Write a function to add and product all the arguments passed while calling it.

function addition(...arr){
 let sum=0; product=1;
  arr.forEach(function(element,index){
    sum+=element;
    product*=element;
  });
  console.log(sum,product);
}
addition(1,2,4)


//Create new array with elements raised to power 2.
let arr1=[2,3,4,5,6];

let new_arr=arr1.map(function(element,index){
  return element**2;
});
console.log(new_arr);
