//Arrays

let emp_names = ["Aman", "Chunnu", "Munnu"]; 

/*Adv of arrays are:
1. Declare only one var.
2. It has continous memory allocation, i.e., organised manner storage.*/

console.log(emp_names);

//Strings can be stored in "" as well as '' in Js.
let a = "X";
let b = 'X';

//Any type of datatypes can be used in one var in array simultaneously in Js.
let arr = [1, 2 , "Aman", "Chunnu", 4, 5, "Munnu"];
console.log(arr);

//To print just one element. Also index always starts with 0.
console.log(emp_names[2]);
console.log(arr[1]);

//Count of elements of the array - length property of an array.
console.log(emp_names.length);
console.log(arr.length);

//Last index number - (length-1)
console.log(emp_names.length-1);
console.log(arr.length-1);

//To print element present at last index
console.log(emp_names[emp_names.length-1]);//i.e., emp_names[2]
console.log(arr[arr.length-1]);//i.e., emp_names[7]

