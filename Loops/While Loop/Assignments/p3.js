//Print the sum of all the multiples of 3 from 0 to the given limit
let i = 0;
let sum = 0;

while(i<=30){
  if(i%3==0){
    sum=sum+i;
  } i++;
}
console.log(sum);