//1
//*
//1 2
//* *
//1 2 3
//* * *
//1 2 3 4
//* * * *
//1 2 3 4 5
//* * * * *

for(j=1;j<=5;j++){
 let bag1="";
  let bag2="";
  for(let i=1;i<=j;i++){ 
    bag1=bag1+i+" ";
    bag2=bag2+"*"+" ";
 }console.log(bag1);
  console.log(bag2);
}

