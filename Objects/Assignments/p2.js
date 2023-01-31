//Given a string, print the number of times each character appears.

let str="Chunnu";
let obj={};
for(let i=0;i<str.length;i++){
  if(obj[str[i]] == undefined)
  { //If key is not present,add 1.
   obj[str[i]]=1;
  }
  else 
  {//If key is present,increment.
     obj[str[i]]++;
} 
}  console.log(obj);