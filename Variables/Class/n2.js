//Assigning & Declaring of Variables
var x; //Declaration
x = 10; //Value assigning
console.log(x); 

var x = 10; //Declaring and Assigning in one line
var x = 10, y =20;

let a = 20; /*2nd keyword (method to declare variable)
Incase of var and let the values can keep changing and latest value matters not past values.*/

const adhaar = "0987654321";
console.log(adhaar);
console.log(typeof(adhaar));
//Values that you never wish to change should be used in const and datatype ideally should be string.
/*const b = 30; 3rd keyword (method to declare variable).
1.Incase of const the values cannot be changed.
2.Incase of const both declaration and value assigning should be done in single line only.
Eg.,const x; 
x = 10;
won't work.*/

let string ="123"; //String will always be stored inside "", irrespective of no., character, etc.
console.log(string);

let name = "Lena Headey";
console.log(name);

let char =123;
console.log(typeof(char));//typeof is used to know the what type of datatype is used.
console.log(typeof(name));