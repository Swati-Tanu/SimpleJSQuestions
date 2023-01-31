let n =10;
let bag=0;
while(n>bag)
  {
     console.log(++bag);
    n--;
  }

//1-2-3-4-5

let a = "";
for(i=1;i<=5;i++){
  if(i<5){
    a = a+i+"-";
  }else{
    a = a+i;
  }
} console.log(a);

//5-4-3-2-1
let c = "";
for(i=5;i>=1;i--){
  if(i>1){
    c = c+i+"-";
  }else{
    c = c+i;
  }
} console.log(c);
