// Given an array of numbers find the average of all the even numbers.

let arr = [8,9,0,33,28,09,54];

let sum = 0;
let count = 0;

for(let i=0;i<=arr.length-1;i++)
  {
    if(arr[i]%2===0){
      sum+=arr[i];
      count++;
    }
  }console.log(sum/count); //sum divided by 4(count) numbers as 0 is also considered as even no.

