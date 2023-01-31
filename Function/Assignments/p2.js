//Use the above function to print the Primes from 2 to a given limit.

function checkPrime(num){
let factors=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    factors++;
  }
}if(factors==2){
  return true;
}
   return false;
}


for(let i=2;i<=15;i++){
  if(checkPrime(i)==true){
    console.log(i, "is prime");
  }
}