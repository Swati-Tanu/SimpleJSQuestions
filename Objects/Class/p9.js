//What is the frequency of each element of the array?

let arr=[7,2,7,7,3,4,2];
let obj={};

for(i=0;i<arr.length;i++)
{
  if(obj[arr[i]] == undefined) 
{
  obj[arr[i]]=1;
} else {
  obj[arr[i]]++;
  }
}
console.log(obj);
//Keys are always string.


