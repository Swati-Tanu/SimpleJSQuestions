//Find the sum of elements whose occurance is 2.
let arr = [1,1,3,4,5,5,6,7,8,8];
let obj={};
//Step 1: Convert arr into obj.
for(i=0;i<arr.length;i++){
  if(obj[arr[i]] == undefined) {
  obj[arr[i]]=1;
} else {
  obj[arr[i]]++;
}
}
//Step 2: Check the keys if they have occurred two times.
let sum = 0;
for(let key in obj){
  if(obj[key]==2){
    //sum = sum + key; won't work as key is string type so + will concatenate. So to get sum we need to convert the string type key to number. Use 'Number'.
    sum=sum + Number(key);
  }
} console.log(sum); //Step 3: Print them.
