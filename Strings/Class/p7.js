//Remove a char from String.
var str = "Masai";
let bag="";
for(i=0;i<str.length;i++){
  if(str[i]!=="s"){
    bag=bag+str[i];
  }
}console.log(bag);