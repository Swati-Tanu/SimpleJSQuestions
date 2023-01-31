//Given an array of string count the overall total number of characters.

let arr = ["Chunnu", "Munnu", "Dholu", "Bholu"];

let sum = 0;
for(i=0;i<=arr.length-1;i++)
{
  sum = sum + arr[i].length;
} 
console.log(sum);