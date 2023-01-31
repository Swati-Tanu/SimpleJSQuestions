//Print all the num except 20 and 14.

let arr =[9,0,99,20,76,14,9];
for(let i=0; i<=arr.length-1;i++){
  if(arr[i]==20||arr[i]==14){ //i==3 || i==5; using index num and not elements.
    continue;
    //If we know the elements we use arr[i], if we know the index no. we use i (or whatever variable we initialised in the loop.)
  }console.log(arr[i]);
}

let marks = [45,56,78,99,100];
//Calculate the total marks, percentage
let sum = 0;
let total_marks = 100*marks.length;

for(let i = 0; i<=marks.length-1;i++){
  sum = sum + marks[i];
} console.log(sum);
console.log((sum/total_marks)*100);