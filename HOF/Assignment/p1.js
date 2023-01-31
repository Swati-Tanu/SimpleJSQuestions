//Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let odd_arr=arr.filter(function(element,index){
  return index%2!=0;
});

function sumArray(arr){
  let sum=0;
  for(let i=0;i<odd_arr.length;i++){
    sum=sum+odd_arr[i];
  }
  return sum;
}

console.log(sumArray(arr));
