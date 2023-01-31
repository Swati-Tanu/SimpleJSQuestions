//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function.

function customLastIndex(arr,element)
{
  let index = -1;
  for(let i=0;i<=arr.length;i++){
    if(arr[i]==element){
      index = i;
    }
  }
  return index;
}

let arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
let element = 'Dodo';

let answer = customLastIndex(arr,element);
console.log(answer);
