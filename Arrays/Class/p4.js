//Print elements of array

let arr= [1,2,"Aman",3,4];
for(i=0;  i<=arr.length-1; i++){ //4 is the last index.
console.log(arr[i]);
  }

//Reverse loop:  
for(i=arr.length-1; i>=0; i--){
  console.log(arr[i]);
}

//Calculate last index: 
console.log(arr.length-1);

//Updating/Replacing elements in an array.

arr[1]= 99;
console.log(arr[1]);

// console.log(arr); is undefined as wrong form.
