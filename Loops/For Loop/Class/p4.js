//Use of break;

for(i=1;i<=8;i++){

  if(i==4){
    break;
  }
  console.log(i);
}

//Use of continue; (skip)
for(let a=1;a<=5;a++){

  if(a==3){
   continue;
  }
  console.log(a);
}

/*Incase of while loop continue gives an output of infinity as it goes to the condition directly.

Incase of for loop continue gives an output while if condition is true it skip that bit and it goes to the iteration and continue with next i++/i--.

Incase of break in either loops it gets out of the loop and go with further instruction if given, if not the code stops.*/