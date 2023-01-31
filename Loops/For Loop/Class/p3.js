//Factorial
let n = 5;
let bag = 1; //Use 1 in place of 0 for multiplication.
for(i=1;i<=n;i++){ //Or i<=5 if not declared n.
  bag = bag*i;
}
console.log(bag);

//Calculate the avg of odd nums between 1 and 15.
let sum = 0;
let count = 0;

for(i=1;i<=15;i++){
  
  if (i%2==1){
    
    sum = sum + i;
    count++; //or count = count + 1;
  }
  i++
}
console.log(sum/count);