//Count all names that contain "A" or "a".

let arr = ["Chunnu","Ajay", "Dholu", "Bholu", "Aman", "Ankita"];

let count=0;
for(let i=0;i<=arr.length-1;i++)
  {
    for(j=0;j<=arr[i].length-1;j++)
    if(arr[i][j]=="A"|| arr[i][j]=="a"){
      count++; 
      break; //In order to get all the "A"s and "a"s remove break. o/p in this case will be 6 then.
    }
  }
console.log(count);