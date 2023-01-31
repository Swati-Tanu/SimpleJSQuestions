//Write a function to determine if the number is divisible by 3 or not? if yes return true else return false.

function check(num){
  if(num%3==0){
    return true;
  } return false;
}

let store=check(13);
console.log(store);

//Using the above function determine the numbers divisible by 3 between 1 and 100.
for(let i=1;i<=10;i++){
let store=check(i);
  if (store==true){
    console.log(i, "is divisible by 3");
  }
}

//Using the above function count how many elements are divisible by 3 in the given array.

let arr=[2,3,5,6,7,8,9,12,15,20]
let count=0;
for(let i=0;i<arr.length;i++){
  let store=check(arr[i]);
  if (store==true){
    count++;
}
}
  console.log(count);