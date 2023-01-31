//Inbuilt on Arrays & Strings.

//Arrays
const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
//To search for index.
console.log(animals.indexOf('bison'));
console.log(animals.indexOf('bison',2));
console.log(animals.lastIndexOf('bison'));
console.log(animals.indexOf('bison',3));

let arr=[1,2,3,4,5]
//Output: 1 2 3 4 5
console.log(arr.join(" "));
console.log(arr.join(""));
console.log(arr.join("-"));
console.log(arr.join()); 
console.log(arr.join("$"));

/*array.pop & array.push
array.shift & array.unshift*/

//String

let str="masai";
console.log(str.toUpperCase());

let str1 ="MASAI"
console.log(str1.toLowerCase());

let str2="I am ironman";
console.log(str2.includes("ironman"));//To find something
console.log(str2.includes("Ironman"));//Case sensitive

console.log(str2.startsWith("ironman"));//To know the start.
console.log(str2.startsWith("I"));

let store=str2.startsWith("I");
if(store==true){
  console.log("Yes");
}else{
    console.log("No");
}

console.log(str2.endsWith("ironman")); //To know the end.







