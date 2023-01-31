//Write a custom function that has the same behavior of inbuilt Array Includes Function.

function customIncludes(arr,element){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==element){
      return true;
    }
  }return false;
}

let arr = [1, 2, 3];
let element = 0;
let answer = customIncludes(arr,element);
console.log(answer);