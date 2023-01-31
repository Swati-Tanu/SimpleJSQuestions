//For loop
for(let i =1; i<=5; i++){
  console.log(i);
}

let bag = ""; //"" is an empty string.(string type for concatenation)
for(let i =1; i<=5; i++){
  bag = bag +i; //To print them horizontally
}
  console.log(bag); //It will print only once; if inside the loop it will keep on printing

let shelf = "";
for(let x =1; x<=5; x++){
  shelf = shelf +x + " "; //To add a space
}
  console.log(shelf);

let dash = "";
for(let c = 1; c<=5; c++) {
  dash = dash +c + " - "; 
}
  console.log(dash);

//To print the result repeatedly console.log has to be inside the loop.
let pattern = "";
for(let z = 1; z<=5; z++) {
  pattern = pattern + z + " - "; 
  console.log(pattern);
}

let g = "";
for(let h = 1; h<=5; h++) {
  g = g + h + " "; 
  console.log(g);
}

let empty = 0; //(num type for addition)
for(let l =1; l<=5; l++){
  empty = empty + l; //Result will be a sum and not cancatenation.
}
console.log(empty);

