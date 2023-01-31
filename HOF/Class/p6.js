//3.forEach(): Used to visit each element. Works same as map() but returns undefined instead of new array.

let arr=[1,2,3,4,5,6]

let bag="";
arr.forEach(function(element,index){
bag+=element+" ";
});
console.log(bag);

arr.forEach(function(element,index){
console.log(element);
});

let x=arr.forEach(function(element,index){
return element;
});
console.log(x);