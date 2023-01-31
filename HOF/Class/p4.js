//Inbuilt HOF:

//1.filter(): Used to filter something out. filter() can only work on arrays. When return gives a new array.

//Q. An array is given, create one more array that contains only even number using HOF.

let arr=[1,2,3,4,5,6]

//O/p: [2,4,6]

let even_arr=arr.filter(function(element,index){
  return element%2==0;
});
console.log(even_arr);

//Syntax: filter always take function as an input and the function present in the filter always has two partameters, elements and index.