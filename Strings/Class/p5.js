//Convert only first "D" to "R".
let str = "DonalD";

let empty="";

for(l=0;l<=str.length-1;l++)
  {
    if (str[l]=="D"  && l==0)
    {
      empty = empty + "R";
    } else {
      empty = empty + str[l];
    }
  } 
console.log(empty);