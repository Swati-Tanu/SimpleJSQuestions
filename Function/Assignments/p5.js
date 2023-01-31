//Write a function to replace spaces in a given string with - .

function replace(str){

let bag="";
for(let i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    bag=bag+"-";
  }else{
    bag=bag+str[i];
  }
}
console.log(bag);
}

replace("I am Iron man");