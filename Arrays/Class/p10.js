//For Even or Odd Array, print the second half of the array
var names = ["A","B","C","D","E","F","G","H","K"];
let start = 0;
if(names.length%2===0){
  start = (names.length/2)
} else {
  start = Math.floor(names.length/2)
}
for(i=start;i<names.length;i++){
  console.log(names[i]);
}

//For Even or Odd Array, print the first half of the array.
if(names.length%2===0){
  end = (names.length/2)
} else {
  end = Math.floor(names.length/2)
}
for(j=0;j<end;j++){
  console.log(names[j]);
}