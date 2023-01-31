//2.map(): Used for mapping elements. When return gives a new array.

let arr=[1,2,3,4,5,6]

let bag="";
arr.map(function(element,index){
bag+=element+" ";
});
console.log(bag);

arr.map(function(element,index){
console.log(element);
});

let x=arr.map(function(element,index){
return element
});
console.log(x); //Took all the index and gave as an array.

