//Write a custom function that has the same behavior of inbuilt Array Slice Function.

function customSlice(arr,index){
  let bag = [];
  for(let i=0;i<arr.length;i++){
    if(i>=index){
      bag.push(arr[i]);
    }
  }return bag;
}

let arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let index = 2;

let answer = customSlice(arr,index);
console.log(answer);