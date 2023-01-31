//Create a function to check if a number is Prime or Not

function checkPrime(num){
let factors=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    factors++;
  }
}if(factors==2){
  console.log(num, "is prime");
}else{
    console.log(num, "is not prime");
}
}
checkPrime(19);
checkPrime(15);