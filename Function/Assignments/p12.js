//Write a custom function that has the same behavior of inbuilt Array Join

function customJoin(arr) {
  let bag = ""
  for(let i=0;i<arr.length;i++){
    //bag+=arr[i]+" ";
    bag+=arr[i];
    //bag+=arr[i]+"-";
  }
  return bag;
}
  
let arr = ['Fire', 'Air', 'Water'];

let answer = customJoin(arr);
console.log(answer);
