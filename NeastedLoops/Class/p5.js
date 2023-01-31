//Farm 1: *
//Farm 2: * *
//Farm 3: * * *
//Farm 4: * * * *
//Farm 5: * * * * *

//Process-Planting; Repetation-5;

for(j=1;j<=5;j++){
 let bag="";
  for(let i=1;i<=j;i++){ //Run the inner loop outer loop times, i.e., (i<=j).
    bag=bag+"*"+" ";
 } console.log(bag);
}