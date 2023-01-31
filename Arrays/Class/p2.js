let arr = [1, 2, 3]

//To add new element use push property, it will always add new elements at the end.

arr.push(5);
console.log(arr);

arr.push(6, 7, 99);
console.log(arr);

//To remove the last element use pop property; no need to specify it will always delete last element.
arr.pop();
console.log(arr);

let arr1=[] //empty array;

arr1.push(5,6,7);
arr1.push(5);
arr1.push(7);
arr1.pop();
arr1.pop();
arr1.push(99);
arr1.pop();
arr1.pop();
console.log(arr1);

//Delete last 3 elements
let arr10=[1,2,3,4,5,6]
for(let i=1; i<=3; i++){
  arr10.pop()
}
console.log(arr10);