let str = "Donald" //Alter it to Ronald.

str[0] = "R";
console.log(str); //This is not possible by this method in string. Strings are immutable, altered, change, replaced, converted etc.

//1st approach: 
//Step1 - Let's convert the string to array.
let arr = [];

for(i=0;i<=str.length-1;i++)
  {
  arr.push(str[i]);    
  }
console.log(arr);

//Step2 - Converting D to R.
arr[0] = "R";

//Step3 - Converting array to string
let bag="";

for(j=0; j<=arr.length-1;j++)
  {
    bag=bag+arr[j];
    
  } console.log(bag);

//2nd approach

let empty="";

for(l=0;l<=str.length-1;l++)
  {
    if (l===0)
    {
      empty = empty + "R";
    } else {
      empty = empty + str[l];
    }
  } 
console.log(empty);