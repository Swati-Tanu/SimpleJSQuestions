//Norms to write code in Js

//Bad Practises
Let a ="10"; //Js is Case Sensetive.
let "x" ="10"; //Variable name cannot be string.
var first name="Aman"; //Variable name should not have space in between.

//Good Practises
let z = 15;
let x ="10";
var first_name = "Aman";

//1.Cannot start a variable name with number or symbol.
let *abc ="string";
let 12name = "string";

let abc!="abc"; //Cannot end with a symbol.

//Number in between and at end are allowed.
let ab11c="abc";
let ab11="abc";
//These are fine.

//2.Exception are $ and _
let $abc ="string";
let _abc ="string";
//They are fine.

//3.var name should be self exploratory.
var name1 = "ABC"
var name2 = "XYZ"
var name3 = "MNC"
//self exploratory.
var name1 = "ABC"
var father_name = "XYZ"
var brother_name = "XYZ"

//4.var name should not be keywords
//var,let,const,for,while,if,else
var Let ="Abc" //This will be fine as Js is case sensitive.

let first name="ABC" //Not allowed
let first_name="ABC" //Snake case variable naming
let firstName="ABC" //Camel case variable naming

