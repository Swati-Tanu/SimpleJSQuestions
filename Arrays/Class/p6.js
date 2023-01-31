//Pre record
//Arrays in Js contains different datatypes elements.
var names = ["Tanu", "Rahul", 1, 2, true, "Akki", "Ashu", "Tejas"];

console.log(names);
console.log(names.length); //To know the length of array or num of elements
console.log(names[4]);//To print a particular item, using index no. 
console.log(names[names.length-1]);//To print the last element using array length. 
console.log(names[names.length-2]);//To know 2nd last element.

//To change the value to a particular element.
names[1] = "Yogesh";
console.log(names);

//To add more elements to the same variable. push adds elements at the end of the array.
names.push(98);
names.push("Keshu");
console.log(names);
console.log(names.length);

//To remove elements from the variable. pop removes elements from the end of the array.
names.pop();
console.log(names);
console.log(names.length);
