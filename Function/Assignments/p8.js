/*Write a function isOdd which returns a boolean value based on the number is odd or not.

Use this function to print the odd numbers from 0 to a given limit(included).*/

function isOdd(num){
  if(num%2!=0){
   return true;
  } return false;
  }


console.log(isOdd (14));

let N=50;
for(let i=0;i<=N;i++){
  if(isOdd(i)){        //Truthy value
    console.log(i);
  }
}