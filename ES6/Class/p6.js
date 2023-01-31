//Declare a function to calculate the sum of odd numbers in array.

let array = [1,2,4,6,3,1,5,7];

let odd = (arr) => {
  let sum = 0;
    arr.forEach((element,index) => {
    element%2!=0 ? sum+=element : null;
  });
console.log(sum);
};

odd(array);

//conventional 
/*let array = [1,2,4,6,3,1,5,7];

function odd(arr){
let sum = 0;
arr.forEach(function(element,index){
  element%2!=0 ? sum+=element : null;
});
console.log(sum);
};

odd(array)*/