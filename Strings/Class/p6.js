//Count all names starting from A

let arr = ["Chunnu","Munnu", "Dholu", "Bholu", "Aman", "Ankita"];

let count=0;
for(i=0;i<=arr.length-1;i++)
  {
    if(arr[i][0]=="A"){
      count++;
    }
  }
console.log(count);

//console.log(arr[2][3]); //to print 'l' from 'Dholu'.

