/*Write code to find the absolute difference of two numbers.
Sample Input-1 12,4
Sample Output-1 8
Sample Input-2 4,18
Sample Output-2 14
NOTE: It must consist of two functions:
1. To find the difference. 
2. To find the absolute value.*/

function difference(x,y){
  return(x-y);
}

function absoluteValue(z){
  return (Math.abs(z));
}

let step1=difference(4, 18); 
let step2=absoluteValue(step1);

console.log(step2);

/*Another approach:*/
function absolute(marks1,marks2){
  let result=marks1-marks2;
  if(result<0){
    result=result*(-1);
  } return result;
}
let final=absolute(4,8);
console.log(final);