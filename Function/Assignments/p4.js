//Write a function to check if the char is a small case or not.

function checkChar(char){

let lower="qwertyuiopasdfghjklzxcvbnm";
let flag=false;

for(let i=0;i<=lower.length-1;i++){
  if(char==lower[i]){
    flag=true;
   break;
  }
}

  
if(flag==true){
  console.log("Yes");
}else{
  console.log("No");
}
}

checkChar("T"); 
