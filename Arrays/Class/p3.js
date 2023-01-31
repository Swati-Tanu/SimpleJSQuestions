//Spread operator (...)
//Uses: 1.Creating a new array within an already existing array. 2. One array can be copied inside another. 3. arrays can be concatenated together.

let arr1 = [1,2,3,4];
let arr2 = [...arr1, 5,6,7]//Spreading of an array inside another array.
console.log(arr2);
let arr6 =  [arr1, 5,6,7]//If spread op not used the output will have bracket.
console.log(arr6);

let arr3=[1,2,3,...arr1,5,6,7];
console.log(arr3);

console.log(arr3.length);

let arr4 = [...arr3]; //copied
console.log(arr4);

let arr5 = [...arr1,...arr3]; //concatenation; no need to use + op.