/*Write code to calculate the average of an array.
If there are no items in the array it should return 0.

NOTE: Create a function to find the sum of elements in an array and use that function to find out the average.*/

function sumArray(arr){
      let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
}

let arr=[2,4,6]
let store=(sumArray(arr))
console.log(store);

let arr1=[2,4,6,8];
let count=0;
  for(let i=0;i<arr1.length;i++){
    count++;
  }
console.log(sumArray(arr1)/count);

